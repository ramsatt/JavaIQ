import {
  StudyPlanService
} from "./chunk-SWDQPWSJ.js";
import "./chunk-ZIBGLWLK.js";
import {
  GamificationService
} from "./chunk-7TOJMDEE.js";
import "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-KHYVC3NX.js";
import "./chunk-YU6DDDO5.js";
import {
  IonContent
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
  inject,
  setClassMetadata,
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
import "./chunk-PAXKX5KU.js";

// src/app/features/study-plan/study-plan.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function StudyPlanComponent_For_34_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2713 Done");
    \u0275\u0275elementEnd();
  }
}
function StudyPlanComponent_For_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "i", 38);
  }
  if (rf & 2) {
    const task_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", task_r2.xpReward, " XP");
  }
}
function StudyPlanComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function StudyPlanComponent_For_34_Template_div_click_0_listener() {
      const task_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigate(task_r2));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35);
    \u0275\u0275conditionalCreate(9, StudyPlanComponent_For_34_Conditional_9_Template, 2, 0, "span", 36)(10, StudyPlanComponent_For_34_Conditional_10_Template, 3, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sp-task-done", ctx_r2.plan.isTaskDone(task_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.plan.isTaskDone(task_r2.id) ? 9 : 10);
  }
}
function StudyPlanComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("sp-cal-past", d_r4 < ctx_r2.plan.currentDay)("sp-cal-today", d_r4 === ctx_r2.plan.currentDay)("sp-cal-future", d_r4 > ctx_r2.plan.currentDay);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r4, " ");
  }
}
var StudyPlanComponent = class _StudyPlanComponent {
  plan = inject(StudyPlanService);
  game = inject(GamificationService);
  router = inject(Router);
  days30 = Array.from({ length: 30 }, (_, i) => i + 1);
  goalLabel() {
    return { faang: "Crack FAANG", switch: "Switch Job", first: "First Tech Job", upskill: "Upskill" }[this.plan.goal()] ?? "Study Plan";
  }
  navigate(task) {
    if (this.plan.isTaskDone(task.id))
      return;
    this.router.navigate(task.route);
  }
  back() {
    this.router.navigate(["/dashboard"]);
  }
  static \u0275fac = function StudyPlanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudyPlanComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudyPlanComponent, selectors: [["app-study-plan"]], decls: 47, vars: 12, consts: [[1, "sp-content"], [1, "sp-wrap"], [1, "sp-header"], [1, "sp-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "sp-header-text"], [1, "sp-title"], [1, "sp-goal-chip"], [1, "sp-hero"], [1, "sp-ring-wrap"], ["viewBox", "0 0 80 80", 1, "sp-ring"], ["cx", "40", "cy", "40", "r", "33", 1, "ring-bg"], ["cx", "40", "cy", "40", "r", "33", 1, "ring-fill"], [1, "ring-inner"], [1, "ring-pct"], [1, "ring-label"], [1, "sp-hero-info"], [1, "sp-day-badge"], [1, "sp-hero-sub"], [1, "sp-level-row"], [1, "bi", "bi-lightning-charge-fill", "sp-lv-icon"], [1, "sp-xp"], [1, "sp-section-label"], [1, "sp-task-list"], [1, "sp-task-card", 3, "sp-task-done"], [1, "sp-section-label", 2, "margin-top", "24px"], [1, "sp-calendar"], [1, "sp-cal-cell", 3, "sp-cal-past", "sp-cal-today", "sp-cal-future"], [1, "sp-tip"], [1, "bi", "bi-lightbulb-fill", "sp-tip-icon"], [1, "sp-task-card", 3, "click"], [1, "sp-task-icon"], [1, "sp-task-body"], [1, "sp-task-label"], [1, "sp-task-desc"], [1, "sp-task-right"], [1, "sp-done-chip"], [1, "sp-xp-chip"], [1, "bi", "bi-chevron-right", "sp-task-arrow"], [1, "sp-cal-cell"]], template: function StudyPlanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function StudyPlanComponent_Template_button_click_3_listener() {
        return ctx.back();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, "Study Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "circle", 11)(14, "circle", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 13)(16, "span", 14);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 15);
      \u0275\u0275text(19, "Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 16)(21, "div", 17);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 18);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 19);
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275text(27);
      \u0275\u0275elementStart(28, "span", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 22);
      \u0275\u0275text(31, "TODAY'S TASKS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 23);
      \u0275\u0275repeaterCreate(33, StudyPlanComponent_For_34_Template, 11, 6, "div", 24, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 25);
      \u0275\u0275text(36, "30-DAY ROADMAP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 26);
      \u0275\u0275repeaterCreate(38, StudyPlanComponent_For_39_Template, 2, 7, "div", 27, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 28);
      \u0275\u0275element(41, "i", 29);
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Completing all 3 daily tasks earns a ");
      \u0275\u0275elementStart(44, "strong");
      \u0275\u0275text(45, "streak bonus");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " and keeps your XP growing fastest.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("\u{1F3AF} ", ctx.goalLabel());
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("stroke-dasharray", 207)("stroke-dashoffset", 207 - 207 * ctx.plan.overallProgress() / 100);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.plan.overallProgress(), "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("Day ", ctx.plan.currentDay, " / ", ctx.plan.totalDays);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.plan.tasksCompletedToday(), " of ", ctx.plan.todayTasks().length, " tasks done");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" Level ", ctx.game.level(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.game.xp(), " XP");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.plan.todayTasks());
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.days30);
    }
  }, dependencies: [IonContent], styles: ["\n\n.sp-content[_ngcontent-%COMP%] {\n  --background: var(--ion-background-color, #040c06);\n}\n.sp-wrap[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n  padding: 16px 16px 80px;\n}\n.sp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 48px 0 20px;\n}\n.sp-back[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.sp-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.sp-header-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sp-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 900;\n  color: #e4efe7;\n  letter-spacing: -0.03em;\n}\n.sp-goal-chip[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #52b788;\n  background: rgba(82, 183, 136, 0.1);\n  border: 1px solid rgba(82, 183, 136, 0.22);\n  border-radius: 20px;\n  padding: 3px 10px;\n  display: inline-block;\n}\n.sp-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.sp-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.sp-ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.07);\n  stroke-width: 7;\n}\n.ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #52b788;\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ring-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ring-pct[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #52b788;\n  line-height: 1;\n}\n.ring-label[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.sp-hero-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-day-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #d4a853;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1px solid rgba(212, 168, 83, 0.25);\n  border-radius: 20px;\n  padding: 3px 10px;\n  display: inline-block;\n}\n.sp-hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sp-level-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.sp-lv-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 0.75rem;\n}\n.sp-xp[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #d4a853;\n}\n.sp-section-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n.sp-task-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sp-task-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sp-task-card[_ngcontent-%COMP%]:hover:not(.sp-task-done) {\n  background: rgba(82, 183, 136, 0.06);\n  border-color: rgba(82, 183, 136, 0.25);\n  transform: translateY(-1px);\n}\n.sp-task-card.sp-task-done[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: default;\n  background: rgba(16, 185, 129, 0.04);\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.sp-task-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n  width: 36px;\n  text-align: center;\n}\n.sp-task-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sp-task-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e4efe7;\n}\n.sp-task-desc[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sp-task-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sp-done-chip[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.sp-xp-chip[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #d4a853;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1px solid rgba(212, 168, 83, 0.22);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.sp-task-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.75rem;\n}\n.sp-calendar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.sp-cal-cell[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.sp-cal-past[_ngcontent-%COMP%] {\n  background: rgba(82, 183, 136, 0.18);\n  color: #52b788;\n}\n.sp-cal-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 0 12px rgba(82, 183, 136, 0.3);\n}\n.sp-cal-future[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.25);\n}\n.sp-tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(212, 168, 83, 0.07);\n  border: 1px solid rgba(212, 168, 83, 0.18);\n  border-radius: 14px;\n  padding: 14px;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.5;\n}\n.sp-tip-icon[_ngcontent-%COMP%] {\n  color: #d4a853;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.sp-tip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #d4a853;\n}\n/*# sourceMappingURL=study-plan.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudyPlanComponent, [{
    type: Component,
    args: [{ selector: "app-study-plan", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent], template: `
    <ion-content class="sp-content">
      <div class="sp-wrap">

        <!-- Header -->
        <div class="sp-header">
          <button class="sp-back" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="sp-header-text">
            <h1 class="sp-title">Study Plan</h1>
            <p class="sp-goal-chip">\u{1F3AF} {{ goalLabel() }}</p>
          </div>
        </div>

        <!-- Progress ring + day counter -->
        <div class="sp-hero">
          <div class="sp-ring-wrap">
            <svg class="sp-ring" viewBox="0 0 80 80">
              <circle class="ring-bg" cx="40" cy="40" r="33"/>
              <circle class="ring-fill" cx="40" cy="40" r="33"
                [style.stroke-dasharray]="207"
                [style.stroke-dashoffset]="207 - (207 * plan.overallProgress() / 100)"/>
            </svg>
            <div class="ring-inner">
              <span class="ring-pct">{{ plan.overallProgress() }}%</span>
              <span class="ring-label">Today</span>
            </div>
          </div>

          <div class="sp-hero-info">
            <div class="sp-day-badge">Day {{ plan.currentDay }} / {{ plan.totalDays }}</div>
            <p class="sp-hero-sub">{{ plan.tasksCompletedToday() }} of {{ plan.todayTasks().length }} tasks done</p>
            <div class="sp-level-row">
              <i class="bi bi-lightning-charge-fill sp-lv-icon"></i>
              Level {{ game.level() }}
              <span class="sp-xp">{{ game.xp() }} XP</span>
            </div>
          </div>
        </div>

        <!-- Today's tasks -->
        <div class="sp-section-label">TODAY'S TASKS</div>

        <div class="sp-task-list">
          @for (task of plan.todayTasks(); track task.id) {
            <div class="sp-task-card" [class.sp-task-done]="plan.isTaskDone(task.id)"
                 (click)="navigate(task)">
              <div class="sp-task-icon">{{ task.icon }}</div>
              <div class="sp-task-body">
                <span class="sp-task-label">{{ task.label }}</span>
                <span class="sp-task-desc">{{ task.description }}</span>
              </div>
              <div class="sp-task-right">
                @if (plan.isTaskDone(task.id)) {
                  <span class="sp-done-chip">\u2713 Done</span>
                } @else {
                  <span class="sp-xp-chip">+{{ task.xpReward }} XP</span>
                  <i class="bi bi-chevron-right sp-task-arrow"></i>
                }
              </div>
            </div>
          }
        </div>

        <!-- 30-day mini-calendar -->
        <div class="sp-section-label" style="margin-top:24px">30-DAY ROADMAP</div>
        <div class="sp-calendar">
          @for (d of days30; track d) {
            <div class="sp-cal-cell"
                 [class.sp-cal-past]="d < plan.currentDay"
                 [class.sp-cal-today]="d === plan.currentDay"
                 [class.sp-cal-future]="d > plan.currentDay">
              {{ d }}
            </div>
          }
        </div>

        <!-- Tip banner -->
        <div class="sp-tip">
          <i class="bi bi-lightbulb-fill sp-tip-icon"></i>
          <span>Completing all 3 daily tasks earns a <strong>streak bonus</strong> and keeps your XP growing fastest.</span>
        </div>

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;16c3d3210e0c9df8a8d5eb7a54173ccc1129b26218f4b9f4f614c6122b542d3c;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/study-plan/study-plan.component.ts */\n.sp-content {\n  --background: var(--ion-background-color, #040c06);\n}\n.sp-wrap {\n  max-width: 560px;\n  margin: 0 auto;\n  padding: 16px 16px 80px;\n}\n.sp-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 48px 0 20px;\n}\n.sp-back {\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n  transition: all 0.18s;\n}\n.sp-back:hover {\n  background: rgba(255, 255, 255, 0.13);\n}\n.sp-header-text {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.sp-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 900;\n  color: #e4efe7;\n  letter-spacing: -0.03em;\n}\n.sp-goal-chip {\n  margin: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #52b788;\n  background: rgba(82, 183, 136, 0.1);\n  border: 1px solid rgba(82, 183, 136, 0.22);\n  border-radius: 20px;\n  padding: 3px 10px;\n  display: inline-block;\n}\n.sp-hero {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 20px;\n  padding: 20px;\n  margin-bottom: 24px;\n}\n.sp-ring-wrap {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.sp-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.07);\n  stroke-width: 7;\n}\n.ring-fill {\n  fill: none;\n  stroke: #52b788;\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ring-inner {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.ring-pct {\n  font-size: 1.1rem;\n  font-weight: 900;\n  color: #52b788;\n  line-height: 1;\n}\n.ring-label {\n  font-size: 0.52rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.sp-hero-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.sp-day-badge {\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #d4a853;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1px solid rgba(212, 168, 83, 0.25);\n  border-radius: 20px;\n  padding: 3px 10px;\n  display: inline-block;\n}\n.sp-hero-sub {\n  margin: 0;\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sp-level-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.75);\n}\n.sp-lv-icon {\n  color: #f59e0b;\n  font-size: 0.75rem;\n}\n.sp-xp {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #d4a853;\n}\n.sp-section-label {\n  font-size: 0.6rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  color: rgba(255, 255, 255, 0.3);\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n.sp-task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sp-task-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.sp-task-card:hover:not(.sp-task-done) {\n  background: rgba(82, 183, 136, 0.06);\n  border-color: rgba(82, 183, 136, 0.25);\n  transform: translateY(-1px);\n}\n.sp-task-card.sp-task-done {\n  opacity: 0.55;\n  cursor: default;\n  background: rgba(16, 185, 129, 0.04);\n  border-color: rgba(16, 185, 129, 0.2);\n}\n.sp-task-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n  width: 36px;\n  text-align: center;\n}\n.sp-task-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.sp-task-label {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e4efe7;\n}\n.sp-task-desc {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n.sp-task-right {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.sp-done-chip {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.sp-xp-chip {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #d4a853;\n  background: rgba(212, 168, 83, 0.1);\n  border: 1px solid rgba(212, 168, 83, 0.22);\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n.sp-task-arrow {\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.75rem;\n}\n.sp-calendar {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.sp-cal-cell {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.sp-cal-past {\n  background: rgba(82, 183, 136, 0.18);\n  color: #52b788;\n}\n.sp-cal-today {\n  background:\n    linear-gradient(\n      135deg,\n      #1B4332,\n      #2D6A4F);\n  color: #d4a853;\n  box-shadow: 0 0 12px rgba(82, 183, 136, 0.3);\n}\n.sp-cal-future {\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.25);\n}\n.sp-tip {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(212, 168, 83, 0.07);\n  border: 1px solid rgba(212, 168, 83, 0.18);\n  border-radius: 14px;\n  padding: 14px;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.5);\n  line-height: 1.5;\n}\n.sp-tip-icon {\n  color: #d4a853;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.sp-tip strong {\n  color: #d4a853;\n}\n/*# sourceMappingURL=study-plan.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudyPlanComponent, { className: "StudyPlanComponent", filePath: "src/app/features/study-plan/study-plan.component.ts", lineNumber: 247 });
})();
export {
  StudyPlanComponent
};
//# sourceMappingURL=chunk-QG4ONR3V.js.map
