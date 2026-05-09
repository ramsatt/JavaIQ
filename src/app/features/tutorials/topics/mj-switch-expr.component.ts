import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mj-switch-expr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Switch Expressions"
      subtitle="Java 14+'s arrow syntax, yield, and exhaustive pattern switches eliminate fall-through bugs and verbose break statements."
      badge="MODERN JAVA"
      gradient="linear-gradient(135deg, #0f766e, #2dd4bf)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-teal" /> Classic vs Modern Switch</h2>
        <div class="prose">
          <p>The <strong>classic switch statement</strong> requires <code>break</code> after every case and falls through silently. Switch expressions (Java 14) fix both problems with <strong>arrow syntax</strong> and a mandatory return value.</p>
          <app-code-block [code]="codeClassicVsModern" language="java" />
          <p>Key rules for switch expressions:</p>
          <ul>
            <li>Arrow cases are exhaustive — the compiler verifies all values are covered.</li>
            <li>No fall-through — each arm is independent.</li>
            <li>The whole thing is an expression — it returns a value.</li>
          </ul>
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-teal" /> yield in Block Arms</h2>
        <div class="prose">
          <p>When a case needs multiple statements, use a block <code>{ }</code> and return the value with <code>yield</code>:</p>
          <app-code-block [code]="codeYield" language="java" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="layers" [size]="28" css="icon-teal" /> Pattern Matching in Switch (Java 21)</h2>
        <div class="prose">
          <p>Java 21 extends switch with type patterns, guarded patterns, and null handling:</p>
          <app-code-block [code]="codePatternSwitch" language="java" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="zap" [size]="28" css="icon-teal" /> Interview Quick Reference</h2>
        <div class="cards-grid">
          <div class="card"><h3 class="card-title">Arrow vs Colon</h3><p>Arrow (<code>-></code>) = no fall-through. Colon (<code>:</code>) = old style, needs break. Prefer arrow.</p></div>
          <div class="card"><h3 class="card-title">yield vs return</h3><p>Use <code>yield</code> inside a switch expression block. <code>return</code> exits the whole method.</p></div>
          <div class="card"><h3 class="card-title">Exhaustiveness</h3><p>Enum switches without <code>default</code> are exhaustive — adding a new enum constant is a compile error, not a silent bug.</p></div>
          <div class="card"><h3 class="card-title">Null case (Java 21)</h3><p><code>case null -></code> explicitly handles null. Without it, a null input throws NPE.</p></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.35rem; font-weight: 800; color: var(--ion-text-color, #0f172a); margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid var(--ion-border-color, #e2e8f0); }
    .icon-teal { color: #0d9488; }
    .prose { font-size: 0.88rem; color: var(--ion-color-medium-shade, #334155); line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 0 0 14px; padding-left: 20px; }
    .prose li { margin-bottom: 6px; }
    .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
    .card { background: var(--ion-card-background, #fff); padding: 18px 16px; border-radius: 14px; border: 1px solid var(--ion-border-color, #e2e8f0); }
    .card-title { font-size: 0.9rem; font-weight: 700; color: var(--ion-text-color, #0f172a); margin: 0 0 8px; }
    .card p { font-size: 0.8rem; color: var(--ion-color-medium-shade, #475569); margin: 0; line-height: 1.6; }
  `
})
export class MjSwitchExprComponent {
  codeClassicVsModern = `// ── Classic (error-prone) ──────────────────
int day = 2;
String name;
switch (day) {
    case 1: name = "Monday"; break;    // forget break → fall-through!
    case 2: name = "Tuesday"; break;
    default: name = "Other"; break;
}

// ── Modern arrow syntax (Java 14+) ─────────
String name = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3, 4, 5 -> "Midweek";        // comma-separated labels
    default -> "Weekend";
};

// ── Enum switch — exhaustive, no default needed ──
enum Status { PENDING, ACTIVE, CLOSED }
String label = switch (status) {
    case PENDING -> "Awaiting";
    case ACTIVE  -> "In Progress";
    case CLOSED  -> "Done";
    // Compiler error if a new enum constant is added and not covered
};`;

  codeYield = `// When you need multiple statements in a case, use a block + yield
int quantity = 7;
String tier = switch (quantity) {
    case 1, 2, 3 -> "Small";
    case 4, 5, 6 -> "Medium";
    default -> {
        // Any logic here
        String base = quantity > 10 ? "Enterprise" : "Large";
        yield base + " (" + quantity + " units)";
    }
};

// yield inside regular switch statement (also valid)
int result;
switch (quantity) {
    case 1 -> result = 10;
    default -> {
        result = quantity * 5;
    }
}`;

  codePatternSwitch = `// Java 21: Type patterns in switch
static String describe(Object obj) {
    return switch (obj) {
        case Integer i  -> "int: " + i;
        case String s   -> "string of length " + s.length();
        case int[] arr  -> "int array of size " + arr.length;
        case null       -> "null input";        // Java 21: handle null explicitly
        default         -> "unknown: " + obj;
    };
}

// Guarded patterns — 'when' clause (Java 21)
static String categorize(Number n) {
    return switch (n) {
        case Integer i when i < 0   -> "negative int";
        case Integer i when i == 0  -> "zero";
        case Integer i              -> "positive int: " + i;
        case Double d               -> "double: " + d;
        default                     -> "other number";
    };
}

// Sealed class exhaustiveness (Java 21 + sealed)
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double w, double h) implements Shape {}

double area(Shape s) {
    return switch (s) {                    // exhaustive — no default needed!
        case Circle c    -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.w() * r.h();
    };
}`;
}
