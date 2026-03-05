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

// src/app/features/tutorials/topics/mt-future.component.ts
var MtFutureComponent = class _MtFutureComponent {
  codeIntro = `CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return fetchData();  // runs in ForkJoinPool
});

future.thenApply(data -> parse(data))       // transform
      .thenAccept(result -> save(result))    // consume
      .exceptionally(ex -> { log(ex); return null; });`;
  codeChain = `CompletableFuture.supplyAsync(() -> fetchUser(id))
    .thenApply(user -> user.getEmail())       // User \u2192 String
    .thenApply(email -> email.toUpperCase())   // String \u2192 String
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
  static \u0275fac = function MtFutureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MtFutureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MtFutureComponent, selectors: [["app-topic-mt-future"]], decls: 32, vars: 7, consts: [["title", "CompletableFuture", "subtitle", "Async composition. thenApply, thenCombine, allOf, exception handling, and non-blocking pipelines.", "badge", "MULTITHREADING", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MtFutureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " CompletableFuture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "CompletableFuture");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " enables non-blocking async programming with a fluent API to chain, combine, and handle errors.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Chaining");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Combining");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Error Handling");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Parallel Tasks");
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
      \u0275\u0275property("code", ctx.codeChain);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCombine);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeError);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeParallel);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-future.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MtFutureComponent, [{
    type: Component,
    args: [{ selector: "app-topic-mt-future", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;be89a878d7fde9fd1e193ab701e806fec8898d17827fb12905606abf051d9913;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/mt-future.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=mt-future.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MtFutureComponent, { className: "MtFutureComponent", filePath: "src/app/features/tutorials/topics/mt-future.component.ts", lineNumber: 33 });
})();
export {
  MtFutureComponent
};
//# sourceMappingURL=chunk-HK5RCYKN.js.map
