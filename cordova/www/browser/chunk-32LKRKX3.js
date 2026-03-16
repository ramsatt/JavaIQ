import{a as d,b as p,c as m}from"./chunk-J75GQJ3V.js";import{$a as t,Ia as l,Za as a,_a as n,ab as s,wb as e,za as i}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var h=class c{code1=`Object obj = "Hello, Java 21";

// OLD way (before Java 16) \u2014 noisy cast
if (obj instanceof String) {
    String s = (String) obj;    // redundant cast \u2014 we already know it's a String
    System.out.println(s.length());
}

// NEW way \u2014 pattern matching instanceof (Java 16)
if (obj instanceof String s) {
    System.out.println(s.length()); // s is already cast and in scope
}

// Pattern variable in && condition
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Pattern variable is NOT in scope in else
if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // OK
} else {
    // System.out.println(s); // COMPILE ERROR \u2014 s is not in scope here
}

// Practical: polymorphic method without switching on type
double area(Shape shape) {
    if (shape instanceof Circle c)    return Math.PI * c.radius() * c.radius();
    if (shape instanceof Rectangle r) return r.width() * r.height();
    if (shape instanceof Triangle t)  return 0.5 * t.base() * t.height();
    throw new IllegalArgumentException("Unknown shape: " + shape);
}`;code2=`// OLD switch statement \u2014 verbose, fall-through prone
String dayType;
switch (day) {
    case MONDAY: case TUESDAY: case WEDNESDAY: case THURSDAY: case FRIDAY:
        dayType = "Weekday"; break;   // forget break \u2192 fall-through bug!
    case SATURDAY: case SUNDAY:
        dayType = "Weekend"; break;
    default:
        throw new IllegalArgumentException();
}

// NEW switch expression (Java 14) \u2014 returns a value, no fall-through
String dayType = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY -> "Weekend";
    // No default needed for enum \u2014 compiler checks exhaustiveness!
};

// yield \u2014 for multi-statement cases in switch expressions
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY               -> 7;
    case THURSDAY, SATURDAY    -> 8;
    case WEDNESDAY             -> {
        System.out.println("Computing Wednesday...");
        yield 9;  // yield provides the value, like return inside a case block
    }
};

// Switch expression with return type
double getFee(String memberType) {
    return switch (memberType) {
        case "GOLD"     -> 0.0;
        case "SILVER"   -> 5.0;
        case "BRONZE"   -> 10.0;
        default         -> throw new IllegalArgumentException("Unknown: " + memberType);
    };
}`;code3=`// Switch patterns (Java 21) \u2014 type matching in switch cases
Object obj = 42;

String result = switch (obj) {
    case Integer i  -> "Integer: " + i;
    case String s   -> "String of length " + s.length();
    case Double d   -> "Double: " + d;
    case int[] arr  -> "int array of length " + arr.length;
    case null       -> "null value";         // explicit null handling (no NPE!)
    default         -> "Something else: " + obj.getClass().getSimpleName();
};

// Guarded patterns \u2014 when clause adds a condition
String classify(Object obj) {
    return switch (obj) {
        case Integer i when i < 0    -> "Negative integer: " + i;
        case Integer i when i == 0   -> "Zero";
        case Integer i               -> "Positive integer: " + i;
        case String s when s.isEmpty() -> "Empty string";
        case String s                -> "String: " + s;
        default                      -> "Other";
    };
}

// null handling \u2014 without case null, null would throw NullPointerException
Object value = null;
String msg = switch (value) {
    case null    -> "Got null";
    case String s -> s.toUpperCase();
    default      -> value.toString();
};
System.out.println(msg); // "Got null" \u2014 no NPE!`;code4=`// Sealed class hierarchy \u2014 compiler knows all permitted subtypes
public sealed interface Shape
    permits Circle, Rectangle, Triangle { }

public record Circle   (double radius)          implements Shape { }
public record Rectangle(double width, double height) implements Shape { }
public record Triangle (double base,  double height) implements Shape { }

// Switch with sealed types \u2014 EXHAUSTIVE, no default needed!
double area(Shape shape) {
    return switch (shape) {
        case Circle c       -> Math.PI * c.radius() * c.radius();
        case Rectangle r    -> r.width() * r.height();
        case Triangle t     -> 0.5 * t.base() * t.height();
        // No default \u2014 compiler knows these are all possible subtypes
    };
}

// Guarded patterns with sealed types
String describe(Shape shape) {
    return switch (shape) {
        case Circle c when c.radius() > 10  -> "Large circle (r=" + c.radius() + ")";
        case Circle c                       -> "Small circle (r=" + c.radius() + ")";
        case Rectangle r when r.width() == r.height() -> "Square (" + r.width() + ")";
        case Rectangle r                    -> "Rectangle " + r.width() + "x" + r.height();
        case Triangle t                     -> "Triangle (base=" + t.base() + ")";
    };
}

// Adding a new subtype WITHOUT updating the switch is a COMPILE ERROR:
// public record Pentagon(int sides) implements Shape { }
// area() would fail to compile \u2014 exhaustiveness broken.
// This catches missing cases at compile time, not runtime!`;code5=`// Records \u2014 compact data carriers (Java 16+)
public record Point(int x, int y) { }
public record Line(Point start, Point end) { }
public record Named(String name, Point location) { }

Object obj = new Point(3, 4);

// Record pattern in instanceof (Java 21)
if (obj instanceof Point(int x, int y)) {
    System.out.println("x=" + x + ", y=" + y); // components bound directly
}

// Without record patterns \u2014 manual accessor calls
if (obj instanceof Point p) {
    int x = p.x();   // must call accessors
    int y = p.y();
}

// Record patterns in switch
String describe(Object shape) {
    return switch (shape) {
        case Point(int x, int y) when x == 0 && y == 0 -> "Origin";
        case Point(int x, int y) when x == 0            -> "On Y-axis at y=" + y;
        case Point(int x, int y)                        -> "Point(" + x + ", " + y + ")";
        default                                         -> "Not a point";
    };
}

// Nested record patterns \u2014 deconstruct records within records
Object obj2 = new Line(new Point(0, 0), new Point(3, 4));

if (obj2 instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {
    double length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    System.out.println("Line length: " + length); // 5.0
}

// Named record in switch with nested deconstruction
if (obj instanceof Named(String name, Point(int x, int y))) {
    System.out.printf("%s is at (%d, %d)%n", name, x, y);
}`;static \u0275fac=function(r){return new(r||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-pattern-matching"]],decls:150,vars:11,consts:[["title","Pattern Matching & Switch Expressions","subtitle","Write expressive, concise code with instanceof pattern matching (Java 16), switch expressions (Java 14), and switch patterns (Java 21).","badge","CORE JAVA","gradient","linear-gradient(135deg, #4a044e, #d946ef)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-fuchsia",3,"size"],[1,"prose"],[3,"code"],["name","git-branch","css","icon-fuchsia",3,"size"],["name","layers","css","icon-fuchsia",3,"size"],["name","shield","css","icon-fuchsia",3,"size"],["name","package","css","icon-fuchsia",3,"size"],["name","briefcase","css","icon-fuchsia",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(r,o){r&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),e(4," instanceof Pattern Matching (Java 16) "),t(),n(5,"div",4)(6,"p"),e(7," Before Java 16, checking a type with "),n(8,"code"),e(9,"instanceof"),t(),e(10," required a separate cast on the next line. "),n(11,"strong"),e(12,"Pattern matching for instanceof"),t(),e(13," (JEP 394, final in Java 16) combines the test and cast into a single expression. The compiler proves the cast is safe \u2014 no "),n(14,"code"),e(15,"ClassCastException"),t(),e(16," is possible. "),t(),n(17,"ul")(18,"li"),e(19,"The "),n(20,"strong"),e(21,"pattern variable"),t(),e(22," is automatically cast and available in the if-body."),t(),n(23,"li"),e(24,"It is also available in the "),n(25,"code"),e(26,"&&"),t(),e(27," condition of the same if expression."),t(),n(28,"li"),e(29,"It is NOT available in the else branch (the type test failed there)."),t()(),s(30,"app-code-block",5),t()(),n(31,"section",1)(32,"h2",2),s(33,"app-icon",6),e(34," Switch Expressions (Java 14) "),t(),n(35,"div",4)(36,"p"),e(37," Switch expressions (JEP 361, final in Java 14) allow "),n(38,"code"),e(39,"switch"),t(),e(40," to "),n(41,"strong"),e(42,"return a value"),t(),e(43,". Arrow cases ("),n(44,"code"),e(45,"->"),t(),e(46,") eliminate fall-through and the need for "),n(47,"code"),e(48,"break"),t(),e(49,". Use "),n(50,"code"),e(51,"yield"),t(),e(52," when the case body needs multiple statements. "),t(),s(53,"app-code-block",5),t()(),n(54,"section",1)(55,"h2",2),s(56,"app-icon",7),e(57," Switch Patterns (Java 21) "),t(),n(58,"div",4)(59,"p"),e(60," Switch patterns (JEP 441, final in Java 21) bring "),n(61,"strong"),e(62,"type patterns"),t(),e(63," into switch cases. You can match on type, deconstruct, and use "),n(64,"strong"),e(65,"guarded patterns"),t(),e(66," ("),n(67,"code"),e(68,"when"),t(),e(69,") for additional conditions. Switch also handles "),n(70,"code"),e(71,"null"),t(),e(72," explicitly \u2014 no more NPE before the switch. "),t(),s(73,"app-code-block",5),t()(),n(74,"section",1)(75,"h2",2),s(76,"app-icon",8),e(77," Sealed Classes + Switch "),t(),n(78,"div",4)(79,"p")(80,"strong"),e(81,"Sealed classes"),t(),e(82," (Java 17) restrict which classes can extend them. When combined with switch patterns, the compiler knows all possible subtypes and can enforce "),n(83,"strong"),e(84,"exhaustiveness"),t(),e(85," \u2014 no "),n(86,"code"),e(87,"default"),t(),e(88," case needed. Adding a new subtype without updating the switch causes a compile error. "),t(),s(89,"app-code-block",5),t()(),n(90,"section",1)(91,"h2",2),s(92,"app-icon",9),e(93," Record Patterns (Java 21) "),t(),n(94,"div",4)(95,"p"),e(96," Record patterns (JEP 440, final in Java 21) allow "),n(97,"strong"),e(98,"deconstruction"),t(),e(99," of records directly in "),n(100,"code"),e(101,"instanceof"),t(),e(102," and "),n(103,"code"),e(104,"switch"),t(),e(105,". The component variables are bound automatically \u2014 no manual accessor calls needed. Nested record patterns are supported. "),t(),s(106,"app-code-block",5),t()(),n(107,"section",1)(108,"h2",2),s(109,"app-icon",10),e(110," Interview Tips "),t(),n(111,"div",11)(112,"div",12)(113,"div",13),e(114,"1"),t(),n(115,"div")(116,"h4",14),e(117,"Pattern Variable Scope"),t(),n(118,"p",15),e(119,"The pattern variable is in scope in the if-body AND in the "),n(120,"code"),e(121,"&&"),t(),e(122," part of the same condition: "),n(123,"code"),e(124,"if (obj instanceof String s && s.length() > 5)"),t(),e(125,". It is NOT in scope in the else branch or in "),n(126,"code"),e(127,"||"),t(),e(128," conditions."),t()()(),n(129,"div",12)(130,"div",13),e(131,"2"),t(),n(132,"div")(133,"h4",14),e(134,"Exhaustiveness with Sealed Types"),t(),n(135,"p",15),e(136,"When switching over a sealed type, the compiler verifies all permitted subtypes are covered. Adding a new subtype without updating the switch is a "),n(137,"strong"),e(138,"compile error"),t(),e(139," \u2014 not a runtime bug. This is one of the biggest advantages of sealed classes."),t()()(),n(140,"div",12)(141,"div",13),e(142,"3"),t(),n(143,"div")(144,"h4",14),e(145,"Java Version Requirements"),t(),n(146,"p",15)(147,"code"),e(148,"instanceof"),t(),e(149," pattern matching \u2014 stable in Java 16. Switch expressions \u2014 stable in Java 14. Switch patterns (type patterns in switch) \u2014 stable in Java 21. Record patterns \u2014 stable in Java 21. Always check the Java version when using these features."),t()()()()()()),r&2&&(i(3),a("size",28),i(27),a("code",o.code1),i(3),a("size",28),i(20),a("code",o.code2),i(3),a("size",28),i(17),a("code",o.code3),i(3),a("size",28),i(13),a("code",o.code4),i(3),a("size",28),i(14),a("code",o.code5),i(3),a("size",28))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-fuchsia[_ngcontent-%COMP%]{color:#d946ef}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf4ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#4a044e}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#d946ef;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fdf4ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#4a044e}"],changeDetection:0})};export{h as PatternMatchingComponent};
