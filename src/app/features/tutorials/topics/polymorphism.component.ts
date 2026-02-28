import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-polymorphism',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Polymorphism"
      subtitle="One interface, many forms. Learn how Java resolves method calls at compile-time and runtime for flexible, extensible code."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #dc2626, #f97316)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-red" /> What is Polymorphism?
        </h2>
        <div class="prose">
          <p>
            <strong>Polymorphism</strong> means "many forms." In Java, the same method name can behave differently depending on the object's actual type. There are two kinds:
          </p>
          <ul>
            <li><strong>Compile-time (Overloading):</strong> Same method name, different parameters. Resolved at compile time.</li>
            <li><strong>Runtime (Overriding):</strong> Subclass redefines a method from the superclass. Resolved at runtime via dynamic dispatch.</li>
          </ul>
          <h4 class="sub-heading">Overloading vs Overriding</h4>
          <app-code-block [code]="codeOverview" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-red" /> Runtime Dispatch Visualizer
          </h3>

          <div class="dispatch-demo">
            <div class="dispatch-code">
              <span class="code-line" [class.active]="activeLine() === 1">Shape s = new {{ currentShape() }}();</span>
              <span class="code-line" [class.active]="activeLine() === 2">s.draw(); <span class="result">{{ drawResult() }}</span></span>
            </div>

            <div class="shape-grid">
              @for (s of shapes; track s.name) {
                <div class="shape-btn" [class.active]="currentShape() === s.name" (click)="selectShape(s.name)">
                  <span class="shape-icon">{{ s.icon }}</span>
                  <span class="shape-name">{{ s.name }}</span>
                </div>
              }
            </div>

            <div class="dispatch-arrow">
              @if (showArrow()) {
                <div class="arrow-content">
                  <span class="arrow-label">JVM Lookup</span>
                  <span class="arrow-detail">Reference type: <strong>Shape</strong></span>
                  <span class="arrow-detail">Actual type: <strong>{{ currentShape() }}</strong></span>
                  <span class="arrow-detail resolve">→ Calls {{ currentShape() }}.draw()</span>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="runDispatch()" [disabled]="isAnimating()" class="btn btn-red">
              <app-icon name="play" [size]="16" /> Run Dynamic Dispatch
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Types of Polymorphism
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overloading</h3>
            <p class="op-desc">Compile-time polymorphism — same name, different parameter lists.</p>
            <app-code-block [code]="codeOverloading" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overriding</h3>
            <p class="op-desc">Runtime polymorphism — subclass redefines parent method.</p>
            <app-code-block [code]="codeOverriding" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Upcasting & Downcasting</h3>
            <p class="op-desc">Convert between parent and child references safely.</p>
            <app-code-block [code]="codeCasting" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Interface Polymorphism</h3>
            <p class="op-desc">Program to an interface — the most powerful form of polymorphism.</p>
            <app-code-block [code]="codeInterface" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-red" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case red">
            <div class="use-num red-bg">1</div>
            <div>
              <h4 class="use-title">Strategy Pattern in Payment Systems</h4>
              <p class="use-desc">A <code>PaymentProcessor</code> interface with <code>CreditCard</code>, <code>PayPal</code>, <code>UPI</code> implementations. The caller uses the interface — the actual processor is injected at runtime.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Dependency Injection</h4>
              <p class="use-desc">Spring injects concrete beans by interface type: <code>&#64;Autowired NotificationService svc;</code> could be <code>EmailService</code> or <code>SMSService</code> depending on configuration.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Collections API</h4>
              <p class="use-desc"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code> — you program to the <code>List</code> interface. You can swap to <code>LinkedList</code> without changing any calling code.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-red { color: #dc2626; }
    .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #dc2626; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .dispatch-demo { margin-bottom: 20px; }
    .dispatch-code { background: #1e293b; border-radius: 12px; padding: 16px 20px; margin-bottom: 16px; }
    .code-line { display: block; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #94a3b8; padding: 4px 0; transition: all 0.3s; }
    .code-line.active { color: #fbbf24; font-weight: 600; }
    .result { color: #22c55e; font-weight: 700; }

    .shape-grid { display: flex; justify-content: center; gap: 12px; margin-bottom: 16px; }
    .shape-btn { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 14px 20px; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 14px; cursor: pointer; transition: all 0.2s; }
    .shape-btn:hover { border-color: #dc2626; }
    .shape-btn.active { border-color: #dc2626; background: #fef2f2; transform: scale(1.05); }
    .shape-icon { font-size: 1.8rem; }
    .shape-name { font-size: 0.68rem; font-weight: 700; color: #0f172a; font-family: 'JetBrains Mono', monospace; }

    .dispatch-arrow { min-height: 60px; }
    .arrow-content { background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 12px 16px; display: flex; flex-direction: column; gap: 4px; }
    .arrow-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; color: #d97706; }
    .arrow-detail { font-size: 0.72rem; color: #334155; font-family: 'JetBrains Mono', monospace; }
    .arrow-detail strong { color: #0f172a; }
    .resolve { color: #059669; font-weight: 700; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-red { background: #dc2626; color: #fff; }
    .btn-red:hover:not(:disabled) { background: #b91c1c; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); transition: box-shadow 0.2s; }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.red { background: #fef2f2; border-color: #fecaca; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .red-bg { background: #dc2626; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class PolymorphismComponent {
  shapes = [
    { name: 'Circle', icon: '🔴', drawOutput: '→ Drawing Circle' },
    { name: 'Square', icon: '🟦', drawOutput: '→ Drawing Square' },
    { name: 'Triangle', icon: '🔺', drawOutput: '→ Drawing Triangle' }
  ];

  currentShape = signal('Circle');
  activeLine = signal(0);
  drawResult = signal('');
  showArrow = signal(false);
  status = signal('Click a shape, then run dispatch to see runtime method resolution.');
  isAnimating = signal(false);

  codeOverview = `// Overloading (compile-time)
int add(int a, int b) { ... }
double add(double a, double b) { ... }

// Overriding (runtime)
Shape s = new Circle();  // Upcasting
s.draw(); // calls Circle.draw(), not Shape.draw()`;

  codeOverloading = `public class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }
}`;

  codeOverriding = `public class Shape {
    public void draw() {
        System.out.println("Drawing Shape");
    }
}

public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}`;

  codeCasting = `// Upcasting (implicit, always safe)
Shape s = new Circle();
s.draw(); // Circle's draw()

// Downcasting (explicit, needs check)
if (s instanceof Circle c) {
    c.getRadius(); // Circle-specific
}`;

  codeInterface = `public interface Drawable {
    void draw();
}

// Any class can implement Drawable
List<Drawable> items = List.of(
    new Circle(), new Square(), new Text()
);

// Polymorphic loop
for (Drawable d : items) {
    d.draw(); // Each calls its own version
}`;

  selectShape(name: string) {
    if (this.isAnimating()) return;
    this.currentShape.set(name);
    this.activeLine.set(0);
    this.drawResult.set('');
    this.showArrow.set(false);
    this.status.set(`Selected ${name}. Click "Run Dynamic Dispatch" to see resolution.`);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async runDispatch() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.drawResult.set('');
    this.showArrow.set(false);

    const shape = this.currentShape();
    this.activeLine.set(1);
    this.status.set(`Shape s = new ${shape}(); — reference type is Shape, actual type is ${shape}`);
    await this.sleep(1500);

    this.activeLine.set(2);
    this.status.set('s.draw() — JVM looks up the ACTUAL type, not the reference type...');
    this.showArrow.set(true);
    await this.sleep(1500);

    const output = this.shapes.find(s => s.name === shape)!.drawOutput;
    this.drawResult.set(output);
    this.status.set(`Resolved! ${shape}.draw() is called — runtime polymorphism in action! ✅`);
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.currentShape.set('Circle');
    this.activeLine.set(0);
    this.drawResult.set('');
    this.showArrow.set(false);
    this.status.set('Click a shape, then run dispatch to see runtime method resolution.');
    this.isAnimating.set(false);
  }
}
