import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { DailyEngagementService } from '../services/daily-engagement.service';
import { GamificationService } from '../gamification.service';

@Component({
  selector: 'app-qotd-card',
  standalone: true,
  imports: [SlicePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="qotd-card">
      <div class="qotd-header">
        <div class="qotd-badge-row">
          <span class="qotd-badge">📅 Question of the Day</span>
          @if (daily.isQotdAnsweredToday()) {
            <span class="qotd-done-chip">Answered ✓ +15 XP</span>
          }
        </div>
        @if (daily.qotdQuestion()) {
          <span class="qotd-category">{{ daily.qotdQuestion()!.category }}</span>
        }
      </div>

      @if (daily.qotdQuestion(); as q) {
        <p class="qotd-question">{{ q.question }}</p>

        @if (!daily.isQotdAnsweredToday()) {
          <button class="btn-answer" (click)="answer()">
            💡 Reveal Answer &amp; Earn 15 XP
          </button>
        } @else {
          <div class="qotd-answer-reveal">
            <div class="answer-label">Answer:</div>
            <p class="answer-text">{{ q.answer | slice:0:260 }}{{ q.answer.length > 260 ? '…' : '' }}</p>
          </div>
        }
      } @else {
        <p class="qotd-empty">Check back soon — questions loading…</p>
      }
    </div>
  `,
  styles: [`
    .qotd-card {
      background: #ffffff;
      border-radius: 18px;
      padding: 18px 18px;
      /* Subtle green gradient border */
      background:
        #ffffff padding-box,
        linear-gradient(160deg, rgba(27,67,50,0.22), rgba(27,67,50,0.06), rgba(27,67,50,0.22)) border-box;
      border: 1.5px solid transparent;
      box-shadow:
        0 2px 10px rgba(27,67,50,0.07),
        0 1px 3px rgba(0,0,0,0.04);
      position: relative;
      overflow: hidden;
    }

    /* Animated top green accent bar */
    .qotd-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #1B4332, #52b788, #95d5b2, #52b788, #1B4332);
      background-size: 200% 100%;
      animation: bar-slide 6s linear infinite;
    }

    @keyframes bar-slide {
      0%   { background-position: 200% center; }
      100% { background-position: -200% center; }
    }

    :host-context(html.dark) .qotd-card {
      background:
        #0d1a10 padding-box,
        linear-gradient(160deg, rgba(82,183,136,0.20), rgba(82,183,136,0.05), rgba(82,183,136,0.20)) border-box;
      box-shadow: 0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.35);
    }

    .qotd-header { margin-bottom: 12px; padding-top: 4px; }

    .qotd-badge-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 5px;
    }

    .qotd-badge {
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      color: #1B4332;
      text-transform: uppercase;
    }

    :host-context(html.dark) .qotd-badge { color: #52b788; }

    .qotd-done-chip {
      font-size: 0.68rem;
      font-weight: 800;
      background: rgba(16,185,129,0.11);
      color: #059669;
      border: 1px solid rgba(16,185,129,0.28);
      border-radius: 20px;
      padding: 3px 10px;
      box-shadow: 0 0 10px rgba(16,185,129,0.12);
    }

    :host-context(html.dark) .qotd-done-chip {
      color: #34d399;
      background: rgba(16,185,129,0.15);
    }

    .qotd-category {
      display: inline-flex;
      align-items: center;
      font-size: 0.63rem;
      font-weight: 800;
      color: #fff;
      background: #2D6A4F;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 6px;
      padding: 2px 8px;
    }

    :host-context(html.dark) .qotd-category { background: #1B4332; color: #74c69d; }

    .qotd-question {
      font-size: 0.94rem;
      font-weight: 700;
      color: #0c1810;
      line-height: 1.55;
      margin: 0 0 16px;
    }

    :host-context(html.dark) .qotd-question { color: #e4efe7; }

    /* Premium answer button */
    .btn-answer {
      width: 100%;
      padding: 13px;
      border-radius: 13px;
      border: none;
      cursor: pointer;
      font-size: 0.86rem;
      font-weight: 800;
      background: linear-gradient(135deg, #0c1810 0%, #1B4332 50%, #2D6A4F 100%);
      color: #d4a853;
      box-shadow:
        0 4px 18px rgba(27,67,50,0.35),
        inset 0 1px 0 rgba(255,255,255,0.07);
      transition: all 0.22s ease;
      letter-spacing: 0.01em;
    }

    .btn-answer:hover {
      transform: translateY(-2px);
      box-shadow:
        0 8px 24px rgba(27,67,50,0.45),
        inset 0 1px 0 rgba(255,255,255,0.10);
    }

    .btn-answer:active { transform: translateY(0); }

    .qotd-answer-reveal {
      background: rgba(27,67,50,0.05);
      border-radius: 12px;
      padding: 13px 15px;
      border-left: 3px solid #1B4332;
    }

    :host-context(html.dark) .qotd-answer-reveal {
      background: rgba(27,67,50,0.22);
      border-left-color: #52b788;
    }

    .answer-label {
      font-size: 0.66rem;
      font-weight: 900;
      color: #1B4332;
      text-transform: uppercase;
      letter-spacing: 0.10em;
      margin-bottom: 7px;
    }

    :host-context(html.dark) .answer-label { color: #52b788; }

    .answer-text {
      font-size: 0.85rem;
      line-height: 1.58;
      color: #2d3d32;
      margin: 0;
    }

    :host-context(html.dark) .answer-text { color: #b8cfc0; }

    .qotd-empty {
      font-size: 0.85rem;
      color: #6b7280;
      margin: 0;
      text-align: center;
      padding: 8px 0;
    }
  `]
})
export class QotdCardComponent {
  daily = inject(DailyEngagementService);
  private game = inject(GamificationService);

  private answered = signal(false);

  answer(): void {
    if (this.daily.isQotdAnsweredToday()) return;
    this.daily.markQotdAnswered();
    this.game.addXp(15);
    this.answered.set(true);
  }
}
