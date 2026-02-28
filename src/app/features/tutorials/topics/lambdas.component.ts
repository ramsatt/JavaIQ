import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-lambdas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Lambda Expressions"
      subtitle="Concise functional code. Master lambda syntax, method references, and functional interfaces for cleaner, more expressive Java."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #c2410c, #fb923c)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-orange" /> What are Lambdas?</h2>
        <div class="prose">
          <p>A <strong>lambda expression</strong> is a concise way to represent an anonymous function — a function without a name. Introduced in Java 8, lambdas make code more readable and enable functional programming patterns.</p>
          <ul>
            <li><strong>Syntax:</strong> <code>(parameters) -&gt; expression</code> or <code>(parameters) -&gt; {{ '{' }} statements; {{ '}' }}</code></li>
            <li><strong>Target:</strong> Used wherever a functional interface (single abstract method) is expected.</li>
            <li><strong>Method References:</strong> <code>Class::method</code> — even shorter syntax for lambdas that just call a method.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-orange" /> Lambda Transformation Visualizer</h3>
          <div class="transform-demo">
            <div class="code-stage" [class.active]="activeStage() >= 1">
              <span class="stage-label">ANONYMOUS CLASS</span>
              <pre class="stage-code">{{ anon }}</pre>
            </div>
            <div class="transform-arrow" [class.visible]="activeStage() >= 2">
              <span>simplify ✨</span>
            </div>
            <div class="code-stage" [class.active]="activeStage() >= 2">
              <span class="stage-label">LAMBDA</span>
              <pre class="stage-code">{{ lambda }}</pre>
            </div>
            <div class="transform-arrow" [class.visible]="activeStage() >= 3">
              <span>simplify ✨</span>
            </div>
            <div class="code-stage" [class.active]="activeStage() >= 3">
              <span class="stage-label">METHOD REFERENCE</span>
              <pre class="stage-code">{{ methodRef }}</pre>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="showComparator()" [disabled]="isAnimating()" class="btn btn-orange"><app-icon name="play" [size]="16" /> Comparator Example</button>
            <button (click)="showPredicate()" [disabled]="isAnimating()" class="btn btn-purple"><app-icon name="play" [size]="16" /> Predicate Example</button>
            <button (click)="showConsumer()" [disabled]="isAnimating()" class="btn btn-teal"><app-icon name="play" [size]="16" /> Consumer Example</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Functional Interfaces</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Core Interfaces</h3>
            <p class="op-desc">Predicate, Function, Consumer, Supplier — the big four.</p>
            <app-code-block [code]="codeCore" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method References</h3>
            <p class="op-desc">Four types of method references for maximum brevity.</p>
            <app-code-block [code]="codeMethodRef" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Composition</h3>
            <p class="op-desc">Chain functional interfaces with and, or, compose, andThen.</p>
            <app-code-block [code]="codeComposition" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Closures & Scope</h3>
            <p class="op-desc">Lambdas can capture effectively final local variables.</p>
            <app-code-block [code]="codeClosure" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-orange" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case orange"><div class="use-num orange-bg">1</div><div><h4 class="use-title">Spring Bean Configuration</h4><p class="use-desc"><code>&#64;Bean Supplier&lt;Executor&gt; executor = () -> Executors.newFixedThreadPool(4);</code> — lambdas simplify bean factory methods.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Event Handlers</h4><p class="use-desc"><code>button.setOnAction(e -> handleClick(e));</code> — no more bulky anonymous inner classes for GUI callbacks.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Collection Processing</h4><p class="use-desc"><code>list.sort(Comparator.comparing(User::getName))</code> — lambdas and method references make collection operations one-liners.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-orange { color: #ea580c; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #ea580c; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .transform-demo { margin-bottom: 20px; }
    .code-stage { padding: 14px 16px; border-radius: 12px; border: 2px solid #e2e8f0; background: #fff; margin-bottom: 8px; opacity: 0.4; transition: all 0.4s; }
    .code-stage.active { opacity: 1; border-color: #ea580c; background: #fff7ed; }
    .stage-label { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 6px; }
    .stage-code { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; line-height: 1.6; margin: 0; white-space: pre-wrap; }
    .transform-arrow { text-align: center; font-size: 0.68rem; font-weight: 700; color: #ea580c; padding: 4px 0; opacity: 0; transition: opacity 0.4s; }
    .transform-arrow.visible { opacity: 1; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-orange { background: #ea580c; color: #fff; } .btn-orange:hover:not(:disabled) { background: #c2410c; }
    .btn-purple { background: #7c3aed; color: #fff; } .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-teal { background: #0d9488; color: #fff; } .btn-teal:hover:not(:disabled) { background: #0f766e; }
    .btn-gray { background: #e2e8f0; color: #334155; } .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.orange { background: #fff7ed; border-color: #fed7aa; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .orange-bg { background: #ea580c; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class LambdasComponent {
  activeStage = signal(0);
  anon = '';
  lambda = '';
  methodRef = '';
  status = signal('See how verbose anonymous classes become concise lambdas and method references.');
  isAnimating = signal(false);

  codeIntro = `// Anonymous inner class (verbose)
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
};

// Lambda expression (concise!)
Runnable r = () -> System.out.println("Hello");

// Method reference (shortest)
Runnable r = System.out::println;`;

  codeCore = `// Predicate<T>: T -> boolean
Predicate<String> isLong = s -> s.length() > 5;

// Function<T,R>: T -> R
Function<String, Integer> len = String::length;

// Consumer<T>: T -> void
Consumer<String> print = System.out::println;

// Supplier<T>: () -> T
Supplier<List<String>> factory = ArrayList::new;

// BiFunction<T,U,R>: (T, U) -> R
BiFunction<Integer,Integer,Integer> add =
    Integer::sum;`;

  codeMethodRef = `// 1. Static method
Function<String,Integer> parse =
    Integer::parseInt;

// 2. Instance method of an object
Consumer<String> print =
    System.out::println;

// 3. Instance method of a type
Function<String,String> upper =
    String::toUpperCase;

// 4. Constructor
Supplier<ArrayList<String>> factory =
    ArrayList::new;`;

  codeComposition = `// Predicate composition
Predicate<Integer> even = n -> n % 2 == 0;
Predicate<Integer> positive = n -> n > 0;

Predicate<Integer> evenAndPos =
    even.and(positive);
Predicate<Integer> evenOrPos =
    even.or(positive);
Predicate<Integer> odd = even.negate();

// Function composition
Function<Integer,Integer> doubleIt = n -> n*2;
Function<Integer,Integer> addThree = n -> n+3;

// doubleIt first, then addThree
Function<Integer,Integer> pipeline =
    doubleIt.andThen(addThree);
pipeline.apply(5); // (5*2)+3 = 13`;

  codeClosure = `// Lambdas capture "effectively final" vars
String prefix = "Hello";
// prefix = "Hi"; ← would break!

Function<String, String> greet =
    name -> prefix + " " + name;

greet.apply("World"); // "Hello World"

// ⚠ Can't modify captured variables
// The following would NOT compile:
// int count = 0;
// forEach(x -> count++); ← ERROR`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }

  async showComparator() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeStage.set(0);

    this.anon = `Comparator<String> cmp =
  new Comparator<String>() {
    public int compare(String a, String b) {
      return a.compareTo(b);
    }
  };`;
    this.lambda = `Comparator<String> cmp =
  (a, b) -> a.compareTo(b);`;
    this.methodRef = `Comparator<String> cmp =
  String::compareTo;`;

    this.activeStage.set(1);
    this.status.set('Anonymous class: 6 lines of ceremony for one comparison...');
    await this.sleep(1500);

    this.activeStage.set(2);
    this.status.set('Lambda: just (a, b) -> a.compareTo(b) — one expression!');
    await this.sleep(1500);

    this.activeStage.set(3);
    this.status.set('Method reference: String::compareTo — maximum conciseness! ✅');
    this.isAnimating.set(false);
  }

  async showPredicate() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeStage.set(0);

    this.anon = `Predicate<String> pred =
  new Predicate<String>() {
    public boolean test(String s) {
      return s.isEmpty();
    }
  };`;
    this.lambda = `Predicate<String> pred =
  s -> s.isEmpty();`;
    this.methodRef = `Predicate<String> pred =
  String::isEmpty;`;

    this.activeStage.set(1);
    this.status.set('Anonymous Predicate: verbose boilerplate...');
    await this.sleep(1500);
    this.activeStage.set(2);
    this.status.set('Lambda: s -> s.isEmpty() — clean and readable!');
    await this.sleep(1500);
    this.activeStage.set(3);
    this.status.set('Method reference: String::isEmpty — crystal clear! ✅');
    this.isAnimating.set(false);
  }

  async showConsumer() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeStage.set(0);

    this.anon = `Consumer<String> con =
  new Consumer<String>() {
    public void accept(String s) {
      System.out.println(s);
    }
  };`;
    this.lambda = `Consumer<String> con =
  s -> System.out.println(s);`;
    this.methodRef = `Consumer<String> con =
  System.out::println;`;

    this.activeStage.set(1);
    this.status.set('Anonymous Consumer: so much code for a print...');
    await this.sleep(1500);
    this.activeStage.set(2);
    this.status.set('Lambda: s -> System.out.println(s)');
    await this.sleep(1500);
    this.activeStage.set(3);
    this.status.set('Method reference: System.out::println — elegant! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.activeStage.set(0);
    this.anon = ''; this.lambda = ''; this.methodRef = '';
    this.status.set('See how verbose anonymous classes become concise lambdas and method references.');
    this.isAnimating.set(false);
  }
}
