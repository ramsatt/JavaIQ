import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

// Runtime dynamic import helper — hides the specifier from Vite's static analysis
const dynamicImport = new Function('specifier', 'return import(specifier)');

interface LastVisited {
  courseSlug: string;
  topicSlug: string;
  topicTitle: string;
}

/** Wraps @capacitor/local-notifications for daily streak reminders.
 *  All calls are guarded with Capacitor.isNativePlatform() so the service
 *  is safely a no-op on the web/browser build.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private router = inject(Router);

  private readonly LS_KEY           = 'notifications_enabled';
  private readonly LS_HOUR_KEY      = 'notif_reminder_hour';
  private readonly LS_LAST_VISITED  = 'notif_last_visited';
  private readonly NOTIFICATION_ID  = 1001;

  notificationsEnabled = signal<boolean>(
    localStorage.getItem(this.LS_KEY) !== 'false'
  );

  /** User's chosen reminder hour (0-23, default 18 = 6 PM). */
  reminderHour = signal<number>(
    parseInt(localStorage.getItem(this.LS_HOUR_KEY) ?? '18', 10)
  );

  // ─── Last Visited Tracking ──────────────────────────────────────────────────

  /** Called from TopicRouterComponent each time a topic is loaded. */
  trackLastVisited(courseSlug: string, topicSlug: string, topicTitle: string) {
    const info: LastVisited = { courseSlug, topicSlug, topicTitle };
    localStorage.setItem(this.LS_LAST_VISITED, JSON.stringify(info));
  }

  private getLastVisited(): LastVisited | null {
    const raw = localStorage.getItem(this.LS_LAST_VISITED);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  // ─── Public API ────────────────────────────────────────────────────────────

  /**
   * Call once at app startup (from AppComponent constructor).
   * Registers the tap-action listener and re-schedules the daily reminder
   * if notifications are enabled and permission already granted.
   */
  async initOnStartup(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    if (!this.notificationsEnabled()) return;

    try {
      const { LocalNotifications } = await dynamicImport('@capacitor/local-notifications');

      // Navigate to the deep-linked route when user taps a notification
      await LocalNotifications.addListener('localNotificationActionPerformed',
        (action: { notification: { extra?: Record<string, string> } }) => {
          const route = action.notification.extra?.['route'] ?? '/tutorials';
          this.router.navigateByUrl(route);
        }
      );

      // Re-schedule on every cold start so the next-day alarm stays fresh
      const perm = await LocalNotifications.checkPermissions();
      if (perm.display === 'granted') {
        await this.scheduleReminder(0);
      }
    } catch (e) {
      console.warn('[NotificationService] initOnStartup failed', e);
    }
  }

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
   * (Re)schedule tomorrow's daily reminder with "where you left off" context.
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

      // Build context-aware body & deep-link route
      const last = this.getLastVisited();
      let body: string;
      let route: string;

      if (last) {
        body  = `📖 Continue where you left off: "${last.topicTitle}"`;
        route = `/tutorials/${last.courseSlug}/${last.topicSlug}`;
      } else if (streak > 1) {
        body  = `🔥 Your ${streak}-day streak is waiting! Keep the momentum going.`;
        route = '/tutorials';
      } else {
        body  = `☕ Ready to level up your Java skills? Pick up where you left off!`;
        route = '/tutorials';
      }

      await LocalNotifications.schedule({
        notifications: [{
          id:        this.NOTIFICATION_ID,
          title:     'JavaIQ — Time to Learn! ☕',
          body,
          schedule:  { at: scheduledAt },
          smallIcon: 'ic_stat_icon_config_sample',
          iconColor: '#1B4332',
          extra:     { route }
        }]
      });

      console.log(`[NotificationService] Scheduled for ${scheduledAt.toLocaleTimeString()} → ${route}`);
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

    if (enabled) {
      await this.requestPermissionAndSchedule(0);
    } else if (Capacitor.isNativePlatform()) {
      try {
        const { LocalNotifications } = await dynamicImport('@capacitor/local-notifications');
        await LocalNotifications.cancel({
          notifications: [{ id: this.NOTIFICATION_ID }]
        });
      } catch { /* silent */ }
    }
  }
}
