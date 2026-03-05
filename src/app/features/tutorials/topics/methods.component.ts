import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-methods',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Methods & Varargs"
      subtitle="Write reusable, well-structured code. Understand method anatomy, overloading, pass-by-value semantics, varargs, and recursion."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #312e81, #6366f1)">

      <!-- Section 1: Method Anatomy -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-indigo" /> Method Anatomy
        </h2>
        <div class="anatomy-diagram">
          @for (part of anatomyParts; track part.label) {
            <div class="anat-part" [class.anat-active]="hoveredPart() === part.label" (mouseenter)="hoveredPart.set(part.label)" (mouseleave)="hoveredPart.set('')">
              <span class="anat-token" [style.color]="part.color" [style.background]="part.color + '15'">{{ part.token }}</span>
            </div>
          }
        </div>
        @if (hoveredPart()) {
          <div class="anat-tooltip">
            @for (part of anatomyParts; track part.label) {
              @if (part.label === hoveredPart()) {
                <strong style="color: {{ part.color }}">{{ part.label }}:</strong> {{ part.desc }}
              }
            }
          </div>
        }
        <div class="prose" style="margin-top:20px">
          <p>A method groups related logic into a named, reusable block. Good names are verb-based: <code>calculateTotal()</code>, <code>findUserById()</code>.</p>
          <app-code-block [code]="codeAnatomy" />
        </div>
      </section>

      <!-- Section 2: Call Stack Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-indigo" /> Call Stack Visualizer
          </h3>
          <p class="viz-desc">Watch the call stack build up and unwind during a recursive <code>factorial(4)</code> call.</p>

          <div class="stack-demo">
            <div class="stack-col">
              <div class="stack-label">Call Stack</div>
              <div class="stack-frames">
                @for (frame of stackFrames(); track frame.id) {
                  <div class="stack-frame" [class.frame-active]="frame.active" [class.frame-returning]="frame.returning">
                    <span class="frame-name">{{ frame.name }}</span>
                    <span class="frame-val">{{ frame.value }}</span>
                  </div>
                }
                @if (stackFrames().length === 0) {
                  <div class="stack-empty">Stack is empty</div>
                }
              </div>
            </div>
            <div class="stack-result-col">
              <div class="stack-label">Result</div>
              <div class="result-display">{{ stackResult() }}</div>
            </div>
          </div>

          <div class="viz-status">{{ stackStatus() }}</div>

          <div class="viz-controls">
            <button (click)="nextStackStep()" [disabled]="stackDone() || isAnimating()" class="btn btn-indigo">
              <app-icon name="arrow-right" [size]="16" /> Next Step
            </button>
            <button (click)="autoRun()" [disabled]="stackDone() || isAnimating()" class="btn btn-gold">
              <app-icon name="play" [size]="16" /> Auto Run
            </button>
            <button (click)="resetStack()" class="btn btn-outline">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Method Overloading -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-indigo" /> Method Overloading
        </h2>
        <div class="prose">
          <p>
            Overloading allows multiple methods with the <strong>same name</strong> but different parameter types or counts.
            The compiler picks the right version at <strong>compile time</strong> (static dispatch).
          </p>
          <ul>
            <li>Return type alone does <strong>NOT</strong> differentiate overloads — it's a compile error.</li>
            <li>The compiler prefers the most specific match. It widens types before boxing.</li>
            <li>Overloading is different from overriding — overriding is runtime dispatch.</li>
          </ul>
          <app-code-block [code]="codeOverloading" />
        </div>
      </section>

      <!-- Section 4: Pass by Value -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Pass-by-Value (Always!)
        </h2>
        <div class="prose">
          <p>
            Java is <strong>always pass-by-value</strong>. This is one of the most misunderstood concepts.
          </p>
          <ul>
            <li><strong>Primitives</strong>: A <em>copy of the value</em> is passed. The original is unchanged.</li>
            <li><strong>Objects</strong>: A <em>copy of the reference</em> is passed. You can mutate the object via the reference, but you cannot make the caller's variable point to a different object.</li>
          </ul>
          <app-code-block [code]="codePassByValue" />
        </div>
      </section>

      <!-- Section 5: Varargs -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="arrow-right" [size]="28" css="icon-indigo" /> Varargs
        </h2>
        <div class="prose">
          <p>
            Varargs (<strong>variable-length arguments</strong>) allow a method to accept zero or more arguments of the same type.
            Internally, varargs are treated as an array.
          </p>
          <ul>
            <li>Declared as <code>Type... paramName</code> — the <code>...</code> is the varargs marker.</li>
            <li>Must be the <strong>last parameter</strong> in the method signature.</li>
            <li>Can pass individual values, an array, or nothing at all.</li>
            <li>Causes ambiguity when combined with method overloading — use carefully.</li>
          </ul>
          <app-code-block [code]="codeVarargs" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-indigo" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">"Java is Pass-by-Value" — Explain It</h4>
              <p class="tip-desc">A common interview question. Key distinction: for objects, you pass a copy of the reference. You can mutate the object's state through that reference, but reassigning the parameter doesn't affect the caller's variable.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Overloading vs Overriding</h4>
              <p class="tip-desc"><strong>Overloading</strong>: Same name, different signature, resolved at compile time (static binding). <strong>Overriding</strong>: Same name, same signature, resolved at runtime (dynamic binding via vtable).</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Recursion Stack Overflow</h4>
              <p class="tip-desc">Each recursive call adds a frame to the call stack. Deep recursion causes <code>StackOverflowError</code>. Java does NOT optimize tail recursion. For very deep recursion, use an iterative approach or an explicit stack.</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-indigo { color: #6366f1; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #e0e7ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4338ca;
    }

    /* Anatomy Diagram */
    .anatomy-diagram {
      display: flex; flex-wrap: wrap; align-items: center; gap: 4px;
      padding: 16px 20px; background: #1e1b4b; border-radius: 14px; margin-bottom: 12px;
    }
    .anat-part { cursor: pointer; }
    .anat-token {
      display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 700;
      padding: 4px 8px; border-radius: 6px; transition: all 0.2s;
    }
    .anat-part:hover .anat-token { transform: scale(1.1); }
    .anat-tooltip {
      background: #f0f0ff; border: 1px solid #c7d2fe; border-radius: 10px;
      padding: 12px 16px; font-size: 0.84rem; color: #52665A; line-height: 1.5; margin-bottom: 4px;
    }

    /* Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 20px; line-height: 1.6; }
    .viz-desc code {
      background: #e0e7ff; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4338ca;
    }

    .stack-demo { display: flex; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
    .stack-col { flex: 1; min-width: 180px; }
    .stack-label { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px; }
    .stack-frames { display: flex; flex-direction: column-reverse; gap: 6px; min-height: 120px; justify-content: flex-start; }
    .stack-frame {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 14px; border-radius: 10px; border: 1px solid #e0e7ff;
      background: #f0f4ff; transition: all 0.3s;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
    }
    .stack-frame.frame-active { background: #6366f1; border-color: #6366f1; color: #fff; }
    .stack-frame.frame-returning { background: #d1fae5; border-color: #6ee7b7; }
    .frame-name { font-weight: 700; }
    .frame-val { font-size: 0.72rem; opacity: 0.8; }
    .stack-empty { font-size: 0.8rem; color: #94a3b8; text-align: center; padding: 20px 0; }

    .stack-result-col { min-width: 100px; }
    .result-display {
      font-family: 'JetBrains Mono', monospace; font-size: 2rem; font-weight: 900;
      color: #6366f1; text-align: center; padding: 20px;
      background: #f0f4ff; border-radius: 14px; border: 1px solid #e0e7ff;
    }

    .viz-status {
      background: #f0f4ff; border: 1px solid #c7d2fe; border-radius: 12px;
      padding: 12px 16px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
      color: #4338ca; font-weight: 600; margin-bottom: 20px; text-align: center;
    }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-indigo { background: #6366f1; color: #fff; }
    .btn-indigo:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(99,102,241,0.3); }
    .btn-gold { background: #DAA520; color: #081C15; }
    .btn-gold:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(218,165,32,0.2); }
    .btn-outline { background: #fff; color: #52665A; border: 1px solid #D6DDD2; }
    .btn-outline:hover { background: #F5F7F2; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card {
      display: flex; gap: 16px; padding: 20px 24px;
      border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s;
    }
    .tip-card:hover { border-color: #c7d2fe; box-shadow: 0 4px 12px rgba(99,102,241,0.06); }
    .tip-num {
      width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: #6366f1; color: #fff; font-size: 0.85rem; font-weight: 800;
    }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code {
      background: #e0e7ff; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #4338ca;
    }
  `
})
export class MethodsComponent {
  hoveredPart = signal('');

  anatomyParts = [
    { label: 'Access Modifier', token: 'public',          color: '#6366f1', desc: 'Controls visibility. public = accessible from anywhere, private = only within this class, protected = this class + subclasses.' },
    { label: 'Return Type',     token: 'int',              color: '#0891b2', desc: 'The type of value returned. Use void if the method returns nothing.' },
    { label: 'Method Name',     token: 'add',              color: '#059669', desc: 'Identifier for the method. By convention: camelCase verb-noun like calculateTotal, findUserById.' },
    { label: 'Parameters',      token: '(int a, int b)',   color: '#d97706', desc: 'Typed input values the caller provides. Multiple params are comma-separated. Empty () if no inputs needed.' },
    { label: 'Body',            token: '{ return a+b; }',  color: '#dc2626', desc: 'The code block that executes. The return statement provides the value sent back to the caller.' },
  ];

  // Call Stack Visualizer
  private steps = [
    { action: 'push', frame: { id: 1, name: 'factorial(4)', value: 'n=4', active: true, returning: false } },
    { action: 'push', frame: { id: 2, name: 'factorial(3)', value: 'n=3', active: true, returning: false } },
    { action: 'push', frame: { id: 3, name: 'factorial(2)', value: 'n=2', active: true, returning: false } },
    { action: 'push', frame: { id: 4, name: 'factorial(1)', value: 'n=1 → base case', active: true, returning: false } },
    { action: 'return', result: '1',  msg: 'Base case: factorial(1) = 1' },
    { action: 'return', result: '2',  msg: 'factorial(2) = 2 * 1 = 2' },
    { action: 'return', result: '6',  msg: 'factorial(3) = 3 * 2 = 6' },
    { action: 'return', result: '24', msg: 'factorial(4) = 4 * 6 = 24 ✓' },
  ];

  stackFrames = signal<{id:number, name:string, value:string, active:boolean, returning:boolean}[]>([]);
  stackResult = signal('?');
  stackStatus = signal('Press "Next Step" to watch factorial(4) build up its call stack.');
  stackDone = signal(false);
  isAnimating = signal(false);
  private stepIdx = 0;

  nextStackStep() {
    if (this.stepIdx >= this.steps.length) { this.stackDone.set(true); return; }
    const step = this.steps[this.stepIdx++];
    if (step.action === 'push') {
      this.stackFrames.update(frames => {
        const updated = frames.map(f => ({ ...f, active: false }));
        return [...updated, step.frame!];
      });
      this.stackStatus.set(`Calling ${step.frame!.name} — new frame pushed onto the stack`);
    } else {
      const result = (step as any).result;
      this.stackResult.set(result);
      this.stackFrames.update(frames => {
        const updated = [...frames];
        if (updated.length > 0) {
          updated[updated.length - 1] = { ...updated[updated.length - 1], returning: true };
          setTimeout(() => this.stackFrames.update(f => f.slice(0, -1)), 400);
        }
        return updated;
      });
      this.stackStatus.set((step as any).msg);
      if (this.stepIdx >= this.steps.length) {
        setTimeout(() => { this.stackDone.set(true); }, 600);
      }
    }
  }

  async autoRun() {
    if (this.isAnimating() || this.stackDone()) return;
    this.isAnimating.set(true);
    while (this.stepIdx < this.steps.length) {
      this.nextStackStep();
      await new Promise(r => setTimeout(r, 800));
    }
    this.isAnimating.set(false);
  }

  resetStack() {
    this.stackFrames.set([]);
    this.stackResult.set('?');
    this.stackStatus.set('Press "Next Step" to watch factorial(4) build up its call stack.');
    this.stackDone.set(false);
    this.isAnimating.set(false);
    this.stepIdx = 0;
  }

  codeAnatomy = `// Full method signature
public int add(int a, int b) {
    return a + b;
}

// void — returns nothing
private void printSeparator(int count) {
    for (int i = 0; i < count; i++) System.out.print("-");
    System.out.println();
}

// Multiple returns (early return pattern)
public String classify(int n) {
    if (n < 0) return "negative";  // guard
    if (n == 0) return "zero";     // guard
    return "positive";             // main case
}`;

  codeOverloading = `// Same name, different signatures
int    add(int a, int b)           { return a + b; }
double add(double a, double b)     { return a + b; }
int    add(int a, int b, int c)    { return a + b + c; }
String add(String a, String b)     { return a + b; }

// Compiler picks the best match at compile time
add(1, 2);          // → int add(int, int)
add(1.5, 2.5);      // → double add(double, double)
add(1, 2, 3);       // → int add(int, int, int)

// ❌ This is NOT valid overloading — same params, different return type
// String add(int a, int b) { return "" + (a+b); } // compile error`;

  codePassByValue = `// Primitive — original unchanged
void increment(int x) {
    x++;                        // changes local copy only
}
int n = 5;
increment(n);
System.out.println(n);          // still 5

// Object reference — can mutate the object
void rename(StringBuilder sb) {
    sb.append(" World");        // mutates the object at the address
}
StringBuilder sb = new StringBuilder("Hello");
rename(sb);
System.out.println(sb);         // "Hello World" — object was mutated

// Object reference — cannot reassign the caller's variable
void replace(StringBuilder sb) {
    sb = new StringBuilder("New");  // changes local copy of reference
}
StringBuilder s = new StringBuilder("Old");
replace(s);
System.out.println(s);          // still "Old" — caller's ref unchanged`;

  codeVarargs = `// varargs — Type... name (must be last parameter)
void log(String level, String... messages) {
    for (String msg : messages) {
        System.out.println("[" + level + "] " + msg);
    }
}

log("INFO");                           // zero messages — valid
log("INFO", "Server started");         // one message
log("WARN", "Disk low", "CPU high");  // two messages

// Passing an array directly is also valid
String[] errors = {"DB error", "Timeout"};
log("ERROR", errors);

// Recursion example
int factorial(int n) {
    if (n <= 1) return 1;           // base case
    return n * factorial(n - 1);   // recursive case
}
// factorial(4) = 4 * factorial(3)
//              = 4 * 3 * factorial(2)
//              = 4 * 3 * 2 * factorial(1)
//              = 4 * 3 * 2 * 1 = 24`;
}
