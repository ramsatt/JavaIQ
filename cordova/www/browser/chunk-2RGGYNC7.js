import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/mt-collections.component.ts
var MtCollectionsComponent = class _MtCollectionsComponent {
  codeIntro = `// \u274C Synchronized wrapper (locks entire map)
Map<String, Integer> map = Collections.synchronizedMap(new HashMap<>());

// \u2705 ConcurrentHashMap (segment-level locking)
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

// ConcurrentHashMap.newKeySet() \u2014 thread-safe Set
Set<String> set = ConcurrentHashMap.newKeySet();`;
  codeQueue = `// BlockingQueue \u2014 producer-consumer pattern
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
// SynchronousQueue     \u2014 direct handoff (no buffer)`;
  codeCow = `// CopyOnWriteArrayList: copy on every write
// \u2705 Great for: many reads, rare writes
// \u274C Bad for: frequent writes (copies entire array!)
List<String> listeners = new CopyOnWriteArrayList<>();
listeners.add("listener1");  // copies entire array!

// Iterators never throw ConcurrentModificationException
for (String l : listeners) {
    // safe to iterate while others modify
}

// CopyOnWriteArraySet
Set<EventListener> set = new CopyOnWriteArraySet<>();`;
  codeChoose = `// Choosing the right concurrent collection:

// Key-Value store \u2192 ConcurrentHashMap
// Always. Never use synchronized HashMap.

// Queue (producer-consumer) \u2192 BlockingQueue
// LinkedBlockingQueue for general use

// List (read-heavy) \u2192 CopyOnWriteArrayList
// Only when reads >> writes

// Sorted set \u2192 ConcurrentSkipListSet
// Thread-safe TreeSet alternative

// Deque \u2192 ConcurrentLinkedDeque
// Non-blocking, unbounded deque`;
  static \u0275fac = function MtCollectionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtCollectionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtCollectionsComponent, selectors: [["app-topic-mt-collections"]], decls: 33, vars: 7, consts: [["title", "Concurrent Collections", "subtitle", "Thread-safe data structures. ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList, and when to use each.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #0369a1, #38bdf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-sky", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtCollectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Concurrent Collections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Java provides thread-safe collections in ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "java.util.concurrent");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " that outperform synchronized wrappers.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Collections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "ConcurrentHashMap");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "BlockingQueue");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "CopyOnWrite");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Choosing Right");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCHM);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeQueue);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCow);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeChoose);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-collections.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtCollectionsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-collections", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ['/* angular:styles/component:css;60538b978c32548fc0247eebaa5650eb8c7ce3da944541cc43db254c9d5fc83c;D:/A21/JavaIQ/src/app/features/tutorials/topics/mt-collections.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-sky {\n  color: #0284c7;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0284c7;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-collections.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtCollectionsComponent, { className: "MtCollectionsComponent", filePath: "src/app/features/tutorials/topics/mt-collections.component.ts", lineNumber: 33 });
})();
export {
  MtCollectionsComponent
};
//# sourceMappingURL=chunk-2RGGYNC7.js.map
