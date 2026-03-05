import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../data/question.model';

export interface DailyGoalState {
  date: string;                   // yyyy-mm-dd
  challengeDoneToday:   boolean;
  topicsCompletedToday: number;
  qotdAnsweredToday:    boolean;
}

@Injectable({ providedIn: 'root' })
export class DailyEngagementService {
  private dataService = inject(DataService);

  private readonly LS_KEY = 'daily_engagement_state';

  /** Today's date string — set once at construction; good for a session */
  private readonly today = new Date().toISOString().split('T')[0];

  /** Tracks the previous completedTopicIds size to detect new completions */
  private prevTopicSize = -1;

  // ─── State ─────────────────────────────────────────────────────────────────

  dailyState = signal<DailyGoalState>(this.loadOrInit());

  constructor() {
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
  }

  markChallengeComplete(): void {
    this.dailyState.update(s => ({ ...this.ensureToday(s), challengeDoneToday: true }));
    this.persist();
  }

  markTopicComplete(): void {
    this.dailyState.update(s => {
      const base = this.ensureToday(s);
      return { ...base, topicsCompletedToday: base.topicsCompletedToday + 1 };
    });
    this.persist();
  }

  // ─── Helpers ───────────────────────────────────────────────────────────────

  /** Returns a fresh state for today if the stored date is stale */
  private ensureToday(s: DailyGoalState): DailyGoalState {
    if (s.date === this.today) return s;
    return {
      date: this.today,
      challengeDoneToday:   false,
      topicsCompletedToday: 0,
      qotdAnsweredToday:    false
    };
  }

  private loadOrInit(): DailyGoalState {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) {
        const parsed: DailyGoalState = JSON.parse(raw);
        if (parsed.date === this.today) return parsed;
      }
    } catch { /* malformed JSON — reset */ }

    return {
      date: this.today,
      challengeDoneToday:   false,
      topicsCompletedToday: 0,
      qotdAnsweredToday:    false
    };
  }

  private persist(): void {
    localStorage.setItem(this.LS_KEY, JSON.stringify(this.dailyState()));
  }
}
