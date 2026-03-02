import{a as u,b as s,c as p}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as o,Xa as l,mb as n,nb as i,ob as e,pb as r}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var m=class d{codeIntro=`// Don't: new Thread() for every task
// Do: use a thread pool!

ExecutorService executor = Executors.newFixedThreadPool(4);
executor.execute(() -> System.out.println("Task 1"));
executor.execute(() -> System.out.println("Task 2"));
executor.shutdown();`;codePools=`// Fixed pool: exact number of threads
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
    new ThreadPoolExecutor.CallerRunsPolicy());`;codeFuture=`// Submit Callable \u2192 get Future
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
String first = executor.invokeAny(tasks);  // first to complete`;codeScheduled=`ScheduledExecutorService scheduler =
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
    TimeUnit.SECONDS);`;codeShutdown=`// Graceful shutdown pattern
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
}  // auto-shutdown`;static \u0275fac=function(a){return new(a||d)};static \u0275cmp=l({type:d,selectors:[["app-topic-mt-executors"]],decls:32,vars:7,consts:[["title","ExecutorService","subtitle","Manage thread pools efficiently. Fixed, cached, scheduled pools, and proper shutdown strategies.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,c){a&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Executors"),e(),i(5,"div",4)(6,"p")(7,"strong"),t(8,"ExecutorService"),e(),t(9," manages thread pools so you don't create threads manually. Submit tasks, the pool handles execution."),e(),r(10,"app-code-block",5),e()(),i(11,"section",1)(12,"h2",2),r(13,"app-icon",6),t(14," Pool Types"),e(),i(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Pool Types"),e(),r(19,"app-code-block",5),e(),i(20,"div",8)(21,"h3",9),t(22,"Submit & Future"),e(),r(23,"app-code-block",5),e(),i(24,"div",8)(25,"h3",9),t(26,"ScheduledExecutor"),e(),r(27,"app-code-block",5),e(),i(28,"div",8)(29,"h3",9),t(30,"Shutdown"),e(),r(31,"app-code-block",5),e()()()()),a&2&&(o(3),n("size",28),o(7),n("code",c.codeIntro),o(3),n("size",28),o(6),n("code",c.codePools),o(4),n("code",c.codeFuture),o(4),n("code",c.codeScheduled),o(4),n("code",c.codeShutdown))},dependencies:[u,s,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as MtExecutorsComponent};
