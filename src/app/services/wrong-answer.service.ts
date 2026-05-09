import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { Question } from '../data/question.model';
import { PurchaseService } from './purchase.service';
import { SpacedRepetitionService, SRCard, today } from '../features/review/spaced-repetition.service';

export interface WrongEntry {
  id:       number;
  missedAt: string;   // ISO date
  missCount: number;
  // SM-2 spaced-repetition fields (defaulted for pre-SR entries on load)
  nextReviewDate: string;
  interval:       number;
  easeFactor:     number;
  repetitions:    number;
}

@Injectable({ providedIn: 'root' })
export class WrongAnswerService {
  private readonly LS_KEY = 'wrong_answers_v1';
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private purchaseSvc = inject(PurchaseService);
  private srSvc = inject(SpacedRepetitionService);

  /** Map of questionId → WrongEntry for questions answered incorrectly */
  private entries = signal<Map<number, WrongEntry>>(this.loadFromStorage());

  /** Total questions in the review queue (includes hidden items for Lite users) */
  reviewCount = computed(() => this.entries().size);

  /** IDs in the review queue, sorted by most recently missed.
   *  Lite users see only the 20 most recent; Pro users see all. */
  reviewIds = computed((): number[] => {
    const all = [...this.entries().values()]
      .sort((a, b) => b.missedAt.localeCompare(a.missedAt))
      .map(e => e.id);
    return this.purchaseSvc.isProOrTrial() ? all : all.slice(0, 20);
  });

  /** Number of review items hidden behind the Pro paywall for Lite users. */
  hiddenReviewCount = computed((): number => {
    if (this.purchaseSvc.isProOrTrial()) return 0;
    return Math.max(0, this.entries().size - 20);
  });

  constructor() {
    // Load from Firestore whenever the user signs in
    effect(() => {
      const user = this.authService.user();
      if (user) this.loadFromFirestore(user.uid);
    });
  }

  /**
   * Record a wrong answer for a question.
   * Idempotent per session — increments missCount on repeat misses.
   */
  recordMiss(questionId: number): void {
    const map = new Map(this.entries());
    const existing = map.get(questionId);
    const srDefaults = SpacedRepetitionService.defaults();
    if (existing) {
      map.set(questionId, {
        ...existing,
        missedAt: new Date().toISOString(),
        missCount: existing.missCount + 1,
        // Reset SR interval to review soon again
        nextReviewDate: today(),
        interval:       1,
      });
    } else {
      map.set(questionId, {
        id: questionId,
        missedAt: new Date().toISOString(),
        missCount: 1,
        ...srDefaults,
      });
    }
    this.entries.set(map);
    this.persist();
    this.saveToFirestore();
  }

  /**
   * Apply an SM-2 quality grade to a card after a review session.
   * quality: 0 = Still Learning, 2 = Hard, 5 = Got It
   */
  applyReview(questionId: number, quality: 0 | 2 | 5): void {
    const map = new Map(this.entries());
    const entry = map.get(questionId);
    if (!entry) return;

    if (quality === 5) {
      // Perfect recall — if interval pushes past 21 days, graduate out of queue
      const result = this.srSvc.review(entry, quality);
      if (result.interval >= 21) {
        map.delete(questionId);
      } else {
        map.set(questionId, { ...entry, ...result });
      }
    } else {
      const result = this.srSvc.review(entry, quality);
      map.set(questionId, { ...entry, ...result });
    }

    this.entries.set(map);
    this.persist();
    this.saveToFirestore();
  }

  /**
   * Remove a question from the review queue (user got it right on review).
   */
  clearMiss(questionId: number): void {
    const map = new Map(this.entries());
    map.delete(questionId);
    this.entries.set(map);
    this.persist();
    this.saveToFirestore();
  }

  /**
   * Filter a question pool to only those in the review queue.
   * Useful for surfacing a "Review Mode" challenge.
   */
  /**
   * Filter a question pool to only those due for review today (SR-aware).
   * Lite users capped at 20; Pro/trial users see all due cards.
   */
  filterReviewQuestions(pool: Question[]): Question[] {
    const t = today();
    const dueEntries = [...this.entries().values()]
      .filter(e => e.nextReviewDate <= t)
      .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate));

    const limited = this.purchaseSvc.isProOrTrial()
      ? dueEntries
      : dueEntries.slice(0, 20);

    const ids = new Set(limited.map(e => e.id));
    return pool.filter(q => ids.has(q.id));
  }

  /** Count of cards due for review today. */
  dueTodayCount = computed((): number => {
    const t = today();
    return [...this.entries().values()].filter(e => e.nextReviewDate <= t).length;
  });

  /**
   * Is this question in the review queue?
   */
  isMissed(questionId: number): boolean {
    return this.entries().has(questionId);
  }

  /**
   * Clear all wrong answers (e.g., after completing a full review session).
   */
  clearAll(): void {
    this.entries.set(new Map());
    localStorage.removeItem(this.LS_KEY);
    this.saveToFirestore();
  }

  // ── Persistence ─────────────────────────────────────────────────────────

  private loadFromStorage(): Map<number, WrongEntry> {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (!raw) return new Map();
      const arr: Partial<WrongEntry>[] = JSON.parse(raw);
      // Migrate: fill SR defaults for entries that predate spaced repetition
      const migrated: WrongEntry[] = arr.map(e => ({
        ...SpacedRepetitionService.defaults(),
        ...e,
      } as WrongEntry));
      return new Map(migrated.map(e => [e.id, e]));
    } catch {
      return new Map();
    }
  }

  private persist(): void {
    const arr = [...this.entries().values()];
    localStorage.setItem(this.LS_KEY, JSON.stringify(arr));
  }

  private async loadFromFirestore(uid: string): Promise<void> {
    try {
      const snap = await getDoc(doc(this.firestore, `wrong_answers/${uid}`));
      if (!snap.exists()) return;
      const raw: Partial<WrongEntry>[] = snap.data()['entries'] || [];
      // Migrate: fill SR defaults for entries that predate spaced repetition
      const cloudEntries: WrongEntry[] = raw.map(e => ({
        ...SpacedRepetitionService.defaults(),
        ...e,
      } as WrongEntry));
      // Union merge: take max missCount between local and cloud
      const merged = new Map(this.entries());
      cloudEntries.forEach(ce => {
        const local = merged.get(ce.id);
        if (!local || ce.missCount > local.missCount) {
          merged.set(ce.id, ce);
        }
      });
      this.entries.set(merged);
      this.persist();
    } catch { /* offline — silent fail */ }
  }

  private async saveToFirestore(): Promise<void> {
    const user = this.authService.user();
    if (!user) return;
    try {
      await setDoc(doc(this.firestore, `wrong_answers/${user.uid}`), {
        entries: [...this.entries().values()],
        lastUpdated: new Date()
      }, { merge: true });
    } catch { /* offline — silent fail */ }
  }
}
