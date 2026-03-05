import{a as s,b as p,c as m}from"./chunk-H4UXZOTD.js";import{$a as d,Pa as n,Rb as t,rb as i,sb as o,tb as e,ub as c}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var k=class l{codeIntro=`// synchronized vs Lock
// synchronized: simple, auto-release
// Lock: tryLock, timeout, fairness, interruptible

ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    // critical section
} finally {
    lock.unlock();  // ALWAYS in finally!
}`;codeReentrant=`ReentrantLock lock = new ReentrantLock(true); // fair

// tryLock: non-blocking attempt
if (lock.tryLock()) {
    try { /* work */ } finally { lock.unlock(); }
}

// tryLock with timeout
if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try { /* work */ } finally { lock.unlock(); }
}

// Condition (replaces wait/notify)
Condition notEmpty = lock.newCondition();
lock.lock();
try {
    while (queue.isEmpty())
        notEmpty.await();  // releases lock & waits
    return queue.remove();
} finally { lock.unlock(); }`;codeRW=`// ReadWriteLock: multiple readers OR single writer
ReadWriteLock rwLock = new ReentrantReadWriteLock();

// Multiple readers can read simultaneously
rwLock.readLock().lock();
try {
    return cache.get(key);
} finally { rwLock.readLock().unlock(); }

// Only one writer at a time (blocks readers too)
rwLock.writeLock().lock();
try {
    cache.put(key, computeValue());
} finally { rwLock.writeLock().unlock(); }`;codeStamped=`// StampedLock: optimistic reads (fastest!)
StampedLock sl = new StampedLock();

// Optimistic read (no lock!)
long stamp = sl.tryOptimisticRead();
double x = this.x, y = this.y;
if (!sl.validate(stamp)) {     // check if modified
    stamp = sl.readLock();     // fall back to read lock
    try { x = this.x; y = this.y; }
    finally { sl.unlockRead(stamp); }
}

// Write lock
long stamp = sl.writeLock();
try { this.x = newX; this.y = newY; }
finally { sl.unlockWrite(stamp); }`;codeSemaphore=`// Semaphore: limit concurrent access
Semaphore semaphore = new Semaphore(5); // max 5 concurrent

void accessResource() throws InterruptedException {
    semaphore.acquire();  // blocks if 5 threads using it
    try {
        // use limited resource (e.g., DB connection)
    } finally {
        semaphore.release();
    }
}

// CountDownLatch: wait for N events
CountDownLatch latch = new CountDownLatch(3);
// In worker threads: latch.countDown();
latch.await();  // blocks until count reaches 0

// CyclicBarrier: threads wait for each other
CyclicBarrier barrier = new CyclicBarrier(3, () -> merge());`;static \u0275fac=function(a){return new(a||l)};static \u0275cmp=d({type:l,selectors:[["app-topic-mt-locks"]],decls:36,vars:7,consts:[["title","Locks & Conditions","subtitle","Advanced locking. ReentrantLock, ReadWriteLock, StampedLock, Condition variables, and fairness.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,r){a&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),c(3,"app-icon",3),t(4," Locks"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"code"),t(9,"Lock"),e(),t(10," interface provides more control than "),o(11,"code"),t(12,"synchronized"),e(),t(13,": tryLock, timeout, fairness, read/write separation."),e(),c(14,"app-code-block",5),e()(),o(15,"section",1)(16,"h2",2),c(17,"app-icon",6),t(18," Lock Types"),e(),o(19,"div",7)(20,"div",8)(21,"h3",9),t(22,"ReentrantLock"),e(),c(23,"app-code-block",5),e(),o(24,"div",8)(25,"h3",9),t(26,"ReadWriteLock"),e(),c(27,"app-code-block",5),e(),o(28,"div",8)(29,"h3",9),t(30,"StampedLock"),e(),c(31,"app-code-block",5),e(),o(32,"div",8)(33,"h3",9),t(34,"Semaphore"),e(),c(35,"app-code-block",5),e()()()()),a&2&&(n(3),i("size",28),n(11),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeReentrant),n(4),i("code",r.codeRW),n(4),i("code",r.codeStamped),n(4),i("code",r.codeSemaphore))},dependencies:[s,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c3aed}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{k as MtLocksComponent};
