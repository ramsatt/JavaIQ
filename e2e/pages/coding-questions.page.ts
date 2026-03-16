import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CodingQuestionsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoList() {
    await this.page.goto('/coding-questions');
    await this.waitForIonContent();
  }

  async gotoCategory(id: string) {
    await this.page.goto(`/coding-questions/${id}`);
    await this.waitForIonContent();
  }

  // ── Category list ─────────────────────────────────────────────────────────────
  get categoryCards(): Locator {
    return this.page.locator('.cq-card, .category-card, [class*="cq-"]');
  }

  categoryCardByTitle(title: string): Locator {
    return this.page.locator('[class*="card"]', { hasText: title });
  }

  // ── Hero section ─────────────────────────────────────────────────────────────
  get hero(): Locator {
    return this.page.locator('.hero');
  }

  get heroTitle(): Locator {
    return this.page.locator('.hero .title');
  }

  get heroSubtitle(): Locator {
    return this.page.locator('.hero .subtitle');
  }

  get heroBadge(): Locator {
    return this.page.locator('.hero-badge');
  }

  /** Verify hero spans full page width (no side margins). */
  async heroIsFullWidth(): Promise<boolean> {
    const heroBox = await this.hero.boundingBox();
    const pageWidth = this.page.viewportSize()?.width ?? 390;
    if (!heroBox) return false;
    return heroBox.x === 0 && heroBox.width >= pageWidth - 2;
  }

  // ── Problem cards ────────────────────────────────────────────────────────────
  get problemCards(): Locator {
    return this.page.locator('.problem-card');
  }

  problemCardByTitle(title: string): Locator {
    return this.page.locator('.problem-card', { hasText: title });
  }

  problemTitleAt(index: number): Locator {
    return this.page.locator('.problem-title').nth(index);
  }

  difficultyBadgeAt(index: number): Locator {
    return this.page.locator('.difficulty-badge').nth(index);
  }

  companyChipsAt(index: number): Locator {
    return this.page.locator('.problem-card').nth(index).locator('.company-chip');
  }

  expandIconAt(index: number): Locator {
    return this.page.locator('.expand-icon').nth(index);
  }

  async clickProblemHeader(index: number) {
    await this.page.locator('.problem-header').nth(index).click();
  }

  // ── Expanded content ─────────────────────────────────────────────────────────
  get expandedContent(): Locator {
    return this.page.locator('.problem-content');
  }

  get problemDescription(): Locator {
    return this.page.locator('.desc-text');
  }

  get sectionTitle(): Locator {
    return this.page.locator('.section-title');
  }

  get codeBlock(): Locator {
    return this.page.locator('.code-block code');
  }

  get codeHeader(): Locator {
    return this.page.locator('.code-header');
  }

  get copyButton(): Locator {
    return this.page.locator('.copy-btn');
  }

  get complexitySection(): Locator {
    return this.page.locator('.complexity-section');
  }

  get compLabels(): Locator {
    return this.page.locator('.comp-label');
  }

  get compValues(): Locator {
    return this.page.locator('.comp-val');
  }

  // ── Lock icon ─────────────────────────────────────────────────────────────────
  get lockIcons(): Locator {
    return this.page.locator('.fa-lock');
  }
}
