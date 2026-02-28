import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-abstraction',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Abstraction & Interfaces"
      subtitle="Hide complexity, expose simplicity. Learn how abstract classes and interfaces define contracts while leaving implementation to subclasses."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #4338ca, #818cf8)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Abstraction?
        </h2>
        <div class="prose">
          <p>
            <strong>Abstraction</strong> is the concept of hiding internal implementation details and showing only the functionality to the user. Java achieves abstraction through <strong>abstract classes</strong> and <strong>interfaces</strong>.
          </p>
          <ul>
            <li><strong>Abstract Class:</strong> Can have both abstract (no body) and concrete methods. Use <code>abstract</code> keyword. Cannot be instantiated.</li>
            <li><strong>Interface:</strong> A pure contract — all methods are implicitly <code>public abstract</code>. A class can implement multiple interfaces.</li>
            <li><strong>Default Methods (Java 8+):</strong> Interfaces can have concrete methods using <code>default</code> keyword.</li>
            <li><strong>Static Methods:</strong> Interfaces can also have <code>static</code> utility methods.</li>
          </ul>
          <h4 class="sub-heading">Abstract Class vs Interface</h4>
          <app-code-block [code]="codeComparison" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-indigo" /> Contract Fulfillment Visualizer
          </h3>

          <div class="contract-demo">
            <div class="interface-box" [class.active]="activePhase() === 'interface'">
              <span class="iface-label">INTERFACE</span>
              <span class="iface-name">Drawable</span>
              <div class="iface-methods">
                <span class="method abstract">draw(): void</span>
                <span class="method abstract">getColor(): String</span>
                <span class="method default">default resize(int s)</span>
              </div>
            </div>

            <div class="impl-arrow">{{ arrowText() }}</div>

            <div class="impl-row">
              @for (impl of implementations(); track impl.name) {
                <div class="impl-box" [class.active]="activeImpl() === impl.name">
                  <span class="impl-label">CLASS</span>
                  <span class="impl-name">{{ impl.name }}</span>
                  <div class="impl-methods">
                    @for (m of impl.methods; track m) {
                      <span class="method concrete">{{ m }}</span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="showContract()" [disabled]="isAnimating()" class="btn btn-indigo">
              <app-icon name="play" [size]="16" /> Show Contract Flow
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-violet" /> Key Concepts
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Abstract Class</h3>
            <p class="op-desc">Partial implementation with abstract methods that subclasses must implement.</p>
            <app-code-block [code]="codeAbstract" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Interface</h3>
            <p class="op-desc">Pure contract. A class can implement multiple interfaces.</p>
            <app-code-block [code]="codeInterface" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Default & Static Methods</h3>
            <p class="op-desc">Java 8+ allows concrete methods in interfaces.</p>
            <app-code-block [code]="codeDefault" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Functional Interfaces</h3>
            <p class="op-desc">Interfaces with exactly one abstract method — usable with lambdas.</p>
            <app-code-block [code]="codeFunctional" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-indigo" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case indigo">
            <div class="use-num indigo-bg">1</div>
            <div>
              <h4 class="use-title">JDBC API</h4>
              <p class="use-desc"><code>Connection</code>, <code>Statement</code>, <code>ResultSet</code> are all interfaces. MySQL, PostgreSQL, and Oracle each provide their own implementations — you code to the interface.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Service Layer</h4>
              <p class="use-desc">Define <code>UserService</code> interface, implement <code>UserServiceImpl</code>. Swap implementations for testing with mock objects — zero calling-code changes.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Java Collections Framework</h4>
              <p class="use-desc"><code>List</code>, <code>Set</code>, <code>Map</code> are interfaces. <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code> are implementations. You choose the right one for your use case.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-indigo { color: #4338ca; }
    .icon-violet { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #4338ca; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .contract-demo { display: flex; flex-direction: column; align-items: center; gap: 12px; margin-bottom: 20px; }
    .interface-box, .impl-box { padding: 16px 20px; border-radius: 14px; border: 2px solid #e2e8f0; min-width: 180px; text-align: center; transition: all 0.3s; }
    .interface-box { background: #eef2ff; border-color: #c7d2fe; }
    .interface-box.active { border-color: #4338ca; transform: scale(1.03); box-shadow: 0 4px 12px rgba(67,56,202,0.2); }
    .impl-box { background: #fff; }
    .impl-box.active { border-color: #22c55e; background: #f0fdf4; transform: scale(1.03); box-shadow: 0 4px 12px rgba(34,197,94,0.2); }
    .iface-label, .impl-label { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.12em; color: #94a3b8; margin-bottom: 4px; }
    .iface-name, .impl-name { display: block; font-size: 0.88rem; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; margin-bottom: 8px; }
    .iface-methods, .impl-methods { display: flex; flex-direction: column; gap: 3px; }
    .method { font-size: 0.62rem; font-family: 'JetBrains Mono', monospace; padding: 3px 8px; border-radius: 4px; }
    .method.abstract { background: #fef3c7; color: #92400e; }
    .method.default { background: #dbeafe; color: #1e40af; }
    .method.concrete { background: #dcfce7; color: #166534; }
    .impl-arrow { font-size: 0.72rem; font-weight: 700; color: #94a3b8; font-family: 'JetBrains Mono', monospace; }
    .impl-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-indigo { background: #4338ca; color: #fff; }
    .btn-indigo:hover:not(:disabled) { background: #3730a3; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.indigo { background: #eef2ff; border-color: #c7d2fe; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .indigo-bg { background: #4338ca; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class AbstractionComponent {
  activePhase = signal('');
  activeImpl = signal('');
  arrowText = signal('↓ implements');
  status = signal('The Drawable interface defines a contract. Classes must fulfill it.');
  isAnimating = signal(false);
  implementations = signal([
    { name: 'Circle', methods: ['draw() { ... circle ... }', 'getColor() { return "red"; }'] },
    { name: 'Rectangle', methods: ['draw() { ... rect ... }', 'getColor() { return "blue"; }'] }
  ]);

  codeComparison = `// Abstract class — partial implementation
abstract class Shape {
    String color;                // can have fields
    abstract double area();      // must override
    void display() { ... }       // concrete method
}

// Interface — pure contract
interface Drawable {
    void draw();                 // abstract (implicit)
    default void resize(int s) { // concrete (Java 8+)
        System.out.println("Resizing by " + s);
    }
}`;

  codeAbstract = `abstract class Vehicle {
    protected int speed;

    abstract void start(); // no body
    abstract void stop();

    void accelerate(int delta) { // concrete
        this.speed += delta;
    }
}

class Car extends Vehicle {
    void start() { System.out.println("Key turn"); }
    void stop()  { System.out.println("Brake"); }
}`;

  codeInterface = `interface Flyable {
    void fly();
    double getAltitude();
}

interface Swimmable {
    void swim();
}

// Multiple interfaces!
class Duck implements Flyable, Swimmable {
    public void fly() { ... }
    public double getAltitude() { return 100; }
    public void swim() { ... }
}`;

  codeDefault = `interface Logger {
    void log(String msg);

    // Default method — concrete in interface
    default void warn(String msg) {
        log("WARN: " + msg);
    }

    // Static utility
    static Logger create() {
        return msg -> System.out.println(msg);
    }
}`;

  codeFunctional = `@FunctionalInterface
interface Transformer<T> {
    T transform(T input);
    // Only ONE abstract method allowed
}

// Use with lambda
Transformer<String> upper = s -> s.toUpperCase();
upper.transform("hello"); // "HELLO"`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async showContract() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.activePhase.set('interface');
    this.activeImpl.set('');
    this.status.set('Drawable defines: draw(), getColor() — these MUST be implemented.');
    await this.sleep(1500);

    this.arrowText.set('↓ Circle implements Drawable');
    this.activeImpl.set('Circle');
    this.status.set('Circle provides concrete implementations of draw() and getColor().');
    await this.sleep(1500);

    this.arrowText.set('↓ Rectangle implements Drawable');
    this.activeImpl.set('Rectangle');
    this.status.set('Rectangle provides its OWN implementations — same contract, different behavior.');
    await this.sleep(1500);

    this.status.set('Both classes fulfill the Drawable contract — they can be used interchangeably! ✅');
    this.activePhase.set('');
    this.activeImpl.set('');
    this.arrowText.set('↓ implements');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.activePhase.set('');
    this.activeImpl.set('');
    this.arrowText.set('↓ implements');
    this.status.set('The Drawable interface defines a contract. Classes must fulfill it.');
    this.isAnimating.set(false);
  }
}
