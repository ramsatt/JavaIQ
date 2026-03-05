import {
  ThemeService
} from "./chunk-I4GECOKO.js";
import {
  AlertService
} from "./chunk-ZI6SYS5B.js";
import {
  NotificationService
} from "./chunk-KHYVC3NX.js";
import {
  AuthService,
  Firestore,
  doc,
  setDoc
} from "./chunk-YU6DDDO5.js";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonToolbar
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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

// src/app/features/settings/settings.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.hour;
function SettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 34)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (user_r1.displayName == null ? null : user_r1.displayName.charAt(0)) ?? "?", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.displayName || "Anonymous");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
function SettingsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGoalPicker.set(true));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 28)(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "Tap to change your goal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.currentGoalEmoji());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.currentGoalLabel());
  }
}
function SettingsComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_29_For_2_Template_button_click_0_listener() {
      const g_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setGoal(g_r5.key));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("goal-opt-sel", ctx_r2.goalKey() === g_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5.emoji);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5.label);
  }
}
function SettingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, SettingsComponent_Conditional_29_For_2_Template, 5, 4, "button", 40, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.goals);
  }
}
function SettingsComponent_Conditional_45_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_45_For_9_Template_button_click_0_listener() {
      const t_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setReminderHour(t_r7.hour));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("time-chip-sel", ctx_r2.notifSvc.reminderHour() === t_r7.hour);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r7.label, " ");
  }
}
function SettingsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
    \u0275\u0275elementStart(1, "div", 30)(2, "div", 13)(3, "div", 14);
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, "Reminder Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 44);
    \u0275\u0275repeaterCreate(8, SettingsComponent_Conditional_45_For_9_Template, 2, 3, "button", 45, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.reminderTimes);
  }
}
function SettingsComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "button", 47);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_74_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmLogout());
    });
    \u0275\u0275element(3, "i", 48);
    \u0275\u0275text(4, " Sign Out ");
    \u0275\u0275elementEnd()()();
  }
}
var GOALS = [
  { key: "faang", label: "Crack FAANG", emoji: "\u{1F3AF}" },
  { key: "switch", label: "Switch Jobs", emoji: "\u{1F680}" },
  { key: "first", label: "Get First Job", emoji: "\u{1F331}" },
  { key: "upskill", label: "Upskill", emoji: "\u{1F4C8}" }
];
var REMINDER_TIMES = [
  { hour: 8, label: "8:00 AM" },
  { hour: 12, label: "12:00 PM" },
  { hour: 18, label: "6:00 PM" },
  { hour: 21, label: "9:00 PM" }
];
var SettingsComponent = class _SettingsComponent {
  themeService = inject(ThemeService);
  auth = inject(AuthService);
  notifSvc = inject(NotificationService);
  alertService = inject(AlertService);
  router = inject(Router);
  firestore = inject(Firestore);
  goals = GOALS;
  reminderTimes = REMINDER_TIMES;
  goalKey = signal(localStorage.getItem("user_goal") ?? "", ...ngDevMode ? [{ debugName: "goalKey" }] : []);
  showGoalPicker = signal(false, ...ngDevMode ? [{ debugName: "showGoalPicker" }] : []);
  currentGoalLabel = computed(() => GOALS.find((g) => g.key === this.goalKey())?.label ?? "Set a goal", ...ngDevMode ? [{ debugName: "currentGoalLabel" }] : []);
  currentGoalEmoji = computed(() => GOALS.find((g) => g.key === this.goalKey())?.emoji ?? "\u{1F3AF}", ...ngDevMode ? [{ debugName: "currentGoalEmoji" }] : []);
  ngOnInit() {
  }
  toggleTheme() {
    this.themeService.toggle();
  }
  async toggleNotifications() {
    await this.notifSvc.toggle(!this.notifSvc.notificationsEnabled());
  }
  async setReminderHour(hour) {
    await this.notifSvc.setReminderHour(hour);
  }
  async setGoal(key) {
    this.goalKey.set(key);
    this.showGoalPicker.set(false);
    localStorage.setItem("user_goal", key);
    const user = this.auth.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await setDoc(ref, { goal: key }, { merge: true });
    }
  }
  openPrivacyPolicy() {
    window.open("https://javaiq.app/privacy", "_blank", "noopener,noreferrer");
  }
  openAbout() {
    this.router.navigate(["/about"]);
  }
  async confirmLogout() {
    const confirmed = await this.alertService.showAlert({
      title: "Sign Out",
      message: "Are you sure you want to sign out? Your progress is saved to the cloud.",
      confirmText: "Sign Out",
      cancelText: "Cancel",
      showCancel: true,
      type: "warning"
    });
    if (confirmed) {
      await this.auth.logout();
      this.router.navigate(["/dashboard"], { replaceUrl: true });
    }
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 75, vars: 8, consts: [["translucent", "true", 1, "ion-no-border"], [1, "set-toolbar"], ["slot", "start"], ["color", "light"], [1, "set-content"], [1, "set-body"], [1, "set-header"], [1, "set-title"], [1, "set-sub"], [1, "set-section"], [1, "set-section-label"], [1, "set-card"], [1, "set-row", 3, "click"], [1, "set-row-left"], [1, "set-icon-wrap", 2, "background", "rgba(99,102,241,0.12)"], [1, "fa-solid", "fa-moon", 2, "color", "#818cf8"], [1, "set-row-label"], [1, "toggle-track", 3, "click"], [1, "toggle-thumb"], [1, "set-row"], [1, "goal-picker"], [1, "set-icon-wrap", 2, "background", "rgba(16,185,129,0.12)"], [1, "fa-solid", "fa-bell", 2, "color", "#10b981"], [1, "set-row-sub"], [1, "set-icon-wrap", 2, "background", "rgba(59,130,246,0.12)"], [1, "fa-solid", "fa-shield-halved", 2, "color", "#60a5fa"], [1, "fa-solid", "fa-chevron-right", "set-chevron"], [1, "set-divider"], [1, "set-icon-wrap", 2, "background", "rgba(245,158,11,0.12)"], [1, "fa-solid", "fa-circle-info", 2, "color", "#f59e0b"], [1, "set-row", "set-version-row"], [1, "set-icon-wrap", 2, "background", "rgba(100,116,139,0.12)"], [1, "fa-solid", "fa-code-branch", 2, "color", "#94a3b8"], [1, "set-version-val"], [1, "account-row"], [1, "account-avatar"], [1, "account-info"], [1, "account-name"], [1, "account-email"], [2, "font-size", "1rem"], [1, "goal-opt", 3, "goal-opt-sel"], [1, "goal-opt", 3, "click"], [1, "goal-opt-label"], [1, "fa-solid", "fa-clock", 2, "color", "#818cf8"], [1, "time-picker-row"], [1, "time-chip", 3, "time-chip-sel"], [1, "time-chip", 3, "click"], [1, "set-logout-btn", 3, "click"], [1, "fa-solid", "fa-arrow-right-from-bracket"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-menu-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      \u0275\u0275text(8, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, "Preferences & account");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, SettingsComponent_Conditional_11_Template, 12, 3, "div", 9);
      \u0275\u0275elementStart(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14, "Appearance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_16_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 16);
      \u0275\u0275text(21, "Dark Mode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 17);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_22_listener($event) {
        $event.stopPropagation();
        return ctx.toggleTheme();
      });
      \u0275\u0275element(23, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 9)(25, "span", 10);
      \u0275\u0275text(26, "Learning Goal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11);
      \u0275\u0275conditionalCreate(28, SettingsComponent_Conditional_28_Template, 11, 2, "div", 19)(29, SettingsComponent_Conditional_29_Template, 3, 0, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 9)(31, "span", 10);
      \u0275\u0275text(32, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 11)(34, "div", 12);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_34_listener() {
        return ctx.toggleNotifications();
      });
      \u0275\u0275elementStart(35, "div", 13)(36, "div", 21);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div")(39, "span", 16);
      \u0275\u0275text(40, "Daily Reminders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 23);
      \u0275\u0275text(42, "Get nudged to keep your streak");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 17);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_43_listener($event) {
        $event.stopPropagation();
        return ctx.toggleNotifications();
      });
      \u0275\u0275element(44, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(45, SettingsComponent_Conditional_45_Template, 10, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 9)(47, "span", 10);
      \u0275\u0275text(48, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 11)(50, "div", 12);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_50_listener() {
        return ctx.openPrivacyPolicy();
      });
      \u0275\u0275elementStart(51, "div", 13)(52, "div", 24);
      \u0275\u0275element(53, "i", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 16);
      \u0275\u0275text(55, "Privacy Policy");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "div", 27);
      \u0275\u0275elementStart(58, "div", 12);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_58_listener() {
        return ctx.openAbout();
      });
      \u0275\u0275elementStart(59, "div", 13)(60, "div", 28);
      \u0275\u0275element(61, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 16);
      \u0275\u0275text(63, "About JavaIQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(64, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "div", 27);
      \u0275\u0275elementStart(66, "div", 30)(67, "div", 13)(68, "div", 31);
      \u0275\u0275element(69, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 16);
      \u0275\u0275text(71, "Version");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "span", 33);
      \u0275\u0275text(73, "1.3.0");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(74, SettingsComponent_Conditional_74_Template, 5, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(11);
      \u0275\u0275conditional((tmp_0_0 = ctx.auth.user()) ? 11 : -1, tmp_0_0);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("toggle-on", ctx.themeService.theme() === "dark");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.showGoalPicker() ? 28 : 29);
      \u0275\u0275advance(15);
      \u0275\u0275classProp("toggle-on", ctx.notifSvc.notificationsEnabled());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.notifSvc.notificationsEnabled() ? 45 : -1);
      \u0275\u0275advance(29);
      \u0275\u0275conditional(ctx.auth.user() ? 74 : -1);
    }
  }, dependencies: [CommonModule, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], styles: ["\n\n.set-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.set-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.set-body[_ngcontent-%COMP%] {\n  padding: 8px 16px 80px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.set-header[_ngcontent-%COMP%] {\n  padding: 8px 4px 24px;\n}\n.set-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.set-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.set-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.set-section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n  margin-bottom: 8px;\n  padding-left: 4px;\n}\n.set-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.account-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n}\n.account-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.account-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.account-email[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.set-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.set-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.025);\n}\n.set-version-row[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.set-version-row[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.set-row-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.set-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.set-row-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #e2e8f0;\n}\n.set-row-sub[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #64748b;\n  display: block;\n  margin-top: 1px;\n}\n.set-chevron[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #475569;\n}\n.set-version-val[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #475569;\n}\n.set-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.05);\n  margin: 0 16px;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 26px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.1);\n  position: relative;\n  cursor: pointer;\n  transition: background 0.25s;\n  flex-shrink: 0;\n}\n.toggle-on[_ngcontent-%COMP%] {\n  background: #10b981 !important;\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.25s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.toggle-on[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(18px);\n}\n.goal-picker[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px;\n}\n.goal-opt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 8px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  cursor: pointer;\n  transition: all 0.18s;\n  font-size: 1.2rem;\n}\n.goal-opt[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.goal-opt-sel[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: #10b981 !important;\n}\n.goal-opt-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.time-picker-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 0 16px 14px;\n}\n.time-chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.time-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n}\n.time-chip-sel[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.set-logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background: rgba(239, 68, 68, 0.08);\n  border: none;\n  color: #f87171;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-radius: 16px;\n}\n.set-logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.14);\n}\n/*# sourceMappingURL=settings.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton], template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="set-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="set-content">
      <div class="set-body">

        <!-- Header -->
        <div class="set-header">
          <h1 class="set-title">Settings</h1>
          <p class="set-sub">Preferences & account</p>
        </div>

        <!-- Account Section -->
        @if (auth.user(); as user) {
          <div class="set-section">
            <span class="set-section-label">Account</span>
            <div class="set-card">
              <div class="account-row">
                <div class="account-avatar">
                  {{ user.displayName?.charAt(0) ?? '?' }}
                </div>
                <div class="account-info">
                  <span class="account-name">{{ user.displayName || 'Anonymous' }}</span>
                  <span class="account-email">{{ user.email }}</span>
                </div>
              </div>
            </div>
          </div>
        }

        <!-- Appearance -->
        <div class="set-section">
          <span class="set-section-label">Appearance</span>
          <div class="set-card">
            <div class="set-row" (click)="toggleTheme()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(99,102,241,0.12)">
                  <i class="fa-solid fa-moon" style="color:#818cf8"></i>
                </div>
                <span class="set-row-label">Dark Mode</span>
              </div>
              <div class="toggle-track" [class.toggle-on]="themeService.theme() === 'dark'" (click)="$event.stopPropagation(); toggleTheme()">
                <div class="toggle-thumb"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Goal -->
        <div class="set-section">
          <span class="set-section-label">Learning Goal</span>
          <div class="set-card">
            @if (!showGoalPicker()) {
              <div class="set-row" (click)="showGoalPicker.set(true)">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(245,158,11,0.12)">
                    <span style="font-size:1rem">{{ currentGoalEmoji() }}</span>
                  </div>
                  <div>
                    <span class="set-row-label">{{ currentGoalLabel() }}</span>
                    <span class="set-row-sub">Tap to change your goal</span>
                  </div>
                </div>
                <i class="fa-solid fa-chevron-right set-chevron"></i>
              </div>
            } @else {
              <div class="goal-picker">
                @for (g of goals; track g.key) {
                  <button class="goal-opt" [class.goal-opt-sel]="goalKey() === g.key" (click)="setGoal(g.key)">
                    <span>{{ g.emoji }}</span>
                    <span class="goal-opt-label">{{ g.label }}</span>
                  </button>
                }
              </div>
            }
          </div>
        </div>

        <!-- Notifications -->
        <div class="set-section">
          <span class="set-section-label">Notifications</span>
          <div class="set-card">
            <div class="set-row" (click)="toggleNotifications()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(16,185,129,0.12)">
                  <i class="fa-solid fa-bell" style="color:#10b981"></i>
                </div>
                <div>
                  <span class="set-row-label">Daily Reminders</span>
                  <span class="set-row-sub">Get nudged to keep your streak</span>
                </div>
              </div>
              <div class="toggle-track" [class.toggle-on]="notifSvc.notificationsEnabled()" (click)="$event.stopPropagation(); toggleNotifications()">
                <div class="toggle-thumb"></div>
              </div>
            </div>

            @if (notifSvc.notificationsEnabled()) {
              <div class="set-divider"></div>
              <div class="set-row set-version-row">
                <div class="set-row-left">
                  <div class="set-icon-wrap" style="background:rgba(99,102,241,0.12)">
                    <i class="fa-solid fa-clock" style="color:#818cf8"></i>
                  </div>
                  <span class="set-row-label">Reminder Time</span>
                </div>
              </div>
              <div class="time-picker-row">
                @for (t of reminderTimes; track t.hour) {
                  <button class="time-chip" [class.time-chip-sel]="notifSvc.reminderHour() === t.hour"
                    (click)="setReminderHour(t.hour)">
                    {{ t.label }}
                  </button>
                }
              </div>
            }
          </div>
        </div>

        <!-- About -->
        <div class="set-section">
          <span class="set-section-label">About</span>
          <div class="set-card">
            <div class="set-row" (click)="openPrivacyPolicy()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(59,130,246,0.12)">
                  <i class="fa-solid fa-shield-halved" style="color:#60a5fa"></i>
                </div>
                <span class="set-row-label">Privacy Policy</span>
              </div>
              <i class="fa-solid fa-chevron-right set-chevron"></i>
            </div>
            <div class="set-divider"></div>
            <div class="set-row" (click)="openAbout()">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(245,158,11,0.12)">
                  <i class="fa-solid fa-circle-info" style="color:#f59e0b"></i>
                </div>
                <span class="set-row-label">About JavaIQ</span>
              </div>
              <i class="fa-solid fa-chevron-right set-chevron"></i>
            </div>
            <div class="set-divider"></div>
            <div class="set-row set-version-row">
              <div class="set-row-left">
                <div class="set-icon-wrap" style="background: rgba(100,116,139,0.12)">
                  <i class="fa-solid fa-code-branch" style="color:#94a3b8"></i>
                </div>
                <span class="set-row-label">Version</span>
              </div>
              <span class="set-version-val">1.3.0</span>
            </div>
          </div>
        </div>

        <!-- Danger Zone -->
        @if (auth.user()) {
          <div class="set-section">
            <div class="set-card">
              <button class="set-logout-btn" (click)="confirmLogout()">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Sign Out
              </button>
            </div>
          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;19e7b7579c93e7e2a1e8faea6de19118c99349ad3dae3663205c94fc1ebf3141;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/settings/settings.component.ts */\n.set-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.set-content {\n  --background: #0b1120;\n}\n.set-body {\n  padding: 8px 16px 80px;\n  max-width: 520px;\n  margin: 0 auto;\n}\n.set-header {\n  padding: 8px 4px 24px;\n}\n.set-title {\n  font-size: 1.8rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.set-sub {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n.set-section {\n  margin-bottom: 20px;\n}\n.set-section-label {\n  display: block;\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #475569;\n  margin-bottom: 8px;\n  padding-left: 4px;\n}\n.set-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.account-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n}\n.account-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.account-name {\n  display: block;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.account-email {\n  display: block;\n  font-size: 0.72rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.set-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.set-row:hover {\n  background: rgba(255, 255, 255, 0.025);\n}\n.set-version-row {\n  cursor: default;\n}\n.set-version-row:hover {\n  background: transparent;\n}\n.set-row-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.set-icon-wrap {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.set-row-label {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #e2e8f0;\n}\n.set-row-sub {\n  font-size: 0.65rem;\n  color: #64748b;\n  display: block;\n  margin-top: 1px;\n}\n.set-chevron {\n  font-size: 0.6rem;\n  color: #475569;\n}\n.set-version-val {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #475569;\n}\n.set-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.05);\n  margin: 0 16px;\n}\n.toggle-track {\n  width: 44px;\n  height: 26px;\n  border-radius: 13px;\n  background: rgba(255, 255, 255, 0.1);\n  position: relative;\n  cursor: pointer;\n  transition: background 0.25s;\n  flex-shrink: 0;\n}\n.toggle-on {\n  background: #10b981 !important;\n}\n.toggle-thumb {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.25s;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.toggle-on .toggle-thumb {\n  transform: translateX(18px);\n}\n.goal-picker {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  padding: 12px;\n}\n.goal-opt {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 8px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1.5px solid rgba(255, 255, 255, 0.07);\n  cursor: pointer;\n  transition: all 0.18s;\n  font-size: 1.2rem;\n}\n.goal-opt:hover {\n  background: rgba(16, 185, 129, 0.08);\n  border-color: rgba(16, 185, 129, 0.25);\n}\n.goal-opt-sel {\n  background: rgba(16, 185, 129, 0.12) !important;\n  border-color: #10b981 !important;\n}\n.goal-opt-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.time-picker-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 0 16px 14px;\n}\n.time-chip {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  color: #94a3b8;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.time-chip:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: #a5b4fc;\n}\n.time-chip-sel {\n  background: rgba(99, 102, 241, 0.2) !important;\n  border-color: #818cf8 !important;\n  color: #c7d2fe !important;\n}\n.set-logout-btn {\n  width: 100%;\n  padding: 14px;\n  background: rgba(239, 68, 68, 0.08);\n  border: none;\n  color: #f87171;\n  font-size: 0.88rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-radius: 16px;\n}\n.set-logout-btn:hover {\n  background: rgba(239, 68, 68, 0.14);\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 347 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-FZ5HDZCK.js.map
