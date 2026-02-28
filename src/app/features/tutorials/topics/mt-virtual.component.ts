import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-virtual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Virtual Threads" subtitle="Project Loom. Lightweight threads, structured concurrency, and million-thread scalability in Java 21+." badge="MULTITHREADING" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> Virtual Threads</h2>
        <div class="prose"><p><strong>Virtual threads</strong> (Java 21) are lightweight threads managed by the JVM. Create millions of them — they're cheap!</p><app-code-block [code]="codeIntro" /></div>
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtVirtualComponent {
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

// ⚠️ DON'T pool virtual threads!
// ❌ Executors.newFixedThreadPool(10)  // wastes the benefit
// ✅ Executors.newVirtualThreadPerTaskExecutor()`;
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
// If fetchUser fails → fetchOrders is cancelled automatically!`;
  codeSpring = `# Spring Boot 3.2+ virtual threads
spring:
  threads:
    virtual:
      enabled: true  # one line!

# This makes ALL request handling use virtual threads
# Every HTTP request → new virtual thread
# Perfect for I/O-heavy services (DB, HTTP calls)

# ⚠️ Avoid synchronized blocks in virtual thread code
# Use ReentrantLock instead (pinning issue)

# ⚠️ Don't use thread-local storage extensively
# Virtual threads are cheap but thread-locals are not`;
}
