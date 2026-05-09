import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-prototype',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Prototype" subtitle="Clone existing objects instead of creating new ones from scratch. Avoid costly initialisation by copying a pre-built prototype." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Prototype?</h2>
        <div class="prose">
          <p>The <strong>Prototype</strong> pattern creates new objects by copying (cloning) an existing object — the prototype. Useful when object creation is expensive (DB lookup, complex init) and you need many similar instances.</p>
          <p>Key concern: <em>shallow copy</em> vs <em>deep copy</em>. Java's <code>Cloneable</code> does shallow copy by default — nested objects still share references.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Cloneable Interface</h3><app-code-block [code]="codeCloneable" /></div>
          <div class="op-card"><h3 class="op-title">Deep Copy</h3><app-code-block [code]="codeDeep" /></div>
          <div class="op-card"><h3 class="op-title">Copy Constructor</h3><app-code-block [code]="codeCopyCtor" /></div>
          <div class="op-card"><h3 class="op-title">Prototype Registry</h3><app-code-block [code]="codeRegistry" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; color: #4338ca; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpPrototypeComponent {
  codeIntro = `// Problem: creating a "GameCharacter" requires DB lookup + asset load = 200ms
// Solution: create one, then clone it for each new player

GameCharacter template = expensiveLoad(); // 200ms once
GameCharacter player1  = template.clone(); // < 1ms
GameCharacter player2  = template.clone(); // < 1ms`;

  codeCloneable = `// Java's Cloneable — shallow copy
class Address implements Cloneable {
    String city;
    Address(String city) { this.city = city; }

    @Override
    public Address clone() {
        try { return (Address) super.clone(); }
        catch (CloneNotSupportedException e) { throw new AssertionError(); }
    }
}

class Employee implements Cloneable {
    String name;
    Address address; // mutable nested object — danger!

    @Override
    public Employee clone() {
        try { return (Employee) super.clone(); } // ⚠️ shallow!
        catch (CloneNotSupportedException e) { throw new AssertionError(); }
    }
}

Employee e1 = new Employee("Alice", new Address("NY"));
Employee e2 = e1.clone();
e2.address.city = "LA";
System.out.println(e1.address.city); // "LA" ← shared reference!`;

  codeDeep = `// Deep copy — clone nested objects too
class Employee implements Cloneable {
    String name;
    Address address;

    @Override
    public Employee clone() {
        try {
            Employee copy = (Employee) super.clone();
            copy.address  = this.address.clone(); // deep copy
            return copy;
        } catch (CloneNotSupportedException e) { throw new AssertionError(); }
    }
}

Employee e1 = new Employee("Alice", new Address("NY"));
Employee e2 = e1.clone();
e2.address.city = "LA";
System.out.println(e1.address.city); // "NY" ✅ independent copy`;

  codeCopyCtor = `// Preferred: Copy Constructor (avoids Cloneable pitfalls)
class Employee {
    String name;
    Address address;

    // Copy constructor
    public Employee(Employee other) {
        this.name    = other.name;
        this.address = new Address(other.address.city); // deep
    }
}

// Or static factory
public static Employee copyOf(Employee other) {
    return new Employee(other);
}

Employee original = new Employee("Alice", new Address("NY"));
Employee copy     = new Employee(original);
// ✅ Clear intent, no CloneNotSupportedException, works with final fields`;

  codeRegistry = `// Prototype Registry — cache named prototypes
class ShapeRegistry {
    private static final Map<String, Shape> prototypes = new HashMap<>();

    static {
        prototypes.put("circle",    new Circle(10));
        prototypes.put("rectangle", new Rectangle(5, 8));
        prototypes.put("triangle",  new Triangle(3, 4, 5));
    }

    public static Shape get(String type) {
        Shape proto = prototypes.get(type);
        if (proto == null) throw new IllegalArgumentException("Unknown: " + type);
        return proto.clone(); // always return a fresh copy
    }
}

// Client
Shape c1 = ShapeRegistry.get("circle");
Shape c2 = ShapeRegistry.get("circle");
c1.setColor("red");
// c2 still has original color — independent clones`;
}
