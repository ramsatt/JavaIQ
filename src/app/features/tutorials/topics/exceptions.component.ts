import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';
import { InterviewTipsComponent, InterviewTip } from '../../../shared/interview-tips.component';
import { CommonPitfallsComponent, Pitfall } from '../../../shared/common-pitfalls.component';
import { TopicNavComponent } from '../../../shared/topic-nav.component';

@Component({
  selector: 'app-topic-exceptions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent, InterviewTipsComponent, CommonPitfallsComponent, TopicNavComponent],
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

      <!-- Exception Anti-Patterns -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-rose" /> Exception Anti-Patterns
        </h2>
        <div class="antipattern-grid">
          <div class="antipattern-card">
            <div class="ap-badge bad">BAD</div>
            <h4 class="ap-title">Swallowing Exceptions</h4>
            <app-code-block [code]="codeSwallow" />
            <p class="ap-desc">Empty catch blocks hide bugs. Always log or rethrow.</p>
          </div>
          <div class="antipattern-card">
            <div class="ap-badge bad">BAD</div>
            <h4 class="ap-title">Catching Throwable/Exception</h4>
            <app-code-block [code]="codeCatchAll" />
            <p class="ap-desc">Catches <code>OutOfMemoryError</code> and other Errors you can't recover from.</p>
          </div>
          <div class="antipattern-card">
            <div class="ap-badge bad">BAD</div>
            <h4 class="ap-title">Using Exceptions for Flow Control</h4>
            <app-code-block [code]="codeFlowControl" />
            <p class="ap-desc">Exceptions are expensive to construct. Use <code>containsKey()</code> instead.</p>
          </div>
          <div class="antipattern-card">
            <div class="ap-badge bad">BAD</div>
            <h4 class="ap-title">Losing the Stack Trace</h4>
            <app-code-block [code]="codeLostTrace" />
            <p class="ap-desc">Always wrap the original cause: <code>throw new MyException("msg", e)</code>.</p>
          </div>
        </div>
      </section>

      <!-- Checked vs Unchecked Decision -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="git-branch" [size]="28" css="icon-indigo" /> Checked vs Unchecked — Decision Guide
        </h2>
        <div class="decision-grid">
          <div class="decision-card checked">
            <div class="dc-header">Checked Exception</div>
            <ul class="dc-list">
              <li>Caller <strong>can reasonably recover</strong></li>
              <li>External resource failure (file, DB, network)</li>
              <li>Part of a public API contract</li>
              <li>Examples: <code>IOException</code>, <code>SQLException</code></li>
            </ul>
          </div>
          <div class="decision-card unchecked">
            <div class="dc-header">Unchecked Exception</div>
            <ul class="dc-list">
              <li>Programming error / invalid state</li>
              <li>Caller <strong>cannot meaningfully recover</strong></li>
              <li>Internal implementation detail</li>
              <li>Examples: <code>IllegalArgumentException</code>, <code>IllegalStateException</code></li>
            </ul>
          </div>
        </div>
        <div class="info-box">
          <strong>Modern advice (Effective Java, Item 71):</strong> Prefer unchecked exceptions for most custom exceptions. Checked exceptions add API clutter and are often wrapped anyway.
        </div>
      </section>

      <app-common-pitfalls [pitfalls]="pitfalls" />
      <app-interview-tips [tips]="interviewTips" />

      <app-topic-nav
        [prev]="{ courseSlug: 'core-java', slug: 'strings', title: 'Strings & StringBuilder' }"
        [next]="{ courseSlug: 'core-java', slug: 'collections-list', title: 'Collections: List' }" />
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

    .antipattern-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
    .antipattern-card { background: #fff; border: 1px solid #fecdd3; border-radius: 14px; padding: 20px; }
    .ap-badge { display: inline-block; font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em; padding: 3px 9px; border-radius: 20px; margin-bottom: 10px; }
    .ap-badge.bad { background: #fff1f2; color: #be123c; }
    .ap-title { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin: 0 0 10px; }
    .ap-desc { font-size: 0.76rem; color: #64748b; line-height: 1.55; margin: 8px 0 0; }
    .ap-desc code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #e11d48; }

    .decision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    @media (max-width: 600px) { .decision-grid { grid-template-columns: 1fr; } }
    .decision-card { border-radius: 14px; padding: 20px; }
    .decision-card.checked { background: #eff6ff; border: 1px solid #bfdbfe; }
    .decision-card.unchecked { background: #fff7ed; border: 1px solid #fed7aa; }
    .dc-header { font-size: 0.85rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
    .dc-list { margin: 0; padding-left: 18px; font-size: 0.78rem; color: #334155; line-height: 1.7; }
    .dc-list code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
    .info-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px; font-size: 0.8rem; color: #166534; line-height: 1.6; }
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

  codeSwallow = `try {
    riskyOperation();
} catch (Exception e) {
    // ❌ Never do this — bug is silently hidden!
}`;

  codeCatchAll = `try {
    process();
} catch (Throwable t) {
    // ❌ Also catches OutOfMemoryError!
    log.error("Failed", t);
}`;

  codeFlowControl = `// ❌ Expensive and unreadable
try {
    value = map.get(key);
} catch (NullPointerException e) {
    value = defaultValue;
}
// ✅ Use: map.getOrDefault(key, defaultValue)`;

  codeLostTrace = `try {
    connect();
} catch (SQLException e) {
    // ❌ Original stack trace is lost!
    throw new ServiceException(e.getMessage());
    // ✅ Should be: throw new ServiceException("msg", e);
}`;

  pitfalls: Pitfall[] = [
    {
      title: 'Empty catch block',
      wrong: `try {
    parse(input);
} catch (ParseException e) {
    // silently ignored
}`,
      correct: `try {
    parse(input);
} catch (ParseException e) {
    log.warn("Parse failed for: {}", input, e);
    throw new IllegalArgumentException("Bad input", e);
}`,
      explanation: 'Empty catch blocks hide bugs. At minimum, log the exception with its stack trace. Better: rethrow as a domain exception with the original cause attached.'
    },
    {
      title: 'Not using try-with-resources',
      wrong: `FileReader fr = null;
try {
    fr = new FileReader("data.txt");
    // ... use fr
} catch (IOException e) {
    log.error(e);
} finally {
    if (fr != null) fr.close(); // could throw!
}`,
      correct: `try (var fr = new FileReader("data.txt")) {
    // fr is auto-closed even if exception occurs
    // Suppressed exceptions are preserved too
}`,
      explanation: 'Manual finally-close can swallow exceptions thrown in the try block. try-with-resources correctly handles suppressed exceptions and eliminates boilerplate.'
    },
    {
      title: 'Checked exception in lambda',
      wrong: `// ❌ Won't compile — IOException is checked
list.forEach(path -> Files.readString(path));`,
      correct: `// ✅ Wrap in unchecked or use a helper
list.forEach(path -> {
    try {
        process(Files.readString(path));
    } catch (IOException e) {
        throw new UncheckedIOException(e);
    }
});`,
      explanation: 'Functional interfaces (Function, Consumer, etc.) don\'t declare checked exceptions. Wrap checked exceptions in their unchecked counterparts (UncheckedIOException, RuntimeException) before using in streams/lambdas.'
    }
  ];

  interviewTips: InterviewTip[] = [
    {
      question: 'What is the difference between checked and unchecked exceptions?',
      insight: 'Checked exceptions extend Exception (not RuntimeException) and must be declared in the method signature or caught. The compiler enforces this. Unchecked exceptions extend RuntimeException and don\'t require declaration. Use checked for recoverable external failures (I/O, DB), unchecked for programming errors (null, illegal args).',
      difficulty: 'Easy'
    },
    {
      question: 'Does finally always execute?',
      insight: 'Almost always yes — even if catch rethrows. Exceptions: (1) System.exit() is called, (2) JVM crashes, (3) the thread is killed. Also note: if finally itself throws an exception, the original exception from try/catch is lost.',
      difficulty: 'Medium'
    },
    {
      question: 'What is exception chaining and why is it important?',
      insight: 'Exception chaining preserves the original cause when wrapping exceptions: throw new ServiceException("msg", originalException). Without chaining, the root cause stack trace is lost, making debugging in production very difficult. Always pass the caught exception as the cause parameter.',
      difficulty: 'Medium'
    },
    {
      question: 'When should you create a custom exception?',
      insight: 'Create custom exceptions when: (1) you need to carry domain-specific data (e.g., account balance, error codes), (2) you want a clear API contract that callers can catch specifically, (3) you\'re crossing layer boundaries. Extend RuntimeException for most cases (Effective Java recommends unchecked). Add fields for domain data, always provide a constructor that accepts a cause.',
      difficulty: 'Medium'
    },
    {
      question: 'How does try-with-resources handle suppressed exceptions?',
      insight: 'If both the try body throws and the auto-close throws, Java attaches the close exception as a suppressed exception on the primary one. Retrieve with e.getSuppressed(). This is superior to manual finally blocks, which would silently discard the original exception when close() also throws.',
      difficulty: 'Hard'
    }
  ];

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
