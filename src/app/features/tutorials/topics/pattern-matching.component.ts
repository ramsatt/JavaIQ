import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-pattern-matching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Pattern Matching & Switch Expressions"
      subtitle="Write expressive, concise code with instanceof pattern matching (Java 16), switch expressions (Java 14), and switch patterns (Java 21)."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #4a044e, #d946ef)">

      <!-- Section 1: instanceof Pattern Matching -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-fuchsia" /> instanceof Pattern Matching (Java 16)
        </h2>
        <div class="prose">
          <p>
            Before Java 16, checking a type with <code>instanceof</code> required a separate cast on the next line.
            <strong>Pattern matching for instanceof</strong> (JEP 394, final in Java 16) combines the test and cast into
            a single expression. The compiler proves the cast is safe — no <code>ClassCastException</code> is possible.
          </p>
          <ul>
            <li>The <strong>pattern variable</strong> is automatically cast and available in the if-body.</li>
            <li>It is also available in the <code>&amp;&amp;</code> condition of the same if expression.</li>
            <li>It is NOT available in the else branch (the type test failed there).</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Switch Expressions -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="git-branch" [size]="28" css="icon-fuchsia" /> Switch Expressions (Java 14)
        </h2>
        <div class="prose">
          <p>
            Switch expressions (JEP 361, final in Java 14) allow <code>switch</code> to <strong>return a value</strong>.
            Arrow cases (<code>-&gt;</code>) eliminate fall-through and the need for <code>break</code>.
            Use <code>yield</code> when the case body needs multiple statements.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Switch Patterns -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-fuchsia" /> Switch Patterns (Java 21)
        </h2>
        <div class="prose">
          <p>
            Switch patterns (JEP 441, final in Java 21) bring <strong>type patterns</strong> into switch cases.
            You can match on type, deconstruct, and use <strong>guarded patterns</strong> (<code>when</code>) for
            additional conditions. Switch also handles <code>null</code> explicitly — no more NPE before the switch.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Sealed Classes + Switch -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shield" [size]="28" css="icon-fuchsia" /> Sealed Classes + Switch
        </h2>
        <div class="prose">
          <p>
            <strong>Sealed classes</strong> (Java 17) restrict which classes can extend them. When combined with
            switch patterns, the compiler knows all possible subtypes and can enforce <strong>exhaustiveness</strong>
            — no <code>default</code> case needed. Adding a new subtype without updating the switch causes a compile error.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Record Patterns -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="package" [size]="28" css="icon-fuchsia" /> Record Patterns (Java 21)
        </h2>
        <div class="prose">
          <p>
            Record patterns (JEP 440, final in Java 21) allow <strong>deconstruction</strong> of records directly
            in <code>instanceof</code> and <code>switch</code>. The component variables are bound automatically —
            no manual accessor calls needed. Nested record patterns are supported.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-fuchsia" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Pattern Variable Scope</h4>
              <p class="tip-desc">The pattern variable is in scope in the if-body AND in the <code>&amp;&amp;</code> part of the same condition: <code>if (obj instanceof String s &amp;&amp; s.length() > 5)</code>. It is NOT in scope in the else branch or in <code>||</code> conditions.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Exhaustiveness with Sealed Types</h4>
              <p class="tip-desc">When switching over a sealed type, the compiler verifies all permitted subtypes are covered. Adding a new subtype without updating the switch is a <strong>compile error</strong> — not a runtime bug. This is one of the biggest advantages of sealed classes.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Java Version Requirements</h4>
              <p class="tip-desc"><code>instanceof</code> pattern matching — stable in Java 16. Switch expressions — stable in Java 14. Switch patterns (type patterns in switch) — stable in Java 21. Record patterns — stable in Java 21. Always check the Java version when using these features.</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-fuchsia { color: #d946ef; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #fdf4ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4a044e;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #d946ef; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fdf4ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #4a044e; }
  `
})
export class PatternMatchingComponent {

  code1 = `Object obj = "Hello, Java 21";

// OLD way (before Java 16) — noisy cast
if (obj instanceof String) {
    String s = (String) obj;    // redundant cast — we already know it's a String
    System.out.println(s.length());
}

// NEW way — pattern matching instanceof (Java 16)
if (obj instanceof String s) {
    System.out.println(s.length()); // s is already cast and in scope
}

// Pattern variable in && condition
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Pattern variable is NOT in scope in else
if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // OK
} else {
    // System.out.println(s); // COMPILE ERROR — s is not in scope here
}

// Practical: polymorphic method without switching on type
double area(Shape shape) {
    if (shape instanceof Circle c)    return Math.PI * c.radius() * c.radius();
    if (shape instanceof Rectangle r) return r.width() * r.height();
    if (shape instanceof Triangle t)  return 0.5 * t.base() * t.height();
    throw new IllegalArgumentException("Unknown shape: " + shape);
}`;

  code2 = `// OLD switch statement — verbose, fall-through prone
