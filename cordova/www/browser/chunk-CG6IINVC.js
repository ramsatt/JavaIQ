import{a as s,b as l}from"./chunk-AMVNOPTI.js";import{a as p}from"./chunk-SI5PESLS.js";import{$a as o,Ja as m,ab as r,bb as e,cb as i,ub as t,ya as n}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var g=class d{codeIntro=`// \u274C Not thread-safe
int count = 0;
count++;  // read \u2192 increment \u2192 write (3 steps!)

// \u2705 Thread-safe (lock-free!)
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();  // atomic CAS operation`;codeInt=`AtomicInteger counter = new AtomicInteger(0);

counter.get();                // read
counter.set(10);              // write
counter.incrementAndGet();    // ++counter (returns new)
counter.getAndIncrement();    // counter++ (returns old)
counter.addAndGet(5);         // counter += 5
counter.compareAndSet(10, 20); // if 10 \u2192 set 20

// AtomicLong, AtomicBoolean \u2014 same API
AtomicLong total = new AtomicLong(0);
AtomicBoolean flag = new AtomicBoolean(false);

// AtomicIntegerArray \u2014 atomic array ops
AtomicIntegerArray arr = new AtomicIntegerArray(10);
arr.getAndIncrement(0);  // increment index 0`;codeRef=`// AtomicReference \u2014 atomic object reference
AtomicReference<User> userRef = new AtomicReference<>(initialUser);
userRef.get();
userRef.set(newUser);
userRef.compareAndSet(expectedUser, newUser);

// Update function
userRef.updateAndGet(user -> user.withName("Updated"));

// AtomicStampedReference \u2014 solves ABA problem
AtomicStampedReference<String> ref = new AtomicStampedReference<>("A", 0);
int stamp = ref.getStamp();
ref.compareAndSet("A", "B", stamp, stamp + 1);`;codeAccum=`// LongAdder \u2014 faster than AtomicLong for high contention
LongAdder adder = new LongAdder();
adder.increment();      // thread 1
adder.add(5);           // thread 2
long total = adder.sum(); // get total

// LongAccumulator \u2014 custom accumulation function
LongAccumulator max = new LongAccumulator(Long::max, Long.MIN_VALUE);
max.accumulate(42);  // thread 1
max.accumulate(99);  // thread 2
long result = max.get();  // 99

// DoubleAdder, DoubleAccumulator \u2014 for doubles`;codeCas=`// CAS (Compare-And-Swap) retry loop
// Used internally by all Atomic classes

AtomicInteger count = new AtomicInteger(0);

// Increment with CAS (what incrementAndGet does)
int expected, updated;
do {
    expected = count.get();
    updated = expected + 1;
} while (!count.compareAndSet(expected, updated));

// If another thread changed the value between
// get() and compareAndSet(), retry!
// No locks, no blocking \u2014 just retry`;static \u0275fac=function(a){return new(a||d)};static \u0275cmp=m({type:d,selectors:[["app-topic-mt-atomic"]],decls:32,vars:7,consts:[["title","Atomic Operations","subtitle","Lock-free thread safety. AtomicInteger, AtomicReference, CAS, accumulators, and VarHandle.","badge","MULTITHREADING","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,c){a&1&&(r(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," Atomics"),e(),r(5,"div",4)(6,"p")(7,"strong"),t(8,"Atomic classes"),e(),t(9," provide lock-free thread safety using CAS (Compare-And-Swap) CPU instructions. Faster than synchronized for simple operations."),e(),i(10,"app-code-block",5),e()(),r(11,"section",1)(12,"h2",2),i(13,"app-icon",6),t(14," Types"),e(),r(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Atomic Integer"),e(),i(19,"app-code-block",5),e(),r(20,"div",8)(21,"h3",9),t(22,"AtomicReference"),e(),i(23,"app-code-block",5),e(),r(24,"div",8)(25,"h3",9),t(26,"Accumulators"),e(),i(27,"app-code-block",5),e(),r(28,"div",8)(29,"h3",9),t(30,"CAS Pattern"),e(),i(31,"app-code-block",5),e()()()()),a&2&&(n(3),o("size",28),n(7),o("code",c.codeIntro),n(3),o("size",28),n(6),o("code",c.codeInt),n(4),o("code",c.codeRef),n(4),o("code",c.codeAccum),n(4),o("code",c.codeCas))},dependencies:[p,s,l],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MtAtomicComponent};
