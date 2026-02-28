import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-generics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Generics"
      subtitle="Type safety without sacrifice. Learn how type parameters, bounded types, and wildcards eliminate ClassCastExceptions at compile time."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0e7490, #22d3ee)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-cyan" /> What are Generics?</h2>
        <div class="prose">
          <p><strong>Generics</strong> enable classes, interfaces, and methods to operate on types specified as parameters. They provide compile-time type safety and eliminate the need for casting.</p>
          <ul>
            <li><strong>Type Parameter:</strong> <code>&lt;T&gt;</code> — a placeholder for any type.</li>
            <li><strong>Bounded Types:</strong> <code>&lt;T extends Number&gt;</code> — restricts T to Number subclasses.</li>
            <li><strong>Wildcards:</strong> <code>&lt;? extends T&gt;</code> (upper) and <code>&lt;? super T&gt;</code> (lower).</li>
            <li><strong>Type Erasure:</strong> Generics are removed at runtime — they're a compile-time feature.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-cyan" /> Type Safety Visualizer</h3>
          <div class="type-demo">
            <div class="box-container">
              <div class="generic-box" [class]="boxState()">
                <span class="box-label">Box&lt;{{ currentType() }}&gt;</span>
                <div class="box-content">
                  @if (boxValue()) {
                    <span class="box-val">{{ boxValue() }}</span>
                  } @else {
                    <span class="box-empty">empty</span>
                  }
                </div>
              </div>
            </div>
            <div class="attempt-row">
              @for (attempt of attempts(); track attempt.type) {
                <div class="attempt" [class]="attempt.state">
                  <span class="attempt-code">box.set({{ attempt.value }})</span>
                  <span class="attempt-result">{{ attempt.result }}</span>
                </div>
              }
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="demoStringSafety()" [disabled]="isAnimating()" class="btn btn-cyan"><app-icon name="play" [size]="16" /> Box&lt;String&gt; Demo</button>
            <button (click)="demoIntegerSafety()" [disabled]="isAnimating()" class="btn btn-purple"><app-icon name="play" [size]="16" /> Box&lt;Integer&gt; Demo</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Generics Patterns</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Generic Class</h3>
            <p class="op-desc">Define a class that works with any type.</p>
            <app-code-block [code]="codeClass" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Generic Method</h3>
            <p class="op-desc">Methods with their own type parameters.</p>
            <app-code-block [code]="codeMethod" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Bounded Types</h3>
            <p class="op-desc">Restrict type parameters with extends/super.</p>
            <app-code-block [code]="codeBounded" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Wildcards (PECS)</h3>
            <p class="op-desc">Producer Extends, Consumer Super — the wildcard golden rule.</p>
            <app-code-block [code]="codeWildcard" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-cyan" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case cyan"><div class="use-num cyan-bg">1</div><div><h4 class="use-title">Spring ResponseEntity&lt;T&gt;</h4><p class="use-desc"><code>ResponseEntity&lt;User&gt;</code> ensures your REST controller returns the exact type expected — no casting, no runtime surprises.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Repository Pattern</h4><p class="use-desc"><code>JpaRepository&lt;User, Long&gt;</code> — Generics define the entity type AND the ID type, making CRUD operations fully type-safe.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Event Systems</h4><p class="use-desc"><code>EventBus&lt;T&gt;</code> ensures listeners only receive events of the correct type: <code>bus.on(UserCreated.class, handler)</code>.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-cyan { color: #0891b2; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0891b2; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .type-demo { margin-bottom: 20px; }
    .box-container { display: flex; justify-content: center; margin-bottom: 16px; }
    .generic-box { padding: 20px 32px; border-radius: 16px; border: 3px solid #e2e8f0; text-align: center; min-width: 180px; transition: all 0.3s; }
    .generic-box.active { border-color: #0891b2; background: #ecfeff; }
    .generic-box.error { border-color: #ef4444; background: #fef2f2; }
    .box-label { display: block; font-size: 0.78rem; font-weight: 800; color: #0891b2; font-family: 'JetBrains Mono', monospace; margin-bottom: 8px; }
    .box-content { min-height: 36px; display: flex; align-items: center; justify-content: center; }
    .box-val { font-size: 1.1rem; font-weight: 800; color: #0f172a; }
    .box-empty { font-size: 0.72rem; color: #94a3b8; }
    .attempt-row { display: flex; flex-direction: column; gap: 6px; }
    .attempt { display: flex; justify-content: space-between; padding: 8px 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.7rem; font-family: 'JetBrains Mono', monospace; transition: all 0.3s; }
    .attempt.success { border-color: #22c55e; background: #f0fdf4; }
    .attempt.error { border-color: #ef4444; background: #fef2f2; }
    .attempt-code { color: #334155; } .attempt-result { font-weight: 700; }
    .attempt.success .attempt-result { color: #16a34a; }
    .attempt.error .attempt-result { color: #dc2626; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-cyan { background: #0891b2; color: #fff; } .btn-cyan:hover:not(:disabled) { background: #0e7490; }
    .btn-purple { background: #7c3aed; color: #fff; } .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.cyan { background: #ecfeff; border-color: #a5f3fc; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .cyan-bg { background: #0891b2; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class GenericsComponent {
  currentType = signal('T');
  boxValue = signal('');
  boxState = signal('');
  attempts = signal<{ type: string; value: string; result: string; state: string }[]>([]);
  status = signal('Generics enforce type safety at compile time. Try a demo!');
  isAnimating = signal(false);

  codeIntro = `// Without Generics (risky!)
List list = new ArrayList();
list.add("hello");
list.add(42); // no compile error
String s = (String) list.get(1); // 💥 ClassCastException!

// With Generics (safe!)
List<String> safe = new ArrayList<>();
safe.add("hello");
// safe.add(42);  ← COMPILE ERROR ✅`;

  codeClass = `public class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

Box<String> box = new Box<>();
box.set("Hello");
String val = box.get(); // no cast needed!`;

  codeMethod = `// Generic method
public <T> T findFirst(List<T> list) {
    return list.isEmpty() ? null : list.get(0);
}

// Multiple type parameters
public <K, V> V getOrDefault(
    Map<K, V> map, K key, V defaultVal) {
    return map.containsKey(key)
        ? map.get(key) : defaultVal;
}`;

  codeBounded = `// Upper bound — T must be a Number
public <T extends Number> double sum(List<T> list) {
    double total = 0;
    for (T num : list) {
        total += num.doubleValue();
    }
    return total;
}

// Works with Integer, Double, Long...
sum(List.of(1, 2, 3));       // 6.0
sum(List.of(1.5, 2.5));      // 4.0`;

  codeWildcard = `// PECS: Producer Extends, Consumer Super

// Producer — reads FROM the collection
void printAll(List<? extends Shape> shapes) {
    for (Shape s : shapes) s.draw();
}

// Consumer — writes TO the collection
void addCircles(List<? super Circle> list) {
    list.add(new Circle());
}

// Unbounded — read-only, any type
void logSize(List<?> any) {
    System.out.println(any.size());
}`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async demoStringSafety() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.attempts.set([]);
    this.currentType.set('String');
    this.boxState.set('active');
    this.status.set('Box<String> — only String values allowed.');
    await this.sleep(800);

    this.attempts.set([{ type: 'String', value: '"Hello"', result: '✅ Accepted', state: 'success' }]);
    this.boxValue.set('"Hello"');
    this.status.set('box.set("Hello") — String matches Box<String>. Accepted!');
    await this.sleep(1000);

    this.attempts.update(a => [...a, { type: 'int', value: '42', result: '❌ Compile Error', state: 'error' }]);
    this.boxState.set('error');
    this.status.set('box.set(42) — int ≠ String. BLOCKED at compile time! ✅');
    await this.sleep(1000);

    this.boxState.set('active');
    this.status.set('Generics catch type errors BEFORE runtime — no ClassCastException! ✅');
    this.isAnimating.set(false);
  }

  async demoIntegerSafety() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.attempts.set([]);
    this.currentType.set('Integer');
    this.boxState.set('active');
    this.status.set('Box<Integer> — only Integer values allowed.');
    await this.sleep(800);

    this.attempts.set([{ type: 'int', value: '42', result: '✅ Accepted (autoboxed)', state: 'success' }]);
    this.boxValue.set('42');
    this.status.set('box.set(42) — autoboxed from int to Integer. Accepted!');
    await this.sleep(1000);

    this.attempts.update(a => [...a, { type: 'String', value: '"hello"', result: '❌ Compile Error', state: 'error' }]);
    this.boxState.set('error');
    this.status.set('box.set("hello") — String ≠ Integer. BLOCKED! ✅');
    await this.sleep(1000);

    this.boxState.set('active');
    this.status.set('The same Box class works with any type — just change the parameter!');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.currentType.set('T');
    this.boxValue.set('');
    this.boxState.set('');
    this.attempts.set([]);
    this.status.set('Generics enforce type safety at compile time. Try a demo!');
    this.isAnimating.set(false);
  }
}
