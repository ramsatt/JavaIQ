import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

interface FiCard {
  name: string;
  signature: string;
  description: string;
  example: string;
  color: string;
}

interface Transform {
  key: string;
  label: string;
}

@Component({
  selector: 'app-topic-functional-interfaces',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Functional Interfaces"
      subtitle="The building blocks of functional programming in Java — predefined contracts for functions, predicates, consumers, and suppliers."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #701a75, #d946ef)">

      <!-- SECTION 1: What is a Functional Interface -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-fuchsia" /> What Is a Functional Interface?
        </h2>
        <div class="prose">
          <p>A <strong>functional interface</strong> has exactly one abstract method (SAM — Single Abstract Method). It can have any number of <code>default</code> or <code>static</code> methods. The <code>@FunctionalInterface</code> annotation enforces this at compile time and enables lambda expression assignment.</p>
          <p>All built-in functional interfaces live in <code>java.util.function</code>. The Big 4 are the foundation everything else builds on:</p>
          <ul>
            <li><strong>Predicate&lt;T&gt;</strong> — <code>boolean test(T t)</code> — filtering and testing</li>
            <li><strong>Function&lt;T,R&gt;</strong> — <code>R apply(T t)</code> — transformation</li>
            <li><strong>Consumer&lt;T&gt;</strong> — <code>void accept(T t)</code> — side effects</li>
            <li><strong>Supplier&lt;T&gt;</strong> — <code>T get()</code> — lazy value production</li>
          </ul>
          <app-code-block [code]="samCode" />
        </div>
      </section>

      <!-- SECTION 2: Function Composer Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-fuchsia" /> Function Composer
          </h3>
          <p class="viz-desc">Select two transformations and see them chain via <code>andThen()</code>.</p>

          <div class="composer-row">
            <div class="composer-step">
              <label class="composer-label">Input</label>
              <input type="text" [value]="composerInput()" (input)="setInput($event)" placeholder="type text..." class="composer-input" />
            </div>
            <div class="pipe-arrow">→</div>
            <div class="composer-step">
              <label class="composer-label">fn1</label>
              <select class="composer-select" (change)="setFn1($event)">
                @for (t of transforms; track t.key) {
                  <option [value]="t.key">{{ t.label }}</option>
                }
              </select>
            </div>
            <div class="pipe-arrow">→</div>
            <div class="composer-step">
              <label class="composer-label">fn2</label>
              <select class="composer-select" (change)="setFn2($event)">
                @for (t of transforms; track t.key) {
                  <option [value]="t.key" [selected]="t.key === fn2Key()">{{ t.label }}</option>
                }
              </select>
            </div>
            <div class="pipe-arrow">→</div>
            <div class="composer-step">
              <label class="composer-label">Result</label>
              <div class="composer-result">{{ composerResult() }}</div>
            </div>
          </div>
          <div class="composer-code">
            fn1.andThen(fn2).apply("{{ composerInput() }}") → "{{ afterFn1() }}" → "{{ composerResult() }}"
          </div>
        </div>
      </section>

      <!-- SECTION 3: Core Interfaces Grid -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Core Interfaces — Click to Explore
        </h2>
        <div class="fi-grid">
          @for (fi of coreInterfaces; track fi.name) {
            <div class="fi-card" [class.selected]="selectedFi()?.name === fi.name" (click)="selectFi(fi)">
              <div class="fi-name" [style.color]="fi.color">{{ fi.name }}</div>
              <div class="fi-sig">{{ fi.signature }}</div>
              <div class="fi-desc">{{ fi.description }}</div>
            </div>
          }
        </div>
        @if (selectedFi()) {
          <div class="fi-detail">
            <div class="fi-detail-name" [style.color]="selectedFi()!.color">{{ selectedFi()!.name }}</div>
            <div class="fi-detail-example">{{ selectedFi()!.example }}</div>
          </div>
        }
        <app-code-block [code]="coreUsageCode" />
      </section>

      <!-- SECTION 4: Composition -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-fuchsia" /> Composition Methods
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Predicate Composition</h3>
            <p class="op-desc"><code>and()</code>, <code>or()</code>, <code>negate()</code> — build complex boolean logic without nested if statements.</p>
            <app-code-block [code]="predicateCode" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Function Composition</h3>
            <p class="op-desc"><code>andThen()</code> (left-to-right) and <code>compose()</code> (right-to-left, mathematical order).</p>
            <app-code-block [code]="compositionCode" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Bi-Variants</h3>
            <p class="op-desc"><code>BiFunction</code>, <code>BiPredicate</code>, <code>BiConsumer</code> — two-input variants. Primitive variants avoid boxing.</p>
            <app-code-block [code]="biCode" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Custom Functional Interface</h3>
            <p class="op-desc">Define your own when built-ins don't fit — especially for checked exceptions or domain-specific semantics.</p>
            <app-code-block [code]="customFiCode" />
          </div>
        </div>
      </section>

      <!-- SECTION 5: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-fuchsia" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case purple">
            <div class="use-num purple-bg">1</div>
            <div>
              <h4 class="use-title">Predicate for Validation Chains</h4>
              <p class="use-desc">Compose multiple validation rules: <code>isNotBlank.and(isValidEmail).and(isUnique)</code> — build complex rules without if/else pyramids.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Function for Transformation Pipelines</h4>
              <p class="use-desc">Chain <code>Function</code> steps via <code>andThen</code> to convert raw DTOs into domain objects — clean, composable, testable.</p>
            </div>
          </div>
          <div class="use-case teal">
            <div class="use-num teal-bg">3</div>
            <div>
              <h4 class="use-title">Supplier for Lazy Initialization</h4>
              <p class="use-desc"><code>orElseGet(Supplier)</code> avoids computing an expensive default unless needed. Unlike <code>orElse(value)</code>, the Supplier is only called when the Optional is empty.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-fuchsia { color: #c026d3; }
    .icon-indigo { color: #4f46e5; }

    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #c026d3; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 6px; }
    .viz-desc { font-size: 0.8rem; color: #64748b; margin: 0 0 20px; }
    .viz-desc code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #c026d3; }

    .composer-row { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 12px; margin-bottom: 14px; }
    .composer-step { display: flex; flex-direction: column; gap: 6px; }
    .composer-label { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; }
    .composer-input { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 0.82rem; color: #0f172a; width: 140px; }
    .composer-input:focus { outline: none; border-color: #c026d3; }
    .composer-select { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 0.82rem; color: #0f172a; cursor: pointer; }
    .composer-result { background: #fdf4ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 8px 14px; font-family: 'JetBrains Mono', monospace; font-size: 0.88rem; font-weight: 700; color: #c026d3; min-width: 80px; }
    .pipe-arrow { color: #c026d3; font-size: 1.1rem; font-weight: 700; padding-bottom: 6px; }
    .composer-code { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #64748b; background: #f8fafc; border-radius: 8px; padding: 10px 14px; }

    .fi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 14px; }
    .fi-card { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 14px; cursor: pointer; transition: all 0.2s; }
    .fi-card:hover { background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .fi-card.selected { background: #fff; border-color: #c026d3; box-shadow: 0 2px 8px rgba(192,38,211,0.12); }
    .fi-name { font-size: 0.82rem; font-weight: 800; margin-bottom: 4px; }
    .fi-sig { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #64748b; margin-bottom: 4px; }
    .fi-desc { font-size: 0.72rem; color: #64748b; }
    .fi-detail { background: #fdf4ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 14px 16px; margin-bottom: 16px; }
    .fi-detail-name { font-size: 0.95rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    .fi-detail-example { font-size: 0.78rem; color: #64748b; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0 0 12px; }
    .op-desc code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #c026d3; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #fdf4ff; border-color: #e9d5ff; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #0d9488; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #a21caf; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class FunctionalInterfacesComponent {
  readonly coreInterfaces: FiCard[] = [
    { name: 'Function<T, R>', signature: 'R apply(T t)', description: 'Transform T into R — the universal mapper', example: 'Used in stream.map(), data transformation, value conversion pipelines.', color: '#a855f7' },
    { name: 'Predicate<T>', signature: 'boolean test(T t)', description: 'Test a condition — returns true or false', example: 'Used in stream.filter(), validation logic, search predicates.', color: '#3b82f6' },
    { name: 'Consumer<T>', signature: 'void accept(T t)', description: 'Consume T, return nothing — side effects', example: 'Used in stream.forEach(), logging, printing, sending events.', color: '#10b981' },
    { name: 'Supplier<T>', signature: 'T get()', description: 'Produce T, take nothing — lazy factory', example: 'Used in Optional.orElseGet(), lazy initialization, default value providers.', color: '#f59e0b' },
    { name: 'UnaryOperator<T>', signature: 'T apply(T t)', description: 'Function<T,T> — input and output same type', example: 'Used in List.replaceAll(), string transforms, value normalization.', color: '#ef4444' },
    { name: 'BinaryOperator<T>', signature: 'T apply(T t1, T t2)', description: 'BiFunction<T,T,T> — combine two values of same type', example: 'Used in stream.reduce(), min/max, merging maps.', color: '#06b6d4' },
  ];

  readonly transforms: Transform[] = [
    { key: 'upper', label: 'toUpperCase' },
    { key: 'lower', label: 'toLowerCase' },
    { key: 'trim',  label: 'trim()' },
    { key: 'rev',   label: 'reverse' },
    { key: 'excl',  label: 'add "!"' },
  ];

  selectedFi = signal<FiCard | null>(this.coreInterfaces[0]);
  composerInput = signal('Hello World');
  fn1Key = signal('upper');
  fn2Key = signal('rev');

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
      case 'excl':  return value + '!';
      default:      return value;
    }
  }

  afterFn1 = computed(() => this.applyTransform(this.fn1Key(), this.composerInput()));
  composerResult = computed(() => this.applyTransform(this.fn2Key(), this.afterFn1()));

  samCode = `@FunctionalInterface
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

  coreUsageCode = `import java.util.function.*;

// Function<T, R> — transform
Function<String, Integer> strLen   = String::length;
Function<String, String>  toUpper  = String::toUpperCase;

// Predicate<T> — filter
Predicate<String> isLong   = s -> s.length() > 5;
Predicate<String> startsA  = s -> s.startsWith("A");
Predicate<String> combined = isLong.and(startsA);

// Consumer<T> — side effect
Consumer<String> print = System.out::println;
Consumer<String> both  = print.andThen(s -> System.out.println(s.toUpperCase()));

// Supplier<T> — lazy value
Supplier<List<String>> listFactory = ArrayList::new;

// UnaryOperator<T>
UnaryOperator<String> trim = String::trim;

// BinaryOperator<T>
BinaryOperator<Integer> add = Integer::sum;`;

  predicateCode = `Predicate<Integer> isEven     = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;

Predicate<Integer> evenAndPositive = isEven.and(isPositive);
Predicate<Integer> evenOrPositive  = isEven.or(isPositive);
Predicate<Integer> isOdd           = isEven.negate();

// Predicate.not() — Java 11+
List<String> words = List.of("hello", "", "world", " ");
words.stream()
    .filter(Predicate.not(String::isBlank))
    .toList(); // ["hello", "world"]`;

  compositionCode = `Function<String, String> trim  = String::trim;
Function<String, String> upper = String::toUpperCase;
Function<String, String> excl  = s -> s + "!";

// andThen: left to right
Function<String, String> pipeline = trim.andThen(upper).andThen(excl);
pipeline.apply("  hello  "); // "HELLO!"

// compose: right to left (mathematical order)
// excl.compose(upper).compose(trim) ≡ trim → upper → excl
Function<String, String> same = excl.compose(upper).compose(trim);
same.apply("  hello  "); // "HELLO!"`;

  biCode = `// BiFunction<T, U, R> — two inputs, one output
BiFunction<String, Integer, String> repeat = (s, n) -> s.repeat(n);
repeat.apply("ab", 3); // "ababab"

// BiConsumer — Map.forEach uses BiConsumer<K, V>
Map<String, Integer> scores = Map.of("Alice", 95, "Bob", 87);
scores.forEach((name, score) ->
    System.out.printf("%s: %d%n", name, score));

// Primitive variants — avoid Integer boxing!
IntBinaryOperator sum = (a, b) -> a + b;
ToIntFunction<String> len = String::length;`;

  customFiCode = `// Custom FI for checked exceptions
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

// Usage in streams
List<String> paths = List.of("a.txt", "b.txt");
paths.stream()
    .map(ThrowingFunction.wrap(Files::readString))
    .forEach(System.out::println);`;
}
