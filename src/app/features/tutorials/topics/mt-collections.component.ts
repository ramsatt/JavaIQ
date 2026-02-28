import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-collections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Concurrent Collections" subtitle="Thread-safe data structures. ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList, and when to use each." badge="MULTITHREADING" gradient="linear-gradient(135deg, #0369a1, #38bdf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-sky" /> Concurrent Collections</h2>
        <div class="prose"><p>Java provides thread-safe collections in <code>java.util.concurrent</code> that outperform synchronized wrappers.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Collections</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">ConcurrentHashMap</h3><app-code-block [code]="codeCHM" /></div>
          <div class="op-card"><h3 class="op-title">BlockingQueue</h3><app-code-block [code]="codeQueue" /></div>
          <div class="op-card"><h3 class="op-title">CopyOnWrite</h3><app-code-block [code]="codeCow" /></div>
          <div class="op-card"><h3 class="op-title">Choosing Right</h3><app-code-block [code]="codeChoose" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-sky { color: #0284c7; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #0284c7; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtCollectionsComponent {
  codeIntro = `// ❌ Synchronized wrapper (locks entire map)
Map<String, Integer> map = Collections.synchronizedMap(new HashMap<>());

// ✅ ConcurrentHashMap (segment-level locking)
ConcurrentMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
map.computeIfAbsent("key", k -> expensiveCompute(k));`;
  codeCHM = `ConcurrentHashMap<String, AtomicInteger> wordCount = new ConcurrentHashMap<>();

// Atomic operations (no external sync needed)
wordCount.computeIfAbsent("hello", k -> new AtomicInteger()).incrementAndGet();
wordCount.merge("hello", new AtomicInteger(1), (old, v) -> { old.incrementAndGet(); return old; });

// Bulk operations (parallel)
wordCount.forEach(2, (key, value) -> log(key + "=" + value));
long sum = wordCount.reduceValues(2, AtomicInteger::get, Long::sum);
String max = wordCount.searchKeys(2, key -> key.length() > 10 ? key : null);

// ConcurrentHashMap.newKeySet() — thread-safe Set
Set<String> set = ConcurrentHashMap.newKeySet();`;
  codeQueue = `// BlockingQueue — producer-consumer pattern
BlockingQueue<Task> queue = new LinkedBlockingQueue<>(100);

// Producer thread
queue.put(new Task());       // blocks if full
queue.offer(task, 1, TimeUnit.SECONDS); // timeout

// Consumer thread
Task task = queue.take();    // blocks if empty
Task task = queue.poll(1, TimeUnit.SECONDS);

// Implementations:
// LinkedBlockingQueue  — unbounded or bounded
// ArrayBlockingQueue   — bounded, fair ordering
// PriorityBlockingQueue — priority-ordered
// DelayQueue           — elements available after delay
// SynchronousQueue     — direct handoff (no buffer)`;
  codeCow = `// CopyOnWriteArrayList: copy on every write
// ✅ Great for: many reads, rare writes
// ❌ Bad for: frequent writes (copies entire array!)
List<String> listeners = new CopyOnWriteArrayList<>();
listeners.add("listener1");  // copies entire array!

// Iterators never throw ConcurrentModificationException
for (String l : listeners) {
    // safe to iterate while others modify
}

// CopyOnWriteArraySet
Set<EventListener> set = new CopyOnWriteArraySet<>();`;
  codeChoose = `// Choosing the right concurrent collection:

// Key-Value store → ConcurrentHashMap
// Always. Never use synchronized HashMap.

// Queue (producer-consumer) → BlockingQueue
// LinkedBlockingQueue for general use

// List (read-heavy) → CopyOnWriteArrayList
// Only when reads >> writes

// Sorted set → ConcurrentSkipListSet
// Thread-safe TreeSet alternative

// Deque → ConcurrentLinkedDeque
// Non-blocking, unbounded deque`;
}
