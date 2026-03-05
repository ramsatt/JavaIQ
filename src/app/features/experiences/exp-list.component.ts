import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { AdGateService } from '../../ad-gate.service';

interface ExpCard {
  id: string;
  company: string;
  companyIcon: string;
  companyColor: string;
  companyBg: string;
  role: string;
  yoe: number;
  result: 'offer' | 'rejected' | 'pending' | 'withdrew';
  difficulty: 'easy' | 'medium' | 'hard';
  rounds: number;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-exp-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="exp-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="exp-content">

      <!-- Hero -->
      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-glow g2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-microphone-lines hero-badge-icon"></i>
            Real Interview Stories
          </span>
          <h1 class="hero-title">Learn From<br><span class="hero-accent">Real Experiences</span></h1>
          <p class="hero-sub">Round-by-round breakdowns from Java developers at top companies</p>
          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ experiences.length }}</span>
              <span class="stat-lbl">Stories</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ offerCount }}</span>
              <span class="stat-lbl">Offers</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">8+</span>
              <span class="stat-lbl">Companies</span>
            </div>
          </div>
          <p class="hero-disclaimer">
            <i class="fa-solid fa-circle-info"></i>
            Experiences shared by community members. Results may vary.
          </p>
        </div>
      </div>

      <div class="body">

        <!-- Company Filter Pills -->
        <div class="filter-scroll">
          @for (c of companies; track c; let i = $index) {
            <button class="cpill"
              [class.cpill-active]="selectedCompany() === c"
              (click)="setCompany(c)">
              {{ c }}
            </button>
          }
        </div>

        <!-- Difficulty / Result row -->
        <div class="filter-row2">
          <div class="filter-group">
            <span class="filter-label">Difficulty</span>
            <div class="filter-chips">
              @for (d of difficulties; track d.val) {
                <button class="schip" [class.schip-active]="selectedDiff() === d.val"
                  (click)="setDiff(d.val)" [style.--chip-color]="d.color">
                  {{ d.label }}
                </button>
              }
            </div>
          </div>
          <div class="filter-group">
            <span class="filter-label">Result</span>
            <div class="filter-chips">
              @for (r of results; track r.val) {
                <button class="schip" [class.schip-active]="selectedResult() === r.val"
                  (click)="setResult(r.val)" [style.--chip-color]="r.color">
                  {{ r.label }}
                </button>
              }
            </div>
          </div>
        </div>

        <!-- Section Header -->
        <div class="section-head">
          <div class="sh-left">
            <i class="fa-solid fa-briefcase sh-icon"></i>
            <span class="sh-title">Interview Stories</span>
          </div>
          <span class="sh-count">{{ filtered().length }} stories</span>
        </div>

        <!-- Cards -->
        <div class="card-list">
          @for (exp of filtered(); track exp.id) {
            <button (click)="openExp(exp)" class="exp-card">
              <!-- Accent bar -->
              <div class="exp-accent" [style.background]="exp.companyColor"></div>

              <div class="exp-card-inner">
                <!-- Company Icon -->
                <div class="exp-logo" [style.background]="exp.companyBg">
                  <i [class]="exp.companyIcon" [style.color]="exp.companyColor"></i>
                </div>

                <!-- Main Info -->
                <div class="exp-info">
                  <div class="exp-top">
                    <div class="exp-title-group">
                      <span class="exp-company">{{ exp.company }}</span>
                      <span class="exp-role">{{ exp.role }}</span>
                    </div>
                    <span class="result-badge" [attr.data-r]="exp.result">
                      {{ resultLabel(exp.result) }}
                    </span>
                  </div>

                  <div class="exp-meta">
                    <span class="meta-pill">
                      <i class="fa-solid fa-rotate meta-icon"></i>
                      {{ exp.rounds }} rounds
                    </span>
                    <span class="meta-pill">
                      <i class="fa-solid fa-user-tie meta-icon"></i>
                      {{ exp.yoe }}y exp
                    </span>
                    <span class="diff-badge" [attr.data-d]="exp.difficulty">
                      {{ exp.difficulty }}
                    </span>
                    <span class="exp-date">{{ formatDate(exp.date) }}</span>
                  </div>

                  <!-- Tags -->
                  <div class="tag-row">
                    @for (tag of exp.tags.slice(0, 3); track tag) {
                      <span class="tag-chip">#{{ tag }}</span>
                    }
                  </div>
                </div>
                <div class="exp-arrow-container">
                  @if (isUnlocked(exp.id)) {
                    <i class="fa-solid fa-chevron-right exp-arrow"></i>
                  } @else {
                    <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                  }
                </div>
              </div>
            </button>
          }

          @if (filtered().length === 0) {
            <div class="empty-state">
              <i class="fa-solid fa-magnifying-glass empty-icon"></i>
              <p class="empty-text">No stories match your filters</p>
              <button class="clear-btn" (click)="clearFilters()">Clear Filters</button>
            </div>
          }
        </div>

        <!-- CTA -->
        <div class="cta-card">
          <div class="cta-icon-wrap">
            <i class="fa-solid fa-pen-to-square cta-icon"></i>
          </div>
          <h3 class="cta-title">Share Your Story</h3>
          <p class="cta-sub">Help fellow Java developers by sharing your interview experience</p>
          <button class="cta-btn" (click)="submitExperience()">
            <i class="fa-solid fa-plus"></i>
            Submit Experience
          </button>
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    /* ── Layout ── */
    .exp-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .exp-content { --background: #0b1120; }

    /* ── Hero ── */
    .hero {
      position: relative;
      padding: 0 20px 28px;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .g1 {
      top: -60px; right: -40px;
      width: 220px; height: 220px;
      background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
    }
    .g2 {
      bottom: -20px; left: -20px;
      width: 160px; height: 160px;
      background: radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);
    }
    .hero-inner { position: relative; z-index: 1; }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #10b981;
      background: rgba(16,185,129,0.1);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 14px;
    }
    .hero-badge-icon { font-size: 0.65rem; }

    .hero-title {
      font-size: 1.8rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 8px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #10b981 0%, #34d399 60%, #6ee7b7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub {
      font-size: 0.8rem;
      color: #64748b;
      font-weight: 500;
      margin: 0 0 22px;
      line-height: 1.5;
    }

    /* Stats */
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(255,255,255,0.035);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 14px 8px;
    }
    .hero-stat { text-align: center; flex: 1; }
    .stat-num {
      display: block;
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-lbl {
      display: block;
      font-size: 0.58rem;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 2px;
    }
    .stat-div { width: 1px; height: 24px; background: rgba(255,255,255,0.07); }

    .hero-disclaimer {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.62rem;
      color: #475569;
      margin: 10px 0 0;
      font-weight: 500;
    }
    .hero-disclaimer i { font-size: 0.6rem; opacity: 0.7; }

    /* ── Body ── */
    .body { padding: 20px 16px 100px; max-width: 600px; margin: 0 auto; }

    /* ── Company Pills ── */
    .filter-scroll {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-bottom: 16px;
      scrollbar-width: none;
    }
    .filter-scroll::-webkit-scrollbar { display: none; }
    .cpill {
      display: inline-flex;
      padding: 7px 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      color: #94a3b8;
      font-size: 0.72rem;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.2s;
    }
    .cpill:hover { background: rgba(255,255,255,0.07); color: #e2e8f0; }
    .cpill-active {
      background: rgba(16,185,129,0.14) !important;
      border-color: rgba(16,185,129,0.3) !important;
      color: #10b981 !important;
    }

    /* ── Filter Row 2 ── */
    .filter-row2 {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }
    .filter-group { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .filter-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #475569;
    }
    .filter-chips { display: flex; gap: 6px; }
    .schip {
      padding: 5px 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px;
      font-size: 0.65rem;
      font-weight: 600;
      color: #64748b;
      cursor: pointer;
      transition: all 0.2s;
    }
    .schip:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.15); }
    .schip-active {
      background: rgba(from var(--chip-color, #10b981) r g b / 0.15) !important;
      border-color: rgba(from var(--chip-color, #10b981) r g b / 0.35) !important;
      color: var(--chip-color, #10b981) !important;
    }

    /* ── Section Head ── */
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    .sh-left { display: flex; align-items: center; gap: 8px; }
    .sh-icon { font-size: 0.68rem; color: #10b981; }
    .sh-title {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
    }
    .sh-count { font-size: 0.65rem; font-weight: 600; color: #475569; }

    /* ── Card List ── */
    .card-list { display: flex; flex-direction: column; gap: 10px; }

    /* ── Exp Card ── */
    .exp-card {
      display: block;
      width: 100%;
      text-align: left;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      color: inherit;
      overflow: hidden;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .exp-card:hover {
      background: rgba(255,255,255,0.055);
      border-color: rgba(255,255,255,0.12);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      transform: translateY(-2px);
    }
    .exp-card:active { transform: scale(0.99); }

    .exp-accent { height: 3px; }

    .exp-card-inner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 14px 16px;
    }

    /* Logo */
    .exp-logo {
      flex-shrink: 0;
      width: 46px; height: 46px;
      border-radius: 13px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
      margin-top: 2px;
    }

    /* Info */
    .exp-info { flex: 1; min-width: 0; }
    .exp-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }
    .exp-title-group { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .exp-company {
      font-size: 0.9rem;
      font-weight: 800;
      color: #e2e8f0;
      letter-spacing: -0.01em;
    }
    .exp-role { font-size: 0.7rem; color: #64748b; font-weight: 500; }

    /* Result Badge */
    .result-badge {
      flex-shrink: 0;
      font-size: 0.58rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .result-badge[data-r="offer"] { background: rgba(16,185,129,0.15); color: #34d399; }
    .result-badge[data-r="rejected"] { background: rgba(239,68,68,0.15); color: #f87171; }
    .result-badge[data-r="pending"] { background: rgba(234,179,8,0.15); color: #facc15; }
    .result-badge[data-r="withdrew"] { background: rgba(148,163,184,0.15); color: #94a3b8; }

    /* Meta */
    .exp-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .meta-pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.6rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 6px;
      padding: 2px 8px;
    }
    .meta-icon { font-size: 0.5rem; opacity: 0.7; }

    .diff-badge {
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 5px;
    }
    .diff-badge[data-d="easy"] { background: rgba(16,185,129,0.15); color: #34d399; }
    .diff-badge[data-d="medium"] { background: rgba(234,179,8,0.15); color: #facc15; }
    .diff-badge[data-d="hard"] { background: rgba(239,68,68,0.15); color: #f87171; }

    .exp-date { font-size: 0.58rem; font-weight: 500; color: #475569; margin-left: auto; }

    /* Tags */
    .tag-row { display: flex; gap: 5px; flex-wrap: wrap; }
    .tag-chip {
      font-size: 0.58rem;
      font-weight: 600;
      color: #475569;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 5px;
      padding: 2px 7px;
    }

    /* Arrow / Lock */
    .exp-arrow-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-top: 20px;
    }
    .exp-arrow {
      flex-shrink: 0;
      font-size: 10px;
      color: #334155;
      margin-top: 0; /* overridden by container flex */
      transition: all 0.2s;
    }
    .exp-card:hover .exp-arrow { color: #10b981; transform: translateX(2px); }

    /* ── Empty State ── */
    .empty-state {
      text-align: center;
      padding: 48px 20px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 16px;
    }
    .empty-icon { font-size: 2rem; color: #334155; margin-bottom: 12px; display: block; }
    .empty-text { font-size: 0.82rem; color: #64748b; margin: 0 0 16px; }
    .clear-btn {
      padding: 8px 20px;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.3);
      border-radius: 10px;
      color: #10b981;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .clear-btn:hover { background: rgba(16,185,129,0.2); }

    /* ── CTA Card ── */
    .cta-card {
      margin-top: 24px;
      background: linear-gradient(135deg, rgba(16,185,129,0.08), rgba(99,102,241,0.06));
      border: 1px solid rgba(16,185,129,0.2);
      border-radius: 18px;
      padding: 24px 20px;
      text-align: center;
    }
    .cta-icon-wrap {
      width: 52px; height: 52px;
      border-radius: 14px;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.2);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 14px;
    }
    .cta-icon { font-size: 1.3rem; color: #10b981; }
    .cta-title { font-size: 1rem; font-weight: 800; color: #e2e8f0; margin: 0 0 6px; letter-spacing: -0.01em; }
    .cta-sub { font-size: 0.75rem; color: #64748b; margin: 0 0 18px; line-height: 1.5; }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      background: linear-gradient(135deg, #10b981, #059669);
      border: none;
      border-radius: 12px;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(16,185,129,0.3);
    }
    .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(16,185,129,0.4); }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .exp-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .exp-content {
      --background: #F5F7F2;
    }

    /* Premium green hero */
    :host-context(html:not(.dark)) .hero {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-glow.g1 {
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-glow.g2 {
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
    :host-context(html:not(.dark)) .hero-sub {
      color: rgba(255,255,255,0.75);
    }
    :host-context(html:not(.dark)) .hero-stats {
      background: rgba(255,255,255,0.12);
      border-color: rgba(255,255,255,0.2);
    }
    :host-context(html:not(.dark)) .stat-num {
      background: linear-gradient(135deg, #d1fae5, #86efac);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .stat-lbl { color: rgba(255,255,255,0.65); }
    :host-context(html:not(.dark)) .stat-div { background: rgba(255,255,255,0.2); }

    /* Cards */
    :host-context(html:not(.dark)) .exp-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .exp-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .cta-card {
      background: rgba(27,67,50,0.04);
      border-color: rgba(27,67,50,0.15);
    }
    :host-context(html:not(.dark)) .cta-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .cta-sub { color: #52665A; }

    /* Filters */
    :host-context(html:not(.dark)) .cpill {
      background: #ffffff !important;
      border-color: #D6DDD2 !important;
      color: #52665A !important;
    }
    :host-context(html:not(.dark)) .cpill-active {
      background: #1B4332 !important;
      color: white !important;
      border-color: #1B4332 !important;
    }
    :host-context(html:not(.dark)) .schip {
      background: #ffffff !important;
      border-color: #D6DDD2 !important;
      color: #52665A !important;
    }
    :host-context(html:not(.dark)) .schip-active {
      background: #1B4332 !important;
      color: white !important;
      border-color: #1B4332 !important;
    }
  `
})
export class ExpListComponent {
  private router = inject(Router);
  private adGate = inject(AdGateService);

  companies = ['All', 'Amazon', 'Google', 'Flipkart', 'Microsoft', 'Walmart', 'J.P. Morgan', 'Zomato', 'Infosys', 'Swiggy', 'PayPal', 'Uber', 'PhonePe', 'Paytm', 'TCS', 'Wipro', 'Myntra'];
  difficulties = [
    { val: 'all', label: 'All', color: '#94a3b8' },
    { val: 'easy', label: 'Easy', color: '#10b981' },
    { val: 'medium', label: 'Medium', color: '#facc15' },
    { val: 'hard', label: 'Hard', color: '#f87171' }
  ];
  results = [
    { val: 'all', label: 'All', color: '#94a3b8' },
    { val: 'offer', label: 'Offer ✓', color: '#10b981' },
    { val: 'rejected', label: 'Rejected', color: '#f87171' },
    { val: 'pending', label: 'Pending', color: '#facc15' }
  ];

  selectedCompany = signal('All');
  selectedDiff = signal('all');
  selectedResult = signal('all');

  experiences: ExpCard[] = [
    {
      id: 'exp-amazon-sde2-2024',
      company: 'Amazon',
      companyIcon: 'fa-brands fa-amazon',
      companyColor: '#f59e0b',
      companyBg: 'rgba(245,158,11,0.12)',
      role: 'SDE-2 (Java Backend)',
      yoe: 4,
      result: 'offer',
      difficulty: 'hard',
      rounds: 4,
      date: '2024-09-15',
      tags: ['java', 'spring-boot', 'microservices', 'system-design', 'lld']
    },
    {
      id: 'exp-google-swe3-2024',
      company: 'Google',
      companyIcon: 'fa-brands fa-google',
      companyColor: '#6366f1',
      companyBg: 'rgba(99,102,241,0.12)',
      role: 'Software Engineer L3',
      yoe: 2,
      result: 'offer',
      difficulty: 'hard',
      rounds: 5,
      date: '2024-07-20',
      tags: ['java', 'algorithms', 'data-structures', 'system-design']
    },
    {
      id: 'exp-flipkart-sde2-2024',
      company: 'Flipkart',
      companyIcon: 'fa-solid fa-shopping-cart',
      companyColor: '#f97316',
      companyBg: 'rgba(249,115,22,0.12)',
      role: 'SDE-2 (Java Microservices)',
      yoe: 3,
      result: 'offer',
      difficulty: 'medium',
      rounds: 4,
      date: '2024-05-10',
      tags: ['java', 'spring-boot', 'kafka', 'redis']
    },
    {
      id: 'exp-microsoft-sde2-2024',
      company: 'Microsoft',
      companyIcon: 'fa-brands fa-microsoft',
      companyColor: '#22d3ee',
      companyBg: 'rgba(34,211,238,0.12)',
      role: 'SDE-2 (Backend Java)',
      yoe: 4,
      result: 'offer',
      difficulty: 'medium',
      rounds: 4,
      date: '2024-03-22',
      tags: ['java', 'system-design', 'oop', 'design-patterns', 'lld']
    },
    {
      id: 'exp-walmart-se3-2024',
      company: 'Walmart',
      companyIcon: 'fa-solid fa-store',
      companyColor: '#3b82f6',
      companyBg: 'rgba(59,130,246,0.12)',
      role: 'Software Engineer 3 (Java)',
      yoe: 5,
      result: 'offer',
      difficulty: 'medium',
      rounds: 3,
      date: '2024-01-18',
      tags: ['java', 'spring-boot', 'elasticsearch', 'database']
    },
    {
      id: 'exp-jpmorgan-javadev-2024',
      company: 'J.P. Morgan',
      companyIcon: 'fa-solid fa-building-columns',
      companyColor: '#8b5cf6',
      companyBg: 'rgba(139,92,246,0.12)',
      role: 'Java Developer (Associate)',
      yoe: 3,
      result: 'offer',
      difficulty: 'medium',
      rounds: 3,
      date: '2024-08-07',
      tags: ['java', 'spring-boot', 'multithreading', 'concurrency']
    },
    {
      id: 'exp-zomato-sde1-2024',
      company: 'Zomato',
      companyIcon: 'fa-solid fa-utensils',
      companyColor: '#ef4444',
      companyBg: 'rgba(239,68,68,0.12)',
      role: 'SDE-1 (Java Backend)',
      yoe: 1,
      result: 'offer',
      difficulty: 'medium',
      rounds: 3,
      date: '2024-06-14',
      tags: ['java', 'spring-boot', 'algorithms', 'lld']
    },
    {
      id: 'exp-swiggy-sde2-2024',
      company: 'Swiggy',
      companyIcon: 'fa-solid fa-bowl-food',
      companyColor: '#f97316',
      companyBg: 'rgba(249,115,22,0.12)',
      role: 'SDE-2 (Java Backend)',
      yoe: 3,
      result: 'offer',
      difficulty: 'medium',
      rounds: 5,
      date: '2024-10-03',
      tags: ['java', 'spring-boot', 'kafka', 'redis', 'lld']
    },
    {
      id: 'exp-paypal-javadev-2024',
      company: 'PayPal',
      companyIcon: 'fa-brands fa-paypal',
      companyColor: '#003087',
      companyBg: 'rgba(0,48,135,0.18)',
      role: 'Software Engineer II (Java)',
      yoe: 4,
      result: 'offer',
      difficulty: 'hard',
      rounds: 5,
      date: '2024-11-12',
      tags: ['java', 'spring-boot', 'payments', 'security', 'concurrency']
    },
    {
      id: 'exp-uber-sde2-2024',
      company: 'Uber',
      companyIcon: 'fa-solid fa-car',
      companyColor: '#e2e8f0',
      companyBg: 'rgba(226,232,240,0.08)',
      role: 'Software Engineer II (Backend Java)',
      yoe: 3,
      result: 'offer',
      difficulty: 'hard',
      rounds: 5,
      date: '2024-04-29',
      tags: ['java', 'microservices', 'system-design', 'algorithms', 'distributed-systems']
    },
    {
      id: 'exp-phonepe-sde2-2024',
      company: 'PhonePe',
      companyIcon: 'fa-solid fa-mobile-screen',
      companyColor: '#6d28d9',
      companyBg: 'rgba(109,40,217,0.12)',
      role: 'SDE-2 (Java Backend)',
      yoe: 3,
      result: 'offer',
      difficulty: 'medium',
      rounds: 5,
      date: '2024-12-10',
      tags: ['java', 'spring-boot', 'kafka', 'payments', 'lld']
    },
    {
      id: 'exp-infosys-seniordev-2024',
      company: 'Infosys',
      companyIcon: 'fa-solid fa-laptop-code',
      companyColor: '#10b981',
      companyBg: 'rgba(16,185,129,0.12)',
      role: 'Senior Developer (Java Full Stack)',
      yoe: 6,
      result: 'offer',
      difficulty: 'easy',
      rounds: 3,
      date: '2024-02-05',
      tags: ['java', 'spring-boot', 'hibernate', 'rest-api']
    },
    {
      id: 'exp-google-l4-rejected-2024',
      company: 'Google',
      companyIcon: 'fa-brands fa-google',
      companyColor: '#6366f1',
      companyBg: 'rgba(99,102,241,0.12)',
      role: 'Software Engineer L4',
      yoe: 5,
      result: 'rejected',
      difficulty: 'hard',
      rounds: 5,
      date: '2024-08-14',
      tags: ['java', 'algorithms', 'system-design', 'distributed-systems', 'lld']
    },
    {
      id: 'exp-paytm-sde2-rejected-2024',
      company: 'Paytm',
      companyIcon: 'fa-solid fa-wallet',
      companyColor: '#0ea5e9',
      companyBg: 'rgba(14,165,233,0.12)',
      role: 'SDE-2 (Java Backend)',
      yoe: 3,
      result: 'rejected',
      difficulty: 'medium',
      rounds: 3,
      date: '2024-09-05',
      tags: ['java', 'spring-boot', 'payments', 'multithreading']
    },
    {
      id: 'exp-tcs-seniordev-2024',
      company: 'TCS',
      companyIcon: 'fa-solid fa-building',
      companyColor: '#06b6d4',
      companyBg: 'rgba(6,182,212,0.12)',
      role: 'Senior Developer (Java)',
      yoe: 5,
      result: 'offer',
      difficulty: 'easy',
      rounds: 3,
      date: '2024-10-22',
      tags: ['java', 'spring-boot', 'hibernate', 'rest-api', 'microservices']
    },
    {
      id: 'exp-wipro-techlead-withdrew-2024',
      company: 'Wipro',
      companyIcon: 'fa-solid fa-network-wired',
      companyColor: '#a78bfa',
      companyBg: 'rgba(167,139,250,0.12)',
      role: 'Tech Lead (Java)',
      yoe: 8,
      result: 'withdrew',
      difficulty: 'easy',
      rounds: 2,
      date: '2024-11-08',
      tags: ['java', 'spring-boot', 'architecture', 'team-lead']
    },
    {
      id: 'exp-myntra-sde2-pending-2024',
      company: 'Myntra',
      companyIcon: 'fa-solid fa-shirt',
      companyColor: '#f472b6',
      companyBg: 'rgba(244,114,182,0.12)',
      role: 'SDE-2 (Java Backend)',
      yoe: 3,
      result: 'pending',
      difficulty: 'medium',
      rounds: 3,
      date: '2024-12-18',
      tags: ['java', 'spring-boot', 'kafka', 'redis', 'lld']
    }
  ];

  get offerCount() {
    return this.experiences.filter(e => e.result === 'offer').length;
  }

  filtered = computed(() => {
    const company = this.selectedCompany();
    const diff = this.selectedDiff();
    const result = this.selectedResult();
    return this.experiences.filter(e => {
      if (company !== 'All' && e.company !== company) return false;
      if (diff !== 'all' && e.difficulty !== diff) return false;
      if (result !== 'all' && e.result !== result) return false;
      return true;
    });
  });

  setCompany(c: string) { this.selectedCompany.set(c); }
  setDiff(d: string) { this.selectedDiff.set(d); }
  setResult(r: string) { this.selectedResult.set(r); }
  clearFilters() {
    this.selectedCompany.set('All');
    this.selectedDiff.set('all');
    this.selectedResult.set('all');
  }

  resultLabel(r: string): string {
    const map: Record<string, string> = { offer: 'Offer ✓', rejected: 'Rejected', pending: 'Pending', withdrew: 'Withdrew' };
    return map[r] ?? r;
  }

  formatDate(d: string): string {
    const dt = new Date(d);
    return dt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  isUnlocked(id: string): boolean {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`exp::${id}`);
  }

  submitExperience() {
    window.open('https://forms.gle/JavaIQExperience', '_blank', 'noopener,noreferrer');
  }

  async openExp(exp: ExpCard) {
    const itemId = `exp::${exp.id}`;
    if (!this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview experience');
      if (!allowed) return;
    }
    this.router.navigate(['/experiences', exp.id]);
  }
}
