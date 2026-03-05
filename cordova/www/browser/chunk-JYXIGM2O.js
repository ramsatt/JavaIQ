import {
  AnalyticsService
} from "./chunk-EPXUGUMG.js";
import "./chunk-BJOCJFQ2.js";
import {
  NotificationService
} from "./chunk-KHYVC3NX.js";
import {
  AuthService,
  Firestore,
  doc,
  setDoc,
  updateDoc
} from "./chunk-YU6DDDO5.js";
import {
  IonContent
} from "./chunk-PWZS7QID.js";
import {
  CommonModule,
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  Capacitor
} from "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/push-notification.service.ts
var PushNotificationService = class _PushNotificationService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  router = inject(Router);
  isNative = Capacitor.isNativePlatform();
  async requestPermissionAndRegister() {
    if (!this.isNative)
      return;
    let PushNotifications;
    try {
      const dynamicImport = new Function("specifier", "return import(specifier)");
      const m = await dynamicImport("@capacitor/push-notifications");
      PushNotifications = m.PushNotifications;
    } catch {
      return;
    }
    const { receive } = await PushNotifications.requestPermissions();
    if (receive !== "granted")
      return;
    await PushNotifications.register();
    PushNotifications.addListener("registration", async (token) => {
      await this.saveToken(token.value);
    });
    PushNotifications.addListener("pushNotificationActionPerformed", (action) => {
      const route = action.notification.data?.["route"];
      if (route) {
        this.router.navigateByUrl(route);
      }
    });
  }
  async saveToken(token) {
    const user = this.authService.user();
    if (!user)
      return;
    const ref = doc(this.firestore, `users/${user.uid}`);
    await updateDoc(ref, { fcmToken: token, notificationsEnabled: true }).catch(() => {
    });
  }
  static \u0275fac = function PushNotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PushNotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PushNotificationService, factory: _PushNotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/onboarding/onboarding.component.ts
