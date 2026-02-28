import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-assess-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Info -->
        <div class="info">
          <span class="info-title">Test Your Knowledge 🎯</span>
          <span class="info-desc">Take timed quizzes to evaluate your understanding. Track your progress and improve.</span>
        </div>

        <span class="section-label">AVAILABLE QUIZZES</span>
        <div class="list">
          @for (a of assessments; track a.id) {
            <a [routerLink]="['/assessments', a.id]" class="card-link">
              <div class="icon" [style.background]="a.bg">{{ a.icon }}</div>
              <div class="body">
                <span class="name">{{ a.title }}</span>
                <span class="cat">{{ a.category }}</span>
                <div class="meta">
                  <span class="meta-item">📝 {{ a.questions }} Qs</span>
                  <span class="meta-item">⏱ {{ a.time }} min</span>
                  <span class="tag" [attr.data-level]="a.difficulty">{{ a.difficulty }}</span>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      border-left: 4px solid #1B4332;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      padding: 18px 20px;
      margin-bottom: 24px;
    }
    .info-title { font-size: 0.88rem; font-weight: 700; color: #1B1B1B; }
    .info-desc { font-size: 0.72rem; color: #52665A; line-height: 1.5; }

    .section-label { display: block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }

    .list { display: flex; flex-direction: column; gap: 10px; }

    .card-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card-link:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.06); transform: translateY(-1px); }

    .icon {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }

    .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    .name { font-size: 0.86rem; font-weight: 700; color: #1B1B1B; }
    .cat { font-size: 0.62rem; color: #8A9B8F; font-weight: 500; }

    .meta { display: flex; align-items: center; gap: 10px; margin-top: 4px; }
    .meta-item { font-size: 0.6rem; color: #52665A; font-weight: 500; }

    .tag {
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 5px;
    }
    .tag[data-level="beginner"] { background: #ecfdf5; color: #059669; }
    .tag[data-level="intermediate"] { background: #D8F3DC; color: #1B4332; }
    .tag[data-level="advanced"] { background: #fef2f2; color: #dc2626; }
  `
})
export class AssessListComponent {
  assessments = [
    { id: 'java-basics', title: 'Java Fundamentals', category: 'Core Java', icon: '☕', bg: '#fff7ed', questions: 20, time: 15, difficulty: 'beginner' },
    { id: 'oop-concepts', title: 'OOP Concepts', category: 'Core Java', icon: '🎯', bg: '#ecfdf5', questions: 15, time: 12, difficulty: 'beginner' },
    { id: 'collections', title: 'Collections Framework', category: 'Core Java', icon: '📦', bg: '#ecfeff', questions: 20, time: 15, difficulty: 'intermediate' },
    { id: 'spring-boot-quiz', title: 'Spring Boot Essentials', category: 'Spring Boot', icon: '🚀', bg: '#eff6ff', questions: 20, time: 20, difficulty: 'intermediate' },
    { id: 'hibernate-quiz', title: 'Hibernate & JPA', category: 'Hibernate', icon: '🗄️', bg: '#faf5ff', questions: 15, time: 15, difficulty: 'intermediate' },
    { id: 'concurrency', title: 'Concurrency & Threads', category: 'Multithreading', icon: '⚡', bg: '#fefce8', questions: 15, time: 20, difficulty: 'advanced' }
  ];
}
