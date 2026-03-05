import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/mt-virtual.component.ts
var MtVirtualComponent = class _MtVirtualComponent {
  codeIntro = `// Platform thread: ~1MB stack, OS-managed, expensive
// Virtual thread: ~1KB stack, JVM-managed, cheap!

// Create 1 million virtual threads:
try (var exec = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 1_000_000).forEach(i ->
        exec.submit(() -> Thread.sleep(Duration.ofSeconds(1))));
}
// Completes in ~1 second, not 1 million seconds!`;
  codeCreate = `// 1. Thread.startVirtualThread
Thread vt = Thread.startVirtualThread(() -> {
    System.out.println("I'm virtual!");
});

// 2. Thread.ofVirtual()
Thread vt = Thread.ofVirtual()
    .name("my-vthread")
    .start(() -> doWork());

// 3. Factory
ThreadFactory factory = Thread.ofVirtual()
    .name("worker-", 0)  // worker-0, worker-1, ...
    .factory();
Thread t = factory.newThread(() -> doWork());
t.start();

// Check if virtual
System.out.println(Thread.currentThread().isVirtual());`;
  codeExec = `// Best way: virtual thread per task executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    List<Future<String>> futures = urls.stream()
        .map(url -> executor.submit(() -> fetchUrl(url)))
        .toList();

    for (Future<String> f : futures) {
        System.out.println(f.get());  // non-blocking for other tasks
    }
}  // auto-shutdown

// \u26A0\uFE0F DON'T pool virtual threads!
// \u274C Executors.newFixedThreadPool(10)  // wastes the benefit
// \u2705 Executors.newVirtualThreadPerTaskExecutor()`;
  codeStructured = `// Structured Concurrency (Preview in Java 21+)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<User> userTask = scope.fork(() -> fetchUser(id));
    Subtask<List<Order>> ordersTask = scope.fork(() -> fetchOrders(id));

    scope.join();           // wait for all
    scope.throwIfFailed();  // propagate errors

    User user = userTask.get();
    List<Order> orders = ordersTask.get();
    return new UserProfile(user, orders);
}
// If fetchUser fails \u2192 fetchOrders is cancelled automatically!`;
  codeSpring = `# Spring Boot 3.2+ virtual threads
spring:
  threads:
    virtual:
      enabled: true  # one line!

# This makes ALL request handling use virtual threads
# Every HTTP request \u2192 new virtual thread
# Perfect for I/O-heavy services (DB, HTTP calls)

# \u26A0\uFE0F Avoid synchronized blocks in virtual thread code
# Use ReentrantLock instead (pinning issue)

# \u26A0\uFE0F Don't use thread-local storage extensively
# Virtual threads are cheap but thread-locals are not`;
  static \u0275fac = function MtVirtualComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtVirtualComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtVirtualComponent, selectors: [["app-topic-mt-virtual"]], decls: 32, vars: 7, consts: [["title", "Virtual Threads", "subtitle", "Project Loom. Lightweight threads, structured concurrency, and million-thread scalability in Java 21+.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #1e3a5f, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtVirtualComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Virtual Threads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Virtual threads");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " (Java 21) are lightweight threads managed by the JVM. Create millions of them \u2014 they're cheap!");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Creating Virtual Threads");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "ExecutorService");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Structured Concurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Spring Boot");
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
      \u0275\u0275property("code", ctx.codeCreate);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeExec);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStructured);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-virtual.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtVirtualComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-virtual", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Virtual Threads" subtitle="Project Loom. Lightweight threads, structured concurrency, and million-thread scalability in Java 21+." badge="MULTITHREADING" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> Virtual Threads</h2>
        <div class="prose"><p><strong>Virtual threads</strong> (Java 21) are lightweight threads managed by the JVM. Create millions of them \u2014 they're cheap!</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Creating Virtual Threads</h3><app-code-block [code]="codeCreate" /></div>
          <div class="op-card"><h3 class="op-title">ExecutorService</h3><app-code-block [code]="codeExec" /></div>
          <div class="op-card"><h3 class="op-title">Structured Concurrency</h3><app-code-block [code]="codeStructured" /></div>
          <div class="op-card"><h3 class="op-title">Spring Boot</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;f75ee762da952af8484eea2637ebe0a8174b806549c791fe2592062dfaf3b06e;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/mt-virtual.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-virtual.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtVirtualComponent, { className: "MtVirtualComponent", filePath: "src/app/features/tutorials/topics/mt-virtual.component.ts", lineNumber: 33 });
})();
export {
  MtVirtualComponent
};
//# sourceMappingURL=chunk-PRH5UE2G.js.map
