import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export interface InterviewTip {
  question: string;
  insight: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

@Component({
  selector: 'app-interview-tips',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="it-section">
      <h2 class="it-heading">
        <span class="it-icon">🎯</span> Interview Tips
      </h2>
      <p class="it-subtitle">Frequently asked questions on this topic. Know the answer before the interview.</p>
      <div class="it-grid">
        @for (tip of tips(); track tip.question) {
          <div class="it-card">
            <div class="it-card-header">
              <span class="it-badge" [class]="'badge-' + tip.difficulty.toLowerCase()">
                {{ tip.difficulty }}
              </span>
            </div>
            <p class="it-question">{{ tip.question }}</p>
            <p class="it-insight">{{ tip.insight }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .it-section { margin-bottom: 48px; }

    .it-heading {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.4rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 6px;
      padding-bottom: 14px;
      border-bottom: 1px solid #e2e8f0;
    }
    .it-icon { font-size: 1.3rem; }
    .it-subtitle { font-size: 0.82rem; color: #64748b; margin: 0 0 20px; }

    .it-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .it-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 18px 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .it-card-header { margin-bottom: 10px; }

    .it-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 20px;
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .badge-easy   { background: #dcfce7; color: #15803d; }
    .badge-medium { background: #fef3c7; color: #92400e; }
    .badge-hard   { background: #fee2e2; color: #991b1b; }

    .it-question {
      font-size: 0.9rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px;
      line-height: 1.4;
    }

    .it-insight {
      font-size: 0.82rem;
      color: #475569;
      line-height: 1.65;
      margin: 0;
    }
  `
})
export class InterviewTipsComponent {
  tips = input.required<InterviewTip[]>();
}
