import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { DailyEngagementService } from '../services/daily-engagement.service';

@Component({
  selector: 'app-daily-goal-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="goal-card">
      <div class="goal-header">
        <span class="goal-title">🎯 Today's Goal</span>
        <span class="goal-count">
          {{ daily.dailyGoalProgress() }} / {{ daily.dailyGoalTotal }} done
        </span>
      </div>

      <!-- Checklist -->
      <div class="goal-tasks">
        <div class="goal-task" [class.task-done]="daily.challengeDoneToday()">
          <div class="task-check">
            @if (daily.challengeDoneToday()) {
              <span class="check-icon">✓</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">Complete 1 challenge</span>
        </div>

        <div class="goal-task" [class.task-done]="daily.topicsCompletedTodayCount() >= 2">
          <div class="task-check">
            @if (daily.topicsCompletedTodayCount() >= 2) {
              <span class="check-icon">✓</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">
            Read 2 tutorial topics
            @if (daily.topicsCompletedTodayCount() > 0 && daily.topicsCompletedTodayCount() < 2) {
              <span class="task-sub">({{ daily.topicsCompletedTodayCount() }}/2)</span>
            }
          </span>
        </div>

        <div class="goal-task" [class.task-done]="daily.isQotdAnsweredToday()">
          <div class="task-check">
            @if (daily.isQotdAnsweredToday()) {
              <span class="check-icon">✓</span>
            } @else {
              <span class="uncheck-icon"></span>
            }
          </div>
          <span class="task-label">Answer today's question</span>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="goal-track">
        <div class="goal-fill" [style.width.%]="goalProgressPct()"></div>
      </div>

      <!-- Completion banner -->
      @if (daily.dailyGoalProgress() === daily.dailyGoalTotal) {
        <div class="goal-complete">🎉 All done today! Keep it up!</div>
      }
    </div>
  `,
  styles: [`
    /* Fill the full column height from the two-col grid */
    :host { display: block; height: 100%; }

    .goal-card {
      border-radius: 18px;
      padding: 18px 16px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      /* Premium gradient border */
      background:
        #ffffff padding-box,
        linear-gradient(160deg, rgba(27,67,50,0.28), rgba(27,67,50,0.08), rgba(27,67,50,0.28)) border-box;
      border: 1.5px solid transparent;
      box-shadow:
        0 2px 10px rgba(27,67,50,0.07),
        0 1px 3px rgba(0,0,0,0.04);
    }

    :host-context(html.dark) .goal-card {
      background:
        #0d1a10 padding-box,
        linear-gradient(160deg, rgba(82,183,136,0.22), rgba(82,183,136,0.06), rgba(82,183,136,0.22)) border-box;
      box-shadow: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.35);
    }

    .goal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 13px;
    }

    .goal-title {
      font-size: 0.74rem;
      font-weight: 900;
      color: #1B4332;
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    :host-context(html.dark) .goal-title { color: #52b788; }

    .goal-count {
      font-size: 0.70rem;
      font-weight: 700;
      color: #6b7280;
      background: rgba(0,0,0,0.05);
      padding: 2px 7px;
      border-radius: 10px;
    }

    :host-context(html.dark) .goal-count {
      color: #94a3b8;
      background: rgba(255,255,255,0.06);
    }

    /* Tasks */
    .goal-tasks { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }

    .goal-task {
      display: flex;
      align-items: center;
      gap: 9px;
      transition: opacity 0.25s;
    }

    .goal-task.task-done .task-label {
      text-decoration: line-through;
      opacity: 0.45;
    }

    .task-check {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      border: 2px solid rgba(27,67,50,0.20);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      background: transparent;
    }

    :host-context(html.dark) .task-check { border-color: rgba(82,183,136,0.25); }

    .task-done .task-check {
      background: #1B4332;
      border-color: #1B4332;
      transform: scale(1.08);
      box-shadow: 0 0 8px rgba(27,67,50,0.35);
    }

    :host-context(html.dark) .task-done .task-check {
      background: #52b788;
      border-color: #52b788;
      box-shadow: 0 0 8px rgba(82,183,136,0.40);
    }

    .check-icon {
      font-size: 0.68rem;
      color: #fff;
      font-weight: 900;
      line-height: 1;
      animation: check-pop 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }

    @keyframes check-pop {
      from { transform: scale(0); opacity: 0; }
      to   { transform: scale(1); opacity: 1; }
    }

    .task-label {
      font-size: 0.82rem;
      font-weight: 600;
      color: #1f2d23;
      display: flex;
      align-items: center;
      gap: 5px;
      line-height: 1.3;
    }

    :host-context(html.dark) .task-label { color: #c8dace; }

    .task-sub {
      font-size: 0.70rem;
      font-weight: 700;
      color: #9ca3af;
      font-style: italic;
    }

    /* Progress bar */
    .goal-track {
      height: 6px;
      background: rgba(0,0,0,0.07);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 8px;
      margin-top: auto;
    }

    :host-context(html.dark) .goal-track { background: rgba(255,255,255,0.09); }

    .goal-fill {
      height: 100%;
      background: linear-gradient(90deg, #1B4332, #52b788);
      border-radius: 4px;
      transition: width 0.45s cubic-bezier(0.4,0,0.2,1);
    }

    :host-context(html.dark) .goal-fill {
      background: linear-gradient(90deg, #40916C, #74c69d);
    }

    /* Completion banner */
    .goal-complete {
      text-align: center;
      font-size: 0.78rem;
      font-weight: 800;
      color: #059669;
      background: rgba(16,185,129,0.09);
      border-radius: 10px;
      padding: 7px;
      border: 1px solid rgba(16,185,129,0.22);
    }

    :host-context(html.dark) .goal-complete {
      background: rgba(16,185,129,0.13);
      color: #34d399;
    }
  `]
})
export class DailyGoalCardComponent {
  daily = inject(DailyEngagementService);

  goalProgressPct = computed((): number =>
    Math.round((this.daily.dailyGoalProgress() / this.daily.dailyGoalTotal) * 100)
  );
}
