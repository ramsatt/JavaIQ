import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-collections-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Collections: Queue &amp; Deque"
      subtitle="Master FIFO queues, priority queues, and double-ended deques. Learn ArrayDeque, LinkedList, PriorityQueue, and when to use each."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a8a, #3b82f6)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="arrow-right" [size]="28" css="icon-blue" /> Queue Interface
        </h2>
        <div class="topic-hero-container">
          <img src="/assets/images/topics/collections-queue.png" alt="Queue Collections Visualized" class="topic-hero-image" />
        </div>
        <div class="prose">
          <p>
            A <strong>Queue</strong> is a FIFO (first-in, first-out) data structure. The <code>Queue</code> interface provides two groups of methods for every operation — one that throws an exception on failure and one that returns a special value:
          </p>
          <ul>
            <li><strong>Enqueue:</strong> <code>add(e)</code> throws / <code>offer(e)</code> returns <code>false</code></li>
            <li><strong>Dequeue:</strong> <code>remove()</code> throws / <code>poll()</code> returns <code>null</code></li>
            <li><strong>Peek:</strong> <code>element()</code> throws / <code>peek()</code> returns <code>null</code></li>
          </ul>
          <p>Prefer <code>offer</code>, <code>poll</code>, and <code>peek</code> in production code — they return null/false instead of throwing on an empty or full queue.</p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-blue" /> ArrayDeque — Preferred Queue
        </h2>
        <div class="prose">
          <p>
            <strong>ArrayDeque</strong> is the go-to general-purpose queue/stack. It is backed by a resizable circular array, has <strong>no null elements</strong>, and is faster than <code>LinkedList</code> for both queue and stack operations. It is NOT thread-safe.
          </p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="bar-chart-2" [size]="28" css="icon-blue" /> PriorityQueue
        </h2>
        <div class="prose">
          <p>
            <strong>PriorityQueue</strong> does NOT follow FIFO. Elements are ordered by <strong>natural ordering</strong> (min-heap by default) or by a provided <code>Comparator</code>. The <em>smallest</em> element is always at the head. Common use cases: task scheduling, Dijkstra's algorithm, top-K problems.
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="shuffle" [size]="28" css="icon-blue" /> Deque — Double-Ended Queue
        </h2>
        <div class="prose">
          <p>
            A <strong>Deque</strong> (double-ended queue) supports insertion and removal at <em>both ends</em>. Use <code>ArrayDeque</code> as the implementation. It can act as a queue (FIFO) or a stack (LIFO) depending on which methods you use.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="cpu" [size]="28" css="icon-blue" /> BlockingQueue (Brief)
        </h2>
        <div class="prose">
          <p>
            <code>java.util.concurrent.BlockingQueue</code> adds thread-safe blocking operations: <code>put()</code> blocks when the queue is full, and <code>take()</code> blocks when it is empty. Ideal for producer-consumer patterns without manual synchronization.
          </p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-blue" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">ArrayDeque vs LinkedList as Queue</h4>
              <p class="tip-desc"><code>ArrayDeque</code> is faster: no per-node memory overhead, better CPU cache locality, and no null checks. Use <code>ArrayDeque</code> whenever you need a queue or stack. <code>LinkedList</code> as a queue is legacy practice.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">PriorityQueue is NOT thread-safe</h4>
              <p class="tip-desc">Use <code>java.util.concurrent.PriorityBlockingQueue</code> in concurrent code. <code>PriorityQueue</code> also does NOT guarantee ordering of elements with equal priority — iteration order is undefined.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Stack class is legacy</h4>
              <p class="tip-desc">The old <code>java.util.Stack</code> extends <code>Vector</code> (synchronized, slow). Use <code>ArrayDeque</code> via the <code>Deque</code> interface for a modern, unsynchronized stack. The <code>Deque</code> interface even documents the stack methods: <code>push</code>, <code>pop</code>, <code>peek</code>.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .topic-hero-container { text-align: center; margin: 24px 0; }
    .topic-hero-image { width: 100%; max-width: 650px; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border: 1px solid #D6DDD2; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-blue { color: #3b82f6; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code { background: #eff6ff; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1e3a8a; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #3b82f6; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #eff6ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #1e3a8a; }
  `
})
export class CollectionsQueueComponent {
  code1 = `import java.util.*;

// LinkedList implements both List and Queue
Queue<String> queue = new LinkedList<>();

// Enqueue — prefer offer() over add()
queue.offer("Alice");
queue.offer("Bob");
queue.offer("Carol");

// Peek — look at head without removing
System.out.println(queue.peek());   // "Alice"
System.out.println(queue.element()); // "Alice" (throws if empty)

// Dequeue — removes from head
String head = queue.poll();         // "Alice"  (returns null if empty)
String head2 = queue.remove();      // "Bob"    (throws if empty)

System.out.println(queue.size());   // 1
System.out.println(queue.isEmpty()); // false

// Iterate without removing
for (String s : queue) {
    System.out.println(s); // "Carol"
}

// Queue as a simple task processor
Queue<Runnable> tasks = new LinkedList<>();
tasks.offer(() -> System.out.println("Task 1"));
tasks.offer(() -> System.out.println("Task 2"));
while (!tasks.isEmpty()) {
    tasks.poll().run(); // FIFO order
}`;

  code2 = `import java.util.ArrayDeque;
import java.util.Deque;

// ── ArrayDeque as a QUEUE (FIFO) ──────────────────────────────────
Deque<String> queue = new ArrayDeque<>();

queue.addLast("Alice");   // enqueue at tail (same as offer())
queue.addLast("Bob");
queue.addLast("Carol");

String first = queue.pollFirst(); // dequeue from head → "Alice"
String peek  = queue.peekFirst(); // peek head → "Bob"

// Shorthand using Queue interface methods
queue.offer("Dave");   // addLast
queue.poll();          // pollFirst
queue.peek();          // peekFirst

// ── ArrayDeque as a STACK (LIFO) ──────────────────────────────────
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);   // addFirst — pushes to top
stack.push(20);
stack.push(30);

