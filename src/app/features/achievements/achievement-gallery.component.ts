import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { AchievementService, Achievement } from '../../services/achievement.service';
import { ShareService } from '../../services/share.service';
import { AppHeaderComponent } from '../../shared/app-header.component';

const RARITY_LABEL: Record<string, string> = {
  common:    'Common',
  rare:      'Rare',
  epic:      'Epic',
  legendary: 'Legendary'
};

const RARITY_COLOR: Record<string, string> = {
  common:    '#6b7280',
  rare:      '#3b82f6',
  epic:      '#8b5cf6',
  legendary: '#d4a853'
};

@Component({
  selector: 'app-achievement-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, AppHeaderComponent],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="ag-content">
      <div class="ag-wrap">

        <!-- Page Header -->
        <div class="ag-page-head">
          <button class="ag-back-btn" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="ag-head-text">
            <h1 class="ag-title">Achievements</h1>
            <p class="ag-sub">{{ unlockedCount() }} / {{ total() }} unlocked</p>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="ag-overall-track">
          <div class="ag-overall-fill" [style.width.%]="overallPct()"></div>
        </div>

        <!-- Stats strip -->
        <div class="ag-stats">
          <div class="ag-stat">
            <span class="ag-stat-num">{{ unlockedCount() }}</span>
            <span class="ag-stat-lbl">Unlocked</span>
          </div>
          <div class="ag-stat-div"></div>
          <div class="ag-stat">
            <span class="ag-stat-num">{{ total() - unlockedCount() }}</span>
            <span class="ag-stat-lbl">Locked</span>
          </div>
          <div class="ag-stat-div"></div>
          <div class="ag-stat">
            <span class="ag-stat-num">{{ overallPct() }}%</span>
            <span class="ag-stat-lbl">Complete</span>
          </div>
        </div>

        <!-- Badge grid -->
        <div class="ag-grid">
          @for (a of achievements(); track a.id) {
            <div class="ag-card"
                 [class.ag-card-locked]="!a.unlockedAt"
                 [class.ag-card-unlocked]="!!a.unlockedAt"
                 [style.--rarity]="rarityColor(a)">

              <!-- Rarity top accent line -->
              <div class="ag-rarity-line"></div>

              <div class="ag-icon-wrap" [style.border-color]="a.unlockedAt ? a.iconColor : 'transparent'">
                <i class="bi" [class]="a.icon"
                   [style.color]="a.unlockedAt ? a.iconColor : '#475569'"></i>
                @if (!a.unlockedAt) {
                  <div class="ag-lock-overlay">
                    <i class="bi bi-lock-fill ag-lock-icon"></i>
                  </div>
                }
              </div>

              <div class="ag-info">
                <span class="ag-rarity-label" [style.color]="rarityColor(a)">
                  {{ rarityLabel(a) }}
                </span>
                <span class="ag-name">{{ a.title }}</span>
                <span class="ag-desc">{{ a.description }}</span>
                @if (a.unlockedAt) {
                  <span class="ag-date">{{ formatDate(a.unlockedAt) }}</span>
                  <button class="ag-share-btn" (click)="share(a)">
                    <i class="bi bi-share-fill"></i>
                    Share
                  </button>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    .ag-content {
      --background: #0b1120;
      --padding-start: 0;
      --padding-end: 0;
    }
    :host-context(html:not(.dark)) .ag-content { --background: #f8fafc; }

    .ag-wrap {
      min-height: 100%;
      padding-bottom: 48px;
    }

    /* ── Page Header ── */
    .ag-page-head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px clamp(16px,4vw,32px);
    }
    .ag-back-btn {
      width: 38px; height: 38px;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.09);
      color: #94a3b8;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem; flex-shrink: 0;
      transition: background 0.18s;
    }
    .ag-back-btn:hover { background: rgba(255,255,255,0.1); }
    :host-context(html:not(.dark)) .ag-back-btn {
      background: #f1f5f2; border-color: #D6DDD2; color: #374151;
    }
    .ag-head-text { flex: 1; }
    .ag-title {
      font-size: 1.5rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.03em; margin: 0 0 2px;
    }
    :host-context(html:not(.dark)) .ag-title { color: #1B1B1B; }
    .ag-sub { font-size: 0.72rem; color: #64748b; margin: 0; }

    /* ── Progress Bar ── */
    .ag-overall-track {
      height: 3px;
      background: rgba(255,255,255,0.06);
      margin: 0 clamp(16px,4vw,32px);
      border-radius: 2px;
    }
    :host-context(html:not(.dark)) .ag-overall-track { background: #e5e7eb; }
    .ag-overall-fill {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg, #d4a853, #f5c84a);
      transition: width 0.6s ease;
    }

    /* ── Stats Strip ── */
    .ag-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 16px clamp(16px,4vw,32px);
    }
    .ag-stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .ag-stat-num { font-size: 1.3rem; font-weight: 900; color: #e2e8f0; }
    :host-context(html:not(.dark)) .ag-stat-num { color: #1B1B1B; }
    .ag-stat-lbl { font-size: 0.65rem; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; }
    .ag-stat-div { width: 1px; height: 28px; background: rgba(255,255,255,0.08); }
    :host-context(html:not(.dark)) .ag-stat-div { background: #e5e7eb; }

    /* ── Badge Grid ── */
    .ag-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      padding: 4px clamp(16px,4vw,32px) 0;
    }
    @media (min-width: 600px) { .ag-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 900px) { .ag-grid { grid-template-columns: repeat(4, 1fr); } }

    .ag-card {
      position: relative;
      background: rgba(255,255,255,0.03);
      border: 1.5px solid rgba(255,255,255,0.07);
      border-radius: 18px;
      padding: 16px 12px 14px;
      display: flex; flex-direction: column; align-items: center;
      gap: 10px; text-align: center;
      overflow: hidden;
      transition: all 0.2s;
    }
    :host-context(html:not(.dark)) .ag-card { background: #ffffff; border-color: #e5e7eb; }
    .ag-card-locked { opacity: 0.5; filter: grayscale(0.6); }
    .ag-card-unlocked {
      border-color: color-mix(in srgb, var(--rarity) 30%, transparent);
      box-shadow: 0 2px 16px color-mix(in srgb, var(--rarity) 12%, transparent);
    }

    .ag-rarity-line {
      position: absolute;
      top: 0; left: 14px; right: 14px;
      height: 2px; border-radius: 2px;
      background: var(--rarity, transparent);
      opacity: 0.4;
    }
    .ag-card-unlocked .ag-rarity-line { opacity: 0.85; }

    .ag-icon-wrap {
      position: relative;
      width: 56px; height: 56px;
      border-radius: 16px;
      background: rgba(255,255,255,0.05);
      border: 2px solid transparent;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    :host-context(html:not(.dark)) .ag-icon-wrap { background: #f1f5f2; }
    .ag-icon-wrap .bi { font-size: 1.6rem; }

    .ag-lock-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.45);
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
    }
    .ag-lock-icon { font-size: 0.9rem; color: rgba(255,255,255,0.7); }

    .ag-info { display: flex; flex-direction: column; gap: 3px; }
    .ag-rarity-label {
      font-size: 0.58rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.1em;
    }
    .ag-name {
      font-size: 0.82rem; font-weight: 800; color: #e2e8f0;
    }
    :host-context(html:not(.dark)) .ag-name { color: #1B1B1B; }
    .ag-desc {
      font-size: 0.7rem; color: #64748b; line-height: 1.4;
    }
    .ag-date {
      font-size: 0.65rem; font-weight: 600; color: #10b981; margin-top: 2px;
    }

    .ag-share-btn {
      margin-top: 6px;
      background: rgba(27,67,50,0.1);
      border: 1px solid rgba(64,145,108,0.2);
      border-radius: 8px;
      color: #52b788;
      font-size: 0.72rem; font-weight: 600;
      padding: 5px 10px;
      cursor: pointer;
      display: inline-flex; align-items: center; gap: 5px;
      transition: all 0.18s;
    }
    .ag-share-btn:hover { background: rgba(27,67,50,0.18); color: #74c69d; }
    :host-context(html:not(.dark)) .ag-share-btn {
      background: rgba(27,67,50,0.06); color: #1B4332; border-color: rgba(27,67,50,0.18);
    }
  `
})
export class AchievementGalleryComponent {
  private router   = inject(Router);
  private achSvc   = inject(AchievementService);
  private shareSvc = inject(ShareService);

  achievements  = this.achSvc.achievements;

  total         = computed(() => this.achievements().length);
  unlockedCount = computed(() => this.achievements().filter(a => !!a.unlockedAt).length);
  overallPct    = computed(() => Math.round((this.unlockedCount() / Math.max(this.total(), 1)) * 100));

  back(): void { this.router.navigate(['/tutorials']); }

  rarityLabel(a: Achievement): string { return RARITY_LABEL[a.rarity] ?? a.rarity; }
  rarityColor(a: Achievement): string { return RARITY_COLOR[a.rarity] ?? '#6b7280'; }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  share(a: Achievement): void {
    this.shareSvc.shareAchievement(a.title, a.description);
  }
}
