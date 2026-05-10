import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonRefresher, IonRefresherContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';
import { DataService } from '../../data.service';

// Track membership (topic filter → course slugs)
const TRACK_MAP: Record<string, string> = {
  'core-java':       'core',
  'modern-java':     'core',
  'spring-framework':'spring',
  'spring-boot':     'spring',
  'hibernate':       'arch',
  'microservices':   'arch',
  'multithreading':  'concurrent',
  'design-patterns': 'concurrent',
};

// Difficulty accent colors for the top border — semantic, not decorative
const DIFF_ACCENT: Record<string, string> = {
  beginner:     '#10b981',
  intermediate: '#3b82f6',
  advanced:     '#f59e0b',
};

interface TutorialCourse {
  slug: string;
  title: string;
  description: string;
  faIcon: string;
  accentColor: string;
  iconBg: string;
  chapterCount: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

@Component({
  selector: 'app-tutorial-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'ion-page' },
  imports: [RouterLink, CommonModule, IonContent, IonRefresher, IonRefresherContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="tut-content">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <!-- ── Slim Hero ── -->
      <div class="hero-section">
        <div class="hero-inner">
          <h1 class="hero-title" aria-label="Java Tutorials">
            Java <span class="hero-accent">Tutorials</span>
          </h1>
          <p class="hero-meta">
            {{ courses.length }} courses&ensp;·&ensp;{{ totalChapters }} chapters&ensp;·&ensp;{{ totalHours }}h content
          </p>
          <!-- Inline search — fills negative space, solves discovery -->
          <div class="search-wrap">
            <i class="fa-solid fa-magnifying-glass search-icon" aria-hidden="true"></i>
            <input
              type="search"
              class="search-input"
              placeholder="Search courses and topics…"
              [value]="searchQuery()"
              (input)="searchQuery.set($any($event.target).value)"
              aria-label="Search courses and topics">
          </div>
        </div>
      </div>

      <div class="page-body">
        <!-- ── Filters: topic row + difficulty row ── -->
        <div class="filter-section">
          <!-- Row 1 — Topic -->
          <div class="filter-row" role="group" aria-label="Filter by topic">
            @for (t of topicFilters; track t.key) {
              <button
                class="filter-chip"
                [class.filter-active]="activeTrack() === t.key"
                [attr.aria-pressed]="activeTrack() === t.key"
                (click)="activeTrack.set(t.key)">
                <i [class]="t.faIcon" class="filter-chip-icon" [style.color]="t.color"></i>
                <span>{{ t.label }}</span>
              </button>
            }
          </div>
          <!-- Row 2 — Difficulty -->
          <div class="filter-row" role="group" aria-label="Filter by difficulty">
            @for (d of diffFilters; track d.key) {
              <button
                class="filter-chip"
                [class.filter-active]="activeDiff() === d.key"
                [attr.aria-pressed]="activeDiff() === d.key"
                (click)="activeDiff.set(d.key)">
                <span class="filter-diff-icon" [attr.data-level]="d.key">{{ d.icon }}</span>
                <span>{{ d.label }}</span>
              </button>
            }
          </div>
        </div>

        <!-- ── Results bar — replaces redundant "All Courses" heading ── -->
        <div class="results-bar">
          <span class="results-count">
            {{ filteredCourses().length }}&thinsp;/&thinsp;{{ courses.length }} courses
          </span>
          @if (hasActiveFilter()) {
            <button class="clear-btn" (click)="clearFilters()">Clear filters ✕</button>
          }
        </div>

        <!-- ── Course grid ── -->
        <div class="course-list" role="list">
          @for (c of filteredCourses(); track c.slug) {
            <a
              [routerLink]="['/tutorials', c.slug]"
              class="course-card"
              [attr.data-difficulty]="c.difficulty"
              [attr.data-status]="statusKey(c.slug)"
              role="listitem"
              [attr.aria-label]="c.title + ' — ' + c.difficulty + ' — ' + courseProgress()[c.slug] + '% complete'">

              <!-- Difficulty-mapped color accent (semantic, not decorative) -->
              <div class="course-accent-top" [style.background]="diffAccent(c.difficulty)"></div>

              <div class="course-card-inner">
                <!-- Icon column -->
                <div class="course-icon-wrap">
                  <div class="course-icon" [style.background]="c.iconBg">
                    <i [class]="c.faIcon" class="course-fa-icon" [style.color]="c.accentColor"></i>
                  </div>
                  <!-- "Start here" badge — Core Java only when not yet started -->
                  @if (c.slug === 'core-java' && courseProgress()[c.slug] === 0) {
                    <span class="start-here-badge" aria-label="Recommended starting course">
                      <i class="fa-solid fa-seedling"></i> Start here
                    </span>
                  }
                </div>

                <!-- Info column -->
                <div class="course-info">
                  <div class="course-title-row">
                    <h3 class="course-title">{{ c.title }}</h3>
                    @if (courseProgress()[c.slug] >= 100) {
                      <span class="status-chip status-done">
                        <i class="fa-solid fa-check"></i> Done
                      </span>
                    } @else if (courseProgress()[c.slug] > 0) {
                      <span class="status-chip status-progress">In Progress</span>
                    }
                  </div>

                  <p class="course-desc">{{ c.description }}</p>

                  <!-- Single meta row: diff · chapters · time -->
                  <div class="course-meta">
                    <span class="diff-tag" [attr.data-level]="c.difficulty">
                      {{ diffIcon(c.difficulty) }}&nbsp;{{ c.difficulty | titlecase }}
                    </span>
                    <span class="meta-dot">·</span>
                    <span class="meta-text">{{ c.chapterCount }} ch.</span>
                    <span class="meta-dot">·</span>
                    <span class="meta-text">{{ c.estimatedTime }}</span>
                  </div>

                  <!-- Progress bar — only shown for courses with any progress -->
                  @if (courseProgress()[c.slug] > 0) {
                    <div class="course-progress-wrap">
                      <div class="course-progress-track"
                           role="progressbar"
                           [attr.aria-valuenow]="courseProgress()[c.slug]"
                           aria-valuemin="0"
                           aria-valuemax="100"
                           [attr.aria-label]="c.title + ' progress'">
                        <div class="course-progress-fill" [style.width.%]="courseProgress()[c.slug]"></div>
                      </div>
                      <span class="course-progress-pct">{{ courseProgress()[c.slug] }}%</span>
                    </div>
                  }
                </div>

                <!-- CTA column: context-aware icon -->
                <div class="course-cta" aria-hidden="true">
                  @if (courseProgress()[c.slug] >= 100) {
                    <div class="cta-icon cta-done"><i class="fa-solid fa-check"></i></div>
                  } @else if (courseProgress()[c.slug] > 0) {
                    <div class="cta-icon cta-continue"><i class="fa-solid fa-play"></i></div>
                  } @else {
                    <div class="cta-icon cta-start"><i class="fa-solid fa-chevron-right"></i></div>
                  }
                </div>
              </div>
            </a>
          }

          <!-- Empty state -->
          @if (filteredCourses().length === 0) {
            <div class="empty-state">
              <i class="fa-solid fa-magnifying-glass empty-icon"></i>
              <p class="empty-title">No courses match these filters</p>
              <p class="empty-sub">Try clearing a filter or adjusting your search.</p>
              <button class="empty-clear" (click)="clearFilters()">Clear all filters</button>
            </div>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    /* ── Page ── */
    .tut-content {
      --background: #0b1120;
      --padding-start: 0;
      --padding-end: 0;
    }

    :host-context(html:not(.dark)) .tut-content {
      --background: #F5F7F2;
    }

    /* ════════════════════════════════════════
       SLIM HERO — ~1/3 the old height
       ════════════════════════════════════════ */
    .hero-section {
      background: linear-gradient(160deg, #0a1a12 0%, #1B4332 60%, #2D6A4F 100%);
      padding: 20px clamp(16px, 4vw, 64px) 24px;
      position: relative;
      overflow: hidden;
    }

    /* Ambient glow — subtle */
    .hero-section::before {
      content: '';
      position: absolute;
      top: -40px; right: -40px;
      width: 180px; height: 180px;
      background: radial-gradient(circle, rgba(116,198,157,0.12) 0%, transparent 65%);
      pointer-events: none;
    }

    .hero-inner { position: relative; z-index: 1; }

    .hero-title {
      font-family: 'Inter', sans-serif;
      font-size: clamp(1.5rem, 3.5vw, 2.2rem);
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 6px;
    }

    .hero-accent {
      color: #74c69d;
    }

    .hero-meta {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      color: rgba(255,255,255,0.55);
      font-weight: 500;
      margin: 0 0 16px;
      letter-spacing: 0.01em;
    }

    /* Search bar inside hero */
    .search-wrap {
      position: relative;
      max-width: 480px;
    }

    .search-icon {
      position: absolute;
      left: 13px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255,255,255,0.40);
      font-size: 0.78rem;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 11px 16px 11px 36px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 12px;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      font-size: 0.84rem;
      outline: none;
      transition: background 0.2s, border-color 0.2s;
    }

    .search-input::placeholder { color: rgba(255,255,255,0.35); }

    .search-input:focus {
      background: rgba(255,255,255,0.12);
      border-color: rgba(116,198,157,0.45);
    }

    /* Light mode hero */
    :host-context(html:not(.dark)) .hero-section {
      background: linear-gradient(160deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }

    :host-context(html:not(.dark)) .search-input {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.25);
      color: #fff;
    }

    :host-context(html:not(.dark)) .search-input::placeholder { color: rgba(255,255,255,0.55); }
    :host-context(html:not(.dark)) .search-input:focus { border-color: rgba(255,255,255,0.55); }

    /* ════════════════════════════════════════
       PAGE BODY
       ════════════════════════════════════════ */
    .page-body {
      padding: 20px clamp(16px, 4vw, 64px) 100px;
      width: 100%;
      box-sizing: border-box;
    }

    /* ════════════════════════════════════════
       FILTER SECTION — two rows
       ════════════════════════════════════════ */
    .filter-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .filter-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }

    .filter-row::-webkit-scrollbar { display: none; }

    .filter-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
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
      flex-shrink: 0;
    }

    .filter-chip:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.15);
      color: #e2e8f0;
    }

