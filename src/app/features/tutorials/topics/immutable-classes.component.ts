import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-immutable-classes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Immutable Classes"
      subtitle="Design thread-safe, side-effect-free immutable objects. Learn the 5 rules for immutability, defensive copying, and why String, Integer, and BigDecimal are immutable."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a5f, #0ea5e9)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shield" [size]="28" css="icon-sky" /> What Makes a Class Immutable?
        </h2>
        <div class="prose">
          <p>
            An <strong>immutable object</strong> is one whose state cannot be changed after construction. Java's most well-known immutable classes include <code>String</code>, <code>Integer</code>, <code>LocalDate</code>, and <code>BigDecimal</code>. There are <strong>5 rules</strong> to follow:
          </p>
          <ul>
            <li><strong>Rule 1:</strong> Declare the class <code>final</code> — prevents subclassing that could override methods and expose mutable state.</li>
            <li><strong>Rule 2:</strong> All fields must be <code>private final</code> — guarantees they are assigned exactly once in the constructor.</li>
            <li><strong>Rule 3:</strong> No setters — never expose any method that modifies fields or any object referred to by a field.</li>
            <li><strong>Rule 4:</strong> Defensive copy of mutable inputs in the constructor — if a caller passes a mutable object (like <code>Date</code>), copy it.</li>
            <li><strong>Rule 5:</strong> Defensive copy of mutable return values — if you return a reference to a mutable internal field, return a copy.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-sky" /> Building an Immutable Class
        </h2>
        <div class="prose">
          <p>
            The <strong>Money</strong> class below demonstrates a well-formed immutable class. It holds an amount and currency and also carries a mutable <code>Date</code> to illustrate why defensive copying is critical.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-sky" /> Defensive Copying
        </h2>
        <div class="prose">
          <p>
            Without defensive copying, a caller can mutate the <code>Date</code> you stored internally, breaking immutability. Always copy mutable inputs on the way <strong>in</strong> and on the way <strong>out</strong>.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-sky" /> Immutability with Collections
        </h2>
        <div class="prose">
          <p>
            A <code>final</code> reference to a <code>List</code> is not the same as an immutable list. Use <code>Collections.unmodifiableList()</code> for a read-only <em>view</em>, or <code>List.copyOf()</code> (Java 10+) for a true defensive snapshot.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-sky" /> Benefits of Immutability
        </h2>
        <div class="prose">
          <ul>
            <li><strong>Thread-safe without synchronization</strong> — no shared mutable state means no race conditions.</li>
            <li><strong>Safe as HashMap / HashSet keys</strong> — hashCode never changes, so bucket placement stays stable.</li>
            <li><strong>Freely shared</strong> — the same instance can be passed everywhere without defensive copies by callers.</li>
            <li><strong>Easier to reason about</strong> — you can be certain the object you received is the same object later.</li>
          </ul>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-sky" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Why is String immutable?</h4>
              <p class="tip-desc">Security: class loaders rely on string immutability. HashMap safety: the hashCode is cached and never changes. Thread-safety: multiple threads can share a <code>String</code> without synchronization.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Shallow immutability trap</h4>
              <p class="tip-desc">A <code>final</code> field that holds a mutable object (e.g., <code>final List&lt;String&gt; items</code>) is NOT immutable. The reference cannot change, but the list contents can. Always use defensive copies and unmodifiable wrappers.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Collections.unmodifiableList vs List.copyOf</h4>
              <p class="tip-desc"><code>Collections.unmodifiableList()</code> is a <em>view</em> — if the original list is modified, the view reflects it. <code>List.copyOf()</code> makes an independent snapshot, so changes to the original have no effect.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-sky { color: #0ea5e9; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code { background: #f0f9ff; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #075985; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #0ea5e9; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f0f9ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #075985; }
  `
})
export class ImmutableClassesComponent {
  code1 = `// The 5 rules in one glance
// Rule 1: class is final
public final class ImmutablePoint {
    // Rule 2: fields are private final
    private final int x;
    private final int y;

    public ImmutablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Rule 3: no setters — only getters
    public int getX() { return x; }
    public int getY() { return y; }

    // "Wither" methods return a NEW object
    public ImmutablePoint withX(int newX) {
        return new ImmutablePoint(newX, this.y);
    }
}

// Known immutable classes in Java
String s = "hello";          // immutable
Integer i = 42;              // immutable
LocalDate d = LocalDate.now(); // immutable
BigDecimal bd = new BigDecimal("3.14"); // immutable`;

  code2 = `// Immutable Money class with a mutable Date field
public final class Money {
    private final long amount;       // in cents
    private final String currency;
    private final Date createdAt;    // mutable — needs defensive copy

    public Money(long amount, String currency, Date createdAt) {
        if (currency == null) throw new NullPointerException("currency");
        this.amount   = amount;
        this.currency = currency;
        // Rule 4: defensive copy on the way IN
        this.createdAt = new Date(createdAt.getTime());
    }

    public long   getAmount()   { return amount; }
    public String getCurrency() { return currency; }

    // Rule 5: defensive copy on the way OUT
    public Date getCreatedAt() {
        return new Date(createdAt.getTime());
    }

    // "Wither" — returns a new object, does not mutate this
    public Money withAmount(long newAmount) {
        return new Money(newAmount, this.currency, this.createdAt);
    }

    @Override
    public String toString() {
        return amount + " " + currency;
    }
}`;

  code3 = `// PROBLEM: no defensive copy — immutability broken
public final class BadEvent {
    private final Date date;
    public BadEvent(Date date) {
        this.date = date; // stores the SAME reference!
    }
    public Date getDate() { return date; } // leaks the reference!
}

Date d = new Date();
BadEvent e = new BadEvent(d);
d.setTime(0); // mutates the stored date — immutability violated!

// FIX: defensive copy in constructor AND getter
public final class GoodEvent {
    private final Date date;

    public GoodEvent(Date date) {
        this.date = new Date(date.getTime()); // copy IN
    }

    public Date getDate() {
        return new Date(date.getTime()); // copy OUT
    }
}

// Modern alternative: use java.time (inherently immutable)
public final class ModernEvent {
    private final Instant instant;
    public ModernEvent(Instant instant) {
        this.instant = instant; // Instant is immutable — no copy needed
    }
    public Instant getInstant() { return instant; }
}`;

  code4 = `import java.util.*;

// Mutable source list
List<String> source = new ArrayList<>(List.of("a", "b", "c"));

// unmodifiableList: read-only VIEW of the original
List<String> view = Collections.unmodifiableList(source);
// view.add("d"); // throws UnsupportedOperationException

source.add("d");    // allowed — modifies the underlying list
System.out.println(view); // [a, b, c, d] — view reflects the change!

// List.copyOf: true independent snapshot (Java 10+)
List<String> snapshot = List.copyOf(source);
source.add("e");
System.out.println(snapshot); // [a, b, c, d] — NOT affected

// Using in an immutable class
public final class Classroom {
    private final List<String> students;

    public Classroom(List<String> students) {
        // defensive copy + unmodifiable wrapper
        this.students = List.copyOf(students);
    }

    public List<String> getStudents() {
        return students; // already unmodifiable — safe to return
    }
}`;

  code5 = `import java.util.*;

// Immutable Point — safe as HashMap key
public final class Point {
    private final int x, y;
    public Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public int hashCode() { return 31 * x + y; }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }
}

// Safe as HashMap key — hashCode never changes
Map<Point, String> grid = new HashMap<>();
Point origin = new Point(0, 0);
grid.put(origin, "start");
System.out.println(grid.get(new Point(0, 0))); // "start"

// Thread-safe — share freely across threads
Point shared = new Point(10, 20);
Runnable task = () -> System.out.println(shared.hashCode());
new Thread(task).start();
new Thread(task).start(); // zero risk of race conditions`;
}
