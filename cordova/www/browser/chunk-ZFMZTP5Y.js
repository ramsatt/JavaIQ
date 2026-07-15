import{a as s,b as d,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as c,ba as r,ca as o,da as e,ea as n,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var y=class l{codeIntro=`// Problem: creating a "GameCharacter" requires DB lookup + asset load = 200ms
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
// c2 still has original color \u2014 independent clones`;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-dp-prototype"]],decls:45,vars:7,consts:[["title","Prototype","subtitle","Clone existing objects instead of creating new ones from scratch. Avoid costly initialisation by copying a pre-built prototype.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],["src","/assets/images/topics/dp-prototype.png","alt","Prototype Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,p){a&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," What is Prototype?"),e(),n(5,"img",4),o(6,"div",5)(7,"p"),t(8,"The "),o(9,"strong"),t(10,"Prototype"),e(),t(11," pattern creates new objects by copying (cloning) an existing object \u2014 the prototype. Useful when object creation is expensive (DB lookup, complex init) and you need many similar instances."),e(),o(12,"p"),t(13,"Key concern: "),o(14,"em"),t(15,"shallow copy"),e(),t(16," vs "),o(17,"em"),t(18,"deep copy"),e(),t(19,". Java's "),o(20,"code"),t(21,"Cloneable"),e(),t(22," does shallow copy by default \u2014 nested objects still share references."),e(),n(23,"app-code-block",6),e()(),o(24,"section",1)(25,"h2",2),n(26,"app-icon",7),t(27," Implementations"),e(),o(28,"div",8)(29,"div",9)(30,"h3",10),t(31,"Cloneable Interface"),e(),n(32,"app-code-block",6),e(),o(33,"div",9)(34,"h3",10),t(35,"Deep Copy"),e(),n(36,"app-code-block",6),e(),o(37,"div",9)(38,"h3",10),t(39,"Copy Constructor"),e(),n(40,"app-code-block",6),e(),o(41,"div",9)(42,"h3",10),t(43,"Prototype Registry"),e(),n(44,"app-code-block",6),e()()()()),a&2&&(i(3),r("size",28),i(20),r("code",p.codeIntro),i(3),r("size",28),i(6),r("code",p.codeCloneable),i(4),r("code",p.codeDeep),i(4),r("code",p.codeCopyCtor),i(4),r("code",p.codeRegistry))},dependencies:[s,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{y as DpPrototypeComponent};
