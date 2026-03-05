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
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  ActivatedRoute,
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
  ɵɵrepeaterTrackByIndex,
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

// src/app/features/leetcode/lc-detail.component.ts
function LcDetailComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(data_r1.difficulty.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r1.difficulty, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
  }
}
function LcDetailComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Complete implementation coming soon!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Problem #", ctx_r1.problemId());
  }
}
function LcDetailComponent_Conditional_16_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r3);
  }
}
function LcDetailComponent_Conditional_16_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function LcDetailComponent_Conditional_16_Conditional_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r5 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompletion(data_r5.number));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Completed ");
    \u0275\u0275elementEnd();
  }
}
function LcDetailComponent_Conditional_16_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function LcDetailComponent_Conditional_16_Conditional_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r5 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCompletion(data_r5.number));
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, " Mark as Complete ");
    \u0275\u0275elementEnd();
  }
}
function LcDetailComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19)(2, "h4", 20);
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275text(4, " Problem Statement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 23)(8, "h4", 20);
    \u0275\u0275element(9, "i", 24);
    \u0275\u0275text(10, " Approach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 25);
    \u0275\u0275repeaterCreate(12, LcDetailComponent_Conditional_16_For_13_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 27)(16, "span");
    \u0275\u0275element(17, "i", 28);
    \u0275\u0275text(18, " Java Solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 29);
    \u0275\u0275element(20, "i", 30);
    \u0275\u0275text(21, " Copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "pre", 31)(23, "code");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 32)(26, "div", 33)(27, "div", 34);
    \u0275\u0275element(28, "i", 35);
    \u0275\u0275text(29, " Time Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 33)(33, "div", 34);
    \u0275\u0275element(34, "i", 37);
    \u0275\u0275text(35, " Space Complexity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 36);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 38);
    \u0275\u0275conditionalCreate(39, LcDetailComponent_Conditional_16_Conditional_39_Template, 3, 0, "button", 39)(40, LcDetailComponent_Conditional_16_Conditional_40_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r5.description);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(data_r5.approach);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(data_r5.javaCode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r5.timeComplexity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(data_r5.spaceComplexity);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.dataService.leetcodeCompletedIds().has(data_r5.number) ? 39 : 40);
  }
}
function LcDetailComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 48);
    \u0275\u0275text(4, "Solution Under Construction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6, " We are working hard to bring you a detailed explanation, time/space complexity analysis, and the optimal Java solution for this problem. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50)(8, "div", 51);
    \u0275\u0275element(9, "i", 52);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Step-by-step approach");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 51);
    \u0275\u0275element(13, "i", 52);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Optimal Java Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 51);
    \u0275\u0275element(17, "i", 52);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Complexity Analysis");
    \u0275\u0275elementEnd()()()();
  }
}
var LcDetailComponent = class _LcDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  adGate = inject(AdGateService);
  dataService = inject(DataService);
  problemId = signal("", ...ngDevMode ? [{ debugName: "problemId" }] : []);
  problemData = computed(() => {
    const id = parseInt(this.problemId(), 10);
    return LEETCODE_PROBLEMS.find((p) => p.number === id) || null;
  }, ...ngDevMode ? [{ debugName: "problemData" }] : []);
  constructor() {
    this.route.paramMap.subscribe(async (params) => {
      const idStr = params.get("id") ?? "";
      this.problemId.set(idStr);
      const id = parseInt(idStr, 10);
      const itemId = `lc::${idStr}`;
      if (!this.dataService.leetcodeCompletedIds().has(id) && !this.adGate.isItemUnlocked(itemId)) {
        const allowed = await this.adGate.unlockItemWithAd(itemId, "this algorithm problem");
        if (!allowed) {
          this.router.navigate(["/leetcode"]);
          return;
        }
      }
    });
  }
  toggleCompletion(id) {
    if (this.dataService.leetcodeCompletedIds().has(id)) {
      this.dataService.leetcodeCompletedIds.update((set) => {
        const newSet = new Set(set);
        newSet.delete(id);
        return newSet;
      });
    } else {
      this.dataService.markLeetcodeCompleted(id);
      this.dataService.addPoints(5);
      this.adGate.onContentCompleted();
    }
  }
  static \u0275fac = function LcDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LcDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LcDetailComponent, selectors: [["app-lc-detail"]], decls: 18, vars: 3, consts: [["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["defaultHref", "/leetcode", "text", "", "color", "light"], [1, "brand-title"], [1, "tut-content"], [1, "page-container"], [1, "hero"], [1, "hero-glow"], [1, "hero-content"], [1, "hero-badge"], [1, "fa-solid", "fa-code", "hero-badge-icon"], [1, "problem-content"], [1, "status-card"], [1, "title"], [1, "meta-row"], [1, "difficulty-badge"], [1, "category-chip"], [1, "subtitle"], [1, "desc-section"], [1, "section-title"], [1, "fa-solid", "fa-align-left", "text-blue-400"], [1, "desc-text"], [1, "desc-section", "mt-6"], [1, "fa-solid", "fa-lightbulb", "text-yellow-400"], [1, "approach-list"], [1, "java-section", "mt-6"], [1, "code-header"], [1, "fa-brands", "fa-java", "text-orange-400"], [1, "copy-btn"], [1, "fa-regular", "fa-copy"], [1, "code-block"], [1, "complexity-section", "mt-6"], [1, "complexity-box"], [1, "comp-label"], [1, "fa-solid", "fa-stopwatch", "text-purple-400"], [1, "comp-val"], [1, "fa-solid", "fa-memory", "text-emerald-400"], [1, "action-section", "mt-6"], [1, "action-btn", "completed"], [1, "action-btn"], [1, "fa-solid", "fa-chevron-right", "list-bullet"], [1, "action-btn", "completed", 3, "click"], [1, "fa-solid", "fa-circle-check"], [1, "action-btn", 3, "click"], [1, "fa-regular", "fa-circle-check"], [1, "icon-wrapper"], [1, "fa-solid", "fa-hammer", "text-3xl"], [1, "status-title"], [1, "status-desc"], [1, "features-preview"], [1, "feature-item"], [1, "fa-solid", "fa-check", "feature-icon"]], template: function LcDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4);
      \u0275\u0275text(5, "JavaIQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "div", 8);
      \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, LcDetailComponent_Conditional_14_Template, 7, 5)(15, LcDetailComponent_Conditional_15_Template, 4, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, LcDetailComponent_Conditional_16_Template, 41, 5, "div", 12)(17, LcDetailComponent_Conditional_17_Template, 20, 0, "div", 13);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate1(" LeetCode Problem #", ctx.problemId(), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.problemData()) ? 14 : 15, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.problemData()) ? 16 : 17, tmp_2_0);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap";\n\n\n\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #171120 100%);\n  padding: 32px 20px 32px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(239, 68, 68, 0.15) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: rgba(239, 68, 68, 0.1);\n  color: #fca5a5;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 16px;\n  font-size: 1.6rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n.difficulty-badge[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.difficulty-badge.easy[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard[_ngcontent-%COMP%] {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.category-chip[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 6px;\n  padding: 4px 10px;\n}\n.problem-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.desc-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 20px;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.desc-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.approach-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.approach-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.list-bullet[_ngcontent-%COMP%] {\n  color: #fb923c;\n  font-size: 0.6rem;\n  margin-top: 5px;\n}\n.java-section[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.code-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 10px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 16px;\n  overflow-x: auto;\n}\n.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Fira Code", monospace;\n  font-size: 0.8rem;\n  color: #e2e8f0;\n  line-height: 1.5;\n}\n.complexity-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n}\n.complexity-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comp-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.comp-val[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n}\n.status-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n  padding: 32px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.status-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n  letter-spacing: -0.01em;\n}\n.status-desc[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  max-width: 300px;\n  margin: 0 0 24px;\n}\n.features-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  max-width: 250px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #cbd5e1;\n  text-align: left;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.action-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0 20px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border-radius: 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  color: #cbd5e1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.action-btn.completed[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=lc-detail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LcDetailComponent, [{
    type: Component,
    args: [{ selector: "app-lc-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/leetcode" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <div class="page-container">
        <!-- Premium Centered Hero for LeetCode problem -->
        <div class="hero">
          <div class="hero-glow"></div>
          <div class="hero-content">
            <span class="hero-badge">
              <i class="fa-solid fa-code hero-badge-icon"></i>
              LeetCode Problem #{{ problemId() }}
            </span>
            @if (problemData(); as data) {
               <h1 class="title">{{ data.title }}</h1>
               <div class="meta-row">
                 <span class="difficulty-badge" [class]="data.difficulty.toLowerCase()">
                   {{ data.difficulty }}
                 </span>
                 <span class="category-chip">{{ data.category }}</span>
               </div>
            } @else {
               <h1 class="title">Problem #{{ problemId() }}</h1>
               <p class="subtitle">Complete implementation coming soon!</p>
            }
          </div>
        </div>

        @if (problemData(); as data) {
          <div class="problem-content">
            <div class="desc-section">
              <h4 class="section-title"><i class="fa-solid fa-align-left text-blue-400"></i> Problem Statement</h4>
              <div class="desc-text">{{ data.description }}</div>
            </div>

            <div class="desc-section mt-6">
              <h4 class="section-title"><i class="fa-solid fa-lightbulb text-yellow-400"></i> Approach</h4>
              <ul class="approach-list">
                @for (step of data.approach; track $index) {
                  <li>
                    <i class="fa-solid fa-chevron-right list-bullet"></i>
                    <span>{{ step }}</span>
                  </li>
                }
              </ul>
            </div>

            <div class="java-section mt-6">
              <div class="code-header">
                <span><i class="fa-brands fa-java text-orange-400"></i> Java Solution</span>
                <button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button>
              </div>
              <pre class="code-block"><code>{{ data.javaCode }}</code></pre>
            </div>

            <div class="complexity-section mt-6">
              <div class="complexity-box">
                <div class="comp-label"><i class="fa-solid fa-stopwatch text-purple-400"></i> Time Complexity</div>
                <div class="comp-val">{{ data.timeComplexity }}</div>
              </div>
              <div class="complexity-box">
                <div class="comp-label"><i class="fa-solid fa-memory text-emerald-400"></i> Space Complexity</div>
                <div class="comp-val">{{ data.spaceComplexity }}</div>
              </div>
            </div>

            <!-- Completion Action -->
            <div class="action-section mt-6">
               @if (dataService.leetcodeCompletedIds().has(data.number)) {
                 <button class="action-btn completed" (click)="toggleCompletion(data.number)">
                   <i class="fa-solid fa-circle-check"></i>
                   Completed
                 </button>
               } @else {
                 <button class="action-btn" (click)="toggleCompletion(data.number)">
                   <i class="fa-regular fa-circle-check"></i>
                   Mark as Complete
                 </button>
               }
            </div>
          </div>
        } @else {
          <!-- Problem Status Placeholder -->
          <div class="status-card">
            <div class="icon-wrapper">
               <i class="fa-solid fa-hammer text-3xl"></i>
            </div>
            <h2 class="status-title">Solution Under Construction</h2>
            <p class="status-desc">
              We are working hard to bring you a detailed explanation, time/space complexity analysis, and the optimal Java solution for this problem.
            </p>
            
            <div class="features-preview">
               <div class="feature-item">
                 <i class="fa-solid fa-check feature-icon"></i>
                 <span>Step-by-step approach</span>
               </div>
               <div class="feature-item">
                 <i class="fa-solid fa-check feature-icon"></i>
                 <span>Optimal Java Code</span>
               </div>
               <div class="feature-item">
                 <i class="fa-solid fa-check feature-icon"></i>
                 <span>Complexity Analysis</span>
               </div>
            </div>
          </div>
        }
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap";\n\n/* angular:styles/component:css;b30cb206f85fd9e260f7c3161038ac07869717755b683dc7ee19037a6c7408e7;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/leetcode/lc-detail.component.ts */\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.page-container {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #171120 100%);\n  padding: 32px 20px 32px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow {\n  position: absolute;\n  top: -60px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(239, 68, 68, 0.15) 0%,\n      transparent 70%);\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: rgba(239, 68, 68, 0.1);\n  color: #fca5a5;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  border-radius: 20px;\n  padding: 5px 14px;\n  margin-bottom: 16px;\n}\n.title {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 16px;\n  font-size: 1.6rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle {\n  font-family: "Inter", sans-serif;\n  margin: 0 0;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.meta-row {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n.difficulty-badge {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  padding: 4px 10px;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.difficulty-badge.easy {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.difficulty-badge.medium {\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n}\n.difficulty-badge.hard {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.category-chip {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 6px;\n  padding: 4px 10px;\n}\n.problem-content {\n  display: flex;\n  flex-direction: column;\n  animation: fadeIn 0.3s ease-out forwards;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.desc-section {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  padding: 20px;\n}\n.mt-6 {\n  margin-top: 16px;\n}\n.section-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.desc-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  white-space: pre-wrap;\n}\n.approach-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.approach-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.list-bullet {\n  color: #fb923c;\n  font-size: 0.6rem;\n  margin-top: 5px;\n}\n.java-section {\n  background: #0d1117;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.code-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.03);\n  padding: 10px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.copy-btn {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 0.7rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.copy-btn:hover {\n  color: #fff;\n}\n.code-block {\n  margin: 0;\n  padding: 16px;\n  overflow-x: auto;\n}\n.code-block code {\n  font-family: "Fira Code", monospace;\n  font-size: 0.8rem;\n  color: #e2e8f0;\n  line-height: 1.5;\n}\n.complexity-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background: rgba(139, 92, 246, 0.05);\n  border: 1px solid rgba(139, 92, 246, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n}\n.complexity-box {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.comp-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #c4b5fd;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.comp-val {\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n}\n.status-card {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 16px;\n  padding: 32px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.icon-wrapper {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.status-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n  letter-spacing: -0.01em;\n}\n.status-desc {\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  max-width: 300px;\n  margin: 0 0 24px;\n}\n.features-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  max-width: 250px;\n}\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.04);\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #cbd5e1;\n  text-align: left;\n}\n.feature-icon {\n  color: #10b981;\n}\n.action-section {\n  display: flex;\n  justify-content: center;\n  padding: 10px 0 20px;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 28px;\n  border-radius: 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  color: #cbd5e1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.action-btn:active {\n  transform: scale(0.97);\n}\n.action-btn.completed {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .title {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .subtitle {\n  color: #52665A;\n}\n/*# sourceMappingURL=lc-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LcDetailComponent, { className: "LcDetailComponent", filePath: "src/app/features/leetcode/lc-detail.component.ts", lineNumber: 500 });
})();
export {
  LcDetailComponent
};
//# sourceMappingURL=chunk-GX6S6OXZ.js.map
