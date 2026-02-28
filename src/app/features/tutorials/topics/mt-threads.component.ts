import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .lifecycle { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin-bottom: 20px; }
    .state { padding: 12px 6px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .state.active { border-color: #4f46e5; background: #eef2ff; transform: scale(1.05); }
    .st-icon { display: block; font-size: 1.2rem; margin-bottom: 4px; } .st-name { font-size: 0.55rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtThreadsComponent {
  active = signal(''); status = signal('Click a state to learn about the thread lifecycle.');
  states = signal([
    { name: 'NEW', icon: '🆕' }, { name: 'RUNNABLE', icon: '▶️' }, { name: 'BLOCKED', icon: '🚫' },
    { name: 'WAITING', icon: '⏸️' }, { name: 'TERMINATED', icon: '🏁' },
  ]);
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
  codeSafety = `// ❌ NOT thread-safe
int count = 0;
void increment() { count++; }  // race condition!

// ✅ Thread-safe options:
// 1. synchronized
synchronized void increment() { count++; }

// 2. AtomicInteger
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();

// 3. volatile (visibility only)
volatile boolean running = true;`;

  select(name: string) {
    this.active.set(name);
    const info: Record<string, string> = {
      NEW: 'NEW: Thread created but start() not yet called.',
      RUNNABLE: 'RUNNABLE: Thread is executing or ready to execute (waiting for CPU).',
      BLOCKED: 'BLOCKED: Waiting to acquire a monitor lock (synchronized block).',
      WAITING: 'WAITING: Waiting indefinitely for another thread (wait(), join()).',
      TERMINATED: 'TERMINATED: Thread has completed execution or was stopped.',
    };
    this.status.set(info[name] ?? '');
  }
}
