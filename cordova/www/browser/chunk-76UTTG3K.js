import{a as d,b as m,c as p}from"./chunk-3MUY7VVQ.js";import{$a as a,Ba as i,Ka as c,ab as n,bb as t,cb as r,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class s{codeClassicVsModern=`// \u2500\u2500 Classic (error-prone) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
int day = 2;
String name;
switch (day) {
    case 1: name = "Monday"; break;    // forget break \u2192 fall-through!
    case 2: name = "Tuesday"; break;
    default: name = "Other"; break;
}

// \u2500\u2500 Modern arrow syntax (Java 14+) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
String name = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3, 4, 5 -> "Midweek";        // comma-separated labels
    default -> "Weekend";
};

// \u2500\u2500 Enum switch \u2014 exhaustive, no default needed \u2500\u2500
enum Status { PENDING, ACTIVE, CLOSED }
String label = switch (status) {
    case PENDING -> "Awaiting";
    case ACTIVE  -> "In Progress";
    case CLOSED  -> "Done";
    // Compiler error if a new enum constant is added and not covered
};`;codeYield=`// When you need multiple statements in a case, use a block + yield
int quantity = 7;
String tier = switch (quantity) {
    case 1, 2, 3 -> "Small";
    case 4, 5, 6 -> "Medium";
    default -> {
        // Any logic here
        String base = quantity > 10 ? "Enterprise" : "Large";
        yield base + " (" + quantity + " units)";
    }
};

// yield inside regular switch statement (also valid)
int result;
switch (quantity) {
    case 1 -> result = 10;
    default -> {
        result = quantity * 5;
    }
}`;codePatternSwitch=`// Java 21: Type patterns in switch
static String describe(Object obj) {
    return switch (obj) {
        case Integer i  -> "int: " + i;
        case String s   -> "string of length " + s.length();
        case int[] arr  -> "int array of size " + arr.length;
        case null       -> "null input";        // Java 21: handle null explicitly
        default         -> "unknown: " + obj;
    };
}

// Guarded patterns \u2014 'when' clause (Java 21)
static String categorize(Number n) {
    return switch (n) {
        case Integer i when i < 0   -> "negative int";
        case Integer i when i == 0  -> "zero";
        case Integer i              -> "positive int: " + i;
        case Double d               -> "double: " + d;
        default                     -> "other number";
    };
}

// Sealed class exhaustiveness (Java 21 + sealed)
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double w, double h) implements Shape {}

double area(Shape s) {
    return switch (s) {                    // exhaustive \u2014 no default needed!
        case Circle c    -> Math.PI * c.radius() * c.radius();
        case Rectangle r -> r.w() * r.h();
    };
}`;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-mj-switch-expr"]],decls:91,vars:7,consts:[["title","Switch Expressions","subtitle","Java 14+'s arrow syntax, yield, and exhaustive pattern switches eliminate fall-through bugs and verbose break statements.","badge","MODERN JAVA","gradient","linear-gradient(135deg, #0f766e, #2dd4bf)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-teal",3,"size"],[1,"prose"],["language","java",3,"code"],["name","code","css","icon-teal",3,"size"],["name","layers","css","icon-teal",3,"size"],["name","zap","css","icon-teal",3,"size"],[1,"cards-grid"],[1,"card"],[1,"card-title"]],template:function(o,l){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),e(4," Classic vs Modern Switch"),t(),n(5,"div",4)(6,"p"),e(7,"The "),n(8,"strong"),e(9,"classic switch statement"),t(),e(10," requires "),n(11,"code"),e(12,"break"),t(),e(13," after every case and falls through silently. Switch expressions (Java 14) fix both problems with "),n(14,"strong"),e(15,"arrow syntax"),t(),e(16," and a mandatory return value."),t(),r(17,"app-code-block",5),n(18,"p"),e(19,"Key rules for switch expressions:"),t(),n(20,"ul")(21,"li"),e(22,"Arrow cases are exhaustive \u2014 the compiler verifies all values are covered."),t(),n(23,"li"),e(24,"No fall-through \u2014 each arm is independent."),t(),n(25,"li"),e(26,"The whole thing is an expression \u2014 it returns a value."),t()()()(),n(27,"section",1)(28,"h2",2),r(29,"app-icon",6),e(30," yield in Block Arms"),t(),n(31,"div",4)(32,"p"),e(33,"When a case needs multiple statements, use a block "),n(34,"code"),e(35,"{ }"),t(),e(36," and return the value with "),n(37,"code"),e(38,"yield"),t(),e(39,":"),t(),r(40,"app-code-block",5),t()(),n(41,"section",1)(42,"h2",2),r(43,"app-icon",7),e(44," Pattern Matching in Switch (Java 21)"),t(),n(45,"div",4)(46,"p"),e(47,"Java 21 extends switch with type patterns, guarded patterns, and null handling:"),t(),r(48,"app-code-block",5),t()(),n(49,"section",1)(50,"h2",2),r(51,"app-icon",8),e(52," Interview Quick Reference"),t(),n(53,"div",9)(54,"div",10)(55,"h3",11),e(56,"Arrow vs Colon"),t(),n(57,"p"),e(58,"Arrow ("),n(59,"code"),e(60,"->"),t(),e(61,") = no fall-through. Colon ("),n(62,"code"),e(63,":"),t(),e(64,") = old style, needs break. Prefer arrow."),t()(),n(65,"div",10)(66,"h3",11),e(67,"yield vs return"),t(),n(68,"p"),e(69,"Use "),n(70,"code"),e(71,"yield"),t(),e(72," inside a switch expression block. "),n(73,"code"),e(74,"return"),t(),e(75," exits the whole method."),t()(),n(76,"div",10)(77,"h3",11),e(78,"Exhaustiveness"),t(),n(79,"p"),e(80,"Enum switches without "),n(81,"code"),e(82,"default"),t(),e(83," are exhaustive \u2014 adding a new enum constant is a compile error, not a silent bug."),t()(),n(84,"div",10)(85,"h3",11),e(86,"Null case (Java 21)"),t(),n(87,"p")(88,"code"),e(89,"case null ->"),t(),e(90," explicitly handles null. Without it, a null input throws NPE."),t()()()()()),o&2&&(i(3),a("size",28),i(14),a("code",l.codeClassicVsModern),i(12),a("size",28),i(11),a("code",l.codeYield),i(3),a("size",28),i(5),a("code",l.codePatternSwitch),i(3),a("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.35rem;font-weight:800;color:var(--ion-text-color, #0f172a);margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid var(--ion-border-color, #e2e8f0)}.icon-teal[_ngcontent-%COMP%]{color:#0d9488}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:var(--ion-color-medium-shade, #334155);line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 14px;padding-left:20px}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:6px}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}.card[_ngcontent-%COMP%]{background:var(--ion-card-background, #fff);padding:18px 16px;border-radius:14px;border:1px solid var(--ion-border-color, #e2e8f0)}.card-title[_ngcontent-%COMP%]{font-size:.9rem;font-weight:700;color:var(--ion-text-color, #0f172a);margin:0 0 8px}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:var(--ion-color-medium-shade, #475569);margin:0;line-height:1.6}"],changeDetection:0})};export{u as MjSwitchExprComponent};
