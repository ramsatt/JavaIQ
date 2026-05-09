import{a as d,b as p,c as m}from"./chunk-3MUY7VVQ.js";import{$a as o,Ba as i,Ka as c,ab as n,bb as t,cb as r,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class a{code1=`// \u2500\u2500 Address (mutable nested object) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
}`;static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["app-topic-cloning"]],decls:186,vars:11,consts:[["title","Object Cloning","subtitle","Understand shallow vs deep cloning. Use Cloneable, copy constructors, and serialization-based deep copy. Know when NOT to use clone().","badge","CORE JAVA","gradient","linear-gradient(135deg, #831843, #ec4899)"],[1,"section"],[1,"section-heading"],["name","copy","css","icon-pink",3,"size"],[1,"prose"],[3,"code"],["name","scissors","css","icon-pink",3,"size"],["name","layers","css","icon-pink",3,"size"],["name","star","css","icon-pink",3,"size"],["name","alert-circle","css","icon-pink",3,"size"],["name","briefcase","css","icon-pink",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,s){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),e(4," Shallow vs Deep Copy "),t(),n(5,"div",4)(6,"p"),e(7," A "),n(8,"strong"),e(9,"shallow copy"),t(),e(10," duplicates primitive fields by value but copies only the "),n(11,"em"),e(12,"reference"),t(),e(13," for object fields \u2014 both original and clone point to the same nested object. A "),n(14,"strong"),e(15,"deep copy"),t(),e(16," recursively duplicates every object in the graph so the clone is fully independent. "),t(),r(17,"app-code-block",5),t()(),n(18,"section",1)(19,"h2",2),r(20,"app-icon",6),e(21," Implementing Cloneable "),t(),n(22,"div",4)(23,"p"),e(24," To use "),n(25,"code"),e(26,"Object.clone()"),t(),e(27," a class must implement the "),n(28,"code"),e(29,"Cloneable"),t(),e(30," marker interface, override "),n(31,"code"),e(32,"clone()"),t(),e(33," as "),n(34,"code"),e(35,"public"),t(),e(36,", and call "),n(37,"code"),e(38,"super.clone()"),t(),e(39,". Failure to implement "),n(40,"code"),e(41,"Cloneable"),t(),e(42," causes a "),n(43,"code"),e(44,"CloneNotSupportedException"),t(),e(45,". The result of "),n(46,"code"),e(47,"super.clone()"),t(),e(48," is always a "),n(49,"strong"),e(50,"shallow"),t(),e(51," copy. "),t(),r(52,"app-code-block",5),t()(),n(53,"section",1)(54,"h2",2),r(55,"app-icon",7),e(56," Deep Clone with clone() "),t(),n(57,"div",4)(58,"p"),e(59," To achieve a deep clone via "),n(60,"code"),e(61,"Cloneable"),t(),e(62,", every mutable nested class must also implement "),n(63,"code"),e(64,"Cloneable"),t(),e(65," and override "),n(66,"code"),e(67,"clone()"),t(),e(68,". The parent's "),n(69,"code"),e(70,"clone()"),t(),e(71," then explicitly clones each nested object after calling "),n(72,"code"),e(73,"super.clone()"),t(),e(74,". "),t(),r(75,"app-code-block",5),t()(),n(76,"section",1)(77,"h2",2),r(78,"app-icon",8),e(79," Better Alternatives "),t(),n(80,"div",4)(81,"p")(82,"strong"),e(83,"Effective Java"),t(),e(84," (Bloch) recommends avoiding "),n(85,"code"),e(86,"clone()"),t(),e(87," entirely. The two superior patterns are: "),t(),n(88,"ul")(89,"li")(90,"strong"),e(91,"Copy constructor"),t(),e(92," \u2014 "),n(93,"code"),e(94,"new Person(other)"),t(),e(95,". Clear, type-safe, works with "),n(96,"code"),e(97,"final"),t(),e(98," fields, no checked exceptions."),t(),n(99,"li")(100,"strong"),e(101,"Serialization-based deep copy"),t(),e(102," \u2014 works for any "),n(103,"code"),e(104,"Serializable"),t(),e(105," object graph, but slower and requires all objects to implement "),n(106,"code"),e(107,"Serializable"),t(),e(108,"."),t()(),r(109,"app-code-block",5),t()(),n(110,"section",1)(111,"h2",2),r(112,"app-icon",9),e(113," When NOT to Clone "),t(),n(114,"div",4)(115,"p"),e(116," Never clone "),n(117,"strong"),e(118,"singletons"),t(),e(119," (cloning defeats the pattern), "),n(120,"strong"),e(121,"objects with shared resources"),t(),e(122," (database connections, file handles), or objects that hold "),n(123,"strong"),e(124,"callbacks or listeners"),t(),e(125," (the clone would share the same listener registrations). In these cases, either throw "),n(126,"code"),e(127,"CloneNotSupportedException"),t(),e(128," or mark "),n(129,"code"),e(130,"clone()"),t(),n(131,"code"),e(132,"final"),t(),e(133," and have it throw unconditionally. "),t(),r(134,"app-code-block",5),t()(),n(135,"section",1)(136,"h2",2),r(137,"app-icon",10),e(138," Interview Tips "),t(),n(139,"div",11)(140,"div",12)(141,"div",13),e(142,"1"),t(),n(143,"div")(144,"h4",14),e(145,"Shallow vs deep copy"),t(),n(146,"p",15),e(147,"Shallow copy duplicates the top-level object but shares nested object references. Deep copy creates independent copies of every object in the graph. Changing a nested object in the original affects the shallow copy but NOT the deep copy."),t()()(),n(148,"div",12)(149,"div",13),e(150,"2"),t(),n(151,"div")(152,"h4",14),e(153,"Why Cloneable is broken"),t(),n(154,"p",15)(155,"code"),e(156,"clone()"),t(),e(157," is declared in "),n(158,"code"),e(159,"Object"),t(),e(160,", not in "),n(161,"code"),e(162,"Cloneable"),t(),e(163," \u2014 so there is no compile-time guarantee. If you forget to implement "),n(164,"code"),e(165,"Cloneable"),t(),e(166,", the exception only surfaces at runtime. The method signature also throws a checked exception and returns "),n(167,"code"),e(168,"Object"),t(),e(169,", requiring a cast."),t()()(),n(170,"div",12)(171,"div",13),e(172,"3"),t(),n(173,"div")(174,"h4",14),e(175,"Copy constructor is preferred"),t(),n(176,"p",15)(177,"code"),e(178,"new Foo(other)"),t(),e(179," is explicit, type-safe, and works with "),n(180,"code"),e(181,"final"),t(),e(182," fields. It does not require "),n(183,"code"),e(184,"Cloneable"),t(),e(185,", does not throw checked exceptions, and does not rely on reflective object creation. It is the pattern recommended by Effective Java."),t()()()()()()),l&2&&(i(3),o("size",28),i(14),o("code",s.code1),i(3),o("size",28),i(32),o("code",s.code2),i(3),o("size",28),i(20),o("code",s.code3),i(3),o("size",28),i(31),o("code",s.code4),i(3),o("size",28),i(22),o("code",s.code5),i(3),o("size",28))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-pink[_ngcontent-%COMP%]{color:#ec4899}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf2f8;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#831843}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#ec4899;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf2f8;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#831843}"],changeDetection:0})};export{u as CloningComponent};
