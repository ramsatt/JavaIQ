import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { seedAuthUser, mockFirebase, setTheme } from '../fixtures/setup';

/** Helper: resolve computed color of an element selector. */
async function getColor(page: import('@playwright/test').Page, selector: string): Promise<string> {
  return page.evaluate(
    (sel) => getComputedStyle(document.querySelector(sel)!).color,
    selector
  );
}

async function getBgColor(
  page: import('@playwright/test').Page,
  selector: string
): Promise<string> {
  return page.evaluate(
    (sel) => getComputedStyle(document.querySelector(sel)!).backgroundColor,
    selector
  );
}

/** Returns true if the rgb color string represents a "dark" color (all channels < 100). */
function isDark(rgb: string): boolean {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return false;
  return parseInt(m[1]) < 100 && parseInt(m[2]) < 100 && parseInt(m[3]) < 100;
}

/** Returns true if the rgb color string represents a "light" color (all channels > 150). */
function isLight(rgb: string): boolean {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return false;
  return parseInt(m[1]) > 150 && parseInt(m[2]) > 150 && parseInt(m[3]) > 150;
}

test.describe('Dark / Light Mode', () => {
  test.beforeEach(async ({ page }) => {
    await mockFirebase(page);
    await seedAuthUser(page);
  });

  // ── Theme persistence ─────────────────────────────────────────────────────────

  test('19.11 — dark theme persists after page reload', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/dashboard');
    await page.reload();
    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDark).toBe(true);
  });

  test('19.11 — light theme persists after page reload', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/dashboard');
    await page.reload();
    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDark).toBe(false);
  });

  // ── Dashboard widgets — QOTD card ─────────────────────────────────────────────

  test('19.3 — QOTD card has dark background in dark mode', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/dashboard');
    await page.waitForSelector('.qotd-card', { state: 'visible' });

    const bg = await getBgColor(page, '.qotd-card');
    // Expected: #0d1a10 = rgb(13, 26, 16) — dark
    expect(isDark(bg)).toBe(true);
  });

  test('19.3 — QOTD card question text is light in dark mode', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/dashboard');
    await page.waitForSelector('.qotd-question', { state: 'visible' });

    const color = await getColor(page, '.qotd-question');
    expect(isLight(color)).toBe(true);
  });

  test('19.1 — QOTD card question text is dark in light mode', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/dashboard');
    await page.waitForSelector('.qotd-question', { state: 'visible' });

    const color = await getColor(page, '.qotd-question');
    expect(isDark(color)).toBe(true);
  });

  // ── Dashboard widgets — Daily Goal card ───────────────────────────────────────

  test('19.4 — Daily Goal card has dark background in dark mode', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/dashboard');
    await page.waitForSelector('.goal-card', { state: 'visible' });

    const bg = await getBgColor(page, '.goal-card');
    expect(isDark(bg)).toBe(true);
  });

  test('19.1 — Daily Goal task labels readable in light mode', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/dashboard');
    await page.waitForSelector('.task-label', { state: 'visible' });

    const color = await getColor(page, '.task-label');
    expect(isDark(color)).toBe(true);
  });

  // ── Dashboard widgets — Continue Learning card ────────────────────────────────

  test('19.5 — Continue Learning card has dark background in dark mode', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/dashboard');
    await page.waitForSelector('.continue-card', { state: 'visible', timeout: 5000 })
      .catch(() => { /* card may not render if no data */ });

    const card = page.locator('.continue-card');
    if (await card.isVisible()) {
      const bg = await getBgColor(page, '.continue-card');
      expect(isDark(bg)).toBe(true);
    }
  });

  test('19.1 — Continue Learning course title readable in light mode', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/dashboard');
    const card = page.locator('.continue-card');
    if (await card.isVisible()) {
      const color = await getColor(page, '.continue-course');
      expect(isDark(color)).toBe(true);
    }
  });

  // ── Coding Questions — dark mode ──────────────────────────────────────────────

  test('19.8 — coding question hero always has dark background', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/coding-questions/arrays');
    await page.waitForSelector('.hero', { state: 'visible' });

    const bg = await getBgColor(page, '.hero');
    // Hero should be dark even in light mode
    expect(isDark(bg)).toBe(true);
  });

  test('19.6 — coding question problem titles dark in light mode', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/coding-questions/arrays');
    await page.waitForSelector('.problem-title', { state: 'visible' });

    const color = await getColor(page, '.problem-title');
    expect(isDark(color)).toBe(true);
  });

  test('19.7 — coding question problem titles light in dark mode', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/coding-questions/arrays');
    await page.waitForSelector('.problem-title', { state: 'visible' });

    const color = await getColor(page, '.problem-title');
    expect(isLight(color)).toBe(true);
  });

  // ── Settings theme toggle ─────────────────────────────────────────────────────

  test('16.4 — dark mode toggle switches theme immediately', async ({ page }) => {
    await setTheme(page, 'light');
    await page.goto('/settings');
    await page.waitForSelector('ion-content', { state: 'visible' });

    const toggle = page.locator('.theme-toggle, ion-toggle').first();
    await toggle.click();
    await page.waitForTimeout(300);

    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDark).toBe(true);

    // Verify localStorage updated
    const stored = await page.evaluate(() => localStorage.getItem('app-theme'));
    expect(stored).toBe('dark');
  });

  test('16.5 — light mode toggle switches theme immediately', async ({ page }) => {
    await setTheme(page, 'dark');
    await page.goto('/settings');
    await page.waitForSelector('ion-content', { state: 'visible' });

    const toggle = page.locator('.theme-toggle, ion-toggle').first();
    await toggle.click();
    await page.waitForTimeout(300);

    const hasDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDark).toBe(false);

    const stored = await page.evaluate(() => localStorage.getItem('app-theme'));
    expect(stored).toBe('light');
  });
});
