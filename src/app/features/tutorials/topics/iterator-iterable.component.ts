import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-iterator-iterable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Iterator & Iterable"
      subtitle="Understand how for-each works under the hood. Implement Iterable to make custom classes work with for-each, and use Iterator safely with remove()."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #134e4a, #14b8a6)">

      <!-- Section 1: for-each Under the Hood -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-teal" /> The for-each Loop Under the Hood
        </h2>
        <div class="prose">
          <p>
            The <code>for-each</code> loop (enhanced for loop) is syntactic sugar. The compiler rewrites it into an
            <strong>Iterator while-loop</strong> at compile time. For this to work, the object must implement
            <code>Iterable&lt;T&gt;</code>, which has a single method: <code>iterator()</code> returning an
            <code>Iterator&lt;T&gt;</code>.
          </p>
          <ul>
            <li><strong>Iterable&lt;T&gt;</strong> — one method: <code>Iterator&lt;T&gt; iterator()</code></li>
            <li><strong>Iterator&lt;T&gt;</strong> — <code>boolean hasNext()</code>, <code>T next()</code>, optional <code>void remove()</code></li>
            <li>Arrays also work with for-each but are NOT <code>Iterable</code> — the compiler handles them specially.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Iterator Interface -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-teal" /> Iterator Interface
        </h2>
        <div class="prose">
          <p>
            <code>Iterator&lt;T&gt;</code> has three methods. <code>hasNext()</code> returns <code>true</code> if more
            elements remain. <code>next()</code> returns the next element and advances the cursor — throws
            <code>NoSuchElementException</code> if exhausted. <code>remove()</code> removes the last element returned by
            <code>next()</code> and throws <code>IllegalStateException</code> if <code>next()</code> was not called first.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: ConcurrentModificationException -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="alert-triangle" [size]="28" css="icon-teal" /> ConcurrentModificationException
        </h2>
        <div class="prose">
          <p>
            Modifying a collection (add/remove) while iterating with <code>for-each</code> causes
            <code>ConcurrentModificationException</code>. The collection's internal <strong>modCount</strong> is checked
            on every <code>next()</code> call. There are three safe approaches: use <code>Iterator.remove()</code>,
            collect items then call <code>removeAll()</code>, or use <code>removeIf()</code> (Java 8+).
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Implementing Iterable -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-teal" /> Implementing Iterable
        </h2>
        <div class="prose">
          <p>
            Any class can be made compatible with <code>for-each</code> by implementing <code>Iterable&lt;T&gt;</code>
            and providing a custom <code>Iterator</code>. This is commonly used for custom data structures like ranges,
            trees, or domain objects that wrap a sequence.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: ListIterator -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="repeat" [size]="28" css="icon-teal" /> ListIterator
        </h2>
        <div class="prose">
          <p>
            <code>ListIterator&lt;E&gt;</code> extends <code>Iterator</code> and is specific to <code>List</code>. It
            supports <strong>bidirectional traversal</strong> with <code>hasPrevious()</code> and <code>previous()</code>,
            and allows <code>add()</code> and <code>set()</code> during iteration.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-teal" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">ConcurrentModificationException</h4>
              <p class="tip-desc">Never add or remove from a collection during a <code>for-each</code> loop — it uses <code>Iterator</code> internally and will throw CME. Use <code>Iterator.remove()</code> or <code>list.removeIf(predicate)</code> instead.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Fail-Fast vs Fail-Safe Iterators</h4>
              <p class="tip-desc"><code>ArrayList</code> is <strong>fail-fast</strong> — it throws CME on structural modification. <code>CopyOnWriteArrayList</code> is <strong>fail-safe</strong> — it iterates over a snapshot of the data and never throws CME, at the cost of memory and stale reads.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Iterable vs Iterator</h4>
              <p class="tip-desc"><code>Iterable</code> is a factory — it produces an <code>Iterator</code> each time <code>iterator()</code> is called, so it can be iterated multiple times. <code>Iterator</code> has state and is single-use — once exhausted, it cannot be reset.</p>
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
    .icon-teal { color: #14b8a6; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #f0fdfa; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #134e4a;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #14b8a6; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f0fdfa; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #134e4a; }
  `
})
export class IteratorIterableComponent {

  code1 = `List<String> names = List.of("Alice", "Bob", "Carol");

// What you write:
for (String name : names) {
    System.out.println(name);
}

// What the compiler generates:
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    String name = it.next();
    System.out.println(name);
}

