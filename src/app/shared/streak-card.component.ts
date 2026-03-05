import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { GamificationService } from '../gamification.service';

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
          <span class="flame-emoji">🔥</span>
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
  `]
})
export class StreakCardComponent {
  game = inject(GamificationService);

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
