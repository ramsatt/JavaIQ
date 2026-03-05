import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { CURATED_EXPERIENCES } from '../../data/experiences/curated-experiences';
import { InterviewExperience } from '../../data/experience.model';
import { AdGateService } from '../../ad-gate.service';

@Component({
  selector: 'app-exp-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="det-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/experiences" text="" color="light" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="det-content">
      @if (exp(); as e) {

        <!-- Hero Banner -->
        <div class="det-hero" [style.--brand]="brandColor(e.company)">
          <div class="det-hero-glow"></div>
          <div class="det-hero-inner">
            <div class="det-logo-wrap" [style.background]="logoBg(e.company)">
              <i [class]="companyIcon(e.company)" class="det-logo-icon" [style.color]="brandColor(e.company)"></i>
            </div>
            <h1 class="det-company">{{ e.company }}</h1>
            <p class="det-role">{{ e.role }}</p>
            <div class="det-badges">
              <span class="det-result" [attr.data-r]="e.result">{{ resultLabel(e.result) }}</span>
              <span class="det-diff" [attr.data-d]="e.difficulty">{{ e.difficulty }}</span>
              <span class="det-date">{{ formatDate(e.date) }}</span>
            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="stats-row">
          <div class="stat-box">
            <i class="fa-solid fa-rotate stat-icon" style="color:#10b981"></i>
            <span class="stat-val">{{ e.rounds.length }}</span>
            <span class="stat-lbl">Rounds</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <i class="fa-solid fa-user-tie stat-icon" style="color:#6366f1"></i>
            <span class="stat-val">{{ e.yearsOfExperience }}y</span>
            <span class="stat-lbl">Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <i class="fa-solid fa-clock stat-icon" style="color:#f59e0b"></i>
            <span class="stat-val">{{ totalDuration(e) }}</span>
            <span class="stat-lbl">Total Time</span>
          </div>
        </div>

        <div class="det-body">

          <!-- Summary -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-quote-left sh-ic" style="color:#10b981"></i>
              <span class="sh-txt">Summary</span>
            </div>
            <div class="summary-card">
              <p class="summary-text">{{ e.summary }}</p>
            </div>
          </section>

          <!-- Tags -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-tags sh-ic" style="color:#6366f1"></i>
              <span class="sh-txt">Topics Covered</span>
            </div>
            <div class="tag-wrap">
              @for (tag of e.tags; track tag) {
                <span class="det-tag">#{{ tag }}</span>
              }
            </div>
          </section>

          <!-- Interview Rounds -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-layer-group sh-ic" style="color:#f59e0b"></i>
              <span class="sh-txt">Interview Rounds</span>
            </div>

            <div class="rounds-list">
              @for (round of e.rounds; track round.roundNumber) {
                <div class="round-card" [class.round-expanded]="expandedRound() === round.roundNumber"
                  (click)="toggleRound(round.roundNumber)">

                  <!-- Round Header -->
                  <div class="round-header">
                    <div class="round-num-badge">{{ round.roundNumber }}</div>
                    <div class="round-meta">
                      <span class="round-type">{{ round.type }}</span>
                      @if (round.duration) {
                        <span class="round-dur">
                          <i class="fa-regular fa-clock"></i>
                          {{ round.duration }}
                        </span>
                      }
                    </div>
                    <i class="fa-solid fa-chevron-down round-chevron"
                      [class.rotated]="expandedRound() === round.roundNumber"></i>
                  </div>

                  <!-- Round Body (expanded) -->
                  @if (expandedRound() === round.roundNumber) {
                    <div class="round-body">
                      <p class="round-desc">{{ round.description }}</p>

                      <div class="qs-section">
                        <span class="qs-header">
                          <i class="fa-solid fa-circle-question qs-icon"></i>
                          Questions Asked
                        </span>
                        <ul class="qs-list">
                          @for (q of round.questions; track q) {
                            <li class="qs-item">
                              <i class="fa-solid fa-arrow-right qs-bullet"></i>
                              <span>{{ q }}</span>
                            </li>
                          }
                        </ul>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </section>

          <!-- Pro Tips -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-lightbulb sh-ic" style="color:#facc15"></i>
              <span class="sh-txt">Pro Tips</span>
            </div>
            <div class="tips-list">
              @for (tip of e.tips; track tip; let i = $index) {
                <div class="tip-card">
                  <div class="tip-num">{{ i + 1 }}</div>
                  <p class="tip-text">{{ tip }}</p>
                </div>
              }
            </div>
          </section>

          <!-- Preparation Resources -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-book-open sh-ic" style="color:#ec4899"></i>
              <span class="sh-txt">Preparation Resources</span>
            </div>
            <div class="resources-grid">
              @for (res of prepResources(e); track res.label) {
                <a [href]="res.href" class="res-card">
                  <i [class]="res.icon" class="res-icon" [style.color]="res.color"></i>
                  <span class="res-label">{{ res.label }}</span>
                  <i class="fa-solid fa-arrow-up-right-from-square res-ext"></i>
                </a>
              }
            </div>
          </section>

          <!-- Share / Helpful CTA -->
          <div class="cta-strip">
            <p class="cta-strip-txt">Was this helpful?</p>
            <div class="cta-strip-actions">
              <button class="cta-like">
                <i class="fa-solid fa-thumbs-up"></i>
                Helpful
              </button>
              <button class="cta-share">
                <i class="fa-solid fa-share-nodes"></i>
                Share
              </button>
            </div>
          </div>

        </div>
      } @else {
        <div class="not-found">
          <i class="fa-solid fa-circle-xmark nf-icon"></i>
          <h2 class="nf-title">Experience Not Found</h2>
          <p class="nf-sub">This story may have been removed or the link is invalid.</p>
        </div>
      }
    </ion-content>
  `,
  styles: `
    /* ── Layout ── */
    .det-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .det-content { --background: #0b1120; }

    /* ── Hero Banner ── */
    .det-hero {
      position: relative;
      padding: 16px 20px 28px;
      overflow: hidden;
      text-align: center;
      background: linear-gradient(180deg, rgba(from var(--brand, #10b981) r g b / 0.08) 0%, transparent 100%);
    }
    .det-hero-glow {
      position: absolute;
      top: -40px; left: 50%;
      transform: translateX(-50%);
      width: 240px; height: 240px;
      background: radial-gradient(circle, rgba(from var(--brand, #10b981) r g b / 0.12) 0%, transparent 65%);
      pointer-events: none;
    }
    .det-hero-inner { position: relative; z-index: 1; }

    .det-logo-wrap {
      width: 72px; height: 72px;
      border-radius: 20px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 14px;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .det-logo-icon { font-size: 1.8rem; }

    .det-company {
      font-size: 1.5rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      margin: 0 0 4px;
    }
    .det-role { font-size: 0.8rem; color: #64748b; font-weight: 500; margin: 0 0 14px; }

    .det-badges { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; }

    .det-result {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 7px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .det-result[data-r="offer"] { background: rgba(16,185,129,0.15); color: #34d399; }
    .det-result[data-r="rejected"] { background: rgba(239,68,68,0.15); color: #f87171; }
    .det-result[data-r="pending"] { background: rgba(234,179,8,0.15); color: #facc15; }
    .det-result[data-r="withdrew"] { background: rgba(148,163,184,0.15); color: #94a3b8; }

    .det-diff {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 7px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .det-diff[data-d="easy"] { background: rgba(16,185,129,0.1); color: #34d399; border: 1px solid rgba(16,185,129,0.2); }
    .det-diff[data-d="medium"] { background: rgba(234,179,8,0.1); color: #facc15; border: 1px solid rgba(234,179,8,0.2); }
    .det-diff[data-d="hard"] { background: rgba(239,68,68,0.1); color: #f87171; border: 1px solid rgba(239,68,68,0.2); }

    .det-date { font-size: 0.65rem; font-weight: 500; color: #475569; }

    /* ── Stats Row ── */
    .stats-row {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 16px 24px;
      background: rgba(255,255,255,0.035);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 16px 8px;
    }
    .stat-box { text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .stat-icon { font-size: 0.9rem; margin-bottom: 2px; }
    .stat-val { font-size: 1.2rem; font-weight: 800; color: #e2e8f0; letter-spacing: -0.02em; }
    .stat-lbl { font-size: 0.58rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; }
    .stat-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.07); }

    /* ── Body ── */
    .det-body { padding: 0 16px 100px; max-width: 600px; margin: 0 auto; }

    /* ── Section ── */
    .det-section { margin-bottom: 28px; }
    .section-hd {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .sh-ic { font-size: 0.75rem; }
    .sh-txt {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
    }

    /* ── Summary ── */
    .summary-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-left: 3px solid #10b981;
      border-radius: 12px;
      padding: 16px 18px;
    }
    .summary-text {
      font-size: 0.82rem;
      color: #94a3b8;
      line-height: 1.7;
      margin: 0;
    }

    /* ── Tags ── */
    .tag-wrap { display: flex; gap: 7px; flex-wrap: wrap; }
    .det-tag {
      font-size: 0.65rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 7px;
      padding: 4px 10px;
      transition: all 0.2s;
    }
    .det-tag:hover { color: #94a3b8; border-color: rgba(255,255,255,0.15); }

    /* ── Rounds ── */
    .rounds-list { display: flex; flex-direction: column; gap: 10px; }

    .round-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s;
    }
    .round-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.045); }
    .round-expanded { border-color: rgba(245,158,11,0.25) !important; }

    .round-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
    }

    .round-num-badge {
      flex-shrink: 0;
      width: 30px; height: 30px;
      border-radius: 9px;
      background: rgba(245,158,11,0.12);
      border: 1px solid rgba(245,158,11,0.25);
      color: #f59e0b;
      font-size: 0.75rem;
      font-weight: 800;
      display: flex; align-items: center; justify-content: center;
    }

    .round-meta { flex: 1; display: flex; flex-direction: column; gap: 3px; }
    .round-type { font-size: 0.85rem; font-weight: 700; color: #e2e8f0; }
    .round-dur {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
    }
    .round-dur i { font-size: 0.55rem; }

    .round-chevron {
      flex-shrink: 0;
      font-size: 0.7rem;
      color: #475569;
      transition: transform 0.25s ease;
    }
    .round-chevron.rotated { transform: rotate(180deg); color: #f59e0b; }

    .round-body {
      padding: 0 16px 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
      margin-top: 0;
      animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .round-desc {
      font-size: 0.78rem;
      color: #64748b;
      line-height: 1.6;
      margin: 12px 0 14px;
    }

    .qs-section { }
    .qs-header {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #64748b;
      margin-bottom: 10px;
    }
    .qs-icon { font-size: 0.65rem; color: #6366f1; }

    .qs-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
    .qs-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      background: rgba(99,102,241,0.06);
      border: 1px solid rgba(99,102,241,0.12);
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 0.78rem;
      color: #94a3b8;
      line-height: 1.5;
    }
    .qs-bullet { font-size: 0.55rem; color: #6366f1; margin-top: 4px; flex-shrink: 0; }

    /* ── Tips ── */
    .tips-list { display: flex; flex-direction: column; gap: 10px; }
    .tip-card {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      background: rgba(250,204,21,0.04);
      border: 1px solid rgba(250,204,21,0.1);
      border-radius: 12px;
      padding: 14px 16px;
    }
    .tip-num {
      flex-shrink: 0;
      width: 26px; height: 26px;
      border-radius: 8px;
      background: rgba(250,204,21,0.12);
      border: 1px solid rgba(250,204,21,0.25);
      color: #facc15;
      font-size: 0.7rem;
      font-weight: 800;
      display: flex; align-items: center; justify-content: center;
    }
    .tip-text { font-size: 0.8rem; color: #94a3b8; line-height: 1.6; margin: 0; flex: 1; }

    /* ── Resources ── */
    .resources-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .res-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 14px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }
    .res-card:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12); transform: translateY(-1px); }
    .res-icon { font-size: 1rem; flex-shrink: 0; }
    .res-label { font-size: 0.72rem; font-weight: 600; color: #94a3b8; flex: 1; }
    .res-ext { font-size: 0.55rem; color: #475569; flex-shrink: 0; }

    /* ── CTA Strip ── */
    .cta-strip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 18px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      margin-top: 4px;
    }
    .cta-strip-txt { font-size: 0.8rem; font-weight: 600; color: #64748b; margin: 0; }
    .cta-strip-actions { display: flex; gap: 8px; }
    .cta-like {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: rgba(16,185,129,0.1);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 10px;
      color: #10b981;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .cta-like:hover { background: rgba(16,185,129,0.18); }
    .cta-share {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      color: #64748b;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .cta-share:hover { color: #e2e8f0; border-color: rgba(255,255,255,0.15); }

    /* ── Not Found ── */
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 32px;
      text-align: center;
    }
    .nf-icon { font-size: 3rem; color: #334155; margin-bottom: 16px; }
    .nf-title { font-size: 1.1rem; font-weight: 800; color: #e2e8f0; margin: 0 0 8px; }
    .nf-sub { font-size: 0.8rem; color: #64748b; margin: 0; line-height: 1.6; }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .det-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .det-content {
      --background: #F5F7F2;
    }
    :host-context(html:not(.dark)) .round-card,
    :host-context(html:not(.dark)) .summary-card {
      background: #ffffff !important;
      border: 1px solid #D6DDD2 !important;
    }
    :host-context(html:not(.dark)) .det-company {
      color: #1B1B1B;
      -webkit-text-fill-color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .det-role {
      color: #52665A;
    }
    :host-context(html:not(.dark)) .sh-txt {
      color: #52665A;
    }
  `
})
export class ExpDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private adGate = inject(AdGateService);

  expId = signal('');
  expandedRound = signal<number | null>(1);

  exp = computed<InterviewExperience | undefined>(() => {
    const id = this.expId();
    return id ? CURATED_EXPERIENCES.find(e => e.id === id) : undefined;
  });

  constructor() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id') ?? '';

      // ── Ad Gate ──
      const itemId = `exp::${id}`;
      if (!this.adGate.isItemUnlocked(itemId)) {
        const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview experience');
        if (!allowed) {
          this.router.navigate(['/experiences']);
          return;
        }
      }

      this.expId.set(id);
      this.expandedRound.set(1);
    });
  }

  toggleRound(n: number) {
    this.expandedRound.update(curr => curr === n ? null : n);
  }

  resultLabel(r: string): string {
    const map: Record<string, string> = { offer: '✓ Offer Received', rejected: '✗ Rejected', pending: '⏳ Pending', withdrew: 'Withdrew' };
    return map[r] ?? r;
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  brandColor(company: string): string {
    const map: Record<string, string> = {
      Amazon: '#f59e0b', Google: '#6366f1', Flipkart: '#f97316',
      Microsoft: '#22d3ee', Walmart: '#3b82f6', 'J.P. Morgan': '#8b5cf6',
      Zomato: '#ef4444', Infosys: '#10b981',
      Swiggy: '#f97316', PayPal: '#009cde', Uber: '#e2e8f0', PhonePe: '#6d28d9',
      Paytm: '#0ea5e9', TCS: '#06b6d4', Wipro: '#a78bfa', Myntra: '#f472b6'
    };
    return map[company] ?? '#10b981';
  }

  logoBg(company: string): string {
    const map: Record<string, string> = {
      Amazon: 'rgba(245,158,11,0.12)', Google: 'rgba(99,102,241,0.12)',
      Flipkart: 'rgba(249,115,22,0.12)', Microsoft: 'rgba(34,211,238,0.12)',
      Walmart: 'rgba(59,130,246,0.12)', 'J.P. Morgan': 'rgba(139,92,246,0.12)',
      Zomato: 'rgba(239,68,68,0.12)', Infosys: 'rgba(16,185,129,0.12)',
      Swiggy: 'rgba(249,115,22,0.12)', PayPal: 'rgba(0,156,222,0.12)',
      Uber: 'rgba(226,232,240,0.08)', PhonePe: 'rgba(109,40,217,0.12)',
      Paytm: 'rgba(14,165,233,0.12)', TCS: 'rgba(6,182,212,0.12)',
      Wipro: 'rgba(167,139,250,0.12)', Myntra: 'rgba(244,114,182,0.12)'
    };
    return map[company] ?? 'rgba(16,185,129,0.12)';
  }

  companyIcon(company: string): string {
    const map: Record<string, string> = {
      Amazon: 'fa-brands fa-amazon', Google: 'fa-brands fa-google',
      Flipkart: 'fa-solid fa-shopping-cart', Microsoft: 'fa-brands fa-microsoft',
      Walmart: 'fa-solid fa-store', 'J.P. Morgan': 'fa-solid fa-building-columns',
      Zomato: 'fa-solid fa-utensils', Infosys: 'fa-solid fa-laptop-code',
      Swiggy: 'fa-solid fa-bowl-food', PayPal: 'fa-brands fa-paypal',
      Uber: 'fa-solid fa-car', PhonePe: 'fa-solid fa-mobile-screen',
      Paytm: 'fa-solid fa-wallet', TCS: 'fa-solid fa-building',
      Wipro: 'fa-solid fa-network-wired', Myntra: 'fa-solid fa-shirt'
    };
    return map[company] ?? 'fa-solid fa-building';
  }

  totalDuration(e: InterviewExperience): string {
    let total = 0;
    e.rounds.forEach(r => {
      if (r.duration) {
        const match = r.duration.match(/(\d+)/);
        if (match) total += parseInt(match[1]);
      }
    });
    if (total === 0) return 'N/A';
    return total >= 60 ? `${Math.round(total / 60)}h` : `${total}m`;
  }

  prepResources(e: InterviewExperience): { label: string; icon: string; color: string; href: string }[] {
    const tag = e.tags[0] ?? 'java';
    return [
      { label: 'LeetCode Practice', icon: 'fa-solid fa-code', color: '#f59e0b', href: 'https://leetcode.com' },
      { label: 'System Design', icon: 'fa-solid fa-diagram-project', color: '#6366f1', href: 'https://github.com/donnemartin/system-design-primer' },
      { label: `${e.company} Glassdoor`, icon: 'fa-solid fa-star-half-stroke', color: '#10b981', href: `https://www.glassdoor.com/search?keyword=${encodeURIComponent(e.company)}` },
      { label: `DSA Patterns`, icon: 'fa-solid fa-sitemap', color: '#ec4899', href: 'https://github.com/SeanPrashad/leetcode-patterns' }
    ];
  }
}
