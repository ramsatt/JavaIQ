import {
  DailyChallengeService
} from "./chunk-KPDXCHUA.js";
import {
  WrongAnswerService
} from "./chunk-GSWVROYK.js";
import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import {
  GamificationService
} from "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-KHYVC3NX.js";
import "./chunk-YU6DDDO5.js";
import {
  IonContent
} from "./chunk-PWZS7QID.js";
import {
  CommonModule,
  DecimalPipe,
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L6VISU4K.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/progress/progress.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function ProgressComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("pr-day-active", day_r1.active)("pr-day-today", day_r1.isToday);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.label);
  }
}
function ProgressComponent_For_70_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const cat_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r3.getStars(cat_r3.name) >= s_r5 ? "#f59e0b" : "#334155");
  }
}
function ProgressComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ProgressComponent_For_70_Template_div_click_0_listener() {
      const cat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCategory(cat_r3.name));
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 41)(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43);
    \u0275\u0275repeaterCreate(9, ProgressComponent_For_70_For_10_Template, 2, 2, "span", 44, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 45)(12, "div", 46);
    \u0275\u0275element(13, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "i", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r3.color + "22");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.emoji);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cat_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r3.getPct(cat_r3.name), "%")("background", cat_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.getPct(cat_r3.name), "%");
  }
}
function ProgressComponent_Conditional_71_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ProgressComponent_Conditional_71_For_8_Template_div_click_0_listener() {
      const q_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToCategory(q_r7.category));
    });
    \u0275\u0275elementStart(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275element(7, "i", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r7.question);
  }
}
function ProgressComponent_Conditional_71_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ProgressComponent_Conditional_71_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.showAllWeak.set(!ctx_r3.showAllWeak()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.showAllWeak() ? "Show Less" : "Show " + (ctx_r3.weakQuestions().length - 5) + " More", " ");
  }
}
function ProgressComponent_Conditional_71_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ProgressComponent_Conditional_71_Conditional_10_For_1_Template_div_click_0_listener() {
      const q_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goToCategory(q_r10.category));
    });
    \u0275\u0275elementStart(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59);
    \u0275\u0275element(7, "i", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r10.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.question);
  }
}
function ProgressComponent_Conditional_71_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProgressComponent_Conditional_71_Conditional_10_For_1_Template, 8, 2, "div", 53, _forTrack2);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.weakQuestions().slice(5));
  }
}
function ProgressComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 50)(2, "span", 30);
    \u0275\u0275text(3, "Weak Areas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52);
    \u0275\u0275repeaterCreate(7, ProgressComponent_Conditional_71_For_8_Template, 8, 2, "div", 53, _forTrack2);
    \u0275\u0275conditionalCreate(9, ProgressComponent_Conditional_71_Conditional_9_Template, 2, 1, "button", 54);
    \u0275\u0275conditionalCreate(10, ProgressComponent_Conditional_71_Conditional_10_Template, 2, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.weakQuestions().length, " to review");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.weakQuestions().slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.weakQuestions().length > 5 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showAllWeak() ? 10 : -1);
  }
}
function ProgressComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 62);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4, "No weak areas \u2014 great work!");
    \u0275\u0275elementEnd()();
  }
}
var CATEGORIES = [
  { name: "Core Java", emoji: "\u2615", color: "#f97316" },
  { name: "Spring Boot", emoji: "\u{1F33F}", color: "#22c55e" },
  { name: "Microservices", emoji: "\u{1F517}", color: "#38bdf8" },
  { name: "Hibernate", emoji: "\u{1F5C4}\uFE0F", color: "#a855f7" },
  { name: "Multithreading", emoji: "\u{1F9F5}", color: "#ec4899" },
  { name: "Spring Reactive", emoji: "\u26A1", color: "#eab308" },
  { name: "Reactive Programming", emoji: "\u{1F4E1}", color: "#fb923c" },
  { name: "Coding Questions", emoji: "\u{1F4BB}", color: "#10b981" }
];
var ProgressComponent = class _ProgressComponent {
  router = inject(Router);
  gameSvc = inject(GamificationService);
  dataSvc = inject(DataService);
  wrongSvc = inject(WrongAnswerService);
  dcService = inject(DailyChallengeService);
  achSvc = inject(AchievementService);
  categories = CATEGORIES;
  // ── Signal-derived stats ───────────────────────────────────────────────────
  totalAnswered = computed(() => this.dataSvc.revealedQuestionIds().size, ...ngDevMode ? [{ debugName: "totalAnswered" }] : []);
  overallPct = computed(() => {
    const total = this.dataSvc.getAllQuestionsStable().length;
    if (total === 0)
      return 0;
    return Math.round(this.totalAnswered() / total * 100);
  }, ...ngDevMode ? [{ debugName: "overallPct" }] : []);
  unlockedAch = computed(() => this.achSvc.achievements().filter((a) => !!a.unlockedAt).length, ...ngDevMode ? [{ debugName: "unlockedAch" }] : []);
  weakQuestions = computed(() => this.wrongSvc.filterReviewQuestions(this.dataSvc.getAllQuestionsStable()), ...ngDevMode ? [{ debugName: "weakQuestions" }] : []);
  showAllWeak = signal(false, ...ngDevMode ? [{ debugName: "showAllWeak" }] : []);
  /** Last 7 days activity derived from streak + lastActiveDate */
  weekDays = computed(() => {
    const today = /* @__PURE__ */ new Date();
    const todayStr = today.toISOString().split("T")[0];
    const lastActive = this.gameSvc.lastActiveDate();
    const streak = this.gameSvc.streak();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      const dateStr = d.toISOString().split("T")[0];
      const isToday = dateStr === todayStr;
      let active = false;
      if (lastActive && streak > 0) {
        const lastDate = new Date(lastActive);
        const diffMs = lastDate.getTime() - d.getTime();
        const diffDays = Math.round(diffMs / 864e5);
        active = diffDays >= 0 && diffDays < streak;
      }
      const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return { label: labels[d.getDay()], active, isToday };
    });
  }, ...ngDevMode ? [{ debugName: "weekDays" }] : []);
  // ── Template helpers ───────────────────────────────────────────────────────
  getPct(category) {
    return this.dataSvc.getProgress(category);
  }
  getStars(category) {
    return this.dataSvc.getCategoryStars(category);
  }
  goToCategory(category) {
    this.router.navigate(["/challenge", category]);
  }
  back() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function ProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressComponent, selectors: [["app-progress"]], hostAttrs: [1, "ion-page"], decls: 73, vars: 25, consts: [[1, "pr-content"], [1, "pr-body"], [1, "pr-header"], [1, "pr-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "pr-title"], [1, "pr-sub"], [1, "pr-hero"], [1, "pr-hero-left"], [1, "pr-level-badge"], [1, "pr-lv-num"], [1, "pr-lv-lbl"], [1, "pr-xp-info"], [1, "pr-xp-val"], [1, "pr-xp-hint"], [1, "pr-hero-right"], [1, "pr-streak-ring"], [1, "pr-streak-icon"], [1, "pr-streak-num"], [1, "pr-streak-lbl"], [1, "pr-xp-bar-wrap"], [1, "pr-xp-track"], [1, "pr-xp-fill"], [1, "pr-xp-pct"], [1, "pr-stats-row"], [1, "pr-stat"], [1, "pr-stat-num"], [1, "pr-stat-lbl"], [1, "pr-stat-num", "pr-dc-done"], [1, "pr-section"], [1, "pr-section-label"], [1, "pr-week-grid"], [1, "pr-day-col"], [1, "pr-cat-list"], [1, "pr-cat-row"], [1, "pr-no-weak"], [1, "pr-day-dot"], [1, "pr-day-label"], [1, "pr-cat-row", 3, "click"], [1, "pr-cat-icon"], [1, "pr-cat-info"], [1, "pr-cat-name-row"], [1, "pr-cat-name"], [1, "pr-cat-stars"], [3, "color"], [1, "pr-cat-bar-row"], [1, "pr-cat-track"], [1, "pr-cat-fill"], [1, "pr-cat-pct"], [1, "bi", "bi-chevron-right", "pr-cat-arrow"], [1, "pr-section-head-row"], [1, "pr-section-count"], [1, "pr-weak-list"], [1, "pr-weak-card"], [1, "pr-show-more"], [1, "pr-weak-card", 3, "click"], [1, "pr-weak-left"], [1, "pr-weak-cat"], [1, "pr-weak-q"], [1, "pr-weak-badge"], [1, "bi", "bi-arrow-repeat"], [1, "pr-show-more", 3, "click"], [1, "pr-no-weak-icon"], [1, "pr-no-weak-txt"]], template: function ProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function ProgressComponent_Template_button_click_3_listener() {
        return ctx.back();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h1", 5);
      \u0275\u0275text(7, "My Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Track your Java mastery journey");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16, "Level");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 14);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 15)(25, "div", 16)(26, "span", 17);
      \u0275\u0275text(27, "\u{1F525}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 18);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275text(31, "day streak");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 20)(33, "div", 21);
      \u0275\u0275element(34, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 23);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 24)(39, "div", 25)(40, "span", 26);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 27);
      \u0275\u0275text(43, "Answered");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 25)(45, "span", 26);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 27);
      \u0275\u0275text(48, "Complete");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 25)(50, "span", 26);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 27);
      \u0275\u0275text(53, "Badges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 25)(55, "span", 28);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 27);
      \u0275\u0275text(58, "Daily Done");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 29)(60, "span", 30);
      \u0275\u0275text(61, "Last 7 Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 31);
      \u0275\u0275repeaterCreate(63, ProgressComponent_For_64_Template, 4, 5, "div", 32, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 29)(66, "span", 30);
      \u0275\u0275text(67, "Category Mastery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 33);
      \u0275\u0275repeaterCreate(69, ProgressComponent_For_70_Template, 17, 10, "div", 34, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(71, ProgressComponent_Conditional_71_Template, 11, 3, "div", 29)(72, ProgressComponent_Conditional_72_Template, 5, 0, "div", 35);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.gameSvc.level());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 16, ctx.gameSvc.xp(), "1.0-0"), " XP");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 19, ctx.gameSvc.xpToNextLevel(), "1.0-0"), " XP to next level");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("pr-streak-active", ctx.gameSvc.streak() > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.gameSvc.streak());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("width", ctx.gameSvc.levelProgress(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(37, 22, ctx.gameSvc.levelProgress(), "1.0-0"), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalAnswered());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.overallPct(), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.unlockedAch());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("pr-dc-yes", ctx.dcService.isCompletedToday());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.dcService.isCompletedToday() ? "\u2713" : "\u2014", " ");
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.weekDays());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.weakQuestions().length > 0 ? 71 : 72);
    }
  }, dependencies: [CommonModule, IonContent, DecimalPipe], styles: ["\n\n.pr-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.pr-body[_ngcontent-%COMP%] {\n  padding: 56px 20px 60px;\n  max-width: 540px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.pr-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.pr-back[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.pr-title[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.pr-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.pr-hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 18px;\n  padding: 20px;\n}\n.pr-hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.pr-level-badge[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);\n}\n.pr-lv-num[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n}\n.pr-lv-lbl[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.pr-xp-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #e2e8f0;\n}\n.pr-xp-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.pr-streak-ring[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n  transition: border-color 0.3s;\n}\n.pr-streak-active[_ngcontent-%COMP%] {\n  border-color: #f97316;\n  box-shadow: 0 0 16px rgba(249, 115, 22, 0.25);\n}\n.pr-streak-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1;\n}\n.pr-streak-num[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  line-height: 1;\n}\n.pr-streak-lbl[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pr-xp-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pr-xp-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.pr-xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pr-xp-pct[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #64748b;\n  min-width: 36px;\n  text-align: right;\n}\n.pr-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.pr-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n.pr-stat-num[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #e2e8f0;\n}\n.pr-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  text-align: center;\n}\n.pr-dc-yes[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n.pr-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pr-section-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n}\n.pr-section-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pr-section-count[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #f87171;\n}\n.pr-week-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.pr-day-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.pr-day-dot[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  transition: all 0.2s;\n}\n.pr-day-active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.25) !important;\n  border-color: #10b981 !important;\n}\n.pr-day-today[_ngcontent-%COMP%] {\n  border-color: #6366f1 !important;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.35);\n}\n.pr-day-active.pr-day-today[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.3) !important;\n  border-color: #818cf8 !important;\n}\n.pr-day-label[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #475569;\n}\n.pr-cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pr-cat-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.pr-cat-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.055);\n}\n.pr-cat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.pr-cat-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.pr-cat-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pr-cat-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.pr-cat-stars[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 1px;\n}\n.pr-cat-bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pr-cat-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.pr-cat-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.pr-cat-pct[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  min-width: 28px;\n  text-align: right;\n}\n.pr-cat-arrow[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.pr-weak-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pr-weak-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.12);\n  border-radius: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.pr-weak-card[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.pr-weak-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.pr-weak-cat[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #f87171;\n}\n.pr-weak-q[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.4;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.pr-weak-badge[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.pr-show-more[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  background: transparent;\n  border: 1px dashed rgba(255, 255, 255, 0.1);\n  color: #64748b;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.pr-show-more[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n}\n.pr-no-weak[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 20px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.12);\n  border-radius: 14px;\n}\n.pr-no-weak-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.pr-no-weak-txt[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #34d399;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-content[_ngcontent-%COMP%] {\n  --background: #f8fafc;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-title[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-sub[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-hero[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-hero[_ngcontent-%COMP%], \n.pr-stat[_ngcontent-%COMP%], \n.pr-cat-row[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #e2e8f0;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-cat-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-cat-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .pr-weak-q[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .pr-weak-q[_ngcontent-%COMP%] {\n  color: #334155;\n}\n/*# sourceMappingURL=progress.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressComponent, [{
    type: Component,
    args: [{ selector: "app-progress", changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "ion-page" }, standalone: true, imports: [CommonModule, IonContent], template: `
    <ion-content class="pr-content">
      <div class="pr-body">

        <!-- Header -->
        <div class="pr-header">
          <button class="pr-back" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div>
            <h1 class="pr-title">My Progress</h1>
            <p class="pr-sub">Track your Java mastery journey</p>
          </div>
        </div>

        <!-- \u2500\u2500 XP Hero \u2500\u2500 -->
        <div class="pr-hero">
          <div class="pr-hero-left">
            <div class="pr-level-badge">
              <span class="pr-lv-num">{{ gameSvc.level() }}</span>
              <span class="pr-lv-lbl">Level</span>
            </div>
            <div class="pr-xp-info">
              <span class="pr-xp-val">{{ gameSvc.xp() | number:'1.0-0' }} XP</span>
              <span class="pr-xp-hint">{{ gameSvc.xpToNextLevel() | number:'1.0-0' }} XP to next level</span>
            </div>
          </div>
          <div class="pr-hero-right">
            <div class="pr-streak-ring" [class.pr-streak-active]="gameSvc.streak() > 0">
              <span class="pr-streak-icon">\u{1F525}</span>
              <span class="pr-streak-num">{{ gameSvc.streak() }}</span>
              <span class="pr-streak-lbl">day streak</span>
            </div>
          </div>
        </div>

        <!-- XP bar -->
        <div class="pr-xp-bar-wrap">
          <div class="pr-xp-track">
            <div class="pr-xp-fill" [style.width.%]="gameSvc.levelProgress()"></div>
          </div>
          <span class="pr-xp-pct">{{ gameSvc.levelProgress() | number:'1.0-0' }}%</span>
        </div>

        <!-- \u2500\u2500 Stats Row \u2500\u2500 -->
        <div class="pr-stats-row">
          <div class="pr-stat">
            <span class="pr-stat-num">{{ totalAnswered() }}</span>
            <span class="pr-stat-lbl">Answered</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num">{{ overallPct() }}%</span>
            <span class="pr-stat-lbl">Complete</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num">{{ unlockedAch() }}</span>
            <span class="pr-stat-lbl">Badges</span>
          </div>
          <div class="pr-stat">
            <span class="pr-stat-num pr-dc-done" [class.pr-dc-yes]="dcService.isCompletedToday()">
              {{ dcService.isCompletedToday() ? '\u2713' : '\u2014' }}
            </span>
            <span class="pr-stat-lbl">Daily Done</span>
          </div>
        </div>

        <!-- \u2500\u2500 7-Day Activity \u2500\u2500 -->
        <div class="pr-section">
          <span class="pr-section-label">Last 7 Days</span>
          <div class="pr-week-grid">
            @for (day of weekDays(); track day.label) {
              <div class="pr-day-col">
                <div class="pr-day-dot"
                  [class.pr-day-active]="day.active"
                  [class.pr-day-today]="day.isToday">
                </div>
                <span class="pr-day-label">{{ day.label }}</span>
              </div>
            }
          </div>
        </div>

        <!-- \u2500\u2500 Category Mastery \u2500\u2500 -->
        <div class="pr-section">
          <span class="pr-section-label">Category Mastery</span>
          <div class="pr-cat-list">
            @for (cat of categories; track cat.name) {
              <div class="pr-cat-row" (click)="goToCategory(cat.name)">
                <div class="pr-cat-icon" [style.background]="cat.color + '22'">
                  <span>{{ cat.emoji }}</span>
                </div>
                <div class="pr-cat-info">
                  <div class="pr-cat-name-row">
                    <span class="pr-cat-name">{{ cat.name }}</span>
                    <div class="pr-cat-stars">
                      @for (s of [1,2,3]; track s) {
                        <span [style.color]="getStars(cat.name) >= s ? '#f59e0b' : '#334155'">\u2605</span>
                      }
                    </div>
                  </div>
                  <div class="pr-cat-bar-row">
                    <div class="pr-cat-track">
                      <div class="pr-cat-fill"
                        [style.width.%]="getPct(cat.name)"
                        [style.background]="cat.color">
                      </div>
                    </div>
                    <span class="pr-cat-pct">{{ getPct(cat.name) }}%</span>
                  </div>
                </div>
                <i class="bi bi-chevron-right pr-cat-arrow"></i>
              </div>
            }
          </div>
        </div>

        <!-- \u2500\u2500 Weak Areas \u2500\u2500 -->
        @if (weakQuestions().length > 0) {
          <div class="pr-section">
            <div class="pr-section-head-row">
              <span class="pr-section-label">Weak Areas</span>
              <span class="pr-section-count">{{ weakQuestions().length }} to review</span>
            </div>

            <div class="pr-weak-list">
              @for (q of weakQuestions().slice(0, 5); track q.id) {
                <div class="pr-weak-card" (click)="goToCategory(q.category)">
                  <div class="pr-weak-left">
                    <span class="pr-weak-cat">{{ q.category }}</span>
                    <p class="pr-weak-q">{{ q.question }}</p>
                  </div>
                  <div class="pr-weak-badge">
                    <i class="bi bi-arrow-repeat"></i>
                  </div>
                </div>
              }

              @if (weakQuestions().length > 5) {
                <button class="pr-show-more" (click)="showAllWeak.set(!showAllWeak())">
                  {{ showAllWeak() ? 'Show Less' : 'Show ' + (weakQuestions().length - 5) + ' More' }}
                </button>
              }

              @if (showAllWeak()) {
                @for (q of weakQuestions().slice(5); track q.id) {
                  <div class="pr-weak-card" (click)="goToCategory(q.category)">
                    <div class="pr-weak-left">
                      <span class="pr-weak-cat">{{ q.category }}</span>
                      <p class="pr-weak-q">{{ q.question }}</p>
                    </div>
                    <div class="pr-weak-badge">
                      <i class="bi bi-arrow-repeat"></i>
                    </div>
                  </div>
                }
              }
            </div>
          </div>
        } @else {
          <div class="pr-no-weak">
            <span class="pr-no-weak-icon">\u{1F3AF}</span>
            <span class="pr-no-weak-txt">No weak areas \u2014 great work!</span>
          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;b339277d683b9bfe48f3823679d1869fc85d8afd9e33d02eef1432450bda3caf;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/progress/progress.component.ts */\n.pr-content {\n  --background: #0b1120;\n}\n.pr-body {\n  padding: 56px 20px 60px;\n  max-width: 540px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.pr-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.pr-back {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.pr-title {\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.pr-sub {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.pr-hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 18px;\n  padding: 20px;\n}\n.pr-hero-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.pr-level-badge {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);\n}\n.pr-lv-num {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n}\n.pr-lv-lbl {\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.pr-xp-val {\n  display: block;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #e2e8f0;\n}\n.pr-xp-hint {\n  display: block;\n  font-size: 0.68rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.pr-streak-ring {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n  transition: border-color 0.3s;\n}\n.pr-streak-active {\n  border-color: #f97316;\n  box-shadow: 0 0 16px rgba(249, 115, 22, 0.25);\n}\n.pr-streak-icon {\n  font-size: 1.3rem;\n  line-height: 1;\n}\n.pr-streak-num {\n  font-size: 1rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  line-height: 1;\n}\n.pr-streak-lbl {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pr-xp-bar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pr-xp-track {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.pr-xp-fill {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pr-xp-pct {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #64748b;\n  min-width: 36px;\n  text-align: right;\n}\n.pr-stats-row {\n  display: flex;\n  gap: 10px;\n}\n.pr-stat {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n}\n.pr-stat-num {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #e2e8f0;\n}\n.pr-stat-lbl {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  text-align: center;\n}\n.pr-dc-yes {\n  color: #10b981 !important;\n}\n.pr-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.pr-section-label {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n}\n.pr-section-head-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pr-section-count {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #f87171;\n}\n.pr-week-grid {\n  display: flex;\n  justify-content: space-between;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 16px 20px;\n}\n.pr-day-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.pr-day-dot {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  transition: all 0.2s;\n}\n.pr-day-active {\n  background: rgba(16, 185, 129, 0.25) !important;\n  border-color: #10b981 !important;\n}\n.pr-day-today {\n  border-color: #6366f1 !important;\n  box-shadow: 0 0 8px rgba(99, 102, 241, 0.35);\n}\n.pr-day-active.pr-day-today {\n  background: rgba(99, 102, 241, 0.3) !important;\n  border-color: #818cf8 !important;\n}\n.pr-day-label {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #475569;\n}\n.pr-cat-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pr-cat-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.pr-cat-row:hover {\n  background: rgba(255, 255, 255, 0.055);\n}\n.pr-cat-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.pr-cat-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.pr-cat-name-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.pr-cat-name {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.pr-cat-stars {\n  font-size: 0.75rem;\n  letter-spacing: 1px;\n}\n.pr-cat-bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pr-cat-track {\n  flex: 1;\n  height: 5px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.pr-cat-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.pr-cat-pct {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  min-width: 28px;\n  text-align: right;\n}\n.pr-cat-arrow {\n  font-size: 0.65rem;\n  color: #334155;\n  flex-shrink: 0;\n}\n.pr-weak-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pr-weak-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(239, 68, 68, 0.05);\n  border: 1px solid rgba(239, 68, 68, 0.12);\n  border-radius: 14px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: background 0.18s;\n}\n.pr-weak-card:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.pr-weak-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.pr-weak-cat {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #f87171;\n}\n.pr-weak-q {\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.4;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.pr-weak-badge {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.pr-show-more {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  background: transparent;\n  border: 1px dashed rgba(255, 255, 255, 0.1);\n  color: #64748b;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.pr-show-more:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n}\n.pr-no-weak {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 20px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.12);\n  border-radius: 14px;\n}\n.pr-no-weak-icon {\n  font-size: 1.2rem;\n}\n.pr-no-weak-txt {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #34d399;\n}\n:host-context(html:not(.dark)) .pr-content {\n  --background: #f8fafc;\n}\n:host-context(html:not(.dark)) .pr-title {\n  color: #0f172a;\n}\n:host-context(html:not(.dark)) .pr-sub {\n  color: #94a3b8;\n}\n:host-context(html:not(.dark)) .pr-hero,\n.pr-stat,\n.pr-cat-row {\n  background: #fff;\n  border-color: #e2e8f0;\n}\n:host-context(html:not(.dark)) .pr-cat-name {\n  color: #0f172a;\n}\n:host-context(html:not(.dark)) .pr-weak-q {\n  color: #334155;\n}\n/*# sourceMappingURL=progress.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressComponent, { className: "ProgressComponent", filePath: "src/app/features/progress/progress.component.ts", lineNumber: 420 });
})();
export {
  ProgressComponent
};
//# sourceMappingURL=chunk-VB7PTNRG.js.map
