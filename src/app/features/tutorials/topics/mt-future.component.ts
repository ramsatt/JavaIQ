import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-mt-future',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="CompletableFuture" subtitle="Async composition. thenApply, thenCombine, allOf, exception handling, and non-blocking pipelines." badge="MULTITHREADING" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> CompletableFuture</h2>
        <div class="prose"><p><strong>CompletableFuture</strong> enables non-blocking async programming with a fluent API to chain, combine, and handle errors.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Chaining</h3><app-code-block [code]="codeChain" /></div>
          <div class="op-card"><h3 class="op-title">Combining</h3><app-code-block [code]="codeCombine" /></div>
          <div class="op-card"><h3 class="op-title">Error Handling</h3><app-code-block [code]="codeError" /></div>
          <div class="op-card"><h3 class="op-title">Parallel Tasks</h3><app-code-block [code]="codeParallel" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MtFutureComponent {
  codeIntro = `CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return fetchData();  // runs in ForkJoinPool
});

future.thenApply(data -> parse(data))       // transform
      .thenAccept(result -> save(result))    // consume
      .exceptionally(ex -> { log(ex); return null; });`;
  codeChain = `CompletableFuture.supplyAsync(() -> fetchUser(id))
    .thenApply(user -> user.getEmail())       // User → String
    .thenApply(email -> email.toUpperCase())   // String → String
    .thenAccept(email -> System.out.println(email)); // consume

// thenApply:  transform result (map)
// thenAccept: consume result (void)
// thenRun:    run action (ignores result)

// Async variants (run on different thread)
.thenApplyAsync(data -> process(data))
.thenApplyAsync(data -> process(data), myExecutor)`;
  codeCombine = `// Combine two independent futures
CompletableFuture<User> userF = CompletableFuture.supplyAsync(() -> getUser(id));
CompletableFuture<List<Order>> ordersF = CompletableFuture.supplyAsync(() -> getOrders(id));

// thenCombine: combine when both complete
CompletableFuture<UserProfile> profileF = userF.thenCombine(ordersF,
    (user, orders) -> new UserProfile(user, orders));

// thenCompose: chain sequential async operations (flatMap)
CompletableFuture<OrderDetails> detailsF = userF
    .thenCompose(user -> getOrderDetails(user.getId()));`;
  codeError = `CompletableFuture.supplyAsync(() -> fetchData())
    .thenApply(data -> parse(data))
    .exceptionally(ex -> {
        log.error("Error: {}", ex.getMessage());
        return defaultValue;
    });

// handle: both success and failure
.handle((result, ex) -> {
    if (ex != null) return fallback;
    return result;
});

// whenComplete: peek at result/error
.whenComplete((result, ex) -> {
    if (ex != null) log.error("Failed", ex);
    else log.info("Got: {}", result);
});`;
  codeParallel = `// Run multiple tasks in parallel
List<CompletableFuture<Product>> futures = ids.stream()
    .map(id -> CompletableFuture.supplyAsync(() -> fetchProduct(id)))
    .toList();

// Wait for ALL to complete
CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
    .thenApply(v -> futures.stream()
        .map(CompletableFuture::join)
        .toList())
    .thenAccept(products -> System.out.println(products));

// Wait for FIRST to complete
CompletableFuture.anyOf(future1, future2, future3)
    .thenAccept(first -> System.out.println("First: " + first));

// With timeout (Java 9+)
future.orTimeout(5, TimeUnit.SECONDS)
      .completeOnTimeout(fallback, 3, TimeUnit.SECONDS);`;
}
