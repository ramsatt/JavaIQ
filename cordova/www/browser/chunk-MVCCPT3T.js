import{a as y,b as E}from"./chunk-AMVNOPTI.js";import{a as T}from"./chunk-SI5PESLS.js";import{$a as r,Ja as h,Z as u,Za as f,_ as g,_a as x,ab as t,bb as e,cb as d,ib as b,ja as l,jb as v,kb as m,sb as C,ub as n,vb as p,ya as i}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var k=(s,c)=>c.name;function S(s,c){if(s&1){let o=b();t(0,"div",16),v("click",function(){let _=u(o).$implicit,w=m();return g(w.select(_.name))}),t(1,"span",17),n(2),e(),t(3,"span",18),n(4),e()()}if(s&2){let o=c.$implicit,a=m();C("active",a.active()===o.name),i(2),p(o.icon),i(2),p(o.name)}}var M=class s{active=l("");status=l("Click a state to learn about the thread lifecycle.");states=l([{name:"NEW",icon:"\u{1F195}"},{name:"RUNNABLE",icon:"\u25B6\uFE0F"},{name:"BLOCKED",icon:"\u{1F6AB}"},{name:"WAITING",icon:"\u23F8\uFE0F"},{name:"TERMINATED",icon:"\u{1F3C1}"}]);codeIntro=`// Way 1: Extend Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running!"); }
}
new MyThread().start();

// Way 2: Implement Runnable (preferred!)
Runnable task = () -> System.out.println("Running!");
new Thread(task).start();

// Way 3: Implement Callable (returns result)
Callable<Integer> task = () -> { return 42; };`;codeRunnable=`// Runnable: no return value, no checked exceptions
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
exec.shutdown();`;codeControl=`Thread t = new Thread(() -> {
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
Thread.yield();  // let other threads run`;codeDaemon=`// Daemon threads die when all user threads finish
Thread daemon = new Thread(() -> {
    while (true) {
        cleanupOldFiles();
        Thread.sleep(60000);
    }
});
daemon.setDaemon(true);  // must set BEFORE start()
daemon.start();

// JVM exits when only daemon threads remain
// Use for: background tasks, GC, monitoring`;codeSafety=`// \u274C NOT thread-safe
int count = 0;
void increment() { count++; }  // race condition!

// \u2705 Thread-safe options:
// 1. synchronized
synchronized void increment() { count++; }

// 2. AtomicInteger
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();

// 3. volatile (visibility only)
volatile boolean running = true;`;select(c){this.active.set(c);let o={NEW:"NEW: Thread created but start() not yet called.",RUNNABLE:"RUNNABLE: Thread is executing or ready to execute (waiting for CPU).",BLOCKED:"BLOCKED: Waiting to acquire a monitor lock (synchronized block).",WAITING:"WAITING: Waiting indefinitely for another thread (wait(), join()).",TERMINATED:"TERMINATED: Thread has completed execution or was stopped."};this.status.set(o[c]??"")}static \u0275fac=function(o){return new(o||s)};static \u0275cmp=h({type:s,selectors:[["app-topic-mt-threads"]],decls:43,vars:9,consts:[["title","Threads & Runnable","subtitle","Create and manage threads. Thread lifecycle, Runnable vs Callable, daemon threads, and thread safety.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-indigo",3,"size"],[1,"lifecycle"],[1,"state",3,"active"],[1,"viz-status"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"state",3,"click"],[1,"st-icon"],[1,"st-name"]],template:function(o,a){o&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),d(3,"app-icon",3),n(4," Threads"),e(),t(5,"div",4)(6,"p"),n(7,"A "),t(8,"strong"),n(9,"thread"),e(),n(10," is the smallest unit of execution. Java supports creating threads by extending Thread or implementing Runnable/Callable."),e(),d(11,"app-code-block",5),e()(),t(12,"section",1)(13,"div",6)(14,"h3",7),d(15,"app-icon",8),n(16," Thread Lifecycle"),e(),t(17,"div",9),f(18,S,5,4,"div",10,k),e(),t(20,"div",11),n(21),e()()(),t(22,"section",1)(23,"h2",2),d(24,"app-icon",12),n(25," Patterns"),e(),t(26,"div",13)(27,"div",14)(28,"h3",15),n(29,"Runnable vs Callable"),e(),d(30,"app-code-block",5),e(),t(31,"div",14)(32,"h3",15),n(33,"Thread Control"),e(),d(34,"app-code-block",5),e(),t(35,"div",14)(36,"h3",15),n(37,"Daemon Threads"),e(),d(38,"app-code-block",5),e(),t(39,"div",14)(40,"h3",15),n(41,"Thread Safety"),e(),d(42,"app-code-block",5),e()()()()),o&2&&(i(3),r("size",28),i(8),r("code",a.codeIntro),i(4),r("size",22),i(3),x(a.states()),i(3),p(a.status()),i(3),r("size",28),i(6),r("code",a.codeRunnable),i(4),r("code",a.codeControl),i(4),r("code",a.codeDaemon),i(4),r("code",a.codeSafety))},dependencies:[T,y,E],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.lifecycle[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:20px}.state[_ngcontent-%COMP%]{padding:12px 6px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.state.active[_ngcontent-%COMP%]{border-color:#4f46e5;background:#eef2ff;transform:scale(1.05)}.st-icon[_ngcontent-%COMP%]{display:block;font-size:1.2rem;margin-bottom:4px}.st-name[_ngcontent-%COMP%]{font-size:.55rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{M as MtThreadsComponent};
