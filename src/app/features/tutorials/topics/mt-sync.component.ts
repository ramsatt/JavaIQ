import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-sync',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtSyncComponent {
  codeIntro = `// Race condition example
class Counter {
    private int count = 0;
    void increment() { count++; }  // NOT atomic!
    // count++ = read → increment → write (3 steps!)
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
// and never see the change → infinite loop!`;
  codeDeadlock = `// DEADLOCK: two threads waiting for each other
// Thread 1: locks A, then tries to lock B
// Thread 2: locks B, then tries to lock A
// → Both wait forever!

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
}
