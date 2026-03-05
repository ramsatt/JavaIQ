import{a as u,b as c,c as m}from"./chunk-4EMTR65D.js";import{Ib as t,Na as n,Ya as s,nb as o,ob as r,pb as e,qb as i}from"./chunk-X3QUIMOS.js";import"./chunk-NWJ5J3BN.js";var d=class p{codeIntro=`CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    return fetchData();  // runs in ForkJoinPool
});

future.thenApply(data -> parse(data))       // transform
      .thenAccept(result -> save(result))    // consume
      .exceptionally(ex -> { log(ex); return null; });`;codeChain=`CompletableFuture.supplyAsync(() -> fetchUser(id))
    .thenApply(user -> user.getEmail())       // User \u2192 String
    .thenApply(email -> email.toUpperCase())   // String \u2192 String
    .thenAccept(email -> System.out.println(email)); // consume

// thenApply:  transform result (map)
// thenAccept: consume result (void)
// thenRun:    run action (ignores result)

// Async variants (run on different thread)
.thenApplyAsync(data -> process(data))
.thenApplyAsync(data -> process(data), myExecutor)`;codeCombine=`// Combine two independent futures
CompletableFuture<User> userF = CompletableFuture.supplyAsync(() -> getUser(id));
CompletableFuture<List<Order>> ordersF = CompletableFuture.supplyAsync(() -> getOrders(id));

// thenCombine: combine when both complete
CompletableFuture<UserProfile> profileF = userF.thenCombine(ordersF,
    (user, orders) -> new UserProfile(user, orders));

// thenCompose: chain sequential async operations (flatMap)
CompletableFuture<OrderDetails> detailsF = userF
    .thenCompose(user -> getOrderDetails(user.getId()));`;codeError=`CompletableFuture.supplyAsync(() -> fetchData())
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
});`;codeParallel=`// Run multiple tasks in parallel
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
      .completeOnTimeout(fallback, 3, TimeUnit.SECONDS);`;static \u0275fac=function(a){return new(a||p)};static \u0275cmp=s({type:p,selectors:[["app-topic-mt-future"]],decls:32,vars:7,consts:[["title","CompletableFuture","subtitle","Async composition. thenApply, thenCombine, allOf, exception handling, and non-blocking pipelines.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,l){a&1&&(r(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," CompletableFuture"),e(),r(5,"div",4)(6,"p")(7,"strong"),t(8,"CompletableFuture"),e(),t(9," enables non-blocking async programming with a fluent API to chain, combine, and handle errors."),e(),i(10,"app-code-block",5),e()(),r(11,"section",1)(12,"h2",2),i(13,"app-icon",6),t(14," Patterns"),e(),r(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Chaining"),e(),i(19,"app-code-block",5),e(),r(20,"div",8)(21,"h3",9),t(22,"Combining"),e(),i(23,"app-code-block",5),e(),r(24,"div",8)(25,"h3",9),t(26,"Error Handling"),e(),i(27,"app-code-block",5),e(),r(28,"div",8)(29,"h3",9),t(30,"Parallel Tasks"),e(),i(31,"app-code-block",5),e()()()()),a&2&&(n(3),o("size",28),n(7),o("code",l.codeIntro),n(3),o("size",28),n(6),o("code",l.codeChain),n(4),o("code",l.codeCombine),n(4),o("code",l.codeError),n(4),o("code",l.codeParallel))},dependencies:[u,c,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{d as MtFutureComponent};
