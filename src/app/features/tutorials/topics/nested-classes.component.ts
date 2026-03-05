import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-nested-classes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Nested & Inner Classes"
      subtitle="Four types of nested classes — each with a distinct purpose. Know when to use static nested, inner, local, and anonymous classes."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a5f, #3b82f6)">

      <!-- Section 1: Overview -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-blue" /> Four Kinds of Nested Class
        </h2>
        <div class="kinds-grid">
          @for (kind of nestedKinds; track kind.name) {
            <div class="kind-card" [style.border-color]="kind.color + '50'">
              <div class="kind-header" [style.background]="kind.color + '15'">
                <span class="kind-name" [style.color]="kind.color">{{ kind.name }}</span>
                <span class="kind-badge" [style.background]="kind.color + '20'" [style.color]="kind.color">{{ kind.badge }}</span>
              </div>
              <div class="kind-body">
                <p class="kind-desc">{{ kind.desc }}</p>
                <div class="kind-when"><strong>Use when:</strong> {{ kind.use }}</div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Section 2: Memory Diagram -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-blue" /> Static vs Non-static Memory Diagram
          </h3>
          <p class="viz-desc">Toggle between static nested and non-static inner class to see the difference in object relationships on the heap.</p>

          <div class="toggle-row">
            <button class="toggle-btn" [class.toggle-active]="isStatic()" (click)="isStatic.set(true)">
              Static Nested Class
            </button>
            <button class="toggle-btn" [class.toggle-active]="!isStatic()" (click)="isStatic.set(false)">
              Non-static Inner Class
            </button>
          </div>

          <div class="memory-diagram">
            <div class="heap-section">
              <div class="heap-label">HEAP</div>
              <div class="outer-box">
                <div class="outer-label">Outer instance</div>
                <div class="outer-fields">
                  <div class="field-chip">value: 10</div>
                </div>
              </div>
              <div class="inner-box" [class.inner-linked]="!isStatic()">
                <div class="inner-label">{{ isStatic() ? 'Nested (static)' : 'Inner (non-static)' }} instance</div>
                @if (!isStatic()) {
                  <div class="ref-arrow">
                    <span class="ref-label">outer$ → Outer</span>
                  </div>
                }
                @if (isStatic()) {
                  <div class="no-ref">No reference to Outer</div>
                }
              </div>
            </div>
            <div class="diagram-notes">
              @if (isStatic()) {
                <div class="note note-green">
                  <strong>Independent:</strong> Static nested class has no implicit reference to Outer.
                  Can be instantiated as <code>new Outer.Nested()</code> without an Outer instance.
                  Safe from memory leaks.
                </div>
              } @else {
                <div class="note note-yellow">
                  <strong>Coupled:</strong> Inner class holds an implicit reference to its enclosing Outer instance.
                  Instantiated as <code>outer.new Inner()</code>. If the Inner instance outlives Outer, it prevents GC — a memory leak risk!
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Static Nested -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="box" [size]="28" css="icon-blue" /> Static Nested Class
        </h2>
        <div class="prose">
          <p>
            A static nested class is declared <code>static</code> inside an outer class.
            It has <strong>no implicit reference</strong> to the outer instance — it can only access static members of the outer class.
            The Builder pattern is its most common use case.
          </p>
          <app-code-block [code]="codeStaticNested" />
        </div>
      </section>

      <!-- Section 4: Non-static Inner -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="link" [size]="28" css="icon-blue" /> Non-static Inner Class
        </h2>
        <div class="prose">
          <p>
            A non-static inner class has full access to all members of the enclosing instance — including <code>private</code> fields.
            This is powerful but must be used carefully to avoid memory leaks.
          </p>
          <app-code-block [code]="codeInner" />
        </div>
      </section>

      <!-- Section 5: Anonymous Classes -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-blue" /> Anonymous Classes
        </h2>
        <div class="prose">
          <p>
            An anonymous class is declared and instantiated in a single expression. It has no name.
            Before Java 8, they were the only way to pass behaviour inline. Today, <strong>lambdas replace them</strong>
            for single-method (functional) interfaces — but anonymous classes are still needed for multi-method interfaces and abstract classes.
          </p>
          <app-code-block [code]="codeAnonymous" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-blue" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Memory Leak via Inner Class</h4>
              <p class="tip-desc">In Android and Swing, passing a non-static inner class as a callback (listener) is a common memory leak. The inner class holds a reference to the outer Activity/Frame, preventing it from being garbage-collected. Use a static nested class or a lambda instead.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">LinkedList.Node Is a Static Nested Class</h4>
              <p class="tip-desc">In the JDK, <code>LinkedList.Node&lt;E&gt;</code> is a <code>private static class</code> — it doesn't need a reference back to the <code>LinkedList</code>. This is the idiomatic pattern for data structure helper nodes.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Lambda vs Anonymous Class</h4>
              <p class="tip-desc">A lambda can only implement a <strong>functional interface</strong> (one abstract method). For an interface with multiple abstract methods, you must use an anonymous class. Also, <code>this</code> in a lambda refers to the enclosing class; in an anonymous class, it refers to the anonymous class itself.</p>
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
    .icon-blue { color: #3b82f6; }

    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #dbeafe; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1d4ed8;
    }

    /* Kinds Grid */
    .kinds-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
    .kind-card { border-radius: 16px; border: 1px solid; overflow: hidden; background: #fff; transition: all 0.2s; }
    .kind-card:hover { box-shadow: 0 4px 16px rgba(59,130,246,0.08); transform: translateY(-2px); }
    .kind-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; }
    .kind-name { font-size: 0.85rem; font-weight: 800; }
    .kind-badge { font-size: 0.62rem; font-weight: 800; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.06em; }
    .kind-body { padding: 14px 16px; }
    .kind-desc { font-size: 0.82rem; color: #52665A; margin: 0 0 10px; line-height: 1.5; }
    .kind-when { font-size: 0.78rem; color: #475569; line-height: 1.5; }
    .kind-when strong { color: #1B1B1B; }

    /* Viz */
    .viz-card {
      background: #fff; border-radius: 20px; border: 1px solid #D6DDD2;
      box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 28px 24px;
    }
    .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #1B1B1B; margin: 0 0 8px; }
    .viz-desc { font-size: 0.85rem; color: #52665A; margin: 0 0 20px; line-height: 1.6; }

    .toggle-row { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
    .toggle-btn {
      padding: 10px 20px; border-radius: 12px; border: 1px solid #e2e8f0;
      background: #fff; color: #64748b; font-size: 0.8rem; font-weight: 700;
      cursor: pointer; transition: all 0.2s;
    }
    .toggle-btn:hover { border-color: #3b82f6; color: #3b82f6; }
    .toggle-btn.toggle-active { background: #3b82f6; border-color: #3b82f6; color: #fff; }

    .memory-diagram { display: flex; gap: 20px; flex-wrap: wrap; }
    .heap-section { display: flex; flex-direction: column; gap: 12px; flex: 1; min-width: 200px; }
    .heap-label { font-size: 0.65rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; }
    .outer-box {
      padding: 14px 16px; border-radius: 14px; border: 2px solid #3b82f6;
      background: #eff6ff;
    }
    .outer-label { font-size: 0.72rem; font-weight: 800; color: #1d4ed8; margin-bottom: 8px; font-family: 'JetBrains Mono', monospace; }
    .outer-fields { display: flex; gap: 6px; flex-wrap: wrap; }
    .field-chip { background: #dbeafe; color: #1d4ed8; padding: 4px 10px; border-radius: 8px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; }
    .inner-box {
      padding: 14px 16px; border-radius: 14px; border: 2px dashed #94a3b8;
      background: #f8fafc; transition: all 0.3s;
    }
    .inner-box.inner-linked { border-color: #f97316; background: #fff7ed; }
    .inner-label { font-size: 0.72rem; font-weight: 800; color: #64748b; font-family: 'JetBrains Mono', monospace; }
    .inner-box.inner-linked .inner-label { color: #c2410c; }
    .ref-arrow { margin-top: 8px; }
    .ref-label { font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; color: #f97316; font-weight: 700; }
    .no-ref { margin-top: 8px; font-size: 0.72rem; color: #059669; font-weight: 700; }
    .diagram-notes { flex: 1; min-width: 200px; display: flex; align-items: flex-start; }
    .note { padding: 14px 16px; border-radius: 14px; font-size: 0.82rem; line-height: 1.6; color: #52665A; }
    .note strong { color: #1B1B1B; }
    .note code { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; }
    .note-green { background: #f0fdf4; border: 1px solid #86efac; }
    .note-yellow { background: #fffbeb; border: 1px solid #fcd34d; }

    /* Tips */
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; transition: all 0.2s; }
    .tip-card:hover { border-color: #93c5fd; box-shadow: 0 4px 12px rgba(59,130,246,0.06); }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #3b82f6; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #dbeafe; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #1d4ed8; }
  `
})
export class NestedClassesComponent {
  isStatic = signal(true);

  nestedKinds = [
    {
      name: 'Static Nested', badge: 'static', color: '#2563eb',
      desc: 'Declared with static inside an outer class. No implicit reference to the outer instance.',
      use: 'Helper classes, Builder pattern, Node in data structures'
    },
    {
      name: 'Inner Class', badge: 'instance', color: '#f97316',
      desc: 'Non-static class inside an outer class. Has a hidden reference to the outer instance.',
      use: 'Iterators, event adapters that need outer state'
    },
    {
      name: 'Local Class', badge: 'method', color: '#7c3aed',
      desc: 'Defined inside a method. Visible only within that method block.',
      use: 'Complex logic needed locally, rare in modern code'
    },
    {
      name: 'Anonymous Class', badge: 'inline', color: '#059669',
      desc: 'No name. Declared and instantiated in one expression. Extends a class or implements an interface.',
      use: 'One-off implementations before Java 8. Now replaced by lambdas for single-method interfaces.'
    },
  ];

  codeStaticNested = `public class Person {
    private final String name;
    private final int age;

    private Person(Builder b) {
        this.name = b.name;
        this.age  = b.age;
    }

    // Static nested class — no Person instance needed to create a Builder
    public static class Builder {
        private String name;
        private int age;

        public Builder name(String n) { this.name = n; return this; }
        public Builder age(int a)     { this.age  = a; return this; }
        public Person  build()        { return new Person(this); }
    }

    @Override public String toString() { return name + " (" + age + ")"; }
}

// Usage
Person p = new Person.Builder()
    .name("Alice")
    .age(30)
    .build();
System.out.println(p); // Alice (30)`;

  codeInner = `public class Outer {
    private int value = 10;
    private String secret = "hidden";

    class Inner {
        void display() {
            // Inner has full access to Outer's private members
            System.out.println("Outer value: " + value);
            System.out.println("Secret: " + secret);
        }
    }
}

// Must have an Outer instance first
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.display();

// Real-world use: Iterator inside a custom collection
class MyList<T> {
    private Object[] data = new Object[10];
    private int size = 0;

    class MyIterator implements Iterator<T> {
        int cursor = 0;
        public boolean hasNext() { return cursor < size; }
        @SuppressWarnings("unchecked")
        public T next() { return (T) data[cursor++]; }
    }
}`;

  codeAnonymous = `// Anonymous class implementing an interface
Comparator<String> byLength = new Comparator<>() {
    @Override
    public int compare(String a, String b) {
        return Integer.compare(a.length(), b.length());
    }
};

// Modern equivalent with lambda (preferred for functional interfaces)
Comparator<String> byLengthLambda = (a, b) -> Integer.compare(a.length(), b.length());

// Anonymous class still needed for MULTIPLE abstract methods
abstract class ClickHandler {
    abstract void onClick();
    abstract void onLongClick();
}

ClickHandler handler = new ClickHandler() {
    @Override public void onClick()      { System.out.println("clicked"); }
    @Override public void onLongClick()  { System.out.println("long click"); }
};

// Runnable (single method) → lambda wins
Runnable r1 = new Runnable() {           // verbose
    @Override public void run() { System.out.println("old style"); }
};
Runnable r2 = () -> System.out.println("lambda"); // clean`;
}
