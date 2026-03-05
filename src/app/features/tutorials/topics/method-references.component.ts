import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialLayoutComponent } from '../tutorial-layout.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { IconComponent } from '../../../shared/icon.component';

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
  standalone: true,
  imports: [CommonModule, TutorialLayoutComponent, CodeBlockComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-tutorial-layout
      title="Method References"
      subtitle="A shorthand for lambdas that just call an existing method — cleaner, more readable, and zero overhead"
      badge="Functional Java"
      [gradient]="gradient">

      <!-- SECTION 1: What & Why -->
      <section class="section">
        <h2 class="section-title">What Are Method References?</h2>
        <p class="section-desc">
          Method references are syntactic sugar for lambdas that do nothing but call a single existing method.
          They use the <code>::</code> operator and are always equivalent to a lambda — the compiler converts
          them to the same bytecode.
        </p>
        <app-code-block [code]="introCode" language="java" />
      </section>

      <!-- SECTION 2: Four Kinds -->
      <section class="section">
        <h2 class="section-title">The Four Kinds of Method References</h2>
        <p class="section-desc">
          Click each kind to explore the syntax, equivalent lambda, and when to use it.
        </p>

        <div class="kinds-grid">
          <div
            class="kind-card"
            *ngFor="let k of kinds"
            [class.active]="selectedKind()?.key === k.key"
            [ngStyle]="{'border-color': selectedKind()?.key === k.key ? k.color : '#1e293b'}"
            (click)="selectKind(k)">
            <div class="kind-num" [ngStyle]="{'background': k.color + '22', 'color': k.color}">{{ k.key }}</div>
            <div class="kind-title">{{ k.title }}</div>
            <div class="kind-syntax" [ngStyle]="{'color': k.color}">{{ k.syntax }}</div>
          </div>
        </div>

        <div class="kind-detail" *ngIf="selectedKind()">
          <div class="kind-detail-head" [ngStyle]="{'border-left-color': selectedKind()!.color}">
            <div class="kind-detail-title">{{ selectedKind()!.title }}</div>
            <div class="kind-detail-desc">{{ selectedKind()!.description }}</div>
          </div>
          <div class="equiv-row">
            <div class="equiv-box lambda-box">
              <div class="equiv-label">Lambda</div>
              <code>{{ selectedKind()!.lambda }}</code>
            </div>
            <div class="equiv-arrow">≡</div>
            <div class="equiv-box ref-box" [ngStyle]="{'border-color': selectedKind()!.color + '66'}">
              <div class="equiv-label">Method Reference</div>
              <code [ngStyle]="{'color': selectedKind()!.color}">{{ selectedKind()!.syntax }}</code>
            </div>
          </div>
          <div class="kind-example">{{ selectedKind()!.example }}</div>
        </div>

        <app-code-block [code]="fourKindsCode" language="java" />
      </section>

      <!-- SECTION 3: Lambda ↔ Ref Translator -->
      <section class="section">
        <h2 class="section-title">Lambda ↔ Method Reference Translator</h2>
        <p class="section-desc">
          Select an operation to see the lambda and method reference forms side by side,
          then apply it to a live input.
        </p>

        <div class="viz-card">
          <div class="ops-row">
            <button
              class="op-btn"
              *ngFor="let op of demoOps"
              [class.active]="selectedOp()?.key === op.key"
              (click)="selectOp(op)">
              {{ op.label }}
            </button>
          </div>

          <div class="translator-body" *ngIf="selectedOp()">
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
            <input
              type="text"
              [value]="liveInput()"
              (input)="setLiveInput($event)"
              placeholder="type something..."
              class="live-input" />
            <div class="live-arrow">→</div>
            <div class="live-result">{{ liveResult() }}</div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Constructor References -->
      <section class="section">
        <h2 class="section-title">Constructor References</h2>
        <p class="section-desc">
          Constructor references use <code>ClassName::new</code> — perfect for factory patterns
          and stream collectors.
        </p>
        <app-code-block [code]="constructorRefCode" language="java" />
      </section>

      <!-- SECTION 5: Comparator Chains -->
      <section class="section">
        <h2 class="section-title">Method References in Comparator Chains</h2>
        <p class="section-desc">
          The most practical real-world use — sorting with <code>Comparator.comparing()</code>
          and method references reads almost like English.
        </p>
        <app-code-block [code]="comparatorCode" language="java" />
      </section>

      <!-- SECTION 6: Interview Tips -->
      <section class="section">
        <h2 class="section-title">Interview Tips</h2>
        <ul class="tips-list">
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Static vs instance:</strong> Static refs don't need an object; instance refs on a particular object capture that object; instance refs on arbitrary objects receive it as the first argument.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>When to prefer lambdas:</strong> Use a lambda when you need to do anything other than call one method — add logic, adapt argument order, or handle exceptions.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Tricky ambiguity:</strong> <code>String::valueOf</code> could be static <code>valueOf(Object)</code> or instance — the compiler resolves it by the target functional interface signature.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Constructor ref with generics:</strong> <code>ArrayList::new</code> creates a new list; <code>int[]::new</code> creates an int array — usable with <code>Stream.toArray(int[]::new)</code>.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Performance:</strong> Method references and equivalent lambdas produce identical bytecode — choose based on readability, not performance.</span>
          </li>
        </ul>
      </section>

    </app-tutorial-layout>
  `,
  styles: [`
    .section { margin-bottom: 2.5rem; }
    .section-title { font-size: 1.2rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; }
    .section-desc { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
    .section-desc code { background: #1e293b; padding: 1px 5px; border-radius: 3px; color: #7dd3fc; font-size: 0.85em; }

    /* Four Kinds */
    .kinds-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1rem; }
    @media (max-width: 500px) { .kinds-grid { grid-template-columns: 1fr; } }
    .kind-card { background: #0f172a; border: 2px solid #1e293b; border-radius: 10px; padding: 0.9rem; cursor: pointer; transition: all 0.2s; }
    .kind-card:hover { background: #1e293b; }
    .kind-card.active { background: #1e293b; }
    .kind-num { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; margin-bottom: 0.5rem; }
    .kind-title { font-size: 0.88rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.3rem; }
    .kind-syntax { font-family: monospace; font-size: 0.8rem; font-weight: 600; }

    .kind-detail { background: #0f172a; border-radius: 10px; padding: 1rem; margin-bottom: 1rem; border: 1px solid #1e293b; }
    .kind-detail-head { padding-left: 0.75rem; border-left: 3px solid; margin-bottom: 0.9rem; }
    .kind-detail-title { font-size: 0.95rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.25rem; }
    .kind-detail-desc { font-size: 0.82rem; color: #94a3b8; }
    .equiv-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
    .equiv-box { flex: 1; min-width: 180px; background: #1e293b; border-radius: 8px; padding: 0.6rem 0.9rem; border: 1px solid #334155; }
    .ref-box { border-color: transparent; border-width: 1px; border-style: solid; }
    .equiv-label { font-size: 0.7rem; color: #64748b; font-weight: 600; text-transform: uppercase; margin-bottom: 0.3rem; }
    .equiv-box code { font-family: monospace; font-size: 0.85rem; color: #94a3b8; }
    .equiv-arrow { font-size: 1.3rem; color: #4ade80; font-weight: 700; }
    .kind-example { font-size: 0.8rem; color: #64748b; font-style: italic; }

    /* Translator */
    .viz-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
    .ops-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
    .op-btn { padding: 0.35rem 0.8rem; border-radius: 6px; border: 1px solid #334155; background: transparent; color: #94a3b8; cursor: pointer; font-size: 0.8rem; transition: all 0.2s; }
    .op-btn.active { background: #0ea5e9; border-color: #0ea5e9; color: #fff; font-weight: 600; }
    .op-btn:hover:not(.active) { background: #1e293b; }

    .translator-body { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
    .trans-col { flex: 1; min-width: 180px; background: #1e293b; border-radius: 8px; padding: 0.7rem 1rem; }
    .lambda-col { border-left: 3px solid #64748b; }
    .ref-col { border-left: 3px solid #0ea5e9; }
    .trans-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 0.35rem; letter-spacing: 0.05em; }
    .trans-code { font-family: monospace; font-size: 0.85rem; color: #e2e8f0; word-break: break-all; }
    .ref-text { color: #38bdf8; }
    .trans-eq { font-size: 1.4rem; color: #4ade80; font-weight: 700; }

    .live-test { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .live-input { background: #1e293b; border: 1px solid #334155; color: #e2e8f0; border-radius: 6px; padding: 0.4rem 0.75rem; font-size: 0.85rem; flex: 1; min-width: 140px; }
    .live-input:focus { outline: none; border-color: #0ea5e9; }
    .live-arrow { color: #0ea5e9; font-size: 1.2rem; font-weight: 700; }
    .live-result { background: #0c1a2e; border: 1px solid #0ea5e944; color: #38bdf8; border-radius: 6px; padding: 0.4rem 0.9rem; font-family: monospace; font-size: 0.9rem; font-weight: 700; min-width: 100px; }

    /* Tips */
    .tips-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .tips-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #94a3b8; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 0.75rem; }
    .tips-list li strong { color: #e2e8f0; }
  `]
})
export class MethodReferencesComponent {
  readonly gradient = 'linear-gradient(135deg, #0c4a6e, #0ea5e9)';

  readonly kinds: RefKind[] = [
    {
      key: '1',
      title: 'Static Method Reference',
      syntax: 'ClassName::staticMethod',
      lambda: 'x -> ClassName.staticMethod(x)',
      description: 'References a static method. The lambda parameter is passed directly to the static method.',
      color: '#a855f7',
      example: 'Integer::parseInt, Math::abs, Objects::isNull, String::valueOf'
    },
    {
      key: '2',
      title: 'Instance (Particular Object)',
      syntax: 'instance::instanceMethod',
      lambda: 'x -> instance.instanceMethod(x)',
      description: 'References an instance method on a specific captured object. That object is fixed.',
      color: '#3b82f6',
      example: 'System.out::println, myList::add, logger::info'
    },
    {
      key: '3',
      title: 'Instance (Arbitrary Object)',
      syntax: 'ClassName::instanceMethod',
      lambda: 'x -> x.instanceMethod()',
      description: 'References an instance method where the first lambda parameter becomes the receiver object.',
      color: '#10b981',
      example: 'String::toUpperCase, String::length, String::isEmpty'
    },
    {
      key: '4',
      title: 'Constructor Reference',
      syntax: 'ClassName::new',
      lambda: 'args -> new ClassName(args)',
      description: 'References a constructor. Useful for factory methods, stream collectors, and object creation pipelines.',
      color: '#f59e0b',
      example: 'ArrayList::new, StringBuilder::new, int[]::new'
    },
  ];

  readonly demoOps: DemoOp[] = [
    {
      key: 'upper',
      label: 'toUpperCase',
      lambdaForm: 's -> s.toUpperCase()',
      refForm: 'String::toUpperCase',
      result: s => s.toUpperCase()
    },
    {
      key: 'trim',
      label: 'trim',
      lambdaForm: 's -> s.trim()',
      refForm: 'String::trim',
      result: s => s.trim()
    },
    {
      key: 'len',
      label: 'length',
      lambdaForm: 's -> String.valueOf(s.length())',
      refForm: 'String::length (then String.valueOf)',
      result: s => String(s.length)
    },
    {
      key: 'blank',
      label: 'isBlank',
      lambdaForm: 's -> s.isBlank()',
      refForm: 'String::isBlank',
      result: s => String(s.trim().length === 0)
    },
    {
      key: 'print',
      label: 'println',
      lambdaForm: 's -> System.out.println(s)',
      refForm: 'System.out::println',
      result: s => `[printed: "${s}"]`
    },
  ];

  readonly selectedKind = signal<RefKind>(this.kinds[0]);
  readonly selectedOp = signal<DemoOp>(this.demoOps[0]);
  readonly liveInput = signal('Hello World');

  selectKind(k: RefKind) { this.selectedKind.set(k); }
  selectOp(op: DemoOp) { this.selectedOp.set(op); }
  setLiveInput(e: Event) { this.liveInput.set((e.target as HTMLInputElement).value); }

  readonly liveResult = computed(() => {
    const op = this.selectedOp();
    return op ? op.result(this.liveInput()) : '';
  });

  // --- Code Snippets ---
  readonly introCode = `// Lambda — verbose but always valid
list.forEach(s -> System.out.println(s));

// Method Reference — shorthand for same lambda
list.forEach(System.out::println);

// The compiler infers the target functional interface (Consumer<String>)
// and maps System.out::println → (String s) -> System.out.println(s)

// Both produce identical bytecode via invokedynamic`;

  readonly fourKindsCode = `// 1. STATIC — Integer::parseInt
Function<String, Integer> parse = Integer::parseInt;
// same as: s -> Integer.parseInt(s)

// 2. INSTANCE on PARTICULAR object — System.out::println
Consumer<String> print = System.out::println;
// same as: s -> System.out.println(s)

// 3. INSTANCE on ARBITRARY object — String::toUpperCase
Function<String, String>  upper = String::toUpperCase;
// same as: s -> s.toUpperCase()
// first param becomes the receiver

// 4. CONSTRUCTOR — ArrayList::new
Supplier<List<String>>  listMaker = ArrayList::new;
// same as: () -> new ArrayList<>()

// Bifunction + arbitrary instance ref
BiFunction<String, String, Boolean> startsWith = String::startsWith;
// same as: (s, prefix) -> s.startsWith(prefix)`;

  readonly constructorRefCode = `// Constructor ref as Supplier
Supplier<StringBuilder> sbFactory = StringBuilder::new;
StringBuilder sb = sbFactory.get(); // new StringBuilder()

// Constructor ref as Function (single-arg constructor)
Function<String, StringBuilder> sbFromStr = StringBuilder::new;
sbFromStr.apply("hello"); // new StringBuilder("hello")

// Factory pattern with BiFunction
BiFunction<String, Integer, byte[]> byteArr = (s, len) ->  s.getBytes();

// Stream.toArray with array constructor reference
String[] words = Stream.of("a", "b", "c").toArray(String[]::new);
int[]   nums  = IntStream.range(0, 5).toArray();    // int[]::new implicit

// Collecting to specific list type
List<String> linked = stream.collect(Collectors.toCollection(LinkedList::new));`;

  readonly comparatorCode = `record Employee(String name, String dept, int salary) {}

List<Employee> staff = List.of(
    new Employee("Alice", "Eng",  95000),
    new Employee("Bob",   "HR",   72000),
    new Employee("Carol", "Eng",  88000),
    new Employee("Dave",  "HR",   75000)
);

// Single field sort — method reference reads naturally
staff.stream()
    .sorted(Comparator.comparing(Employee::name))
    .toList();

// Multi-field chained sort
staff.stream()
    .sorted(Comparator.comparing(Employee::dept)
                      .thenComparingInt(Employee::salary).reversed())
    .toList();
// Result: Eng(95000), Eng(88000), HR(75000), HR(72000)

// Max/min by field
Optional<Employee> topEarner = staff.stream()
    .max(Comparator.comparingInt(Employee::salary));`;
}
