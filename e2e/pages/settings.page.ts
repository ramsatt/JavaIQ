import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SettingsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/settings');
    await this.waitForIonContent();
  }

  // ── Account section ───────────────────────────────────────────────────────────
  get displayName(): Locator {
    return this.page.locator('[class*="user-name"], [class*="displayName"]');
  }

  get userEmail(): Locator {
    return this.page.locator('[class*="user-email"], [class*="email"]');
  }

  get avatarInitials(): Locator {
    return this.page.locator('[class*="avatar"], [class*="initials"]');
  }

  // ── Theme ────────────────────────────────────────────────────────────────────
  get darkModeToggle(): Locator {
    return this.page.locator('.theme-toggle, ion-toggle[class*="theme"]');
  }

  get themeLabel(): Locator {
    return this.page.locator('.theme-label');
  }

  async toggleTheme() {
    await this.darkModeToggle.click();
    await this.page.waitForTimeout(300); // allow transition
  }

  async isDarkMode(): Promise<boolean> {
    return this.page.evaluate(() => document.documentElement.classList.contains('dark'));
  }

  // ── Learning goal ────────────────────────────────────────────────────────────
  get goalOptions(): Locator {
    return this.page.locator('[class*="goal-option"], [class*="goal-card"]');
  }

  goalOptionByLabel(label: string): Locator {
    return this.page.locator('[class*="goal"]', { hasText: label });
  }

  async selectGoal(label: string) {
    await this.goalOptionByLabel(label).click();
    await this.page.waitForTimeout(200);
  }

  // ── Notifications ─────────────────────────────────────────────────────────────
  get notificationsToggle(): Locator {
    return this.page.locator('ion-toggle[class*="notif"], [class*="notif"] ion-toggle');
  }

  get reminderTimeChips(): Locator {
    return this.page.locator('[class*="time-chip"], [class*="reminder-chip"]');
  }

  reminderChipByLabel(label: string): Locator {
    return this.page.locator('[class*="chip"]', { hasText: label });
  }

  async toggleNotifications() {
    await this.notificationsToggle.click();
    await this.page.waitForTimeout(300);
  }

  async selectReminderTime(label: string) {
    await this.reminderChipByLabel(label).click();
  }

  // ── Sign out ──────────────────────────────────────────────────────────────────
  get signOutButton(): Locator {
    return this.page.locator('button', { hasText: /sign out|log out/i });
  }

  get signOutConfirmButton(): Locator {
    return this.page.locator('ion-alert button, [class*="alert"] button', {
      hasText: /confirm|sign out|yes/i,
    });
  }

  get signOutCancelButton(): Locator {
    return this.page.locator('ion-alert button, [class*="alert"] button', {
      hasText: /cancel|no/i,
    });
  }

  async clickSignOut() {
    await this.signOutButton.click();
  }

  async confirmSignOut() {
    await this.signOutConfirmButton.click();
    await this.waitForIonContent();
  }

  async cancelSignOut() {
    await this.signOutCancelButton.click();
  }

  // ── App version / About ───────────────────────────────────────────────────────
  get appVersion(): Locator {
    return this.page.locator('[class*="version"]');
  }

  get privacyPolicyLink(): Locator {
    return this.page.locator('a, button', { hasText: /privacy policy/i });
  }

  get aboutLink(): Locator {
    return this.page.locator('a, button', { hasText: /about javaiq/i });
  }
}
