import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-final-static',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="final & static In Depth"
      subtitle="Two of Java's most powerful modifiers. Understand what final truly prevents, how static members are shared, and how to use them together for constants."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1c1917, #78716c)">

      <!-- Section 1: final -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-stone" /> The final Keyword
        </h2>
        <div class="final-grid">
          @for (item of finalFacts; track item.target) {
            <div class="final-card" [style.border-color]="item.color + '40'" [style.background]="item.color + '08'">
              <div class="final-target" [style.color]="item.color">final {{ item.target }}</div>
              <p class="final-desc">{{ item.desc }}</p>
              <div class="final-example"><code>{{ item.example }}</code></div>
            </div>
          }
        </div>
        <div class="prose" style="margin-top:20px">
          <p><strong>Common misconception:</strong> <code>final</code> on a reference type does not make the object immutable — it prevents the <em>reference</em> from pointing to a different object. The object's fields can still be mutated.</p>
          <app-code-block [code]="codeFinal" />
        </div>
      </section>

      <!-- Section 2: Interactive Static Counter -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-stone" /> Static Counter Demo
          </h3>
          <p class="viz-desc">
            A <code>static</code> field is shared across ALL instances. An instance field belongs to each object individually.
            Create instances and watch the difference.
          </p>

          <div class="counter-demo">
            <div class="demo-class">
              <div class="demo-class-label">Counter class</div>
              <div class="demo-fields">
                <div class="demo-field static-field">
                  <span class="demo-modifier">static</span>
                  <span class="demo-name">totalCount</span>
                  <span class="demo-value">{{ totalCount() }}</span>
                </div>
                <div class="demo-field instance-field">
                  <span class="demo-modifier">instance</span>
                  <span class="demo-name">id (per object)</span>
                  <span class="demo-value">unique</span>
                </div>
              </div>
            </div>

            <div class="instances-area">
              @for (inst of instances(); track inst.id) {
                <div class="instance-card" [@.disabled]="true">
                  <div class="instance-title">Counter #{{ inst.id }}</div>
                  <div class="instance-field">id = {{ inst.id }}</div>
                  <div class="instance-static">totalCount = {{ totalCount() }}</div>
                </div>
              }
              @if (instances().length === 0) {
                <div class="no-instances">No instances yet. Click "Create Instance" below.</div>
              }
            </div>
          </div>

          <div class="viz-controls">
            <button (click)="createInstance()" [disabled]="instances().length >= 5" class="btn btn-stone">
              <app-icon name="plus" [size]="16" /> Create Instance
            </button>
            <button (click)="resetInstances()" class="btn btn-outline">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>

          <div class="viz-status">{{ demoStatus() }}</div>
        </div>
      </section>

      <!-- Section 3: static Members -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-stone" /> static Members
        </h2>
        <div class="prose">
          <p>
            <code>static</code> members belong to the <strong>class itself</strong>, not to any instance. They are loaded once when the class is first used and shared for the entire JVM lifetime.
          </p>
          <ul>
            <li><strong>static field</strong>: shared state (counters, caches, configuration).</li>
            <li><strong>static method</strong>: utility operations with no instance state (<code>Math.sqrt()</code>, <code>Integer.parseInt()</code>).</li>
            <li><strong>static block</strong>: complex initialisation that runs once when the class loads.</li>
            <li>Cannot use <code>this</code> or access instance members from a static context.</li>
          </ul>
          <app-code-block [code]="codeStatic" />
        </div>
      </section>

      <!-- Section 4: Constants -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shield" [size]="28" css="icon-stone" /> Constants — public static final
        </h2>
        <div class="prose">
          <p>
            The canonical constant pattern in Java is <code>public static final TYPE NAME = value;</code>.
            Constants use <strong>UPPER_SNAKE_CASE</strong> by convention.
          </p>
          <ul>
            <li><strong>public</strong> — accessible from anywhere.</li>
            <li><strong>static</strong> — one copy per class, not per instance.</li>
            <li><strong>final</strong> — cannot be reassigned.</li>
          </ul>
          <app-code-block [code]="codeConstants" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-stone" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">final Reference ≠ Immutable Object</h4>
              <p class="tip-desc"><code>final List&lt;String&gt; list = new ArrayList&lt;&gt;();</code> — you cannot reassign <code>list</code>, but <code>list.add("x")</code> works fine. For true immutability, use <code>List.of()</code> or <code>Collections.unmodifiableList()</code>.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">static Methods Cannot Be Overridden</h4>
              <p class="tip-desc">Static methods are resolved at compile time (static binding). You can declare a static method with the same signature in a subclass, but it's <strong>method hiding</strong>, not overriding — polymorphism does not apply.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Prefer enum over interface Constants</h4>
              <p class="tip-desc">Putting constants in an interface (<code>interface Codes {{ '{' }} int OK = 200; {{ '}' }}</code>) is an antipattern (the "Constant Interface" antipattern). Use <code>enum</code> or a non-instantiable utility class instead.</p>
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
    .icon-stone { color: #78716c; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #f5f5f4; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #57534e;
    }

    /* Final Grid */
    .final-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; }
    .final-card { border-radius: 16px; border: 1px solid; padding: 18px; transition: all 0.2s; }
    .final-card:hover { box-shadow: 0 4px 14px rgba(0,0,0,0.06); transform: translateY(-2px); }
    .final-target { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; font-weight: 800; margin-bottom: 8px; }
    .final-desc { font-size: 0.8rem; color: #52665A; line-height: 1.5; margin: 0 0 10px; }
    .final-example code {
      font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #57534e;
      background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;
    }

    /* Visualizer */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 20px; line-height: 1.6; }
    .viz-desc code {
      background: #f5f5f4; padding: 2px 6px; border-radius: 4px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #57534e;
    }

    .counter-demo { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
    .demo-class { background: #1c1917; border-radius: 14px; padding: 16px 20px; min-width: 200px; }
    .demo-class-label { font-size: 0.7rem; font-weight: 800; color: #a8a29e; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
    .demo-fields { display: flex; flex-direction: column; gap: 8px; }
    .demo-field { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 10px; }
    .demo-field.static-field { background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.3); }
    .demo-field.instance-field { background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); }
    .demo-modifier { font-size: 0.62rem; font-weight: 800; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; }
    .static-field .demo-modifier { background: rgba(249,115,22,0.25); color: #fb923c; }
    .instance-field .demo-modifier { background: rgba(59,130,246,0.25); color: #60a5fa; }
    .demo-name { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #e2e8f0; flex: 1; }
    .demo-value { font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; font-weight: 900; color: #fbbf24; }

    .instances-area { display: flex; flex-wrap: wrap; gap: 10px; flex: 1; align-content: flex-start; }
    .instance-card {
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;
      padding: 12px 16px; min-width: 120px; animation: pop-in 0.3s ease;
    }
    @keyframes pop-in { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
    .instance-title { font-size: 0.72rem; font-weight: 800; color: #1B1B1B; margin-bottom: 8px; }
    .instance-field { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #3b82f6; }
    .instance-static { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #f97316; margin-top: 4px; }
    .no-instances { font-size: 0.82rem; color: #94a3b8; padding: 20px; }

    .viz-controls { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;
      border: none; cursor: pointer; transition: all 0.2s;
    }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-stone { background: #78716c; color: #fff; }
    .btn-stone:hover:not(:disabled) { background: #57534e; transform: translateY(-1px); }
    .btn-outline { background: #fff; color: #52665A; border: 1px solid #D6DDD2; }
    .btn-outline:hover { background: #F5F7F2; }

    .viz-status {
      background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 12px;
      padding: 12px 16px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
      color: #57534e; font-weight: 600; text-align: center;
    }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s; }
    .tip-card:hover { border-color: #d6d3d1; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #78716c; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f5f5f4; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #57534e; }
  `
})
export class FinalStaticComponent {
  instances = signal<{id: number}[]>([]);
  totalCount = signal(0);

  demoStatus = signal('totalCount is a class-level (static) field — shared by all instances.');

  createInstance() {
    this.totalCount.update(n => n + 1);
    this.instances.update(list => [...list, { id: this.totalCount() }]);
    this.demoStatus.set(`Instance #${this.totalCount()} created. All instances see totalCount = ${this.totalCount()}.`);
  }

  resetInstances() {
    this.instances.set([]);
    this.totalCount.set(0);
    this.demoStatus.set('totalCount is a class-level (static) field — shared by all instances.');
  }

  finalFacts = [
    {
      target: 'variable', color: '#2563eb',
      desc: 'Can be assigned only once. Must be initialised at declaration or in the constructor.',
      example: 'final int MAX = 100;'
    },
    {
      target: 'method', color: '#059669',
      desc: 'Cannot be overridden in a subclass. The JVM may inline final methods for performance.',
      example: 'public final void seal() { }'
    },
    {
      target: 'class', color: '#dc2626',
      desc: 'Cannot be subclassed. String, Integer, and all wrapper types are final.',
      example: 'public final class Immutable { }'
    },
  ];

  codeFinal = `// final variable — assigned once
final int MAX = 100;
// MAX = 200; // compile error ❌

// final in constructor — must be assigned in EVERY constructor path
class Circle {
    final double radius;
    Circle(double r) { this.radius = r; }
    // radius = 5; anywhere else → compile error ❌
}

// final reference — reference cannot change, but object state CAN
final List<String> list = new ArrayList<>();
list.add("ok");          // ✅ — mutating the object
list.add("more");        // ✅
// list = new ArrayList<>();  // ❌ — changing the reference

// final method — cannot be overridden
class Base {
    public final void init() { System.out.println("Base init"); }
}
class Child extends Base {
    // public void init() { }  // ❌ compile error
}

// final class — cannot be subclassed
final class Singleton { /* ... */ }
// class Bad extends Singleton { }  // ❌ compile error`;

  codeStatic = `public class MathUtils {

    // static field — one copy shared across all uses
    public static final double PI = 3.141592653589793;

    // static method — no instance needed
    public static double circleArea(double r) {
        return PI * r * r;
    }

    // static initializer block — complex setup, runs once at class load
    static {
        System.out.println("MathUtils class loaded");
        // e.g. load config, prime caches
    }

    // Prevent instantiation — non-instantiable utility class
    private MathUtils() { throw new UnsupportedOperationException(); }
}

// Call without creating an instance
double area = MathUtils.circleArea(5.0);

// Cannot access instance members from static context
class Example {
    int instanceField = 10;
    static int staticField = 20;

    static void method() {
        // System.out.println(instanceField); // ❌ compile error
        System.out.println(staticField);      // ✅
    }
}`;

  codeConstants = `public class HttpStatus {
    // Constants: public static final — UPPER_SNAKE_CASE
    public static final int OK                   = 200;
    public static final int CREATED              = 201;
    public static final int NO_CONTENT           = 204;
    public static final int BAD_REQUEST          = 400;
    public static final int UNAUTHORIZED         = 401;
    public static final int NOT_FOUND            = 404;
    public static final int INTERNAL_ERROR       = 500;

    private HttpStatus() {} // prevent instantiation
}

// Usage
if (response.getStatus() == HttpStatus.NOT_FOUND) {
    System.out.println("Resource not found");
}

// Better: use an enum (type-safe, no magic numbers)
public enum HttpStatus {
    OK(200), CREATED(201), NOT_FOUND(404), INTERNAL_ERROR(500);

    private final int code;
    HttpStatus(int code) { this.code = code; }
    public int getCode() { return code; }
}`;
}
