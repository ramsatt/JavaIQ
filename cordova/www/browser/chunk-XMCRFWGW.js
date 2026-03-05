import {
  SearchModalComponent
} from "./chunk-PTAGLL6J.js";
import "./chunk-XKIWGTQY.js";
import "./chunk-3EDGEEL3.js";
import "./chunk-QFFHBMTJ.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRefresher,
  IonRefresherContent,
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
  ViewChild,
  setClassMetadata,
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
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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

// src/app/features/tutorials/tutorial-list.component.ts
var _c0 = ["searchModal"];
var _c1 = (a0) => ["/tutorials", a0];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.slug;
function TutorialListComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const \u0275$index_81_r4 = ctx.$index;
    \u0275\u0275classProp("filter-active", \u0275$index_81_r4 === 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(cat_r3.faIcon);
    \u0275\u0275styleProp("color", cat_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.label);
  }
}
function TutorialListComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "div", 40)(3, "div", 41);
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43)(6, "h3", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 46)(11, "span", 47);
    \u0275\u0275element(12, "i", 48);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 47);
    \u0275\u0275element(15, "i", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 50);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 51);
    \u0275\u0275element(20, "i", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275styleProp("--accent", c_r5.accentColor);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, c_r5.slug));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", c_r5.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(c_r5.faIcon);
    \u0275\u0275styleProp("color", c_r5.accentColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", c_r5.chapterCount, " chapters ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r5.estimatedTime, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-level", c_r5.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r5.difficulty, " ");
  }
}
var TutorialListComponent = class _TutorialListComponent {
  searchModal;
  categoryPills = [
    { faIcon: "fa-solid fa-layer-group", label: "All", color: "#8b5cf6" },
    { faIcon: "fa-solid fa-mug-hot", label: "Core Java", color: "#f59e0b" },
    { faIcon: "fa-solid fa-leaf", label: "Spring", color: "#10b981" },
    { faIcon: "fa-solid fa-cubes", label: "Architecture", color: "#3b82f6" },
    { faIcon: "fa-solid fa-arrows-spin", label: "Advanced", color: "#ef4444" }
  ];
  courses = [
    {
      slug: "core-java",
      title: "Core Java",
      description: "OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.",
      faIcon: "fa-solid fa-mug-hot",
      accentColor: "#f59e0b",
      iconBg: "rgba(245,158,11,0.12)",
      chapterCount: 15,
      difficulty: "beginner",
      estimatedTime: "8 hours"
    },
    {
      slug: "spring-framework",
      title: "Spring Framework",
      description: "IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.",
      faIcon: "fa-solid fa-leaf",
      accentColor: "#10b981",
      iconBg: "rgba(16,185,129,0.12)",
      chapterCount: 12,
      difficulty: "intermediate",
      estimatedTime: "10 hours"
    },
    {
      slug: "spring-boot",
      title: "Spring Boot",
      description: "Auto-configuration, starters, REST APIs, security, actuator, and production deployment.",
      faIcon: "fa-solid fa-rocket",
      accentColor: "#3b82f6",
      iconBg: "rgba(59,130,246,0.12)",
      chapterCount: 18,
      difficulty: "intermediate",
      estimatedTime: "10 hours"
    },
    {
      slug: "hibernate",
      title: "Hibernate & JPA",
      description: "ORM fundamentals, entity mapping, relationships, caching, and performance tuning.",
      faIcon: "fa-solid fa-database",
      accentColor: "#f97316",
      iconBg: "rgba(249,115,22,0.12)",
      chapterCount: 10,
      difficulty: "intermediate",
      estimatedTime: "5 hours"
    },
    {
      slug: "microservices",
      title: "Microservices",
      description: "Service discovery, API gateway, circuit breakers, event-driven design, and Docker.",
      faIcon: "fa-solid fa-cubes",
      accentColor: "#8b5cf6",
      iconBg: "rgba(139,92,246,0.12)",
      chapterCount: 14,
      difficulty: "advanced",
      estimatedTime: "8 hours"
    },
    {
      slug: "multithreading",
      title: "Multithreading",
      description: "Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.",
      faIcon: "fa-solid fa-bolt",
      accentColor: "#eab308",
      iconBg: "rgba(234,179,8,0.12)",
      chapterCount: 8,
      difficulty: "advanced",
      estimatedTime: "4 hours"
    },
    {
      slug: "design-patterns",
      title: "Design Patterns",
      description: "Creational, Structural, and Behavioral patterns with real-world Java implementations.",
      faIcon: "fa-solid fa-puzzle-piece",
      accentColor: "#ec4899",
      iconBg: "rgba(236,72,153,0.12)",
      chapterCount: 12,
      difficulty: "intermediate",
      estimatedTime: "6 hours"
    }
  ];
  get totalChapters() {
    return this.courses.reduce((s, c) => s + c.chapterCount, 0);
  }
  get totalHours() {
    return this.courses.reduce((s, c) => s + parseInt(c.estimatedTime), 0);
  }
  handleRefresh(event) {
    setTimeout(() => event.detail.complete(), 500);
  }
  static \u0275fac = function TutorialListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialListComponent, selectors: [["app-tutorial-list"]], viewQuery: function TutorialListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchModal = _t.first);
    }
  }, decls: 61, vars: 4, consts: [["searchModal", ""], ["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["color", "light"], ["slot", "end"], [1, "search-btn", 3, "click"], [1, "fa-solid", "fa-magnifying-glass"], [1, "tut-content"], ["slot", "fixed", 3, "ionRefresh"], [1, "hero-section"], [1, "hero-glow", "hero-glow-1"], [1, "hero-glow", "hero-glow-2"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-graduation-cap", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "hero-subtitle"], [1, "hero-stats"], [1, "hero-stat"], [1, "hero-stat-val"], [1, "hero-stat-lbl"], [1, "hero-stat-divider"], [1, "page-body"], [1, "filter-row"], [1, "filter-chip", 3, "filter-active"], [1, "section-head"], [1, "section-head-left"], [1, "fa-solid", "fa-book-open", "section-icon"], [1, "section-title"], [1, "section-count"], [1, "course-list"], [1, "course-card", 3, "routerLink", "--accent"], [1, "tut-footer"], [1, "footer-text"], [1, "filter-chip"], [1, "filter-chip-icon"], [1, "course-card", 3, "routerLink"], [1, "course-accent-top"], [1, "course-card-inner"], [1, "course-icon"], [1, "course-fa-icon"], [1, "course-info"], [1, "course-title"], [1, "course-desc"], [1, "course-meta"], [1, "meta-chip"], [1, "fa-solid", "fa-book", "meta-chip-icon"], [1, "fa-regular", "fa-clock", "meta-chip-icon"], [1, "diff-tag"], [1, "course-arrow"], [1, "fa-solid", "fa-chevron-right"]], template: function TutorialListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "ion-header", 1)(1, "ion-toolbar", 2)(2, "ion-buttons", 3);
      \u0275\u0275element(3, "ion-menu-button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-buttons", 5)(5, "button", 6);
      \u0275\u0275listener("click", function TutorialListComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        const searchModal_r2 = \u0275\u0275reference(8);
        return \u0275\u0275resetView(searchModal_r2.open());
      });
      \u0275\u0275element(6, "i", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(7, "app-search-modal", null, 0);
      \u0275\u0275elementStart(9, "ion-content", 8)(10, "ion-refresher", 9);
      \u0275\u0275listener("ionRefresh", function TutorialListComponent_Template_ion_refresher_ionRefresh_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.handleRefresh($event));
      });
      \u0275\u0275element(11, "ion-refresher-content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275element(13, "div", 11)(14, "div", 12);
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275element(17, "i", 15);
      \u0275\u0275text(18, " Learning Platform ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "h1", 16);
      \u0275\u0275text(20, "Level Up Your");
      \u0275\u0275element(21, "br");
      \u0275\u0275elementStart(22, "span", 17);
      \u0275\u0275text(23, "Java Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p", 18);
      \u0275\u0275text(25, "Structured courses from fundamentals to advanced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "span", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span", 22);
      \u0275\u0275text(31, "Chapters");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "div", 23);
      \u0275\u0275elementStart(33, "div", 20)(34, "span", 21);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275text(37, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(38, "div", 23);
      \u0275\u0275elementStart(39, "div", 20)(40, "span", 21);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 22);
      \u0275\u0275text(43, "Content");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 24)(45, "div", 25);
      \u0275\u0275repeaterCreate(46, TutorialListComponent_For_47_Template, 4, 7, "button", 26, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 27)(49, "div", 28);
      \u0275\u0275element(50, "i", 29);
      \u0275\u0275elementStart(51, "span", 30);
      \u0275\u0275text(52, "All Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "span", 31);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 32);
      \u0275\u0275repeaterCreate(56, TutorialListComponent_For_57_Template, 21, 17, "a", 33, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 34)(59, "p", 35);
      \u0275\u0275text(60, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(29);
      \u0275\u0275textInterpolate(ctx.totalChapters);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.courses.length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.totalHours, "h");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.categoryPills);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.courses.length, " courses");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.courses);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, SearchModalComponent], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n.search-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  margin-right: 8px;\n  transition: all 0.2s;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.1);\n}\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1[_ngcontent-%COMP%] {\n  top: -60px;\n  right: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2[_ngcontent-%COMP%] {\n  bottom: -30px;\n  left: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #8b5cf6;\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-badge-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 50%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 24px;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px 8px;\n}\n.hero-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.hero-stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-stat-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.hero-stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.page-body[_ngcontent-%COMP%] {\n  padding: 24px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 28px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filter-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n}\n.filter-active[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15) !important;\n  border-color: rgba(139, 92, 246, 0.3) !important;\n  color: #a78bfa !important;\n}\n.filter-chip-icon[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #8b5cf6;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.course-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.course-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.course-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.course-accent-top[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--accent, #8b5cf6);\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-accent-top[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.course-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 16px 18px;\n}\n.course-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.course-fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.course-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.course-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\n.course-desc[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.course-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 3px 8px;\n}\n.meta-chip-icon[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.diff-tag[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.diff-tag[data-level=beginner][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-tag[data-level=intermediate][_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-tag[data-level=advanced][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.course-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  margin-top: 18px;\n  transition: all 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #8b5cf6);\n  transform: translateX(2px);\n}\n.tut-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stat-val[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stat-val[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stat-lbl[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stat-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-stat-divider[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-stat-divider[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-desc[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-desc[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-arrow[_ngcontent-%COMP%] {\n  color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #1B4332);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%]:hover {\n  background: #F5F7F2 !important;\n  border-color: #B7CCBB !important;\n  color: #1B4332 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-active[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .filter-active[_ngcontent-%COMP%] {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .diff-tag[data-level=beginner][_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .diff-tag[data-level=beginner][_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.1);\n  color: #059669;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .diff-tag[data-level=intermediate][_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .diff-tag[data-level=intermediate][_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.1);\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .diff-tag[data-level=advanced][_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .diff-tag[data-level=advanced][_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n/*# sourceMappingURL=tutorial-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialListComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, SearchModalComponent], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <button class="search-btn" (click)="searchModal.open()">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <app-search-modal #searchModal></app-search-modal>

    <ion-content class="tut-content">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-graduation-cap hero-badge-icon"></i>
            Learning Platform
          </span>
          <h1 class="hero-title">Level Up Your<br><span class="hero-accent">Java Skills</span></h1>
          <p class="hero-subtitle">Structured courses from fundamentals to advanced</p>

          <!-- Stats Row -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-val">{{ totalChapters }}</span>
              <span class="hero-stat-lbl">Chapters</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-val">{{ courses.length }}</span>
              <span class="hero-stat-lbl">Courses</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-val">{{ totalHours }}h</span>
              <span class="hero-stat-lbl">Content</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-body">
        <!-- Quick Category Filters -->
        <div class="filter-row">
          @for (cat of categoryPills; track cat.label; let i = $index) {
            <button class="filter-chip" [class.filter-active]="i === 0">
              <i [class]="cat.faIcon" class="filter-chip-icon" [style.color]="cat.color"></i>
              <span>{{ cat.label }}</span>
            </button>
          }
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="section-head-left">
            <i class="fa-solid fa-book-open section-icon"></i>
            <span class="section-title">All Courses</span>
          </div>
          <span class="section-count">{{ courses.length }} courses</span>
        </div>

        <!-- Course Cards -->
        <div class="course-list">
          @for (c of courses; track c.slug) {
            <a [routerLink]="['/tutorials', c.slug]" class="course-card" [style.--accent]="c.accentColor">
              <!-- Accent top border -->
              <div class="course-accent-top"></div>

              <div class="course-card-inner">
                <!-- Icon -->
                <div class="course-icon" [style.background]="c.iconBg">
                  <i [class]="c.faIcon" class="course-fa-icon" [style.color]="c.accentColor"></i>
                </div>

                <!-- Info -->
                <div class="course-info">
                  <h3 class="course-title">{{ c.title }}</h3>
                  <p class="course-desc">{{ c.description }}</p>
                  <div class="course-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-book meta-chip-icon"></i>
                      {{ c.chapterCount }} chapters
                    </span>
                    <span class="meta-chip">
                      <i class="fa-regular fa-clock meta-chip-icon"></i>
                      {{ c.estimatedTime }}
                    </span>
                    <span class="diff-tag" [attr.data-level]="c.difficulty">
                      {{ c.difficulty }}
                    </span>
                  </div>
                </div>

                <!-- Arrow -->
                <div class="course-arrow">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
          }
        </div>

        <!-- Footer -->
        <div class="tut-footer">
          <p class="footer-text">Built with \u2764\uFE0F for Java developers</p>
        </div>
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;e7de7e06e5a9ac47c95cee7cd80a3b56dcef56cd93810fffdf4548b9a3960e0f;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/tutorial-list.component.ts */\n.search-btn {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  margin-right: 8px;\n  transition: all 0.2s;\n}\n.search-btn:hover {\n  color: #e2e8f0;\n  background: rgba(255, 255, 255, 0.1);\n}\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.hero-section {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1 {\n  top: -60px;\n  right: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(139, 92, 246, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2 {\n  bottom: -30px;\n  left: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #8b5cf6;\n  background: rgba(139, 92, 246, 0.1);\n  border: 1px solid rgba(139, 92, 246, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-badge-icon {\n  font-size: 0.7rem;\n}\n.hero-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 8px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6 0%,\n      #a78bfa 50%,\n      #c4b5fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-subtitle {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 24px;\n}\n.hero-stats {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px 8px;\n}\n.hero-stat {\n  text-align: center;\n  flex: 1;\n}\n.hero-stat-val {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #a78bfa);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-stat-lbl {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 3px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.hero-stat-divider {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.page-body {\n  padding: 24px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 28px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filter-row::-webkit-scrollbar {\n  display: none;\n}\n.filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-chip:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n}\n.filter-active {\n  background: rgba(139, 92, 246, 0.15) !important;\n  border-color: rgba(139, 92, 246, 0.3) !important;\n  color: #a78bfa !important;\n}\n.filter-chip-icon {\n  font-size: 0.72rem;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon {\n  font-size: 0.7rem;\n  color: #8b5cf6;\n}\n.section-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.course-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.course-card {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.course-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.course-card:active {\n  transform: scale(0.98);\n}\n.course-accent-top {\n  height: 3px;\n  background: var(--accent, #8b5cf6);\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.course-card:hover .course-accent-top {\n  opacity: 0.9;\n}\n.course-card-inner {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  padding: 16px 16px 18px;\n}\n.course-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.course-fa-icon {\n  font-size: 1.2rem;\n}\n.course-info {\n  flex: 1;\n  min-width: 0;\n}\n.course-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\n.course-desc {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.course-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 3px 8px;\n}\n.meta-chip-icon {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.diff-tag {\n  font-family: "Inter", sans-serif;\n  font-size: 0.55rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.diff-tag[data-level=beginner] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-tag[data-level=intermediate] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-tag[data-level=advanced] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.course-arrow {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  margin-top: 18px;\n  transition: all 0.2s ease;\n}\n.course-card:hover .course-arrow {\n  color: var(--accent, #8b5cf6);\n  transform: translateX(2px);\n}\n.tut-footer {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow-1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-glow-2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .hero-subtitle {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .hero-stats {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n:host-context(html:not(.dark)) .hero-stat-val {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #86efac);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .hero-stat-lbl {\n  color: rgba(255, 255, 255, 0.65);\n}\n:host-context(html:not(.dark)) .hero-stat-divider {\n  background: rgba(255, 255, 255, 0.2);\n}\n:host-context(html:not(.dark)) .course-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .course-card:hover {\n  background: #ffffff;\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .course-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .course-desc {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .meta-chip {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .course-arrow {\n  color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .course-card:hover .course-arrow {\n  color: var(--accent, #1B4332);\n}\n:host-context(html:not(.dark)) .section-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .section-title {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .section-count {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .filter-chip {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\n:host-context(html:not(.dark)) .filter-chip:hover {\n  background: #F5F7F2 !important;\n  border-color: #B7CCBB !important;\n  color: #1B4332 !important;\n}\n:host-context(html:not(.dark)) .filter-active {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n:host-context(html:not(.dark)) .footer-text {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .diff-tag[data-level=beginner] {\n  background: rgba(5, 150, 105, 0.1);\n  color: #059669;\n}\n:host-context(html:not(.dark)) .diff-tag[data-level=intermediate] {\n  background: rgba(27, 67, 50, 0.1);\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .diff-tag[data-level=advanced] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n}\n/*# sourceMappingURL=tutorial-list.component.css.map */\n'] }]
  }], null, { searchModal: [{
    type: ViewChild,
    args: ["searchModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialListComponent, { className: "TutorialListComponent", filePath: "src/app/features/tutorials/tutorial-list.component.ts", lineNumber: 648 });
})();
export {
  TutorialListComponent
};
//# sourceMappingURL=chunk-XMCRFWGW.js.map
