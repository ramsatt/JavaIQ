import {
  Component, inject, signal, computed, OnDestroy, ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { DataService, Question } from '../../data.service';
import { GamificationService } from '../../gamification.service';
import { WrongAnswerService } from '../../services/wrong-answer.service';
import { ShareService } from '../../services/share.service';
import { AnalyticsService } from '../../analytics.service';
import { AppHeaderComponent } from '../../shared/app-header.component';

// ── Types ────────────────────────────────────────────────────────────────────

type Phase = 'setup' | 'session' | 'result';

interface SessionEntry {
  question: Question;
  correct: boolean | null;   // null = timed out / skipped
  timeTaken: number;         // seconds used
}

// ── Constants ─────────────────────────────────────────────────────────────────

const ALL_CATEGORIES = [
  { name: 'Core Java', emoji: '☕' },
  { name: 'Spring Boot', emoji: '🌿' },
  { name: 'Microservices', emoji: '🔗' },
  { name: 'Hibernate', emoji: '🗄️' },
  { name: 'Multithreading', emoji: '🧵' },
  { name: 'Spring Reactive', emoji: '⚡' },
  { name: 'Reactive Programming', emoji: '📡' },
  { name: 'Coding Questions', emoji: '💻' },
];

const QUESTION_COUNTS = [5, 10, 15, 20];
const TIME_OPTIONS = [
  { seconds: 30, label: '30 s', desc: 'Fast' },
  { seconds: 60, label: '60 s', desc: 'Standard' },
  { seconds: 90, label: '90 s', desc: 'Relaxed' },
];

function grade(pct: number): { letter: string; color: string } {
  if (pct >= 90) return { letter: 'A+', color: '#10b981' };
  if (pct >= 80) return { letter: 'A', color: '#34d399' };
  if (pct >= 70) return { letter: 'B', color: '#60a5fa' };
  if (pct >= 60) return { letter: 'C', color: '#f59e0b' };
  return { letter: 'D', color: '#f87171' };
}

// ── Component ─────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-mock-interview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'ion-page' },
  standalone: true,
  imports: [CommonModule, IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>
    <ion-content class="mi-content">
      <div class="mi-wrap">

        <!-- ── SETUP ─────────────────────────────────────── -->
        @if (phase() === 'setup') {
          <div class="mi-page">

            <div class="mi-header">
              <button class="mi-back-btn" (click)="back()">
                <i class="bi bi-arrow-left"></i>
              </button>
              <div>
                <h1 class="mi-page-title">Mock Interview</h1>
                <p class="mi-page-sub">Simulate a real Java interview session</p>
              </div>
            </div>

            <!-- Categories -->
            <div class="mi-section">
              <span class="mi-section-label">Topics</span>
              <p class="mi-section-hint">Select one or more (leave all off = random mix)</p>
              <div class="mi-cat-grid">
                @for (cat of allCategories; track cat.name) {
                  <button class="mi-cat-btn"
                    [class.mi-cat-sel]="selectedCategories().includes(cat.name)"
                    (click)="toggleCategory(cat.name)">
                    <span class="mi-cat-emoji">{{ cat.emoji }}</span>
                    <span class="mi-cat-name">{{ cat.name }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Question count -->
            <div class="mi-section">
              <span class="mi-section-label">Number of Questions</span>
              <div class="mi-chip-row">
                @for (n of questionCounts; track n) {
                  <button class="mi-chip" [class.mi-chip-sel]="questionCount() === n"
                    (click)="questionCount.set(n)">{{ n }}</button>
                }
              </div>
            </div>

            <!-- Time per question -->
            <div class="mi-section">
              <span class="mi-section-label">Time Per Question</span>
              <div class="mi-chip-row">
                @for (t of timeOptions; track t.seconds) {
                  <button class="mi-chip" [class.mi-chip-sel]="timePerQuestion() === t.seconds"
                    (click)="timePerQuestion.set(t.seconds)">
                    {{ t.label }}<span class="mi-chip-sub"> · {{ t.desc }}</span>
                  </button>
                }
              </div>
            </div>

            <button class="mi-start-btn" (click)="startSession()">
              <i class="bi bi-play-circle-fill"></i>
              Start Interview
            </button>

          </div>
        }

        <!-- ── SESSION ────────────────────────────────────── -->
        @if (phase() === 'session') {
          <div class="mi-page mi-session-page">

            <!-- Top bar -->
            <div class="mi-session-top">
              <button class="mi-back-btn mi-back-sm" (click)="confirmQuit()">
                <i class="bi bi-x-lg"></i>
              </button>
              <span class="mi-q-counter">{{ currentIdx() + 1 }} / {{ session().length }}</span>
              <span class="mi-time-label"
                [class.mi-time-warn]="timeLeft() <= 10">
                {{ timeLeft() }}s
              </span>
            </div>

            <!-- Progress bar -->
            <div class="mi-prog-track">
              <div class="mi-prog-fill"
                [style.width.%]="((currentIdx() + 1) / session().length) * 100">
              </div>
            </div>

            <!-- Timer ring -->
            <div class="mi-timer-ring">
              <svg viewBox="0 0 72 72" class="mi-ring-svg">
                <circle cx="36" cy="36" r="30" class="mi-ring-bg"/>
                <circle cx="36" cy="36" r="30" class="mi-ring-arc"
                  [style.stroke-dashoffset]="timerDash()"
                  [class.mi-ring-warn]="timeLeft() <= 10"/>
              </svg>
              <span class="mi-ring-num" [class.mi-ring-warn]="timeLeft() <= 10">
                {{ timeLeft() }}
              </span>
            </div>

            <!-- Question card -->
            <div class="mi-q-card">
              <div class="mi-q-meta">
                <span class="mi-q-cat">{{ currentQuestion()!.category }}</span>
              </div>
              <p class="mi-q-text">{{ currentQuestion()!.question }}</p>

              @if (currentQuestion()!.code) {
                <pre class="mi-q-code"><code>{{ currentQuestion()!.code }}</code></pre>
              }
            </div>

            <!-- Answer (hidden until revealed) -->
            @if (!answerVisible()) {
              <button class="mi-reveal-btn" (click)="showAnswer()">
                <i class="bi bi-eye"></i> Show Answer
              </button>
            } @else {
              <div class="mi-answer-card">
                <span class="mi-answer-label">ANSWER</span>
                <p class="mi-answer-text">{{ currentQuestion()!.answer }}</p>
              </div>

              <div class="mi-verdict-row">
                <button class="mi-verdict-btn mi-verdict-miss" (click)="submitAnswer(false)">
                  <i class="bi bi-x-circle-fill"></i> Missed
                </button>
                <button class="mi-verdict-btn mi-verdict-got" (click)="submitAnswer(true)">
                  <i class="bi bi-check-circle-fill"></i> Got it
                </button>
              </div>
            }

          </div>
        }

        <!-- ── RESULT ──────────────────────────────────────── -->
        @if (phase() === 'result') {
          <div class="mi-page mi-result-page">

            <!-- Grade badge -->
            <div class="mi-grade-wrap">
              <div class="mi-grade-circle" [style.border-color]="resultGrade().color">
                <span class="mi-grade-letter" [style.color]="resultGrade().color">
                  {{ resultGrade().letter }}
                </span>
              </div>
              <h2 class="mi-result-title">Interview Complete</h2>
              <p class="mi-result-sub">{{ resultMessage() }}</p>
            </div>

            <!-- Score stats -->
            <div class="mi-stats-row">
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-green">{{ correctCount() }}</span>
                <span class="mi-stat-lbl">Correct</span>
              </div>
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-red">{{ wrongCount() }}</span>
                <span class="mi-stat-lbl">Missed</span>
              </div>
              <div class="mi-stat">
                <span class="mi-stat-num mi-stat-gold">{{ earnedXp() }}</span>
                <span class="mi-stat-lbl">XP Earned</span>
              </div>
            </div>

            <!-- Score bar -->
            <div class="mi-score-section">
              <div class="mi-score-row">
                <span class="mi-score-pct-label">Score</span>
                <span class="mi-score-pct-val">{{ scorePct() }}%</span>
              </div>
              <div class="mi-score-track">
                <div class="mi-score-fill"
                  [style.width.%]="scorePct()"
                  [style.background]="resultGrade().color">
                </div>
              </div>
            </div>

            <!-- Category breakdown -->
            @if (categoryBreakdown().length > 1) {
              <div class="mi-breakdown">
                <span class="mi-section-label">Category Breakdown</span>
                @for (row of categoryBreakdown(); track row.category) {
                  <div class="mi-bd-row">
                    <span class="mi-bd-cat">{{ row.category }}</span>
                    <div class="mi-bd-track">
                      <div class="mi-bd-fill"
                        [style.width.%]="row.pct"
                        [style.background]="row.pct >= 70 ? '#10b981' : row.pct >= 50 ? '#f59e0b' : '#f87171'">
                      </div>
                    </div>
                    <span class="mi-bd-frac">{{ row.correct }}/{{ row.total }}</span>
                  </div>
                }
              </div>
            }

            <!-- Actions -->
            <div class="mi-result-actions">
              <button class="mi-action-btn mi-action-share" (click)="shareResult()">
                <i class="bi bi-share-fill"></i> Share
              </button>
              <button class="mi-action-btn mi-action-retry" (click)="retry()">
                <i class="bi bi-arrow-clockwise"></i> Try Again
              </button>
            </div>
            <button class="mi-dashboard-btn" (click)="back()">Back to Dashboard</button>

          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .mi-content { --background: #0b1120; }

    .mi-wrap {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .mi-page {
      flex: 1;
      padding: 56px 20px 40px;
      max-width: 540px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    /* Header */
    .mi-header {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .mi-back-btn {
      width: 38px; height: 38px;
      border-radius: 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      flex-shrink: 0;
      margin-top: 4px;
    }
    .mi-page-title {
      font-size: 1.7rem; font-weight: 900; color: #e2e8f0;
      letter-spacing: -0.03em; margin: 0 0 4px;
    }
    .mi-page-sub { font-size: 0.78rem; color: #64748b; margin: 0; }

    /* Sections */
    .mi-section { display: flex; flex-direction: column; gap: 10px; }
    .mi-section-label {
      font-size: 0.6rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: #475569;
    }
    .mi-section-hint { font-size: 0.72rem; color: #475569; margin: -4px 0 0; }

    /* Category grid */
    .mi-cat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .mi-cat-btn {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 12px;
      border-radius: 12px;
      background: rgba(255,255,255,0.03);
      border: 1.5px solid rgba(255,255,255,0.07);
      color: #94a3b8;
      font-size: 0.78rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      text-align: left;
    }
    .mi-cat-btn:hover { background: rgba(99,102,241,0.08); border-color: rgba(99,102,241,0.25); }
    .mi-cat-sel {
      background: rgba(99,102,241,0.14) !important;
      border-color: #818cf8 !important;
      color: #c7d2fe !important;
    }
    .mi-cat-emoji { font-size: 1rem; }
    .mi-cat-name { font-size: 0.72rem; }

    /* Chips */
    .mi-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .mi-chip {
      padding: 8px 16px;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1.5px solid rgba(255,255,255,0.08);
      color: #94a3b8;
      font-size: 0.8rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
    }
    .mi-chip:hover { background: rgba(99,102,241,0.1); color: #a5b4fc; }
    .mi-chip-sel {
      background: rgba(99,102,241,0.18) !important;
      border-color: #818cf8 !important;
      color: #c7d2fe !important;
    }
    .mi-chip-sub { font-size: 0.68rem; font-weight: 400; opacity: 0.7; }

    /* Start button */
    .mi-start-btn {
      display: flex; align-items: center; justify-content: center; gap: 10px;
      padding: 16px;
      border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border: none;
      color: white;
      font-size: 1rem; font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(99,102,241,0.35);
      transition: all 0.2s;
      margin-top: 8px;
    }
    .mi-start-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(99,102,241,0.45); }

    /* ── SESSION ── */
    .mi-session-page { gap: 16px; padding-top: 48px; }

    .mi-session-top {
      display: flex; align-items: center; gap: 12px;
    }
    .mi-back-sm { width: 32px; height: 32px; font-size: 0.85rem; }
    .mi-q-counter { flex: 1; font-size: 0.8rem; font-weight: 700; color: #64748b; text-align: center; }
    .mi-time-label {
      font-size: 0.9rem; font-weight: 700; color: #94a3b8;
      min-width: 32px; text-align: right;
    }
    .mi-time-warn { color: #f87171 !important; }

    .mi-prog-track {
      height: 3px; border-radius: 2px;
      background: rgba(255,255,255,0.08);
    }
    .mi-prog-fill {
      height: 100%; border-radius: 2px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transition: width 0.4s ease;
    }

    /* Timer ring */
    .mi-timer-ring {
      position: relative;
      width: 72px; height: 72px;
      margin: 0 auto;
    }
    .mi-ring-svg { width: 72px; height: 72px; transform: rotate(-90deg); }
    .mi-ring-bg  { fill: none; stroke: rgba(255,255,255,0.07); stroke-width: 5; }
    .mi-ring-arc {
      fill: none;
      stroke: #6366f1;
      stroke-width: 5;
      stroke-linecap: round;
      stroke-dasharray: 188.5;
      transition: stroke-dashoffset 1s linear, stroke 0.3s;
    }
    .mi-ring-arc.mi-ring-warn { stroke: #f87171; }
    .mi-ring-num {
      position: absolute;
      inset: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem; font-weight: 800; color: #94a3b8;
    }
    .mi-ring-num.mi-ring-warn { color: #f87171; }

    /* Question card */
    .mi-q-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 20px;
      display: flex; flex-direction: column; gap: 12px;
    }
    .mi-q-meta { display: flex; gap: 8px; }
    .mi-q-cat {
      font-size: 0.62rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em;
      color: #818cf8;
      background: rgba(99,102,241,0.1);
      padding: 3px 8px;
      border-radius: 6px;
    }
    .mi-q-text {
      font-size: 0.95rem; font-weight: 600; color: #e2e8f0;
      line-height: 1.6; margin: 0;
    }
    .mi-q-code {
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 12px;
      font-size: 0.72rem; color: #93c5fd;
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-word;
      margin: 0;
    }

    /* Reveal button */
    .mi-reveal-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 14px;
      border-radius: 14px;
      background: rgba(255,255,255,0.05);
      border: 1.5px dashed rgba(255,255,255,0.15);
      color: #94a3b8;
      font-size: 0.9rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .mi-reveal-btn:hover { background: rgba(99,102,241,0.12); color: #a5b4fc; }

    /* Answer */
    .mi-answer-card {
      background: rgba(99,102,241,0.07);
      border: 1px solid rgba(99,102,241,0.2);
      border-radius: 14px;
      padding: 16px;
      display: flex; flex-direction: column; gap: 8px;
      animation: fadeIn 0.25s ease;
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .mi-answer-label {
      font-size: 0.58rem; font-weight: 800;
      letter-spacing: 0.12em; color: #818cf8;
    }
    .mi-answer-text {
      font-size: 0.85rem; color: #cbd5e1;
      line-height: 1.6; margin: 0;
    }

    /* Verdict */
    .mi-verdict-row {
      display: flex; gap: 12px;
    }
    .mi-verdict-btn {
      flex: 1; padding: 14px;
      border-radius: 14px;
      border: none;
      font-size: 0.9rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .mi-verdict-miss {
      background: rgba(239,68,68,0.12);
      color: #f87171;
      border: 1px solid rgba(239,68,68,0.25);
    }
    .mi-verdict-miss:hover { background: rgba(239,68,68,0.2); }
    .mi-verdict-got {
      background: rgba(16,185,129,0.12);
      color: #34d399;
      border: 1px solid rgba(16,185,129,0.25);
    }
    .mi-verdict-got:hover { background: rgba(16,185,129,0.2); }

    /* ── RESULT ── */
    .mi-result-page { padding-top: 56px; align-items: stretch; }

    .mi-grade-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .mi-grade-circle {
      width: 90px; height: 90px;
      border-radius: 50%;
      border: 4px solid #10b981;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.2);
    }
    .mi-grade-letter { font-size: 2rem; font-weight: 900; }
    .mi-result-title { font-size: 1.4rem; font-weight: 800; color: #e2e8f0; margin: 0; }
    .mi-result-sub { font-size: 0.8rem; color: #64748b; margin: 0; }

    /* Stats row */
    .mi-stats-row {
      display: flex; gap: 12px;
    }
    .mi-stat {
      flex: 1;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 14px 8px;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
    }
    .mi-stat-num  { font-size: 1.6rem; font-weight: 900; }
    .mi-stat-lbl  { font-size: 0.65rem; font-weight: 600; color: #64748b; }
    .mi-stat-green { color: #10b981; }
    .mi-stat-red   { color: #f87171; }
    .mi-stat-gold  { color: #f59e0b; }

    /* Score bar */
    .mi-score-section { display: flex; flex-direction: column; gap: 8px; }
    .mi-score-row {
      display: flex; justify-content: space-between; align-items: center;
    }
    .mi-score-pct-label { font-size: 0.7rem; font-weight: 700; color: #64748b; }
    .mi-score-pct-val   { font-size: 1rem; font-weight: 800; color: #e2e8f0; }
    .mi-score-track {
      height: 8px; border-radius: 4px;
      background: rgba(255,255,255,0.07);
    }
    .mi-score-fill {
      height: 100%; border-radius: 4px;
      transition: width 0.6s cubic-bezier(0.4,0,0.2,1);
    }

    /* Breakdown */
    .mi-breakdown { display: flex; flex-direction: column; gap: 10px; }
    .mi-bd-row {
      display: flex; align-items: center; gap: 10px;
    }
    .mi-bd-cat  { font-size: 0.72rem; font-weight: 600; color: #94a3b8; min-width: 100px; }
    .mi-bd-track {
      flex: 1; height: 6px; border-radius: 3px;
      background: rgba(255,255,255,0.07);
    }
    .mi-bd-fill  { height: 100%; border-radius: 3px; transition: width 0.5s ease; }
    .mi-bd-frac  { font-size: 0.68rem; font-weight: 600; color: #64748b; min-width: 28px; text-align: right; }

    /* Result actions */
    .mi-result-actions { display: flex; gap: 12px; }
    .mi-action-btn {
      flex: 1; padding: 14px;
      border-radius: 14px;
      border: none;
      font-size: 0.88rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .mi-action-share {
      background: rgba(99,102,241,0.12);
      color: #a5b4fc;
      border: 1px solid rgba(99,102,241,0.25);
    }
    .mi-action-share:hover { background: rgba(99,102,241,0.2); }
    .mi-action-retry {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      box-shadow: 0 4px 16px rgba(99,102,241,0.3);
    }
    .mi-action-retry:hover { transform: translateY(-1px); }
    .mi-dashboard-btn {
      width: 100%; padding: 12px;
      border-radius: 14px;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.08);
      color: #64748b;
      font-size: 0.85rem; font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
    }
    .mi-dashboard-btn:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }
  `
})
export class MockInterviewComponent implements OnDestroy {
  private router = inject(Router);
  private dataSvc = inject(DataService);
  private gameSvc = inject(GamificationService);
  private wrongSvc = inject(WrongAnswerService);
  private shareSvc = inject(ShareService);
  private analytics = inject(AnalyticsService);

  // Constants exposed to template
  readonly allCategories = ALL_CATEGORIES;
  readonly questionCounts = QUESTION_COUNTS;
  readonly timeOptions = TIME_OPTIONS;

  // ── Setup state ────────────────────────────────────────────────────────────
  phase = signal<Phase>('setup');
  selectedCategories = signal<string[]>([]);
  questionCount = signal(10);
  timePerQuestion = signal(60);

  // ── Session state ──────────────────────────────────────────────────────────
  session = signal<SessionEntry[]>([]);
  currentIdx = signal(0);
  answerVisible = signal(false);
  timeLeft = signal(60);
  private _timerStart = 0;
  private _timer?: ReturnType<typeof setInterval>;

  currentQuestion = computed(() => this.session()[this.currentIdx()]?.question ?? null);

  /** stroke-dashoffset for the ring (188.5 = full circle circumference for r=30) */
  timerDash = computed(() =>
    188.5 - (this.timeLeft() / this.timePerQuestion()) * 188.5
  );

  // ── Result computed values ─────────────────────────────────────────────────
  correctCount = computed(() => this.session().filter(e => e.correct === true).length);
  wrongCount = computed(() => this.session().filter(e => e.correct !== true).length);
  scorePct = computed(() =>
    this.session().length === 0 ? 0
      : Math.round((this.correctCount() / this.session().length) * 100)
  );
  earnedXp = computed(() => this.correctCount() * 10);
  resultGrade = computed(() => grade(this.scorePct()));
  resultMessage = computed(() => {
    const pct = this.scorePct();
    if (pct >= 90) return 'Outstanding! You nailed it.';
    if (pct >= 70) return 'Great job! A few areas to polish.';
    if (pct >= 50) return 'Solid attempt. Keep practicing!';
    return 'Room to grow — review your missed answers.';
  });

  categoryBreakdown = computed(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const entry of this.session()) {
      const cat = entry.question.category;
      if (!map.has(cat)) map.set(cat, { correct: 0, total: 0 });
      const row = map.get(cat)!;
      row.total++;
      if (entry.correct) row.correct++;
    }
    return Array.from(map.entries()).map(([category, v]) => ({
      category,
      correct: v.correct,
      total: v.total,
      pct: Math.round((v.correct / v.total) * 100)
    }));
  });

  // ── Setup methods ──────────────────────────────────────────────────────────

  toggleCategory(name: string) {
    this.selectedCategories.update(cats =>
      cats.includes(name) ? cats.filter(c => c !== name) : [...cats, name]
    );
  }

  startSession() {
    const cats = this.selectedCategories().length > 0
      ? this.selectedCategories()
      : ALL_CATEGORIES.map(c => c.name);

    // Pull questions from selected categories, shuffle, take N
    const pool: Question[] = cats.flatMap(c => this.dataSvc.getQuestions(c));
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, this.questionCount());

    if (picked.length === 0) return;

    const entries: SessionEntry[] = picked.map(q => ({
      question: q, correct: null, timeTaken: 0
    }));

    this.session.set(entries);
    this.currentIdx.set(0);
    this.answerVisible.set(false);
    this.phase.set('session');
    this.analytics.track('mock_interview_started', {
      categories: cats.join(','),
      count: picked.length,
      time_per_q: this.timePerQuestion()
    });
    this._startTimer();
  }

  // ── Session methods ────────────────────────────────────────────────────────

  showAnswer() {
    this.answerVisible.set(true);
    this._clearTimer();
  }

  submitAnswer(correct: boolean) {
    const idx = this.currentIdx();
    const entry = this.session()[idx];
    const timeTaken = this.timePerQuestion() - this.timeLeft();

    // Update entry
    this.session.update(s => {
      const updated = [...s];
      updated[idx] = { ...entry, correct, timeTaken };
      return updated;
    });

    // Track misses in spaced-repetition service
    if (correct) {
      this.wrongSvc.clearMiss(entry.question.id);
    } else {
      this.wrongSvc.recordMiss(entry.question.id);
    }

    this._advance();
  }

  confirmQuit() {
    // Immediately end session with remaining as missed
    this._endSession();
  }

  // ── Private session helpers ────────────────────────────────────────────────

  private _startTimer() {
    this._clearTimer();
    this.timeLeft.set(this.timePerQuestion());
    this._timerStart = Date.now();
    this._timer = setInterval(() => {
      const left = this.timeLeft() - 1;
      if (left <= 0) {
        this.timeLeft.set(0);
        this._onTimeout();
      } else {
        this.timeLeft.set(left);
      }
    }, 1000);
  }

  private _clearTimer() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  private _onTimeout() {
    this._clearTimer();
    const idx = this.currentIdx();
    // Mark as timed-out (correct = null stays, treated as miss in scoring)
    this.session.update(s => {
      const updated = [...s];
      updated[idx] = { ...updated[idx], correct: false, timeTaken: this.timePerQuestion() };
      return updated;
    });
    this.wrongSvc.recordMiss(this.session()[idx].question.id);
    this._advance();
  }

  private _advance() {
    const next = this.currentIdx() + 1;
    if (next >= this.session().length) {
      this._endSession();
    } else {
      this.currentIdx.set(next);
      this.answerVisible.set(false);
      this._startTimer();
    }
  }

  private _endSession() {
    this._clearTimer();
    this.gameSvc.addXp(this.earnedXp());
    this.phase.set('result');
    this.analytics.track('mock_interview_completed', {
      score_pct: this.scorePct(),
      xp_earned: this.earnedXp(),
      correct: this.correctCount(),
      total: this.session().length
    });
  }

  // ── Result methods ─────────────────────────────────────────────────────────

  async shareResult() {
    await this.shareSvc.shareText(
      'JavaIQ Mock Interview',
      `I scored ${this.scorePct()}% (${this.correctCount()}/${this.session().length}) on a Java mock interview! Grade: ${this.resultGrade().letter}. #JavaIQ`
    );
  }

  retry() {
    this.session.set([]);
    this.currentIdx.set(0);
    this.phase.set('setup');
  }

  back() { this.router.navigate(['/dashboard']); }

  ngOnDestroy() { this._clearTimer(); }
}
