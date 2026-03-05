import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/mt-executors.component.ts
var MtExecutorsComponent = class _MtExecutorsComponent {
  codeIntro = `// Don't: new Thread() for every task
// Do: use a thread pool!

ExecutorService executor = Executors.newFixedThreadPool(4);
executor.execute(() -> System.out.println("Task 1"));
executor.execute(() -> System.out.println("Task 2"));
executor.shutdown();`;
  codePools = `// Fixed pool: exact number of threads
ExecutorService fixed = Executors.newFixedThreadPool(4);

// Cached pool: grows as needed, recycles idle threads
ExecutorService cached = Executors.newCachedThreadPool();

// Single thread: tasks execute sequentially
ExecutorService single = Executors.newSingleThreadExecutor();

// Custom pool (production recommended)
ExecutorService custom = new ThreadPoolExecutor(
    4,              // core pool size
    8,              // max pool size
    60L,            // idle timeout
    TimeUnit.SECONDS,
    new LinkedBlockingQueue<>(100),  // work queue
    new ThreadPoolExecutor.CallerRunsPolicy());`;
  codeFuture = `// Submit Callable \u2192 get Future
Future<Integer> future = executor.submit(() -> {
    Thread.sleep(2000);
    return 42;
});

// Check status
future.isDone();      // non-blocking check
future.isCancelled();

// Get result (blocks!)
Integer result = future.get();             // wait forever
Integer result = future.get(5, TimeUnit.SECONDS); // timeout

// Cancel
future.cancel(true);  // interrupt if running

// Invoke all / any
List<Future<String>> results = executor.invokeAll(tasks);
String first = executor.invokeAny(tasks);  // first to complete`;
  codeScheduled = `ScheduledExecutorService scheduler =
    Executors.newScheduledThreadPool(2);

// Run once after delay
scheduler.schedule(() -> log("Run once"), 5, TimeUnit.SECONDS);

// Run repeatedly at fixed rate
scheduler.scheduleAtFixedRate(
    () -> log("Heartbeat"),
    0,           // initial delay
    10,          // period
    TimeUnit.SECONDS);

// Run repeatedly with fixed delay (after completion)
scheduler.scheduleWithFixedDelay(
    () -> log("Cleanup"),
    0,           // initial delay
    30,          // delay after last run
    TimeUnit.SECONDS);`;
  codeShutdown = `// Graceful shutdown pattern
executor.shutdown();  // no new tasks, finish existing
try {
    if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
        executor.shutdownNow();  // force shutdown
        if (!executor.awaitTermination(60, TimeUnit.SECONDS))
            log.error("Pool did not terminate!");
    }
} catch (InterruptedException e) {
    executor.shutdownNow();
    Thread.currentThread().interrupt();
}

// try-with-resources (Java 19+)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(task);
}  // auto-shutdown`;
  static \u0275fac = function MtExecutorsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtExecutorsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtExecutorsComponent, selectors: [["app-topic-mt-executors"]], decls: 32, vars: 7, consts: [["title", "ExecutorService", "subtitle", "Manage thread pools efficiently. Fixed, cached, scheduled pools, and proper shutdown strategies.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtExecutorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Executors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "ExecutorService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " manages thread pools so you don't create threads manually. Submit tasks, the pool handles execution.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Pool Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Pool Types");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Submit & Future");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "ScheduledExecutor");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Shutdown");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codePools);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFuture);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeScheduled);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeShutdown);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-executors.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtExecutorsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-executors", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="ExecutorService" subtitle="Manage thread pools efficiently. Fixed, cached, scheduled pools, and proper shutdown strategies." badge="MULTITHREADING" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Executors</h2>
        <div class="prose"><p><strong>ExecutorService</strong> manages thread pools so you don't create threads manually. Submit tasks, the pool handles execution.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Pool Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Pool Types</h3><app-code-block [code]="codePools" /></div>
          <div class="op-card"><h3 class="op-title">Submit & Future</h3><app-code-block [code]="codeFuture" /></div>
          <div class="op-card"><h3 class="op-title">ScheduledExecutor</h3><app-code-block [code]="codeScheduled" /></div>
          <div class="op-card"><h3 class="op-title">Shutdown</h3><app-code-block [code]="codeShutdown" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/mt-executors.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-executors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtExecutorsComponent, { className: "MtExecutorsComponent", filePath: "src/app/features/tutorials/topics/mt-executors.component.ts", lineNumber: 33 });
})();
export {
  MtExecutorsComponent
};
//# sourceMappingURL=chunk-ESUJBTDP.js.map
