import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-atomic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtAtomicComponent {
  codeIntro = `// ❌ Not thread-safe
int count = 0;
count++;  // read → increment → write (3 steps!)

// ✅ Thread-safe (lock-free!)
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();  // atomic CAS operation`;
  codeInt = `AtomicInteger counter = new AtomicInteger(0);

counter.get();                // read
counter.set(10);              // write
counter.incrementAndGet();    // ++counter (returns new)
counter.getAndIncrement();    // counter++ (returns old)
counter.addAndGet(5);         // counter += 5
counter.compareAndSet(10, 20); // if 10 → set 20

// AtomicLong, AtomicBoolean — same API
AtomicLong total = new AtomicLong(0);
AtomicBoolean flag = new AtomicBoolean(false);

// AtomicIntegerArray — atomic array ops
AtomicIntegerArray arr = new AtomicIntegerArray(10);
arr.getAndIncrement(0);  // increment index 0`;
  codeRef = `// AtomicReference — atomic object reference
AtomicReference<User> userRef = new AtomicReference<>(initialUser);
userRef.get();
userRef.set(newUser);
userRef.compareAndSet(expectedUser, newUser);

// Update function
userRef.updateAndGet(user -> user.withName("Updated"));

// AtomicStampedReference — solves ABA problem
AtomicStampedReference<String> ref = new AtomicStampedReference<>("A", 0);
int stamp = ref.getStamp();
ref.compareAndSet("A", "B", stamp, stamp + 1);`;
  codeAccum = `// LongAdder — faster than AtomicLong for high contention
LongAdder adder = new LongAdder();
adder.increment();      // thread 1
adder.add(5);           // thread 2
long total = adder.sum(); // get total

// LongAccumulator — custom accumulation function
LongAccumulator max = new LongAccumulator(Long::max, Long.MIN_VALUE);
max.accumulate(42);  // thread 1
max.accumulate(99);  // thread 2
long result = max.get();  // 99

// DoubleAdder, DoubleAccumulator — for doubles`;
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
// No locks, no blocking — just retry`;
}
