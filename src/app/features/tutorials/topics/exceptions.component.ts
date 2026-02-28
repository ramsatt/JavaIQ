import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-exceptions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Exception Handling"
      subtitle="Gracefully handle errors. Master try-catch-finally, custom exceptions, and the checked vs unchecked hierarchy."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #be123c, #fb7185)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-rose" /> What is Exception Handling?
        </h2>
        <div class="prose">
          <p>
            An <strong>exception</strong> is an event that disrupts the normal flow of a program. Java's exception handling mechanism uses <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code> to handle errors gracefully.
          </p>
          <ul>
            <li><strong>Checked Exceptions:</strong> Must be handled at compile time (e.g., <code>IOException</code>, <code>SQLException</code>).</li>
            <li><strong>Unchecked Exceptions:</strong> Runtime errors (e.g., <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>).</li>
            <li><strong>Errors:</strong> Serious problems not meant to be caught (e.g., <code>OutOfMemoryError</code>).</li>
          </ul>
          <h4 class="sub-heading">Exception Hierarchy</h4>
          <app-code-block [code]="codeHierarchy" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-rose" /> Try-Catch Flow Visualizer
          </h3>

          <div class="flow-demo">
            <div class="flow-steps">
              @for (step of flowSteps(); track step.id) {
                <div class="flow-step" [class]="step.state">
                  <span class="step-num">{{ step.id }}</span>
                  <span class="step-code">{{ step.code }}</span>
                  <span class="step-label">{{ step.label }}</span>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="runHappyPath()" [disabled]="isAnimating()" class="btn btn-emerald">
              <app-icon name="check-circle" [size]="16" /> Run: No Exception
            </button>
            <button (click)="runExceptionPath()" [disabled]="isAnimating()" class="btn btn-rose">
              <app-icon name="alert-triangle" [size]="16" /> Run: Throw Exception
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Exception Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Try-Catch-Finally</h3>
            <p class="op-desc">The fundamental error handling block. Finally always executes.</p>
            <app-code-block [code]="codeTryCatch" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Multi-Catch & Rethrow</h3>
            <p class="op-desc">Catch multiple exceptions or wrap and rethrow.</p>
            <app-code-block [code]="codeMultiCatch" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Custom Exceptions</h3>
            <p class="op-desc">Create domain-specific exceptions for clear error communication.</p>
            <app-code-block [code]="codeCustom" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Try-with-Resources</h3>
            <p class="op-desc">Automatic resource cleanup for streams, connections, etc.</p>
            <app-code-block [code]="codeTryWith" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-rose" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case rose">
            <div class="use-num rose-bg">1</div>
            <div>
              <h4 class="use-title">REST API Error Responses</h4>
              <p class="use-desc">Spring's <code>&#64;ExceptionHandler</code> catches exceptions globally in <code>&#64;ControllerAdvice</code> and maps them to proper HTTP status codes (404, 500, etc.).</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Database Transaction Rollback</h4>
              <p class="use-desc">When an exception occurs mid-transaction, the catch block calls <code>connection.rollback()</code> to prevent partial data corruption.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Circuit Breaker Pattern</h4>
              <p class="use-desc">Microservices catch repeated <code>TimeoutException</code>s and trip a circuit breaker to prevent cascading failures across services.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-rose { color: #e11d48; }
    .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #e11d48; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .flow-demo { margin-bottom: 20px; }
    .flow-steps { display: flex; flex-direction: column; gap: 6px; }
    .flow-step { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; background: #fff; transition: all 0.4s; }
    .flow-step.active { border-color: #fbbf24; background: #fffbeb; transform: scale(1.02); }
    .flow-step.success { border-color: #22c55e; background: #f0fdf4; }
    .flow-step.error { border-color: #ef4444; background: #fef2f2; }
    .flow-step.skipped { opacity: 0.35; }
    .flow-step.always { border-color: #3b82f6; background: #eff6ff; }
    .step-num { width: 24px; height: 24px; min-width: 24px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: 800; color: #475569; }
    .step-code { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #0f172a; font-weight: 600; }
    .step-label { font-size: 0.6rem; color: #94a3b8; font-weight: 500; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-emerald { background: #059669; color: #fff; }
    .btn-emerald:hover:not(:disabled) { background: #047857; }
    .btn-rose { background: #e11d48; color: #fff; }
    .btn-rose:hover:not(:disabled) { background: #be123c; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.rose { background: #fff1f2; border-color: #fecdd3; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .rose-bg { background: #e11d48; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class ExceptionsComponent {
  private defaultSteps = (): FlowStep[] => [
    { id: 1, code: 'try {', label: 'enter try block', state: '' },
    { id: 2, code: '  int result = 10 / divisor;', label: 'risky operation', state: '' },
    { id: 3, code: '  System.out.println(result);', label: 'print result', state: '' },
    { id: 4, code: '} catch (ArithmeticException e) {', label: 'catch block', state: '' },
    { id: 5, code: '  System.out.println("Error!");', label: 'handle error', state: '' },
    { id: 6, code: '} finally {', label: 'finally block', state: '' },
    { id: 7, code: '  cleanup();', label: 'always runs', state: '' },
  ];
  flowSteps = signal<FlowStep[]>(this.defaultSteps());
  status = signal('Choose a scenario to see how try-catch-finally flows.');
  isAnimating = signal(false);

  codeHierarchy = `java.lang.Object
 └─ Throwable
     ├─ Error (don't catch these!)
     │   ├─ OutOfMemoryError
     │   └─ StackOverflowError
     └─ Exception
         ├─ IOException (checked)
         ├─ SQLException (checked)
         └─ RuntimeException (unchecked)
             ├─ NullPointerException
             ├─ ArithmeticException
             └─ IndexOutOfBoundsException`;

  codeTryCatch = `try {
    int result = 10 / 0; // throws!
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
    System.out.println(e.getMessage());
} finally {
    System.out.println("Cleanup done");
    // ALWAYS executes
}`;

  codeMultiCatch = `try {
    riskyOperation();
} catch (IOException | SQLException e) {
    // Handle multiple types
    log.error("I/O or DB error", e);
} catch (Exception e) {
    // Wrap and rethrow
    throw new ServiceException("Failed", e);
}`;

  codeCustom = `public class InsufficientFundsException
    extends RuntimeException {

    private final double balance;
    private final double amount;

    public InsufficientFundsException(
        double balance, double amount) {
        super("Balance: " + balance +
              ", Requested: " + amount);
        this.balance = balance;
        this.amount = amount;
    }
}`;

  codeTryWith = `// Auto-closes resources!
try (var br = new BufferedReader(
        new FileReader("data.txt"));
     var bw = new BufferedWriter(
        new FileWriter("out.txt"))) {

    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
    }
} // br and bw are auto-closed here`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  private updateStep(id: number, state: string) {
    this.flowSteps.update(steps =>
      steps.map(s => s.id === id ? { ...s, state } : s)
    );
  }

  async runHappyPath() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.flowSteps.set(this.defaultSteps());

    this.updateStep(1, 'active');
    this.status.set('Entering try block (divisor = 2)...');
    await this.sleep(800);

    this.updateStep(1, 'success');
    this.updateStep(2, 'active');
    this.status.set('10 / 2 = 5 — no exception!');
    await this.sleep(800);

    this.updateStep(2, 'success');
    this.updateStep(3, 'active');
    this.status.set('Printing result: 5');
    await this.sleep(800);

    this.updateStep(3, 'success');
    this.updateStep(4, 'skipped');
    this.updateStep(5, 'skipped');
    this.status.set('No exception → catch block is SKIPPED.');
    await this.sleep(800);

    this.updateStep(6, 'always');
    this.updateStep(7, 'always');
    this.status.set('Finally block ALWAYS runs — cleanup complete! ✅');
    this.isAnimating.set(false);
  }

  async runExceptionPath() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.flowSteps.set(this.defaultSteps());

    this.updateStep(1, 'active');
    this.status.set('Entering try block (divisor = 0)...');
    await this.sleep(800);

    this.updateStep(1, 'success');
    this.updateStep(2, 'error');
    this.status.set('💥 ArithmeticException: / by zero! Jumping to catch...');
    await this.sleep(1000);

    this.updateStep(3, 'skipped');
    this.status.set('Line 3 is SKIPPED — execution jumps to catch block.');
    await this.sleep(800);

    this.updateStep(4, 'active');
    this.updateStep(5, 'active');
    this.status.set('Catch block handles the error — prints "Error!"');
    await this.sleep(800);

    this.updateStep(4, 'success');
    this.updateStep(5, 'success');
    this.updateStep(6, 'always');
    this.updateStep(7, 'always');
    this.status.set('Finally block ALWAYS runs — even after an exception! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.flowSteps.set(this.defaultSteps());
    this.status.set('Choose a scenario to see how try-catch-finally flows.');
    this.isAnimating.set(false);
  }
}

interface FlowStep {
  id: number;
  code: string;
  label: string;
  state: string;
}
