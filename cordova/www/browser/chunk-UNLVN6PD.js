import{a as d,b as p,c as m}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as o,S as c,ba as r,ca as n,da as t,ea as i,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class a{code1=`// \u2500\u2500 Address (mutable nested object) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
public class Address {
    String city;
    String country;
    public Address(String city, String country) {
        this.city = city; this.country = country;
    }
}

// \u2500\u2500 Person holding an Address \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
public class Person {
    String name;
    Address address; // mutable reference
    public Person(String name, Address address) {
        this.name = name; this.address = address;
    }
}

// SHALLOW COPY \u2014 only reference is copied
Person original = new Person("Alice", new Address("London", "UK"));
Person shallow  = new Person(original.name, original.address); // same Address!

shallow.address.city = "Paris";
System.out.println(original.address.city); // "Paris" \u2014 original affected!

// DEEP COPY \u2014 new Address created
Person deep = new Person(original.name,
    new Address(original.address.city, original.address.country));

deep.address.city = "Tokyo";
System.out.println(original.address.city); // "Paris" \u2014 original unaffected`;code2=`// Shallow clone via Cloneable
public class Employee implements Cloneable {
    private String name;
    private double salary;
    private Address address; // mutable \u2014 will be shared in shallow clone

    public Employee(String name, double salary, Address address) {
        this.name = name; this.salary = salary; this.address = address;
    }

    @Override
    public Employee clone() {
        try {
            return (Employee) super.clone(); // shallow \u2014 copies primitives by value,
                                             // references by reference
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // cannot happen \u2014 we implement Cloneable
        }
    }
}

Employee e1 = new Employee("Bob", 80_000, new Address("NYC", "US"));
Employee e2 = e1.clone();                  // shallow copy

e2.salary = 90_000;                        // independent \u2014 OK
e2.address.city = "LA";                    // SHARED reference \u2014 mutates e1.address!
System.out.println(e1.address.city);       // "LA" \u2014 unexpected!`;code3=`// Both Address and Person implement Cloneable for deep copy
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
            Person copy = (Person) super.clone(); // copies name (String \u2014 immutable)
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
System.out.println(p1.address.city); // "London" \u2014 p1 is not affected!`;code4=`// \u2500\u2500 Copy Constructor (PREFERRED) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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

// \u2500\u2500 Serialization-based deep copy \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
Person clone = deepCopy(original); // fully independent object graph`;code5=`// 1. Singleton \u2014 cloning defeats the pattern
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

// 2. Objects with shared resources \u2014 do NOT clone
public class DatabaseConnection implements Cloneable {
    private Connection conn; // expensive resource \u2014 should NOT be duplicated

    @Override
    public final Object clone() throws CloneNotSupportedException {
        // Cloning a DB connection would share or corrupt the connection state
        throw new CloneNotSupportedException("Use a connection pool instead");
    }
}

// 3. Effective Java recommendation \u2014 prefer static factory over clone()
public class ImmutableList<E> {
    // Use a static factory instead of clone()
    public static <E> ImmutableList<E> copyOf(ImmutableList<E> source) {
        return new ImmutableList<>(source.elements); // explicit, clear intent
    }
}`;static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["app-topic-cloning"]],decls:188,vars:11,consts:[["title","Object Cloning","subtitle","Understand shallow vs deep cloning. Use Cloneable, copy constructors, and serialization-based deep copy. Know when NOT to use clone().","badge","CORE JAVA","gradient","linear-gradient(135deg, #831843, #ec4899)"],[1,"section"],[1,"section-heading"],["name","copy","css","icon-pink",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/cloning.png","alt","Object Cloning Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","scissors","css","icon-pink",3,"size"],["name","layers","css","icon-pink",3,"size"],["name","star","css","icon-pink",3,"size"],["name","alert-circle","css","icon-pink",3,"size"],["name","briefcase","css","icon-pink",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,s){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),e(4," Shallow vs Deep Copy "),t(),n(5,"div",4),i(6,"img",5),t(),n(7,"div",6)(8,"p"),e(9," A "),n(10,"strong"),e(11,"shallow copy"),t(),e(12," duplicates primitive fields by value but copies only the "),n(13,"em"),e(14,"reference"),t(),e(15," for object fields \u2014 both original and clone point to the same nested object. A "),n(16,"strong"),e(17,"deep copy"),t(),e(18," recursively duplicates every object in the graph so the clone is fully independent. "),t(),i(19,"app-code-block",7),t()(),n(20,"section",1)(21,"h2",2),i(22,"app-icon",8),e(23," Implementing Cloneable "),t(),n(24,"div",6)(25,"p"),e(26," To use "),n(27,"code"),e(28,"Object.clone()"),t(),e(29," a class must implement the "),n(30,"code"),e(31,"Cloneable"),t(),e(32," marker interface, override "),n(33,"code"),e(34,"clone()"),t(),e(35," as "),n(36,"code"),e(37,"public"),t(),e(38,", and call "),n(39,"code"),e(40,"super.clone()"),t(),e(41,". Failure to implement "),n(42,"code"),e(43,"Cloneable"),t(),e(44," causes a "),n(45,"code"),e(46,"CloneNotSupportedException"),t(),e(47,". The result of "),n(48,"code"),e(49,"super.clone()"),t(),e(50," is always a "),n(51,"strong"),e(52,"shallow"),t(),e(53," copy. "),t(),i(54,"app-code-block",7),t()(),n(55,"section",1)(56,"h2",2),i(57,"app-icon",9),e(58," Deep Clone with clone() "),t(),n(59,"div",6)(60,"p"),e(61," To achieve a deep clone via "),n(62,"code"),e(63,"Cloneable"),t(),e(64,", every mutable nested class must also implement "),n(65,"code"),e(66,"Cloneable"),t(),e(67," and override "),n(68,"code"),e(69,"clone()"),t(),e(70,". The parent's "),n(71,"code"),e(72,"clone()"),t(),e(73," then explicitly clones each nested object after calling "),n(74,"code"),e(75,"super.clone()"),t(),e(76,". "),t(),i(77,"app-code-block",7),t()(),n(78,"section",1)(79,"h2",2),i(80,"app-icon",10),e(81," Better Alternatives "),t(),n(82,"div",6)(83,"p")(84,"strong"),e(85,"Effective Java"),t(),e(86," (Bloch) recommends avoiding "),n(87,"code"),e(88,"clone()"),t(),e(89," entirely. The two superior patterns are: "),t(),n(90,"ul")(91,"li")(92,"strong"),e(93,"Copy constructor"),t(),e(94," \u2014 "),n(95,"code"),e(96,"new Person(other)"),t(),e(97,". Clear, type-safe, works with "),n(98,"code"),e(99,"final"),t(),e(100," fields, no checked exceptions."),t(),n(101,"li")(102,"strong"),e(103,"Serialization-based deep copy"),t(),e(104," \u2014 works for any "),n(105,"code"),e(106,"Serializable"),t(),e(107," object graph, but slower and requires all objects to implement "),n(108,"code"),e(109,"Serializable"),t(),e(110,"."),t()(),i(111,"app-code-block",7),t()(),n(112,"section",1)(113,"h2",2),i(114,"app-icon",11),e(115," When NOT to Clone "),t(),n(116,"div",6)(117,"p"),e(118," Never clone "),n(119,"strong"),e(120,"singletons"),t(),e(121," (cloning defeats the pattern), "),n(122,"strong"),e(123,"objects with shared resources"),t(),e(124," (database connections, file handles), or objects that hold "),n(125,"strong"),e(126,"callbacks or listeners"),t(),e(127," (the clone would share the same listener registrations). In these cases, either throw "),n(128,"code"),e(129,"CloneNotSupportedException"),t(),e(130," or mark "),n(131,"code"),e(132,"clone()"),t(),n(133,"code"),e(134,"final"),t(),e(135," and have it throw unconditionally. "),t(),i(136,"app-code-block",7),t()(),n(137,"section",1)(138,"h2",2),i(139,"app-icon",12),e(140," Interview Tips "),t(),n(141,"div",13)(142,"div",14)(143,"div",15),e(144,"1"),t(),n(145,"div")(146,"h4",16),e(147,"Shallow vs deep copy"),t(),n(148,"p",17),e(149,"Shallow copy duplicates the top-level object but shares nested object references. Deep copy creates independent copies of every object in the graph. Changing a nested object in the original affects the shallow copy but NOT the deep copy."),t()()(),n(150,"div",14)(151,"div",15),e(152,"2"),t(),n(153,"div")(154,"h4",16),e(155,"Why Cloneable is broken"),t(),n(156,"p",17)(157,"code"),e(158,"clone()"),t(),e(159," is declared in "),n(160,"code"),e(161,"Object"),t(),e(162,", not in "),n(163,"code"),e(164,"Cloneable"),t(),e(165," \u2014 so there is no compile-time guarantee. If you forget to implement "),n(166,"code"),e(167,"Cloneable"),t(),e(168,", the exception only surfaces at runtime. The method signature also throws a checked exception and returns "),n(169,"code"),e(170,"Object"),t(),e(171,", requiring a cast."),t()()(),n(172,"div",14)(173,"div",15),e(174,"3"),t(),n(175,"div")(176,"h4",16),e(177,"Copy constructor is preferred"),t(),n(178,"p",17)(179,"code"),e(180,"new Foo(other)"),t(),e(181," is explicit, type-safe, and works with "),n(182,"code"),e(183,"final"),t(),e(184," fields. It does not require "),n(185,"code"),e(186,"Cloneable"),t(),e(187,", does not throw checked exceptions, and does not rely on reflective object creation. It is the pattern recommended by Effective Java."),t()()()()()()),l&2&&(o(3),r("size",28),o(16),r("code",s.code1),o(3),r("size",28),o(32),r("code",s.code2),o(3),r("size",28),o(20),r("code",s.code3),o(3),r("size",28),o(31),r("code",s.code4),o(3),r("size",28),o(22),r("code",s.code5),o(3),r("size",28))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-pink[_ngcontent-%COMP%]{color:#ec4899}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf2f8;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#831843}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ec4899;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf2f8;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#831843}"],changeDetection:0})};export{u as CloningComponent};
