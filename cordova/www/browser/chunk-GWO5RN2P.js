import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonToolbar
} from "./chunk-GJAE6IIS.js";
import {
  RouterLink
} from "./chunk-YUIOCFNR.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VBTVL2BZ.js";
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

// src/app/features/assessments/assess-list.component.ts
var _c0 = (a0) => ["/assessments", a0];
var _forTrack0 = ($index, $item) => $item.val;
var _forTrack1 = ($index, $item) => $item.id;
function AssessListComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AssessListComponent_For_40_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeDiff.set(f_r2.val));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--fc", f_r2.color);
    \u0275\u0275classProp("fpill-active", ctx_r2.activeDiff() === f_r2.val);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function AssessListComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37)(3, "div", 38);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "div", 40)(7, "div")(8, "h3", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 45)(17, "span", 46);
    \u0275\u0275element(18, "i", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 46);
    \u0275\u0275element(21, "i", 48);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 49);
    \u0275\u0275text(24, " Start Quiz ");
    \u0275\u0275element(25, "i", 50);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275styleProp("--accent", a_r4.accentColor);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, a_r4.id));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", a_r4.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(a_r4.faIcon);
    \u0275\u0275styleProp("color", a_r4.iconColor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.category);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", a_r4.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", a_r4.questions, " Qs ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r4.time, " min ");
  }
}
var AssessListComponent = class _AssessListComponent {
  activeDiff = signal("all", ...ngDevMode ? [{ debugName: "activeDiff" }] : []);
  filters = [
    { val: "all", label: "All", color: "#94a3b8" },
    { val: "beginner", label: "Beginner", color: "#10b981" },
    { val: "intermediate", label: "Intermediate", color: "#8b5cf6" },
    { val: "advanced", label: "Advanced", color: "#f87171" }
  ];
  assessments = [
    {
      id: "java-basics",
      title: "Java Fundamentals",
      category: "Core Java",
      faIcon: "fa-solid fa-mug-hot",
      iconColor: "#f59e0b",
      iconBg: "rgba(245,158,11,0.12)",
      accentColor: "#f59e0b",
      questions: 20,
      time: 15,
      difficulty: "beginner",
      description: "Core Java syntax, data types, control flow, OOP principles, and JVM concepts."
    },
    {
      id: "oop-concepts",
      title: "OOP Concepts",
      category: "Core Java",
      faIcon: "fa-solid fa-cubes",
      iconColor: "#10b981",
      iconBg: "rgba(16,185,129,0.12)",
      accentColor: "#10b981",
      questions: 15,
      time: 12,
      difficulty: "beginner",
      description: "Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles."
    },
    {
      id: "collections",
      title: "Collections Framework",
      category: "Core Java",
      faIcon: "fa-solid fa-layer-group",
      iconColor: "#22d3ee",
      iconBg: "rgba(34,211,238,0.12)",
      accentColor: "#22d3ee",
      questions: 20,
      time: 15,
      difficulty: "intermediate",
      description: "List, Set, Map, Queue implementations, iterators, Comparable, and Comparator."
    },
    {
      id: "spring-boot-quiz",
      title: "Spring Boot Essentials",
      category: "Spring Boot",
      faIcon: "fa-solid fa-leaf",
      iconColor: "#34d399",
      iconBg: "rgba(52,211,153,0.12)",
      accentColor: "#34d399",
      questions: 20,
      time: 20,
      difficulty: "intermediate",
      description: "Auto-configuration, starters, REST controllers, dependency injection, and profiles."
    },
    {
      id: "hibernate-quiz",
      title: "Hibernate & JPA",
      category: "Hibernate",
      faIcon: "fa-solid fa-database",
      iconColor: "#f97316",
      iconBg: "rgba(249,115,22,0.12)",
      accentColor: "#f97316",
      questions: 15,
      time: 15,
      difficulty: "intermediate",
      description: "Entity mapping, relationships, lazy loading, caching levels, and JPQL queries."
    },
    {
      id: "concurrency",
      title: "Concurrency & Threads",
      category: "Multithreading",
      faIcon: "fa-solid fa-bolt",
      iconColor: "#eab308",
      iconBg: "rgba(234,179,8,0.12)",
      accentColor: "#eab308",
      questions: 15,
      time: 20,
      difficulty: "advanced",
      description: "Thread lifecycle, synchronization, ExecutorService, CompletableFuture, and virtual threads."
    },
    {
      id: "microservices-quiz",
      title: "Microservices Patterns",
      category: "Microservices",
      faIcon: "fa-solid fa-diagram-project",
      iconColor: "#8b5cf6",
      iconBg: "rgba(139,92,246,0.12)",
      accentColor: "#8b5cf6",
      questions: 18,
      time: 20,
      difficulty: "advanced",
      description: "Service discovery, API gateway, circuit breaker, saga pattern, and event-driven architecture."
    },
    {
      id: "design-patterns-quiz",
      title: "Design Patterns",
      category: "Core Java",
      faIcon: "fa-solid fa-puzzle-piece",
      iconColor: "#ec4899",
      iconBg: "rgba(236,72,153,0.12)",
      accentColor: "#ec4899",
      questions: 20,
      time: 18,
      difficulty: "intermediate",
      description: "Singleton, Factory, Observer, Strategy, Builder, Decorator, and other GoF patterns."
    }
  ];
  filtered = computed(() => {
    const d = this.activeDiff();
    if (d === "all")
      return this.assessments;
    return this.assessments.filter((a) => a.difficulty === d);
  }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
  get totalQuestions() {
    return this.assessments.reduce((s, a) => s + a.questions, 0);
  }
  get totalTime() {
    return this.assessments.reduce((s, a) => s + a.time, 0);
  }
  static \u0275fac = function AssessListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessListComponent, selectors: [["app-assess-list"]], decls: 58, vars: 4, consts: [["translucent", "true", 1, "ion-no-border"], [1, "assess-toolbar"], ["slot", "start"], ["color", "light"], [1, "assess-content"], [1, "hero"], [1, "hero-glow", "g1"], [1, "hero-glow", "g2"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-circle-check", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "hero-sub"], [1, "hero-stats"], [1, "hero-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-div"], [1, "body"], [1, "filter-row"], [1, "fpill", 3, "fpill-active", "--fc"], [1, "sec-head"], [1, "sec-head-left"], [1, "fa-solid", "fa-clipboard-list", "sec-icon"], [1, "sec-title"], [1, "sec-count"], [1, "card-list"], [1, "assess-card", 3, "routerLink", "--accent"], [1, "info-card"], [1, "fa-solid", "fa-lightbulb", "info-icon"], [1, "info-text"], [1, "info-title"], [1, "info-desc"], [1, "fpill", 3, "click"], [1, "assess-card", 3, "routerLink"], [1, "card-accent-top"], [1, "card-inner"], [1, "card-icon"], [1, "card-content"], [1, "card-top"], [1, "card-title"], [1, "card-cat"], [1, "diff-badge"], [1, "card-desc"], [1, "card-meta"], [1, "meta-chip"], [1, "fa-solid", "fa-pen", "meta-icon"], [1, "fa-regular", "fa-clock", "meta-icon"], [1, "start-hint"], [1, "fa-solid", "fa-arrow-right"]], template: function AssessListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4)(5, "div", 5);
      \u0275\u0275element(6, "div", 6)(7, "div", 7);
      \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275text(11, " Knowledge Assessments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h1", 11);
      \u0275\u0275text(13, "Test Your");
      \u0275\u0275element(14, "br");
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "Java Mastery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 13);
      \u0275\u0275text(18, "Timed quizzes with instant feedback to reinforce your learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 17);
      \u0275\u0275text(24, "Quizzes");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "div", 18);
      \u0275\u0275elementStart(26, "div", 15)(27, "span", 16);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275text(30, "Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "div", 18);
      \u0275\u0275elementStart(32, "div", 15)(33, "span", 16);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 17);
      \u0275\u0275text(36, "Total Time");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 19)(38, "div", 20);
      \u0275\u0275repeaterCreate(39, AssessListComponent_For_40_Template, 2, 5, "button", 21, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 22)(42, "div", 23);
      \u0275\u0275element(43, "i", 24);
      \u0275\u0275elementStart(44, "span", 25);
      \u0275\u0275text(45, "Available Quizzes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "span", 26);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275repeaterCreate(49, AssessListComponent_For_50_Template, 26, 18, "a", 28, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 29);
      \u0275\u0275element(52, "i", 30);
      \u0275\u0275elementStart(53, "div", 31)(54, "span", 32);
      \u0275\u0275text(55, "How quizzes work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 33);
      \u0275\u0275text(57, "Timed questions with instant feedback. Results are saved to track your improvement over time.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.assessments.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalQuestions);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.totalTime, "m");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.filtered().length, " quizzes");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filtered());
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], styles: ["\n\n.assess-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.assess-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.g1[_ngcontent-%COMP%] {\n  top: -50px;\n  right: -30px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.12) 0%,\n      transparent 70%);\n}\n.g2[_ngcontent-%COMP%] {\n  bottom: -20px;\n  left: -30px;\n  width: 160px;\n  height: 160px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 72, 153, 0.08) 0%,\n      transparent 70%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #a78bfa;\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 60%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 22px;\n  line-height: 1.5;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 8px;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.body[_ngcontent-%COMP%] {\n  padding: 20px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.fpill[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fpill[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.07);\n}\n.fpill-active[_ngcontent-%COMP%] {\n  background: rgba(from var(--fc, #8b5cf6) r g b / 0.14) !important;\n  border-color: rgba(from var(--fc, #8b5cf6) r g b / 0.3) !important;\n  color: var(--fc, #8b5cf6) !important;\n}\n.sec-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sec-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sec-icon[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #8b5cf6;\n}\n.sec-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.sec-count[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.assess-card[_ngcontent-%COMP%] {\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.assess-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.assess-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.card-accent-top[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--accent, #8b5cf6);\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.assess-card[_ngcontent-%COMP%]:hover   .card-accent-top[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 16px 18px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.card-cat[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #64748b;\n}\n.diff-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 3px 9px;\n  border-radius: 6px;\n}\n.diff-badge[data-d=beginner][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-badge[data-d=intermediate][_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-badge[data-d=advanced][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 10px;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 3px 8px;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n}\n.start-hint[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--accent, #8b5cf6);\n  opacity: 0;\n  transition: opacity 0.2s, transform 0.2s;\n  transform: translateX(-4px);\n}\n.assess-card[_ngcontent-%COMP%]:hover   .start-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.start-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n}\n.info-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 18px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.15);\n  border-radius: 14px;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #a78bfa;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.info-desc[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  line-height: 1.5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .assess-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .assess-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow.g1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow.g1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow.g2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow.g2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-num[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-lbl[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-div[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-div[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .assess-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .assess-card[_ngcontent-%COMP%]:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .assess-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .assess-desc[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .assess-desc[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .sec-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .sec-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .sec-count[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .sec-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .sec-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .info-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: rgba(27, 67, 50, 0.15);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .info-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .info-desc[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .info-desc[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .fpill[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .fpill[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .fpill-active[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .fpill-active[_ngcontent-%COMP%] {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=assess-list.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessListComponent, [{
    type: Component,
    args: [{ selector: "app-assess-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="assess-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="assess-content">

      <!-- Hero -->
      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-glow g2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-circle-check hero-badge-icon"></i>
            Knowledge Assessments
          </span>
          <h1 class="hero-title">Test Your<br><span class="hero-accent">Java Mastery</span></h1>
          <p class="hero-sub">Timed quizzes with instant feedback to reinforce your learning</p>

          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ assessments.length }}</span>
              <span class="stat-lbl">Quizzes</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ totalQuestions }}</span>
              <span class="stat-lbl">Questions</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ totalTime }}m</span>
              <span class="stat-lbl">Total Time</span>
            </div>
          </div>
        </div>
      </div>

      <div class="body">

        <!-- Difficulty Filter -->
        <div class="filter-row">
          @for (f of filters; track f.val) {
            <button class="fpill" [class.fpill-active]="activeDiff() === f.val"
              (click)="activeDiff.set(f.val)" [style.--fc]="f.color">
              {{ f.label }}
            </button>
          }
        </div>

        <!-- Section head -->
        <div class="sec-head">
          <div class="sec-head-left">
            <i class="fa-solid fa-clipboard-list sec-icon"></i>
            <span class="sec-title">Available Quizzes</span>
          </div>
          <span class="sec-count">{{ filtered().length }} quizzes</span>
        </div>

        <!-- Cards -->
        <div class="card-list">
          @for (a of filtered(); track a.id) {
            <a [routerLink]="['/assessments', a.id]" class="assess-card" [style.--accent]="a.accentColor">
              <div class="card-accent-top"></div>
              <div class="card-inner">
                <!-- Icon -->
                <div class="card-icon" [style.background]="a.iconBg">
                  <i [class]="a.faIcon" [style.color]="a.iconColor"></i>
                </div>

                <!-- Content -->
                <div class="card-content">
                  <div class="card-top">
                    <div>
                      <h3 class="card-title">{{ a.title }}</h3>
                      <span class="card-cat">{{ a.category }}</span>
                    </div>
                    <span class="diff-badge" [attr.data-d]="a.difficulty">{{ a.difficulty }}</span>
                  </div>
                  <p class="card-desc">{{ a.description }}</p>
                  <div class="card-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-pen meta-icon"></i>
                      {{ a.questions }} Qs
                    </span>
                    <span class="meta-chip">
                      <i class="fa-regular fa-clock meta-icon"></i>
                      {{ a.time }} min
                    </span>
                    <span class="start-hint">
                      Start Quiz
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          }
        </div>

        <!-- Info card -->
        <div class="info-card">
          <i class="fa-solid fa-lightbulb info-icon"></i>
          <div class="info-text">
            <span class="info-title">How quizzes work</span>
            <span class="info-desc">Timed questions with instant feedback. Results are saved to track your improvement over time.</span>
          </div>
        </div>

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;9012dda52027511faad52f525d2ba188e6db3e2fc72f58d55f9cbc8d30174fc6;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/assessments/assess-list.component.ts */\n.assess-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.assess-content {\n  --background: #0b1120;\n}\n.hero {\n  position: relative;\n  padding: 0 20px 28px;\n  overflow: hidden;\n}\n.hero-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.g1 {\n  top: -50px;\n  right: -30px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.12) 0%,\n      transparent 70%);\n}\n.g2 {\n  bottom: -20px;\n  left: -30px;\n  width: 160px;\n  height: 160px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 72, 153, 0.08) 0%,\n      transparent 70%);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #a78bfa;\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-badge-icon {\n  font-size: 0.65rem;\n}\n.hero-title {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 60%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 22px;\n  line-height: 1.5;\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 14px 8px;\n}\n.hero-stat {\n  text-align: center;\n  flex: 1;\n}\n.stat-num {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-lbl {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 2px;\n}\n.stat-div {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.body {\n  padding: 20px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.fpill {\n  padding: 7px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-size: 0.72rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.fpill:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.07);\n}\n.fpill-active {\n  background: rgba(from var(--fc, #8b5cf6) r g b / 0.14) !important;\n  border-color: rgba(from var(--fc, #8b5cf6) r g b / 0.3) !important;\n  color: var(--fc, #8b5cf6) !important;\n}\n.sec-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sec-head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sec-icon {\n  font-size: 0.68rem;\n  color: #8b5cf6;\n}\n.sec-title {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.sec-count {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.card-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.assess-card {\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.assess-card:hover {\n  background: rgba(255, 255, 255, 0.055);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.assess-card:active {\n  transform: scale(0.99);\n}\n.card-accent-top {\n  height: 3px;\n  background: var(--accent, #8b5cf6);\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.assess-card:hover .card-accent-top {\n  opacity: 1;\n}\n.card-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 16px 18px;\n}\n.card-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-top: 2px;\n}\n.card-content {\n  flex: 1;\n  min-width: 0;\n}\n.card-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.card-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.card-cat {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #64748b;\n}\n.diff-badge {\n  flex-shrink: 0;\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 3px 9px;\n  border-radius: 6px;\n}\n.diff-badge[data-d=beginner] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-badge[data-d=intermediate] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-badge[data-d=advanced] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.card-desc {\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 10px;\n}\n.card-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 3px 8px;\n}\n.meta-icon {\n  font-size: 0.52rem;\n}\n.start-hint {\n  margin-left: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--accent, #8b5cf6);\n  opacity: 0;\n  transition: opacity 0.2s, transform 0.2s;\n  transform: translateX(-4px);\n}\n.assess-card:hover .start-hint {\n  opacity: 1;\n  transform: translateX(0);\n}\n.start-hint i {\n  font-size: 0.55rem;\n}\n.info-card {\n  margin-top: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 18px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.15);\n  border-radius: 14px;\n}\n.info-icon {\n  font-size: 1rem;\n  color: #a78bfa;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.info-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-title {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.info-desc {\n  font-size: 0.72rem;\n  color: #64748b;\n  line-height: 1.5;\n}\n:host-context(html:not(.dark)) .assess-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .assess-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow.g1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-glow.g2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .hero-sub {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .hero-stats {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n:host-context(html:not(.dark)) .stat-num {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .stat-lbl {\n  color: rgba(255, 255, 255, 0.65);\n}\n:host-context(html:not(.dark)) .stat-div {\n  background: rgba(255, 255, 255, 0.2);\n}\n:host-context(html:not(.dark)) .assess-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .assess-card:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .assess-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .assess-desc {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .meta-chip {\n  color: #8A9B8F;\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .sec-title {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .sec-count {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .sec-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .info-card {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: rgba(27, 67, 50, 0.15);\n}\n:host-context(html:not(.dark)) .info-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .info-desc {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .info-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .fpill {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\n:host-context(html:not(.dark)) .fpill-active {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=assess-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessListComponent, { className: "AssessListComponent", filePath: "src/app/features/assessments/assess-list.component.ts", lineNumber: 488 });
})();
export {
  AssessListComponent
};
//# sourceMappingURL=chunk-GWO5RN2P.js.map
