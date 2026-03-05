import {
  AuthService,
  Firestore,
  doc,
  serverTimestamp,
  setDoc
} from "./chunk-YU6DDDO5.js";
import {
  IonContent
} from "./chunk-PWZS7QID.js";
import {
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/profile-setup/profile-setup.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfileSetupComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ProfileSetupComponent_For_17_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedGoal.set(g_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("goal-active", ctx_r2.selectedGoal() === g_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.description);
  }
}
function ProfileSetupComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ProfileSetupComponent_For_23_Template_button_click_0_listener() {
      const y_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedYoe.set(y_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("yoe-active", ctx_r2.selectedYoe() === y_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", y_r5, " ");
  }
}
function ProfileSetupComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function ProfileSetupComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
var GOALS = [
  { id: "crack-faang", label: "Crack FAANG", emoji: "\u{1F680}", description: "Targeting top-tier companies" },
  { id: "switch-job", label: "Switch Job", emoji: "\u{1F4BC}", description: "Looking for a better opportunity" },
  { id: "fresher", label: "First Job", emoji: "\u{1F393}", description: "New to the industry" },
  { id: "upskill", label: "Upskill", emoji: "\u{1F4C8}", description: "Grow in current role" }
];
var YOE_OPTIONS = ["< 1 year", "1\u20132 years", "3\u20135 years", "5\u20138 years", "8+ years"];
var ProfileSetupComponent = class _ProfileSetupComponent {
  router = inject(Router);
  firestore = inject(Firestore);
  authService = inject(AuthService);
  goals = GOALS;
  yoeOptions = YOE_OPTIONS;
  selectedGoal = signal("", ...ngDevMode ? [{ debugName: "selectedGoal" }] : []);
  selectedYoe = signal("", ...ngDevMode ? [{ debugName: "selectedYoe" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  userName = signal(this.authService.user()?.displayName?.split(" ")[0] ?? "there", ...ngDevMode ? [{ debugName: "userName" }] : []);
  canSubmit = () => !!this.selectedGoal() && !!this.selectedYoe();
  async submit() {
    if (!this.canSubmit())
      return;
    this.saving.set(true);
    const user = this.authService.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await setDoc(ref, {
        goal: this.selectedGoal(),
        yearsOfExperience: this.selectedYoe(),
        profileSetup: true,
        displayName: user.displayName || "Anonymous",
        lastUpdated: serverTimestamp()
      }, { merge: true });
    }
    this.saving.set(false);
    this.router.navigate(["/tutorials"], { replaceUrl: true });
  }
  skip() {
    this.router.navigate(["/tutorials"], { replaceUrl: true });
  }
  static \u0275fac = function ProfileSetupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileSetupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileSetupComponent, selectors: [["app-profile-setup"]], decls: 30, vars: 4, consts: [[1, "ps-content", 3, "scrollY"], [1, "ps-wrap"], [1, "ps-header"], [1, "ps-emoji"], [1, "ps-title"], [1, "ps-name"], [1, "ps-sub"], [1, "ps-section"], [1, "ps-label"], [1, "goal-grid"], [1, "goal-card", 3, "goal-active"], [1, "yoe-row"], [1, "yoe-chip", 3, "yoe-active"], [1, "ps-submit", 3, "click", "disabled"], [1, "ps-spinner"], [1, "fa-solid", "fa-check"], [1, "ps-skip", 3, "click"], [1, "goal-card", 3, "click"], [1, "goal-emoji"], [1, "goal-label"], [1, "goal-desc"], [1, "yoe-chip", 3, "click"]], template: function ProfileSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u{1F44B}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Welcome, ");
      \u0275\u0275elementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, "!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, "Tell us a bit about yourself so we can personalise your experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14, "What's your primary goal?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275repeaterCreate(16, ProfileSetupComponent_For_17_Template, 7, 5, "button", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 7)(19, "label", 8);
      \u0275\u0275text(20, "Years of Java experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275repeaterCreate(22, ProfileSetupComponent_For_23_Template, 2, 3, "button", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 13);
      \u0275\u0275listener("click", function ProfileSetupComponent_Template_button_click_24_listener() {
        return ctx.submit();
      });
      \u0275\u0275conditionalCreate(25, ProfileSetupComponent_Conditional_25_Template, 1, 0, "span", 14)(26, ProfileSetupComponent_Conditional_26_Template, 1, 0, "i", 15);
      \u0275\u0275text(27, " Let's Go ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 16);
      \u0275\u0275listener("click", function ProfileSetupComponent_Template_button_click_28_listener() {
        return ctx.skip();
      });
      \u0275\u0275text(29, "Skip for now");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("scrollY", true);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.goals);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.yoeOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSubmit());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.saving() ? 25 : 26);
    }
  }, dependencies: [IonContent], styles: ["\n\n.ps-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.ps-wrap[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 48px 24px 80px;\n}\n.ps-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.ps-emoji[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.ps-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 8px;\n}\n.ps-name[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.ps-sub[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.ps-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.ps-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n  margin-bottom: 12px;\n}\n.goal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.goal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 18px 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: inherit;\n}\n.goal-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.goal-active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1) !important;\n  border-color: rgba(16, 185, 129, 0.35) !important;\n}\n.goal-emoji[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-bottom: 4px;\n}\n.goal-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.goal-desc[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #64748b;\n  text-align: center;\n  line-height: 1.4;\n}\n.yoe-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.yoe-chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.yoe-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.yoe-active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.12) !important;\n  border-color: rgba(99, 102, 241, 0.35) !important;\n  color: #818cf8 !important;\n}\n.ps-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);\n  margin-bottom: 12px;\n}\n.ps-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.ps-submit[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 6px 28px rgba(16, 185, 129, 0.4);\n  transform: translateY(-1px);\n}\n.ps-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ps-skip[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background: none;\n  border: none;\n  color: #475569;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.ps-skip[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n/*# sourceMappingURL=profile-setup.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileSetupComponent, [{
    type: Component,
    args: [{ selector: "app-profile-setup", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent], template: `
    <ion-content class="ps-content" [scrollY]="true">
      <div class="ps-wrap">

        <div class="ps-header">
          <div class="ps-emoji">\u{1F44B}</div>
          <h1 class="ps-title">Welcome, <span class="ps-name">{{ userName() }}</span>!</h1>
          <p class="ps-sub">Tell us a bit about yourself so we can personalise your experience</p>
        </div>

        <!-- Goal -->
        <div class="ps-section">
          <label class="ps-label">What's your primary goal?</label>
          <div class="goal-grid">
            @for (g of goals; track g.id) {
              <button class="goal-card" [class.goal-active]="selectedGoal() === g.id" (click)="selectedGoal.set(g.id)">
                <span class="goal-emoji">{{ g.emoji }}</span>
                <span class="goal-label">{{ g.label }}</span>
                <span class="goal-desc">{{ g.description }}</span>
              </button>
            }
          </div>
        </div>

        <!-- YOE -->
        <div class="ps-section">
          <label class="ps-label">Years of Java experience</label>
          <div class="yoe-row">
            @for (y of yoeOptions; track y) {
              <button class="yoe-chip" [class.yoe-active]="selectedYoe() === y" (click)="selectedYoe.set(y)">
                {{ y }}
              </button>
            }
          </div>
        </div>

        <!-- CTA -->
        <button class="ps-submit" [disabled]="!canSubmit()" (click)="submit()">
          @if (saving()) {
            <span class="ps-spinner"></span>
          } @else {
            <i class="fa-solid fa-check"></i>
          }
          Let's Go
        </button>

        <button class="ps-skip" (click)="skip()">Skip for now</button>

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;7fb3d1f2e1c547547b05cea31ce169cb290865030a1a73a7829066af77580ab6;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/profile-setup/profile-setup.component.ts */\n.ps-content {\n  --background: #0b1120;\n}\n.ps-wrap {\n  max-width: 480px;\n  margin: 0 auto;\n  padding: 48px 24px 80px;\n}\n.ps-header {\n  text-align: center;\n  margin-bottom: 36px;\n}\n.ps-emoji {\n  font-size: 3rem;\n  margin-bottom: 16px;\n}\n.ps-title {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 8px;\n}\n.ps-name {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #34d399);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.ps-sub {\n  font-size: 0.82rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n.ps-section {\n  margin-bottom: 28px;\n}\n.ps-label {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #475569;\n  margin-bottom: 12px;\n}\n.goal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.goal-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  padding: 18px 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: inherit;\n}\n.goal-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n.goal-active {\n  background: rgba(16, 185, 129, 0.1) !important;\n  border-color: rgba(16, 185, 129, 0.35) !important;\n}\n.goal-emoji {\n  font-size: 1.8rem;\n  margin-bottom: 4px;\n}\n.goal-label {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.goal-desc {\n  font-size: 0.62rem;\n  color: #64748b;\n  text-align: center;\n  line-height: 1.4;\n}\n.yoe-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.yoe-chip {\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.yoe-chip:hover {\n  background: rgba(255, 255, 255, 0.07);\n}\n.yoe-active {\n  background: rgba(99, 102, 241, 0.12) !important;\n  border-color: rgba(99, 102, 241, 0.35) !important;\n  color: #818cf8 !important;\n}\n.ps-submit {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  border: none;\n  border-radius: 14px;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);\n  margin-bottom: 12px;\n}\n.ps-submit:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.ps-submit:not(:disabled):hover {\n  box-shadow: 0 6px 28px rgba(16, 185, 129, 0.4);\n  transform: translateY(-1px);\n}\n.ps-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ps-skip {\n  width: 100%;\n  padding: 12px;\n  background: none;\n  border: none;\n  color: #475569;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.ps-skip:hover {\n  color: #64748b;\n}\n/*# sourceMappingURL=profile-setup.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileSetupComponent, { className: "ProfileSetupComponent", filePath: "src/app/profile-setup/profile-setup.component.ts", lineNumber: 185 });
})();
export {
  ProfileSetupComponent
};
//# sourceMappingURL=chunk-IUCFT6KR.js.map
