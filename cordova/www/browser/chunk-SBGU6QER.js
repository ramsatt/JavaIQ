import{a as p,b as s,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as l,ba as o,ca as n,da as e,ea as r,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var g=class c{codeIntro=`// Without Bridge: 2 shapes \xD7 2 renderers = 4 classes
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

// \u2705 Your SQL code never changes \u2014 only the JDBC URL`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-dp-bridge"]],decls:43,vars:7,consts:[["title","Bridge","subtitle","Decouple abstraction from implementation so both can vary independently. Prefer composition over inheritance to avoid class explosion.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/dp-bridge.png","alt","Bridge Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,d){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What is Bridge?"),e(),n(5,"div",4),r(6,"img",5),e(),n(7,"div",6)(8,"p"),t(9,"The "),n(10,"strong"),t(11,"Bridge"),e(),t(12," pattern splits a large class (or closely related classes) into two separate hierarchies \u2014 "),n(13,"em"),t(14,"abstraction"),e(),t(15," and "),n(16,"em"),t(17,"implementation"),e(),t(18," \u2014 that can be developed independently."),e(),n(19,"p"),t(20,"Problem it solves: without Bridge, adding N shapes \xD7 M rendering APIs = N\xD7M subclasses. With Bridge, you get N + M classes."),e(),r(21,"app-code-block",7),e()(),n(22,"section",1)(23,"h2",2),r(24,"app-icon",8),t(25," Implementations"),e(),n(26,"div",9)(27,"div",10)(28,"h3",11),t(29,"Implementation Side"),e(),r(30,"app-code-block",7),e(),n(31,"div",10)(32,"h3",11),t(33,"Abstraction Side"),e(),r(34,"app-code-block",7),e(),n(35,"div",10)(36,"h3",11),t(37,"Client Usage"),e(),r(38,"app-code-block",7),e(),n(39,"div",10)(40,"h3",11),t(41,"JDBC Example"),e(),r(42,"app-code-block",7),e()()()()),a&2&&(i(3),o("size",28),i(18),o("code",d.codeIntro),i(3),o("size",28),i(6),o("code",d.codeImpl),i(4),o("code",d.codeAbstraction),i(4),o("code",d.codeClient),i(4),o("code",d.codeJdbc))},dependencies:[p,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #e2e8f0}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpBridgeComponent};
