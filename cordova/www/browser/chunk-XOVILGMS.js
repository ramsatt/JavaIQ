import{a as m,b as c,c as u}from"./chunk-J75GQJ3V.js";import{$a as t,Ia as d,Za as a,_a as n,ab as o,wb as e,za as i}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var p=class s{code1=`// Object's DEFAULT implementations (reference equality)
Object a = new Object();
Object b = new Object();

a.equals(b);   // false \u2014 different references
a.equals(a);   // true  \u2014 same reference (reflexive by identity)
a.hashCode();  // some memory-based integer (e.g., 1829164700)
b.hashCode();  // different integer

// Without overriding, two objects with the same field values are NOT equal:
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
    // equals() and hashCode() NOT overridden
}

Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);
System.out.println(p1.equals(p2)); // false \u2014 Object.equals() compares references
System.out.println(p1 == p2);      // false \u2014 different objects
// These two logically-identical points are "not equal" to any collection.

// The hashCode contract at a glance:
// equals() true  \u2192 hashCode() MUST be equal   (mandatory)
// equals() false \u2192 hashCode() SHOULD differ   (not mandatory, but important for performance)
// hashCode equal \u2192 equals() may be true OR false  (hash collision is OK)`;code2=`public class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object obj) {
        // 1. Reflexive: same reference \u2192 always equal
        if (this == obj) return true;

        // 2. Null check: equals(null) must return false
        if (obj == null) return false;

        // 3. Type check: only compare same type
        //    Use instanceof (allows subclasses) or getClass() (strict)
        if (!(obj instanceof Point other)) return false;
        //    Java 16+ pattern matching: obj is cast to 'other' if instanceof passes

        // 4. Compare all identity-determining fields
        return this.x == other.x && this.y == other.y;
    }

    // --- With a nullable String field ---
    // @Override
    // public boolean equals(Object obj) {
    //     if (this == obj) return true;
    //     if (!(obj instanceof Person other)) return false;
    //     return Objects.equals(this.name, other.name)  // null-safe comparison
    //         && this.age == other.age;
    // }
}

// After override:
Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);
System.out.println(p1.equals(p2)); // true  \u2190 logical equality
System.out.println(p1.equals(null)); // false \u2190 null-safe`;code3=`public class Point {
    private final int x;
    private final int y;

    // ... constructor, equals() ...

    @Override
    public int hashCode() {
        // Objects.hash() \u2014 simplest correct implementation
        return Objects.hash(x, y);
        // Internally: 31 * (31 * 1 + x) + y  (prime multiplier pattern)
    }

    // --- Manual implementation for performance (same result) ---
    // @Override
    // public int hashCode() {
    //     int result = 17;          // arbitrary non-zero prime start
    //     result = 31 * result + x;
    //     result = 31 * result + y;
    //     return result;
    // }
}

// ---- The HashMap DISASTER when only equals() is overridden ----
class BrokenPoint {
    int x, y;
    BrokenPoint(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof BrokenPoint)) return false;
        BrokenPoint bp = (BrokenPoint) o;
        return x == bp.x && y == bp.y;
    }
    // hashCode() NOT overridden \u2192 uses Object's memory-address-based hash
}

Map<BrokenPoint, String> map = new HashMap<>();
BrokenPoint key1 = new BrokenPoint(1, 2);
map.put(key1, "origin-ish");

BrokenPoint key2 = new BrokenPoint(1, 2); // logically equal to key1
System.out.println(key1.equals(key2));     // true  \u2190 equals works
System.out.println(map.get(key2));         // null  \u2190 DISASTER! wrong bucket`;code4=`// ---- Correct Point with BOTH equals() and hashCode() ----
public final class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Point other)) return false;
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() { return "Point(" + x + ", " + y + ")"; }
}

// HashMap lookup works correctly when BOTH are overridden
Map<Point, String> map = new HashMap<>();
Point a = new Point(3, 4);
map.put(a, "triangle vertex");

Point b = new Point(3, 4); // different object, same logical value
System.out.println(a.equals(b));   // true
System.out.println(a.hashCode() == b.hashCode()); // true (same bucket)
System.out.println(map.get(b));    // "triangle vertex" \u2190 found correctly!

// HashSet deduplication also works:
Set<Point> set = new HashSet<>();
set.add(new Point(1, 1));
set.add(new Point(1, 1)); // duplicate \u2192 ignored
System.out.println(set.size()); // 1 (not 2)

// ---- Java 16+ Record: equals, hashCode, toString generated automatically ----
record PointRecord(int x, int y) {}  // all three methods auto-generated

PointRecord r1 = new PointRecord(5, 6);
PointRecord r2 = new PointRecord(5, 6);
System.out.println(r1.equals(r2));   // true  \u2014 free!
System.out.println(r1.hashCode() == r2.hashCode()); // true \u2014 free!

// ---- Mutable key DISASTER \u2014 don't mutate keys in a map! ----
Point mutableKey = new Point(1, 2);  // if x,y were mutable
map.put(mutableKey, "value");
// mutableKey.x = 99; // if this were possible, hashCode changes!
// map.get(mutableKey) \u2192 null (wrong bucket now)
// Use immutable objects (final fields, records) as map keys.`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-equals-hashcode"]],decls:253,vars:9,consts:[["title","equals() & hashCode() Contract","subtitle","Master the fundamental object equality contract. Learn when to override both methods, the rules you must never break, and how HashMap relies on them.","badge","CORE JAVA","gradient","linear-gradient(135deg, #78350f, #f59e0b)"],[1,"section"],[1,"section-heading"],["name","file-text","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","edit","css","icon-amber",3,"size"],["name","hash","css","icon-amber",3,"size"],["name","map","css","icon-amber",3,"size"],["name","briefcase","css","icon-amber",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,r){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," The Contract Rules "),t(),n(5,"div",4)(6,"p"),e(7," The "),n(8,"code"),e(9,"equals()"),t(),e(10," and "),n(11,"code"),e(12,"hashCode()"),t(),e(13," methods form a "),n(14,"strong"),e(15,"contract"),t(),e(16," defined in "),n(17,"code"),e(18,"java.lang.Object"),t(),e(19,". Breaking these rules causes subtle, hard-to-debug bugs \u2014 especially with hash-based collections. "),t(),n(20,"p")(21,"strong"),e(22,"equals() must be:"),t()(),n(23,"ul")(24,"li")(25,"strong"),e(26,"Reflexive"),t(),e(27,": "),n(28,"code"),e(29,"x.equals(x)"),t(),e(30," must be "),n(31,"code"),e(32,"true"),t(),e(33,"."),t(),n(34,"li")(35,"strong"),e(36,"Symmetric"),t(),e(37,": if "),n(38,"code"),e(39,"x.equals(y)"),t(),e(40," then "),n(41,"code"),e(42,"y.equals(x)"),t(),e(43,"."),t(),n(44,"li")(45,"strong"),e(46,"Transitive"),t(),e(47,": if "),n(48,"code"),e(49,"x.equals(y)"),t(),e(50," and "),n(51,"code"),e(52,"y.equals(z)"),t(),e(53," then "),n(54,"code"),e(55,"x.equals(z)"),t(),e(56,"."),t(),n(57,"li")(58,"strong"),e(59,"Consistent"),t(),e(60,": repeated calls return the same result (if no fields change)."),t(),n(61,"li")(62,"strong"),e(63,"Null-safe"),t(),e(64,": "),n(65,"code"),e(66,"x.equals(null)"),t(),e(67," must return "),n(68,"code"),e(69,"false"),t(),e(70," (never throw NPE)."),t()(),n(71,"p")(72,"strong"),e(73,"hashCode() contract:"),t()(),n(74,"ul")(75,"li"),e(76,"Objects that are "),n(77,"em"),e(78,"equal"),t(),e(79," ("),n(80,"code"),e(81,"equals()"),t(),e(82," returns "),n(83,"code"),e(84,"true"),t(),e(85,") "),n(86,"strong"),e(87,"MUST"),t(),e(88," have the same hash code."),t(),n(89,"li"),e(90,"Objects that are "),n(91,"em"),e(92,"unequal"),t(),n(93,"strong"),e(94,"SHOULD"),t(),e(95," (but are not required to) have different hash codes \u2014 collisions are allowed but degrade performance."),t()(),o(96,"app-code-block",5),t()(),n(97,"section",1)(98,"h2",2),o(99,"app-icon",6),e(100," Overriding equals() "),t(),n(101,"div",4)(102,"p"),e(103," The canonical pattern for overriding "),n(104,"code"),e(105,"equals()"),t(),e(106,": check for null, check type with "),n(107,"code"),e(108,"instanceof"),t(),e(109,", cast, then compare all identity-determining fields. Use "),n(110,"code"),e(111,"Objects.equals()"),t(),e(112," for nullable fields to avoid NPE. "),t(),o(113,"app-code-block",5),t()(),n(114,"section",1)(115,"h2",2),o(116,"app-icon",7),e(117," Overriding hashCode() "),t(),n(118,"div",4)(119,"p")(120,"strong"),e(121,"You must override "),n(122,"code"),e(123,"hashCode()"),t(),e(124," whenever you override "),n(125,"code"),e(126,"equals()"),t(),e(127,"."),t(),e(128," If you only override "),n(129,"code"),e(130,"equals()"),t(),e(131,", two logically-equal objects may land in different hash buckets in a "),n(132,"code"),e(133,"HashMap"),t(),e(134," or "),n(135,"code"),e(136,"HashSet"),t(),e(137," \u2014 making it impossible to find them after insertion. "),t(),n(138,"p")(139,"code"),e(140,"Objects.hash(field1, field2, ...)"),t(),e(141," is the simplest correct implementation. For performance-sensitive code, write a manual hash combining prime multipliers. "),t(),o(142,"app-code-block",5),t()(),n(143,"section",1)(144,"h2",2),o(145,"app-icon",8),e(146," HashMap Internals "),t(),n(147,"div",4)(148,"p")(149,"code"),e(150,"HashMap"),t(),e(151," uses "),n(152,"strong"),e(153,"two-step key lookup"),t(),e(154,": "),t(),n(155,"ul")(156,"li")(157,"strong"),e(158,"Step 1"),t(),e(159,": Call "),n(160,"code"),e(161,"hashCode()"),t(),e(162," on the key to find the bucket index."),t(),n(163,"li")(164,"strong"),e(165,"Step 2"),t(),e(166,": Iterate the bucket's linked list/tree, calling "),n(167,"code"),e(168,"equals()"),t(),e(169," on each entry until a match is found."),t()(),n(170,"p"),e(171," If "),n(172,"code"),e(173,"hashCode()"),t(),e(174," is wrong (or missing), the key lands in the wrong bucket and "),n(175,"code"),e(176,"equals()"),t(),e(177," is never called on the right entry \u2014 the key appears lost even though it is in the map. "),t(),o(178,"app-code-block",5),t()(),n(179,"section",1)(180,"h2",2),o(181,"app-icon",9),e(182," Interview Tips "),t(),n(183,"div",10)(184,"div",11)(185,"div",12),e(186,"1"),t(),n(187,"div")(188,"h4",13),e(189,"The HashMap Disaster \u2014 Only equals() Overridden"),t(),n(190,"p",14),e(191,"If you override "),n(192,"code"),e(193,"equals()"),t(),e(194," but not "),n(195,"code"),e(196,"hashCode()"),t(),e(197,", two logically equal objects will hash to different buckets. "),n(198,"code"),e(199,"map.get(key)"),t(),e(200," will return "),n(201,"code"),e(202,"null"),t(),e(203," even after "),n(204,"code"),e(205,"map.put(equalKey, value)"),t(),e(206,". This is the most common "),n(207,"code"),e(208,"equals/hashCode"),t(),e(209," bug in interviews."),t()()(),n(210,"div",11)(211,"div",12),e(212,"2"),t(),n(213,"div")(214,"h4",13),e(215,"hashCode Must Be Consistent While in a Map"),t(),n(216,"p",14),e(217,"If you mutate a field that is used in "),n(218,"code"),e(219,"hashCode()"),t(),e(220," while the object is a key in a "),n(221,"code"),e(222,"HashMap"),t(),e(223,", the hash changes but the object stays in the old bucket \u2014 it becomes permanently unfindable. Prefer "),n(224,"strong"),e(225,"immutable key objects"),t(),e(226," (like "),n(227,"code"),e(228,"String"),t(),e(229,", "),n(230,"code"),e(231,"Integer"),t(),e(232,", records)."),t()()(),n(233,"div",11)(234,"div",12),e(235,"3"),t(),n(236,"div")(237,"h4",13),e(238,"IDE Generation vs Manual \u2014 Use Objects.hash()"),t(),n(239,"p",14),e(240,"Always use "),n(241,"code"),e(242,"Objects.hash(f1, f2, ...)"),t(),e(243," and "),n(244,"code"),e(245,"Objects.equals(f1, f2)"),t(),e(246," rather than writing raw null checks and prime-number arithmetic by hand. Modern IDEs generate correct implementations automatically. For records (Java 16+), "),n(247,"code"),e(248,"equals()"),t(),e(249," and "),n(250,"code"),e(251,"hashCode()"),t(),e(252," are generated by the compiler \u2014 no manual override needed."),t()()()()()()),l&2&&(i(3),a("size",28),i(93),a("code",r.code1),i(3),a("size",28),i(14),a("code",r.code2),i(3),a("size",28),i(26),a("code",r.code3),i(3),a("size",28),i(33),a("code",r.code4),i(3),a("size",28))},dependencies:[m,c,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-amber[_ngcontent-%COMP%]{color:#f59e0b}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fffbeb;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#92400e}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f59e0b;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fffbeb;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#92400e}"],changeDetection:0})};export{p as EqualsHashcodeComponent};
