import{a as p,b as s,c as m}from"./chunk-3MUY7VVQ.js";import{$a as i,Ba as r,Ka as l,ab as n,bb as e,cb as o,yb as t}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`// Without Bridge: 2 shapes \xD7 2 renderers = 4 classes
// CircleOpenGL, CircleVulkan, RectOpenGL, RectVulkan ...
// 10 shapes \xD7 5 renderers = 50 classes!

// With Bridge: 2 shapes + 2 renderers = 4 classes
// Shape holds a reference to Renderer (the bridge)`;codeImpl=`// Implementation hierarchy \u2014 Renderer
interface Renderer {
    void renderCircle(double radius);
    void renderRectangle(double w, double h);
}

class OpenGLRenderer implements Renderer {
    public void renderCircle(double r) {
        System.out.println("OpenGL circle r=" + r);
    }
    public void renderRectangle(double w, double h) {
        System.out.println("OpenGL rect " + w + "\xD7" + h);
    }
}

class VulkanRenderer implements Renderer {
    public void renderCircle(double r) {
        System.out.println("Vulkan circle r=" + r);
    }
    public void renderRectangle(double w, double h) {
        System.out.println("Vulkan rect " + w + "\xD7" + h);
    }
}`;codeAbstraction=`// Abstraction hierarchy \u2014 Shape
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
}`;codeClient=`// Client \u2014 mix and match freely
Renderer opengl  = new OpenGLRenderer();
Renderer vulkan  = new VulkanRenderer();

Shape c1 = new Circle(5.0, opengl);
Shape c2 = new Circle(5.0, vulkan);
Shape r1 = new Rectangle(4, 6, opengl);

c1.draw(); // OpenGL circle r=5.0
c2.draw(); // Vulkan  circle r=5.0
r1.draw(); // OpenGL rect 4.0\xD76.0

c1.resize(2.0);
c1.draw(); // OpenGL circle r=10.0

// \u2705 Add a new shape  \u2014 zero renderer changes
// \u2705 Add a new renderer \u2014 zero shape changes`;codeJdbc=`// JDBC IS the Bridge pattern in Java's standard library

// Abstraction: java.sql.Connection, Statement, ResultSet
// Implementation: MySQL driver, PostgreSQL driver, Oracle driver

// You write code against the abstraction:
Connection conn = DriverManager.getConnection(url, user, pass);
PreparedStatement ps = conn.prepareStatement("SELECT * FROM orders");
ResultSet rs = ps.executeQuery();

// The driver (implementation) is swapped via the URL:
// jdbc:mysql://...      \u2192 MySQL driver
// jdbc:postgresql://... \u2192 PostgreSQL driver
// jdbc:h2:mem:...       \u2192 H2 in-memory driver

// \u2705 Your SQL code never changes \u2014 only the JDBC URL`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-dp-bridge"]],decls:41,vars:7,consts:[["title","Bridge","subtitle","Decouple abstraction from implementation so both can vary independently. Prefer composition over inheritance to avoid class explosion.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,d){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," What is Bridge?"),e(),n(5,"div",4)(6,"p"),t(7,"The "),n(8,"strong"),t(9,"Bridge"),e(),t(10," pattern splits a large class (or closely related classes) into two separate hierarchies \u2014 "),n(11,"em"),t(12,"abstraction"),e(),t(13," and "),n(14,"em"),t(15,"implementation"),e(),t(16," \u2014 that can be developed independently."),e(),n(17,"p"),t(18,"Problem it solves: without Bridge, adding N shapes \xD7 M rendering APIs = N\xD7M subclasses. With Bridge, you get N + M classes."),e(),o(19,"app-code-block",5),e()(),n(20,"section",1)(21,"h2",2),o(22,"app-icon",6),t(23," Implementations"),e(),n(24,"div",7)(25,"div",8)(26,"h3",9),t(27,"Implementation Side"),e(),o(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Abstraction Side"),e(),o(32,"app-code-block",5),e(),n(33,"div",8)(34,"h3",9),t(35,"Client Usage"),e(),o(36,"app-code-block",5),e(),n(37,"div",8)(38,"h3",9),t(39,"JDBC Example"),e(),o(40,"app-code-block",5),e()()()()),a&2&&(r(3),i("size",28),r(16),i("code",d.codeIntro),r(3),i("size",28),r(6),i("code",d.codeImpl),r(4),i("code",d.codeAbstraction),r(4),i("code",d.codeClient),r(4),i("code",d.codeJdbc))},dependencies:[p,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as DpBridgeComponent};
