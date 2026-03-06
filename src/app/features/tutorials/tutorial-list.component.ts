import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonRefresher, IonRefresherContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';

interface TutorialCourse {
  slug: string;
  title: string;
  description: string;
  faIcon: string;
  accentColor: string;
  iconBg: string;
  chapterCount: number;
  difficulty: string;
  estimatedTime: string;
}

@Component({
  selector: 'app-tutorial-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonRefresher, IonRefresherContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="tut-content">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-graduation-cap hero-badge-icon"></i>
            Learning Platform
          </span>
          <h1 class="hero-title">Level Up Your<br><span class="hero-accent">Java Skills</span></h1>
          <p class="hero-subtitle">Structured courses from fundamentals to advanced</p>

          <!-- Stats Row -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-val">{{ totalChapters }}</span>
              <span class="hero-stat-lbl">Chapters</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-val">{{ courses.length }}</span>
              <span class="hero-stat-lbl">Courses</span>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat">
              <span class="hero-stat-val">{{ totalHours }}h</span>
              <span class="hero-stat-lbl">Content</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-body">
        <!-- Quick Category Filters -->
        <div class="filter-row">
          @for (cat of categoryPills; track cat.label; let i = $index) {
            <button class="filter-chip" [class.filter-active]="i === 0">
              <i [class]="cat.faIcon" class="filter-chip-icon" [style.color]="cat.color"></i>
              <span>{{ cat.label }}</span>
            </button>
          }
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="section-head-left">
            <i class="fa-solid fa-book-open section-icon"></i>
            <span class="section-title">All Courses</span>
          </div>
          <span class="section-count">{{ courses.length }} courses</span>
        </div>

        <!-- Course Cards -->
        <div class="course-list">
          @for (c of courses; track c.slug) {
            <a [routerLink]="['/tutorials', c.slug]" class="course-card" [style.--accent]="c.accentColor">
              <!-- Accent top border -->
              <div class="course-accent-top"></div>

              <div class="course-card-inner">
                <!-- Icon -->
                <div class="course-icon" [style.background]="c.iconBg">
                  <i [class]="c.faIcon" class="course-fa-icon" [style.color]="c.accentColor"></i>
                </div>

                <!-- Info -->
                <div class="course-info">
                  <h3 class="course-title">{{ c.title }}</h3>
                  <p class="course-desc">{{ c.description }}</p>
                  <div class="course-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-book meta-chip-icon"></i>
                      {{ c.chapterCount }} chapters
                    </span>
                    <span class="meta-chip">
                      <i class="fa-regular fa-clock meta-chip-icon"></i>
                      {{ c.estimatedTime }}
                    </span>
                    <span class="diff-tag" [attr.data-level]="c.difficulty">
                      {{ c.difficulty }}
                    </span>
                  </div>
                </div>

                <!-- Arrow -->
                <div class="course-arrow">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </a>
          }
        </div>

        <!-- Footer -->
        <div class="tut-footer">
          <p class="footer-text">Built with ❤️ for Java developers</p>
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    /* ── Search Button ── */
    .search-btn {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      color: #94a3b8;
      width: 36px; height: 36px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem;
      cursor: pointer;
      margin-right: 8px;
      transition: all 0.2s;
    }
    .search-btn:hover { color: #e2e8f0; background: rgba(255,255,255,0.1); }

    /* ── Page Setup ── */
    .tut-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .tut-content {
      --background: #0b1120;
    }

    /* ── Hero Section ── */
    .hero-section {
      position: relative;
      padding: 0 20px 32px;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .hero-glow-1 {
      top: -60px;
      right: -40px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
    }
    .hero-glow-2 {
      bottom: -30px;
      left: -30px;
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);
    }
    .hero-inner {
      position: relative;
      z-index: 1;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #8b5cf6;
      background: rgba(139,92,246,0.1);
      border: 1px solid rgba(139,92,246,0.2);
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 16px;
    }
    .hero-badge-icon {
      font-size: 0.7rem;
    }
    .hero-title {
      font-family: 'Inter', sans-serif;
      font-size: 1.85rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 8px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      color: #64748b;
      font-weight: 500;
      margin: 0 0 24px;
    }

    /* Hero Stats */
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 16px 8px;
    }
    .hero-stat {
      text-align: center;
      flex: 1;
    }
    .hero-stat-val {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #8b5cf6, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-stat-lbl {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.6rem;
      font-weight: 600;
      color: #64748b;
      margin-top: 3px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .hero-stat-divider {
      width: 1px;
      height: 24px;
      background: rgba(255,255,255,0.08);
    }

    /* ── Page Body ── */
    .page-body {
      padding: 24px 16px 100px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* ── Filter Chips ── */
    .filter-row {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-bottom: 28px;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .filter-row::-webkit-scrollbar { display: none; }
    .filter-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      color: #94a3b8;
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .filter-chip:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.15);
      color: #e2e8f0;
    }
    .filter-active {
      background: rgba(139,92,246,0.15) !important;
      border-color: rgba(139,92,246,0.3) !important;
      color: #a78bfa !important;
    }
    .filter-chip-icon {
      font-size: 0.72rem;
    }

    /* ── Section Head ── */
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    .section-head-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-icon {
      font-size: 0.7rem;
      color: #8b5cf6;
    }
    .section-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
    }
    .section-count {
      font-family: 'Inter', sans-serif;
      font-size: 0.68rem;
      font-weight: 600;
      color: #475569;
    }

    /* ── Course List ── */
    .course-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* ── Course Card ── */
    .course-card {
      position: relative;
      display: block;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      transition: all 0.2s ease;
    }
    .course-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.25);
      transform: translateY(-2px);
    }
    .course-card:active {
      transform: scale(0.98);
    }

    .course-accent-top {
      height: 3px;
      background: var(--accent, #8b5cf6);
      opacity: 0.5;
      transition: opacity 0.2s;
    }
    .course-card:hover .course-accent-top {
      opacity: 0.9;
    }

    .course-card-inner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 16px 18px;
    }

    /* Icon */
    .course-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }
    .course-fa-icon {
      font-size: 1.2rem;
    }

    /* Info */
    .course-info {
      flex: 1;
      min-width: 0;
    }
    .course-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0 0 4px;
      letter-spacing: -0.01em;
    }
    .course-desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0 0 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Meta */
    .course-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 6px;
      padding: 3px 8px;
    }
    .meta-chip-icon {
      font-size: 0.55rem;
      opacity: 0.7;
    }

    /* Difficulty Tag */
    .diff-tag {
      font-family: 'Inter', sans-serif;
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 3px 8px;
      border-radius: 6px;
    }
    .diff-tag[data-level="beginner"] {
      background: rgba(16,185,129,0.15);
      color: #34d399;
    }
    .diff-tag[data-level="intermediate"] {
      background: rgba(139,92,246,0.15);
      color: #a78bfa;
    }
    .diff-tag[data-level="advanced"] {
      background: rgba(239,68,68,0.15);
      color: #f87171;
    }

    /* Arrow */
    .course-arrow {
      flex-shrink: 0;
      font-size: 11px;
      color: #475569;
      margin-top: 18px;
      transition: all 0.2s ease;
    }
    .course-card:hover .course-arrow {
      color: var(--accent, #8b5cf6);
      transform: translateX(2px);
    }

    /* ── Footer ── */
    .tut-footer {
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
    :host-context(html:not(.dark)) .tut-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .tut-content {
      --background: #F5F7F2;
    }

    /* Premium green hero in light mode */
    :host-context(html:not(.dark)) .hero-section {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-glow-1 {
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-glow-2 {
      background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
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
    :host-context(html:not(.dark)) .hero-stats {
      background: rgba(255,255,255,0.12);
      border-color: rgba(255,255,255,0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    :host-context(html:not(.dark)) .hero-stat-val {
      background: linear-gradient(135deg, #d1fae5, #86efac);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .hero-stat-lbl {
      color: rgba(255,255,255,0.65);
    }
    :host-context(html:not(.dark)) .hero-stat-divider {
      background: rgba(255,255,255,0.2);
    }

    /* Course cards in light mode */
    :host-context(html:not(.dark)) .course-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .course-card:hover {
      background: #ffffff;
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .course-title {
      color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .course-desc {
      color: #52665A;
    }
    :host-context(html:not(.dark)) .meta-chip {
      background: rgba(27,67,50,0.04);
      border-color: #D6DDD2;
      color: #8A9B8F;
    }
    :host-context(html:not(.dark)) .course-arrow {
      color: #B7CCBB;
    }
    :host-context(html:not(.dark)) .course-card:hover .course-arrow {
      color: var(--accent, #1B4332);
    }

    /* Section header */
    :host-context(html:not(.dark)) .section-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .section-title { color: #52665A; }
    :host-context(html:not(.dark)) .section-count { color: #8A9B8F; }

    /* Filter chips */
    :host-context(html:not(.dark)) .filter-chip {
      background: #ffffff !important;
      border-color: #D6DDD2 !important;
      color: #52665A !important;
    }
    :host-context(html:not(.dark)) .filter-chip:hover {
      background: #F5F7F2 !important;
      border-color: #B7CCBB !important;
      color: #1B4332 !important;
    }
    :host-context(html:not(.dark)) .filter-active {
      background: #1B4332 !important;
      color: white !important;
      border-color: #1B4332 !important;
    }

    /* Footer */
    :host-context(html:not(.dark)) .footer-text { color: #8A9B8F; }

    /* Diff tags light mode */
    :host-context(html:not(.dark)) .diff-tag[data-level="beginner"] {
      background: rgba(5,150,105,0.1);
      color: #059669;
    }
    :host-context(html:not(.dark)) .diff-tag[data-level="intermediate"] {
      background: rgba(27,67,50,0.1);
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .diff-tag[data-level="advanced"] {
      background: rgba(220,38,38,0.1);
      color: #dc2626;
    }
  `
})
export class TutorialListComponent {
  categoryPills = [
    { faIcon: 'fa-solid fa-layer-group', label: 'All', color: '#8b5cf6' },
    { faIcon: 'fa-solid fa-mug-hot', label: 'Core Java', color: '#f59e0b' },
    { faIcon: 'fa-solid fa-leaf', label: 'Spring', color: '#10b981' },
    { faIcon: 'fa-solid fa-cubes', label: 'Architecture', color: '#3b82f6' },
    { faIcon: 'fa-solid fa-arrows-spin', label: 'Advanced', color: '#ef4444' }
  ];

  courses: TutorialCourse[] = [
    {
      slug: 'core-java', title: 'Core Java',
      description: 'OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.',
      faIcon: 'fa-solid fa-mug-hot', accentColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)',
      chapterCount: 28, difficulty: 'beginner', estimatedTime: '15 hours'
    },
    {
      slug: 'spring-framework', title: 'Spring Framework',
      description: 'IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.',
      faIcon: 'fa-solid fa-leaf', accentColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)',
      chapterCount: 12, difficulty: 'intermediate', estimatedTime: '10 hours'
    },
    {
      slug: 'spring-boot', title: 'Spring Boot',
      description: 'Auto-configuration, starters, REST APIs, security, actuator, and production deployment.',
      faIcon: 'fa-solid fa-rocket', accentColor: '#3b82f6', iconBg: 'rgba(59,130,246,0.12)',
      chapterCount: 18, difficulty: 'intermediate', estimatedTime: '10 hours'
    },
    {
      slug: 'hibernate', title: 'Hibernate & JPA',
      description: 'ORM fundamentals, entity mapping, relationships, caching, and performance tuning.',
      faIcon: 'fa-solid fa-database', accentColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)',
      chapterCount: 10, difficulty: 'intermediate', estimatedTime: '5 hours'
    },
    {
      slug: 'microservices', title: 'Microservices',
      description: 'Service discovery, API gateway, circuit breakers, event-driven design, and Docker.',
      faIcon: 'fa-solid fa-cubes', accentColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.12)',
      chapterCount: 14, difficulty: 'advanced', estimatedTime: '8 hours'
    },
    {
      slug: 'multithreading', title: 'Multithreading',
      description: 'Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.',
      faIcon: 'fa-solid fa-bolt', accentColor: '#eab308', iconBg: 'rgba(234,179,8,0.12)',
      chapterCount: 8, difficulty: 'advanced', estimatedTime: '4 hours'
    },
    {
      slug: 'design-patterns', title: 'Design Patterns',
      description: 'Creational, Structural, and Behavioral patterns with real-world Java implementations.',
      faIcon: 'fa-solid fa-puzzle-piece', accentColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)',
      chapterCount: 12, difficulty: 'intermediate', estimatedTime: '6 hours'
    }
  ];

  get totalChapters() {
    return this.courses.reduce((s, c) => s + c.chapterCount, 0);
  }

  get totalHours() {
    return this.courses.reduce((s, c) => s + parseInt(c.estimatedTime), 0);
  }

  handleRefresh(event: CustomEvent) {
    setTimeout(() => (event.detail as any).complete(), 500);
  }
}
