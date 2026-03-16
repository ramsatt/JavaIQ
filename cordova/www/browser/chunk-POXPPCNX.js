import{a as c,b as p,c as m}from"./chunk-J75GQJ3V.js";import{$a as t,Ia as d,Za as r,_a as i,ab as a,wb as e,za as n}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var u=class l{code1=`// BEFORE var (Java 9 and earlier) \u2014 type repeated on both sides
ArrayList<String>              names   = new ArrayList<String>();
HashMap<String, List<Integer>> scores  = new HashMap<String, List<Integer>>();
BufferedReader                 reader  = new BufferedReader(new FileReader("f.txt"));

// AFTER var (Java 10+) \u2014 type inferred from right-hand side
var names   = new ArrayList<String>();         // inferred: ArrayList<String>
var scores  = new HashMap<String, List<Integer>>(); // inferred: HashMap<String, List<Integer>>
var reader  = new BufferedReader(new FileReader("f.txt")); // inferred: BufferedReader

// Simple types
var name    = "Alice";     // String
var age     = 30;          // int
var salary  = 85_000.0;    // double
var active  = true;        // boolean

// The inferred type is FIXED \u2014 this causes a compile error:
var count = 0;
// count = "five"; // ERROR: incompatible types \u2014 count is int, not String

// Bytecode proof \u2014 both are identical:
String explicit = "hello"; // bytecode: LDC "hello", ASTORE 1
var    inferred = "hello"; // bytecode: LDC "hello", ASTORE 1 (same!)`;code2=`// 1. Local variable declarations
var path    = Path.of("/home/user/data.csv");
var lines   = Files.readAllLines(path);
var numbers = List.of(1, 2, 3, 4, 5);
var entry   = Map.entry("key", 42);

// 2. for-each loop variables
List<Map.Entry<String, Integer>> entries = map.entrySet().stream().toList();
for (var entry : entries) {          // inferred: Map.Entry<String, Integer>
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// Especially useful with long generic types
Map<String, List<Integer>> data = new HashMap<>();
for (var e : data.entrySet()) {     // inferred: Map.Entry<String, List<Integer>>
    var key    = e.getKey();        // String
    var values = e.getValue();      // List<Integer>
    values.forEach(v -> System.out.println(key + ": " + v));
}

// 3. try-with-resources variables
try (var conn   = DriverManager.getConnection(url, user, pass);
     var stmt   = conn.prepareStatement("SELECT * FROM users");
     var result = stmt.executeQuery()) {
    while (result.next()) {
        var id   = result.getLong("id");
        var name = result.getString("name");
        System.out.println(id + ": " + name);
    }
} // conn, stmt, result all auto-closed`;code3=`// COMPILE ERRORS \u2014 var is not allowed here:

// 1. Class fields
public class User {
    var name = "Alice";    // ERROR: 'var' is not allowed here
    static var count = 0;  // ERROR: 'var' is not allowed here
}

// 2. Method parameters
public void process(var input) { }  // ERROR: 'var' is not allowed here

// 3. Return types
public var getUser() { return new User(); } // ERROR: 'var' is not allowed here

// 4. Variable without initialiser
var x;                          // ERROR: cannot use 'var' on variable without initialiser

// 5. Null initialiser (type would be null \u2014 not useful)
var obj = null;                 // ERROR: variable initialiser is 'null'

// 6. Lambda/method reference initialiser (multiple possible types)
var comparator = (a, b) -> a.compareTo(b); // ERROR: cannot infer type for lambda

// 7. Array initialiser shorthand
var arr = {1, 2, 3};     // ERROR: array initializer needs an explicit target-type

// This works (explicit array type on right side):
var arr2 = new int[]{1, 2, 3}; // OK \u2014 inferred: int[]

// 8. catch clauses (still need explicit type)
try { } catch (var e) { }  // ERROR in Java < 16; still disallowed`;code4=`// GOOD uses of var \u2014 type is obvious from context

// Long generic types \u2014 saves significant repetition
var map    = new HashMap<String, List<Integer>>();     // clear: HashMap<String, List<Integer>>
var stream = Files.lines(Path.of("data.txt"));         // clear: Stream<String>
var entry  = map.entrySet().iterator().next();          // clear: Map.Entry<String, List<Integer>>

// Loop variables with obvious types
for (var line : Files.readAllLines(path)) {            // clear: String
    System.out.println(line.trim());
}

// When the constructor name tells you the type
var formatter = new DateTimeFormatter.ofPattern("dd/MM/yyyy"); // clear
var executor  = Executors.newFixedThreadPool(4);               // clear

// BAD uses of var \u2014 type is unclear, hurts readability

// Factory/utility methods \u2014 type not obvious
var result  = getUsers();          // Unclear: List<User>? Stream<User>? Optional?
var data    = process(input);      // Unclear: what does process return?
var handler = createHandler();     // Unclear: what type?

// Literal ambiguity \u2014 var picks the default type
var x = 1;       // int  (not byte, short, or long)
var y = 1.0;     // double (not float)
var z = 'A';     // char
// If you need float explicitly, you CANNOT use var safely:
var bad  = 1.0;   // double \u2014 might not be what you want
float good = 1.0f; // explicit: float

// Diamond with var \u2014 generic type may be inferred as Object
var list = new ArrayList<>();   // WARNING: ArrayList<Object> \u2014 be explicit with generics
var list2 = new ArrayList<String>(); // Good \u2014 generic type preserved`;code5=`// var captures anonymous class types (not expressible otherwise)
var obj = new Object() {
    String name  = "JavaIQ";
    int    version = 10;

    String describe() {
        return name + " v" + version;
    }
};

// Access members defined in the anonymous class body!
System.out.println(obj.name);        // "JavaIQ"
System.out.println(obj.version);     // 10
System.out.println(obj.describe());  // "JavaIQ v10"

// WITHOUT var, you'd lose access:
Object o = new Object() { String name = "JavaIQ"; };
// o.name // COMPILE ERROR \u2014 Object doesn't have 'name'

// Anonymous class with interface \u2014 var gives access to extra members
Runnable r = new Runnable() {
    int runCount = 0;
    @Override public void run() { runCount++; System.out.println("Run #" + runCount); }
};
// r.runCount // COMPILE ERROR \u2014 Runnable doesn't have runCount

var r2 = new Runnable() {
    int runCount = 0;
    @Override public void run() { runCount++; }
};
r2.run();
System.out.println(r2.runCount); // 1 \u2014 accessible via var!

// Intersection types with generics (advanced)
// var can hold types that can't be named in source code
// e.g., a type that is both Comparable and Serializable
static <T extends Comparable<T> & java.io.Serializable> void process(T t) {
    var x = t;   // x has type T (Comparable & Serializable intersection)
    x.compareTo(t); // Comparable method
}`;static \u0275fac=function(s){return new(s||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-var-type-inference"]],decls:158,vars:11,consts:[["title","var & Local Type Inference","subtitle","Write cleaner code with Java 10's var keyword. Understand where it works, where it doesn't, and how the compiler infers types without losing type safety.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a5f, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","check-circle","css","icon-sky",3,"size"],["name","x-circle","css","icon-sky",3,"size"],["name","thumbs-up","css","icon-sky",3,"size"],["name","zap","css","icon-sky",3,"size"],["name","briefcase","css","icon-sky",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,o){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," What is var? "),t(),i(5,"div",4)(6,"p")(7,"code"),e(8,"var"),t(),e(9," is a "),i(10,"strong"),e(11,"reserved type name"),t(),e(12," (not a keyword) introduced in Java 10. It instructs the compiler to infer the variable's type from the right-hand side initialiser. The type is "),i(13,"strong"),e(14,"fixed at compile time"),t(),e(15," \u2014 it is NOT dynamic typing like JavaScript's "),i(16,"code"),e(17,"var"),t(),e(18,". Once inferred, you cannot assign a value of a different type. "),t(),i(19,"ul")(20,"li")(21,"code"),e(22,"var"),t(),e(23," only works for "),i(24,"strong"),e(25,"local variables"),t(),e(26," \u2014 not fields, parameters, or return types."),t(),i(27,"li"),e(28,"The initialiser is required \u2014 the compiler must see a concrete type to infer from."),t(),i(29,"li"),e(30,"The compiled bytecode contains the fully resolved type \u2014 there is zero runtime overhead."),t()(),a(31,"app-code-block",5),t()(),i(32,"section",1)(33,"h2",2),a(34,"app-icon",6),e(35," Where var Works "),t(),i(36,"div",4)(37,"p")(38,"code"),e(39,"var"),t(),e(40," is allowed in three local-variable contexts: standard local variable declarations, "),i(41,"code"),e(42,"for-each"),t(),e(43," loop variables, and "),i(44,"code"),e(45,"try-with-resources"),t(),e(46," variables. "),t(),a(47,"app-code-block",5),t()(),i(48,"section",1)(49,"h2",2),a(50,"app-icon",7),e(51," Where var Does NOT Work "),t(),i(52,"div",4)(53,"p")(54,"code"),e(55,"var"),t(),e(56," is intentionally restricted. The compiler requires enough context to infer a precise, non-ambiguous type. The following usages all result in compile errors: "),t(),i(57,"ul")(58,"li"),e(59,"Method parameters and return types"),t(),i(60,"li"),e(61,"Class fields (instance or static)"),t(),i(62,"li"),e(63,"Variables without an initialiser"),t(),i(64,"li"),e(65,"Variables initialised to "),i(66,"code"),e(67,"null"),t(),e(68," (type would be "),i(69,"code"),e(70,"null"),t(),e(71," \u2014 not useful)"),t(),i(72,"li"),e(73,"Lambda expressions and method references as initialisers"),t()(),a(74,"app-code-block",5),t()(),i(75,"section",1)(76,"h2",2),a(77,"app-icon",8),e(78," When to Use var (and When Not To) "),t(),i(79,"div",4)(80,"p")(81,"code"),e(82,"var"),t(),e(83," improves readability when the type is "),i(84,"em"),e(85,"obvious"),t(),e(86," from context. It hurts readability when the type is not immediately clear from the right-hand side. Follow the principle: "),i(87,"strong"),e(88,"if a reader can't tell the type at a glance, don't use var"),t(),e(89,". "),t(),a(90,"app-code-block",5),t()(),i(91,"section",1)(92,"h2",2),a(93,"app-icon",9),e(94," var with Anonymous Classes and Intersection Types "),t(),i(95,"div",4)(96,"p")(97,"code"),e(98,"var"),t(),e(99," can capture anonymous class types that have no expressible name in Java. This is a unique ability \u2014 without "),i(100,"code"),e(101,"var"),t(),e(102,", you'd lose access to members added in the anonymous class body. This also works for intersection types captured from generic methods. "),t(),a(103,"app-code-block",5),t()(),i(104,"section",1)(105,"h2",2),a(106,"app-icon",10),e(107," Interview Tips "),t(),i(108,"div",11)(109,"div",12)(110,"div",13),e(111,"1"),t(),i(112,"div")(113,"h4",14),e(114,"var is Still Statically Typed"),t(),i(115,"p",15)(116,"code"),e(117,"var"),t(),e(118," is NOT like JavaScript's "),i(119,"code"),e(120,"var"),t(),e(121," \u2014 Java remains a statically typed language. The compiler infers the type once and it's fixed. "),i(122,"code"),e(123,'var x = "hello"; x = 42;'),t(),e(124," is a compile error because "),i(125,"code"),e(126,"x"),t(),e(127," was inferred as "),i(128,"code"),e(129,"String"),t(),e(130,"."),t()()(),i(131,"div",12)(132,"div",13),e(133,"2"),t(),i(134,"div")(135,"h4",14),e(136,"var Only for Local Variables"),t(),i(137,"p",15)(138,"code"),e(139,"var"),t(),e(140," cannot be used for class fields, method parameters, or return types \u2014 only local variables, for-each variables, and try-with-resources variables. This is by design to keep APIs explicit and readable."),t()()(),i(141,"div",12)(142,"div",13),e(143,"3"),t(),i(144,"div")(145,"h4",14),e(146,"Readability First"),t(),i(147,"p",15),e(148,"Use "),i(149,"code"),e(150,"var"),t(),e(151," when the type is obvious from the right-hand side (e.g., "),i(152,"code"),e(153,"var list = new ArrayList<String>();"),t(),e(154,"). Avoid it when the type is unclear (e.g., "),i(155,"code"),e(156,"var result = process();"),t(),e(157,") \u2014 the explicit type makes the code self-documenting."),t()()()()()()),s&2&&(n(3),r("size",28),n(28),r("code",o.code1),n(3),r("size",28),n(13),r("code",o.code2),n(3),r("size",28),n(24),r("code",o.code3),n(3),r("size",28),n(13),r("code",o.code4),n(3),r("size",28),n(10),r("code",o.code5),n(3),r("size",28))},dependencies:[c,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-sky[_ngcontent-%COMP%]{color:#38bdf8}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0f9ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0c4a6e}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#38bdf8;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0f9ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#0c4a6e}"],changeDetection:0})};export{u as VarTypeInferenceComponent};
