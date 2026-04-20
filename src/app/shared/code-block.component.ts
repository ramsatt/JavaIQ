import { Component, ChangeDetectionStrategy, input, signal, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="code-editor">
      <div class="code-topbar">
        <div class="code-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
          <span class="code-filename">{{ filename() || 'Example.java' }}</span>
        </div>
        <button class="copy-btn" (click)="copy()">
          @if (copied()) {
            <i class="fa-solid fa-check copy-check"></i>
          } @else {
            <i class="fa-regular fa-copy"></i>
          }
        </button>
      </div>
      <div class="code-body">
        <pre class="code-pre" [innerHTML]="highlighted()"></pre>
      </div>
    </div>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

    .code-editor {
      background: #0d1117;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #30363d;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
      margin: 16px 0;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    .code-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
    }
    .code-dots { display: flex; align-items: center; gap: 6px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot-red    { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green  { background: #28c840; }
    .code-filename {
      margin-left: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #8b949e;
    }
    .copy-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: #8b949e;
      font-size: 14px;
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 6px;
      transition: all 0.15s ease;
    }
    .copy-btn:hover { background: #30363d; color: #c9d1d9; }
    .copy-check { color: #3fb950; }
    .code-body {
      padding: 18px 20px;
      overflow-x: auto;
    }
    .code-pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(0.68rem, 1.8vw, 0.78rem);
      line-height: 1.75;
      color: #c9d1d9;
      margin: 0;
      white-space: pre;
      -webkit-font-smoothing: antialiased;
    }
    /* Scrollbar */
    .code-body::-webkit-scrollbar { height: 6px; }
    .code-body::-webkit-scrollbar-track { background: transparent; }
    .code-body::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
    .code-body::-webkit-scrollbar-thumb:hover { background: #484f58; }
  `
})
export class CodeBlockComponent {
  code = input.required<string>();
  filename = input<string>('');

  private sanitizer = inject(DomSanitizer);
  copied = signal(false);

  highlighted = computed((): SafeHtml => {
    const raw = this.code();
    if (!raw) return '';
    return this.sanitizer.bypassSecurityTrustHtml(this.highlight(raw));
  });

  private highlight(code: string): string {
    let s = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const tokens: string[] = [];
    const ph = (i: number) => `\u0000ph${i}ph\u0000`;

    // 1) Block comments
    s = s.replace(/(\/\*[\s\S]*?\*\/)/g, (m) => {
      const i = tokens.length;
      tokens.push(`<span style="color:#8b949e;font-style:italic">${m}</span>`);
      return ph(i);
    });
    // 2) Line comments
    s = s.replace(/(\/\/[^\n]*)/g, (m) => {
      const i = tokens.length;
      tokens.push(`<span style="color:#8b949e;font-style:italic">${m}</span>`);
      return ph(i);
    });
    // 3) Strings
    s = s.replace(/(\"(?:[^\"\\]|\\.)*\"|\'(?:[^\'\\]|\\.)*\')/g, (m) => {
      const i = tokens.length;
      tokens.push(`<span style="color:#a5d6ff">${m}</span>`);
      return ph(i);
    });
    // 4) Annotations
    s = s.replace(/(@\w+)/g, (m) => {
      const i = tokens.length;
      tokens.push(`<span style="color:#d2a8ff">${m}</span>`);
      return ph(i);
    });
    // 5) Keywords
    const kws = ['abstract','assert','boolean','break','byte','case','catch','char','class','const',
      'continue','default','do','double','else','enum','extends','final','finally','float','for',
      'if','implements','import','instanceof','int','interface','long','native','new','null','package',
      'permits','private','protected','public','record','return','sealed','short','static','strictfp',
      'super','switch','synchronized','this','throw','throws','transient','try','var','void',
      'volatile','while','true','false'];
    const kwRe = new RegExp(`\\b(${kws.join('|')})\\b`, 'g');
    s = s.replace(kwRe, '<span style="color:#ff7b72">$1</span>');
    // 6) Types (PascalCase)
    s = s.replace(/\b([A-Z][A-Za-z0-9_]*)\b/g, '<span style="color:#ffa657">$1</span>');
    // 7) Method calls
    s = s.replace(/\b([a-z_]\w*)\s*\(/g, '<span style="color:#d2a8ff">$1</span>(');
    // 8) Numbers
    s = s.replace(/\b(\d[\d_]*(?:\.\d+)?[fFdDlL]?)\b/g, '<span style="color:#79c0ff">$1</span>');
    // 9) Restore tokens
    s = s.replace(/\u0000ph(\d+)ph\u0000/g, (_m, i) => tokens[parseInt(i, 10)]);

    return s;
  }

  copy() {
    navigator.clipboard.writeText(this.code()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
