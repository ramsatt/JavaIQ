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

// src/app/features/tutorials/topics/mt-sync.component.ts
var MtSyncComponent = class _MtSyncComponent {
  codeIntro = `// Race condition example
class Counter {
    private int count = 0;
    void increment() { count++; }  // NOT atomic!
    // count++ = read \u2192 increment \u2192 write (3 steps!)
    // Two threads can read the same value
}

// Fix with synchronized:
class SafeCounter {
    private int count = 0;
    synchronized void increment() { count++; }
}`;
  codeSync = `// Method-level synchronization
synchronized void deposit(int amount) {
    balance += amount;
}

// Block-level (more granular)
void transfer(Account to, int amount) {
    synchronized (this) {
        this.balance -= amount;
    }
    synchronized (to) {
        to.balance += amount;
    }
}

// Static synchronized (locks on Class object)
static synchronized void log(String msg) { }`;
  codeWait = `// Producer-Consumer with wait/notify
class SharedQueue {
    private final Queue<Integer> queue = new LinkedList<>();
    private final int MAX = 10;

    synchronized void produce(int item) throws InterruptedException {
        while (queue.size() == MAX)
            wait();  // release lock & wait
        queue.add(item);
        notifyAll();  // wake up consumers
    }

    synchronized int consume() throws InterruptedException {
        while (queue.isEmpty())
            wait();  // release lock & wait
        int item = queue.poll();
        notifyAll();  // wake up producers
        return item;
    }
}`;
  codeVolatile = `// volatile: ensures visibility across threads
// Does NOT provide atomicity!

class Worker {
    private volatile boolean running = true;

    void run() {
        while (running) {  // always reads latest value
            // do work
        }
    }

    void stop() {
        running = false;  // visible to other threads immediately
    }
}

// Without volatile: thread may cache 'running' value
// and never see the change \u2192 infinite loop!`;
  codeDeadlock = `// DEADLOCK: two threads waiting for each other
// Thread 1: locks A, then tries to lock B
// Thread 2: locks B, then tries to lock A
// \u2192 Both wait forever!

// Prevention strategies:
// 1. Lock ordering (always lock A before B)
synchronized (lockA) {
    synchronized (lockB) { }
}

// 2. tryLock() with timeout
if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try { /* critical section */ }
    finally { lock.unlock(); }
}

// 3. Avoid nested locks when possible`;
  static \u0275fac = function MtSyncComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtSyncComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtSyncComponent, selectors: [["app-topic-mt-sync"]], decls: 33, vars: 7, consts: [["title", "Synchronization", "subtitle", "Thread coordination. synchronized, wait/notify, volatile, deadlock prevention, and producer-consumer.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtSyncComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Synchronization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "When threads share data, ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "synchronization");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " prevents race conditions by ensuring only one thread accesses critical sections at a time.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "synchronized");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "wait() / notify()");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "volatile");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Deadlock");
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
      \u0275\u0275property("code", ctx.codeSync);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWait);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeVolatile);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDeadlock);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-sync.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtSyncComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-sync", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Synchronization" subtitle="Thread coordination. synchronized, wait/notify, volatile, deadlock prevention, and producer-consumer." badge="MULTITHREADING" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Synchronization</h2>
        <div class="prose"><p>When threads share data, <strong>synchronization</strong> prevents race conditions by ensuring only one thread accesses critical sections at a time.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">synchronized</h3><app-code-block [code]="codeSync" /></div>
          <div class="op-card"><h3 class="op-title">wait() / notify()</h3><app-code-block [code]="codeWait" /></div>
          <div class="op-card"><h3 class="op-title">volatile</h3><app-code-block [code]="codeVolatile" /></div>
          <div class="op-card"><h3 class="op-title">Deadlock</h3><app-code-block [code]="codeDeadlock" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/mt-sync.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-sync.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtSyncComponent, { className: "MtSyncComponent", filePath: "src/app/features/tutorials/topics/mt-sync.component.ts", lineNumber: 33 });
})();
export {
  MtSyncComponent
};
//# sourceMappingURL=chunk-XYPND5DN.js.map
