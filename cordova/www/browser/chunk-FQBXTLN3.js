import{a as s,b as d,c as m}from"./chunk-VPQEQBVO.js";import{Ba as n,Ka as c,ab as i,bb as o,cb as e,db as r,zb as t}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var y=class l{codeIntro=`// Problem: creating a "GameCharacter" requires DB lookup + asset load = 200ms
// Solution: create one, then clone it for each new player

GameCharacter template = expensiveLoad(); // 200ms once
GameCharacter player1  = template.clone(); // < 1ms
GameCharacter player2  = template.clone(); // < 1ms`;codeCloneable=`// Java's Cloneable \u2014 shallow copy
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
    Address address; // mutable nested object \u2014 danger!

    @Override
    public Employee clone() {
        try { return (Employee) super.clone(); } // \u26A0\uFE0F shallow!
        catch (CloneNotSupportedException e) { throw new AssertionError(); }
    }
}

Employee e1 = new Employee("Alice", new Address("NY"));
Employee e2 = e1.clone();
e2.address.city = "LA";
System.out.println(e1.address.city); // "LA" \u2190 shared reference!`;codeDeep=`// Deep copy \u2014 clone nested objects too
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
System.out.println(e1.address.city); // "NY" \u2705 independent copy`;codeCopyCtor=`// Preferred: Copy Constructor (avoids Cloneable pitfalls)
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
// \u2705 Clear intent, no CloneNotSupportedException, works with final fields`;codeRegistry=`// Prototype Registry \u2014 cache named prototypes
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
// c2 still has original color \u2014 independent clones`;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-dp-prototype"]],decls:44,vars:7,consts:[["title","Prototype","subtitle","Clone existing objects instead of creating new ones from scratch. Avoid costly initialisation by copying a pre-built prototype.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,p){a&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What is Prototype?"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Prototype"),e(),t(10," pattern creates new objects by copying (cloning) an existing object \u2014 the prototype. Useful when object creation is expensive (DB lookup, complex init) and you need many similar instances."),e(),o(11,"p"),t(12,"Key concern: "),o(13,"em"),t(14,"shallow copy"),e(),t(15," vs "),o(16,"em"),t(17,"deep copy"),e(),t(18,". Java's "),o(19,"code"),t(20,"Cloneable"),e(),t(21," does shallow copy by default \u2014 nested objects still share references."),e(),r(22,"app-code-block",5),e()(),o(23,"section",1)(24,"h2",2),r(25,"app-icon",6),t(26," Implementations"),e(),o(27,"div",7)(28,"div",8)(29,"h3",9),t(30,"Cloneable Interface"),e(),r(31,"app-code-block",5),e(),o(32,"div",8)(33,"h3",9),t(34,"Deep Copy"),e(),r(35,"app-code-block",5),e(),o(36,"div",8)(37,"h3",9),t(38,"Copy Constructor"),e(),r(39,"app-code-block",5),e(),o(40,"div",8)(41,"h3",9),t(42,"Prototype Registry"),e(),r(43,"app-code-block",5),e()()()()),a&2&&(n(3),i("size",28),n(19),i("code",p.codeIntro),n(3),i("size",28),n(6),i("code",p.codeCloneable),n(4),i("code",p.codeDeep),n(4),i("code",p.codeCopyCtor),n(4),i("code",p.codeRegistry))},dependencies:[s,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{y as DpPrototypeComponent};
