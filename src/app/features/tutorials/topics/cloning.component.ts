import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-cloning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Object Cloning"
      subtitle="Understand shallow vs deep cloning. Use Cloneable, copy constructors, and serialization-based deep copy. Know when NOT to use clone()."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #831843, #ec4899)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="copy" [size]="28" css="icon-pink" /> Shallow vs Deep Copy
        </h2>
        <div class="prose">
          <p>
            A <strong>shallow copy</strong> duplicates primitive fields by value but copies only the <em>reference</em> for object fields — both original and clone point to the same nested object. A <strong>deep copy</strong> recursively duplicates every object in the graph so the clone is fully independent.
          </p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="scissors" [size]="28" css="icon-pink" /> Implementing Cloneable
        </h2>
        <div class="prose">
          <p>
            To use <code>Object.clone()</code> a class must implement the <code>Cloneable</code> marker interface, override <code>clone()</code> as <code>public</code>, and call <code>super.clone()</code>. Failure to implement <code>Cloneable</code> causes a <code>CloneNotSupportedException</code>. The result of <code>super.clone()</code> is always a <strong>shallow</strong> copy.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-pink" /> Deep Clone with clone()
        </h2>
        <div class="prose">
          <p>
            To achieve a deep clone via <code>Cloneable</code>, every mutable nested class must also implement <code>Cloneable</code> and override <code>clone()</code>. The parent's <code>clone()</code> then explicitly clones each nested object after calling <code>super.clone()</code>.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="star" [size]="28" css="icon-pink" /> Better Alternatives
        </h2>
        <div class="prose">
          <p>
            <strong>Effective Java</strong> (Bloch) recommends avoiding <code>clone()</code> entirely. The two superior patterns are:
          </p>
          <ul>
            <li><strong>Copy constructor</strong> — <code>new Person(other)</code>. Clear, type-safe, works with <code>final</code> fields, no checked exceptions.</li>
            <li><strong>Serialization-based deep copy</strong> — works for any <code>Serializable</code> object graph, but slower and requires all objects to implement <code>Serializable</code>.</li>
          </ul>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-circle" [size]="28" css="icon-pink" /> When NOT to Clone
        </h2>
        <div class="prose">
          <p>
            Never clone <strong>singletons</strong> (cloning defeats the pattern), <strong>objects with shared resources</strong> (database connections, file handles), or objects that hold <strong>callbacks or listeners</strong> (the clone would share the same listener registrations). In these cases, either throw <code>CloneNotSupportedException</code> or mark <code>clone()</code> <code>final</code> and have it throw unconditionally.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-pink" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Shallow vs deep copy</h4>
              <p class="tip-desc">Shallow copy duplicates the top-level object but shares nested object references. Deep copy creates independent copies of every object in the graph. Changing a nested object in the original affects the shallow copy but NOT the deep copy.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Why Cloneable is broken</h4>
              <p class="tip-desc"><code>clone()</code> is declared in <code>Object</code>, not in <code>Cloneable</code> — so there is no compile-time guarantee. If you forget to implement <code>Cloneable</code>, the exception only surfaces at runtime. The method signature also throws a checked exception and returns <code>Object</code>, requiring a cast.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Copy constructor is preferred</h4>
              <p class="tip-desc"><code>new Foo(other)</code> is explicit, type-safe, and works with <code>final</code> fields. It does not require <code>Cloneable</code>, does not throw checked exceptions, and does not rely on reflective object creation. It is the pattern recommended by Effective Java.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-pink { color: #ec4899; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code { background: #fdf2f8; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #831843; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #ec4899; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fdf2f8; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #831843; }
  `
})
export class CloningComponent {
  code1 = `// ── Address (mutable nested object) ──────────────────────────────
public class Address {
    String city;
    String country;
    public Address(String city, String country) {
        this.city = city; this.country = country;
    }
}

// ── Person holding an Address ──────────────────────────────────────
public class Person {
    String name;
    Address address; // mutable reference
    public Person(String name, Address address) {
        this.name = name; this.address = address;
    }
}

// SHALLOW COPY — only reference is copied
Person original = new Person("Alice", new Address("London", "UK"));
Person shallow  = new Person(original.name, original.address); // same Address!

shallow.address.city = "Paris";
System.out.println(original.address.city); // "Paris" — original affected!

// DEEP COPY — new Address created
Person deep = new Person(original.name,
    new Address(original.address.city, original.address.country));

deep.address.city = "Tokyo";
System.out.println(original.address.city); // "Paris" — original unaffected`;

  code2 = `// Shallow clone via Cloneable
public class Employee implements Cloneable {
    private String name;
    private double salary;
    private Address address; // mutable — will be shared in shallow clone

    public Employee(String name, double salary, Address address) {
        this.name = name; this.salary = salary; this.address = address;
    }

    @Override
    public Employee clone() {
        try {
            return (Employee) super.clone(); // shallow — copies primitives by value,
                                             // references by reference
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // cannot happen — we implement Cloneable
        }
    }
}

Employee e1 = new Employee("Bob", 80_000, new Address("NYC", "US"));
Employee e2 = e1.clone();                  // shallow copy

e2.salary = 90_000;                        // independent — OK
e2.address.city = "LA";                    // SHARED reference — mutates e1.address!
System.out.println(e1.address.city);       // "LA" — unexpected!`;

  code3 = `// Both Address and Person implement Cloneable for deep copy
public class Address implements Cloneable {
    String city;
    String country;
    public Address(String city, String country) {
        this.city = city; this.country = country;
    }

    @Override
    public Address clone() {
        try { return (Address) super.clone(); }
        catch (CloneNotSupportedException e) { throw new AssertionError(); }
    }
}

public class Person implements Cloneable {
    String name;
    Address address;

    public Person(String name, Address address) {
        this.name = name; this.address = address;
    }

    @Override
    public Person clone() {
        try {
            Person copy = (Person) super.clone(); // copies name (String — immutable)
            copy.address = this.address.clone();   // deep copy the nested Address
            return copy;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}

Person p1 = new Person("Alice", new Address("London", "UK"));
Person p2 = p1.clone();         // deep copy

p2.address.city = "Paris";
System.out.println(p1.address.city); // "London" — p1 is not affected!`;

  code4 = `// ── Copy Constructor (PREFERRED) ──────────────────────────────────
public class Person {
    private final String name;
    private final Address address;

    public Person(String name, Address address) {
        this.name    = name;
        this.address = new Address(address.city, address.country); // deep copy
    }

    // Copy constructor
    public Person(Person other) {
        this.name    = other.name;
        this.address = new Address(other.address.city, other.address.country);
    }
}

Person original = new Person("Alice", new Address("London", "UK"));
Person copy     = new Person(original); // clean, explicit, no checked exceptions

// ── Serialization-based deep copy ─────────────────────────────────
// Works for any fully-Serializable graph; slower than copy constructor
import java.io.*;

@SuppressWarnings("unchecked")
public static <T extends Serializable> T deepCopy(T original) {
    try {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        new ObjectOutputStream(baos).writeObject(original);
        ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
        return (T) new ObjectInputStream(bais).readObject();
    } catch (IOException | ClassNotFoundException e) {
        throw new RuntimeException("Deep copy failed", e);
    }
}

// Usage
Person clone = deepCopy(original); // fully independent object graph`;

  code5 = `// 1. Singleton — cloning defeats the pattern
public class Config implements Cloneable {
    private static final Config INSTANCE = new Config();
    private Config() {}
    public static Config getInstance() { return INSTANCE; }

    // Prevent cloning
    @Override
    public final Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException("Singleton cannot be cloned");
    }
}

// 2. Objects with shared resources — do NOT clone
public class DatabaseConnection implements Cloneable {
    private Connection conn; // expensive resource — should NOT be duplicated

    @Override
    public final Object clone() throws CloneNotSupportedException {
        // Cloning a DB connection would share or corrupt the connection state
        throw new CloneNotSupportedException("Use a connection pool instead");
    }
}

// 3. Effective Java recommendation — prefer static factory over clone()
public class ImmutableList<E> {
    // Use a static factory instead of clone()
    public static <E> ImmutableList<E> copyOf(ImmutableList<E> source) {
        return new ImmutableList<>(source.elements); // explicit, clear intent
    }
}`;
}
