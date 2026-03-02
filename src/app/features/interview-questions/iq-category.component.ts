import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { DataService, Question } from '../../data.service';
import { AdGateService } from '../../ad-gate.service';

@Component({
  selector: 'app-iq-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border" translucent="false">
      <ion-toolbar class="cat-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" style="color: white"></ion-back-button>
        </ion-buttons>
        <ion-title class="cat-brand">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="cat-content">
      <!-- Category Hero -->
      <div class="cat-hero">
        <div class="cat-hero-inner">
          <span class="cat-hero-badge">Interview Questions</span>
          <h1 class="cat-hero-title">{{ categoryTitle() }}</h1>
          <div class="cat-hero-stats">
            <span class="cat-hero-count">{{ questions().length }} questions</span>
            <span class="cat-hero-sep">·</span>
            <span class="cat-hero-visited">{{ visitedCount() }} covered</span>
          </div>
          <!-- Category progress bar -->
          <div class="cat-progress-track">
            <div class="cat-progress-bar" [style.width.%]="progressPercent()"></div>
          </div>
        </div>
      </div>

      <div class="cat-body">
        @if (questions().length === 0) {
          <div class="empty-card">
            <div class="empty-icon">💬</div>
            <h2 class="empty-title">No Questions Found</h2>
            <p class="empty-desc">Check back later for more interview questions in this category.</p>
          </div>
        } @else {
          <div class="cat-list">
            @for (q of questions(); track q.id; let i = $index) {
              <button (click)="openQuestion(q)" class="q-card" [class.q-card-visited]="isRevealed(q.id)">
                <div class="q-card-left">
                  <div class="q-number" [class.q-num-visited]="isRevealed(q.id)">
                    @if (isRevealed(q.id)) {
                      <i class="fa-solid fa-check q-check-icon"></i>
                    } @else {
                      <span class="q-num-text">{{ i + 1 }}</span>
                    }
                  </div>
                </div>
                <div class="q-card-body">
                  <h3 class="q-title">{{ q.question }}</h3>
                  @if (q.asked_metadata) {
                    <div class="q-meta">
                      <i class="fa-solid fa-building-columns q-meta-icon"></i>
                      <span>{{ q.asked_metadata }}</span>
                    </div>
                  }
                </div>
                <div class="q-card-arrow">
                  @if (isRevealed(q.id) || isUnlocked(q.id)) {
                    <i class="fa-solid fa-chevron-right"></i>
                  } @else {
                    <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                  }
                </div>
              </button>
            }
          </div>
        }
      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    /* ── Toolbar ── */
    .cat-toolbar {
      --background: #0b1120;
      --color: white;
    }
    .cat-brand {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: white;
    }

    /* ── Content ── */
    .cat-content { --background: #0f172a; }

    /* ── Hero Section ── */
    .cat-hero {
      background: linear-gradient(135deg, #0b1120 0%, #1e293b 100%);
      padding: 0 0 28px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .cat-hero-inner {
      max-width: 56rem;
      margin: 0 auto;
      padding: 24px 20px 0;
    }
    .cat-hero-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: rgba(255,255,255,0.5);
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px;
      padding: 3px 10px;
      margin-bottom: 10px;
    }
    .cat-hero-title {
      font-family: 'Inter', sans-serif;
      font-size: 1.75rem;
      font-weight: 800;
      color: #e2e8f0;
      letter-spacing: -0.02em;
      margin: 0 0 8px;
    }
    .cat-hero-stats {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }
    .cat-hero-count {
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      color: #64748b;
      font-weight: 500;
    }
    .cat-hero-sep {
      color: #475569;
    }
    .cat-hero-visited {
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      color: #10b981;
      font-weight: 600;
    }
    .cat-progress-track {
      height: 4px;
      background: rgba(255,255,255,0.06);
      border-radius: 4px;
      overflow: hidden;
    }
    .cat-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #34d399);
      border-radius: 4px;
      transition: width 0.5s ease;
    }

    /* ── Body ── */
    .cat-body {
      max-width: 56rem;
      margin: 0 auto;
      padding: 16px 12px 80px;
      position: relative;
      z-index: 1;
    }

    /* ── Empty State ── */
    .empty-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 48px 24px;
      text-align: center;
    }
    .empty-icon {
      width: 56px; height: 56px;
      background: rgba(255,255,255,0.06);
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 16px;
      font-size: 28px;
    }
    .empty-title {
      font-family: 'Inter', sans-serif;
      font-size: 1.1rem; font-weight: 800; color: #e2e8f0; margin: 0 0 6px;
    }
    .empty-desc {
      font-size: 0.85rem; color: #64748b; margin: 0; line-height: 1.6;
      max-width: 280px; margin: 0 auto;
    }

    /* ── Question List ── */
    .cat-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .q-card {
      display: flex;
      width: 100%;
      text-align: left;
      align-items: center;
      gap: 14px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 16px;
      color: inherit;
      transition: all 0.15s ease;
      cursor: pointer;
    }
    .q-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transform: translateY(-1px);
    }
    .q-card:active {
      transform: scale(0.99);
    }

    /* Visited card - subtle left border */
    .q-card-visited {
      border-left: 3px solid rgba(16,185,129,0.4);
    }

    /* ── Number Badge ── */
    .q-number {
      flex-shrink: 0;
      width: 36px; height: 36px;
      border-radius: 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      display: flex; align-items: center; justify-content: center;
      transition: all 0.15s ease;
    }
    .q-num-text {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #64748b;
    }

    /* Visited number badge */
    .q-num-visited {
      background: rgba(16,185,129,0.15);
      border-color: rgba(16,185,129,0.3);
    }
    .q-check-icon {
      font-size: 13px;
      color: #10b981;
    }

    /* ── Card Body ── */
    .q-card-body { flex: 1; min-width: 0; }
    .q-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      color: #e2e8f0;
      line-height: 1.4;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* ── Meta Tag ── */
    .q-meta {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin-top: 6px;
      font-size: 10px;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 2px 8px;
      border-radius: 4px;
      letter-spacing: 0.02em;
    }
    .q-meta-icon {
      font-size: 9px;
      color: #475569;
    }

    /* ── Arrow ── */
    .q-card-arrow {
      flex-shrink: 0;
      color: #475569;
      font-size: 12px;
      transition: color 0.15s ease;
    }
    .q-card:hover .q-card-arrow {
      color: #94a3b8;
    }
  `
})
export class IqCategoryComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);
  private adGate = inject(AdGateService);

  categorySlug = signal('');
  categoryTitle = signal('');
  questions = signal<Question[]>([]);

  visitedCount = computed(() => {
    this.dataService.revealedQuestionIds();
    return this.dataService.getVisitedCount(this.categoryTitle());
  });

  progressPercent = computed(() => {
    this.dataService.revealedQuestionIds();
    return this.dataService.getProgress(this.categoryTitle());
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('category') ?? '';
      this.categorySlug.set(slug);

      const title = this.dataService.slugToTitle(slug);
      this.categoryTitle.set(title);

      this.questions.set(this.dataService.getQuestions(title as any));
    });
  }

  isRevealed(id: number): boolean {
    return this.dataService.revealedQuestionIds().has(id);
  }

  isUnlocked(id: number): boolean {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`iq::${id}`);
  }

  async openQuestion(q: Question) {
    const itemId = `iq::${q.id}`;

    if (!this.isRevealed(q.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview question');
      if (!allowed) return;
    }

    this.router.navigate(['/interview-questions', this.categorySlug(), q.id]);
  }
}
