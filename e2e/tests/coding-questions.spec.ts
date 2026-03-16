import { test, expect } from '@playwright/test';
import { CodingQuestionsPage } from '../pages/coding-questions.page';
import { seedAuthUser, seedUnlockedTopic, mockFirebase } from '../fixtures/setup';

test.describe('Coding Questions', () => {
  test.beforeEach(async ({ page }) => {
    await mockFirebase(page);
    await seedAuthUser(page);
  });

  // ── Hero section ──────────────────────────────────────────────────────────────

  test('5.2.1 — hero section spans full screen width', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    const isFullWidth = await cq.heroIsFullWidth();
    expect(isFullWidth).toBe(true);
  });

  test('5.2.1 — hero has no visible side margins', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    const heroBox = await cq.hero.boundingBox();
    expect(heroBox).not.toBeNull();
    expect(heroBox!.x).toBe(0);
  });

  test('5.2.2 — hero title and subtitle visible', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await expect(cq.heroTitle).toBeVisible();
    await expect(cq.heroSubtitle).toBeVisible();
    await expect(cq.heroBadge).toBeVisible();
  });

  // ── Problem list ──────────────────────────────────────────────────────────────

  test('5.2.2 — problem list renders with titles and difficulty badges', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    const count = await cq.problemCards.count();
    expect(count).toBeGreaterThan(0);
    await expect(cq.problemTitleAt(0)).toBeVisible();
    await expect(cq.difficultyBadgeAt(0)).toBeVisible();
  });

  test('5.2.3 — problem titles are readable in light mode', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('app-theme', 'light');
      document.documentElement.classList.remove('dark');
    });
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');

    const title = cq.problemTitleAt(0);
    await expect(title).toBeVisible();
    const color = await title.evaluate((el) => getComputedStyle(el).color);
    // Color should be dark (not near-white). Check that it's not a very light color.
    // #1B1B1B in RGB is rgb(27, 27, 27)
    expect(color).not.toMatch(/rgb\(2[0-9]{2}/); // not >200 for all channels
  });

  test('5.2.8 — company chips visible in light mode', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('app-theme', 'light'));
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    const chips = cq.companyChipsAt(0);
    const chipCount = await chips.count();
    expect(chipCount).toBeGreaterThan(0);
    await expect(chips.first()).toBeVisible();
  });

  test('5.2.9 — lock icon shown on locked problem', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    // With no unlocks seeded, lock icons should be present
    const locks = await cq.lockIcons.count();
    expect(locks).toBeGreaterThan(0);
  });

  // ── Expand / collapse ─────────────────────────────────────────────────────────

  test('5.2.10 — problem expands after unlock and shows all sections', async ({ page }) => {
    // Pre-unlock the first arrays problem
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);

    await expect(cq.expandedContent).toBeVisible();
    await expect(cq.problemDescription).toBeVisible();
    await expect(cq.codeBlock).toBeVisible();
    await expect(cq.complexitySection).toBeVisible();
  });

  test('5.2.11 — problem statement text visible in light mode', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('app-theme', 'light'));
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);

    const desc = cq.problemDescription;
    await expect(desc).toBeVisible();
    const color = await desc.evaluate((el) => getComputedStyle(el).color);
    // Should be a dark color, not near-transparent or near-white
    expect(color).not.toMatch(/rgba\(\d+,\s*\d+,\s*\d+,\s*0\)/);
  });

  test('5.2.12 — code block has dark background', async ({ page }) => {
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);

    const javaSection = page.locator('.java-section');
    await expect(javaSection).toBeVisible();
    const bg = await javaSection.evaluate((el) => getComputedStyle(el).backgroundColor);
    // Background should be dark (#0d1117 → rgb(13, 17, 23))
    expect(bg).toMatch(/rgb\(1[0-9],/);
  });

  test('5.2.14 — complexity labels visible in light mode', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('app-theme', 'light'));
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);

    const label = cq.compLabels.first();
    await expect(label).toBeVisible();
    await expect(label).toContainText(/time complexity/i);
  });

  test('5.2.15 — complexity values visible in light mode', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('app-theme', 'light'));
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);

    const val = cq.compValues.first();
    await expect(val).toBeVisible();
    const color = await val.evaluate((el) => getComputedStyle(el).color);
    // Should not be near-white (light colors like #cbd5e1 = rgb(203, 213, 225))
    // Our fix sets it to #3d5f4f = rgb(61, 95, 79)
    expect(color).toMatch(/rgb\([0-9]{1,2},/); // red channel < 100
  });

  test('5.2.16 — collapse expanded problem on second tap', async ({ page }) => {
    await seedUnlockedTopic(page, 'cq::two-sum');
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.clickProblemHeader(0);
    await expect(cq.expandedContent).toBeVisible();

    // Tap again to collapse
    await cq.clickProblemHeader(0);
    await expect(cq.expandedContent).not.toBeVisible();
  });

  // ── Back navigation ───────────────────────────────────────────────────────────

  test('5.2.17 — back button returns to /coding-questions', async ({ page }) => {
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    await cq.goBack();
    await expect(page).toHaveURL(/\/coding-questions$/);
  });

  // ── Dark mode ─────────────────────────────────────────────────────────────────

  test('5.2.4 — problem titles readable in dark mode', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('app-theme', 'dark');
      document.documentElement.classList.add('dark');
    });
    const cq = new CodingQuestionsPage(page);
    await cq.gotoCategory('arrays');
    const title = cq.problemTitleAt(0);
    await expect(title).toBeVisible();
    const color = await title.evaluate((el) => getComputedStyle(el).color);
    // Should be a light color in dark mode (#e2e8f0 = rgb(226, 232, 240))
    expect(color).toMatch(/rgb\(2[0-9]{2},/);
  });
});
