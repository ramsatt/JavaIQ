import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookOutline, book,
  chatbubblesOutline, chatbubbles,
  codeSlashOutline, codeSlash,
  trophyOutline, trophy,
  clipboardOutline, clipboard,
  peopleOutline, people
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tutorials">
          <ion-icon name="book-outline" />
          <ion-label>Tutorials</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="interview-questions">
          <ion-icon name="chatbubbles-outline" />
          <ion-label>Interview</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="coding-questions">
          <ion-icon name="code-slash-outline" />
          <ion-label>Coding</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="leetcode">
          <ion-icon name="trophy-outline" />
          <ion-label>LeetCode</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="assessments">
          <ion-icon name="clipboard-outline" />
          <ion-label>Assess</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="experiences">
          <ion-icon name="people-outline" />
          <ion-label>Stories</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: `
    ion-tab-bar {
      --background: #ffffff;
      border-top: 1px solid #D6DDD2;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.04);
      height: 64px;
    }

    ion-tab-button {
      --color: #8A9B8F;
      --color-selected: #1B4332;
      font-size: 0.6rem;
      font-weight: 600;
      letter-spacing: 0.03em;
    }

    ion-tab-button::part(native) {
      padding-top: 8px;
      padding-bottom: 6px;
    }

    ion-icon {
      font-size: 1.25rem;
      margin-bottom: 3px;
    }
  `
})
export class TabsComponent {
  constructor() {
    addIcons({
      bookOutline, book,
      chatbubblesOutline, chatbubbles,
      codeSlashOutline, codeSlash,
      trophyOutline, trophy,
      clipboardOutline, clipboard,
      peopleOutline, people
    });
  }
}
