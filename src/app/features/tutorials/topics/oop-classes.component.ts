import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-oop-classes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Classes & Objects"
      subtitle="Understand the building blocks of Object-Oriented Programming — blueprints, constructors, methods, and how objects live in memory."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c3aed, #a855f7)">

      <!-- Section 1: Concept -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-purple" /> What are Classes & Objects?
        </h2>
        <div class="prose">
          <p>
            A <strong>Class</strong> is a blueprint or template that defines the structure and behavior of objects. An <strong>Object</strong> is a concrete instance of a class — it lives in heap memory and has its own copy of instance variables.
          </p>
          <ul>
            <li><strong>Fields:</strong> Variables that hold the object's state (e.g., <code>name</code>, <code>age</code>).</li>
            <li><strong>Methods:</strong> Functions that define the object's behavior (e.g., <code>greet()</code>).</li>
            <li><strong>Constructors:</strong> Special methods called when creating a new object with <code>new</code>.</li>
            <li><strong>this keyword:</strong> Refers to the current instance inside a method or constructor.</li>
          </ul>
          <h4 class="sub-heading">Defining a Class</h4>
          <app-code-block [code]="codeClass" />
        </div>
      </section>

      <!-- Section 2: Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-purple" /> Object Instantiation Visualizer
          </h3>

          <div class="memory-container">
            <div class="mem-section">
              <span class="mem-label">STACK (References)</span>
              <div class="stack-items">
                @for (ref of stackRefs(); track ref.name) {
                  <div class="stack-item" [class.active]="ref.name === activeRef()">
                    <span class="ref-type">{{ ref.type }}</span>
                    <span class="ref-name">{{ ref.name }}</span>
                    <span class="ref-arrow">→</span>
                    <span class="ref-addr">{{ ref.address }}</span>
                  </div>
                }
                @if (stackRefs().length === 0) {
                  <div class="empty-state">No references yet</div>
                }
              </div>
            </div>
            <div class="mem-section">
              <span class="mem-label">HEAP (Objects)</span>
              <div class="heap-items">
                @for (obj of heapObjects(); track obj.address) {
                  <div class="heap-item" [class.active]="obj.address === activeAddr()">
                    <div class="obj-header">
                      <span class="obj-class">{{ obj.className }}</span>
                      <span class="obj-addr">{{ obj.address }}</span>
                    </div>
                    <div class="obj-fields">
                      @for (f of obj.fields; track f.name) {
                        <div class="field-row">
                          <span class="field-name">{{ f.name }}:</span>
                          <span class="field-val">{{ f.value }}</span>
                        </div>
                      }
                    </div>
                  </div>
                }
                @if (heapObjects().length === 0) {
                  <div class="empty-state">No objects created</div>
                }
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="createObject()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="play" [size]="16" /> new Person("Alice", 28)
            </button>
            <button (click)="createSecond()" [disabled]="isAnimating()" class="btn btn-blue">
              <app-icon name="play" [size]="16" /> new Person("Bob", 32)
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Key Concepts
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructors</h3>
            <p class="op-desc">Initialize object state when created. Overloaded constructors provide flexible creation patterns.</p>
            <app-code-block [code]="codeConstructor" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Methods</h3>
            <p class="op-desc">Define behavior. Instance methods operate on the object's state.</p>
            <app-code-block [code]="codeMethods" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Static Members</h3>
            <p class="op-desc">Belong to the class, not instances. Shared across all objects.</p>
            <app-code-block [code]="codeStatic" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> toString & equals</h3>
            <p class="op-desc">Override these Object methods for meaningful output and comparison.</p>
            <app-code-block [code]="codeToString" />
          </div>
        </div>
      </section>

      <!-- Section 4: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-purple" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case purple">
            <div class="use-num purple-bg">1</div>
            <div>
              <h4 class="use-title">Domain Models in Enterprise Apps</h4>
              <p class="use-desc">Every Spring Boot entity — <code>User</code>, <code>Order</code>, <code>Product</code> — is a class. Objects are persisted to databases via JPA/Hibernate.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">DTOs for API Communication</h4>
              <p class="use-desc">Data Transfer Objects carry data between layers. A <code>UserDTO</code> class defines exactly what fields the API exposes vs what the database stores.</p>
            </div>
          </div>
          <div class="use-case teal">
            <div class="use-num teal-bg">3</div>
            <div>
              <h4 class="use-title">Builder Pattern for Complex Objects</h4>
              <p class="use-desc">When a class has many fields, the Builder pattern provides a fluent API: <code>new User.Builder().name("Alice").age(28).build()</code>.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; }
    .icon-purple { color: #7c3aed; }
    .icon-indigo { color: #4f46e5; }

    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #0f172a; font-weight: 700; }
    .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c3aed; }
    .sub-heading { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 24px 0 8px; }

    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }

    .memory-container { display: grid; grid-template-columns: 1fr 1.2fr; gap: 16px; margin-bottom: 20px; }
    .mem-section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; }
    .mem-label { display: block; font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 12px; }
    .stack-items, .heap-items { display: flex; flex-direction: column; gap: 8px; }
    .stack-item { display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; transition: all 0.3s; }
    .stack-item.active { border-color: #7c3aed; background: #faf5ff; }
    .ref-type { font-size: 0.58rem; color: #94a3b8; }
    .ref-name { font-weight: 700; color: #0f172a; }
    .ref-arrow { color: #94a3b8; }
    .ref-addr { color: #7c3aed; font-size: 0.65rem; }
    .heap-item { padding: 12px; background: #fff; border-radius: 10px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .heap-item.active { border-color: #7c3aed; background: #faf5ff; }
    .obj-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .obj-class { font-size: 0.78rem; font-weight: 700; color: #7c3aed; font-family: 'JetBrains Mono', monospace; }
    .obj-addr { font-size: 0.6rem; color: #94a3b8; font-family: 'JetBrains Mono', monospace; }
    .obj-fields { display: flex; flex-direction: column; gap: 4px; }
    .field-row { display: flex; gap: 8px; font-size: 0.7rem; font-family: 'JetBrains Mono', monospace; }
    .field-name { color: #64748b; }
    .field-val { color: #0f172a; font-weight: 600; }
    .empty-state { text-align: center; padding: 20px; font-size: 0.72rem; color: #94a3b8; }

    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .btn-purple { background: #7c3aed; color: #fff; }
    .btn-purple:hover:not(:disabled) { background: #6d28d9; }
    .btn-blue { background: #2563eb; color: #fff; }
    .btn-blue:hover:not(:disabled) { background: #1d4ed8; }
    .btn-gray { background: #e2e8f0; color: #334155; }
    .btn-gray:hover:not(:disabled) { background: #cbd5e1; }

    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); transition: box-shadow 0.2s; }
    .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
    .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }

    .use-cases { display: flex; flex-direction: column; gap: 12px; }
    .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; }
    .use-case.teal { background: #f0fdfa; border-color: #99f6e4; }
    .use-case.blue { background: #eff6ff; border-color: #bfdbfe; }
    .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; }
    .teal-bg { background: #14b8a6; }
    .blue-bg { background: #3b82f6; }
    .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
    .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; }
    .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class OopClassesComponent {
  stackRefs = signal<{ name: string; type: string; address: string }[]>([]);
  heapObjects = signal<{ address: string; className: string; fields: { name: string; value: string }[] }[]>([]);
  activeRef = signal('');
  activeAddr = signal('');
  status = signal('Ready. Click a button to create an object and watch memory allocation.');
  isAnimating = signal(false);

  codeClass = `public class Person {
    // Fields (state)
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method (behavior)
    public String greet() {
        return "Hi, I'm " + name;
    }
}`;

  codeConstructor = `// Default constructor
public Person() {
    this.name = "Unknown";
    this.age = 0;
}

// Parameterized constructor
public Person(String name, int age) {
    this.name = name;
    this.age = age;
}`;

  codeMethods = `Person p = new Person("Alice", 28);

// Instance method
p.greet(); // "Hi, I'm Alice"
p.getAge(); // 28

// Modifying state
p.setName("Alicia");`;

  codeStatic = `public class MathUtils {
    // Static field
    public static final double PI = 3.14;

    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
}
// Call without an instance
MathUtils.add(5, 3); // 8`;

  codeToString = `@Override
public String toString() {
    return "Person{name='" + name +
           "', age=" + age + "}";
}

@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Person p)) return false;
    return age == p.age &&
           name.equals(p.name);
}`;

  private sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
  }

  async createObject() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.status.set('Step 1: Person alice = new Person("Alice", 28);');
    await this.sleep(800);

    this.status.set('Allocating memory on the heap...');
    this.heapObjects.set([{
      address: '0x4A0',
      className: 'Person',
      fields: [{ name: 'name', value: '"Alice"' }, { name: 'age', value: '28' }]
    }]);
    this.activeAddr.set('0x4A0');
    await this.sleep(1000);

    this.status.set('Storing reference "alice" on the stack → 0x4A0');
    this.stackRefs.set([{ name: 'alice', type: 'Person', address: '0x4A0' }]);
    this.activeRef.set('alice');
    await this.sleep(1000);

    this.status.set('Object created! "alice" variable → Person object at 0x4A0 ✅');
    this.isAnimating.set(false);
  }

  async createSecond() {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);

    this.status.set('Person bob = new Person("Bob", 32);');
    await this.sleep(800);

    this.status.set('Allocating a NEW object on the heap (separate memory)...');
    this.heapObjects.update(h => [...h, {
      address: '0x4B8',
      className: 'Person',
      fields: [{ name: 'name', value: '"Bob"' }, { name: 'age', value: '32' }]
    }]);
    this.activeAddr.set('0x4B8');
    await this.sleep(1000);

    this.stackRefs.update(s => [...s, { name: 'bob', type: 'Person', address: '0x4B8' }]);
    this.activeRef.set('bob');
    await this.sleep(800);

    this.status.set('Two separate objects on heap. Each variable holds its own reference! ✅');
    this.isAnimating.set(false);
  }

  resetDemo() {
    this.stackRefs.set([]);
    this.heapObjects.set([]);
    this.activeRef.set('');
    this.activeAddr.set('');
    this.status.set('Ready. Click a button to create an object and watch memory allocation.');
    this.isAnimating.set(false);
  }
}
