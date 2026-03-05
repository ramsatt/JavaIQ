import { Injectable, signal, computed } from '@angular/core';
import { Question } from '../data/question.model';

interface WrongEntry {
  id: number;
  missedAt: string;   // ISO date
  missCount: number;
}

@Injectable({ providedIn: 'root' })
export class WrongAnswerService {
  private readonly LS_KEY = 'wrong_answers_v1';

  /** Map of questionId → WrongEntry for questions answered incorrectly */
  private entries = signal<Map<number, WrongEntry>>(this.loadFromStorage());

  /** Total questions in the review queue */
  reviewCount = computed(() => this.entries().size);

  /** IDs in the review queue, sorted by most recently missed */
  reviewIds = computed((): number[] =>
    [...this.entries().values()]
      .sort((a, b) => b.missedAt.localeCompare(a.missedAt))
      .map(e => e.id)
  );

  /**
   * Record a wrong answer for a question.
   * Idempotent per session — increments missCount on repeat misses.
   */
  recordMiss(questionId: number): void {
    const map = new Map(this.entries());
    const existing = map.get(questionId);
    if (existing) {
      map.set(questionId, {
        ...existing,
        missedAt: new Date().toISOString(),
        missCount: existing.missCount + 1
      });
    } else {
      map.set(questionId, {
        id: questionId,
        missedAt: new Date().toISOString(),
        missCount: 1
      });
    }
    this.entries.set(map);
    this.persist();
  }

  /**
   * Remove a question from the review queue (user got it right on review).
   */
  clearMiss(questionId: number): void {
    const map = new Map(this.entries());
    map.delete(questionId);
    this.entries.set(map);
    this.persist();
  }

  /**
   * Filter a question pool to only those in the review queue.
   * Useful for surfacing a "Review Mode" challenge.
   */
  filterReviewQuestions(pool: Question[]): Question[] {
    const ids = new Set(this.reviewIds());
    return pool.filter(q => ids.has(q.id));
  }

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
  }

  // ── Persistence ─────────────────────────────────────────────────────────

  private loadFromStorage(): Map<number, WrongEntry> {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (!raw) return new Map();
      const arr: WrongEntry[] = JSON.parse(raw);
      return new Map(arr.map(e => [e.id, e]));
    } catch {
      return new Map();
    }
  }

  private persist(): void {
    const arr = [...this.entries().values()];
    localStorage.setItem(this.LS_KEY, JSON.stringify(arr));
  }
}
