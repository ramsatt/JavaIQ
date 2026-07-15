import{a as d,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as i,S as c,ba as a,ca as n,da as t,ea as o,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class s{code1=`// GC Roots \u2014 always reachable, never collected
// 1. Active thread stacks
// 2. Static fields of loaded classes
// 3. JNI global references

public class ReachabilityDemo {
    static Object staticRoot; // GC root \u2014 never collected while class is loaded

    public static void main(String[] args) {
        Object a = new Object(); // reachable via stack (local var)
        Object b = new Object(); // reachable via stack
        a = null; // 'a' now unreachable \u2192 eligible for GC

        // Island of isolation: circular refs, but no external root
        Node n1 = new Node();
        Node n2 = new Node();
        n1.next = n2;
        n2.next = n1; // circular reference
        n1 = null;
        n2 = null;
        // Both nodes are now unreachable despite pointing to each other
        // \u2192 GC WILL collect them (Java uses tracing GC, not ref counting)

        System.gc(); // hint only \u2014 GC may or may not run immediately
    }
}

class Node { Node next; }`;code2=`// Generational heap layout diagram
// \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502                   HEAP                              \u2502
// \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
// \u2502  \u2502      Young Generation    \u2502  \u2502  Old Generation \u2502  \u2502
// \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502  \u2502   (Tenured)    \u2502  \u2502
// \u2502  \u2502  \u2502  Eden  \u2502 S0  \u2502  S1  \u2502 \u2502  \u2502                \u2502  \u2502
// \u2502  \u2502  \u2502 (new   \u2502(sur-\u2502(sur- \u2502 \u2502  \u2502 Long-lived     \u2502  \u2502
// \u2502  \u2502  \u2502  objs) \u2502vivor\u2502vivor)\u2502 \u2502  \u2502 objects after  \u2502  \u2502
// \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502  \u2502 N Minor GCs    \u2502  \u2502
// \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
// \u2502   \u2190 Minor GC (fast, frequent) \u2192  \u2190 Major/Full GC \u2192 \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

public class GenerationalDemo {
    public static void main(String[] args) {
        // Short-lived: allocated in Eden, collected by next Minor GC
        for (int i = 0; i < 1_000_000; i++) {
            String s = "temp-" + i; // immediately eligible after loop body
        }

        // Long-lived: eventually promoted to Old Gen
        List<String> cache = new ArrayList<>();
        for (int i = 0; i < 10_000; i++) {
            cache.add("entry-" + i); // survives multiple GC cycles
        }

        // JVM flags to inspect generations:
        // -XX:NewRatio=2          \u2192 Old:Young = 2:1
        // -XX:SurvivorRatio=8     \u2192 Eden:Survivor = 8:1
        // -XX:MaxTenuringThreshold=15  \u2192 promote after 15 GC cycles
    }
}`;code3=`// GC algorithm selection flags

// Serial GC \u2014 single-threaded, small apps only
// java -XX:+UseSerialGC -jar app.jar

// Parallel GC \u2014 multi-threaded, throughput-focused
// java -XX:+UseParallelGC -XX:ParallelGCThreads=8 -jar app.jar

// G1GC \u2014 default Java 9+, region-based, low pause goal
// java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar app.jar

// ZGC \u2014 Java 15+, concurrent, sub-ms pauses, huge heaps
// java -XX:+UseZGC -Xmx16g -jar app.jar

// Shenandoah \u2014 concurrent, low latency
// java -XX:+UseShenandoahGC -jar app.jar

// G1GC tuning example
public class G1Tuning {
    public static void main(String[] args) {
        // Useful G1GC flags:
        // -XX:G1HeapRegionSize=16m   \u2192 region size (1\u201332 MB, power of 2)
        // -XX:G1NewSizePercent=5     \u2192 min % of heap for young gen
        // -XX:G1MaxNewSizePercent=60 \u2192 max % of heap for young gen
        // -XX:InitiatingHeapOccupancyPercent=45
        //    \u2192 start concurrent GC cycle when heap is 45% full
        System.out.println("Run with: java -XX:+UseG1GC "
            + "-Xms1g -Xmx4g "
            + "-XX:MaxGCPauseMillis=100 "
            + "-Xlog:gc*:file=gc.log "
            + "-jar myapp.jar");
    }
}`;code4=`// finalize() \u2014 DEPRECATED (Java 9), REMOVED (Java 18+)
// NEVER use this pattern:
class BadResource {
    private long nativeHandle;
    @Override
    protected void finalize() throws Throwable {
        // Problems: non-deterministic, can resurrect object,
        // slows GC, may never run if JVM exits
        releaseNative(nativeHandle);
    }
    private native void releaseNative(long handle);
}

// CORRECT: use Cleaner API (Java 9+) for native resources
import java.lang.ref.Cleaner;

class NativeBuffer implements AutoCloseable {
    private static final Cleaner CLEANER = Cleaner.create();
    private final long nativePtr;
    private final Cleaner.Cleanable cleanable;

    NativeBuffer(int size) {
        this.nativePtr = allocateNative(size); // off-heap
        // Register cleanup action \u2014 runs when NativeBuffer becomes phantom-reachable
        // The state object must NOT hold a reference to NativeBuffer!
        this.cleanable = CLEANER.register(this,
            new CleanState(nativePtr));
    }

    @Override
    public void close() {
        cleanable.clean(); // explicit close is preferred
    }

    private static class CleanState implements Runnable {
        private final long ptr;
        CleanState(long ptr) { this.ptr = ptr; }
        @Override public void run() { freeNative(ptr); } // cleanup action
    }

    private static native long allocateNative(int size);
    private static native void freeNative(long ptr);
}

// Usage \u2014 always prefer try-with-resources
try (NativeBuffer buf = new NativeBuffer(4096)) {
    // use buf
} // close() called here \u2192 cleanable.clean() \u2192 freeNative()`;code5=`// Key GC tuning flags
// -Xms512m              initial heap size
// -Xmx4g                maximum heap size (set equal to Xms to avoid resizing)
// -XX:NewRatio=3         Old:Young = 3:1
// -XX:+PrintGCDetails    print detailed GC info (Java 8)
// -Xlog:gc*              GC logging (Java 9+)
// -XX:MaxGCPauseMillis=100  G1 pause-time goal (milliseconds)
// -XX:+HeapDumpOnOutOfMemoryError  dump heap on OOM

// Reference types for memory-sensitive caches
import java.lang.ref.*;

public class ReferenceTypesDemo {
    public static void main(String[] args) {
        Object data = new byte[1024 * 1024]; // 1 MB object

        // StrongReference \u2014 default; GC never collects
        Object strong = data;

        // SoftReference \u2014 collected when JVM needs memory (good for caches)
        SoftReference<Object> soft = new SoftReference<>(data);

        // WeakReference \u2014 collected at next GC cycle (WeakHashMap keys)
        WeakReference<Object> weak = new WeakReference<>(data);

        // PhantomReference \u2014 collected after finalization (resource cleanup)
        ReferenceQueue<Object> queue = new ReferenceQueue<>();
        PhantomReference<Object> phantom = new PhantomReference<>(data, queue);

        data = null; // release strong reference

        System.gc();

        System.out.println("Soft still alive: " + (soft.get() != null));
        System.out.println("Weak still alive: " + (weak.get() != null));
        // Weak: likely null after GC; Soft: likely still alive (memory available)
    }
}`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-garbage-collection"]],decls:142,vars:11,consts:[["title","Garbage Collection","subtitle","Understand how JVM reclaims memory automatically. Learn generational GC, G1GC, ZGC, finalization, and how to tune GC for your application.","badge","CORE JAVA","gradient","linear-gradient(135deg, #14532d, #22c55e)"],[1,"section"],[1,"section-heading"],["name","target","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","layers","css","icon-green",3,"size"],["name","zap","css","icon-green",3,"size"],["name","trash-2","css","icon-green",3,"size"],["name","sliders","css","icon-green",3,"size"],["name","briefcase","css","icon-green",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,r){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," GC Roots & Reachability"),t(),n(5,"div",4)(6,"p"),e(7,"The GC determines which objects are alive by tracing from "),n(8,"strong"),e(9,"GC roots"),t(),e(10," \u2014 a fixed set of starting points that are always considered reachable. Any object reachable from a GC root (directly or transitively) is kept alive. Everything else is eligible for collection."),t(),n(11,"p"),e(12,"GC roots include: active thread stacks (local variables and method parameters), static fields of loaded classes, JNI global references, and monitor objects. Importantly, "),n(13,"strong"),e(14,"circular references alone do not prevent collection"),t(),e(15,' \u2014 two objects pointing to each other but unreachable from any GC root form an "island of isolation" and are collected.'),t(),o(16,"app-code-block",5),t()(),n(17,"section",1)(18,"h2",2),o(19,"app-icon",6),e(20," Generational GC"),t(),n(21,"div",4)(22,"p"),e(23,"The "),n(24,"strong"),e(25,"weak generational hypothesis"),t(),e(26," says most objects die young. The JVM exploits this by dividing the heap into generations. New objects enter Eden. When Eden fills, a "),n(27,"strong"),e(28,"Minor GC"),t(),e(29," runs \u2014 live objects move to a Survivor space (S0 or S1). Objects that survive enough Minor GCs are promoted to the "),n(30,"strong"),e(31,"Old Generation"),t(),e(32," (Tenured). A "),n(33,"strong"),e(34,"Major / Full GC"),t(),e(35," collects the old generation and is expensive because it typically triggers a Stop-The-World pause."),t(),o(36,"app-code-block",5),t()(),n(37,"section",1)(38,"h2",2),o(39,"app-icon",7),e(40," GC Algorithms"),t(),n(41,"div",4)(42,"p"),e(43,"The JVM ships several GC implementations optimized for different goals. Choose based on your latency vs throughput requirements:"),t(),n(44,"ul")(45,"li")(46,"strong"),e(47,"Serial GC"),t(),e(48," \u2014 single-threaded; suitable only for small apps or embedded devices."),t(),n(49,"li")(50,"strong"),e(51,"Parallel GC"),t(),e(52," \u2014 multi-threaded; maximizes throughput; higher pauses; was the default before Java 9."),t(),n(53,"li")(54,"strong"),e(55,"G1GC"),t(),e(56," \u2014 default since Java 9; region-based; targets predictable low pauses; good balance."),t(),n(57,"li")(58,"strong"),e(59,"ZGC"),t(),e(60," \u2014 Java 15+; concurrent; sub-millisecond pauses; scales to terabyte heaps."),t(),n(61,"li")(62,"strong"),e(63,"Shenandoah"),t(),e(64," \u2014 concurrent like ZGC; low latency; available in OpenJDK builds."),t()(),o(65,"app-code-block",5),t()(),n(66,"section",1)(67,"h2",2),o(68,"app-icon",8),e(69," finalize() and Cleaners"),t(),n(70,"div",4)(71,"p")(72,"code"),e(73,"finalize()"),t(),e(74," was deprecated in Java 9 and removed in Java 18. It ran after GC but before memory was reclaimed \u2014 the JVM offered no timing guarantees, and objects could even be "),n(75,"em"),e(76,"resurrected"),t(),e(77," by storing "),n(78,"code"),e(79,"this"),t(),e(80," in a static field inside "),n(81,"code"),e(82,"finalize()"),t(),e(83,". This caused GC slowdowns and resource leaks. The modern replacement is the "),n(84,"strong"),e(85,"Cleaner API"),t(),e(86," (Java 9+) for native resources, and "),n(87,"strong"),e(88,"try-with-resources"),t(),e(89," for everything else."),t(),o(90,"app-code-block",5),t()(),n(91,"section",1)(92,"h2",2),o(93,"app-icon",9),e(94," GC Tuning Basics"),t(),n(95,"div",4)(96,"p"),e(97,"Start with the defaults (G1GC) and tune only when profiling shows GC is a bottleneck. Key flags and reference types for memory-sensitive caches:"),t(),o(98,"app-code-block",5),t()(),n(99,"section",1)(100,"h2",2),o(101,"app-icon",10),e(102," Interview Tips"),t(),n(103,"div",11)(104,"div",12)(105,"div",13),e(106,"1"),t(),n(107,"div")(108,"h4",14),e(109,"Minor vs Major GC"),t(),n(110,"p",15),e(111,"Minor GC collects only the Young Generation (Eden + Survivors). It is fast because the young gen is small and most objects are dead. Major / Full GC collects the Old Generation (and usually the entire heap). It causes a Stop-The-World pause and is significantly slower \u2014 minimizing Full GC frequency is a primary tuning goal."),t()()(),n(112,"div",12)(113,"div",13),e(114,"2"),t(),n(115,"div")(116,"h4",14),e(117,"Why Avoid finalize()"),t(),n(118,"p",15)(119,"code"),e(120,"finalize()"),t(),e(121," has non-deterministic execution \u2014 the JVM makes no guarantee about when (or even if) it runs. It can "),n(122,"em"),e(123,"resurrect"),t(),e(124," objects by creating new references inside "),n(125,"code"),e(126,"finalize()"),t(),e(127,", leading to confusing bugs. It delays GC because the JVM must run the finalizer before reclaiming memory. Use "),n(128,"code"),e(129,"try-with-resources"),t(),e(130," or "),n(131,"code"),e(132,"Cleaner"),t(),e(133," instead."),t()()(),n(134,"div",12)(135,"div",13),e(136,"3"),t(),n(137,"div")(138,"h4",14),e(139,"G1GC vs ZGC"),t(),n(140,"p",15),e(141,"G1GC is the default (Java 9+) and provides a good balance between throughput and latency. It divides the heap into equal-sized regions and aims for configurable pause-time goals. ZGC (Java 15+) is fully concurrent \u2014 nearly all work happens while the application runs, achieving sub-millisecond pauses even on multi-terabyte heaps, at the cost of some throughput overhead."),t()()()()()()),l&2&&(i(3),a("size",28),i(13),a("code",r.code1),i(3),a("size",28),i(17),a("code",r.code2),i(3),a("size",28),i(26),a("code",r.code3),i(3),a("size",28),i(22),a("code",r.code4),i(3),a("size",28),i(5),a("code",r.code5),i(3),a("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-green[_ngcontent-%COMP%]{color:#22c55e}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0fdf4;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#14532d}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#22c55e;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f0fdf4;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#14532d}"],changeDetection:0})};export{u as GarbageCollectionComponent};
