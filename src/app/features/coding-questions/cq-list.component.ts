import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cq-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <!-- Premium Hero Section -->
      <div class="hero-section">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-code hero-badge-icon"></i>
            Coding Practice
          </span>
          <h1 class="hero-title">Master Data Structures<br><span class="hero-accent">& Algorithms</span></h1>
          
          <!-- Premium Search Bar -->
          <div class="search-wrapper">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input class="search-input" placeholder="Search problems (e.g. Two Sum)..." />
          </div>
        </div>
      </div>

      <div class="page-body">
        <!-- Quick Category Filters -->
        <div class="filter-row">
          <button class="filter-chip filter-active">All</button>
          <button class="filter-chip">Easy</button>
          <button class="filter-chip">Medium</button>
          <button class="filter-chip">Hard</button>
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="section-head-left">
            <i class="fa-solid fa-folder-open section-icon"></i>
            <span class="section-title">Categories</span>
          </div>
          <span class="section-count">{{ categories.length }} topics</span>
        </div>

        <!-- Course Cards / Lists -->
        <div class="course-list">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/coding-questions', cat.key]" class="course-card" [style.--accent]="cat.accentColor">
              <!-- Accent top border -->
              <div class="course-accent-top"></div>

              <div class="course-card-inner">
                <!-- Icon -->
                <div class="course-icon" [style.background]="cat.iconBg">
                  <i [class]="cat.faIcon" class="course-fa-icon" [style.color]="cat.accentColor"></i>
                </div>

                <!-- Info -->
                <div class="course-info">
                  <h3 class="course-title">{{ cat.title }}</h3>
                  <div class="course-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-puzzle-piece meta-chip-icon"></i>
                      {{ cat.count }} problems
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

    /* ── Page Setup ── */
    .tut-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .brand-title {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: white;
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
      top: -40px;
      left: -40px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
    }
    .hero-glow-2 {
      bottom: -30px;
      right: -30px;
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
    }
    .hero-inner {
      position: relative;
      z-index: 1;
      text-align: left;
      margin-top: 10px;
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
      color: #10b981;
      background: rgba(16,185,129,0.1);
      border: 1px solid rgba(16,185,129,0.2);
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
      margin: 0 0 24px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Premium Search Bar */
    .search-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 50px;
      padding: 14px 22px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .search-wrapper:focus-within {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.2);
      box-shadow: 0 12px 32px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }
    .search-icon {
      font-size: 1rem;
      color: #94a3b8;
    }
    .search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-size: 0.95rem;
      font-weight: 500;
      color: #ffffff;
      font-family: inherit;
    }
    .search-input::placeholder {
      color: #64748b;
      font-weight: 400;
    }

    /* ── Page Body ── */
    .page-body {
      padding: 12px 16px 100px;
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
      padding: 8px 16px;
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
      background: rgba(16,185,129,0.15) !important;
      border-color: rgba(16,185,129,0.3) !important;
      color: #34d399 !important;
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
      color: #10b981;
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
      background: var(--accent, #10b981);
      opacity: 0.5;
      transition: opacity 0.2s;
    }
    .course-card:hover .course-accent-top {
      opacity: 0.9;
    }

    .course-card-inner {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px;
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
    }
    .course-fa-icon {
      font-size: 1.2rem;
    }

    /* Info */
    .course-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .course-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0;
      letter-spacing: -0.01em;
    }

    /* Meta */
    .course-meta {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      color: #94a3b8;
    }
    .meta-chip-icon {
      font-size: 0.55rem;
      opacity: 0.7;
    }

    /* Arrow */
    .course-arrow {
      flex-shrink: 0;
      font-size: 11px;
      color: #475569;
      transition: all 0.2s ease;
    }
    .course-card:hover .course-arrow {
      color: var(--accent, #10b981);
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

    /* Premium green hero */
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
    :host-context(html:not(.dark)) .search-wrapper {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.25);
    }
    :host-context(html:not(.dark)) .search-wrapper:focus-within {
      background: rgba(255,255,255,0.22);
      border-color: rgba(255,255,255,0.4);
    }
    :host-context(html:not(.dark)) .search-icon { color: rgba(255,255,255,0.75); }
    :host-context(html:not(.dark)) .search-input { color: #ffffff; }
    :host-context(html:not(.dark)) .search-input::placeholder { color: rgba(255,255,255,0.55); }

    /* Course cards */
    :host-context(html:not(.dark)) .course-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .course-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .course-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .meta-chip { color: #8A9B8F; }
    :host-context(html:not(.dark)) .course-arrow { color: #B7CCBB; }
    :host-context(html:not(.dark)) .course-card:hover .course-arrow { color: var(--accent, #1B4332); }
    :host-context(html:not(.dark)) .section-title { color: #52665A; }
    :host-context(html:not(.dark)) .section-count { color: #8A9B8F; }
    :host-context(html:not(.dark)) .section-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .footer-text { color: #8A9B8F; }

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
  `
})
export class CqListComponent {
  categories = [
    { key: 'arrays', title: 'Arrays & Strings', faIcon: 'fa-solid fa-chart-bar', accentColor: '#3b82f6', iconBg: 'rgba(59,130,246,0.12)', count: 15 },
    { key: 'linked-lists', title: 'Linked Lists', faIcon: 'fa-solid fa-link', accentColor: '#06b6d4', iconBg: 'rgba(6,182,212,0.12)', count: 10 },
    { key: 'trees', title: 'Trees & Graphs', faIcon: 'fa-solid fa-network-wired', accentColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)', count: 12 },
    { key: 'dp', title: 'Dynamic Programming', faIcon: 'fa-solid fa-calculator', accentColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.12)', count: 15 },
    { key: 'sorting', title: 'Sorting & Searching', faIcon: 'fa-solid fa-sort-amount-down', accentColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)', count: 8 },
    { key: 'stacks', title: 'Stacks & Queues', faIcon: 'fa-solid fa-layer-group', accentColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)', count: 8 },
    { key: 'recursion', title: 'Recursion & Backtracking', faIcon: 'fa-solid fa-rotate', accentColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)', count: 10 },
    { key: 'hashing', title: 'Hashing', faIcon: 'fa-solid fa-hashtag', accentColor: '#6366f1', iconBg: 'rgba(99,102,241,0.12)', count: 7 }
  ];
}
