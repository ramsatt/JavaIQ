import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { AdGateService } from '../../ad-gate.service';

import { LeetCodeProblem, LEETCODE_PROBLEMS } from '../../data/leetcode-problems';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton],
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
            LeetCode Top 150
          </span>
          <h1 class="hero-title">Ace Your Coding<br><span class="hero-accent">Interviews</span></h1>
          
          <!-- Premium Search Bar -->
          <div class="search-wrapper">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input class="search-input" placeholder="Search by number or title..." />
          </div>
        </div>
      </div>

      <div class="page-body">
        
        <!-- Progress Tracking -->
        <div class="progress-card">
          <div class="progress-header">
            <i class="fa-solid fa-chart-pie section-icon"></i>
            <span class="section-title">Your Progress</span>
          </div>
          <div class="progress-stats">
            <div class="stat-box">
              <div class="stat-num easy-text">{{ easyCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ easyTotalCount() }}</span></div>
              <div class="stat-label">Easy</div>
            </div>
            <div class="stat-box">
              <div class="stat-num medium-text">{{ mediumCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ mediumTotalCount() }}</span></div>
              <div class="stat-label">Medium</div>
            </div>
            <div class="stat-box">
              <div class="stat-num hard-text">{{ hardCompletedCount() }}<span class="text-[0.6rem] text-slate-500 font-normal">/{{ hardTotalCount() }}</span></div>
              <div class="stat-label">Hard</div>
            </div>
          </div>
        </div>

        <!-- Section Header -->
        <div class="section-head mt-6">
          <div class="section-head-left">
            <i class="fa-solid fa-list-ul section-icon"></i>
            <span class="section-title">Problem List</span>
          </div>
          <span class="section-count">{{ problems().length }} problems</span>
        </div>

        <!-- Problems List -->
        <div class="problem-list">
          @for (p of problems(); track p.number) {
            <button (click)="openLc(p)" class="problem-card" [class.completed]="dataService.leetcodeCompletedIds().has(p.number)">
              <div class="problem-num">
                @if (dataService.leetcodeCompletedIds().has(p.number)) {
                  <i class="fa-solid fa-check text-emerald-500"></i>
                } @else {
                  {{ p.number }}
                }
              </div>
              
              <div class="problem-content">
                <h3 class="problem-title">{{ p.title }}</h3>
                <div class="problem-meta">
                  <span class="meta-chip">
                    <i class="fa-solid fa-folder meta-chip-icon"></i>
                    {{ p.category }}
                  </span>
                </div>
              </div>

              <div class="problem-actions">
                <span class="difficulty-badge" [class]="p.difficulty.toLowerCase()">
                  {{ p.difficulty }}
                </span>
                @if (!dataService.leetcodeCompletedIds().has(p.number) && !isUnlocked(p.number)) {
                  <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px; margin-left: 8px;"></i>
                } @else {
                  <i class="fa-solid fa-chevron-right" style="color: #64748b; font-size: 11px; margin-left: 8px;"></i>
                }
              </div>
            </button>
          }
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700&display=swap');

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
      background: radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%); /* Red glow for leetcode */
    }
    .hero-glow-2 {
      bottom: -30px;
      right: -30px;
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%); /* Orange glow */
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
      color: #fca5a5;
      background: rgba(239,68,68,0.15);
      border: 1px solid rgba(239,68,68,0.25);
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 16px;
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
      background: linear-gradient(135deg, #f87171 0%, #fb923c 50%, #fbbf24 100%);
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

    /* ── Progress Card ── */
    .progress-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .progress-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }
    .progress-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .stat-box {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 12px;
      padding: 12px 0;
      text-align: center;
    }
    .stat-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.3rem;
      font-weight: 800;
      margin-bottom: 4px;
    }
    .stat-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .easy-text { color: #10b981; }
    .medium-text { color: #f59e0b; }
    .hard-text { color: #ef4444; }

    /* ── Section Head ── */
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    .section-head.mt-6 {
      margin-top: 24px;
    }
    .section-head-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-icon {
      font-size: 0.75rem;
      color: #fb923c;
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

    /* ── Problems List ── */
    .problem-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* ── Problem Card ── */
    .problem-card {
      display: flex;
      width: 100%;
      text-align: left;
      align-items: center;
      gap: 14px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 16px;
      color: inherit;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .problem-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }
    
    .problem-num {
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 10px;
      background: rgba(255,255,255,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      font-weight: 700;
      color: #cbd5e1;
    }

    .problem-content {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .problem-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .problem-meta {
      display: flex;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 500;
      color: #94a3b8;
    }
    .meta-chip-icon {
      font-size: 0.55rem;
      opacity: 0.7;
    }

    .problem-actions {
      display: flex;
      align-items: center;
    }

    .difficulty-badge {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 4px 10px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .difficulty-badge.easy { color: #10b981; background: rgba(16,185,129,0.1); }
    .difficulty-badge.medium { color: #f59e0b; background: rgba(245,158,11,0.1); }
    .difficulty-badge.hard { color: #ef4444; background: rgba(239,68,68,0.1); }

    .problem-card.completed {
      border-color: rgba(16,185,129,0.3);
      background: rgba(16,185,129,0.02);
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

    /* Body items */
    :host-context(html:not(.dark)) .progress-card {
      background: #ffffff;
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .stat-box {
      background: rgba(27,67,50,0.04);
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .stat-label { color: #52665A; }
    :host-context(html:not(.dark)) .problem-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .problem-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 4px 16px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .problem-num {
      background: rgba(27,67,50,0.06);
      color: #52665A;
    }
    :host-context(html:not(.dark)) .problem-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .meta-chip { color: #8A9B8F; }
    :host-context(html:not(.dark)) .section-title { color: #52665A; }
    :host-context(html:not(.dark)) .section-count { color: #8A9B8F; }
    :host-context(html:not(.dark)) .section-icon { color: #1B4332; }
  `
})
export class LcListComponent {
  dataService = inject(DataService);
  private router = inject(Router);
  private adGate = inject(AdGateService);

  problems = signal<LeetCodeProblem[]>(LEETCODE_PROBLEMS);

  // Computeds for totals
  easyTotalCount = computed(() => this.problems().filter(p => p.difficulty === 'Easy').length);
  mediumTotalCount = computed(() => this.problems().filter(p => p.difficulty === 'Medium').length);
  hardTotalCount = computed(() => this.problems().filter(p => p.difficulty === 'Hard').length);

  // Computeds for completed counts
  easyCompletedCount = computed(() =>
    this.problems().filter(p => p.difficulty === 'Easy' && this.dataService.leetcodeCompletedIds().has(p.number)).length
  );
  mediumCompletedCount = computed(() =>
    this.problems().filter(p => p.difficulty === 'Medium' && this.dataService.leetcodeCompletedIds().has(p.number)).length
  );
  hardCompletedCount = computed(() =>
    this.problems().filter(p => p.difficulty === 'Hard' && this.dataService.leetcodeCompletedIds().has(p.number)).length
  );

  isUnlocked(id: number): boolean {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`lc::${id}`);
  }

  async openLc(p: LeetCodeProblem) {
    const itemId = `lc::${p.number}`;
    if (!this.dataService.leetcodeCompletedIds().has(p.number) && !this.isUnlocked(p.number)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, 'this algorithm problem');
      if (!allowed) return;
    }
    this.router.navigate(['/leetcode', p.number]);
  }
}
