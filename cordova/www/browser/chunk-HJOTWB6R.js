import{a as d,b as m,c as p}from"./chunk-T5DA2T3H.js";import{$a as t,Ia as c,Za as a,_a as i,ab as o,wb as e,za as n}from"./chunk-GF54RO5Y.js";import"./chunk-NWJ5J3BN.js";var g=class l{code1=`// \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502                  JVM MEMORY                     \u2502
// \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
// \u2502        HEAP           \u2502    NON-HEAP MEMORY       \u2502
// \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
// \u2502  \u2502  Young Gen      \u2502  \u2502  \u2502    Metaspace      \u2502  \u2502
// \u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u2502  \u2502  \u2502  (class metadata) \u2502  \u2502
// \u2502  \u2502  \u2502    Eden     \u2502\u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
// \u2502  \u2502  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2524\u2502  \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
// \u2502  \u2502  \u2502  S0  \u2502  S1  \u2502\u2502  \u2502  \u2502   Code Cache      \u2502  \u2502
// \u2502  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2502  \u2502  \u2502  (JIT compiled)   \u2502  \u2502
// \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
// \u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
// \u2502  \u2502  Old Gen        \u2502  \u2502  Thread 1 Stack          \u2502
// \u2502  \u2502  (Tenured)      \u2502  \u2502  Thread 2 Stack          \u2502
// \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502  Thread N Stack          \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

// Key JVM flags:
// -Xms512m        set initial heap size to 512 MB
// -Xmx2g          set max heap size to 2 GB
// -Xss512k        set stack size per thread to 512 KB
// -XX:MaxMetaspaceSize=256m  cap Metaspace at 256 MB`;code2=`// Heap size flags
// java -Xms512m -Xmx2g -jar myapp.jar

// Object allocation lifecycle
public class HeapDemo {
    public static void main(String[] args) {
        // Step 1: Object allocated in Eden (Young Gen)
        Object obj = new Object();

        // Step 2: After Minor GC, survivors move to S0/S1
        // Step 3: After N GC cycles \u2192 promoted to Old Gen

        // Triggering OutOfMemoryError: Java heap space
        try {
            List<byte[]> leak = new ArrayList<>();
            while (true) {
                leak.add(new byte[1024 * 1024]); // 1 MB each
            }
        } catch (OutOfMemoryError e) {
            System.err.println("Heap exhausted: " + e.getMessage());
            // Message: "Java heap space"
        }
    }
}

// GC logging flags (Java 9+)
// -Xlog:gc*:file=gc.log:time,uptime,level,tags
// -XX:+HeapDumpOnOutOfMemoryError
// -XX:HeapDumpPath=/tmp/heap.hprof`;code3=`// StackOverflowError from infinite recursion
public class StackDemo {

    // BAD: infinite recursion \u2192 StackOverflowError
    static int factorial(int n) {
        return n * factorial(n - 1); // never reaches base case if n <= 0
    }

    // GOOD: base case prevents infinite recursion
    static long factorialSafe(long n) {
        if (n <= 1) return 1;
        return n * factorialSafe(n - 1);
    }

    // BEST for large n: iterative \u2014 no stack frames accumulate
    static long factorialIterative(long n) {
        long result = 1;
        for (long i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        try {
            factorial(100_000); // will throw
        } catch (StackOverflowError e) {
            System.err.println("Stack full! " + e);
        }
        System.out.println(factorialIterative(20)); // 2432902008176640000
    }
}

// Tune stack size: java -Xss2m -jar myapp.jar`;code4=`// Metaspace grows as classes are loaded
// Class-loader leak example (common in servlet containers)
public class MetaspaceLeakDemo {
    public static void main(String[] args) throws Exception {
        List<ClassLoader> loaders = new ArrayList<>();
        int count = 0;
        try {
            while (true) {
                // Each iteration creates a new class loader
                // If loader is kept referenced, its classes stay in Metaspace
                URLClassLoader loader = new URLClassLoader(
                    new URL[]{ new File("plugin.jar").toURI().toURL() },
                    ClassLoader.getSystemClassLoader()
                );
                loader.loadClass("com.example.Plugin");
                loaders.add(loader); // <-- holding the reference = leak!
                count++;
            }
        } catch (OutOfMemoryError e) {
            System.err.println("Metaspace full after " + count + " loads");
            // "OutOfMemoryError: Metaspace"
        }
    }
}

// Fix: close class loaders when done
// URLClassLoader implements Closeable
// try (URLClassLoader loader = new URLClassLoader(...)) { ... }

// JVM flags:
// -XX:MetaspaceSize=64m        initial Metaspace size
// -XX:MaxMetaspaceSize=256m    max Metaspace size (to catch leaks)
// -verbose:class               print every class load/unload`;code5=`// Classic Java memory leak: static collection that never shrinks
public class SessionCache {
    // PROBLEM: static map is a GC root \u2014 nothing inside is ever collected
    private static final Map<String, byte[]> cache = new HashMap<>();

    public static void store(String sessionId, byte[] data) {
        cache.put(sessionId, data);  // grows forever
    }

    // Missing: no remove() call when session expires!
}

// Fix 1: use WeakHashMap \u2014 entries collected when key is GC'd
private static final Map<String, byte[]> cache =
    Collections.synchronizedMap(new WeakHashMap<>());

// Fix 2: use a bounded cache with eviction (e.g., Caffeine / Guava)
import com.github.benmanes.caffeine.cache.*;
Cache<String, byte[]> bounded = Caffeine.newBuilder()
    .maximumSize(10_000)
    .expireAfterWrite(Duration.ofMinutes(30))
    .build();

// Fix 3: always remove listeners when done
button.addActionListener(this::handleClick);
// later:
button.removeActionListener(this::handleClick); // else listener leaks

// Diagnosing leaks:
// 1. -XX:+HeapDumpOnOutOfMemoryError \u2192 get heap.hprof
// 2. Open with Eclipse Memory Analyzer (MAT) or VisualVM
// 3. Look for objects with unexpectedly high retained heap`;static \u0275fac=function(s){return new(s||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-java-memory-model"]],decls:159,vars:11,consts:[["title","Java Memory Model","subtitle","Understand the JVM memory layout \u2014 Heap, Stack, Metaspace, and Code Cache. Learn object lifecycle, memory leaks, and how to diagnose OOM errors.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e1b4b, #4f46e5)"],[1,"section"],[1,"section-heading"],["name","cpu","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","database","css","icon-indigo",3,"size"],["name","layers","css","icon-indigo",3,"size"],["name","box","css","icon-indigo",3,"size"],["name","alert-circle","css","icon-indigo",3,"size"],["name","briefcase","css","icon-indigo",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,r){s&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," JVM Memory Areas Overview"),t(),i(5,"div",4)(6,"p"),e(7,"The JVM divides memory into several distinct regions, each with a specific role. Understanding these areas is essential for diagnosing "),i(8,"code"),e(9,"OutOfMemoryError"),t(),e(10,", tuning GC, and writing memory-efficient applications."),t(),i(11,"ul")(12,"li")(13,"strong"),e(14,"Heap"),t(),e(15," \u2014 where all objects live; managed by the Garbage Collector; shared across threads."),t(),i(16,"li")(17,"strong"),e(18,"Stack"),t(),e(19," \u2014 one per thread; holds method call frames, local variables, and object references (not the objects themselves)."),t(),i(20,"li")(21,"strong"),e(22,"Metaspace"),t(),e(23," \u2014 stores class metadata (method bytecodes, field descriptors); native memory, not heap."),t(),i(24,"li")(25,"strong"),e(26,"Code Cache"),t(),e(27," \u2014 JIT-compiled native code; managed by the JVM compiler."),t(),i(28,"li")(29,"strong"),e(30,"PC Register"),t(),e(31," \u2014 one per thread; tracks the current bytecode instruction being executed."),t()(),o(32,"app-code-block",5),t()(),i(33,"section",1)(34,"h2",2),o(35,"app-icon",6),e(36," Heap Memory"),t(),i(37,"div",4)(38,"p"),e(39,"The heap is split into "),i(40,"strong"),e(41,"Young Generation"),t(),e(42," (Eden + two Survivor spaces S0/S1) and "),i(43,"strong"),e(44,"Old Generation"),t(),e(45," (Tenured). New objects are allocated in Eden. "),i(46,"strong"),e(47,"Minor GC"),t(),e(48," collects the young generation frequently and quickly. Objects that survive enough Minor GC cycles are promoted to the Old Generation. "),i(49,"strong"),e(50,"Major / Full GC"),t(),e(51," collects the old generation and is much more expensive."),t(),o(52,"app-code-block",5),t()(),i(53,"section",1)(54,"h2",2),o(55,"app-icon",7),e(56," Stack Memory"),t(),i(57,"div",4)(58,"p"),e(59,"Each thread has its own private stack. It holds "),i(60,"strong"),e(61,"method call frames"),t(),e(62," (local variables, operand stack, and frame data). Object "),i(63,"em"),e(64,"references"),t(),e(65," live on the stack; the actual objects are on the heap. Stack size is fixed ("),i(66,"code"),e(67,"-Xss"),t(),e(68,"). Infinite recursion causes a "),i(69,"code"),e(70,"StackOverflowError"),t(),e(71," because frames accumulate without limit."),t(),o(72,"app-code-block",5),t()(),i(73,"section",1)(74,"h2",2),o(75,"app-icon",8),e(76," Metaspace (Java 8+)"),t(),i(77,"div",4)(78,"p"),e(79,"Metaspace replaced the old "),i(80,"strong"),e(81,"PermGen"),t(),e(82," (permanent generation) in Java 8. It stores class definitions and method bytecodes in "),i(83,"strong"),e(84,"native memory"),t(),e(85," (outside the heap), so it can grow dynamically. Class-loader leaks (common in app servers deploying/undeploying web apps repeatedly) cause "),i(86,"code"),e(87,"OutOfMemoryError: Metaspace"),t(),e(88,". Use "),i(89,"code"),e(90,"-XX:MaxMetaspaceSize"),t(),e(91," to cap it and catch leaks early."),t(),o(92,"app-code-block",5),t()(),i(93,"section",1)(94,"h2",2),o(95,"app-icon",9),e(96," Memory Leaks in Java"),t(),i(97,"div",4)(98,"p"),e(99,"Java's GC only collects "),i(100,"strong"),e(101,"unreachable"),t(),e(102,' objects. An object is reachable if any live thread, static field, or active reference chain points to it. "Memory leaks" in Java occur when objects are '),i(103,"em"),e(104,"logically"),t(),e(105," unused but still "),i(106,"em"),e(107,"technically"),t(),e(108," reachable. Common sources include static collections that grow without bound, unclosed streams or connections, caches without eviction policies, and event listeners never removed."),t(),o(109,"app-code-block",5),t()(),i(110,"section",1)(111,"h2",2),o(112,"app-icon",10),e(113," Interview Tips"),t(),i(114,"div",11)(115,"div",12)(116,"div",13),e(117,"1"),t(),i(118,"div")(119,"h4",14),e(120,"Stack vs Heap"),t(),i(121,"p",15),e(122,"Stack is per-thread, holds primitives and object references, has fixed size, and allocation/deallocation is instant (LIFO). Heap is shared across all threads, holds actual objects, is GC-managed, and allocation involves finding free space. Accessing stack memory is faster than heap."),t()()(),i(123,"div",12)(124,"div",13),e(125,"2"),t(),i(126,"div")(127,"h4",14),e(128,"StackOverflowError vs OutOfMemoryError"),t(),i(129,"p",15)(130,"code"),e(131,"StackOverflowError"),t(),e(132," means a thread's stack is full \u2014 usually caused by infinite or very deep recursion. "),i(133,"code"),e(134,"OutOfMemoryError"),t(),e(135," means either the heap is exhausted ("),i(136,"code"),e(137,"Java heap space"),t(),e(138,"), Metaspace is full ("),i(139,"code"),e(140,"Metaspace"),t(),e(141,"), or native memory is gone. They require very different fixes."),t()()(),i(142,"div",12)(143,"div",13),e(144,"3"),t(),i(145,"div")(146,"h4",14),e(147,"Metaspace vs PermGen"),t(),i(148,"p",15),e(149,"PermGen (pre-Java 8) was a fixed-size region "),i(150,"em"),e(151,"inside"),t(),e(152," the heap that stored class metadata \u2014 it frequently caused "),i(153,"code"),e(154,"OutOfMemoryError: PermGen space"),t(),e(155," in large apps. Metaspace (Java 8+) uses native memory and grows automatically, eliminating most PermGen issues. "),i(156,"code"),e(157,"-XX:MaxMetaspaceSize"),t(),e(158," adds an explicit ceiling."),t()()()()()()),s&2&&(n(3),a("size",28),n(29),a("code",r.code1),n(3),a("size",28),n(17),a("code",r.code2),n(3),a("size",28),n(17),a("code",r.code3),n(3),a("size",28),n(17),a("code",r.code4),n(3),a("size",28),n(14),a("code",r.code5),n(3),a("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1e1b4b}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#4f46e5;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1e1b4b}"],changeDetection:0})};export{g as JavaMemoryModelComponent};
