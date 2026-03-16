import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-wrapper-classes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Wrapper Classes &amp; Autoboxing"
      subtitle="Convert primitives to objects with Integer, Double, Boolean and friends. Master autoboxing, unboxing, the Integer cache, and common pitfalls."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c3aed, #a78bfa)">

      <!-- Section 1: Primitives vs Wrapper Classes -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-purple" /> Primitives vs Wrapper Classes
        </h2>
        <div class="prose">
          <p>
            Java has 8 primitive types for performance. Each has a corresponding <strong>wrapper class</strong> in
            <code>java.lang</code> that boxes the primitive into an object, enabling use in collections,
            generics, and APIs that require <code>Object</code>.
          </p>
          <ul>
            <li><code>int</code> / <strong>Integer</strong> — default: <code>0</code> / <code>null</code></li>
            <li><code>long</code> / <strong>Long</strong> — default: <code>0L</code> / <code>null</code></li>
            <li><code>double</code> / <strong>Double</strong> — default: <code>0.0</code> / <code>null</code></li>
            <li><code>boolean</code> / <strong>Boolean</strong> — default: <code>false</code> / <code>null</code></li>
            <li><code>char</code> / <strong>Character</strong> — default: <code>'\\u0000'</code> / <code>null</code></li>
            <li><code>byte</code> / <strong>Byte</strong> — default: <code>0</code> / <code>null</code></li>
            <li><code>short</code> / <strong>Short</strong> — default: <code>0</code> / <code>null</code></li>
            <li><code>float</code> / <strong>Float</strong> — default: <code>0.0f</code> / <code>null</code></li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Autoboxing & Unboxing -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="refresh-cw" [size]="28" css="icon-purple" /> Autoboxing &amp; Unboxing
        </h2>
        <div class="prose">
          <p>
            Since Java 5, the compiler automatically converts between primitives and wrappers.
            <strong>Autoboxing</strong> wraps a primitive into a wrapper object; <strong>unboxing</strong> extracts
            the primitive back. This is purely compiler sugar — it generates <code>Integer.valueOf()</code>
            and <code>intValue()</code> calls for you.
          </p>
          <p>
            The classic <strong>NullPointerException trap</strong>: if a wrapper field or map value is <code>null</code>
            and you try to unbox it in an arithmetic expression, the JVM throws NPE — with no obvious null dereference
            visible in the source code.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: The Integer Cache -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-purple" /> The Integer Cache (-128 to 127)
        </h2>
        <div class="prose">
          <p>
            <code>Integer.valueOf(n)</code> (used internally by autoboxing) caches instances for values
            in the range <strong>-128 to 127</strong>. This means two autoboxed integers in that range will share
            the same object reference, making <code>==</code> return <code>true</code>.
            Outside that range, each call produces a fresh object — <code>==</code> returns <code>false</code>.
          </p>
          <p>
            This is one of the most famous Java interview traps. <strong>Always use <code>.equals()</code></strong>
            to compare wrapper values.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Useful Utility Methods -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="tool" [size]="28" css="icon-purple" /> Useful Utility Methods
        </h2>
        <div class="prose">
          <p>
            Wrapper classes are packed with static utility methods for parsing, formatting, and numeric operations.
            These are frequently used in competitive programming and everyday Java development.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-purple" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">== vs .equals() on Wrappers — The Cache Trap</h4>
              <p class="tip-desc">Autoboxed <code>Integer</code> values between -128 and 127 are cached — <code>==</code> happens to return <code>true</code>. For values outside that range, <code>==</code> compares references (false). Always use <code>.equals()</code> for logical equality with wrapper types.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">NullPointerException from Auto-Unboxing null</h4>
              <p class="tip-desc">If an <code>Integer</code> variable holds <code>null</code> and is used in an arithmetic expression (e.g., <code>int x = myInteger + 1</code>), the compiler inserts <code>myInteger.intValue()</code> which throws NPE. Always null-check wrapper types before arithmetic.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Performance: Prefer Primitives in Tight Loops</h4>
              <p class="tip-desc">Each autoboxing creates a heap object and each unboxing adds an indirection. In a loop running millions of times, using <code>int</code> instead of <code>Integer</code> can be 10x faster and reduces GC pressure significantly. Use primitives wherever <code>null</code> is not needed.</p>
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
    .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #f5f3ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #5b21b6;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #7c3aed; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f5f3ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #5b21b6; }
  `
})
export class WrapperClassesComponent {

  code1 = `// Wrapper class constants and parsing
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

// Wrapper in collections — primitives not allowed as generic type args
List<Integer> scores = new ArrayList<>();
scores.add(95);  // autoboxing: scores.add(Integer.valueOf(95))
scores.add(87);
int total = scores.get(0) + scores.get(1); // unboxing: .intValue()`;

  code2 = `// --- Autoboxing (primitive → wrapper) ---
Integer boxed = 42;           // compiler: Integer.valueOf(42)
Double  price = 9.99;         // compiler: Double.valueOf(9.99)
Boolean flag  = true;         // compiler: Boolean.valueOf(true)

// --- Unboxing (wrapper → primitive) ---
int raw = boxed;              // compiler: boxed.intValue()
double d = price;             // compiler: price.doubleValue()

// --- Autoboxing in collections ---
List<Integer> numbers = new ArrayList<>();
numbers.add(10);   // autoboxed
numbers.add(20);   // autoboxed
int sum = numbers.get(0) + numbers.get(1); // both unboxed → 30

// --- NullPointerException TRAP ---
Map<String, Integer> map = new HashMap<>();
map.put("count", null);

// Looks safe — but the compiler inserts .intValue() on a null wrapper!
int count = map.get("count"); // NullPointerException at runtime!

// Safe version: null-check first
Integer val = map.get("count");
int safe = (val != null) ? val : 0;

// Or use getOrDefault
int safe2 = map.getOrDefault("count", 0);`;

  code3 = `// ---- Values in [-128, 127] are CACHED ----
Integer a = 127;
Integer b = 127;
System.out.println(a == b);       // true  (same cached object)
System.out.println(a.equals(b));  // true  (always correct)

// ---- Values OUTSIDE cache range create new objects ----
Integer c = 128;
Integer d = 128;
System.out.println(c == d);       // false (different heap objects!)
System.out.println(c.equals(d));  // true  (correct — compares values)

// The cache is inside Integer.valueOf():
// if (i >= -128 && i <= 127) return IntegerCache.cache[i + 128];
// else return new Integer(i);

// Same caching applies to: Byte, Short, Long (-128..127), Character (0..127),
// Boolean (TRUE and FALSE singletons)

// --- ALWAYS use .equals() for wrapper comparison ---
Integer x = Integer.valueOf(1000);
Integer y = Integer.valueOf(1000);
System.out.println(x == y);       // false — do NOT rely on this
System.out.println(x.equals(y));  // true  — correct approach

// The cache range for Integer can be extended with JVM flag:
// -XX:AutoBoxCacheMax=<size>  (maximum is rarely a good idea)`;

  code4 = `// --- Parsing and converting ---
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
int     numVal  = Character.getNumericValue('9'); // 9`;
}
