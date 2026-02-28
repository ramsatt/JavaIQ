import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cq-list',
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
        <ion-searchbar placeholder="Search problems..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Filter -->
        <div class="filters">
          <button class="pill active">All</button>
          <button class="pill">Easy</button>
          <button class="pill">Medium</button>
          <button class="pill">Hard</button>
        </div>

        <span class="section-label">CATEGORIES</span>
        <div class="list">
          @for (cat of categories; track cat.key) {
            <a [routerLink]="['/coding-questions', cat.key]" class="card-link">
              <div class="icon" [style.background]="cat.bg">{{ cat.icon }}</div>
              <div class="body">
                <span class="name">{{ cat.title }}</span>
                <span class="count">{{ cat.count }} problems</span>
              </div>
              <span class="arrow">›</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    .filters { display: flex; gap: 8px; margin-bottom: 20px; }

    .pill {
      padding: 6px 16px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 600;
      border: 1px solid #D6DDD2;
      background: #fff;
      color: #52665A;
      cursor: pointer;
      transition: all 0.2s;
    }
    .pill:hover { border-color: #1B4332; color: #1B4332; }
    .pill.active { background: #1B4332; color: #fff; border-color: #1B4332; }

    .section-label { display: block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }

    .list { display: flex; flex-direction: column; gap: 10px; }

    .card-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 14px 14px 16px;
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
      width: 42px;
      height: 42px;
      min-width: 42px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
    .name { font-size: 0.84rem; font-weight: 700; color: #1B1B1B; }
    .count { font-size: 0.62rem; color: #8A9B8F; font-weight: 500; }

    .arrow { font-size: 1.3rem; color: #B5C4B1; font-weight: 300; line-height: 1; }
  `
})
export class CqListComponent {
  categories = [
    { key: 'arrays', title: 'Arrays & Strings', icon: '📊', bg: '#eff6ff', count: 15 },
    { key: 'linked-lists', title: 'Linked Lists', icon: '🔗', bg: '#ecfeff', count: 10 },
    { key: 'trees', title: 'Trees & Graphs', icon: '🌳', bg: '#ecfdf5', count: 12 },
    { key: 'dp', title: 'Dynamic Programming', icon: '📐', bg: '#faf5ff', count: 15 },
    { key: 'sorting', title: 'Sorting & Searching', icon: '🔍', bg: '#fefce8', count: 8 },
    { key: 'stacks', title: 'Stacks & Queues', icon: '📚', bg: '#fff7ed', count: 8 },
    { key: 'recursion', title: 'Recursion & Backtracking', icon: '🔄', bg: '#fdf2f8', count: 10 },
    { key: 'hashing', title: 'Hashing', icon: '#️⃣', bg: '#eef2ff', count: 7 }
  ];
}
