import {
  Capacitor
} from "./chunk-QYTOD3XC.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";

// src/app/services/notification.service.ts
var dynamicImport = new Function("specifier", "return import(specifier)");
var NotificationService = class _NotificationService {
  LS_KEY = "notifications_enabled";
  LS_HOUR_KEY = "notif_reminder_hour";
  NOTIFICATION_ID = 1001;
  notificationsEnabled = signal(localStorage.getItem(this.LS_KEY) !== "false", ...ngDevMode ? [{ debugName: "notificationsEnabled" }] : []);
  /** User's chosen reminder hour (0-23, default 18 = 6 PM). */
  reminderHour = signal(parseInt(localStorage.getItem(this.LS_HOUR_KEY) ?? "18", 10), ...ngDevMode ? [{ debugName: "reminderHour" }] : []);
  // ─── Public API ────────────────────────────────────────────────────────────
  /**
   * Called on first meaningful XP gain after login.
   * Requests permission lazily (not on cold app open) and then schedules.
   */
  async requestPermissionAndSchedule(streak) {
    if (!Capacitor.isNativePlatform())
      return;
    if (!this.notificationsEnabled())
      return;
    try {
      const { LocalNotifications } = await dynamicImport("@capacitor/local-notifications");
      const perm = await LocalNotifications.requestPermissions();
      if (perm.display !== "granted")
        return;
      await this.scheduleReminder(streak);
    } catch (e) {
      console.warn("[NotificationService] Permission request failed", e);
    }
  }
  /**
   * (Re)schedule tomorrow's daily reminder.
   * Safe to call multiple times — cancels any existing reminder first.
   */
  async scheduleReminder(streak) {
    if (!Capacitor.isNativePlatform())
      return;
    if (!this.notificationsEnabled())
      return;
    try {
      const { LocalNotifications } = await dynamicImport("@capacitor/local-notifications");
      await LocalNotifications.cancel({
        notifications: [{ id: this.NOTIFICATION_ID }]
      });
      const scheduledAt = /* @__PURE__ */ new Date();
      scheduledAt.setDate(scheduledAt.getDate() + 1);
      scheduledAt.setHours(this.reminderHour(), 0, 0, 0);
      const body = streak > 1 ? `\u{1F525} Your ${streak}-day streak is waiting! Keep the momentum going.` : `\u{1F4DA} Jump back into JavaIQ \u2014 your Java journey awaits!`;
      await LocalNotifications.schedule({
        notifications: [{
          id: this.NOTIFICATION_ID,
          title: "JavaIQ",
          body,
          schedule: { at: scheduledAt },
          smallIcon: "ic_stat_icon_config_sample",
          iconColor: "#1B4332"
        }]
      });
    } catch (e) {
      console.warn("[NotificationService] Schedule failed", e);
    }
  }
  /** Persist a new reminder hour and reschedule. */
  async setReminderHour(hour) {
    this.reminderHour.set(hour);
    localStorage.setItem(this.LS_HOUR_KEY, String(hour));
    if (this.notificationsEnabled()) {
      await this.scheduleReminder(0);
    }
  }
  /** Toggle notifications on/off from settings. */
  async toggle(enabled) {
    this.notificationsEnabled.set(enabled);
    localStorage.setItem(this.LS_KEY, enabled ? "true" : "false");
    if (!enabled && Capacitor.isNativePlatform()) {
      try {
        const { LocalNotifications } = await dynamicImport("@capacitor/local-notifications");
        await LocalNotifications.cancel({
          notifications: [{ id: this.NOTIFICATION_ID }]
        });
      } catch {
      }
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-KHYVC3NX.js.map
