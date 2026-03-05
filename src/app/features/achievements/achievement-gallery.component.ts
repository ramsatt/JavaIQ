import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { AchievementService, Achievement } from '../../services/achievement.service';

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
  template: `
    <div class="gallery-page">
      <!-- Header -->
      <div class="gallery-header">
        <button class="back-btn" (click)="back()">
          <i class="bi bi-arrow-left"></i>
        </button>
        <div class="header-text">
          <h1 class="gallery-title">Achievements</h1>
          <p class="gallery-sub">{{ unlockedCount() }} / {{ total() }} unlocked</p>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="overall-track">
        <div class="overall-fill" [style.width.%]="overallPct()"></div>
      </div>

      <!-- Badge grid -->
      <div class="badge-grid">
        @for (a of achievements(); track a.id) {
          <div class="badge-card" [class.badge-locked]="!a.unlockedAt">
            <div class="badge-icon-wrap" [style.border-color]="a.unlockedAt ? a.iconColor : 'transparent'">
              <i class="bi" [class]="a.icon"
                 [style.color]="a.unlockedAt ? a.iconColor : '#94a3b8'"></i>
              @if (!a.unlockedAt) {
                <div class="lock-overlay">
                  <i class="bi bi-lock-fill lock-icon"></i>
                </div>
              }
            </div>

            <div class="badge-info">
              <span class="badge-rarity" [style.color]="rarityColor(a)">
                {{ rarityLabel(a) }}
              </span>
              <span class="badge-name">{{ a.title }}</span>
              <span class="badge-desc">{{ a.description }}</span>
              @if (a.unlockedAt) {
                <span class="badge-date">{{ formatDate(a.unlockedAt) }}</span>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .gallery-page {
      min-height: 100vh;
      background: var(--ion-background-color, #f8fafc);
      padding: 0 0 40px;
    }

    :host-context(html.dark) .gallery-page { background: #0f172a; }

    /* Header */
    .gallery-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 56px 20px 20px;
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
    }

    .back-btn {
      width: 38px;
      height: 38px;
      border-radius: 12px;
      background: rgba(255,255,255,0.15);
      border: none;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      flex-shrink: 0;
    }

    .header-text { display: flex; flex-direction: column; gap: 2px; }

    .gallery-title {
      font-size: 1.4rem;
      font-weight: 900;
      color: #fff;
      margin: 0;
    }

    .gallery-sub {
      font-size: 0.75rem;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      margin: 0;
    }

    /* Overall progress bar */
    .overall-track {
      height: 4px;
      background: rgba(27,67,50,0.15);
    }

    .overall-fill {
      height: 100%;
      background: linear-gradient(90deg, #d4a853, #f5c84a);
      transition: width 0.6s ease;
    }

    /* Badge grid */
    .badge-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      padding: 20px 16px;
    }

    .badge-card {
      background: var(--ion-card-background, #ffffff);
      border-radius: 16px;
      padding: 16px;
      border: 1.5px solid rgba(0,0,0,0.06);
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
      transition: all 0.2s;
    }

    :host-context(html.dark) .badge-card {
      background: #1a2332;
      border-color: rgba(255,255,255,0.06);
    }

    .badge-card.badge-locked {
      opacity: 0.5;
      filter: grayscale(1);
    }

    .badge-icon-wrap {
      position: relative;
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: rgba(0,0,0,0.04);
      border: 2px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    :host-context(html.dark) .badge-icon-wrap { background: rgba(255,255,255,0.05); }

    .badge-icon-wrap .bi { font-size: 1.6rem; }

    .lock-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.45);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lock-icon { font-size: 0.9rem; color: rgba(255,255,255,0.8); }

    .badge-info {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .badge-rarity {
      font-size: 0.6rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .badge-name {
      font-size: 0.82rem;
      font-weight: 800;
      color: #1a2e1a;
    }

    :host-context(html.dark) .badge-name { color: #e2e8f0; }

    .badge-desc {
      font-size: 0.7rem;
      color: #6b7280;
      line-height: 1.4;
    }

    :host-context(html.dark) .badge-desc { color: #94a3b8; }

    .badge-date {
      font-size: 0.65rem;
      font-weight: 600;
      color: #10b981;
      margin-top: 2px;
    }
  `]
})
export class AchievementGalleryComponent {
  private router  = inject(Router);
  private achSvc  = inject(AchievementService);

  achievements = this.achSvc.achievements;

  total        = computed(() => this.achievements().length);
  unlockedCount = computed(() => this.achievements().filter(a => !!a.unlockedAt).length);
  overallPct   = computed(() => Math.round((this.unlockedCount() / this.total()) * 100));

  back(): void { this.router.navigate(['/tutorials']); }

  rarityLabel(a: Achievement): string { return RARITY_LABEL[a.rarity] ?? a.rarity; }
  rarityColor(a: Achievement): string { return RARITY_COLOR[a.rarity] ?? '#6b7280'; }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}
