import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-var-type-inference',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="var & Local Type Inference"
      subtitle="Write cleaner code with Java 10's var keyword. Understand where it works, where it doesn't, and how the compiler infers types without losing type safety."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a5f, #38bdf8)">

      <!-- Section 1: What is var? -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-sky" /> What is var?
        </h2>
        <div class="prose">
          <p>
            <code>var</code> is a <strong>reserved type name</strong> (not a keyword) introduced in Java 10.
            It instructs the compiler to infer the variable's type from the right-hand side initialiser.
            The type is <strong>fixed at compile time</strong> — it is NOT dynamic typing like JavaScript's <code>var</code>.
            Once inferred, you cannot assign a value of a different type.
          </p>
          <ul>
            <li><code>var</code> only works for <strong>local variables</strong> — not fields, parameters, or return types.</li>
            <li>The initialiser is required — the compiler must see a concrete type to infer from.</li>
            <li>The compiled bytecode contains the fully resolved type — there is zero runtime overhead.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Where var Works -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="check-circle" [size]="28" css="icon-sky" /> Where var Works
        </h2>
        <div class="prose">
          <p>
            <code>var</code> is allowed in three local-variable contexts: standard local variable declarations,
            <code>for-each</code> loop variables, and <code>try-with-resources</code> variables.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Where var Does NOT Work -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="x-circle" [size]="28" css="icon-sky" /> Where var Does NOT Work
        </h2>
        <div class="prose">
          <p>
            <code>var</code> is intentionally restricted. The compiler requires enough context to infer a precise,
            non-ambiguous type. The following usages all result in compile errors:
          </p>
          <ul>
            <li>Method parameters and return types</li>
            <li>Class fields (instance or static)</li>
            <li>Variables without an initialiser</li>
            <li>Variables initialised to <code>null</code> (type would be <code>null</code> — not useful)</li>
            <li>Lambda expressions and method references as initialisers</li>
          </ul>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: When to Use var -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="thumbs-up" [size]="28" css="icon-sky" /> When to Use var (and When Not To)
        </h2>
        <div class="prose">
          <p>
            <code>var</code> improves readability when the type is <em>obvious</em> from context. It hurts readability
            when the type is not immediately clear from the right-hand side. Follow the principle: <strong>if a reader
            can't tell the type at a glance, don't use var</strong>.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: var with Anonymous Classes -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-sky" /> var with Anonymous Classes and Intersection Types
        </h2>
        <div class="prose">
          <p>
            <code>var</code> can capture anonymous class types that have no expressible name in Java. This is a unique
            ability — without <code>var</code>, you'd lose access to members added in the anonymous class body.
            This also works for intersection types captured from generic methods.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-sky" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">var is Still Statically Typed</h4>
              <p class="tip-desc"><code>var</code> is NOT like JavaScript's <code>var</code> — Java remains a statically typed language. The compiler infers the type once and it's fixed. <code>var x = "hello"; x = 42;</code> is a compile error because <code>x</code> was inferred as <code>String</code>.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">var Only for Local Variables</h4>
              <p class="tip-desc"><code>var</code> cannot be used for class fields, method parameters, or return types — only local variables, for-each variables, and try-with-resources variables. This is by design to keep APIs explicit and readable.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Readability First</h4>
              <p class="tip-desc">Use <code>var</code> when the type is obvious from the right-hand side (e.g., <code>var list = new ArrayList&lt;String&gt;();</code>). Avoid it when the type is unclear (e.g., <code>var result = process();</code>) — the explicit type makes the code self-documenting.</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-sky { color: #38bdf8; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #f0f9ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0c4a6e;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #38bdf8; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f0f9ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #0c4a6e; }
  `
})
export class VarTypeInferenceComponent {

  code1 = `// BEFORE var (Java 9 and earlier) — type repeated on both sides
ArrayList<String>              names   = new ArrayList<String>();
HashMap<String, List<Integer>> scores  = new HashMap<String, List<Integer>>();
BufferedReader                 reader  = new BufferedReader(new FileReader("f.txt"));

// AFTER var (Java 10+) — type inferred from right-hand side
var names   = new ArrayList<String>();         // inferred: ArrayList<String>
var scores  = new HashMap<String, List<Integer>>(); // inferred: HashMap<String, List<Integer>>
var reader  = new BufferedReader(new FileReader("f.txt")); // inferred: BufferedReader

// Simple types
var name    = "Alice";     // String
var age     = 30;          // int
var salary  = 85_000.0;    // double
var active  = true;        // boolean

// The inferred type is FIXED — this causes a compile error:
var count = 0;
// count = "five"; // ERROR: incompatible types — count is int, not String

// Bytecode proof — both are identical:
String explicit = "hello"; // bytecode: LDC "hello", ASTORE 1
var    inferred = "hello"; // bytecode: LDC "hello", ASTORE 1 (same!)`;

  code2 = `// 1. Local variable declarations
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
} // conn, stmt, result all auto-closed`;

  code3 = `// COMPILE ERRORS — var is not allowed here:

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

// 5. Null initialiser (type would be null — not useful)
var obj = null;                 // ERROR: variable initialiser is 'null'

// 6. Lambda/method reference initialiser (multiple possible types)
var comparator = (a, b) -> a.compareTo(b); // ERROR: cannot infer type for lambda

// 7. Array initialiser shorthand
var arr = {1, 2, 3};     // ERROR: array initializer needs an explicit target-type

// This works (explicit array type on right side):
var arr2 = new int[]{1, 2, 3}; // OK — inferred: int[]

// 8. catch clauses (still need explicit type)
try { } catch (var e) { }  // ERROR in Java < 16; still disallowed`;

  code4 = `// GOOD uses of var — type is obvious from context

// Long generic types — saves significant repetition
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

// BAD uses of var — type is unclear, hurts readability

// Factory/utility methods — type not obvious
var result  = getUsers();          // Unclear: List<User>? Stream<User>? Optional?
var data    = process(input);      // Unclear: what does process return?
var handler = createHandler();     // Unclear: what type?

// Literal ambiguity — var picks the default type
var x = 1;       // int  (not byte, short, or long)
var y = 1.0;     // double (not float)
var z = 'A';     // char
// If you need float explicitly, you CANNOT use var safely:
var bad  = 1.0;   // double — might not be what you want
float good = 1.0f; // explicit: float

// Diamond with var — generic type may be inferred as Object
var list = new ArrayList<>();   // WARNING: ArrayList<Object> — be explicit with generics
var list2 = new ArrayList<String>(); // Good — generic type preserved`;

  code5 = `// var captures anonymous class types (not expressible otherwise)
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
// o.name // COMPILE ERROR — Object doesn't have 'name'

// Anonymous class with interface — var gives access to extra members
Runnable r = new Runnable() {
    int runCount = 0;
    @Override public void run() { runCount++; System.out.println("Run #" + runCount); }
};
// r.runCount // COMPILE ERROR — Runnable doesn't have runCount

var r2 = new Runnable() {
    int runCount = 0;
    @Override public void run() { runCount++; }
};
r2.run();
System.out.println(r2.runCount); // 1 — accessible via var!

// Intersection types with generics (advanced)
// var can hold types that can't be named in source code
// e.g., a type that is both Comparable and Serializable
static <T extends Comparable<T> & java.io.Serializable> void process(T t) {
    var x = t;   // x has type T (Comparable & Serializable intersection)
    x.compareTo(t); // Comparable method
}`;
}
