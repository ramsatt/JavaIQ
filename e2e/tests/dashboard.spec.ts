import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { seedAuthUser, seedGameState, seedQotdAnswered, seedChallengeCompleted, mockFirebase, setTheme } from '../fixtures/setup';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await mockFirebase(page);
    await seedAuthUser(page);
    await page.goto('/dashboard');
    await page.waitForSelector('ion-content', { state: 'visible' });
  });

  // ── Layout & Hero ─────────────────────────────────────────────────────────────

  test('2.1.1 — dashboard loads and hero banner is visible', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.greetingText).toBeVisible();
    await expect(dash.heroSubText).toBeVisible();
  });

  test('2.1.2 — greeting changes by time of day', async ({ page }) => {
    const dash = new DashboardPage(page);
    const greeting = await dash.greetingText.textContent();
    expect(greeting).toMatch(/good morning|good afternoon|good evening/i);
  });

  test('2.1.3 — stats strip shows Total XP, Day Streak, Progress labels', async ({ page }) => {
    const dash = new DashboardPage(page);
    const labels = await dash.statLabels.allTextContents();
    expect(labels.some(l => /xp/i.test(l))).toBeTruthy();
    expect(labels.some(l => /streak/i.test(l))).toBeTruthy();
    expect(labels.some(l => /progress/i.test(l))).toBeTruthy();
  });

  test('2.1.4 — stats strip XP value matches seeded state', async ({ page }) => {
    await seedGameState(page, { xp: 250 });
    await page.goto('/dashboard');
    const dash = new DashboardPage(page);
    const xpText = await dash.xpValue.textContent();
    expect(xpText).toContain('250');
  });

  // ── Learning Path ─────────────────────────────────────────────────────────────

  test('2.1.5 — locked categories shown for fresh account', async ({ page }) => {
    const dash = new DashboardPage(page);
    const locked = await dash.lockedModules.count();
    expect(locked).toBeGreaterThan(0);
  });

  test('2.1.7 — View All / Show less toggles module list', async ({ page }) => {
    const dash = new DashboardPage(page);
    const initialCount = await dash.moduleCards.count();
    await dash.clickViewAll();
    const expandedCount = await dash.moduleCards.count();
    expect(expandedCount).toBeGreaterThan(initialCount);

    await dash.clickViewAll();
    const collapsedCount = await dash.moduleCards.count();
    expect(collapsedCount).toBe(initialCount);
  });

  // ── Today's Focus ─────────────────────────────────────────────────────────────

  test('2.2.10 — Today\'s Focus shows Daily Challenge when not done', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.todaysFocusCard).toBeVisible();
    const label = await dash.todaysFocusLabel.textContent();
    expect(label).toMatch(/daily challenge/i);
  });

  test('2.2.13 — Today\'s Focus shows all done after all tasks complete', async ({ page }) => {
    await seedChallengeCompleted(page);
    await seedQotdAnswered(page);
    await page.goto('/dashboard');
    const dash = new DashboardPage(page);
    await expect(dash.todaysFocusDoneCard).toBeVisible();
  });

  // ── Streak card ───────────────────────────────────────────────────────────────

  test('2.2.1 — streak card shows current streak', async ({ page }) => {
    await seedGameState(page, { streak: 5 });
    await page.goto('/dashboard');
    const dash = new DashboardPage(page);
    await expect(dash.streakCount).toContainText('5');
    await expect(dash.streakLevelBadge).toBeVisible();
    await expect(dash.streakMilestoneBar).toBeVisible();
  });

  // ── Daily Goal card ───────────────────────────────────────────────────────────

  test('2.2.2 — daily goal shows 0/3 on fresh day', async ({ page }) => {
    const dash = new DashboardPage(page);
    const count = await dash.goalCount.textContent();
    expect(count).toMatch(/0\s*\/\s*3/);
  });

  test('2.2.3 — task labels are all rendered', async ({ page }) => {
    const dash = new DashboardPage(page);
    const labels = await dash.goalTaskLabels.allTextContents();
    expect(labels.length).toBe(3);
    expect(labels.some(l => /challenge/i.test(l))).toBeTruthy();
    expect(labels.some(l => /tutorial/i.test(l))).toBeTruthy();
    expect(labels.some(l => /question/i.test(l))).toBeTruthy();
  });

  // ── QOTD card ─────────────────────────────────────────────────────────────────

  test('2.2.4 — QOTD card shows question and reveal button', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.qotdQuestion).toBeVisible();
    await expect(dash.qotdRevealButton).toBeVisible();
  });

  test('2.2.5 — revealing QOTD answer shows answer and hides button', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.revealQotd();
    await expect(dash.qotdAnswerReveal).toBeVisible();
    await expect(dash.qotdRevealButton).not.toBeVisible();
    await expect(dash.qotdDoneChip).toBeVisible();
  });

  test('2.2.6 — QOTD already answered shows done state', async ({ page }) => {
    await seedQotdAnswered(page);
    await page.goto('/dashboard');
    const dash = new DashboardPage(page);
    await expect(dash.qotdDoneChip).toBeVisible();
    await expect(dash.qotdRevealButton).not.toBeVisible();
  });

  // ── Continue Learning card ────────────────────────────────────────────────────

  test('2.2.7 — Continue Learning card shows first topic for fresh account', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.continueCourseTitle).toContainText('Core Java');
    await expect(dash.continueNextTopic).toContainText('JVM');
  });

  // ── Achievements shortcut ─────────────────────────────────────────────────────

  test('2.2.9 — achievements button navigates to /achievements', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.clickAchievements();
    await expect(page).toHaveURL(/\/achievements/);
  });

  // ── Quick Actions ─────────────────────────────────────────────────────────────

  test('2.3.3 — My Progress tile navigates to /progress', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.clickQuickAction('Progress');
    await expect(page).toHaveURL(/\/progress/);
  });

  test('2.3.4 — Saved tile navigates to /bookmarks', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.clickQuickAction('Saved');
    await expect(page).toHaveURL(/\/bookmarks/);
  });

  test('2.3.5 — Leaderboard tile navigates to /leaderboard', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.clickQuickAction('Leaderboard');
    await expect(page).toHaveURL(/\/leaderboard/);
  });
});
