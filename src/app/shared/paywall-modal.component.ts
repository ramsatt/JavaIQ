import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  effect,
} from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { PurchaseService } from '../services/purchase.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-paywall-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
  template: `
    <ion-content class="paywall-content">
      <div class="paywall-wrap">

        <!-- Close button -->
        <button class="close-btn" (click)="dismiss(false)" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Hero -->
        <div class="hero">
          <div class="crown-circle">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 3l3.5 7L21 5l-2 11H5zm0 2h14v2H5v-2z"/>
            </svg>
          </div>
          <h2 class="hero-title">JavaIQ Pro</h2>
          <p class="hero-sub">Crack your next Java interview</p>
        </div>

        <!-- Benefits -->
        <ul class="benefits">
          <li>
            <span class="benefit-icon ban">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            </span>
            Ad-free experience
          </li>
          <li>
            <span class="benefit-icon infinity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg>
            </span>
            Unlimited topic unlocks
          </li>
          <li>
            <span class="benefit-icon ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
            </span>
            AI wrong-answer explanations
          </li>
          <li>
            <span class="benefit-icon brain">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a5 5 0 0 1 5 5c0 1.5-.6 2.8-1.5 3.8A5 5 0 0 1 17 15a5 5 0 0 1-10 0 5 5 0 0 1 1.5-4.2A5 5 0 0 1 7 7a5 5 0 0 1 5-5z"/></svg>
            </span>
            Spaced repetition review
          </li>
          <li>
            <span class="benefit-icon bookmark">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </span>
            Unlimited bookmarks
          </li>
          <li>
            <span class="benefit-icon cert">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="6"/><path d="M9 22l3-6 3 6M12 14v2"/></svg>
            </span>
            Shareable certificates
          </li>
        </ul>

        <!-- Plan toggle -->
        <div class="plan-row">
          <button
            class="plan-card"
            [class.plan-sel]="purchaseSvc.selectedPlan() === 'monthly'"
            (click)="purchaseSvc.selectedPlan.set('monthly')"
          >
            <span class="plan-name">Monthly</span>
            <span class="plan-price">{{ monthlyPrice() }}<span class="plan-period">/mo</span></span>
            <span class="plan-note">Billed monthly</span>
          </button>

          <button
            class="plan-card plan-annual"
            [class.plan-sel]="purchaseSvc.selectedPlan() === 'annual'"
            (click)="purchaseSvc.selectedPlan.set('annual')"
          >
            <span class="save-badge">SAVE 58%</span>
            <span class="plan-name">Annual</span>
            <span class="plan-price">{{ annualPrice() }}<span class="plan-period">/yr</span></span>
            <span class="plan-note">{{ annualMonthlyRate() }} billed yearly</span>
          </button>
        </div>

        <!-- CTA -->
        <button
          class="cta-btn"
          [disabled]="purchaseSvc.purchasing()"
          (click)="purchase()"
        >
          @if (purchaseSvc.purchasing()) {
            <svg class="spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            Processing…
          } @else {
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 3l3.5 7L21 5l-2 11H5zm0 2h14v2H5v-2z"/>
            </svg>
            Start 7-Day Free Trial
          }
        </button>

        <p class="trial-note">No charge for 7 days · Cancel anytime</p>

        <!-- Restore -->
        <button class="restore-btn" (click)="restore()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M1 4v6h6M23 20v-6h-6"/>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
          </svg>
          Restore Purchase
        </button>

      </div>
    </ion-content>
  `,
  styles: [`
    :host { display: block; }

    .paywall-content {
      --background: #0b1120;
    }

    .paywall-wrap {
      padding: 20px 20px 36px;
      max-width: 440px;
      margin: 0 auto;
      position: relative;
    }

    /* Close */
    .close-btn {
      position: absolute;
      top: 16px; right: 16px;
      width: 32px; height: 32px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,0.6);
      transition: background 0.2s;
    }
    .close-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }

    /* Hero */
    .hero {
      text-align: center;
      padding: 28px 0 20px;
    }
    .crown-circle {
      width: 64px; height: 64px; border-radius: 20px;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      display: flex; align-items: center; justify-content: center;
      color: #0b1120;
      margin: 0 auto 14px;
      box-shadow: 0 6px 24px rgba(245,158,11,0.40);
    }
    .hero-title {
      font-size: 1.8rem; font-weight: 900;
      color: #fff; margin: 0 0 6px;
      letter-spacing: -0.03em;
    }
    .hero-sub {
      font-size: 0.82rem; color: rgba(255,255,255,0.55);
      margin: 0;
    }

    /* Benefits */
    .benefits {
      list-style: none; margin: 0 0 20px; padding: 0;
      display: grid; grid-template-columns: 1fr 1fr; gap: 8px 12px;
    }
    .benefits li {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.82);
    }
    .benefit-icon {
      width: 26px; height: 26px; border-radius: 7px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .benefit-icon.ban      { background: rgba(239,68,68,0.15);   color: #f87171; }
    .benefit-icon.infinity { background: rgba(99,102,241,0.15);  color: #a5b4fc; }
    .benefit-icon.ai       { background: rgba(168,85,247,0.15);  color: #c084fc; }
    .benefit-icon.brain    { background: rgba(20,184,166,0.15);  color: #2dd4bf; }
    .benefit-icon.bookmark { background: rgba(245,158,11,0.15);  color: #fbbf24; }
    .benefit-icon.cert     { background: rgba(16,185,129,0.15);  color: #34d399; }

    /* Plans */
    .plan-row {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
      margin-bottom: 16px;
    }
    .plan-card {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      padding: 14px 10px;
      border-radius: 16px;
      border: 2px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      cursor: pointer; transition: all 0.2s;
      position: relative;
    }
    .plan-card:hover { border-color: rgba(245,158,11,0.35); background: rgba(245,158,11,0.06); }
    .plan-sel {
      border-color: #f59e0b !important;
      background: rgba(245,158,11,0.10) !important;
      box-shadow: 0 0 0 3px rgba(245,158,11,0.18);
    }
    .save-badge {
      position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(90deg, #10b981, #059669);
      color: #fff; font-size: 0.52rem; font-weight: 800;
      padding: 2px 8px; border-radius: 20px; letter-spacing: 0.06em;
      white-space: nowrap;
    }
    .plan-name {
      font-size: 0.68rem; font-weight: 700;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase; letter-spacing: 0.08em;
    }
    .plan-price {
      font-size: 1.5rem; font-weight: 900; color: #fff;
      line-height: 1.2; margin: 4px 0 2px;
    }
    .plan-period { font-size: 0.68rem; font-weight: 600; color: rgba(255,255,255,0.45); }
    .plan-note { font-size: 0.6rem; color: rgba(255,255,255,0.38); }

    /* CTA */
    .cta-btn {
      width: 100%; padding: 16px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      border: none; border-radius: 16px;
      color: #0b1120; font-size: 0.96rem; font-weight: 800;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      cursor: pointer; transition: opacity 0.2s;
      box-shadow: 0 6px 24px rgba(245,158,11,0.38);
      letter-spacing: 0.01em;
    }
    .cta-btn:hover { opacity: 0.88; }
    .cta-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Spin animation */
    .spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    .trial-note {
      text-align: center; font-size: 0.65rem;
      color: rgba(255,255,255,0.35);
      margin: 10px 0 4px;
    }

    /* Restore */
    .restore-btn {
      width: 100%; padding: 12px;
      background: none; border: none;
      color: rgba(255,255,255,0.35);
      font-size: 0.75rem; font-weight: 600;
      display: flex; align-items: center; justify-content: center; gap: 7px;
      cursor: pointer; transition: color 0.2s;
      margin-top: 4px;
    }
    .restore-btn:hover { color: rgba(255,255,255,0.65); }
  `],
})
export class PaywallModalComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  purchaseSvc       = inject(PurchaseService);
  private authSvc   = inject(AuthService);

  private uid = '';

  ngOnInit(): void {
    this.uid = this.authSvc.user()?.uid ?? 'anonymous';

    // Close modal automatically once Pro is granted (e.g. after verified() fires)
    effect(() => {
      if (this.purchaseSvc.isPro()) {
        this.modalCtrl.dismiss({ purchased: true });
      }
    });
  }

  /** Display price from store product; falls back to hard-coded defaults */
  monthlyPrice(): string {
    const p = this.purchaseSvc.products().find(p => p.id.includes('monthly'));
    return p?.offers?.[0]?.pricingPhases?.[0]?.price ?? '₹199';
  }

  annualPrice(): string {
    const p = this.purchaseSvc.products().find(p => p.id.includes('annual'));
    return p?.offers?.[0]?.pricingPhases?.[0]?.price ?? '₹999';
  }

  annualMonthlyRate(): string {
    // Try to derive from store; fallback to ₹83/mo
    return '₹83/mo';
  }

  async purchase(): Promise<void> {
    const success = await this.purchaseSvc.purchasePlan(this.uid, this.purchaseSvc.selectedPlan());
    if (success) {
      this.modalCtrl.dismiss({ purchased: true });
    }
  }

  async restore(): Promise<void> {
    const restored = await this.purchaseSvc.restorePurchases(this.uid);
    if (restored) {
      this.modalCtrl.dismiss({ purchased: true });
    }
  }

  dismiss(purchased = false): void {
    this.modalCtrl.dismiss({ purchased });
  }
}