var _forTrack0 = ($index, $item) => $item.emoji;
var _forTrack1 = ($index, $item) => $item.key;
function OnboardingComponent_Conditional_2_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pill_r1);
  }
}
function OnboardingComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h1", 12);
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275repeaterCreate(8, OnboardingComponent_Conditional_2_For_2_For_9_Template, 2, 1, "span", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275styleProp("background", "linear-gradient(160deg, " + slide_r2.gradientFrom + " 0%, " + slide_r2.gradientTo + " 100%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r2.emoji);
    \u0275\u0275advance();
    \u0275\u0275property("innerText", slide_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r2.body);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(slide_r2.pills);
  }
}
function OnboardingComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_2_For_5_Template_button_click_0_listener() {
      const \u0275$index_29_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goTo(\u0275$index_29_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_29_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ob-dot-active", ctx_r4.activeIndex() === \u0275$index_29_r4);
  }
}
function OnboardingComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.skip());
    });
    \u0275\u0275text(1, "Skip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_2_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.next());
    });
    \u0275\u0275text(3, " Next ");
    \u0275\u0275element(4, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function OnboardingComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.getStarted());
    });
    \u0275\u0275text(1, " Set My Goal ");
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
  }
}
function OnboardingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, OnboardingComponent_Conditional_2_For_2_Template, 10, 5, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275repeaterCreate(4, OnboardingComponent_Conditional_2_For_5_Template, 1, 2, "button", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275conditionalCreate(7, OnboardingComponent_Conditional_2_Conditional_7_Template, 5, 0)(8, OnboardingComponent_Conditional_2_Conditional_8_Template, 3, 0, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(-" + ctx_r4.activeIndex() * 100 + "%)");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.slides);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.slides);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.activeIndex() < ctx_r4.slides.length - 1 ? 7 : 8);
  }
}
function OnboardingComponent_Conditional_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_3_For_10_Template_button_click_0_listener() {
      const g_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.selectGoal(g_r10.key));
    });
    \u0275\u0275elementStart(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ob-goal-selected", ctx_r4.selectedGoal() === g_r10.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r10.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r10.desc);
  }
}
function OnboardingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 21)(2, "div", 11);
    \u0275\u0275text(3, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 22);
    \u0275\u0275text(5, "What's your goal?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7, "We'll tailor your daily study plan to match.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275repeaterCreate(9, OnboardingComponent_Conditional_3_For_10_Template, 7, 5, "button", 24, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "button", 26);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.complete());
    });
    \u0275\u0275text(13, " Start Learning ");
    \u0275\u0275element(14, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function OnboardingComponent_Conditional_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.complete());
    });
    \u0275\u0275text(16, " Skip for now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r4.goals);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r4.selectedGoal());
  }
}
var GOALS = [
  { key: "faang", label: "Crack FAANG", emoji: "\u{1F3AF}", desc: "Google, Meta, Amazon & top firms" },
  { key: "switch", label: "Switch Jobs", emoji: "\u{1F680}", desc: "Level up to a better opportunity" },
  { key: "first", label: "Get First Job", emoji: "\u{1F331}", desc: "Land your first developer role" },
  { key: "upskill", label: "Upskill", emoji: "\u{1F4C8}", desc: "Grow in your current position" }
];
var SLIDES = [
  {
    emoji: "\u2615",
    title: "Your Java\nInterview Coach",
    accent: "Interview Coach",
    body: "Structured content built for Java developers \u2014 from core concepts to system design.",
    pills: ["Core Java", "Spring Boot", "Microservices"],
    gradientFrom: "#0f172a",
    gradientTo: "#1e293b"
  },
  {
    emoji: "\u{1F4DA}",
    title: "Learn with\nStructured Courses",
    accent: "Structured Courses",
    body: "Deep-dive tutorials with chapter breakdowns, code examples, and real interview tips.",
    pills: ["3 Courses", "100+ Chapters", "Code Examples"],
    gradientFrom: "#0f1a2e",
    gradientTo: "#0f2744"
  },
  {
    emoji: "\u26A1",
    title: "Practice &\nBuild Confidence",
    accent: "Build Confidence",
    body: "500+ interview questions, LeetCode problems, and timed assessments to sharpen your skills.",
    pills: ["500+ Questions", "LeetCode", "Timed Quizzes"],
    gradientFrom: "#0f1f17",
    gradientTo: "#0a2e1a"
  },
  {
    emoji: "\u{1F3C6}",
    title: "Compete &\nTrack Progress",
    accent: "Track Progress",
    body: "Earn XP, climb the leaderboard, and get certificates to share on LinkedIn.",
    pills: ["XP & Levels", "Leaderboard", "Certificates"],
    gradientFrom: "#1a0f2e",
    gradientTo: "#2a1060"
  }
];
var OnboardingComponent = class _OnboardingComponent {
  router = inject(Router);
  analytics = inject(AnalyticsService);
  pushService = inject(PushNotificationService);
  notifSvc = inject(NotificationService);
  firestore = inject(Firestore);
  auth = inject(AuthService);
  slides = SLIDES;
  goals = GOALS;
  activeIndex = signal(0, ...ngDevMode ? [{ debugName: "activeIndex" }] : []);
  showGoalStep = signal(false, ...ngDevMode ? [{ debugName: "showGoalStep" }] : []);
  selectedGoal = signal("", ...ngDevMode ? [{ debugName: "selectedGoal" }] : []);
  constructor() {
    this.analytics.onboardingStarted();
  }
  goTo(i) {
    this.activeIndex.set(i);
  }
  next() {
    if (this.activeIndex() < this.slides.length - 1) {
      this.activeIndex.update((i) => i + 1);
    }
  }
  skip() {
    this.analytics.onboardingSkipped(this.activeIndex());
    this.finish();
  }
  getStarted() {
    this.showGoalStep.set(true);
  }
  selectGoal(key) {
    this.selectedGoal.set(key);
  }
  async complete() {
    if (this.selectedGoal()) {
      localStorage.setItem("user_goal", this.selectedGoal());
      const user = this.auth.user();
      if (user) {
        const ref = doc(this.firestore, `users/${user.uid}`);
        await setDoc(ref, { goal: this.selectedGoal(), profileSetup: true }, { merge: true });
      }
    }
    this.analytics.onboardingCompleted();
    this.finish();
  }
  async finish() {
    localStorage.setItem("onboarding_done", "1");
    await this.pushService.requestPermissionAndRegister();
    await this.notifSvc.requestPermissionAndSchedule(0);
    this.router.navigate(["/dashboard"], { replaceUrl: true });
  }
  static \u0275fac = function OnboardingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OnboardingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingComponent, selectors: [["app-onboarding"]], decls: 4, vars: 2, consts: [[1, "ob-content", 3, "scrollY"], [1, "ob-wrap"], [1, "ob-goal-wrap"], [1, "ob-slides"], [1, "ob-slide", 3, "background"], [1, "ob-dots"], [1, "ob-dot", 3, "ob-dot-active"], [1, "ob-actions"], [1, "ob-btn", "ob-btn-primary", "ob-btn-full"], [1, "ob-slide"], [1, "ob-slide-inner"], [1, "ob-emoji"], [1, "ob-title", 3, "innerText"], [1, "ob-body"], [1, "ob-pills"], [1, "ob-pill"], [1, "ob-dot", 3, "click"], [1, "ob-btn", "ob-btn-ghost", 3, "click"], [1, "ob-btn", "ob-btn-primary", 3, "click"], [1, "fa-solid", "fa-arrow-right"], [1, "ob-btn", "ob-btn-primary", "ob-btn-full", 3, "click"], [1, "ob-goal-header"], [1, "ob-title"], [1, "ob-goal-grid"], [1, "ob-goal-card", 3, "ob-goal-selected"], [1, "ob-actions", "ob-actions-goal"], [1, "ob-btn", "ob-btn-primary", "ob-btn-full", 3, "click", "disabled"], [1, "fa-solid", "fa-rocket"], [1, "ob-btn", "ob-btn-ghost", "ob-btn-full", 3, "click"], [1, "ob-goal-card", 3, "click"], [1, "ob-goal-emoji"], [1, "ob-goal-label"], [1, "ob-goal-desc"]], template: function OnboardingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, OnboardingComponent_Conditional_2_Template, 9, 3)(3, OnboardingComponent_Conditional_3_Template, 17, 1, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("scrollY", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.showGoalStep() ? 2 : 3);
    }
  }, dependencies: [CommonModule, IonContent], styles: ["\n\n.ob-content[_ngcontent-%COMP%] {\n  --background: #0f172a;\n}\n.ob-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.ob-slides[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 400%;\n  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.ob-slide[_ngcontent-%COMP%] {\n  width: 25%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px 24px;\n}\n.ob-slide-inner[_ngcontent-%COMP%] {\n  max-width: 340px;\n  text-align: center;\n}\n.ob-emoji[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 28px;\n  display: block;\n  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4));\n}\n.ob-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.04em;\n  line-height: 1.15;\n  margin: 0 0 16px;\n  white-space: pre-line;\n}\n.ob-body[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  line-height: 1.7;\n  margin: 0 0 28px;\n}\n.ob-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n}\n.ob-pill[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #cbd5e1;\n  letter-spacing: 0.02em;\n}\n.ob-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px 0 8px;\n}\n.ob-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  padding: 0;\n}\n.ob-dot-active[_ngcontent-%COMP%] {\n  width: 24px;\n  border-radius: 4px;\n  background: #10b981;\n}\n.ob-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px 24px 48px;\n}\n.ob-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 20px;\n  border-radius: 14px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.ob-btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: #64748b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.ob-btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);\n}\n.ob-btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 28px rgba(16, 185, 129, 0.45);\n  transform: translateY(-1px);\n}\n.ob-btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: none;\n}\n.ob-goal-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 48px 24px 0;\n  background:\n    linear-gradient(\n      160deg,\n      #0f172a 0%,\n      #0f1f17 100%);\n}\n.ob-goal-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.ob-goal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  flex: 1;\n}\n.ob-goal-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 20px 12px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n.ob-goal-card[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.ob-goal-selected[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.ob-goal-emoji[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.ob-goal-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.ob-goal-desc[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.ob-actions-goal[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 48px;\n}\n.ob-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  pointer-events: none;\n}\n/*# sourceMappingURL=onboarding.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnboardingComponent, [{
    type: Component,
    args: [{ selector: "app-onboarding", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, IonContent], template: `
    <ion-content class="ob-content" [scrollY]="false">
      <div class="ob-wrap">

        @if (!showGoalStep()) {
          <!-- \u2500\u2500 Intro Slides \u2500\u2500 -->
          <div class="ob-slides" [style.transform]="'translateX(-' + (activeIndex() * 100) + '%)'">
            @for (slide of slides; track slide.emoji; let i = $index) {
              <div class="ob-slide" [style.background]="'linear-gradient(160deg, ' + slide.gradientFrom + ' 0%, ' + slide.gradientTo + ' 100%)'">
                <div class="ob-slide-inner">
                  <div class="ob-emoji">{{ slide.emoji }}</div>
                  <h1 class="ob-title" [innerText]="slide.title"></h1>
                  <p class="ob-body">{{ slide.body }}</p>
                  <div class="ob-pills">
                    @for (pill of slide.pills; track pill) {
                      <span class="ob-pill">{{ pill }}</span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Dots -->
          <div class="ob-dots">
            @for (slide of slides; track slide.emoji; let i = $index) {
              <button class="ob-dot" [class.ob-dot-active]="activeIndex() === i" (click)="goTo(i)"></button>
            }
          </div>

          <!-- Buttons -->
          <div class="ob-actions">
            @if (activeIndex() < slides.length - 1) {
              <button class="ob-btn ob-btn-ghost" (click)="skip()">Skip</button>
              <button class="ob-btn ob-btn-primary" (click)="next()">
                Next <i class="fa-solid fa-arrow-right"></i>
              </button>
            } @else {
              <button class="ob-btn ob-btn-primary ob-btn-full" (click)="getStarted()">
                Set My Goal <i class="fa-solid fa-arrow-right"></i>
              </button>
            }
          </div>

        } @else {
          <!-- \u2500\u2500 Goal Selection Step \u2500\u2500 -->
          <div class="ob-goal-wrap">
            <div class="ob-goal-header">
              <div class="ob-emoji">\u{1F3AF}</div>
              <h1 class="ob-title">What's your goal?</h1>
              <p class="ob-body">We'll tailor your daily study plan to match.</p>
            </div>

            <div class="ob-goal-grid">
              @for (g of goals; track g.key) {
                <button class="ob-goal-card" [class.ob-goal-selected]="selectedGoal() === g.key"
                  (click)="selectGoal(g.key)">
                  <span class="ob-goal-emoji">{{ g.emoji }}</span>
                  <span class="ob-goal-label">{{ g.label }}</span>
                  <span class="ob-goal-desc">{{ g.desc }}</span>
                </button>
              }
            </div>

            <div class="ob-actions ob-actions-goal">
              <button class="ob-btn ob-btn-primary ob-btn-full"
                [disabled]="!selectedGoal()" (click)="complete()">
                Start Learning <i class="fa-solid fa-rocket"></i>
              </button>
              <button class="ob-btn ob-btn-ghost ob-btn-full" (click)="complete()">
                Skip for now
              </button>
            </div>
          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;98a45fcf86a780587e71fd0d0a2ce6247ae550537a1c3658eea2ef64ddb2a1ea;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/onboarding/onboarding.component.ts */\n.ob-content {\n  --background: #0f172a;\n}\n.ob-wrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.ob-slides {\n  display: flex;\n  flex: 1;\n  width: 400%;\n  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n.ob-slide {\n  width: 25%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 32px 24px;\n}\n.ob-slide-inner {\n  max-width: 340px;\n  text-align: center;\n}\n.ob-emoji {\n  font-size: 4rem;\n  margin-bottom: 28px;\n  display: block;\n  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4));\n}\n.ob-title {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.04em;\n  line-height: 1.15;\n  margin: 0 0 16px;\n  white-space: pre-line;\n}\n.ob-body {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  line-height: 1.7;\n  margin: 0 0 28px;\n}\n.ob-pills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n}\n.ob-pill {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #cbd5e1;\n  letter-spacing: 0.02em;\n}\n.ob-dots {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px 0 8px;\n}\n.ob-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  padding: 0;\n}\n.ob-dot-active {\n  width: 24px;\n  border-radius: 4px;\n  background: #10b981;\n}\n.ob-actions {\n  display: flex;\n  gap: 12px;\n  padding: 16px 24px 48px;\n}\n.ob-btn {\n  flex: 1;\n  padding: 14px 20px;\n  border-radius: 14px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.ob-btn-ghost {\n  background: rgba(255, 255, 255, 0.06);\n  color: #64748b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.ob-btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);\n}\n.ob-btn-primary:hover {\n  box-shadow: 0 6px 28px rgba(16, 185, 129, 0.45);\n  transform: translateY(-1px);\n}\n.ob-btn-full {\n  width: 100%;\n  flex: none;\n}\n.ob-goal-wrap {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 48px 24px 0;\n  background:\n    linear-gradient(\n      160deg,\n      #0f172a 0%,\n      #0f1f17 100%);\n}\n.ob-goal-header {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.ob-goal-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  flex: 1;\n}\n.ob-goal-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 20px 12px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1.5px solid rgba(255, 255, 255, 0.08);\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n.ob-goal-card:hover {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.ob-goal-selected {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: #10b981 !important;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.ob-goal-emoji {\n  font-size: 1.8rem;\n}\n.ob-goal-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.ob-goal-desc {\n  font-size: 0.68rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.ob-actions-goal {\n  flex-direction: column;\n  padding-top: 20px;\n  padding-bottom: 48px;\n}\n.ob-btn[disabled] {\n  opacity: 0.4;\n  pointer-events: none;\n}\n/*# sourceMappingURL=onboarding.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingComponent, { className: "OnboardingComponent", filePath: "src/app/onboarding/onboarding.component.ts", lineNumber: 344 });
})();
export {
  OnboardingComponent
};
//# sourceMappingURL=chunk-JYXIGM2O.js.map
