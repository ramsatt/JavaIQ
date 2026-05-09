import{a as p,b as d,c as m}from"./chunk-3MUY7VVQ.js";import{$a as a,Ba as o,Ka as l,ab as i,bb as e,cb as n,yb as t}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var h=class c{codeIntro=`// Add "export to XML" and "calculate tax" to a shape hierarchy
// WITHOUT touching Circle, Rectangle, Triangle classes.

// Each shape accepts a visitor:
shape.accept(new XmlExportVisitor());
shape.accept(new TaxCalculatorVisitor());

// New operation = new Visitor class. Zero changes to shapes.`;codeElement=`// Element interface \u2014 must accept visitors
interface Shape {
    void accept(ShapeVisitor visitor);
}

class Circle implements Shape {
    double radius;
    Circle(double r) { this.radius = r; }

    @Override
    public void accept(ShapeVisitor v) {
        v.visit(this); // double dispatch \u2014 calls visit(Circle)
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
}`;codeVisitor=`// Visitor interface \u2014 one visit() per element type
interface ShapeVisitor {
    void visit(Circle circle);
    void visit(Rectangle rectangle);
    void visit(Triangle triangle);
}`;codeConcrete=`// Operation 1: Area calculator
class AreaCalculator implements ShapeVisitor {
    private double totalArea = 0;

    public void visit(Circle c)    { totalArea += Math.PI * c.radius * c.radius; }
    public void visit(Rectangle r) { totalArea += r.width * r.height; }
    public void visit(Triangle t)  { totalArea += 0.5 * t.base * t.height; }

    public double getTotal() { return totalArea; }
}

// Operation 2: XML export \u2014 zero shape changes needed
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

shapes.forEach(s -> s.accept(new XmlExportVisitor()));`;codeModern=`// Java 21 \u2014 sealed classes + pattern matching replace classic Visitor
sealed interface Shape permits Circle, Rectangle, Triangle {}
record Circle(double radius)          implements Shape {}
record Rectangle(double w, double h)  implements Shape {}
record Triangle(double base, double h) implements Shape {}

// "Visitor" is just a switch expression \u2014 no accept() needed
double area(Shape s) {
    return switch (s) {
        case Circle    c -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.w() * r.h();
        case Triangle  t -> 0.5 * t.base() * t.h();
    };
    // Compiler enforces exhaustiveness \u2014 add new Shape \u2192 compile error
}

String toXml(Shape s) {
    return switch (s) {
        case Circle    c -> "<circle radius='%s'/>".formatted(c.radius());
        case Rectangle r -> "<rect w='%s' h='%s'/>".formatted(r.w(), r.h());
        case Triangle  t -> "<triangle base='%s' h='%s'/>".formatted(t.base(), t.h());
    };
}`;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-dp-visitor"]],decls:47,vars:7,consts:[["title","Visitor","subtitle","Add new operations to existing object structures without modifying them. Separate algorithms from the objects they operate on.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,r){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," What is Visitor?"),e(),i(5,"div",4)(6,"p"),t(7,"The "),i(8,"strong"),t(9,"Visitor"),e(),t(10," pattern lets you add new operations to a class hierarchy without changing the classes themselves. Each element "),i(11,"em"),t(12,"accepts"),e(),t(13," a visitor; the visitor provides the operation logic per element type via overloaded "),i(14,"code"),t(15,"visit()"),e(),t(16," methods."),e(),i(17,"p"),t(18,"The key mechanism is "),i(19,"em"),t(20,"double dispatch"),e(),t(21,": the right "),i(22,"code"),t(23,"visit()"),e(),t(24," overload is chosen at runtime based on both the visitor type AND the element type."),e(),n(25,"app-code-block",5),e()(),i(26,"section",1)(27,"h2",2),n(28,"app-icon",6),t(29," Implementations"),e(),i(30,"div",7)(31,"div",8)(32,"h3",9),t(33,"Element Hierarchy"),e(),n(34,"app-code-block",5),e(),i(35,"div",8)(36,"h3",9),t(37,"Visitor Interface"),e(),n(38,"app-code-block",5),e(),i(39,"div",8)(40,"h3",9),t(41,"Concrete Visitors"),e(),n(42,"app-code-block",5),e(),i(43,"div",8)(44,"h3",9),t(45,"Modern Java: Pattern Matching"),e(),n(46,"app-code-block",5),e()()()()),s&2&&(o(3),a("size",28),o(22),a("code",r.codeIntro),o(3),a("size",28),o(6),a("code",r.codeElement),o(4),a("code",r.codeVisitor),o(4),a("code",r.codeConcrete),o(4),a("code",r.codeModern))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{h as DpVisitorComponent};