// Iterable<T> — the contract your class must fulfill
public interface Iterable<T> {
    Iterator<T> iterator();
}

// Iterator<T> — the cursor that walks the sequence
public interface Iterator<T> {
    boolean hasNext();   // Is there a next element?
    T next();            // Return next and advance cursor
    default void remove() { throw new UnsupportedOperationException(); }
}`;

  code2 = `List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

Iterator<Integer> it = numbers.iterator();

// Basic traversal
while (it.hasNext()) {
    Integer n = it.next();
    System.out.println(n);
}
// Calling next() after exhaustion:
// it.next(); // throws NoSuchElementException!

// Safe remove — delete even numbers during iteration
Iterator<Integer> it2 = numbers.iterator();
while (it2.hasNext()) {
    Integer n = it2.next();
    if (n % 2 == 0) {
        it2.remove(); // removes the element last returned by next()
    }
}
System.out.println(numbers); // [1, 3, 5]

// IllegalStateException example:
Iterator<Integer> bad = numbers.iterator();
// bad.remove(); // IllegalStateException — next() not called yet`;

  code3 = `List<String> list = new ArrayList<>(Arrays.asList("a", "bb", "ccc", "d"));

// BAD — throws ConcurrentModificationException
for (String s : list) {
    if (s.length() == 1) {
        list.remove(s); // modCount changes → CME on next iteration!
    }
}

// FIX 1: Use Iterator.remove()
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    if (it.next().length() == 1) {
        it.remove(); // safe — updates modCount internally
    }
}

// FIX 2: Collect then removeAll
List<String> toRemove = new ArrayList<>();
for (String s : list) {
    if (s.length() == 1) toRemove.add(s);
}
list.removeAll(toRemove);

// FIX 3: removeIf (Java 8+) — cleanest approach
list.removeIf(s -> s.length() == 1);
System.out.println(list); // [bb, ccc]

// Also safe: iterate over a copy
for (String s : new ArrayList<>(list)) {
    if (s.length() == 1) list.remove(s);
}`;

  code4 = `// Custom class implementing Iterable<Integer>
public class NumberRange implements Iterable<Integer> {
    private final int start;
    private final int end;   // inclusive

    public NumberRange(int start, int end) {
        this.start = start;
        this.end   = end;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            private int current = start;

            @Override
            public boolean hasNext() {
                return current <= end;
            }

            @Override
            public Integer next() {
                if (!hasNext()) throw new NoSuchElementException();
                return current++;
            }
        };
    }
}

// Now it works in for-each!
NumberRange range = new NumberRange(1, 5);
for (int n : range) {
    System.out.print(n + " "); // 1 2 3 4 5
}

// Can be iterated multiple times (each call to iterator() creates a new cursor)
for (int n : range) {
    System.out.print(n + " "); // 1 2 3 4 5  (again)
}`;

  code5 = `List<String> words = new ArrayList<>(Arrays.asList("Java", "is", "great"));

// Forward traversal with ListIterator
ListIterator<String> lit = words.listIterator();
while (lit.hasNext()) {
    String w = lit.next();
    lit.set(w.toUpperCase()); // replace in place
}
System.out.println(words); // [JAVA, IS, GREAT]

// Backward traversal — start at the end
ListIterator<String> rev = words.listIterator(words.size());
while (rev.hasPrevious()) {
    System.out.print(rev.previous() + " "); // GREAT IS JAVA
}

// add() inserts before the element that would be returned by next()
ListIterator<String> ins = words.listIterator();
ins.next();          // moves past "JAVA"
ins.add("ROCKS");   // inserts after "JAVA"
System.out.println(words); // [JAVA, ROCKS, IS, GREAT]

// Useful methods:
// lit.nextIndex()     — index of element next() would return
// lit.previousIndex() — index of element previous() would return`;
}
