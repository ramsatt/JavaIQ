import {
  AuthService,
  DataService,
  Firestore,
  doc,
  getDoc,
  setDoc
} from "./chunk-2WD52FID.js";
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
} from "./chunk-VBTVL2BZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/services/notification.service.ts
var NotificationService = class _NotificationService {
  LS_KEY = "notifications_enabled";
  NOTIFICATION_ID = 1001;
  DEFAULT_HOUR = 18;
  // 6 PM local time
  DEFAULT_MINUTE = 0;
  notificationsEnabled = signal(localStorage.getItem(this.LS_KEY) !== "false", ...ngDevMode ? [{ debugName: "notificationsEnabled" }] : []);
  // ─── Public API ────────────────────────────────────────────────────────────
  /**
   * Called on first meaningful XP gain after login.
   * Requests permission lazily (not on cold app open) and then schedules.
   */
  async requestPermissionAndSchedule(streak) {
    if (!Capacitor.isNativePlatform())
      return;
    if (!this.notificationsEnabled())
      return;
    try {
      const { LocalNotifications } = await import("./chunk-2CYKMYIN.js");
      const perm = await LocalNotifications.requestPermissions();
      if (perm.display !== "granted")
        return;
      await this.scheduleReminder(streak);
    } catch (e) {
      console.warn("[NotificationService] Permission request failed", e);
    }
  }
  /**
   * (Re)schedule tomorrow's daily reminder.
   * Safe to call multiple times — cancels any existing reminder first.
   */
  async scheduleReminder(streak) {
    if (!Capacitor.isNativePlatform())
      return;
    if (!this.notificationsEnabled())
      return;
    try {
      const { LocalNotifications } = await import("./chunk-2CYKMYIN.js");
      await LocalNotifications.cancel({
        notifications: [{ id: this.NOTIFICATION_ID }]
      });
      const scheduledAt = /* @__PURE__ */ new Date();
      scheduledAt.setDate(scheduledAt.getDate() + 1);
      scheduledAt.setHours(this.DEFAULT_HOUR, this.DEFAULT_MINUTE, 0, 0);
      const body = streak > 1 ? `\u{1F525} Your ${streak}-day streak is waiting! Keep the momentum going.` : `\u{1F4DA} Jump back into JavaIQ \u2014 your Java journey awaits!`;
      await LocalNotifications.schedule({
        notifications: [{
          id: this.NOTIFICATION_ID,
          title: "JavaIQ",
          body,
          schedule: { at: scheduledAt },
          smallIcon: "ic_stat_icon_config_sample",
          iconColor: "#1B4332"
        }]
      });
    } catch (e) {
      console.warn("[NotificationService] Schedule failed", e);
    }
  }
  /** Toggle notifications on/off from settings. */
  async toggle(enabled) {
    this.notificationsEnabled.set(enabled);
    localStorage.setItem(this.LS_KEY, enabled ? "true" : "false");
    if (!enabled && Capacitor.isNativePlatform()) {
      try {
        const { LocalNotifications } = await import("./chunk-2CYKMYIN.js");
        await LocalNotifications.cancel({
          notifications: [{ id: this.NOTIFICATION_ID }]
        });
      } catch {
      }
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/gamification.service.ts
var GamificationService = class _GamificationService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  notifService = inject(NotificationService);
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

// src/app/services/achievement.service.ts
var ACHIEVEMENT_DEFINITIONS = [
  // ── Streak ──────────────────────────────────────────────────────────────────
  {
    id: "streak-7",
    title: "7-Day Streak",
    description: "Opened the app 7 days in a row",
    icon: "bi-fire",
    iconColor: "#f97316",
    rarity: "common"
  },
  {
    id: "streak-30",
    title: "30-Day Streak",
    description: "Maintained a 30-day learning streak",
    icon: "bi-fire",
    iconColor: "#ef4444",
    rarity: "rare"
  },
  {
    id: "streak-100",
    title: "100-Day Champion",
    description: "100 consecutive days of learning",
    icon: "bi-trophy-fill",
    iconColor: "#FFD700",
    rarity: "legendary"
  },
  // ── Learning ────────────────────────────────────────────────────────────────
  {
    id: "topic-first",
    title: "First Step",
    description: "Completed your first tutorial topic",
    icon: "bi-book-fill",
    iconColor: "#10b981",
    rarity: "common"
  },
  {
    id: "topic-10",
    title: "Quick Learner",
    description: "Completed 10 tutorial topics",
    icon: "bi-layers-fill",
    iconColor: "#3b82f6",
    rarity: "common"
  },
  {
    id: "course-done",
    title: "Course Complete",
    description: "Finished an entire course",
    icon: "bi-award-fill",
    iconColor: "#8b5cf6",
    rarity: "rare"
  },
  // ── Challenge ───────────────────────────────────────────────────────────────
  {
    id: "combo-10",
    title: "Combo Master",
    description: "10 correct answers in a row in a single challenge",
    icon: "bi-lightning-fill",
    iconColor: "#eab308",
    rarity: "rare"
  },
  {
    id: "speed-demon",
    title: "Speed Demon",
    description: "Answered all 10 questions with under 5 seconds average",
    icon: "bi-stopwatch-fill",
    iconColor: "#06b6d4",
    rarity: "epic"
  },
  // ── Assessment ──────────────────────────────────────────────────────────────
  {
    id: "assess-pass",
    title: "First Pass",
    description: "Scored 70% or higher on an assessment",
    icon: "bi-patch-check-fill",
    iconColor: "#10b981",
    rarity: "common"
  },
  {
    id: "assess-100",
    title: "Perfect Score",
    description: "Scored 100% on an assessment",
    icon: "bi-star-fill",
    iconColor: "#FFD700",
    rarity: "epic"
  },
  // ── Social ──────────────────────────────────────────────────────────────────
  {
    id: "top-10",
    title: "Top 10",
    description: "Ranked in the top 10 on the global leaderboard",
    icon: "bi-people-fill",
    iconColor: "#8b5cf6",
    rarity: "legendary"
  }
];
var AchievementService = class _AchievementService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  gamService = inject(GamificationService);
  // one-way, no circular
  dataService = inject(DataService);
  // one-way, no circular
  LS_KEY = "achievements_state";
  /** Full achievement list with unlock state */
  achievements = signal(this.loadFromLocal(), ...ngDevMode ? [{ debugName: "achievements" }] : []);
  /** Emits the most recently unlocked achievement for the toast overlay */
  justUnlocked = signal(null, ...ngDevMode ? [{ debugName: "justUnlocked" }] : []);
  constructor() {
    effect(() => {
      const streak = this.gamService.streak();
      if (streak > 0)
        this.checkStreakAchievements(streak);
    });
    effect(() => {
      const size = this.dataService.completedTopicIds().size;
      if (size > 0)
        this.checkTopicAchievements(size);
    });
  }
  // ─── Public check methods ──────────────────────────────────────────────────
  checkStreakAchievements(streak) {
    if (streak >= 7)
      this.unlockById("streak-7");
    if (streak >= 30)
      this.unlockById("streak-30");
    if (streak >= 100)
      this.unlockById("streak-100");
  }
  checkTopicAchievements(totalCompleted) {
    if (totalCompleted >= 1)
      this.unlockById("topic-first");
    if (totalCompleted >= 10)
      this.unlockById("topic-10");
  }
  checkCourseCompletion() {
    this.unlockById("course-done");
  }
  /**
   * @param maxCombo      Highest consecutive correct streak in the session
   * @param totalTimeMs   Total ms taken across all answered questions
   * @param totalAnswered Number of questions answered (for avg calculation)
   */
  checkChallengeAchievements(maxCombo, totalTimeMs, totalAnswered) {
    if (maxCombo >= 10)
      this.unlockById("combo-10");
    if (totalAnswered > 0 && totalTimeMs / totalAnswered < 5e3) {
      this.unlockById("speed-demon");
    }
  }
  checkAssessmentAchievements(score) {
    if (score >= 70)
      this.unlockById("assess-pass");
    if (score >= 100)
      this.unlockById("assess-100");
  }
  checkLeaderboardAchievement(rank) {
    if (rank <= 10)
      this.unlockById("top-10");
  }
  clearJustUnlocked() {
    this.justUnlocked.set(null);
  }
  // ─── Core unlock logic ─────────────────────────────────────────────────────
  unlockById(id) {
    const existing = this.achievements().find((a) => a.id === id);
    if (existing?.unlockedAt)
      return;
    const today = (/* @__PURE__ */ new Date()).toISOString();
    this.achievements.update((list) => list.map((a) => a.id === id ? __spreadProps(__spreadValues({}, a), { unlockedAt: today }) : a));
    const unlocked = this.achievements().find((a) => a.id === id);
    this.justUnlocked.set(unlocked);
    this.persistLocal();
    this.syncToFirestore();
  }
  // ─── Persistence ───────────────────────────────────────────────────────────
  loadFromLocal() {
    try {
      const raw = localStorage.getItem(this.LS_KEY);
      if (raw) {
        const savedMap = JSON.parse(raw);
        return ACHIEVEMENT_DEFINITIONS.map((def) => __spreadProps(__spreadValues({}, def), {
          unlockedAt: savedMap[def.id] ?? null
        }));
      }
    } catch {
    }
    return ACHIEVEMENT_DEFINITIONS.map((def) => __spreadProps(__spreadValues({}, def), { unlockedAt: null }));
  }
  persistLocal() {
    const map = {};
    this.achievements().forEach((a) => {
      map[a.id] = a.unlockedAt;
    });
    localStorage.setItem(this.LS_KEY, JSON.stringify(map));
  }
  async syncToFirestore() {
    const user = this.authService.user();
    if (!user)
      return;
    const docRef = doc(this.firestore, `achievements/${user.uid}`);
    const map = {};
    this.achievements().forEach((a) => {
      map[a.id] = a.unlockedAt;
    });
    try {
      await setDoc(docRef, map, { merge: true });
    } catch {
    }
  }
  static \u0275fac = function AchievementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AchievementService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AchievementService, factory: _AchievementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AchievementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AchievementService
};
//# sourceMappingURL=chunk-SGPMYDTE.js.map
