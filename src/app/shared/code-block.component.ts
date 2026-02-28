import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="code-wrapper">
      <pre><code>{{ code() }}</code></pre>
    </div>
  `,
  styles: `
    .code-wrapper {
      background: #1e293b;
      color: #e2e8f0;
      padding: 18px 20px;
      border-radius: 14px;
      overflow-x: auto;
      margin: 16px 0;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.78rem;
      line-height: 1.7;
      border: 1px solid #334155;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);
    }
    pre { margin: 0; }
    code { white-space: pre; }
  `
})
export class CodeBlockComponent {
  code = input.required<string>();
}
