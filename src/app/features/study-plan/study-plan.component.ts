import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { StudyPlanService, StudyTask } from '../../services/study-plan.service';
import { GamificationService } from '../../gamification.service';
import { AppHeaderComponent } from '../../shared/app-header.component';

const GOAL_LABELS: Record<string, string> = {
  faang: 'Crack FAANG',
  switch: 'Switch Job',
  first: 'First Tech Job',
  upskill: 'Upskill'
};

const TASK_META: Record<string, { color: string; bg: string; time: string; xpMultiplier: string }> = {
  tutorial:  { color: '#1B4332', bg: '#D8F3DC', time: '10 min', xpMultiplier: '' },
  interview: { color: '#5b21b6', bg: '#ede9fe', time: '15 min', xpMultiplier: '' },
  challenge: { color: '#b45309', bg: '#fef3c7', time: '5 min',  xpMultiplier: '2×' }
};

const DAILY_TIPS: string[] = [
  'Completing all 3 daily quests earns a <strong>streak bonus</strong> and keeps your XP growing fastest.',
  'Revisiting yesterday\'s topic boosts <strong>long-term retention</strong> by 40%.',
  'The Daily Challenge gives <strong>2× XP</strong> — the fastest way to level up!',
  'Interview prep builds <strong>real-world confidence</strong>. Practice makes perfect!',
  'Consistency beats intensity — <strong>small daily wins</strong> compound over time.'
];

