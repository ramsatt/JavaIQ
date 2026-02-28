import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-locks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c3aed; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtLocksComponent {
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
}
