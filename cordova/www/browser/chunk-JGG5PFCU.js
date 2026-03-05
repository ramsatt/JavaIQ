import {
  DailyEngagementService
} from "./chunk-ZIBGLWLK.js";
import {
  DailyChallengeService
} from "./chunk-KPDXCHUA.js";
import {
  WrongAnswerService
} from "./chunk-GSWVROYK.js";
import {
  ShareService
} from "./chunk-2BOY2CH4.js";
import {
  AnalyticsService
} from "./chunk-EPXUGUMG.js";
import {
  GamificationService,
  RatingService
} from "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-BJOCJFQ2.js";
import "./chunk-KHYVC3NX.js";
import "./chunk-YU6DDDO5.js";
import {
  IonBackButton,
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/daily-challenge/daily-challenge.component.ts
function DailyChallengeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 11);
    \u0275\u0275text(5, "Already completed today!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, "Come back tomorrow for a fresh challenge.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275element(9, "i", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 15);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_5_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(12, "Back to Learning");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" Resets in ", ctx_r1.countdown(), " ");
  }
}
function DailyChallengeComponent_Conditional_6_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.gameService.streak(), "-day challenge streak! ");
  }
}
function DailyChallengeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 18);
    \u0275\u0275text(5, "Daily Challenge Done!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275element(9, "i", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 22);
    \u0275\u0275text(12, "2\xD7 Bonus");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, DailyChallengeComponent_Conditional_6_Conditional_13_Template, 3, 1, "div", 23);
    \u0275\u0275elementStart(14, "button", 15);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(15, "Done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 24);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_6_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareResult());
    });
    \u0275\u0275element(17, "i", 25);
    \u0275\u0275text(18, " Share Result ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.resultEmoji());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.score(), " / ", ctx_r1.TOTAL_QUESTIONS);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" +", ctx_r1.earnedXp(), " XP ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.gameService.streak() > 1 ? 13 : -1);
  }
}
function DailyChallengeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading today's challenge...");
    \u0275\u0275elementEnd()();
  }
}
function DailyChallengeComponent_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r4.asked_metadata);
  }
}
function DailyChallengeComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275text(3, " Answer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "button", 46);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_8_Conditional_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit(false));
    });
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275text(9, " Didn't know ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_8_Conditional_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit(true));
    });
    \u0275\u0275element(11, "i", 49);
    \u0275\u0275text(12, " Got it! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r4.answer);
  }
}
function DailyChallengeComponent_Conditional_8_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function DailyChallengeComponent_Conditional_8_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reveal());
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Reveal Answer ");
    \u0275\u0275elementEnd();
  }
}
function DailyChallengeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 28)(2, "div", 29)(3, "span", 30);
    \u0275\u0275element(4, "i", 21);
    \u0275\u0275text(5, " Daily Challenge \xB7 2\xD7 XP ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 35);
    \u0275\u0275element(14, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 37)(16, "p", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, DailyChallengeComponent_Conditional_8_Conditional_18_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, DailyChallengeComponent_Conditional_8_Conditional_19_Template, 13, 1)(20, DailyChallengeComponent_Conditional_8_Conditional_20_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.todayLabel());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentIndex() + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.TOTAL_QUESTIONS);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.progressPct(), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r4.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r4.asked_metadata ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.answerVisible() ? 19 : 20);
  }
}
var XP_MULTIPLIER = 2;
var BASE_XP_PER_CORRECT = 10;
var TOTAL_QUESTIONS = 5;
var DailyChallengeComponent = class _DailyChallengeComponent {
  TOTAL_QUESTIONS = TOTAL_QUESTIONS;
  dcService = inject(DailyChallengeService);
  gameService = inject(GamificationService);
  dataService = inject(DataService);
  analytics = inject(AnalyticsService);
  dailyEngagement = inject(DailyEngagementService);
  shareSvc = inject(ShareService);
  wrongSvc = inject(WrongAnswerService);
  ratingSvc = inject(RatingService);
  router = inject(Router);
  questions = signal([], ...ngDevMode ? [{ debugName: "questions" }] : []);
  currentIndex = signal(0, ...ngDevMode ? [{ debugName: "currentIndex" }] : []);
  answerVisible = signal(false, ...ngDevMode ? [{ debugName: "answerVisible" }] : []);
  finished = signal(false, ...ngDevMode ? [{ debugName: "finished" }] : []);
  alreadyDone = signal(false, ...ngDevMode ? [{ debugName: "alreadyDone" }] : []);
  score = signal(0, ...ngDevMode ? [{ debugName: "score" }] : []);
  earnedXp = signal(0, ...ngDevMode ? [{ debugName: "earnedXp" }] : []);
  currentQuestion = computed(() => this.questions()[this.currentIndex()] ?? null, ...ngDevMode ? [{ debugName: "currentQuestion" }] : []);
  progressPct = computed(() => this.currentIndex() / TOTAL_QUESTIONS * 100, ...ngDevMode ? [{ debugName: "progressPct" }] : []);
  resultEmoji = computed(() => {
    const s = this.score();
    if (s === TOTAL_QUESTIONS)
      return "\u{1F3C6}";
    if (s >= 3)
      return "\u{1F389}";
    return "\u{1F4AA}";
  }, ...ngDevMode ? [{ debugName: "resultEmoji" }] : []);
  async ngOnInit() {
    if (this.dcService.isCompletedToday()) {
      this.alreadyDone.set(true);
      return;
    }
    this.analytics.track("daily_challenge_started");
    await this.dcService.loadTodayChallenge();
    this.questions.set(this.dcService.getQuestionsForToday());
  }
  reveal() {
    this.answerVisible.set(true);
  }
  async submit(correct) {
    if (correct) {
      const xp = BASE_XP_PER_CORRECT * XP_MULTIPLIER;
      this.score.update((s) => s + 1);
      this.earnedXp.update((v) => v + xp);
      this.gameService.addXp(xp);
      this.dataService.markAsRevealed(this.currentQuestion().id);
      this.wrongSvc.clearMiss(this.currentQuestion().id);
    } else {
      this.wrongSvc.recordMiss(this.currentQuestion().id);
    }
    this.answerVisible.set(false);
    if (this.currentIndex() + 1 >= TOTAL_QUESTIONS) {
      await this.complete();
    } else {
      this.currentIndex.update((i) => i + 1);
    }
  }
  async complete() {
    this.finished.set(true);
    this.gameService.updateStreak();
    this.dailyEngagement.markChallengeComplete();
    await this.dcService.markCompleted(this.earnedXp());
    this.analytics.track("daily_challenge_completed", {
      score: this.score(),
      xp_earned: this.earnedXp()
    });
    const countKey = "dc_completed_count";
    const prev = parseInt(localStorage.getItem(countKey) ?? "0", 10);
    const next = prev + 1;
    localStorage.setItem(countKey, String(next));
    this.ratingSvc.checkAfterDailyChallenge(next);
  }
  shareResult() {
    this.shareSvc.shareDailyResult(this.score(), TOTAL_QUESTIONS, this.earnedXp());
  }
  countdown() {
    const now = /* @__PURE__ */ new Date();
    const reset = /* @__PURE__ */ new Date();
    reset.setDate(reset.getDate() + 1);
    reset.setHours(0, 0, 0, 0);
    const diff = reset.getTime() - now.getTime();
    const h = Math.floor(diff / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    return `${h}h ${m}m`;
  }
  todayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  }
  ngOnDestroy() {
    if (!this.finished() && !this.alreadyDone() && this.currentIndex() > 0) {
      this.analytics.track("daily_challenge_skipped", {
        questions_seen: this.currentIndex(),
        score_so_far: this.score()
      });
    }
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function DailyChallengeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyChallengeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyChallengeComponent, selectors: [["app-daily-challenge"]], decls: 9, vars: 1, consts: [[1, "ion-no-border"], [1, "dc-toolbar"], ["slot", "start"], ["defaultHref", "/dashboard", "text", "", "color", "light"], [1, "dc-content"], [1, "dc-done-wrap"], [1, "dc-result-wrap"], [1, "dc-loading"], [1, "dc-wrap"], [1, "dc-done-card"], [1, "done-emoji"], [1, "done-title"], [1, "done-sub"], [1, "done-countdown"], [1, "fa-solid", "fa-clock"], [1, "dc-btn-primary", 3, "click"], [1, "dc-result-card"], [1, "result-emoji"], [1, "result-title"], [1, "result-score"], [1, "result-xp"], [1, "fa-solid", "fa-bolt"], [1, "xp-badge"], [1, "result-streak"], [1, "dc-share-btn", 3, "click"], [1, "fa-solid", "fa-share-nodes"], [1, "fa-solid", "fa-fire"], [1, "dc-spinner"], [1, "dc-head"], [1, "dc-head-left"], [1, "dc-badge"], [1, "dc-date"], [1, "dc-progress-ring"], [1, "progress-num"], [1, "progress-denom"], [1, "dc-prog-track"], [1, "dc-prog-fill"], [1, "dc-question-card"], [1, "dc-question-text"], [1, "dc-meta"], [1, "dc-reveal-btn"], [1, "dc-answer-card"], [1, "dc-answer-label"], [1, "fa-solid", "fa-lightbulb"], [1, "dc-answer-text"], [1, "dc-vote-row"], [1, "dc-vote-btn", "dc-vote-wrong", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "dc-vote-btn", "dc-vote-correct", 3, "click"], [1, "fa-solid", "fa-check"], [1, "dc-reveal-btn", 3, "click"], [1, "fa-solid", "fa-eye"]], template: function DailyChallengeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4);
      \u0275\u0275conditionalCreate(5, DailyChallengeComponent_Conditional_5_Template, 13, 1, "div", 5)(6, DailyChallengeComponent_Conditional_6_Template, 19, 5, "div", 6)(7, DailyChallengeComponent_Conditional_7_Template, 4, 0, "div", 7)(8, DailyChallengeComponent_Conditional_8_Template, 21, 8, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.alreadyDone() ? 5 : ctx.finished() ? 6 : ctx.dcService.loading() ? 7 : (tmp_0_0 = ctx.currentQuestion()) ? 8 : -1, tmp_0_0);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], styles: ["\n\n.dc-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.dc-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.dc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 16px;\n}\n.dc-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(245, 158, 11, 0.15);\n  border-top-color: #f59e0b;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.dc-done-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 24px;\n}\n.dc-done-card[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 24px;\n  padding: 40px 28px;\n}\n.done-emoji[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.done-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n}\n.done-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 20px;\n}\n.done-countdown[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 20px;\n  padding: 8px 16px;\n  margin-bottom: 24px;\n}\n.dc-result-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 24px;\n}\n.dc-result-card[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 360px;\n  background: rgba(245, 158, 11, 0.05);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 24px;\n  padding: 40px 28px;\n}\n.result-emoji[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 16px;\n}\n.result-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n}\n.result-score[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #f59e0b;\n  letter-spacing: -0.04em;\n  margin-bottom: 12px;\n}\n.result-xp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #fbbf24;\n  margin-bottom: 12px;\n}\n.xp-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.35);\n  border-radius: 6px;\n  padding: 2px 8px;\n}\n.result-streak[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #f97316;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.dc-wrap[_ngcontent-%COMP%] {\n  padding: 20px 20px 100px;\n  max-width: 540px;\n  margin: 0 auto;\n}\n.dc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.dc-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  border-radius: 20px;\n  padding: 5px 12px;\n  margin-bottom: 4px;\n  display: flex;\n}\n.dc-date[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #475569;\n  margin: 0;\n}\n.dc-progress-ring[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  padding: 6px 12px;\n}\n.progress-num[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #f59e0b;\n  line-height: 1;\n}\n.progress-denom[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n.dc-prog-track[_ngcontent-%COMP%] {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 2px;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.dc-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n  transition: width 0.4s ease;\n}\n.dc-question-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.dc-question-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  line-height: 1.5;\n  margin: 0 0 10px;\n}\n.dc-meta[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #475569;\n  font-weight: 500;\n}\n.dc-answer-card[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.06);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 16px;\n  padding: 18px;\n  margin-bottom: 16px;\n}\n.dc-answer-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #10b981;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dc-answer-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.65;\n  margin: 0;\n}\n.dc-vote-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.dc-vote-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  border: none;\n  border-radius: 14px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dc-vote-wrong[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.dc-vote-wrong[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.dc-vote-correct[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.dc-vote-correct[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.dc-reveal-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  border: none;\n  border-radius: 16px;\n  color: white;\n  font-size: 0.92rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);\n}\n.dc-reveal-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 28px rgba(245, 158, 11, 0.4);\n  transform: translateY(-1px);\n}\n.dc-btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 20px;\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);\n}\n.dc-btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.dc-share-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 11px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.dc-share-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=daily-challenge.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyChallengeComponent, [{
    type: Component,
    args: [{ selector: "app-daily-challenge", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="dc-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/dashboard" text="" color="light"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="dc-content">

      <!-- Already done today -->
      @if (alreadyDone()) {
        <div class="dc-done-wrap">
          <div class="dc-done-card">
            <div class="done-emoji">\u2705</div>
            <h2 class="done-title">Already completed today!</h2>
            <p class="done-sub">Come back tomorrow for a fresh challenge.</p>
            <div class="done-countdown">
              <i class="fa-solid fa-clock"></i>
              Resets in {{ countdown() }}
            </div>
            <button class="dc-btn-primary" (click)="goBack()">Back to Learning</button>
          </div>
        </div>
      }

      <!-- Finished state -->
      @else if (finished()) {
        <div class="dc-result-wrap">
          <div class="dc-result-card">
            <div class="result-emoji">{{ resultEmoji() }}</div>
            <h2 class="result-title">Daily Challenge Done!</h2>
            <div class="result-score">{{ score() }} / {{ TOTAL_QUESTIONS }}</div>
            <div class="result-xp">
              <i class="fa-solid fa-bolt"></i>
              +{{ earnedXp() }} XP
              <span class="xp-badge">2\xD7 Bonus</span>
            </div>
            @if (gameService.streak() > 1) {
              <div class="result-streak">
                <i class="fa-solid fa-fire"></i>
                {{ gameService.streak() }}-day challenge streak!
              </div>
            }
            <button class="dc-btn-primary" (click)="goBack()">Done</button>
            <button class="dc-share-btn" (click)="shareResult()">
              <i class="fa-solid fa-share-nodes"></i> Share Result
            </button>
          </div>
        </div>
      }

      <!-- Loading -->
      @else if (dcService.loading()) {
        <div class="dc-loading">
          <div class="dc-spinner"></div>
          <p>Loading today's challenge...</p>
        </div>
      }

      <!-- Active challenge -->
      @else if (currentQuestion(); as q) {
        <div class="dc-wrap">

          <!-- Header -->
          <div class="dc-head">
            <div class="dc-head-left">
              <span class="dc-badge">
                <i class="fa-solid fa-bolt"></i> Daily Challenge \xB7 2\xD7 XP
              </span>
              <p class="dc-date">{{ todayLabel() }}</p>
            </div>
            <div class="dc-progress-ring">
              <span class="progress-num">{{ currentIndex() + 1 }}</span>
              <span class="progress-denom">/ {{ TOTAL_QUESTIONS }}</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="dc-prog-track">
            <div class="dc-prog-fill" [style.width.%]="progressPct()"></div>
          </div>

          <!-- Question Card -->
          <div class="dc-question-card">
            <p class="dc-question-text">{{ q.question }}</p>
            @if (q.asked_metadata) {
              <span class="dc-meta">{{ q.asked_metadata }}</span>
            }
          </div>

          <!-- Answer (revealed) -->
          @if (answerVisible()) {
            <div class="dc-answer-card">
              <div class="dc-answer-label">
                <i class="fa-solid fa-lightbulb"></i> Answer
              </div>
              <p class="dc-answer-text">{{ q.answer }}</p>
            </div>

            <div class="dc-vote-row">
              <button class="dc-vote-btn dc-vote-wrong" (click)="submit(false)">
                <i class="fa-solid fa-xmark"></i> Didn't know
              </button>
              <button class="dc-vote-btn dc-vote-correct" (click)="submit(true)">
                <i class="fa-solid fa-check"></i> Got it!
              </button>
            </div>
          } @else {
            <button class="dc-reveal-btn" (click)="reveal()">
              <i class="fa-solid fa-eye"></i>
              Reveal Answer
            </button>
          }

        </div>
      }

    </ion-content>
  `, styles: ["/* angular:styles/component:css;6619ae787261688a215b1d33612fc75822464ae3e1322c5c675fccba45f935a1;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/daily-challenge/daily-challenge.component.ts */\n.dc-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.dc-content {\n  --background: #0b1120;\n}\n.dc-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 60%;\n  gap: 16px;\n}\n.dc-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(245, 158, 11, 0.15);\n  border-top-color: #f59e0b;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dc-loading p {\n  color: #64748b;\n  font-size: 0.82rem;\n}\n.dc-done-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 24px;\n}\n.dc-done-card {\n  text-align: center;\n  max-width: 360px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 24px;\n  padding: 40px 28px;\n}\n.done-emoji {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.done-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n}\n.done-sub {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0 0 20px;\n}\n.done-countdown {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 20px;\n  padding: 8px 16px;\n  margin-bottom: 24px;\n}\n.dc-result-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 24px;\n}\n.dc-result-card {\n  text-align: center;\n  max-width: 360px;\n  background: rgba(245, 158, 11, 0.05);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: 24px;\n  padding: 40px 28px;\n}\n.result-emoji {\n  font-size: 3.5rem;\n  margin-bottom: 16px;\n}\n.result-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 12px;\n}\n.result-score {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #f59e0b;\n  letter-spacing: -0.04em;\n  margin-bottom: 12px;\n}\n.result-xp {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #fbbf24;\n  margin-bottom: 12px;\n}\n.xp-badge {\n  font-size: 0.6rem;\n  font-weight: 800;\n  background: rgba(245, 158, 11, 0.2);\n  color: #f59e0b;\n  border: 1px solid rgba(245, 158, 11, 0.35);\n  border-radius: 6px;\n  padding: 2px 8px;\n}\n.result-streak {\n  font-size: 0.82rem;\n  color: #f97316;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n.dc-wrap {\n  padding: 20px 20px 100px;\n  max-width: 540px;\n  margin: 0 auto;\n}\n.dc-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.dc-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #f59e0b;\n  background: rgba(245, 158, 11, 0.1);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  border-radius: 20px;\n  padding: 5px 12px;\n  margin-bottom: 4px;\n  display: flex;\n}\n.dc-date {\n  font-size: 0.65rem;\n  color: #475569;\n  margin: 0;\n}\n.dc-progress-ring {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  padding: 6px 12px;\n}\n.progress-num {\n  font-size: 1.3rem;\n  font-weight: 900;\n  color: #f59e0b;\n  line-height: 1;\n}\n.progress-denom {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n.dc-prog-track {\n  height: 4px;\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 2px;\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.dc-prog-fill {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n  transition: width 0.4s ease;\n}\n.dc-question-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.dc-question-text {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  line-height: 1.5;\n  margin: 0 0 10px;\n}\n.dc-meta {\n  font-size: 0.62rem;\n  color: #475569;\n  font-weight: 500;\n}\n.dc-answer-card {\n  background: rgba(16, 185, 129, 0.06);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 16px;\n  padding: 18px;\n  margin-bottom: 16px;\n}\n.dc-answer-label {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #10b981;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.dc-answer-text {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.65;\n  margin: 0;\n}\n.dc-vote-row {\n  display: flex;\n  gap: 12px;\n}\n.dc-vote-btn {\n  flex: 1;\n  padding: 14px;\n  border: none;\n  border-radius: 14px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.dc-vote-wrong {\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.dc-vote-wrong:hover {\n  background: rgba(239, 68, 68, 0.18);\n}\n.dc-vote-correct {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.dc-vote-correct:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.dc-reveal-btn {\n  width: 100%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  border: none;\n  border-radius: 16px;\n  color: white;\n  font-size: 0.92rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);\n}\n.dc-reveal-btn:hover {\n  box-shadow: 0 6px 28px rgba(245, 158, 11, 0.4);\n  transform: translateY(-1px);\n}\n.dc-btn-primary {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 20px;\n  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);\n}\n.dc-btn-primary:hover {\n  transform: translateY(-1px);\n}\n.dc-share-btn {\n  width: 100%;\n  padding: 11px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.dc-share-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #e2e8f0;\n}\n/*# sourceMappingURL=daily-challenge.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyChallengeComponent, { className: "DailyChallengeComponent", filePath: "src/app/daily-challenge/daily-challenge.component.ts", lineNumber: 328 });
})();
export {
  DailyChallengeComponent
};
//# sourceMappingURL=chunk-JGG5PFCU.js.map
