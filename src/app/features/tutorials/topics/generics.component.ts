import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';
import { InterviewTipsComponent, InterviewTip } from '../../../shared/interview-tips.component';
import { CommonPitfallsComponent, Pitfall } from '../../../shared/common-pitfalls.component';
import { TopicNavComponent } from '../../../shared/topic-nav.component';

@Component({
  selector: 'app-topic-generics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent, InterviewTipsComponent, CommonPitfallsComponent, TopicNavComponent],
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

      <!-- Type Erasure deep dive -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="eye-off" [size]="28" css="icon-cyan" /> Type Erasure — What Actually Happens at Runtime
        </h2>
        <div class="erasure-grid">
          <div class="erasure-card before">
            <div class="ec-label">Source Code (compile time)</div>
            <app-code-block [code]="codeErasureBefore" />
          </div>
          <div class="erasure-arrow">→</div>
          <div class="erasure-card after">
            <div class="ec-label">Bytecode (runtime — erased)</div>
            <app-code-block [code]="codeErasureAfter" />
          </div>
        </div>
        <div class="info-box">
          <strong>Key implications of type erasure:</strong> You cannot do <code>new T()</code>, <code>instanceof List&lt;String&gt;</code>, or create a <code>T[]</code> array at runtime. Pass a <code>Class&lt;T&gt; clazz</code> parameter when you need the type at runtime.
        </div>
      </section>

      <!-- PECS visual guide -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="git-branch" [size]="28" css="icon-indigo" /> PECS Cheat Sheet
        </h2>
        <div class="pecs-grid">
          <div class="pecs-card extends">
            <div class="pecs-badge">? extends T</div>
            <div class="pecs-title">Producer — read only</div>
            <p class="pecs-desc">Use when you only READ from the collection. Works with T and any subtype.</p>
            <app-code-block [code]="codePecsExtends" />
          </div>
          <div class="pecs-card super">
            <div class="pecs-badge">? super T</div>
            <div class="pecs-title">Consumer — write only</div>
            <p class="pecs-desc">Use when you only WRITE to the collection. Works with T and any supertype.</p>
            <app-code-block [code]="codePecsSuper" />
          </div>
        </div>
      </section>

      <app-common-pitfalls [pitfalls]="pitfalls" />
      <app-interview-tips [tips]="interviewTips" />

      <app-topic-nav
        [prev]="{ courseSlug: 'core-java', slug: 'collections-map', title: 'Collections: Map & Set' }"
        [next]="{ courseSlug: 'core-java', slug: 'streams', title: 'Streams API' }" />
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

    .erasure-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center; margin-bottom: 16px; }
    @media (max-width: 640px) { .erasure-grid { grid-template-columns: 1fr; } .erasure-arrow { text-align: center; } }
    .erasure-card { border-radius: 14px; padding: 16px; border: 1px solid #e2e8f0; background: #fff; }
    .erasure-card.before { border-color: #a5f3fc; background: #ecfeff; }
    .erasure-card.after { border-color: #fde68a; background: #fffbeb; }
    .ec-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-bottom: 10px; }
    .erasure-arrow { font-size: 1.5rem; color: #94a3b8; text-align: center; }
    .info-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px; font-size: 0.8rem; color: #166534; line-height: 1.6; }
    .info-box code { background: rgba(0,0,0,0.08); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; }

    .pecs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    @media (max-width: 600px) { .pecs-grid { grid-template-columns: 1fr; } }
    .pecs-card { border-radius: 14px; padding: 20px; border: 1px solid; }
    .pecs-card.extends { background: #eff6ff; border-color: #bfdbfe; }
    .pecs-card.super { background: #faf5ff; border-color: #d8b4fe; }
    .pecs-badge { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 8px; margin-bottom: 8px; background: rgba(0,0,0,0.07); color: #0f172a; }
    .pecs-title { font-size: 0.88rem; font-weight: 700; color: #0f172a; margin-bottom: 6px; }
    .pecs-desc { font-size: 0.76rem; color: #475569; line-height: 1.55; margin: 0 0 12px; }
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

  codeErasureBefore = `// What YOU write
List<String> names = new ArrayList<>();
names.add("Alice");
String s = names.get(0); // no cast needed`;

  codeErasureAfter = `// What JVM sees after erasure
List names = new ArrayList();
names.add("Alice");
String s = (String) names.get(0); // cast inserted by compiler`;

  codePecsExtends = `// Copy from src into dest
// src PRODUCES elements → extends
void copy(List<? extends Number> src,
          List<Number> dest) {
    for (Number n : src) dest.add(n);
}
// Accepts List<Integer>, List<Double>, etc.`;

  codePecsSuper = `// Fill a list with values
// dest CONSUMES elements → super
void fill(List<? super Integer> dest,
          int count) {
    for (int i = 0; i < count; i++)
        dest.add(i);
}
// Accepts List<Integer>, List<Number>, List<Object>`;

  pitfalls: Pitfall[] = [
    {
      title: 'Generic array creation',
      wrong: `// ❌ Compile error — cannot create generic arrays
T[] array = new T[10];
List<String>[] lists = new ArrayList<String>[5];`,
      correct: `// ✅ Use List instead of array for generic containers
List<T> list = new ArrayList<>();

// ✅ Or suppress with cast (only when safe)
@SuppressWarnings("unchecked")
T[] array = (T[]) new Object[10];`,
      explanation: 'Arrays carry their type at runtime, but generics are erased. Creating a generic array would allow heap pollution — the JVM cannot verify element types. Use List<T> instead, or cast Object[] with @SuppressWarnings("unchecked") only when you own the array.'
    },
    {
      title: 'Confusing extends and super wildcards',
      wrong: `// ❌ Cannot add to an "extends" wildcard list
List<? extends Number> nums = new ArrayList<Integer>();
nums.add(1); // Compile error — type unknown at runtime`,
      correct: `// ✅ extends = read only (producer)
List<? extends Number> nums = List.of(1, 2, 3);
Number n = nums.get(0); // ok to read

// ✅ super = write (consumer)
List<? super Integer> sink = new ArrayList<Number>();
sink.add(42); // ok to write integers`,
      explanation: 'With "? extends T", the compiler can\'t guarantee which exact subtype the list holds, so writing is forbidden. With "? super T", you can write T (or subtypes), but reading returns Object. Remember PECS: Producer Extends, Consumer Super.'
    },
    {
      title: 'instanceof with generic types',
      wrong: `// ❌ Cannot check generic type parameter at runtime
if (obj instanceof List<String>) { // Compile error
    List<String> list = (List<String>) obj;
}`,
      correct: `// ✅ Check raw type only (unavoidable due to erasure)
if (obj instanceof List<?> list) {
    // Java 16+ pattern matching
    // Type parameter is erased — cannot check String
}

// ✅ Java 21+ generic pattern matching (preview)
// if (obj instanceof List<String> strings) { ... }`,
      explanation: 'Generic type parameters are erased at runtime — List<String> and List<Integer> are the same class. You can only check the raw type (List<?>). In Java 21+ with pattern matching for generics (preview), this limitation is being lifted.'
    }
  ];

  interviewTips: InterviewTip[] = [
    {
      question: 'What is type erasure and what are its limitations?',
      insight: 'Type erasure means generic type parameters are removed at compile time and replaced with Object (or bounds). The JVM has no knowledge of List<String> vs List<Integer>. Limitations: cannot use instanceof with generic types, cannot create generic arrays (new T[]), cannot call new T(), and cannot catch generic exceptions. Workaround: pass Class<T> as a parameter when runtime type info is needed.',
      difficulty: 'Hard'
    },
    {
      question: 'What is PECS and when do you apply it?',
      insight: 'PECS = Producer Extends, Consumer Super. Use "? extends T" when the collection produces (you only read from it) — e.g., Collections.copy() source. Use "? super T" when the collection consumes (you only write to it) — e.g., Collections.copy() destination. The rule prevents heap pollution and maximizes API flexibility.',
      difficulty: 'Hard'
    },
    {
      question: 'What is the difference between <T extends Comparable<T>> and <T extends Comparable<?>>?',
      insight: '"T extends Comparable<T>" means T can compare itself to T specifically — the strictest bound. "T extends Comparable<? super T>" is more flexible: T can compare to T or any supertype, allowing Integer (which implements Comparable<Number> in some hierarchies) to work. Collections.sort() uses the super variant for maximum flexibility.',
      difficulty: 'Hard'
    },
    {
      question: 'Why can\'t you overload methods with different generic types?',
      insight: 'Due to type erasure, "void process(List<String> s)" and "void process(List<Integer> i)" both erase to "void process(List s)" — the same signature after erasure. The compiler rejects this as a duplicate method. Solution: use different method names or a single method with "List<?>" and runtime type checks.',
      difficulty: 'Medium'
    },
    {
      question: 'When would you use a raw type?',
      insight: 'Almost never in new code. Raw types (e.g., List instead of List<String>) exist only for backwards compatibility with pre-Java-5 code. Using raw types bypasses all compile-time type safety and can cause ClassCastExceptions at runtime. The only legitimate use: Class literals (List.class, not List<String>.class) and instanceof checks.',
      difficulty: 'Easy'
    }
  ];

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