String dayType;
switch (day) {
    case MONDAY: case TUESDAY: case WEDNESDAY: case THURSDAY: case FRIDAY:
        dayType = "Weekday"; break;   // forget break → fall-through bug!
    case SATURDAY: case SUNDAY:
        dayType = "Weekend"; break;
    default:
        throw new IllegalArgumentException();
}

// NEW switch expression (Java 14) — returns a value, no fall-through
String dayType = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY -> "Weekend";
    // No default needed for enum — compiler checks exhaustiveness!
};

// yield — for multi-statement cases in switch expressions
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY               -> 7;
    case THURSDAY, SATURDAY    -> 8;
    case WEDNESDAY             -> {
        System.out.println("Computing Wednesday...");
        yield 9;  // yield provides the value, like return inside a case block
    }
};

// Switch expression with return type
double getFee(String memberType) {
    return switch (memberType) {
        case "GOLD"     -> 0.0;
        case "SILVER"   -> 5.0;
        case "BRONZE"   -> 10.0;
        default         -> throw new IllegalArgumentException("Unknown: " + memberType);
    };
}`;

  code3 = `// Switch patterns (Java 21) — type matching in switch cases
Object obj = 42;

String result = switch (obj) {
    case Integer i  -> "Integer: " + i;
    case String s   -> "String of length " + s.length();
    case Double d   -> "Double: " + d;
    case int[] arr  -> "int array of length " + arr.length;
    case null       -> "null value";         // explicit null handling (no NPE!)
    default         -> "Something else: " + obj.getClass().getSimpleName();
};

// Guarded patterns — when clause adds a condition
String classify(Object obj) {
    return switch (obj) {
        case Integer i when i < 0    -> "Negative integer: " + i;
        case Integer i when i == 0   -> "Zero";
        case Integer i               -> "Positive integer: " + i;
        case String s when s.isEmpty() -> "Empty string";
        case String s                -> "String: " + s;
        default                      -> "Other";
    };
}

// null handling — without case null, null would throw NullPointerException
Object value = null;
String msg = switch (value) {
    case null    -> "Got null";
    case String s -> s.toUpperCase();
    default      -> value.toString();
};
System.out.println(msg); // "Got null" — no NPE!`;

  code4 = `// Sealed class hierarchy — compiler knows all permitted subtypes
public sealed interface Shape
    permits Circle, Rectangle, Triangle { }

public record Circle   (double radius)          implements Shape { }
public record Rectangle(double width, double height) implements Shape { }
public record Triangle (double base,  double height) implements Shape { }

// Switch with sealed types — EXHAUSTIVE, no default needed!
double area(Shape shape) {
    return switch (shape) {
        case Circle c       -> Math.PI * c.radius() * c.radius();
        case Rectangle r    -> r.width() * r.height();
        case Triangle t     -> 0.5 * t.base() * t.height();
        // No default — compiler knows these are all possible subtypes
    };
}

// Guarded patterns with sealed types
String describe(Shape shape) {
    return switch (shape) {
        case Circle c when c.radius() > 10  -> "Large circle (r=" + c.radius() + ")";
        case Circle c                       -> "Small circle (r=" + c.radius() + ")";
        case Rectangle r when r.width() == r.height() -> "Square (" + r.width() + ")";
        case Rectangle r                    -> "Rectangle " + r.width() + "x" + r.height();
        case Triangle t                     -> "Triangle (base=" + t.base() + ")";
    };
}

// Adding a new subtype WITHOUT updating the switch is a COMPILE ERROR:
// public record Pentagon(int sides) implements Shape { }
// area() would fail to compile — exhaustiveness broken.
// This catches missing cases at compile time, not runtime!`;

  code5 = `// Records — compact data carriers (Java 16+)
public record Point(int x, int y) { }
public record Line(Point start, Point end) { }
public record Named(String name, Point location) { }

Object obj = new Point(3, 4);

// Record pattern in instanceof (Java 21)
if (obj instanceof Point(int x, int y)) {
    System.out.println("x=" + x + ", y=" + y); // components bound directly
}

// Without record patterns — manual accessor calls
if (obj instanceof Point p) {
    int x = p.x();   // must call accessors
    int y = p.y();
}

// Record patterns in switch
String describe(Object shape) {
    return switch (shape) {
        case Point(int x, int y) when x == 0 && y == 0 -> "Origin";
        case Point(int x, int y) when x == 0            -> "On Y-axis at y=" + y;
        case Point(int x, int y)                        -> "Point(" + x + ", " + y + ")";
        default                                         -> "Not a point";
    };
}

// Nested record patterns — deconstruct records within records
Object obj2 = new Line(new Point(0, 0), new Point(3, 4));

if (obj2 instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {
    double length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    System.out.println("Line length: " + length); // 5.0
}

// Named record in switch with nested deconstruction
if (obj instanceof Named(String name, Point(int x, int y))) {
    System.out.printf("%s is at (%d, %d)%n", name, x, y);
}`;
}
