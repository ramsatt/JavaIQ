import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

interface RefKind {
  key: string;
  title: string;
  syntax: string;
  lambda: string;
  description: string;
  color: string;
  example: string;
}

interface DemoOp {
  key: string;
  label: string;
  lambdaForm: string;
  refForm: string;
  result: (input: string) => string;
}

@Component({
  selector: 'app-topic-method-references',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Method References"
      subtitle="A shorthand for lambdas that just call an existing method — cleaner, more readable, and zero overhead."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c2d12, #ea580c)">

      <!-- SECTION 1: What & Why -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-orange" /> What Are Method References?
        </h2>
        <div class="prose">
          <p>
            Method references are syntactic sugar for lambdas that do nothing but call a single existing method. They use the <code>::</code> operator and are always equivalent to a lambda — the compiler converts them to identical bytecode via <code>invokedynamic</code>.
          </p>
          <ul>
            <li><strong>When to use:</strong> The lambda only calls one method with no additional logic.</li>
            <li><strong>When to prefer a lambda:</strong> When you need extra logic, adapt argument order, or handle exceptions inline.</li>
          </ul>
          <app-code-block [code]="introCode" />
        </div>
      </section>

      <!-- SECTION 2: Four Kinds -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-orange" /> The Four Kinds — Click to Explore
          </h3>
          <div class="kinds-grid">
            @for (k of kinds; track k.key) {
              <div class="kind-card" [class.active]="selectedKind().key === k.key" (click)="selectKind(k)" [style.border-color]="selectedKind().key === k.key ? k.color : '#e2e8f0'">
                <div class="kind-num" [style.background]="k.color + '22'" [style.color]="k.color">{{ k.key }}</div>
                <div class="kind-title">{{ k.title }}</div>
                <div class="kind-syntax" [style.color]="k.color">{{ k.syntax }}</div>
              </div>
            }
          </div>

          @if (selectedKind()) {
            <div class="kind-detail">
              <div class="kind-detail-title">{{ selectedKind()!.title }}</div>
              <div class="kind-detail-desc">{{ selectedKind()!.description }}</div>
              <div class="equiv-row">
                <div class="equiv-box">
                  <div class="equiv-label">Lambda</div>
                  <code>{{ selectedKind()!.lambda }}</code>
                </div>
                <div class="equiv-arrow">≡</div>
                <div class="equiv-box ref-box" [style.border-color]="selectedKind()!.color + '66'">
                  <div class="equiv-label">Method Reference</div>
                  <code [style.color]="selectedKind()!.color">{{ selectedKind()!.syntax }}</code>
                </div>
              </div>
              <div class="kind-example">Examples: {{ selectedKind()!.example }}</div>
            </div>
          }
        </div>
      </section>

      <!-- SECTION 3: Lambda ↔ Ref Translator -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Lambda ↔ Method Reference Translator
        </h2>
        <div class="ops-row">
          @for (op of demoOps; track op.key) {
            <button class="op-btn" [class.active]="selectedOp().key === op.key" (click)="selectOp(op)">
              {{ op.label }}
            </button>
          }
        </div>

        @if (selectedOp()) {
          <div class="translator-body">
            <div class="trans-col lambda-col">
              <div class="trans-label">Lambda Form</div>
              <div class="trans-code">{{ selectedOp()!.lambdaForm }}</div>
            </div>
            <div class="trans-eq">⟺</div>
            <div class="trans-col ref-col">
              <div class="trans-label">Method Reference</div>
              <div class="trans-code ref-text">{{ selectedOp()!.refForm }}</div>
            </div>
          </div>
          <div class="live-test">
            <input type="text" [value]="liveInput()" (input)="setLiveInput($event)" placeholder="type something..." class="live-input" />
            <div class="live-arrow">→</div>
            <div class="live-result">{{ liveResult() }}</div>
          </div>
        }

        <app-code-block [code]="fourKindsCode" />
      </section>

      <!-- SECTION 4: Constructor References & Comparators -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-orange" /> Constructor References & Comparator Chains
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructor References</h3>
            <p class="op-desc"><code>ClassName::new</code> — perfect for factory patterns, stream collectors, and <code>toArray</code>.</p>
            <app-code-block [code]="constructorRefCode" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Comparator Chains</h3>
            <p class="op-desc">The most practical real-world use — sorting with <code>Comparator.comparing()</code> reads almost like English.</p>
            <app-code-block [code]="comparatorCode" />
          </div>
        </div>
      </section>

      <!-- SECTION 5: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-orange" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case orange">
            <div class="use-num orange-bg">1</div>
            <div>
              <h4 class="use-title">Stream Pipelines</h4>
              <p class="use-desc"><code>names.stream().map(String::toUpperCase).filter(String::isBlank.negate()).forEach(System.out::println)</code> — each step is a method reference, highly readable.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Event Listeners & Callbacks</h4>
              <p class="use-desc">Pass <code>this::handleEvent</code> or <code>service::process</code> as callbacks without wrapping in anonymous classes — reduces boilerplate significantly.</p>
            </div>
          </div>
          <div class="use-case teal">
            <div class="use-num teal-bg">3</div>
            <div>
              <h4 class="use-title">Stream Collectors</h4>
              <p class="use-desc"><code>stream.collect(Collectors.toCollection(LinkedList::new))</code> or <code>stream.toArray(String[]::new)</code> — constructor references make collection-to-array conversions clean.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-orange { color: #ea580c; }
    .icon-indigo { color: #4f46e5; }

    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #ea580c; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 20px; }

    .kinds-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 16px; }
    .kind-card { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 14px; cursor: pointer; transition: all 0.2s; }
    .kind-card:hover { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .kind-card.active { background: #fff; }
    .kind-num { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; margin-bottom: 8px; }
    .kind-title { font-size: 0.82rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .kind-syntax { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 600; }

    .kind-detail { background: #fff7ed; border: 1px solid #fed7aa; border-radius: 12px; padding: 16px; }
    .kind-detail-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
    .kind-detail-desc { font-size: 0.78rem; color: #64748b; margin-bottom: 12px; }
    .equiv-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 8px; }
    .equiv-box { flex: 1; min-width: 160px; background: #fff; border-radius: 8px; padding: 10px 12px; border: 1px solid #e2e8f0; }
    .ref-box { border-width: 1px; border-style: solid; }
    .equiv-label { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 4px; }
    .equiv-box code { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .equiv-arrow { font-size: 1.2rem; color: #22c55e; font-weight: 700; }
    .kind-example { font-size: 0.72rem; color: #64748b; font-style: italic; }

    .ops-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    .op-btn { padding: 6px 14px; border-radius: 8px; border: 1px solid #e2e8f0; background: #f8fafc; color: #64748b; cursor: pointer; font-size: 0.78rem; font-weight: 600; transition: all 0.2s; }
    .op-btn.active { background: #ea580c; border-color: #ea580c; color: #fff; }
    .op-btn:hover:not(.active) { background: #fff; border-color: #cbd5e1; color: #334155; }

    .translator-body { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap; }
    .trans-col { flex: 1; min-width: 180px; background: #f8fafc; border-radius: 10px; padding: 12px 14px; }
    .lambda-col { border-left: 3px solid #94a3b8; }
    .ref-col { border-left: 3px solid #ea580c; }
    .trans-label { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 6px; letter-spacing: 0.1em; }
    .trans-code { font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; color: #334155; }
    .ref-text { color: #ea580c; }
    .trans-eq { font-size: 1.3rem; color: #22c55e; font-weight: 700; }

    .live-test { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
    .live-input { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 0.82rem; color: #0f172a; flex: 1; min-width: 140px; }
    .live-input:focus { outline: none; border-color: #ea580c; }
    .live-arrow { color: #ea580c; font-size: 1.1rem; font-weight: 700; }
    .live-result { background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 8px 14px; font-family: 'JetBrains Mono', monospace; font-size: 0.88rem; font-weight: 700; color: #ea580c; min-width: 80px; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0 0 12px; }
    .op-desc code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #ea580c; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.orange { background: #fff7ed; border-color: #fed7aa; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #0d9488; }
    .blue-bg { background: #3b82f6; }
    .orange-bg { background: #ea580c; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class MethodReferencesComponent {
  readonly kinds: RefKind[] = [
    { key: '1', title: 'Static Method Reference', syntax: 'ClassName::staticMethod', lambda: 'x -> ClassName.staticMethod(x)', description: 'References a static method. The lambda parameter is passed directly to the static method.', color: '#a855f7', example: 'Integer::parseInt, Math::abs, Objects::isNull' },
    { key: '2', title: 'Instance (Particular Object)', syntax: 'instance::instanceMethod', lambda: 'x -> instance.instanceMethod(x)', description: 'References an instance method on a specific captured object. That object is fixed at the point of reference creation.', color: '#3b82f6', example: 'System.out::println, myList::add' },
    { key: '3', title: 'Instance (Arbitrary Object)', syntax: 'ClassName::instanceMethod', lambda: 'x -> x.instanceMethod()', description: 'First lambda parameter becomes the receiver. The compiler resolves which overload based on the target functional interface.', color: '#10b981', example: 'String::toUpperCase, String::length, String::isEmpty' },
    { key: '4', title: 'Constructor Reference', syntax: 'ClassName::new', lambda: 'args -> new ClassName(args)', description: 'References a constructor. Useful for factory patterns, stream collectors, and toArray.', color: '#f59e0b', example: 'ArrayList::new, StringBuilder::new, int[]::new' },
  ];

  readonly demoOps: DemoOp[] = [
    { key: 'upper', label: 'toUpperCase', lambdaForm: 's -> s.toUpperCase()', refForm: 'String::toUpperCase', result: s => s.toUpperCase() },
    { key: 'trim',  label: 'trim',        lambdaForm: 's -> s.trim()',         refForm: 'String::trim',        result: s => s.trim() },
    { key: 'len',   label: 'length',      lambdaForm: 's -> String.valueOf(s.length())', refForm: 'String::length (+ valueOf)', result: s => String(s.length) },
    { key: 'blank', label: 'isBlank',     lambdaForm: 's -> s.isBlank()',      refForm: 'String::isBlank',     result: s => String(s.trim().length === 0) },
    { key: 'print', label: 'println',     lambdaForm: 's -> System.out.println(s)', refForm: 'System.out::println', result: s => `[printed: "${s}"]` },
  ];

  selectedKind = signal<RefKind>(this.kinds[0]);
  selectedOp   = signal<DemoOp>(this.demoOps[0]);
  liveInput    = signal('Hello World');

  selectKind(k: RefKind) { this.selectedKind.set(k); }
  selectOp(op: DemoOp)   { this.selectedOp.set(op); }
  setLiveInput(e: Event) { this.liveInput.set((e.target as HTMLInputElement).value); }

  liveResult = computed(() => {
    const op = this.selectedOp();
    return op ? op.result(this.liveInput()) : '';
  });

  introCode = `// Lambda — verbose but always valid
list.forEach(s -> System.out.println(s));

// Method Reference — shorthand for same lambda
list.forEach(System.out::println);

// Both compile to identical bytecode via invokedynamic`;

  fourKindsCode = `// 1. STATIC — Integer::parseInt
Function<String, Integer> parse = Integer::parseInt;
// same as: s -> Integer.parseInt(s)

// 2. INSTANCE on PARTICULAR object — System.out::println
Consumer<String> print = System.out::println;
// same as: s -> System.out.println(s)

// 3. INSTANCE on ARBITRARY object — String::toUpperCase
Function<String, String> upper = String::toUpperCase;
// same as: s -> s.toUpperCase()
// first parameter becomes the receiver

// 4. CONSTRUCTOR — ArrayList::new
Supplier<List<String>> listMaker = ArrayList::new;
// same as: () -> new ArrayList<>()

// BiFunction + arbitrary instance ref
BiFunction<String, String, Boolean> startsWith = String::startsWith;
// same as: (s, prefix) -> s.startsWith(prefix)`;

  constructorRefCode = `// Supplier — no-arg constructor
Supplier<StringBuilder> sbFactory = StringBuilder::new;
StringBuilder sb = sbFactory.get();

// Function — single-arg constructor
Function<String, StringBuilder> sbFromStr = StringBuilder::new;
sbFromStr.apply("hello"); // new StringBuilder("hello")

// toArray with array constructor reference
String[] words = Stream.of("a", "b", "c").toArray(String[]::new);

// Collect to specific List type
List<String> linked = stream
    .collect(Collectors.toCollection(LinkedList::new));`;

  comparatorCode = `record Employee(String name, String dept, int salary) {}

List<Employee> staff = List.of(
    new Employee("Alice", "Eng", 95000),
    new Employee("Bob",   "HR",  72000),
    new Employee("Carol", "Eng", 88000)
);

// Sort by single field
staff.stream()
    .sorted(Comparator.comparing(Employee::name))
    .toList();

// Multi-field chained sort
staff.stream()
    .sorted(Comparator.comparing(Employee::dept)
        .thenComparingInt(Employee::salary).reversed())
    .toList();

// Max by field
Optional<Employee> topEarner = staff.stream()
    .max(Comparator.comparingInt(Employee::salary));`;
}
