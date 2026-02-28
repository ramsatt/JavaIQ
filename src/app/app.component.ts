import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp, IonRouterOutlet, IonMenu, IonHeader,
  IonContent, IonList, IonItem, IonIcon, IonLabel,
  IonMenuToggle, IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookOutline, chatbubblesOutline, codeSlashOutline,
  trophyOutline, clipboardOutline, peopleOutline
} from 'ionicons/icons';
import { AdMobService } from './admob.service';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, IonApp, IonRouterOutlet, IonMenu,
    IonHeader, IonContent, IonList, IonItem,
    IonIcon, IonLabel, IonMenuToggle, IonFooter, CustomAlertComponent
  ],
  template: `
    <ion-app>
      <ion-menu contentId="main-content" type="overlay">
        <ion-header class="ion-no-border">
          <div class="menu-header">
            <div class="header-bg"></div>
            <div class="header-inner">
              <h1 class="header-logo">JavaIQ</h1>
              <div class="profile-preview">
                <div class="avatar">☕</div>
                <div class="profile-info">
                  <span class="user-name">Java Learner</span>
                  <span class="user-level">Beginner Explorer</span>
                </div>
              </div>
            </div>
          </div>
        </ion-header>

        <ion-content>
          <div class="menu-nav">
            <span class="nav-label">LEARNING PATHS</span>
            <ion-list lines="none" class="menu-list">
              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/tutorials" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="book-outline"></ion-icon></div>
                  <ion-label>Tutorials</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/interview-questions" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="chatbubbles-outline"></ion-icon></div>
                  <ion-label>Interview Questions</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/coding-questions" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="code-slash-outline"></ion-icon></div>
                  <ion-label>Coding Questions</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/leetcode" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="trophy-outline"></ion-icon></div>
                  <ion-label>LeetCode</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/assessments" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="clipboard-outline"></ion-icon></div>
                  <ion-label>Assessments</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/experiences" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="people-outline"></ion-icon></div>
                  <ion-label>Interview Stories</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </div>
        </ion-content>

        <ion-footer class="ion-no-border">
          <div class="menu-footer">
            <span class="version">v1.2.0</span>
            <span class="footer-brand">Powered by JavaIQ</span>
          </div>
        </ion-footer>
      </ion-menu>

      <div id="main-content">
        <ion-router-outlet></ion-router-outlet>
      </div>
      
      <app-custom-alert></app-custom-alert>
    </ion-app>
  `,
  styles: [`
    #main-content {
      height: 100%;
    }

    /* Stylish Menu Header */
    .menu-header {
      position: relative;
      padding: 56px 20px 24px;
      overflow: hidden;
    }
    .header-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%);
    }
    .header-inner { position: relative; z-index: 1; }
    .header-logo {
      font-size: 1.8rem;
      font-weight: 800;
      color: #DAA520;
      margin: 0 0 20px;
      letter-spacing: -0.04em;
    }
    .profile-preview {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .profile-info { display: flex; flex-direction: column; gap: 2px; }
    .user-name { font-size: 0.95rem; font-weight: 700; color: #fff; }
    .user-level { font-size: 0.65rem; font-weight: 500; color: rgba(255,255,255,0.6); }

    /* Navigation items */
    .menu-nav { padding: 24px 16px; }
    .nav-label {
      display: block;
      font-size: 0.62rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #8A9B8F;
      margin-bottom: 16px;
      padding-left: 12px;
    }
    .menu-list { background: transparent; }
    
    .nav-item {
      --background: transparent;
      --padding-start: 12px;
      --inner-padding-end: 12px;
      --border-radius: 14px;
      --color: #52665A;
      margin-bottom: 6px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
      position: relative;
    }
    .icon-box {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: #F1F8F1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      transition: all 0.2s;
    }
    ion-icon { font-size: 18px; color: #52665A; }

    /* Nav Item States */
    .nav-item.selected {
      --color: #1B4332;
      --background: #EDF2E7;
    }
    .nav-item.selected .icon-box { background: #1B4332; }
    .nav-item.selected ion-icon { color: #fff; }
    
    .active-indicator {
      width: 4px;
      height: 16px;
      background: #DAA520;
      border-radius: 10px;
      position: absolute;
      right: 0;
      opacity: 0;
      transition: all 0.2s;
    }
    .nav-item.selected .active-indicator { opacity: 1; right: 10px; }

    /* Footer Branding */
    .menu-footer {
      padding: 20px;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-top: 1px solid #D6DDD2;
    }
    .version { font-size: 0.6rem; font-weight: 700; color: #8A9B8F; }
    .footer-brand { font-size: 0.65rem; font-weight: 800; color: #B5C4B1; letter-spacing: 0.05em; }
  `]
})
export class AppComponent {
  title = 'JavaIQ';

  constructor(private adMobService: AdMobService) {
    addIcons({
      bookOutline, chatbubblesOutline, codeSlashOutline,
      trophyOutline, clipboardOutline, peopleOutline
    });
    this.adMobService.showBanner();
  }
}
