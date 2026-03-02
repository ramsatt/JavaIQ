import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp, IonRouterOutlet, IonMenu, IonHeader,
  IonContent, IonList, IonItem, IonIcon, IonLabel,
  IonMenuToggle, IonFooter, IonToggle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookOutline, chatbubblesOutline, codeSlashOutline,
  trophyOutline, clipboardOutline, peopleOutline,
  moonOutline, sunnyOutline, personCircleOutline
} from 'ionicons/icons';
import { AdMobService } from './admob.service';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, IonApp, IonRouterOutlet, IonMenu,
    IonHeader, IonContent, IonList, IonItem,
    IonIcon, IonLabel, IonMenuToggle, IonFooter, IonToggle, CustomAlertComponent
  ],
  template: `
    <ion-app>
      <ion-menu contentId="main-content" type="overlay">
        <ion-header class="ion-no-border">
          <div class="menu-header">
            <div class="header-glow header-glow-1"></div>
            <div class="header-glow header-glow-2"></div>
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

        <ion-content class="menu-content">
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

              <div class="nav-divider"></div>

              <ion-menu-toggle auto-hide="false">
                <ion-item routerLink="/about" routerLinkActive="selected" detail="false" class="nav-item">
                  <div slot="start" class="icon-box"><ion-icon name="person-circle-outline"></ion-icon></div>
                  <ion-label>About Developer</ion-label>
                  <div class="active-indicator"></div>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </div>
        </ion-content>

        <ion-footer class="ion-no-border">
          <div class="menu-footer">
            <div class="theme-row">
              <ion-icon [name]="themeService.theme() === 'dark' ? 'moon-outline' : 'sunny-outline'" class="theme-icon"></ion-icon>
              <span class="theme-label">{{ themeService.theme() === 'dark' ? 'Dark Mode' : 'Light Mode' }}</span>
              <ion-toggle
                [checked]="themeService.theme() === 'dark'"
                (ionChange)="themeService.toggle()"
                mode="ios"
                class="theme-toggle">
              </ion-toggle>
            </div>
            <span class="version">v1.2.0</span>
            <span class="footer-brand">Built with ❤️ for Java developers</span>
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    #main-content {
      height: 100%;
    }

    /* Menu container styling */
    ion-menu::part(container) {
      background: #0b1120;
      border-right: 1px solid rgba(255,255,255,0.06);
    }
    
    ion-menu::part(backdrop) {
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    /* Stylish Menu Header */
    .menu-header {
      position: relative;
      padding: 56px 20px 24px;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .header-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(145deg, #0b1120 0%, #161b22 100%);
      z-index: 0;
    }
    .header-glow {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(40px);
      z-index: 0;
    }
    .header-glow-1 {
      top: -40px;
      right: -20px;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%);
    }
    .header-glow-2 {
      bottom: -20px;
      left: -20px;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
    }

    .header-inner { position: relative; z-index: 1; }
    .header-logo {
      font-family: 'Inter', sans-serif;
      font-size: 1.8rem;
      font-weight: 900;
      background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0 0 20px;
      letter-spacing: -0.04em;
    }
    .profile-preview {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      transition: all 0.2s ease;
    }
    .profile-preview:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: rgba(139,92,246,0.15);
      border: 1px solid rgba(139,92,246,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .profile-info { display: flex; flex-direction: column; gap: 2px; }
    .user-name { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; color: #e2e8f0; }
    .user-level { font-family: 'Inter', sans-serif; font-size: 0.65rem; font-weight: 500; color: #94a3b8; }

    /* Navigation items */
    .menu-content { 
      --background: #0b1120;
    }
    .menu-nav { padding: 24px 16px; }
    .nav-label {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #64748b;
      margin-bottom: 16px;
      padding-left: 12px;
    }
    .menu-list { background: transparent; }
    .nav-divider {
      height: 1px;
      background: rgba(255,255,255,0.06);
      margin: 8px 12px;
    }
    
    .nav-item {
      --background: transparent;
      --padding-start: 12px;
      --inner-padding-end: 12px;
      --border-radius: 12px;
      --color: #94a3b8;
      margin-bottom: 6px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
      position: relative;
    }
    .nav-item::part(native):hover {
      background: rgba(255,255,255,0.04);
      color: #e2e8f0;
    }

    .icon-box {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      transition: all 0.2s;
    }
    ion-icon { font-size: 16px; color: #64748b; transition: all 0.2s; }
    .nav-item::part(native):hover ion-icon { color: #a78bfa; }

    /* Nav Item States */
    .nav-item.selected {
      --color: #e2e8f0;
      --background: rgba(139,92,246,0.1);
    }
    .nav-item.selected .icon-box { 
      background: rgba(139,92,246,0.2); 
      border-color: rgba(139,92,246,0.4);
    }
    .nav-item.selected ion-icon { color: #c4b5fd; }
    
    .active-indicator {
      width: 3px;
      height: 20px;
      background: #8b5cf6;
      border-radius: 4px;
      position: absolute;
      right: 0;
      opacity: 0;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      transform: scaleY(0);
    }
    .nav-item.selected .active-indicator { 
      opacity: 1; 
      right: 10px; 
      transform: scaleY(1);
    }

    /* Footer Branding */
    .menu-footer {
      padding: 20px;
      background: #0b1120;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-top: 1px solid rgba(255,255,255,0.06);
      align-items: center;
      text-align: center;
    }
    /* Theme Toggle Row */
    .theme-row {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 10px 0 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      margin-bottom: 10px;
    }
    .theme-icon { font-size: 1rem; color: #94a3b8; flex-shrink: 0; }
    .theme-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      color: #94a3b8;
      flex: 1;
    }
    .theme-toggle {
      --background: #334155;
      --background-checked: #8b5cf6;
      --handle-background: #fff;
      --handle-background-checked: #fff;
      --border-radius: 12px;
      --handle-border-radius: 10px;
      --handle-spacing: 2px;
      --handle-width: 18px;
      --handle-height: 18px;
      height: 22px;
      min-height: unset;
    }

    .version { font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 700; color: #475569; }
    .footer-brand {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      color: #64748b;
    }

    /* ── Light Mode Sidebar Overrides ── */
    :host-context(html:not(.dark)) .menu-content {
      --background: #ffffff;
    }
    :host-context(html:not(.dark)) .menu-header {
      border-bottom-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .header-bg {
      background: linear-gradient(145deg, #ffffff 0%, #F5F7F2 100%);
    }
    :host-context(html:not(.dark)) .header-glow-1 {
      background: radial-gradient(circle, rgba(27,67,50,0.06) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .header-glow-2 {
      background: radial-gradient(circle, rgba(64,145,108,0.05) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .header-logo {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .profile-preview {
      background: rgba(27,67,50,0.04);
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .profile-preview:hover {
      background: rgba(27,67,50,0.08);
      border-color: #B7CCBB;
    }
    :host-context(html:not(.dark)) .avatar {
      background: rgba(27,67,50,0.08);
      border-color: rgba(27,67,50,0.2);
    }
    :host-context(html:not(.dark)) .user-name { color: #1B1B1B; }
    :host-context(html:not(.dark)) .user-level { color: #52665A; }
    :host-context(html:not(.dark)) .nav-label { color: #8A9B8F; }
    :host-context(html:not(.dark)) .nav-divider { background: #E8EDE5; }
    :host-context(html:not(.dark)) .nav-item {
      --color: #52665A;
    }
    :host-context(html:not(.dark)) .nav-item::part(native):hover {
      background: rgba(27,67,50,0.06);
      color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .nav-item::part(native):hover ion-icon {
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .icon-box {
      background: rgba(27,67,50,0.05);
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .icon-box ion-icon {
      color: #8A9B8F;
    }
    :host-context(html:not(.dark)) .nav-item.selected {
      --color: #1B4332;
      --background: rgba(27,67,50,0.08);
    }
    :host-context(html:not(.dark)) .nav-item.selected .icon-box {
      background: rgba(27,67,50,0.12);
      border-color: rgba(27,67,50,0.25);
    }
    :host-context(html:not(.dark)) .nav-item.selected .icon-box ion-icon {
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .active-indicator {
      background: #1B4332;
    }
    :host-context(html:not(.dark)) .menu-footer {
      background: #F5F7F2;
      border-top-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .theme-row {
      border-bottom-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .theme-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .theme-label { color: #1B1B1B; }
    :host-context(html:not(.dark)) .theme-toggle {
      --background: #D6DDD2;
      --background-checked: #1B4332;
    }
    :host-context(html:not(.dark)) .version { color: #8A9B8F; }
    :host-context(html:not(.dark)) .footer-brand { color: #52665A; }
  `]
})
export class AppComponent {
  title = 'JavaIQ';

  constructor(
    private adMobService: AdMobService,
    protected themeService: ThemeService
  ) {
    addIcons({
      bookOutline, chatbubblesOutline, codeSlashOutline,
      trophyOutline, clipboardOutline, peopleOutline,
      moonOutline, sunnyOutline, personCircleOutline
    });
    this.adMobService.showBanner();
  }
}
