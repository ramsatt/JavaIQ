import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialLayoutComponent } from '../tutorial-layout.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { IconComponent } from '../../../shared/icon.component';

interface FiCard {
  name: string;
  signature: string;
  description: string;
  example: string;
  color: string;
}

@Component({
  selector: 'app-topic-functional-interfaces',
  standalone: true,
  imports: [CommonModule, TutorialLayoutComponent, CodeBlockComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-tutorial-layout
      title="Functional Interfaces"
      subtitle="The building blocks of functional programming in Java — predefined contracts for functions, predicates, consumers, and suppliers"
      badge="Functional Java"
      [gradient]="gradient">

      <!-- SECTION 1: What is a Functional Interface -->
      <section class="section">
        <h2 class="section-title">What Is a Functional Interface?</h2>
        <p class="section-desc">
          A functional interface has exactly one abstract method (SAM — Single Abstract Method).
          It can have any number of default or static methods. The <code>@FunctionalInterface</code>
          annotation enforces this at compile time and enables lambda expression assignment.
        </p>
        <app-code-block [code]="samCode" language="java" />
      </section>

      <!-- SECTION 2: Core Interfaces Grid -->
      <section class="section">
        <h2 class="section-title">The Core java.util.function Interfaces</h2>
        <p class="section-desc">
          Java ships 43 functional interfaces. These 6 are the foundation — everything else is a
          specialization or composition of these.
        </p>

        <div class="fi-grid">
          <div
            class="fi-card"
            *ngFor="let fi of coreInterfaces"
            [class.selected]="selectedFi()?.name === fi.name"
            [ngStyle]="{'border-color': selectedFi()?.name === fi.name ? fi.color : 'transparent'}"
            (click)="selectFi(fi)">
            <div class="fi-name" [ngStyle]="{'color': fi.color}">{{ fi.name }}</div>
            <div class="fi-sig">{{ fi.signature }}</div>
            <div class="fi-desc">{{ fi.description }}</div>
          </div>
        </div>

        <div class="fi-detail" *ngIf="selectedFi()">
          <div class="fi-detail-header" [ngStyle]="{'border-left-color': selectedFi()!.color}">
            <span class="fi-detail-name" [ngStyle]="{'color': selectedFi()!.color}">{{ selectedFi()!.name }}</span>
            <span class="fi-detail-sig">{{ selectedFi()!.signature }}</span>
          </div>
          <div class="fi-detail-example">{{ selectedFi()!.example }}</div>
        </div>

        <app-code-block [code]="coreUsageCode" language="java" />
      </section>

      <!-- SECTION 3: Function Composer Visualizer -->
      <section class="section">
        <h2 class="section-title">Function Composer</h2>
        <p class="section-desc">
          <code>Function</code> supports <code>andThen()</code> and <code>compose()</code> for building pipelines.
          Select two transformations and watch them chain.
        </p>

        <div class="viz-card">
          <div class="composer-row">
            <div class="composer-step">
              <label class="composer-label">Input</label>
              <input
                type="text"
                [value]="composerInput()"
                (input)="setInput($event)"
                placeholder="enter text..."
                class="composer-input" />
            </div>

            <div class="pipe-arrow">→</div>

            <div class="composer-step">
              <label class="composer-label">fn1</label>
              <select class="composer-select" (change)="setFn1($event)">
                <option *ngFor="let t of transforms" [value]="t.key">{{ t.label }}</option>
              </select>
            </div>

            <div class="pipe-arrow">→</div>

            <div class="composer-step">
              <label class="composer-label">fn2</label>
              <select class="composer-select" (change)="setFn2($event)">
                <option *ngFor="let t of transforms" [value]="t.key" [selected]="t.key === fn2Key()">{{ t.label }}</option>
              </select>
            </div>

            <div class="pipe-arrow">→</div>

            <div class="composer-step">
              <label class="composer-label">Result</label>
              <div class="composer-result">{{ composerResult() }}</div>
            </div>
          </div>

          <div class="composer-code">
            <code>Function&lt;String, String&gt; composed = fn1.andThen(fn2);</code><br>
            <code>// "{{ composerInput() }}" → fn1 → "{{ afterFn1() }}" → fn2 → "{{ composerResult() }}"</code>
          </div>
        </div>

        <app-code-block [code]="compositionCode" language="java" />
      </section>

      <!-- SECTION 4: Predicate Composition -->
      <section class="section">
        <h2 class="section-title">Predicate Composition</h2>
        <p class="section-desc">
          <code>Predicate</code> supports <code>and()</code>, <code>or()</code>, and <code>negate()</code>
          for building complex boolean logic without nested if statements.
        </p>
        <app-code-block [code]="predicateCode" language="java" />
      </section>

      <!-- SECTION 5: Specialized Interfaces -->
      <section class="section">
        <h2 class="section-title">Bi- and Primitive Variants</h2>
        <p class="section-desc">
          Java provides specialized variants to avoid boxing overhead for primitives and to handle
          two-argument functions.
        </p>

        <div class="spec-table">
          <div class="spec-header">
            <span>Interface</span><span>Signature</span><span>Use case</span>
          </div>
          <div class="spec-row" *ngFor="let s of specInterfaces">
            <span class="spec-name">{{ s.name }}</span>
            <span class="spec-sig">{{ s.sig }}</span>
            <span class="spec-use">{{ s.use }}</span>
          </div>
        </div>

        <app-code-block [code]="biCode" language="java" />
      </section>

      <!-- SECTION 6: Custom Functional Interface -->
      <section class="section">
        <h2 class="section-title">Custom Functional Interfaces</h2>
        <p class="section-desc">
          Define your own when the built-ins don't fit — especially for checked exceptions or
          domain-specific semantics.
        </p>
        <app-code-block [code]="customFiCode" language="java" />
      </section>

      <!-- SECTION 7: Interview Tips -->
      <section class="section">
        <h2 class="section-title">Interview Tips</h2>
        <ul class="tips-list">
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>SAM rule:</strong> Exactly one abstract method — but default and static methods are allowed. <code>Comparator</code> is a functional interface despite having many default methods.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>andThen vs compose:</strong> <code>f.andThen(g)</code> runs f first then g. <code>f.compose(g)</code> runs g first then f — think mathematical composition.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Avoid boxing:</strong> Use <code>IntPredicate</code>, <code>ToIntFunction</code>, <code>IntUnaryOperator</code> etc. for primitive streams to avoid autoboxing overhead.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Checked exceptions:</strong> Built-in functional interfaces don't declare checked exceptions. Wrap in a try-catch or define a custom <code>ThrowingFunction&lt;T, R, E&gt;</code>.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Runnable vs Supplier:</strong> <code>Runnable</code> takes nothing and returns void. <code>Supplier&lt;T&gt;</code> takes nothing and returns T — pick based on whether you need a value back.</span>
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

    /* FI Grid */
    .fi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
    .fi-card { background: #0f172a; border: 2px solid transparent; border-radius: 10px; padding: 0.9rem; cursor: pointer; transition: all 0.2s; }
    .fi-card:hover { background: #1e293b; }
    .fi-name { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.3rem; }
    .fi-sig { font-family: monospace; font-size: 0.75rem; color: #64748b; margin-bottom: 0.4rem; }
    .fi-desc { font-size: 0.78rem; color: #94a3b8; }

    .fi-detail { background: #0f172a; border-radius: 10px; border-left: 3px solid; padding: 0.9rem 1rem; margin-bottom: 1rem; }
    .fi-detail-header { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
    .fi-detail-name { font-weight: 700; font-size: 0.95rem; }
    .fi-detail-sig { font-family: monospace; font-size: 0.8rem; color: #64748b; }
    .fi-detail-example { font-size: 0.82rem; color: #94a3b8; line-height: 1.5; }

    /* Composer */
    .viz-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
    .composer-row { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 0.75rem; margin-bottom: 1rem; }
    .composer-step { display: flex; flex-direction: column; gap: 0.35rem; }
    .composer-label { font-size: 0.72rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    .composer-input { background: #1e293b; border: 1px solid #334155; color: #e2e8f0; border-radius: 6px; padding: 0.4rem 0.7rem; font-size: 0.85rem; width: 130px; }
    .composer-input:focus { outline: none; border-color: #a855f7; }
    .composer-select { background: #1e293b; border: 1px solid #334155; color: #e2e8f0; border-radius: 6px; padding: 0.4rem 0.7rem; font-size: 0.82rem; cursor: pointer; }
    .composer-result { background: #1e1b4b; border: 1px solid #6d28d9; color: #c084fc; border-radius: 6px; padding: 0.4rem 0.75rem; font-size: 0.9rem; font-weight: 700; min-width: 100px; font-family: monospace; }
    .pipe-arrow { color: #6d28d9; font-size: 1.2rem; font-weight: 700; align-self: flex-end; padding-bottom: 0.35rem; }
    .composer-code { font-size: 0.78rem; font-family: monospace; color: #94a3b8; background: #1e293b; padding: 0.6rem 0.9rem; border-radius: 6px; line-height: 1.8; }
    .composer-code code { color: #c084fc; }

    /* Spec table */
    .spec-table { background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; overflow: hidden; margin-bottom: 1rem; font-size: 0.82rem; }
    .spec-header { display: grid; grid-template-columns: 1.5fr 1.5fr 2fr; background: #1e293b; padding: 0.55rem 1rem; font-weight: 700; color: #e2e8f0; gap: 0.5rem; }
    .spec-row { display: grid; grid-template-columns: 1.5fr 1.5fr 2fr; padding: 0.45rem 1rem; gap: 0.5rem; border-top: 1px solid #1e293b; }
    .spec-row:nth-child(even) { background: #0a0f1e; }
    .spec-name { color: #a855f7; font-family: monospace; font-weight: 600; }
    .spec-sig { color: #7dd3fc; font-family: monospace; font-size: 0.78rem; }
    .spec-use { color: #94a3b8; }

    /* Tips */
    .tips-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .tips-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #94a3b8; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 0.75rem; }
    .tips-list li strong { color: #e2e8f0; }
  `]
})
export class FunctionalInterfacesComponent {
  readonly gradient = 'linear-gradient(135deg, #4c1d95, #a855f7)';

  readonly coreInterfaces: FiCard[] = [
    {
      name: 'Function<T, R>',
      signature: 'R apply(T t)',
      description: 'Transform T into R — the universal mapper',
      example: 'Use in stream.map(), data transformation, value conversion pipelines.',
      color: '#a855f7'
    },
    {
      name: 'Predicate<T>',
      signature: 'boolean test(T t)',
      description: 'Test a condition — returns true or false',
      example: 'Use in stream.filter(), validation logic, search predicates.',
      color: '#3b82f6'
    },
    {
      name: 'Consumer<T>',
      signature: 'void accept(T t)',
      description: 'Consume T, return nothing — side effects',
      example: 'Use in stream.forEach(), logging, printing, sending events.',
      color: '#10b981'
    },
    {
      name: 'Supplier<T>',
      signature: 'T get()',
      description: 'Produce T, take nothing — lazy factory',
      example: 'Use in Optional.orElseGet(), lazy initialization, default value providers.',
      color: '#f59e0b'
    },
    {
      name: 'UnaryOperator<T>',
      signature: 'T apply(T t)',
      description: 'Function<T,T> — input and output same type',
      example: 'Use in List.replaceAll(), string transforms, value normalization.',
      color: '#ef4444'
    },
    {
      name: 'BinaryOperator<T>',
      signature: 'T apply(T t1, T t2)',
      description: 'BiFunction<T,T,T> — combine two values of same type',
      example: 'Use in stream.reduce(), min/max accumulation, merging maps.',
      color: '#06b6d4'
    },
  ];

  readonly specInterfaces = [
    { name: 'BiFunction<T,U,R>', sig: 'R apply(T t, U u)', use: 'Two inputs, one output' },
    { name: 'BiPredicate<T,U>', sig: 'boolean test(T t, U u)', use: 'Two-arg condition check' },
    { name: 'BiConsumer<T,U>', sig: 'void accept(T t, U u)', use: 'Consume two values (e.g. Map.forEach)' },
    { name: 'IntFunction<R>', sig: 'R apply(int v)', use: 'int input, avoid Integer boxing' },
    { name: 'ToIntFunction<T>', sig: 'int applyAsInt(T t)', use: 'Returns primitive int' },
    { name: 'IntUnaryOperator', sig: 'int applyAsInt(int v)', use: 'int→int, zero boxing' },
    { name: 'IntBinaryOperator', sig: 'int applyAsInt(int a, int b)', use: 'Combine two ints (e.g. sum)' },
  ];

  readonly transforms = [
    { key: 'upper', label: 'toUpperCase' },
    { key: 'lower', label: 'toLowerCase' },
    { key: 'trim',  label: 'trim()' },
    { key: 'rev',   label: 'reverse' },
    { key: 'len',   label: 'length() → String' },
    { key: 'excl',  label: 'add "!"' },
  ];

  readonly selectedFi = signal<FiCard | null>(this.coreInterfaces[0]);
  readonly composerInput = signal('Hello World');
  readonly fn1Key = signal('upper');
  readonly fn2Key = signal('rev');

  selectFi(fi: FiCard) { this.selectedFi.set(fi); }
  setInput(e: Event) { this.composerInput.set((e.target as HTMLInputElement).value); }
  setFn1(e: Event) { this.fn1Key.set((e.target as HTMLSelectElement).value); }
  setFn2(e: Event) { this.fn2Key.set((e.target as HTMLSelectElement).value); }

  private applyTransform(key: string, value: string): string {
    switch (key) {
      case 'upper': return value.toUpperCase();
      case 'lower': return value.toLowerCase();
      case 'trim':  return value.trim();
      case 'rev':   return value.split('').reverse().join('');
      case 'len':   return String(value.length);
      case 'excl':  return value + '!';
      default:      return value;
    }
  }

  readonly afterFn1 = computed(() => this.applyTransform(this.fn1Key(), this.composerInput()));
  readonly composerResult = computed(() => this.applyTransform(this.fn2Key(), this.afterFn1()));

  // --- Code Snippets ---
  readonly samCode = `@FunctionalInterface
public interface Transformer<T, R> {
    R transform(T input);  // single abstract method

    default Transformer<T, R> andLog() {   // default method — allowed
        return input -> {
            R result = transform(input);
            System.out.println(input + " → " + result);
            return result;
        };
    }
}

// Lambdas can be assigned to any functional interface
Transformer<String, Integer> length = s -> s.length();
length.transform("hello"); // 5`;

  readonly coreUsageCode = `import java.util.function.*;

// Function<T, R> — transform
Function<String, Integer> strLen = String::length;
Function<Integer, String> intStr = Object::toString;
Function<String, String>  composed = strLen.andThen(intStr); // String→String

// Predicate<T> — filter
Predicate<String> isLong   = s -> s.length() > 5;
Predicate<String> startsA  = s -> s.startsWith("A");
Predicate<String> combined = isLong.and(startsA);

// Consumer<T> — side effect
Consumer<String> print  = System.out::println;
Consumer<String> upper  = s -> System.out.println(s.toUpperCase());
Consumer<String> both   = print.andThen(upper);

// Supplier<T> — lazy value
Supplier<List<String>> listFactory = ArrayList::new;
Supplier<LocalDate>    today       = LocalDate::now;

// UnaryOperator<T>
UnaryOperator<String> trim = String::trim;

// BinaryOperator<T>
BinaryOperator<Integer> add = Integer::sum;`;

  readonly compositionCode = `Function<String, String> trim  = String::trim;
Function<String, String> upper = String::toUpperCase;
Function<String, String> excl  = s -> s + "!";

// andThen: left to right
Function<String, String> pipeline = trim.andThen(upper).andThen(excl);
pipeline.apply("  hello  "); // "HELLO!"

// compose: right to left (mathematical order)
Function<String, String> reversed = excl.compose(upper).compose(trim);
reversed.apply("  hello  "); // also "HELLO!" — same result, different read order

// Identity — returns input unchanged
Function<String, String> identity = Function.identity();`;

  readonly predicateCode = `Predicate<Integer> isEven     = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;
Predicate<Integer> isSmall    = n -> n < 100;

// Composed predicates
Predicate<Integer> evenAndPositive = isEven.and(isPositive);
Predicate<Integer> evenOrSmall     = isEven.or(isSmall);
Predicate<Integer> isOdd           = isEven.negate();

List<Integer> numbers = List.of(-4, 0, 3, 8, 42, 101);

numbers.stream()
    .filter(evenAndPositive)
    .collect(Collectors.toList()); // [8, 42]

// Static Predicate.not() (Java 11+)
List<String> words = List.of("hello", "", "world", " ", "java");
words.stream()
    .filter(Predicate.not(String::isBlank))
    .collect(Collectors.toList()); // ["hello", "world", "java"]`;

  readonly biCode = `// BiFunction<T, U, R>
BiFunction<String, Integer, String> repeat = (s, n) -> s.repeat(n);
repeat.apply("ab", 3); // "ababab"

// BiConsumer — Map.forEach uses BiConsumer<K, V>
Map<String, Integer> scores = Map.of("Alice", 95, "Bob", 87);
scores.forEach((name, score) ->
    System.out.printf("%s scored %d%n", name, score));

// Primitive variants — no boxing!
IntBinaryOperator sum = (a, b) -> a + b;
IntStream.of(1, 2, 3, 4).reduce(0, sum); // 10 — no Integer objects

ToIntFunction<String> length = String::length;
IntStream.of("hi", "hello").mapToInt(length); // 2, 5`;

  readonly customFiCode = `// Custom FI for checked exceptions (standard ones can't throw checked)
@FunctionalInterface
public interface ThrowingFunction<T, R> {
    R apply(T t) throws Exception;

    static <T, R> Function<T, R> wrap(ThrowingFunction<T, R> fn) {
        return t -> {
            try { return fn.apply(t); }
            catch (Exception e) { throw new RuntimeException(e); }
        };
    }
}

// Usage — reading files in a stream
List<String> paths = List.of("a.txt", "b.txt");
paths.stream()
    .map(ThrowingFunction.wrap(Files::readString))  // no try-catch boilerplate
    .forEach(System.out::println);

// Domain-specific FI
@FunctionalInterface
interface PriceCalculator {
    BigDecimal calculate(Product p, int qty, boolean taxIncluded);
}`;
}
