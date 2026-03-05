import {
  LEETCODE_PROBLEMS
} from "./chunk-XKIWGTQY.js";
import {
  AdGateService
} from "./chunk-JEJRJ2G2.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-4DYJ5SOT.js";
import "./chunk-ZI6SYS5B.js";
import "./chunk-YU6DDDO5.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
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
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/leetcode/lc-list.component.ts
var _forTrack0 = ($index, $item) => $item.number;
function LcListComponent_For_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 37);
  }
}
function LcListComponent_For_59_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", p_r2.number, " ");
  }
}
function LcListComponent_For_59_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 45);
  }
}
function LcListComponent_For_59_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 46);
  }
}
function LcListComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function LcListComponent_For_59_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLc(p_r2));
    });
    \u0275\u0275elementStart(1, "div", 36);
    \u0275\u0275conditionalCreate(2, LcListComponent_For_59_Conditional_2_Template, 1, 0, "i", 37)(3, LcListComponent_For_59_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "h3", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275element(9, "i", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 43)(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, LcListComponent_For_59_Conditional_14_Template, 1, 0, "i", 45)(15, LcListComponent_For_59_Conditional_15_Template, 1, 0, "i", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("completed", ctx_r2.dataService.leetcodeCompletedIds().has(p_r2.number));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.dataService.leetcodeCompletedIds().has(p_r2.number) ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", p_r2.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(p_r2.difficulty.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2.difficulty, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.dataService.leetcodeCompletedIds().has(p_r2.number) && !ctx_r2.isUnlocked(p_r2.number) ? 14 : 15);
  }
}
var LcListComponent = class _LcListComponent {
  dataService = inject(DataService);
  router = inject(Router);
  adGate = inject(AdGateService);
  problems = signal(LEETCODE_PROBLEMS, ...ngDevMode ? [{ debugName: "problems" }] : []);
  // Computeds for totals
  easyTotalCount = computed(() => this.problems().filter((p) => p.difficulty === "Easy").length, ...ngDevMode ? [{ debugName: "easyTotalCount" }] : []);
  mediumTotalCount = computed(() => this.problems().filter((p) => p.difficulty === "Medium").length, ...ngDevMode ? [{ debugName: "mediumTotalCount" }] : []);
  hardTotalCount = computed(() => this.problems().filter((p) => p.difficulty === "Hard").length, ...ngDevMode ? [{ debugName: "hardTotalCount" }] : []);
  // Computeds for completed counts
  easyCompletedCount = computed(() => this.problems().filter((p) => p.difficulty === "Easy" && this.dataService.leetcodeCompletedIds().has(p.number)).length, ...ngDevMode ? [{ debugName: "easyCompletedCount" }] : []);
  mediumCompletedCount = computed(() => this.problems().filter((p) => p.difficulty === "Medium" && this.dataService.leetcodeCompletedIds().has(p.number)).length, ...ngDevMode ? [{ debugName: "mediumCompletedCount" }] : []);
  hardCompletedCount = computed(() => this.problems().filter((p) => p.difficulty === "Hard" && this.dataService.leetcodeCompletedIds().has(p.number)).length, ...ngDevMode ? [{ debugName: "hardCompletedCount" }] : []);
  isUnlocked(id) {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`lc::${id}`);
  }
  async openLc(p) {
    const itemId = `lc::${p.number}`;
    if (!this.dataService.leetcodeCompletedIds().has(p.number) && !this.isUnlocked(p.number)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, "this algorithm problem");
      if (!allowed)
        return;
    }
    this.router.navigate(["/leetcode", p.number]);
  }
  static \u0275fac = function LcListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LcListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LcListComponent, selectors: [["app-lc-list"]], decls: 60, vars: 7, consts: [["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["color", "light"], [1, "brand-title"], [1, "tut-content"], [1, "hero-section"], [1, "hero-glow", "hero-glow-1"], [1, "hero-glow", "hero-glow-2"], [1, "hero-inner"], [1, "hero-badge"], [1, "fa-solid", "fa-code", "hero-badge-icon"], [1, "hero-title"], [1, "hero-accent"], [1, "search-wrapper"], [1, "fa-solid", "fa-magnifying-glass", "search-icon"], ["placeholder", "Search by number or title...", 1, "search-input"], [1, "page-body"], [1, "progress-card"], [1, "progress-header"], [1, "fa-solid", "fa-chart-pie", "section-icon"], [1, "section-title"], [1, "progress-stats"], [1, "stat-box"], [1, "stat-num", "easy-text"], [1, "text-[0.6rem]", "text-slate-500", "font-normal"], [1, "stat-label"], [1, "stat-num", "medium-text"], [1, "stat-num", "hard-text"], [1, "section-head", "mt-6"], [1, "section-head-left"], [1, "fa-solid", "fa-list-ul", "section-icon"], [1, "section-count"], [1, "problem-list"], [1, "problem-card", 3, "completed"], [1, "problem-card", 3, "click"], [1, "problem-num"], [1, "fa-solid", "fa-check", "text-emerald-500"], [1, "problem-content"], [1, "problem-title"], [1, "problem-meta"], [1, "meta-chip"], [1, "fa-solid", "fa-folder", "meta-chip-icon"], [1, "problem-actions"], [1, "difficulty-badge"], [1, "fa-solid", "fa-lock", 2, "color", "#f59e0b", "font-size", "11px", "margin-left", "8px"], [1, "fa-solid", "fa-chevron-right", 2, "color", "#64748b", "font-size", "11px", "margin-left", "8px"]], template: function LcListComponent_Template(rf, ctx) {
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
      \u0275\u0275text(13, " LeetCode Top 150 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1", 12);
      \u0275\u0275text(15, "Ace Your Coding");
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, "Interviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "i", 15)(21, "input", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "div", 19);
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275elementStart(26, "span", 21);
      \u0275\u0275text(27, "Your Progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "div", 24);
      \u0275\u0275text(31);
      \u0275\u0275elementStart(32, "span", 25);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 26);
      \u0275\u0275text(35, "Easy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 27);
      \u0275\u0275text(38);
      \u0275\u0275elementStart(39, "span", 25);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 26);
      \u0275\u0275text(42, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 23)(44, "div", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementStart(46, "span", 25);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 26);
      \u0275\u0275text(49, "Hard");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 29)(51, "div", 30);
      \u0275\u0275element(52, "i", 31);
      \u0275\u0275elementStart(53, "span", 21);
      \u0275\u0275text(54, "Problem List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "span", 32);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 33);
      \u0275\u0275repeaterCreate(58, LcListComponent_For_59_Template, 16, 9, "button", 34, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(31);
      \u0275\u0275textInterpolate(ctx.easyCompletedCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/", ctx.easyTotalCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.mediumCompletedCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/", ctx.mediumTotalCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.hardCompletedCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/", ctx.hardTotalCount());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.problems().length, " problems");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.problems());
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap";\n\n\n\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1[_ngcontent-%COMP%] {\n  top: -40px;\n  left: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(239, 68, 68, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2[_ngcontent-%COMP%] {\n  bottom: -30px;\n  right: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(245, 158, 11, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: left;\n  margin-top: 10px;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #fca5a5;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 24px;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f87171 0%,\n      #fb923c 50%,\n      #fbbf24 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 14px 22px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #94a3b8;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #ffffff;\n  font-family: inherit;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n  font-weight: 400;\n}\n.page-body[_ngcontent-%COMP%] {\n  padding: 12px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.progress-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.progress-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 12px;\n  padding: 12px 0;\n  text-align: center;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 1.3rem;\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.easy-text[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.medium-text[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.hard-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head.mt-6[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.section-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #fb923c;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.problem-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.problem-card[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px;\n  color: inherit;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.problem-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.problem-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.problem-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.problem-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.problem-meta[_ngcontent-%COMP%] {\n  display: flex;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.meta-chip-icon[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.problem-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.difficulty-badge.easy[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.problem-card.completed[_ngcontent-%COMP%] {\n  border-color: rgba(16, 185, 129, 0.3);\n  background: rgba(16, 185, 129, 0.02);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-glow-2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .hero-accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:focus-within, html:not(.dark)   [_nghost-%COMP%]   .search-wrapper[_ngcontent-%COMP%]:focus-within {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.4);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder, html:not(.dark)   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.55);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .progress-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .progress-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-box[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-box[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .problem-card[_ngcontent-%COMP%]:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 4px 16px rgba(27, 67, 50, 0.1);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .problem-num[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .problem-num[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.06);\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .problem-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .problem-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .meta-chip[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\n/*# sourceMappingURL=lc-list.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LcListComponent, [{
    type: Component,
    args: [{ selector: "app-lc-list", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton], template: `
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
            LeetCode Top 150
          </span>
          <h1 class="hero-title">Ace Your Coding<br><span class="hero-accent">Interviews</span></h1>
          
          <!-- Premium Search Bar -->
          <div class="search-wrapper">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input class="search-input" placeholder="Search by number or title..." />
          </div>
        </div>
      </div>

      <div class="page-body">
        
        <!-- Progress Tracking -->
        <div class="progress-card">
          <div class="progress-header">
            <i class="fa-solid fa-chart-pie section-icon"></i>
            <span class="section-title">Your Progress</span>
          </div>
          <div class="progress-stats">
            <div class="stat-box">
              <div class="stat-num easy-text">{{ easyCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ easyTotalCount() }}</span></div>
              <div class="stat-label">Easy</div>
            </div>
            <div class="stat-box">
              <div class="stat-num medium-text">{{ mediumCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ mediumTotalCount() }}</span></div>
              <div class="stat-label">Medium</div>
            </div>
            <div class="stat-box">
              <div class="stat-num hard-text">{{ hardCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ hardTotalCount() }}</span></div>
              <div class="stat-label">Hard</div>
            </div>
          </div>
        </div>

        <!-- Section Header -->
        <div class="section-head mt-6">
          <div class="section-head-left">
            <i class="fa-solid fa-list-ul section-icon"></i>
            <span class="section-title">Problem List</span>
          </div>
          <span class="section-count">{{ problems().length }} problems</span>
        </div>

        <!-- Problems List -->
        <div class="problem-list">
          @for (p of problems(); track p.number) {
            <button (click)="openLc(p)" class="problem-card" [class.completed]="dataService.leetcodeCompletedIds().has(p.number)">
              <div class="problem-num">
                @if (dataService.leetcodeCompletedIds().has(p.number)) {
                  <i class="fa-solid fa-check text-emerald-500"></i>
                } @else {
                  {{ p.number }}
                }
              </div>
              
              <div class="problem-content">
                <h3 class="problem-title">{{ p.title }}</h3>
                <div class="problem-meta">
                  <span class="meta-chip">
                    <i class="fa-solid fa-folder meta-chip-icon"></i>
                    {{ p.category }}
                  </span>
                </div>
              </div>

              <div class="problem-actions">
                <span class="difficulty-badge" [class]="p.difficulty.toLowerCase()">
                  {{ p.difficulty }}
                </span>
                @if (!dataService.leetcodeCompletedIds().has(p.number) && !isUnlocked(p.number)) {
                  <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px; margin-left: 8px;"></i>
                } @else {
                  <i class="fa-solid fa-chevron-right" style="color: #64748b; font-size: 11px; margin-left: 8px;"></i>
                }
              </div>
            </button>
          }
        </div>

      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap";\n\n/* angular:styles/component:css;b106ce4bf481ea6f22163c6a2c0b29bee37aa6aece1bcdae931154f91b5d3db2;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/leetcode/lc-list.component.ts */\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.hero-section {\n  position: relative;\n  padding: 0 20px 32px;\n  overflow: hidden;\n}\n.hero-glow {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-glow-1 {\n  top: -40px;\n  left: -40px;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(239, 68, 68, 0.12) 0%,\n      transparent 70%);\n}\n.hero-glow-2 {\n  bottom: -30px;\n  right: -30px;\n  width: 180px;\n  height: 180px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(245, 158, 11, 0.1) 0%,\n      transparent 70%);\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  text-align: left;\n  margin-top: 10px;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #fca5a5;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.hero-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.85rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  margin: 0 0 24px;\n}\n.hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #f87171 0%,\n      #fb923c 50%,\n      #fbbf24 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.search-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 50px;\n  padding: 14px 22px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.search-wrapper:focus-within {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.2);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.search-icon {\n  font-size: 1rem;\n  color: #94a3b8;\n}\n.search-input {\n  flex: 1;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: #ffffff;\n  font-family: inherit;\n}\n.search-input::placeholder {\n  color: #64748b;\n  font-weight: 400;\n}\n.page-body {\n  padding: 12px 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.progress-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.progress-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.progress-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.stat-box {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 12px;\n  padding: 12px 0;\n  text-align: center;\n}\n.stat-num {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 1.3rem;\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n.stat-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.easy-text {\n  color: #10b981;\n}\n.medium-text {\n  color: #f59e0b;\n}\n.hard-text {\n  color: #ef4444;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.section-head.mt-6 {\n  margin-top: 24px;\n}\n.section-head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon {\n  font-size: 0.75rem;\n  color: #fb923c;\n}\n.section-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.section-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n}\n.problem-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.problem-card {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 16px;\n  color: inherit;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.problem-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.problem-num {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.problem-content {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.problem-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.problem-meta {\n  display: flex;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #94a3b8;\n}\n.meta-chip-icon {\n  font-size: 0.55rem;\n  opacity: 0.7;\n}\n.problem-actions {\n  display: flex;\n  align-items: center;\n}\n.difficulty-badge {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.difficulty-badge.easy {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.problem-card.completed {\n  border-color: rgba(16, 185, 129, 0.3);\n  background: rgba(16, 185, 129, 0.02);\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332 0%,\n      #2D6A4F 55%,\n      #40916C 100%);\n}\n:host-context(html:not(.dark)) .hero-glow-1 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.08) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-glow-2 {\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.06) 0%,\n      transparent 70%);\n}\n:host-context(html:not(.dark)) .hero-badge {\n  color: rgba(255, 255, 255, 0.9);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .hero-title {\n  color: #ffffff;\n  -webkit-text-fill-color: #ffffff;\n}\n:host-context(html:not(.dark)) .hero-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac 0%,\n      #bbf7d0 60%,\n      #d1fae5 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n:host-context(html:not(.dark)) .search-wrapper {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n:host-context(html:not(.dark)) .search-wrapper:focus-within {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n:host-context(html:not(.dark)) .search-icon {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .search-input {\n  color: #ffffff;\n}\n:host-context(html:not(.dark)) .search-input::placeholder {\n  color: rgba(255, 255, 255, 0.55);\n}\n:host-context(html:not(.dark)) .progress-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .stat-box {\n  background: rgba(27, 67, 50, 0.04);\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .stat-label {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .problem-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .problem-card:hover {\n  border-color: #B7CCBB;\n  box-shadow: 0 4px 16px rgba(27, 67, 50, 0.1);\n}\n:host-context(html:not(.dark)) .problem-num {\n  background: rgba(27, 67, 50, 0.06);\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .problem-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .meta-chip {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .section-title {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .section-count {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .section-icon {\n  color: #1B4332;\n}\n/*# sourceMappingURL=lc-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LcListComponent, { className: "LcListComponent", filePath: "src/app/features/leetcode/lc-list.component.ts", lineNumber: 498 });
})();
export {
  LcListComponent
};
//# sourceMappingURL=chunk-YBPB2LOL.js.map
