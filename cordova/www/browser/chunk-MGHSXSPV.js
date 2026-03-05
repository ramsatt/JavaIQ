import {
  WrongAnswerService
} from "./chunk-GSWVROYK.js";
import {
  AnalyticsService
} from "./chunk-EPXUGUMG.js";
import {
  GamificationService
} from "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-BJOCJFQ2.js";
import "./chunk-KHYVC3NX.js";
import "./chunk-YU6DDDO5.js";
import {
  IonContent
} from "./chunk-PWZS7QID.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/review/review.component.ts
function ReviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 7);
    \u0275\u0275text(4, "All caught up!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, " You have no questions in your review queue.");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " Missed answers from challenges and mock interviews appear here. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(10, "Go Practice");
    \u0275\u0275elementEnd()();
  }
}
function ReviewComponent_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 20)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentQ().code);
  }
}
function ReviewComponent_Conditional_5_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_5_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reveal());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2, " Reveal Answer ");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_5_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_5_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.stillLearning());
    });
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3, " Still Learning ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_5_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.gotIt());
    });
    \u0275\u0275element(5, "i", 31);
    \u0275\u0275text(6, " Got It! ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8, ' "Got It" removes this from your review queue (+5 XP) ');
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275element(8, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17)(11, "span", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ReviewComponent_Conditional_5_Conditional_15_Template, 3, 1, "pre", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 21)(17, "span", 22);
    \u0275\u0275text(18, "ANSWER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, ReviewComponent_Conditional_5_Conditional_21_Template, 3, 0, "button", 24)(22, ReviewComponent_Conditional_5_Conditional_22_Template, 9, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.currentIdx() + 1, " / ", ctx_r1.queue().length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.clearedThisSession(), " cleared");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (ctx_r1.currentIdx() + 1) / ctx_r1.queue().length * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("rv-flipped", ctx_r1.answerVisible());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentQ().category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentQ().question);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentQ().code ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentQ().answer);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.answerVisible() ? 21 : 22);
  }
}
function ReviewComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Queue cleared! ");
  }
}
function ReviewComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Session complete ");
  }
}
function ReviewComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_6_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.restart());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Review ", ctx_r1.wrongSvc.reviewCount(), " Remaining ");
  }
}
function ReviewComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_6_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(1, " All Done! ");
    \u0275\u0275elementEnd();
  }
}
function ReviewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5, "cleared");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h1", 36);
    \u0275\u0275conditionalCreate(7, ReviewComponent_Conditional_6_Conditional_7_Template, 1, 0)(8, ReviewComponent_Conditional_6_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "strong", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, ReviewComponent_Conditional_6_Conditional_13_Template, 2, 1, "button", 38)(14, ReviewComponent_Conditional_6_Conditional_14_Template, 2, 0, "button", 39);
    \u0275\u0275elementStart(15, "button", 40);
    \u0275\u0275listener("click", function ReviewComponent_Conditional_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(16, "Back to Dashboard");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.clearedThisSession() === ctx_r1.startCount() ? "#10b981" : "#6366f1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clearedThisSession());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.clearedThisSession() === ctx_r1.startCount() ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.clearedThisSession(), " of ", ctx_r1.startCount(), " cards cleared \xB7 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", ctx_r1.earnedXp(), " XP");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.wrongSvc.reviewCount() > 0 ? 13 : 14);
  }
}
var ReviewComponent = class _ReviewComponent {
  router = inject(Router);
  dataSvc = inject(DataService);
  wrongSvc = inject(WrongAnswerService);
  gameSvc = inject(GamificationService);
  analytics = inject(AnalyticsService);
  // ── State ──────────────────────────────────────────────────────────────────
  phase = signal("empty", ...ngDevMode ? [{ debugName: "phase" }] : []);
  queue = signal([], ...ngDevMode ? [{ debugName: "queue" }] : []);
  currentIdx = signal(0, ...ngDevMode ? [{ debugName: "currentIdx" }] : []);
  answerVisible = signal(false, ...ngDevMode ? [{ debugName: "answerVisible" }] : []);
  clearedThisSession = signal(0, ...ngDevMode ? [{ debugName: "clearedThisSession" }] : []);
  startCount = signal(0, ...ngDevMode ? [{ debugName: "startCount" }] : []);
  earnedXp = signal(0, ...ngDevMode ? [{ debugName: "earnedXp" }] : []);
  currentQ = computed(() => this.queue()[this.currentIdx()] ?? null, ...ngDevMode ? [{ debugName: "currentQ" }] : []);
  constructor() {
    this._load();
  }
  // ── Load / Start ───────────────────────────────────────────────────────────
  _load() {
    const allQ = this.dataSvc.getAllQuestionsStable();
    const reviewQ = this.wrongSvc.filterReviewQuestions(allQ);
    if (reviewQ.length === 0) {
      this.phase.set("empty");
    } else {
      this.queue.set(reviewQ);
      this.startCount.set(reviewQ.length);
      this.clearedThisSession.set(0);
      this.earnedXp.set(0);
      this.currentIdx.set(0);
      this.answerVisible.set(false);
      this.phase.set("session");
      this.analytics.track("review_session_started", { count: reviewQ.length });
    }
  }
  // ── Session actions ────────────────────────────────────────────────────────
  reveal() {
    this.answerVisible.set(true);
  }
  gotIt() {
    const q = this.currentQ();
    if (!q)
      return;
    this.wrongSvc.clearMiss(q.id);
    this.gameSvc.addXp(5);
    this.clearedThisSession.update((n) => n + 1);
    this.earnedXp.update((n) => n + 5);
    this._advance();
  }
  stillLearning() {
    this._advance();
  }
  _advance() {
    const next = this.currentIdx() + 1;
    if (next >= this.queue().length) {
      this.analytics.track("review_session_completed", {
        cleared: this.clearedThisSession(),
        total: this.startCount(),
        xp: this.earnedXp()
      });
      this.phase.set("complete");
    } else {
      this.currentIdx.set(next);
      this.answerVisible.set(false);
    }
  }
  // ── Result actions ─────────────────────────────────────────────────────────
  restart() {
    this._load();
  }
  back() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function ReviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewComponent, selectors: [["app-review"]], hostAttrs: [1, "ion-page"], decls: 7, vars: 3, consts: [[1, "rv-content"], [1, "rv-wrap"], [1, "rv-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "rv-center"], [1, "rv-session"], [1, "rv-empty-icon"], [1, "rv-empty-title"], [1, "rv-empty-sub"], [1, "rv-cta-btn", 3, "click"], [1, "rv-session-head"], [1, "rv-progress-info"], [1, "rv-prog-num"], [1, "rv-cleared-badge"], [1, "rv-prog-track"], [1, "rv-prog-fill"], [1, "rv-card-wrap"], [1, "rv-card", "rv-card-front"], [1, "rv-card-cat"], [1, "rv-card-q"], [1, "rv-card-code"], [1, "rv-card", "rv-card-back"], [1, "rv-card-cat", "rv-cat-answer"], [1, "rv-card-a"], [1, "rv-reveal-btn"], [1, "rv-reveal-btn", 3, "click"], [1, "bi", "bi-eye"], [1, "rv-verdict-row"], [1, "rv-verdict", "rv-still-learning", 3, "click"], [1, "bi", "bi-arrow-repeat"], [1, "rv-verdict", "rv-got-it", 3, "click"], [1, "bi", "bi-check-lg"], [1, "rv-hint"], [1, "rv-complete-ring"], [1, "rv-complete-num"], [1, "rv-complete-lbl"], [1, "rv-empty-title", 2, "margin-top", "20px"], [2, "color", "#f59e0b"], [1, "rv-cta-btn"], [1, "rv-cta-btn", "rv-cta-green"], [1, "rv-link-btn", 3, "click"], [1, "rv-cta-btn", "rv-cta-green", 3, "click"]], template: function ReviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function ReviewComponent_Template_button_click_2_listener() {
        return ctx.back();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ReviewComponent_Conditional_4_Template, 11, 0, "div", 4);
      \u0275\u0275conditionalCreate(5, ReviewComponent_Conditional_5_Template, 23, 12, "div", 5);
      \u0275\u0275conditionalCreate(6, ReviewComponent_Conditional_6_Template, 17, 8, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.phase() === "empty" ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phase() === "session" ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phase() === "complete" ? 6 : -1);
    }
  }, dependencies: [CommonModule, IonContent], styles: ["\n\n.rv-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.rv-wrap[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 20px 40px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.rv-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 20px;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.rv-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 16px;\n  padding: 20px;\n}\n.rv-empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n}\n.rv-empty-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0;\n}\n.rv-empty-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 280px;\n}\n.rv-complete-ring[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 4px solid #6366f1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n.rv-complete-num[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  line-height: 1;\n}\n.rv-complete-lbl[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n}\n.rv-cta-btn[_ngcontent-%COMP%] {\n  padding: 14px 32px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n}\n.rv-cta-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.45);\n}\n.rv-cta-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35) !important;\n}\n.rv-link-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #475569;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.rv-session[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 32px;\n}\n.rv-session-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rv-progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.rv-prog-num[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.rv-cleared-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 3px 10px;\n  border-radius: 10px;\n}\n.rv-prog-track[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.rv-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.4s ease;\n}\n.rv-card-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 260px;\n  position: relative;\n  perspective: 1200px;\n}\n.rv-card[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;\n}\n.rv-card-front[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n.rv-card-back[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.07);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  transform: rotateY(180deg);\n  opacity: 0;\n}\n.rv-flipped[_ngcontent-%COMP%]   .rv-card-front[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n  opacity: 0;\n}\n.rv-flipped[_ngcontent-%COMP%]   .rv-card-back[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n.rv-card-cat[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 10px;\n  border-radius: 8px;\n  align-self: flex-start;\n}\n.rv-cat-answer[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.rv-card-q[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.rv-card-a[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.65;\n  margin: 0;\n  flex: 1;\n}\n.rv-card-code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.7rem;\n  color: #93c5fd;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.rv-reveal-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px dashed rgba(255, 255, 255, 0.15);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.rv-reveal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.rv-verdict-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.rv-verdict[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.rv-still-learning[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.12);\n  color: #94a3b8;\n  border: 1px solid rgba(100, 116, 139, 0.2);\n}\n.rv-still-learning[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 116, 139, 0.2);\n}\n.rv-got-it[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.14);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  box-shadow: 0 0 16px rgba(16, 185, 129, 0.15);\n}\n.rv-got-it[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.22);\n}\n.rv-hint[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #475569;\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=review.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewComponent, [{
    type: Component,
    args: [{ selector: "app-review", changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "ion-page" }, standalone: true, imports: [CommonModule, IonContent], template: `
    <ion-content class="rv-content">
      <div class="rv-wrap">

        <!-- Back button always visible -->
        <button class="rv-back" (click)="back()">
          <i class="bi bi-arrow-left"></i>
        </button>

        <!-- \u2500\u2500 EMPTY STATE \u2500\u2500 -->
        @if (phase() === 'empty') {
          <div class="rv-center">
            <div class="rv-empty-icon">\u{1F3AF}</div>
            <h1 class="rv-empty-title">All caught up!</h1>
            <p class="rv-empty-sub">
              You have no questions in your review queue.<br>
              Missed answers from challenges and mock interviews appear here.
            </p>
            <button class="rv-cta-btn" (click)="back()">Go Practice</button>
          </div>
        }

        <!-- \u2500\u2500 SESSION \u2500\u2500 -->
        @if (phase() === 'session') {
          <div class="rv-session">

            <!-- Header -->
            <div class="rv-session-head">
              <div class="rv-progress-info">
                <span class="rv-prog-num">{{ currentIdx() + 1 }} / {{ queue().length }}</span>
                <span class="rv-cleared-badge">{{ clearedThisSession() }} cleared</span>
              </div>
              <div class="rv-prog-track">
                <div class="rv-prog-fill"
                  [style.width.%]="((currentIdx() + 1) / queue().length) * 100">
                </div>
              </div>
            </div>

            <!-- Flip card -->
            <div class="rv-card-wrap" [class.rv-flipped]="answerVisible()">

              <!-- Front: question -->
              <div class="rv-card rv-card-front">
                <span class="rv-card-cat">{{ currentQ()!.category }}</span>
                <p class="rv-card-q">{{ currentQ()!.question }}</p>
                @if (currentQ()!.code) {
                  <pre class="rv-card-code"><code>{{ currentQ()!.code }}</code></pre>
                }
              </div>

              <!-- Back: answer -->
              <div class="rv-card rv-card-back">
                <span class="rv-card-cat rv-cat-answer">ANSWER</span>
                <p class="rv-card-a">{{ currentQ()!.answer }}</p>
              </div>

            </div>

            <!-- Action area -->
            @if (!answerVisible()) {
              <button class="rv-reveal-btn" (click)="reveal()">
                <i class="bi bi-eye"></i> Reveal Answer
              </button>
            } @else {
              <div class="rv-verdict-row">
                <button class="rv-verdict rv-still-learning" (click)="stillLearning()">
                  <i class="bi bi-arrow-repeat"></i>
                  Still Learning
                </button>
                <button class="rv-verdict rv-got-it" (click)="gotIt()">
                  <i class="bi bi-check-lg"></i>
                  Got It!
                </button>
              </div>
              <p class="rv-hint">
                "Got It" removes this from your review queue (+5 XP)
              </p>
            }

          </div>
        }

        <!-- \u2500\u2500 COMPLETE \u2500\u2500 -->
        @if (phase() === 'complete') {
          <div class="rv-center">
            <div class="rv-complete-ring"
              [style.border-color]="clearedThisSession() === startCount() ? '#10b981' : '#6366f1'">
              <span class="rv-complete-num">{{ clearedThisSession() }}</span>
              <span class="rv-complete-lbl">cleared</span>
            </div>

            <h1 class="rv-empty-title" style="margin-top:20px">
              @if (clearedThisSession() === startCount()) {
                Queue cleared!
              } @else {
                Session complete
              }
            </h1>
            <p class="rv-empty-sub">
              {{ clearedThisSession() }} of {{ startCount() }} cards cleared \xB7
              <strong style="color:#f59e0b">+{{ earnedXp() }} XP</strong>
            </p>

            @if (wrongSvc.reviewCount() > 0) {
              <button class="rv-cta-btn" (click)="restart()">
                Review {{ wrongSvc.reviewCount() }} Remaining
              </button>
            } @else {
              <button class="rv-cta-btn rv-cta-green" (click)="back()">
                All Done!
              </button>
            }
            <button class="rv-link-btn" (click)="back()">Back to Dashboard</button>
          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;8c84ee53e05b4c02d6911b8205be52daa8f0f3bbdb82b00f75e159b40c11058c;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/review/review.component.ts */\n.rv-content {\n  --background: #0b1120;\n}\n.rv-wrap {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 20px 40px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.rv-back {\n  position: absolute;\n  top: 16px;\n  left: 20px;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n}\n.rv-center {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 16px;\n  padding: 20px;\n}\n.rv-empty-icon {\n  font-size: 3.5rem;\n}\n.rv-empty-title {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0;\n}\n.rv-empty-sub {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0;\n  max-width: 280px;\n}\n.rv-complete-ring {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 4px solid #6366f1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n.rv-complete-num {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  line-height: 1;\n}\n.rv-complete-lbl {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n}\n.rv-cta-btn {\n  padding: 14px 32px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n}\n.rv-cta-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.45);\n}\n.rv-cta-green {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669) !important;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35) !important;\n}\n.rv-link-btn {\n  background: transparent;\n  border: none;\n  color: #475569;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.rv-session {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding-top: 32px;\n}\n.rv-session-head {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.rv-progress-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.rv-prog-num {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.rv-cleared-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 3px 10px;\n  border-radius: 10px;\n}\n.rv-prog-track {\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.rv-prog-fill {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.4s ease;\n}\n.rv-card-wrap {\n  flex: 1;\n  min-height: 260px;\n  position: relative;\n  perspective: 1200px;\n}\n.rv-card {\n  position: absolute;\n  inset: 0;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: 20px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;\n}\n.rv-card-front {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n.rv-card-back {\n  background: rgba(99, 102, 241, 0.07);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  transform: rotateY(180deg);\n  opacity: 0;\n}\n.rv-flipped .rv-card-front {\n  transform: rotateY(-180deg);\n  opacity: 0;\n}\n.rv-flipped .rv-card-back {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n.rv-card-cat {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 10px;\n  border-radius: 8px;\n  align-self: flex-start;\n}\n.rv-cat-answer {\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n}\n.rv-card-q {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.rv-card-a {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.65;\n  margin: 0;\n  flex: 1;\n}\n.rv-card-code {\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.7rem;\n  color: #93c5fd;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.rv-reveal-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px dashed rgba(255, 255, 255, 0.15);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.rv-reveal-btn:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.rv-verdict-row {\n  display: flex;\n  gap: 12px;\n}\n.rv-verdict {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.rv-still-learning {\n  background: rgba(100, 116, 139, 0.12);\n  color: #94a3b8;\n  border: 1px solid rgba(100, 116, 139, 0.2);\n}\n.rv-still-learning:hover {\n  background: rgba(100, 116, 139, 0.2);\n}\n.rv-got-it {\n  background: rgba(16, 185, 129, 0.14);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  box-shadow: 0 0 16px rgba(16, 185, 129, 0.15);\n}\n.rv-got-it:hover {\n  background: rgba(16, 185, 129, 0.22);\n}\n.rv-hint {\n  font-size: 0.68rem;\n  color: #475569;\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=review.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewComponent, { className: "ReviewComponent", filePath: "src/app/features/review/review.component.ts", lineNumber: 336 });
})();
export {
  ReviewComponent
};
//# sourceMappingURL=chunk-MGHSXSPV.js.map
