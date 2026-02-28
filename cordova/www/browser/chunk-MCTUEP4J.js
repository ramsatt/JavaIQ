import{a as p,b as m}from"./chunk-AMVNOPTI.js";import{a as s}from"./chunk-SI5PESLS.js";import{$a as i,Ja as l,ab as n,bb as e,cb as a,ub as t,ya as o}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var u=class d{codeIntro=`// Race condition example
class Counter {
    private int count = 0;
    void increment() { count++; }  // NOT atomic!
    // count++ = read \u2192 increment \u2192 write (3 steps!)
    // Two threads can read the same value
}

// Fix with synchronized:
class SafeCounter {
    private int count = 0;
    synchronized void increment() { count++; }
}`;codeSync=`// Method-level synchronization
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
static synchronized void log(String msg) { }`;codeWait=`// Producer-Consumer with wait/notify
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
}`;codeVolatile=`// volatile: ensures visibility across threads
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
// and never see the change \u2192 infinite loop!`;codeDeadlock=`// DEADLOCK: two threads waiting for each other
// Thread 1: locks A, then tries to lock B
// Thread 2: locks B, then tries to lock A
// \u2192 Both wait forever!

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

// 3. Avoid nested locks when possible`;static \u0275fac=function(c){return new(c||d)};static \u0275cmp=l({type:d,selectors:[["app-topic-mt-sync"]],decls:33,vars:7,consts:[["title","Synchronization","subtitle","Thread coordination. synchronized, wait/notify, volatile, deadlock prevention, and producer-consumer.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,r){c&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Synchronization"),e(),n(5,"div",4)(6,"p"),t(7,"When threads share data, "),n(8,"strong"),t(9,"synchronization"),e(),t(10," prevents race conditions by ensuring only one thread accesses critical sections at a time."),e(),a(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Patterns"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"synchronized"),e(),a(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),t(23,"wait() / notify()"),e(),a(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),t(27,"volatile"),e(),a(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Deadlock"),e(),a(32,"app-code-block",5),e()()()()),c&2&&(o(3),i("size",28),o(8),i("code",r.codeIntro),o(3),i("size",28),o(6),i("code",r.codeSync),o(4),i("code",r.codeWait),o(4),i("code",r.codeVolatile),o(4),i("code",r.codeDeadlock))},dependencies:[s,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as MtSyncComponent};
