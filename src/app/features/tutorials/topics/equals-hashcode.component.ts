import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-equals-hashcode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="equals() &amp; hashCode() Contract"
      subtitle="Master the fundamental object equality contract. Learn when to override both methods, the rules you must never break, and how HashMap relies on them."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #78350f, #f59e0b)">

      <!-- Section 1: The Contract Rules -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="file-text" [size]="28" css="icon-amber" /> The Contract Rules
        </h2>
        <div class="prose">
          <p>
            The <code>equals()</code> and <code>hashCode()</code> methods form a <strong>contract</strong> defined
            in <code>java.lang.Object</code>. Breaking these rules causes subtle, hard-to-debug bugs — especially
            with hash-based collections.
          </p>
          <p><strong>equals() must be:</strong></p>
          <ul>
            <li><strong>Reflexive</strong>: <code>x.equals(x)</code> must be <code>true</code>.</li>
            <li><strong>Symmetric</strong>: if <code>x.equals(y)</code> then <code>y.equals(x)</code>.</li>
            <li><strong>Transitive</strong>: if <code>x.equals(y)</code> and <code>y.equals(z)</code> then <code>x.equals(z)</code>.</li>
            <li><strong>Consistent</strong>: repeated calls return the same result (if no fields change).</li>
            <li><strong>Null-safe</strong>: <code>x.equals(null)</code> must return <code>false</code> (never throw NPE).</li>
          </ul>
          <p><strong>hashCode() contract:</strong></p>
          <ul>
            <li>Objects that are <em>equal</em> (<code>equals()</code> returns <code>true</code>) <strong>MUST</strong> have the same hash code.</li>
            <li>Objects that are <em>unequal</em> <strong>SHOULD</strong> (but are not required to) have different hash codes — collisions are allowed but degrade performance.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Overriding equals() -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="edit" [size]="28" css="icon-amber" /> Overriding equals()
        </h2>
        <div class="prose">
          <p>
            The canonical pattern for overriding <code>equals()</code>: check for null, check type with
            <code>instanceof</code>, cast, then compare all identity-determining fields.
            Use <code>Objects.equals()</code> for nullable fields to avoid NPE.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Overriding hashCode() -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="hash" [size]="28" css="icon-amber" /> Overriding hashCode()
        </h2>
        <div class="prose">
          <p>
            <strong>You must override <code>hashCode()</code> whenever you override <code>equals()</code>.</strong>
            If you only override <code>equals()</code>, two logically-equal objects may land in different hash buckets
            in a <code>HashMap</code> or <code>HashSet</code> — making it impossible to find them after insertion.
          </p>
          <p>
            <code>Objects.hash(field1, field2, ...)</code> is the simplest correct implementation.
            For performance-sensitive code, write a manual hash combining prime multipliers.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: HashMap Internals -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="map" [size]="28" css="icon-amber" /> HashMap Internals
        </h2>
        <div class="prose">
          <p>
            <code>HashMap</code> uses <strong>two-step key lookup</strong>:
          </p>
          <ul>
            <li><strong>Step 1</strong>: Call <code>hashCode()</code> on the key to find the bucket index.</li>
            <li><strong>Step 2</strong>: Iterate the bucket's linked list/tree, calling <code>equals()</code> on each entry until a match is found.</li>
          </ul>
          <p>
            If <code>hashCode()</code> is wrong (or missing), the key lands in the wrong bucket and
            <code>equals()</code> is never called on the right entry — the key appears lost even though it is in the map.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-amber" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">The HashMap Disaster — Only equals() Overridden</h4>
              <p class="tip-desc">If you override <code>equals()</code> but not <code>hashCode()</code>, two logically equal objects will hash to different buckets. <code>map.get(key)</code> will return <code>null</code> even after <code>map.put(equalKey, value)</code>. This is the most common <code>equals/hashCode</code> bug in interviews.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">hashCode Must Be Consistent While in a Map</h4>
              <p class="tip-desc">If you mutate a field that is used in <code>hashCode()</code> while the object is a key in a <code>HashMap</code>, the hash changes but the object stays in the old bucket — it becomes permanently unfindable. Prefer <strong>immutable key objects</strong> (like <code>String</code>, <code>Integer</code>, records).</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">IDE Generation vs Manual — Use Objects.hash()</h4>
              <p class="tip-desc">Always use <code>Objects.hash(f1, f2, ...)</code> and <code>Objects.equals(f1, f2)</code> rather than writing raw null checks and prime-number arithmetic by hand. Modern IDEs generate correct implementations automatically. For records (Java 16+), <code>equals()</code> and <code>hashCode()</code> are generated by the compiler — no manual override needed.</p>
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
    .icon-amber { color: #f59e0b; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #fffbeb; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #92400e;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #f59e0b; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fffbeb; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #92400e; }
  `
})
export class EqualsHashcodeComponent {

  code1 = `// Object's DEFAULT implementations (reference equality)
Object a = new Object();
Object b = new Object();

a.equals(b);   // false — different references
a.equals(a);   // true  — same reference (reflexive by identity)
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
System.out.println(p1.equals(p2)); // false — Object.equals() compares references
System.out.println(p1 == p2);      // false — different objects
// These two logically-identical points are "not equal" to any collection.

// The hashCode contract at a glance:
// equals() true  → hashCode() MUST be equal   (mandatory)
// equals() false → hashCode() SHOULD differ   (not mandatory, but important for performance)
// hashCode equal → equals() may be true OR false  (hash collision is OK)`;

  code2 = `public class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public boolean equals(Object obj) {
        // 1. Reflexive: same reference → always equal
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
System.out.println(p1.equals(p2)); // true  ← logical equality
System.out.println(p1.equals(null)); // false ← null-safe`;

  code3 = `public class Point {
    private final int x;
    private final int y;

    // ... constructor, equals() ...

    @Override
    public int hashCode() {
        // Objects.hash() — simplest correct implementation
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
    // hashCode() NOT overridden → uses Object's memory-address-based hash
}

Map<BrokenPoint, String> map = new HashMap<>();
BrokenPoint key1 = new BrokenPoint(1, 2);
map.put(key1, "origin-ish");

BrokenPoint key2 = new BrokenPoint(1, 2); // logically equal to key1
System.out.println(key1.equals(key2));     // true  ← equals works
System.out.println(map.get(key2));         // null  ← DISASTER! wrong bucket`;

  code4 = `// ---- Correct Point with BOTH equals() and hashCode() ----
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
System.out.println(map.get(b));    // "triangle vertex" ← found correctly!

// HashSet deduplication also works:
Set<Point> set = new HashSet<>();
set.add(new Point(1, 1));
set.add(new Point(1, 1)); // duplicate → ignored
System.out.println(set.size()); // 1 (not 2)

// ---- Java 16+ Record: equals, hashCode, toString generated automatically ----
record PointRecord(int x, int y) {}  // all three methods auto-generated

PointRecord r1 = new PointRecord(5, 6);
PointRecord r2 = new PointRecord(5, 6);
System.out.println(r1.equals(r2));   // true  — free!
System.out.println(r1.hashCode() == r2.hashCode()); // true — free!

// ---- Mutable key DISASTER — don't mutate keys in a map! ----
Point mutableKey = new Point(1, 2);  // if x,y were mutable
map.put(mutableKey, "value");
// mutableKey.x = 99; // if this were possible, hashCode changes!
// map.get(mutableKey) → null (wrong bucket now)
// Use immutable objects (final fields, records) as map keys.`;
}
