import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CodeBlockComponent } from './code-block.component';

export interface Pitfall {
  title: string;
  wrong: string;
  correct: string;
  explanation: string;
}

@Component({
  selector: 'app-common-pitfalls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CodeBlockComponent],
  template: `
    <section class="cp-section">
      <h2 class="cp-heading">
        <span class="cp-icon">⚠️</span> Common Pitfalls
      </h2>
      <p class="cp-subtitle">Mistakes that cost candidates in interviews and production systems.</p>
      <div class="cp-list">
        @for (p of pitfalls(); track p.title) {
          <div class="cp-card">
            <h3 class="cp-title">{{ p.title }}</h3>
            <div class="cp-cols">
              <div class="cp-half wrong-half">
                <span class="cp-label wrong-label">✗ Wrong</span>
                <app-code-block [code]="p.wrong" language="java" />
              </div>
              <div class="cp-half right-half">
                <span class="cp-label right-label">✓ Correct</span>
                <app-code-block [code]="p.correct" language="java" />
              </div>
            </div>
            <p class="cp-explanation">{{ p.explanation }}</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .cp-section { margin-bottom: 48px; }

    .cp-heading {
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
    .cp-icon { font-size: 1.3rem; }
    .cp-subtitle { font-size: 0.82rem; color: #64748b; margin: 0 0 20px; }

    .cp-list { display: flex; flex-direction: column; gap: 20px; }

    .cp-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 22px 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    .cp-title {
      font-size: 1rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 16px;
    }

    .cp-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 14px;
    }
    @media (max-width: 600px) { .cp-cols { grid-template-columns: 1fr; } }

    .cp-half { display: flex; flex-direction: column; gap: 6px; }

    .cp-label {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 6px;
      align-self: flex-start;
    }
    .wrong-label { background: #fee2e2; color: #b91c1c; }
    .right-label  { background: #dcfce7; color: #15803d; }

    .cp-explanation {
      font-size: 0.82rem;
      color: #475569;
      line-height: 1.65;
      margin: 0;
      padding-top: 12px;
      border-top: 1px solid #f1f5f9;
    }
  `
})
export class CommonPitfallsComponent {
  pitfalls = input.required<Pitfall[]>();
}
