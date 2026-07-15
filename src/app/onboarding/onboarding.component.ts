import { Component, signal, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { AnalyticsService } from '../analytics.service';
import { PushNotificationService } from '../push-notification.service';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../auth.service';
import { AdMobService } from '../admob.service';

const GOALS = [
  { key: 'faang',   label: 'Crack FAANG',   emoji: '🎯', desc: 'Google, Meta, Amazon & top firms' },
  { key: 'switch',  label: 'Switch Jobs',   emoji: '🚀', desc: 'Level up to a better opportunity' },
  { key: 'first',   label: 'Get First Job', emoji: '🌱', desc: 'Land your first developer role' },
  { key: 'upskill', label: 'Upskill',       emoji: '📈', desc: 'Grow in your current position' },
];

const LEVELS = [
  { key: 'fresher', label: 'Fresher',     emoji: '🌱', desc: '0–1 year / student' },
  { key: 'junior',  label: '1–3 Years',   emoji: '⚡', desc: 'Working developer' },
  { key: 'mid',     label: '3–6 Years',   emoji: '🔥', desc: 'Mid-level engineer' },
  { key: 'senior',  label: '6+ Years',    emoji: '🏆', desc: 'Senior / tech lead' },
];

interface DiagQuestion {
  q: string;
  options: string[];
  correct: number;   // index of correct option
  topic: string;     // weak-area label if wrong
}

const DIAG_QUESTIONS: DiagQuestion[] = [
  {
    q: 'What does the `volatile` keyword guarantee in Java?',
    options: ['Atomicity', 'Visibility across threads', 'Mutual exclusion', 'Immutability'],
    correct: 1,
    topic: 'Multithreading & Concurrency',
  },
  {
    q: 'Which collection allows null keys in Java?',
    options: ['TreeMap', 'ConcurrentHashMap', 'HashMap', 'Hashtable'],
    correct: 2,
    topic: 'Collections Framework',
  },
  {
    q: 'What is the time complexity of `HashMap.get()` in the average case?',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
    correct: 2,
    topic: 'Data Structures & Complexity',
  },
  {
    q: 'Which Spring annotation marks a class as a REST controller?',
    options: ['@Controller', '@Service', '@RestController', '@Component'],
    correct: 2,
    topic: 'Spring Boot',
  },
  {
    q: 'What does `@Transactional(propagation = REQUIRES_NEW)` do?',
    options: [
      'Joins existing transaction',
      'Suspends current transaction and starts a new one',
      'Rolls back on any exception',
      'Commits before and after',
    ],
    correct: 1,
    topic: 'Spring Transactions',
  },
];

interface OnboardingSlide {
  emoji: string;
  title: string;
  body: string;
  pills: string[];
  gradientFrom: string;
  gradientTo: string;
}

const SLIDES: OnboardingSlide[] = [
  {
    emoji: '☕',
    title: 'Your Java\nInterview Coach',
    body: 'Structured content built for Java developers — from core concepts to system design.',
    pills: ['Core Java', 'Spring Boot', 'Microservices'],
    gradientFrom: '#0f172a', gradientTo: '#1e293b'
  },
  {
    emoji: '📚',
    title: 'Learn with\nStructured Courses',
    body: 'Deep-dive tutorials with chapter breakdowns, code examples, and real interview tips.',
    pills: ['3 Courses', '100+ Chapters', 'Code Examples'],
    gradientFrom: '#0f1a2e', gradientTo: '#0f2744'
  },
  {
    emoji: '⚡',
    title: 'Practice &\nBuild Confidence',
    body: '500+ interview questions, LeetCode problems, and timed assessments to sharpen your skills.',
    pills: ['500+ Questions', 'LeetCode', 'Timed Quizzes'],
    gradientFrom: '#0f1f17', gradientTo: '#0a2e1a'
  },
  {
    emoji: '🏆',
    title: 'Compete &\nTrack Progress',
    body: 'Earn XP, climb the leaderboard, and get certificates to share on LinkedIn.',
    pills: ['XP & Levels', 'Leaderboard', 'Certificates'],
    gradientFrom: '#1a0f2e', gradientTo: '#2a1060'
  },
];

type Step = 'slides' | 'goal' | 'level' | 'quiz' | 'result';

@Component({
  selector: 'app-onboarding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IonContent],
  template: `
    <ion-content class="ob-content" [scrollY]="false">
      <div class="ob-wrap">

        <!-- ── Intro Slides ── -->
        @if (step() === 'slides') {
          <div class="ob-slides" [style.transform]="'translateX(-' + (activeIndex() * 100) + 'vw)'">
            @for (slide of slides; track slide.emoji) {
              <div class="ob-slide" [style.background]="'linear-gradient(160deg, ' + slide.gradientFrom + ' 0%, ' + slide.gradientTo + ' 100%)'">
                <div class="ob-slide-inner">
                  <div class="ob-emoji">{{ slide.emoji }}</div>
                  <h1 class="ob-title" [innerText]="slide.title"></h1>
                  <p class="ob-body">{{ slide.body }}</p>
                  <div class="ob-pills">
                    @for (pill of slide.pills; track pill) {
                      <span class="ob-pill">{{ pill }}</span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
          <div class="ob-dots">
            @for (slide of slides; track slide.emoji; let i = $index) {
              <button class="ob-dot" [class.ob-dot-active]="activeIndex() === i" (click)="goTo(i)"></button>
            }
          </div>
          <div class="ob-actions">
            @if (activeIndex() < slides.length - 1) {
              <button class="ob-btn ob-btn-ghost" (click)="skip()">Skip</button>
              <button class="ob-btn ob-btn-primary" (click)="nextSlide()">
                Next <i class="fa-solid fa-arrow-right"></i>
              </button>
            } @else {
              <button class="ob-btn ob-btn-primary ob-btn-full" (click)="step.set('goal')">
                Set My Goal <i class="fa-solid fa-arrow-right"></i>
              </button>
            }
          </div>
        }

        <!-- ── Goal Selection ── -->
        @if (step() === 'goal') {
          <div class="ob-step-wrap" style="background: linear-gradient(160deg,#0f172a 0%,#0f1f17 100%)">
            <div class="ob-step-header">
              <div class="ob-emoji">🎯</div>
              <h1 class="ob-title">What's your goal?</h1>
              <p class="ob-body">We'll tailor your daily study plan to match.</p>
            </div>
            <div class="ob-goal-grid">
              @for (g of goals; track g.key) {
                <button class="ob-goal-card" [class.ob-goal-selected]="selectedGoal() === g.key"
                  (click)="selectedGoal.set(g.key)">
                  <span class="ob-goal-emoji">{{ g.emoji }}</span>
                  <span class="ob-goal-label">{{ g.label }}</span>
                  <span class="ob-goal-desc">{{ g.desc }}</span>
                </button>
              }
            </div>
            <div class="ob-actions ob-actions-col">
              <button class="ob-btn ob-btn-primary ob-btn-full"
                [disabled]="!selectedGoal()" (click)="step.set('level')">
                Continue <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="ob-btn ob-btn-ghost ob-btn-full" (click)="step.set('level')">
                Skip for now
              </button>
            </div>
          </div>
        }

        <!-- ── Experience Level ── -->
        @if (step() === 'level') {
          <div class="ob-step-wrap" style="background: linear-gradient(160deg,#0f172a 0%,#1a0f2e 100%)">
            <div class="ob-step-header">
              <div class="ob-emoji">📊</div>
              <h1 class="ob-title">Your experience level?</h1>
              <p class="ob-body">We'll start you at the right difficulty.</p>
            </div>
            <div class="ob-level-list">
              @for (l of levels; track l.key) {
                <button class="ob-level-card" [class.ob-goal-selected]="selectedLevel() === l.key"
                  (click)="selectedLevel.set(l.key)">
                  <span class="ob-level-emoji">{{ l.emoji }}</span>
                  <div class="ob-level-info">
                    <span class="ob-goal-label">{{ l.label }}</span>
                    <span class="ob-goal-desc">{{ l.desc }}</span>
                  </div>
                  @if (selectedLevel() === l.key) {
                    <i class="fa-solid fa-circle-check ob-level-check"></i>
                  }
                </button>
              }
            </div>
            <div class="ob-actions ob-actions-col">
              <button class="ob-btn ob-btn-primary ob-btn-full"
                [disabled]="!selectedLevel()" (click)="startQuiz()">
                Take Quick Quiz <i class="fa-solid fa-bolt"></i>
              </button>
              <button class="ob-btn ob-btn-ghost ob-btn-full" (click)="completeWithoutQuiz()">
                Skip quiz (Watch Ad) <i class="fa-solid fa-video"></i>
              </button>
            </div>
          </div>
        }

        <!-- ── Diagnostic Quiz ── -->
        @if (step() === 'quiz') {
          <div class="ob-step-wrap quiz-bg">
            <!-- Progress bar -->
            <div class="quiz-progress-track">
              <div class="quiz-progress-fill" [style.width]="((quizIndex() + 1) / diagQuestions.length * 100) + '%'"></div>
            </div>
            <div class="quiz-counter">{{ quizIndex() + 1 }} / {{ diagQuestions.length }}</div>

            <div class="quiz-q-wrap">
              <p class="quiz-question">{{ currentQuestion().q }}</p>
              <div class="quiz-options">
                @for (opt of currentQuestion().options; track opt; let i = $index) {
                  <button class="quiz-opt"
                    [class.quiz-opt-correct]="answered() && i === currentQuestion().correct"
                    [class.quiz-opt-wrong]="answered() && selectedOption() === i && i !== currentQuestion().correct"
                    [class.quiz-opt-selected]="selectedOption() === i"
                    [disabled]="answered()"
                    (click)="selectOption(i)">
                    <span class="quiz-opt-letter">{{ 'ABCD'[i] }}</span>
                    {{ opt }}
                  </button>
                }
              </div>

              @if (answered()) {
                <div class="quiz-feedback" [class.quiz-feedback-correct]="selectedOption() === currentQuestion().correct">
                  @if (selectedOption() === currentQuestion().correct) {
                    <i class="fa-solid fa-circle-check"></i> Correct!
                  } @else {
                    <i class="fa-solid fa-circle-xmark"></i> Not quite — topic to revisit: <strong>{{ currentQuestion().topic }}</strong>
                  }
                </div>
                <button class="ob-btn ob-btn-primary ob-btn-full mt-16" (click)="nextQuestion()">
                  @if (quizIndex() < diagQuestions.length - 1) {
                    Next Question <i class="fa-solid fa-arrow-right"></i>
                  } @else {
                    See My Results <i class="fa-solid fa-chart-bar"></i>
                  }
                </button>
              }
            </div>
          </div>
        }

        <!-- ── Results ── -->
        @if (step() === 'result') {
          <div class="ob-step-wrap result-bg">
            <div class="result-score-ring">
              <svg viewBox="0 0 80 80" class="ring-svg">
                <circle cx="40" cy="40" r="34" class="ring-bg"/>
                <circle cx="40" cy="40" r="34" class="ring-fill"
                  [style.strokeDashoffset]="ringOffset()"/>
              </svg>
              <span class="ring-label">{{ scorePercent() }}%</span>
            </div>
            <h1 class="ob-title result-title">
              @if (scorePercent() >= 80) { Great knowledge! 🔥 }
              @else if (scorePercent() >= 60) { Good foundation! ⚡ }
              @else { Let's build it up! 🌱 }
            </h1>
            <p class="ob-body result-body">{{ resultSubtext() }}</p>

            @if (weakTopics().length > 0) {
              <div class="weak-wrap">
                <p class="weak-label">Focus areas for you:</p>
                @for (t of weakTopics(); track t) {
                  <span class="weak-chip">📌 {{ t }}</span>
                }
              </div>
            }

            <button class="ob-btn ob-btn-primary ob-btn-full mt-24" (click)="completeOnboarding()">
              Start Learning <i class="fa-solid fa-rocket"></i>
            </button>
          </div>
        }

      </div>
    </ion-content>
  `,
  styles: `
    .ob-content { --background: #0f172a; }
    .ob-wrap { display: flex; flex-direction: column; height: 100%; overflow: hidden; position: relative; }

    /* ── Slides ── */
    .ob-slides { display: flex; flex: 1; width: 400%; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); will-change: transform; }
    .ob-slide { width: 25%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; padding: 40px 32px 24px; }
    .ob-slide-inner { max-width: 340px; text-align: center; }

    .ob-emoji { font-size: 4rem; margin-bottom: 28px; display: block; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4)); }
    .ob-title { font-size: 2rem; font-weight: 900; color: #e2e8f0; letter-spacing: -0.04em; line-height: 1.15; margin: 0 0 16px; white-space: pre-line; }
    .ob-body { font-size: 0.9rem; color: #94a3b8; line-height: 1.7; margin: 0 0 28px; }
    .ob-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
    .ob-pill { font-size: 0.7rem; font-weight: 700; padding: 6px 14px; border-radius: 20px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; }

    .ob-dots { display: flex; justify-content: center; gap: 8px; padding: 20px 0 8px; }
    .ob-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); border: none; cursor: pointer; transition: all 0.3s; padding: 0; }
    .ob-dot-active { width: 24px; border-radius: 4px; background: #10b981; }

    .ob-actions { display: flex; gap: 12px; padding: 16px 24px 48px; }
    .ob-actions-col { flex-direction: column; padding-top: 20px; padding-bottom: 48px; }

    .ob-btn { flex: 1; padding: 14px 20px; border-radius: 14px; font-size: 0.9rem; font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
    .ob-btn-ghost { background: rgba(255,255,255,0.06); color: #64748b; border: 1px solid rgba(255,255,255,0.08); }
    .ob-btn-primary { background: linear-gradient(135deg,#10b981,#059669); color: white; box-shadow: 0 4px 20px rgba(16,185,129,0.35); }
    .ob-btn-primary:hover { box-shadow: 0 6px 28px rgba(16,185,129,0.45); transform: translateY(-1px); }
    .ob-btn-full { width: 100%; flex: none; }
    .ob-btn[disabled] { opacity: 0.4; pointer-events: none; }
    .mt-16 { margin-top: 16px; }
    .mt-24 { margin-top: 24px; }

    /* ── Step wrapper (goal / level / quiz / result) ── */
    .ob-step-wrap { display: flex; flex-direction: column; height: 100%; padding: 48px 24px 0; overflow-y: auto; }
    .ob-step-header { text-align: center; margin-bottom: 28px; }

    /* Goal grid */
    .ob-goal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ob-goal-card { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 20px 12px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s; text-align: center; }
    .ob-goal-card:hover { background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.25); }
    .ob-goal-selected { background: rgba(16,185,129,0.12) !important; border-color: #10b981 !important; box-shadow: 0 0 0 3px rgba(16,185,129,0.15); }
    .ob-goal-emoji { font-size: 1.8rem; }
    .ob-goal-label { font-size: 0.85rem; font-weight: 700; color: #e2e8f0; }
    .ob-goal-desc { font-size: 0.68rem; color: #64748b; line-height: 1.4; }

    /* Level list */
    .ob-level-list { display: flex; flex-direction: column; gap: 10px; flex: 1; }
    .ob-level-card { display: flex; align-items: center; gap: 14px; padding: 16px; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.08); cursor: pointer; transition: all 0.2s; text-align: left; }
    .ob-level-card:hover { background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.25); }
    .ob-level-emoji { font-size: 1.8rem; flex-shrink: 0; }
    .ob-level-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
    .ob-level-check { color: #10b981; font-size: 1.1rem; flex-shrink: 0; }

    /* Quiz */
    .quiz-bg { background: linear-gradient(160deg,#0f172a 0%,#0f1a2e 100%); }
    .quiz-progress-track { width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-bottom: 12px; }
    .quiz-progress-fill { height: 100%; background: linear-gradient(90deg,#10b981,#34d399); border-radius: 2px; transition: width 0.4s ease; }
    .quiz-counter { font-size: 0.7rem; font-weight: 700; color: #475569; text-align: right; margin-bottom: 24px; }
    .quiz-q-wrap { flex: 1; display: flex; flex-direction: column; }
    .quiz-question { font-size: 1rem; font-weight: 700; color: #e2e8f0; line-height: 1.5; margin: 0 0 20px; }
    .quiz-options { display: flex; flex-direction: column; gap: 10px; }
    .quiz-opt { display: flex; align-items: center; gap: 12px; padding: 13px 16px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.08); color: #cbd5e1; font-size: 0.85rem; font-weight: 600; cursor: pointer; text-align: left; transition: all 0.2s; }
    .quiz-opt:hover:not([disabled]) { border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.06); }
    .quiz-opt-letter { width: 24px; height: 24px; border-radius: 6px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; flex-shrink: 0; }
    .quiz-opt-correct { background: rgba(16,185,129,0.15) !important; border-color: #10b981 !important; color: #34d399 !important; }
    .quiz-opt-wrong { background: rgba(239,68,68,0.12) !important; border-color: #ef4444 !important; color: #f87171 !important; }
    .quiz-opt-selected .quiz-opt-letter { background: rgba(16,185,129,0.2); color: #10b981; }
    .quiz-opt[disabled] { cursor: default; }
    .quiz-feedback { display: flex; align-items: center; gap: 8px; margin-top: 16px; padding: 12px 14px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; background: rgba(239,68,68,0.1); color: #f87171; border: 1px solid rgba(239,68,68,0.2); }
    .quiz-feedback-correct { background: rgba(16,185,129,0.1); color: #34d399; border-color: rgba(16,185,129,0.2); }

    /* Result */
    .result-bg { background: linear-gradient(160deg,#0f172a 0%,#0f1f17 100%); align-items: center; text-align: center; }
    .result-score-ring { position: relative; width: 120px; height: 120px; margin: 0 auto 20px; }
    .ring-svg { width: 100%; height: 100%; transform: rotate(-90deg); }
    .ring-bg { fill: none; stroke: rgba(255,255,255,0.06); stroke-width: 8; }
    .ring-fill { fill: none; stroke: #10b981; stroke-width: 8; stroke-linecap: round; stroke-dasharray: 213.6; transition: stroke-dashoffset 1s ease; }
    .ring-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: 900; color: #e2e8f0; }
    .result-title { font-size: 1.5rem; margin-bottom: 8px; }
    .result-body { margin: 0 0 20px; }
    .weak-wrap { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 8px; }
    .weak-label { width: 100%; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #475569; margin-bottom: 4px; }
    .weak-chip { font-size: 0.75rem; font-weight: 600; padding: 6px 12px; border-radius: 20px; background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.25); color: #fbbf24; }
  `
})
export class OnboardingComponent {
  private router      = inject(Router);
  private analytics   = inject(AnalyticsService);
  private pushService = inject(PushNotificationService);
  private notifSvc    = inject(NotificationService);
  private firestore   = inject(Firestore);
  private auth        = inject(AuthService);
  private admob       = inject(AdMobService);

  readonly slides        = SLIDES;
  readonly goals         = GOALS;
  readonly levels        = LEVELS;
  readonly diagQuestions = DIAG_QUESTIONS;

  step          = signal<Step>('slides');
  activeIndex   = signal(0);
  selectedGoal  = signal('');
  selectedLevel = signal('');

  // Quiz state
  quizIndex      = signal(0);
  selectedOption = signal<number | null>(null);
  answered       = signal(false);
  quizAnswers    = signal<{ correct: boolean; topic: string }[]>([]);

  currentQuestion = computed(() => this.diagQuestions[this.quizIndex()]);

  scorePercent = computed(() => {
    const ans = this.quizAnswers();
    if (!ans.length) return 0;
    return Math.round((ans.filter(a => a.correct).length / ans.length) * 100);
  });

  weakTopics = computed(() =>
    this.quizAnswers().filter(a => !a.correct).map(a => a.topic)
  );

  resultSubtext = computed(() => {
    const s = this.scorePercent();
    if (s >= 80) return 'You have strong Java fundamentals. We\'ll focus on advanced patterns and system design.';
    if (s >= 60) return 'Good start! We\'ll reinforce the weaker areas below so you\'re fully interview-ready.';
    return 'No worries — everyone starts somewhere. JavaIQ will walk you through everything step by step.';
  });

  // Ring circumference = 2π×34 ≈ 213.6
  ringOffset = computed(() => 213.6 - (213.6 * this.scorePercent() / 100));

  goTo(i: number) { this.activeIndex.set(i); }

  nextSlide() {
    if (this.activeIndex() < this.slides.length - 1) {
      this.activeIndex.update(i => i + 1);
    }
  }

  skip() {
    this.analytics.onboardingSkipped(this.activeIndex());
    this.finish();
  }

  startQuiz() {
    this.quizIndex.set(0);
    this.selectedOption.set(null);
    this.answered.set(false);
    this.quizAnswers.set([]);
    this.step.set('quiz');
  }

  selectOption(i: number) {
    if (this.answered()) return;
    this.selectedOption.set(i);
    this.answered.set(true);
    this.quizAnswers.update(prev => [
      ...prev,
      { correct: i === this.currentQuestion().correct, topic: this.currentQuestion().topic }
    ]);
  }

  nextQuestion() {
    if (this.quizIndex() < this.diagQuestions.length - 1) {
      this.quizIndex.update(i => i + 1);
      this.selectedOption.set(null);
      this.answered.set(false);
    } else {
      this.step.set('result');
    }
  }

  async completeWithoutQuiz() {
    // Force ad to skip the diagnostic quiz
    await this.admob.showRewardAd();
    this.completeOnboarding();
  }

  async completeOnboarding() {
    if (this.selectedGoal()) localStorage.setItem('user_goal', this.selectedGoal());
    if (this.selectedLevel()) localStorage.setItem('user_level', this.selectedLevel());
    if (this.weakTopics().length) {
      localStorage.setItem('weak_topics', JSON.stringify(this.weakTopics()));
    }

    const user = this.auth.user();
    if (user) {
      const ref = doc(this.firestore, `users/${user.uid}`);
      await setDoc(ref, {
        goal:           this.selectedGoal() || null,
        experienceLevel: this.selectedLevel() || null,
        diagScore:      this.scorePercent(),
        weakTopics:     this.weakTopics(),
        profileSetup:   true,
        isPro:          false,
      }, { merge: true });
    }

    this.analytics.onboardingCompleted();
    this.finish();
  }

  private async finish() {
    localStorage.setItem('onboarding_done', '1');
    await this.pushService.requestPermissionAndRegister();
    await this.notifSvc.requestPermissionAndSchedule(0);
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
}
