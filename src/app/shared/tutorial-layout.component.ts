import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-tutorial-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tutorial-page">
      <!-- Hero Header -->
      <header class="hero" [style.background]="gradient()">
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
        <p>© 2026 JavaIQ — Java Masterclass Tutorials</p>
      </footer>
    </div>
  `,
  styles: `
    .tutorial-page { min-height: 100vh; background: #f8fafc; }

    .hero {
      padding: 52px 20px 36px;
      color: #fff;
    }
    .hero-inner { max-width: 720px; margin: 0 auto; }
    .hero-badge {
      display: inline-block;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.25);
      padding: 4px 14px;
      border-radius: 20px;
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      margin-bottom: 14px;
    }
    .hero-title {
      margin: 0 0 10px;
      font-size: 1.85rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
    }
    .hero-subtitle {
      margin: 0;
      font-size: 0.88rem;
      color: rgba(255,255,255,0.75);
      line-height: 1.55;
      max-width: 560px;
    }

    .content {
      max-width: 720px;
      margin: 0 auto;
      padding: 36px 20px 80px;
    }

    .footer {
      background: #1e293b;
      color: #94a3b8;
      text-align: center;
      padding: 24px 20px;
      font-size: 0.72rem;
    }
    .footer p { margin: 0; }
  `
})
export class TutorialLayoutComponent {
  badge = input('JAVA MASTERCLASS');
  title = input.required<string>();
  subtitle = input('');
  gradient = input('linear-gradient(135deg, #1e40af, #6366f1)');
}
