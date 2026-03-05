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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/mock-interview/mock-interview.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.seconds;
var _forTrack2 = ($index, $item) => $item.category;
function MockInterviewComponent_Conditional_2_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_2_For_16_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCategory(cat_r4.name));
    });
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mi-cat-sel", ctx_r1.selectedCategories().includes(cat_r4.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.name);
  }
}
function MockInterviewComponent_Conditional_2_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_2_For_22_Template_button_click_0_listener() {
      const n_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.questionCount.set(n_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mi-chip-sel", ctx_r1.questionCount() === n_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r6);
  }
}
function MockInterviewComponent_Conditional_2_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_2_For_28_Template_button_click_0_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.timePerQuestion.set(t_r8.seconds));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mi-chip-sel", ctx_r1.timePerQuestion() === t_r8.seconds);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xB7 ", t_r8.desc);
  }
}
function MockInterviewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "button", 6);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(3, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h1", 8);
    \u0275\u0275text(6, "Mock Interview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8, "Simulate a real Java interview session");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 10)(10, "span", 11);
    \u0275\u0275text(11, "Topics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 12);
    \u0275\u0275text(13, "Select one or more (leave all off = random mix)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275repeaterCreate(15, MockInterviewComponent_Conditional_2_For_16_Template, 5, 4, "button", 14, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "span", 11);
    \u0275\u0275text(19, "Number of Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15);
    \u0275\u0275repeaterCreate(21, MockInterviewComponent_Conditional_2_For_22_Template, 2, 3, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
    \u0275\u0275text(25, "Time Per Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275repeaterCreate(27, MockInterviewComponent_Conditional_2_For_28_Template, 4, 4, "button", 16, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startSession());
    });
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275text(31, " Start Interview ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.allCategories);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.questionCounts);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.timeOptions);
  }
}
function MockInterviewComponent_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 40)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentQuestion().code);
  }
}
function MockInterviewComponent_Conditional_3_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_3_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAnswer());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, " Show Answer ");
    \u0275\u0275elementEnd();
  }
}
function MockInterviewComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2, "ANSWER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 47)(6, "button", 48);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_3_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitAnswer(false));
    });
    \u0275\u0275element(7, "i", 49);
    \u0275\u0275text(8, " Missed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 50);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_3_Conditional_24_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitAnswer(true));
    });
    \u0275\u0275element(10, "i", 51);
    \u0275\u0275text(11, " Got it ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentQuestion().answer);
  }
}
function MockInterviewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 24)(2, "button", 25);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmQuit());
    });
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275element(9, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 32);
    \u0275\u0275element(12, "circle", 33)(13, "circle", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 36)(17, "div", 37)(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, MockInterviewComponent_Conditional_3_Conditional_22_Template, 3, 1, "pre", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, MockInterviewComponent_Conditional_3_Conditional_23_Template, 3, 0, "button", 41)(24, MockInterviewComponent_Conditional_3_Conditional_24_Template, 12, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.currentIdx() + 1, " / ", ctx_r1.session().length);
    \u0275\u0275advance();
    \u0275\u0275classProp("mi-time-warn", ctx_r1.timeLeft() <= 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.timeLeft(), "s ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", (ctx_r1.currentIdx() + 1) / ctx_r1.session().length * 100, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke-dashoffset", ctx_r1.timerDash());
    \u0275\u0275classProp("mi-ring-warn", ctx_r1.timeLeft() <= 10);
    \u0275\u0275advance();
    \u0275\u0275classProp("mi-ring-warn", ctx_r1.timeLeft() <= 10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.timeLeft(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentQuestion().category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentQuestion().question);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.currentQuestion().code ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.answerVisible() ? 23 : 24);
  }
}
function MockInterviewComponent_Conditional_4_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275element(4, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.category);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r13.pct, "%")("background", row_r13.pct >= 70 ? "#10b981" : row_r13.pct >= 50 ? "#f59e0b" : "#f87171");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r13.correct, "/", row_r13.total);
  }
}
function MockInterviewComponent_Conditional_4_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 11);
    \u0275\u0275text(2, "Category Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, MockInterviewComponent_Conditional_4_Conditional_33_For_4_Template, 7, 7, "div", 76, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categoryBreakdown());
  }
}
function MockInterviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 52)(2, "div", 53)(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 55);
    \u0275\u0275text(6, "Interview Complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 57)(10, "div", 58)(11, "span", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 60);
    \u0275\u0275text(14, "Correct");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 58)(16, "span", 61);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19, "Missed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 58)(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 60);
    \u0275\u0275text(24, "XP Earned");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 63)(26, "div", 64)(27, "span", 65);
    \u0275\u0275text(28, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 66);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 67);
    \u0275\u0275element(32, "div", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, MockInterviewComponent_Conditional_4_Conditional_33_Template, 5, 0, "div", 69);
    \u0275\u0275elementStart(34, "div", 70)(35, "button", 71);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_4_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareResult());
    });
    \u0275\u0275element(36, "i", 72);
    \u0275\u0275text(37, " Share ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 73);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_4_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275element(39, "i", 74);
    \u0275\u0275text(40, " Try Again ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "button", 75);
    \u0275\u0275listener("click", function MockInterviewComponent_Conditional_4_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(42, "Back to Dashboard");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", ctx_r1.resultGrade().color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.resultGrade().color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.resultGrade().letter, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.resultMessage());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.correctCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.wrongCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.earnedXp());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.scorePct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.scorePct(), "%")("background", ctx_r1.resultGrade().color);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.categoryBreakdown().length > 1 ? 33 : -1);
  }
}
var ALL_CATEGORIES = [
  { name: "Core Java", emoji: "\u2615" },
  { name: "Spring Boot", emoji: "\u{1F33F}" },
  { name: "Microservices", emoji: "\u{1F517}" },
  { name: "Hibernate", emoji: "\u{1F5C4}\uFE0F" },
  { name: "Multithreading", emoji: "\u{1F9F5}" },
  { name: "Spring Reactive", emoji: "\u26A1" },
  { name: "Reactive Programming", emoji: "\u{1F4E1}" },
  { name: "Coding Questions", emoji: "\u{1F4BB}" }
];
var QUESTION_COUNTS = [5, 10, 15, 20];
var TIME_OPTIONS = [
  { seconds: 30, label: "30 s", desc: "Fast" },
  { seconds: 60, label: "60 s", desc: "Standard" },
  { seconds: 90, label: "90 s", desc: "Relaxed" }
];
function grade(pct) {
  if (pct >= 90)
    return { letter: "A+", color: "#10b981" };
  if (pct >= 80)
    return { letter: "A", color: "#34d399" };
  if (pct >= 70)
    return { letter: "B", color: "#60a5fa" };
  if (pct >= 60)
    return { letter: "C", color: "#f59e0b" };
  return { letter: "D", color: "#f87171" };
}
var MockInterviewComponent = class _MockInterviewComponent {
  router = inject(Router);
  dataSvc = inject(DataService);
  gameSvc = inject(GamificationService);
  wrongSvc = inject(WrongAnswerService);
  shareSvc = inject(ShareService);
  analytics = inject(AnalyticsService);
  // Constants exposed to template
  allCategories = ALL_CATEGORIES;
  questionCounts = QUESTION_COUNTS;
  timeOptions = TIME_OPTIONS;
  // ── Setup state ────────────────────────────────────────────────────────────
  phase = signal("setup", ...ngDevMode ? [{ debugName: "phase" }] : []);
  selectedCategories = signal([], ...ngDevMode ? [{ debugName: "selectedCategories" }] : []);
  questionCount = signal(10, ...ngDevMode ? [{ debugName: "questionCount" }] : []);
  timePerQuestion = signal(60, ...ngDevMode ? [{ debugName: "timePerQuestion" }] : []);
  // ── Session state ──────────────────────────────────────────────────────────
  session = signal([], ...ngDevMode ? [{ debugName: "session" }] : []);
  currentIdx = signal(0, ...ngDevMode ? [{ debugName: "currentIdx" }] : []);
  answerVisible = signal(false, ...ngDevMode ? [{ debugName: "answerVisible" }] : []);
  timeLeft = signal(60, ...ngDevMode ? [{ debugName: "timeLeft" }] : []);
  _timerStart = 0;
  _timer;
  currentQuestion = computed(() => this.session()[this.currentIdx()]?.question ?? null, ...ngDevMode ? [{ debugName: "currentQuestion" }] : []);
  /** stroke-dashoffset for the ring (188.5 = full circle circumference for r=30) */
  timerDash = computed(() => 188.5 - this.timeLeft() / this.timePerQuestion() * 188.5, ...ngDevMode ? [{ debugName: "timerDash" }] : []);
  // ── Result computed values ─────────────────────────────────────────────────
  correctCount = computed(() => this.session().filter((e) => e.correct === true).length, ...ngDevMode ? [{ debugName: "correctCount" }] : []);
  wrongCount = computed(() => this.session().filter((e) => e.correct !== true).length, ...ngDevMode ? [{ debugName: "wrongCount" }] : []);
  scorePct = computed(() => this.session().length === 0 ? 0 : Math.round(this.correctCount() / this.session().length * 100), ...ngDevMode ? [{ debugName: "scorePct" }] : []);
  earnedXp = computed(() => this.correctCount() * 10, ...ngDevMode ? [{ debugName: "earnedXp" }] : []);
  resultGrade = computed(() => grade(this.scorePct()), ...ngDevMode ? [{ debugName: "resultGrade" }] : []);
  resultMessage = computed(() => {
    const pct = this.scorePct();
    if (pct >= 90)
      return "Outstanding! You nailed it.";
    if (pct >= 70)
      return "Great job! A few areas to polish.";
    if (pct >= 50)
      return "Solid attempt. Keep practicing!";
    return "Room to grow \u2014 review your missed answers.";
  }, ...ngDevMode ? [{ debugName: "resultMessage" }] : []);
  categoryBreakdown = computed(() => {
    const map = /* @__PURE__ */ new Map();
    for (const entry of this.session()) {
      const cat = entry.question.category;
      if (!map.has(cat))
        map.set(cat, { correct: 0, total: 0 });
      const row = map.get(cat);
      row.total++;
      if (entry.correct)
        row.correct++;
    }
    return Array.from(map.entries()).map(([category, v]) => ({
      category,
      correct: v.correct,
      total: v.total,
      pct: Math.round(v.correct / v.total * 100)
    }));
  }, ...ngDevMode ? [{ debugName: "categoryBreakdown" }] : []);
  // ── Setup methods ──────────────────────────────────────────────────────────
  toggleCategory(name) {
    this.selectedCategories.update((cats) => cats.includes(name) ? cats.filter((c) => c !== name) : [...cats, name]);
  }
  startSession() {
    const cats = this.selectedCategories().length > 0 ? this.selectedCategories() : ALL_CATEGORIES.map((c) => c.name);
    const pool = cats.flatMap((c) => this.dataSvc.getQuestions(c));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, this.questionCount());
    if (picked.length === 0)
      return;
    const entries = picked.map((q) => ({
      question: q,
      correct: null,
      timeTaken: 0
    }));
    this.session.set(entries);
    this.currentIdx.set(0);
    this.answerVisible.set(false);
    this.phase.set("session");
    this.analytics.track("mock_interview_started", {
      categories: cats.join(","),
      count: picked.length,
      time_per_q: this.timePerQuestion()
    });
    this._startTimer();
  }
  // ── Session methods ────────────────────────────────────────────────────────
  showAnswer() {
    this.answerVisible.set(true);
    this._clearTimer();
  }
  submitAnswer(correct) {
    const idx = this.currentIdx();
    const entry = this.session()[idx];
    const timeTaken = this.timePerQuestion() - this.timeLeft();
    this.session.update((s) => {
      const updated = [...s];
      updated[idx] = __spreadProps(__spreadValues({}, entry), { correct, timeTaken });
      return updated;
    });
    if (correct) {
      this.wrongSvc.clearMiss(entry.question.id);
    } else {
      this.wrongSvc.recordMiss(entry.question.id);
    }
    this._advance();
  }
  confirmQuit() {
    this._endSession();
  }
  // ── Private session helpers ────────────────────────────────────────────────
  _startTimer() {
    this._clearTimer();
    this.timeLeft.set(this.timePerQuestion());
    this._timerStart = Date.now();
    this._timer = setInterval(() => {
      const left = this.timeLeft() - 1;
      if (left <= 0) {
        this.timeLeft.set(0);
        this._onTimeout();
      } else {
        this.timeLeft.set(left);
      }
    }, 1e3);
  }
  _clearTimer() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = void 0;
    }
  }
  _onTimeout() {
    this._clearTimer();
    const idx = this.currentIdx();
    this.session.update((s) => {
      const updated = [...s];
      updated[idx] = __spreadProps(__spreadValues({}, updated[idx]), { correct: false, timeTaken: this.timePerQuestion() });
      return updated;
    });
    this.wrongSvc.recordMiss(this.session()[idx].question.id);
    this._advance();
  }
  _advance() {
    const next = this.currentIdx() + 1;
    if (next >= this.session().length) {
      this._endSession();
    } else {
      this.currentIdx.set(next);
      this.answerVisible.set(false);
      this._startTimer();
    }
  }
  _endSession() {
    this._clearTimer();
    this.gameSvc.addXp(this.earnedXp());
    this.phase.set("result");
    this.analytics.track("mock_interview_completed", {
      score_pct: this.scorePct(),
      xp_earned: this.earnedXp(),
      correct: this.correctCount(),
      total: this.session().length
    });
  }
  // ── Result methods ─────────────────────────────────────────────────────────
  async shareResult() {
    await this.shareSvc.shareText("JavaIQ Mock Interview", `I scored ${this.scorePct()}% (${this.correctCount()}/${this.session().length}) on a Java mock interview! Grade: ${this.resultGrade().letter}. #JavaIQ`);
  }
  retry() {
    this.session.set([]);
    this.currentIdx.set(0);
    this.phase.set("setup");
  }
  back() {
    this.router.navigate(["/dashboard"]);
  }
  ngOnDestroy() {
    this._clearTimer();
  }
  static \u0275fac = function MockInterviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockInterviewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MockInterviewComponent, selectors: [["app-mock-interview"]], hostAttrs: [1, "ion-page"], decls: 5, vars: 3, consts: [[1, "mi-content"], [1, "mi-wrap"], [1, "mi-page"], [1, "mi-page", "mi-session-page"], [1, "mi-page", "mi-result-page"], [1, "mi-header"], [1, "mi-back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "mi-page-title"], [1, "mi-page-sub"], [1, "mi-section"], [1, "mi-section-label"], [1, "mi-section-hint"], [1, "mi-cat-grid"], [1, "mi-cat-btn", 3, "mi-cat-sel"], [1, "mi-chip-row"], [1, "mi-chip", 3, "mi-chip-sel"], [1, "mi-start-btn", 3, "click"], [1, "bi", "bi-play-circle-fill"], [1, "mi-cat-btn", 3, "click"], [1, "mi-cat-emoji"], [1, "mi-cat-name"], [1, "mi-chip", 3, "click"], [1, "mi-chip-sub"], [1, "mi-session-top"], [1, "mi-back-btn", "mi-back-sm", 3, "click"], [1, "bi", "bi-x-lg"], [1, "mi-q-counter"], [1, "mi-time-label"], [1, "mi-prog-track"], [1, "mi-prog-fill"], [1, "mi-timer-ring"], ["viewBox", "0 0 72 72", 1, "mi-ring-svg"], ["cx", "36", "cy", "36", "r", "30", 1, "mi-ring-bg"], ["cx", "36", "cy", "36", "r", "30", 1, "mi-ring-arc"], [1, "mi-ring-num"], [1, "mi-q-card"], [1, "mi-q-meta"], [1, "mi-q-cat"], [1, "mi-q-text"], [1, "mi-q-code"], [1, "mi-reveal-btn"], [1, "mi-reveal-btn", 3, "click"], [1, "bi", "bi-eye"], [1, "mi-answer-card"], [1, "mi-answer-label"], [1, "mi-answer-text"], [1, "mi-verdict-row"], [1, "mi-verdict-btn", "mi-verdict-miss", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "mi-verdict-btn", "mi-verdict-got", 3, "click"], [1, "bi", "bi-check-circle-fill"], [1, "mi-grade-wrap"], [1, "mi-grade-circle"], [1, "mi-grade-letter"], [1, "mi-result-title"], [1, "mi-result-sub"], [1, "mi-stats-row"], [1, "mi-stat"], [1, "mi-stat-num", "mi-stat-green"], [1, "mi-stat-lbl"], [1, "mi-stat-num", "mi-stat-red"], [1, "mi-stat-num", "mi-stat-gold"], [1, "mi-score-section"], [1, "mi-score-row"], [1, "mi-score-pct-label"], [1, "mi-score-pct-val"], [1, "mi-score-track"], [1, "mi-score-fill"], [1, "mi-breakdown"], [1, "mi-result-actions"], [1, "mi-action-btn", "mi-action-share", 3, "click"], [1, "bi", "bi-share-fill"], [1, "mi-action-btn", "mi-action-retry", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "mi-dashboard-btn", 3, "click"], [1, "mi-bd-row"], [1, "mi-bd-cat"], [1, "mi-bd-track"], [1, "mi-bd-fill"], [1, "mi-bd-frac"]], template: function MockInterviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, MockInterviewComponent_Conditional_2_Template, 32, 0, "div", 2);
      \u0275\u0275conditionalCreate(3, MockInterviewComponent_Conditional_3_Template, 25, 18, "div", 3);
      \u0275\u0275conditionalCreate(4, MockInterviewComponent_Conditional_4_Template, 43, 15, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.phase() === "setup" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phase() === "session" ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phase() === "result" ? 4 : -1);
    }
  }, dependencies: [CommonModule, IonContent], styles: ["\n\n.mi-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.mi-wrap[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.mi-page[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 56px 20px 40px;\n  max-width: 540px;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.mi-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.mi-back-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.mi-page-title[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.mi-page-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.mi-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mi-section-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n}\n.mi-section-hint[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #475569;\n  margin: -4px 0 0;\n}\n.mi-cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.mi-cat-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n  text-align: left;\n}\n.mi-cat-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.mi-cat-sel[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.14) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.mi-cat-emoji[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.mi-cat-name[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.mi-chip-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.mi-chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.mi-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.1);\n  color: #a5b4fc;\n}\n.mi-chip-sel[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.18) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.mi-chip-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 400;\n  opacity: 0.7;\n}\n.mi-start-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.mi-start-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.45);\n}\n.mi-session-page[_ngcontent-%COMP%] {\n  gap: 16px;\n  padding-top: 48px;\n}\n.mi-session-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mi-back-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 0.85rem;\n}\n.mi-q-counter[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #64748b;\n  text-align: center;\n}\n.mi-time-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 32px;\n  text-align: right;\n}\n.mi-time-warn[_ngcontent-%COMP%] {\n  color: #f87171 !important;\n}\n.mi-prog-track[_ngcontent-%COMP%] {\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.mi-prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.4s ease;\n}\n.mi-timer-ring[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto;\n}\n.mi-ring-svg[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  transform: rotate(-90deg);\n}\n.mi-ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.07);\n  stroke-width: 5;\n}\n.mi-ring-arc[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #6366f1;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-dasharray: 188.5;\n  transition: stroke-dashoffset 1s linear, stroke 0.3s;\n}\n.mi-ring-arc.mi-ring-warn[_ngcontent-%COMP%] {\n  stroke: #f87171;\n}\n.mi-ring-num[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.mi-ring-num.mi-ring-warn[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.mi-q-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mi-q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.mi-q-cat[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.mi-q-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.6;\n  margin: 0;\n}\n.mi-q-code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 0.72rem;\n  color: #93c5fd;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.mi-reveal-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px dashed rgba(255, 255, 255, 0.15);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-reveal-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n}\n.mi-answer-card[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.07);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mi-answer-label[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #818cf8;\n}\n.mi-answer-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin: 0;\n}\n.mi-verdict-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.mi-verdict-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-verdict-miss[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.mi-verdict-miss[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.mi-verdict-got[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.mi-verdict-got[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.mi-result-page[_ngcontent-%COMP%] {\n  padding-top: 56px;\n  align-items: stretch;\n}\n.mi-grade-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.mi-grade-circle[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  border: 4px solid #10b981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.2);\n}\n.mi-grade-letter[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.mi-result-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0;\n}\n.mi-result-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.mi-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.mi-stat[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 14px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.mi-stat-num[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n}\n.mi-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mi-stat-green[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.mi-stat-red[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.mi-stat-gold[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.mi-score-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mi-score-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.mi-score-pct-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.mi-score-pct-val[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n}\n.mi-score-track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.mi-score-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mi-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mi-bd-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.mi-bd-cat[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #94a3b8;\n  min-width: 100px;\n}\n.mi-bd-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.mi-bd-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.mi-bd-frac[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #64748b;\n  min-width: 28px;\n  text-align: right;\n}\n.mi-result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.mi-action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-action-share[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.mi-action-share[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.mi-action-retry[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);\n}\n.mi-action-retry[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.mi-dashboard-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #64748b;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.mi-dashboard-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n}\n/*# sourceMappingURL=mock-interview.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockInterviewComponent, [{
    type: Component,
    args: [{ selector: "app-mock-interview", changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "ion-page" }, standalone: true, imports: [CommonModule, IonContent], template: `
    <ion-content class="mi-content">
      <div class="mi-wrap">

        <!-- \u2500\u2500 SETUP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (phase() === 'setup') {
          <div class="mi-page">

            <div class="mi-header">
              <button class="mi-back-btn" (click)="back()">
                <i class="bi bi-arrow-left"></i>
              </button>
              <div>
                <h1 class="mi-page-title">Mock Interview</h1>
                <p class="mi-page-sub">Simulate a real Java interview session</p>
              </div>
            </div>

            <!-- Categories -->
            <div class="mi-section">
              <span class="mi-section-label">Topics</span>
              <p class="mi-section-hint">Select one or more (leave all off = random mix)</p>
              <div class="mi-cat-grid">
                @for (cat of allCategories; track cat.name) {
                  <button class="mi-cat-btn"
                    [class.mi-cat-sel]="selectedCategories().includes(cat.name)"
                    (click)="toggleCategory(cat.name)">
                    <span class="mi-cat-emoji">{{ cat.emoji }}</span>
                    <span class="mi-cat-name">{{ cat.name }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Question count -->
            <div class="mi-section">
              <span class="mi-section-label">Number of Questions</span>
              <div class="mi-chip-row">
                @for (n of questionCounts; track n) {
                  <button class="mi-chip" [class.mi-chip-sel]="questionCount() === n"
                    (click)="questionCount.set(n)">{{ n }}</button>
                }
              </div>
            </div>

            <!-- Time per question -->
            <div class="mi-section">
              <span class="mi-section-label">Time Per Question</span>
              <div class="mi-chip-row">
                @for (t of timeOptions; track t.seconds) {
                  <button class="mi-chip" [class.mi-chip-sel]="timePerQuestion() === t.seconds"
                    (click)="timePerQuestion.set(t.seconds)">
                    {{ t.label }}<span class="mi-chip-sub"> \xB7 {{ t.desc }}</span>
                  </button>
                }
              </div>
            </div>

            <button class="mi-start-btn" (click)="startSession()">
              <i class="bi bi-play-circle-fill"></i>
              Start Interview
            </button>

          </div>
        }

        <!-- \u2500\u2500 SESSION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (phase() === 'session') {
          <div class="mi-page mi-session-page">

            <!-- Top bar -->
            <div class="mi-session-top">
              <button class="mi-back-btn mi-back-sm" (click)="confirmQuit()">
                <i class="bi bi-x-lg"></i>
              </button>
              <span class="mi-q-counter">{{ currentIdx() + 1 }} / {{ session().length }}</span>
              <span class="mi-time-label"
                [class.mi-time-warn]="timeLeft() <= 10">
                {{ timeLeft() }}s
              </span>
            </div>

            <!-- Progress bar -->
            <div class="mi-prog-track">
              <div class="mi-prog-fill"
                [style.width.%]="((currentIdx() + 1) / session().length) * 100">
              </div>
            </div>

            <!-- Timer ring -->
            <div class="mi-timer-ring">
              <svg viewBox="0 0 72 72" class="mi-ring-svg">
                <circle cx="36" cy="36" r="30" class="mi-ring-bg"/>
                <circle cx="36" cy="36" r="30" class="mi-ring-arc"
                  [style.stroke-dashoffset]="timerDash()"
                  [class.mi-ring-warn]="timeLeft() <= 10"/>
              </svg>
              <span class="mi-ring-num" [class.mi-ring-warn]="timeLeft() <= 10">
                {{ timeLeft() }}
              </span>
            </div>

            <!-- Question card -->
            <div class="mi-q-card">
              <div class="mi-q-meta">
                <span class="mi-q-cat">{{ currentQuestion()!.category }}</span>
              </div>
              <p class="mi-q-text">{{ currentQuestion()!.question }}</p>

              @if (currentQuestion()!.code) {
                <pre class="mi-q-code"><code>{{ currentQuestion()!.code }}</code></pre>
              }
            </div>

            <!-- Answer (hidden until revealed) -->
            @if (!answerVisible()) {
              <button class="mi-reveal-btn" (click)="showAnswer()">
                <i class="bi bi-eye"></i> Show Answer
              </button>
            } @else {
              <div class="mi-answer-card">
                <span class="mi-answer-label">ANSWER</span>
                <p class="mi-answer-text">{{ currentQuestion()!.answer }}</p>
              </div>

              <div class="mi-verdict-row">
                <button class="mi-verdict-btn mi-verdict-miss" (click)="submitAnswer(false)">
                  <i class="bi bi-x-circle-fill"></i> Missed
                </button>
                <button class="mi-verdict-btn mi-verdict-got" (click)="submitAnswer(true)">
                  <i class="bi bi-check-circle-fill"></i> Got it
                </button>
              </div>
            }

          </div>
        }

        <!-- \u2500\u2500 RESULT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        @if (phase() === 'result') {
          <div class="mi-page mi-result-page">

            <!-- Grade badge -->
            <div class="mi-grade-wrap">
              <div class="mi-grade-circle" [style.border-color]="resultGrade().color">
                <span class="mi-grade-letter" [style.color]="resultGrade().color">
                  {{ resultGrade().letter }}
                </span>
              </div>
              <h2 class="mi-result-title">Interview Complete</h2>
              <p class="mi-result-sub">{{ resultMessage() }}</p>
            </div>

            <!-- Score stats -->
            <div class="mi-stats-row">
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-green">{{ correctCount() }}</span>
                <span class="mi-stat-lbl">Correct</span>
              </div>
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-red">{{ wrongCount() }}</span>
                <span class="mi-stat-lbl">Missed</span>
              </div>
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-gold">{{ earnedXp() }}</span>
                <span class="mi-stat-lbl">XP Earned</span>
              </div>
            </div>

            <!-- Score bar -->
            <div class="mi-score-section">
              <div class="mi-score-row">
                <span class="mi-score-pct-label">Score</span>
                <span class="mi-score-pct-val">{{ scorePct() }}%</span>
              </div>
              <div class="mi-score-track">
                <div class="mi-score-fill"
                  [style.width.%]="scorePct()"
                  [style.background]="resultGrade().color">
                </div>
              </div>
            </div>

            <!-- Category breakdown -->
            @if (categoryBreakdown().length > 1) {
              <div class="mi-breakdown">
                <span class="mi-section-label">Category Breakdown</span>
                @for (row of categoryBreakdown(); track row.category) {
                  <div class="mi-bd-row">
                    <span class="mi-bd-cat">{{ row.category }}</span>
                    <div class="mi-bd-track">
                      <div class="mi-bd-fill"
                        [style.width.%]="row.pct"
                        [style.background]="row.pct >= 70 ? '#10b981' : row.pct >= 50 ? '#f59e0b' : '#f87171'">
                      </div>
                    </div>
                    <span class="mi-bd-frac">{{ row.correct }}/{{ row.total }}</span>
                  </div>
                }
              </div>
            }

            <!-- Actions -->
            <div class="mi-result-actions">
              <button class="mi-action-btn mi-action-share" (click)="shareResult()">
                <i class="bi bi-share-fill"></i> Share
              </button>
              <button class="mi-action-btn mi-action-retry" (click)="retry()">
                <i class="bi bi-arrow-clockwise"></i> Try Again
              </button>
            </div>
            <button class="mi-dashboard-btn" (click)="back()">Back to Dashboard</button>

          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;c19bac8f6014edf9395b0c37d0acca75fc4c92e2744e19a5fdb5d4175d1cc17e;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/mock-interview/mock-interview.component.ts */\n.mi-content {\n  --background: #0b1120;\n}\n.mi-wrap {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.mi-page {\n  flex: 1;\n  padding: 56px 20px 40px;\n  max-width: 540px;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.mi-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.mi-back-btn {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.mi-page-title {\n  font-size: 1.7rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.mi-page-sub {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.mi-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mi-section-label {\n  font-size: 0.6rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n}\n.mi-section-hint {\n  font-size: 0.72rem;\n  color: #475569;\n  margin: -4px 0 0;\n}\n.mi-cat-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.mi-cat-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n  text-align: left;\n}\n.mi-cat-btn:hover {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.mi-cat-sel {\n  background: rgba(99, 102, 241, 0.14) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.mi-cat-emoji {\n  font-size: 1rem;\n}\n.mi-cat-name {\n  font-size: 0.72rem;\n}\n.mi-chip-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.mi-chip {\n  padding: 8px 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.mi-chip:hover {\n  background: rgba(99, 102, 241, 0.1);\n  color: #a5b4fc;\n}\n.mi-chip-sel {\n  background: rgba(99, 102, 241, 0.18) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.mi-chip-sub {\n  font-size: 0.68rem;\n  font-weight: 400;\n  opacity: 0.7;\n}\n.mi-start-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 16px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border: none;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  margin-top: 8px;\n}\n.mi-start-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 28px rgba(99, 102, 241, 0.45);\n}\n.mi-session-page {\n  gap: 16px;\n  padding-top: 48px;\n}\n.mi-session-top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.mi-back-sm {\n  width: 32px;\n  height: 32px;\n  font-size: 0.85rem;\n}\n.mi-q-counter {\n  flex: 1;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #64748b;\n  text-align: center;\n}\n.mi-time-label {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #94a3b8;\n  min-width: 32px;\n  text-align: right;\n}\n.mi-time-warn {\n  color: #f87171 !important;\n}\n.mi-prog-track {\n  height: 3px;\n  border-radius: 2px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.mi-prog-fill {\n  height: 100%;\n  border-radius: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #8b5cf6);\n  transition: width 0.4s ease;\n}\n.mi-timer-ring {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto;\n}\n.mi-ring-svg {\n  width: 72px;\n  height: 72px;\n  transform: rotate(-90deg);\n}\n.mi-ring-bg {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.07);\n  stroke-width: 5;\n}\n.mi-ring-arc {\n  fill: none;\n  stroke: #6366f1;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-dasharray: 188.5;\n  transition: stroke-dashoffset 1s linear, stroke 0.3s;\n}\n.mi-ring-arc.mi-ring-warn {\n  stroke: #f87171;\n}\n.mi-ring-num {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.mi-ring-num.mi-ring-warn {\n  color: #f87171;\n}\n.mi-q-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mi-q-meta {\n  display: flex;\n  gap: 8px;\n}\n.mi-q-cat {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.mi-q-text {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.6;\n  margin: 0;\n}\n.mi-q-code {\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n  padding: 12px;\n  font-size: 0.72rem;\n  color: #93c5fd;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.mi-reveal-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 14px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px dashed rgba(255, 255, 255, 0.15);\n  color: #94a3b8;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-reveal-btn:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n}\n.mi-answer-card {\n  background: rgba(99, 102, 241, 0.07);\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  animation: fadeIn 0.25s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mi-answer-label {\n  font-size: 0.58rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #818cf8;\n}\n.mi-answer-text {\n  font-size: 0.85rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  margin: 0;\n}\n.mi-verdict-row {\n  display: flex;\n  gap: 12px;\n}\n.mi-verdict-btn {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-verdict-miss {\n  background: rgba(239, 68, 68, 0.12);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.mi-verdict-miss:hover {\n  background: rgba(239, 68, 68, 0.2);\n}\n.mi-verdict-got {\n  background: rgba(16, 185, 129, 0.12);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.mi-verdict-got:hover {\n  background: rgba(16, 185, 129, 0.2);\n}\n.mi-result-page {\n  padding-top: 56px;\n  align-items: stretch;\n}\n.mi-grade-wrap {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.mi-grade-circle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  border: 4px solid #10b981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.2);\n}\n.mi-grade-letter {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.mi-result-title {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0;\n}\n.mi-result-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n}\n.mi-stats-row {\n  display: flex;\n  gap: 12px;\n}\n.mi-stat {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 14px 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.mi-stat-num {\n  font-size: 1.6rem;\n  font-weight: 900;\n}\n.mi-stat-lbl {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.mi-stat-green {\n  color: #10b981;\n}\n.mi-stat-red {\n  color: #f87171;\n}\n.mi-stat-gold {\n  color: #f59e0b;\n}\n.mi-score-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mi-score-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.mi-score-pct-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.mi-score-pct-val {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n}\n.mi-score-track {\n  height: 8px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.mi-score-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mi-breakdown {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.mi-bd-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.mi-bd-cat {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #94a3b8;\n  min-width: 100px;\n}\n.mi-bd-track {\n  flex: 1;\n  height: 6px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.mi-bd-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n.mi-bd-frac {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #64748b;\n  min-width: 28px;\n  text-align: right;\n}\n.mi-result-actions {\n  display: flex;\n  gap: 12px;\n}\n.mi-action-btn {\n  flex: 1;\n  padding: 14px;\n  border-radius: 14px;\n  border: none;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mi-action-share {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n  border: 1px solid rgba(99, 102, 241, 0.25);\n}\n.mi-action-share:hover {\n  background: rgba(99, 102, 241, 0.2);\n}\n.mi-action-retry {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);\n}\n.mi-action-retry:hover {\n  transform: translateY(-1px);\n}\n.mi-dashboard-btn {\n  width: 100%;\n  padding: 12px;\n  border-radius: 14px;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #64748b;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.mi-dashboard-btn:hover {\n  background: rgba(255, 255, 255, 0.04);\n  color: #94a3b8;\n}\n/*# sourceMappingURL=mock-interview.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MockInterviewComponent, { className: "MockInterviewComponent", filePath: "src/app/features/mock-interview/mock-interview.component.ts", lineNumber: 633 });
})();
export {
  MockInterviewComponent
};
//# sourceMappingURL=chunk-ZSBUZYBP.js.map
