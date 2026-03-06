import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TopicLink {
  courseSlug: string;
  slug: string;
  title: string;
}

@Component({
  selector: 'app-topic-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <nav class="tn-nav">
      @if (prev()) {
        <a class="tn-card tn-prev" [routerLink]="['/tutorials', prev()!.courseSlug, prev()!.slug]">
          <span class="tn-dir">← Previous</span>
          <span class="tn-title">{{ prev()!.title }}</span>
        </a>
      } @else {
        <div></div>
      }
      @if (next()) {
        <a class="tn-card tn-next" [routerLink]="['/tutorials', next()!.courseSlug, next()!.slug]">
          <span class="tn-dir">Next →</span>
          <span class="tn-title">{{ next()!.title }}</span>
        </a>
      }
    </nav>
  `,
  styles: `
    .tn-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 48px;
    }
    @media (max-width: 500px) { .tn-nav { grid-template-columns: 1fr; } }

    .tn-card {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 16px 18px;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      text-decoration: none;
      background: #fff;
      transition: all 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .tn-card:hover { border-color: #94a3b8; box-shadow: 0 4px 12px rgba(0,0,0,0.07); }

    .tn-next { text-align: right; }

    .tn-dir {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #94a3b8;
    }

    .tn-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.3;
    }
  `
})
export class TopicNavComponent {
  prev = input<TopicLink | null>(null);
  next = input<TopicLink | null>(null);
}
