import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-string-pool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="String Pool &amp; Interning"
      subtitle="Discover how Java's string pool saves memory and why == vs .equals() behaves differently for strings. Learn intern(), and string immutability."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #065f46, #10b981)">

      <!-- Section 1: String Immutability -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="lock" [size]="28" css="icon-green" /> String Immutability
        </h2>
        <div class="prose">
          <p>
            <code>String</code> objects in Java are <strong>immutable</strong> — once created, the character
            sequence they hold can never change. Any operation that appears to modify a string actually returns
            a brand-new <code>String</code> object.
          </p>
          <p>Immutability brings three key benefits:</p>
          <ul>
            <li><strong>Thread safety</strong> — Multiple threads can safely share the same <code>String</code> instance without synchronisation.</li>
            <li><strong>Hash-code caching</strong> — <code>String</code> caches its hash code after the first call to <code>hashCode()</code>, making it fast as a <code>HashMap</code> key.</li>
            <li><strong>Security</strong> — File paths, database URLs, and network hostnames passed to APIs cannot be changed after the caller creates them.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: The String Pool -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="database" [size]="28" css="icon-green" /> The String Pool (String Intern Pool)
        </h2>
        <div class="prose">
          <p>
            Java maintains a special area of memory called the <strong>String Constant Pool</strong> (part of the Heap
            since Java 7+; previously in PermGen). When you write a string <em>literal</em>, the JVM checks the pool:
            if an equal string already exists, it returns the existing reference — no new object is created.
          </p>
          <ul>
            <li>String literals (<code>"hello"</code>) go into the pool automatically.</li>
            <li><code>new String("hello")</code> always creates a fresh heap object, bypassing the pool.</li>
            <li>The pool is de-duplicated: <code>"abc" == "abc"</code> is always <code>true</code> for literals in the same class.</li>
          </ul>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: intern() Method -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="download" [size]="28" css="icon-green" /> intern() Method
        </h2>
        <div class="prose">
          <p>
            <code>String.intern()</code> forces a string onto the pool. If the pool already contains an equal string,
            the pooled instance is returned; otherwise the string is added to the pool and returned.
          </p>
          <p>
            <strong>Use case</strong>: systems that process millions of repeated strings (e.g., parsing CSV files with
            the same category names) can save significant heap memory by interning. Modern JVMs also support
            <code>-XX:+UseStringDeduplication</code> with G1GC as an alternative.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: String Comparison Rules -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="git-compare" [size]="28" css="icon-green" /> String Comparison Rules
        </h2>
        <div class="prose">
          <p>
            This is one of the most common Java interview topics. The rule is simple:
            <strong>always use <code>.equals()</code> to compare string content</strong>.
            Reserve <code>==</code> only when you are deliberately testing reference identity (rare).
          </p>
          <ul>
            <li><code>==</code> compares object references — are these two variables pointing to the exact same object in memory?</li>
            <li><code>.equals()</code> compares the character sequence — do these two strings contain the same characters?</li>
            <li><code>.equalsIgnoreCase()</code> for case-insensitive comparison.</li>
            <li><code>.compareTo()</code> for lexicographic ordering (returns int: negative, zero, positive).</li>
          </ul>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-green" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Why Is String Immutable?</h4>
              <p class="tip-desc">Three reasons: <strong>security</strong> (file paths/URLs can't be tampered with after being passed), <strong>hashCode caching</strong> (safe to cache because value never changes — makes String fast as HashMap key), and <strong>thread safety</strong> (immutable objects are inherently safe to share across threads).</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">String Literal vs new String()</h4>
              <p class="tip-desc"><code>"hello"</code> is looked up in the pool — reuses existing object if present. <code>new String("hello")</code> always allocates a new heap object regardless of the pool. Use literals in nearly all cases; avoid <code>new String()</code> unless you explicitly need a distinct instance.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">When to Use intern()</h4>
              <p class="tip-desc">Use <code>intern()</code> when processing large datasets with many repeated strings (e.g., parsing millions of rows where a "category" column has only 20 distinct values). It reduces heap usage by sharing a single instance. Avoid it for unique strings — pool overhead outweighs the benefit.</p>
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
    .icon-green { color: #10b981; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #ecfdf5; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #065f46;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #10b981; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #ecfdf5; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #065f46; }
  `
})
export class StringPoolComponent {

  code1 = `// String is immutable — every "modification" creates a new object
String s = "Hello";
s.toUpperCase();        // returns "HELLO" but s is still "Hello"
System.out.println(s);  // Hello  ← unchanged

String upper = s.toUpperCase();
System.out.println(upper); // HELLO  ← new object

// Concatenation creates new objects each time
String result = "";
for (int i = 0; i < 5; i++) {
    result = result + i; // creates 5 intermediate String objects!
}
// "01234" — but wastes memory and time

// --- StringBuilder for mutation: one mutable buffer ---
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 5; i++) {
    sb.append(i);   // modifies in place — no new objects
}
String efficient = sb.toString(); // "01234"

// String concatenation with + in a loop is O(n²).
// StringBuilder.append() in a loop is O(n).

// String's cached hashCode
String key = "username";
int h1 = key.hashCode(); // computed once, cached in the String object
int h2 = key.hashCode(); // returned from cache — O(1) after first call`;

  code2 = `// ---- String LITERALS → go into the String Pool ----
String s1 = "hello";  // pool: ["hello"]
String s2 = "hello";  // pool already has "hello" → returns same ref

System.out.println(s1 == s2);       // true  (same pooled object)
System.out.println(s1.equals(s2));  // true  (same content)

// ---- new String() → always a fresh heap object ----
String s3 = new String("hello");    // heap object, NOT from pool

System.out.println(s1 == s3);       // false (different references!)
System.out.println(s1.equals(s3));  // true  (same character content)

// ---- Compile-time constant folding also uses the pool ----
String prefix = "hel";
String suffix = "lo";
String concat = "hel" + "lo";       // constant at compile time → pooled
String dynamic = prefix + suffix;   // runtime concatenation → new heap object

System.out.println("hello" == concat);  // true  (compile-time constant)
System.out.println("hello" == dynamic); // false (runtime object)

// Memory layout:
// Pool (in Heap):  [ "hello" ] ← s1, s2, and concat all point here
// Heap:            [ String@abc ] ← s3 points here (separate copy)`;

  code3 = `// intern() forces a string onto the pool
String heapStr = new String("world");  // NOT in pool
System.out.println(heapStr == "world");           // false (heap vs pool)

String pooled = heapStr.intern();                  // add to pool, return pool ref
System.out.println(pooled == "world");             // true  (same pool entry)

// --- Memory optimisation with intern() ---
// Imagine parsing 1 million CSV rows, each with a "country" field.
// Without intern: 1 million separate String objects for ~200 distinct values
// With intern:    at most 200 String objects in the pool — huge savings

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
// For massive datasets, consider a HashMap<String,String> identity map instead.`;

  code4 = `// ===== Correct string comparison patterns =====

String a = "Java";
String b = new String("Java");

// WRONG — may give surprising results
if (a == b) { /* ... */ }       // false here, even though content matches

// CORRECT — always use .equals()
if (a.equals(b)) { /* ... */ }  // true

// Null-safe comparison (avoid NPE when left side could be null)
if ("Java".equals(a)) { /* ... */ }          // literal on left — NPE-safe
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
// "abc" == "abc"            → true  (same pool literal)
// "abc" == new String("abc")→ false (pool vs heap)
// new String("abc") == new String("abc") → false (two heap objects)
// "abc".equals(new String("abc"))        → true  (content match)
// Objects.equals(null, "abc")            → false (no NPE)
// Objects.equals(null, null)             → true`;
}
