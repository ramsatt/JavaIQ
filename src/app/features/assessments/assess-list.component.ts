import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';

interface Assessment {
  id: string;
  title: string;
  category: string;
  faIcon: string;
  iconColor: string;
  iconBg: string;
  accentColor: string;
  questions: number;
  time: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
}

@Component({
  selector: 'app-assess-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="assess-content">

      <!-- Hero -->
      <div class="hero">
        <div class="hero-glow g1"></div>
        <div class="hero-glow g2"></div>
        <div class="hero-inner">
          <span class="hero-badge">
            <i class="fa-solid fa-circle-check hero-badge-icon"></i>
            Knowledge Assessments
          </span>
          <h1 class="hero-title">Test Your<br><span class="hero-accent">Java Mastery</span></h1>
          <p class="hero-sub">Timed quizzes with instant feedback to reinforce your learning</p>

          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-num">{{ assessments.length }}</span>
              <span class="stat-lbl">Quizzes</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ totalQuestions }}</span>
              <span class="stat-lbl">Questions</span>
            </div>
            <div class="stat-div"></div>
            <div class="hero-stat">
              <span class="stat-num">{{ totalTime }}m</span>
              <span class="stat-lbl">Total Time</span>
            </div>
          </div>
        </div>
      </div>

      <div class="body">

        <!-- Difficulty Filter -->
        <div class="filter-row">
          @for (f of filters; track f.val) {
            <button class="fpill" [class.fpill-active]="activeDiff() === f.val"
              (click)="activeDiff.set(f.val)" [style.--fc]="f.color">
              {{ f.label }}
            </button>
          }
        </div>

        <!-- Section head -->
        <div class="sec-head">
          <div class="sec-head-left">
            <i class="fa-solid fa-clipboard-list sec-icon"></i>
            <span class="sec-title">Available Quizzes</span>
          </div>
          <span class="sec-count">{{ filtered().length }} quizzes</span>
        </div>

        <!-- Cards -->
        <div class="card-list">
          @for (a of filtered(); track a.id) {
            <a [routerLink]="['/assessments', a.id]" class="assess-card" [style.--accent]="a.accentColor">
              <div class="card-accent-top"></div>
              <div class="card-inner">
                <!-- Icon -->
                <div class="card-icon" [style.background]="a.iconBg">
                  <i [class]="a.faIcon" [style.color]="a.iconColor"></i>
                </div>

                <!-- Content -->
                <div class="card-content">
                  <div class="card-top">
                    <div>
                      <h3 class="card-title">{{ a.title }}</h3>
                      <span class="card-cat">{{ a.category }}</span>
                    </div>
                    <span class="diff-badge" [attr.data-d]="a.difficulty">{{ a.difficulty }}</span>
                  </div>
                  <p class="card-desc">{{ a.description }}</p>
                  <div class="card-meta">
                    <span class="meta-chip">
                      <i class="fa-solid fa-pen meta-icon"></i>
                      {{ a.questions }} Qs
                    </span>
                    <span class="meta-chip">
                      <i class="fa-regular fa-clock meta-icon"></i>
                      {{ a.time }} min
                    </span>
                    <span class="start-hint">
                      Start Quiz
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          }
        </div>

        <!-- Info card -->
        <div class="info-card">
          <i class="fa-solid fa-lightbulb info-icon"></i>
          <div class="info-text">
            <span class="info-title">How quizzes work</span>
            <span class="info-desc">Timed questions with instant feedback. Results are saved to track your improvement over time.</span>
          </div>
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    /* ── Layout ── */
    .assess-toolbar { --background: #0b1120; --color: white; --border-style: none; }
    .assess-content { --background: #0b1120; }

    /* ── Hero ── */
    .hero {
      position: relative;
      padding: 0 20px 28px;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    .g1 {
      top: -50px; right: -30px;
      width: 200px; height: 200px;
      background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
    }
    .g2 {
      bottom: -20px; left: -30px;
      width: 160px; height: 160px;
      background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
    }
    .hero-inner { position: relative; z-index: 1; }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #a78bfa;
      background: rgba(139,92,246,0.1);
      border: 1px solid rgba(139,92,246,0.25);
      border-radius: 20px;
      padding: 5px 14px;
      margin-bottom: 14px;
    }
    .hero-badge-icon { font-size: 0.65rem; }

    .hero-title {
      font-size: 1.8rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin: 0 0 8px;
    }
    .hero-accent {
      background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 60%, #c4b5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-sub { font-size: 0.8rem; color: #64748b; font-weight: 500; margin: 0 0 22px; line-height: 1.5; }

    /* Stats */
    .hero-stats {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(255,255,255,0.035);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 14px 8px;
    }
    .hero-stat { text-align: center; flex: 1; }
    .stat-num {
      display: block;
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #8b5cf6, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-lbl {
      display: block;
      font-size: 0.58rem;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 2px;
    }
    .stat-div { width: 1px; height: 24px; background: rgba(255,255,255,0.07); }

    /* ── Body ── */
    .body { padding: 20px 16px 100px; max-width: 600px; margin: 0 auto; }

    /* ── Filters ── */
    .filter-row {
      display: flex;
      gap: 8px;
      margin-bottom: 22px;
      flex-wrap: wrap;
    }
    .fpill {
      padding: 7px 16px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      color: #94a3b8;
      font-size: 0.72rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .fpill:hover { color: #e2e8f0; background: rgba(255,255,255,0.07); }
    .fpill-active {
      background: rgba(from var(--fc, #8b5cf6) r g b / 0.14) !important;
      border-color: rgba(from var(--fc, #8b5cf6) r g b / 0.3) !important;
      color: var(--fc, #8b5cf6) !important;
    }

    /* ── Section Head ── */
    .sec-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }
    .sec-head-left { display: flex; align-items: center; gap: 8px; }
    .sec-icon { font-size: 0.68rem; color: #8b5cf6; }
    .sec-title {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #94a3b8;
    }
    .sec-count { font-size: 0.65rem; font-weight: 600; color: #475569; }

    /* ── Card List ── */
    .card-list { display: flex; flex-direction: column; gap: 12px; }

    /* ── Card ── */
    .assess-card {
      display: block;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      transition: all 0.2s ease;
    }
    .assess-card:hover {
      background: rgba(255,255,255,0.055);
      border-color: rgba(255,255,255,0.12);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      transform: translateY(-2px);
    }
    .assess-card:active { transform: scale(0.99); }

    .card-accent-top { height: 3px; background: var(--accent, #8b5cf6); opacity: 0.6; transition: opacity 0.2s; }
    .assess-card:hover .card-accent-top { opacity: 1; }

    .card-inner {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 16px 18px;
    }

    /* Icon */
    .card-icon {
      flex-shrink: 0;
      width: 48px; height: 48px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
      margin-top: 2px;
    }

    /* Content */
    .card-content { flex: 1; min-width: 0; }
    .card-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 6px;
    }
    .card-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: #e2e8f0;
      margin: 0 0 2px;
      letter-spacing: -0.01em;
    }
    .card-cat { font-size: 0.65rem; font-weight: 500; color: #64748b; }

    .diff-badge {
      flex-shrink: 0;
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 3px 9px;
      border-radius: 6px;
    }
    .diff-badge[data-d="beginner"] { background: rgba(16,185,129,0.15); color: #34d399; }
    .diff-badge[data-d="intermediate"] { background: rgba(139,92,246,0.15); color: #a78bfa; }
    .diff-badge[data-d="advanced"] { background: rgba(239,68,68,0.15); color: #f87171; }

    .card-desc { font-size: 0.75rem; color: #64748b; line-height: 1.5; margin: 0 0 10px; }

    .card-meta { display: flex; align-items: center; gap: 8px; }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 6px;
      padding: 3px 8px;
    }
    .meta-icon { font-size: 0.52rem; }

    .start-hint {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent, #8b5cf6);
      opacity: 1;
      flex-shrink: 0;
    }
    .start-hint i { font-size: 0.75rem; }

    /* ── Info Card ── */
    .info-card {
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 18px;
      background: rgba(139,92,246,0.05);
      border: 1px solid rgba(139,92,246,0.15);
      border-radius: 14px;
    }
    .info-icon { font-size: 1rem; color: #a78bfa; flex-shrink: 0; margin-top: 2px; }
    .info-text { display: flex; flex-direction: column; gap: 4px; }
    .info-title { font-size: 0.8rem; font-weight: 700; color: #e2e8f0; }
    .info-desc { font-size: 0.72rem; color: #64748b; line-height: 1.5; }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .assess-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .assess-content {
      --background: #F5F7F2;
    }

    /* Premium green hero */
    :host-context(html:not(.dark)) .hero {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-glow.g1 {
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-glow.g2 {
      background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-badge {
      color: rgba(255,255,255,0.9);
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.3);
    }
    :host-context(html:not(.dark)) .hero-title {
      color: #ffffff;
      -webkit-text-fill-color: #ffffff;
    }
    :host-context(html:not(.dark)) .hero-accent {
      background: linear-gradient(135deg, #86efac 0%, #bbf7d0 60%, #d1fae5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .hero-sub {
      color: rgba(255,255,255,0.75);
    }
    :host-context(html:not(.dark)) .hero-stats {
      background: rgba(255,255,255,0.12);
      border-color: rgba(255,255,255,0.2);
    }
    :host-context(html:not(.dark)) .stat-num {
      background: linear-gradient(135deg, #d1fae5, #86efac);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .stat-lbl { color: rgba(255,255,255,0.65); }
    :host-context(html:not(.dark)) .stat-div { background: rgba(255,255,255,0.2); }

    /* Cards */
    :host-context(html:not(.dark)) .assess-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    :host-context(html:not(.dark)) .assess-card:hover {
      border-color: #B7CCBB;
      box-shadow: 0 6px 20px rgba(27,67,50,0.1);
    }
    :host-context(html:not(.dark)) .assess-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .assess-desc { color: #52665A; }
    :host-context(html:not(.dark)) .meta-chip { color: #8A9B8F; background: rgba(27,67,50,0.04); border-color: #D6DDD2; }
    :host-context(html:not(.dark)) .sec-title { color: #52665A; }
    :host-context(html:not(.dark)) .sec-count { color: #8A9B8F; }
    :host-context(html:not(.dark)) .sec-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .info-card {
      background: rgba(27,67,50,0.04);
      border-color: rgba(27,67,50,0.15);
    }
    :host-context(html:not(.dark)) .info-title { color: #1B1B1B; }
    :host-context(html:not(.dark)) .info-desc { color: #52665A; }
    :host-context(html:not(.dark)) .info-icon { color: #1B4332; }

    /* Filters */
    :host-context(html:not(.dark)) .fpill {
      background: #ffffff !important;
      border-color: #D6DDD2 !important;
      color: #52665A !important;
    }
    :host-context(html:not(.dark)) .fpill-active {
      background: #1B4332 !important;
      color: white !important;
      border-color: #1B4332 !important;
    }
  `
})
export class AssessListComponent {
  activeDiff = signal('all');

  filters = [
    { val: 'all', label: 'All', color: '#94a3b8' },
    { val: 'beginner', label: 'Beginner', color: '#10b981' },
    { val: 'intermediate', label: 'Intermediate', color: '#8b5cf6' },
    { val: 'advanced', label: 'Advanced', color: '#f87171' }
  ];

  assessments: Assessment[] = [
    {
      id: 'java-basics', title: 'Java Fundamentals', category: 'Core Java',
      faIcon: 'fa-solid fa-mug-hot', iconColor: '#f59e0b', iconBg: 'rgba(245,158,11,0.12)', accentColor: '#f59e0b',
      questions: 20, time: 15, difficulty: 'beginner',
      description: 'Core Java syntax, data types, control flow, OOP principles, and JVM concepts.'
    },
    {
      id: 'oop-concepts', title: 'OOP Concepts', category: 'Core Java',
      faIcon: 'fa-solid fa-cubes', iconColor: '#10b981', iconBg: 'rgba(16,185,129,0.12)', accentColor: '#10b981',
      questions: 15, time: 12, difficulty: 'beginner',
      description: 'Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles.'
    },
    {
      id: 'collections', title: 'Collections Framework', category: 'Core Java',
      faIcon: 'fa-solid fa-layer-group', iconColor: '#22d3ee', iconBg: 'rgba(34,211,238,0.12)', accentColor: '#22d3ee',
      questions: 20, time: 15, difficulty: 'intermediate',
      description: 'List, Set, Map, Queue implementations, iterators, Comparable, and Comparator.'
    },
    {
      id: 'spring-boot-quiz', title: 'Spring Boot Essentials', category: 'Spring Boot',
      faIcon: 'fa-solid fa-leaf', iconColor: '#34d399', iconBg: 'rgba(52,211,153,0.12)', accentColor: '#34d399',
      questions: 20, time: 20, difficulty: 'intermediate',
      description: 'Auto-configuration, starters, REST controllers, dependency injection, and profiles.'
    },
    {
      id: 'hibernate-quiz', title: 'Hibernate & JPA', category: 'Hibernate',
      faIcon: 'fa-solid fa-database', iconColor: '#f97316', iconBg: 'rgba(249,115,22,0.12)', accentColor: '#f97316',
      questions: 15, time: 15, difficulty: 'intermediate',
      description: 'Entity mapping, relationships, lazy loading, caching levels, and JPQL queries.'
    },
    {
      id: 'concurrency', title: 'Concurrency & Threads', category: 'Multithreading',
      faIcon: 'fa-solid fa-bolt', iconColor: '#eab308', iconBg: 'rgba(234,179,8,0.12)', accentColor: '#eab308',
      questions: 15, time: 20, difficulty: 'advanced',
      description: 'Thread lifecycle, synchronization, ExecutorService, CompletableFuture, and virtual threads.'
    },
    {
      id: 'microservices-quiz', title: 'Microservices Patterns', category: 'Microservices',
      faIcon: 'fa-solid fa-diagram-project', iconColor: '#8b5cf6', iconBg: 'rgba(139,92,246,0.12)', accentColor: '#8b5cf6',
      questions: 18, time: 20, difficulty: 'advanced',
      description: 'Service discovery, API gateway, circuit breaker, saga pattern, and event-driven architecture.'
    },
    {
      id: 'design-patterns-quiz', title: 'Design Patterns', category: 'Core Java',
      faIcon: 'fa-solid fa-puzzle-piece', iconColor: '#ec4899', iconBg: 'rgba(236,72,153,0.12)', accentColor: '#ec4899',
      questions: 20, time: 18, difficulty: 'intermediate',
      description: 'Singleton, Factory, Observer, Strategy, Builder, Decorator, and other GoF patterns.'
    }
  ];

  filtered = computed(() => {
    const d = this.activeDiff();
    if (d === 'all') return this.assessments;
    return this.assessments.filter(a => a.difficulty === d);
  });

  get totalQuestions() { return this.assessments.reduce((s, a) => s + a.questions, 0); }
  get totalTime() { return this.assessments.reduce((s, a) => s + a.time, 0); }
}
