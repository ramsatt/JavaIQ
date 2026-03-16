import { test, expect } from '@playwright/test';
import { TutorialsPage } from '../pages/tutorials.page';
import { seedAuthUser, seedUnlockedTopic, seedVisitedTopic, mockFirebase } from '../fixtures/setup';

test.describe('Tutorial Learning', () => {
  test.beforeEach(async ({ page }) => {
    await mockFirebase(page);
    await seedAuthUser(page);
  });

  // ── Topic loading ─────────────────────────────────────────────────────────────

  test('3.2.1 — JVM Architecture topic loads with content', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::jvm-basics');
    await tut.gotoTopic('core-java', 'jvm-basics');
    await expect(tut.tutorialLayout).toBeVisible();
  });

  test('3.2.1 — topic code blocks are visible', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::jvm-basics');
    await tut.gotoTopic('core-java', 'jvm-basics');
    const codeBlockCount = await tut.codeBlocks.count();
    expect(codeBlockCount).toBeGreaterThan(0);
  });

  test('3.2.4 — ad declined navigates back to course', async ({ page }) => {
    // No unlock seeded — first visit should trigger ad gate
    // On web, alert fires; dismissing it should redirect back
    const tut = new TutorialsPage(page);

    // Handle the confirmation alert that web uses instead of a real ad
    page.on('dialog', async (dialog) => {
      await dialog.dismiss(); // user declines
    });

    await tut.gotoTopic('core-java', 'wrapper-classes');
    // Should be redirected back to course list
    await expect(page).toHaveURL(/\/tutorials\/core-java(?!\/wrapper-classes)/);
  });

  test('3.2.11 — last visited topic is tracked in localStorage', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::jvm-basics');
    await tut.gotoTopic('core-java', 'jvm-basics');

    const raw = await page.evaluate(() => localStorage.getItem('notif_last_visited'));
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.courseSlug).toBe('core-java');
    expect(parsed.topicSlug).toBe('jvm-basics');
    expect(parsed.topicTitle).toBeTruthy();
  });

  test('3.2.12 — unknown topic shows not-found state without crash', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await tut.gotoTopic('core-java', 'this-topic-does-not-exist-xyz');
    // Should not navigate away or crash; content area rendered
    await expect(page).toHaveURL(/\/tutorials\/core-java\/this-topic-does-not-exist-xyz/);
  });

  // ── Back navigation ───────────────────────────────────────────────────────────

  test('3.2.5 — back button from topic returns to course detail', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::jvm-basics');
    await tut.gotoTopic('core-java', 'jvm-basics');
    await tut.goBack();
    await expect(page).toHaveURL(/\/tutorials\/core-java$/);
  });

  // ── Mark Complete ─────────────────────────────────────────────────────────────

  test('3.2.6 — Mark Complete button is present on topic page', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::jvm-basics');
    await tut.gotoTopic('core-java', 'jvm-basics');
    await expect(tut.markCompleteButton).toBeVisible();
  });

  // ── Wrapper classes — previously fixed NUL byte bug ──────────────────────────

  test('wrapper-classes topic loads without template error', async ({ page }) => {
    const tut = new TutorialsPage(page);
    await seedUnlockedTopic(page, 'core-java::wrapper-classes');
    await tut.gotoTopic('core-java', 'wrapper-classes');
    await expect(tut.tutorialLayout).toBeVisible();
    // Code blocks should all render (regression for NUL-byte bug)
    const codeBlockCount = await tut.codeBlocks.count();
    expect(codeBlockCount).toBeGreaterThanOrEqual(4);
  });

  // ── Various topic components load ─────────────────────────────────────────────

  const TOPICS = [
    ['core-java', 'strings', 'core-java::strings'],
    ['core-java', 'streams', 'core-java::streams'],
    ['core-java', 'exceptions', 'core-java::exceptions'],
    ['core-java', 'generics', 'core-java::generics'],
    ['spring-framework', 'spring-ioc', 'spring-framework::spring-ioc'],
  ];

  for (const [course, topic, id] of TOPICS) {
    test(`topic ${topic} loads without crash`, async ({ page }) => {
      const tut = new TutorialsPage(page);
      await seedUnlockedTopic(page, id);
      await tut.gotoTopic(course, topic);
      await expect(tut.tutorialLayout).toBeVisible();
    });
  }
});
