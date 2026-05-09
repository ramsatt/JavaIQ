import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-bridge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Bridge" subtitle="Decouple abstraction from implementation so both can vary independently. Prefer composition over inheritance to avoid class explosion." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Bridge?</h2>
        <div class="prose">
          <p>The <strong>Bridge</strong> pattern splits a large class (or closely related classes) into two separate hierarchies — <em>abstraction</em> and <em>implementation</em> — that can be developed independently.</p>
          <p>Problem it solves: without Bridge, adding N shapes × M rendering APIs = N×M subclasses. With Bridge, you get N + M classes.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Implementation Side</h3><app-code-block [code]="codeImpl" /></div>
          <div class="op-card"><h3 class="op-title">Abstraction Side</h3><app-code-block [code]="codeAbstraction" /></div>
          <div class="op-card"><h3 class="op-title">Client Usage</h3><app-code-block [code]="codeClient" /></div>
          <div class="op-card"><h3 class="op-title">JDBC Example</h3><app-code-block [code]="codeJdbc" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpBridgeComponent {
  codeIntro = `// Without Bridge: 2 shapes × 2 renderers = 4 classes
// CircleOpenGL, CircleVulkan, RectOpenGL, RectVulkan ...
// 10 shapes × 5 renderers = 50 classes!

// With Bridge: 2 shapes + 2 renderers = 4 classes
// Shape holds a reference to Renderer (the bridge)`;

  codeImpl = `// Implementation hierarchy — Renderer
interface Renderer {
    void renderCircle(double radius);
    void renderRectangle(double w, double h);
}

class OpenGLRenderer implements Renderer {
    public void renderCircle(double r) {
        System.out.println("OpenGL circle r=" + r);
    }
    public void renderRectangle(double w, double h) {
        System.out.println("OpenGL rect " + w + "×" + h);
    }
}

class VulkanRenderer implements Renderer {
    public void renderCircle(double r) {
        System.out.println("Vulkan circle r=" + r);
    }
    public void renderRectangle(double w, double h) {
        System.out.println("Vulkan rect " + w + "×" + h);
    }
}`;

  codeAbstraction = `// Abstraction hierarchy — Shape
abstract class Shape {
    protected Renderer renderer; // the bridge

    Shape(Renderer renderer) { this.renderer = renderer; }

    abstract void draw();
    abstract void resize(double factor);
}

class Circle extends Shape {
    private double radius;

    Circle(double radius, Renderer renderer) {
        super(renderer);
        this.radius = radius;
    }

    public void draw() { renderer.renderCircle(radius); }
    public void resize(double f) { radius *= f; }
}

class Rectangle extends Shape {
    private double w, h;

    Rectangle(double w, double h, Renderer renderer) {
        super(renderer); this.w = w; this.h = h;
    }

    public void draw() { renderer.renderRectangle(w, h); }
    public void resize(double f) { w *= f; h *= f; }
}`;

  codeClient = `// Client — mix and match freely
Renderer opengl  = new OpenGLRenderer();
Renderer vulkan  = new VulkanRenderer();

Shape c1 = new Circle(5.0, opengl);
Shape c2 = new Circle(5.0, vulkan);
Shape r1 = new Rectangle(4, 6, opengl);

c1.draw(); // OpenGL circle r=5.0
c2.draw(); // Vulkan  circle r=5.0
r1.draw(); // OpenGL rect 4.0×6.0

c1.resize(2.0);
c1.draw(); // OpenGL circle r=10.0

// ✅ Add a new shape  — zero renderer changes
// ✅ Add a new renderer — zero shape changes`;

  codeJdbc = `// JDBC IS the Bridge pattern in Java's standard library

// Abstraction: java.sql.Connection, Statement, ResultSet
// Implementation: MySQL driver, PostgreSQL driver, Oracle driver

// You write code against the abstraction:
Connection conn = DriverManager.getConnection(url, user, pass);
PreparedStatement ps = conn.prepareStatement("SELECT * FROM orders");
ResultSet rs = ps.executeQuery();

// The driver (implementation) is swapped via the URL:
// jdbc:mysql://...      → MySQL driver
// jdbc:postgresql://... → PostgreSQL driver
// jdbc:h2:mem:...       → H2 in-memory driver

// ✅ Your SQL code never changes — only the JDBC URL`;
}
