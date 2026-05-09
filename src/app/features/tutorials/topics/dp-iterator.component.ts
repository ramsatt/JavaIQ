import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-iterator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Iterator" subtitle="Provide a way to access elements of a collection sequentially without exposing its underlying structure." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Iterator?</h2>
        <div class="prose">
          <p>The <strong>Iterator</strong> pattern provides a standard way to traverse a collection without knowing whether it's a list, tree, graph, or custom data structure. The collection implements <code>Iterable</code>; the iterator implements <code>Iterator</code>.</p>
          <p>Java bakes this pattern into the language — every <code>for-each</code> loop uses it under the hood.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Iterator</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Iterable Collection</h3><app-code-block [code]="codeIterable" /></div>
          <div class="op-card"><h3 class="op-title">Filtered Iterator</h3><app-code-block [code]="codeFiltered" /></div>
          <div class="op-card"><h3 class="op-title">Java Built-ins</h3><app-code-block [code]="codeBuiltin" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; color: #4338ca; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpIteratorComponent {
  codeIntro = `// Client traverses without knowing the structure
for (Book book : library) {          // for-each
    System.out.println(book.title());
}
// Works whether library is backed by an array, linked list,
// binary tree, or database cursor — client doesn't care.`;

  codeCustom = `// Custom Iterator over a fixed array
class NumberIterator implements Iterator<Integer> {
    private final int[] data;
    private int cursor = 0;

    NumberIterator(int[] data) { this.data = data; }

    @Override
    public boolean hasNext() { return cursor < data.length; }

    @Override
    public Integer next() {
        if (!hasNext()) throw new NoSuchElementException();
        return data[cursor++];
    }
}

// Usage
Iterator<Integer> it = new NumberIterator(new int[]{1, 2, 3});
while (it.hasNext()) {
    System.out.println(it.next()); // 1  2  3
}`;

  codeIterable = `// Make a custom collection for-each compatible
class NumberRange implements Iterable<Integer> {
    private final int start, end;

    NumberRange(int start, int end) {
        this.start = start; this.end = end;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = start;
            public boolean hasNext() { return current <= end; }
            public Integer next()    { return current++; }
        };
    }
}

// Now it works with for-each
for (int n : new NumberRange(1, 5)) {
    System.out.print(n + " "); // 1 2 3 4 5
}`;

  codeFiltered = `// Iterator that filters on the fly
class EvenIterator implements Iterator<Integer> {
    private final Iterator<Integer> source;
    private Integer next;

    EvenIterator(Iterator<Integer> source) {
        this.source = source;
        advance();
    }

    private void advance() {
        next = null;
        while (source.hasNext()) {
            int val = source.next();
            if (val % 2 == 0) { next = val; break; }
        }
    }

    public boolean hasNext() { return next != null; }
    public Integer next() {
        Integer result = next;
        advance();
        return result;
    }
}

List<Integer> nums = List.of(1,2,3,4,5,6);
Iterator<Integer> evens = new EvenIterator(nums.iterator());
evens.forEachRemaining(System.out::println); // 2 4 6`;

  codeBuiltin = `// Java's built-in Iterator usage
List<String> list = new ArrayList<>(List.of("a","b","c"));
Iterator<String> it = list.iterator();

while (it.hasNext()) {
    String s = it.next();
    if (s.equals("b")) it.remove(); // safe removal during iteration
}
System.out.println(list); // [a, c]

// ListIterator — bidirectional
ListIterator<String> li = list.listIterator(list.size());
while (li.hasPrevious()) {
    System.out.print(li.previous() + " "); // c a (reverse)
}

// Streams use Spliterator internally (parallel-capable iterator)
list.stream().filter(s -> !s.isEmpty()).forEach(System.out::println);`;
}
