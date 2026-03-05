import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';

// Runtime dynamic import helper — hides the specifier from Vite's static analysis
const dynamicImport = new Function('specifier', 'return import(specifier)');

/** Wraps @capacitor/local-notifications for daily streak reminders.
 *  All calls are guarded with Capacitor.isNativePlatform() so the service
 *  is safely a no-op on the web/browser build.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly LS_KEY      = 'notifications_enabled';
  private readonly LS_HOUR_KEY = 'notif_reminder_hour';
  private readonly NOTIFICATION_ID = 1001;

  notificationsEnabled = signal<boolean>(
    localStorage.getItem(this.LS_KEY) !== 'false'
  );

  /** User's chosen reminder hour (0-23, default 18 = 6 PM). */
  reminderHour = signal<number>(
    parseInt(localStorage.getItem(this.LS_HOUR_KEY) ?? '18', 10)
  );

  // ─── Public API ────────────────────────────────────────────────────────────

  /**
   * Called on first meaningful XP gain after login.
   * Requests permission lazily (not on cold app open) and then schedules.
   */
  async requestPermissionAndSchedule(streak: number): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    if (!this.notificationsEnabled()) return;

    try {
      const { LocalNotifications } = await dynamicImport('@capacitor/local-notifications');
      const perm = await LocalNotifications.requestPermissions();
      if (perm.display !== 'granted') return;
      await this.scheduleReminder(streak);
    } catch (e) {
      console.warn('[NotificationService] Permission request failed', e);
    }
  }

  /**
   * (Re)schedule tomorrow's daily reminder.
   * Safe to call multiple times — cancels any existing reminder first.
   */
  async scheduleReminder(streak: number): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    if (!this.notificationsEnabled()) return;

    try {
      const { LocalNotifications } = await dynamicImport('@capacitor/local-notifications');

      // Cancel previous reminder to avoid duplicates
      await LocalNotifications.cancel({
        notifications: [{ id: this.NOTIFICATION_ID }]
      });

      const scheduledAt = new Date();
      scheduledAt.setDate(scheduledAt.getDate() + 1);
      scheduledAt.setHours(this.reminderHour(), 0, 0, 0);

      const body = streak > 1
        ? `🔥 Your ${streak}-day streak is waiting! Keep the momentum going.`
        : `📚 Jump back into JavaIQ — your Java journey awaits!`;

      await LocalNotifications.schedule({
        notifications: [{
          id: this.NOTIFICATION_ID,
          title: 'JavaIQ',
          body,
          schedule: { at: scheduledAt },
          smallIcon: 'ic_stat_icon_config_sample',
          iconColor: '#1B4332'
        }]
      });
    } catch (e) {
      console.warn('[NotificationService] Schedule failed', e);
    }
  }

  /** Persist a new reminder hour and reschedule. */
  async setReminderHour(hour: number): Promise<void> {
    this.reminderHour.set(hour);
    localStorage.setItem(this.LS_HOUR_KEY, String(hour));
    if (this.notificationsEnabled()) {
      await this.scheduleReminder(0);
    }
  }

  /** Toggle notifications on/off from settings. */
  async toggle(enabled: boolean): Promise<void> {
    this.notificationsEnabled.set(enabled);
    localStorage.setItem(this.LS_KEY, enabled ? 'true' : 'false');

    if (!enabled && Capacitor.isNativePlatform()) {
      try {
        const { LocalNotifications } = await dynamicImport('@capacitor/local-notifications');
        await LocalNotifications.cancel({
          notifications: [{ id: this.NOTIFICATION_ID }]
        });
      } catch { /* silent */ }
    }
  }
}
