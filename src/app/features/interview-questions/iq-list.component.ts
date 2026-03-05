import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-iq-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="iq-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="iq-brand">
          <span class="brand-icon">☕</span> JavaIQ
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="iq-page-content">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="page-wrapper">

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-glow"></div>
          <div class="hero-badge">💼 Interview Prep</div>
          <h1 class="hero-title">Master Your<br><span class="hero-accent">Java Interview</span></h1>
          <p class="hero-subtitle">Curated questions from top tech companies</p>
        </div>

        <!-- Stats Bar -->
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-value">{{ totalQuestions }}</span>
            <span class="stat-label">Questions</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ totalVisited() }}</span>
            <span class="stat-label">Covered</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ overallProgress() }}%</span>
            <span class="stat-label">Progress</span>
          </div>
        </div>

        <!-- Overall progress bar -->
        <div class="overall-progress-track">
          <div class="overall-progress-bar" [style.width.%]="overallProgress()"></div>
        </div>

        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">
            <i class="fa-solid fa-layer-group section-tag-icon"></i>
            Browse Topics
          </span>
        </div>

        <!-- Topic Grid -->
        <div class="topic-grid">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/interview-questions', cat.key]" class="topic-card" [style.--accent]="cat.accentColor">
              <div class="topic-accent-line"></div>
              <div class="topic-card-inner">
                <div class="topic-icon-wrap" [style.background]="cat.iconBg">
                  <i [class]="cat.faIcon" class="topic-fa-icon" [style.color]="cat.accentColor"></i>
                </div>
                <div class="topic-info">
                  <h3 class="topic-name">{{ cat.title }}</h3>
                  <span class="topic-count">
                    {{ getVisited(cat.categoryName) }} / {{ cat.questionCount }} covered
                  </span>
                </div>
                <div class="topic-arrow">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="topic-progress-track">
                <div class="topic-progress-bar"
                     [style.width.%]="getProgressPercent(cat.categoryName)"
                     [style.background]="cat.accentColor"></div>
              </div>
            </a>
          }
        </div>

        <!-- Footer -->
        <div class="page-footer">
          <p class="footer-text">Built with ❤️ for Java developers</p>
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    /* ── Page Setup ── */
    .iq-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .iq-brand {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
      color: white;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .brand-icon {
      font-size: 1.1rem;
    }

    .iq-page-content {
      --background: #0b1120;
    }

    .page-wrapper {
      padding: 0 16px 100px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* ── Hero Section ── */
    .hero-section {
      position: relative;
      text-align: center;
      padding: 28px 16px 24px;
    }
    .hero-glow {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .hero-title {
      font-family: 'Inter', sans-serif;
      font-size: 1.85rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.2;
      margin: 0 0 8px;
      position: relative;
    }
    .hero-accent {
      background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #10b981;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 100px;
      padding: 5px 14px;
      margin-bottom: 14px;
    }
    .hero-subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      color: #64748b;
      font-weight: 500;
      margin: 0;
      letter-spacing: 0.01em;
    }

    /* ── Stats Bar ── */
    .stats-bar {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 18px 8px;
      margin-bottom: 12px;
    }
    .stat-item {
      text-align: center;
      flex: 1;
    }
    .stat-value {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-label {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
      margin-top: 5px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .stat-divider {
      width: 1px;
      height: 28px;
      background: rgba(255,255,255,0.08);
    }

    /* ── Overall Progress ── */
    .overall-progress-track {
      height: 4px;
      background: rgba(255,255,255,0.06);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 28px;
    }
    .overall-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #34d399);
      border-radius: 4px;
      transition: width 0.6s ease;
    }

    /* ── Section Header ── */
    .section-header {
      margin-bottom: 14px;
    }
    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-family: 'Inter', sans-serif;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #94a3b8;
    }
    .section-tag-icon {
      font-size: 0.65rem;
      color: #10b981;
    }

    /* ── Topic Grid ── */
    .topic-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* ── Topic Card ── */
    .topic-card {
      position: relative;
      display: block;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 0;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      transition: all 0.2s ease;
    }
    .topic-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      transform: translateY(-2px);
    }
    .topic-card:active {
      transform: scale(0.98);
    }

    /* Accent line on left */
    .topic-accent-line {
      position: absolute;
      left: 0;
      top: 12px;
      bottom: 12px;
      width: 3px;
      background: var(--accent, #10b981);
      border-radius: 0 3px 3px 0;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .topic-card:hover .topic-accent-line {
      opacity: 1;
    }

    .topic-card-inner {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 16px 10px 20px;
    }

    /* Icon */
    .topic-icon-wrap {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .topic-fa-icon {
      font-size: 1.15rem;
    }

    /* Info */
    .topic-info {
      flex: 1;
      min-width: 0;
    }
    .topic-name {
      font-family: 'Inter', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0 0 2px;
      letter-spacing: -0.01em;
    }
    .topic-count {
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      color: #64748b;
      font-weight: 500;
    }

    /* Arrow */
    .topic-arrow {
      flex-shrink: 0;
      font-size: 11px;
      color: #475569;
      transition: all 0.2s ease;
    }
    .topic-card:hover .topic-arrow {
      color: var(--accent, #10b981);
      transform: translateX(2px);
    }

    /* Progress bar */
    .topic-progress-track {
      height: 3px;
      background: rgba(255,255,255,0.04);
      margin: 0 20px 12px;
      border-radius: 3px;
      overflow: hidden;
    }
    .topic-progress-bar {
      height: 100%;
      border-radius: 3px;
      transition: width 0.6s ease;
    }

    /* ── Footer ── */
    .page-footer {
      text-align: center;
      margin-top: 40px;
    }
    .footer-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      color: #334155;
      font-weight: 500;
      margin: 0;
    }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .iq-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .iq-page-content {
      --background: #F5F7F2;
    }

    /* Premium green hero — full bleed with generous spacing */
    :host-context(html:not(.dark)) .hero-section {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
      padding: 44px 32px 60px;
      margin: 0 -16px;
    }
    :host-context(html:not(.dark)) .hero-glow {
      background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-badge {
      color: rgba(255,255,255,0.9);
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.3);
    }
    :host-context(html:not(.dark)) .hero-title {
      color: #ffffff;
      -webkit-text-fill-color: #ffffff;
    }
    :host-context(html:not(.dark)) .hero-accent {
      background: linear-gradient(135deg, #86efac 0%, #bbf7d0 60%, #d1fae5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .hero-subtitle {
      color: rgba(255,255,255,0.75);
    }

    /* Stats bar overlaps the hero bottom edge */
    :host-context(html:not(.dark)) .stats-bar {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 4px 20px rgba(27,67,50,0.15);
      border-radius: 16px;
      margin-top: -32px;
      position: relative;
      z-index: 2;
    }
    :host-context(html:not(.dark)) .stat-value {
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .stat-label { color: #52665A; }
    :host-context(html:not(.dark)) .stat-divider { background: #D6DDD2; }
    :host-context(html:not(.dark)) .overall-progress-track {
      background: rgba(27,67,50,0.08);
    }

    /* Topic cards */
    :host-context(html:not(.dark)) .topic-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .topic-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .topic-progress-track {
      background: rgba(27,67,50,0.06);
    }
    :host-context(html:not(.dark)) .topic-name { color: #1B1B1B; }
    :host-context(html:not(.dark)) .topic-count { color: #8A9B8F; }
    :host-context(html:not(.dark)) .topic-arrow { color: #B7CCBB; }
    :host-context(html:not(.dark)) .topic-card:hover .topic-arrow { color: var(--accent, #1B4332); }
    :host-context(html:not(.dark)) .section-tag { color: #52665A; }
    :host-context(html:not(.dark)) .section-tag-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .footer-text { color: #8A9B8F; }
  `
})
export class IqListComponent {
  private dataService = inject(DataService);

  categories = [
    {
      key: 'core-java', title: 'Core Java', categoryName: 'Core Java', questionCount: 51,
      faIcon: 'fa-solid fa-mug-hot', accentColor: '#f59e0b',
      iconBg: 'rgba(245,158,11,0.12)'
    },
    {
      key: 'spring-boot', title: 'Spring Boot', categoryName: 'Spring Boot', questionCount: 52,
      faIcon: 'fa-solid fa-leaf', accentColor: '#10b981',
      iconBg: 'rgba(16,185,129,0.12)'
    },
    {
      key: 'microservices', title: 'Microservices', categoryName: 'Microservices', questionCount: 35,
      faIcon: 'fa-solid fa-cubes', accentColor: '#8b5cf6',
      iconBg: 'rgba(139,92,246,0.12)'
    },
    {
      key: 'hibernate', title: 'Hibernate', categoryName: 'Hibernate', questionCount: 29,
      faIcon: 'fa-solid fa-database', accentColor: '#f97316',
      iconBg: 'rgba(249,115,22,0.12)'
    },
    {
      key: 'coding-patterns', title: 'Coding Questions', categoryName: 'Coding Questions', questionCount: 20,
      faIcon: 'fa-solid fa-code', accentColor: '#06b6d4',
      iconBg: 'rgba(6,182,212,0.12)'
    },
    {
      key: 'reactive-prog', title: 'Reactive Programming', categoryName: 'Reactive Programming', questionCount: 18,
      faIcon: 'fa-solid fa-bolt', accentColor: '#ec4899',
      iconBg: 'rgba(236,72,153,0.12)'
    },
    {
      key: 'multithreading', title: 'Multithreading', categoryName: 'Multithreading', questionCount: 17,
      faIcon: 'fa-solid fa-arrows-spin', accentColor: '#eab308',
      iconBg: 'rgba(234,179,8,0.12)'
    },
    {
      key: 'spring-reactive', title: 'Spring Reactive', categoryName: 'Spring Reactive', questionCount: 13,
      faIcon: 'fa-solid fa-wave-square', accentColor: '#3b82f6',
      iconBg: 'rgba(59,130,246,0.12)'
    }
  ];

  get totalQuestions() {
    return this.categories.reduce((s, c) => s + c.questionCount, 0);
  }

  totalVisited = computed(() => {
    // Touch the signal to track changes
    this.dataService.revealedQuestionIds();
    return this.categories.reduce((s, c) => s + this.dataService.getVisitedCount(c.categoryName), 0);
  });

  overallProgress = computed(() => {
    this.dataService.revealedQuestionIds();
    const total = this.totalQuestions;
    if (total === 0) return 0;
    return Math.round((this.totalVisited() / total) * 100);
  });

  getVisited(categoryName: string): number {
    return this.dataService.getVisitedCount(categoryName);
  }

  getProgressPercent(categoryName: string): number {
    return this.dataService.getProgress(categoryName);
  }

  handleRefresh(event: CustomEvent) {
    // Data is reactive via signals — just complete the refresher
    setTimeout(() => (event.detail as any).complete(), 500);
  }
}
