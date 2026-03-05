import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-variables-casting',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Variables & Type Casting"
      subtitle="Declare with confidence. Understand variable scope, the var keyword, and the difference between safe widening and lossy narrowing conversions."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #134e4a, #0d9488)">

      <!-- Section 1: Variable Kinds -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-teal" /> Variable Kinds
        </h2>
        <div class="prose">
          <p>Java has three kinds of variables depending on <strong>where they are declared</strong>:</p>
        </div>
        <div class="var-kinds-grid">
          @for (v of varKinds; track v.kind) {
            <div class="vk-card" [style.border-color]="v.color + '60'">
              <div class="vk-header" [style.background]="v.color + '15'">
                <span class="vk-kind" [style.color]="v.color">{{ v.kind }}</span>
              </div>
              <div class="vk-body">
                <p class="vk-desc">{{ v.desc }}</p>
                <ul class="vk-list">
                  @for (point of v.points; track point) {
                    <li>{{ point }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
        <app-code-block [code]="codeVariables" />
      </section>

      <!-- Section 2: var Keyword -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-teal" /> The <code class="heading-code">var</code> Keyword (Java 10+)
        </h2>
        <div class="prose">
          <p>
            <code>var</code> lets the compiler <strong>infer the type</strong> of a local variable from its initializer.
            Java remains statically typed — <code>var</code> does NOT make it dynamic.
          </p>
          <ul>
            <li><strong>Only for local variables</strong> — cannot use for fields, parameters, or return types.</li>
            <li><strong>Must have an initializer</strong> — <code>var x;</code> is a compile error.</li>
            <li><strong>Cannot use with null</strong> — type cannot be inferred from <code>null</code>.</li>
            <li><strong>Improves readability</strong> — especially with long generic types like <code>Map&lt;String, List&lt;Integer&gt;&gt;</code>.</li>
          </ul>
          <app-code-block [code]="codeVar" />
        </div>
      </section>

      <!-- Section 3: Interactive Widening / Narrowing Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-teal" /> Widening & Narrowing Visualizer
          </h3>
          <p class="viz-desc">Select source and target types to see whether the conversion is safe (widening) or requires an explicit cast (narrowing).</p>

          <div class="cast-demo">
            <div class="cast-selector">
              <label class="sel-label">Source Type</label>
              <div class="sel-buttons">
                @for (t of numericTypes; track t) {
                  <button class="sel-btn" [class.active]="sourceType() === t" (click)="setSource(t)">{{ t }}</button>
                }
              </div>
            </div>

            <div class="cast-arrow-area">
              <div class="cast-result-badge" [class.widening]="castResult() === 'widening'" [class.narrowing]="castResult() === 'narrowing'" [class.same]="castResult() === 'same'">
                @if (castResult() === 'widening') { <span>WIDENING ✓</span> }
                @if (castResult() === 'narrowing') { <span>NARROWING ⚠</span> }
                @if (castResult() === 'same') { <span>SAME TYPE</span> }
              </div>
              <div class="cast-arrow">→</div>
            </div>

            <div class="cast-selector">
              <label class="sel-label">Target Type</label>
              <div class="sel-buttons">
                @for (t of numericTypes; track t) {
                  <button class="sel-btn" [class.active]="targetType() === t" (click)="setTarget(t)">{{ t }}</button>
                }
              </div>
            </div>
          </div>

          <div class="cast-info" [class.widening]="castResult() === 'widening'" [class.narrowing]="castResult() === 'narrowing'">
            <div class="cast-info-title">{{ castTitle() }}</div>
            <div class="cast-info-body">{{ castDescription() }}</div>
            <app-code-block [code]="castCode()" />
          </div>
        </div>
      </section>

      <!-- Section 4: Object Casting -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-teal" /> Object Casting & instanceof
        </h2>
        <div class="prose">
          <p>Casting objects moves up or down an inheritance hierarchy. Getting it wrong at runtime throws a <code>ClassCastException</code>.</p>
          <ul>
            <li><strong>Upcasting</strong>: Child → Parent. Always safe, implicit. No cast needed.</li>
            <li><strong>Downcasting</strong>: Parent → Child. Explicit cast required. Unsafe — can throw <code>ClassCastException</code>.</li>
            <li><strong>Pattern matching instanceof</strong> (Java 16+): Check and cast in one step — the safest way.</li>
          </ul>
          <app-code-block [code]="codeObjectCasting" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-teal" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">var Does Not Mean Dynamic Typing</h4>
              <p class="tip-desc">Once inferred, the type is fixed at compile time. <code>var x = 42; x = "hello";</code> is a compile error.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Narrowing Causes Data Loss</h4>
              <p class="tip-desc"><code>(byte) 300</code> gives <code>44</code>, not <code>300</code>. The extra bits are discarded silently. Always be aware when narrowing.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Prefer Pattern Matching over Manual Casts</h4>
              <p class="tip-desc">Use <code>obj instanceof String s</code> instead of <code>(String) obj</code>. It's safer and eliminates the redundant cast.</p>
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
    .heading-code {
      background: #ccfbf1; padding: 2px 8px; border-radius: 6px;
      font-family: 'JetBrains Mono', monospace; font-size: 1.1rem; color: #0d9488;
    }
    .icon-teal { color: #0d9488; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #ccfbf1; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0f766e;
    }

    /* Variable Kinds Grid */
    .var-kinds-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px; margin-bottom: 24px;
    }
    .vk-card { border-radius: 16px; border: 1px solid; overflow: hidden; background: #fff; }
    .vk-header { padding: 12px 16px; }
    .vk-kind { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; }
    .vk-body { padding: 14px 16px; }
    .vk-desc { font-size: 0.82rem; color: #52665A; margin: 0 0 10px; line-height: 1.5; }
    .vk-list { margin: 0; padding-left: 18px; font-size: 0.8rem; color: #475569; line-height: 1.8; }

    /* Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px;
    }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 24px; line-height: 1.6; }

    .cast-demo {
      display: flex; align-items: center; gap: 16px;
      flex-wrap: wrap; justify-content: center; margin-bottom: 20px;
    }
    .cast-selector { display: flex; flex-direction: column; gap: 10px; }
    .sel-label { font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; }
    .sel-buttons { display: flex; flex-wrap: wrap; gap: 6px; }
    .sel-btn {
      padding: 8px 14px; border-radius: 10px; border: 1px solid #e2e8f0;
      font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700;
      cursor: pointer; background: #fff; color: #475569; transition: all 0.2s;
    }
    .sel-btn:hover { border-color: #0d9488; color: #0d9488; }
    .sel-btn.active { background: #0d9488; color: #fff; border-color: #0d9488; }

    .cast-arrow-area { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .cast-arrow { font-size: 2rem; color: #94a3b8; }
    .cast-result-badge {
      padding: 6px 16px; border-radius: 20px; font-size: 0.72rem; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.08em;
    }
    .cast-result-badge.widening { background: #d1fae5; color: #059669; }
    .cast-result-badge.narrowing { background: #fee2e2; color: #dc2626; }
    .cast-result-badge.same { background: #e2e8f0; color: #475569; }

    .cast-info {
      border-radius: 14px; padding: 16px 20px; border: 1px solid #e2e8f0; background: #f8fafc;
    }
    .cast-info.widening { border-color: #6ee7b7; background: #f0fdf4; }
    .cast-info.narrowing { border-color: #fca5a5; background: #fff5f5; }
    .cast-info-title { font-size: 0.88rem; font-weight: 700; color: #1B1B1B; margin-bottom: 6px; }
    .cast-info-body { font-size: 0.82rem; color: #52665A; margin-bottom: 12px; line-height: 1.55; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card {
      display: flex; gap: 16px; padding: 20px 24px;
      border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s;
    }
    .tip-card:hover { border-color: #99f6e4; box-shadow: 0 4px 12px rgba(13,148,136,0.06); }
    .tip-num {
      width: 36px; height: 36px; min-width: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: #0d9488; color: #fff; font-size: 0.85rem; font-weight: 800;
    }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code {
      background: #ccfbf1; padding: 2px 5px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #0f766e;
    }
  `
})
export class VariablesCastingComponent {
  sourceType = signal('int');
  targetType = signal('double');

  numericTypes = ['byte', 'short', 'int', 'long', 'float', 'double'];
  private typeOrder: Record<string, number> = { byte: 0, short: 1, int: 2, long: 3, float: 4, double: 5 };

  varKinds = [
    {
      kind: 'Local Variable', color: '#0d9488',
      desc: 'Declared inside a method or block. Exists only for the lifetime of that block.',
      points: ['No default value — must initialize before use', 'Scoped to the enclosing { } block', 'Cannot be accessed outside its block']
    },
    {
      kind: 'Instance Variable', color: '#2563eb',
      desc: 'Declared inside a class but outside any method. Each object gets its own copy.',
      points: ['Has a default value (0, false, null)', 'Lives as long as the object lives', 'Accessible from any method in the class']
    },
    {
      kind: 'Static Variable', color: '#7c3aed',
      desc: 'Declared with the static keyword. Shared across ALL instances of the class.',
      points: ['Only one copy per class, not per object', 'Default value same as instance fields', 'Access via ClassName.fieldName']
    }
  ];

  setSource(t: string) { this.sourceType.set(t); }
  setTarget(t: string) { this.targetType.set(t); }

  castResult(): 'widening' | 'narrowing' | 'same' {
    const s = this.typeOrder[this.sourceType()];
    const t = this.typeOrder[this.targetType()];
    if (s === t) return 'same';
    return s < t ? 'widening' : 'narrowing';
  }

  castTitle(): string {
    const r = this.castResult();
    if (r === 'same') return 'Same Type — No Cast Needed';
    if (r === 'widening') return `Widening: ${this.sourceType()} → ${this.targetType()} (Safe, Implicit)`;
    return `Narrowing: ${this.sourceType()} → ${this.targetType()} (Explicit Cast Required — May Lose Data)`;
  }

  castDescription(): string {
    const r = this.castResult();
    if (r === 'same') return 'Both types are identical. No conversion happens.';
    if (r === 'widening') return `${this.targetType()} has a larger range than ${this.sourceType()}. Java promotes the value automatically — no data loss possible.`;
    return `${this.targetType()} has a smaller range than ${this.sourceType()}. An explicit cast is required. Values outside the target range will be truncated or distorted.`;
  }

  castCode(): string {
    const s = this.sourceType(), t = this.targetType();
    const r = this.castResult();
    if (r === 'same') return `${s} value = 42;\n${t} same = value; // same type`;
    if (r === 'widening') return `${s} small = 42;\n${t} big = small;        // implicit widening — safe`;
    return `${s} big = 300;\n${t} small = (${t}) big;  // explicit cast — may lose data\n// e.g. (byte) 300 → 44`;
  }

  codeVariables = `public class Example {

    static int classCount = 0;      // static variable — shared by all instances
    String name;                     // instance variable — default: null
    int age;                         // instance variable — default: 0

    void greet() {
        String greeting = "Hello!"; // local variable — must initialize
        System.out.println(greeting + " " + name);
    }
}`;

  codeVar = `// var infers the type from the right-hand side
var name      = "Alice";                        // String
var count     = 42;                             // int
var price     = 9.99;                           // double
var active    = true;                           // boolean
var list      = new ArrayList<String>();        // ArrayList<String>
var map       = new HashMap<String, Integer>(); // HashMap<String, Integer>

// var is NOT valid here:
// var field = 10;               // ❌ class field — compile error
// void method(var x) { }       // ❌ parameter — compile error
// var nothing;                  // ❌ no initializer — compile error
// var unknown = null;           // ❌ can't infer from null — compile error`;

  codeObjectCasting = `class Animal { void speak() { System.out.println("..."); } }
class Dog extends Animal { void bark() { System.out.println("Woof!"); } }

// Upcasting — implicit, always safe
Animal a = new Dog();   // Dog IS-A Animal

// Downcasting — explicit, can fail at runtime
Dog d = (Dog) a;        // OK — a actually holds a Dog
d.bark();               // Woof!

// Unsafe downcast
Animal cat = new Animal();
// Dog d2 = (Dog) cat;  // ❌ ClassCastException at runtime!

// Safe: check first (classic)
if (a instanceof Dog) {
    Dog safe = (Dog) a;
    safe.bark();
}

// Best: pattern matching instanceof (Java 16+)
if (a instanceof Dog dog) {
    dog.bark();         // no separate cast needed!
}`;
}
