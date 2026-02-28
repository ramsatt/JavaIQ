import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lc-list',
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
        <ion-searchbar placeholder="Search by number or title..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Progress -->
        <div class="progress">
          <span class="progress-label">YOUR PROGRESS</span>
          <div class="progress-row">
            <div class="pbox easy"><span class="pnum">0</span></div>
            <span class="ptxt easy-c">Easy</span>
            <div class="pbox medium"><span class="pnum">0</span></div>
            <span class="ptxt medium-c">Medium</span>
            <div class="pbox hard"><span class="pnum">0</span></div>
            <span class="ptxt hard-c">Hard</span>
          </div>
        </div>

        <span class="section-label">POPULAR PROBLEMS</span>
        <div class="list">
          @for (p of problems; track p.number) {
            <a [routerLink]="['/leetcode', p.number]" class="card-link">
              <div class="num">{{ p.number }}</div>
              <div class="body">
                <span class="title">{{ p.title }}</span>
                <span class="cat">{{ p.category }}</span>
              </div>
              <span class="tag" [attr.data-d]="p.difficulty">{{ p.difficulty }}</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    /* Progress card */
    .progress {
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      padding: 18px 20px;
      margin-bottom: 24px;
    }
    .progress-label { display: block; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }
    .progress-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      text-align: center;
    }
    .pbox {
      width: 50px;
      height: 50px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
    .pbox.easy { background: #ecfdf5; }
    .pbox.medium { background: #fffbeb; }
    .pbox.hard { background: #fef2f2; }
    .pnum { font-size: 1.1rem; font-weight: 800; }
    .pbox.easy .pnum { color: #059669; }
    .pbox.medium .pnum { color: #d97706; }
    .pbox.hard .pnum { color: #dc2626; }
    .ptxt { display: block; font-size: 0.62rem; font-weight: 600; margin-top: 6px; }
    .easy-c { color: #059669; }
    .medium-c { color: #d97706; }
    .hard-c { color: #dc2626; }

    /* Section */
    .section-label { display: block; font-size: 0.62rem; font-weight: 800; letter-spacing: 0.15em; color: #1B4332; margin-bottom: 14px; }

    /* List */
    .list { display: flex; flex-direction: column; gap: 8px; }

    .card-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px 12px 14px;
      background: #fff;
      border-radius: 14px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 2px rgba(0,0,0,0.03);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card-link:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.05); transform: translateY(-1px); }

    .num {
      width: 34px;
      height: 34px;
      min-width: 34px;
      border-radius: 9px;
      background: #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      font-weight: 700;
      color: #52665A;
    }

    .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
    .title {
      font-size: 0.82rem;
      font-weight: 600;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cat { font-size: 0.6rem; color: #8A9B8F; }

    .tag {
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 5px;
      white-space: nowrap;
    }
    .tag[data-d="Easy"] { background: #ecfdf5; color: #059669; }
    .tag[data-d="Medium"] { background: #fffbeb; color: #d97706; }
    .tag[data-d="Hard"] { background: #fef2f2; color: #dc2626; }
  `
})
export class LcListComponent {
  problems = [
    { number: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays' },
    { number: 2, title: 'Add Two Numbers', difficulty: 'Medium', category: 'Linked Lists' },
    { number: 3, title: 'Longest Substring Without Repeating', difficulty: 'Medium', category: 'Strings' },
    { number: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium', category: 'Strings' },
    { number: 15, title: '3Sum', difficulty: 'Medium', category: 'Arrays' },
    { number: 20, title: 'Valid Parentheses', difficulty: 'Easy', category: 'Stacks' },
    { number: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy', category: 'Linked Lists' },
    { number: 49, title: 'Group Anagrams', difficulty: 'Medium', category: 'Hashing' },
    { number: 53, title: 'Maximum Subarray', difficulty: 'Medium', category: 'Dynamic Programming' },
    { number: 121, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', category: 'Arrays' },
    { number: 200, title: 'Number of Islands', difficulty: 'Medium', category: 'Graphs' },
    { number: 206, title: 'Reverse Linked List', difficulty: 'Easy', category: 'Linked Lists' }
  ];
}