@Component({
  selector: 'app-study-plan',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>
    <ion-content class="sp-content">
      <div class="sp-wrap">

        <!-- Page header -->
        <div class="sp-header">
          <button class="sp-back" (click)="back()" aria-label="Back to Dashboard">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="sp-header-text">
            <h1 class="sp-title">Study Plan</h1>
            <div class="sp-header-chips">
              <span class="sp-goal-chip">
                <i class="bi bi-bullseye" style="font-size:0.6rem"></i>
                {{ goalLabel() }}
              </span>
              @if (game.streak() > 0) {
                <span class="sp-streak-badge" aria-label="{{ game.streak() }}-day streak">
                  <span aria-hidden="true" class="sp-fire">🔥</span>
                  {{ game.streak() }}-day streak
                </span>
              }
            </div>
          </div>
        </div>

        <div class="sp-desktop-grid">

          <!-- ══ LEFT COLUMN ══ -->
          <div class="sp-col-left">

            <!-- Hero: Progress + Level -->
            <div class="sp-hero" role="region" aria-label="Today's progress">
              <div class="sp-hero-left">
                <!-- Segmented progress ring -->
                <div class="sp-ring-wrap" role="progressbar"
                     [attr.aria-valuenow]="plan.overallProgress()"
                     aria-valuemin="0" aria-valuemax="100"
                     [attr.aria-label]="plan.overallProgress() + '% daily quests complete'">
                  <svg class="sp-ring" viewBox="0 0 100 100" aria-hidden="true">
                    <circle class="ring-bg" cx="50" cy="50" r="42"/>
                    @for (seg of segments(); track seg.id) {
                      <circle class="ring-seg"
                        cx="50" cy="50" r="42"
                        [style.stroke]="seg.done ? seg.color : '#D6DDD2'"
                        [style.stroke-dasharray]="seg.dashArray"
                        [style.stroke-dashoffset]="seg.dashOffset"
                        [style.transform]="'rotate(' + seg.rotation + 'deg)'"
                        [style.filter]="seg.done ? 'drop-shadow(0 0 4px ' + seg.color + ')' : 'none'"
                        style="transform-origin:50% 50%; transition:all 0.6s ease;" />
                    }
                  </svg>
                  <div class="ring-inner" aria-hidden="true">
                    <span class="ring-pct">{{ plan.overallProgress() }}%</span>
                    <span class="ring-label">Daily</span>
                  </div>
                </div>
              </div>

              <div class="sp-hero-right">
                <div class="sp-day-badge">Day {{ plan.currentDay }} / {{ plan.totalDays }}</div>
                <!-- Dynamic greeting -->
                <p class="sp-greeting">{{ dynamicGreeting() }}</p>

                <!-- Level progress bar -->
                <div class="sp-level-section">
                  <div class="sp-level-header">
                    <span class="sp-level-label">
                      <span aria-hidden="true">⚡</span> Level {{ game.level() }}
                    </span>
                    <span class="sp-xp-label">{{ game.xpToNextLevel() }} XP to next</span>
                  </div>
                  <div class="sp-level-track"
                       role="progressbar"
                       [attr.aria-valuenow]="game.levelProgress()"
                       aria-valuemin="0" aria-valuemax="100"
                       [attr.aria-label]="'Level progress: ' + game.levelProgress() + '%'">
                    <div class="sp-level-fill" [style.width.%]="game.levelProgress()"></div>
                  </div>
                </div>

                <!-- Next reward preview -->
                @if (nextTask()) {
                  <p class="sp-next-reward">
                    Complete today → +{{ totalRemainingXp() }} XP
                  </p>
                } @else {
                  <p class="sp-next-reward sp-all-done">
                    <span aria-hidden="true">🎉</span> All quests complete!
                  </p>
                }
              </div>
            </div>

            <!-- Stats strip -->
            <div class="sp-stats-strip" role="status">
              @if (game.streak() === 0) {
                <!-- Streak=0: motivational CTA -->
                <button class="sp-streak-cta" (click)="navigate(plan.todayTasks()[0])">
                  <span aria-hidden="true">🔥</span>
                  Start a streak today&nbsp;→
                </button>
              } @else {
                <div class="sp-stat-item">
                  <span class="sp-stat-icon sp-fire-anim" aria-hidden="true">🔥</span>
                  <div class="sp-stat-text">
                    <span class="sp-stat-value">{{ game.streak() }}</span>
                    <span class="sp-stat-label">Streak</span>
                  </div>
                </div>
                <div class="sp-stat-divider" aria-hidden="true"></div>
                <div class="sp-stat-item">
                  <span class="sp-stat-icon" aria-hidden="true">🏆</span>
                  <div class="sp-stat-text">
                    <span class="sp-stat-value">{{ game.bestStreak() }}</span>
                    <span class="sp-stat-label">Best</span>
                  </div>
                </div>
                <div class="sp-stat-divider" aria-hidden="true"></div>
                <div class="sp-stat-item">
                  <span class="sp-stat-icon" aria-hidden="true">⭐</span>
                  <div class="sp-stat-text">
                    <span class="sp-stat-value">{{ formatXp(game.xp()) }}</span>
                    <span class="sp-stat-label">Total XP</span>
                  </div>
                </div>
              }
            </div>

            <!-- Daily Quests -->
            <div class="sp-section-label" id="daily-quests-heading">DAILY QUESTS</div>

            <div class="sp-task-list" role="list" aria-labelledby="daily-quests-heading">
              @for (task of plan.todayTasks(); track task.id; let i = $index) {
                <div class="sp-task-card"
                     [class.sp-task-done]="plan.isTaskDone(task.id)"
                     [class.sp-task-active]="!plan.isTaskDone(task.id) && isNextTask(task)"
                     [style.animation-delay]="(i * 80) + 'ms'"
                     role="listitem"
                     (click)="navigate(task)">

                  <!-- Icon -->
                  <div class="sp-task-icon-wrap"
                       [class.sp-icon-done]="plan.isTaskDone(task.id)"
                       [style.background]="plan.isTaskDone(task.id) ? '#d1fae5' : taskMeta(task.id).bg">
                    @if (plan.isTaskDone(task.id)) {
                      <span class="sp-task-check-icon" aria-hidden="true">✓</span>
                    } @else {
                      <span class="sp-task-icon" aria-hidden="true">{{ task.icon }}</span>
                    }
                  </div>

                  <!-- Body -->
                  <div class="sp-task-body">
                    <div class="sp-task-title-row">
                      <span class="sp-task-label" [class.sp-label-done]="plan.isTaskDone(task.id)">
                        {{ task.label }}
                      </span>
                      <span class="sp-time-inline" aria-label="{{ taskMeta(task.id).time }} estimated">
                        <i class="bi bi-clock" aria-hidden="true"></i>
                        {{ taskMeta(task.id).time }}
                      </span>
                    </div>
                    <span class="sp-task-desc">{{ task.description }}</span>
                  </div>

                  <!-- Right -->
                  <div class="sp-task-right">
                    @if (plan.isTaskDone(task.id)) {
                      <span class="sp-done-chip" role="status">
                        <span aria-hidden="true">✓</span> +{{ task.xpReward }} XP
                      </span>
                    } @else {
                      <div class="sp-task-actions">
                        <div class="sp-xp-stack">
                          <span class="sp-xp-chip" aria-label="{{ task.xpReward }} XP reward">
                            +{{ task.xpReward }} XP
                          </span>
                          @if (taskMeta(task.id).xpMultiplier) {
                            <span class="sp-multiplier">{{ taskMeta(task.id).xpMultiplier }} if streak</span>
                          }
                        </div>
                        <button class="sp-start-btn"
                                [attr.aria-label]="'Start ' + task.label"
                                (click)="$event.stopPropagation(); navigate(task)">
                          Start
                        </button>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>

          </div><!-- /sp-col-left -->

          <!-- ══ RIGHT COLUMN ══ -->
          <div class="sp-col-right">

            <!-- 30-Day Journey -->
            <div class="sp-section-label sp-journey-label" id="journey-heading">YOUR JOURNEY</div>

            <div class="sp-calendar" role="grid" aria-labelledby="journey-heading">
              @for (d of days30; track d) {
                <div class="sp-cal-cell"
                     [class.sp-cal-past]="d < plan.currentDay"
                     [class.sp-cal-today]="d === plan.currentDay"
                     [class.sp-cal-future]="d > plan.currentDay"
                     [class.sp-cal-milestone]="d === 10 || d === 20 || d === 30"
                     role="gridcell"
                     [attr.aria-label]="calCellLabel(d)">
                  @if (d < plan.currentDay) {
                    <span class="sp-cal-check" aria-hidden="true">✓</span>
                  } @else if (d === plan.currentDay) {
                    <span class="sp-cal-num" aria-hidden="true">{{ d }}</span>
                  } @else {
                    <span class="sp-cal-num" aria-hidden="true">{{ d }}</span>
                  }
                  @if (d === 10 || d === 20 || d === 30) {
                    <span class="sp-cal-trophy" aria-hidden="true">🏆</span>
                  }
                </div>
              }
            </div>

            <!-- Legend: swatches match tile styles -->
            <div class="sp-cal-legend" aria-label="Journey calendar legend">
              <span class="sp-legend-item">
                <span class="sp-legend-swatch sp-legend-done" aria-hidden="true">✓</span>
                Completed
              </span>
              <span class="sp-legend-item">
                <span class="sp-legend-swatch sp-legend-today" aria-hidden="true">5</span>
                Today
              </span>
              <span class="sp-legend-item">
                <span class="sp-legend-swatch sp-legend-future" aria-hidden="true">6</span>
                Upcoming
              </span>
            </div>

            <!-- Tip — dismissible -->
            @if (!tipDismissed()) {
              <div class="sp-tip" role="note">
                <i class="bi bi-lightbulb-fill sp-tip-icon" aria-hidden="true"></i>
                <span class="sp-tip-text" [innerHTML]="dailyTip()"></span>
                <button class="sp-tip-dismiss" (click)="tipDismissed.set(true)" aria-label="Dismiss tip">
                  <i class="bi bi-x" aria-hidden="true"></i>
                </button>
              </div>
            }

          </div><!-- /sp-col-right -->

        </div><!-- /sp-desktop-grid -->
      </div>
    </ion-content>
  `,
  styles: `
    /* ═══ BASE ═══ */
    .sp-content { --background: #F5F7F2; --padding-start: 0; --padding-end: 0; }
    .sp-wrap { padding: 16px 16px 80px; }

    @media (min-width: 640px) { .sp-wrap { padding: 16px 32px 80px; } }

    @media (min-width: 1024px) {
      .sp-wrap { padding: 24px 48px 80px; }
      .sp-desktop-grid {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 0 40px;
        align-items: start;
      }
    }

    @media (min-width: 1440px) {
      .sp-wrap { padding: 32px 64px 80px; }
      .sp-desktop-grid { gap: 0 56px; }
    }

    /* ═══ HEADER ═══ */
    .sp-header {
      display: flex; align-items: center; gap: 14px;
      padding: 48px 0 20px;
    }
    .sp-back {
      width: 38px; height: 38px; border-radius: 12px;
      background: #ffffff; border: 1px solid #D6DDD2;
      color: #1B4332; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem; flex-shrink: 0; transition: all 0.18s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .sp-back:hover { background: #EDF2E7; border-color: #B5C4B1; }
    .sp-back:focus-visible { outline: 2px solid #2D6A4F; outline-offset: 2px; }

    .sp-header-text { display: flex; flex-direction: column; gap: 6px; }
    .sp-header-chips { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .sp-title {
      margin: 0; font-size: 1.4rem; font-weight: 800;
      color: #1B1B1B; letter-spacing: -0.03em;
    }
    .sp-goal-chip {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 0.68rem; font-weight: 700;
      color: #1B4332; background: #D8F3DC;
      border: 1px solid #B7E4C7;
      border-radius: 20px; padding: 3px 10px;
    }
    .sp-streak-badge {
      font-size: 0.68rem; font-weight: 800;
      color: #b45309; background: #fef3c7;
      border: 1px solid #fde68a;
      border-radius: 20px; padding: 3px 10px;
      display: flex; align-items: center; gap: 3px;
    }
    .sp-fire { display: inline-block; animation: fireFlicker 1.2s ease-in-out infinite; }
    @keyframes fireFlicker {
      0%, 100% { transform: scale(1) rotate(0deg); }
      25%  { transform: scale(1.15) rotate(-4deg); }
      50%  { transform: scale(1.05) rotate(2deg); }
      75%  { transform: scale(1.2) rotate(-2deg); }
    }

    /* ═══ HERO ═══ */
    .sp-hero {
      display: flex; align-items: center; gap: 22px;
      background: #ffffff;
      border: 1px solid #D6DDD2;
      border-radius: 20px; padding: 22px; margin-bottom: 16px;
      box-shadow: 0 2px 8px rgba(27,67,50,0.06);
      animation: heroFadeIn 0.5s ease-out;
    }
    @keyframes heroFadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .sp-hero-left { flex-shrink: 0; }

    /* Progress ring */
    .sp-ring-wrap { position: relative; width: 96px; height: 96px; }
    .sp-ring { width: 100%; height: 100%; }
    .ring-bg  { fill: none; stroke: #EDF2E7; stroke-width: 6; }
    .ring-seg { fill: none; stroke-width: 6; stroke-linecap: round; }
    .ring-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .ring-pct   { font-size: 1.3rem; font-weight: 900; color: #1B4332; line-height: 1; }
    .ring-label { font-size: 0.5rem; font-weight: 700; color: #8A9B8F;
                  text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }

    .sp-hero-right { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
    .sp-day-badge {
      font-size: 0.7rem; font-weight: 800; color: #b45309;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 20px; padding: 3px 12px;
      display: inline-block; width: fit-content;
    }

    /* Dynamic greeting — no italics */
    .sp-greeting {
      margin: 0; font-size: 0.78rem; font-weight: 600;
      color: #52665A; line-height: 1.45;
    }

    /* Level progress */
    .sp-level-section { display: flex; flex-direction: column; gap: 5px; }
    .sp-level-header { display: flex; justify-content: space-between; align-items: center; }
    .sp-level-label { font-size: 0.75rem; font-weight: 800; color: #1B4332; }
    .sp-xp-label { font-size: 0.62rem; font-weight: 600; color: #8A9B8F; }
    .sp-level-track {
      height: 9px; border-radius: 5px;
      background: #EDF2E7;
      overflow: hidden;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.07);
    }
    .sp-level-fill {
      height: 100%; border-radius: 5px;
      background: linear-gradient(90deg, #2D6A4F 0%, #52b788 60%, #DAA520 100%);
      transition: width 0.8s ease;
    }

    /* Next reward preview */
    .sp-next-reward {
      margin: 0; font-size: 0.68rem; font-weight: 700;
      color: #059669;
    }
    .sp-all-done { color: #b45309; }

    /* ═══ STATS STRIP ═══ */
    .sp-stats-strip {
      display: flex; align-items: center; justify-content: center;
      background: #ffffff; border: 1px solid #D6DDD2;
      border-radius: 16px; padding: 14px 8px; margin-bottom: 24px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      gap: 0;
      animation: fadeSlideUp 0.5s ease-out 0.15s both;
    }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Streak=0 CTA */
    .sp-streak-cta {
      flex: 1; border: none; background: none; cursor: pointer;
      font-size: 0.8rem; font-weight: 700; color: #b45309;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      padding: 4px 0;
      transition: color 0.18s;
    }
    .sp-streak-cta:hover { color: #92400e; }
    .sp-streak-cta:focus-visible { outline: 2px solid #2D6A4F; outline-offset: 2px; border-radius: 8px; }

    .sp-stat-item {
      flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .sp-stat-icon { font-size: 1.15rem; }
    .sp-fire-anim { animation: fireFlicker 1.2s ease-in-out infinite; }
    .sp-stat-text { display: flex; flex-direction: column; }
    .sp-stat-value { font-size: 0.95rem; font-weight: 900; color: #1B1B1B; line-height: 1.1; }
    .sp-stat-label { font-size: 0.55rem; font-weight: 700; color: #8A9B8F;
                     text-transform: uppercase; letter-spacing: 0.08em; }
    .sp-stat-divider { width: 1px; height: 28px; background: #D6DDD2; flex-shrink: 0; }

    /* ═══ SECTION LABEL ═══ */
    .sp-section-label {
      font-size: 0.65rem; font-weight: 800; letter-spacing: 0.14em;
      color: #8A9B8F; text-transform: uppercase; margin-bottom: 12px;
    }

    /* ═══ QUEST CARDS ═══ */
    .sp-task-list { display: flex; flex-direction: column; gap: 10px; }

    .sp-task-card {
      display: flex; align-items: center; gap: 12px;
      background: #ffffff; border: 1px solid #D6DDD2;
      border-radius: 16px; padding: 14px; cursor: pointer;
      transition: all 0.22s ease;
      animation: cardEntrance 0.4s ease-out both;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    @keyframes cardEntrance {
      from { opacity: 0; transform: translateX(-12px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .sp-task-card:hover:not(.sp-task-done) {
      background: #f0fdf4; border-color: #86efac;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(27,67,50,0.08);
    }
    .sp-task-card:focus-visible {
      outline: 2px solid #2D6A4F; outline-offset: 2px;
    }

    /* Active (next incomplete) task gets a subtle highlight */
    .sp-task-active {
      border-color: #74c69d;
      box-shadow: 0 2px 12px rgba(27,67,50,0.10);
    }

    .sp-task-done {
      cursor: default;
      background: #f9fef9;
      border-color: #bbf7d0;
      opacity: 0.85;
    }

    /* Icon wrap */
    .sp-task-icon-wrap {
      width: 44px; height: 44px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all 0.2s;
    }
    .sp-icon-done { background: #d1fae5 !important; }
    .sp-task-icon { font-size: 1.3rem; }
    .sp-task-check-icon {
      font-size: 1rem; font-weight: 900; color: #059669;
      animation: checkPop 0.4s ease-out;
    }
    @keyframes checkPop {
      0%   { transform: scale(0); }
      60%  { transform: scale(1.35); }
      100% { transform: scale(1); }
    }

    /* Task body */
    .sp-task-body { flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0; }

    .sp-task-title-row {
      display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    }
    .sp-task-label {
      font-size: 0.85rem; font-weight: 700; color: #1B1B1B;
      transition: all 0.2s;
    }
    .sp-label-done {
      text-decoration: line-through; text-decoration-color: #86efac; color: #52665A;
    }

    /* Time chip inline with title */
    .sp-time-inline {
      display: inline-flex; align-items: center; gap: 3px;
      font-size: 0.6rem; font-weight: 600; color: #8A9B8F;
      flex-shrink: 0;
    }
    .sp-time-inline i { font-size: 0.58rem; }

    .sp-task-desc {
      font-size: 0.7rem; color: #52665A;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    /* Right side */
    .sp-task-right { flex-shrink: 0; }
    .sp-task-actions {
      display: flex; flex-direction: column; align-items: flex-end; gap: 5px;
    }
    .sp-xp-stack { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; }

    .sp-xp-chip {
      font-size: 0.62rem; font-weight: 800; color: #b45309;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 20px; padding: 3px 10px;
    }
    .sp-multiplier {
      font-size: 0.56rem; font-weight: 700; color: #059669;
    }

    /* Primary Start button per quest */
    .sp-start-btn {
      background: #1B4332; color: #ffffff;
      border: none; border-radius: 8px;
      padding: 6px 14px; font-size: 0.75rem; font-weight: 700;
      cursor: pointer; transition: all 0.18s;
      white-space: nowrap;
    }
    .sp-start-btn:hover { background: #2D6A4F; }
    .sp-start-btn:focus-visible { outline: 2px solid #2D6A4F; outline-offset: 2px; }

    .sp-done-chip {
      font-size: 0.62rem; font-weight: 800; color: #059669;
      background: #ecfdf5; border: 1px solid #a7f3d0;
      border-radius: 20px; padding: 4px 12px;
      display: flex; align-items: center; gap: 4px;
    }

    /* ═══ CALENDAR ═══ */
    .sp-calendar {
      display: grid; grid-template-columns: repeat(6, 1fr);
      gap: 6px; margin-bottom: 10px;
    }

    .sp-cal-cell {
      aspect-ratio: 1; border-radius: 10px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 700;
      position: relative; transition: all 0.2s ease;
    }
    .sp-cal-cell:focus-visible { outline: 2px solid #2D6A4F; outline-offset: 2px; }

    .sp-cal-check { font-size: 0.6rem; color: #059669; line-height: 1; }
    .sp-cal-num   { line-height: 1; }
    .sp-cal-trophy {
      font-size: 0.45rem; position: absolute; bottom: 2px; line-height: 1;
    }

    /* Completed: green fill, only ✓ shown */
    .sp-cal-past {
      background: #D8F3DC; color: #1B4332;
    }

    /* Today: dark green gradient, white text */
    .sp-cal-today {
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      color: #ffffff;
      box-shadow: 0 2px 12px rgba(27,67,50,0.30);
      animation: todayPulse 2.5s ease-in-out infinite;
    }
    @keyframes todayPulse {
      0%, 100% { box-shadow: 0 2px 10px rgba(27,67,50,0.22); }
      50%       { box-shadow: 0 2px 18px rgba(27,67,50,0.38); }
    }

    /* Future: very light gray-green — clearly "unearned" */
    .sp-cal-future {
      background: #F2F5F0; color: #B5C4B1;
    }

    /* Milestone: celebratory gold gradient — NOT dashed */
    .sp-cal-milestone {
      background: linear-gradient(135deg, #c89432, #f5c84a) !important;
      color: #3b1f00 !important;
      box-shadow: 0 2px 8px rgba(200,148,50,0.35);
    }
    .sp-cal-milestone .sp-cal-check { color: #3b1f00; }
    .sp-cal-milestone .sp-cal-num   { color: #3b1f00; }

    /* Legend: swatches match actual tile styles */
    .sp-cal-legend {
      display: flex; gap: 16px; justify-content: center;
      margin-bottom: 22px;
    }
    .sp-legend-item {
      display: flex; align-items: center; gap: 5px;
      font-size: 0.6rem; font-weight: 600; color: #52665A;
    }
    .sp-legend-swatch {
      width: 20px; height: 20px; border-radius: 5px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.52rem; font-weight: 700;
    }
    .sp-legend-done   { background: #D8F3DC; color: #059669; }
    .sp-legend-today  { background: linear-gradient(135deg, #1B4332, #2D6A4F); color: #fff; }
    .sp-legend-future { background: #F2F5F0; color: #B5C4B1; }

    .sp-journey-label { margin-top: 28px; }
    @media (min-width: 1024px) {
      .sp-journey-label { margin-top: 0; }
      .sp-col-right { padding-top: 8px; }
    }

    /* ═══ TIP — DISMISSIBLE ═══ */
    .sp-tip {
      display: flex; align-items: flex-start; gap: 10px;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 14px; padding: 13px 10px 13px 14px;
      font-size: 0.75rem; color: #78350f; line-height: 1.55;
    }
    .sp-tip-icon {
      color: #d97706; font-size: 0.9rem; flex-shrink: 0; margin-top: 1px;
      animation: tipGlow 2.5s ease-in-out infinite;
    }
    @keyframes tipGlow {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    .sp-tip-text { flex: 1; }
    .sp-tip-text strong { color: #92400e; }
    .sp-tip-dismiss {
      background: none; border: none; cursor: pointer;
      color: #b45309; font-size: 0.85rem; padding: 0 2px;
      flex-shrink: 0; line-height: 1; transition: color 0.15s;
      opacity: 0.6;
    }
    .sp-tip-dismiss:hover { opacity: 1; }
    .sp-tip-dismiss:focus-visible { outline: 2px solid #d97706; outline-offset: 2px; border-radius: 4px; }
  `
})
export class StudyPlanComponent {
  plan = inject(StudyPlanService);
  game = inject(GamificationService);
  private router = inject(Router);

  readonly days30 = Array.from({ length: 30 }, (_, i) => i + 1);

  tipDismissed = signal(false);

  /** SVG ring: 3 segments with gaps */
  segments = computed(() => {
    const tasks = this.plan.todayTasks();
    const total = tasks.length;
    const r = 42;
    const circumference = 2 * Math.PI * r;
    const gapDeg = 8;
    const gapLen = (gapDeg / 360) * circumference;
    const segLen = (circumference - gapLen * total) / total;
    const colors = ['#1B4332', '#6d28d9', '#d97706'];

    return tasks.map((t, i) => ({
      id: t.id,
      done: this.plan.isTaskDone(t.id),
      color: colors[i % colors.length],
      dashArray: `${segLen} ${circumference - segLen}`,
      dashOffset: `0`,
      rotation: i * (360 / total) - 90 + (gapDeg / 2)
    }));
  });

  /** First incomplete task — used for primary CTA highlight */
  nextTask = computed((): StudyTask | null =>
    this.plan.todayTasks().find(t => !this.plan.isTaskDone(t.id)) ?? null
  );

  /** Total XP remaining from incomplete tasks */
  totalRemainingXp = computed((): number =>
    this.plan.todayTasks()
      .filter(t => !this.plan.isTaskDone(t.id))
      .reduce((sum, t) => sum + t.xpReward, 0)
  );

  /** Dynamic greeting based on time, streak, and quest progress */
  dynamicGreeting = computed((): string => {
    const done  = this.plan.tasksCompletedToday();
    const total = this.plan.todayTasks().length;
    const streak = this.game.streak();

    if (done === total) return 'All quests complete — you\'re unstoppable!';
    if (done > 0) return `${done} down, ${total - done} to go — keep the streak alive`;
    if (streak > 0) return `${streak}-day streak active — don\'t break it now`;

    const hour = new Date().getHours();
    const timeGreet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    return `${timeGreet} — ${total} quests waiting`;
  });

  dailyTip = computed((): string => {
    const dayIdx = this.plan.currentDay % DAILY_TIPS.length;
    return DAILY_TIPS[dayIdx];
  });

  goalLabel(): string {
    return GOAL_LABELS[this.plan.goal()] ?? 'Study Plan';
  }

  taskMeta(id: string): { color: string; bg: string; time: string; xpMultiplier: string } {
    return TASK_META[id] ?? TASK_META['tutorial'];
  }

  /** Whether this task is the next incomplete one (gets active highlight) */
  isNextTask(task: StudyTask): boolean {
    return this.nextTask()?.id === task.id;
  }

  formatXp(xp: number): string {
    return xp >= 1000 ? (xp / 1000).toFixed(1) + 'k' : xp.toString();
  }

  calCellLabel(day: number): string {
    if (day < this.plan.currentDay) return `Day ${day}: completed`;
    if (day === this.plan.currentDay) return `Day ${day}: today`;
    const milestones: Record<number, string> = { 10: 'milestone', 20: 'milestone', 30: 'final milestone' };
    return `Day ${day}${milestones[day] ? ' — ' + milestones[day] : ''}: upcoming`;
  }

  navigate(task: StudyTask): void {
    if (this.plan.isTaskDone(task.id)) return;
    this.router.navigate(task.route);
  }

  back(): void {
    this.router.navigate(['/dashboard']);
  }
}
