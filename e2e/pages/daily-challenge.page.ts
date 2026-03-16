import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class DailyChallengePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/daily-challenge');
    await this.waitForIonContent();
  }

  // ── Active challenge state ────────────────────────────────────────────────────
  get questionCards(): Locator {
    return this.page.locator('[class*="question"], .dc-question, .challenge-question');
  }

  get revealButtons(): Locator {
    return this.page.locator('button', { hasText: /reveal/i });
  }

  get gotItButton(): Locator {
    return this.page.locator('button', { hasText: /got it/i });
  }

  get didntKnowButton(): Locator {
    return this.page.locator('button', { hasText: /didn't know|didn't know/i });
  }

  get progressIndicator(): Locator {
    return this.page.locator('[class*="progress"], [class*="score"]');
  }

  // ── Completed state ───────────────────────────────────────────────────────────
  get completedBanner(): Locator {
    return this.page.locator('[class*="complete"], [class*="done"]', { hasText: /complete|done/i });
  }

  get countdownTimer(): Locator {
    return this.page.locator('[class*="countdown"], [class*="timer"]');
  }

  get shareButton(): Locator {
    return this.page.locator('button', { hasText: /share/i });
  }

  get earnedXpDisplay(): Locator {
    return this.page.locator('[class*="xp"], [class*="earned"]');
  }

  // ── Actions ───────────────────────────────────────────────────────────────────
  async revealAnswer(index = 0) {
    await this.revealButtons.nth(index).click();
  }

  async markGotIt() {
    await this.gotItButton.click();
  }

  async markDidntKnow() {
    await this.didntKnowButton.click();
  }
}
