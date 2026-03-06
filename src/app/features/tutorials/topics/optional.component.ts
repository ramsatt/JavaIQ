import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-optional',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Optional"
      subtitle="Eliminate NullPointerException with Optional — creation, safe retrieval, map, flatMap, filter, and anti-patterns."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0f4c81, #0ea5e9)">

      <!-- SECTION 1: The Null Problem -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-sky" /> The Null Problem
        </h2>
        <div class="prose">
          <p>
            <code>NullPointerException</code> — Tony Hoare called it his "billion-dollar mistake". Pre-Java 8 code is littered with defensive null checks that obscure the real business logic. <strong>Optional&lt;T&gt;</strong> is a container that either holds a value or is explicitly empty — making nullability part of the type system.
          </p>
          <ul>
            <li><strong>Optional.of(value)</strong> — throws <code>NullPointerException</code> if value is null</li>
            <li><strong>Optional.ofNullable(value)</strong> — safe; wraps null as empty Optional</li>
            <li><strong>Optional.empty()</strong> — explicitly represents "no value"</li>
          </ul>
          <app-code-block [code]="codeCreation" />
        </div>
      </section>

      <!-- SECTION 2: Interactive Chain Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-sky" /> Optional Chain Visualizer
          </h3>
          <p class="viz-desc">Set the input and toggle chain steps to see where the Optional becomes empty.</p>

          <div class="chain-input-row">
            <label class="chain-label">Input username:</label>
            <input type="text" [value]="username()" (input)="setUsername($event)" placeholder="type a name..." class="chain-input" />
            <button class="btn-null" (click)="setNull()">Set null</button>
          </div>

          <div class="chain-steps">
            @for (step of chainSteps(); track step.id) {
              <div class="chain-step" [class.passed]="step.passed" [class.blocked]="step.blocked">
                <div class="step-dot" [class.dot-passed]="step.passed" [class.dot-blocked]="step.blocked">
                  {{ step.passed ? '✓' : step.blocked ? '✗' : '○' }}
                </div>
                <div class="step-body">
                  <div class="step-code">{{ step.code }}</div>
                  @if (step.note) {
                    <div class="step-note">{{ step.note }}</div>
                  }
                </div>
              </div>
            }
          </div>

          <div class="chain-result" [class.result-present]="chainResult() !== 'Guest'" [class.result-empty]="chainResult() === 'Guest'">
            Result: <strong>{{ chainResult() }}</strong>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Consuming Values -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Retrieving Values Safely
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> orElse / orElseGet</h3>
            <p class="op-desc">Prefer <code>orElseGet(Supplier)</code> for expensive defaults — the supplier is only called when empty.</p>
            <app-code-block [code]="codeOrElse" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> ifPresent / ifPresentOrElse</h3>
            <p class="op-desc">Execute a consumer when a value is present. Java 9+ adds the empty-branch via <code>ifPresentOrElse</code>.</p>
            <app-code-block [code]="codeIfPresent" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> map / flatMap</h3>
            <p class="op-desc"><code>map</code> transforms the value inside. <code>flatMap</code> avoids <code>Optional&lt;Optional&lt;T&gt;&gt;</code> when the mapper itself returns an Optional.</p>
            <app-code-block [code]="codeMap" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> filter / stream</h3>
            <p class="op-desc"><code>filter</code> empties the Optional if the predicate fails. <code>stream()</code> converts to a Stream of 0 or 1 elements (Java 9+).</p>
            <app-code-block [code]="codeFilter" />
          </div>
        </div>
      </section>

      <!-- SECTION 4: Anti-Patterns -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-red" /> Anti-Patterns to Avoid
        </h2>
        <div class="antipatterns">
          @for (ap of antiPatterns; track ap.title) {
            <div class="ap-card">
              <div class="ap-icon">⚠️</div>
              <div class="ap-body">
                <h4 class="ap-title">{{ ap.title }}</h4>
                <p class="ap-desc">{{ ap.desc }}</p>
              </div>
            </div>
          }
        </div>
        <app-code-block [code]="codeAntipatterns" />
      </section>

      <!-- SECTION 5: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-sky" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case sky">
            <div class="use-num sky-bg">1</div>
            <div>
              <h4 class="use-title">Repository Return Types</h4>
              <p class="use-desc"><code>Optional&lt;User&gt; findById(Long id)</code> — Spring Data repositories return <code>Optional</code> for find-by operations. The caller must explicitly handle the absent case.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Chained Domain Lookups</h4>
              <p class="use-desc"><code>findUser(id).flatMap(User::getAddress).map(Address::getCity).orElse("Unknown")</code> — replaces three nested null checks with a clean readable chain.</p>
            </div>
          </div>
          <div class="use-case teal">
            <div class="use-num teal-bg">3</div>
            <div>
              <h4 class="use-title">Config / Environment Values</h4>
              <p class="use-desc"><code>Optional.ofNullable(System.getenv("API_KEY")).orElseThrow(() -&gt; new ConfigException("API_KEY required"))</code> — fail fast with a meaningful message when required config is absent.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-sky { color: #0284c7; }
    .icon-indigo { color: #4f46e5; }
    .icon-red { color: #dc2626; }

    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0284c7; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 6px; }
    .viz-desc { font-size: 0.8rem; color: #64748b; margin: 0 0 20px; }

    .chain-input-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
    .chain-label { font-size: 0.78rem; font-weight: 700; color: #334155; }
    .chain-input { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 12px; font-size: 0.82rem; color: #0f172a; flex: 1; min-width: 140px; }
    .chain-input:focus { outline: none; border-color: #0284c7; }
    .btn-null { padding: 8px 14px; border-radius: 8px; border: 1px solid #fca5a5; background: #fef2f2; color: #dc2626; font-size: 0.78rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
    .btn-null:hover { background: #fee2e2; }

    .chain-steps { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .chain-step { display: flex; gap: 12px; padding: 12px 14px; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0; transition: all 0.2s; }
    .chain-step.passed { background: #f0fdf4; border-color: #86efac; }
    .chain-step.blocked { background: #fef2f2; border-color: #fca5a5; }
    .step-dot { width: 22px; height: 22px; min-width: 22px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.68rem; font-weight: 800; color: #64748b; }
    .step-dot.dot-passed { background: #22c55e; color: #fff; }
    .step-dot.dot-blocked { background: #ef4444; color: #fff; }
    .step-code { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #334155; }
    .step-note { font-size: 0.68rem; color: #64748b; margin-top: 2px; }

    .chain-result { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: #334155; }
    .chain-result.result-present { background: #f0fdf4; border-color: #86efac; color: #15803d; }
    .chain-result.result-empty { background: #fef9c3; border-color: #fde68a; color: #b45309; }
    .chain-result strong { font-weight: 800; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0 0 12px; }
    .op-desc code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #0284c7; }

    .antipatterns { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .ap-card { display: flex; gap: 12px; padding: 14px 16px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 12px; }
    .ap-icon { font-size: 1rem; flex-shrink: 0; }
    .ap-title { font-size: 0.88rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .ap-desc { font-size: 0.75rem; color: #64748b; margin: 0; line-height: 1.5; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.sky { background: #f0f9ff; border-color: #bae6fd; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #0d9488; }
    .blue-bg { background: #3b82f6; }
    .sky-bg { background: #0284c7; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class OptionalComponent {
  username = signal<string | null>('Alice');

  setUsername(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.username.set(val === '' ? null : val);
  }

  setNull() { this.username.set(null); }

  chainSteps = computed(() => {
    const raw = this.username();
    const step1Passed = raw !== null;
    const step2Passed = step1Passed && raw!.trim().length > 0;
    const step3Passed = step2Passed && raw!.trim().length >= 3;

    return [
      {
        id: 1, code: 'Optional.ofNullable(input)',
        note: raw === null ? 'Input is null → Optional.empty()' : `Input is "${raw}" → Optional.of("${raw}")`,
        passed: step1Passed, blocked: !step1Passed
      },
      {
        id: 2, code: '.filter(s -> !s.isBlank())',
        note: step1Passed && !step2Passed ? 'Blank string → filter returns empty' : step1Passed ? 'Not blank → passes through' : 'Already empty — skipped',
        passed: step2Passed, blocked: step1Passed && !step2Passed
      },
      {
        id: 3, code: '.filter(s -> s.length() >= 3)',
        note: step2Passed && !step3Passed ? `"${raw}" is too short → filter empties` : step2Passed ? 'Length OK → passes through' : 'Already empty — skipped',
        passed: step3Passed, blocked: step2Passed && !step3Passed
      },
      {
        id: 4, code: '.map(String::trim)',
        note: step3Passed ? `Maps "${raw}" → "${raw!.trim()}"` : 'Already empty — map is not called',
        passed: step3Passed, blocked: false
      },
      {
        id: 5, code: '.orElse("Guest")',
        note: step3Passed ? `Has value "${raw!.trim()}" → orElse default not used` : 'Optional is empty → returns "Guest"',
        passed: step3Passed, blocked: false
      },
    ];
  });

  chainResult = computed(() => {
    const raw = this.username();
    if (raw === null || raw.trim().length === 0 || raw.trim().length < 3) return 'Guest';
    return raw.trim();
  });

  readonly antiPatterns = [
    { title: 'Never use Optional as a method parameter or field', desc: 'Optional is meant for return types only. Passing Optional as a parameter forces callers to wrap values needlessly — use method overloading instead.' },
    { title: 'isPresent() + get() defeats the purpose', desc: 'optional.isPresent() then optional.get() is just a null check in disguise. Use map/ifPresent/orElse instead.' },
    { title: 'orElse with expensive defaults', desc: 'orElse(expensiveCall()) always evaluates the argument even when the Optional is present. Use orElseGet(() -> expensiveCall()) for lazy evaluation.' },
    { title: 'Optional in collections', desc: 'List<Optional<T>> or Map<K, Optional<V>> are always wrong. Use null-hostile collections or filter empties with Stream.flatMap(Optional::stream).' },
  ];

  codeCreation = `// Optional.of — throws NPE if null
Optional<String> name   = Optional.of("Alice");

// Optional.ofNullable — safe, wraps null as empty
Optional<String> maybe  = Optional.ofNullable(getUserInput());

// Optional.empty — explicitly no value
Optional<String> empty  = Optional.empty();

System.out.println(name.isPresent());  // true
System.out.println(empty.isEmpty());   // true  (Java 11+)`;

  codeOrElse = `Optional<String> opt = Optional.ofNullable(findUsername());

// orElse — default always evaluated (even if present!)
String name = opt.orElse("Guest");

// orElseGet — Supplier, only called when empty (prefer this)
String lazy = opt.orElseGet(() -> fetchDefaultUser());

// orElseThrow — custom exception when absent
String req  = opt.orElseThrow(
    () -> new UserNotFoundException("no user found"));

// get() — throws NoSuchElementException if empty (avoid!)
String val  = opt.get(); // risky — check isPresent() first`;

  codeIfPresent = `Optional<String> opt = Optional.of("Alice");

// ifPresent — Consumer, runs only when present
opt.ifPresent(System.out::println); // prints "Alice"

// ifPresentOrElse — Java 9+
opt.ifPresentOrElse(
    s -> System.out.println("Found: " + s),
    () -> System.out.println("No value")
);

// or() — Java 9+, returns another Optional if empty
Optional<String> fallback = opt.or(() -> Optional.of("Guest"));`;

  codeMap = `// map — transform value inside Optional
Optional<String> name = Optional.of("  alice  ");
Optional<Integer> len = name
    .map(String::trim)           // Optional.of("alice")
    .map(String::length);        // Optional.of(5)

// flatMap — avoid Optional<Optional<>>
// findUser returns Optional<User>, getAddress returns Optional<Address>
Optional<String> city = findUser(id)       // Optional<User>
    .flatMap(User::getAddress)             // Optional<Address>
    .map(Address::getCity);                // Optional<String>

// Without flatMap you'd get Optional<Optional<Address>> with map`;

  codeFilter = `Optional<Integer> age = Optional.of(17);

// filter — empties Optional if predicate fails
Optional<Integer> adult = age.filter(a -> a >= 18);
System.out.println(adult.isEmpty()); // true

// stream() — Java 9+, converts Optional to a 0 or 1 element stream
List<Optional<String>> opts = List.of(
    Optional.of("Alice"), Optional.empty(), Optional.of("Bob"));
List<String> names = opts.stream()
    .flatMap(Optional::stream) // flatten Optional stream
    .toList();                 // ["Alice", "Bob"]`;

  codeAntipatterns = `// BAD: isPresent() + get() = null check in disguise
if (opt.isPresent()) {
    System.out.println(opt.get()); // just use ifPresent!
}
// GOOD:
opt.ifPresent(System.out::println);

// BAD: orElse with expensive computation
String val = opt.orElse(fetchFromDatabase()); // always runs!
// GOOD:
String val2 = opt.orElseGet(() -> fetchFromDatabase()); // lazy

// BAD: Optional as field or parameter
public class User {
    private Optional<String> nickname; // never do this
}
// GOOD: use null or separate method overload

// BAD: Optional in collections
List<Optional<User>> users = ...; // nonsensical
// GOOD:
List<User> users2 = optList.stream()
    .flatMap(Optional::stream)
    .toList();`;
}
