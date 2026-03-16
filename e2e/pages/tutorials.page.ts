import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class TutorialsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoList() {
    await this.page.goto('/tutorials');
    await this.waitForIonContent();
  }

  async gotoCourse(slug: string) {
    await this.page.goto(`/tutorials/${slug}`);
    await this.waitForIonContent();
  }

  async gotoTopic(courseSlug: string, topicSlug: string) {
    await this.page.goto(`/tutorials/${courseSlug}/${topicSlug}`);
    await this.waitForIonContent();
  }

  // ── Course list ──────────────────────────────────────────────────────────────
  get courseCards(): Locator {
    return this.page.locator('.course-card, app-tutorial-list .card, ion-card');
  }

  courseCardByTitle(title: string): Locator {
    return this.page.locator('[class*="course"]', { hasText: title });
  }

  // ── Topic list (course detail) ───────────────────────────────────────────────
  get topicRows(): Locator {
    return this.page.locator('.topic-row, .topic-item, [class*="topic"]');
  }

  topicRowByTitle(title: string): Locator {
    return this.page.locator('[class*="topic"]', { hasText: title });
  }

  // ── Topic content (topic router) ─────────────────────────────────────────────
  get tutorialLayout(): Locator {
    return this.page.locator('app-tutorial-layout');
  }

  get tutorialTitle(): Locator {
    return this.page.locator('.tutorial-title, h1, .title');
  }

  get markCompleteButton(): Locator {
    return this.page.locator('button', { hasText: /mark complete/i });
  }

  get nextTopicButton(): Locator {
    return this.page.locator('button', { hasText: /next/i });
  }

  get prevTopicButton(): Locator {
    return this.page.locator('button', { hasText: /prev/i });
  }

  get codeBlocks(): Locator {
    return this.page.locator('app-code-block');
  }

  get loadingSpinner(): Locator {
    return this.page.locator('[class*="loading"], ion-spinner');
  }

  get notFoundState(): Locator {
    return this.page.locator('[class*="not-found"], [class*="notFound"]');
  }

  async clickMarkComplete() {
    await this.markCompleteButton.click();
  }

  async clickNextTopic() {
    await this.nextTopicButton.click();
    await this.waitForIonContent();
  }
}