    .filter-active {
      background: rgba(116,198,157,0.15) !important;
      border-color: rgba(116,198,157,0.35) !important;
      color: #74c69d !important;
    }

    .filter-chip-icon { font-size: 0.68rem; }

    /* Difficulty icon colour in filter chips */
    .filter-diff-icon[data-level="beginner"]     { color: #10b981; }
    .filter-diff-icon[data-level="intermediate"] { color: #3b82f6; }
    .filter-diff-icon[data-level="advanced"]     { color: #f59e0b; }
    .filter-diff-icon[data-level=""]             { color: #94a3b8; }

    /* Light mode filter chips */
    :host-context(html:not(.dark)) .filter-chip {
      background: #ffffff;
      border-color: #D6DDD2;
      color: #52665A;
    }
    :host-context(html:not(.dark)) .filter-chip:hover {
      background: #F5F7F2;
      border-color: #B7CCBB;
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .filter-active {
      background: #1B4332 !important;
      color: #fff !important;
      border-color: #1B4332 !important;
    }

    /* ── Results bar ── */
    .results-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    .results-count {
      font-family: 'Inter', sans-serif;
      font-size: 0.70rem;
      font-weight: 600;
      color: #475569;
    }

    :host-context(html:not(.dark)) .results-count { color: #8A9B8F; }

    .clear-btn {
      font-size: 0.68rem;
      font-weight: 700;
      color: #74c69d;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: opacity 0.15s;
    }

    .clear-btn:hover { opacity: 0.75; }

    :host-context(html:not(.dark)) .clear-btn { color: #2D6A4F; }

    /* ════════════════════════════════════════
       COURSE GRID
       ════════════════════════════════════════ */
    .course-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* ════════════════════════════════════════
       COURSE CARD
       ════════════════════════════════════════ */
    .course-card {
      position: relative;
      display: block;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.18s ease, border-color 0.15s;
    }

    .course-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(0,0,0,0.28);
      border-color: rgba(255,255,255,0.12);
    }

    .course-card:focus-visible {
      outline: 3px solid #74c69d;
      outline-offset: 2px;
    }

    /* Top accent bar — color is set inline per difficulty */
    .course-accent-top {
      height: 3px;
      transition: opacity 0.2s;
      opacity: 0.55;
    }
    .course-card:hover .course-accent-top { opacity: 1; }

    .course-card-inner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 14px 16px;
    }

    /* Icon column */
    .course-icon-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .course-icon {
      width: 46px;
      height: 46px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .course-fa-icon { font-size: 1.15rem; }

    /* "Start here" badge */
    .start-here-badge {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-family: 'Inter', sans-serif;
      font-size: 0.58rem;
      font-weight: 800;
      color: #34d399;
      background: rgba(16,185,129,0.14);
      border: 1px solid rgba(16,185,129,0.30);
      border-radius: 20px;
      padding: 2px 7px;
      white-space: nowrap;
      letter-spacing: 0.02em;
    }

    :host-context(html:not(.dark)) .start-here-badge {
      color: #059669;
      background: rgba(5,150,105,0.10);
      border-color: rgba(5,150,105,0.28);
    }

    /* Info column */
    .course-info {
      flex: 1;
      min-width: 0;
    }

    .course-title-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
      flex-wrap: wrap;
    }

    .course-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0;
      letter-spacing: -0.01em;
    }

    :host-context(html:not(.dark)) .course-title { color: #14241B; }

    /* Status chips — "In Progress" / "Done" */
    .status-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.60rem;
      font-weight: 800;
      border-radius: 20px;
      padding: 2px 8px;
      white-space: nowrap;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }

    .status-progress {
      background: rgba(59,130,246,0.15);
      color: #60a5fa;
      border: 1px solid rgba(59,130,246,0.28);
    }

    .status-done {
      background: rgba(16,185,129,0.15);
      color: #34d399;
      border: 1px solid rgba(16,185,129,0.28);
    }

    :host-context(html:not(.dark)) .status-progress {
      background: rgba(59,130,246,0.10);
      color: #2563eb;
      border-color: rgba(59,130,246,0.25);
    }

    :host-context(html:not(.dark)) .status-done {
      background: rgba(5,150,105,0.10);
      color: #059669;
      border-color: rgba(5,150,105,0.25);
    }

    /* Description — clamp-2 for consistent card height */
    .course-desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.76rem;
      color: #64748b;
      line-height: 1.52;
      margin: 0 0 9px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    :host-context(html:not(.dark)) .course-desc { color: #52665A; }

    /* Meta row — single readable line */
    .course-meta {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }

    .meta-dot {
      color: #334155;
      font-size: 0.65rem;
    }

    :host-context(html:not(.dark)) .meta-dot { color: #B7CCBB; }

    .meta-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.67rem;
      font-weight: 600;
      color: #64748b;
    }

    :host-context(html:not(.dark)) .meta-text { color: #8A9B8F; }

    /* Difficulty tag — consistent size and visual weight across all levels */
    .diff-tag {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-family: 'Inter', sans-serif;
      font-size: 0.66rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      padding: 2px 8px;
      border-radius: 6px;
    }

    .diff-tag[data-level="beginner"] {
      background: rgba(16,185,129,0.14);
      color: #34d399;
    }
    .diff-tag[data-level="intermediate"] {
      background: rgba(59,130,246,0.14);
      color: #60a5fa;
    }
    .diff-tag[data-level="advanced"] {
      background: rgba(245,158,11,0.14);
      color: #fbbf24;
    }

    :host-context(html:not(.dark)) .diff-tag[data-level="beginner"] {
      background: rgba(5,150,105,0.10); color: #059669;
    }
    :host-context(html:not(.dark)) .diff-tag[data-level="intermediate"] {
      background: rgba(37,99,235,0.08); color: #1d4ed8;
    }
    :host-context(html:not(.dark)) .diff-tag[data-level="advanced"] {
      background: rgba(217,119,6,0.10); color: #b45309;
    }

    /* Progress bar */
    .course-progress-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .course-progress-track {
      flex: 1;
      height: 5px;
      background: rgba(255,255,255,0.08);
      border-radius: 999px;
      overflow: hidden;
    }

    :host-context(html:not(.dark)) .course-progress-track { background: #E6E2D8; }

    .course-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981, #34d399);
      border-radius: 999px;
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
    }

    .course-progress-pct {
      font-size: 0.65rem;
      font-weight: 700;
      color: #64748b;
      white-space: nowrap;
      min-width: 26px;
      text-align: right;
    }

    :host-context(html:not(.dark)) .course-progress-pct { color: #8A9B8F; }

    /* CTA column — context-aware icon */
    .course-cta { flex-shrink: 0; margin-top: 14px; }

    .cta-icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.72rem;
      transition: transform 0.18s ease;
    }

    .course-card:hover .cta-icon { transform: translateX(2px); }

    .cta-start {
      background: rgba(255,255,255,0.05);
      color: #64748b;
    }

    .cta-continue {
      background: rgba(59,130,246,0.15);
      color: #60a5fa;
    }

    .cta-done {
      background: rgba(16,185,129,0.15);
      color: #34d399;
    }

    :host-context(html:not(.dark)) .cta-start {
      background: rgba(27,67,50,0.06);
      color: #B7CCBB;
    }
    :host-context(html:not(.dark)) .cta-continue {
      background: rgba(37,99,235,0.08);
      color: #2563eb;
    }
    :host-context(html:not(.dark)) .cta-done {
      background: rgba(5,150,105,0.10);
      color: #059669;
    }

    /* Light mode card */
    :host-context(html:not(.dark)) .course-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .course-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.10);
    }

    /* ── Empty state ── */
    .empty-state {
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 24px;
      text-align: center;
      gap: 8px;
    }

    .empty-icon {
      font-size: 2rem;
      color: #334155;
      margin-bottom: 4px;
    }

    :host-context(html:not(.dark)) .empty-icon { color: #B7CCBB; }

    .empty-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #64748b;
      margin: 0;
    }

    .empty-sub {
      font-family: 'Inter', sans-serif;
      font-size: 0.80rem;
      color: #475569;
      margin: 0;
    }

    :host-context(html:not(.dark)) .empty-title { color: #52665A; }
    :host-context(html:not(.dark)) .empty-sub   { color: #8A9B8F; }

    .empty-clear {
      margin-top: 12px;
      padding: 8px 20px;
      background: #1B4332;
      color: #fff;
      border: none;
      border-radius: 20px;
      font-size: 0.80rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s;
    }
    .empty-clear:hover { background: #2D6A4F; }

    /* ════════════════════════════════════════
       RESPONSIVE
       ════════════════════════════════════════ */
    @media (min-width: 640px) {
      .hero-section { padding: 22px clamp(24px,5vw,72px) 28px; }
      .page-body    { padding: 24px clamp(24px,5vw,72px) 100px; }
      .course-list  { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .filter-row   { flex-wrap: wrap; overflow-x: visible; }
    }

    @media (min-width: 1024px) {
      .hero-section { padding: 24px clamp(32px,5vw,80px) 30px; }
      .page-body    { padding: 28px clamp(32px,5vw,80px) 120px; }
      .course-list  { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    }

    /* 3-column at 1200px — reduces excessive blank space */
    @media (min-width: 1200px) {
      .course-list { grid-template-columns: repeat(3, 1fr); }
    }

    /* 4-column at 1500px */
    @media (min-width: 1500px) {
      .page-body   { padding: 32px clamp(48px,6vw,96px) 120px; }
      .course-list { grid-template-columns: repeat(4, 1fr); }
    }
  `
})
export class TutorialListComponent {
  private dataService = inject(DataService);

  // ── Filter state ──────────────────────────────────────────────
  searchQuery = signal('');
  activeTrack  = signal('');
  activeDiff   = signal('');

  topicFilters = [
    { faIcon: 'fa-solid fa-layer-group',  label: 'All',          key: '',         color: '#94a3b8' },
    { faIcon: 'fa-solid fa-mug-hot',      label: 'Core Java',    key: 'core',     color: '#f59e0b' },
    { faIcon: 'fa-solid fa-leaf',         label: 'Spring',       key: 'spring',   color: '#10b981' },
    { faIcon: 'fa-solid fa-cubes',        label: 'Architecture', key: 'arch',     color: '#3b82f6' },
    { faIcon: 'fa-solid fa-bolt',         label: 'Concurrent',   key: 'concurrent', color: '#ef4444' },
  ];

  diffFilters = [
    { icon: '◉', label: 'All levels',    key: ''             },
    { icon: '◐', label: 'Beginner',      key: 'beginner'     },
    { icon: '●', label: 'Intermediate',  key: 'intermediate' },
    { icon: '▲', label: 'Advanced',      key: 'advanced'     },
  ];

  // ── Course data ───────────────────────────────────────────────
  courses: TutorialCourse[] = [
    {
      slug: 'core-java', title: 'Core Java',
      description: 'OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.',
      faIcon: 'fa-solid fa-mug-hot', accentColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)',
      chapterCount: 47, difficulty: 'beginner', estimatedTime: '15h'
    },
    {
      slug: 'spring-framework', title: 'Spring Framework',
      description: 'IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.',
      faIcon: 'fa-solid fa-leaf', accentColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)',
      chapterCount: 12, difficulty: 'intermediate', estimatedTime: '10h'
    },
    {
      slug: 'spring-boot', title: 'Spring Boot',
      description: 'Auto-configuration, starters, REST APIs, security, actuator, and production deployment.',
      faIcon: 'fa-solid fa-rocket', accentColor: '#3b82f6', iconBg: 'rgba(59,130,246,0.12)',
      chapterCount: 18, difficulty: 'intermediate', estimatedTime: '10h'
    },
    {
      slug: 'hibernate', title: 'Hibernate & JPA',
      description: 'ORM fundamentals, entity mapping, relationships, caching, and performance tuning.',
      faIcon: 'fa-solid fa-database', accentColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)',
      chapterCount: 10, difficulty: 'intermediate', estimatedTime: '5h'
    },
    {
      slug: 'microservices', title: 'Microservices',
      description: 'Service discovery, API gateway, circuit breakers, event-driven design, and Docker.',
      faIcon: 'fa-solid fa-cubes', accentColor: '#06b6d4', iconBg: 'rgba(6,182,212,0.12)',
      chapterCount: 14, difficulty: 'advanced', estimatedTime: '8h'
    },
    {
      slug: 'multithreading', title: 'Multithreading',
      description: 'Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.',
      faIcon: 'fa-solid fa-bolt', accentColor: '#eab308', iconBg: 'rgba(234,179,8,0.12)',
      chapterCount: 8, difficulty: 'advanced', estimatedTime: '4h'
    },
    {
      slug: 'design-patterns', title: 'Design Patterns',
      description: 'Creational, Structural, and Behavioral patterns with real-world Java implementations.',
      faIcon: 'fa-solid fa-puzzle-piece', accentColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)',
      chapterCount: 21, difficulty: 'intermediate', estimatedTime: '8h'
    },
    {
      slug: 'modern-java', title: 'Modern Java 17–21',
      description: 'Text Blocks, Records, Sealed Classes, Pattern Matching, Switch Expressions, Virtual Threads.',
      faIcon: 'fa-solid fa-wand-magic-sparkles', accentColor: '#0d9488', iconBg: 'rgba(13,148,136,0.12)',
      chapterCount: 5, difficulty: 'intermediate', estimatedTime: '2h'
    },
  ];

  // ── Computed progress map — reactive to completedTopicIds signal ──
  courseProgress = computed((): Record<string, number> => {
    const map: Record<string, number> = {};
    for (const c of this.courses) {
      map[c.slug] = this.dataService.getCourseProgress(c.slug, c.chapterCount);
    }
    return map;
  });

  // ── Filtered + sorted courses ──────────────────────────────────
  filteredCourses = computed((): TutorialCourse[] => {
    const q     = this.searchQuery().toLowerCase().trim();
    const track = this.activeTrack();
    const diff  = this.activeDiff();
    const prog  = this.courseProgress();

    const list = this.courses.filter(c => {
      if (q && !c.title.toLowerCase().includes(q) && !c.description.toLowerCase().includes(q)) return false;
      if (track && TRACK_MAP[c.slug] !== track) return false;
      if (diff && c.difficulty !== diff) return false;
      return true;
    });

    // Sort: in-progress → not-started → completed
    const rank = (slug: string) => {
      const pct = prog[slug] ?? 0;
      if (pct > 0 && pct < 100) return 0;
      if (pct === 0)             return 1;
      return 2;
    };
    return [...list].sort((a, b) => rank(a.slug) - rank(b.slug));
  });

  hasActiveFilter = computed(() =>
    this.searchQuery().trim() !== '' || this.activeTrack() !== '' || this.activeDiff() !== ''
  );

  // ── Helpers ───────────────────────────────────────────────────
  clearFilters(): void {
    this.searchQuery.set('');
    this.activeTrack.set('');
    this.activeDiff.set('');
  }

  diffIcon(level: string): string {
    return level === 'advanced' ? '▲' : level === 'intermediate' ? '●' : '◐';
  }

  diffAccent(level: string): string {
    return DIFF_ACCENT[level] ?? '#74c69d';
  }

  statusKey(slug: string): string {
    const pct = this.courseProgress()[slug] ?? 0;
    if (pct >= 100) return 'completed';
    if (pct > 0)    return 'in-progress';
    return 'not-started';
  }

  get totalChapters(): number {
    return this.courses.reduce((s, c) => s + c.chapterCount, 0);
  }

  get totalHours(): number {
    return this.courses.reduce((s, c) => s + parseInt(c.estimatedTime), 0);
  }

  handleRefresh(event: CustomEvent): void {
    setTimeout(() => (event.detail as any).complete(), 500);
  }
}
