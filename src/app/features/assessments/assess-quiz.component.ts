import { Component, ChangeDetectionStrategy, inject, signal, computed, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { AssessService } from './assess.service';
import { getAssessment, AssessmentData } from './assess-data';
import { ASSESSMENTS } from './assess-data';

// Metadata from the list for icon/colour/difficulty
const META: Record<string, { faIcon: string; iconColor: string; iconBg: string; accentColor: string; difficulty: string }> = {
  'java-basics':          { faIcon: 'fa-solid fa-mug-hot',          iconColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.14)',   accentColor: '#f59e0b', difficulty: 'beginner' },
  'oop-concepts':         { faIcon: 'fa-solid fa-cubes',             iconColor: '#10b981', iconBg: 'rgba(16,185,129,0.14)',   accentColor: '#10b981', difficulty: 'beginner' },
  'collections':          { faIcon: 'fa-solid fa-layer-group',       iconColor: '#22d3ee', iconBg: 'rgba(34,211,238,0.14)',   accentColor: '#22d3ee', difficulty: 'intermediate' },
  'spring-boot-quiz':     { faIcon: 'fa-solid fa-leaf',              iconColor: '#34d399', iconBg: 'rgba(52,211,153,0.14)',   accentColor: '#34d399', difficulty: 'intermediate' },
  'hibernate-quiz':       { faIcon: 'fa-solid fa-database',          iconColor: '#f97316', iconBg: 'rgba(249,115,22,0.14)',   accentColor: '#f97316', difficulty: 'intermediate' },
  'concurrency':          { faIcon: 'fa-solid fa-bolt',              iconColor: '#eab308', iconBg: 'rgba(234,179,8,0.14)',    accentColor: '#eab308', difficulty: 'advanced' },
  'microservices-quiz':   { faIcon: 'fa-solid fa-diagram-project',   iconColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.14)',   accentColor: '#8b5cf6', difficulty: 'advanced' },
  'design-patterns-quiz': { faIcon: 'fa-solid fa-puzzle-piece',      iconColor: '#ec4899', iconBg: 'rgba(236,72,153,0.14)',   accentColor: '#ec4899', difficulty: 'intermediate' },
};

@Component({
  selector: 'app-assess-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="quiz-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" color="light"></ion-back-button>
        </ion-buttons>
        @if (phase() === 'quiz') {
          <div class="toolbar-progress">
            <span class="toolbar-q-num">{{ currentIdx() + 1 }} / {{ quiz()?.questions?.length }}</span>
            <div class="toolbar-bar">
              <div class="toolbar-bar-fill" [style.width.%]="progressPct()"></div>
            </div>
          </div>
          <div slot="end" class="timer-chip" [class.timer-warn]="timeLeft() <= 60 && timeLeft() > 30" [class.timer-danger]="timeLeft() <= 30">
            <i class="fa-regular fa-clock"></i>
            {{ formatTime(timeLeft()) }}
          </div>
        }
      </ion-toolbar>
    </ion-header>

    <ion-content class="quiz-content">
      <div class="quiz-wrapper">

        <!-- ── START SCREEN ── -->
        @if (phase() === 'start') {
          <div class="start-screen">
            <div class="start-icon-wrap" [style.background]="meta?.iconBg">
              <i [class]="meta?.faIcon" [style.color]="meta?.iconColor"></i>
            </div>
            <span class="diff-pill" [attr.data-d]="meta?.difficulty">{{ meta?.difficulty }}</span>
            <h1 class="start-title">{{ quiz()?.title }}</h1>
            <p class="start-sub">Test your knowledge with timed multiple-choice questions. Each question has one correct answer.</p>

            <div class="start-stats">
              <div class="start-stat">
                <i class="fa-solid fa-pen start-stat-icon"></i>
                <span class="start-stat-val">{{ quiz()?.questions?.length }}</span>
                <span class="start-stat-lbl">Questions</span>
              </div>
              <div class="start-stat-div"></div>
              <div class="start-stat">
                <i class="fa-regular fa-clock start-stat-icon"></i>
                <span class="start-stat-val">{{ quiz()?.timeMinutes }}</span>
                <span class="start-stat-lbl">Minutes</span>
              </div>
              <div class="start-stat-div"></div>
              <div class="start-stat">
                <i class="fa-solid fa-rotate start-stat-icon"></i>
                <span class="start-stat-val">∞</span>
                <span class="start-stat-lbl">Retakes</span>
              </div>
            </div>

            <div class="start-tips">
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> Read each question carefully before selecting</div>
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> You can navigate back to review answers</div>
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> Explanations shown after submission</div>
            </div>

            <button class="btn-start" (click)="startQuiz()" [style.--ac]="meta?.accentColor">
              <i class="fa-solid fa-play"></i>
              Start Quiz
            </button>
          </div>
        }

        <!-- ── QUIZ SCREEN ── -->
        @if (phase() === 'quiz') {
          <div class="quiz-screen">
            <!-- Question -->
            <div class="q-card">
              <div class="q-label">Question {{ currentIdx() + 1 }}</div>
              <p class="q-text">{{ currentQ()?.q }}</p>
            </div>

            <!-- Options -->
            <div class="options-list">
              @for (opt of currentQ()?.opts; track $index) {
                <button class="opt-btn"
                  [class.opt-selected]="answers()[currentIdx()] === $index"
                  (click)="selectOption($index)"
                  [style.--ac]="meta?.accentColor">
                  <span class="opt-letter">{{ letters[$index] }}</span>
                  <span class="opt-text">{{ opt }}</span>
                  @if (answers()[currentIdx()] === $index) {
                    <i class="fa-solid fa-circle-check opt-check"></i>
                  }
                </button>
              }
            </div>

            <!-- Navigation -->
            <div class="nav-row">
              <button class="btn-nav btn-prev" (click)="prev()" [disabled]="currentIdx() === 0">
                <i class="fa-solid fa-chevron-left"></i> Prev
              </button>

              <div class="q-dots">
                @for (q of quiz()?.questions; track $index) {
                  <div class="q-dot"
                    [class.q-dot-answered]="answers()[$index] !== -1"
                    [class.q-dot-current]="currentIdx() === $index"
                    (click)="goTo($index)">
                  </div>
                }
              </div>

              @if (currentIdx() < (quiz()?.questions?.length ?? 1) - 1) {
                <button class="btn-nav btn-next" (click)="next()" [style.--ac]="meta?.accentColor">
                  Next <i class="fa-solid fa-chevron-right"></i>
                </button>
              } @else {
                <button class="btn-nav btn-submit" (click)="submit()" [style.--ac]="meta?.accentColor">
                  Submit <i class="fa-solid fa-check"></i>
                </button>
              }
            </div>

            <!-- Answered count -->
            <div class="answered-info">
              <i class="fa-solid fa-circle-check answered-icon"></i>
              {{ answeredCount() }} of {{ quiz()?.questions?.length }} answered
            </div>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .quiz-toolbar { --background: #0b1120; --border-style: none; }
    .quiz-content  { --background: #0b1120; }

    .quiz-wrapper {
      max-width: 600px;
      margin: 0 auto;
      padding: 24px 16px 100px;
    }

    /* ── Toolbar progress ── */
    .toolbar-progress {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 0 8px;
    }
    .toolbar-q-num {
      font-size: 0.65rem;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 0.06em;
    }
    .toolbar-bar {
      width: 100%;
      height: 3px;
      background: rgba(255,255,255,0.08);
      border-radius: 3px;
      overflow: hidden;
    }
    .toolbar-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #8b5cf6, #a78bfa);
      border-radius: 3px;
      transition: width 0.3s ease;
    }
    .timer-chip {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.78rem;
      font-weight: 700;
      color: #94a3b8;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 4px 12px;
      margin-right: 8px;
      transition: all 0.3s ease;
    }
    .timer-warn  { color: #f59e0b; border-color: rgba(245,158,11,0.3); background: rgba(245,158,11,0.08); }
    .timer-danger { color: #f87171; border-color: rgba(248,113,113,0.3); background: rgba(248,113,113,0.08); }

    /* ── Start Screen ── */
    .start-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-top: 16px;
    }
    .start-icon-wrap {
      width: 72px; height: 72px;
      border-radius: 20px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem;
      margin-bottom: 16px;
    }
    .diff-pill {
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 14px;
    }
    .diff-pill[data-d="beginner"]     { background: rgba(16,185,129,0.15); color: #34d399; }
    .diff-pill[data-d="intermediate"] { background: rgba(139,92,246,0.15); color: #a78bfa; }
    .diff-pill[data-d="advanced"]     { background: rgba(239,68,68,0.15);  color: #f87171; }

    .start-title {
      font-size: 1.6rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      margin: 0 0 10px;
    }
    .start-sub {
      font-size: 0.8rem;
      color: #64748b;
      line-height: 1.6;
      margin: 0 0 24px;
      max-width: 300px;
    }

    /* Stats */
    .start-stats {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      padding: 16px 24px;
      margin-bottom: 20px;
      width: 100%;
    }
    .start-stat { text-align: center; flex: 1; }
    .start-stat-icon { font-size: 0.8rem; color: #8b5cf6; display: block; margin-bottom: 4px; }
    .start-stat-val {
      display: block;
      font-size: 1.3rem;
      font-weight: 800;
      color: #e2e8f0;
      letter-spacing: -0.02em;
    }
    .start-stat-lbl {
      font-size: 0.58rem;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .start-stat-div { width: 1px; height: 36px; background: rgba(255,255,255,0.07); }

    /* Tips */
    .start-tips {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      margin-bottom: 28px;
    }
    .tip {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
      color: #64748b;
      text-align: left;
    }
    .tip-icon { color: #475569; font-size: 0.65rem; flex-shrink: 0; }

    /* Start button */
    .btn-start {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      padding: 16px;
      background: var(--ac, #8b5cf6);
      color: white;
      font-size: 0.95rem;
      font-weight: 800;
      border: none;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      letter-spacing: 0.01em;
    }
    .btn-start:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-start:active { transform: scale(0.98); }

    /* ── Quiz Screen ── */
    .quiz-screen { display: flex; flex-direction: column; gap: 16px; }

    .q-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 20px;
    }
    .q-label {
      font-size: 0.62rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8b5cf6;
      margin-bottom: 10px;
    }
    .q-text {
      font-size: 0.95rem;
      font-weight: 600;
      color: #e2e8f0;
      line-height: 1.55;
      margin: 0;
    }

    /* Options */
    .options-list { display: flex; flex-direction: column; gap: 10px; }
    .opt-btn {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      color: #94a3b8;
      font-size: 0.85rem;
      text-align: left;
      cursor: pointer;
      transition: all 0.18s ease;
    }
    .opt-btn:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.12);
      color: #e2e8f0;
    }
    .opt-selected {
      background: rgba(from var(--ac, #8b5cf6) r g b / 0.12) !important;
      border-color: var(--ac, #8b5cf6) !important;
      color: #e2e8f0 !important;
    }
    .opt-letter {
      flex-shrink: 0;
      width: 28px; height: 28px;
      border-radius: 8px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.09);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: #64748b;
    }
    .opt-selected .opt-letter {
      background: var(--ac, #8b5cf6);
      border-color: var(--ac, #8b5cf6);
      color: white;
    }
    .opt-text { flex: 1; line-height: 1.4; }
    .opt-check { font-size: 0.85rem; color: var(--ac, #8b5cf6); flex-shrink: 0; }

    /* Navigation */
    .nav-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .btn-nav {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 18px;
      border-radius: 10px;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.18s ease;
      border: none;
    }
    .btn-prev {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: #64748b;
    }
    .btn-prev:hover:not(:disabled) { background: rgba(255,255,255,0.07); color: #94a3b8; }
    .btn-prev:disabled { opacity: 0.3; cursor: not-allowed; }
    .btn-next {
      background: var(--ac, #8b5cf6);
      color: white;
    }
    .btn-next:hover { opacity: 0.9; }
    .btn-submit {
      background: #10b981;
      color: white;
    }
    .btn-submit:hover { opacity: 0.9; }

    /* Dots */
    .q-dots {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-wrap: wrap;
      justify-content: center;
      flex: 1;
      padding: 0 4px;
    }
    .q-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.08);
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .q-dot-answered { background: rgba(139,92,246,0.5); border-color: rgba(139,92,246,0.6); }
    .q-dot-current  { background: #8b5cf6; border-color: #8b5cf6; transform: scale(1.3); }

    /* Answered info */
    .answered-info {
      text-align: center;
      font-size: 0.68rem;
      font-weight: 600;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .answered-icon { color: #10b981; font-size: 0.65rem; }

    /* ── Light Mode ── */
    :host-context(html:not(.dark)) .quiz-toolbar { --background: #1B4332; }
    :host-context(html:not(.dark)) .quiz-content  { --background: #F5F7F2; }
    :host-context(html:not(.dark)) .toolbar-bar { background: rgba(255,255,255,0.3); }
    :host-context(html:not(.dark)) .toolbar-bar-fill { background: linear-gradient(90deg, #1B4332, #40916C); }
    :host-context(html:not(.dark)) .toolbar-q-num { color: rgba(255,255,255,0.75); }
    :host-context(html:not(.dark)) .timer-chip { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25); }
    :host-context(html:not(.dark)) .timer-warn   { color: #f59e0b; }
    :host-context(html:not(.dark)) .timer-danger { color: #f87171; }

    :host-context(html:not(.dark)) .start-screen { background: transparent; }
    :host-context(html:not(.dark)) .start-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .start-sub   { color: #52665A; }
    :host-context(html:not(.dark)) .start-stats { background: #ffffff; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .start-stat-val { color: #1B1B1B; }
    :host-context(html:not(.dark)) .start-stat-lbl { color: #8A9B8F; }
    :host-context(html:not(.dark)) .start-stat-div { background: #D6DDD2; }
    :host-context(html:not(.dark)) .start-stat-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .tip { color: #52665A; }
    :host-context(html:not(.dark)) .tip-icon { color: #8A9B8F; }

    :host-context(html:not(.dark)) .q-card { background: #ffffff; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .q-label { color: #1B4332; }
    :host-context(html:not(.dark)) .q-text  { color: #1B1B1B; }

    :host-context(html:not(.dark)) .opt-btn { background: #ffffff; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .opt-btn:hover { background: #F5F7F2; border-color: #B7CCBB; color: #1B1B1B; }
    :host-context(html:not(.dark)) .opt-letter { background: #F5F7F2; border-color: #D6DDD2; color: #8A9B8F; }
    :host-context(html:not(.dark)) .opt-text { color: inherit; }

    :host-context(html:not(.dark)) .btn-prev { background: #ffffff; border-color: #D6DDD2; color: #52665A; }
    :host-context(html:not(.dark)) .btn-prev:hover:not(:disabled) { background: #F5F7F2; color: #1B1B1B; }
    :host-context(html:not(.dark)) .q-dot { background: #D6DDD2; border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .q-dot-answered { background: rgba(27,67,50,0.4); border-color: rgba(27,67,50,0.5); }
    :host-context(html:not(.dark)) .q-dot-current { background: #1B4332; border-color: #1B4332; }
    :host-context(html:not(.dark)) .answered-info { color: #8A9B8F; }
  `
})
export class AssessQuizComponent implements OnDestroy {
  private route  = inject(ActivatedRoute);
  private router = inject(Router);
  private svc    = inject(AssessService);

  readonly letters = ['A', 'B', 'C', 'D'];

  quiz    = signal<AssessmentData | undefined>(undefined);
  phase   = signal<'start' | 'quiz'>('start');
  currentIdx = signal(0);
  timeLeft   = signal(0);
  meta: (typeof META)[string] | undefined;

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  readonly answers     = this.svc.answers;
  readonly currentQ    = computed(() => this.quiz()?.questions[this.currentIdx()]);
  readonly progressPct = computed(() => {
    const total = this.quiz()?.questions.length ?? 1;
    return Math.round(((this.currentIdx() + 1) / total) * 100);
  });
  readonly answeredCount = computed(() => this.answers().filter(a => a !== -1).length);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      const data = getAssessment(id);
      this.quiz.set(data);
      this.meta = META[id];
      if (data) {
        this.timeLeft.set(data.timeMinutes * 60);
        this.svc.startQuiz(data.questions.length);
      }
    });
  }

  startQuiz(): void {
    this.phase.set('quiz');
    this.startTimer();
  }

  private startTimer(): void {
    this.timerInterval = setInterval(() => {
      const left = this.timeLeft() - 1;
      this.timeLeft.set(left);
      if (left <= 0) this.submit();
    }, 1000);
  }

  selectOption(optIdx: number): void {
    this.svc.setAnswer(this.currentIdx(), optIdx);
  }

  prev(): void { if (this.currentIdx() > 0) this.currentIdx.update(i => i - 1); }
  next(): void {
    const max = (this.quiz()?.questions.length ?? 1) - 1;
    if (this.currentIdx() < max) this.currentIdx.update(i => i + 1);
  }
  goTo(idx: number): void { this.currentIdx.set(idx); }

  submit(): void {
    this.stopTimer();
    const q = this.quiz()!;
    const elapsed = q.timeMinutes * 60 - this.timeLeft();
    this.svc.submitQuiz(q.id, q.title, q.category, q.questions, elapsed);
    this.router.navigate(['/assessments', q.id, 'result']);
  }

  private stopTimer(): void {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
  }

  formatTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  ngOnDestroy(): void { this.stopTimer(); }
}
