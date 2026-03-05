import {
  DailyEngagementService
} from "./chunk-ZIBGLWLK.js";
import {
  AuthService,
  Firestore,
  doc,
  getDoc
} from "./chunk-YU6DDDO5.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/services/study-plan.service.ts
var GOAL_TRACKS = {
  faang: [
    ["Core Java", "Multithreading"],
    ["Data Structures", "Algorithms"],
    ["System Design", "Microservices"],
    ["Spring Boot", "Spring Reactive"],
    ["Hibernate", "Reactive Programming"]
  ],
  switch: [
    ["Spring Boot", "Microservices"],
    ["Core Java", "Spring Reactive"],
    ["Hibernate", "Multithreading"],
    ["Microservices", "Spring Boot"],
    ["Core Java", "Reactive Programming"]
  ],
  first: [
    ["Core Java", "Spring Boot"],
    ["Core Java", "Hibernate"],
    ["Spring Boot", "Microservices"],
    ["Core Java", "Multithreading"],
    ["Spring Boot", "Spring Reactive"]
  ],
  upskill: [
    ["Spring Reactive", "Reactive Programming"],
    ["Microservices", "Spring Boot"],
    ["Multithreading", "Core Java"],
    ["Hibernate", "Spring Boot"],
    ["Core Java", "Reactive Programming"]
  ]
};
function dayIndex() {
  const epochDay = Math.floor(Date.now() / 864e5);
  return epochDay % 30;
}
function buildTasks(goal) {
  const idx = dayIndex();
  const weekIdx = Math.floor(idx / 6) % 5;
  const [cat1, cat2] = GOAL_TRACKS[goal][weekIdx];
  return [
    {
      id: "tutorial",
      type: "tutorial",
      label: `Study ${cat1}`,
      description: `Read through today's ${cat1} topic`,
      route: ["/tutorials"],
      icon: "\u{1F4D6}",
      xpReward: 20
    },
    {
      id: "interview",
      type: "interview",
      label: `${cat2} Interview Prep`,
      description: `Practice ${cat2} interview questions`,
      route: ["/interview-questions", cat2],
      icon: "\u{1F4AC}",
      xpReward: 30
    },
    {
      id: "challenge",
      type: "challenge",
      label: "Daily Challenge",
      description: "5 questions \xB7 2\xD7 XP bonus",
      route: ["/daily-challenge"],
      icon: "\u26A1",
      xpReward: 50
    }
  ];
}
var StudyPlanService = class _StudyPlanService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  daily = inject(DailyEngagementService);
  LS_GOAL_KEY = "study_plan_goal";
  goal = signal("upskill", ...ngDevMode ? [{ debugName: "goal" }] : []);
  goalLoaded = signal(false, ...ngDevMode ? [{ debugName: "goalLoaded" }] : []);
  todayTasks = computed(() => buildTasks(this.goal()), ...ngDevMode ? [{ debugName: "todayTasks" }] : []);
  /** Current day within the 30-day cycle (0–29) */
  currentDay = dayIndex() + 1;
  // 1-based for display
  totalDays = 30;
  /** How many tasks done today (0–3) */
  tasksCompletedToday = computed(() => {
    const s = this.daily.dailyState();
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (s.date !== today)
      return 0;
    let count = 0;
    if (s.challengeDoneToday)
      count++;
    if (s.qotdAnsweredToday)
      count++;
    if (s.topicsCompletedToday >= 1)
      count++;
    return count;
  }, ...ngDevMode ? [{ debugName: "tasksCompletedToday" }] : []);
  overallProgress = computed(() => Math.round(this.tasksCompletedToday() / this.todayTasks().length * 100), ...ngDevMode ? [{ debugName: "overallProgress" }] : []);
  constructor() {
    this.loadGoal();
  }
  /** Check if a specific task type is done today */
  isTaskDone(taskId) {
    const s = this.daily.dailyState();
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (s.date !== today)
      return false;
    switch (taskId) {
      case "challenge":
        return s.challengeDoneToday;
      case "tutorial":
        return s.topicsCompletedToday >= 1;
      case "interview":
        return s.qotdAnsweredToday;
      // proxy: any Q answered
      default:
        return false;
    }
  }
  async loadGoal() {
    const user = this.authService.user();
    if (user) {
      try {
        const snap = await getDoc(doc(this.firestore, `users/${user.uid}`));
        if (snap.exists()) {
          const raw = snap.data()["goal"];
          if (raw) {
            this.goal.set(this.normalizeGoal(raw));
            localStorage.setItem(this.LS_GOAL_KEY, this.goal());
            this.goalLoaded.set(true);
            return;
          }
        }
      } catch {
      }
    }
    const cached = localStorage.getItem(this.LS_GOAL_KEY);
    if (cached)
      this.goal.set(this.normalizeGoal(cached));
    this.goalLoaded.set(true);
  }
  normalizeGoal(raw) {
    const map = {
      "Crack FAANG": "faang",
      "faang": "faang",
      "Switch Job": "switch",
      "switch": "switch",
      "First Job": "first",
      "first": "first",
      "Upskill": "upskill",
      "upskill": "upskill"
    };
    return map[raw] ?? "upskill";
  }
  static \u0275fac = function StudyPlanService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudyPlanService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudyPlanService, factory: _StudyPlanService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudyPlanService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  StudyPlanService
};
//# sourceMappingURL=chunk-SWDQPWSJ.js.map
