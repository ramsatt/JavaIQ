import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { StudyPlanService, StudyTask } from '../../services/study-plan.service';
import { GamificationService } from '../../gamification.service';

const GOAL_LABELS: Record<string, string> = {
  faang:  'Crack FAANG',
  switch: 'Switch Job',
  first:  'First Tech Job',
  upskill:'Upskill'
};

@Component({
  selector: 'app-study-plan',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
  template: `
    <ion-content class="sp-content">
      <div class="sp-wrap">

        <!-- Header -->
        <div class="sp-header">
          <button class="sp-back" (click)="back()">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="sp-header-text">
            <h1 class="sp-title">Study Plan</h1>
            <p class="sp-goal-chip">🎯 {{ goalLabel() }}</p>
          </div>
        </div>

        <!-- Progress ring + day counter -->
        <div class="sp-hero">
          <div class="sp-ring-wrap">
            <svg class="sp-ring" viewBox="0 0 80 80">
              <circle class="ring-bg" cx="40" cy="40" r="33"/>
              <circle class="ring-fill" cx="40" cy="40" r="33"
                [style.stroke-dasharray]="207"
                [style.stroke-dashoffset]="207 - (207 * plan.overallProgress() / 100)"/>
            </svg>
            <div class="ring-inner">
              <span class="ring-pct">{{ plan.overallProgress() }}%</span>
              <span class="ring-label">Today</span>
            </div>
          </div>

          <div class="sp-hero-info">
            <div class="sp-day-badge">Day {{ plan.currentDay }} / {{ plan.totalDays }}</div>
            <p class="sp-hero-sub">{{ plan.tasksCompletedToday() }} of {{ plan.todayTasks().length }} tasks done</p>
            <div class="sp-level-row">
              <i class="bi bi-lightning-charge-fill sp-lv-icon"></i>
              Level {{ game.level() }}
              <span class="sp-xp">{{ game.xp() }} XP</span>
            </div>
          </div>
        </div>

        <!-- Today's tasks -->
        <div class="sp-section-label">TODAY'S TASKS</div>

        <div class="sp-task-list">
          @for (task of plan.todayTasks(); track task.id) {
            <div class="sp-task-card" [class.sp-task-done]="plan.isTaskDone(task.id)"
                 (click)="navigate(task)">
              <div class="sp-task-icon">{{ task.icon }}</div>
              <div class="sp-task-body">
                <span class="sp-task-label">{{ task.label }}</span>
                <span class="sp-task-desc">{{ task.description }}</span>
              </div>
              <div class="sp-task-right">
                @if (plan.isTaskDone(task.id)) {
                  <span class="sp-done-chip">✓ Done</span>
                } @else {
                  <span class="sp-xp-chip">+{{ task.xpReward }} XP</span>
                  <i class="bi bi-chevron-right sp-task-arrow"></i>
                }
              </div>
            </div>
          }
        </div>

        <!-- 30-day mini-calendar -->
        <div class="sp-section-label" style="margin-top:24px">30-DAY ROADMAP</div>
        <div class="sp-calendar">
          @for (d of days30; track d) {
            <div class="sp-cal-cell"
                 [class.sp-cal-past]="d < plan.currentDay"
                 [class.sp-cal-today]="d === plan.currentDay"
                 [class.sp-cal-future]="d > plan.currentDay">
              {{ d }}
            </div>
          }
        </div>

        <!-- Tip banner -->
        <div class="sp-tip">
          <i class="bi bi-lightbulb-fill sp-tip-icon"></i>
          <span>Completing all 3 daily tasks earns a <strong>streak bonus</strong> and keeps your XP growing fastest.</span>
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    .sp-content  { --background: var(--ion-background-color, #040c06); }
    .sp-wrap { max-width: 560px; margin: 0 auto; padding: 16px 16px 80px; }

    /* Header */
    .sp-header {
      display: flex; align-items: center; gap: 14px;
      padding: 48px 0 20px;
    }
    .sp-back {
      width: 38px; height: 38px; border-radius: 12px;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.8); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.95rem; flex-shrink: 0; transition: all 0.18s;
    }
    .sp-back:hover { background: rgba(255,255,255,0.13); }
    .sp-header-text { display: flex; flex-direction: column; gap: 4px; }
    .sp-title {
      margin: 0; font-size: 1.35rem; font-weight: 900;
      color: #e4efe7; letter-spacing: -0.03em;
    }
    .sp-goal-chip {
      margin: 0; font-size: 0.72rem; font-weight: 700;
      color: #52b788; background: rgba(82,183,136,0.1);
      border: 1px solid rgba(82,183,136,0.22);
      border-radius: 20px; padding: 3px 10px;
      display: inline-block;
    }

    /* Hero */
    .sp-hero {
      display: flex; align-items: center; gap: 20px;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
      border-radius: 20px; padding: 20px; margin-bottom: 24px;
    }
    .sp-ring-wrap { position: relative; width: 80px; height: 80px; flex-shrink: 0; }
    .sp-ring { width: 100%; height: 100%; transform: rotate(-90deg); }
    .ring-bg   { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 7; }
    .ring-fill {
      fill: none; stroke: #52b788; stroke-width: 7; stroke-linecap: round;
      transition: stroke-dashoffset 0.6s ease;
    }
    .ring-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .ring-pct  { font-size: 1.1rem; font-weight: 900; color: #52b788; line-height: 1; }
    .ring-label { font-size: 0.52rem; font-weight: 700; color: rgba(255,255,255,0.4);
                  text-transform: uppercase; letter-spacing: 0.08em; }

    .sp-hero-info { display: flex; flex-direction: column; gap: 6px; }
    .sp-day-badge {
      font-size: 0.72rem; font-weight: 800; color: #d4a853;
      background: rgba(212,168,83,0.1); border: 1px solid rgba(212,168,83,0.25);
      border-radius: 20px; padding: 3px 10px; display: inline-block;
    }
    .sp-hero-sub { margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
    .sp-level-row {
      display: flex; align-items: center; gap: 6px;
      font-size: 0.8rem; font-weight: 700; color: rgba(255,255,255,0.75);
    }
    .sp-lv-icon { color: #f59e0b; font-size: 0.75rem; }
    .sp-xp { font-size: 0.72rem; font-weight: 600; color: #d4a853; }

    /* Section label */
    .sp-section-label {
      font-size: 0.6rem; font-weight: 800; letter-spacing: 0.14em;
      color: rgba(255,255,255,0.3); text-transform: uppercase; margin-bottom: 12px;
    }

    /* Task list */
    .sp-task-list { display: flex; flex-direction: column; gap: 10px; }
    .sp-task-card {
      display: flex; align-items: center; gap: 14px;
      background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.07);
      border-radius: 16px; padding: 14px 16px; cursor: pointer;
      transition: all 0.2s ease;
    }
    .sp-task-card:hover:not(.sp-task-done) {
      background: rgba(82,183,136,0.06);
      border-color: rgba(82,183,136,0.25);
      transform: translateY(-1px);
    }
    .sp-task-card.sp-task-done {
      opacity: 0.55; cursor: default;
      background: rgba(16,185,129,0.04); border-color: rgba(16,185,129,0.2);
    }
    .sp-task-icon { font-size: 1.5rem; flex-shrink: 0; width: 36px; text-align: center; }
    .sp-task-body { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .sp-task-label {
      font-size: 0.9rem; font-weight: 700; color: #e4efe7;
    }
    .sp-task-desc { font-size: 0.72rem; color: rgba(255,255,255,0.4); }
    .sp-task-right {
      display: flex; align-items: center; gap: 6px; flex-shrink: 0;
    }
    .sp-done-chip {
      font-size: 0.65rem; font-weight: 800; color: #10b981;
      background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.25);
      border-radius: 20px; padding: 3px 10px;
    }
    .sp-xp-chip {
      font-size: 0.65rem; font-weight: 800; color: #d4a853;
      background: rgba(212,168,83,0.1); border: 1px solid rgba(212,168,83,0.22);
      border-radius: 20px; padding: 3px 10px;
    }
    .sp-task-arrow { color: rgba(255,255,255,0.3); font-size: 0.75rem; }

    /* 30-day calendar */
    .sp-calendar {
      display: grid; grid-template-columns: repeat(6, 1fr);
      gap: 6px; margin-bottom: 20px;
    }
    .sp-cal-cell {
      aspect-ratio: 1; border-radius: 8px; display: flex;
      align-items: center; justify-content: center;
      font-size: 0.65rem; font-weight: 700;
    }
    .sp-cal-past {
      background: rgba(82,183,136,0.18); color: #52b788;
    }
    .sp-cal-today {
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      color: #d4a853; box-shadow: 0 0 12px rgba(82,183,136,0.3);
    }
    .sp-cal-future {
      background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.25);
    }

    /* Tip */
    .sp-tip {
      display: flex; align-items: flex-start; gap: 10px;
      background: rgba(212,168,83,0.07); border: 1px solid rgba(212,168,83,0.18);
      border-radius: 14px; padding: 14px;
      font-size: 0.78rem; color: rgba(255,255,255,0.5); line-height: 1.5;
    }
    .sp-tip-icon { color: #d4a853; font-size: 0.9rem; flex-shrink: 0; margin-top: 1px; }
    .sp-tip strong { color: #d4a853; }
  `
})
export class StudyPlanComponent {
  plan = inject(StudyPlanService);
  game = inject(GamificationService);
  private router = inject(Router);

  readonly days30 = Array.from({ length: 30 }, (_, i) => i + 1);

  goalLabel(): string {
    return ({ faang: 'Crack FAANG', switch: 'Switch Job', first: 'First Tech Job', upskill: 'Upskill' })[this.plan.goal()] ?? 'Study Plan';
  }

  navigate(task: StudyTask): void {
    if (this.plan.isTaskDone(task.id)) return;
    this.router.navigate(task.route);
  }

  back(): void {
    this.router.navigate(['/dashboard']);
  }
}
