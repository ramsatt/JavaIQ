import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/dashboard');
    await this.waitForIonContent();
  }

  // ── Hero banner ──────────────────────────────────────────────────────────────
  get greetingText(): Locator {
    return this.page.locator('.hero-name');
  }

  get heroSubText(): Locator {
    return this.page.locator('.hero-sub');
  }

  get xpValue(): Locator {
    return this.page.locator('.xp-val');
  }

  get xpProgressBar(): Locator {
    return this.page.locator('.xp-fill');
  }

  // ── Stats strip ──────────────────────────────────────────────────────────────
  get statValues(): Locator {
    return this.page.locator('.stat-val');
  }

  get statLabels(): Locator {
    return this.page.locator('.stat-lbl');
  }

  // ── Today's Focus ────────────────────────────────────────────────────────────
  get todaysFocusCard(): Locator {
    return this.page.locator('.tf-card');
  }

  get todaysFocusLabel(): Locator {
    return this.page.locator('.tf-label');
  }

  get todaysFocusDoneCard(): Locator {
    return this.page.locator('.tf-card.tf-done');
  }

  // ── Streak card ──────────────────────────────────────────────────────────────
  get streakCount(): Locator {
    return this.page.locator('.streak-count');
  }

  get streakLevelBadge(): Locator {
    return this.page.locator('.level-label');
  }

  get streakMilestoneName(): Locator {
    return this.page.locator('.milestone-name');
  }

  get streakMilestoneBar(): Locator {
    return this.page.locator('.milestone-fill');
  }

  // ── Daily Goal card ──────────────────────────────────────────────────────────
  get goalTitle(): Locator {
    return this.page.locator('.goal-title');
  }

  get goalCount(): Locator {
    return this.page.locator('.goal-count');
  }

  get goalTaskLabels(): Locator {
    return this.page.locator('.task-label');
  }

  get goalProgressBar(): Locator {
    return this.page.locator('.goal-fill');
  }

  get goalCompleteMessage(): Locator {
    return this.page.locator('.goal-complete');
  }

  taskCheckbox(index: number): Locator {
    return this.page.locator('.task-check').nth(index);
  }

  // ── QOTD card ────────────────────────────────────────────────────────────────
  get qotdQuestion(): Locator {
    return this.page.locator('.qotd-question');
  }

  get qotdRevealButton(): Locator {
    return this.page.locator('.btn-answer');
  }

  get qotdAnswerReveal(): Locator {
    return this.page.locator('.qotd-answer-reveal');
  }

  get qotdDoneChip(): Locator {
    return this.page.locator('.qotd-done-chip');
  }

  get qotdCategory(): Locator {
    return this.page.locator('.qotd-category');
  }

  async revealQotd() {
    await this.qotdRevealButton.click();
  }

  // ── Continue Learning card ───────────────────────────────────────────────────
  get continueLearningCard(): Locator {
    return this.page.locator('.continue-card');
  }

  get continueCourseTitle(): Locator {
    return this.page.locator('.continue-course');
  }

  get continueNextTopic(): Locator {
    return this.page.locator('.continue-next');
  }

  get continueCta(): Locator {
    return this.page.locator('.continue-cta');
  }

  async clickContinueLearning() {
    await this.continueLearningCard.click();
    await this.waitForIonContent();
  }

  // ── Achievements row ─────────────────────────────────────────────────────────
  get achievementsButton(): Locator {
    return this.page.locator('.ach-row-btn');
  }

  get achievementsChip(): Locator {
    return this.page.locator('.ach-chip');
  }

  async clickAchievements() {
    await this.achievementsButton.click();
    await this.waitForIonContent();
  }

  // ── Quick Actions ────────────────────────────────────────────────────────────
  quickActionTile(label: string): Locator {
    return this.page.locator('.qa-tile', { hasText: label });
  }

  async clickQuickAction(label: string) {
    await this.quickActionTile(label).click();
    await this.waitForIonContent();
  }

  // ── Learning Path ─────────────────────────────────────────────────────────────
  get moduleCards(): Locator {
    return this.page.locator('.module-card');
  }

  get lockedModules(): Locator {
    return this.page.locator('.module-item.is-locked');
  }

  moduleCardByName(name: string): Locator {
    return this.page.locator('.module-card', { hasText: name });
  }

  get viewAllButton(): Locator {
    return this.page.locator('.view-all-btn');
  }

  async clickViewAll() {
    await this.viewAllButton.click();
  }
}
