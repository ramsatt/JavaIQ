import {
  StudyPlanService
} from "./chunk-SWDQPWSJ.js";
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
  SearchModalComponent
} from "./chunk-PTAGLL6J.js";
import "./chunk-XKIWGTQY.js";
import "./chunk-3EDGEEL3.js";
import {
  AchievementService
} from "./chunk-44FD6GSA.js";
import {
  GamificationService
} from "./chunk-7TOJMDEE.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import {
  AlertService
} from "./chunk-ZI6SYS5B.js";
import "./chunk-KHYVC3NX.js";
import {
  AuthService
} from "./chunk-YU6DDDO5.js";
import {
  IonContent,
  IonMenuButton
} from "./chunk-PWZS7QID.js";
import {
  CommonModule,
  DecimalPipe,
  Router,
  SlicePipe
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// src/app/shared/streak-card.component.ts
function StreakCardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r0.daysToNextMilestone(), " day", ctx_r0.daysToNextMilestone() !== 1 ? "s" : "", " to go ");
  }
}
function StreakCardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Milestone reached! \u{1F389} ");
  }
}
var StreakCardComponent = class _StreakCardComponent {
  game = inject(GamificationService);
  MILESTONES = [
    { days: 7, label: "7-Day Warrior", reward: "100 XP bonus ahead" },
    { days: 14, label: "14-Day Devotee", reward: "250 XP bonus ahead" },
    { days: 30, label: "Monthly Master", reward: "Rare badge unlock" },
    { days: 60, label: "60-Day Legend", reward: "Elite badge unlock" },
    { days: 100, label: "100-Day Champion", reward: "Hall of Fame" }
  ];
  nextMilestone = computed(() => {
    const s = this.game.streak();
    return this.MILESTONES.find((m) => m.days > s) ?? this.MILESTONES[this.MILESTONES.length - 1];
  }, ...ngDevMode ? [{ debugName: "nextMilestone" }] : []);
  prevMilestoneDay = computed(() => {
    const s = this.game.streak();
    const idx = this.MILESTONES.findIndex((m) => m.days > s);
    return idx > 0 ? this.MILESTONES[idx - 1].days : 0;
  }, ...ngDevMode ? [{ debugName: "prevMilestoneDay" }] : []);
  milestoneProgress = computed(() => {
    const s = this.game.streak();
    const lo = this.prevMilestoneDay();
    const hi = this.nextMilestone().days;
    if (hi <= lo)
      return 100;
    return Math.min(100, Math.round((s - lo) / (hi - lo) * 100));
  }, ...ngDevMode ? [{ debugName: "milestoneProgress" }] : []);
  daysToNextMilestone = computed(() => {
    return Math.max(0, this.nextMilestone().days - this.game.streak());
  }, ...ngDevMode ? [{ debugName: "daysToNextMilestone" }] : []);
  static \u0275fac = function StreakCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StreakCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StreakCardComponent, selectors: [["app-streak-card"]], decls: 29, vars: 9, consts: [[1, "streak-card"], [1, "streak-top"], [1, "streak-flame-block"], [1, "flame-emoji"], [1, "streak-text-block"], [1, "streak-count"], [1, "streak-unit"], [1, "streak-right"], [1, "level-badge"], [1, "level-icon"], [1, "level-label"], [1, "xp-label"], [1, "milestone-section"], [1, "milestone-meta"], [1, "milestone-name"], [1, "milestone-days-left"], [1, "milestone-track"], [1, "milestone-fill"], [1, "milestone-reward"]], template: function StreakCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F525}");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "\u26A1");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(16, "span", 11);
      \u0275\u0275text(17);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(18, "div", 12)(19, "div", 13)(20, "span", 14);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "span", 15);
      \u0275\u0275conditionalCreate(23, StreakCardComponent_Conditional_23_Template, 1, 2)(24, StreakCardComponent_Conditional_24_Template, 1, 0);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "div", 16);
      \u0275\u0275domElement(26, "div", 17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "span", 18);
      \u0275\u0275text(28);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.game.streak());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Day", ctx.game.streak() !== 1 ? "s" : "");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Level ", ctx.game.level());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.game.xp(), " XP");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.nextMilestone().label);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.daysToNextMilestone() > 0 ? 23 : 24);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.milestoneProgress(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.nextMilestone().reward);
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.streak-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      #0c1e14 0%,\n      #1B4332 55%,\n      #2D6A4F 100%);\n  border-radius: 18px;\n  padding: 18px 16px;\n  color: #fff;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  box-shadow:\n    0 6px 28px rgba(27, 67, 50, 0.50),\n    0 2px 8px rgba(0, 0, 0, 0.20),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.streak-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -30px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(116, 198, 157, 0.14) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.streak-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 1;\n}\n.streak-flame-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flame-emoji[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  line-height: 1;\n  filter: drop-shadow(0 2px 12px rgba(249, 115, 22, 0.65));\n}\n.streak-text-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.streak-count[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #c89432 20%,\n      #f5c84a 55%,\n      #c89432 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  letter-spacing: -0.03em;\n}\n.streak-unit[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.10em;\n}\n.streak-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 5px;\n}\n.level-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(212, 168, 83, 0.18);\n  border: 1px solid rgba(212, 168, 83, 0.38);\n  border-radius: 20px;\n  padding: 4px 10px;\n  box-shadow: 0 0 10px rgba(212, 168, 83, 0.12);\n}\n.level-icon[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.level-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #d4a853;\n}\n.xp-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.45);\n}\n.milestone-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  position: relative;\n  z-index: 1;\n  margin-top: auto;\n}\n.milestone-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.milestone-name[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.90);\n}\n.milestone-days-left[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.45);\n}\n.milestone-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.milestone-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #c89432 0%,\n      #f5c84a 35%,\n      #ffe590 52%,\n      #f5c84a 68%,\n      #c89432 100%);\n  background-size: 300% 100%;\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_gold-shimmer 4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_gold-shimmer {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n.milestone-reward[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 600;\n  color: rgba(212, 168, 83, 0.70);\n  font-style: italic;\n}\n/*# sourceMappingURL=streak-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StreakCardComponent, [{
    type: Component,
    args: [{ selector: "app-streak-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="streak-card">
      <!-- Top row: flame + level -->
      <div class="streak-top">
        <div class="streak-flame-block">
          <span class="flame-emoji">\u{1F525}</span>
          <div class="streak-text-block">
            <span class="streak-count">{{ game.streak() }}</span>
            <span class="streak-unit">Day{{ game.streak() !== 1 ? 's' : '' }}</span>
          </div>
        </div>
        <div class="streak-right">
          <div class="level-badge">
            <span class="level-icon">\u26A1</span>
            <span class="level-label">Level {{ game.level() }}</span>
          </div>
          <span class="xp-label">{{ game.xp() }} XP</span>
        </div>
      </div>

      <!-- Milestone progress -->
      <div class="milestone-section">
        <div class="milestone-meta">
          <span class="milestone-name">{{ nextMilestone().label }}</span>
          <span class="milestone-days-left">
            @if (daysToNextMilestone() > 0) {
              {{ daysToNextMilestone() }} day{{ daysToNextMilestone() !== 1 ? 's' : '' }} to go
            } @else {
              Milestone reached! \u{1F389}
            }
          </span>
        </div>
        <div class="milestone-track">
          <div class="milestone-fill" [style.width.%]="milestoneProgress()"></div>
        </div>
        <span class="milestone-reward">{{ nextMilestone().reward }}</span>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;20077cb773e3d8268acc65e780d57c32392a9319cbef4b92328c71572dac4ac1;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/streak-card.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.streak-card {\n  background:\n    linear-gradient(\n      160deg,\n      #0c1e14 0%,\n      #1B4332 55%,\n      #2D6A4F 100%);\n  border-radius: 18px;\n  padding: 18px 16px;\n  color: #fff;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  box-shadow:\n    0 6px 28px rgba(27, 67, 50, 0.50),\n    0 2px 8px rgba(0, 0, 0, 0.20),\n    inset 0 1px 0 rgba(255, 255, 255, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.streak-card::before {\n  content: "";\n  position: absolute;\n  top: -40px;\n  right: -30px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(116, 198, 157, 0.14) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.streak-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 1;\n}\n.streak-flame-block {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.flame-emoji {\n  font-size: 2.2rem;\n  line-height: 1;\n  filter: drop-shadow(0 2px 12px rgba(249, 115, 22, 0.65));\n}\n.streak-text-block {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.streak-count {\n  font-size: 1.9rem;\n  font-weight: 900;\n  background:\n    linear-gradient(\n      135deg,\n      #c89432 20%,\n      #f5c84a 55%,\n      #c89432 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  letter-spacing: -0.03em;\n}\n.streak-unit {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.55);\n  text-transform: uppercase;\n  letter-spacing: 0.10em;\n}\n.streak-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 5px;\n}\n.level-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(212, 168, 83, 0.18);\n  border: 1px solid rgba(212, 168, 83, 0.38);\n  border-radius: 20px;\n  padding: 4px 10px;\n  box-shadow: 0 0 10px rgba(212, 168, 83, 0.12);\n}\n.level-icon {\n  font-size: 0.78rem;\n}\n.level-label {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #d4a853;\n}\n.xp-label {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.45);\n}\n.milestone-section {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  position: relative;\n  z-index: 1;\n  margin-top: auto;\n}\n.milestone-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.milestone-name {\n  font-size: 0.76rem;\n  font-weight: 800;\n  color: rgba(255, 255, 255, 0.90);\n}\n.milestone-days-left {\n  font-size: 0.66rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.45);\n}\n.milestone-track {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.milestone-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #c89432 0%,\n      #f5c84a 35%,\n      #ffe590 52%,\n      #f5c84a 68%,\n      #c89432 100%);\n  background-size: 300% 100%;\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: gold-shimmer 4s linear infinite;\n}\n@keyframes gold-shimmer {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n.milestone-reward {\n  font-size: 0.64rem;\n  font-weight: 600;\n  color: rgba(212, 168, 83, 0.70);\n  font-style: italic;\n}\n/*# sourceMappingURL=streak-card.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StreakCardComponent, { className: "StreakCardComponent", filePath: "src/app/shared/streak-card.component.ts", lineNumber: 231 });
})();

// src/app/shared/qotd-card.component.ts
function QotdCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1, "Answered \u2713 +15 XP");
    \u0275\u0275domElementEnd();
  }
}
function QotdCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.daily.qotdQuestion().category);
  }
}
function QotdCardComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 10);
    \u0275\u0275domListener("click", function QotdCardComponent_Conditional_7_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.answer());
    });
    \u0275\u0275text(1, " \u{1F4A1} Reveal Answer & Earn 15 XP ");
    \u0275\u0275domElementEnd();
  }
}
function QotdCardComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 11);
    \u0275\u0275text(2, "Answer:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 2, q_r3.answer, 0, 260), "", q_r3.answer.length > 260 ? "\u2026" : "");
  }
}
function QotdCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(2, QotdCardComponent_Conditional_7_Conditional_2_Template, 2, 0, "button", 8)(3, QotdCardComponent_Conditional_7_Conditional_3_Template, 6, 6, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.daily.isQotdAnsweredToday() ? 2 : 3);
  }
}
function QotdCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 6);
    \u0275\u0275text(1, "Check back soon \u2014 questions loading\u2026");
    \u0275\u0275domElementEnd();
  }
}
var QotdCardComponent = class _QotdCardComponent {
  daily = inject(DailyEngagementService);
  game = inject(GamificationService);
  answered = signal(false, ...ngDevMode ? [{ debugName: "answered" }] : []);
  answer() {
    if (this.daily.isQotdAnsweredToday())
      return;
    this.daily.markQotdAnswered();
    this.game.addXp(15);
    this.answered.set(true);
  }
  static \u0275fac = function QotdCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QotdCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QotdCardComponent, selectors: [["app-qotd-card"]], decls: 9, vars: 3, consts: [[1, "qotd-card"], [1, "qotd-header"], [1, "qotd-badge-row"], [1, "qotd-badge"], [1, "qotd-done-chip"], [1, "qotd-category"], [1, "qotd-empty"], [1, "qotd-question"], [1, "btn-answer"], [1, "qotd-answer-reveal"], [1, "btn-answer", 3, "click"], [1, "answer-label"], [1, "answer-text"]], template: function QotdCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F4C5} Question of the Day");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, QotdCardComponent_Conditional_5_Template, 2, 0, "span", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, QotdCardComponent_Conditional_6_Template, 2, 1, "span", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(7, QotdCardComponent_Conditional_7_Template, 4, 2)(8, QotdCardComponent_Conditional_8_Template, 2, 0, "p", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.daily.isQotdAnsweredToday() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.daily.qotdQuestion() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_2_0 = ctx.daily.qotdQuestion()) ? 7 : 8, tmp_2_0);
    }
  }, dependencies: [SlicePipe], styles: ['\n\n.qotd-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 18px 18px;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.22),\n      rgba(27, 67, 50, 0.06),\n      rgba(27, 67, 50, 0.22)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.qotd-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #52b788,\n      #95d5b2,\n      #52b788,\n      #1B4332);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_bar-slide 6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_bar-slide {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\nhtml.dark[_nghost-%COMP%]   .qotd-card[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-card[_ngcontent-%COMP%] {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.20),\n      rgba(82, 183, 136, 0.05),\n      rgba(82, 183, 136, 0.20)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\n.qotd-header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding-top: 4px;\n}\n.qotd-badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.qotd-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  color: #1B4332;\n  text-transform: uppercase;\n}\nhtml.dark[_nghost-%COMP%]   .qotd-badge[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-badge[_ngcontent-%COMP%] {\n  color: #52b788;\n}\n.qotd-done-chip[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  background: rgba(16, 185, 129, 0.11);\n  color: #059669;\n  border: 1px solid rgba(16, 185, 129, 0.28);\n  border-radius: 20px;\n  padding: 3px 10px;\n  box-shadow: 0 0 10px rgba(16, 185, 129, 0.12);\n}\nhtml.dark[_nghost-%COMP%]   .qotd-done-chip[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-done-chip[_ngcontent-%COMP%] {\n  color: #34d399;\n  background: rgba(16, 185, 129, 0.15);\n}\n.qotd-category[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.63rem;\n  font-weight: 800;\n  color: #fff;\n  background: #2D6A4F;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border-radius: 6px;\n  padding: 2px 8px;\n}\nhtml.dark[_nghost-%COMP%]   .qotd-category[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-category[_ngcontent-%COMP%] {\n  background: #1B4332;\n  color: #74c69d;\n}\n.qotd-question[_ngcontent-%COMP%] {\n  font-size: 0.94rem;\n  font-weight: 700;\n  color: #0c1810;\n  line-height: 1.55;\n  margin: 0 0 16px;\n}\nhtml.dark[_nghost-%COMP%]   .qotd-question[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-question[_ngcontent-%COMP%] {\n  color: #e4efe7;\n}\n.btn-answer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px;\n  border-radius: 13px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.86rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0c1810 0%,\n      #1B4332 50%,\n      #2D6A4F 100%);\n  color: #d4a853;\n  box-shadow: 0 4px 18px rgba(27, 67, 50, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.07);\n  transition: all 0.22s ease;\n  letter-spacing: 0.01em;\n}\n.btn-answer[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(27, 67, 50, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.10);\n}\n.btn-answer[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.qotd-answer-reveal[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.05);\n  border-radius: 12px;\n  padding: 13px 15px;\n  border-left: 3px solid #1B4332;\n}\nhtml.dark[_nghost-%COMP%]   .qotd-answer-reveal[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .qotd-answer-reveal[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.22);\n  border-left-color: #52b788;\n}\n.answer-label[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.10em;\n  margin-bottom: 7px;\n}\nhtml.dark[_nghost-%COMP%]   .answer-label[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .answer-label[_ngcontent-%COMP%] {\n  color: #52b788;\n}\n.answer-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.58;\n  color: #2d3d32;\n  margin: 0;\n}\nhtml.dark[_nghost-%COMP%]   .answer-text[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: #b8cfc0;\n}\n.qotd-empty[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n  text-align: center;\n  padding: 8px 0;\n}\n/*# sourceMappingURL=qotd-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QotdCardComponent, [{
    type: Component,
    args: [{ selector: "app-qotd-card", standalone: true, imports: [SlicePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="qotd-card">
      <div class="qotd-header">
        <div class="qotd-badge-row">
          <span class="qotd-badge">\u{1F4C5} Question of the Day</span>
          @if (daily.isQotdAnsweredToday()) {
            <span class="qotd-done-chip">Answered \u2713 +15 XP</span>
          }
        </div>
        @if (daily.qotdQuestion()) {
          <span class="qotd-category">{{ daily.qotdQuestion()!.category }}</span>
        }
      </div>

      @if (daily.qotdQuestion(); as q) {
        <p class="qotd-question">{{ q.question }}</p>

        @if (!daily.isQotdAnsweredToday()) {
          <button class="btn-answer" (click)="answer()">
            \u{1F4A1} Reveal Answer &amp; Earn 15 XP
          </button>
        } @else {
          <div class="qotd-answer-reveal">
            <div class="answer-label">Answer:</div>
            <p class="answer-text">{{ q.answer | slice:0:260 }}{{ q.answer.length > 260 ? '\u2026' : '' }}</p>
          </div>
        }
      } @else {
        <p class="qotd-empty">Check back soon \u2014 questions loading\u2026</p>
      }
    </div>
  `, styles: ['/* angular:styles/component:css;d8f5b593c7a10514c912bc7e5409cd37075da6d756b84b3595e45bf0eb629214;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/qotd-card.component.ts */\n.qotd-card {\n  background: #ffffff;\n  border-radius: 18px;\n  padding: 18px 18px;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.22),\n      rgba(27, 67, 50, 0.06),\n      rgba(27, 67, 50, 0.22)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.qotd-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #52b788,\n      #95d5b2,\n      #52b788,\n      #1B4332);\n  background-size: 200% 100%;\n  animation: bar-slide 6s linear infinite;\n}\n@keyframes bar-slide {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n:host-context(html.dark) .qotd-card {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.20),\n      rgba(82, 183, 136, 0.05),\n      rgba(82, 183, 136, 0.20)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\n.qotd-header {\n  margin-bottom: 12px;\n  padding-top: 4px;\n}\n.qotd-badge-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 5px;\n}\n.qotd-badge {\n  font-size: 0.72rem;\n  font-weight: 900;\n  letter-spacing: 0.06em;\n  color: #1B4332;\n  text-transform: uppercase;\n}\n:host-context(html.dark) .qotd-badge {\n  color: #52b788;\n}\n.qotd-done-chip {\n  font-size: 0.68rem;\n  font-weight: 800;\n  background: rgba(16, 185, 129, 0.11);\n  color: #059669;\n  border: 1px solid rgba(16, 185, 129, 0.28);\n  border-radius: 20px;\n  padding: 3px 10px;\n  box-shadow: 0 0 10px rgba(16, 185, 129, 0.12);\n}\n:host-context(html.dark) .qotd-done-chip {\n  color: #34d399;\n  background: rgba(16, 185, 129, 0.15);\n}\n.qotd-category {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.63rem;\n  font-weight: 800;\n  color: #fff;\n  background: #2D6A4F;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border-radius: 6px;\n  padding: 2px 8px;\n}\n:host-context(html.dark) .qotd-category {\n  background: #1B4332;\n  color: #74c69d;\n}\n.qotd-question {\n  font-size: 0.94rem;\n  font-weight: 700;\n  color: #0c1810;\n  line-height: 1.55;\n  margin: 0 0 16px;\n}\n:host-context(html.dark) .qotd-question {\n  color: #e4efe7;\n}\n.btn-answer {\n  width: 100%;\n  padding: 13px;\n  border-radius: 13px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.86rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #0c1810 0%,\n      #1B4332 50%,\n      #2D6A4F 100%);\n  color: #d4a853;\n  box-shadow: 0 4px 18px rgba(27, 67, 50, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.07);\n  transition: all 0.22s ease;\n  letter-spacing: 0.01em;\n}\n.btn-answer:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(27, 67, 50, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.10);\n}\n.btn-answer:active {\n  transform: translateY(0);\n}\n.qotd-answer-reveal {\n  background: rgba(27, 67, 50, 0.05);\n  border-radius: 12px;\n  padding: 13px 15px;\n  border-left: 3px solid #1B4332;\n}\n:host-context(html.dark) .qotd-answer-reveal {\n  background: rgba(27, 67, 50, 0.22);\n  border-left-color: #52b788;\n}\n.answer-label {\n  font-size: 0.66rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.10em;\n  margin-bottom: 7px;\n}\n:host-context(html.dark) .answer-label {\n  color: #52b788;\n}\n.answer-text {\n  font-size: 0.85rem;\n  line-height: 1.58;\n  color: #2d3d32;\n  margin: 0;\n}\n:host-context(html.dark) .answer-text {\n  color: #b8cfc0;\n}\n.qotd-empty {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n  text-align: center;\n  padding: 8px 0;\n}\n/*# sourceMappingURL=qotd-card.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QotdCardComponent, { className: "QotdCardComponent", filePath: "src/app/shared/qotd-card.component.ts", lineNumber: 213 });
})();

// src/app/data/course-topics.const.ts
var COURSE_TOPICS = [
  {
    slug: "core-java",
    title: "Core Java Masterclass",
    badge: "CORE JAVA",
    themeColor: "#f59e0b",
    topics: [
      { slug: "arrays", title: "Java Arrays", duration: "30 min" },
      { slug: "strings", title: "Strings & StringBuilder", duration: "35 min" },
      { slug: "oop-classes", title: "Classes & Objects", duration: "40 min" },
      { slug: "inheritance", title: "Inheritance", duration: "35 min" },
      { slug: "polymorphism", title: "Polymorphism", duration: "30 min" },
      { slug: "abstraction", title: "Abstraction & Interfaces", duration: "35 min" },
      { slug: "encapsulation", title: "Encapsulation", duration: "25 min" },
      { slug: "exceptions", title: "Exception Handling", duration: "30 min" },
      { slug: "collections-list", title: "Collections: List", duration: "35 min" },
      { slug: "collections-map", title: "Collections: Map & Set", duration: "35 min" },
      { slug: "generics", title: "Generics", duration: "30 min" },
      { slug: "streams", title: "Streams API", duration: "40 min" },
      { slug: "lambdas", title: "Lambda Expressions", duration: "30 min" },
      { slug: "records-sealed", title: "Records & Sealed Classes", duration: "25 min" },
      { slug: "io-files", title: "Java I/O & Files", duration: "30 min" }
    ]
  },
  {
    slug: "spring-framework",
    title: "Spring Framework Deep Dive",
    badge: "SPRING",
    themeColor: "#10b981",
    topics: [
      { slug: "spring-ioc", title: "IoC Container", duration: "35 min" },
      { slug: "spring-di", title: "Dependency Injection", duration: "40 min" },
      { slug: "spring-beans", title: "Bean Scopes & Lifecycle", duration: "30 min" },
      { slug: "spring-aop", title: "AOP (Aspect-Oriented)", duration: "40 min" },
      { slug: "spring-mvc", title: "Spring MVC", duration: "45 min" },
      { slug: "spring-rest", title: "RESTful APIs", duration: "40 min" },
      { slug: "spring-data", title: "Spring Data Access", duration: "35 min" },
      { slug: "spring-security", title: "Spring Security Basics", duration: "45 min" },
      { slug: "spring-config", title: "Configuration", duration: "30 min" },
      { slug: "spring-testing", title: "Testing Spring Apps", duration: "35 min" },
      { slug: "spring-events", title: "Events & Listeners", duration: "25 min" },
      { slug: "spring-caching", title: "Caching", duration: "25 min" }
    ]
  },
  {
    slug: "spring-boot",
    title: "Spring Boot Mastery",
    badge: "SPRING BOOT",
    themeColor: "#3b82f6",
    topics: [
      { slug: "sb-auto-config", title: "Auto-Configuration", duration: "30 min" },
      { slug: "sb-starters", title: "Starters & Dependencies", duration: "25 min" },
      { slug: "sb-properties", title: "Application Properties", duration: "30 min" },
      { slug: "sb-devtools", title: "DevTools & Hot Reload", duration: "20 min" },
      { slug: "sb-actuator", title: "Actuator & Monitoring", duration: "35 min" },
      { slug: "sb-logging", title: "Logging", duration: "25 min" },
      { slug: "sb-rest-api", title: "REST API Development", duration: "40 min" },
      { slug: "sb-validation", title: "Validation", duration: "30 min" },
      { slug: "sb-exception", title: "Exception Handling", duration: "30 min" },
      { slug: "sb-data-jpa", title: "Spring Data JPA", duration: "45 min" },
      { slug: "sb-security", title: "Security", duration: "45 min" },
      { slug: "sb-testing", title: "Testing", duration: "40 min" },
      { slug: "sb-profiles", title: "Profiles & Environments", duration: "25 min" },
      { slug: "sb-docker", title: "Docker & Containers", duration: "35 min" },
      { slug: "sb-caching", title: "Caching Strategies", duration: "30 min" },
      { slug: "sb-scheduling", title: "Scheduling & Async", duration: "30 min" },
      { slug: "sb-events", title: "Application Events", duration: "25 min" },
      { slug: "sb-deploy", title: "Deployment", duration: "35 min" }
    ]
  },
  {
    slug: "hibernate",
    title: "Hibernate & JPA Deep Dive",
    badge: "HIBERNATE & JPA",
    themeColor: "#f97316",
    topics: [
      { slug: "hib-orm", title: "ORM Fundamentals", duration: "30 min" },
      { slug: "hib-entities", title: "Entity Mapping", duration: "35 min" },
      { slug: "hib-relations", title: "Relationships", duration: "40 min" },
      { slug: "hib-jpql", title: "JPQL & Queries", duration: "35 min" },
      { slug: "hib-criteria", title: "Criteria API", duration: "30 min" },
      { slug: "hib-caching", title: "Caching", duration: "30 min" },
      { slug: "hib-transactions", title: "Transactions", duration: "30 min" },
      { slug: "hib-performance", title: "Performance", duration: "35 min" },
      { slug: "hib-inheritance", title: "Inheritance Mapping", duration: "25 min" },
      { slug: "hib-auditing", title: "Auditing & Envers", duration: "25 min" }
    ]
  },
  {
    slug: "microservices",
    title: "Microservices Architecture",
    badge: "MICROSERVICES",
    themeColor: "#8b5cf6",
    topics: [
      { slug: "ms-intro", title: "Microservices Intro", duration: "30 min" },
      { slug: "ms-discovery", title: "Service Discovery", duration: "35 min" },
      { slug: "ms-gateway", title: "API Gateway", duration: "35 min" },
      { slug: "ms-config", title: "Config Server", duration: "30 min" },
      { slug: "ms-circuit", title: "Circuit Breaker", duration: "35 min" },
      { slug: "ms-loadbalance", title: "Load Balancing", duration: "25 min" },
      { slug: "ms-communication", title: "Inter-Service Communication", duration: "35 min" },
      { slug: "ms-events", title: "Event-Driven Architecture", duration: "40 min" },
      { slug: "ms-saga", title: "Saga Pattern", duration: "35 min" },
      { slug: "ms-cqrs", title: "CQRS", duration: "30 min" },
      { slug: "ms-tracing", title: "Distributed Tracing", duration: "30 min" },
      { slug: "ms-docker", title: "Containerization", duration: "35 min" },
      { slug: "ms-k8s", title: "Kubernetes", duration: "40 min" },
      { slug: "ms-security", title: "Security", duration: "35 min" }
    ]
  },
  {
    slug: "multithreading",
    title: "Java Multithreading & Concurrency",
    badge: "MULTITHREADING",
    themeColor: "#eab308",
    topics: [
      { slug: "mt-threads", title: "Threads & Runnable", duration: "30 min" },
      { slug: "mt-sync", title: "Synchronization", duration: "35 min" },
      { slug: "mt-executors", title: "ExecutorService", duration: "30 min" },
      { slug: "mt-future", title: "CompletableFuture", duration: "35 min" },
      { slug: "mt-collections", title: "Concurrent Collections", duration: "30 min" },
      { slug: "mt-locks", title: "Locks & Conditions", duration: "30 min" },
      { slug: "mt-atomic", title: "Atomic Operations", duration: "25 min" },
      { slug: "mt-virtual", title: "Virtual Threads", duration: "25 min" }
    ]
  },
  {
    slug: "design-patterns",
    title: "Java Design Patterns",
    badge: "DESIGN PATTERNS",
    themeColor: "#ec4899",
    topics: [
      { slug: "dp-singleton", title: "Singleton", duration: "25 min" },
      { slug: "dp-factory", title: "Factory Method", duration: "30 min" },
      { slug: "dp-builder", title: "Builder", duration: "30 min" },
      { slug: "dp-observer", title: "Observer", duration: "30 min" },
      { slug: "dp-strategy", title: "Strategy", duration: "25 min" },
      { slug: "dp-decorator", title: "Decorator", duration: "30 min" },
      { slug: "dp-adapter", title: "Adapter", duration: "25 min" },
      { slug: "dp-proxy", title: "Proxy", duration: "30 min" },
      { slug: "dp-template", title: "Template Method", duration: "25 min" },
      { slug: "dp-command", title: "Command", duration: "30 min" },
      { slug: "dp-chain", title: "Chain of Responsibility", duration: "30 min" },
      { slug: "dp-state", title: "State", duration: "30 min" }
    ]
  }
];

// src/app/shared/continue-learning-card.component.ts
function ContinueLearningCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ContinueLearningCardComponent_Conditional_0_Template_div_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resume(t_r2));
    })("keydown.enter", function ContinueLearningCardComponent_Conditional_0_Template_div_keydown_enter_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resume(t_r2));
    })("keydown.space", function ContinueLearningCardComponent_Conditional_0_Template_div_keydown_space_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resume(t_r2));
    });
    \u0275\u0275domElementStart(1, "div", 2)(2, "span", 3);
    \u0275\u0275text(3, "\u25B6 Continue Learning");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 6)(9, "span", 7);
    \u0275\u0275text(10, "Next:");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 8);
    \u0275\u0275domElement(13, "div", 9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 10)(15, "span");
    \u0275\u0275text(16, "Resume \u2192");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx;
    \u0275\u0275styleProp("--course-color", t_r2.themeColor);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", t_r2.progressPct, "% Complete");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.courseTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2.topicTitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", t_r2.progressPct, "%")("background", t_r2.themeColor);
  }
}
var ContinueLearningCardComponent = class _ContinueLearningCardComponent {
  dataService = inject(DataService);
  router = inject(Router);
  resumeTarget = computed(() => {
    this.dataService.completedTopicIds();
    for (const course of COURSE_TOPICS) {
      const completed = this.dataService.getCourseCompletedCount(course.slug);
      const total = course.topics.length;
      if (completed >= total)
        continue;
      const nextTopic = course.topics.find((t) => !this.dataService.isTopicComplete(`${course.slug}::${t.slug}`));
      if (!nextTopic)
        continue;
      return {
        courseSlug: course.slug,
        courseTitle: course.title,
        topicSlug: nextTopic.slug,
        topicTitle: nextTopic.title,
        progressPct: this.dataService.getCourseProgress(course.slug, total),
        themeColor: course.themeColor
      };
    }
    return null;
  }, ...ngDevMode ? [{ debugName: "resumeTarget" }] : []);
  resume(t) {
    this.router.navigate(["/tutorials", t.courseSlug, t.topicSlug]);
  }
  static \u0275fac = function ContinueLearningCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContinueLearningCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContinueLearningCardComponent, selectors: [["app-continue-learning-card"]], decls: 1, vars: 1, consts: [["role", "button", "tabindex", "0", 1, "continue-card", 3, "--course-color"], ["role", "button", "tabindex", "0", 1, "continue-card", 3, "click", "keydown.enter", "keydown.space"], [1, "continue-header"], [1, "continue-badge"], [1, "continue-pct"], [1, "continue-course"], [1, "continue-next"], [1, "next-label"], [1, "continue-track"], [1, "continue-fill"], [1, "continue-cta"]], template: function ContinueLearningCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ContinueLearningCardComponent_Conditional_0_Template, 17, 9, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.resumeTarget()) ? 0 : -1, tmp_0_0);
    }
  }, styles: ['\n\n.continue-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 18px 18px;\n  cursor: pointer;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.22),\n      rgba(27, 67, 50, 0.06),\n      rgba(27, 67, 50, 0.22)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.continue-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--course-color, #1B4332);\n  opacity: 0.85;\n}\n.continue-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(27, 67, 50, 0.14), 0 3px 8px rgba(0, 0, 0, 0.06);\n}\nhtml.dark[_nghost-%COMP%]   .continue-card[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-card[_ngcontent-%COMP%] {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.20),\n      rgba(82, 183, 136, 0.05),\n      rgba(82, 183, 136, 0.20)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\nhtml.dark[_nghost-%COMP%]   .continue-card[_ngcontent-%COMP%]:hover, html.dark   [_nghost-%COMP%]   .continue-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.65), 0 4px 10px rgba(0, 0, 0, 0.4);\n}\n.continue-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 9px;\n  padding-top: 4px;\n}\n.continue-badge[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\nhtml.dark[_nghost-%COMP%]   .continue-badge[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-badge[_ngcontent-%COMP%] {\n  color: #52b788;\n}\n.continue-pct[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #6b7280;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 8px;\n  border-radius: 10px;\n}\nhtml.dark[_nghost-%COMP%]   .continue-pct[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-pct[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.07);\n}\n.continue-course[_ngcontent-%COMP%] {\n  font-size: 1.02rem;\n  font-weight: 900;\n  color: #0c1810;\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\nhtml.dark[_nghost-%COMP%]   .continue-course[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-course[_ngcontent-%COMP%] {\n  color: #e4efe7;\n}\n.continue-next[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #5a7a68;\n  margin: 0 0 13px;\n}\nhtml.dark[_nghost-%COMP%]   .continue-next[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-next[_ngcontent-%COMP%] {\n  color: #7aad8f;\n}\n.next-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #1f3028;\n  margin-right: 4px;\n}\nhtml.dark[_nghost-%COMP%]   .next-label[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .next-label[_ngcontent-%COMP%] {\n  color: #b8cfc0;\n}\n.continue-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\nhtml.dark[_nghost-%COMP%]   .continue-track[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.09);\n}\n.continue-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.continue-cta[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 800;\n  color: #1B4332;\n  text-align: right;\n  transition: letter-spacing 0.2s ease;\n}\n.continue-card[_ngcontent-%COMP%]:hover   .continue-cta[_ngcontent-%COMP%] {\n  letter-spacing: 0.02em;\n}\nhtml.dark[_nghost-%COMP%]   .continue-cta[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .continue-cta[_ngcontent-%COMP%] {\n  color: #52b788;\n}\n/*# sourceMappingURL=continue-learning-card.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContinueLearningCardComponent, [{
    type: Component,
    args: [{ selector: "app-continue-learning-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (resumeTarget(); as t) {
      <div class="continue-card" (click)="resume(t)" role="button" tabindex="0"
           [style.--course-color]="t.themeColor"
           (keydown.enter)="resume(t)" (keydown.space)="resume(t)">
        <div class="continue-header">
          <span class="continue-badge">\u25B6 Continue Learning</span>
          <span class="continue-pct">{{ t.progressPct }}% Complete</span>
        </div>

        <p class="continue-course">{{ t.courseTitle }}</p>

        <p class="continue-next">
          <span class="next-label">Next:</span>
          {{ t.topicTitle }}
        </p>

        <div class="continue-track">
          <div class="continue-fill"
               [style.width.%]="t.progressPct"
               [style.background]="t.themeColor">
          </div>
        </div>

        <div class="continue-cta">
          <span>Resume \u2192</span>
        </div>
      </div>
    }
  `, styles: ['/* angular:styles/component:css;007498ea13262f3a54853fe261af411fe12de4f6ed875e4a80ceb44030d054d4;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/continue-learning-card.component.ts */\n.continue-card {\n  border-radius: 18px;\n  padding: 18px 18px;\n  cursor: pointer;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.22),\n      rgba(27, 67, 50, 0.06),\n      rgba(27, 67, 50, 0.22)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n  position: relative;\n  overflow: hidden;\n}\n.continue-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--course-color, #1B4332);\n  opacity: 0.85;\n}\n.continue-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 32px rgba(27, 67, 50, 0.14), 0 3px 8px rgba(0, 0, 0, 0.06);\n}\n:host-context(html.dark) .continue-card {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.20),\n      rgba(82, 183, 136, 0.05),\n      rgba(82, 183, 136, 0.20)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\n:host-context(html.dark) .continue-card:hover {\n  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.65), 0 4px 10px rgba(0, 0, 0, 0.4);\n}\n.continue-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 9px;\n  padding-top: 4px;\n}\n.continue-badge {\n  font-size: 0.70rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n:host-context(html.dark) .continue-badge {\n  color: #52b788;\n}\n.continue-pct {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #6b7280;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 8px;\n  border-radius: 10px;\n}\n:host-context(html.dark) .continue-pct {\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.07);\n}\n.continue-course {\n  font-size: 1.02rem;\n  font-weight: 900;\n  color: #0c1810;\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\n:host-context(html.dark) .continue-course {\n  color: #e4efe7;\n}\n.continue-next {\n  font-size: 0.82rem;\n  color: #5a7a68;\n  margin: 0 0 13px;\n}\n:host-context(html.dark) .continue-next {\n  color: #7aad8f;\n}\n.next-label {\n  font-weight: 800;\n  color: #1f3028;\n  margin-right: 4px;\n}\n:host-context(html.dark) .next-label {\n  color: #b8cfc0;\n}\n.continue-track {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n:host-context(html.dark) .continue-track {\n  background: rgba(255, 255, 255, 0.09);\n}\n.continue-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.continue-cta {\n  font-size: 0.83rem;\n  font-weight: 800;\n  color: #1B4332;\n  text-align: right;\n  transition: letter-spacing 0.2s ease;\n}\n.continue-card:hover .continue-cta {\n  letter-spacing: 0.02em;\n}\n:host-context(html.dark) .continue-cta {\n  color: #52b788;\n}\n/*# sourceMappingURL=continue-learning-card.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContinueLearningCardComponent, { className: "ContinueLearningCardComponent", filePath: "src/app/shared/continue-learning-card.component.ts", lineNumber: 182 });
})();

// src/app/shared/daily-goal-card.component.ts
function DailyGoalCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275domElementEnd();
  }
}
function DailyGoalCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 8);
  }
}
function DailyGoalCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275domElementEnd();
  }
}
function DailyGoalCardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 8);
  }
}
function DailyGoalCardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.daily.topicsCompletedTodayCount(), "/2)");
  }
}
function DailyGoalCardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 7);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275domElementEnd();
  }
}
function DailyGoalCardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 8);
  }
}
function DailyGoalCardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 13);
    \u0275\u0275text(1, "\u{1F389} All done today! Keep it up!");
    \u0275\u0275domElementEnd();
  }
}
var DailyGoalCardComponent = class _DailyGoalCardComponent {
  daily = inject(DailyEngagementService);
  goalProgressPct = computed(() => Math.round(this.daily.dailyGoalProgress() / this.daily.dailyGoalTotal * 100), ...ngDevMode ? [{ debugName: "goalProgressPct" }] : []);
  static \u0275fac = function DailyGoalCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyGoalCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyGoalCardComponent, selectors: [["app-daily-goal-card"]], decls: 29, vars: 15, consts: [[1, "goal-card"], [1, "goal-header"], [1, "goal-title"], [1, "goal-count"], [1, "goal-tasks"], [1, "goal-task"], [1, "task-check"], [1, "check-icon"], [1, "uncheck-icon"], [1, "task-label"], [1, "task-sub"], [1, "goal-track"], [1, "goal-fill"], [1, "goal-complete"]], template: function DailyGoalCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "\u{1F3AF} Today's Goal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275conditionalCreate(9, DailyGoalCardComponent_Conditional_9_Template, 2, 0, "span", 7)(10, DailyGoalCardComponent_Conditional_10_Template, 1, 0, "span", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "span", 9);
      \u0275\u0275text(12, "Complete 1 challenge");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 5)(14, "div", 6);
      \u0275\u0275conditionalCreate(15, DailyGoalCardComponent_Conditional_15_Template, 2, 0, "span", 7)(16, DailyGoalCardComponent_Conditional_16_Template, 1, 0, "span", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "span", 9);
      \u0275\u0275text(18, " Read 2 tutorial topics ");
      \u0275\u0275conditionalCreate(19, DailyGoalCardComponent_Conditional_19_Template, 2, 1, "span", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 5)(21, "div", 6);
      \u0275\u0275conditionalCreate(22, DailyGoalCardComponent_Conditional_22_Template, 2, 0, "span", 7)(23, DailyGoalCardComponent_Conditional_23_Template, 1, 0, "span", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "span", 9);
      \u0275\u0275text(25, "Answer today's question");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(26, "div", 11);
      \u0275\u0275domElement(27, "div", 12);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(28, DailyGoalCardComponent_Conditional_28_Template, 2, 0, "div", 13);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2(" ", ctx.daily.dailyGoalProgress(), " / ", ctx.daily.dailyGoalTotal, " done ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("task-done", ctx.daily.challengeDoneToday());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.daily.challengeDoneToday() ? 9 : 10);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("task-done", ctx.daily.topicsCompletedTodayCount() >= 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.daily.topicsCompletedTodayCount() >= 2 ? 15 : 16);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.daily.topicsCompletedTodayCount() > 0 && ctx.daily.topicsCompletedTodayCount() < 2 ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("task-done", ctx.daily.isQotdAnsweredToday());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.daily.isQotdAnsweredToday() ? 22 : 23);
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("width", ctx.goalProgressPct(), "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.daily.dailyGoalProgress() === ctx.daily.dailyGoalTotal ? 28 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.goal-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  padding: 16px 15px;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.28),\n      rgba(27, 67, 50, 0.08),\n      rgba(27, 67, 50, 0.28)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n}\nhtml.dark[_nghost-%COMP%]   .goal-card[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-card[_ngcontent-%COMP%] {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.22),\n      rgba(82, 183, 136, 0.06),\n      rgba(82, 183, 136, 0.22)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\n.goal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 13px;\n}\n.goal-title[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\nhtml.dark[_nghost-%COMP%]   .goal-title[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-title[_ngcontent-%COMP%] {\n  color: #52b788;\n}\n.goal-count[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #6b7280;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 7px;\n  border-radius: 10px;\n}\nhtml.dark[_nghost-%COMP%]   .goal-count[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-count[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n}\n.goal-tasks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex: 1;\n}\n.goal-task[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  transition: opacity 0.25s;\n}\n.goal-task.task-done[_ngcontent-%COMP%]   .task-label[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.45;\n}\n.task-check[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 2px solid rgba(27, 67, 50, 0.20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  background: transparent;\n}\nhtml.dark[_nghost-%COMP%]   .task-check[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .task-check[_ngcontent-%COMP%] {\n  border-color: rgba(82, 183, 136, 0.25);\n}\n.task-done[_ngcontent-%COMP%]   .task-check[_ngcontent-%COMP%] {\n  background: #1B4332;\n  border-color: #1B4332;\n  transform: scale(1.08);\n  box-shadow: 0 0 8px rgba(27, 67, 50, 0.35);\n}\nhtml.dark[_nghost-%COMP%]   .task-done[_ngcontent-%COMP%]   .task-check[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .task-done[_ngcontent-%COMP%]   .task-check[_ngcontent-%COMP%] {\n  background: #52b788;\n  border-color: #52b788;\n  box-shadow: 0 0 8px rgba(82, 183, 136, 0.40);\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #fff;\n  font-weight: 900;\n  line-height: 1;\n  animation: _ngcontent-%COMP%_check-pop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes _ngcontent-%COMP%_check-pop {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.task-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1f2d23;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  line-height: 1.3;\n}\nhtml.dark[_nghost-%COMP%]   .task-label[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .task-label[_ngcontent-%COMP%] {\n  color: #c8dace;\n}\n.task-sub[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #9ca3af;\n  font-style: italic;\n}\n.goal-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\nhtml.dark[_nghost-%COMP%]   .goal-track[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.09);\n}\n.goal-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #52b788);\n  border-radius: 4px;\n  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\nhtml.dark[_nghost-%COMP%]   .goal-fill[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #40916C,\n      #74c69d);\n}\n.goal-complete[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #059669;\n  background: rgba(16, 185, 129, 0.09);\n  border-radius: 10px;\n  padding: 7px;\n  border: 1px solid rgba(16, 185, 129, 0.22);\n}\nhtml.dark[_nghost-%COMP%]   .goal-complete[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   .goal-complete[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.13);\n  color: #34d399;\n}\n/*# sourceMappingURL=daily-goal-card.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyGoalCardComponent, [{
    type: Component,
    args: [{ selector: "app-daily-goal-card", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="goal-card">
      <div class="goal-header">
        <span class="goal-title">\u{1F3AF} Today's Goal</span>
        <span class="goal-count">
          {{ daily.dailyGoalProgress() }} / {{ daily.dailyGoalTotal }} done
        </span>
      </div>

      <!-- Checklist -->
      <div class="goal-tasks">
        <div class="goal-task" [class.task-done]="daily.challengeDoneToday()">
          <div class="task-check">
            @if (daily.challengeDoneToday()) {
              <span class="check-icon">\u2713</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">Complete 1 challenge</span>
        </div>

        <div class="goal-task" [class.task-done]="daily.topicsCompletedTodayCount() >= 2">
          <div class="task-check">
            @if (daily.topicsCompletedTodayCount() >= 2) {
              <span class="check-icon">\u2713</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">
            Read 2 tutorial topics
            @if (daily.topicsCompletedTodayCount() > 0 && daily.topicsCompletedTodayCount() < 2) {
              <span class="task-sub">({{ daily.topicsCompletedTodayCount() }}/2)</span>
            }
          </span>
        </div>

        <div class="goal-task" [class.task-done]="daily.isQotdAnsweredToday()">
          <div class="task-check">
            @if (daily.isQotdAnsweredToday()) {
              <span class="check-icon">\u2713</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">Answer today's question</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="goal-track">
        <div class="goal-fill" [style.width.%]="goalProgressPct()"></div>
      </div>

      <!-- Completion banner -->
      @if (daily.dailyGoalProgress() === daily.dailyGoalTotal) {
        <div class="goal-complete">\u{1F389} All done today! Keep it up!</div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;5bfbedcf0bac029139f4faefeac0e55ce4e58fd80538d6da216b058101e55ea7;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/shared/daily-goal-card.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.goal-card {\n  border-radius: 18px;\n  padding: 16px 15px;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  background:\n    #ffffff padding-box,\n    linear-gradient(\n      160deg,\n      rgba(27, 67, 50, 0.28),\n      rgba(27, 67, 50, 0.08),\n      rgba(27, 67, 50, 0.28)) border-box;\n  border: 1.5px solid transparent;\n  box-shadow: 0 2px 10px rgba(27, 67, 50, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n:host-context(html.dark) .goal-card {\n  background:\n    #0d1a10 padding-box,\n    linear-gradient(\n      160deg,\n      rgba(82, 183, 136, 0.22),\n      rgba(82, 183, 136, 0.06),\n      rgba(82, 183, 136, 0.22)) border-box;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.55), 0 1px 4px rgba(0, 0, 0, 0.35);\n}\n.goal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 13px;\n}\n.goal-title {\n  font-size: 0.74rem;\n  font-weight: 900;\n  color: #1B4332;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n:host-context(html.dark) .goal-title {\n  color: #52b788;\n}\n.goal-count {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #6b7280;\n  background: rgba(0, 0, 0, 0.05);\n  padding: 2px 7px;\n  border-radius: 10px;\n}\n:host-context(html.dark) .goal-count {\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n}\n.goal-tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex: 1;\n}\n.goal-task {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  transition: opacity 0.25s;\n}\n.goal-task.task-done .task-label {\n  text-decoration: line-through;\n  opacity: 0.45;\n}\n.task-check {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  border: 2px solid rgba(27, 67, 50, 0.20);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  background: transparent;\n}\n:host-context(html.dark) .task-check {\n  border-color: rgba(82, 183, 136, 0.25);\n}\n.task-done .task-check {\n  background: #1B4332;\n  border-color: #1B4332;\n  transform: scale(1.08);\n  box-shadow: 0 0 8px rgba(27, 67, 50, 0.35);\n}\n:host-context(html.dark) .task-done .task-check {\n  background: #52b788;\n  border-color: #52b788;\n  box-shadow: 0 0 8px rgba(82, 183, 136, 0.40);\n}\n.check-icon {\n  font-size: 0.68rem;\n  color: #fff;\n  font-weight: 900;\n  line-height: 1;\n  animation: check-pop 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes check-pop {\n  from {\n    transform: scale(0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.task-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1f2d23;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  line-height: 1.3;\n}\n:host-context(html.dark) .task-label {\n  color: #c8dace;\n}\n.task-sub {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: #9ca3af;\n  font-style: italic;\n}\n.goal-track {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n:host-context(html.dark) .goal-track {\n  background: rgba(255, 255, 255, 0.09);\n}\n.goal-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #52b788);\n  border-radius: 4px;\n  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\n:host-context(html.dark) .goal-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #40916C,\n      #74c69d);\n}\n.goal-complete {\n  text-align: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #059669;\n  background: rgba(16, 185, 129, 0.09);\n  border-radius: 10px;\n  padding: 7px;\n  border: 1px solid rgba(16, 185, 129, 0.22);\n}\n:host-context(html.dark) .goal-complete {\n  background: rgba(16, 185, 129, 0.13);\n  color: #34d399;\n}\n/*# sourceMappingURL=daily-goal-card.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyGoalCardComponent, { className: "DailyGoalCardComponent", filePath: "src/app/shared/daily-goal-card.component.ts", lineNumber: 243 });
})();

// src/app/dashboard/dashboard.component.ts
var _c0 = () => [1, 2, 3];
var _forTrack0 = ($index, $item) => $item.name;
function DashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 58);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_16_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r1.authService.user()) == null ? null : tmp_1_0.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function DashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 60);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_63_Template_div_click_1_listener() {
      const focus_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.focusAction(focus_r5.action));
    });
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "span", 63);
    \u0275\u0275text(6, "TODAY'S FOCUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "i", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const focus_r5 = ctx;
    \u0275\u0275advance();
    \u0275\u0275styleProp("--tf-color", focus_r5.color)("--tf-bg", focus_r5.bg);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bi " + focus_r5.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(focus_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(focus_r5.desc);
  }
}
function DashboardComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 31)(1, "div", 67)(2, "div", 61);
    \u0275\u0275element(3, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 62)(5, "span", 63);
    \u0275\u0275text(6, "TODAY'S FOCUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8, "All done for today!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10, "Great work \xB7 Come back tomorrow");
    \u0275\u0275elementEnd()()()();
  }
}
function DashboardComponent_For_104_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_104_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_104_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275element(1, "span", 84);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_104_Conditional_17_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const cat_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r1.getCategoryStars(cat_r7.name) >= s_r8 ? "#f59e0b" : "#cbd5e1");
  }
}
function DashboardComponent_For_104_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 85)(2, "span", 86);
    \u0275\u0275text(3, "PROFICIENCY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 87);
    \u0275\u0275repeaterCreate(5, DashboardComponent_For_104_Conditional_17_For_6_Template, 2, 2, "span", 88, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89)(8, "div", 90);
    \u0275\u0275element(9, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.getCategoryProgress(cat_r7.name), "%")("background", cat_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getCategoryProgress(cat_r7.name), "%");
  }
}
function DashboardComponent_For_104_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1, " Complete ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to unlock ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_215_r9 = \u0275\u0275nextContext().$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.categories[\u0275$index_215_r9 - 1] == null ? null : ctx_r1.categories[\u0275$index_215_r9 - 1].name);
  }
}
function DashboardComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function DashboardComponent_For_104_Template_div_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCategory(cat_r7.name));
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275conditionalCreate(2, DashboardComponent_For_104_Conditional_2_Template, 2, 0, "span", 71)(3, DashboardComponent_For_104_Conditional_3_Template, 2, 0, "span", 72)(4, DashboardComponent_For_104_Conditional_4_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 74)(6, "div", 75)(7, "div", 76)(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 78)(11, "h4", 79);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 80);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 81);
    \u0275\u0275text(16, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, DashboardComponent_For_104_Conditional_17_Template, 12, 6, "div", 82)(18, DashboardComponent_For_104_Conditional_18_Template, 5, 1, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-locked", ctx_r1.isLocked(cat_r7.name))("is-active", !ctx_r1.isLocked(cat_r7.name) && ctx_r1.getCategoryStars(cat_r7.name) < 3)("is-done", ctx_r1.getCategoryStars(cat_r7.name) === 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isLocked(cat_r7.name) ? 2 : ctx_r1.getCategoryStars(cat_r7.name) === 3 ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("--cat-clr", cat_r7.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.isLocked(cat_r7.name) ? "rgba(148,163,184,0.12)" : cat_r7.color + "22");
    \u0275\u0275advance();
    \u0275\u0275styleProp("filter", ctx_r1.isLocked(cat_r7.name) ? "grayscale(1) opacity(0.45)" : "none");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r7.emoji);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getQuestionCount(cat_r7.name), " Topics");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.isLocked(cat_r7.name) ? 17 : 18);
  }
}
var DashboardComponent = class _DashboardComponent {
  searchModal;
  router = inject(Router);
  dataService = inject(DataService);
  authService = inject(AuthService);
  gameService = inject(GamificationService);
  achService = inject(AchievementService);
  dcService = inject(DailyChallengeService);
  studyPlan = inject(StudyPlanService);
  wrongSvc = inject(WrongAnswerService);
  alertSvc = inject(AlertService);
  showAllModules = signal(false, ...ngDevMode ? [{ debugName: "showAllModules" }] : []);
  // Countdown to midnight for daily challenge reset
  dcCountdown = signal("--:--:--", ...ngDevMode ? [{ debugName: "dcCountdown" }] : []);
  countdownTimer;
  constructor() {
    this.updateCountdown();
    this.countdownTimer = setInterval(() => this.updateCountdown(), 1e3);
  }
  ngOnDestroy() {
    clearInterval(this.countdownTimer);
  }
  updateCountdown() {
    const now = /* @__PURE__ */ new Date();
    const midnight = new Date(now);
    midnight.setDate(midnight.getDate() + 1);
    midnight.setHours(0, 0, 0, 0);
    const diff = midnight.getTime() - now.getTime();
    const h = Math.floor(diff / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    const s = Math.floor(diff % 6e4 / 1e3);
    this.dcCountdown.set(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
  }
  goToAchievements() {
    this.router.navigate(["/achievements"]);
  }
  goToDailyChallenge() {
    this.router.navigate(["/daily-challenge"]);
  }
  goToStudyPlan() {
    this.router.navigate(["/study-plan"]);
  }
  goToMockInterview() {
    this.router.navigate(["/mock-interview"]);
  }
  goToProgress() {
    this.router.navigate(["/progress"]);
  }
  goToReview() {
    this.router.navigate(["/review"]);
  }
  openSearch() {
    this.searchModal?.open();
  }
  overallPct = computed(() => {
    const total = this.dataService.getAllQuestionsStable().length;
    if (total === 0)
      return 0;
    return Math.round(this.dataService.revealedQuestionIds().size / total * 100);
  }, ...ngDevMode ? [{ debugName: "overallPct" }] : []);
  todayFocusCard = computed(() => {
    if (!this.dcService.isCompletedToday()) {
      return {
        label: "Daily Challenge",
        desc: "5 Questions \xB7 +50 XP \xB7 2\xD7 Bonus",
        icon: "bi-lightning-charge-fill",
        color: "#f59e0b",
        bg: "rgba(245,158,11,0.12)",
        action: "daily-challenge"
      };
    }
    if (this.wrongSvc.reviewCount() > 0) {
      return {
        label: "Review Queue",
        desc: `${this.wrongSvc.reviewCount()} question(s) to revisit \xB7 +5 XP each`,
        icon: "bi-arrow-repeat",
        color: "#f87171",
        bg: "rgba(239,68,68,0.08)",
        action: "review"
      };
    }
    const pending = this.studyPlan.todayTasks().find((t) => !this.studyPlan.isTaskDone(t.id));
    if (pending) {
      return {
        label: "Study Plan",
        desc: "Continue today's tasks",
        icon: "bi-calendar-check-fill",
        color: "#52b788",
        bg: "rgba(82,183,136,0.08)",
        action: "study-plan"
      };
    }
    return null;
  }, ...ngDevMode ? [{ debugName: "todayFocusCard" }] : []);
  focusAction(action) {
    if (action === "daily-challenge")
      this.goToDailyChallenge();
    else if (action === "review")
      this.goToReview();
    else if (action === "study-plan")
      this.goToStudyPlan();
  }
  goToBookmarks() {
    this.router.navigate(["/bookmarks"]);
  }
  unlockedAchievements() {
    return this.achService.achievements().filter((a) => !!a.unlockedAt).length;
  }
  categories = [
    { name: "Core Java", emoji: "\u2615", color: "#f97316" },
    { name: "Spring Boot", emoji: "\u{1F33F}", color: "#22c55e" },
    { name: "Microservices", emoji: "\u{1F517}", color: "#38bdf8" },
    { name: "Hibernate", emoji: "\u{1F5C4}\uFE0F", color: "#a855f7" },
    { name: "Spring Reactive", emoji: "\u26A1", color: "#eab308" },
    { name: "Multithreading", emoji: "\u{1F9F5}", color: "#ec4899" },
    { name: "Reactive Programming", emoji: "\u{1F4E1}", color: "#fb923c" },
    { name: "Coding Questions", emoji: "\u{1F4BB}", color: "#10b981" }
  ];
  getQuestionCount(category) {
    return this.dataService.getQuestions(category).length;
  }
  getCategoryProgress(category) {
    return this.dataService.getProgress(category);
  }
  getCategoryStars(category) {
    return this.dataService.getCategoryStars(category);
  }
  isLocked(category) {
    return this.dataService.isCategoryLocked(category);
  }
  navigateToCategory(category) {
    if (this.isLocked(category))
      return;
    this.router.navigate(["/challenge", category]);
  }
  goToLeaderboard() {
    this.router.navigate(["/leaderboard"]);
  }
  greeting() {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12)
      return "Good morning";
    if (h < 17)
      return "Good afternoon";
    return "Good evening";
  }
  visibleCategories = computed(() => this.showAllModules() ? this.categories : this.categories.slice(0, 3), ...ngDevMode ? [{ debugName: "visibleCategories" }] : []);
  login() {
    this.authService.loginWithGoogle();
  }
  async logout() {
    const confirmed = await this.alertSvc.confirm("Are you sure you want to sign out?", "Sign Out");
    if (confirmed) {
      this.authService.logout();
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(SearchModalComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchModal = _t.first);
    }
  }, hostAttrs: [1, "ion-page"], decls: 126, vars: 31, consts: [[1, "dash-header"], [1, "header-left"], ["color", "light", 1, "menu-btn"], [1, "wordmark"], [1, "wm-accent"], [1, "wm-pro"], [1, "header-right"], ["title", "Search", 1, "icon-btn", "search-btn", 3, "click"], [1, "streak-badge"], ["title", "Sign out", 1, "avatar", 3, "src"], [1, "btn-signin"], [1, "dash-main"], [1, "hero-banner"], [1, "hero-inner"], [1, "hero-greeting"], [1, "hero-wave"], [1, "hero-name"], [1, "name-accent"], [1, "hero-sub"], [1, "xp-section"], [1, "xp-row"], [1, "xp-lv"], [1, "xp-val"], [1, "xp-track"], [1, "xp-fill"], [1, "xp-hint"], [1, "stats-strip"], [1, "stat-item"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-divider"], [1, "tf-section"], [1, "qa-section"], [1, "qa-row"], [1, "qa-tile", 3, "click"], [1, "bi", "bi-briefcase-fill", "qa-icon", 2, "color", "#818cf8"], [1, "qa-label"], [1, "bi", "bi-calendar-check-fill", "qa-icon", 2, "color", "#52b788"], [1, "bi", "bi-bar-chart-fill", "qa-icon", 2, "color", "#10b981"], [1, "bi", "bi-bookmark-fill", "qa-icon", 2, "color", "#f59e0b"], [1, "bi", "bi-trophy-fill", "qa-icon", 2, "color", "#f87171"], [1, "learning-section"], [1, "section-head"], [1, "section-title"], [1, "section-sub"], [1, "module-list"], [1, "timeline-line"], [1, "module-item", 3, "is-locked", "is-active", "is-done"], [1, "view-all-btn", 3, "click"], [1, "bi"], [1, "widgets-section"], [1, "ach-row-btn", 3, "click"], [1, "ach-medal"], [1, "ach-text"], [1, "ach-chip"], [1, "ach-caret"], [1, "two-col"], [1, "col-half"], ["title", "Sign out", 1, "avatar", 3, "click", "src"], [1, "btn-signin", 3, "click"], [1, "tf-card", 3, "click"], [1, "tf-icon"], [1, "tf-text"], [1, "tf-tag"], [1, "tf-label"], [1, "tf-desc"], [1, "bi", "bi-chevron-right", "tf-arrow"], [1, "tf-card", "tf-done"], [1, "bi", "bi-check-circle-fill"], [1, "module-item", 3, "click"], [1, "tm-dot"], [1, "dot", "dot-locked"], [1, "dot", "dot-done"], [1, "dot", "dot-active"], [1, "module-card"], [1, "mc-header"], [1, "mc-icon"], [1, "mc-emoji"], [1, "mc-info"], [1, "mc-name"], [1, "mc-meta"], [1, "mc-arrow"], [1, "mc-body"], [1, "mc-locked"], [1, "pulse"], [1, "mc-prof-row"], [1, "mc-prof-label"], [1, "mc-stars"], [3, "color"], [1, "mc-prog-row"], [1, "mc-bar-track"], [1, "mc-bar-fill"], [1, "mc-pct"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1);
      \u0275\u0275element(2, "ion-menu-button", 2);
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275text(4, " Java");
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "IQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8, "PRO");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_10_listener() {
        return ctx.openSearch();
      });
      \u0275\u0275text(11, "\u{1F50D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13, " \u{1F525} ");
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(16, DashboardComponent_Conditional_16_Template, 1, 1, "img", 9)(17, DashboardComponent_Conditional_17_Template, 2, 0, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ion-content")(19, "main", 11)(20, "section", 12)(21, "div", 13)(22, "div", 14)(23, "span", 15);
      \u0275\u0275text(24, "\u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "h2", 16);
      \u0275\u0275text(27);
      \u0275\u0275elementStart(28, "span", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "p", 18);
      \u0275\u0275text(31, "Keep building your Java mastery");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 19)(33, "div", 20)(34, "span", 21);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 23);
      \u0275\u0275element(40, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 25);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 26)(45, "div", 27)(46, "span", 28);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span", 29);
      \u0275\u0275text(50, "Total XP");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "div", 30);
      \u0275\u0275elementStart(52, "div", 27)(53, "span", 28);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span", 29);
      \u0275\u0275text(56, "Day Streak");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "div", 30);
      \u0275\u0275elementStart(58, "div", 27)(59, "span", 28);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 29);
      \u0275\u0275text(62, "Progress");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(63, DashboardComponent_Conditional_63_Template, 12, 8, "section", 31)(64, DashboardComponent_Conditional_64_Template, 11, 0, "section", 31);
      \u0275\u0275elementStart(65, "section", 32)(66, "div", 33)(67, "button", 34);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_67_listener() {
        return ctx.goToMockInterview();
      });
      \u0275\u0275element(68, "i", 35);
      \u0275\u0275elementStart(69, "span", 36);
      \u0275\u0275text(70, "Mock");
      \u0275\u0275element(71, "br");
      \u0275\u0275text(72, "Interview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "button", 34);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_73_listener() {
        return ctx.goToStudyPlan();
      });
      \u0275\u0275element(74, "i", 37);
      \u0275\u0275elementStart(75, "span", 36);
      \u0275\u0275text(76, "Study");
      \u0275\u0275element(77, "br");
      \u0275\u0275text(78, "Plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "button", 34);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_79_listener() {
        return ctx.goToProgress();
      });
      \u0275\u0275element(80, "i", 38);
      \u0275\u0275elementStart(81, "span", 36);
      \u0275\u0275text(82, "My");
      \u0275\u0275element(83, "br");
      \u0275\u0275text(84, "Progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "button", 34);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_85_listener() {
        return ctx.goToBookmarks();
      });
      \u0275\u0275element(86, "i", 39);
      \u0275\u0275elementStart(87, "span", 36);
      \u0275\u0275text(88, "Saved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "button", 34);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_89_listener() {
        return ctx.goToLeaderboard();
      });
      \u0275\u0275element(90, "i", 40);
      \u0275\u0275elementStart(91, "span", 36);
      \u0275\u0275text(92, "Leader-");
      \u0275\u0275element(93, "br");
      \u0275\u0275text(94, "board");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "section", 41)(96, "div", 42)(97, "h3", 43);
      \u0275\u0275text(98, "Learning Path");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 44);
      \u0275\u0275text(100, "Master Java step by step");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 45);
      \u0275\u0275element(102, "div", 46);
      \u0275\u0275repeaterCreate(103, DashboardComponent_For_104_Template, 19, 17, "div", 47, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "button", 48);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_105_listener() {
        return ctx.showAllModules.set(!ctx.showAllModules());
      });
      \u0275\u0275text(106);
      \u0275\u0275element(107, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "section", 50)(109, "button", 51);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_109_listener() {
        return ctx.goToAchievements();
      });
      \u0275\u0275elementStart(110, "span", 52);
      \u0275\u0275text(111, "\u{1F3C5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span", 53);
      \u0275\u0275text(113, "Achievements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "span", 54);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "span", 55);
      \u0275\u0275text(117, "\u203A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 56)(119, "div", 57);
      \u0275\u0275element(120, "app-streak-card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 57);
      \u0275\u0275element(122, "app-daily-goal-card");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(123, "app-qotd-card")(124, "app-continue-learning-card");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(125, "app-search-modal");
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_12_0;
      \u0275\u0275advance(12);
      \u0275\u0275classProp("streak-on", ctx.gameService.streak() > 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.gameService.streak());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authService.user() ? 16 : 17);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.greeting(), ",\xA0");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(((tmp_4_0 = ctx.authService.user()) == null ? null : tmp_4_0.displayName == null ? null : (tmp_4_0 = tmp_4_0.displayName.split(" ")) == null ? null : tmp_4_0[0]) || "Learner");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Level ", ctx.gameService.level());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(38, 22, ctx.gameService.xp(), "1.0-0"), " XP");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.gameService.levelProgress(), "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(43, 25, ctx.gameService.xpToNextLevel(), "1.0-0"), " XP to next level");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 28, ctx.gameService.xp(), "1.0-0"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.gameService.streak());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.overallPct(), "%");
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_12_0 = ctx.todayFocusCard()) ? 63 : 64, tmp_12_0);
      \u0275\u0275advance(40);
      \u0275\u0275repeater(ctx.visibleCategories());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.showAllModules() ? "Show less" : "View all " + ctx.categories.length + " modules", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-chevron-down", !ctx.showAllModules())("bi-chevron-up", ctx.showAllModules());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.unlockedAchievements(), " / ", ctx.achService.achievements().length);
    }
  }, dependencies: [
    CommonModule,
    IonContent,
    IonMenuButton,
    StreakCardComponent,
    QotdCardComponent,
    ContinueLearningCardComponent,
    DailyGoalCardComponent,
    SearchModalComponent,
    DecimalPipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --bg: #f3f6f3;\n  --bg-card: #ffffff;\n  --border: rgba(27,67,50,0.09);\n  --txt: #0c1810;\n  --txt2: #3d5f4f;\n  --txt3: #7a9888;\n  --accent: #1B4332;\n  --accent-mid: #2D6A4F;\n  --accent-lt: #40916C;\n  --accent-gold: #d4a853;\n  --accent-gold-lt: #efc870;\n  --header-bg: #091410;\n  --hero-1: #060e09;\n  --hero-2: #1B4332;\n  --hero-3: #2D6A4F;\n  --sh-card: 0 2px 10px rgba(27,67,50,0.06), 0 1px 3px rgba(0,0,0,0.04);\n  --sh-hover: 0 10px 32px rgba(27,67,50,0.14), 0 3px 8px rgba(0,0,0,0.06);\n  --radius: 18px;\n  --page-px: 16px;\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\nhtml.dark[_nghost-%COMP%], html.dark   [_nghost-%COMP%] {\n  --bg: #040c06;\n  --bg-card: #0d1a10;\n  --border: rgba(255,255,255,0.07);\n  --txt: #e4efe7;\n  --txt2: #4f9a6e;\n  --txt3: #2f5e3f;\n  --accent: #52b788;\n  --accent-mid: #40916C;\n  --accent-lt: #74c69d;\n  --header-bg: #020706;\n  --hero-1: #020706;\n  --hero-2: #0c1910;\n  --hero-3: #1B4332;\n  --sh-card: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.35);\n  --sh-hover: 0 10px 36px rgba(0,0,0,0.65), 0 4px 10px rgba(0,0,0,0.4);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--bg);\n  --color: var(--txt);\n  --padding-bottom: 80px;\n}\n.dash-main[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--header-bg) 0%,\n      color-mix(in srgb, var(--header-bg) 90%, #1B4332) 100%);\n  border-bottom: 1px solid rgba(116, 198, 157, 0.10);\n  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.42), 0 1px 0 rgba(116, 198, 157, 0.07);\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  --color: rgba(255,255,255,0.82);\n  --padding-start: 0;\n  --padding-end: 4px;\n  font-size: 1.4rem;\n}\n.wordmark[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.04em;\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n}\n.wm-accent[_ngcontent-%COMP%] {\n  color: #74c69d;\n}\n.wm-pro[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  background:\n    linear-gradient(\n      135deg,\n      #c89432 20%,\n      #f5c84a 55%,\n      #c89432 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  border: 1px solid rgba(212, 168, 83, 0.38);\n  border-radius: 4px;\n  padding: 1px 5px;\n  margin-left: 6px;\n  align-self: center;\n  text-transform: uppercase;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  font-size: 1.05rem;\n  cursor: pointer;\n  padding: 5px 7px;\n  border-radius: 10px;\n  opacity: 0.90;\n  transition: all 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.14);\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.streak-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.50);\n  transition: all 0.25s ease;\n}\n.streak-badge.streak-on[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.18);\n  border-color: rgba(249, 115, 22, 0.38);\n  color: #fb923c;\n  box-shadow: 0 0 16px rgba(249, 115, 22, 0.22), inset 0 1px 0 rgba(255, 180, 100, 0.12);\n}\n.level-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-secondary);\n}\n.stat-icon.level[_ngcontent-%COMP%] {\n  color: var(--accent-warning);\n}\n.stat-icon.level[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  margin-top: 1px;\n}\n.stat-icon.streak.active[_ngcontent-%COMP%] {\n  color: #f97316;\n  background: rgba(249, 115, 22, 0.1);\n}\n.stat-icon.shield[_ngcontent-%COMP%] {\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  gap: 3px;\n  background: rgba(212, 168, 83, 0.12);\n  border: 1px solid rgba(212, 168, 83, 0.28);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #d4a853;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.22);\n  cursor: pointer;\n  object-fit: cover;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.avatar[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.50);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.12);\n}\n.btn-signin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.13),\n      rgba(255, 255, 255, 0.05));\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: white;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-signin[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.38);\n}\n.hero-banner[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      160deg,\n      var(--hero-1) 0%,\n      var(--hero-2) 52%,\n      var(--hero-3) 100%);\n  padding: 26px 20px 32px;\n  overflow: hidden;\n}\n.hero-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -70px;\n  right: -50px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(116, 198, 157, 0.18) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.hero-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -50px;\n  left: -20px;\n  width: 220px;\n  height: 220px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 168, 83, 0.11) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-greeting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.hero-wave[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  line-height: 1;\n  filter: drop-shadow(0 2px 8px rgba(255, 200, 100, 0.45));\n}\n.hero-name[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 1.18rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.name-accent[_ngcontent-%COMP%] {\n  color: #74c69d;\n  text-shadow: 0 0 24px rgba(116, 198, 157, 0.45);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.50);\n  letter-spacing: 0.01em;\n}\n.xp-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.xp-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xp-lv[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.60);\n}\n.xp-val[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #d4a853;\n  text-shadow: 0 0 12px rgba(212, 168, 83, 0.40);\n}\n.xp-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.09);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #40916C 0%,\n      #74c69d 35%,\n      #d4a853 52%,\n      #74c69d 68%,\n      #40916C 100%);\n  background-size: 300% 100%;\n  border-radius: 6px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_xp-shimmer 5s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_xp-shimmer {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n.xp-hint[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  color: rgba(255, 255, 255, 0.38);\n  text-align: right;\n}\n.widgets-section[_ngcontent-%COMP%] {\n  padding: 16px var(--page-px) 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ach-row-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    var(--bg-card) padding-box,\n    linear-gradient(\n      135deg,\n      rgba(212, 168, 83, 0.80),\n      rgba(212, 168, 83, 0.22),\n      rgba(212, 168, 83, 0.80)) border-box;\n  border: 1.5px solid transparent;\n  border-radius: 16px;\n  padding: 13px 16px;\n  cursor: pointer;\n  color: var(--txt);\n  font-size: 0.88rem;\n  font-weight: 700;\n  transition: all 0.25s ease;\n  box-shadow: var(--sh-card);\n}\n.ach-row-btn[_ngcontent-%COMP%]:hover {\n  background:\n    var(--bg-card) padding-box,\n    linear-gradient(\n      135deg,\n      #d4a853,\n      rgba(240, 201, 122, 0.55),\n      #d4a853) border-box;\n  box-shadow: var(--sh-hover), 0 0 20px rgba(212, 168, 83, 0.14);\n  transform: translateY(-1px);\n}\n.ach-medal[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.ach-text[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.ach-chip[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 800;\n  background: rgba(212, 168, 83, 0.12);\n  color: var(--accent-gold);\n  border: 1px solid rgba(212, 168, 83, 0.30);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.ach-caret[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--accent-gold);\n  opacity: 0.75;\n  font-weight: 400;\n  transition: transform 0.2s ease;\n}\n.ach-row-btn[_ngcontent-%COMP%]:hover   .ach-caret[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.col-half[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.col-half[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n}\n@media (max-width: 400px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.learning-section[_ngcontent-%COMP%] {\n  padding: 20px var(--page-px) 0;\n}\n.section-head[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 1.08rem;\n  font-weight: 900;\n  color: var(--txt);\n  letter-spacing: -0.02em;\n}\n.section-sub[_ngcontent-%COMP%] {\n  font-size: 0.80rem;\n  color: var(--txt2);\n}\n.module-list[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding-left: 16px;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 27px;\n  top: 20px;\n  bottom: 50px;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--accent),\n      rgba(27, 67, 50, 0.10));\n}\n.module-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n.tm-dot[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  width: 22px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  border: 2px solid var(--border);\n  background: var(--bg);\n}\n.dot-locked[_ngcontent-%COMP%] {\n  color: var(--txt3);\n  opacity: 0.55;\n}\n.dot-done[_ngcontent-%COMP%] {\n  background: #22c55e;\n  border-color: #16a34a;\n  color: #fff;\n  font-weight: 900;\n  font-size: 0.7rem;\n  box-shadow: 0 0 12px rgba(34, 197, 94, 0.40);\n}\n.dot-active[_ngcontent-%COMP%] {\n  border-color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 12%, var(--bg));\n}\n.pulse[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: var(--accent);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 var(--accent);\n  animation: _ngcontent-%COMP%_ripple 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_ripple {\n  0% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent);\n  }\n  70% {\n    box-shadow: 0 0 0 8px transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n.module-card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition:\n    transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.22s ease,\n    border-color 0.2s;\n  box-shadow: var(--sh-card), inset 3px 0 0 0 var(--cat-clr, var(--accent));\n}\n.module-item[_ngcontent-%COMP%]:not(.is-locked)   .module-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.005);\n  box-shadow:\n    var(--sh-hover),\n    inset 3px 0 0 0 var(--cat-clr, var(--accent)),\n    0 0 0 1.5px var(--cat-clr, var(--accent)),\n    0 6px 24px color-mix(in srgb, var(--cat-clr, var(--accent)) 18%, transparent);\n  border-color: var(--cat-clr, var(--accent));\n}\n.module-item.is-locked[_ngcontent-%COMP%]   .module-card[_ngcontent-%COMP%] {\n  opacity: 0.48;\n  cursor: not-allowed;\n  box-shadow: var(--sh-card), inset 3px 0 0 0 var(--border);\n}\n.module-item.is-active[_ngcontent-%COMP%]   .module-card[_ngcontent-%COMP%] {\n  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));\n}\n.mc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 14px;\n}\n.mc-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mc-emoji[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.mc-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mc-name[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 0.94rem;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.01em;\n}\n.mc-meta[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  color: var(--txt2);\n}\n.mc-arrow[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--txt2);\n  font-weight: 300;\n  transition: transform 0.22s ease;\n}\n.module-item[_ngcontent-%COMP%]:not(.is-locked):hover   .mc-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.mc-body[_ngcontent-%COMP%] {\n  padding: 10px 14px 12px;\n  border-top: 1px solid var(--border);\n}\n.mc-prof-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.mc-prof-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: var(--txt3);\n  text-transform: uppercase;\n}\n.mc-stars[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  letter-spacing: 1px;\n}\n.mc-prog-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.mc-bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: var(--border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mc-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mc-pct[_ngcontent-%COMP%] {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: var(--txt2);\n  width: 28px;\n  text-align: right;\n}\n.mc-locked[_ngcontent-%COMP%] {\n  padding: 6px 14px 12px 68px;\n  font-size: 0.76rem;\n  color: var(--txt3);\n  font-style: italic;\n}\n.tf-section[_ngcontent-%COMP%] {\n  padding: 16px var(--page-px) 0;\n}\n.tf-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--tf-bg, rgba(99,102,241,0.1));\n  border: 1px solid color-mix(in srgb, var(--tf-color, #818cf8) 30%, transparent);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: var(--sh-card);\n}\n.tf-card[_ngcontent-%COMP%]:hover:not(.tf-done) {\n  transform: translateY(-2px);\n  box-shadow: var(--sh-hover), 0 0 0 1px color-mix(in srgb, var(--tf-color, #818cf8) 40%, transparent);\n}\n.tf-done[_ngcontent-%COMP%] {\n  --tf-color: #52b788;\n  --tf-bg: rgba(82,183,136,0.07);\n  cursor: default;\n}\n.tf-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--tf-color, #818cf8) 15%, transparent);\n  color: var(--tf-color, #818cf8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.tf-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tf-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--tf-color, #818cf8);\n  opacity: 0.8;\n}\n.tf-label[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.01em;\n}\n.tf-desc[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: var(--txt2);\n}\n.tf-arrow[_ngcontent-%COMP%] {\n  color: var(--tf-color, #818cf8);\n  font-size: 0.9rem;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n}\n.tf-card[_ngcontent-%COMP%]:hover   .tf-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.qa-section[_ngcontent-%COMP%] {\n  padding: 16px var(--page-px) 0;\n}\n.qa-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding-bottom: 2px;\n}\n.qa-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.qa-tile[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 76px;\n  padding: 14px 8px;\n  border-radius: 14px;\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s;\n  box-shadow: var(--sh-card);\n}\n.qa-tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--sh-hover);\n  border-color: color-mix(in srgb, var(--accent) 35%, var(--border));\n}\n.qa-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n.qa-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--txt2);\n  text-align: center;\n  line-height: 1.3;\n}\n.daily-challenge-section[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto 16px;\n  padding: 0 var(--page-px);\n}\n.dc-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s, border-color 0.2s;\n}\n.dc-card[_ngcontent-%COMP%]:hover:not(.dc-done) {\n  transform: translateY(-1px);\n  border-color: rgba(245, 158, 11, 0.5);\n}\n.dc-card.dc-done[_ngcontent-%COMP%] {\n  cursor: default;\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.dc-card-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dc-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(245, 158, 11, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #f59e0b;\n}\n.dc-card.dc-done[_ngcontent-%COMP%]   .dc-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.dc-card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dc-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--txt);\n}\n.dc-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--txt2);\n}\n.dc-sub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.dc-card-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dc-done-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 20px;\n  padding: 4px 10px;\n}\n.dc-streak-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #f97316;\n  background: rgba(249, 115, 22, 0.1);\n  border: 1px solid rgba(249, 115, 22, 0.2);\n  border-radius: 20px;\n  padding: 4px 10px;\n}\n.dc-arrow[_ngcontent-%COMP%] {\n  color: var(--txt3);\n  font-size: 0.8rem;\n}\n.card-locked-msg[_ngcontent-%COMP%] {\n  padding: 0 16px 16px 80px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.stats-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background: var(--bg-card);\n  border-bottom: 1px solid var(--border);\n  padding: 12px var(--page-px);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: var(--txt);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--txt2);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: var(--border);\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: 14px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 1.5px dashed var(--border);\n  background: transparent;\n  color: var(--txt2);\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 6%, transparent);\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, host: { "class": "ion-page" }, imports: [
      CommonModule,
      IonContent,
      IonMenuButton,
      StreakCardComponent,
      QotdCardComponent,
      ContinueLearningCardComponent,
      DailyGoalCardComponent,
      SearchModalComponent
    ], template: `<!-- Host element already has class="ion-page" via @Component host binding -->

<!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Header \u2014 outside ion-content so it stays fixed while page scrolls \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<header class="dash-header">
  <div class="header-left">
    <ion-menu-button class="menu-btn" color="light"></ion-menu-button>
    <div class="wordmark">
      Java<span class="wm-accent">IQ</span>
      <span class="wm-pro">PRO</span>
    </div>
  </div>

  <div class="header-right">
    <button class="icon-btn search-btn" (click)="openSearch()" title="Search">\u{1F50D}</button>

    <div class="streak-badge" [class.streak-on]="gameService.streak() > 0">
      \u{1F525} <span>{{ gameService.streak() }}</span>
    </div>

    @if (authService.user()) {
    <img [src]="authService.user()?.photoURL" class="avatar" (click)="logout()" title="Sign out">
    } @else {
    <button class="btn-signin" (click)="login()">Sign In</button>
    }
  </div>
</header>

<!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Scrollable body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<ion-content>
  <main class="dash-main">

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Hero Banner \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="hero-banner">
      <div class="hero-inner">
        <div class="hero-greeting">
          <span class="hero-wave">\u{1F44B}</span>
          <div>
            <h2 class="hero-name">
              {{ greeting() }},&nbsp;<span class="name-accent">{{ authService.user()?.displayName?.split(' ')?.[0] ||
                'Learner' }}</span>
            </h2>
            <p class="hero-sub">Keep building your Java mastery</p>
          </div>
        </div>

        <div class="xp-section">
          <div class="xp-row">
            <span class="xp-lv">Level {{ gameService.level() }}</span>
            <span class="xp-val">{{ gameService.xp() | number:'1.0-0' }} XP</span>
          </div>
          <div class="xp-track">
            <div class="xp-fill" [style.width.%]="gameService.levelProgress()"></div>
          </div>
          <span class="xp-hint">{{ gameService.xpToNextLevel() | number:'1.0-0' }} XP to next level</span>
        </div>
      </div>
    </section>

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Stats Strip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="stats-strip">
      <div class="stat-item">
        <span class="stat-val">{{ gameService.xp() | number:'1.0-0' }}</span>
        <span class="stat-lbl">Total XP</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-val">{{ gameService.streak() }}</span>
        <span class="stat-lbl">Day Streak</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-val">{{ overallPct() }}%</span>
        <span class="stat-lbl">Progress</span>
      </div>
    </section>

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Today's Focus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (todayFocusCard(); as focus) {
    <section class="tf-section">
      <div class="tf-card" [style.--tf-color]="focus.color" [style.--tf-bg]="focus.bg"
        (click)="focusAction(focus.action)">
        <div class="tf-icon"><i [class]="'bi ' + focus.icon"></i></div>
        <div class="tf-text">
          <span class="tf-tag">TODAY'S FOCUS</span>
          <span class="tf-label">{{ focus.label }}</span>
          <span class="tf-desc">{{ focus.desc }}</span>
        </div>
        <i class="bi bi-chevron-right tf-arrow"></i>
      </div>
    </section>
    } @else {
    <section class="tf-section">
      <div class="tf-card tf-done">
        <div class="tf-icon"><i class="bi bi-check-circle-fill"></i></div>
        <div class="tf-text">
          <span class="tf-tag">TODAY'S FOCUS</span>
          <span class="tf-label">All done for today!</span>
          <span class="tf-desc">Great work \xB7 Come back tomorrow</span>
        </div>
      </div>
    </section>
    }

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Quick Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="qa-section">
      <div class="qa-row">
        <button class="qa-tile" (click)="goToMockInterview()">
          <i class="bi bi-briefcase-fill qa-icon" style="color:#818cf8"></i>
          <span class="qa-label">Mock<br>Interview</span>
        </button>
        <button class="qa-tile" (click)="goToStudyPlan()">
          <i class="bi bi-calendar-check-fill qa-icon" style="color:#52b788"></i>
          <span class="qa-label">Study<br>Plan</span>
        </button>
        <button class="qa-tile" (click)="goToProgress()">
          <i class="bi bi-bar-chart-fill qa-icon" style="color:#10b981"></i>
          <span class="qa-label">My<br>Progress</span>
        </button>
        <button class="qa-tile" (click)="goToBookmarks()">
          <i class="bi bi-bookmark-fill qa-icon" style="color:#f59e0b"></i>
          <span class="qa-label">Saved</span>
        </button>
        <button class="qa-tile" (click)="goToLeaderboard()">
          <i class="bi bi-trophy-fill qa-icon" style="color:#f87171"></i>
          <span class="qa-label">Leader-<br>board</span>
        </button>
      </div>
    </section>

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Learning Path \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="learning-section">
      <div class="section-head">
        <h3 class="section-title">Learning Path</h3>
        <span class="section-sub">Master Java step by step</span>
      </div>

      <div class="module-list">
        <div class="timeline-line"></div>

        @for (cat of visibleCategories(); track cat.name; let i = $index) {
        <div class="module-item" [class.is-locked]="isLocked(cat.name)"
          [class.is-active]="!isLocked(cat.name) && getCategoryStars(cat.name) < 3"
          [class.is-done]="getCategoryStars(cat.name) === 3" (click)="navigateToCategory(cat.name)">

          <!-- Timeline dot -->
          <div class="tm-dot">
            @if (isLocked(cat.name)) {
            <span class="dot dot-locked">\u{1F512}</span>
            } @else if (getCategoryStars(cat.name) === 3) {
            <span class="dot dot-done">\u2713</span>
            } @else {
            <span class="dot dot-active"><span class="pulse"></span></span>
            }
          </div>

          <!-- Card  (pass real index for locked-unlock msg) -->
          <div class="module-card" [style.--cat-clr]="cat.color">
            <div class="mc-header">
              <div class="mc-icon"
                [style.background]="isLocked(cat.name) ? 'rgba(148,163,184,0.12)' : (cat.color + '22')">
                <span class="mc-emoji" [style.filter]="isLocked(cat.name) ? 'grayscale(1) opacity(0.45)' : 'none'">{{
                  cat.emoji }}</span>
              </div>
              <div class="mc-info">
                <h4 class="mc-name">{{ cat.name }}</h4>
                <span class="mc-meta">{{ getQuestionCount(cat.name) }} Topics</span>
              </div>
              <span class="mc-arrow">\u203A</span>
            </div>

            @if (!isLocked(cat.name)) {
            <div class="mc-body">
              <div class="mc-prof-row">
                <span class="mc-prof-label">PROFICIENCY</span>
                <div class="mc-stars">
                  @for (s of [1,2,3]; track s) {
                  <span [style.color]="getCategoryStars(cat.name) >= s ? '#f59e0b' : '#cbd5e1'">\u2605</span>
                  }
                </div>
              </div>
              <div class="mc-prog-row">
                <div class="mc-bar-track">
                  <div class="mc-bar-fill" [style.width.%]="getCategoryProgress(cat.name)"
                    [style.background]="cat.color"></div>
                </div>
                <span class="mc-pct">{{ getCategoryProgress(cat.name) }}%</span>
              </div>
            </div>
            } @else {
            <div class="mc-locked">
              Complete <strong>{{ categories[i - 1]?.name }}</strong> to unlock
            </div>
            }
          </div>

        </div>
        }
      </div>

      <button class="view-all-btn" (click)="showAllModules.set(!showAllModules())">
        {{ showAllModules() ? 'Show less' : 'View all ' + categories.length + ' modules' }}
        <i class="bi" [class.bi-chevron-down]="!showAllModules()" [class.bi-chevron-up]="showAllModules()"></i>
      </button>
    </section>

    <!-- \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Daily Widgets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="widgets-section">

      <!-- Achievements shortcut -->
      <button class="ach-row-btn" (click)="goToAchievements()">
        <span class="ach-medal">\u{1F3C5}</span>
        <span class="ach-text">Achievements</span>
        <span class="ach-chip">{{ unlockedAchievements() }} / {{ achService.achievements().length }}</span>
        <span class="ach-caret">\u203A</span>
      </button>

      <!-- Streak + Daily Goal side-by-side -->
      <div class="two-col">
        <div class="col-half"><app-streak-card /></div>
        <div class="col-half"><app-daily-goal-card /></div>
      </div>

      <!-- Question of the Day -->
      <app-qotd-card />

      <!-- Continue Learning -->
      <app-continue-learning-card />

    </section>

  </main>
</ion-content>

<app-search-modal></app-search-modal>`, styles: ['/* src/app/dashboard/dashboard.component.css */\n:host {\n  --bg: #f3f6f3;\n  --bg-card: #ffffff;\n  --border: rgba(27,67,50,0.09);\n  --txt: #0c1810;\n  --txt2: #3d5f4f;\n  --txt3: #7a9888;\n  --accent: #1B4332;\n  --accent-mid: #2D6A4F;\n  --accent-lt: #40916C;\n  --accent-gold: #d4a853;\n  --accent-gold-lt: #efc870;\n  --header-bg: #091410;\n  --hero-1: #060e09;\n  --hero-2: #1B4332;\n  --hero-3: #2D6A4F;\n  --sh-card: 0 2px 10px rgba(27,67,50,0.06), 0 1px 3px rgba(0,0,0,0.04);\n  --sh-hover: 0 10px 32px rgba(27,67,50,0.14), 0 3px 8px rgba(0,0,0,0.06);\n  --radius: 18px;\n  --page-px: 16px;\n  display: block;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n}\n:host-context(html.dark) {\n  --bg: #040c06;\n  --bg-card: #0d1a10;\n  --border: rgba(255,255,255,0.07);\n  --txt: #e4efe7;\n  --txt2: #4f9a6e;\n  --txt3: #2f5e3f;\n  --accent: #52b788;\n  --accent-mid: #40916C;\n  --accent-lt: #74c69d;\n  --header-bg: #020706;\n  --hero-1: #020706;\n  --hero-2: #0c1910;\n  --hero-3: #1B4332;\n  --sh-card: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.35);\n  --sh-hover: 0 10px 36px rgba(0,0,0,0.65), 0 4px 10px rgba(0,0,0,0.4);\n}\n:host ion-content {\n  --background: var(--bg);\n  --color: var(--txt);\n  --padding-bottom: 80px;\n}\n.dash-main {\n  max-width: 640px;\n  margin: 0 auto;\n}\n.dash-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--header-bg) 0%,\n      color-mix(in srgb, var(--header-bg) 90%, #1B4332) 100%);\n  border-bottom: 1px solid rgba(116, 198, 157, 0.10);\n  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.42), 0 1px 0 rgba(116, 198, 157, 0.07);\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu-btn {\n  --color: rgba(255,255,255,0.82);\n  --padding-start: 0;\n  --padding-end: 4px;\n  font-size: 1.4rem;\n}\n.wordmark {\n  font-size: 1.18rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.04em;\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n}\n.wm-accent {\n  color: #74c69d;\n}\n.wm-pro {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  background:\n    linear-gradient(\n      135deg,\n      #c89432 20%,\n      #f5c84a 55%,\n      #c89432 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  border: 1px solid rgba(212, 168, 83, 0.38);\n  border-radius: 4px;\n  padding: 1px 5px;\n  margin-left: 6px;\n  align-self: center;\n  text-transform: uppercase;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.icon-btn {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  font-size: 1.05rem;\n  cursor: pointer;\n  padding: 5px 7px;\n  border-radius: 10px;\n  opacity: 0.90;\n  transition: all 0.2s ease;\n}\n.icon-btn:hover {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.14);\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.streak-badge {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.50);\n  transition: all 0.25s ease;\n}\n.streak-badge.streak-on {\n  background: rgba(249, 115, 22, 0.18);\n  border-color: rgba(249, 115, 22, 0.38);\n  color: #fb923c;\n  box-shadow: 0 0 16px rgba(249, 115, 22, 0.22), inset 0 1px 0 rgba(255, 180, 100, 0.12);\n}\n.level-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-secondary);\n}\n.stat-icon.level {\n  color: var(--accent-warning);\n}\n.stat-icon.level span {\n  position: absolute;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  margin-top: 1px;\n}\n.stat-icon.streak.active {\n  color: #f97316;\n  background: rgba(249, 115, 22, 0.1);\n}\n.stat-icon.shield {\n  color: #818cf8;\n  background: rgba(99, 102, 241, 0.1);\n}\n.stat-value {\n  font-weight: 600;\n  font-size: 0.9rem;\n  gap: 3px;\n  background: rgba(212, 168, 83, 0.12);\n  border: 1px solid rgba(212, 168, 83, 0.28);\n  border-radius: 20px;\n  padding: 4px 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #d4a853;\n}\n.avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.22);\n  cursor: pointer;\n  object-fit: cover;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.avatar:hover {\n  border-color: rgba(255, 255, 255, 0.50);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.12);\n}\n.btn-signin {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.13),\n      rgba(255, 255, 255, 0.05));\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: white;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-signin:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.38);\n}\n.hero-banner {\n  position: relative;\n  background:\n    linear-gradient(\n      160deg,\n      var(--hero-1) 0%,\n      var(--hero-2) 52%,\n      var(--hero-3) 100%);\n  padding: 26px 20px 32px;\n  overflow: hidden;\n}\n.hero-banner::before {\n  content: "";\n  position: absolute;\n  top: -70px;\n  right: -50px;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(116, 198, 157, 0.18) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.hero-banner::after {\n  content: "";\n  position: absolute;\n  bottom: -50px;\n  left: -20px;\n  width: 220px;\n  height: 220px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(212, 168, 83, 0.11) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.hero-inner {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-greeting {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.hero-wave {\n  font-size: 1.6rem;\n  line-height: 1;\n  filter: drop-shadow(0 2px 8px rgba(255, 200, 100, 0.45));\n}\n.hero-name {\n  margin: 0 0 3px;\n  font-size: 1.18rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.name-accent {\n  color: #74c69d;\n  text-shadow: 0 0 24px rgba(116, 198, 157, 0.45);\n}\n.hero-sub {\n  margin: 0;\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.50);\n  letter-spacing: 0.01em;\n}\n.xp-section {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.xp-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xp-lv {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.60);\n}\n.xp-val {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #d4a853;\n  text-shadow: 0 0 12px rgba(212, 168, 83, 0.40);\n}\n.xp-track {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.09);\n  border-radius: 6px;\n  overflow: hidden;\n}\n.xp-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #40916C 0%,\n      #74c69d 35%,\n      #d4a853 52%,\n      #74c69d 68%,\n      #40916C 100%);\n  background-size: 300% 100%;\n  border-radius: 6px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: xp-shimmer 5s linear infinite;\n}\n@keyframes xp-shimmer {\n  0% {\n    background-position: 200% center;\n  }\n  100% {\n    background-position: -200% center;\n  }\n}\n.xp-hint {\n  font-size: 0.70rem;\n  color: rgba(255, 255, 255, 0.38);\n  text-align: right;\n}\n.widgets-section {\n  padding: 16px var(--page-px) 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.ach-row-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background:\n    var(--bg-card) padding-box,\n    linear-gradient(\n      135deg,\n      rgba(212, 168, 83, 0.80),\n      rgba(212, 168, 83, 0.22),\n      rgba(212, 168, 83, 0.80)) border-box;\n  border: 1.5px solid transparent;\n  border-radius: 16px;\n  padding: 13px 16px;\n  cursor: pointer;\n  color: var(--txt);\n  font-size: 0.88rem;\n  font-weight: 700;\n  transition: all 0.25s ease;\n  box-shadow: var(--sh-card);\n}\n.ach-row-btn:hover {\n  background:\n    var(--bg-card) padding-box,\n    linear-gradient(\n      135deg,\n      #d4a853,\n      rgba(240, 201, 122, 0.55),\n      #d4a853) border-box;\n  box-shadow: var(--sh-hover), 0 0 20px rgba(212, 168, 83, 0.14);\n  transform: translateY(-1px);\n}\n.ach-medal {\n  font-size: 1.15rem;\n}\n.ach-text {\n  flex: 1;\n  text-align: left;\n}\n.ach-chip {\n  font-size: 0.70rem;\n  font-weight: 800;\n  background: rgba(212, 168, 83, 0.12);\n  color: var(--accent-gold);\n  border: 1px solid rgba(212, 168, 83, 0.30);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.ach-caret {\n  font-size: 1.2rem;\n  color: var(--accent-gold);\n  opacity: 0.75;\n  font-weight: 400;\n  transition: transform 0.2s ease;\n}\n.ach-row-btn:hover .ach-caret {\n  transform: translateX(3px);\n}\n.two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  align-items: stretch;\n}\n.col-half {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.col-half > * {\n  flex: 1;\n  display: block;\n}\n@media (max-width: 400px) {\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n}\n.learning-section {\n  padding: 20px var(--page-px) 0;\n}\n.section-head {\n  margin-bottom: 18px;\n}\n.section-title {\n  margin: 0 0 3px;\n  font-size: 1.08rem;\n  font-weight: 900;\n  color: var(--txt);\n  letter-spacing: -0.02em;\n}\n.section-sub {\n  font-size: 0.80rem;\n  color: var(--txt2);\n}\n.module-list {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding-left: 16px;\n}\n.timeline-line {\n  position: absolute;\n  left: 27px;\n  top: 20px;\n  bottom: 50px;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      var(--accent),\n      rgba(27, 67, 50, 0.10));\n}\n.module-item {\n  display: flex;\n  gap: 14px;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n}\n.tm-dot {\n  padding-top: 14px;\n  width: 22px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n}\n.dot {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  border: 2px solid var(--border);\n  background: var(--bg);\n}\n.dot-locked {\n  color: var(--txt3);\n  opacity: 0.55;\n}\n.dot-done {\n  background: #22c55e;\n  border-color: #16a34a;\n  color: #fff;\n  font-weight: 900;\n  font-size: 0.7rem;\n  box-shadow: 0 0 12px rgba(34, 197, 94, 0.40);\n}\n.dot-active {\n  border-color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 12%, var(--bg));\n}\n.pulse {\n  width: 10px;\n  height: 10px;\n  background: var(--accent);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 var(--accent);\n  animation: ripple 2s infinite;\n}\n@keyframes ripple {\n  0% {\n    box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent);\n  }\n  70% {\n    box-shadow: 0 0 0 8px transparent;\n  }\n  100% {\n    box-shadow: 0 0 0 0 transparent;\n  }\n}\n.module-card {\n  flex: 1;\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  border-radius: 16px;\n  overflow: hidden;\n  transition:\n    transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.22s ease,\n    border-color 0.2s;\n  box-shadow: var(--sh-card), inset 3px 0 0 0 var(--cat-clr, var(--accent));\n}\n.module-item:not(.is-locked) .module-card:hover {\n  transform: translateY(-2px) scale(1.005);\n  box-shadow:\n    var(--sh-hover),\n    inset 3px 0 0 0 var(--cat-clr, var(--accent)),\n    0 0 0 1.5px var(--cat-clr, var(--accent)),\n    0 6px 24px color-mix(in srgb, var(--cat-clr, var(--accent)) 18%, transparent);\n  border-color: var(--cat-clr, var(--accent));\n}\n.module-item.is-locked .module-card {\n  opacity: 0.48;\n  cursor: not-allowed;\n  box-shadow: var(--sh-card), inset 3px 0 0 0 var(--border);\n}\n.module-item.is-active .module-card {\n  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));\n}\n.mc-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 14px;\n}\n.mc-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.mc-emoji {\n  font-size: 1.35rem;\n}\n.mc-info {\n  flex: 1;\n}\n.mc-name {\n  margin: 0 0 2px;\n  font-size: 0.94rem;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.01em;\n}\n.mc-meta {\n  font-size: 0.73rem;\n  color: var(--txt2);\n}\n.mc-arrow {\n  font-size: 1.2rem;\n  color: var(--txt2);\n  font-weight: 300;\n  transition: transform 0.22s ease;\n}\n.module-item:not(.is-locked):hover .mc-arrow {\n  transform: translateX(4px);\n}\n.mc-body {\n  padding: 10px 14px 12px;\n  border-top: 1px solid var(--border);\n}\n.mc-prof-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.mc-prof-label {\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: var(--txt3);\n  text-transform: uppercase;\n}\n.mc-stars {\n  font-size: 0.88rem;\n  letter-spacing: 1px;\n}\n.mc-prog-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.mc-bar-track {\n  flex: 1;\n  height: 5px;\n  background: var(--border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.mc-bar-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mc-pct {\n  font-size: 0.70rem;\n  font-weight: 700;\n  color: var(--txt2);\n  width: 28px;\n  text-align: right;\n}\n.mc-locked {\n  padding: 6px 14px 12px 68px;\n  font-size: 0.76rem;\n  color: var(--txt3);\n  font-style: italic;\n}\n.tf-section {\n  padding: 16px var(--page-px) 0;\n}\n.tf-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 16px;\n  background: var(--tf-bg, rgba(99,102,241,0.1));\n  border: 1px solid color-mix(in srgb, var(--tf-color, #818cf8) 30%, transparent);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: var(--sh-card);\n}\n.tf-card:hover:not(.tf-done) {\n  transform: translateY(-2px);\n  box-shadow: var(--sh-hover), 0 0 0 1px color-mix(in srgb, var(--tf-color, #818cf8) 40%, transparent);\n}\n.tf-done {\n  --tf-color: #52b788;\n  --tf-bg: rgba(82,183,136,0.07);\n  cursor: default;\n}\n.tf-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: color-mix(in srgb, var(--tf-color, #818cf8) 15%, transparent);\n  color: var(--tf-color, #818cf8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.tf-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tf-tag {\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--tf-color, #818cf8);\n  opacity: 0.8;\n}\n.tf-label {\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: var(--txt);\n  letter-spacing: -0.01em;\n}\n.tf-desc {\n  font-size: 0.74rem;\n  color: var(--txt2);\n}\n.tf-arrow {\n  color: var(--tf-color, #818cf8);\n  font-size: 0.9rem;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n}\n.tf-card:hover .tf-arrow {\n  transform: translateX(3px);\n}\n.qa-section {\n  padding: 16px var(--page-px) 0;\n}\n.qa-row {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding-bottom: 2px;\n}\n.qa-row::-webkit-scrollbar {\n  display: none;\n}\n.qa-tile {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 76px;\n  padding: 14px 8px;\n  border-radius: 14px;\n  background: var(--bg-card);\n  border: 1.5px solid var(--border);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s;\n  box-shadow: var(--sh-card);\n}\n.qa-tile:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--sh-hover);\n  border-color: color-mix(in srgb, var(--accent) 35%, var(--border));\n}\n.qa-icon {\n  font-size: 1.35rem;\n}\n.qa-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--txt2);\n  text-align: center;\n  line-height: 1.3;\n}\n.daily-challenge-section {\n  max-width: 800px;\n  margin: 0 auto 16px;\n  padding: 0 var(--page-px);\n}\n.dc-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: var(--bg-card);\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: transform 0.2s, border-color 0.2s;\n}\n.dc-card:hover:not(.dc-done) {\n  transform: translateY(-1px);\n  border-color: rgba(245, 158, 11, 0.5);\n}\n.dc-card.dc-done {\n  cursor: default;\n  background: rgba(255, 255, 255, 0.03);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.dc-card-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dc-icon-wrap {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: rgba(245, 158, 11, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #f59e0b;\n}\n.dc-card.dc-done .dc-icon-wrap {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n.dc-card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dc-label {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--txt);\n}\n.dc-sub {\n  font-size: 0.75rem;\n  color: var(--txt2);\n}\n.dc-sub strong {\n  color: #f59e0b;\n}\n.dc-card-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.dc-done-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 20px;\n  padding: 4px 10px;\n}\n.dc-streak-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #f97316;\n  background: rgba(249, 115, 22, 0.1);\n  border: 1px solid rgba(249, 115, 22, 0.2);\n  border-radius: 20px;\n  padding: 4px 10px;\n}\n.dc-arrow {\n  color: var(--txt3);\n  font-size: 0.8rem;\n}\n.card-locked-msg {\n  padding: 0 16px 16px 80px;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.stats-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background: var(--bg-card);\n  border-bottom: 1px solid var(--border);\n  padding: 12px var(--page-px);\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-val {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: var(--txt);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.stat-lbl {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--txt2);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.stat-divider {\n  width: 1px;\n  height: 32px;\n  background: var(--border);\n}\n.view-all-btn {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: 14px;\n  padding: 10px 16px;\n  border-radius: 12px;\n  border: 1.5px dashed var(--border);\n  background: transparent;\n  color: var(--txt2);\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.view-all-btn:hover {\n  border-color: var(--accent);\n  color: var(--accent);\n  background: color-mix(in srgb, var(--accent) 6%, transparent);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], { searchModal: [{
    type: ViewChild,
    args: [SearchModalComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 36 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-M4IS4AKF.js.map
