import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-control-flow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Control Flow"
      subtitle="Direct the execution path of your program. Master if-else, classic switch, and modern switch expressions introduced in Java 14."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7f1d1d, #dc2626)">

      <!-- Section 1: if / else -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-red" /> if / else if / else
        </h2>
        <div class="prose">
          <p>
            The <code>if</code> statement evaluates a <strong>boolean expression</strong> and executes the block if it's <code>true</code>.
            Java does not accept non-boolean conditions (unlike C) — <code>if (1)</code> is a compile error.
          </p>
          <ul>
            <li><strong>Guard clauses</strong>: Return early for invalid states to reduce nesting.</li>
            <li><strong>Dangling else</strong>: An <code>else</code> always belongs to the nearest preceding <code>if</code>.</li>
            <li><strong>Single-line if</strong>: Braces are optional for one statement, but recommended for clarity.</li>
          </ul>
          <app-code-block [code]="codeIfElse" />
        </div>
      </section>

      <!-- Section 2: Interactive Flow Tracer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-red" /> if-else Flow Tracer
          </h3>
          <p class="viz-desc">Enter a score (0–100) to trace which branch executes in a grade-assignment chain.</p>

          <div class="tracer-input">
            <label class="tracer-label">Score</label>
            <input type="range" min="0" max="100" [value]="score()" (input)="setScore($event)" class="score-slider" />
            <span class="score-display">{{ score() }}</span>
          </div>

          <div class="flow-steps">
            @for (step of flowSteps; track step.id) {
              <div class="flow-step" [class.step-active]="step.id === activeStep()" [class.step-passed]="step.id < activeStep()" [class.step-skipped]="step.id > activeStep() && activeStep() !== -1">
                <div class="step-connector" [class.conn-active]="step.id < activeStep()"></div>
                <div class="step-node" [class.node-active]="step.id === activeStep()" [class.node-passed]="step.id < activeStep()">
                  @if (step.id < activeStep()) { <span>✓</span> }
                  @else { <span>{{ step.id + 1 }}</span> }
                </div>
                <div class="step-body">
                  <div class="step-condition" [style.color]="step.id === activeStep() ? '#dc2626' : ''">{{ step.condition }}</div>
                  @if (step.id === activeStep()) {
                    <div class="step-result">→ {{ step.result }}</div>
                  }
                </div>
              </div>
            }
          </div>

          <div class="tracer-output">
            Grade assigned: <strong>{{ gradeResult() }}</strong>
          </div>
        </div>
      </section>

      <!-- Section 3: Classic Switch -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-red" /> Classic switch Statement
        </h2>
        <div class="prose">
          <p>The classic <code>switch</code> works with <code>int</code>, <code>char</code>, <code>String</code>, and <code>enum</code> values.</p>
          <ul>
            <li><strong>break is mandatory</strong> — without it, execution falls through to the next case.</li>
            <li><strong>Fall-through</strong> can be intentional (grouping cases) but is a common source of bugs.</li>
            <li><strong>default</strong> is optional but always recommended as a safety net.</li>
            <li>Does <strong>not</strong> work with: <code>long</code>, <code>float</code>, <code>double</code>, <code>boolean</code>.</li>
          </ul>
          <app-code-block [code]="codeSwitch" />
        </div>
      </section>

      <!-- Section 4: Switch Expression -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-red" /> Switch Expression (Java 14+)
        </h2>
        <div class="prose">
          <p>
            Switch expressions evaluate to a <strong>value</strong> and can be assigned directly. Arrow-case syntax eliminates fall-through entirely.
          </p>
          <ul>
            <li><strong>Arrow case</strong> <code>-&gt;</code>: No fall-through, no <code>break</code> needed.</li>
            <li><strong>Multiple labels</strong>: <code>case MON, TUE, WED -&gt;</code> in a single case.</li>
            <li><strong><code>yield</code></strong>: Return a value from a multi-statement block case.</li>
            <li><strong>Exhaustiveness</strong>: When assigned to a variable, all cases must be covered (or a <code>default</code> must exist).</li>
          </ul>
          <app-code-block [code]="codeSwitchExpr" />
        </div>

        <div class="compare-grid">
          <div class="compare-card old">
            <div class="compare-badge">Classic Statement</div>
            <ul class="compare-list">
              <li>Can fall through — needs <code>break</code></li>
              <li>Cannot be used as expression</li>
              <li>Verbose for simple assignments</li>
              <li>Available since Java 1.0</li>
            </ul>
          </div>
          <div class="compare-card new">
            <div class="compare-badge">Modern Expression</div>
            <ul class="compare-list">
              <li>No fall-through by default</li>
              <li>Evaluates to a value</li>
              <li>Concise, readable</li>
              <li>Java 14+ (stable)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-red" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">switch vs if-else: When to Use Which</h4>
              <p class="tip-desc">Use <code>switch</code> for <strong>discrete values</strong> (day of week, status codes). Use <code>if-else</code> for <strong>ranges</strong> (score &gt;= 90) or complex boolean conditions.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Guard Clauses Reduce Nesting</h4>
              <p class="tip-desc">Instead of deep <code>if (valid) { if (ready) { ... } }</code> nesting, return early: <code>if (!valid) return; if (!ready) return; // main logic</code>. Easier to read and test.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Switch Expression with Sealed Types is Exhaustive</h4>
              <p class="tip-desc">When switching over a sealed interface, the compiler verifies all permitted subtypes are handled — no <code>default</code> needed, and no missing case bugs.</p>
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
    .icon-red { color: #dc2626; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #fee2e2; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #b91c1c;
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

    .tracer-input {
      display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
    }
    .tracer-label { font-size: 0.78rem; font-weight: 700; color: #64748b; white-space: nowrap; }
    .score-slider { flex: 1; accent-color: #dc2626; }
    .score-display {
      font-family: 'JetBrains Mono', monospace; font-size: 1.4rem; font-weight: 900;
      color: #dc2626; min-width: 44px; text-align: center;
    }

    .flow-steps { display: flex; flex-direction: column; gap: 0; margin-bottom: 20px; }
    .flow-step { display: flex; align-items: flex-start; gap: 12px; position: relative; }
    .step-connector {
      position: absolute; left: 15px; top: 32px; bottom: -8px; width: 2px;
      background: #e2e8f0; z-index: 0;
    }
    .step-connector.conn-active { background: #dc2626; }
    .step-node {
      width: 32px; height: 32px; min-width: 32px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: #f1f5f9; border: 2px solid #e2e8f0;
      font-size: 0.75rem; font-weight: 800; color: #94a3b8;
      position: relative; z-index: 1; transition: all 0.3s;
    }
    .step-node.node-active { background: #dc2626; border-color: #dc2626; color: #fff; }
    .step-node.node-passed { background: #16a34a; border-color: #16a34a; color: #fff; }
    .step-body { padding: 6px 0 20px; }
    .step-condition { font-size: 0.82rem; color: #475569; font-family: 'JetBrains Mono', monospace; }
    .step-result { font-size: 0.8rem; color: #dc2626; font-weight: 700; margin-top: 4px; }

    .tracer-output {
      background: #fff5f5; border: 1px solid #fca5a5; border-radius: 12px;
      padding: 14px 20px; font-size: 0.88rem; color: #52665A;
    }
    .tracer-output strong { color: #dc2626; font-size: 1.1rem; }

    /* Compare Grid */
    .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 20px; }
    .compare-card {
      border-radius: 16px; border: 1px solid; padding: 18px 20px;
    }
    .compare-card.old { border-color: #fca5a5; background: #fff5f5; }
    .compare-card.new { border-color: #86efac; background: #f0fdf4; }
    .compare-badge {
      font-size: 0.68rem; font-weight: 800; text-transform: uppercase;
      letter-spacing: 0.08em; margin-bottom: 12px;
    }
    .compare-card.old .compare-badge { color: #dc2626; }
    .compare-card.new .compare-badge { color: #16a34a; }
    .compare-list { margin: 0; padding-left: 18px; font-size: 0.8rem; color: #52665A; line-height: 1.9; }
    .compare-list code {
      background: #f1f5f9; padding: 1px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.72rem;
    }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card {
      display: flex; gap: 16px; padding: 20px 24px;
      border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s;
    }
    .tip-card:hover { border-color: #fca5a5; box-shadow: 0 4px 12px rgba(220,38,38,0.06); }
    .tip-num {
      width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: #dc2626; color: #fff; font-size: 0.85rem; font-weight: 800;
    }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code {
      background: #fee2e2; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #b91c1c;
    }
  `
})
export class ControlFlowComponent {
  score = signal(73);

  setScore(event: Event) {
    this.score.set(parseInt((event.target as HTMLInputElement).value, 10));
  }

  get flowSteps() {
    const s = this.score();
    return [
      { id: 0, condition: `if (score >= 90)`, result: 'Grade = A' },
      { id: 1, condition: `else if (score >= 80)`, result: 'Grade = B' },
      { id: 2, condition: `else if (score >= 70)`, result: 'Grade = C' },
      { id: 3, condition: `else if (score >= 60)`, result: 'Grade = D' },
      { id: 4, condition: `else`, result: 'Grade = F' },
    ];
  }

  activeStep(): number {
    const s = this.score();
    if (s >= 90) return 0;
    if (s >= 80) return 1;
    if (s >= 70) return 2;
    if (s >= 60) return 3;
    return 4;
  }

  gradeResult(): string {
    const s = this.score();
    if (s >= 90) return 'A';
    if (s >= 80) return 'B';
    if (s >= 70) return 'C';
    if (s >= 60) return 'D';
    return 'F';
  }

  codeIfElse = `int score = 73;

// Basic if-else chain
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}

// Guard clause pattern — prefer over deep nesting
void processOrder(Order order) {
    if (order == null)      return;  // guard
    if (!order.isValid())   return;  // guard
    if (!order.isPaid())    return;  // guard

    // main logic here — no nesting needed
    shipOrder(order);
}`;

  codeSwitch = `String day = "MONDAY";

// Classic switch — break is mandatory to prevent fall-through
switch (day) {
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "FRIDAY":
        System.out.println("Weekday");
        break;                     // ← must not forget this!
    case "SATURDAY":
    case "SUNDAY":
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Unknown day");
}

// Intentional fall-through (comment it!)
switch (level) {
    case 3: System.out.println("Level 3 bonus"); // falls through
    case 2: System.out.println("Level 2 bonus"); // falls through
    case 1: System.out.println("Level 1 bonus"); break;
}`;

  codeSwitchExpr = `// Switch expression — arrow case, no fall-through, no break
String day = "MONDAY";

String type = switch (day) {
    case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Weekday";
    case "SATURDAY", "SUNDAY"                                    -> "Weekend";
    default -> throw new IllegalArgumentException("Unknown: " + day);
};

// yield — return value from a block case
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY"                    -> 7;
    default -> {
        System.out.println("Computing length of: " + day);
        yield day.length(); // yield provides the value
    }
};

// Switch as argument
System.out.println("Type: " + switch (day) {
    case "SATURDAY", "SUNDAY" -> "Weekend";
    default -> "Weekday";
});`;
}
