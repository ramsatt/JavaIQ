import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialLayoutComponent } from '../tutorial-layout.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { IconComponent } from '../../../shared/icon.component';

@Component({
  selector: 'app-topic-object-class',
  standalone: true,
  imports: [CommonModule, TutorialLayoutComponent, CodeBlockComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-tutorial-layout
      title="java.lang.Object"
      subtitle="The root of every Java class — equals, hashCode, toString, and the contracts that hold collections together"
      badge="OOP Depth"
      [gradient]="gradient">

      <!-- SECTION 1: Object is the Root -->
      <section class="section">
        <h2 class="section-title">Every Class Extends Object</h2>
        <p class="section-desc">
          Every Java class implicitly extends <code>java.lang.Object</code>. This means every object
          inherits eleven methods you can override to integrate seamlessly with the Java ecosystem.
        </p>

        <div class="methods-grid">
          <div class="method-card highlight" *ngFor="let m of keyMethods">
            <div class="method-sig">{{ m.signature }}</div>
            <div class="method-desc">{{ m.description }}</div>
          </div>
        </div>

        <app-code-block [code]="objectHierarchyCode" language="java" />
      </section>

      <!-- SECTION 2: equals() & hashCode() Contract -->
      <section class="section">
        <h2 class="section-title">The equals() / hashCode() Contract</h2>
        <p class="section-desc">
          These two methods must be overridden together. Breaking either half of the contract causes
          silent data loss in <code>HashMap</code>, <code>HashSet</code>, and other hash-based collections.
        </p>

        <div class="contract-cards">
          <div class="contract-card">
            <div class="contract-icon equals">==</div>
            <h3>equals() Rules</h3>
            <ul class="contract-list">
              <li><strong>Reflexive:</strong> x.equals(x) → true</li>
              <li><strong>Symmetric:</strong> x.equals(y) ↔ y.equals(x)</li>
              <li><strong>Transitive:</strong> x=y, y=z → x=z</li>
              <li><strong>Consistent:</strong> same result across calls</li>
              <li><strong>Null-safe:</strong> x.equals(null) → false</li>
            </ul>
          </div>
          <div class="contract-card">
            <div class="contract-icon hash">#</div>
            <h3>hashCode() Rules</h3>
            <ul class="contract-list">
              <li><strong>Consistent:</strong> same value within a run</li>
              <li><strong>Equality implies same hash:</strong> x.equals(y) → x.hashCode() == y.hashCode()</li>
              <li><strong>NOT required:</strong> different objects can share a hash (collision)</li>
            </ul>
          </div>
        </div>

        <div class="warning-box">
          <app-icon name="alert-triangle" [size]="16" />
          <span><strong>Classic Bug:</strong> Overriding equals() without hashCode() causes objects to be "lost" in a HashSet — they pass equals() but land in a different bucket.</span>
        </div>

        <app-code-block [code]="equalsHashCodeCode" language="java" />
      </section>

      <!-- SECTION 3: HashCode Bucket Visualizer -->
      <section class="section">
        <h2 class="section-title">HashSet Bucket Visualizer</h2>
        <p class="section-desc">
          See what happens when you add <code>Point</code> objects to a <code>HashSet</code> with correct
          vs broken <code>hashCode()</code>. Toggle the implementation to observe the difference.
        </p>

        <div class="viz-card">
          <div class="viz-controls">
            <div class="toggle-group">
              <button
                class="toggle-btn"
                [class.active]="correctImpl()"
                (click)="setImpl(true)">
                Correct Implementation
              </button>
              <button
                class="toggle-btn"
                [class.active]="!correctImpl()"
                (click)="setImpl(false)">
                Broken hashCode()
              </button>
            </div>
            <div class="impl-badge" [class.correct]="correctImpl()" [class.broken]="!correctImpl()">
              {{ correctImpl() ? 'equals + hashCode overridden' : 'only equals() overridden' }}
            </div>
          </div>

          <div class="add-controls">
            <div class="point-inputs">
              <label>x: <input type="number" [value]="inputX()" (input)="setX($event)" min="0" max="9" style="width:50px;padding:4px;background:#1e293b;border:1px solid #334155;color:#e2e8f0;border-radius:4px" /></label>
              <label>y: <input type="number" [value]="inputY()" (input)="setY($event)" min="0" max="9" style="width:50px;padding:4px;background:#1e293b;border:1px solid #334155;color:#e2e8f0;border-radius:4px" /></label>
              <button class="action-btn add-btn" (click)="addPoint()">Add Point({{ inputX() }}, {{ inputY() }})</button>
              <button class="action-btn reset-btn" (click)="resetBuckets()">Reset</button>
            </div>
            <div class="set-size">HashSet size: <strong>{{ setSize() }}</strong> &nbsp;|&nbsp; Expected: <strong>{{ addedPoints().length }}</strong></div>
          </div>

          <div class="buckets-container">
            <div class="bucket" *ngFor="let bucket of buckets(); let i = index">
              <div class="bucket-label">Bucket {{ i }}</div>
              <div class="bucket-items">
                <div class="bucket-item" *ngFor="let p of bucket" [title]="'Point(' + p.x + ',' + p.y + ')'">
                  ({{ p.x }},{{ p.y }})
                </div>
                <div class="bucket-empty" *ngIf="bucket.length === 0">—</div>
              </div>
            </div>
          </div>

          <div class="viz-status" [class.error]="setSize() < addedPoints().length">
            <ng-container *ngIf="correctImpl()">
              All {{ addedPoints().length }} unique points stored in {{ setSize() }} bucket slot(s). Deduplication works correctly.
            </ng-container>
            <ng-container *ngIf="!correctImpl()">
              <app-icon name="alert-triangle" [size]="14" /> WARNING: {{ addedPoints().length }} adds → {{ setSize() }} entries! Duplicates not detected because hashCode() always returns 0 for all objects — equals() is never called across buckets.
            </ng-container>
          </div>
        </div>

        <app-code-block [code]="brokenVsCorrectCode" language="java" />
      </section>

      <!-- SECTION 4: toString() -->
      <section class="section">
        <h2 class="section-title">toString()</h2>
        <p class="section-desc">
          The default <code>Object.toString()</code> prints something like <code>Point&#64;1b6d3586</code> — the class name
          and identity hash code in hex. Always override it for meaningful logging and debugging.
        </p>

        <app-code-block [code]="toStringCode" language="java" />

        <div class="tip-row">
          <app-icon name="lightbulb" [size]="14" />
          <span>String concatenation implicitly calls <code>toString()</code>: <code>"Point: " + p</code> is the same as <code>"Point: " + p.toString()</code></span>
        </div>
      </section>

      <!-- SECTION 5: clone() and Alternatives -->
      <section class="section">
        <h2 class="section-title">clone() — and Why Records Are Better</h2>
        <p class="section-desc">
          <code>clone()</code> performs a shallow copy and requires implementing <code>Cloneable</code> marker interface.
          It's considered broken by design. Modern Java provides cleaner alternatives.
        </p>

        <div class="alternatives-grid">
          <div class="alt-card" *ngFor="let alt of alternatives">
            <div class="alt-icon" [ngStyle]="{'background': alt.color}">{{ alt.icon }}</div>
            <h4>{{ alt.name }}</h4>
            <p>{{ alt.desc }}</p>
            <div class="alt-verdict" [class]="alt.verdictClass">{{ alt.verdict }}</div>
          </div>
        </div>

        <app-code-block [code]="recordCode" language="java" />
      </section>

      <!-- SECTION 6: Lombok & Records Quick Reference -->
      <section class="section">
        <h2 class="section-title">Lombok vs Records</h2>
        <p class="section-desc">
          Both auto-generate <code>equals</code>, <code>hashCode</code>, and <code>toString</code>.
          Choose based on mutability needs and Java version.
        </p>

        <div class="comparison-table">
          <div class="table-header">
            <span>Feature</span>
            <span>Lombok @Data</span>
            <span>Java Record (17+)</span>
          </div>
          <div class="table-row" *ngFor="let row of comparisonRows">
            <span>{{ row.feature }}</span>
            <span [innerHTML]="row.lombok"></span>
            <span [innerHTML]="row.record"></span>
          </div>
        </div>

        <app-code-block [code]="lombokCode" language="java" />
      </section>

      <!-- SECTION 7: Interview Tips -->
      <section class="section">
        <h2 class="section-title">Interview Tips</h2>
        <ul class="tips-list">
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Contract question:</strong> "If two objects are equal, must they have the same hashCode?" — YES. The reverse is NOT required.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Broken scenario:</strong> Describe adding a custom object to a HashMap without overriding hashCode — you'll add duplicates because each call computes a different bucket.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>== vs equals():</strong> <code>==</code> compares references; <code>equals()</code> compares logical content. String literals may share references due to interning.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Records:</strong> Java 16+ records auto-generate equals/hashCode based on all components — ideal for value objects and DTOs.</span>
          </li>
          <li>
            <app-icon name="alert-circle" [size]="14" />
            <span><strong>Objects.equals():</strong> Use <code>Objects.equals(a, b)</code> for null-safe comparison instead of <code>a.equals(b)</code> which throws NPE when a is null.</span>
          </li>
        </ul>
      </section>

    </app-tutorial-layout>
  `,
  styles: [`
    .section { margin-bottom: 2.5rem; }
    .section-title { font-size: 1.2rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; }
    .section-desc { color: #94a3b8; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem; }
    .section-desc code { background: #1e293b; padding: 1px 5px; border-radius: 3px; color: #7dd3fc; font-size: 0.85em; }

    /* Methods Grid */
    .methods-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
    .method-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 0.75rem; }
    .method-card.highlight { border-color: #22c55e33; }
    .method-sig { font-family: monospace; font-size: 0.8rem; color: #4ade80; margin-bottom: 0.35rem; font-weight: 600; }
    .method-desc { font-size: 0.78rem; color: #94a3b8; }

    /* Contract Cards */
    .contract-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
    @media (max-width: 600px) { .contract-cards { grid-template-columns: 1fr; } }
    .contract-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; padding: 1rem; }
    .contract-card h3 { font-size: 0.95rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.75rem; }
    .contract-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 900; margin-bottom: 0.75rem; }
    .contract-icon.equals { background: #22c55e22; color: #4ade80; }
    .contract-icon.hash { background: #3b82f622; color: #60a5fa; }
    .contract-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
    .contract-list li { font-size: 0.82rem; color: #94a3b8; }
    .contract-list li strong { color: #e2e8f0; }

    .warning-box { display: flex; align-items: flex-start; gap: 0.5rem; background: #7f1d1d22; border: 1px solid #dc262644; border-radius: 8px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.85rem; color: #fca5a5; }
    .warning-box strong { color: #f87171; }

    /* Visualizer */
    .viz-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 1.25rem; margin-bottom: 1rem; }
    .viz-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
    .toggle-group { display: flex; gap: 0; border: 1px solid #334155; border-radius: 8px; overflow: hidden; }
    .toggle-btn { padding: 0.4rem 0.9rem; background: transparent; border: none; color: #94a3b8; cursor: pointer; font-size: 0.8rem; transition: all 0.2s; }
    .toggle-btn.active { background: #22c55e; color: #fff; font-weight: 600; }
    .impl-badge { font-size: 0.75rem; padding: 3px 10px; border-radius: 20px; font-weight: 600; }
    .impl-badge.correct { background: #22c55e22; color: #4ade80; border: 1px solid #22c55e44; }
    .impl-badge.broken { background: #dc262622; color: #f87171; border: 1px solid #dc262644; }

    .add-controls { margin-bottom: 1rem; }
    .point-inputs { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
    .point-inputs label { font-size: 0.85rem; color: #94a3b8; display: flex; align-items: center; gap: 0.4rem; }
    .action-btn { padding: 0.4rem 0.9rem; border-radius: 6px; border: none; cursor: pointer; font-size: 0.82rem; font-weight: 600; transition: all 0.2s; }
    .add-btn { background: #22c55e; color: #fff; }
    .add-btn:hover { background: #16a34a; }
    .reset-btn { background: #334155; color: #94a3b8; }
    .reset-btn:hover { background: #475569; }
    .set-size { font-size: 0.82rem; color: #94a3b8; }
    .set-size strong { color: #e2e8f0; }

    .buckets-container { display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1rem; }
    .bucket { min-width: 70px; background: #1e293b; border-radius: 8px; overflow: hidden; }
    .bucket-label { background: #334155; padding: 4px 6px; font-size: 0.7rem; color: #94a3b8; text-align: center; font-weight: 600; }
    .bucket-items { padding: 4px; display: flex; flex-direction: column; gap: 3px; min-height: 30px; }
    .bucket-item { background: #22c55e33; border: 1px solid #22c55e55; border-radius: 4px; padding: 3px 5px; font-size: 0.72rem; color: #4ade80; font-family: monospace; text-align: center; }
    .bucket-empty { font-size: 0.75rem; color: #475569; text-align: center; padding: 4px; }

    .viz-status { font-size: 0.82rem; color: #4ade80; background: #22c55e11; border: 1px solid #22c55e33; border-radius: 6px; padding: 0.5rem 0.75rem; }
    .viz-status.error { color: #fca5a5; background: #dc262611; border-color: #dc262633; }

    .tip-row { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: #94a3b8; padding: 0.5rem 0; }
    .tip-row code { background: #1e293b; padding: 1px 5px; border-radius: 3px; color: #7dd3fc; }

    /* Alternatives */
    .alternatives-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
    .alt-card { background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; padding: 0.9rem; }
    .alt-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-bottom: 0.6rem; }
    .alt-card h4 { font-size: 0.88rem; font-weight: 700; color: #e2e8f0; margin-bottom: 0.35rem; }
    .alt-card p { font-size: 0.78rem; color: #94a3b8; margin-bottom: 0.5rem; line-height: 1.4; }
    .alt-verdict { font-size: 0.72rem; font-weight: 600; padding: 2px 8px; border-radius: 20px; display: inline-block; }
    .alt-verdict.avoid { background: #7f1d1d44; color: #f87171; }
    .alt-verdict.ok { background: #1e3a5f44; color: #60a5fa; }
    .alt-verdict.preferred { background: #14532d44; color: #4ade80; }
    .alt-verdict.modern { background: #3b0764aa; color: #c084fc; }

    /* Comparison Table */
    .comparison-table { background: #0f172a; border: 1px solid #1e293b; border-radius: 10px; overflow: hidden; margin-bottom: 1rem; font-size: 0.82rem; }
    .table-header { display: grid; grid-template-columns: 1.5fr 1fr 1fr; background: #1e293b; padding: 0.6rem 1rem; font-weight: 700; color: #e2e8f0; gap: 0.5rem; }
    .table-row { display: grid; grid-template-columns: 1.5fr 1fr 1fr; padding: 0.5rem 1rem; gap: 0.5rem; border-top: 1px solid #1e293b; }
    .table-row:nth-child(even) { background: #0f172a; }
    .table-row span:first-child { color: #94a3b8; }
    .table-row span { color: #e2e8f0; }

    /* Tips */
    .tips-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .tips-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #94a3b8; background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 0.75rem; }
    .tips-list li strong { color: #e2e8f0; }
  `]
})
export class ObjectClassComponent {
  readonly gradient = 'linear-gradient(135deg, #14532d, #22c55e)';

  readonly keyMethods = [
    { signature: 'equals(Object o)', description: 'Logical equality comparison' },
    { signature: 'hashCode()', description: 'Hash bucket placement key' },
    { signature: 'toString()', description: 'Human-readable representation' },
    { signature: 'clone()', description: 'Shallow copy (use with care)' },
    { signature: 'getClass()', description: 'Runtime class metadata' },
    { signature: 'hashCode()', description: 'Object identity hash (default)' },
    { signature: 'notify() / notifyAll()', description: 'Thread coordination' },
    { signature: 'wait()', description: 'Thread wait on monitor' },
    { signature: 'finalize()', description: 'Pre-GC hook (deprecated)' },
  ];

  readonly alternatives = [
    { icon: '🧬', name: 'clone()', desc: 'Shallow copy, requires Cloneable, throws checked exception.', verdict: 'Avoid', verdictClass: 'avoid', color: '#7f1d1d44' },
    { icon: '🏗️', name: 'Copy Constructor', desc: 'new Point(other.x, other.y) — explicit, clear, and safe.', verdict: 'OK', verdictClass: 'ok', color: '#1e3a5f44' },
    { icon: '🟢', name: 'Java Record', desc: 'Immutable value objects with auto equals/hashCode/toString.', verdict: 'Preferred', verdictClass: 'preferred', color: '#14532d44' },
    { icon: '✨', name: 'Lombok @Value', desc: '@Value generates immutable class with all boilerplate.', verdict: 'Modern', verdictClass: 'modern', color: '#3b076444' },
  ];

  readonly comparisonRows = [
    { feature: 'Immutability', lombok: 'Optional (@Value)', record: '✅ Always' },
    { feature: 'equals/hashCode', lombok: '✅ Auto-generated', record: '✅ Auto-generated' },
    { feature: 'toString()', lombok: '✅ Auto-generated', record: '✅ Auto-generated' },
    { feature: 'Inheritance', lombok: '✅ Supported', record: '❌ Cannot extend class' },
    { feature: 'Java version', lombok: 'Any', record: '16+ (16 stable, 14 preview)' },
    { feature: 'Requires library', lombok: '⚠️ Yes', record: '❌ No (built-in)' },
  ];

  // --- Visualizer State ---
  readonly correctImpl = signal(true);
  readonly inputX = signal(1);
  readonly inputY = signal(2);
  readonly addedPoints = signal<{ x: number; y: number }[]>([]);

  readonly BUCKET_COUNT = 8;

  readonly buckets = computed(() => {
    const pts = this.addedPoints();
    const correct = this.correctImpl();
    const result: { x: number; y: number }[][] = Array.from({ length: this.BUCKET_COUNT }, () => []);

    for (const p of pts) {
      const hash = correct
        ? (31 * p.x + p.y) & (this.BUCKET_COUNT - 1)
        : 0; // broken: always bucket 0
      result[hash].push(p);
    }
    return result;
  });

  readonly setSize = computed(() => {
    const pts = this.addedPoints();
    const correct = this.correctImpl();
    if (correct) {
      // deduplication works — count unique
      const seen = new Set(pts.map(p => `${p.x},${p.y}`));
      return seen.size;
    } else {
      // broken: no deduplication because all land in bucket 0 with different identities
      return pts.length;
    }
  });

  setImpl(val: boolean) { this.correctImpl.set(val); this.resetBuckets(); }
  setX(event: Event) { this.inputX.set(parseInt((event.target as HTMLInputElement).value) || 0); }
  setY(event: Event) { this.inputY.set(parseInt((event.target as HTMLInputElement).value) || 0); }

  addPoint() {
    const p = { x: this.inputX(), y: this.inputY() };
    this.addedPoints.update(pts => {
      if (this.correctImpl()) {
        // simulate correct set: don't add if already exists
        const exists = pts.some(pt => pt.x === p.x && pt.y === p.y);
        if (exists) return pts;
      }
      return [...pts, p];
    });
  }

  resetBuckets() { this.addedPoints.set([]); }

  // --- Code Snippets ---
  readonly objectHierarchyCode = `// Every class implicitly extends Object
class Point { int x, y; }
// is equivalent to:
class Point extends Object { int x, y; }

// Object methods are available on every instance
Point p = new Point();
System.out.println(p.getClass().getName()); // "Point"
System.out.println(p.hashCode());           // identity hash, e.g. 366712642
System.out.println(p.toString());           // "Point@15db9742"`;

  readonly equalsHashCodeCode = `public class Point {
    private final int x, y;

    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;                    // reflexive fast path
        if (!(o instanceof Point other)) return false; // null-safe + type check
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);  // consistent with equals
    }
}

// Usage in HashSet — works correctly
Set<Point> set = new HashSet<>();
set.add(new Point(1, 2));
set.add(new Point(1, 2));  // duplicate — NOT added
System.out.println(set.size()); // 1 ✅`;

  readonly brokenVsCorrectCode = `// BROKEN — only equals() overridden, hashCode() returns default identity hash
class BrokenPoint {
    int x, y;
    BrokenPoint(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof BrokenPoint bp)) return false;
        return x == bp.x && y == bp.y;
    }
    // hashCode() NOT overridden → two "equal" objects land in different buckets
}

Set<BrokenPoint> set = new HashSet<>();
set.add(new BrokenPoint(1, 2));
set.add(new BrokenPoint(1, 2)); // same values, different hash → BOTH stored!
System.out.println(set.size()); // 2 ❌ (expected 1)`;

  readonly toStringCode = `// Default Object.toString() → "ClassName@hexHashCode"
Point p = new Point(3, 4);
System.out.println(p); // Point@6d06d69c  ← useless

// Override toString() for meaningful output
@Override
public String toString() {
    return "Point(" + x + ", " + y + ")";
}
System.out.println(p); // Point(3, 4) ✅

// toString() called implicitly in:
String s = "Location: " + p;        // string concat
System.out.println(p);              // println
logger.info("Created {}", p);       // most loggers`;

  readonly recordCode = `// Java 16+ Record — auto-generates equals, hashCode, toString, accessors
public record Point(int x, int y) { }

Point a = new Point(1, 2);
Point b = new Point(1, 2);
System.out.println(a.equals(b)); // true ✅
System.out.println(a.hashCode() == b.hashCode()); // true ✅
System.out.println(a);           // Point[x=1, y=2] ✅

// Records are immutable — no setters
// a.x = 5; // compile error

// Copy with changed field using withers (manual or via Lombok)
// record Point(int x, int y) {
//     Point withX(int newX) { return new Point(newX, y); }
// }`;

  readonly lombokCode = `// Lombok @Data (mutable) — generates equals/hashCode/toString/getters/setters
@Data
public class Point {
    private int x;
    private int y;
}

// Lombok @Value (immutable) — like a manual record
@Value
public class Point {
    int x;
    int y;
}

// Java Record (preferred for immutable value objects, Java 16+)
public record Point(int x, int y) { }

// All three produce the same logical behavior for equals/hashCode/toString`;
}
