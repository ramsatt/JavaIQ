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

// src/app/features/interview-questions/iq-category.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function IqCategoryComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 19);
    \u0275\u0275text(2, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 20);
    \u0275\u0275text(4, "No Questions Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6, "Check back later for more interview questions in this category.");
    \u0275\u0275elementEnd()();
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 26);
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_56_r4 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_56_r4 + 1);
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "NEW");
    \u0275\u0275elementEnd();
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r2.asked_metadata);
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 34);
  }
}
function IqCategoryComponent_Conditional_24_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 35);
  }
}
function IqCategoryComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function IqCategoryComponent_Conditional_24_For_2_Template_button_click_0_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openQuestion(q_r2));
    });
    \u0275\u0275elementStart(1, "div", 24)(2, "div", 25);
    \u0275\u0275conditionalCreate(3, IqCategoryComponent_Conditional_24_For_2_Conditional_3_Template, 1, 0, "i", 26)(4, IqCategoryComponent_Conditional_24_For_2_Conditional_4_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28)(6, "div", 29)(7, "h3", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, IqCategoryComponent_Conditional_24_For_2_Conditional_9_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, IqCategoryComponent_Conditional_24_For_2_Conditional_10_Template, 4, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33);
    \u0275\u0275conditionalCreate(12, IqCategoryComponent_Conditional_24_For_2_Conditional_12_Template, 1, 0, "i", 34)(13, IqCategoryComponent_Conditional_24_For_2_Conditional_13_Template, 1, 0, "i", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("q-card-visited", ctx_r2.isRevealed(q_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("q-num-visited", ctx_r2.isRevealed(q_r2.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isRevealed(q_r2.id) ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r2.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isNew(q_r2.addedOn) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r2.asked_metadata ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isRevealed(q_r2.id) || ctx_r2.isUnlocked(q_r2.id) ? 12 : 13);
  }
}
function IqCategoryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, IqCategoryComponent_Conditional_24_For_2_Template, 14, 9, "button", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.questions());
  }
}
var IqCategoryComponent = class _IqCategoryComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);
  adGate = inject(AdGateService);
  categorySlug = signal("", ...ngDevMode ? [{ debugName: "categorySlug" }] : []);
  categoryTitle = signal("", ...ngDevMode ? [{ debugName: "categoryTitle" }] : []);
  questions = signal([], ...ngDevMode ? [{ debugName: "questions" }] : []);
  visitedCount = computed(() => {
    this.dataService.revealedQuestionIds();
    return this.dataService.getVisitedCount(this.categoryTitle());
  }, ...ngDevMode ? [{ debugName: "visitedCount" }] : []);
  progressPercent = computed(() => {
    this.dataService.revealedQuestionIds();
    return this.dataService.getProgress(this.categoryTitle());
  }, ...ngDevMode ? [{ debugName: "progressPercent" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get("category") ?? "";
      this.categorySlug.set(slug);
      const title = this.dataService.slugToTitle(slug);
      this.categoryTitle.set(title);
      this.questions.set(this.dataService.getQuestions(title));
    });
  }
  isRevealed(id) {
    return this.dataService.revealedQuestionIds().has(id);
  }
  isNew(addedOn) {
    if (!addedOn)
      return false;
    const diff = Date.now() - new Date(addedOn).getTime();
    return diff < 30 * 24 * 60 * 60 * 1e3;
  }
  isUnlocked(id) {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`iq::${id}`);
  }
  async openQuestion(q) {
    const itemId = `iq::${q.id}`;
    if (!this.isRevealed(q.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview question");
      if (!allowed)
        return;
    }
    this.router.navigate(["/interview-questions", this.categorySlug(), q.id]);
  }
  static \u0275fac = function IqCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IqCategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IqCategoryComponent, selectors: [["app-iq-category"]], decls: 25, vars: 6, consts: [["translucent", "false", 1, "ion-no-border"], [1, "cat-toolbar"], ["slot", "start"], ["defaultHref", "/interview-questions", "text", "", 2, "color", "white"], [1, "cat-brand"], [1, "cat-content"], [1, "cat-hero"], [1, "cat-hero-inner"], [1, "cat-hero-badge"], [1, "cat-hero-title"], [1, "cat-hero-stats"], [1, "cat-hero-count"], [1, "cat-hero-sep"], [1, "cat-hero-visited"], [1, "cat-progress-track"], [1, "cat-progress-bar"], [1, "cat-body"], [1, "empty-card"], [1, "cat-list"], [1, "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "q-card", 3, "q-card-visited"], [1, "q-card", 3, "click"], [1, "q-card-left"], [1, "q-number"], [1, "fa-solid", "fa-check", "q-check-icon"], [1, "q-num-text"], [1, "q-card-body"], [1, "q-title-row"], [1, "q-title"], [1, "new-badge"], [1, "q-meta"], [1, "q-card-arrow"], [1, "fa-solid", "fa-chevron-right"], [1, "fa-solid", "fa-lock", 2, "color", "#f59e0b", "font-size", "11px"], [1, "fa-solid", "fa-building-columns", "q-meta-icon"]], template: function IqCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4);
      \u0275\u0275text(5, "JavaIQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275text(10, "Interview Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275element(21, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275conditionalCreate(23, IqCategoryComponent_Conditional_23_Template, 7, 0, "div", 17)(24, IqCategoryComponent_Conditional_24_Template, 3, 0, "div", 18);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.categoryTitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.questions().length, " questions");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.visitedCount(), " covered");
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.progressPercent(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.questions().length === 0 ? 23 : 24);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";\n\n\n\n.cat-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n}\n.cat-brand[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.cat-content[_ngcontent-%COMP%] {\n  --background: #0f172a;\n}\n.cat-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0b1120 0%,\n      #1e293b 100%);\n  padding: 0 0 28px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.cat-hero-inner[_ngcontent-%COMP%] {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 24px 20px 0;\n}\n.cat-hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  padding: 3px 10px;\n  margin-bottom: 10px;\n}\n.cat-hero-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n  margin: 0 0 8px;\n}\n.cat-hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.cat-hero-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.cat-hero-sep[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.cat-hero-visited[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #10b981;\n  font-weight: 600;\n}\n.cat-progress-track[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cat-progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.cat-body[_ngcontent-%COMP%] {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 16px 12px 80px;\n  position: relative;\n  z-index: 1;\n}\n.empty-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 48px 24px;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  font-size: 28px;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 6px;\n}\n.empty-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 280px;\n  margin: 0 auto;\n}\n.cat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.q-card[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 16px;\n  color: inherit;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.q-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  transform: translateY(-1px);\n}\n.q-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n.q-card-visited[_ngcontent-%COMP%] {\n  border-left: 3px solid rgba(16, 185, 129, 0.4);\n}\n.q-number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.q-num-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  color: #64748b;\n}\n.q-num-visited[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.q-check-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #10b981;\n}\n.q-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.q-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.new-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  padding: 2px 6px;\n  border-radius: 5px;\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  margin-top: 2px;\n}\n.q-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.4;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.q-meta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 2px 8px;\n  border-radius: 4px;\n  letter-spacing: 0.02em;\n}\n.q-meta-icon[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #475569;\n}\n.q-card-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #475569;\n  font-size: 12px;\n  transition: color 0.15s ease;\n}\n.q-card[_ngcontent-%COMP%]:hover   .q-card-arrow[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cat-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cat-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cat-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cat-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cat-hero-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cat-hero-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .cat-hero-count[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .cat-hero-count[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=iq-category.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IqCategoryComponent, [{
    type: Component,
    args: [{ selector: "app-iq-category", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border" translucent="false">
      <ion-toolbar class="cat-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" style="color: white"></ion-back-button>
        </ion-buttons>
        <ion-title class="cat-brand">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="cat-content">
      <!-- Category Hero -->
      <div class="cat-hero">
        <div class="cat-hero-inner">
          <span class="cat-hero-badge">Interview Questions</span>
          <h1 class="cat-hero-title">{{ categoryTitle() }}</h1>
          <div class="cat-hero-stats">
            <span class="cat-hero-count">{{ questions().length }} questions</span>
            <span class="cat-hero-sep">\xB7</span>
            <span class="cat-hero-visited">{{ visitedCount() }} covered</span>
          </div>
          <!-- Category progress bar -->
          <div class="cat-progress-track">
            <div class="cat-progress-bar" [style.width.%]="progressPercent()"></div>
          </div>
        </div>
      </div>

      <div class="cat-body">
        @if (questions().length === 0) {
          <div class="empty-card">
            <div class="empty-icon">\u{1F4AC}</div>
            <h2 class="empty-title">No Questions Found</h2>
            <p class="empty-desc">Check back later for more interview questions in this category.</p>
          </div>
        } @else {
          <div class="cat-list">
            @for (q of questions(); track q.id; let i = $index) {
              <button (click)="openQuestion(q)" class="q-card" [class.q-card-visited]="isRevealed(q.id)">
                <div class="q-card-left">
                  <div class="q-number" [class.q-num-visited]="isRevealed(q.id)">
                    @if (isRevealed(q.id)) {
                      <i class="fa-solid fa-check q-check-icon"></i>
                    } @else {
                      <span class="q-num-text">{{ i + 1 }}</span>
                    }
                  </div>
                </div>
                <div class="q-card-body">
                  <div class="q-title-row">
                    <h3 class="q-title">{{ q.question }}</h3>
                    @if (isNew(q.addedOn)) {
                      <span class="new-badge">NEW</span>
                    }
                  </div>
                  @if (q.asked_metadata) {
                    <div class="q-meta">
                      <i class="fa-solid fa-building-columns q-meta-icon"></i>
                      <span>{{ q.asked_metadata }}</span>
                    </div>
                  }
                </div>
                <div class="q-card-arrow">
                  @if (isRevealed(q.id) || isUnlocked(q.id)) {
                    <i class="fa-solid fa-chevron-right"></i>
                  } @else {
                    <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                  }
                </div>
              </button>
            }
          </div>
        }
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";\n\n/* angular:styles/component:css;788281673b336a5c91149e0bb7c8a7bc80556d4a1308ee1482b5655279be5eb1;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/interview-questions/iq-category.component.ts */\n.cat-toolbar {\n  --background: #0b1120;\n  --color: white;\n}\n.cat-brand {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.cat-content {\n  --background: #0f172a;\n}\n.cat-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #0b1120 0%,\n      #1e293b 100%);\n  padding: 0 0 28px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.cat-hero-inner {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 24px 20px 0;\n}\n.cat-hero-badge {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  padding: 3px 10px;\n  margin-bottom: 10px;\n}\n.cat-hero-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n  margin: 0 0 8px;\n}\n.cat-hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.cat-hero-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.cat-hero-sep {\n  color: #475569;\n}\n.cat-hero-visited {\n  font-family: "Inter", sans-serif;\n  font-size: 0.82rem;\n  color: #10b981;\n  font-weight: 600;\n}\n.cat-progress-track {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cat-progress-bar {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.cat-body {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 16px 12px 80px;\n  position: relative;\n  z-index: 1;\n}\n.empty-card {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 48px 24px;\n  text-align: center;\n}\n.empty-icon {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  font-size: 28px;\n}\n.empty-title {\n  font-family: "Inter", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 6px;\n}\n.empty-desc {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n  max-width: 280px;\n  margin: 0 auto;\n}\n.cat-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.q-card {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 12px;\n  padding: 16px;\n  color: inherit;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n.q-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  transform: translateY(-1px);\n}\n.q-card:active {\n  transform: scale(0.99);\n}\n.q-card-visited {\n  border-left: 3px solid rgba(16, 185, 129, 0.4);\n}\n.q-number {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.q-num-text {\n  font-family: "Inter", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  color: #64748b;\n}\n.q-num-visited {\n  background: rgba(16, 185, 129, 0.15);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.q-check-icon {\n  font-size: 13px;\n  color: #10b981;\n}\n.q-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.q-title-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.new-badge {\n  flex-shrink: 0;\n  font-size: 0.48rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  padding: 2px 6px;\n  border-radius: 5px;\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  margin-top: 2px;\n}\n.q-title {\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.4;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.q-meta {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 6px;\n  font-size: 10px;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 2px 8px;\n  border-radius: 4px;\n  letter-spacing: 0.02em;\n}\n.q-meta-icon {\n  font-size: 9px;\n  color: #475569;\n}\n.q-card-arrow {\n  flex-shrink: 0;\n  color: #475569;\n  font-size: 12px;\n  transition: color 0.15s ease;\n}\n.q-card:hover .q-card-arrow {\n  color: #94a3b8;\n}\n:host-context(html:not(.dark)) .cat-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .cat-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .q-card {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\n:host-context(html:not(.dark)) .cat-hero-title {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .cat-hero-count {\n  color: #52665A;\n}\n/*# sourceMappingURL=iq-category.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IqCategoryComponent, { className: "IqCategoryComponent", filePath: "src/app/features/interview-questions/iq-category.component.ts", lineNumber: 348 });
})();
export {
  IqCategoryComponent
};
//# sourceMappingURL=chunk-I3M3NM5H.js.map
