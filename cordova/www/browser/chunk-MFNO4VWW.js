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

// src/app/features/tutorials/topics/mt-locks.component.ts
var MtLocksComponent = class _MtLocksComponent {
  codeIntro = `// synchronized vs Lock
// synchronized: simple, auto-release
// Lock: tryLock, timeout, fairness, interruptible

ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    // critical section
} finally {
    lock.unlock();  // ALWAYS in finally!
}`;
  codeReentrant = `ReentrantLock lock = new ReentrantLock(true); // fair

// tryLock: non-blocking attempt
if (lock.tryLock()) {
    try { /* work */ } finally { lock.unlock(); }
}

// tryLock with timeout
if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try { /* work */ } finally { lock.unlock(); }
}

// Condition (replaces wait/notify)
Condition notEmpty = lock.newCondition();
lock.lock();
try {
    while (queue.isEmpty())
        notEmpty.await();  // releases lock & waits
    return queue.remove();
} finally { lock.unlock(); }`;
  codeRW = `// ReadWriteLock: multiple readers OR single writer
ReadWriteLock rwLock = new ReentrantReadWriteLock();

// Multiple readers can read simultaneously
rwLock.readLock().lock();
try {
    return cache.get(key);
} finally { rwLock.readLock().unlock(); }

// Only one writer at a time (blocks readers too)
rwLock.writeLock().lock();
try {
    cache.put(key, computeValue());
} finally { rwLock.writeLock().unlock(); }`;
  codeStamped = `// StampedLock: optimistic reads (fastest!)
StampedLock sl = new StampedLock();

// Optimistic read (no lock!)
long stamp = sl.tryOptimisticRead();
double x = this.x, y = this.y;
if (!sl.validate(stamp)) {     // check if modified
    stamp = sl.readLock();     // fall back to read lock
    try { x = this.x; y = this.y; }
    finally { sl.unlockRead(stamp); }
}

// Write lock
long stamp = sl.writeLock();
try { this.x = newX; this.y = newY; }
finally { sl.unlockWrite(stamp); }`;
  codeSemaphore = `// Semaphore: limit concurrent access
Semaphore semaphore = new Semaphore(5); // max 5 concurrent

void accessResource() throws InterruptedException {
    semaphore.acquire();  // blocks if 5 threads using it
    try {
        // use limited resource (e.g., DB connection)
    } finally {
        semaphore.release();
    }
}

// CountDownLatch: wait for N events
CountDownLatch latch = new CountDownLatch(3);
// In worker threads: latch.countDown();
latch.await();  // blocks until count reaches 0

// CyclicBarrier: threads wait for each other
CyclicBarrier barrier = new CyclicBarrier(3, () -> merge());`;
  static \u0275fac = function MtLocksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtLocksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtLocksComponent, selectors: [["app-topic-mt-locks"]], decls: 36, vars: 7, consts: [["title", "Locks & Conditions", "subtitle", "Advanced locking. ReentrantLock, ReadWriteLock, StampedLock, Condition variables, and fairness.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtLocksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Locks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "Lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " interface provides more control than ");
      \u0275\u0275elementStart(11, "code");
      \u0275\u0275text(12, "synchronized");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ": tryLock, timeout, fairness, read/write separation.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Lock Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "ReentrantLock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "ReadWriteLock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "StampedLock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "Semaphore");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeReentrant);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRW);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStamped);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSemaphore);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-locks.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtLocksComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-locks", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Locks & Conditions" subtitle="Advanced locking. ReentrantLock, ReadWriteLock, StampedLock, Condition variables, and fairness." badge="MULTITHREADING" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Locks</h2>
        <div class="prose"><p>The <code>Lock</code> interface provides more control than <code>synchronized</code>: tryLock, timeout, fairness, read/write separation.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Lock Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">ReentrantLock</h3><app-code-block [code]="codeReentrant" /></div>
          <div class="op-card"><h3 class="op-title">ReadWriteLock</h3><app-code-block [code]="codeRW" /></div>
          <div class="op-card"><h3 class="op-title">StampedLock</h3><app-code-block [code]="codeStamped" /></div>
          <div class="op-card"><h3 class="op-title">Semaphore</h3><app-code-block [code]="codeSemaphore" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;a6d8d70714223df037f00fe69e6139d570d0f0e1f329233702e3e4a3d46b4ce3;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/mt-locks.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-locks.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtLocksComponent, { className: "MtLocksComponent", filePath: "src/app/features/tutorials/topics/mt-locks.component.ts", lineNumber: 33 });
})();
export {
  MtLocksComponent
};
//# sourceMappingURL=chunk-MFNO4VWW.js.map
