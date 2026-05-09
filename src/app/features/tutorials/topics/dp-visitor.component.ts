import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-visitor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Visitor" subtitle="Add new operations to existing object structures without modifying them. Separate algorithms from the objects they operate on." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Visitor?</h2>
        <div class="prose">
          <p>The <strong>Visitor</strong> pattern lets you add new operations to a class hierarchy without changing the classes themselves. Each element <em>accepts</em> a visitor; the visitor provides the operation logic per element type via overloaded <code>visit()</code> methods.</p>
          <p>The key mechanism is <em>double dispatch</em>: the right <code>visit()</code> overload is chosen at runtime based on both the visitor type AND the element type.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Element Hierarchy</h3><app-code-block [code]="codeElement" /></div>
          <div class="op-card"><h3 class="op-title">Visitor Interface</h3><app-code-block [code]="codeVisitor" /></div>
          <div class="op-card"><h3 class="op-title">Concrete Visitors</h3><app-code-block [code]="codeConcrete" /></div>
          <div class="op-card"><h3 class="op-title">Modern Java: Pattern Matching</h3><app-code-block [code]="codeModern" /></div>
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
export class DpVisitorComponent {
  codeIntro = `// Add "export to XML" and "calculate tax" to a shape hierarchy
// WITHOUT touching Circle, Rectangle, Triangle classes.

// Each shape accepts a visitor:
shape.accept(new XmlExportVisitor());
shape.accept(new TaxCalculatorVisitor());

// New operation = new Visitor class. Zero changes to shapes.`;

  codeElement = `// Element interface — must accept visitors
interface Shape {
    void accept(ShapeVisitor visitor);
}

class Circle implements Shape {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override
    public void accept(ShapeVisitor v) {
        v.visit(this); // double dispatch — calls visit(Circle)
    }
}

class Rectangle implements Shape {
    double width, height;
    Rectangle(double w, double h) { this.width = w; this.height = h; }

    @Override
    public void accept(ShapeVisitor v) {
        v.visit(this); // calls visit(Rectangle)
    }
}

class Triangle implements Shape {
    double base, height;
    Triangle(double b, double h) { this.base = b; this.height = h; }

    @Override
    public void accept(ShapeVisitor v) { v.visit(this); }
}`;

  codeVisitor = `// Visitor interface — one visit() per element type
interface ShapeVisitor {
    void visit(Circle circle);
    void visit(Rectangle rectangle);
    void visit(Triangle triangle);
}`;

  codeConcrete = `// Operation 1: Area calculator
class AreaCalculator implements ShapeVisitor {
    private double totalArea = 0;

    public void visit(Circle c)    { totalArea += Math.PI * c.radius * c.radius; }
    public void visit(Rectangle r) { totalArea += r.width * r.height; }
    public void visit(Triangle t)  { totalArea += 0.5 * t.base * t.height; }

    public double getTotal() { return totalArea; }
}

// Operation 2: XML export — zero shape changes needed
class XmlExportVisitor implements ShapeVisitor {
    public void visit(Circle c) {
        System.out.printf("<circle radius='%.1f'/>%n", c.radius);
    }
    public void visit(Rectangle r) {
        System.out.printf("<rect w='%.1f' h='%.1f'/>%n", r.width, r.height);
    }
    public void visit(Triangle t) {
        System.out.printf("<triangle base='%.1f' h='%.1f'/>%n", t.base, t.height);
    }
}

// Client
List<Shape> shapes = List.of(new Circle(5), new Rectangle(4,6), new Triangle(3,8));
AreaCalculator calc = new AreaCalculator();
shapes.forEach(s -> s.accept(calc));
System.out.printf("Total area: %.2f%n", calc.getTotal());

shapes.forEach(s -> s.accept(new XmlExportVisitor()));`;

  codeModern = `// Java 21 — sealed classes + pattern matching replace classic Visitor
sealed interface Shape permits Circle, Rectangle, Triangle {}
record Circle(double radius)          implements Shape {}
record Rectangle(double w, double h)  implements Shape {}
record Triangle(double base, double h) implements Shape {}

// "Visitor" is just a switch expression — no accept() needed
double area(Shape s) {
    return switch (s) {
        case Circle    c -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.w() * r.h();
        case Triangle  t -> 0.5 * t.base() * t.h();
    };
    // Compiler enforces exhaustiveness — add new Shape → compile error
}

String toXml(Shape s) {
    return switch (s) {
        case Circle    c -> "<circle radius='%s'/>".formatted(c.radius());
        case Rectangle r -> "<rect w='%s' h='%s'/>".formatted(r.w(), r.h());
        case Triangle  t -> "<triangle base='%s' h='%s'/>".formatted(t.base(), t.h());
    };
}`;
}
