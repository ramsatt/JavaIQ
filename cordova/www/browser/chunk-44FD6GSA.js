import {
  GamificationService
} from "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import {
  AuthService,
  Firestore,
  doc,
  setDoc
} from "./chunk-YU6DDDO5.js";
import {
  Injectable,
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
//# sourceMappingURL=chunk-44FD6GSA.js.map
