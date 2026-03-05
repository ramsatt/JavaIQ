import {
  CODING_QUESTIONS,
  CORE_JAVA_QUESTIONS,
  HIBERNATE_QUESTIONS,
  MICROSERVICES_QUESTIONS,
  MULTITHREADING_QUESTIONS,
  REACTIVE_PROGRAMMING_QUESTIONS,
  SPRING_BOOT_QUESTIONS,
  SPRING_REACTIVE_QUESTIONS
} from "./chunk-QFFHBMTJ.js";
import {
  AuthService,
  Firestore,
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where
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
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/data.service.ts
var QUESTION_MAP = {
  "Core Java": CORE_JAVA_QUESTIONS,
  "Spring Boot": SPRING_BOOT_QUESTIONS,
  "Hibernate": HIBERNATE_QUESTIONS,
  "Spring Reactive": SPRING_REACTIVE_QUESTIONS,
  "Microservices": MICROSERVICES_QUESTIONS,
  "Multithreading": MULTITHREADING_QUESTIONS,
  "Reactive Programming": REACTIVE_PROGRAMMING_QUESTIONS,
  "Coding Questions": CODING_QUESTIONS
};
var DataService = class _DataService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  // Signals for local state
  points = signal(0, ...ngDevMode ? [{ debugName: "points" }] : []);
  revealedQuestionIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "revealedQuestionIds" }] : []);
  leetcodeCompletedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "leetcodeCompletedIds" }] : []);
  completedTopicIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "completedTopicIds" }] : []);
  constructor() {
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.loadUserData(user.uid);
      } else {
        this.loadLocalData();
      }
    });
  }
  async loadUserData(uid) {
    const userDocRef = doc(this.firestore, `users/${uid}`);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const data = userDoc.data();
      this.points.set(data["points"] || 0);
      this.revealedQuestionIds.set(new Set(data["revealedIds"] || []));
      this.leetcodeCompletedIds.set(new Set(data["leetcodeCompletedIds"] || []));
      this.completedTopicIds.set(new Set(data["completedTopicIds"] || []));
    } else {
      await setDoc(userDocRef, {
        points: 0,
        revealedIds: [],
        leetcodeCompletedIds: [],
        completedTopicIds: [],
        displayName: this.authService.user()?.displayName || "Anonymous",
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
  }
  loadLocalData() {
    const storedPoints = localStorage.getItem("user_points");
    const storedRevealed = localStorage.getItem("revealed_questions");
    const storedLeetcode = localStorage.getItem("leetcode_completed");
    const storedTopics = localStorage.getItem("completed_topics");
    if (storedPoints)
      this.points.set(parseInt(storedPoints));
    if (storedRevealed)
      this.revealedQuestionIds.set(new Set(JSON.parse(storedRevealed)));
    if (storedLeetcode)
      this.leetcodeCompletedIds.set(new Set(JSON.parse(storedLeetcode)));
    if (storedTopics)
      this.completedTopicIds.set(new Set(JSON.parse(storedTopics)));
  }
  saveLocalData() {
    localStorage.setItem("user_points", this.points().toString());
    localStorage.setItem("revealed_questions", JSON.stringify(Array.from(this.revealedQuestionIds())));
    localStorage.setItem("leetcode_completed", JSON.stringify(Array.from(this.leetcodeCompletedIds())));
    localStorage.setItem("completed_topics", JSON.stringify(Array.from(this.completedTopicIds())));
  }
  async addPoints(amount) {
    this.points.update((p) => p + amount);
    this.saveLocalData();
    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        points: increment(amount),
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
  }
  async spendPoint() {
    if (this.points() <= 0)
      return false;
    this.points.update((p) => p - 1);
    this.saveLocalData();
    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        points: increment(-1),
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
    return true;
  }
  async markAsRevealed(id) {
    if (this.revealedQuestionIds().has(id))
      return;
    this.revealedQuestionIds.update((set) => {
      const newSet = new Set(set);
      newSet.add(id);
      return newSet;
    });
    this.saveLocalData();
    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        revealedIds: Array.from(this.revealedQuestionIds()),
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
  }
  async markLeetcodeCompleted(id) {
    if (this.leetcodeCompletedIds().has(id))
      return;
    this.leetcodeCompletedIds.update((set) => {
      const newSet = new Set(set);
      newSet.add(id);
      return newSet;
    });
    this.saveLocalData();
    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        leetcodeCompletedIds: Array.from(this.leetcodeCompletedIds()),
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
  }
  /** Mark a tutorial topic as completed. topicId = "courseSlug::topicSlug" */
  async markTopicComplete(topicId) {
    if (this.completedTopicIds().has(topicId))
      return;
    this.completedTopicIds.update((set) => {
      const newSet = new Set(set);
      newSet.add(topicId);
      return newSet;
    });
    this.saveLocalData();
    const user = this.authService.user();
    if (user) {
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await updateDoc(userDocRef, {
        completedTopicIds: Array.from(this.completedTopicIds()),
        lastUpdated: /* @__PURE__ */ new Date()
      });
    }
  }
  isTopicComplete(topicId) {
    return this.completedTopicIds().has(topicId);
  }
  /** Returns count of completed topics for a given course slug */
  getCourseCompletedCount(courseSlug) {
    const prefix = `${courseSlug}::`;
    let count = 0;
    for (const id of this.completedTopicIds()) {
      if (id.startsWith(prefix))
        count++;
    }
    return count;
  }
  /** Returns 0–100 percent progress for a course */
  getCourseProgress(courseSlug, totalTopics) {
    if (totalTopics === 0)
      return 0;
    return Math.round(this.getCourseCompletedCount(courseSlug) / totalTopics * 100);
  }
  /** Returns all interview questions in a stable, deterministic order (no sort).
   *  Used for daily QOTD selection so the picked question does not shift as
   *  the user answers questions throughout the day.
   */
  getAllQuestionsStable() {
    return Object.values(QUESTION_MAP).flat();
  }
  getQuestions(category = "All") {
    let filtered = [];
    if (category === "All") {
      filtered = Object.values(QUESTION_MAP).flat();
    } else {
      filtered = QUESTION_MAP[category] || [];
    }
    return filtered.sort((a, b) => {
      const aDone = this.revealedQuestionIds().has(a.id);
      const bDone = this.revealedQuestionIds().has(b.id);
      if (aDone === bDone)
        return 0;
      return aDone ? 1 : -1;
    });
  }
  getProgress(category) {
    const categoryQuestions = QUESTION_MAP[category] || [];
    if (categoryQuestions.length === 0)
      return 0;
    const revealedInCategory = categoryQuestions.filter((q) => this.revealedQuestionIds().has(q.id)).length;
    return Math.round(revealedInCategory / categoryQuestions.length * 100);
  }
  getVisitedCount(category) {
    const categoryQuestions = QUESTION_MAP[category] || [];
    return categoryQuestions.filter((q) => this.revealedQuestionIds().has(q.id)).length;
  }
  getCategoryQuestionsBySlug(slug) {
    const title = this.slugToTitle(slug);
    return QUESTION_MAP[title] || [];
  }
  slugToTitle(slug) {
    const titleMap = {
      "core-java": "Core Java",
      "spring-boot": "Spring Boot",
      "hibernate": "Hibernate",
      "microservices": "Microservices",
      "multithreading": "Multithreading",
      "spring-reactive": "Spring Reactive",
      "reactive-prog": "Reactive Programming",
      "coding-patterns": "Coding Questions"
    };
    return titleMap[slug] || slug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  getCategoryStars(category) {
    const progress = this.getProgress(category);
    if (progress >= 100)
      return 3;
    if (progress >= 60)
      return 2;
    if (progress >= 30)
      return 1;
    return 0;
  }
  // Defined order for the "Path"
  CATEGORY_PATH = [
    "Core Java",
    "Spring Boot",
    "Microservices",
    "Hibernate",
    "Spring Reactive",
    "Multithreading",
    "Reactive Programming",
    "Coding Questions"
  ];
  isCategoryLocked(category) {
    const index = this.CATEGORY_PATH.indexOf(category);
    if (index <= 0)
      return false;
    const prevCategory = this.CATEGORY_PATH[index - 1];
    return this.getCategoryStars(prevCategory) < 1;
  }
  async getLeaderboard(limitCount = 20, period = "alltime") {
    const leaderRef = collection(this.firestore, "leaderboard");
    let q;
    if (period === "alltime") {
      q = query(leaderRef, orderBy("points", "desc"), limit(limitCount));
    } else {
      const now = /* @__PURE__ */ new Date();
      let cutoff;
      if (period === "weekly") {
        cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      } else {
        cutoff = new Date(now.getFullYear(), now.getMonth(), 1);
      }
      q = query(leaderRef, where("lastUpdated", ">=", Timestamp.fromDate(cutoff)), orderBy("lastUpdated", "desc"), limit(limitCount));
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((d) => __spreadValues({ id: d.id }, d.data()));
  }
  // Legacy support for older components (can be removed once all components are updated)
  isQuestionLocked(category, indexInCategory) {
    return false;
  }
  static \u0275fac = function DataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DataService
};
//# sourceMappingURL=chunk-CTHSCSLP.js.map
