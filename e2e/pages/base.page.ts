import { Page, Locator } from '@playwright/test';

/** Base page object shared by all page objects. */
export class BasePage {
  constructor(protected readonly page: Page) {}

  /** Wait for Ionic ion-content to be visible (page fully rendered). */
  async waitForIonContent() {
    await this.page.waitForSelector('ion-content', { state: 'visible', timeout: 10_000 });
  }

  /** Wait for Angular change detection to settle. */
  async waitForAngular() {
    await this.page.waitForLoadState('networkidle');
  }

  /** Get current pathname. */
  async currentPath(): Promise<string> {
    return new URL(this.page.url()).pathname;
  }

  /** Bottom navigation bar tab by label. */
  bottomTab(label: string): Locator {
    return this.page.locator('.bnav-tab', { hasText: label });
  }

  /** Tap the Home bottom tab. */
  async goHome() {
    await this.bottomTab('Home').click();
    await this.waitForIonContent();
  }

  /** Tap the Learn bottom tab. */
  async goLearn() {
    await this.bottomTab('Learn').click();
    await this.waitForIonContent();
  }

  /** Tap the Practice bottom tab. */
  async goPractice() {
    await this.bottomTab('Practice').click();
    await this.waitForIonContent();
  }

  /** Tap the Progress bottom tab. */
  async goProgress() {
    await this.bottomTab('Progress').click();
    await this.waitForIonContent();
  }

  /** Tap the More bottom tab. */
  async goMore() {
    await this.bottomTab('More').click();
    await this.waitForIonContent();
  }

  /** Press the ion-back-button. */
  async goBack() {
    await this.page.locator('ion-back-button').click();
    await this.waitForIonContent();
  }

  /** Read a localStorage value from the browser context. */
  async getLocalStorage(key: string): Promise<string | null> {
    return this.page.evaluate((k) => localStorage.getItem(k), key);
  }

  /** Set a localStorage value in the browser context. */
  async setLocalStorage(key: string, value: string) {
    await this.page.evaluate(([k, v]) => localStorage.setItem(k, v), [key, value]);
  }
}
