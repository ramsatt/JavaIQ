import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';
import { InterviewTipsComponent, type InterviewTip } from '../../../shared/interview-tips.component';
import { CommonPitfallsComponent, type Pitfall } from '../../../shared/common-pitfalls.component';
import { TopicNavComponent } from '../../../shared/topic-nav.component';

@Component({
  selector: 'app-topic-strings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent, InterviewTipsComponent, CommonPitfallsComponent, TopicNavComponent],
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

      <!-- Section 4: Modern String APIs -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-teal" /> Modern String APIs (Java 11–21)
        </h2>
        <div class="version-row">
          <span class="ver-badge">Java 11</span>
          <span class="ver-badge">Java 12</span>
          <span class="ver-badge">Java 15</span>
        </div>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title">Whitespace Methods</h3>
            <p class="op-desc"><code>strip()</code> handles Unicode whitespace; <code>isBlank()</code> checks empty-or-whitespace.</p>
            <app-code-block [code]="codeModernWhitespace" language="java" />
          </div>
          <div class="op-card">
            <h3 class="op-title">Transformation</h3>
            <p class="op-desc"><code>repeat()</code>, <code>indent()</code>, <code>lines()</code> — process multiline text as streams.</p>
            <app-code-block [code]="codeModernTransform" language="java" />
          </div>
          <div class="op-card">
            <h3 class="op-title">Formatting</h3>
            <p class="op-desc"><code>formatted()</code> is the instance-method equivalent of <code>String.format()</code>.</p>
            <app-code-block [code]="codeModernFormat" language="java" />
          </div>
          <div class="op-card">
            <h3 class="op-title">Joining</h3>
            <p class="op-desc"><code>String.join()</code> and <code>Collectors.joining()</code> — the clean replacement for manual loop concatenation.</p>
            <app-code-block [code]="codeModernJoin" language="java" />
          </div>
        </div>
      </section>

      <!-- Section 5: Text Blocks -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Text Blocks (Java 15+)
        </h2>
        <p class="section-prose">
          Text blocks use triple-quote delimiters <code>"""</code> to write multiline strings without escape sequences.
          The compiler strips common leading whitespace automatically.
        </p>
        <div class="compare-grid">
          <div class="compare-card old-card">
            <span class="compare-label old-label">Before Java 15</span>
            <app-code-block [code]="codeTextBlockBefore" language="java" />
          </div>
          <div class="compare-card new-card">
            <span class="compare-label new-label">Java 15+ Text Block</span>
            <app-code-block [code]="codeTextBlockAfter" language="java" />
          </div>
        </div>
        <div class="info-box">
          <strong>Real-world use:</strong> Text blocks are ideal for embedded JSON, SQL queries, HTML templates, and multiline log messages inside Spring Boot applications.
        </div>
      </section>

      <!-- Section 6: Performance Guide -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="activity" [size]="28" css="icon-teal" /> Performance: String vs StringBuilder
        </h2>
        <div class="perf-grid">
          @for (p of perfRows; track p.label) {
            <div class="perf-row" [class.perf-warn]="p.warn">
              <span class="perf-label">{{ p.label }}</span>
              <span class="perf-complexity" [class.good]="p.good">{{ p.complexity }}</span>
              <span class="perf-note">{{ p.note }}</span>
            </div>
          }
        </div>
        <app-code-block [code]="codePerformance" language="java" />
      </section>

      <!-- Section 7: Real-World Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-teal" /> Real-World Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case teal">
            <div class="use-num teal-bg">1</div>
            <div>
              <h4 class="use-title">REST API Response Formatting</h4>
              <p class="use-desc">Spring Boot uses <code>String.formatted()</code> and text blocks for clean error messages and structured responses. <code>ResponseEntity.badRequest().body("User %s not found".formatted(id))</code></p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Dynamic SQL with StringBuilder</h4>
              <p class="use-desc"><code>StringBuilder</code> is essential for building conditional WHERE clauses in repository methods without creating hundreds of intermediate String objects.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Embedded SQL / JSON via Text Blocks</h4>
              <p class="use-desc">JPA native queries and test data JSON are far more readable as text blocks — no escape sequences, proper indentation, direct copy-paste from tools.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 8: Common Pitfalls -->
      <app-common-pitfalls [pitfalls]="pitfalls" />

      <!-- Section 9: Interview Tips -->
      <app-interview-tips [tips]="interviewTips" />

      <!-- Topic Navigation -->
      <app-topic-nav
        [prev]="{ courseSlug: 'core-java', slug: 'arrays', title: 'Java Arrays' }"
        [next]="{ courseSlug: 'core-java', slug: 'oop-classes', title: 'Classes & Objects' }" />

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

    .version-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
    .ver-badge { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; border-radius: 20px; padding: 2px 10px; font-size: 0.68rem; font-weight: 700; }

    .section-prose { font-size: 0.88rem; color: #334155; line-height: 1.7; margin-bottom: 16px; }
    .section-prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0d9488; }

    .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
    @media (max-width: 600px) { .compare-grid { grid-template-columns: 1fr; } }
    .compare-card { border-radius: 12px; overflow: hidden; border: 1px solid; }
    .old-card { border-color: #fecaca; }
    .new-card { border-color: #bbf7d0; }
    .compare-label { display: block; padding: 6px 12px; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; }
    .old-label { background: #fee2e2; color: #b91c1c; }
    .new-label { background: #dcfce7; color: #15803d; }

    .info-box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 12px 16px; font-size: 0.82rem; color: #1e40af; line-height: 1.6; }
    .info-box strong { color: #1d4ed8; }

    .perf-grid { display: flex; flex-direction: column; gap: 2px; margin-bottom: 16px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .perf-row { display: grid; grid-template-columns: 2fr 1fr 3fr; gap: 12px; padding: 10px 14px; font-size: 0.82rem; background: #fff; border-bottom: 1px solid #f1f5f9; align-items: center; }
    .perf-row:last-child { border-bottom: none; }
    .perf-row.perf-warn { background: #fff7ed; }
    .perf-label { font-weight: 700; color: #0f172a; }
    .perf-complexity { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #dc2626; }
    .perf-complexity.good { color: #16a34a; }
    .perf-note { color: #64748b; }
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

  // ── Modern API code snippets ─────────────────────────────────────────────
  readonly codeModernWhitespace = `// Java 11+ — Unicode-aware whitespace handling
String s = "  Hello  ";
s.strip();          // "Hello"  — handles Unicode spaces
s.stripLeading();   // "Hello  "
s.stripTrailing();  // "  Hello"
s.isBlank();        // false — empty or whitespace only
"  ".isBlank();     // true

// Legacy (avoid) — only handles ASCII spaces
s.trim();           // also "Hello", but misses Unicode spaces`;

  readonly codeModernTransform = `// Java 11 — lines() returns Stream<String>
String multiline = "line1\\nline2\\nline3";
long count = multiline.lines().count(); // 3
multiline.lines()
         .map(String::trim)
         .forEach(System.out::println);

// Java 11 — repeat()
"ab".repeat(3);    // "ababab"

// Java 12 — indent() adds/removes leading spaces
"hello".indent(4); // "    hello\\n"`;

  readonly codeModernFormat = `// Java 15+ — formatted() instance method
String msg = "User %s has %d items".formatted("Alice", 5);
// equivalent to String.format("User %s has %d items", "Alice", 5)

// Common format specifiers
"%d".formatted(42);        // "42"    — integer
"%.2f".formatted(3.14159); // "3.14"  — float with 2 decimals
"%s".formatted("hello");   // "hello" — string
"%10s".formatted("hi");    // "        hi" — right-padded`;

  readonly codeModernJoin = `// String.join() — static method
String.join(", ", "Alice", "Bob", "Carol"); // "Alice, Bob, Carol"
String.join("-", List.of("2026", "03", "06")); // "2026-03-06"

// Collectors.joining() — from a Stream
List<String> names = List.of("Alice", "Bob", "Carol");
names.stream()
     .collect(Collectors.joining(", ", "[", "]"));
// "[Alice, Bob, Carol]"

// StringJoiner — when building incrementally
StringJoiner sj = new StringJoiner(", ", "[", "]");
sj.add("Alice"); sj.add("Bob");
sj.toString(); // "[Alice, Bob]"`;

  // ── Text Blocks ──────────────────────────────────────────────────────────
  readonly codeTextBlockBefore = `// Before Java 15 — messy escape sequences
String json = "{\\n" +
    "  \\"name\\": \\"Alice\\",\\n" +
    "  \\"age\\": 30\\n" +
    "}";

String sql = "SELECT u.name, o.total\\n" +
    "FROM users u\\n" +
    "JOIN orders o ON u.id = o.user_id\\n" +
    "WHERE u.active = true";`;

  readonly codeTextBlockAfter = `// Java 15+ Text Blocks — clean and readable
String json = """
        {
          "name": "Alice",
          "age": 30
        }
        """;

String sql = """
        SELECT u.name, o.total
        FROM users u
        JOIN orders o ON u.id = o.user_id
        WHERE u.active = true
        """;
// The compiler strips the common leading indent automatically`;

  // ── Performance ──────────────────────────────────────────────────────────
  readonly perfRows = [
    { label: 'String + in loop (n iterations)', complexity: 'O(n²)', good: false, warn: true, note: 'Creates n intermediate objects — heap pressure' },
    { label: 'StringBuilder.append() in loop', complexity: 'O(n)', good: true, warn: false, note: 'Single mutable buffer — best for loops' },
    { label: 'String.join() / Collectors.joining()', complexity: 'O(n)', good: true, warn: false, note: 'Preferred for joining known collections' },
    { label: 'StringBuffer (thread-safe)', complexity: 'O(n)', good: true, warn: false, note: 'Like StringBuilder but synchronized — use only when shared across threads' },
  ];

  readonly codePerformance = `// BAD — O(n²) — creates a new String object on every iteration
String result = "";
for (String s : list) {
    result += s + ", ";  // each += allocates a new String!
}

// GOOD — O(n) — StringBuilder reuses its internal char[]
StringBuilder sb = new StringBuilder();
for (String s : list) {
    sb.append(s).append(", ");
}
String result = sb.toString();

// BEST for collections — Collectors.joining handles edge cases
String result = list.stream()
    .collect(Collectors.joining(", "));`;

  // ── Common Pitfalls ──────────────────────────────────────────────────────
  readonly pitfalls: Pitfall[] = [
    {
      title: 'Using == to compare String values',
      wrong: `String a = new String("hello");
String b = new String("hello");
if (a == b) {          // false! different objects
    System.out.println("equal");
}`,
      correct: `String a = new String("hello");
String b = new String("hello");
if (a.equals(b)) {     // true — compares values
    System.out.println("equal");
}
// Null-safe: Objects.equals(a, b)`,
      explanation: '== compares object references (memory addresses). Two String objects with identical content are still different objects unless both come from the String Pool. Always use .equals() for value comparison.'
    },
    {
      title: 'String concatenation inside a loop',
      wrong: `String result = "";
for (int i = 0; i < 1000; i++) {
    result += i + ",";
    // Creates 1000 intermediate String objects!
}`,
      correct: `StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i).append(",");
}
String result = sb.toString(); // O(n) — single object`,
      explanation: 'String concatenation with + inside a loop creates a new String object on every iteration due to immutability, resulting in O(n²) time complexity and excessive GC pressure.'
    },
    {
      title: 'Using trim() instead of strip() for Unicode',
      wrong: `String s = "\\u2003Hello\\u2003"; // Em-space (Unicode)
s.trim();    // Returns "\\u2003Hello\\u2003" — unchanged!
// trim() only removes ASCII control chars (\\u0000–\\u0020)`,
      correct: `String s = "\\u2003Hello\\u2003"; // Em-space (Unicode)
s.strip();   // Returns "Hello" — correct
// strip() uses Character.isWhitespace() — handles all Unicode spaces
// Use strip() in all new Java 11+ code`,
      explanation: 'String.trim() was written before Java had full Unicode support. It only strips characters with code point <= 32 (ASCII). String.strip() (Java 11+) correctly handles all Unicode whitespace characters.'
    }
  ];

  // ── Interview Tips ───────────────────────────────────────────────────────
  readonly interviewTips: InterviewTip[] = [
    {
      question: 'Why are Strings immutable in Java?',
      insight: 'Three reasons: (1) String Pool safety — if strings were mutable, two references to the same pool object could interfere. (2) Thread safety — immutable objects are inherently safe to share. (3) Security — class names loaded by ClassLoader are Strings; mutability would be a security risk.',
      difficulty: 'Easy'
    },
    {
      question: 'What is the difference between String, StringBuilder, and StringBuffer?',
      insight: 'String is immutable — every modification creates a new object. StringBuilder is mutable and fast but not thread-safe. StringBuffer is mutable and thread-safe (all methods are synchronized) but slower. Use String for literals, StringBuilder for single-threaded string building, StringBuffer only when shared across threads.',
      difficulty: 'Easy'
    },
    {
      question: 'What happens when you use new String("hello") vs "hello"?',
      insight: 'String literal "hello" is placed in the String Pool — all variables referencing it share one object. new String("hello") always creates a fresh object on the heap, bypassing the pool. You can intern it back with .intern(). This is why == fails between a pooled and a new String with the same value.',
      difficulty: 'Medium'
    },
    {
      question: 'How does String.intern() work, and when would you use it?',
      insight: 'intern() returns the canonical Pool representation of the string. If the string is already in the Pool, it returns that reference; otherwise it adds it and returns the Pool reference. Use case: deduplicating large numbers of dynamically-created strings that repeat frequently (e.g., parsing a large CSV where many cells repeat the same values) to reduce heap usage.',
      difficulty: 'Medium'
    },
    {
      question: 'What are Text Blocks and what problem do they solve?',
      insight: 'Text Blocks (Java 15+) use triple-quote delimiters to embed multiline content without escape sequences. They solve readability issues with embedded JSON, SQL, HTML, and XML. The compiler automatically strips the common leading whitespace indent. They are still String objects — just a syntactic convenience.',
      difficulty: 'Easy'
    }
  ];
}
