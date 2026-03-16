import{a as d,b as m,c as p}from"./chunk-J75GQJ3V.js";import{$a as t,Ia as c,Za as o,_a as n,ab as a,wb as e,za as i}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var g=class l{code1=`// String is immutable \u2014 every "modification" creates a new object
String s = "Hello";
s.toUpperCase();        // returns "HELLO" but s is still "Hello"
System.out.println(s);  // Hello  \u2190 unchanged

String upper = s.toUpperCase();
System.out.println(upper); // HELLO  \u2190 new object

// Concatenation creates new objects each time
String result = "";
for (int i = 0; i < 5; i++) {
    result = result + i; // creates 5 intermediate String objects!
}
// "01234" \u2014 but wastes memory and time

// --- StringBuilder for mutation: one mutable buffer ---
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 5; i++) {
    sb.append(i);   // modifies in place \u2014 no new objects
}
String efficient = sb.toString(); // "01234"

// String concatenation with + in a loop is O(n\xB2).
// StringBuilder.append() in a loop is O(n).

// String's cached hashCode
String key = "username";
int h1 = key.hashCode(); // computed once, cached in the String object
int h2 = key.hashCode(); // returned from cache \u2014 O(1) after first call`;code2=`// ---- String LITERALS \u2192 go into the String Pool ----
String s1 = "hello";  // pool: ["hello"]
String s2 = "hello";  // pool already has "hello" \u2192 returns same ref

System.out.println(s1 == s2);       // true  (same pooled object)
System.out.println(s1.equals(s2));  // true  (same content)

// ---- new String() \u2192 always a fresh heap object ----
String s3 = new String("hello");    // heap object, NOT from pool

System.out.println(s1 == s3);       // false (different references!)
System.out.println(s1.equals(s3));  // true  (same character content)

// ---- Compile-time constant folding also uses the pool ----
String prefix = "hel";
String suffix = "lo";
String concat = "hel" + "lo";       // constant at compile time \u2192 pooled
String dynamic = prefix + suffix;   // runtime concatenation \u2192 new heap object

System.out.println("hello" == concat);  // true  (compile-time constant)
System.out.println("hello" == dynamic); // false (runtime object)

// Memory layout:
// Pool (in Heap):  [ "hello" ] \u2190 s1, s2, and concat all point here
// Heap:            [ String@abc ] \u2190 s3 points here (separate copy)`;code3=`// intern() forces a string onto the pool
String heapStr = new String("world");  // NOT in pool
System.out.println(heapStr == "world");           // false (heap vs pool)

String pooled = heapStr.intern();                  // add to pool, return pool ref
System.out.println(pooled == "world");             // true  (same pool entry)

// --- Memory optimisation with intern() ---
// Imagine parsing 1 million CSV rows, each with a "country" field.
// Without intern: 1 million separate String objects for ~200 distinct values
// With intern:    at most 200 String objects in the pool \u2014 huge savings

List<String> countries = new ArrayList<>();
for (String rawCountry : csvRows) {
    countries.add(rawCountry.intern()); // deduplicate into pool
}

// --- Alternative: JVM G1GC string deduplication (Java 8u20+) ---
// -XX:+UseStringDeduplication
// The GC automatically de-duplicates String char[] arrays in the background.
// No code changes needed. Works for all strings, not just literals.

// --- String.intern() performance note ---
// The pool is a fixed-size hash table (expanded in Java 7+).
// Excessive intern() calls can slow down if the table rehashes.
// For massive datasets, consider a HashMap<String,String> identity map instead.`;code4=`// ===== Correct string comparison patterns =====

String a = "Java";
String b = new String("Java");

// WRONG \u2014 may give surprising results
if (a == b) { /* ... */ }       // false here, even though content matches

// CORRECT \u2014 always use .equals()
if (a.equals(b)) { /* ... */ }  // true

// Null-safe comparison (avoid NPE when left side could be null)
if ("Java".equals(a)) { /* ... */ }          // literal on left \u2014 NPE-safe
if (Objects.equals(a, b)) { /* ... */ }      // null-safe utility (Java 7+)

// Case-insensitive
if (a.equalsIgnoreCase("java")) { /* ... */ } // true

// Lexicographic ordering
int order = a.compareTo("Kotlin");  // negative (J < K)
int ci     = a.compareToIgnoreCase("kotlin"); // negative

// startsWith / endsWith / contains
"Hello World".startsWith("Hello"); // true
"Hello World".endsWith("World");   // true
"Hello World".contains("lo W");    // true

// === Quick summary of == vs equals for Strings ===
// "abc" == "abc"            \u2192 true  (same pool literal)
// "abc" == new String("abc")\u2192 false (pool vs heap)
// new String("abc") == new String("abc") \u2192 false (two heap objects)
// "abc".equals(new String("abc"))        \u2192 true  (content match)
// Objects.equals(null, "abc")            \u2192 false (no NPE)
// Objects.equals(null, null)             \u2192 true`;static \u0275fac=function(r){return new(r||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-string-pool"]],decls:176,vars:9,consts:[["title","String Pool & Interning","subtitle","Discover how Java's string pool saves memory and why == vs .equals() behaves differently for strings. Learn intern(), and string immutability.","badge","CORE JAVA","gradient","linear-gradient(135deg, #065f46, #10b981)"],[1,"section"],[1,"section-heading"],["name","lock","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","database","css","icon-green",3,"size"],["name","download","css","icon-green",3,"size"],["name","git-compare","css","icon-green",3,"size"],["name","briefcase","css","icon-green",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(r,s){r&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," String Immutability "),t(),n(5,"div",4)(6,"p")(7,"code"),e(8,"String"),t(),e(9," objects in Java are "),n(10,"strong"),e(11,"immutable"),t(),e(12," \u2014 once created, the character sequence they hold can never change. Any operation that appears to modify a string actually returns a brand-new "),n(13,"code"),e(14,"String"),t(),e(15," object. "),t(),n(16,"p"),e(17,"Immutability brings three key benefits:"),t(),n(18,"ul")(19,"li")(20,"strong"),e(21,"Thread safety"),t(),e(22," \u2014 Multiple threads can safely share the same "),n(23,"code"),e(24,"String"),t(),e(25," instance without synchronisation."),t(),n(26,"li")(27,"strong"),e(28,"Hash-code caching"),t(),e(29," \u2014 "),n(30,"code"),e(31,"String"),t(),e(32," caches its hash code after the first call to "),n(33,"code"),e(34,"hashCode()"),t(),e(35,", making it fast as a "),n(36,"code"),e(37,"HashMap"),t(),e(38," key."),t(),n(39,"li")(40,"strong"),e(41,"Security"),t(),e(42," \u2014 File paths, database URLs, and network hostnames passed to APIs cannot be changed after the caller creates them."),t()(),a(43,"app-code-block",5),t()(),n(44,"section",1)(45,"h2",2),a(46,"app-icon",6),e(47," The String Pool (String Intern Pool) "),t(),n(48,"div",4)(49,"p"),e(50," Java maintains a special area of memory called the "),n(51,"strong"),e(52,"String Constant Pool"),t(),e(53," (part of the Heap since Java 7+; previously in PermGen). When you write a string "),n(54,"em"),e(55,"literal"),t(),e(56,", the JVM checks the pool: if an equal string already exists, it returns the existing reference \u2014 no new object is created. "),t(),n(57,"ul")(58,"li"),e(59,"String literals ("),n(60,"code"),e(61,'"hello"'),t(),e(62,") go into the pool automatically."),t(),n(63,"li")(64,"code"),e(65,'new String("hello")'),t(),e(66," always creates a fresh heap object, bypassing the pool."),t(),n(67,"li"),e(68,"The pool is de-duplicated: "),n(69,"code"),e(70,'"abc" == "abc"'),t(),e(71," is always "),n(72,"code"),e(73,"true"),t(),e(74," for literals in the same class."),t()(),a(75,"app-code-block",5),t()(),n(76,"section",1)(77,"h2",2),a(78,"app-icon",7),e(79," intern() Method "),t(),n(80,"div",4)(81,"p")(82,"code"),e(83,"String.intern()"),t(),e(84," forces a string onto the pool. If the pool already contains an equal string, the pooled instance is returned; otherwise the string is added to the pool and returned. "),t(),n(85,"p")(86,"strong"),e(87,"Use case"),t(),e(88,": systems that process millions of repeated strings (e.g., parsing CSV files with the same category names) can save significant heap memory by interning. Modern JVMs also support "),n(89,"code"),e(90,"-XX:+UseStringDeduplication"),t(),e(91," with G1GC as an alternative. "),t(),a(92,"app-code-block",5),t()(),n(93,"section",1)(94,"h2",2),a(95,"app-icon",8),e(96," String Comparison Rules "),t(),n(97,"div",4)(98,"p"),e(99," This is one of the most common Java interview topics. The rule is simple: "),n(100,"strong"),e(101,"always use "),n(102,"code"),e(103,".equals()"),t(),e(104," to compare string content"),t(),e(105,". Reserve "),n(106,"code"),e(107,"=="),t(),e(108," only when you are deliberately testing reference identity (rare). "),t(),n(109,"ul")(110,"li")(111,"code"),e(112,"=="),t(),e(113," compares object references \u2014 are these two variables pointing to the exact same object in memory?"),t(),n(114,"li")(115,"code"),e(116,".equals()"),t(),e(117," compares the character sequence \u2014 do these two strings contain the same characters?"),t(),n(118,"li")(119,"code"),e(120,".equalsIgnoreCase()"),t(),e(121," for case-insensitive comparison."),t(),n(122,"li")(123,"code"),e(124,".compareTo()"),t(),e(125," for lexicographic ordering (returns int: negative, zero, positive)."),t()(),a(126,"app-code-block",5),t()(),n(127,"section",1)(128,"h2",2),a(129,"app-icon",9),e(130," Interview Tips "),t(),n(131,"div",10)(132,"div",11)(133,"div",12),e(134,"1"),t(),n(135,"div")(136,"h4",13),e(137,"Why Is String Immutable?"),t(),n(138,"p",14),e(139,"Three reasons: "),n(140,"strong"),e(141,"security"),t(),e(142," (file paths/URLs can't be tampered with after being passed), "),n(143,"strong"),e(144,"hashCode caching"),t(),e(145," (safe to cache because value never changes \u2014 makes String fast as HashMap key), and "),n(146,"strong"),e(147,"thread safety"),t(),e(148," (immutable objects are inherently safe to share across threads)."),t()()(),n(149,"div",11)(150,"div",12),e(151,"2"),t(),n(152,"div")(153,"h4",13),e(154,"String Literal vs new String()"),t(),n(155,"p",14)(156,"code"),e(157,'"hello"'),t(),e(158," is looked up in the pool \u2014 reuses existing object if present. "),n(159,"code"),e(160,'new String("hello")'),t(),e(161," always allocates a new heap object regardless of the pool. Use literals in nearly all cases; avoid "),n(162,"code"),e(163,"new String()"),t(),e(164," unless you explicitly need a distinct instance."),t()()(),n(165,"div",11)(166,"div",12),e(167,"3"),t(),n(168,"div")(169,"h4",13),e(170,"When to Use intern()"),t(),n(171,"p",14),e(172,"Use "),n(173,"code"),e(174,"intern()"),t(),e(175,' when processing large datasets with many repeated strings (e.g., parsing millions of rows where a "category" column has only 20 distinct values). It reduces heap usage by sharing a single instance. Avoid it for unique strings \u2014 pool overhead outweighs the benefit.'),t()()()()()()),r&2&&(i(3),o("size",28),i(40),o("code",s.code1),i(3),o("size",28),i(29),o("code",s.code2),i(3),o("size",28),i(14),o("code",s.code3),i(3),o("size",28),i(31),o("code",s.code4),i(3),o("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-green[_ngcontent-%COMP%]{color:#10b981}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#065f46}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#10b981;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ecfdf5;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#065f46}"],changeDetection:0})};export{g as StringPoolComponent};
