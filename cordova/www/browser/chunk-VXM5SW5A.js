import{a as d,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as c,ba as a,ca as n,da as t,ea as o,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class r{code1=`// The 5 rules in one glance
// Rule 1: class is final
public final class ImmutablePoint {
    // Rule 2: fields are private final
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Rule 3: no setters \u2014 only getters
    public int getX() { return x; }
    public int getY() { return y; }

    // "Wither" methods return a NEW object
    public ImmutablePoint withX(int newX) {
        return new ImmutablePoint(newX, this.y);
    }
}

// Known immutable classes in Java
String s = "hello";          // immutable
Integer i = 42;              // immutable
LocalDate d = LocalDate.now(); // immutable
BigDecimal bd = new BigDecimal("3.14"); // immutable`;code2=`// Immutable Money class with a mutable Date field
public final class Money {
    private final long amount;       // in cents
    private final String currency;
    private final Date createdAt;    // mutable \u2014 needs defensive copy

    public Money(long amount, String currency, Date createdAt) {
        if (currency == null) throw new NullPointerException("currency");
        this.amount   = amount;
        this.currency = currency;
        // Rule 4: defensive copy on the way IN
        this.createdAt = new Date(createdAt.getTime());
    }

    public long   getAmount()   { return amount; }
    public String getCurrency() { return currency; }

    // Rule 5: defensive copy on the way OUT
    public Date getCreatedAt() {
        return new Date(createdAt.getTime());
    }

    // "Wither" \u2014 returns a new object, does not mutate this
    public Money withAmount(long newAmount) {
        return new Money(newAmount, this.currency, this.createdAt);
    }

    @Override
    public String toString() {
        return amount + " " + currency;
    }
}`;code3=`// PROBLEM: no defensive copy \u2014 immutability broken
public final class BadEvent {
    private final Date date;
    public BadEvent(Date date) {
        this.date = date; // stores the SAME reference!
    }
    public Date getDate() { return date; } // leaks the reference!
}

Date d = new Date();
BadEvent e = new BadEvent(d);
d.setTime(0); // mutates the stored date \u2014 immutability violated!

// FIX: defensive copy in constructor AND getter
public final class GoodEvent {
    private final Date date;

    public GoodEvent(Date date) {
        this.date = new Date(date.getTime()); // copy IN
    }

    public Date getDate() {
        return new Date(date.getTime()); // copy OUT
    }
}

// Modern alternative: use java.time (inherently immutable)
public final class ModernEvent {
    private final Instant instant;
    public ModernEvent(Instant instant) {
        this.instant = instant; // Instant is immutable \u2014 no copy needed
    }
    public Instant getInstant() { return instant; }
}`;code4=`import java.util.*;

// Mutable source list
List<String> source = new ArrayList<>(List.of("a", "b", "c"));

// unmodifiableList: read-only VIEW of the original
List<String> view = Collections.unmodifiableList(source);
// view.add("d"); // throws UnsupportedOperationException

source.add("d");    // allowed \u2014 modifies the underlying list
System.out.println(view); // [a, b, c, d] \u2014 view reflects the change!

// List.copyOf: true independent snapshot (Java 10+)
List<String> snapshot = List.copyOf(source);
source.add("e");
System.out.println(snapshot); // [a, b, c, d] \u2014 NOT affected

// Using in an immutable class
public final class Classroom {
    private final List<String> students;

    public Classroom(List<String> students) {
        // defensive copy + unmodifiable wrapper
        this.students = List.copyOf(students);
    }

    public List<String> getStudents() {
        return students; // already unmodifiable \u2014 safe to return
    }
}`;code5=`import java.util.*;

// Immutable Point \u2014 safe as HashMap key
public final class Point {
    private final int x, y;
    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public int hashCode() { return 31 * x + y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }
}

// Safe as HashMap key \u2014 hashCode never changes
Map<Point, String> grid = new HashMap<>();
Point origin = new Point(0, 0);
grid.put(origin, "start");
System.out.println(grid.get(new Point(0, 0))); // "start"

// Thread-safe \u2014 share freely across threads
Point shared = new Point(10, 20);
Runnable task = () -> System.out.println(shared.hashCode());
new Thread(task).start();
new Thread(task).start(); // zero risk of race conditions`;static \u0275fac=function(s){return new(s||r)};static \u0275cmp=c({type:r,selectors:[["app-topic-immutable-classes"]],decls:180,vars:11,consts:[["title","Immutable Classes","subtitle","Design thread-safe, side-effect-free immutable objects. Learn the 5 rules for immutability, defensive copying, and why String, Integer, and BigDecimal are immutable.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a5f, #0ea5e9)"],[1,"section"],[1,"section-heading"],["name","shield","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-sky",3,"size"],["name","alert-triangle","css","icon-sky",3,"size"],["name","layers","css","icon-sky",3,"size"],["name","zap","css","icon-sky",3,"size"],["name","briefcase","css","icon-sky",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,l){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," What Makes a Class Immutable? "),t(),n(5,"div",4)(6,"p"),e(7," An "),n(8,"strong"),e(9,"immutable object"),t(),e(10," is one whose state cannot be changed after construction. Java's most well-known immutable classes include "),n(11,"code"),e(12,"String"),t(),e(13,", "),n(14,"code"),e(15,"Integer"),t(),e(16,", "),n(17,"code"),e(18,"LocalDate"),t(),e(19,", and "),n(20,"code"),e(21,"BigDecimal"),t(),e(22,". There are "),n(23,"strong"),e(24,"5 rules"),t(),e(25," to follow: "),t(),n(26,"ul")(27,"li")(28,"strong"),e(29,"Rule 1:"),t(),e(30," Declare the class "),n(31,"code"),e(32,"final"),t(),e(33," \u2014 prevents subclassing that could override methods and expose mutable state."),t(),n(34,"li")(35,"strong"),e(36,"Rule 2:"),t(),e(37," All fields must be "),n(38,"code"),e(39,"private final"),t(),e(40," \u2014 guarantees they are assigned exactly once in the constructor."),t(),n(41,"li")(42,"strong"),e(43,"Rule 3:"),t(),e(44," No setters \u2014 never expose any method that modifies fields or any object referred to by a field."),t(),n(45,"li")(46,"strong"),e(47,"Rule 4:"),t(),e(48," Defensive copy of mutable inputs in the constructor \u2014 if a caller passes a mutable object (like "),n(49,"code"),e(50,"Date"),t(),e(51,"), copy it."),t(),n(52,"li")(53,"strong"),e(54,"Rule 5:"),t(),e(55," Defensive copy of mutable return values \u2014 if you return a reference to a mutable internal field, return a copy."),t()(),o(56,"app-code-block",5),t()(),n(57,"section",1)(58,"h2",2),o(59,"app-icon",6),e(60," Building an Immutable Class "),t(),n(61,"div",4)(62,"p"),e(63," The "),n(64,"strong"),e(65,"Money"),t(),e(66," class below demonstrates a well-formed immutable class. It holds an amount and currency and also carries a mutable "),n(67,"code"),e(68,"Date"),t(),e(69," to illustrate why defensive copying is critical. "),t(),o(70,"app-code-block",5),t()(),n(71,"section",1)(72,"h2",2),o(73,"app-icon",7),e(74," Defensive Copying "),t(),n(75,"div",4)(76,"p"),e(77," Without defensive copying, a caller can mutate the "),n(78,"code"),e(79,"Date"),t(),e(80," you stored internally, breaking immutability. Always copy mutable inputs on the way "),n(81,"strong"),e(82,"in"),t(),e(83," and on the way "),n(84,"strong"),e(85,"out"),t(),e(86,". "),t(),o(87,"app-code-block",5),t()(),n(88,"section",1)(89,"h2",2),o(90,"app-icon",8),e(91," Immutability with Collections "),t(),n(92,"div",4)(93,"p"),e(94," A "),n(95,"code"),e(96,"final"),t(),e(97," reference to a "),n(98,"code"),e(99,"List"),t(),e(100," is not the same as an immutable list. Use "),n(101,"code"),e(102,"Collections.unmodifiableList()"),t(),e(103," for a read-only "),n(104,"em"),e(105,"view"),t(),e(106,", or "),n(107,"code"),e(108,"List.copyOf()"),t(),e(109," (Java 10+) for a true defensive snapshot. "),t(),o(110,"app-code-block",5),t()(),n(111,"section",1)(112,"h2",2),o(113,"app-icon",9),e(114," Benefits of Immutability "),t(),n(115,"div",4)(116,"ul")(117,"li")(118,"strong"),e(119,"Thread-safe without synchronization"),t(),e(120," \u2014 no shared mutable state means no race conditions."),t(),n(121,"li")(122,"strong"),e(123,"Safe as HashMap / HashSet keys"),t(),e(124," \u2014 hashCode never changes, so bucket placement stays stable."),t(),n(125,"li")(126,"strong"),e(127,"Freely shared"),t(),e(128," \u2014 the same instance can be passed everywhere without defensive copies by callers."),t(),n(129,"li")(130,"strong"),e(131,"Easier to reason about"),t(),e(132," \u2014 you can be certain the object you received is the same object later."),t()(),o(133,"app-code-block",5),t()(),n(134,"section",1)(135,"h2",2),o(136,"app-icon",10),e(137," Interview Tips "),t(),n(138,"div",11)(139,"div",12)(140,"div",13),e(141,"1"),t(),n(142,"div")(143,"h4",14),e(144,"Why is String immutable?"),t(),n(145,"p",15),e(146,"Security: class loaders rely on string immutability. HashMap safety: the hashCode is cached and never changes. Thread-safety: multiple threads can share a "),n(147,"code"),e(148,"String"),t(),e(149," without synchronization."),t()()(),n(150,"div",12)(151,"div",13),e(152,"2"),t(),n(153,"div")(154,"h4",14),e(155,"Shallow immutability trap"),t(),n(156,"p",15),e(157,"A "),n(158,"code"),e(159,"final"),t(),e(160," field that holds a mutable object (e.g., "),n(161,"code"),e(162,"final List<String> items"),t(),e(163,") is NOT immutable. The reference cannot change, but the list contents can. Always use defensive copies and unmodifiable wrappers."),t()()(),n(164,"div",12)(165,"div",13),e(166,"3"),t(),n(167,"div")(168,"h4",14),e(169,"Collections.unmodifiableList vs List.copyOf"),t(),n(170,"p",15)(171,"code"),e(172,"Collections.unmodifiableList()"),t(),e(173," is a "),n(174,"em"),e(175,"view"),t(),e(176," \u2014 if the original list is modified, the view reflects it. "),n(177,"code"),e(178,"List.copyOf()"),t(),e(179," makes an independent snapshot, so changes to the original have no effect."),t()()()()()()),s&2&&(i(3),a("size",28),i(53),a("code",l.code1),i(3),a("size",28),i(11),a("code",l.code2),i(3),a("size",28),i(14),a("code",l.code3),i(3),a("size",28),i(20),a("code",l.code4),i(3),a("size",28),i(20),a("code",l.code5),i(3),a("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-sky[_ngcontent-%COMP%]{color:#0ea5e9}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0f9ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#075985}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#0ea5e9;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0f9ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#075985}"],changeDetection:0})};export{u as ImmutableClassesComponent};
