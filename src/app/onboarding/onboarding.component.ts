import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { AnalyticsService } from '../analytics.service';
import { PushNotificationService } from '../push-notification.service';

interface OnboardingSlide {
  emoji: string;
  title: string;
  accent: string;
  body: string;
  pills: string[];
  gradientFrom: string;
  gradientTo: string;
}

const SLIDES: OnboardingSlide[] = [
  {
    emoji: '☕',
    title: 'Your Java\nInterview Coach',
    accent: 'Interview Coach',
    body: 'Structured content built for Java developers — from core concepts to system design.',
    pills: ['Core Java', 'Spring Boot', 'Microservices'],
    gradientFrom: '#0f172a',
    gradientTo: '#1e293b'
  },
  {
    emoji: '📚',
    title: 'Learn with\nStructured Courses',
    accent: 'Structured Courses',
    body: 'Deep-dive tutorials with chapter breakdowns, code examples, and real interview tips.',
    pills: ['3 Courses', '100+ Chapters', 'Code Examples'],
    gradientFrom: '#0f1a2e',
    gradientTo: '#0f2744'
  },
  {
    emoji: '⚡',
    title: 'Practice &\nBuild Confidence',
    accent: 'Build Confidence',
    body: '500+ interview questions, LeetCode problems, and timed assessments to sharpen your skills.',
    pills: ['500+ Questions', 'LeetCode', 'Timed Quizzes'],
    gradientFrom: '#0f1f17',
    gradientTo: '#0a2e1a'
  },
  {
    emoji: '🏆',
    title: 'Compete &\nTrack Progress',
    accent: 'Track Progress',
    body: 'Earn XP, climb the leaderboard, and get certificates to share on LinkedIn.',
    pills: ['XP & Levels', 'Leaderboard', 'Certificates'],
    gradientFrom: '#1a0f2e',
    gradientTo: '#2a1060'
  }
];

@Component({
  selector: 'app-onboarding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
  template: `
    <ion-content class="ob-content" [scrollY]="false">
      <div class="ob-wrap">

        <!-- Slides -->
        <div class="ob-slides" [style.transform]="'translateX(-' + (activeIndex() * 100) + '%)'">
          @for (slide of slides; track slide.emoji; let i = $index) {
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

        <!-- Dots -->
        <div class="ob-dots">
          @for (slide of slides; track slide.emoji; let i = $index) {
            <button class="ob-dot" [class.ob-dot-active]="activeIndex() === i" (click)="goTo(i)"></button>
          }
        </div>

        <!-- Buttons -->
        <div class="ob-actions">
          @if (activeIndex() < slides.length - 1) {
            <button class="ob-btn ob-btn-ghost" (click)="skip()">Skip</button>
            <button class="ob-btn ob-btn-primary" (click)="next()">
              Next <i class="fa-solid fa-arrow-right"></i>
            </button>
          } @else {
            <button class="ob-btn ob-btn-primary ob-btn-full" (click)="getStarted()">
              Get Started <i class="fa-solid fa-rocket"></i>
            </button>
          }
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    .ob-content { --background: #0f172a; }

    .ob-wrap {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    /* Slides viewport */
    .ob-slides {
      display: flex;
      flex: 1;
      width: 400%;
      transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }

    .ob-slide {
      width: 25%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 32px 24px;
    }

    .ob-slide-inner {
      max-width: 340px;
      text-align: center;
    }

    .ob-emoji {
      font-size: 4rem;
      margin-bottom: 28px;
      display: block;
      filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));
    }

    .ob-title {
      font-size: 2rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.04em;
      line-height: 1.15;
      margin: 0 0 16px;
      white-space: pre-line;
    }

    .ob-body {
      font-size: 0.9rem;
      color: #94a3b8;
      line-height: 1.7;
      margin: 0 0 28px;
    }

    .ob-pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }

    .ob-pill {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 20px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      color: #cbd5e1;
      letter-spacing: 0.02em;
    }

    /* Dots */
    .ob-dots {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding: 20px 0 8px;
    }

    .ob-dot {
      width: 8px; height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255,0.15);
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      padding: 0;
    }

    .ob-dot-active {
      width: 24px;
      border-radius: 4px;
      background: #10b981;
    }

    /* Actions */
    .ob-actions {
      display: flex;
      gap: 12px;
      padding: 16px 24px 48px;
    }

    .ob-btn {
      flex: 1;
      padding: 14px 20px;
      border-radius: 14px;
      font-size: 0.9rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
    }

    .ob-btn-ghost {
      background: rgba(255,255,255,0.06);
      color: #64748b;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .ob-btn-primary {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 4px 20px rgba(16,185,129,0.35);
    }

    .ob-btn-primary:hover { box-shadow: 0 6px 28px rgba(16,185,129,0.45); transform: translateY(-1px); }
    .ob-btn-full { width: 100%; flex: none; }
  `
})
export class OnboardingComponent {
  private router = inject(Router);
  private analytics = inject(AnalyticsService);
  private pushService = inject(PushNotificationService);

  readonly slides = SLIDES;
  activeIndex = signal(0);

  constructor() {
    this.analytics.track('onboarding_started');
  }

  goTo(i: number) {
    this.activeIndex.set(i);
  }

  next() {
    if (this.activeIndex() < this.slides.length - 1) {
      this.activeIndex.update(i => i + 1);
    }
  }

  skip() {
    this.analytics.track('onboarding_skipped', { slide: this.activeIndex() });
    this.complete();
  }

  getStarted() {
    this.analytics.track('onboarding_completed');
    this.complete();
  }

  private async complete() {
    localStorage.setItem('onboarding_done', '1');
    // Request push permission now that user has seen value prop
    await this.pushService.requestPermissionAndRegister();
    this.router.navigate(['/tutorials'], { replaceUrl: true });
  }
}
