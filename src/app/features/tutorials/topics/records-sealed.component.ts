import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-records-sealed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Records & Sealed Classes"
      subtitle="Modern Java's power features. Immutable data carriers with Records and controlled hierarchies with Sealed Classes."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c3aed, #a78bfa)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> What are Records?</h2>
        <div class="prose">
          <p><strong>Records</strong> (Java 16+) are immutable data carriers — classes whose sole purpose is to hold data. The compiler auto-generates the constructor, getters, <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</p>
          <ul>
            <li><strong>Concise:</strong> One line replaces 50+ lines of boilerplate.</li>
            <li><strong>Immutable:</strong> All fields are <code>final</code> — no setters.</li>
            <li><strong>Transparent:</strong> All state is in the record header.</li>
          </ul>
          <app-code-block [code]="codeRecordIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Record vs Class Comparison</h3>
          <div class="compare-demo">
            <div class="compare-panel" [class.active]="activePanel() === 'class'">
              <span class="panel-label">TRADITIONAL CLASS</span>
              <div class="line-counter">~{{ classLines() }} lines</div>
              <div class="panel-features">
                @for (f of classFeatures(); track f.name) {
                  <div class="feature" [class.manual]="!f.auto">
                    <span class="f-icon">{{ f.auto ? '✍️' : '✍️' }}</span>
                    <span class="f-name">{{ f.name }}</span>
                    <span class="f-badge manual-badge">manual</span>
                  </div>
                }
              </div>
            </div>
            <div class="compare-vs">vs</div>
            <div class="compare-panel" [class.active]="activePanel() === 'record'">
              <span class="panel-label">RECORD</span>
              <div class="line-counter">{{ recordLines() }} line</div>
              <div class="panel-features">
                @for (f of recordFeatures(); track f.name) {
                  <div class="feature" [class.auto]="f.auto">
                    <span class="f-icon">{{ f.auto ? '🤖' : '✍️' }}</span>
                    <span class="f-name">{{ f.name }}</span>
                    <span class="f-badge" [class.auto-badge]="f.auto">{{ f.auto ? 'auto' : 'manual' }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="showComparison()" [disabled]="isAnimating()" class="btn btn-violet"><app-icon name="play" [size]="16" /> Compare</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Sealed Classes -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-purple" /> Sealed Classes</h2>
        <div class="prose">
          <p><strong>Sealed Classes</strong> (Java 17) restrict which classes can extend them. This enables exhaustive <code>switch</code> patterns and creates controlled hierarchies.</p>
          <ul>
            <li><strong>permits:</strong> Explicitly lists allowed subclasses.</li>
            <li><strong>Subclasses must be:</strong> <code>final</code>, <code>sealed</code>, or <code>non-sealed</code>.</li>
            <li><strong>Pattern matching:</strong> Compiler can verify all subtypes are handled.</li>
          </ul>
          <app-code-block [code]="codeSealed" />
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Record Features</h3>
            <p class="op-desc">Custom constructors, methods, and implementing interfaces.</p>
            <app-code-block [code]="codeRecordFeatures" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Sealed + Records</h3>
            <p class="op-desc">Combine both for powerful algebraic data types.</p>
            <app-code-block [code]="codeCombined" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Pattern Matching</h3>
            <p class="op-desc">Exhaustive switch with sealed types and record deconstruction.</p>
            <app-code-block [code]="codePattern" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Local Records</h3>
            <p class="op-desc">Define records inside methods for temporary data grouping.</p>
            <app-code-block [code]="codeLocal" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-violet" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case violet"><div class="use-num violet-bg">1</div><div><h4 class="use-title">DTOs in REST APIs</h4><p class="use-desc">Records are perfect for request/response DTOs: <code>record UserDTO(String name, String email)</code> — immutable, serializable, zero boilerplate.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Domain Events</h4><p class="use-desc"><code>sealed interface DomainEvent permits UserCreated, OrderPlaced</code> — sealed types ensure event handlers cover ALL event types.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Result Types</h4><p class="use-desc"><code>sealed interface Result permits Success, Failure</code> with records — functional error handling without exceptions.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-violet { color: #7c3aed; } .icon-purple { color: #9333ea; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c3aed; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .compare-demo { display: flex; align-items: stretch; gap: 12px; margin-bottom: 20px; }
    .compare-panel { flex: 1; padding: 16px; border-radius: 14px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .compare-panel.active { border-color: #7c3aed; background: #faf5ff; }
    .panel-label { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 6px; }
    .line-counter { font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 12px; font-family: 'JetBrains Mono', monospace; }
    .compare-vs { display: flex; align-items: center; font-size: 0.78rem; font-weight: 800; color: #94a3b8; }
    .panel-features { display: flex; flex-direction: column; gap: 5px; }
    .feature { display: flex; align-items: center; gap: 6px; padding: 5px 8px; border-radius: 6px; font-size: 0.62rem; background: #f8fafc; border: 1px solid #e2e8f0; }
    .feature.auto { background: #f0fdf4; border-color: #86efac; }
    .feature.manual { background: #fff7ed; border-color: #fed7aa; }
    .f-icon { font-size: 0.7rem; }
    .f-name { flex: 1; font-family: 'JetBrains Mono', monospace; color: #334155; }
    .f-badge { font-size: 0.5rem; font-weight: 700; padding: 1px 5px; border-radius: 3px; }
    .manual-badge { background: #fed7aa; color: #9a3412; }
    .auto-badge { background: #bbf7d0; color: #166534; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-violet { background: #7c3aed; color: #fff; } .btn-violet:hover:not(:disabled) { background: #6d28d9; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.violet { background: #faf5ff; border-color: #d8b4fe; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #f5f3ff; border-color: #c4b5fd; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .violet-bg { background: #7c3aed; } .blue-bg { background: #3b82f6; } .purple-bg { background: #9333ea; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class RecordsSealedComponent {
  activePanel = signal('');
  classLines = signal(50);
  recordLines = signal(1);
  status = signal('Records replace 50+ lines of boilerplate with a single declaration.');
  isAnimating = signal(false);

  classFeatures = signal([
    { name: 'private final fields', auto: false },
    { name: 'constructor', auto: false },
    { name: 'getters', auto: false },
    { name: 'equals()', auto: false },
    { name: 'hashCode()', auto: false },
    { name: 'toString()', auto: false }
  ]);
  recordFeatures = signal([
    { name: 'private final fields', auto: true },
    { name: 'constructor', auto: true },
    { name: 'accessors name(), age()', auto: true },
    { name: 'equals()', auto: true },
    { name: 'hashCode()', auto: true },
    { name: 'toString()', auto: true }
  ]);

  codeRecordIntro = `// Traditional class: ~50 lines
public class Point {
    private final int x;
    private final int y;
    public Point(int x, int y) { ... }
    public int getX() { ... }
    public int getY() { ... }
    public boolean equals(Object o) { ... }
    public int hashCode() { ... }
    public String toString() { ... }
}

// Record: 1 line!
public record Point(int x, int y) { }
// All of the above is auto-generated!`;

  codeSealed = `// Only these 3 can extend Shape
public sealed interface Shape
    permits Circle, Rectangle, Triangle { }

public record Circle(double r) implements Shape { }
public record Rectangle(double w, double h)
    implements Shape { }
public final class Triangle extends ... { }

// Compiler knows all subtypes!
// Switch must be exhaustive:
double area = switch (shape) {
    case Circle c    -> Math.PI * c.r() * c.r();
    case Rectangle r -> r.w() * r.h();
    case Triangle t  -> ...;
    // No default needed — all cases covered!
};`;

  codeRecordFeatures = `// Compact constructor (validation)
public record Age(int value) {
    public Age { // no params!
        if (value < 0)
            throw new IllegalArgumentException(
                "Age cannot be negative");
    }
}

// Records can implement interfaces
public record User(String name, int age)
    implements Comparable<User> {
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}`;

  codeCombined = `// Sealed interface + Record subtypes
// = Algebraic Data Type (ADT)
sealed interface Result<T>
    permits Success, Failure {
}

record Success<T>(T value) implements Result<T> {}
record Failure<T>(String error) implements Result<T> {}

// Usage
Result<User> result = findUser(id);
switch (result) {
    case Success<User> s -> render(s.value());
    case Failure<User> f -> showError(f.error());
}`;

  codePattern = `// Pattern matching with records (Java 21)
sealed interface Expr permits Num, Add, Mul {}
record Num(int value) implements Expr {}
record Add(Expr a, Expr b) implements Expr {}
record Mul(Expr a, Expr b) implements Expr {}

int eval(Expr expr) {
    return switch (expr) {
        case Num(int v)       -> v;
        case Add(var a, var b) -> eval(a)+eval(b);
        case Mul(var a, var b) -> eval(a)*eval(b);
    };
}`;

  codeLocal = `// Local record inside a method
List<String> topUsers(List<User> users) {
    // Temporary grouping — no separate file
    record Scored(User user, double score) {}

    return users.stream()
        .map(u -> new Scored(u, calculate(u)))
        .sorted(comparing(Scored::score).reversed())
        .limit(10)
        .map(s -> s.user().name())
        .toList();
}`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async showComparison() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.activePanel.set('class');
    this.status.set('Traditional class: 6 things you must write manually...');
    await this.sleep(1500);

    this.activePanel.set('record');
    this.status.set('Record: ALL 6 are auto-generated! Just declare the header. ✅');
    await this.sleep(1500);

    this.status.set('record Point(int x, int y) replaces ~50 lines. Modern Java FTW! 🚀');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.activePanel.set('');
    this.status.set('Records replace 50+ lines of boilerplate with a single declaration.');
    this.isAnimating.set(false);
  }
}
