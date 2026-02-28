import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-inheritance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Inheritance"
      subtitle="Learn how classes can extend other classes to inherit fields and methods, enabling code reuse and hierarchical modeling."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #b45309, #f59e0b)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-amber" /> What is Inheritance?
        </h2>
        <div class="prose">
          <p>
            <strong>Inheritance</strong> is a mechanism where a new class (<strong>subclass</strong>) acquires the properties and behavior of an existing class (<strong>superclass</strong>). Java uses the <code>extends</code> keyword to establish this "is-a" relationship.
          </p>
          <ul>
            <li><strong>Code Reuse:</strong> Subclasses inherit all non-private fields and methods from the superclass.</li>
            <li><strong>Method Overriding:</strong> Subclasses can provide their own implementation of a superclass method using <code>&#64;Override</code>.</li>
            <li><strong>super keyword:</strong> Calls the superclass constructor or methods explicitly.</li>
            <li><strong>Single Inheritance:</strong> Java classes can only extend one class (use interfaces for multiple).</li>
          </ul>
          <h4 class="sub-heading">Basic Inheritance</h4>
          <app-code-block [code]="codeBasic" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-amber" /> Class Hierarchy Visualizer
          </h3>

          <div class="tree">
            <div class="tree-node root" [class.active]="activeNode() === 'animal'">
              <span class="node-name">Animal</span>
              <div class="node-fields">
                @for (f of animalFields(); track f) {
                  <span class="node-field">{{ f }}</span>
                }
              </div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-branch">
              <div class="tree-child">
                <div class="tree-line-v"></div>
                <div class="tree-node" [class.active]="activeNode() === 'dog'">
                  <span class="node-name">Dog</span>
                  <div class="node-fields">
                    @for (f of dogFields(); track f) {
                      <span class="node-field" [class.override]="f.includes('override')">{{ f }}</span>
                    }
                  </div>
                </div>
              </div>
              <div class="tree-child">
                <div class="tree-line-v"></div>
                <div class="tree-node" [class.active]="activeNode() === 'cat'">
                  <span class="node-name">Cat</span>
                  <div class="node-fields">
                    @for (f of catFields(); track f) {
                      <span class="node-field" [class.override]="f.includes('override')">{{ f }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="showInheritance()" [disabled]="isAnimating()" class="btn btn-amber">
              <app-icon name="play" [size]="16" /> Show Inheritance Chain
            </button>
            <button (click)="showOverride()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="layers" [size]="16" /> Show Method Override
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
          <app-icon name="code" [size]="28" css="icon-indigo" /> Key Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overriding</h3>
            <p class="op-desc">Subclass provides its own version of an inherited method.</p>
            <app-code-block [code]="codeOverride" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> super Keyword</h3>
            <p class="op-desc">Access superclass constructor and methods explicitly.</p>
            <app-code-block [code]="codeSuper" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructor Chaining</h3>
            <p class="op-desc">Superclass constructors are called before subclass constructors.</p>
            <app-code-block [code]="codeChaining" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> instanceof Check</h3>
            <p class="op-desc">Verify an object's type at runtime along the hierarchy.</p>
            <app-code-block [code]="codeInstanceof" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-amber" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case amber">
            <div class="use-num amber-bg">1</div>
            <div>
              <h4 class="use-title">Exception Hierarchy</h4>
              <p class="use-desc">Java's entire exception system is built on inheritance: <code>Throwable → Exception → RuntimeException → NullPointerException</code>. Catching a parent catches all children.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Controller Hierarchy</h4>
              <p class="use-desc">A <code>BaseController</code> with common error handling logic can be extended by <code>UserController</code>, <code>OrderController</code>, etc. — eliminating duplicate code.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">GUI Component Trees</h4>
              <p class="use-desc">Swing/JavaFX components form deep hierarchies: <code>Component → Container → JPanel → CustomPanel</code>. Each level adds behavior while inheriting core rendering.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-amber { color: #d97706; }
    .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #d97706; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .tree { display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
    .tree-node { padding: 14px 20px; background: #fff; border: 2px solid #e2e8f0; border-radius: 12px; text-align: center; min-width: 140px; transition: all 0.3s; }
    .tree-node.active { border-color: #d97706; background: #fffbeb; transform: scale(1.05); box-shadow: 0 4px 12px rgba(217,119,6,0.2); }
    .tree-node.root { border-color: #d97706; background: #fffbeb; }
    .node-name { display: block; font-size: 0.88rem; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; margin-bottom: 6px; }
    .node-fields { display: flex; flex-direction: column; gap: 3px; }
    .node-field { font-size: 0.62rem; color: #64748b; font-family: 'JetBrains Mono', monospace; }
    .node-field.override { color: #dc2626; font-weight: 700; }
    .tree-line { width: 2px; height: 20px; background: #cbd5e1; }
    .tree-branch { display: flex; gap: 32px; }
    .tree-child { display: flex; flex-direction: column; align-items: center; }
    .tree-line-v { width: 2px; height: 20px; background: #cbd5e1; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-amber { background: #d97706; color: #fff; }
    .btn-amber:hover:not(:disabled) { background: #b45309; }
    .btn-purple { background: #7c3aed; color: #fff; }
    .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); transition: box-shadow 0.2s; }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.amber { background: #fffbeb; border-color: #fde68a; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .amber-bg { background: #f59e0b; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class InheritanceComponent {
  activeNode = signal('');
  isAnimating = signal(false);
  status = signal('Animal is the superclass. Dog and Cat extend it.');

  animalFields = signal(['+ name: String', '+ sound(): String', '+ eat(): void']);
  dogFields = signal(['+ breed: String', '+ fetch(): void']);
  catFields = signal(['+ indoor: boolean', '+ purr(): void']);

  codeBasic = `public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public String sound() {
        return "Some sound";
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // call Animal constructor
        this.breed = breed;
    }
}`;

  codeOverride = `public class Dog extends Animal {
    @Override
    public String sound() {
        return "Woof!"; // overrides Animal.sound()
    }
}

public class Cat extends Animal {
    @Override
    public String sound() {
        return "Meow!";
    }
}`;

  codeSuper = `public class Dog extends Animal {
    public Dog(String name, String breed) {
        super(name); // MUST be first line
        this.breed = breed;
    }

    @Override
    public String sound() {
        String base = super.sound(); // "Some sound"
        return "Woof!";
    }
}`;

  codeChaining = `// When you create a Dog:
Dog d = new Dog("Rex", "Labrador");

// Execution order:
// 1. Object() constructor (implicit)
// 2. Animal("Rex") constructor
// 3. Dog("Rex", "Labrador") body`;

  codeInstanceof = `Animal a = new Dog("Rex", "Lab");

a instanceof Dog;    // true
a instanceof Animal; // true
a instanceof Cat;    // false

// Pattern matching (Java 16+)
if (a instanceof Dog d) {
    d.fetch(); // safe to call
}`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async showInheritance() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.activeNode.set('animal');
    this.status.set('Animal defines: name, sound(), eat() — the base behavior.');
    await this.sleep(1500);

    this.activeNode.set('dog');
    this.status.set('Dog INHERITS name, sound(), eat() + adds breed, fetch().');
    await this.sleep(1500);

    this.activeNode.set('cat');
    this.status.set('Cat INHERITS name, sound(), eat() + adds indoor, purr().');
    await this.sleep(1500);

    this.activeNode.set('');
    this.status.set('Both Dog and Cat reuse Animal code without rewriting it! ✅');
    this.isAnimating.set(false);
  }

  async showOverride() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.activeNode.set('animal');
    this.status.set('Animal.sound() → "Some sound" (default implementation)');
    await this.sleep(1200);

    this.activeNode.set('dog');
    this.dogFields.set(['+ breed: String', '+ fetch(): void', '⚡ sound() → "Woof!" (override)']);
    this.status.set('Dog overrides sound() → "Woof!" 🐕');
    await this.sleep(1200);

    this.activeNode.set('cat');
    this.catFields.set(['+ indoor: boolean', '+ purr(): void', '⚡ sound() → "Meow!" (override)']);
    this.status.set('Cat overrides sound() → "Meow!" 🐱');
    await this.sleep(1200);

    this.status.set('Each subclass provides its OWN behavior for sound()! ✅');
    this.activeNode.set('');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.activeNode.set('');
    this.dogFields.set(['+ breed: String', '+ fetch(): void']);
    this.catFields.set(['+ indoor: boolean', '+ purr(): void']);
    this.status.set('Animal is the superclass. Dog and Cat extend it.');
    this.isAnimating.set(false);
  }
}
