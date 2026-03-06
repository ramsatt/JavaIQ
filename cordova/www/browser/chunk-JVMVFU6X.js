import{a as y,b as S,c as _}from"./chunk-5NK5W44O.js";import{Gb as u,Pa as i,Pb as c,Qb as g,Tb as e,Ub as f,Vb as b,ab as h,mb as p,na as x,nb as m,qb as v,rb as C,sb as s,tb as n,ub as t,vb as l}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var P=(o,d)=>d.name;function k(o,d){if(o&1&&(n(0,"div",37)(1,"div",38)(2,"span",39),e(3),t(),n(4,"span",40),e(5),t()(),n(6,"div",41)(7,"p",42),e(8),t(),n(9,"div",43)(10,"strong"),e(11,"Use when:"),t(),e(12),t()()()),o&2){let a=d.$implicit;c("border-color",a.color+"50"),i(),c("background",a.color+"15"),i(),c("color",a.color),i(),f(a.name),i(),c("background",a.color+"20")("color",a.color),i(),f(a.badge),i(3),f(a.desc),i(4),b(" ",a.use)}}function w(o,d){o&1&&(n(0,"div",21)(1,"span",44),e(2,"outer$ \u2192 Outer"),t()())}function E(o,d){o&1&&(n(0,"div",22),e(1,"No reference to Outer"),t())}function z(o,d){o&1&&(n(0,"div",24)(1,"strong"),e(2,"Independent:"),t(),e(3," Static nested class has no implicit reference to Outer. Can be instantiated as "),n(4,"code"),e(5,"new Outer.Nested()"),t(),e(6," without an Outer instance. Safe from memory leaks. "),t())}function I(o,d){o&1&&(n(0,"div",25)(1,"strong"),e(2,"Coupled:"),t(),e(3," Inner class holds an implicit reference to its enclosing Outer instance. Instantiated as "),n(4,"code"),e(5,"outer.new Inner()"),t(),e(6,". If the Inner instance outlives Outer, it prevents GC \u2014 a memory leak risk! "),t())}var O=class o{isStatic=x(!0);nestedKinds=[{name:"Static Nested",badge:"static",color:"#2563eb",desc:"Declared with static inside an outer class. No implicit reference to the outer instance.",use:"Helper classes, Builder pattern, Node in data structures"},{name:"Inner Class",badge:"instance",color:"#f97316",desc:"Non-static class inside an outer class. Has a hidden reference to the outer instance.",use:"Iterators, event adapters that need outer state"},{name:"Local Class",badge:"method",color:"#7c3aed",desc:"Defined inside a method. Visible only within that method block.",use:"Complex logic needed locally, rare in modern code"},{name:"Anonymous Class",badge:"inline",color:"#059669",desc:"No name. Declared and instantiated in one expression. Extends a class or implements an interface.",use:"One-off implementations before Java 8. Now replaced by lambdas for single-method interfaces."}];codeStaticNested=`public class Person {
    private final String name;
    private final int age;

    private Person(Builder b) {
        this.name = b.name;
        this.age  = b.age;
    }

    // Static nested class \u2014 no Person instance needed to create a Builder
    public static class Builder {
        private String name;
        private int age;

        public Builder name(String n) { this.name = n; return this; }
        public Builder age(int a)     { this.age  = a; return this; }
        public Person  build()        { return new Person(this); }
    }

    @Override public String toString() { return name + " (" + age + ")"; }
}

// Usage
Person p = new Person.Builder()
    .name("Alice")
    .age(30)
    .build();
System.out.println(p); // Alice (30)`;codeInner=`public class Outer {
    private int value = 10;
    private String secret = "hidden";

    class Inner {
        void display() {
            // Inner has full access to Outer's private members
            System.out.println("Outer value: " + value);
            System.out.println("Secret: " + secret);
        }
    }
}

// Must have an Outer instance first
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.display();

// Real-world use: Iterator inside a custom collection
class MyList<T> {
    private Object[] data = new Object[10];
    private int size = 0;

    class MyIterator implements Iterator<T> {
        int cursor = 0;
        public boolean hasNext() { return cursor < size; }
        @SuppressWarnings("unchecked")
        public T next() { return (T) data[cursor++]; }
    }
}`;codeAnonymous=`// Anonymous class implementing an interface
Comparator<String> byLength = new Comparator<>() {
    @Override
    public int compare(String a, String b) {
        return Integer.compare(a.length(), b.length());
    }
};

// Modern equivalent with lambda (preferred for functional interfaces)
Comparator<String> byLengthLambda = (a, b) -> Integer.compare(a.length(), b.length());

// Anonymous class still needed for MULTIPLE abstract methods
abstract class ClickHandler {
    abstract void onClick();
    abstract void onLongClick();
}

ClickHandler handler = new ClickHandler() {
    @Override public void onClick()      { System.out.println("clicked"); }
    @Override public void onLongClick()  { System.out.println("long click"); }
};

// Runnable (single method) \u2192 lambda wins
Runnable r1 = new Runnable() {           // verbose
    @Override public void run() { System.out.println("old style"); }
};
Runnable r2 = () -> System.out.println("lambda"); // clean`;static \u0275fac=function(a){return new(a||o)};static \u0275cmp=h({type:o,selectors:[["app-topic-nested-classes"]],decls:118,vars:19,consts:[["title","Nested & Inner Classes","subtitle","Four types of nested classes \u2014 each with a distinct purpose. Know when to use static nested, inner, local, and anonymous classes.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a5f, #3b82f6)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"kinds-grid"],[1,"kind-card",3,"border-color"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-blue",3,"size"],[1,"viz-desc"],[1,"toggle-row"],[1,"toggle-btn",3,"click"],[1,"memory-diagram"],[1,"heap-section"],[1,"heap-label"],[1,"outer-box"],[1,"outer-label"],[1,"outer-fields"],[1,"field-chip"],[1,"inner-box"],[1,"inner-label"],[1,"ref-arrow"],[1,"no-ref"],[1,"diagram-notes"],[1,"note","note-green"],[1,"note","note-yellow"],["name","box","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","link","css","icon-blue",3,"size"],["name","code","css","icon-blue",3,"size"],["name","briefcase","css","icon-blue",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"],[1,"kind-card"],[1,"kind-header"],[1,"kind-name"],[1,"kind-badge"],[1,"kind-body"],[1,"kind-desc"],[1,"kind-when"],[1,"ref-label"]],template:function(a,r){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),l(3,"app-icon",3),e(4," Four Kinds of Nested Class "),t(),n(5,"div",4),v(6,k,13,14,"div",5,P),t()(),n(8,"section",1)(9,"div",6)(10,"h3",7),l(11,"app-icon",8),e(12," Static vs Non-static Memory Diagram "),t(),n(13,"p",9),e(14,"Toggle between static nested and non-static inner class to see the difference in object relationships on the heap."),t(),n(15,"div",10)(16,"button",11),u("click",function(){return r.isStatic.set(!0)}),e(17," Static Nested Class "),t(),n(18,"button",11),u("click",function(){return r.isStatic.set(!1)}),e(19," Non-static Inner Class "),t()(),n(20,"div",12)(21,"div",13)(22,"div",14),e(23,"HEAP"),t(),n(24,"div",15)(25,"div",16),e(26,"Outer instance"),t(),n(27,"div",17)(28,"div",18),e(29,"value: 10"),t()()(),n(30,"div",19)(31,"div",20),e(32),t(),p(33,w,3,0,"div",21),p(34,E,2,0,"div",22),t()(),n(35,"div",23),p(36,z,7,0,"div",24)(37,I,7,0,"div",25),t()()()(),n(38,"section",1)(39,"h2",2),l(40,"app-icon",26),e(41," Static Nested Class "),t(),n(42,"div",27)(43,"p"),e(44," A static nested class is declared "),n(45,"code"),e(46,"static"),t(),e(47," inside an outer class. It has "),n(48,"strong"),e(49,"no implicit reference"),t(),e(50," to the outer instance \u2014 it can only access static members of the outer class. The Builder pattern is its most common use case. "),t(),l(51,"app-code-block",28),t()(),n(52,"section",1)(53,"h2",2),l(54,"app-icon",29),e(55," Non-static Inner Class "),t(),n(56,"div",27)(57,"p"),e(58," A non-static inner class has full access to all members of the enclosing instance \u2014 including "),n(59,"code"),e(60,"private"),t(),e(61," fields. This is powerful but must be used carefully to avoid memory leaks. "),t(),l(62,"app-code-block",28),t()(),n(63,"section",1)(64,"h2",2),l(65,"app-icon",30),e(66," Anonymous Classes "),t(),n(67,"div",27)(68,"p"),e(69," An anonymous class is declared and instantiated in a single expression. It has no name. Before Java 8, they were the only way to pass behaviour inline. Today, "),n(70,"strong"),e(71,"lambdas replace them"),t(),e(72," for single-method (functional) interfaces \u2014 but anonymous classes are still needed for multi-method interfaces and abstract classes. "),t(),l(73,"app-code-block",28),t()(),n(74,"section",1)(75,"h2",2),l(76,"app-icon",31),e(77," Interview Tips "),t(),n(78,"div",32)(79,"div",33)(80,"div",34),e(81,"1"),t(),n(82,"div")(83,"h4",35),e(84,"Memory Leak via Inner Class"),t(),n(85,"p",36),e(86,"In Android and Swing, passing a non-static inner class as a callback (listener) is a common memory leak. The inner class holds a reference to the outer Activity/Frame, preventing it from being garbage-collected. Use a static nested class or a lambda instead."),t()()(),n(87,"div",33)(88,"div",34),e(89,"2"),t(),n(90,"div")(91,"h4",35),e(92,"LinkedList.Node Is a Static Nested Class"),t(),n(93,"p",36),e(94,"In the JDK, "),n(95,"code"),e(96,"LinkedList.Node<E>"),t(),e(97," is a "),n(98,"code"),e(99,"private static class"),t(),e(100," \u2014 it doesn't need a reference back to the "),n(101,"code"),e(102,"LinkedList"),t(),e(103,". This is the idiomatic pattern for data structure helper nodes."),t()()(),n(104,"div",33)(105,"div",34),e(106,"3"),t(),n(107,"div")(108,"h4",35),e(109,"Lambda vs Anonymous Class"),t(),n(110,"p",36),e(111,"A lambda can only implement a "),n(112,"strong"),e(113,"functional interface"),t(),e(114," (one abstract method). For an interface with multiple abstract methods, you must use an anonymous class. Also, "),n(115,"code"),e(116,"this"),t(),e(117," in a lambda refers to the enclosing class; in an anonymous class, it refers to the anonymous class itself."),t()()()()()()),a&2&&(i(3),s("size",28),i(3),C(r.nestedKinds),i(5),s("size",22),i(5),g("toggle-active",r.isStatic()),i(2),g("toggle-active",!r.isStatic()),i(12),g("inner-linked",!r.isStatic()),i(2),b("",r.isStatic()?"Nested (static)":"Inner (non-static)"," instance"),i(),m(r.isStatic()?-1:33),i(),m(r.isStatic()?34:-1),i(2),m(r.isStatic()?36:37),i(4),s("size",28),i(11),s("code",r.codeStaticNested),i(3),s("size",28),i(8),s("code",r.codeInner),i(3),s("size",28),i(8),s("code",r.codeAnonymous),i(3),s("size",28))},dependencies:[y,S,_],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-blue[_ngcontent-%COMP%]{color:#3b82f6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#dbeafe;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1d4ed8}.kinds-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}.kind-card[_ngcontent-%COMP%]{border-radius:16px;border:1px solid;overflow:hidden;background:#fff;transition:all .2s}.kind-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 16px #3b82f614;transform:translateY(-2px)}.kind-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px 16px}.kind-name[_ngcontent-%COMP%]{font-size:.85rem;font-weight:800}.kind-badge[_ngcontent-%COMP%]{font-size:.62rem;font-weight:800;padding:3px 8px;border-radius:20px;text-transform:uppercase;letter-spacing:.06em}.kind-body[_ngcontent-%COMP%]{padding:14px 16px}.kind-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;margin:0 0 10px;line-height:1.5}.kind-when[_ngcontent-%COMP%]{font-size:.78rem;color:#475569;line-height:1.5}.kind-when[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:20px;border:1px solid #D6DDD2;box-shadow:0 4px 16px #0000000a;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#1b1b1b;margin:0 0 8px}.viz-desc[_ngcontent-%COMP%]{font-size:.85rem;color:#52665a;margin:0 0 20px;line-height:1.6}.toggle-row[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}.toggle-btn[_ngcontent-%COMP%]{padding:10px 20px;border-radius:12px;border:1px solid #e2e8f0;background:#fff;color:#64748b;font-size:.8rem;font-weight:700;cursor:pointer;transition:all .2s}.toggle-btn[_ngcontent-%COMP%]:hover{border-color:#3b82f6;color:#3b82f6}.toggle-btn.toggle-active[_ngcontent-%COMP%]{background:#3b82f6;border-color:#3b82f6;color:#fff}.memory-diagram[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap}.heap-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;flex:1;min-width:200px}.heap-label[_ngcontent-%COMP%]{font-size:.65rem;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em}.outer-box[_ngcontent-%COMP%]{padding:14px 16px;border-radius:14px;border:2px solid #3b82f6;background:#eff6ff}.outer-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;color:#1d4ed8;margin-bottom:8px;font-family:JetBrains Mono,monospace}.outer-fields[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.field-chip[_ngcontent-%COMP%]{background:#dbeafe;color:#1d4ed8;padding:4px 10px;border-radius:8px;font-family:JetBrains Mono,monospace;font-size:.72rem;font-weight:700}.inner-box[_ngcontent-%COMP%]{padding:14px 16px;border-radius:14px;border:2px dashed #94a3b8;background:#f8fafc;transition:all .3s}.inner-box.inner-linked[_ngcontent-%COMP%]{border-color:#f97316;background:#fff7ed}.inner-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;color:#64748b;font-family:JetBrains Mono,monospace}.inner-box.inner-linked[_ngcontent-%COMP%]   .inner-label[_ngcontent-%COMP%]{color:#c2410c}.ref-arrow[_ngcontent-%COMP%]{margin-top:8px}.ref-label[_ngcontent-%COMP%]{font-size:.72rem;font-family:JetBrains Mono,monospace;color:#f97316;font-weight:700}.no-ref[_ngcontent-%COMP%]{margin-top:8px;font-size:.72rem;color:#059669;font-weight:700}.diagram-notes[_ngcontent-%COMP%]{flex:1;min-width:200px;display:flex;align-items:flex-start}.note[_ngcontent-%COMP%]{padding:14px 16px;border-radius:14px;font-size:.82rem;line-height:1.6;color:#52665a}.note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b}.note[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.75rem;background:#0000000f;padding:1px 5px;border-radius:4px}.note-green[_ngcontent-%COMP%]{background:#f0fdf4;border:1px solid #86efac}.note-yellow[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fcd34d}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff;transition:all .2s}.tip-card[_ngcontent-%COMP%]:hover{border-color:#93c5fd;box-shadow:0 4px 12px #3b82f60f}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#3b82f6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#dbeafe;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1d4ed8}"],changeDetection:0})};export{O as NestedClassesComponent};