int top = stack.pop();   // pollFirst — pops from top → 30
int see = stack.peek();  // peekFirst → 20

// ── Why ArrayDeque beats LinkedList ───────────────────────────────
// - No per-node object overhead (saves memory)
// - Better CPU cache locality (contiguous array)
// - Does not permit null elements (safer — null from poll() means empty)
// - Benchmark: 40–50% faster for queue/stack workloads`;

  code3 = `import java.util.*;

// ── Min-Heap (default: natural ordering) ──────────────────────────
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(40);
minHeap.offer(10);
minHeap.offer(30);
minHeap.offer(20);

System.out.println(minHeap.peek());  // 10 — smallest always at head
System.out.println(minHeap.poll());  // 10
System.out.println(minHeap.poll());  // 20 — heap re-orders automatically

// ── Max-Heap (reverse order) ──────────────────────────────────────
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Comparator.reverseOrder());
maxHeap.offer(10);
maxHeap.offer(40);
maxHeap.offer(25);

System.out.println(maxHeap.poll()); // 40 — largest at head

// ── PriorityQueue with custom objects ─────────────────────────────
record Task(String name, int priority) {}

PriorityQueue<Task> taskQueue = new PriorityQueue<>(
    Comparator.comparingInt(Task::priority).reversed() // highest priority first
);
taskQueue.offer(new Task("Low-priority report",  1));
taskQueue.offer(new Task("Critical bug fix",    10));
taskQueue.offer(new Task("Feature request",      3));

while (!taskQueue.isEmpty()) {
    System.out.println(taskQueue.poll().name());
    // Critical bug fix → Feature request → Low-priority report
}`;

  code4 = `import java.util.*;

Deque<String> deque = new ArrayDeque<>();

// Add to BOTH ends
deque.addFirst("Middle");
deque.addFirst("Front");   // [Front, Middle]
deque.addLast("Back");     // [Front, Middle, Back]

// Peek both ends
System.out.println(deque.peekFirst()); // "Front"
System.out.println(deque.peekLast());  // "Back"

// Remove from both ends
String f = deque.pollFirst(); // "Front" → [Middle, Back]
String b = deque.pollLast();  // "Back"  → [Middle]

// ── Deque as Sliding Window (classic algorithm pattern) ────────────
// Keep track of max in a sliding window of size k
int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
int k = 3;
Deque<Integer> windowIndices = new ArrayDeque<>();
List<Integer> result = new ArrayList<>();

for (int i = 0; i < nums.length; i++) {
    // Remove indices outside window
    while (!windowIndices.isEmpty() && windowIndices.peekFirst() < i - k + 1)
        windowIndices.pollFirst();
    // Remove smaller elements from back
    while (!windowIndices.isEmpty() && nums[windowIndices.peekLast()] < nums[i])
        windowIndices.pollLast();
    windowIndices.addLast(i);
    if (i >= k - 1)
        result.add(nums[windowIndices.peekFirst()]);
}
System.out.println(result); // [3, 3, 5, 5, 6, 7]`;

  code5 = `import java.util.concurrent.*;

// ── LinkedBlockingQueue: optionally bounded ────────────────────────
BlockingQueue<String> queue = new LinkedBlockingQueue<>(10); // capacity 10

// Producer thread — blocks if queue is full
Thread producer = new Thread(() -> {
    try {
        for (int i = 1; i <= 5; i++) {
            queue.put("Task-" + i);           // blocks when full
            System.out.println("Produced: Task-" + i);
            Thread.sleep(100);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

// Consumer thread — blocks if queue is empty
Thread consumer = new Thread(() -> {
    try {
        for (int i = 0; i < 5; i++) {
            String task = queue.take();        // blocks when empty
            System.out.println("Consumed: " + task);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
});

producer.start();
consumer.start();

// ── ArrayBlockingQueue: fixed bounded queue ────────────────────────
BlockingQueue<Integer> bounded = new ArrayBlockingQueue<>(5);

// ── PriorityBlockingQueue: thread-safe priority queue ─────────────
BlockingQueue<Task> priorityQ = new PriorityBlockingQueue<>(
    11, Comparator.comparingInt(Task::priority).reversed()
);`;
}
