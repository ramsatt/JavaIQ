import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { CODING_CATEGORIES } from '../../data/coding-problems';
import { AdGateService } from '../../ad-gate.service';

@Component({
  selector: 'app-cq-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/coding-questions" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
        @if (categoryData(); as data) {
          <!-- Premium Centered Hero for coding question category -->
          <div class="hero">
            <div class="hero-glow"></div>
            <div class="hero-content">
              <span class="hero-badge" [style.color]="data.themeColor" [style.borderColor]="data.themeColor">
                <i class="fa-solid fa-layer-group hero-badge-icon"></i>
                Topic Focus
              </span>
              <h1 class="title">{{ data.title }}</h1>
              <p class="subtitle">{{ data.description }}</p>
            </div>
          </div>

          <div class="page-container">
            <div class="list">
              @for (prob of data.problems; track prob.id) {
                <div class="problem-card" [class.expanded]="expandedId() === prob.id">
                  <!-- Header (Clickable) -->
                  <div class="problem-header" (click)="toggleExpand(prob.id)">
                     <div class="accent-line" [style.background]="data.themeColor"></div>

                     <div class="problem-header-content">
                       <div class="problem-title-row">
                         <h3 class="problem-title">{{ prob.title }}</h3>
                         <span class="difficulty-badge" [class]="prob.difficulty.toLowerCase()">
                           {{ prob.difficulty }}
                         </span>
                       </div>
                       <div class="problem-meta">
                         @for (comp of prob.companies; track comp) {
                           <span class="company-chip"><i class="fa-solid fa-building"></i> {{ comp }}</span>
                         }
                       </div>
                     </div>

                     <div class="expand-icon">
                       @if (isUnlocked(prob.id) || expandedId() === prob.id) {
                         <i class="fa-solid" [class.fa-chevron-down]="expandedId() !== prob.id" [class.fa-chevron-up]="expandedId() === prob.id"></i>
                       } @else {
                         <i class="fa-solid fa-lock" style="color: #f59e0b; font-size: 11px;"></i>
                       }
                     </div>
                  </div>

                  <!-- Expanded Content -->
                  @if (expandedId() === prob.id) {
                    <div class="problem-content">
                      <div class="desc-section">
                        <h4 class="section-title"><i class="fa-solid fa-align-left"></i> Problem Statement</h4>
                        <div class="desc-text">{{ prob.description }}</div>
                      </div>

                      <div class="java-section">
                        <div class="code-header">
                          <span><i class="fa-brands fa-java text-orange-400"></i> Code Solution</span>
                          <button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button>
                        </div>
                        <pre class="code-block"><code>{{ prob.javaCode }}</code></pre>
                      </div>

                      <div class="complexity-section">
                        <div class="complexity-box">
                          <div class="comp-label"><i class="fa-solid fa-stopwatch"></i> Time Complexity</div>
                          <div class="comp-val">{{ prob.timeComplexity }}</div>
                        </div>
                        <div class="complexity-box">
                          <div class="comp-label"><i class="fa-solid fa-memory"></i> Space Complexity</div>
                          <div class="comp-val">{{ prob.spaceComplexity }}</div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        } @else {
          <div class="hero">
            <div class="hero-glow"></div>
            <div class="hero-content">
              <h1 class="title">Coming Soon</h1>
              <p class="subtitle">We're adding new problems!</p>
            </div>
          </div>
          <div class="page-container">
            <div class="empty-state">
               <i class="fa-solid fa-hammer mb-4 text-3xl"></i>
               <p>Problems for this section will be available soon!</p>
            </div>
          </div>
        }
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

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
      --padding-start: 0;
      --padding-end: 0;
    }

    .page-container {
      padding: 0 clamp(16px, 4vw, 64px) 40px;
    }

    @media (min-width: 640px) { .page-container { padding: 0 clamp(24px, 5vw, 72px) 40px; } }
    @media (min-width: 1024px) { .page-container { padding: 0 clamp(32px, 5vw, 80px) 40px; } }
    @media (min-width: 1440px) { .page-container { padding: 0 clamp(48px, 6vw, 96px) 40px; } }

    /* ── Hero Section ── */
    .hero {
      position: relative;
      background: linear-gradient(145deg, #0b1120 0%, #161b22 100%);
      padding: 32px 20px 48px;
      color: #fff;
      overflow: hidden;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 24px;
    }
    .hero-glow {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
      filter: blur(50px);
      pointer-events: none;
    }
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 600px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: rgba(255,255,255,0.03);
      border: 1px solid;
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 16px;
    }

    .title {
      font-family: 'Inter', sans-serif;
      margin: 0 0 12px;
      font-size: 1.85rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: #e2e8f0;
    }
    .subtitle {
      font-family: 'Inter', sans-serif;
      margin: 0 0;
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.5;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: #64748b;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
    }

    /* ── Details List ── */
    .list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .problem-card {
      position: relative;
      display: block;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .problem-card.expanded {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    /* Header (Collapsed/Clickable) */
    .problem-header {
      display: flex;
      align-items: center;
      padding: 18px 16px;
      cursor: pointer;
      user-select: none;
    }
    .accent-line {
      position: absolute;
      left: 0;
      top: 12px;
      bottom: 12px;
      width: 3px;
      border-radius: 0 3px 3px 0;
      opacity: 0.7;
    }
    
    .problem-header-content {
      flex: 1;
      min-width: 0;
      padding-left: 12px;
    }

    .problem-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 8px;
    }
    
    .problem-title {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: #1B1B1B;
      margin: 0;
      letter-spacing: -0.01em;
      line-height: 1.3;
    }
    :host-context(html.dark) .problem-title { color: #e2e8f0; }

    .difficulty-badge {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .difficulty-badge.easy { color: #059669; background: rgba(5,150,105,0.10); }
    .difficulty-badge.medium { color: #d97706; background: rgba(217,119,6,0.10); }
    .difficulty-badge.hard { color: #dc2626; background: rgba(220,38,38,0.10); }
    :host-context(html.dark) .difficulty-badge.easy { color: #10b981; background: rgba(16,185,129,0.1); }
    :host-context(html.dark) .difficulty-badge.medium { color: #f59e0b; background: rgba(245,158,11,0.1); }
    :host-context(html.dark) .difficulty-badge.hard { color: #ef4444; background: rgba(239,68,68,0.1); }

    .problem-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .company-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 0.6rem;
      font-weight: 600;
      color: #52665A;
      background: rgba(27,67,50,0.07);
      border-radius: 4px;
      padding: 2px 6px;
    }
    .company-chip i { font-size: 0.55rem; opacity: 0.7; }
    :host-context(html.dark) .company-chip { color: #94a3b8; background: rgba(255,255,255,0.05); }

    .expand-icon {
      color: #52665A;
      font-size: 0.9rem;
      padding-left: 12px;
      transition: transform 0.3s;
    }
    :host-context(html.dark) .expand-icon { color: #64748b; }

    /* Expanded Content */
    .problem-content {
      padding: 0 16px 20px 24px;
      border-top: 1px solid #E8EDE5;
      animation: fadeIn 0.3s ease-out forwards;
    }
    :host-context(html.dark) .problem-content { border-top-color: rgba(255,255,255,0.04); }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .desc-section {
      margin-top: 20px;
      margin-bottom: 24px;
    }
    .section-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #3d5f4f;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .section-title i { color: #8b5cf6; }
    :host-context(html.dark) .section-title { color: #cbd5e1; }

    .desc-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: #3d5f4f;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    :host-context(html.dark) .desc-text { color: #94a3b8; }

    /* Code Block */
    .java-section {
      background: #0d1117;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255,255,255,0.03);
      padding: 8px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: #cbd5e1;
    }
    .copy-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 0.7rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .copy-btn:hover { color: #fff; }
    
    .code-block {
      margin: 0;
      padding: 16px;
      overflow-x: auto;
    }
    .code-block code {
      font-family: 'Fira Code', monospace;
      font-size: 0.8rem;
      color: #e2e8f0;
      line-height: 1.5;
    }

    /* Complexity Stats */
    .complexity-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: rgba(139,92,246,0.05);
      border: 1px solid rgba(139,92,246,0.1);
      border-radius: 12px;
      padding: 16px;
    }
    .complexity-box {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .comp-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      color: #5b21b6;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    :host-context(html.dark) .comp-label { color: #c4b5fd; }
    .comp-val {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      color: #3d5f4f;
      line-height: 1.5;
    }
    :host-context(html.dark) .comp-val { color: #cbd5e1; }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .tut-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .tut-content {
      --background: #F5F7F2;
      --padding-start: 0;
      --padding-end: 0;
    }
    :host-context(html:not(.dark)) .hero {
      background: linear-gradient(145deg, #0d1a10 0%, #1B4332 100%);
    }
    :host-context(html:not(.dark)) .problem-card {
      background: #ffffff !important;
      border: 1px solid #D6DDD2 !important;
    }
    :host-context(html:not(.dark)) .problem-card.expanded {
      background: #fafafa !important;
      border-color: #B8CABB !important;
    }
    :host-context(html:not(.dark)) .title {
      color: #ffffff;
      -webkit-text-fill-color: #ffffff;
    }
    :host-context(html:not(.dark)) .subtitle {
      color: rgba(255,255,255,0.75);
    }
  `
})
export class CqDetailComponent {
  private route = inject(ActivatedRoute);
  private adGate = inject(AdGateService);

  // The current category ID (e.g. 'arrays')
  categoryId = signal('');

  // Which problem is currently expanded
  expandedId = signal<string | null>(null);

  // Compute the category data based on the route param
  categoryData = computed(() => {
    return CODING_CATEGORIES[this.categoryId()] || null;
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.categoryId.set(params.get('id') ?? '');
      this.expandedId.set(null); // Reset expansion when changing category
    });
  }

  isUnlocked(id: string): boolean {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`cq::${id}`);
  }

  async toggleExpand(id: string) {
    if (this.expandedId() === id) {
      this.expandedId.set(null); // Collapse if already open
    } else {
      const itemId = `cq::${id}`;
      // Lock check before expanding
      if (!this.adGate.isItemUnlocked(itemId)) {
        await this.adGate.unlockItemWithRewardedInterstitial(itemId);
      }
      this.expandedId.set(id); // Expand the clicked one
      this.adGate.onContentCompleted(); // Also a good place to increment interstitial chances
    }
  }
}
