import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Question } from '../data/question.model';

export interface DailyGoalState {
  date: string;                     // yyyy-mm-dd
  challengeDoneToday:   boolean;
  topicsCompletedToday: number;
  qotdAnsweredToday:    boolean;
  dailyMockSessionsStarted: number; // # of mock interview sessions started today
}

@Injectable({ providedIn: 'root' })
export class DailyEngagementService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private dataService = inject(DataService);

  private readonly LS_KEY = 'daily_engagement_state';

  /** Today's date string — set once at construction; good for a session */
  private readonly today = new Date().toISOString().split('T')[0];

  /** Tracks the previous completedTopicIds size to detect new completions */
  private prevTopicSize = -1;

  // ─── State ─────────────────────────────────────────────────────────────────

  dailyState = signal<DailyGoalState>(this.loadOrInit());

  constructor() {
    // Load from Firestore whenever the user signs in
    effect(() => {
      const user = this.authService.user();
      if (user) this.loadFromFirestore(user.uid);
    });

    // Reactively watch completedTopicIds size — increment today count when it grows
    effect(() => {
      const size = this.dataService.completedTopicIds().size;
      if (this.prevTopicSize >= 0 && size > this.prevTopicSize) {
        // New topic(s) completed in this session
        const added = size - this.prevTopicSize;
        for (let i = 0; i < added; i++) this.markTopicComplete();
      }
      this.prevTopicSize = size;
    });
  }

  // ─── Computed ──────────────────────────────────────────────────────────────

  /**
   * Today's Question of the Day.
   * Deterministic: same question for the entire calendar day.
   * Uses a stable pool (not sorted by revealed status).
   */
  qotdQuestion = computed((): Question | null => {
    const pool = this.dataService.getAllQuestionsStable();
    if (pool.length === 0) return null;
    const dateInt = parseInt(this.today.replace(/-/g, ''), 10);
    return pool[dateInt % pool.length];
  });

  isQotdAnsweredToday = computed((): boolean => {
    const s = this.dailyState();
    return s.date === this.today && s.qotdAnsweredToday;
  });

  challengeDoneToday = computed((): boolean => {
    const s = this.dailyState();
    return s.date === this.today && s.challengeDoneToday;
  });

  topicsCompletedTodayCount = computed((): number => {
    const s = this.dailyState();
    return s.date === this.today ? s.topicsCompletedToday : 0;
  });

  /** 0–3: how many of the 3 daily tasks are done */
  dailyGoalProgress = computed((): number => {
    const s = this.dailyState();
    if (s.date !== this.today) return 0;
    let done = 0;
    if (s.challengeDoneToday)        done++;
    if (s.topicsCompletedToday >= 2) done++;
    if (s.qotdAnsweredToday)         done++;
    return done;
  });

  readonly dailyGoalTotal = 3;

  // ─── Mutations ─────────────────────────────────────────────────────────────

  markQotdAnswered(): void {
    this.dailyState.update(s => ({ ...this.ensureToday(s), qotdAnsweredToday: true }));
    this.persist();
    this.saveToFirestore();
  }

  markChallengeComplete(): void {
    this.dailyState.update(s => ({ ...this.ensureToday(s), challengeDoneToday: true }));
    this.persist();
    this.saveToFirestore();
  }

  markTopicComplete(): void {
    this.dailyState.update(s => {
      const base = this.ensureToday(s);
      return { ...base, topicsCompletedToday: base.topicsCompletedToday + 1 };
    });
    this.persist();
    this.saveToFirestore();
  }

  /** Increment the mock session counter for today and return the new count. */
  incrementMockSession(): number {
    this.dailyState.update(s => {
      const base = this.ensureToday(s);
      return { ...base, dailyMockSessionsStarted: (base.dailyMockSessionsStarted ?? 0) + 1 };
    });
    this.persist();
    this.saveToFirestore();
    return this.dailyState().dailyMockSessionsStarted;
  }

  /** How many mock interview sessions the user has started today. */
  get dailyMockCount(): number {
    const s = this.dailyState();
    return s.date === this.today ? (s.dailyMockSessionsStarted ?? 0) : 0;
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  /** Returns a fresh state for today if the stored date is stale */
  private ensureToday(s: DailyGoalState): DailyGoalState {
    if (s.date === this.today) return s;
    return {
      date: this.today,
      challengeDoneToday:         false,
      topicsCompletedToday:       0,
      qotdAnsweredToday:          false,
      dailyMockSessionsStarted:   0
    };
  }

  private loadOrInit(): DailyGoalState {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) {
        const parsed: DailyGoalState = JSON.parse(raw);
        if (parsed.date === this.today) return {
          ...parsed,
          dailyMockSessionsStarted: parsed.dailyMockSessionsStarted ?? 0
        };
      }
    } catch { /* malformed JSON — reset */ }

    return {
      date: this.today,
      challengeDoneToday:         false,
      topicsCompletedToday:       0,
      qotdAnsweredToday:          false,
      dailyMockSessionsStarted:   0
    };
  }

  private persist(): void {
    localStorage.setItem(this.LS_KEY, JSON.stringify(this.dailyState()));
  }

  private async loadFromFirestore(uid: string): Promise<void> {
    try {
      const snap = await getDoc(doc(this.firestore, `daily_engagement/${uid}`));
      if (!snap.exists()) return;
      const data = snap.data() as DailyGoalState;
      // Only apply if the stored date is today (preserve daily reset behavior)
      if (data.date === this.today) {
        this.dailyState.set({
          ...data,
          dailyMockSessionsStarted: data.dailyMockSessionsStarted ?? 0
        });
        this.persist();
      }
    } catch { /* offline — silent fail */ }
  }

  private async saveToFirestore(): Promise<void> {
    const user = this.authService.user();
    if (!user) return;
    try {
      await setDoc(doc(this.firestore, `daily_engagement/${user.uid}`),
        { ...this.dailyState(), lastUpdated: new Date() },
        { merge: true }
      );
    } catch { /* offline — silent fail */ }
  }
}
