import {
  CORE_JAVA_QUESTIONS,
  MICROSERVICES_QUESTIONS,
  MULTITHREADING_QUESTIONS,
  SPRING_BOOT_QUESTIONS
} from "./chunk-QFFHBMTJ.js";
import {
  AuthService,
  Firestore,
  doc,
  getDoc,
  setDoc
} from "./chunk-YU6DDDO5.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/daily-challenge.service.ts
var CACHE_KEY = "daily_challenge_cache";
var COMPLETION_KEY = "daily_challenge_completed";
var FALLBACK_POOL = [
  ...CORE_JAVA_QUESTIONS,
  ...SPRING_BOOT_QUESTIONS,
  ...MULTITHREADING_QUESTIONS,
  ...MICROSERVICES_QUESTIONS
];
var DailyChallengeService = class _DailyChallengeService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  todayChallenge = signal(null, ...ngDevMode ? [{ debugName: "todayChallenge" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  get todayKey() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  isCompletedToday() {
    return localStorage.getItem(COMPLETION_KEY) === this.todayKey;
  }
  async loadTodayChallenge() {
    const cached = this.getCached();
    if (cached) {
      this.todayChallenge.set(cached);
      return cached;
    }
    this.loading.set(true);
    try {
      const ref = doc(this.firestore, `daily_challenges/${this.todayKey}`);
      const snap = await getDoc(ref);
      let challenge;
      if (snap.exists()) {
        challenge = snap.data();
      } else {
        challenge = this.generateFallback();
      }
      this.todayChallenge.set(challenge);
      this.saveCache(challenge);
      return challenge;
    } catch {
      const fallback = this.generateFallback();
      this.todayChallenge.set(fallback);
      return fallback;
    } finally {
      this.loading.set(false);
    }
  }
  async markCompleted(xpEarned) {
    localStorage.setItem(COMPLETION_KEY, this.todayKey);
    const user = this.authService.user();
    if (!user)
      return;
    const ref = doc(this.firestore, `daily_challenge_results/${user.uid}_${this.todayKey}`);
    await setDoc(ref, {
      uid: user.uid,
      date: this.todayKey,
      xpEarned,
      completedAt: /* @__PURE__ */ new Date()
    }).catch(() => {
    });
  }
  getQuestionsForToday() {
    const challenge = this.todayChallenge();
    if (!challenge)
      return this.generateFallback().questionIds.map((id) => FALLBACK_POOL.find((q) => q.id === id)).filter(Boolean);
    return challenge.questionIds.map((id) => FALLBACK_POOL.find((q) => q.id === id)).filter((q) => !!q);
  }
  generateFallback() {
    const shuffled = [...FALLBACK_POOL].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 5);
    return {
      date: this.todayKey,
      questionIds: picked.map((q) => q.id),
      title: "Daily Java Challenge",
      category: "Mixed"
    };
  }
  getCached() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw)
        return null;
      const data = JSON.parse(raw);
      return data.date === this.todayKey ? data : null;
    } catch {
      return null;
    }
  }
  saveCache(challenge) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(challenge));
  }
  static \u0275fac = function DailyChallengeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyChallengeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DailyChallengeService, factory: _DailyChallengeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyChallengeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DailyChallengeService
};
//# sourceMappingURL=chunk-KPDXCHUA.js.map
