import {
  DataService
} from "./chunk-CTHSCSLP.js";
import {
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/services/daily-engagement.service.ts
var DailyEngagementService = class _DailyEngagementService {
  dataService = inject(DataService);
  LS_KEY = "daily_engagement_state";
  /** Today's date string — set once at construction; good for a session */
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  /** Tracks the previous completedTopicIds size to detect new completions */
  prevTopicSize = -1;
  // ─── State ─────────────────────────────────────────────────────────────────
  dailyState = signal(this.loadOrInit(), ...ngDevMode ? [{ debugName: "dailyState" }] : []);
  constructor() {
    effect(() => {
      const size = this.dataService.completedTopicIds().size;
      if (this.prevTopicSize >= 0 && size > this.prevTopicSize) {
        const added = size - this.prevTopicSize;
        for (let i = 0; i < added; i++)
          this.markTopicComplete();
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
  qotdQuestion = computed(() => {
    const pool = this.dataService.getAllQuestionsStable();
    if (pool.length === 0)
      return null;
    const dateInt = parseInt(this.today.replace(/-/g, ""), 10);
    return pool[dateInt % pool.length];
  }, ...ngDevMode ? [{ debugName: "qotdQuestion" }] : []);
  isQotdAnsweredToday = computed(() => {
    const s = this.dailyState();
    return s.date === this.today && s.qotdAnsweredToday;
  }, ...ngDevMode ? [{ debugName: "isQotdAnsweredToday" }] : []);
  challengeDoneToday = computed(() => {
    const s = this.dailyState();
    return s.date === this.today && s.challengeDoneToday;
  }, ...ngDevMode ? [{ debugName: "challengeDoneToday" }] : []);
  topicsCompletedTodayCount = computed(() => {
    const s = this.dailyState();
    return s.date === this.today ? s.topicsCompletedToday : 0;
  }, ...ngDevMode ? [{ debugName: "topicsCompletedTodayCount" }] : []);
  /** 0–3: how many of the 3 daily tasks are done */
  dailyGoalProgress = computed(() => {
    const s = this.dailyState();
    if (s.date !== this.today)
      return 0;
    let done = 0;
    if (s.challengeDoneToday)
      done++;
    if (s.topicsCompletedToday >= 2)
      done++;
    if (s.qotdAnsweredToday)
      done++;
    return done;
  }, ...ngDevMode ? [{ debugName: "dailyGoalProgress" }] : []);
  dailyGoalTotal = 3;
  // ─── Mutations ─────────────────────────────────────────────────────────────
  markQotdAnswered() {
    this.dailyState.update((s) => __spreadProps(__spreadValues({}, this.ensureToday(s)), { qotdAnsweredToday: true }));
    this.persist();
  }
  markChallengeComplete() {
    this.dailyState.update((s) => __spreadProps(__spreadValues({}, this.ensureToday(s)), { challengeDoneToday: true }));
    this.persist();
  }
  markTopicComplete() {
    this.dailyState.update((s) => {
      const base = this.ensureToday(s);
      return __spreadProps(__spreadValues({}, base), { topicsCompletedToday: base.topicsCompletedToday + 1 });
    });
    this.persist();
  }
  // ─── Helpers ───────────────────────────────────────────────────────────────
  /** Returns a fresh state for today if the stored date is stale */
  ensureToday(s) {
    if (s.date === this.today)
      return s;
    return {
      date: this.today,
      challengeDoneToday: false,
      topicsCompletedToday: 0,
      qotdAnsweredToday: false
    };
  }
  loadOrInit() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === this.today)
          return parsed;
      }
    } catch {
    }
    return {
      date: this.today,
      challengeDoneToday: false,
      topicsCompletedToday: 0,
      qotdAnsweredToday: false
    };
  }
  persist() {
    localStorage.setItem(this.LS_KEY, JSON.stringify(this.dailyState()));
  }
  static \u0275fac = function DailyEngagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyEngagementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DailyEngagementService, factory: _DailyEngagementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyEngagementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  DailyEngagementService
};
//# sourceMappingURL=chunk-ZIBGLWLK.js.map
