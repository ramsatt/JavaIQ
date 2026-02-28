import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-exp-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, TitleCasePipe, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search by company..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Pills -->
        <div class="filters">
          @for (c of companies; track c; let i = $index) {
            <button class="pill" [class.active]="i === 0">{{ c }}</button>
          }
        </div>

        <span class="section-label">RECENT STORIES</span>
        <div class="list">
          @for (exp of experiences; track exp.id) {
            <a [routerLink]="['/experiences', exp.id]" class="card-link">
              <div class="top">
                <div class="info">
                  <span class="company">{{ exp.company }}</span>
                  <span class="role">{{ exp.role }}</span>
                </div>
                <span class="outcome" [attr.data-o]="exp.outcome">{{ exp.outcome | titlecase }}</span>
              </div>
              <div class="bottom">
                <span class="meta-item">🔄 {{ exp.rounds }} rounds</span>
                <span class="tag" [attr.data-d]="exp.difficulty">{{ exp.difficulty }}</span>
                <span class="date">{{ exp.date }}</span>
              </div>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    .filters {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 16px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .filters::-webkit-scrollbar { display: none; }

    .pill {
      padding: 6px 16px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 600;
      border: 1px solid #D6DDD2;
      background: #fff;
      color: #52665A;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .pill:hover { border-color: #1B4332; color: #1B4332; }
    .pill.active { background: #1B4332; color: #fff; border-color: #1B4332; }

    .section-label { display: block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }

    .list { display: flex; flex-direction: column; gap: 10px; }

    .card-link {
      display: block;
      padding: 16px 18px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card-link:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.06); transform: translateY(-1px); }

    .top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px; }
    .info { display: flex; flex-direction: column; gap: 2px; }
    .company { font-size: 0.88rem; font-weight: 700; color: #1B1B1B; }
    .role { font-size: 0.68rem; color: #52665A; }

    .outcome {
      font-size: 0.58rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .outcome[data-o="selected"] { background: #ecfdf5; color: #059669; }
    .outcome[data-o="rejected"] { background: #fef2f2; color: #dc2626; }
    .outcome[data-o="pending"] { background: #fffbeb; color: #d97706; }

    .bottom { display: flex; align-items: center; gap: 10px; }
    .meta-item { font-size: 0.6rem; color: #8A9B8F; font-weight: 500; }
    .date { font-size: 0.6rem; color: #8A9B8F; font-weight: 500; margin-left: auto; }

    .tag {
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 5px;
    }
    .tag[data-d="easy"] { background: #ecfdf5; color: #059669; }
    .tag[data-d="medium"] { background: #fffbeb; color: #d97706; }
    .tag[data-d="hard"] { background: #fef2f2; color: #dc2626; }
  `
})
export class ExpListComponent {
  companies = ['All', 'Amazon', 'Google', 'Microsoft', 'Meta', 'Netflix', 'Apple', 'Oracle'];

  experiences = [
    { id: 'amazon-sde2', company: 'Amazon', role: 'SDE-2', outcome: 'selected', difficulty: 'hard', rounds: 5, date: 'Jan 2026' },
    { id: 'google-l4', company: 'Google', role: 'L4 Software Engineer', outcome: 'rejected', difficulty: 'hard', rounds: 4, date: 'Dec 2025' },
    { id: 'microsoft-sde', company: 'Microsoft', role: 'Software Engineer', outcome: 'selected', difficulty: 'medium', rounds: 4, date: 'Nov 2025' },
    { id: 'flipkart-sde1', company: 'Flipkart', role: 'SDE-1', outcome: 'selected', difficulty: 'medium', rounds: 3, date: 'Oct 2025' },
    { id: 'oracle-java', company: 'Oracle', role: 'Java Developer', outcome: 'pending', difficulty: 'medium', rounds: 3, date: 'Sep 2025' },
    { id: 'tcs-dev', company: 'TCS', role: 'Software Developer', outcome: 'selected', difficulty: 'easy', rounds: 2, date: 'Aug 2025' }
  ];
}
