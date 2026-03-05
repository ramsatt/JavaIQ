import {
  AssessService
} from "./chunk-I3MZJKET.js";
import {
  CertificateComponent
} from "./chunk-PLLXPF33.js";
import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import "./chunk-7TOJMDEE.js";
import "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-KHYVC3NX.js";
import {
  AuthService
} from "./chunk-YU6DDDO5.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/features/assessments/assess-result.component.ts
function AssessResultComponent_Conditional_9_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 36);
    \u0275\u0275listener("click", function AssessResultComponent_Conditional_9_Conditional_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showCert.set(true));
    });
    \u0275\u0275element(2, "i", 37);
    \u0275\u0275text(3, " Get Certificate ");
    \u0275\u0275elementEnd()();
  }
}
function AssessResultComponent_Conditional_9_For_42_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Correct");
    \u0275\u0275elementEnd();
  }
}
function AssessResultComponent_Conditional_9_For_42_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2, " Incorrect");
    \u0275\u0275elementEnd();
  }
}
function AssessResultComponent_Conditional_9_For_42_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function AssessResultComponent_Conditional_9_For_42_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function AssessResultComponent_Conditional_9_For_42_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssessResultComponent_Conditional_9_For_42_For_10_Conditional_5_Template, 1, 0, "i", 54);
    \u0275\u0275conditionalCreate(6, AssessResultComponent_Conditional_9_For_42_For_10_Conditional_6_Template, 1, 0, "i", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const \u0275$index_122_r6 = ctx.$index;
    const ctx_r6 = \u0275\u0275nextContext();
    const q_r8 = ctx_r6.$implicit;
    const \u0275$index_97_r9 = ctx_r6.$index;
    const r_r2 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("review-correct", \u0275$index_122_r6 === q_r8.ans)("review-wrong", \u0275$index_122_r6 === r_r2.answers[\u0275$index_97_r9] && \u0275$index_122_r6 !== q_r8.ans);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.letters[\u0275$index_122_r6]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r5);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_122_r6 === q_r8.ans ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_122_r6 === r_r2.answers[\u0275$index_97_r9] && \u0275$index_122_r6 !== q_r8.ans ? 6 : -1);
  }
}
function AssessResultComponent_Conditional_9_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275conditionalCreate(2, AssessResultComponent_Conditional_9_For_42_Conditional_2_Template, 3, 0, "span", 40)(3, AssessResultComponent_Conditional_9_For_42_Conditional_3_Template, 3, 0, "span", 41);
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275repeaterCreate(9, AssessResultComponent_Conditional_9_For_42_For_10_Template, 7, 8, "div", 45, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 46);
    \u0275\u0275element(12, "i", 47);
    \u0275\u0275elementStart(13, "p", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    const \u0275$index_97_r9 = ctx.$index;
    const r_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("correct", r_r2.answers[\u0275$index_97_r9] === q_r8.ans)("wrong", r_r2.answers[\u0275$index_97_r9] !== q_r8.ans);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r2.answers[\u0275$index_97_r9] === q_r8.ans ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275$index_97_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r8.q);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r8.opts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r8.exp);
  }
}
function AssessResultComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 12);
    \u0275\u0275element(3, "circle", 13)(4, "circle", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 15)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275text(9, "Score");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 18)(11, "h2", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21)(16, "div", 22);
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 22);
    \u0275\u0275element(21, "i", 24);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22);
    \u0275\u0275element(25, "i", 25);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(28, "div", 26)(29, "button", 27);
    \u0275\u0275listener("click", function AssessResultComponent_Conditional_9_Template_button_click_29_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retake(r_r2.quizId));
    });
    \u0275\u0275element(30, "i", 28);
    \u0275\u0275text(31, " Retake ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 29);
    \u0275\u0275listener("click", function AssessResultComponent_Conditional_9_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275element(33, "i", 30);
    \u0275\u0275text(34, " All Quizzes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(35, AssessResultComponent_Conditional_9_Conditional_35_Template, 4, 0, "div", 31);
    \u0275\u0275elementStart(36, "div", 32);
    \u0275\u0275element(37, "i", 33);
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "Question Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 34);
    \u0275\u0275repeaterCreate(41, AssessResultComponent_Conditional_9_For_42_Template, 15, 8, "div", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke-dasharray", 264)("stroke-dashoffset", 264 - 264 * r_r2.score / 100);
    \u0275\u0275attribute("stroke", ctx_r2.scoreColor(r_r2.score));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r2.score, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r2.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-pass", r_r2.score >= 70);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2.score >= 70 ? "\u{1F3C6} Passed" : "\u{1F4D8} Keep Practising", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", r_r2.correct, " correct");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", r_r2.total - r_r2.correct, " incorrect");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(r_r2.timeTaken));
    \u0275\u0275advance(8);
    \u0275\u0275conditional(r_r2.score >= 70 ? 35 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(r_r2.questions);
  }
}
function AssessResultComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 56);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No results found. Please take a quiz first.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function AssessResultComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(6, "Browse Quizzes");
    \u0275\u0275elementEnd()();
  }
}
function AssessResultComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-certificate", 57);
    \u0275\u0275listener("closed", function AssessResultComponent_Conditional_11_Template_app_certificate_closed_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCert.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r2.result().title)("category", ctx_r2.result().category)("score", ctx_r2.result().score)("visible", ctx_r2.showCert())("recipientName", ctx_r2.userName());
  }
}
var AssessResultComponent = class _AssessResultComponent {
  router = inject(Router);
  svc = inject(AssessService);
  auth = inject(AuthService);
  achSvc = inject(AchievementService);
  letters = ["A", "B", "C", "D"];
  result = this.svc.result;
  showCert = signal(false, ...ngDevMode ? [{ debugName: "showCert" }] : []);
  userName = computed(() => this.auth.user()?.displayName ?? "Java Developer", ...ngDevMode ? [{ debugName: "userName" }] : []);
  constructor() {
    effect(() => {
      const r = this.result();
      if (r)
        this.achSvc.checkAssessmentAchievements(r.score);
    });
  }
  scoreColor(score) {
    if (score >= 70)
      return "#10b981";
    if (score >= 50)
      return "#f59e0b";
    return "#f87171";
  }
  formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  }
  retake(quizId) {
    this.svc.clearResult();
    this.router.navigate(["/assessments", quizId]);
  }
  goBack() {
    this.svc.clearResult();
    this.router.navigate(["/assessments"]);
  }
  static \u0275fac = function AssessResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessResultComponent, selectors: [["app-assess-result"]], decls: 12, vars: 2, consts: [[1, "ion-no-border"], [1, "result-toolbar"], ["slot", "start"], [1, "back-btn", 3, "click"], [1, "fa-solid", "fa-chevron-left"], [1, "toolbar-title"], [1, "result-content"], [1, "result-wrapper"], [1, "no-result"], ["type", "assessment", 3, "title", "category", "score", "visible", "recipientName"], [1, "score-card"], [1, "score-ring-wrap"], ["viewBox", "0 0 100 100", 1, "score-ring"], ["cx", "50", "cy", "50", "r", "42", 1, "ring-bg"], ["cx", "50", "cy", "50", "r", "42", 1, "ring-fill"], [1, "score-inner"], [1, "score-pct"], [1, "score-sub"], [1, "score-meta"], [1, "score-title"], [1, "pass-badge"], [1, "score-stats"], [1, "score-stat"], [1, "fa-solid", "fa-circle-check", "score-stat-icon", "correct-icon"], [1, "fa-solid", "fa-circle-xmark", "score-stat-icon", "wrong-icon"], [1, "fa-regular", "fa-clock", "score-stat-icon", "time-icon"], [1, "action-row"], [1, "btn-retake", 3, "click"], [1, "fa-solid", "fa-rotate-right"], [1, "btn-home", 3, "click"], [1, "fa-solid", "fa-list"], [1, "cert-cta-row"], [1, "review-header"], [1, "fa-solid", "fa-clipboard-list", "review-hdr-icon"], [1, "review-list"], [1, "review-card", 3, "correct", "wrong"], [1, "btn-certificate", 3, "click"], [1, "fa-solid", "fa-certificate"], [1, "review-card"], [1, "review-status"], [1, "status-chip", "correct-chip"], [1, "status-chip", "wrong-chip"], [1, "review-q-num"], [1, "review-q-text"], [1, "review-opts"], [1, "review-opt", 3, "review-correct", "review-wrong"], [1, "explanation"], [1, "fa-solid", "fa-lightbulb", "exp-icon"], [1, "exp-text"], [1, "fa-solid", "fa-check"], [1, "fa-solid", "fa-xmark"], [1, "review-opt"], [1, "review-opt-letter"], [1, "review-opt-text"], [1, "fa-solid", "fa-check", "review-opt-icon", "correct-opt-icon"], [1, "fa-solid", "fa-xmark", "review-opt-icon", "wrong-opt-icon"], [1, "no-result-icon"], ["type", "assessment", 3, "closed", "title", "category", "score", "visible", "recipientName"]], template: function AssessResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "button", 3);
      \u0275\u0275listener("click", function AssessResultComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "Results");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ion-content", 6)(8, "div", 7);
      \u0275\u0275conditionalCreate(9, AssessResultComponent_Conditional_9_Template, 43, 13)(10, AssessResultComponent_Conditional_10_Template, 7, 0, "div", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, AssessResultComponent_Conditional_11_Template, 1, 5, "app-certificate", 9);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(9);
      \u0275\u0275conditional((tmp_0_0 = ctx.result()) ? 9 : 10, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCert() ? 11 : -1);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, CertificateComponent], styles: ["\n\n.result-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --border-style: none;\n  --color: white;\n}\n.result-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.result-wrapper[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 16px 16px 100px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  margin-left: 8px;\n  transition: all 0.18s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-left: 8px;\n}\n.score-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 20px;\n  padding: 24px 20px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.score-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 90px;\n  height: 90px;\n}\n.score-ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.06);\n  stroke-width: 8;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.score-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.score-pct[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n.score-sub[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.score-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.score-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n  letter-spacing: -0.01em;\n}\n.pass-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-bottom: 12px;\n}\n.pass-badge[data-pass=true][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.pass-badge[data-pass=false][_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.score-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.score-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.score-stat-icon[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.correct-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.wrong-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.time-icon[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.btn-retake[_ngcontent-%COMP%], \n.btn-home[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  transition: all 0.18s ease;\n}\n.btn-retake[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n  color: white;\n}\n.btn-retake[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-home[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n}\n.btn-home[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 14px;\n}\n.review-hdr-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  font-size: 0.65rem;\n}\n.review-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.review-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 16px;\n}\n.review-card.correct[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-left: 3px solid #10b981;\n}\n.review-card.wrong[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.04);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-left: 3px solid #f87171;\n}\n.review-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.correct-chip[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.wrong-chip[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.review-q-num[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.review-q-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.5;\n  margin: 0 0 12px;\n}\n.review-opts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.review-opt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.review-correct[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #d1fae5 !important;\n}\n.review-wrong[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1) !important;\n  border-color: rgba(239, 68, 68, 0.25) !important;\n  color: #fecaca !important;\n}\n.review-opt-letter[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.review-correct[_ngcontent-%COMP%]   .review-opt-letter[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.review-wrong[_ngcontent-%COMP%]   .review-opt-letter[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.25);\n  color: #f87171;\n}\n.review-opt-text[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.review-opt-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n}\n.correct-opt-icon[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.wrong-opt-icon[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.explanation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 8px;\n}\n.exp-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.exp-text[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n}\n.no-result[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.no-result-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.no-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-bottom: 20px;\n}\n.cert-cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.btn-certificate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);\n  transition: all 0.2s ease;\n}\n.btn-certificate[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(27, 67, 50, 0.45);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-certificate[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .btn-certificate[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .result-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .result-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .result-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .result-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n  color: rgba(255, 255, 255, 0.85);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .toolbar-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .toolbar-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .score-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .score-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .ring-bg[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .ring-bg[_ngcontent-%COMP%] {\n  stroke: #E8EDE5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .score-pct[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .score-pct[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .score-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .score-sub[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .score-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .score-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .score-stat[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .score-stat[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-retake[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .btn-retake[_ngcontent-%COMP%] {\n  background: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .btn-home[_ngcontent-%COMP%]:hover {\n  background: #F5F7F2;\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-header[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-header[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-hdr-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-hdr-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-q-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-q-text[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-opt[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-opt[_ngcontent-%COMP%] {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-opt-letter[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-opt-letter[_ngcontent-%COMP%] {\n  background: #E8EDE5;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-q-num[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-q-num[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .explanation[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .explanation[_ngcontent-%COMP%] {\n  background: #FFF8ED;\n  border-color: rgba(245, 158, 11, 0.2);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .exp-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .exp-text[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-card.correct[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-card.correct[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.04);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .review-card.wrong[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .review-card.wrong[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.03);\n}\n/*# sourceMappingURL=assess-result.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessResultComponent, [{
    type: Component,
    args: [{ selector: "app-assess-result", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, CertificateComponent], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="result-toolbar">
        <ion-buttons slot="start">
          <button class="back-btn" (click)="goBack()">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </ion-buttons>
        <span class="toolbar-title">Results</span>
      </ion-toolbar>
    </ion-header>

    <ion-content class="result-content">
      <div class="result-wrapper">

        @if (result(); as r) {

          <!-- \u2500\u2500 Score Card \u2500\u2500 -->
          <div class="score-card">
            <div class="score-ring-wrap">
              <svg class="score-ring" viewBox="0 0 100 100">
                <circle class="ring-bg" cx="50" cy="50" r="42" />
                <circle class="ring-fill"
                  cx="50" cy="50" r="42"
                  [attr.stroke]="scoreColor(r.score)"
                  [style.stroke-dasharray]="264"
                  [style.stroke-dashoffset]="264 - (264 * r.score / 100)" />
              </svg>
              <div class="score-inner">
                <span class="score-pct">{{ r.score }}%</span>
                <span class="score-sub">Score</span>
              </div>
            </div>

            <div class="score-meta">
              <h2 class="score-title">{{ r.title }}</h2>
              <span class="pass-badge" [attr.data-pass]="r.score >= 70">
                {{ r.score >= 70 ? '\u{1F3C6} Passed' : '\u{1F4D8} Keep Practising' }}
              </span>
              <div class="score-stats">
                <div class="score-stat">
                  <i class="fa-solid fa-circle-check score-stat-icon correct-icon"></i>
                  <span>{{ r.correct }} correct</span>
                </div>
                <div class="score-stat">
                  <i class="fa-solid fa-circle-xmark score-stat-icon wrong-icon"></i>
                  <span>{{ r.total - r.correct }} incorrect</span>
                </div>
                <div class="score-stat">
                  <i class="fa-regular fa-clock score-stat-icon time-icon"></i>
                  <span>{{ formatTime(r.timeTaken) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- \u2500\u2500 Actions \u2500\u2500 -->
          <div class="action-row">
            <button class="btn-retake" (click)="retake(r.quizId)">
              <i class="fa-solid fa-rotate-right"></i> Retake
            </button>
            <button class="btn-home" (click)="goBack()">
              <i class="fa-solid fa-list"></i> All Quizzes
            </button>
          </div>

          <!-- \u2500\u2500 Certificate CTA \u2500\u2500 -->
          @if (r.score >= 70) {
            <div class="cert-cta-row">
              <button class="btn-certificate" (click)="showCert.set(true)">
                <i class="fa-solid fa-certificate"></i>
                Get Certificate
              </button>
            </div>
          }

          <!-- \u2500\u2500 Question Review \u2500\u2500 -->
          <div class="review-header">
            <i class="fa-solid fa-clipboard-list review-hdr-icon"></i>
            <span>Question Review</span>
          </div>

          <div class="review-list">
            @for (q of r.questions; track qIdx; let qIdx = $index) {
              <div class="review-card" [class.correct]="r.answers[qIdx] === q.ans" [class.wrong]="r.answers[qIdx] !== q.ans">

                <div class="review-status">
                  @if (r.answers[qIdx] === q.ans) {
                    <span class="status-chip correct-chip"><i class="fa-solid fa-check"></i> Correct</span>
                  } @else {
                    <span class="status-chip wrong-chip"><i class="fa-solid fa-xmark"></i> Incorrect</span>
                  }
                  <span class="review-q-num">Q{{ qIdx + 1 }}</span>
                </div>

                <p class="review-q-text">{{ q.q }}</p>

                <div class="review-opts">
                  @for (opt of q.opts; track optIdx; let optIdx = $index) {
                    <div class="review-opt"
                      [class.review-correct]="optIdx === q.ans"
                      [class.review-wrong]="optIdx === r.answers[qIdx] && optIdx !== q.ans">
                      <span class="review-opt-letter">{{ letters[optIdx] }}</span>
                      <span class="review-opt-text">{{ opt }}</span>
                      @if (optIdx === q.ans) {
                        <i class="fa-solid fa-check review-opt-icon correct-opt-icon"></i>
                      }
                      @if (optIdx === r.answers[qIdx] && optIdx !== q.ans) {
                        <i class="fa-solid fa-xmark review-opt-icon wrong-opt-icon"></i>
                      }
                    </div>
                  }
                </div>

                <div class="explanation">
                  <i class="fa-solid fa-lightbulb exp-icon"></i>
                  <p class="exp-text">{{ q.exp }}</p>
                </div>
              </div>
            }
          </div>

        } @else {
          <div class="no-result">
            <div class="no-result-icon">\u{1F4CB}</div>
            <p>No results found. Please take a quiz first.</p>
            <button class="btn-home" (click)="goBack()">Browse Quizzes</button>
          </div>
        }

      </div>
    </ion-content>

    <!-- Certificate modal \u2014 mounted outside ion-content for proper print stacking -->
    @if (showCert()) {
      <app-certificate
        type="assessment"
        [title]="result()!.title"
        [category]="result()!.category"
        [score]="result()!.score"
        [visible]="showCert()"
        [recipientName]="userName()"
        (closed)="showCert.set(false)" />
    }
  `, styles: ["/* angular:styles/component:css;201429c4550f727ecfd9bdfaa964ca63885304046e3eb61a3075c44a277f0d30;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/assessments/assess-result.component.ts */\n.result-toolbar {\n  --background: #0b1120;\n  --border-style: none;\n  --color: white;\n}\n.result-content {\n  --background: #0b1120;\n}\n.result-wrapper {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 16px 16px 100px;\n}\n.back-btn {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  margin-left: 8px;\n  transition: all 0.18s;\n}\n.back-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.toolbar-title {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-left: 8px;\n}\n.score-card {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 20px;\n  padding: 24px 20px;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.score-ring-wrap {\n  position: relative;\n  flex-shrink: 0;\n  width: 90px;\n  height: 90px;\n}\n.score-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.06);\n  stroke-width: 8;\n}\n.ring-fill {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.score-inner {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.score-pct {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  line-height: 1;\n}\n.score-sub {\n  font-size: 0.55rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.score-meta {\n  flex: 1;\n  min-width: 0;\n}\n.score-title {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n  letter-spacing: -0.01em;\n}\n.pass-badge {\n  display: inline-block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-bottom: 12px;\n}\n.pass-badge[data-pass=true] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.pass-badge[data-pass=false] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.score-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.score-stat {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.score-stat-icon {\n  font-size: 0.7rem;\n}\n.correct-icon {\n  color: #10b981;\n}\n.wrong-icon {\n  color: #f87171;\n}\n.time-icon {\n  color: #a78bfa;\n}\n.action-row {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n.btn-retake,\n.btn-home {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  transition: all 0.18s ease;\n}\n.btn-retake {\n  background: #8b5cf6;\n  color: white;\n}\n.btn-retake:hover {\n  opacity: 0.88;\n  transform: translateY(-1px);\n}\n.btn-home {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #94a3b8;\n}\n.btn-home:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n.review-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  margin-bottom: 14px;\n}\n.review-hdr-icon {\n  color: #8b5cf6;\n  font-size: 0.65rem;\n}\n.review-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.review-card {\n  border-radius: 14px;\n  padding: 16px;\n}\n.review-card.correct {\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-left: 3px solid #10b981;\n}\n.review-card.wrong {\n  background: rgba(239, 68, 68, 0.04);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-left: 3px solid #f87171;\n}\n.review-status {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.correct-chip {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.wrong-chip {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.review-q-num {\n  font-size: 0.6rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.review-q-text {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.5;\n  margin: 0 0 12px;\n}\n.review-opts {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 12px;\n}\n.review-opt {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.review-correct {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: rgba(16, 185, 129, 0.3) !important;\n  color: #d1fae5 !important;\n}\n.review-wrong {\n  background: rgba(239, 68, 68, 0.1) !important;\n  border-color: rgba(239, 68, 68, 0.25) !important;\n  color: #fecaca !important;\n}\n.review-opt-letter {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.62rem;\n  font-weight: 700;\n}\n.review-correct .review-opt-letter {\n  background: rgba(16, 185, 129, 0.3);\n  color: #34d399;\n}\n.review-wrong .review-opt-letter {\n  background: rgba(239, 68, 68, 0.25);\n  color: #f87171;\n}\n.review-opt-text {\n  flex: 1;\n  line-height: 1.4;\n}\n.review-opt-icon {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n}\n.correct-opt-icon {\n  color: #34d399;\n}\n.wrong-opt-icon {\n  color: #f87171;\n}\n.explanation {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 8px;\n}\n.exp-icon {\n  color: #f59e0b;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.exp-text {\n  font-size: 0.72rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n}\n.no-result {\n  text-align: center;\n  padding: 60px 20px;\n}\n.no-result-icon {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.no-result p {\n  color: #64748b;\n  font-size: 0.85rem;\n  margin-bottom: 20px;\n}\n.cert-cta-row {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.btn-certificate {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 28px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.4);\n  transition: all 0.2s ease;\n}\n.btn-certificate:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(27, 67, 50, 0.45);\n}\n:host-context(html:not(.dark)) .btn-certificate {\n  box-shadow: 0 4px 14px rgba(27, 67, 50, 0.3);\n}\n:host-context(html:not(.dark)) .result-toolbar {\n  --background: #1B4332;\n}\n:host-context(html:not(.dark)) .result-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .back-btn {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n  color: rgba(255, 255, 255, 0.85);\n}\n:host-context(html:not(.dark)) .toolbar-title {\n  color: #ffffff;\n}\n:host-context(html:not(.dark)) .score-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n:host-context(html:not(.dark)) .ring-bg {\n  stroke: #E8EDE5;\n}\n:host-context(html:not(.dark)) .score-pct {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .score-sub {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .score-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .score-stat {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .btn-retake {\n  background: #1B4332;\n}\n:host-context(html:not(.dark)) .btn-home {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .btn-home:hover {\n  background: #F5F7F2;\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .review-header {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .review-hdr-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .review-q-text {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .review-opt {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .review-opt-letter {\n  background: #E8EDE5;\n}\n:host-context(html:not(.dark)) .review-q-num {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .explanation {\n  background: #FFF8ED;\n  border-color: rgba(245, 158, 11, 0.2);\n}\n:host-context(html:not(.dark)) .exp-text {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .review-card.correct {\n  background: rgba(16, 185, 129, 0.04);\n}\n:host-context(html:not(.dark)) .review-card.wrong {\n  background: rgba(239, 68, 68, 0.03);\n}\n/*# sourceMappingURL=assess-result.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessResultComponent, { className: "AssessResultComponent", filePath: "src/app/features/assessments/assess-result.component.ts", lineNumber: 328 });
})();
export {
  AssessResultComponent
};
//# sourceMappingURL=chunk-G3Y476AG.js.map
