import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// src/app/features/coding-questions/cq-list.component.ts
var _c0 = (a0) => ["/coding-questions", a0];
var _forTrack0 = ($index, $item) => $item.key;
function CqListComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "div", 32)(3, "div", 33);
    \u0275\u0275element(4, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35)(6, "h3", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37)(9, "span", 38);
    \u0275\u0275element(10, "i", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 40);
    \u0275\u0275element(13, "i", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--accent", cat_r1.accentColor);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, cat_r1.key));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", cat_r1.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(cat_r1.faIcon);
    \u0275\u0275styleProp("color", cat_r1.accentColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", cat_r1.count, " problems ");
  }
}
var CqListComponent = class _CqListComponent {
  categories = [
    { key: "arrays", title: "Arrays & Strings", faIcon: "fa-solid fa-chart-bar", accentColor: "#3b82f6", iconBg: "rgba(59,130,246,0.12)", count: 15 },
    { key: "linked-lists", title: "Linked Lists", faIcon: "fa-solid fa-link", accentColor: "#06b6d4", iconBg: "rgba(6,182,212,0.12)", count: 10 },
    { key: "trees", title: "Trees & Graphs", faIcon: "fa-solid fa-network-wired", accentColor: "#10b981", iconBg: "rgba(16,185,129,0.12)", count: 12 },
    { key: "dp", title: "Dynamic Programming", faIcon: "fa-solid fa-calculator", accentColor: "#8b5cf6", iconBg: "rgba(139,92,246,0.12)", count: 15 },
    { key: "sorting", title: "Sorting & Searching", faIcon: "fa-solid fa-sort-amount-down", accentColor: "#f59e0b", iconBg: "rgba(245,158,11,0.12)", count: 8 },
    { key: "stacks", title: "Stacks & Queues", faIcon: "fa-solid fa-layer-group", accentColor: "#f97316", iconBg: "rgba(249,115,22,0.12)", count: 8 },
    { key: "recursion", title: "Recursion & Backtracking", faIcon: "fa-solid fa-rotate", accentColor: "#ec4899", iconBg: "rgba(236,72,153,0.12)", count: 10 },
    { key: "hashing", title: "Hashing", faIcon: "fa-solid fa-hashtag", accentColor: "#6366f1", iconBg: "rgba(99,102,241,0.12)", count: 7 }
  ];
  static \u0275fac = function CqListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CqListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CqListComponent, selectors: [["app-cq-list"]], decls: 45, vars: 1, consts: [["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["color", "light"], [1, "brand-title"], [1, "tut-content"], [1, "hero-section"], [1, "hero-glow", "hero-glow-1"], [1, "hero-glow", "hero-glow-2"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-code", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "search-wrapper"], [1, "fa-solid", "fa-magnifying-glass", "search-icon"], ["placeholder", "Search problems (e.g. Two Sum)...", 1, "search-input"], [1, "page-body"], [1, "filter-row"], [1, "filter-chip", "filter-active"], [1, "filter-chip"], [1, "section-head"], [1, "section-head-left"], [1, "fa-solid", "fa-folder-open", "section-icon"], [1, "section-title"], [1, "section-count"], [1, "course-list"], [1, "course-card", 3, "routerLink", "--accent"], [1, "tut-footer"], [1, "footer-text"], [1, "course-card", 3, "routerLink"], [1, "course-accent-top"], [1, "course-card-inner"], [1, "course-icon"], [1, "course-fa-icon"], [1, "course-info"], [1, "course-title"], [1, "course-meta"], [1, "meta-chip"], [1, "fa-solid", "fa-puzzle-piece", "meta-chip-icon"], [1, "course-arrow"], [1, "fa-solid", "fa-chevron-right"]], template: function CqListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4);
      \u0275\u0275text(5, "JavaIQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 5)(7, "div", 6);
      \u0275\u0275element(8, "div", 7)(9, "div", 8);
      \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13, " Coding Practice ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1", 12);
      \u0275\u0275text(15, "Master Data Structures");
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, "& Algorithms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "i", 15)(21, "input", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "button", 19);
      \u0275\u0275text(25, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 20);
      \u0275\u0275text(27, "Easy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 20);
      \u0275\u0275text(29, "Medium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 20);
      \u0275\u0275text(31, "Hard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 21)(33, "div", 22);
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275elementStart(35, "span", 24);
      \u0275\u0275text(36, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "span", 25);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 26);
      \u0275\u0275repeaterCreate(40, CqListComponent_For_41_Template, 14, 13, "a", 27, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 28)(43, "p", 29);
      \u0275\u0275text(44, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(38);
      \u0275\u0275textInterpolate1("", ctx.categories.length, " topics");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories);
    }
  }, dependencies: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1[_ngcontent-%COMP%] {\n  top: -40px;\n  left: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2[_ngcontent-%COMP%] {\n  bottom: -30px;\n  right: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: left;\n  margin-top: 10px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-badge-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 24px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 14px 22px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #94a3b8;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #ffffff;\n  font-family: inherit;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n  font-weight: 400;\n}\n.page-body[_ngcontent-%COMP%] {\n  padding: 12px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 28px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filter-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n}\n.filter-active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #34d399 !important;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10b981;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.course-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.course-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.course-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.course-accent-top[_ngcontent-%COMP%] {\n  height: 3px;\n  background: var(--accent, #10b981);\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-accent-top[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.course-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n}\n.course-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.course-fa-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.course-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.course-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.course-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.meta-chip-icon[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.course-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #10b981);\n  transform: translateX(2px);\n}\n.tut-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:focus-within, html:not(.dark)   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.4);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder, html:not(.dark)   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.55);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-arrow[_ngcontent-%COMP%] {\n  color: #B7CCBB;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]:hover   .course-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #1B4332);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .footer-text[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .filter-chip[_ngcontent-%COMP%]:hover {\n  background: #F5F7F2 !important;\n  border-color: #B7CCBB !important;\n  color: #1B4332 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .filter-active[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .filter-active[_ngcontent-%COMP%] {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=cq-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CqListComponent, [{
    type: Component,
    args: [{ selector: "app-cq-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <!-- Premium Hero Section -->
      <div class="hero-section">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-code hero-badge-icon"></i>
            Coding Practice
          </span>
          <h1 class="hero-title">Master Data Structures<br><span class="hero-accent">& Algorithms</span></h1>
          
          <!-- Premium Search Bar -->
          <div class="search-wrapper">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input class="search-input" placeholder="Search problems (e.g. Two Sum)..." />
          </div>
        </div>
      </div>

      <div class="page-body">
        <!-- Quick Category Filters -->
        <div class="filter-row">
          <button class="filter-chip filter-active">All</button>
          <button class="filter-chip">Easy</button>
          <button class="filter-chip">Medium</button>
          <button class="filter-chip">Hard</button>
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="section-head-left">
            <i class="fa-solid fa-folder-open section-icon"></i>
            <span class="section-title">Categories</span>
          </div>
          <span class="section-count">{{ categories.length }} topics</span>
        </div>

        <!-- Course Cards / Lists -->
        <div class="course-list">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/coding-questions', cat.key]" class="course-card" [style.--accent]="cat.accentColor">
              <!-- Accent top border -->
              <div class="course-accent-top"></div>

              <div class="course-card-inner">
                <!-- Icon -->
                <div class="course-icon" [style.background]="cat.iconBg">
                  <i [class]="cat.faIcon" class="course-fa-icon" [style.color]="cat.accentColor"></i>
                </div>

                <!-- Info -->
                <div class="course-info">
                  <h3 class="course-title">{{ cat.title }}</h3>
                  <div class="course-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-puzzle-piece meta-chip-icon"></i>
                      {{ cat.count }} problems
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
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;37d097b15cff3a20f6065cb1030ca51362c9aea35b56226724c62c4588dba617;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/coding-questions/cq-list.component.ts */\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.hero-section {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1 {\n  top: -40px;\n  left: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2 {\n  bottom: -30px;\n  right: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(59, 130, 246, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  text-align: left;\n  margin-top: 10px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-badge-icon {\n  font-size: 0.7rem;\n}\n.hero-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 24px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.search-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 14px 22px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.search-wrapper:focus-within {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.search-icon {\n  font-size: 1rem;\n  color: #94a3b8;\n}\n.search-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #ffffff;\n  font-family: inherit;\n}\n.search-input::placeholder {\n  color: #64748b;\n  font-weight: 400;\n}\n.page-body {\n  padding: 12px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.filter-row {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  margin-bottom: 28px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.filter-row::-webkit-scrollbar {\n  display: none;\n}\n.filter-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  color: #94a3b8;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-chip:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.15);\n  color: #e2e8f0;\n}\n.filter-active {\n  background: rgba(16, 185, 129, 0.15) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #34d399 !important;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon {\n  font-size: 0.7rem;\n  color: #10b981;\n}\n.section-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.course-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.course-card {\n  position: relative;\n  display: block;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  text-decoration: none;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.course-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.course-card:active {\n  transform: scale(0.98);\n}\n.course-accent-top {\n  height: 3px;\n  background: var(--accent, #10b981);\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.course-card:hover .course-accent-top {\n  opacity: 0.9;\n}\n.course-card-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n}\n.course-icon {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.course-fa-icon {\n  font-size: 1.2rem;\n}\n.course-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.course-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.course-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.meta-chip-icon {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.course-arrow {\n  flex-shrink: 0;\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n}\n.course-card:hover .course-arrow {\n  color: var(--accent, #10b981);\n  transform: translateX(2px);\n}\n.tut-footer {\n  text-align: center;\n  margin-top: 40px;\n}\n.footer-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow-1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-glow-2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .search-wrapper {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n:host-context(html:not(.dark)) .search-wrapper:focus-within {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n:host-context(html:not(.dark)) .search-icon {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .search-input {\n  color: #ffffff;\n}\n:host-context(html:not(.dark)) .search-input::placeholder {\n  color: rgba(255, 255, 255, 0.55);\n}\n:host-context(html:not(.dark)) .course-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .course-card:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 6px 20px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .course-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .meta-chip {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .course-arrow {\n  color: #B7CCBB;\n}\n:host-context(html:not(.dark)) .course-card:hover .course-arrow {\n  color: var(--accent, #1B4332);\n}\n:host-context(html:not(.dark)) .section-title {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .section-count {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .section-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .footer-text {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .filter-chip {\n  background: #ffffff !important;\n  border-color: #D6DDD2 !important;\n  color: #52665A !important;\n}\n:host-context(html:not(.dark)) .filter-chip:hover {\n  background: #F5F7F2 !important;\n  border-color: #B7CCBB !important;\n  color: #1B4332 !important;\n}\n:host-context(html:not(.dark)) .filter-active {\n  background: #1B4332 !important;\n  color: white !important;\n  border-color: #1B4332 !important;\n}\n/*# sourceMappingURL=cq-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CqListComponent, { className: "CqListComponent", filePath: "src/app/features/coding-questions/cq-list.component.ts", lineNumber: 501 });
})();
export {
  CqListComponent
};
//# sourceMappingURL=chunk-6SLUMRVY.js.map
