import{a as u,b as m,c}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as r,S as d,ba as o,ca as i,da as t,ea as n,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var p=class s{code1=`import java.util.*;

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
);`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-collections-queue"]],decls:197,vars:11,consts:[["title","Collections: Queue & Deque","subtitle","Master FIFO queues, priority queues, and double-ended deques. Learn ArrayDeque, LinkedList, PriorityQueue, and when to use each.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a8a, #3b82f6)"],[1,"section"],[1,"section-heading"],["name","arrow-right","css","icon-blue",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/collections-queue.png","alt","Queue Collections Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","zap","css","icon-blue",3,"size"],["name","bar-chart-2","css","icon-blue",3,"size"],["name","shuffle","css","icon-blue",3,"size"],["name","cpu","css","icon-blue",3,"size"],["name","briefcase","css","icon-blue",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,a){l&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),e(4," Queue Interface "),t(),i(5,"div",4),n(6,"img",5),t(),i(7,"div",6)(8,"p"),e(9," A "),i(10,"strong"),e(11,"Queue"),t(),e(12," is a FIFO (first-in, first-out) data structure. The "),i(13,"code"),e(14,"Queue"),t(),e(15," interface provides two groups of methods for every operation \u2014 one that throws an exception on failure and one that returns a special value: "),t(),i(16,"ul")(17,"li")(18,"strong"),e(19,"Enqueue:"),t(),i(20,"code"),e(21,"add(e)"),t(),e(22," throws / "),i(23,"code"),e(24,"offer(e)"),t(),e(25," returns "),i(26,"code"),e(27,"false"),t()(),i(28,"li")(29,"strong"),e(30,"Dequeue:"),t(),i(31,"code"),e(32,"remove()"),t(),e(33," throws / "),i(34,"code"),e(35,"poll()"),t(),e(36," returns "),i(37,"code"),e(38,"null"),t()(),i(39,"li")(40,"strong"),e(41,"Peek:"),t(),i(42,"code"),e(43,"element()"),t(),e(44," throws / "),i(45,"code"),e(46,"peek()"),t(),e(47," returns "),i(48,"code"),e(49,"null"),t()()(),i(50,"p"),e(51,"Prefer "),i(52,"code"),e(53,"offer"),t(),e(54,", "),i(55,"code"),e(56,"poll"),t(),e(57,", and "),i(58,"code"),e(59,"peek"),t(),e(60," in production code \u2014 they return null/false instead of throwing on an empty or full queue."),t(),n(61,"app-code-block",7),t()(),i(62,"section",1)(63,"h2",2),n(64,"app-icon",8),e(65," ArrayDeque \u2014 Preferred Queue "),t(),i(66,"div",6)(67,"p")(68,"strong"),e(69,"ArrayDeque"),t(),e(70," is the go-to general-purpose queue/stack. It is backed by a resizable circular array, has "),i(71,"strong"),e(72,"no null elements"),t(),e(73,", and is faster than "),i(74,"code"),e(75,"LinkedList"),t(),e(76," for both queue and stack operations. It is NOT thread-safe. "),t(),n(77,"app-code-block",7),t()(),i(78,"section",1)(79,"h2",2),n(80,"app-icon",9),e(81," PriorityQueue "),t(),i(82,"div",6)(83,"p")(84,"strong"),e(85,"PriorityQueue"),t(),e(86," does NOT follow FIFO. Elements are ordered by "),i(87,"strong"),e(88,"natural ordering"),t(),e(89," (min-heap by default) or by a provided "),i(90,"code"),e(91,"Comparator"),t(),e(92,". The "),i(93,"em"),e(94,"smallest"),t(),e(95," element is always at the head. Common use cases: task scheduling, Dijkstra's algorithm, top-K problems. "),t(),n(96,"app-code-block",7),t()(),i(97,"section",1)(98,"h2",2),n(99,"app-icon",10),e(100," Deque \u2014 Double-Ended Queue "),t(),i(101,"div",6)(102,"p"),e(103," A "),i(104,"strong"),e(105,"Deque"),t(),e(106," (double-ended queue) supports insertion and removal at "),i(107,"em"),e(108,"both ends"),t(),e(109,". Use "),i(110,"code"),e(111,"ArrayDeque"),t(),e(112," as the implementation. It can act as a queue (FIFO) or a stack (LIFO) depending on which methods you use. "),t(),n(113,"app-code-block",7),t()(),i(114,"section",1)(115,"h2",2),n(116,"app-icon",11),e(117," BlockingQueue (Brief) "),t(),i(118,"div",6)(119,"p")(120,"code"),e(121,"java.util.concurrent.BlockingQueue"),t(),e(122," adds thread-safe blocking operations: "),i(123,"code"),e(124,"put()"),t(),e(125," blocks when the queue is full, and "),i(126,"code"),e(127,"take()"),t(),e(128," blocks when it is empty. Ideal for producer-consumer patterns without manual synchronization. "),t(),n(129,"app-code-block",7),t()(),i(130,"section",1)(131,"h2",2),n(132,"app-icon",12),e(133," Interview Tips "),t(),i(134,"div",13)(135,"div",14)(136,"div",15),e(137,"1"),t(),i(138,"div")(139,"h4",16),e(140,"ArrayDeque vs LinkedList as Queue"),t(),i(141,"p",17)(142,"code"),e(143,"ArrayDeque"),t(),e(144," is faster: no per-node memory overhead, better CPU cache locality, and no null checks. Use "),i(145,"code"),e(146,"ArrayDeque"),t(),e(147," whenever you need a queue or stack. "),i(148,"code"),e(149,"LinkedList"),t(),e(150," as a queue is legacy practice."),t()()(),i(151,"div",14)(152,"div",15),e(153,"2"),t(),i(154,"div")(155,"h4",16),e(156,"PriorityQueue is NOT thread-safe"),t(),i(157,"p",17),e(158,"Use "),i(159,"code"),e(160,"java.util.concurrent.PriorityBlockingQueue"),t(),e(161," in concurrent code. "),i(162,"code"),e(163,"PriorityQueue"),t(),e(164," also does NOT guarantee ordering of elements with equal priority \u2014 iteration order is undefined."),t()()(),i(165,"div",14)(166,"div",15),e(167,"3"),t(),i(168,"div")(169,"h4",16),e(170,"Stack class is legacy"),t(),i(171,"p",17),e(172,"The old "),i(173,"code"),e(174,"java.util.Stack"),t(),e(175," extends "),i(176,"code"),e(177,"Vector"),t(),e(178," (synchronized, slow). Use "),i(179,"code"),e(180,"ArrayDeque"),t(),e(181," via the "),i(182,"code"),e(183,"Deque"),t(),e(184," interface for a modern, unsynchronized stack. The "),i(185,"code"),e(186,"Deque"),t(),e(187," interface even documents the stack methods: "),i(188,"code"),e(189,"push"),t(),e(190,", "),i(191,"code"),e(192,"pop"),t(),e(193,", "),i(194,"code"),e(195,"peek"),t(),e(196,"."),t()()()()()()),l&2&&(r(3),o("size",28),r(58),o("code",a.code1),r(3),o("size",28),r(13),o("code",a.code2),r(3),o("size",28),r(16),o("code",a.code3),r(3),o("size",28),r(14),o("code",a.code4),r(3),o("size",28),r(13),o("code",a.code5),r(3),o("size",28))},dependencies:[u,m,c],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-blue[_ngcontent-%COMP%]{color:#3b82f6}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1e3a8a}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#3b82f6;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1e3a8a}"],changeDetection:0})};export{p as CollectionsQueueComponent};
