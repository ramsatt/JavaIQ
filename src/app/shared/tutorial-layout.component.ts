import { Component, ChangeDetectionStrategy, input, ElementRef, ViewContainerRef, ComponentRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { InlineAdComponent } from './inline-ad.component';

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
      margin: 0 auto;
      padding: clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(80px, 10vw, 120px);
    }

    /* ── Tablet ── */
    @media (min-width: 640px) {
      .hero-inner { max-width: min(760px, 100%); }
    }

    /* ── Desktop ── */
    @media (min-width: 1024px) {
      .hero-inner { max-width: min(900px, 100%); }
      .hero-subtitle { max-width: min(680px, 100%); }
      .content { padding-left: clamp(32px, 4vw, 64px); padding-right: clamp(32px, 4vw, 64px); }
    }

    /* ── Wide ── */
    @media (min-width: 1440px) {
      .hero-inner { max-width: min(1060px, 100%); }
      .content { padding-left: clamp(48px, 5vw, 80px); padding-right: clamp(48px, 5vw, 80px); }
    }
  `
})
export class TutorialLayoutComponent implements AfterViewInit, OnDestroy {
  badge = input('JAVA MASTERCLASS');
  title = input.required<string>();
  subtitle = input('');
  gradient = input('linear-gradient(145deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)');

  private el = inject(ElementRef);
  private vcr = inject(ViewContainerRef);
  private adRefs: ComponentRef<InlineAdComponent>[] = [];

  ngAfterViewInit() {
    // Delay slightly to ensure ng-content projection and any inner DOM updates have settled
    setTimeout(() => {
      const headings = this.el.nativeElement.querySelectorAll('.section-heading');
      headings.forEach((heading: Element, index: number) => {
        const adRef = this.vcr.createComponent(InlineAdComponent);
        adRef.setInput('label', `heading-ad-${index}`);
        adRef.changeDetectorRef.detectChanges();
        
        // Insert the dynamic component's root element right after the heading
        const adEl = adRef.location.nativeElement;
        heading.parentNode?.insertBefore(adEl, heading.nextSibling);
        
        this.adRefs.push(adRef);
      });
    }, 100);
  }

  ngOnDestroy() {
    this.adRefs.forEach(ref => ref.destroy());
    this.adRefs = [];
  }
}
