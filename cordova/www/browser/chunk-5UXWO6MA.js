import{a as u,b as m,c}from"./chunk-3MUY7VVQ.js";import{$a as r,Ba as n,Ka as d,ab as i,bb as t,cb as o,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var p=class s{code1=`import java.util.*;

// LinkedList implements both List and Queue
Queue<String> queue = new LinkedList<>();

// Enqueue \u2014 prefer offer() over add()
queue.offer("Alice");
queue.offer("Bob");
queue.offer("Carol");

// Peek \u2014 look at head without removing
System.out.println(queue.peek());   // "Alice"
System.out.println(queue.element()); // "Alice" (throws if empty)

// Dequeue \u2014 removes from head
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
}`;code2=`import java.util.ArrayDeque;
import java.util.Deque;

// \u2500\u2500 ArrayDeque as a QUEUE (FIFO) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
Deque<String> queue = new ArrayDeque<>();

queue.addLast("Alice");   // enqueue at tail (same as offer())
queue.addLast("Bob");
queue.addLast("Carol");

String first = queue.pollFirst(); // dequeue from head \u2192 "Alice"
String peek  = queue.peekFirst(); // peek head \u2192 "Bob"

// Shorthand using Queue interface methods
queue.offer("Dave");   // addLast
queue.poll();          // pollFirst
queue.peek();          // peekFirst

// \u2500\u2500 ArrayDeque as a STACK (LIFO) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);   // addFirst \u2014 pushes to top
stack.push(20);
stack.push(30);

int top = stack.pop();   // pollFirst \u2014 pops from top \u2192 30
int see = stack.peek();  // peekFirst \u2192 20

// \u2500\u2500 Why ArrayDeque beats LinkedList \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// - No per-node object overhead (saves memory)
// - Better CPU cache locality (contiguous array)
// - Does not permit null elements (safer \u2014 null from poll() means empty)
// - Benchmark: 40\u201350% faster for queue/stack workloads`;code3=`import java.util.*;

// \u2500\u2500 Min-Heap (default: natural ordering) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(40);
minHeap.offer(10);
minHeap.offer(30);
minHeap.offer(20);

System.out.println(minHeap.peek());  // 10 \u2014 smallest always at head
System.out.println(minHeap.poll());  // 10
System.out.println(minHeap.poll());  // 20 \u2014 heap re-orders automatically

// \u2500\u2500 Max-Heap (reverse order) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Comparator.reverseOrder());
maxHeap.offer(10);
maxHeap.offer(40);
maxHeap.offer(25);

System.out.println(maxHeap.poll()); // 40 \u2014 largest at head

// \u2500\u2500 PriorityQueue with custom objects \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
record Task(String name, int priority) {}

PriorityQueue<Task> taskQueue = new PriorityQueue<>(
    Comparator.comparingInt(Task::priority).reversed() // highest priority first
);
taskQueue.offer(new Task("Low-priority report",  1));
taskQueue.offer(new Task("Critical bug fix",    10));
taskQueue.offer(new Task("Feature request",      3));

while (!taskQueue.isEmpty()) {
    System.out.println(taskQueue.poll().name());
    // Critical bug fix \u2192 Feature request \u2192 Low-priority report
}`;code4=`import java.util.*;

Deque<String> deque = new ArrayDeque<>();

// Add to BOTH ends
deque.addFirst("Middle");
deque.addFirst("Front");   // [Front, Middle]
deque.addLast("Back");     // [Front, Middle, Back]

// Peek both ends
System.out.println(deque.peekFirst()); // "Front"
System.out.println(deque.peekLast());  // "Back"

// Remove from both ends
String f = deque.pollFirst(); // "Front" \u2192 [Middle, Back]
String b = deque.pollLast();  // "Back"  \u2192 [Middle]

// \u2500\u2500 Deque as Sliding Window (classic algorithm pattern) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
System.out.println(result); // [3, 3, 5, 5, 6, 7]`;code5=`import java.util.concurrent.*;

// \u2500\u2500 LinkedBlockingQueue: optionally bounded \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
BlockingQueue<String> queue = new LinkedBlockingQueue<>(10); // capacity 10

// Producer thread \u2014 blocks if queue is full
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

// Consumer thread \u2014 blocks if queue is empty
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

// \u2500\u2500 ArrayBlockingQueue: fixed bounded queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
BlockingQueue<Integer> bounded = new ArrayBlockingQueue<>(5);

// \u2500\u2500 PriorityBlockingQueue: thread-safe priority queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
BlockingQueue<Task> priorityQ = new PriorityBlockingQueue<>(
    11, Comparator.comparingInt(Task::priority).reversed()
);`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-collections-queue"]],decls:195,vars:11,consts:[["title","Collections: Queue & Deque","subtitle","Master FIFO queues, priority queues, and double-ended deques. Learn ArrayDeque, LinkedList, PriorityQueue, and when to use each.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a8a, #3b82f6)"],[1,"section"],[1,"section-heading"],["name","arrow-right","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","zap","css","icon-blue",3,"size"],["name","bar-chart-2","css","icon-blue",3,"size"],["name","shuffle","css","icon-blue",3,"size"],["name","cpu","css","icon-blue",3,"size"],["name","briefcase","css","icon-blue",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,a){l&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," Queue Interface "),t(),i(5,"div",4)(6,"p"),e(7," A "),i(8,"strong"),e(9,"Queue"),t(),e(10," is a FIFO (first-in, first-out) data structure. The "),i(11,"code"),e(12,"Queue"),t(),e(13," interface provides two groups of methods for every operation \u2014 one that throws an exception on failure and one that returns a special value: "),t(),i(14,"ul")(15,"li")(16,"strong"),e(17,"Enqueue:"),t(),i(18,"code"),e(19,"add(e)"),t(),e(20," throws / "),i(21,"code"),e(22,"offer(e)"),t(),e(23," returns "),i(24,"code"),e(25,"false"),t()(),i(26,"li")(27,"strong"),e(28,"Dequeue:"),t(),i(29,"code"),e(30,"remove()"),t(),e(31," throws / "),i(32,"code"),e(33,"poll()"),t(),e(34," returns "),i(35,"code"),e(36,"null"),t()(),i(37,"li")(38,"strong"),e(39,"Peek:"),t(),i(40,"code"),e(41,"element()"),t(),e(42," throws / "),i(43,"code"),e(44,"peek()"),t(),e(45," returns "),i(46,"code"),e(47,"null"),t()()(),i(48,"p"),e(49,"Prefer "),i(50,"code"),e(51,"offer"),t(),e(52,", "),i(53,"code"),e(54,"poll"),t(),e(55,", and "),i(56,"code"),e(57,"peek"),t(),e(58," in production code \u2014 they return null/false instead of throwing on an empty or full queue."),t(),o(59,"app-code-block",5),t()(),i(60,"section",1)(61,"h2",2),o(62,"app-icon",6),e(63," ArrayDeque \u2014 Preferred Queue "),t(),i(64,"div",4)(65,"p")(66,"strong"),e(67,"ArrayDeque"),t(),e(68," is the go-to general-purpose queue/stack. It is backed by a resizable circular array, has "),i(69,"strong"),e(70,"no null elements"),t(),e(71,", and is faster than "),i(72,"code"),e(73,"LinkedList"),t(),e(74," for both queue and stack operations. It is NOT thread-safe. "),t(),o(75,"app-code-block",5),t()(),i(76,"section",1)(77,"h2",2),o(78,"app-icon",7),e(79," PriorityQueue "),t(),i(80,"div",4)(81,"p")(82,"strong"),e(83,"PriorityQueue"),t(),e(84," does NOT follow FIFO. Elements are ordered by "),i(85,"strong"),e(86,"natural ordering"),t(),e(87," (min-heap by default) or by a provided "),i(88,"code"),e(89,"Comparator"),t(),e(90,". The "),i(91,"em"),e(92,"smallest"),t(),e(93," element is always at the head. Common use cases: task scheduling, Dijkstra's algorithm, top-K problems. "),t(),o(94,"app-code-block",5),t()(),i(95,"section",1)(96,"h2",2),o(97,"app-icon",8),e(98," Deque \u2014 Double-Ended Queue "),t(),i(99,"div",4)(100,"p"),e(101," A "),i(102,"strong"),e(103,"Deque"),t(),e(104," (double-ended queue) supports insertion and removal at "),i(105,"em"),e(106,"both ends"),t(),e(107,". Use "),i(108,"code"),e(109,"ArrayDeque"),t(),e(110," as the implementation. It can act as a queue (FIFO) or a stack (LIFO) depending on which methods you use. "),t(),o(111,"app-code-block",5),t()(),i(112,"section",1)(113,"h2",2),o(114,"app-icon",9),e(115," BlockingQueue (Brief) "),t(),i(116,"div",4)(117,"p")(118,"code"),e(119,"java.util.concurrent.BlockingQueue"),t(),e(120," adds thread-safe blocking operations: "),i(121,"code"),e(122,"put()"),t(),e(123," blocks when the queue is full, and "),i(124,"code"),e(125,"take()"),t(),e(126," blocks when it is empty. Ideal for producer-consumer patterns without manual synchronization. "),t(),o(127,"app-code-block",5),t()(),i(128,"section",1)(129,"h2",2),o(130,"app-icon",10),e(131," Interview Tips "),t(),i(132,"div",11)(133,"div",12)(134,"div",13),e(135,"1"),t(),i(136,"div")(137,"h4",14),e(138,"ArrayDeque vs LinkedList as Queue"),t(),i(139,"p",15)(140,"code"),e(141,"ArrayDeque"),t(),e(142," is faster: no per-node memory overhead, better CPU cache locality, and no null checks. Use "),i(143,"code"),e(144,"ArrayDeque"),t(),e(145," whenever you need a queue or stack. "),i(146,"code"),e(147,"LinkedList"),t(),e(148," as a queue is legacy practice."),t()()(),i(149,"div",12)(150,"div",13),e(151,"2"),t(),i(152,"div")(153,"h4",14),e(154,"PriorityQueue is NOT thread-safe"),t(),i(155,"p",15),e(156,"Use "),i(157,"code"),e(158,"java.util.concurrent.PriorityBlockingQueue"),t(),e(159," in concurrent code. "),i(160,"code"),e(161,"PriorityQueue"),t(),e(162," also does NOT guarantee ordering of elements with equal priority \u2014 iteration order is undefined."),t()()(),i(163,"div",12)(164,"div",13),e(165,"3"),t(),i(166,"div")(167,"h4",14),e(168,"Stack class is legacy"),t(),i(169,"p",15),e(170,"The old "),i(171,"code"),e(172,"java.util.Stack"),t(),e(173," extends "),i(174,"code"),e(175,"Vector"),t(),e(176," (synchronized, slow). Use "),i(177,"code"),e(178,"ArrayDeque"),t(),e(179," via the "),i(180,"code"),e(181,"Deque"),t(),e(182," interface for a modern, unsynchronized stack. The "),i(183,"code"),e(184,"Deque"),t(),e(185," interface even documents the stack methods: "),i(186,"code"),e(187,"push"),t(),e(188,", "),i(189,"code"),e(190,"pop"),t(),e(191,", "),i(192,"code"),e(193,"peek"),t(),e(194,"."),t()()()()()()),l&2&&(n(3),r("size",28),n(56),r("code",a.code1),n(3),r("size",28),n(13),r("code",a.code2),n(3),r("size",28),n(16),r("code",a.code3),n(3),r("size",28),n(14),r("code",a.code4),n(3),r("size",28),n(13),r("code",a.code5),n(3),r("size",28))},dependencies:[u,m,c],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-blue[_ngcontent-%COMP%]{color:#3b82f6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1e3a8a}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#3b82f6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1e3a8a}"],changeDetection:0})};export{p as CollectionsQueueComponent};
