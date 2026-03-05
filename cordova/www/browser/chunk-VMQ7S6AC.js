import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-YU6DDDO5.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  RouterLink
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/features/interview-questions/iq-list.component.ts
var _c0 = (a0) => ["/interview-questions", a0];
var _forTrack0 = ($index, $item) => $item.key;
function IqListComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "h3", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 37);
    \u0275\u0275element(11, "i", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275element(13, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--accent", cat_r1.accentColor);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, cat_r1.key));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", cat_r1.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(cat_r1.faIcon);
    \u0275\u0275styleProp("color", cat_r1.accentColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getVisited(cat_r1.categoryName), " / ", cat_r1.questionCount, " covered ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.getProgressPercent(cat_r1.categoryName), "%")("background", cat_r1.accentColor);
  }
}
var IqListComponent = class _IqListComponent {
  dataService = inject(DataService);
  categories = [
    {
      key: "core-java",
      title: "Core Java",
      categoryName: "Core Java",
      questionCount: 51,
      faIcon: "fa-solid fa-mug-hot",
      accentColor: "#f59e0b",
      iconBg: "rgba(245,158,11,0.12)"
    },
    {
      key: "spring-boot",
      title: "Spring Boot",
      categoryName: "Spring Boot",
      questionCount: 52,
      faIcon: "fa-solid fa-leaf",
      accentColor: "#10b981",
      iconBg: "rgba(16,185,129,0.12)"
    },
    {
      key: "microservices",
      title: "Microservices",
      categoryName: "Microservices",
      questionCount: 35,
      faIcon: "fa-solid fa-cubes",
      accentColor: "#8b5cf6",
      iconBg: "rgba(139,92,246,0.12)"
    },
    {
      key: "hibernate",
      title: "Hibernate",
      categoryName: "Hibernate",
      questionCount: 29,
      faIcon: "fa-solid fa-database",
      accentColor: "#f97316",
      iconBg: "rgba(249,115,22,0.12)"
    },
    {
      key: "coding-patterns",
      title: "Coding Questions",
      categoryName: "Coding Questions",
      questionCount: 20,
      faIcon: "fa-solid fa-code",
      accentColor: "#06b6d4",
      iconBg: "rgba(6,182,212,0.12)"
    },
    {
      key: "reactive-prog",
      title: "Reactive Programming",
      categoryName: "Reactive Programming",
      questionCount: 18,
      faIcon: "fa-solid fa-bolt",
      accentColor: "#ec4899",
      iconBg: "rgba(236,72,153,0.12)"
    },
    {
      key: "multithreading",
      title: "Multithreading",
      categoryName: "Multithreading",
      questionCount: 17,
      faIcon: "fa-solid fa-arrows-spin",
      accentColor: "#eab308",
      iconBg: "rgba(234,179,8,0.12)"
    },
    {
      key: "spring-reactive",
      title: "Spring Reactive",
      categoryName: "Spring Reactive",
      questionCount: 13,
      faIcon: "fa-solid fa-wave-square",
      accentColor: "#3b82f6",
      iconBg: "rgba(59,130,246,0.12)"
    }
  ];
  get totalQuestions() {
    return this.categories.reduce((s, c) => s + c.questionCount, 0);
  }
  totalVisited = computed(() => {
    this.dataService.revealedQuestionIds();
    return this.categories.reduce((s, c) => s + this.dataService.getVisitedCount(c.categoryName), 0);
  }, ...ngDevMode ? [{ debugName: "totalVisited" }] : []);
  overallProgress = computed(() => {
    this.dataService.revealedQuestionIds();
    const total = this.totalQuestions;
    if (total === 0)
      return 0;
    return Math.round(this.totalVisited() / total * 100);
  }, ...ngDevMode ? [{ debugName: "overallProgress" }] : []);
  getVisited(categoryName) {
    return this.dataService.getVisitedCount(categoryName);
  }
  getProgressPercent(categoryName) {
    return this.dataService.getProgress(categoryName);
  }
  handleRefresh(event) {
    setTimeout(() => event.detail.complete(), 500);
  }
  static \u0275fac = function IqListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IqListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IqListComponent, selectors: [["app-iq-list"]], decls: 53, vars: 5, consts: [["translucent", "true", 1, "ion-no-border"], [1, "iq-toolbar"], ["slot", "start"], ["color", "light"], [1, "iq-brand"], [1, "brand-icon"], [1, "iq-page-content"], ["slot", "fixed", 3, "ionRefresh"], [1, "page-wrapper"], [1, "hero-section"], [1, "hero-glow"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-accent"], [1, "hero-subtitle"], [1, "stats-bar"], [1, "stat-item"], [1, "stat-value"], [1, "stat-label"], [1, "stat-divider"], [1, "overall-progress-track"], [1, "overall-progress-bar"], [1, "section-header"], [1, "section-tag"], [1, "fa-solid", "fa-layer-group", "section-tag-icon"], [1, "topic-grid"], [1, "topic-card", 3, "routerLink", "--accent"], [1, "page-footer"], [1, "footer-text"], [1, "topic-card", 3, "routerLink"], [1, "topic-accent-line"], [1, "topic-card-inner"], [1, "topic-icon-wrap"], [1, "topic-fa-icon"], [1, "topic-info"], [1, "topic-name"], [1, "topic-count"], [1, "topic-arrow"], [1, "fa-solid", "fa-chevron-right"], [1, "topic-progress-track"], [1, "topic-progress-bar"]], template: function IqListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4)(5, "span", 5);
      \u0275\u0275text(6, "\u2615");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " JavaIQ ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "ion-content", 6)(9, "ion-refresher", 7);
      \u0275\u0275listener("ionRefresh", function IqListComponent_Template_ion_refresher_ionRefresh_9_listener($event) {
        return ctx.handleRefresh($event);
      });
      \u0275\u0275element(10, "ion-refresher-content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
      \u0275\u0275element(13, "div", 10);
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275text(15, "\u{1F4BC} Interview Prep");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h1", 12);
      \u0275\u0275text(17, "Master Your");
      \u0275\u0275element(18, "br");
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20, "Java Interview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 14);
      \u0275\u0275text(22, "Curated questions from top tech companies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "span", 17);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28, "Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 19);
      \u0275\u0275elementStart(30, "div", 16)(31, "span", 17);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 18);
      \u0275\u0275text(34, "Covered");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "div", 19);
      \u0275\u0275elementStart(36, "div", 16)(37, "span", 17);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40, "Progress");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 20);
      \u0275\u0275element(42, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 22)(44, "span", 23);
      \u0275\u0275element(45, "i", 24);
      \u0275\u0275text(46, " Browse Topics ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 25);
      \u0275\u0275repeaterCreate(48, IqListComponent_For_49_Template, 14, 18, "a", 26, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 27)(51, "p", 28);
      \u0275\u0275text(52, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate(ctx.totalQuestions);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalVisited());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.overallProgress(), "%");
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("width", ctx.overallProgress(), "%");
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.categories);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n.iq-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.iq-brand[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.2rem;\n  letter-spacing: -0.02em;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.iq-page-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 28px 16px 24px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.15) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n  margin: 0 0 8px;\n  position: relative;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 100px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0;\n  letter-spacing: 0.01em;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px 8px;\n  margin-bottom: 12px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.overall-progress-track[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 28px;\n}\n.overall-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.section-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n}\n.section-tag-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #10b981;\n}\n.topic-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.topic-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.topic-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.topic-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.topic-accent-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  background: var(--accent, #10b981);\n  border-radius: 0 3px 3px 0;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.topic-card[_ngcontent-%COMP%]:hover   .topic-accent-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.topic-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 16px 10px 20px;\n}\n.topic-icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.topic-fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.topic-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.topic-name[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.topic-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.topic-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n}\n.topic-card[_ngcontent-%COMP%]:hover   .topic-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #10b981);\n  transform: translateX(2px);\n}\n.topic-progress-track[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.04);\n  margin: 0 20px 12px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.topic-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.page-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .iq-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .iq-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .iq-page-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .iq-page-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n  padding: 44px 32px 60px;\n  margin: 0 -16px;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 4px 20px rgba(27, 67, 50, 0.15);\n  border-radius: 16px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-divider[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  background: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .overall-progress-track[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .overall-progress-track[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.08);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%]:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-progress-track[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-progress-track[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-name[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-name[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-count[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-arrow[_ngcontent-%COMP%] {\n  color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%]:hover   .topic-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%]:hover   .topic-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #1B4332);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-tag[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-tag[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-tag-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-tag-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=iq-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IqListComponent, [{
    type: Component,
    args: [{ selector: "app-iq-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="iq-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="iq-brand">
          <span class="brand-icon">\u2615</span> JavaIQ
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="iq-page-content">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="page-wrapper">

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-glow"></div>
          <div class="hero-badge">\u{1F4BC} Interview Prep</div>
          <h1 class="hero-title">Master Your<br><span class="hero-accent">Java Interview</span></h1>
          <p class="hero-subtitle">Curated questions from top tech companies</p>
        </div>

        <!-- Stats Bar -->
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-value">{{ totalQuestions }}</span>
            <span class="stat-label">Questions</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ totalVisited() }}</span>
            <span class="stat-label">Covered</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ overallProgress() }}%</span>
            <span class="stat-label">Progress</span>
          </div>
        </div>

        <!-- Overall progress bar -->
        <div class="overall-progress-track">
          <div class="overall-progress-bar" [style.width.%]="overallProgress()"></div>
        </div>

        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">
            <i class="fa-solid fa-layer-group section-tag-icon"></i>
            Browse Topics
          </span>
        </div>

        <!-- Topic Grid -->
        <div class="topic-grid">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/interview-questions', cat.key]" class="topic-card" [style.--accent]="cat.accentColor">
              <div class="topic-accent-line"></div>
              <div class="topic-card-inner">
                <div class="topic-icon-wrap" [style.background]="cat.iconBg">
                  <i [class]="cat.faIcon" class="topic-fa-icon" [style.color]="cat.accentColor"></i>
                </div>
                <div class="topic-info">
                  <h3 class="topic-name">{{ cat.title }}</h3>
                  <span class="topic-count">
                    {{ getVisited(cat.categoryName) }} / {{ cat.questionCount }} covered
                  </span>
                </div>
                <div class="topic-arrow">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="topic-progress-track">
                <div class="topic-progress-bar"
                     [style.width.%]="getProgressPercent(cat.categoryName)"
                     [style.background]="cat.accentColor"></div>
              </div>
            </a>
          }
        </div>

        <!-- Footer -->
        <div class="page-footer">
          <p class="footer-text">Built with \u2764\uFE0F for Java developers</p>
        </div>
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;ab4f06562da36aa704653f31f70ef05fb31084a89f5cc0252b4ce33c584ab9aa;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/interview-questions/iq-list.component.ts */\n.iq-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.iq-brand {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.2rem;\n  letter-spacing: -0.02em;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.brand-icon {\n  font-size: 1.1rem;\n}\n.iq-page-content {\n  --background: #0b1120;\n}\n.page-wrapper {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero-section {\n  position: relative;\n  text-align: center;\n  padding: 28px 16px 24px;\n}\n.hero-glow {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.15) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.2;\n  margin: 0 0 8px;\n  position: relative;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 100px;\n  padding: 5px 14px;\n  margin-bottom: 14px;\n}\n.hero-subtitle {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0;\n  letter-spacing: 0.01em;\n}\n.stats-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 18px 8px;\n  margin-bottom: 12px;\n}\n.stat-item {\n  text-align: center;\n  flex: 1;\n}\n.stat-value {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider {\n  width: 1px;\n  height: 28px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.overall-progress-track {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 28px;\n}\n.overall-progress-bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  border-radius: 4px;\n  transition: width 0.6s ease;\n}\n.section-header {\n  margin-bottom: 14px;\n}\n.section-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n}\n.section-tag-icon {\n  font-size: 0.65rem;\n  color: #10b981;\n}\n.topic-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.topic-card {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 0;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.topic-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  transform: translateY(-2px);\n}\n.topic-card:active {\n  transform: scale(0.98);\n}\n.topic-accent-line {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  background: var(--accent, #10b981);\n  border-radius: 0 3px 3px 0;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.topic-card:hover .topic-accent-line {\n  opacity: 1;\n}\n.topic-card-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 16px 10px 20px;\n}\n.topic-icon-wrap {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.topic-fa-icon {\n  font-size: 1.15rem;\n}\n.topic-info {\n  flex: 1;\n  min-width: 0;\n}\n.topic-name {\n  font-family: "Inter", sans-serif;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.topic-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.topic-arrow {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n}\n.topic-card:hover .topic-arrow {\n  color: var(--accent, #10b981);\n  transform: translateX(2px);\n}\n.topic-progress-track {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.04);\n  margin: 0 20px 12px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.topic-progress-bar {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.6s ease;\n}\n.page-footer {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\n:host-context(html:not(.dark)) .iq-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .iq-page-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n  padding: 44px 32px 60px;\n  margin: 0 -16px;\n}\n:host-context(html:not(.dark)) .hero-glow {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .hero-subtitle {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .stats-bar {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 4px 20px rgba(27, 67, 50, 0.15);\n  border-radius: 16px;\n  margin-top: -32px;\n  position: relative;\n  z-index: 2;\n}\n:host-context(html:not(.dark)) .stat-value {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .stat-label {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .stat-divider {\n  background: #D6DDD2;\n}\n:host-context(html:not(.dark)) .overall-progress-track {\n  background: rgba(27, 67, 50, 0.08);\n}\n:host-context(html:not(.dark)) .topic-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .topic-card:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .topic-progress-track {\n  background: rgba(27, 67, 50, 0.06);\n}\n:host-context(html:not(.dark)) .topic-name {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .topic-count {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .topic-arrow {\n  color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .topic-card:hover .topic-arrow {\n  color: var(--accent, #1B4332);\n}\n:host-context(html:not(.dark)) .section-tag {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .section-tag-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .footer-text {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=iq-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IqListComponent, { className: "IqListComponent", filePath: "src/app/features/interview-questions/iq-list.component.ts", lineNumber: 480 });
})();
export {
  IqListComponent
};
//# sourceMappingURL=chunk-VMQ7S6AC.js.map
