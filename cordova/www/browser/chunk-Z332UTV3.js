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

// src/app/features/tutorials/topics/mt-atomic.component.ts
var MtAtomicComponent = class _MtAtomicComponent {
  codeIntro = `// \u274C Not thread-safe
int count = 0;
count++;  // read \u2192 increment \u2192 write (3 steps!)

// \u2705 Thread-safe (lock-free!)
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();  // atomic CAS operation`;
  codeInt = `AtomicInteger counter = new AtomicInteger(0);

counter.get();                // read
counter.set(10);              // write
counter.incrementAndGet();    // ++counter (returns new)
counter.getAndIncrement();    // counter++ (returns old)
counter.addAndGet(5);         // counter += 5
counter.compareAndSet(10, 20); // if 10 \u2192 set 20

// AtomicLong, AtomicBoolean \u2014 same API
AtomicLong total = new AtomicLong(0);
AtomicBoolean flag = new AtomicBoolean(false);

// AtomicIntegerArray \u2014 atomic array ops
AtomicIntegerArray arr = new AtomicIntegerArray(10);
arr.getAndIncrement(0);  // increment index 0`;
  codeRef = `// AtomicReference \u2014 atomic object reference
AtomicReference<User> userRef = new AtomicReference<>(initialUser);
userRef.get();
userRef.set(newUser);
userRef.compareAndSet(expectedUser, newUser);

// Update function
userRef.updateAndGet(user -> user.withName("Updated"));

// AtomicStampedReference \u2014 solves ABA problem
AtomicStampedReference<String> ref = new AtomicStampedReference<>("A", 0);
int stamp = ref.getStamp();
ref.compareAndSet("A", "B", stamp, stamp + 1);`;
  codeAccum = `// LongAdder \u2014 faster than AtomicLong for high contention
LongAdder adder = new LongAdder();
adder.increment();      // thread 1
adder.add(5);           // thread 2
long total = adder.sum(); // get total

// LongAccumulator \u2014 custom accumulation function
LongAccumulator max = new LongAccumulator(Long::max, Long.MIN_VALUE);
max.accumulate(42);  // thread 1
max.accumulate(99);  // thread 2
long result = max.get();  // 99

// DoubleAdder, DoubleAccumulator \u2014 for doubles`;
  codeCas = `// CAS (Compare-And-Swap) retry loop
// Used internally by all Atomic classes

AtomicInteger count = new AtomicInteger(0);

// Increment with CAS (what incrementAndGet does)
int expected, updated;
do {
    expected = count.get();
    updated = expected + 1;
} while (!count.compareAndSet(expected, updated));

// If another thread changed the value between
// get() and compareAndSet(), retry!
// No locks, no blocking \u2014 just retry`;
  static \u0275fac = function MtAtomicComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtAtomicComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtAtomicComponent, selectors: [["app-topic-mt-atomic"]], decls: 32, vars: 7, consts: [["title", "Atomic Operations", "subtitle", "Lock-free thread safety. AtomicInteger, AtomicReference, CAS, accumulators, and VarHandle.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #065f46, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtAtomicComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Atomics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Atomic classes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " provide lock-free thread safety using CAS (Compare-And-Swap) CPU instructions. Faster than synchronized for simple operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Atomic Integer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "AtomicReference");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Accumulators");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "CAS Pattern");
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
      \u0275\u0275property("code", ctx.codeInt);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRef);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAccum);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCas);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-atomic.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtAtomicComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-atomic", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Atomic Operations" subtitle="Lock-free thread safety. AtomicInteger, AtomicReference, CAS, accumulators, and VarHandle." badge="MULTITHREADING" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Atomics</h2>
        <div class="prose"><p><strong>Atomic classes</strong> provide lock-free thread safety using CAS (Compare-And-Swap) CPU instructions. Faster than synchronized for simple operations.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Types</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Atomic Integer</h3><app-code-block [code]="codeInt" /></div>
          <div class="op-card"><h3 class="op-title">AtomicReference</h3><app-code-block [code]="codeRef" /></div>
          <div class="op-card"><h3 class="op-title">Accumulators</h3><app-code-block [code]="codeAccum" /></div>
          <div class="op-card"><h3 class="op-title">CAS Pattern</h3><app-code-block [code]="codeCas" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;2af45e24d5723a362d7e482ed60c327f114812634e16647db885d2da64291dab;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/mt-atomic.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-atomic.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtAtomicComponent, { className: "MtAtomicComponent", filePath: "src/app/features/tutorials/topics/mt-atomic.component.ts", lineNumber: 33 });
})();
export {
  MtAtomicComponent
};
//# sourceMappingURL=chunk-Z332UTV3.js.map
