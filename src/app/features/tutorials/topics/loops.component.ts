import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-loops',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Loops & Iteration"
      subtitle="Repeat, iterate, and control — master all loop forms in Java and know exactly when to use each one."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #064e3b, #10b981)">

      <!-- Section 1: for Loop -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-green" /> The for Loop
        </h2>
        <div class="prose">
          <p>The <code>for</code> loop is best when you know the <strong>exact number of iterations</strong> upfront. Its three parts — init, condition, update — are all in one line.</p>
          <ul>
            <li><strong>Init</strong>: Runs once before the loop starts. Declares the loop variable.</li>
            <li><strong>Condition</strong>: Checked before each iteration. Loop exits when <code>false</code>.</li>
            <li><strong>Update</strong>: Runs after each iteration body. Usually increments/decrements.</li>
          </ul>
          <app-code-block [code]="codeFor" />
        </div>
      </section>

      <!-- Section 2: Interactive Loop Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-green" /> Loop Step Visualizer
          </h3>
          <p class="viz-desc">Step through a <code>for</code> loop summing array elements. Watch the index advance and the sum accumulate.</p>

          <div class="viz-array">
            @for (val of loopArray; track $index; let i = $index) {
              <div class="viz-cell">
                <span class="viz-idx">idx:{{ i }}</span>
                <div class="viz-box" [class.viz-active]="i === currentIdx() && !loopDone()" [class.viz-processed]="i < currentIdx() || loopDone()">
                  {{ val }}
                </div>
              </div>
            }
          </div>

          <div class="loop-state">
            <div class="state-item">
              <span class="state-label">i</span>
              <span class="state-val">{{ currentIdx() >= loopArray.length ? loopArray.length : currentIdx() }}</span>
            </div>
            <div class="state-item">
              <span class="state-label">sum</span>
              <span class="state-val green">{{ runningSum() }}</span>
            </div>
            <div class="state-item">
              <span class="state-label">condition</span>
              <span class="state-val" [class.cond-true]="!loopDone()" [class.cond-false]="loopDone()">
                {{ loopDone() ? 'i < 5 → false' : 'i < 5 → true' }}
              </span>
            </div>
          </div>

          <div class="viz-status">{{ loopStatus() }}</div>

          <div class="viz-controls">
            <button (click)="stepLoop()" [disabled]="loopDone()" class="btn btn-green">
              <app-icon name="arrow-right" [size]="16" /> Step (i++)
            </button>
            <button (click)="runLoop()" [disabled]="loopDone() || isAnimating()" class="btn btn-gold">
              <app-icon name="play" [size]="16" /> Run All
            </button>
            <button (click)="resetLoop()" class="btn btn-outline">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: while & do-while -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-green" /> while & do-while
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title">while Loop</h3>
            <p class="op-desc">Condition is checked <strong>before</strong> each iteration. The body may execute <strong>zero times</strong> if the condition starts false. Best for: "repeat while unknown condition holds."</p>
            <app-code-block [code]="codeWhile" />
          </div>
          <div class="op-card">
            <h3 class="op-title">do-while Loop</h3>
            <p class="op-desc">Condition is checked <strong>after</strong> each iteration. The body always executes <strong>at least once</strong>. Best for: menu prompts, input validation — where you need at least one attempt.</p>
            <app-code-block [code]="codeDoWhile" />
          </div>
        </div>
      </section>

      <!-- Section 4: Enhanced for-each -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="list" [size]="28" css="icon-green" /> Enhanced for-each Loop
        </h2>
        <div class="prose">
          <p>
            The enhanced <code>for</code> loop works on any array or <code>Iterable</code> (List, Set, etc.).
            It's cleaner when you don't need the index.
          </p>
          <ul>
            <li><strong>Cannot modify the index</strong> — no <code>i++</code> skip.</li>
            <li><strong>Cannot remove elements</strong> safely — use <code>Iterator.remove()</code> or <code>removeIf()</code> instead.</li>
            <li><strong>Cannot iterate in reverse</strong> — use a classic <code>for</code> with <code>i--</code>.</li>
          </ul>
          <app-code-block [code]="codeForEach" />
        </div>
      </section>

      <!-- Section 5: break, continue & Labeled Loops -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="arrow-right" [size]="28" css="icon-green" /> break, continue & Labeled Loops
        </h2>
        <div class="prose">
          <p>
            <code>break</code> exits the current loop entirely. <code>continue</code> skips the rest of the current iteration and moves to the next.
            Labels let you target an outer loop from an inner one.
          </p>
          <app-code-block [code]="codeBreakContinue" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-green" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Choosing the Right Loop</h4>
              <p class="tip-desc">Use <code>for</code> when count is known, <code>while</code> when count depends on a condition, <code>do-while</code> when at least one execution is needed, <code>for-each</code> when iterating a collection without needing the index.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">ConcurrentModificationException with for-each</h4>
              <p class="tip-desc">Never call <code>list.remove()</code> inside a <code>for-each</code>. Use <code>list.removeIf(predicate)</code> or iterate with an explicit <code>Iterator</code> and call <code>iterator.remove()</code>.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Infinite Loops Are Sometimes Intentional</h4>
              <p class="tip-desc"><code>while (true) &#123; ... break; &#125;</code> and <code>for (;;) &#123; ... &#125;</code> are valid patterns for servers, event loops, and game loops — as long as there's a clear exit condition.</p>
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
    .icon-green { color: #059669; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #d1fae5; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #065f46;
    }

    /* Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px;
    }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 20px; line-height: 1.6; }
    .viz-desc code {
      background: #d1fae5; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #065f46;
    }

    .viz-array {
      display: flex; justify-content: center; gap: 10px;
      margin-bottom: 20px; flex-wrap: wrap;
    }
    .viz-cell { display: flex; flex-direction: column; align-items: center; }
    .viz-idx { font-size: 0.6rem; color: #8A9B8F; margin-bottom: 4px; font-family: 'JetBrains Mono', monospace; font-weight: 600; }
    .viz-box {
      width: 52px; height: 52px; display: flex; align-items: center; justify-content: center;
      border-radius: 14px; font-size: 1.1rem; font-weight: 800;
      background: #f1f5f9; color: #64748b; border: 2px solid #e2e8f0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .viz-box.viz-active { background: #059669; color: #fff; border-color: #059669; transform: scale(1.12); box-shadow: 0 4px 12px rgba(5,150,105,0.3); }
    .viz-box.viz-processed { background: #d1fae5; color: #065f46; border-color: #6ee7b7; }

    .loop-state {
      display: flex; gap: 12px; justify-content: center;
      flex-wrap: wrap; margin-bottom: 16px;
    }
    .state-item {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 16px;
    }
    .state-label { font-size: 0.65rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; }
    .state-val { font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 900; color: #1B1B1B; }
    .state-val.green { color: #059669; }
    .state-val.cond-true { color: #059669; font-size: 0.78rem; }
    .state-val.cond-false { color: #dc2626; font-size: 0.78rem; }

    .viz-status {
      background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px;
      padding: 12px 16px; text-align: center;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
      color: #065f46; font-weight: 600; margin-bottom: 20px;
    }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-green { background: #059669; color: #fff; }
    .btn-green:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(5,150,105,0.3); }
    .btn-gold { background: #DAA520; color: #081C15; }
    .btn-gold:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(218,165,32,0.2); }
    .btn-outline { background: #fff; color: #52665A; border: 1px solid #D6DDD2; }
    .btn-outline:hover { background: #F5F7F2; }

    /* Op Grid */
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card {
      background: #fff; padding: 20px; border-radius: 16px; border: 1px solid #D6DDD2; transition: all 0.2s;
    }
    .op-card:hover { border-color: #6ee7b7; box-shadow: 0 4px 12px rgba(5,150,105,0.06); }
    .op-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .op-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0 0 12px; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card {
      display: flex; gap: 16px; padding: 20px 24px;
      border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s;
    }
    .tip-card:hover { border-color: #6ee7b7; box-shadow: 0 4px 12px rgba(5,150,105,0.06); }
    .tip-num {
      width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: #059669; color: #fff; font-size: 0.85rem; font-weight: 800;
    }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code {
      background: #d1fae5; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #065f46;
    }
  `
})
export class LoopsComponent {
  loopArray = [10, 25, 8, 42, 3];
  currentIdx = signal(0);
  runningSum = signal(0);
  loopDone = signal(false);
  isAnimating = signal(false);
  loopStatus = signal('Click "Step" to advance the loop one iteration at a time.');

  stepLoop() {
    const i = this.currentIdx();
    if (i >= this.loopArray.length) { this.loopDone.set(true); return; }
    const val = this.loopArray[i];
    this.runningSum.update(s => s + val);
    this.loopStatus.set(`Iteration ${i + 1}: sum += ${val} → sum = ${this.runningSum()}`);
    this.currentIdx.update(v => v + 1);
    if (this.currentIdx() >= this.loopArray.length) {
      this.loopDone.set(true);
      this.loopStatus.set(`Loop complete! Final sum = ${this.runningSum()}`);
    }
  }

  async runLoop() {
    if (this.isAnimating() || this.loopDone()) return;
    this.isAnimating.set(true);
    while (!this.loopDone()) {
      this.stepLoop();
      await new Promise(r => setTimeout(r, 700));
    }
    this.isAnimating.set(false);
  }

  resetLoop() {
    this.currentIdx.set(0);
    this.runningSum.set(0);
    this.loopDone.set(false);
    this.isAnimating.set(false);
    this.loopStatus.set('Click "Step" to advance the loop one iteration at a time.');
  }

  codeFor = `// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// Counting down
for (int i = 10; i >= 0; i--) {
    System.out.println(i);
}

// Multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i=" + i + " j=" + j);
}

// Infinite loop (needs a break inside)
for (;;) {
    if (doneCondition) break;
}`;

  codeWhile = `// while — condition first
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Reading until sentinel
int n;
while ((n = readInt()) != -1) {
    process(n);
}`;

  codeDoWhile = `// do-while — body executes at least once
int choice;
do {
    System.out.println("1. Start");
    System.out.println("2. Quit");
    choice = scanner.nextInt();
} while (choice != 2);

// Input validation
int age;
do {
    System.out.print("Enter age (1-120): ");
    age = scanner.nextInt();
} while (age < 1 || age > 120);`;

  codeForEach = `// Array for-each
int[] scores = {95, 87, 72, 88, 91};
int sum = 0;
for (int score : scores) {
    sum += score;
}

// Collection for-each
List<String> names = List.of("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println("Hello, " + name);
}

// ❌ Wrong — ConcurrentModificationException!
for (String name : names) {
    if (name.startsWith("A")) names.remove(name); // throws!
}

// ✅ Correct — use removeIf
names.removeIf(name -> name.startsWith("A"));`;

  codeBreakContinue = `// break — exit loop immediately
for (int i = 0; i < 10; i++) {
    if (i == 5) break; // stops at 5
    System.out.print(i + " "); // 0 1 2 3 4
}

// continue — skip to next iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // skip evens
    System.out.print(i + " "); // 1 3 5 7 9
}

// Labeled break — exit outer loop from inner
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer; // exits both loops
        System.out.print(i + "" + j + " ");
    }
}
// Output: 00 01 02 10`;
}
