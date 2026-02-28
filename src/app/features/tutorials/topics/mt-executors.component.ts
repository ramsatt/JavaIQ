import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-executors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtExecutorsComponent {
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
  codeFuture = `// Submit Callable → get Future
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
}
