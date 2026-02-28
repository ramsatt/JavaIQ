import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-iq-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search questions..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Stats -->
        <div class="stats">
          <div class="stat">
            <span class="stat-num indigo">{{ totalQuestions }}</span>
            <span class="stat-lbl">Questions</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num cyan">{{ categories.length }}</span>
            <span class="stat-lbl">Topics</span>
          </div>
          <div class="stat-div"></div>
          <div class="stat">
            <span class="stat-num green">50+</span>
            <span class="stat-lbl">Companies</span>
          </div>
        </div>

        <!-- Topics -->
        <span class="section-label">BROWSE BY TOPIC</span>
        <div class="grid">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/interview-questions', cat.key]" class="topic">
              <div class="topic-icon" [style.background]="cat.bg">{{ cat.icon }}</div>
              <span class="topic-name">{{ cat.title }}</span>
              <span class="topic-count">{{ cat.questionCount }} questions</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    /* Stats */
    .stats {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      padding: 18px 12px;
      margin-bottom: 24px;
    }
    .stat { text-align: center; }
    .stat-num { display: block; font-size: 1.6rem; font-weight: 800; letter-spacing: -0.03em; line-height: 1; }
    .stat-num.indigo { color: #1B4332; }
    .stat-num.cyan { color: #2D6A4F; }
    .stat-num.green { color: #059669; }
    .stat-lbl { display: block; font-size: 0.6rem; color: #8A9B8F; font-weight: 600; margin-top: 5px; }
    .stat-div { width: 1px; height: 32px; background: #D6DDD2; }

    /* Section label */
    .section-label { display: block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }

    /* Grid */
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }

    /* Topic card */
    .topic {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 10px 16px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .topic:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.06); transform: translateY(-1px); }

    .topic-icon {
      width: 46px;
      height: 46px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
    .topic-name { font-size: 0.8rem; font-weight: 700; color: #1B1B1B; text-align: center; line-height: 1.2; }
    .topic-count { font-size: 0.6rem; color: #8A9B8F; font-weight: 500; margin-top: 3px; }
  `
})
export class IqListComponent {
  categories = [
    { key: 'core-java', title: 'Core Java', icon: '☕', bg: '#fff7ed', questionCount: 45 },
    { key: 'spring-boot', title: 'Spring Boot', icon: '🚀', bg: '#ecfeff', questionCount: 35 },
    { key: 'hibernate', title: 'Hibernate', icon: '🗄️', bg: '#faf5ff', questionCount: 20 },
    { key: 'microservices', title: 'Microservices', icon: '🔗', bg: '#eff6ff', questionCount: 25 },
    { key: 'multithreading', title: 'Multithreading', icon: '⚡', bg: '#fefce8', questionCount: 15 },
    { key: 'spring-reactive', title: 'Reactive', icon: '🌊', bg: '#f0fdfa', questionCount: 12 },
    { key: 'reactive-prog', title: 'RxJava', icon: '📡', bg: '#fdf2f8', questionCount: 15 },
    { key: 'coding-patterns', title: 'Patterns', icon: '🧩', bg: '#eef2ff', questionCount: 18 }
  ];

  get totalQuestions() {
    return this.categories.reduce((s, c) => s + c.questionCount, 0);
  }
}
