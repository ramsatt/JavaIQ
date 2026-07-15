import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';
import { CODING_CATEGORIES } from '../../data/coding-problems';
import { InlineAdComponent } from '../../shared/inline-ad.component';

type DiffFilter = 'all' | 'easy' | 'medium' | 'hard';
type StatusFilter = 'all' | 'solved' | 'unsolved';
type ViewMode = 'grid' | 'list';

interface EnrichedCategory {
  key: string;
  title: string;
  faIcon: string;
  accentColor: string;
  iconBg: string;
  count: number;
  easyCount: number;
  mediumCount: number;
  hardCount: number;
  sampleTitles: string[];
  dominantDifficulty: 'easy' | 'medium' | 'hard';
  solvedCount: number;
  solvedPct: number;
}

interface FlatProblem {
  id: string;
  categoryKey: string;
  categoryTitle: string;
  title: string;
  difficulty: string;
  companies: string[];
}

@Component({
  selector: 'app-cq-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, AppHeaderComponent, IonHeader, InlineAdComponent],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="cq-content">

      <!-- ── Compact Hero ── -->
      <div class="hero-section">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="hero-inner">
          <div class="hero-top-row">
            <div>
              <h1 class="hero-title">Practice Problems<span class="hero-accent"> / Java</span></h1>
              <p class="hero-sub">Algorithms · Data Structures · Java-specific patterns · Interview prep</p>
            </div>
            <div class="hero-stat-badge" aria-label="{{ totalSolved() }} of {{ totalProblems }} problems solved">
              <span class="hero-stat-num">{{ totalSolved() }}</span>
              <span class="hero-stat-sep">/</span>
              <span class="hero-stat-den">{{ totalProblems }}</span>
              <span class="hero-stat-lbl">solved</span>
            </div>
          </div>

          <!-- Search -->
          <div class="search-wrapper" role="search">
            <i class="fa-solid fa-magnifying-glass search-icon" aria-hidden="true"></i>
            <input
              class="search-input"
              aria-label="Search problems, topics, or companies"
              placeholder="Search {{ totalProblems }}+ problems, topics, or companies…"
              [value]="searchQuery()"
              (input)="onSearch($event)" />
            <span class="search-kbd" aria-hidden="true">/</span>
            @if (searchQuery()) {
              <button class="search-clear" (click)="clearSearch()" aria-label="Clear search">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            }
          </div>
        </div>
      </div>

      <div class="page-body">

        <!-- ── Resume + Daily row ── -->
        @if (lastViewed() || dailyProblem()) {
          <div class="action-row">
            @if (lastViewed(); as lv) {
              <a [routerLink]="['/coding-questions', lv.catKey]" class="action-card resume-card">
                <div class="action-icon resume-icon" aria-hidden="true">
                  <i class="fa-solid fa-play"></i>
                </div>
                <div class="action-info">
                  <span class="action-label">Continue</span>
                  <span class="action-title">{{ lv.catTitle }}</span>
                </div>
                <span class="action-cta">Resume →</span>
              </a>
            }
            @if (dailyProblem(); as dp) {
              <a [routerLink]="['/coding-questions', dp.categoryKey]" class="action-card daily-card">
                <div class="action-icon daily-icon" aria-hidden="true">
                  <i class="fa-solid fa-fire"></i>
                </div>
                <div class="action-info">
                  <span class="action-label">Daily Challenge</span>
                  <span class="action-title">{{ dp.title }}</span>
                  <span class="action-diff" [class]="dp.difficulty.toLowerCase()">{{ dp.difficulty }}</span>
                </div>
                <span class="action-cta">Start →</span>
              </a>
            }
          </div>
        }

        <!-- ── Filter bar ── -->
        <div class="filter-bar">
          <!-- Difficulty chips -->
          <div class="filter-group" role="radiogroup" aria-label="Filter by difficulty">
            @for (opt of diffOptions; track opt.value) {
              <button
                class="diff-chip"
                [class.active]="diffFilter() === opt.value"
                [class]="diffFilter() === opt.value && opt.value !== 'all' ? 'diff-chip active ' + opt.value : 'diff-chip' + (opt.value === diffFilter() ? ' active' : '')"
                (click)="setDiff(opt.value)"
                role="radio"
                [attr.aria-checked]="diffFilter() === opt.value">
                {{ opt.label }}
              </button>
            }
          </div>

          <div class="filter-spacer"></div>

          <!-- View toggle -->
          <div class="view-toggle" role="group" aria-label="View mode">
            <button
              class="view-btn"
              [class.active]="viewMode() === 'grid'"
              (click)="setView('grid')"
              aria-label="Grid view"
              [attr.aria-pressed]="viewMode() === 'grid'">
              <i class="fa-solid fa-grip" aria-hidden="true"></i>
            </button>
            <button
              class="view-btn"
              [class.active]="viewMode() === 'list'"
              (click)="setView('list')"
              aria-label="List view"
              [attr.aria-pressed]="viewMode() === 'list'">
              <i class="fa-solid fa-list" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <!-- Status filter -->
        <div class="status-bar" role="radiogroup" aria-label="Filter by status">
          @for (opt of statusOptions; track opt.value) {
            <button
              class="status-chip"
              [class.active]="statusFilter() === opt.value"
              (click)="setStatus(opt.value)"
              role="radio"
              [attr.aria-checked]="statusFilter() === opt.value">
              {{ opt.label }}
            </button>
          }
        </div>

        <!-- Section header -->
        <div class="section-head">
          <span class="section-count">
            @if (viewMode() === 'grid') {
              {{ filteredCategories().length }} {{ filteredCategories().length === 1 ? 'topic' : 'topics' }}
            } @else {
              {{ filteredProblems().length }} problems
            }
          </span>
        </div>

        <!-- No results -->
        @if ((viewMode() === 'grid' && filteredCategories().length === 0) ||
             (viewMode() === 'list' && filteredProblems().length === 0)) {
          <div class="no-results" role="status">
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true" style="font-size:1.4rem;color:#475569;margin-bottom:8px"></i>
            <p>No results for "{{ searchQuery() }}"</p>
            <button class="no-results-clear" (click)="clearFilters()">Clear filters</button>
          </div>
        }

        <!-- ── Grid view ── -->
        @if (viewMode() === 'grid') {
          <div class="cat-grid">
            @for (cat of filteredCategories(); track cat.key; let i = $index) {
              @if (i === 2) {
                <!-- Native Ad -->
                <app-inline-ad label="Coding Questions Native Ad"></app-inline-ad>
              }
              <button
                class="cat-card"
                (click)="navigateToCat(cat.key, cat.title)"
                [attr.aria-label]="cat.title + ', ' + cat.count + ' problems, ' + cat.solvedCount + ' solved'">

                <!-- Difficulty-keyed top tint bar -->
                <div class="cat-top-bar" [class]="'bar-' + cat.dominantDifficulty" aria-hidden="true"></div>

                <div class="cat-body">
                  <!-- Icon + title + difficulty mix -->
                  <div class="cat-header-row">
                    <div class="cat-icon" [style.background]="cat.iconBg" aria-hidden="true">
                      <i [class]="cat.faIcon" [style.color]="cat.accentColor"></i>
                    </div>
                    <div class="cat-title-area">
                      <h3 class="cat-title">{{ cat.title }}</h3>
                      <div class="diff-mix" aria-hidden="true">
                        @if (cat.easyCount > 0) {
                          <span class="diff-pip easy">{{ cat.easyCount }}E</span>
                        }
                        @if (cat.mediumCount > 0) {
                          <span class="diff-pip medium">{{ cat.mediumCount }}M</span>
                        }
                        @if (cat.hardCount > 0) {
                          <span class="diff-pip hard">{{ cat.hardCount }}H</span>
                        }
                      </div>
                    </div>
                  </div>

                  <!-- Sample problem titles -->
                  <div class="sample-list" aria-hidden="true">
                    @for (t of cat.sampleTitles; track t) {
                      <span class="sample-item">{{ t }}</span>
                    }
                    @if (cat.count > 2) {
                      <span class="sample-more">+{{ cat.count - 2 }} more</span>
                    }
                  </div>

                  <!-- Progress bar -->
                  <div class="cat-progress">
                    <div class="cat-progress-track" role="progressbar"
                         [attr.aria-valuenow]="cat.solvedCount"
                         [attr.aria-valuemax]="cat.count"
                         [attr.aria-label]="cat.solvedCount + ' of ' + cat.count + ' problems solved'">
                      <div class="cat-progress-fill" [style.width.%]="cat.solvedPct"></div>
                    </div>
                    <span class="cat-progress-label">{{ cat.solvedCount }}&nbsp;/&nbsp;{{ cat.count }} solved</span>
                  </div>
                </div>

                <!-- Footer: View CTA (visible on hover) -->
                <div class="cat-footer" aria-hidden="true">
                  <span class="cat-cta">View problems</span>
                  <i class="fa-solid fa-chevron-right cat-arrow"></i>
                </div>
              </button>
            }
          </div>
        }

        <!-- ── List view ── -->
        @if (viewMode() === 'list') {
          <div class="prob-list" role="list">
            @for (prob of filteredProblems(); track prob.id; let i = $index) {
              <a
                [routerLink]="['/coding-questions', prob.categoryKey]"
                class="prob-row"
                role="listitem"
                [attr.aria-label]="prob.title + ', ' + prob.difficulty + ', ' + prob.categoryTitle">
                <span class="prob-num" aria-hidden="true">{{ i + 1 }}</span>
                <span class="prob-title">{{ prob.title }}</span>
                <span class="prob-cat">{{ prob.categoryTitle }}</span>
                <span class="prob-diff" [class]="prob.difficulty.toLowerCase()">{{ prob.difficulty }}</span>
                <div class="prob-companies" aria-hidden="true">
                  @for (co of prob.companies.slice(0, 2); track co) {
                    <span class="co-chip">{{ co }}</span>
                  }
                </div>
                <i class="fa-solid fa-chevron-right prob-arrow" aria-hidden="true"></i>
              </a>
            }
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    /* ── Page Setup ── */
    .cq-content {
      --background: #0b1120;
      --padding-start: 0;
      --padding-end: 0;
    }

    /* ── Hero Section ── */
    .hero-section {
      position: relative;
      padding: 20px clamp(16px, 4vw, 64px) 28px;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .hero-glow-1 {
      top: -60px; left: -40px;
      width: 220px; height: 220px;
      background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);
    }
    .hero-glow-2 {
      bottom: -40px; right: -30px;
      width: 180px; height: 180px;
      background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
    }
    .hero-inner {
      position: relative;
      z-index: 1;
    }
    .hero-top-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 16px;
    }
    .hero-title {
      font-size: 1.55rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 6px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub {
      font-size: 0.78rem;
      color: #64748b;
      margin: 0;
      line-height: 1.4;
    }
    .hero-stat-badge {
      flex-shrink: 0;
      display: flex;
      align-items: baseline;
      gap: 3px;
      background: rgba(16,185,129,0.08);
      border: 1px solid rgba(16,185,129,0.18);
      border-radius: 10px;
      padding: 8px 14px;
      white-space: nowrap;
    }
    .hero-stat-num {
      font-size: 1.2rem;
      font-weight: 800;
      color: #10b981;
      letter-spacing: -0.03em;
    }
    .hero-stat-sep {
      font-size: 0.85rem;
      color: #475569;
      font-weight: 600;
    }
    .hero-stat-den {
      font-size: 0.85rem;
      color: #94a3b8;
      font-weight: 600;
    }
    .hero-stat-lbl {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #475569;
      align-self: center;
      margin-left: 2px;
    }

    /* Search */
    .search-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 50px;
      padding: 12px 20px;
      transition: all 0.25s ease;
    }
    .search-wrapper:focus-within {
      background: rgba(255,255,255,0.07);
      border-color: rgba(16,185,129,0.35);
      box-shadow: 0 0 0 3px rgba(16,185,129,0.08);
    }
    .search-icon { font-size: 0.9rem; color: #64748b; flex-shrink: 0; }
    .search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-size: 0.9rem;
      font-weight: 500;
      color: #e2e8f0;
      min-width: 0;
    }
    .search-input::placeholder { color: #475569; font-weight: 400; }
    .search-kbd {
      flex-shrink: 0;
      font-size: 0.65rem;
      font-weight: 700;
      color: #334155;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px;
      padding: 2px 7px;
      font-family: monospace;
    }
    .search-wrapper:focus-within .search-kbd { display: none; }
    .search-clear {
      background: none; border: none; color: #475569; cursor: pointer;
      padding: 3px 5px; font-size: 0.75rem; flex-shrink: 0; transition: color 0.15s;
    }
    .search-clear:hover { color: #f87171; }

    /* ── Page Body ── */
    .page-body {
      padding: 8px clamp(16px, 4vw, 64px) 100px;
    }

    /* ── Action Row (Resume + Daily) ── */
    .action-row {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .action-card {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 240px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 14px 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }
    .action-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.12);
      transform: translateY(-1px);
    }
    .action-card:focus-visible {
      outline: 2px solid #10b981;
      outline-offset: 2px;
    }
    .action-icon {
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
    }
    .resume-icon { background: rgba(16,185,129,0.12); color: #10b981; }
    .daily-icon  { background: rgba(249,115,22,0.12); color: #f97316; }
    .action-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .action-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #64748b;
    }
    .action-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #e2e8f0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .action-diff {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .action-diff.easy   { color: #10b981; }
    .action-diff.medium { color: #f59e0b; }
    .action-diff.hard   { color: #ef4444; }
    .action-cta {
      flex-shrink: 0;
      font-size: 0.78rem;
      font-weight: 700;
      color: #10b981;
      white-space: nowrap;
    }

    /* ── Filter Bar ── */
    .filter-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }
    .filter-group {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .filter-spacer { flex: 1; min-width: 8px; }

    /* Difficulty chips */
    .diff-chip {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      color: #94a3b8;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 5px 14px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .diff-chip:hover { background: rgba(255,255,255,0.07); color: #e2e8f0; }
    .diff-chip.active {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
      color: #e2e8f0;
    }
    .diff-chip:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }

    /* Status bar */
    .status-bar {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .status-chip {
      background: transparent;
      border: 1px solid transparent;
      border-radius: 6px;
      color: #64748b;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 4px 12px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .status-chip:hover { color: #94a3b8; }
    .status-chip.active {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      color: #e2e8f0;
    }
    .status-chip:focus-visible { outline: 2px solid #10b981; outline-offset: 2px; }

    /* View toggle */
    .view-toggle {
      display: flex;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      overflow: hidden;
    }
    .view-btn {
      background: transparent;
      border: none;
      color: #64748b;
      font-size: 0.8rem;
      padding: 6px 10px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .view-btn:hover { color: #94a3b8; background: rgba(255,255,255,0.04); }
    .view-btn.active { color: #10b981; background: rgba(16,185,129,0.08); }
    .view-btn:focus-visible { outline: 2px solid #10b981; outline-offset: -2px; }

    /* Section header */
    .section-head {
      margin-bottom: 12px;
    }
    .section-count {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #475569;
    }

    /* No results */
    .no-results {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 24px;
      color: #475569;
      font-size: 0.82rem;
      gap: 8px;
    }
    .no-results p { margin: 0; color: #64748b; }
    .no-results-clear {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px;
      color: #94a3b8;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 6px 16px;
      cursor: pointer;
      margin-top: 4px;
      transition: all 0.15s;
    }
    .no-results-clear:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.2); }

    /* ── Category Grid ── */
    .cat-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    @media (min-width: 640px) {
      .cat-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    }
    @media (min-width: 1024px) {
      .cat-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
    }

    /* Category card */
    .cat-card {
      position: relative;
      display: flex;
      flex-direction: column;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      overflow: hidden;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 0;
    }
    .cat-card:hover {
      background: rgba(255,255,255,0.055);
      border-color: rgba(255,255,255,0.12);
      box-shadow: 0 8px 28px rgba(0,0,0,0.25);
      transform: translateY(-2px);
    }
    .cat-card:active { transform: scale(0.99); }
    .cat-card:focus-visible {
      outline: 2px solid #10b981;
      outline-offset: 2px;
    }

    /* Difficulty tint bar — encodes dominant difficulty of the topic */
    .cat-top-bar {
      height: 3px;
      width: 100%;
      transition: height 0.2s ease;
    }
    .cat-card:hover .cat-top-bar { height: 4px; }
    .bar-easy   { background: linear-gradient(90deg, #10b981, #34d399); }
    .bar-medium { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
    .bar-hard   { background: linear-gradient(90deg, #ef4444, #f87171); }

    .cat-body {
      flex: 1;
      padding: 14px 16px 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .cat-header-row {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .cat-icon {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
    .cat-title-area {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .cat-title {
      font-size: 0.92rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0;
      letter-spacing: -0.01em;
      line-height: 1.3;
    }
    .diff-mix {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }
    .diff-pip {
      font-size: 0.6rem;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      letter-spacing: 0.02em;
    }
    .diff-pip.easy   { color: #10b981; background: rgba(16,185,129,0.1); }
    .diff-pip.medium { color: #f59e0b; background: rgba(245,158,11,0.1); }
    .diff-pip.hard   { color: #ef4444; background: rgba(239,68,68,0.1); }

    /* Sample problems */
    .sample-list {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .sample-item {
      font-size: 0.72rem;
      color: #64748b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 10px;
      position: relative;
    }
    .sample-item::before {
      content: '·';
      position: absolute;
      left: 2px;
      color: #334155;
    }
    .sample-more {
      font-size: 0.68rem;
      color: #475569;
      padding-left: 10px;
      font-weight: 600;
    }

    /* Progress */
    .cat-progress {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cat-progress-track {
      flex: 1;
      height: 5px;
      background: rgba(255,255,255,0.06);
      border-radius: 3px;
      overflow: hidden;
    }
    .cat-progress-fill {
      height: 100%;
      background: #10b981;
      border-radius: 3px;
      transition: width 0.4s ease;
      min-width: 0;
    }
    .cat-progress-label {
      font-size: 0.62rem;
      font-weight: 600;
      color: #475569;
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* Card footer with View CTA */
    .cat-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 9px 16px;
      border-top: 1px solid rgba(255,255,255,0.04);
      background: rgba(255,255,255,0.01);
    }
    .cat-cta {
      font-size: 0.72rem;
      font-weight: 700;
      color: #475569;
      transition: color 0.2s;
    }
    .cat-card:hover .cat-cta { color: #10b981; }
    .cat-arrow {
      font-size: 0.65rem;
      color: #334155;
      transition: all 0.2s ease;
    }
    .cat-card:hover .cat-arrow {
      color: #10b981;
      transform: translateX(2px);
    }

    /* ── List view ── */
    .prob-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      overflow: hidden;
    }
    .prob-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 16px;
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      transition: background 0.15s ease;
    }
    .prob-row:last-child { border-bottom: none; }
    .prob-row:hover { background: rgba(255,255,255,0.04); }
    .prob-row:focus-visible { outline: 2px solid #10b981; outline-offset: -2px; }
    .prob-num {
      flex-shrink: 0;
      width: 28px;
      font-size: 0.7rem;
      font-weight: 600;
      color: #334155;
      text-align: right;
    }
    .prob-title {
      flex: 1;
      font-size: 0.88rem;
      font-weight: 600;
      color: #cbd5e1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .prob-row:hover .prob-title { color: #e2e8f0; }
    .prob-cat {
      flex-shrink: 0;
      font-size: 0.65rem;
      font-weight: 600;
      color: #475569;
      background: rgba(255,255,255,0.04);
      border-radius: 4px;
      padding: 2px 7px;
      display: none;
    }
    @media (min-width: 640px) { .prob-cat { display: inline; } }
    .prob-diff {
      flex-shrink: 0;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 2px 8px;
      border-radius: 5px;
    }
    .prob-diff.easy   { color: #10b981; background: rgba(16,185,129,0.1); }
    .prob-diff.medium { color: #f59e0b; background: rgba(245,158,11,0.1); }
    .prob-diff.hard   { color: #ef4444; background: rgba(239,68,68,0.1); }
    .prob-companies {
      display: none;
      gap: 4px;
      flex-shrink: 0;
    }
    @media (min-width: 768px) { .prob-companies { display: flex; } }
    .co-chip {
      font-size: 0.6rem;
      font-weight: 600;
      color: #475569;
      background: rgba(255,255,255,0.04);
      border-radius: 4px;
      padding: 2px 6px;
    }
    .prob-arrow {
      flex-shrink: 0;
      font-size: 0.65rem;
      color: #334155;
      transition: all 0.2s;
    }
    .prob-row:hover .prob-arrow { color: #10b981; transform: translateX(2px); }

    /* ── Light mode overrides ── */
    :host-context(html:not(.dark)) .cq-content {
      --background: #F5F7F2;
    }
    :host-context(html:not(.dark)) .hero-section {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-glow-1 {
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-glow-2 {
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-title { color: #fff; }
    :host-context(html:not(.dark)) .hero-accent {
      background: linear-gradient(135deg, #86efac 0%, #d1fae5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .hero-sub { color: rgba(255,255,255,0.65); }
    :host-context(html:not(.dark)) .hero-stat-badge {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.25);
    }
    :host-context(html:not(.dark)) .hero-stat-num { color: #d1fae5; }
    :host-context(html:not(.dark)) .hero-stat-sep,
    :host-context(html:not(.dark)) .hero-stat-den { color: rgba(255,255,255,0.6); }
    :host-context(html:not(.dark)) .hero-stat-lbl { color: rgba(255,255,255,0.5); }
    :host-context(html:not(.dark)) .search-wrapper {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.25);
    }
    :host-context(html:not(.dark)) .search-wrapper:focus-within {
      background: rgba(255,255,255,0.22);
      border-color: rgba(255,255,255,0.5);
      box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
    }
    :host-context(html:not(.dark)) .search-icon { color: rgba(255,255,255,0.7); }
    :host-context(html:not(.dark)) .search-input { color: #fff; }
    :host-context(html:not(.dark)) .search-input::placeholder { color: rgba(255,255,255,0.5); }
    :host-context(html:not(.dark)) .search-kbd {
      color: rgba(255,255,255,0.5);
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
    }

    /* Light mode: action cards */
    :host-context(html:not(.dark)) .action-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .action-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 4px 14px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .action-label { color: #8A9B8F; }
    :host-context(html:not(.dark)) .action-title { color: #1B1B1B; }

    /* Light mode: filter */
    :host-context(html:not(.dark)) .diff-chip {
      background: #fff;
      border-color: #D6DDD2;
      color: #52665A;
    }
    :host-context(html:not(.dark)) .diff-chip:hover { background: #f0f4f2; }
    :host-context(html:not(.dark)) .diff-chip.active {
      background: #e6f3ee;
      border-color: #52B788;
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .status-chip { color: #8A9B8F; }
    :host-context(html:not(.dark)) .status-chip.active {
      background: #f0f4f2;
      border-color: #C7D9CC;
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .view-toggle { border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .view-btn { color: #8A9B8F; }
    :host-context(html:not(.dark)) .view-btn:hover { background: #f0f4f2; color: #52665A; }
    :host-context(html:not(.dark)) .view-btn.active { background: #e6f3ee; color: #1B4332; }
    :host-context(html:not(.dark)) .section-count { color: #8A9B8F; }

    /* Light mode: category cards */
    :host-context(html:not(.dark)) .cat-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    :host-context(html:not(.dark)) .cat-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .cat-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .sample-item { color: #8A9B8F; }
    :host-context(html:not(.dark)) .sample-item::before { color: #C7D9CC; }
    :host-context(html:not(.dark)) .sample-more { color: #8A9B8F; }
    :host-context(html:not(.dark)) .cat-progress-track { background: #E8EDE5; }
    :host-context(html:not(.dark)) .cat-progress-label { color: #8A9B8F; }
    :host-context(html:not(.dark)) .cat-footer {
      border-top-color: #E8EDE5;
      background: #fafbf9;
    }
    :host-context(html:not(.dark)) .cat-cta { color: #8A9B8F; }
    :host-context(html:not(.dark)) .cat-card:hover .cat-cta { color: #1B4332; }
    :host-context(html:not(.dark)) .cat-arrow { color: #C7D9CC; }
    :host-context(html:not(.dark)) .cat-card:hover .cat-arrow { color: #1B4332; }

    /* Light mode: list view */
    :host-context(html:not(.dark)) .prob-list {
      border-color: #D6DDD2;
      background: #fff;
    }
    :host-context(html:not(.dark)) .prob-row { border-bottom-color: #E8EDE5; }
    :host-context(html:not(.dark)) .prob-row:hover { background: #f5f7f2; }
    :host-context(html:not(.dark)) .prob-num { color: #C7D9CC; }
    :host-context(html:not(.dark)) .prob-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .prob-cat { color: #8A9B8F; background: #f0f4f2; }
    :host-context(html:not(.dark)) .co-chip { color: #8A9B8F; background: #f0f4f2; }
    :host-context(html:not(.dark)) .prob-arrow { color: #C7D9CC; }
    :host-context(html:not(.dark)) .prob-row:hover .prob-arrow { color: #1B4332; }

    /* Light mode: no results */
    :host-context(html:not(.dark)) .no-results { color: #8A9B8F; }
    :host-context(html:not(.dark)) .no-results p { color: #52665A; }
    :host-context(html:not(.dark)) .no-results-clear {
      background: #f0f4f2;
      border-color: #C7D9CC;
      color: #52665A;
    }
  `
})
export class CqListComponent {
  private router = inject(Router);

  private readonly SOLVED_KEY = 'cq_solved';
  private readonly LAST_VIEWED_KEY = 'cq_last_viewed';

  // ── State signals ──
  solvedIds = signal<Set<string>>(this.loadSolved());
  lastViewed = signal<{ catKey: string; catTitle: string } | null>(this.loadLastViewed());
  searchQuery = signal('');
  diffFilter = signal<DiffFilter>('all');
  statusFilter = signal<StatusFilter>('all');
  viewMode = signal<ViewMode>('grid');

  // ── Static options ──
  readonly diffOptions: { value: DiffFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];

  readonly statusOptions: { value: StatusFilter; label: string }[] = [
    { value: 'all', label: 'All problems' },
    { value: 'solved', label: 'Solved' },
    { value: 'unsolved', label: 'Not started' },
  ];

  // ── Derived static data ──
  private readonly baseCategories = this.buildBaseCategories();

  readonly allFlatProblems: FlatProblem[] = Object.entries(CODING_CATEGORIES).flatMap(
    ([key, cat]) =>
      cat.problems.map(p => ({
        id: p.id,
        categoryKey: key,
        categoryTitle: cat.title,
        title: p.title,
        difficulty: p.difficulty,
        companies: p.companies,
      }))
  );

  readonly totalProblems = this.allFlatProblems.length;

  totalSolved = computed(() => this.solvedIds().size);

  // ── Daily problem (deterministic, rotates daily) ──
  dailyProblem = computed((): FlatProblem | null => {
    if (!this.allFlatProblems.length) return null;
    const dayIdx = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return this.allFlatProblems[dayIdx % this.allFlatProblems.length];
  });

  // ── Categories with reactive progress ──
  categoriesWithProgress = computed((): EnrichedCategory[] => {
    const solved = this.solvedIds();
    return this.baseCategories.map(cat => {
      const catData = CODING_CATEGORIES[cat.key];
      const solvedCount = catData?.problems.filter(p => solved.has(p.id)).length ?? 0;
      const solvedPct = cat.count > 0 ? Math.round((solvedCount / cat.count) * 100) : 0;
      return { ...cat, solvedCount, solvedPct };
    });
  });

  filteredCategories = computed((): EnrichedCategory[] => {
    const q = this.searchQuery().toLowerCase().trim();
    const diff = this.diffFilter();
    const status = this.statusFilter();

    return this.categoriesWithProgress().filter(cat => {
      if (
        q &&
        !cat.title.toLowerCase().includes(q) &&
        !cat.key.includes(q) &&
        !cat.sampleTitles.some(t => t.toLowerCase().includes(q))
      )
        return false;
      if (diff === 'easy' && cat.easyCount === 0) return false;
      if (diff === 'medium' && cat.mediumCount === 0) return false;
      if (diff === 'hard' && cat.hardCount === 0) return false;
      if (status === 'solved' && cat.solvedCount === 0) return false;
      if (status === 'unsolved' && cat.solvedCount === cat.count) return false;
      return true;
    });
  });

  filteredProblems = computed((): FlatProblem[] => {
    const q = this.searchQuery().toLowerCase().trim();
    const diff = this.diffFilter();
    const status = this.statusFilter();
    const solved = this.solvedIds();

    return this.allFlatProblems.filter(p => {
      if (
        q &&
        !p.title.toLowerCase().includes(q) &&
        !p.categoryTitle.toLowerCase().includes(q) &&
        !p.companies.some(c => c.toLowerCase().includes(q))
      )
        return false;
      if (diff !== 'all' && p.difficulty.toLowerCase() !== diff) return false;
      if (status === 'solved' && !solved.has(p.id)) return false;
      if (status === 'unsolved' && solved.has(p.id)) return false;
      return true;
    });
  });

  // ── Interactions ──
  onSearch(e: Event): void {
    this.searchQuery.set((e.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  clearFilters(): void {
    this.searchQuery.set('');
    this.diffFilter.set('all');
    this.statusFilter.set('all');
  }

  setDiff(d: DiffFilter): void {
    this.diffFilter.set(d);
  }

  setStatus(s: StatusFilter): void {
    this.statusFilter.set(s);
  }

  setView(v: ViewMode): void {
    this.viewMode.set(v);
  }

  navigateToCat(catKey: string, catTitle: string): void {
    const viewed = { catKey, catTitle };
    localStorage.setItem(this.LAST_VIEWED_KEY, JSON.stringify(viewed));
    this.lastViewed.set(viewed);
    this.router.navigate(['/coding-questions', catKey]);
  }

  // ── Private helpers ──
  private buildBaseCategories() {
    const iconMap: Record<string, { faIcon: string; accentColor: string; iconBg: string }> = {
      arrays:        { faIcon: 'fa-solid fa-chart-bar',       accentColor: '#3b82f6', iconBg: 'rgba(59,130,246,0.12)' },
      'linked-lists':{ faIcon: 'fa-solid fa-link',             accentColor: '#06b6d4', iconBg: 'rgba(6,182,212,0.12)' },
      trees:         { faIcon: 'fa-solid fa-network-wired',    accentColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)' },
      dp:            { faIcon: 'fa-solid fa-calculator',       accentColor: '#0891b2', iconBg: 'rgba(8,145,178,0.12)' },
      sorting:       { faIcon: 'fa-solid fa-sort-amount-down', accentColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)' },
      stacks:        { faIcon: 'fa-solid fa-layer-group',      accentColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)' },
      recursion:     { faIcon: 'fa-solid fa-rotate',           accentColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)' },
      hashing:       { faIcon: 'fa-solid fa-hashtag',          accentColor: '#0369a1', iconBg: 'rgba(3,105,161,0.12)' },
    };

    return Object.entries(CODING_CATEGORIES).map(([key, cat]) => {
      const meta = iconMap[key] ?? {
        faIcon: 'fa-solid fa-code',
        accentColor: '#10b981',
        iconBg: 'rgba(16,185,129,0.12)',
      };
      const easyCount   = cat.problems.filter(p => p.difficulty === 'Easy').length;
      const mediumCount = cat.problems.filter(p => p.difficulty === 'Medium').length;
      const hardCount   = cat.problems.filter(p => p.difficulty === 'Hard').length;
      const sampleTitles = cat.problems.slice(0, 2).map(p => p.title);
      const dominantDifficulty: 'easy' | 'medium' | 'hard' =
        hardCount > mediumCount && hardCount > easyCount ? 'hard' :
        mediumCount >= easyCount ? 'medium' : 'easy';

      return {
        key,
        title: cat.title,
        count: cat.problems.length,
        easyCount,
        mediumCount,
        hardCount,
        sampleTitles,
        dominantDifficulty,
        solvedCount: 0,
        solvedPct: 0,
        ...meta,
      };
    });
  }

  private loadSolved(): Set<string> {
    try {
      const raw = localStorage.getItem(this.SOLVED_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  }

  private loadLastViewed(): { catKey: string; catTitle: string } | null {
    try {
      const raw = localStorage.getItem(this.LAST_VIEWED_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
