import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/services/wrong-answer.service.ts
var WrongAnswerService = class _WrongAnswerService {
  LS_KEY = "wrong_answers_v1";
  /** Map of questionId → WrongEntry for questions answered incorrectly */
  entries = signal(this.loadFromStorage(), ...ngDevMode ? [{ debugName: "entries" }] : []);
  /** Total questions in the review queue */
  reviewCount = computed(() => this.entries().size, ...ngDevMode ? [{ debugName: "reviewCount" }] : []);
  /** IDs in the review queue, sorted by most recently missed */
  reviewIds = computed(() => [...this.entries().values()].sort((a, b) => b.missedAt.localeCompare(a.missedAt)).map((e) => e.id), ...ngDevMode ? [{ debugName: "reviewIds" }] : []);
  /**
   * Record a wrong answer for a question.
   * Idempotent per session — increments missCount on repeat misses.
   */
  recordMiss(questionId) {
    const map = new Map(this.entries());
    const existing = map.get(questionId);
    if (existing) {
      map.set(questionId, __spreadProps(__spreadValues({}, existing), {
        missedAt: (/* @__PURE__ */ new Date()).toISOString(),
        missCount: existing.missCount + 1
      }));
    } else {
      map.set(questionId, {
        id: questionId,
        missedAt: (/* @__PURE__ */ new Date()).toISOString(),
        missCount: 1
      });
    }
    this.entries.set(map);
    this.persist();
  }
  /**
   * Remove a question from the review queue (user got it right on review).
   */
  clearMiss(questionId) {
    const map = new Map(this.entries());
    map.delete(questionId);
    this.entries.set(map);
    this.persist();
  }
  /**
   * Filter a question pool to only those in the review queue.
   * Useful for surfacing a "Review Mode" challenge.
   */
  filterReviewQuestions(pool) {
    const ids = new Set(this.reviewIds());
    return pool.filter((q) => ids.has(q.id));
  }
  /**
   * Is this question in the review queue?
   */
  isMissed(questionId) {
    return this.entries().has(questionId);
  }
  /**
   * Clear all wrong answers (e.g., after completing a full review session).
   */
  clearAll() {
    this.entries.set(/* @__PURE__ */ new Map());
    localStorage.removeItem(this.LS_KEY);
  }
  // ── Persistence ─────────────────────────────────────────────────────────
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (!raw)
        return /* @__PURE__ */ new Map();
      const arr = JSON.parse(raw);
      return new Map(arr.map((e) => [e.id, e]));
    } catch {
      return /* @__PURE__ */ new Map();
    }
  }
  persist() {
    const arr = [...this.entries().values()];
    localStorage.setItem(this.LS_KEY, JSON.stringify(arr));
  }
  static \u0275fac = function WrongAnswerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WrongAnswerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WrongAnswerService, factory: _WrongAnswerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WrongAnswerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  WrongAnswerService
};
//# sourceMappingURL=chunk-GSWVROYK.js.map
