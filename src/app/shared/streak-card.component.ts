import { Component, ChangeDetectionStrategy, inject, computed, signal, effect } from '@angular/core';
import { GamificationService } from '../gamification.service';
import { ShareService } from '../services/share.service';

interface StreakMilestone {
  days: number;
  label: string;
  reward: string;
}

@Component({
  selector: 'app-streak-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="streak-card">
      <!-- Top row: flame + level -->
      <div class="streak-top">
        <div class="streak-flame-block">
          <span class="flame-emoji">{{ game.streakFrozenToday() ? '❄️' : '🔥' }}</span>
          <div class="streak-text-block">
            <span class="streak-count">{{ game.streak() }}</span>
            <span class="streak-unit">Day{{ game.streak() !== 1 ? 's' : '' }}</span>
          </div>
        </div>
        <div class="streak-right">
          <div class="level-badge">
            <span class="level-icon">⚡</span>
            <span class="level-label">Level {{ game.level() }}</span>
          </div>
          <span class="xp-label">{{ game.xp() }} XP</span>
          <!-- Freeze indicator -->
          <div class="freeze-row">
            @for (i of freezeArray(); track i) {
              <span class="freeze-crystal active-crystal">❄</span>
            }
            @for (i of usedFreezeArray(); track i) {
              <span class="freeze-crystal used-crystal">❄</span>
            }
            @if (game.streakFrozenToday()) {
              <span class="freeze-saved-badge">Streak Saved!</span>
            }
          </div>
        </div>
      </div>

      <!-- Milestone progress -->
      <div class="milestone-section">
        <div class="milestone-meta">
          <span class="milestone-name">{{ nextMilestone().label }}</span>
          <span class="milestone-days-left">
            @if (daysToNextMilestone() > 0) {
              {{ daysToNextMilestone() }} day{{ daysToNextMilestone() !== 1 ? 's' : '' }} to go
            } @else {
              Milestone reached! 🎉
            }
          </span>
        </div>
        <div class="milestone-track">
          <div class="milestone-fill" [style.width.%]="milestoneProgress()"></div>
        </div>
        <span class="milestone-reward">{{ nextMilestone().reward }}</span>
      </div>

      <!-- Streak milestone share banner -->
      @if (showShareBanner()) {
        <div class="share-banner">
          <div class="share-banner-text">
            <span class="share-banner-title">🎉 {{ game.streakMilestoneJustHit() }}-Day Streak!</span>
            <span class="share-banner-sub">Share your streak on WhatsApp</span>
          </div>
          <button class="share-wa-btn" (click)="shareStreak()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share
          </button>
          <button class="share-dismiss-btn" (click)="dismissBanner()">✕</button>
        </div>
      }
    </div>
  `,
  styles: [`
    /* Fill the full column height from the two-col grid */
    :host { display: block; height: 100%; }

    .streak-card {
      background:
        linear-gradient(160deg, #0c1e14 0%, #1B4332 55%, #2D6A4F 100%);
      border-radius: 18px;
      padding: 18px 16px;
      color: #fff;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      /* Premium multi-layer shadow with green glow */
      box-shadow:
        0 6px 28px rgba(27,67,50,0.50),
        0 2px 8px rgba(0,0,0,0.20),
        inset 0 1px 0 rgba(255,255,255,0.06);
      position: relative;
      overflow: hidden;
    }

    /* Subtle inner top-right glow */
    .streak-card::before {
      content: '';
      position: absolute;
      top: -40px;
      right: -30px;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(116,198,157,0.14) 0%, transparent 65%);
      pointer-events: none;
    }

    .streak-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      position: relative;
      z-index: 1;
    }

    .streak-flame-block {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .flame-emoji {
      font-size: 2.2rem;
      line-height: 1;
      filter: drop-shadow(0 2px 12px rgba(249,115,22,0.65));
    }

    .streak-text-block {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }

    .streak-count {
      font-size: 1.9rem;
      font-weight: 900;
      /* Gold gradient text */
      background: linear-gradient(135deg, #c89432 20%, #f5c84a 55%, #c89432 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      letter-spacing: -0.03em;
    }

    .streak-unit {
      font-size: 0.68rem;
      font-weight: 700;
      color: rgba(255,255,255,0.55);
      text-transform: uppercase;
      letter-spacing: 0.10em;
    }

    .streak-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 5px;
    }

    .level-badge {
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(212,168,83,0.18);
      border: 1px solid rgba(212,168,83,0.38);
      border-radius: 20px;
      padding: 4px 10px;
      box-shadow: 0 0 10px rgba(212,168,83,0.12);
    }

    .level-icon { font-size: 0.78rem; }

    .level-label {
      font-size: 0.78rem;
      font-weight: 800;
      color: #d4a853;
    }

    .xp-label {
      font-size: 0.68rem;
      font-weight: 600;
      color: rgba(255,255,255,0.45);
    }

    /* Milestone */
    .milestone-section {
      display: flex;
      flex-direction: column;
      gap: 7px;
      position: relative;
      z-index: 1;
      margin-top: auto;
    }

    .milestone-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .milestone-name {
      font-size: 0.76rem;
      font-weight: 800;
      color: rgba(255,255,255,0.90);
    }

    .milestone-days-left {
      font-size: 0.66rem;
      font-weight: 600;
      color: rgba(255,255,255,0.45);
    }

    .milestone-track {
      height: 6px;
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
      overflow: hidden;
    }

    /* Animated gold shimmer bar */
    .milestone-fill {
      height: 100%;
      background: linear-gradient(
        90deg,
        #c89432 0%,
        #f5c84a 35%,
        #ffe590 52%,
        #f5c84a 68%,
        #c89432 100%
      );
      background-size: 300% 100%;
      border-radius: 4px;
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
      animation: gold-shimmer 4s linear infinite;
    }

    @keyframes gold-shimmer {
      0%   { background-position: 200% center; }
      100% { background-position: -200% center; }
    }

    .milestone-reward {
      font-size: 0.64rem;
      font-weight: 600;
      color: #22d3ee; /* bright cyan */
      font-style: italic;
    }

    /* Share banner */
    .share-banner {
      display: flex; align-items: center; gap: 8px;
      margin-top: 12px;
      background: rgba(37,211,102,0.15);
      border: 1px solid rgba(37,211,102,0.35);
      border-radius: 12px;
      padding: 10px 12px;
      position: relative; z-index: 1;
      animation: slide-up 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .share-banner-text { flex: 1; min-width: 0; }
    .share-banner-title { display: block; font-size: 0.8rem; font-weight: 800; color: #fff; }
    .share-banner-sub { display: block; font-size: 0.62rem; color: rgba(255,255,255,0.6); margin-top: 1px; }
    .share-wa-btn {
      display: flex; align-items: center; gap: 6px;
      background: #25d366; color: #fff;
      border: none; border-radius: 8px;
      padding: 7px 12px;
      font-size: 0.78rem; font-weight: 700;
      cursor: pointer; transition: opacity 0.2s;
      white-space: nowrap; flex-shrink: 0;
    }
    .share-wa-btn:hover { opacity: 0.88; }
    .share-dismiss-btn {
      background: none; border: none;
      color: rgba(255,255,255,0.45); font-size: 0.7rem;
      cursor: pointer; padding: 4px; flex-shrink: 0;
      transition: color 0.15s;
    }
    .share-dismiss-btn:hover { color: rgba(255,255,255,0.8); }

    /* Freeze crystals */
    .freeze-row {
      display: flex; align-items: center; gap: 3px;
      margin-top: 3px;
    }
    .freeze-crystal {
      font-size: 0.7rem;
      line-height: 1;
      filter: drop-shadow(0 1px 3px rgba(103,232,249,0.5));
    }
    .active-crystal { color: #67e8f9; }
    .used-crystal { color: rgba(255,255,255,0.18); filter: none; }
    .freeze-saved-badge {
      font-size: 0.58rem; font-weight: 800;
      color: #67e8f9;
      background: rgba(103,232,249,0.15);
      border: 1px solid rgba(103,232,249,0.35);
      border-radius: 20px;
      padding: 1px 7px;
      letter-spacing: 0.04em;
      white-space: nowrap;
      margin-left: 2px;
    }
  `]
})
export class StreakCardComponent {
  game = inject(GamificationService);
  private shareSvc = inject(ShareService);

  showShareBanner = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.game.streakMilestoneJustHit() > 0) {
        this.showShareBanner.set(true);
      }
    });
  }

  shareStreak() {
    this.shareSvc.shareStreakMilestone(this.game.streakMilestoneJustHit() || this.game.streak());
    this.dismissBanner();
  }

  dismissBanner() {
    this.showShareBanner.set(false);
    this.game.streakMilestoneJustHit.set(0);
  }

  private readonly MAX_FREEZE_DISPLAY = 3;

  /** Array of length = available freezes (max 3 shown) */
  freezeArray = computed((): number[] => {
    const count = Math.min(this.game.streakFreezes(), this.MAX_FREEZE_DISPLAY);
    return Array.from({ length: count }, (_, i) => i);
  });

  /** Slots used up — shows greyed crystals (total display slots = 3) */
  usedFreezeArray = computed((): number[] => {
    const used = this.MAX_FREEZE_DISPLAY - Math.min(this.game.streakFreezes(), this.MAX_FREEZE_DISPLAY);
    return Array.from({ length: used }, (_, i) => i);
  });

  private readonly MILESTONES: StreakMilestone[] = [
    { days: 7, label: '7-Day Warrior', reward: '100 XP bonus ahead' },
    { days: 14, label: '14-Day Devotee', reward: '250 XP bonus ahead' },
    { days: 30, label: 'Monthly Master', reward: 'Rare badge unlock' },
    { days: 60, label: '60-Day Legend', reward: 'Elite badge unlock' },
    { days: 100, label: '100-Day Champion', reward: 'Hall of Fame' }
  ];

  nextMilestone = computed((): StreakMilestone => {
    const s = this.game.streak();
    return this.MILESTONES.find(m => m.days > s) ?? this.MILESTONES[this.MILESTONES.length - 1];
  });

  private prevMilestoneDay = computed((): number => {
    const s = this.game.streak();
    const idx = this.MILESTONES.findIndex(m => m.days > s);
    return idx > 0 ? this.MILESTONES[idx - 1].days : 0;
  });

  milestoneProgress = computed((): number => {
    const s = this.game.streak();
    const lo = this.prevMilestoneDay();
    const hi = this.nextMilestone().days;
    if (hi <= lo) return 100;
    return Math.min(100, Math.round(((s - lo) / (hi - lo)) * 100));
  });

  daysToNextMilestone = computed((): number => {
    return Math.max(0, this.nextMilestone().days - this.game.streak());
  });
}
