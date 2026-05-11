import{a as c,b as d,c as p}from"./chunk-VPQEQBVO.js";import{Ba as i,Ka as m,ab as r,bb as n,cb as t,db as o,zb as e}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var u=class s{code1=`// Wrapper class constants and parsing
System.out.println(Integer.MAX_VALUE);   // 2147483647
System.out.println(Integer.MIN_VALUE);   // -2147483648
System.out.println(Long.MAX_VALUE);      // 9223372036854775807
System.out.println(Double.MAX_VALUE);    // 1.7976931348623157E308

// Parsing strings into primitives
int    n = Integer.parseInt("42");       // 42
long   l = Long.parseLong("9876543210"); // 9876543210
double d = Double.parseDouble("3.14");   // 3.14
boolean b = Boolean.parseBoolean("true"); // true

// Radix conversions
System.out.println(Integer.toBinaryString(255)); // 11111111
System.out.println(Integer.toHexString(255));    // ff
System.out.println(Integer.toOctalString(255));  // 377
System.out.println(Integer.parseInt("ff", 16));  // 255

// Wrapper in collections \u2014 primitives not allowed as generic type args
List<Integer> scores = new ArrayList<>();
scores.add(95);  // autoboxing: scores.add(Integer.valueOf(95))
scores.add(87);
int total = scores.get(0) + scores.get(1); // unboxing: .intValue()`;code2=`// --- Autoboxing (primitive \u2192 wrapper) ---
Integer boxed = 42;           // compiler: Integer.valueOf(42)
Double  price = 9.99;         // compiler: Double.valueOf(9.99)
Boolean flag  = true;         // compiler: Boolean.valueOf(true)

// --- Unboxing (wrapper \u2192 primitive) ---
int raw = boxed;              // compiler: boxed.intValue()
double d = price;             // compiler: price.doubleValue()

// --- Autoboxing in collections ---
List<Integer> numbers = new ArrayList<>();
numbers.add(10);   // autoboxed
numbers.add(20);   // autoboxed
int sum = numbers.get(0) + numbers.get(1); // both unboxed \u2192 30

// --- NullPointerException TRAP ---
Map<String, Integer> map = new HashMap<>();
map.put("count", null);

// Looks safe \u2014 but the compiler inserts .intValue() on a null wrapper!
int count = map.get("count"); // NullPointerException at runtime!

// Safe version: null-check first
Integer val = map.get("count");
int safe = (val != null) ? val : 0;

// Or use getOrDefault
int safe2 = map.getOrDefault("count", 0);`;code3=`// ---- Values in [-128, 127] are CACHED ----
Integer a = 127;
Integer b = 127;
System.out.println(a == b);       // true  (same cached object)
System.out.println(a.equals(b));  // true  (always correct)

// ---- Values OUTSIDE cache range create new objects ----
Integer c = 128;
Integer d = 128;
System.out.println(c == d);       // false (different heap objects!)
System.out.println(c.equals(d));  // true  (correct \u2014 compares values)

// The cache is inside Integer.valueOf():
// if (i >= -128 && i <= 127) return IntegerCache.cache[i + 128];
// else return new Integer(i);

// Same caching applies to: Byte, Short, Long (-128..127), Character (0..127),
// Boolean (TRUE and FALSE singletons)

// --- ALWAYS use .equals() for wrapper comparison ---
Integer x = Integer.valueOf(1000);
Integer y = Integer.valueOf(1000);
System.out.println(x == y);       // false \u2014 do NOT rely on this
System.out.println(x.equals(y));  // true  \u2014 correct approach

// The cache range for Integer can be extended with JVM flag:
// -XX:AutoBoxCacheMax=<size>  (maximum is rarely a good idea)`;code4=`// --- Parsing and converting ---
int    fromStr  = Integer.parseInt("255");
int    fromHex  = Integer.parseInt("FF", 16);     // 255
String toStr    = Integer.toString(255);           // "255"
String toBin    = Integer.toBinaryString(255);     // "11111111"
String toHex    = Integer.toHexString(255);        // "ff"

// --- Comparison utilities (avoid unboxing NPE) ---
int cmp = Integer.compare(42, 100);        // negative (42 < 100)
int max = Integer.max(10, 20);             // 20
int min = Integer.min(10, 20);             // 10
int sum = Integer.sum(10, 20);             // 30

// --- Bit manipulation ---
int bits  = Integer.bitCount(255);         // 8  (eight 1-bits)
int high  = Integer.highestOneBit(100);    // 64
int lead  = Integer.numberOfLeadingZeros(1); // 31
int trail = Integer.numberOfTrailingZeros(8); // 3
int rev   = Integer.reverse(1);           // 0x80000000 (MSB)
int revB  = Integer.reverseBytes(0x12345678); // 0x78563412

// --- Double utilities ---
boolean nan  = Double.isNaN(Double.NaN);       // true
boolean inf  = Double.isInfinite(1.0 / 0.0);  // true
double  parsed = Double.parseDouble("3.14159");

// --- Character utilities ---
boolean letter  = Character.isLetter('A');     // true
boolean digit   = Character.isDigit('5');      // true
boolean space   = Character.isWhitespace(' '); // true
char    upper   = Character.toUpperCase('a');  // 'A'
char    lower   = Character.toLowerCase('Z');  // 'z'
int     numVal  = Character.getNumericValue('9'); // 9`;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=m({type:s,selectors:[["app-topic-wrapper-classes"]],decls:248,vars:9,consts:[["title","Wrapper Classes & Autoboxing","subtitle","Convert primitives to objects with Integer, Double, Boolean and friends. Master autoboxing, unboxing, the Integer cache, and common pitfalls.","badge","CORE JAVA","gradient","linear-gradient(135deg, #7c3aed, #a78bfa)"],[1,"section"],[1,"section-heading"],["name","layers","css","icon-purple",3,"size"],[1,"prose"],[3,"code"],["name","refresh-cw","css","icon-purple",3,"size"],["name","alert-triangle","css","icon-purple",3,"size"],["name","tool","css","icon-purple",3,"size"],["name","briefcase","css","icon-purple",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(a,l){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," Primitives vs Wrapper Classes "),t(),n(5,"div",4)(6,"p"),e(7," Java has 8 primitive types for performance. Each has a corresponding "),n(8,"strong"),e(9,"wrapper class"),t(),e(10," in "),n(11,"code"),e(12,"java.lang"),t(),e(13," that boxes the primitive into an object, enabling use in collections, generics, and APIs that require "),n(14,"code"),e(15,"Object"),t(),e(16,". "),t(),n(17,"ul")(18,"li")(19,"code"),e(20,"int"),t(),e(21," / "),n(22,"strong"),e(23,"Integer"),t(),e(24," \u2014 default: "),n(25,"code"),e(26,"0"),t(),e(27," / "),n(28,"code"),e(29,"null"),t()(),n(30,"li")(31,"code"),e(32,"long"),t(),e(33," / "),n(34,"strong"),e(35,"Long"),t(),e(36," \u2014 default: "),n(37,"code"),e(38,"0L"),t(),e(39," / "),n(40,"code"),e(41,"null"),t()(),n(42,"li")(43,"code"),e(44,"double"),t(),e(45," / "),n(46,"strong"),e(47,"Double"),t(),e(48," \u2014 default: "),n(49,"code"),e(50,"0.0"),t(),e(51," / "),n(52,"code"),e(53,"null"),t()(),n(54,"li")(55,"code"),e(56,"boolean"),t(),e(57," / "),n(58,"strong"),e(59,"Boolean"),t(),e(60," \u2014 default: "),n(61,"code"),e(62,"false"),t(),e(63," / "),n(64,"code"),e(65,"null"),t()(),n(66,"li")(67,"code"),e(68,"char"),t(),e(69," / "),n(70,"strong"),e(71,"Character"),t(),e(72," \u2014 default: "),n(73,"code"),e(74,"'\\u0000'"),t(),e(75," / "),n(76,"code"),e(77,"null"),t()(),n(78,"li")(79,"code"),e(80,"byte"),t(),e(81," / "),n(82,"strong"),e(83,"Byte"),t(),e(84," \u2014 default: "),n(85,"code"),e(86,"0"),t(),e(87," / "),n(88,"code"),e(89,"null"),t()(),n(90,"li")(91,"code"),e(92,"short"),t(),e(93," / "),n(94,"strong"),e(95,"Short"),t(),e(96," \u2014 default: "),n(97,"code"),e(98,"0"),t(),e(99," / "),n(100,"code"),e(101,"null"),t()(),n(102,"li")(103,"code"),e(104,"float"),t(),e(105," / "),n(106,"strong"),e(107,"Float"),t(),e(108," \u2014 default: "),n(109,"code"),e(110,"0.0f"),t(),e(111," / "),n(112,"code"),e(113,"null"),t()()(),o(114,"app-code-block",5),t()(),n(115,"section",1)(116,"h2",2),o(117,"app-icon",6),e(118," Autoboxing & Unboxing "),t(),n(119,"div",4)(120,"p"),e(121," Since Java 5, the compiler automatically converts between primitives and wrappers. "),n(122,"strong"),e(123,"Autoboxing"),t(),e(124," wraps a primitive into a wrapper object; "),n(125,"strong"),e(126,"unboxing"),t(),e(127," extracts the primitive back. This is purely compiler sugar \u2014 it generates "),n(128,"code"),e(129,"Integer.valueOf()"),t(),e(130," and "),n(131,"code"),e(132,"intValue()"),t(),e(133," calls for you. "),t(),n(134,"p"),e(135," The classic "),n(136,"strong"),e(137,"NullPointerException trap"),t(),e(138,": if a wrapper field or map value is "),n(139,"code"),e(140,"null"),t(),e(141," and you try to unbox it in an arithmetic expression, the JVM throws NPE \u2014 with no obvious null dereference visible in the source code. "),t(),o(142,"app-code-block",5),t()(),n(143,"section",1)(144,"h2",2),o(145,"app-icon",7),e(146," The Integer Cache (-128 to 127) "),t(),n(147,"div",4)(148,"p")(149,"code"),e(150,"Integer.valueOf(n)"),t(),e(151," (used internally by autoboxing) caches instances for values in the range "),n(152,"strong"),e(153,"-128 to 127"),t(),e(154,". This means two autoboxed integers in that range will share the same object reference, making "),n(155,"code"),e(156,"=="),t(),e(157," return "),n(158,"code"),e(159,"true"),t(),e(160,". Outside that range, each call produces a fresh object \u2014 "),n(161,"code"),e(162,"=="),t(),e(163," returns "),n(164,"code"),e(165,"false"),t(),e(166,". "),t(),n(167,"p"),e(168," This is one of the most famous Java interview traps. "),n(169,"strong"),e(170,"Always use "),n(171,"code"),e(172,".equals()"),t()(),e(173," to compare wrapper values. "),t(),o(174,"app-code-block",5),t()(),n(175,"section",1)(176,"h2",2),o(177,"app-icon",8),e(178," Useful Utility Methods "),t(),n(179,"div",4)(180,"p"),e(181," Wrapper classes are packed with static utility methods for parsing, formatting, and numeric operations. These are frequently used in competitive programming and everyday Java development. "),t(),o(182,"app-code-block",5),t()(),n(183,"section",1)(184,"h2",2),o(185,"app-icon",9),e(186," Interview Tips "),t(),n(187,"div",10)(188,"div",11)(189,"div",12),e(190,"1"),t(),n(191,"div")(192,"h4",13),e(193,"== vs .equals() on Wrappers \u2014 The Cache Trap"),t(),n(194,"p",14),e(195,"Autoboxed "),n(196,"code"),e(197,"Integer"),t(),e(198," values between -128 and 127 are cached \u2014 "),n(199,"code"),e(200,"=="),t(),e(201," happens to return "),n(202,"code"),e(203,"true"),t(),e(204,". For values outside that range, "),n(205,"code"),e(206,"=="),t(),e(207," compares references (false). Always use "),n(208,"code"),e(209,".equals()"),t(),e(210," for logical equality with wrapper types."),t()()(),n(211,"div",11)(212,"div",12),e(213,"2"),t(),n(214,"div")(215,"h4",13),e(216,"NullPointerException from Auto-Unboxing null"),t(),n(217,"p",14),e(218,"If an "),n(219,"code"),e(220,"Integer"),t(),e(221," variable holds "),n(222,"code"),e(223,"null"),t(),e(224," and is used in an arithmetic expression (e.g., "),n(225,"code"),e(226,"int x = myInteger + 1"),t(),e(227,"), the compiler inserts "),n(228,"code"),e(229,"myInteger.intValue()"),t(),e(230," which throws NPE. Always null-check wrapper types before arithmetic."),t()()(),n(231,"div",11)(232,"div",12),e(233,"3"),t(),n(234,"div")(235,"h4",13),e(236,"Performance: Prefer Primitives in Tight Loops"),t(),n(237,"p",14),e(238,"Each autoboxing creates a heap object and each unboxing adds an indirection. In a loop running millions of times, using "),n(239,"code"),e(240,"int"),t(),e(241," instead of "),n(242,"code"),e(243,"Integer"),t(),e(244," can be 10x faster and reduces GC pressure significantly. Use primitives wherever "),n(245,"code"),e(246,"null"),t(),e(247," is not needed."),t()()()()()()),a&2&&(i(3),r("size",28),i(111),r("code",l.code1),i(3),r("size",28),i(25),r("code",l.code2),i(3),r("size",28),i(29),r("code",l.code3),i(3),r("size",28),i(5),r("code",l.code4),i(3),r("size",28))},dependencies:[c,d,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#5b21b6}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#7c3aed;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f3ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#5b21b6}"],changeDetection:0})};export{u as WrapperClassesComponent};
