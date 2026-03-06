import{a as l,b as p,c as u}from"./chunk-5NK5W44O.js";import{Pa as r,Tb as t,ab as c,sb as o,tb as a,ub as e,vb as n}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var m=class s{codeIntro=`// Platform thread: ~1MB stack, OS-managed, expensive
// Virtual thread: ~1KB stack, JVM-managed, cheap!

// Create 1 million virtual threads:
try (var exec = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 1_000_000).forEach(i ->
        exec.submit(() -> Thread.sleep(Duration.ofSeconds(1))));
}
// Completes in ~1 second, not 1 million seconds!`;codeCreate=`// 1. Thread.startVirtualThread
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
System.out.println(Thread.currentThread().isVirtual());`;codeExec=`// Best way: virtual thread per task executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    List<Future<String>> futures = urls.stream()
        .map(url -> executor.submit(() -> fetchUrl(url)))
        .toList();

    for (Future<String> f : futures) {
        System.out.println(f.get());  // non-blocking for other tasks
    }
}  // auto-shutdown

// \u26A0\uFE0F DON'T pool virtual threads!
// \u274C Executors.newFixedThreadPool(10)  // wastes the benefit
// \u2705 Executors.newVirtualThreadPerTaskExecutor()`;codeStructured=`// Structured Concurrency (Preview in Java 21+)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<User> userTask = scope.fork(() -> fetchUser(id));
    Subtask<List<Order>> ordersTask = scope.fork(() -> fetchOrders(id));

    scope.join();           // wait for all
    scope.throwIfFailed();  // propagate errors

    User user = userTask.get();
    List<Order> orders = ordersTask.get();
    return new UserProfile(user, orders);
}
// If fetchUser fails \u2192 fetchOrders is cancelled automatically!`;codeSpring=`# Spring Boot 3.2+ virtual threads
spring:
  threads:
    virtual:
      enabled: true  # one line!

# This makes ALL request handling use virtual threads
# Every HTTP request \u2192 new virtual thread
# Perfect for I/O-heavy services (DB, HTTP calls)

# \u26A0\uFE0F Avoid synchronized blocks in virtual thread code
# Use ReentrantLock instead (pinning issue)

# \u26A0\uFE0F Don't use thread-local storage extensively
# Virtual threads are cheap but thread-locals are not`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-mt-virtual"]],decls:32,vars:7,consts:[["title","Virtual Threads","subtitle","Project Loom. Lightweight threads, structured concurrency, and million-thread scalability in Java 21+.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #1e3a5f, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,i){d&1&&(a(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),t(4," Virtual Threads"),e(),a(5,"div",4)(6,"p")(7,"strong"),t(8,"Virtual threads"),e(),t(9," (Java 21) are lightweight threads managed by the JVM. Create millions of them \u2014 they're cheap!"),e(),n(10,"app-code-block",5),e()(),a(11,"section",1)(12,"h2",2),n(13,"app-icon",6),t(14," Patterns"),e(),a(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Creating Virtual Threads"),e(),n(19,"app-code-block",5),e(),a(20,"div",8)(21,"h3",9),t(22,"ExecutorService"),e(),n(23,"app-code-block",5),e(),a(24,"div",8)(25,"h3",9),t(26,"Structured Concurrency"),e(),n(27,"app-code-block",5),e(),a(28,"div",8)(29,"h3",9),t(30,"Spring Boot"),e(),n(31,"app-code-block",5),e()()()()),d&2&&(r(3),o("size",28),r(7),o("code",i.codeIntro),r(3),o("size",28),r(6),o("code",i.codeCreate),r(4),o("code",i.codeExec),r(4),o("code",i.codeStructured),r(4),o("code",i.codeSpring))},dependencies:[l,p,u],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{m as MtVirtualComponent};
