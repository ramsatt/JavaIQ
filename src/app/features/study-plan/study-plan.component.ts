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

const TASK_META: Record<string, { color: string; bg: string; time: string; step: number }> = {
  tutorial: { color: '#1B4332', bg: '#D8F3DC', time: '~10 min', step: 1 },
  interview: { color: '#6d28d9', bg: '#ede9fe', time: '~15 min', step: 2 },
  challenge: { color: '#b45309', bg: '#fef3c7', time: '~5 min', step: 3 }
};

const MOTIVATIONAL: string[] = [
  'Ready to begin? Let\'s crush it! 💪',
  'Great start! Keep the momentum! 🚀',
  'Almost there — one more quest! ⚡',
  'All done! You\'re unstoppable! 🎉'
];

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

        <!-- Header -->
        <div class="sp-header">
          <button class="sp-back" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="sp-header-text">
            <h1 class="sp-title">Study Plan</h1>
            <div class="sp-header-chips">
              <span class="sp-goal-chip">🎯 {{ goalLabel() }}</span>
              @if (game.streak() > 0) {
                <span class="sp-streak-badge">
                  <span class="sp-fire">🔥</span>
                  {{ game.streak() }}-day streak
                </span>
              }
            </div>
          </div>
        </div>

        <!-- Hero: Mission Control -->
        <div class="sp-hero">
          <div class="sp-hero-left">
            <!-- Segmented progress ring -->
            <div class="sp-ring-wrap">
              <svg class="sp-ring" viewBox="0 0 100 100">
                <circle class="ring-bg" cx="50" cy="50" r="42"/>
                @for (seg of segments(); track seg.id; let i = $index) {
                  <circle class="ring-seg"
                    cx="50" cy="50" r="42"
                    [style.stroke]="seg.done ? seg.color : '#D6DDD2'"
                    [style.stroke-dasharray]="seg.dashArray"
                    [style.stroke-dashoffset]="seg.dashOffset"
                    [style.transform]="'rotate(' + seg.rotation + 'deg)'"
                    [style.filter]="seg.done ? 'drop-shadow(0 0 4px ' + seg.color + ')' : 'none'"
                    style="transform-origin: 50% 50%; transition: all 0.6s ease;" />
                }
              </svg>
              <div class="ring-inner">
                <span class="ring-pct">{{ plan.overallProgress() }}%</span>
                <span class="ring-label">Daily</span>
              </div>
            </div>
          </div>

          <div class="sp-hero-right">
            <div class="sp-day-badge">Day {{ plan.currentDay }} / {{ plan.totalDays }}</div>
            <p class="sp-hero-sub">{{ plan.tasksCompletedToday() }} of {{ plan.todayTasks().length }} quests done</p>

            <!-- Level progress bar -->
            <div class="sp-level-section">
              <div class="sp-level-header">
                <span class="sp-level-label">⚡ Level {{ game.level() }}</span>
                <span class="sp-xp-label">{{ game.xpToNextLevel() }} XP to next</span>
              </div>
              <div class="sp-level-track">
                <div class="sp-level-fill" [style.width.%]="game.levelProgress()"></div>
              </div>
            </div>

            <!-- Motivational message -->
            <p class="sp-motiv">{{ motivMessage() }}</p>
          </div>
        </div>

        <!-- Stats Strip -->
        <div class="sp-stats-strip">
          <div class="sp-stat-item">
            <span class="sp-stat-icon sp-fire-anim">🔥</span>
            <div class="sp-stat-text">
              <span class="sp-stat-value">{{ game.streak() }}</span>
              <span class="sp-stat-label">Streak</span>
            </div>
          </div>
          <div class="sp-stat-divider"></div>
          <div class="sp-stat-item">
            <span class="sp-stat-icon">🏆</span>
            <div class="sp-stat-text">
              <span class="sp-stat-value">{{ game.bestStreak() }}</span>
              <span class="sp-stat-label">Best</span>
            </div>
          </div>
          <div class="sp-stat-divider"></div>
          <div class="sp-stat-item">
            <span class="sp-stat-icon">⭐</span>
            <div class="sp-stat-text">
              <span class="sp-stat-value">{{ formatXp(game.xp()) }}</span>
              <span class="sp-stat-label">Total XP</span>
            </div>
          </div>
        </div>

        <!-- Daily Quests -->
        <div class="sp-section-label">DAILY QUESTS</div>

        <div class="sp-task-list">
          @for (task of plan.todayTasks(); track task.id; let i = $index) {
            <div class="sp-task-card"
                 [class.sp-task-done]="plan.isTaskDone(task.id)"
                 [style.animation-delay]="(i * 80) + 'ms'"
                 (click)="navigate(task)">
              <div class="sp-step-badge"
                   [style.background]="plan.isTaskDone(task.id) ? '#059669' : taskMeta(task.id).bg"
                   [style.color]="plan.isTaskDone(task.id) ? '#fff' : taskMeta(task.id).color">
                @if (plan.isTaskDone(task.id)) { ✓ } @else { {{ taskMeta(task.id).step }} }
              </div>
              <div class="sp-task-icon-wrap"
                   [style.background]="taskMeta(task.id).bg">
                <span class="sp-task-icon">{{ task.icon }}</span>
              </div>
              <div class="sp-task-body">
                <span class="sp-task-label" [class.sp-label-done]="plan.isTaskDone(task.id)">{{ task.label }}</span>
                <span class="sp-task-desc">{{ task.description }}</span>
              </div>
              <div class="sp-task-right">
                @if (plan.isTaskDone(task.id)) {
                  <span class="sp-done-chip">
                    <span class="sp-done-check">✓</span> +{{ task.xpReward }} XP
                  </span>
                } @else {
                  <div class="sp-task-meta">
                    <span class="sp-xp-chip">+{{ task.xpReward }} XP</span>
                    <span class="sp-time-chip">{{ taskMeta(task.id).time }}</span>
                  </div>
                  <i class="bi bi-chevron-right sp-task-arrow"></i>
                }
              </div>
            </div>
          }
        </div>

        <!-- 30-Day Roadmap -->
        <div class="sp-section-label" style="margin-top:28px">YOUR JOURNEY</div>
        <div class="sp-calendar">
          @for (d of days30; track d) {
            <div class="sp-cal-cell"
                 [class.sp-cal-past-full]="d < plan.currentDay"
                 [class.sp-cal-today]="d === plan.currentDay"
                 [class.sp-cal-future]="d > plan.currentDay"
                 [class.sp-cal-milestone]="d === 10 || d === 20 || d === 30">
              @if (d < plan.currentDay) {
                <span class="sp-cal-check">✓</span>
              }
              <span class="sp-cal-num">{{ d }}</span>
              @if (d === 10 || d === 20 || d === 30) {
                <span class="sp-cal-trophy">🏆</span>
              }
            </div>
          }
        </div>
        <div class="sp-cal-legend">
          <span class="sp-legend-item"><span class="sp-legend-dot sp-legend-done"></span> Completed</span>
          <span class="sp-legend-item"><span class="sp-legend-dot sp-legend-today"></span> Today</span>
          <span class="sp-legend-item"><span class="sp-legend-dot sp-legend-future"></span> Upcoming</span>
        </div>

        <!-- Tip -->
        <div class="sp-tip">
          <i class="bi bi-lightbulb-fill sp-tip-icon"></i>
          <span [innerHTML]="dailyTip()"></span>
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    /* ═══════════════ BASE ═══════════════ */
    .sp-content  { --background: #F5F7F2; }
    .sp-wrap { max-width: 560px; margin: 0 auto; padding: 16px 16px 80px; }

    /* ═══════════════ HEADER ═══════════════ */
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
    .sp-header-text { display: flex; flex-direction: column; gap: 6px; }
    .sp-header-chips { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .sp-title {
      margin: 0; font-size: 1.4rem; font-weight: 800;
      color: #1B1B1B; letter-spacing: -0.03em;
    }
    .sp-goal-chip {
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
      25% { transform: scale(1.15) rotate(-4deg); }
      50% { transform: scale(1.05) rotate(2deg); }
      75% { transform: scale(1.2) rotate(-2deg); }
    }

    /* ═══════════════ HERO ═══════════════ */
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
    .ring-bg   { fill: none; stroke: #EDF2E7; stroke-width: 6; }
    .ring-seg  { fill: none; stroke-width: 6; stroke-linecap: round; }
    .ring-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .ring-pct  { font-size: 1.3rem; font-weight: 900; color: #1B4332; line-height: 1; }
    .ring-label { font-size: 0.5rem; font-weight: 700; color: #8A9B8F;
                  text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px; }

    .sp-hero-right { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    .sp-day-badge {
      font-size: 0.7rem; font-weight: 800; color: #b45309;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 20px; padding: 3px 12px; display: inline-block; width: fit-content;
    }
    .sp-hero-sub { margin: 0; font-size: 0.78rem; color: #52665A; font-weight: 500; }

    /* Level progress */
    .sp-level-section { display: flex; flex-direction: column; gap: 5px; }
    .sp-level-header { display: flex; justify-content: space-between; align-items: center; }
    .sp-level-label { font-size: 0.75rem; font-weight: 800; color: #1B4332; }
    .sp-xp-label { font-size: 0.62rem; font-weight: 600; color: #8A9B8F; }
    .sp-level-track {
      height: 6px; border-radius: 3px;
      background: #EDF2E7;
      overflow: hidden;
    }
    .sp-level-fill {
      height: 100%; border-radius: 3px;
      background: linear-gradient(90deg, #2D6A4F, #DAA520);
      transition: width 0.8s ease;
    }

    /* Motivational message */
    .sp-motiv {
      margin: 0; font-size: 0.72rem; font-weight: 600;
      color: #52665A; font-style: italic;
    }

    /* ═══════════════ STATS STRIP ═══════════════ */
    .sp-stats-strip {
      display: flex; align-items: center; justify-content: center;
      background: #ffffff;
      border: 1px solid #D6DDD2;
      border-radius: 16px; padding: 14px 8px; margin-bottom: 24px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      gap: 0;
      animation: fadeSlideUp 0.5s ease-out 0.15s both;
    }
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .sp-stat-item {
      flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
    }
    .sp-stat-icon { font-size: 1.15rem; }
    .sp-fire-anim { animation: fireFlicker 1.2s ease-in-out infinite; }
    .sp-stat-text { display: flex; flex-direction: column; }
    .sp-stat-value { font-size: 0.95rem; font-weight: 900; color: #1B1B1B; line-height: 1.1; }
    .sp-stat-label { font-size: 0.55rem; font-weight: 700; color: #8A9B8F;
                     text-transform: uppercase; letter-spacing: 0.08em; }
    .sp-stat-divider {
      width: 1px; height: 28px; background: #D6DDD2; flex-shrink: 0;
    }

    /* ═══════════════ SECTION LABEL ═══════════════ */
    .sp-section-label {
      font-size: 0.65rem; font-weight: 800; letter-spacing: 0.14em;
      color: #8A9B8F; text-transform: uppercase; margin-bottom: 12px;
    }

    /* ═══════════════ QUEST CARDS ═══════════════ */
    .sp-task-list { display: flex; flex-direction: column; gap: 10px; }
    .sp-task-card {
      display: flex; align-items: center; gap: 12px;
      background: #ffffff; border: 1px solid #D6DDD2;
      border-radius: 16px; padding: 14px 14px; cursor: pointer;
      transition: all 0.22s ease;
      animation: cardEntrance 0.4s ease-out both;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    @keyframes cardEntrance {
      from { opacity: 0; transform: translateX(-12px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .sp-task-card:hover:not(.sp-task-done) {
      background: #f0fdf4;
      border-color: #86efac;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(27,67,50,0.08);
    }
    .sp-task-card.sp-task-done {
      cursor: default;
      background: #f0fdf4;
      border-color: #86efac;
    }

    /* Step badge */
    .sp-step-badge {
      width: 24px; height: 24px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 900; flex-shrink: 0;
      transition: all 0.3s ease;
    }

    /* Icon wrap */
    .sp-task-icon-wrap {
      width: 42px; height: 42px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all 0.2s;
    }
    .sp-task-icon { font-size: 1.25rem; }

    .sp-task-body { flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .sp-task-label {
      font-size: 0.85rem; font-weight: 700; color: #1B1B1B;
      transition: all 0.2s;
    }
    .sp-label-done { text-decoration: line-through; text-decoration-color: #86efac; color: #52665A; }
    .sp-task-desc {
      font-size: 0.7rem; color: #52665A;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    .sp-task-right {
      display: flex; align-items: center; gap: 6px; flex-shrink: 0;
    }
    .sp-task-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; }
    .sp-done-chip {
      font-size: 0.62rem; font-weight: 800; color: #059669;
      background: #ecfdf5; border: 1px solid #a7f3d0;
      border-radius: 20px; padding: 4px 12px;
      display: flex; align-items: center; gap: 4px;
    }
    .sp-done-check { animation: checkPop 0.4s ease-out; }
    @keyframes checkPop {
      0%   { transform: scale(0); }
      60%  { transform: scale(1.3); }
      100% { transform: scale(1); }
    }
    .sp-xp-chip {
      font-size: 0.62rem; font-weight: 800; color: #b45309;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 20px; padding: 3px 10px;
      animation: chipPulse 3s ease-in-out infinite;
    }
    @keyframes chipPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
    .sp-time-chip {
      font-size: 0.58rem; font-weight: 600; color: #8A9B8F;
    }
    .sp-task-arrow { color: #B5C4B1; font-size: 0.75rem; }

    /* ═══════════════ CALENDAR ═══════════════ */
    .sp-calendar {
      display: grid; grid-template-columns: repeat(6, 1fr);
      gap: 6px; margin-bottom: 10px;
    }
    .sp-cal-cell {
      aspect-ratio: 1; border-radius: 10px; display: flex;
      flex-direction: column;
      align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 700;
      position: relative; transition: all 0.2s ease;
    }
    .sp-cal-check {
      font-size: 0.5rem; color: #059669; line-height: 1;
    }
    .sp-cal-num { line-height: 1; }
    .sp-cal-trophy {
      font-size: 0.45rem; position: absolute; bottom: 2px;
    }

    .sp-cal-past-full {
      background: #D8F3DC; color: #1B4332;
    }
    .sp-cal-today {
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      color: #ffffff;
      box-shadow: 0 2px 12px rgba(27,67,50,0.25);
      animation: todayPulse 2.5s ease-in-out infinite;
    }
    @keyframes todayPulse {
      0%, 100% { box-shadow: 0 2px 10px rgba(27,67,50,0.2); }
      50% { box-shadow: 0 2px 18px rgba(27,67,50,0.35); }
    }
    .sp-cal-future {
      background: #EDF2E7; color: #8A9B8F;
    }
    .sp-cal-milestone {
      border: 1.5px solid #DAA520;
    }

    /* Calendar legend */
    .sp-cal-legend {
      display: flex; gap: 16px; justify-content: center;
      margin-bottom: 22px;
    }
    .sp-legend-item {
      display: flex; align-items: center; gap: 5px;
      font-size: 0.6rem; font-weight: 600; color: #52665A;
    }
    .sp-legend-dot {
      width: 8px; height: 8px; border-radius: 3px;
    }
    .sp-legend-done { background: #D8F3DC; border: 1px solid #86efac; }
    .sp-legend-today { background: linear-gradient(135deg, #1B4332, #2D6A4F); }
    .sp-legend-future { background: #EDF2E7; border: 1px solid #D6DDD2; }

    /* ═══════════════ TIP ═══════════════ */
    .sp-tip {
      display: flex; align-items: flex-start; gap: 10px;
      background: #fef3c7; border: 1px solid #fde68a;
      border-radius: 14px; padding: 14px;
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
    .sp-tip strong { color: #92400e; }
  `
})
export class StudyPlanComponent {
  plan = inject(StudyPlanService);
  game = inject(GamificationService);
  private router = inject(Router);

  readonly days30 = Array.from({ length: 30 }, (_, i) => i + 1);

  /** SVG ring: 3 segments, each ~110° with 8° gap */
  segments = computed(() => {
    const tasks = this.plan.todayTasks();
    const total = tasks.length;
    const r = 42;
    const circumference = 2 * Math.PI * r; // ~263.9
    const gapDeg = 8;
    const gapLen = (gapDeg / 360) * circumference;
    const segLen = (circumference - gapLen * total) / total;
    const colors = ['#1B4332', '#6d28d9', '#d97706'];

    return tasks.map((t, i) => {
      const startAngle = i * (360 / total);
      return {
        id: t.id,
        done: this.plan.isTaskDone(t.id),
        color: colors[i % colors.length],
        dashArray: `${segLen} ${circumference - segLen}`,
        dashOffset: `0`,
        rotation: startAngle - 90 + (gapDeg / 2)
      };
    });
  });

  motivMessage = computed(() => {
    const done = this.plan.tasksCompletedToday();
    return MOTIVATIONAL[Math.min(done, MOTIVATIONAL.length - 1)];
  });

  dailyTip = computed(() => {
    const dayIdx = this.plan.currentDay % DAILY_TIPS.length;
    return DAILY_TIPS[dayIdx];
  });

  goalLabel(): string {
    return GOAL_LABELS[this.plan.goal()] ?? 'Study Plan';
  }

  taskMeta(id: string): { color: string; bg: string; time: string; step: number } {
    return TASK_META[id] ?? TASK_META['tutorial'];
  }

  formatXp(xp: number): string {
    return xp >= 1000 ? (xp / 1000).toFixed(1) + 'k' : xp.toString();
  }

  navigate(task: StudyTask): void {
    if (this.plan.isTaskDone(task.id)) return;
    this.router.navigate(task.route);
  }

  back(): void {
    this.router.navigate(['/dashboard']);
  }
}
