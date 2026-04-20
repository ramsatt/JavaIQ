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

    </div>
  `,
  styles: `
    *, *::before, *::after { box-sizing: border-box; }
    .tutorial-page { min-height: 100%; background: #fff; }

    .hero {
      position: relative;
      padding: clamp(40px, 8vw, 80px) clamp(16px, 5vw, 48px) clamp(36px, 7vw, 68px);
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
    .hero-inner {
      position: relative;
      z-index: 1;
      max-width: min(680px, 100%);
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background: #DAA520;
      color: #081C15;
      padding: 4px 14px;
      border-radius: 20px;
      font-size: clamp(0.55rem, 1.5vw, 0.65rem);
      font-weight: 800;
      letter-spacing: 0.12em;
      margin-bottom: clamp(12px, 3vw, 20px);
    }
    .hero-title {
      margin: 0 0 clamp(10px, 2vw, 14px);
      font-size: clamp(1.6rem, 5vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.05;
      word-break: break-word;
    }
    .hero-subtitle {
      margin: 0 auto;
      font-size: clamp(0.82rem, 2.2vw, 1rem);
      color: rgba(255,255,255,0.8);
      line-height: 1.55;
      max-width: min(500px, 100%);
    }

    .content {
      width: 100%;
      max-width: min(720px, 100%);
      margin: 0 auto;
      padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 64px) clamp(80px, 10vw, 120px);
    }

    /* ── Tablet ── */
    @media (min-width: 640px) {
      .hero-inner { max-width: min(760px, 100%); }
    }

    /* ── Desktop ── */
    @media (min-width: 1024px) {
      .hero-inner { max-width: min(860px, 100%); }
      .hero-subtitle { max-width: min(620px, 100%); }
      .content { max-width: min(860px, 100%); }
    }

    /* ── Wide ── */
    @media (min-width: 1440px) {
      .hero-inner { max-width: min(1000px, 100%); }
      .content { max-width: min(1000px, 100%); }
    }
  `
})
export class TutorialLayoutComponent {
  badge = input('JAVA MASTERCLASS');
  title = input.required<string>();
  subtitle = input('');
  gradient = input('linear-gradient(145deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)');
}
