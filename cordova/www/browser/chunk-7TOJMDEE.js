import {
  NotificationService
} from "./chunk-KHYVC3NX.js";
import {
  AuthService,
  Firestore,
  doc,
  getDoc,
  setDoc
} from "./chunk-YU6DDDO5.js";
import {
  Capacitor
} from "./chunk-QYTOD3XC.js";
import {
  Injectable,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/services/rating.service.ts
var dynamicImport = new Function("specifier", "return import(specifier)");
var RatingService = class _RatingService {
  LS_KEY = "rating_prompted";
  LEVEL_GATE = 5;
  DC_GATE = 5;
  get alreadyPrompted() {
    return localStorage.getItem(this.LS_KEY) === "1";
  }
  /** Call after the user levels up. */
  checkAfterLevel(level) {
    if (level >= this.LEVEL_GATE)
      this.tryPrompt();
  }
  /** Call after completing a daily challenge.
   *  @param totalCompleted  Cumulative daily challenges done. */
  checkAfterDailyChallenge(totalCompleted) {
    if (totalCompleted >= this.DC_GATE)
      this.tryPrompt();
  }
  async tryPrompt() {
    if (this.alreadyPrompted)
      return;
    if (!Capacitor.isNativePlatform())
      return;
    try {
      const { RateApp } = await dynamicImport("@capacitor-community/rate-app");
      await RateApp.requestReview();
      localStorage.setItem(this.LS_KEY, "1");
    } catch {
    }
  }
  static \u0275fac = function RatingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RatingService, factory: _RatingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/gamification.service.ts
var GamificationService = class _GamificationService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  notifService = inject(NotificationService);
  ratingSvc = inject(RatingService);
  // --- Signals for State ---
  xp = signal(0, ...ngDevMode ? [{ debugName: "xp" }] : []);
  streak = signal(0, ...ngDevMode ? [{ debugName: "streak" }] : []);
  lastActiveDate = signal(null, ...ngDevMode ? [{ debugName: "lastActiveDate" }] : []);
  // --- Computed Values ---
  level = computed(() => Math.floor(Math.sqrt(this.xp() / 100)) + 1, ...ngDevMode ? [{ debugName: "level" }] : []);
  xpToNextLevel = computed(() => {
    const nextLevel = this.level() + 1;
    return Math.pow(nextLevel - 1, 2) * 100 - this.xp();
  }, ...ngDevMode ? [{ debugName: "xpToNextLevel" }] : []);
  levelProgress = computed(() => {
    const currentLevelBaseXp = Math.pow(this.level() - 1, 2) * 100;
    const nextLevelBaseXp = Math.pow(this.level(), 2) * 100;
    const levelSpan = nextLevelBaseXp - currentLevelBaseXp;
    const progressIntoLevel = this.xp() - currentLevelBaseXp;
    if (levelSpan === 0)
      return 0;
    return progressIntoLevel / levelSpan * 100;
  }, ...ngDevMode ? [{ debugName: "levelProgress" }] : []);
  constructor() {
    this.loadState();
    this.checkStreak();
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.syncWithCloud(user.uid);
      }
    });
    effect(() => {
      this.saveState();
      this.saveToCloud();
    });
  }
  checkStreak() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const last = this.lastActiveDate();
    if (!last)
      return;
    const lastDate = new Date(last);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays > 1) {
      this.streak.set(0);
    }
  }
  // --- Core Logic ---
  addXp(amount) {
    this.xp.update((val) => val + amount);
    this.updateStreak();
    this.ratingSvc.checkAfterLevel(this.level());
  }
  updateStreak() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const last = this.lastActiveDate();
    if (last === today)
      return;
    if (last) {
      const lastDate = new Date(last);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays === 1) {
        this.streak.update((s) => s + 1);
      } else {
        this.streak.set(1);
      }
    } else {
      this.streak.set(1);
    }
    this.lastActiveDate.set(today);
    this.notifService.requestPermissionAndSchedule(this.streak());
  }
  // --- Persistence ---
  loadState() {
    const storedXp = localStorage.getItem("game_xp");
    const storedStreak = localStorage.getItem("game_streak");
    const storedLastDate = localStorage.getItem("game_last_active");
    if (storedXp)
      this.xp.set(parseInt(storedXp, 10));
    if (storedStreak)
      this.streak.set(parseInt(storedStreak, 10));
    if (storedLastDate)
      this.lastActiveDate.set(storedLastDate);
  }
  saveState() {
    localStorage.setItem("game_xp", this.xp().toString());
    localStorage.setItem("game_streak", this.streak().toString());
    if (this.lastActiveDate()) {
      localStorage.setItem("game_last_active", this.lastActiveDate());
    }
  }
  async syncWithCloud(uid) {
    const docRef = doc(this.firestore, `gamification/${uid}`);
    try {
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        const cloudXp = data["xp"] || 0;
        if (cloudXp > this.xp())
          this.xp.set(cloudXp);
        this.streak.set(data["streak"] || 0);
        this.lastActiveDate.set(data["lastActiveDate"] || null);
      }
    } catch (e) {
      console.error("Cloud sync failed", e);
    }
  }
  async saveToCloud() {
    const user = this.authService.user();
    if (!user)
      return;
    const docRef = doc(this.firestore, `gamification/${user.uid}`);
    try {
      await setDoc(docRef, {
        xp: this.xp(),
        streak: this.streak(),
        lastActiveDate: this.lastActiveDate(),
        lastUpdated: /* @__PURE__ */ new Date()
      }, { merge: true });
      this.updateLeaderboard(user);
    } catch (e) {
    }
  }
  async updateLeaderboard(user) {
    const leaderRef = doc(this.firestore, `leaderboard/${user.uid}`);
    try {
      await setDoc(leaderRef, {
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL || null,
        points: this.xp(),
        // Using XP as 'points' for leaderboard
        lastUpdated: /* @__PURE__ */ new Date()
      }, { merge: true });
    } catch (e) {
      console.error("Leaderboard sync failed", e);
    }
  }
  static \u0275fac = function GamificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GamificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GamificationService, factory: _GamificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GamificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  RatingService,
  GamificationService
};
//# sourceMappingURL=chunk-7TOJMDEE.js.map
