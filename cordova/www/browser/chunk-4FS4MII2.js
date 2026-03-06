import{a as l,b as p,c as u}from"./chunk-5NK5W44O.js";import{Pa as o,Tb as n,ab as d,sb as r,tb as t,ub as e,vb as i}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var m=class s{codeIntro=`// \u274C Synchronized wrapper (locks entire map)
Map<String, Integer> map = Collections.synchronizedMap(new HashMap<>());

// \u2705 ConcurrentHashMap (segment-level locking)
ConcurrentMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
map.computeIfAbsent("key", k -> expensiveCompute(k));`;codeCHM=`ConcurrentHashMap<String, AtomicInteger> wordCount = new ConcurrentHashMap<>();

// Atomic operations (no external sync needed)
wordCount.computeIfAbsent("hello", k -> new AtomicInteger()).incrementAndGet();
wordCount.merge("hello", new AtomicInteger(1), (old, v) -> { old.incrementAndGet(); return old; });

// Bulk operations (parallel)
wordCount.forEach(2, (key, value) -> log(key + "=" + value));
long sum = wordCount.reduceValues(2, AtomicInteger::get, Long::sum);
String max = wordCount.searchKeys(2, key -> key.length() > 10 ? key : null);

// ConcurrentHashMap.newKeySet() \u2014 thread-safe Set
Set<String> set = ConcurrentHashMap.newKeySet();`;codeQueue=`// BlockingQueue \u2014 producer-consumer pattern
BlockingQueue<Task> queue = new LinkedBlockingQueue<>(100);

// Producer thread
queue.put(new Task());       // blocks if full
queue.offer(task, 1, TimeUnit.SECONDS); // timeout

// Consumer thread
Task task = queue.take();    // blocks if empty
Task task = queue.poll(1, TimeUnit.SECONDS);

// Implementations:
// LinkedBlockingQueue  \u2014 unbounded or bounded
// ArrayBlockingQueue   \u2014 bounded, fair ordering
// PriorityBlockingQueue \u2014 priority-ordered
// DelayQueue           \u2014 elements available after delay
// SynchronousQueue     \u2014 direct handoff (no buffer)`;codeCow=`// CopyOnWriteArrayList: copy on every write
// \u2705 Great for: many reads, rare writes
// \u274C Bad for: frequent writes (copies entire array!)
List<String> listeners = new CopyOnWriteArrayList<>();
listeners.add("listener1");  // copies entire array!

// Iterators never throw ConcurrentModificationException
for (String l : listeners) {
    // safe to iterate while others modify
}

// CopyOnWriteArraySet
Set<EventListener> set = new CopyOnWriteArraySet<>();`;codeChoose=`// Choosing the right concurrent collection:

// Key-Value store \u2192 ConcurrentHashMap
// Always. Never use synchronized HashMap.

// Queue (producer-consumer) \u2192 BlockingQueue
// LinkedBlockingQueue for general use

// List (read-heavy) \u2192 CopyOnWriteArrayList
// Only when reads >> writes

// Sorted set \u2192 ConcurrentSkipListSet
// Thread-safe TreeSet alternative

// Deque \u2192 ConcurrentLinkedDeque
// Non-blocking, unbounded deque`;static \u0275fac=function(c){return new(c||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-mt-collections"]],decls:33,vars:7,consts:[["title","Concurrent Collections","subtitle","Thread-safe data structures. ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList, and when to use each.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #0369a1, #38bdf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-sky",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),n(4," Concurrent Collections"),e(),t(5,"div",4)(6,"p"),n(7,"Java provides thread-safe collections in "),t(8,"code"),n(9,"java.util.concurrent"),e(),n(10," that outperform synchronized wrappers."),e(),i(11,"app-code-block",5),e()(),t(12,"section",1)(13,"h2",2),i(14,"app-icon",6),n(15," Collections"),e(),t(16,"div",7)(17,"div",8)(18,"h3",9),n(19,"ConcurrentHashMap"),e(),i(20,"app-code-block",5),e(),t(21,"div",8)(22,"h3",9),n(23,"BlockingQueue"),e(),i(24,"app-code-block",5),e(),t(25,"div",8)(26,"h3",9),n(27,"CopyOnWrite"),e(),i(28,"app-code-block",5),e(),t(29,"div",8)(30,"h3",9),n(31,"Choosing Right"),e(),i(32,"app-code-block",5),e()()()()),c&2&&(o(3),r("size",28),o(8),r("code",a.codeIntro),o(3),r("size",28),o(6),r("code",a.codeCHM),o(4),r("code",a.codeQueue),o(4),r("code",a.codeCow),o(4),r("code",a.codeChoose))},dependencies:[l,p,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-sky[_ngcontent-%COMP%]{color:#0284c7}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#0284c7}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as MtCollectionsComponent};
