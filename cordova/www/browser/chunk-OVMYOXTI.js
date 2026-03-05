import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/mt-threads.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function MtThreadsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function MtThreadsComponent_For_19_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(s_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active() === s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
  }
}
var MtThreadsComponent = class _MtThreadsComponent {
  active = signal("", ...ngDevMode ? [{ debugName: "active" }] : []);
  status = signal("Click a state to learn about the thread lifecycle.", ...ngDevMode ? [{ debugName: "status" }] : []);
  states = signal([
    { name: "NEW", icon: "\u{1F195}" },
    { name: "RUNNABLE", icon: "\u25B6\uFE0F" },
    { name: "BLOCKED", icon: "\u{1F6AB}" },
    { name: "WAITING", icon: "\u23F8\uFE0F" },
    { name: "TERMINATED", icon: "\u{1F3C1}" }
  ], ...ngDevMode ? [{ debugName: "states" }] : []);
  codeIntro = `// Way 1: Extend Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running!"); }
}
new MyThread().start();

// Way 2: Implement Runnable (preferred!)
Runnable task = () -> System.out.println("Running!");
new Thread(task).start();

// Way 3: Implement Callable (returns result)
Callable<Integer> task = () -> { return 42; };`;
  codeRunnable = `// Runnable: no return value, no checked exceptions
Runnable r = () -> System.out.println("Hello");
Thread t = new Thread(r, "worker-1");
t.start();

// Callable: returns a value, can throw exceptions
Callable<String> c = () -> {
    Thread.sleep(1000);
    return "Done!";
};
ExecutorService exec = Executors.newSingleThreadExecutor();
Future<String> future = exec.submit(c);
String result = future.get();  // blocks until done
exec.shutdown();`;
  codeControl = `Thread t = new Thread(() -> {
    while (!Thread.currentThread().isInterrupted()) {
        // do work
    }
});
t.start();

// Interrupt (cooperative cancellation)
t.interrupt();

// Join (wait for thread to finish)
t.join();          // wait forever
t.join(5000);      // wait max 5 seconds

// Sleep
Thread.sleep(1000);  // pause 1 second

// Yield (hint to scheduler)
Thread.yield();  // let other threads run`;
  codeDaemon = `// Daemon threads die when all user threads finish
Thread daemon = new Thread(() -> {
    while (true) {
        cleanupOldFiles();
        Thread.sleep(60000);
    }
});
daemon.setDaemon(true);  // must set BEFORE start()
daemon.start();

// JVM exits when only daemon threads remain
// Use for: background tasks, GC, monitoring`;
  codeSafety = `// \u274C NOT thread-safe
int count = 0;
void increment() { count++; }  // race condition!

// \u2705 Thread-safe options:
// 1. synchronized
synchronized void increment() { count++; }

// 2. AtomicInteger
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();

// 3. volatile (visibility only)
volatile boolean running = true;`;
  select(name) {
    this.active.set(name);
    const info = {
      NEW: "NEW: Thread created but start() not yet called.",
      RUNNABLE: "RUNNABLE: Thread is executing or ready to execute (waiting for CPU).",
      BLOCKED: "BLOCKED: Waiting to acquire a monitor lock (synchronized block).",
      WAITING: "WAITING: Waiting indefinitely for another thread (wait(), join()).",
      TERMINATED: "TERMINATED: Thread has completed execution or was stopped."
    };
    this.status.set(info[name] ?? "");
  }
  static \u0275fac = function MtThreadsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtThreadsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtThreadsComponent, selectors: [["app-topic-mt-threads"]], decls: 43, vars: 9, consts: [["title", "Threads & Runnable", "subtitle", "Create and manage threads. Thread lifecycle, Runnable vs Callable, daemon threads, and thread safety.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-indigo", 3, "size"], [1, "lifecycle"], [1, "state", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-purple", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "state", 3, "click"], [1, "st-icon"], [1, "st-name"]], template: function MtThreadsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Threads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "thread");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is the smallest unit of execution. Java supports creating threads by extending Thread or implementing Runnable/Callable.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "div", 6)(14, "h3", 7);
      \u0275\u0275element(15, "app-icon", 8);
      \u0275\u0275text(16, " Thread Lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275repeaterCreate(18, MtThreadsComponent_For_19_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "section", 1)(23, "h2", 2);
      \u0275\u0275element(24, "app-icon", 12);
      \u0275\u0275text(25, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "h3", 15);
      \u0275\u0275text(29, "Runnable vs Callable");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "h3", 15);
      \u0275\u0275text(33, "Thread Control");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14)(36, "h3", 15);
      \u0275\u0275text(37, "Daemon Threads");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "h3", 15);
      \u0275\u0275text(41, "Thread Safety");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.states());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeRunnable);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDaemon);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSafety);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 12px 6px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state.active[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  transform: scale(1.05);\n}\n.st-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 4px;\n}\n.st-name[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-threads.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtThreadsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-threads", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Threads & Runnable" subtitle="Create and manage threads. Thread lifecycle, Runnable vs Callable, daemon threads, and thread safety." badge="MULTITHREADING" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> Threads</h2>
        <div class="prose">
          <p>A <strong>thread</strong> is the smallest unit of execution. Java supports creating threads by extending Thread or implementing Runnable/Callable.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-indigo" /> Thread Lifecycle</h3>
          <div class="lifecycle">
            @for (s of states(); track s.name) {
              <div class="state" [class.active]="active() === s.name" (click)="select(s.name)"><span class="st-icon">{{ s.icon }}</span><span class="st-name">{{ s.name }}</span></div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Runnable vs Callable</h3><app-code-block [code]="codeRunnable" /></div>
          <div class="op-card"><h3 class="op-title">Thread Control</h3><app-code-block [code]="codeControl" /></div>
          <div class="op-card"><h3 class="op-title">Daemon Threads</h3><app-code-block [code]="codeDaemon" /></div>
          <div class="op-card"><h3 class="op-title">Thread Safety</h3><app-code-block [code]="codeSafety" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;e718d7f3993ab6efb526837486bacc023d32ac167c2b84b979c6f79745fbf203;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/mt-threads.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.lifecycle {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.state {\n  padding: 12px 6px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state.active {\n  border-color: #4f46e5;\n  background: #eef2ff;\n  transform: scale(1.05);\n}\n.st-icon {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 4px;\n}\n.st-name {\n  font-size: 0.55rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-threads.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtThreadsComponent, { className: "MtThreadsComponent", filePath: "src/app/features/tutorials/topics/mt-threads.component.ts", lineNumber: 52 });
})();
export {
  MtThreadsComponent
};
//# sourceMappingURL=chunk-OVMYOXTI.js.map
