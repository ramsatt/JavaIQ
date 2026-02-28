import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-strings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Strings & StringBuilder"
      subtitle="Understand string immutability, the string pool, and when to use StringBuilder for efficient manipulation."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0f766e, #2dd4bf)">

      <!-- Section 1: Concept -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-teal" /> What are Strings in Java?
        </h2>
        <div class="prose">
          <p>
            A <strong>String</strong> in Java is an object that represents a sequence of characters. Strings are <strong>immutable</strong> — once created, their value cannot be changed. Any operation that appears to modify a String actually creates a new String object.
          </p>
          <ul>
            <li><strong>Immutable:</strong> <code>"Hello" + " World"</code> creates a brand-new String — the original is untouched.</li>
            <li><strong>String Pool:</strong> Java caches string literals in a special memory area to save memory. Two identical literals point to the same object.</li>
            <li><strong>StringBuilder:</strong> For repeated modifications, use <code>StringBuilder</code> — it's mutable and much faster.</li>
          </ul>
          <h4 class="sub-heading">Creating Strings</h4>
          <app-code-block [code]="codeCreating" />
        </div>
      </section>

      <!-- Section 2: Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-teal" /> String Pool Visualizer
          </h3>

          <div class="pool-container">
            <div class="pool-section">
              <span class="pool-label">VARIABLES</span>
              <div class="var-list">
                @for (v of variables(); track v.name) {
                  <div class="var-item" [class.highlight]="v.name === highlighted()">
                    <span class="var-name">{{ v.name }}</span>
                    <span class="var-arrow">→</span>
                    <span class="var-addr">{{ v.address }}</span>
                  </div>
                }
              </div>
            </div>
            <div class="pool-section">
              <span class="pool-label">STRING POOL (HEAP)</span>
              <div class="pool-objects">
                @for (obj of poolObjects(); track obj.address) {
                  <div class="pool-obj" [class.active]="obj.address === activeAddr()">
                    <span class="obj-addr">{{ obj.address }}</span>
                    <span class="obj-val">"{{ obj.value }}"</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="demoImmutability()" [disabled]="isAnimating()" class="btn btn-teal">
              <app-icon name="play" [size]="16" /> Show Immutability
            </button>
            <button (click)="demoStringBuilder()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="zap" [size]="16" /> StringBuilder Demo
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Common String Methods
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Length & Access</h3>
            <p class="op-desc">Get the length or access individual characters by index.</p>
            <app-code-block [code]="codeLength" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Comparison</h3>
            <p class="op-desc">Compare strings by value (not reference) using equals().</p>
            <app-code-block [code]="codeCompare" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Substring & Split</h3>
            <p class="op-desc">Extract portions of a string or split by delimiter.</p>
            <app-code-block [code]="codeSubstring" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> StringBuilder</h3>
            <p class="op-desc">Mutable string operations for performance-critical code.</p>
            <app-code-block [code]="codeSB" />
          </div>
        </div>
      </section>

      <!-- Section 4: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case teal">
            <div class="use-num teal-bg">1</div>
            <div>
              <h4 class="use-title">API JSON Parsing</h4>
              <p class="use-desc">REST APIs return JSON as strings. You parse, compare, and extract data from string payloads constantly in backend services.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">SQL Query Building</h4>
              <p class="use-desc"><code>StringBuilder</code> is essential for dynamic SQL queries, building WHERE clauses conditionally without creating hundreds of intermediate String objects.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Log Message Formatting</h4>
              <p class="use-desc">High-throughput systems format millions of log lines per second. Using <code>String.format()</code> or StringBuilder avoids the garbage collection overhead of <code>+</code> concatenation.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-teal { color: #0d9488; }
    .icon-indigo { color: #4f46e5; }

    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0d9488; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .pool-container { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
    .pool-section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; }
    .pool-label { display: block; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 12px; }
    .var-list { display: flex; flex-direction: column; gap: 8px; }
    .var-item { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; transition: all 0.3s; }
    .var-item.highlight { border-color: #0d9488; background: #f0fdfa; }
    .var-name { font-weight: 700; color: #0f172a; }
    .var-arrow { color: #94a3b8; }
    .var-addr { color: #0d9488; font-size: 0.65rem; }
    .pool-objects { display: flex; flex-direction: column; gap: 8px; }
    .pool-obj { display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: #fff; border-radius: 8px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .pool-obj.active { border-color: #0d9488; background: #f0fdfa; transform: scale(1.03); }
    .obj-addr { font-size: 0.6rem; color: #94a3b8; font-family: 'JetBrains Mono', monospace; }
    .obj-val { font-size: 0.8rem; font-weight: 700; color: #0f172a; font-family: 'JetBrains Mono', monospace; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-teal { background: #0d9488; color: #fff; }
    .btn-teal:hover:not(:disabled) { background: #0f766e; }
    .btn-purple { background: #7c3aed; color: #fff; }
    .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); transition: box-shadow 0.2s; }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #14b8a6; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class StringsComponent {
  variables = signal([
    { name: 's1', address: '0x100' },
    { name: 's2', address: '0x100' }
  ]);
  poolObjects = signal([
    { address: '0x100', value: 'Hello' }
  ]);
  highlighted = signal('');
  activeAddr = signal('');
  status = signal('s1 and s2 both reference the same "Hello" in the String Pool.');
  isAnimating = signal(false);

  codeCreating = `// String literal (uses String Pool)
String s1 = "Hello";
String s2 = "Hello"; // same reference as s1!

// Using new keyword (bypasses pool)
String s3 = new String("Hello"); // different object

// String.valueOf()
String num = String.valueOf(42); // "42"`;

  codeLength = `String s = "Hello World";
s.length();        // 11
s.charAt(0);       // 'H'
s.indexOf("World"); // 6
s.isEmpty();       // false`;

  codeCompare = `String a = "Hello";
String b = new String("Hello");

a == b;           // false (different refs)
a.equals(b);      // true  (same value)
a.equalsIgnoreCase("HELLO"); // true`;

  codeSubstring = `String s = "Hello World";
s.substring(0, 5);    // "Hello"
s.substring(6);       // "World"
s.split(" ");          // ["Hello", "World"]
s.replace("World", "Java"); // "Hello Java"`;

  codeSB = `StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");  // "Hello, World"
sb.reverse();       // "dlroW ,olleH"
String result = sb.toString();`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async demoImmutability() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.status.set('Step 1: s1 = "Hello" — placed in String Pool...');
    this.highlighted.set('s1');
    this.activeAddr.set('0x100');
    await this.sleep(1200);

    this.status.set('Step 2: s1.concat(" World") — a NEW string is created...');
    this.poolObjects.update(p => [...p, { address: '0x200', value: 'Hello World' }]);
    this.activeAddr.set('0x200');
    await this.sleep(1500);

    this.status.set('Step 3: s1 still points to "Hello" — it was NOT modified!');
    this.activeAddr.set('0x100');
    this.highlighted.set('s1');
    await this.sleep(1500);

    this.variables.update(v => [...v, { name: 's3', address: '0x200' }]);
    this.status.set('The concat result is a new object. s1 is still "Hello". Strings are immutable! ✅');
    this.isAnimating.set(false);
  }

  async demoStringBuilder() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.status.set('StringBuilder: mutable — modifies in place, no new objects...');
    this.poolObjects.set([{ address: '0x300', value: '' }]);
    this.variables.set([{ name: 'sb', address: '0x300' }]);
    this.highlighted.set('sb');
    this.activeAddr.set('0x300');
    await this.sleep(1000);

    const steps = ['H', 'He', 'Hel', 'Hell', 'Hello'];
    for (const s of steps) {
      this.poolObjects.set([{ address: '0x300', value: s }]);
      this.status.set(`sb.append('${s.slice(-1)}') → "${s}" (same object 0x300)`);
      await this.sleep(600);
    }

    this.status.set('StringBuilder mutates in place — 1 object vs 5 with String concat! ⚡');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.variables.set([
      { name: 's1', address: '0x100' },
      { name: 's2', address: '0x100' }
    ]);
    this.poolObjects.set([{ address: '0x100', value: 'Hello' }]);
    this.highlighted.set('');
    this.activeAddr.set('');
    this.status.set('s1 and s2 both reference the same "Hello" in the String Pool.');
    this.isAnimating.set(false);
  }
}
