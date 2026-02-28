import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tutorial-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tutorial-page">
      <!-- Premium Hero Header -->
      <header class="hero" [style.background]="gradient()">
        <div class="hero-glow"></div>
        <div class="hero-inner">
          <span class="hero-badge">{{ badge() }}</span>
          <h1 class="hero-title">{{ title() }}</h1>
          <p class="hero-subtitle">{{ subtitle() }}</p>
        </div>
      </header>

      <!-- Content Slot -->
      <main class="content">
        <ng-content />
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-logo">JavaIQ</div>
        <p>© 2026 JavaIQ. Master your Java journey.</p>
      </footer>
    </div>
  `,
  styles: `
    .tutorial-page { min-height: 100%; background: #fff; }

    .hero {
      position: relative;
      padding: 64px 20px 52px;
      color: #fff;
      overflow: hidden;
      text-align: center;
    }
    .hero-glow {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(218,165,32,0.1) 0%, transparent 70%);
      filter: blur(60px);
    }
    .hero-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
    
    .hero-badge {
      display: inline-block;
      background: #DAA520;
      color: #081C15;
      padding: 4px 14px;
      border-radius: 20px;
      font-size: 0.62rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      margin-bottom: 20px;
    }
    .hero-title {
      margin: 0 0 14px;
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .hero-subtitle {
      margin: 0 auto;
      font-size: 0.95rem;
      color: rgba(255,255,255,0.8);
      line-height: 1.55;
      max-width: 500px;
    }

    .content {
      max-width: 720px;
      margin: 0 auto;
      padding: 48px 20px 100px;
    }

    .footer {
      background: #081C15;
      color: #8A9B8F;
      text-align: center;
      padding: 48px 24px;
    }
    .footer-logo {
      font-size: 1.2rem;
      font-weight: 800;
      color: #DAA520;
      margin-bottom: 8px;
    }
    .footer p { margin: 0; font-size: 0.75rem; font-weight: 500; }
  `
})
export class TutorialLayoutComponent {
  badge = input('JAVA MASTERCLASS');
  title = input.required<string>();
  subtitle = input('');
  gradient = input('linear-gradient(145deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)');
}
