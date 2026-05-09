import{a as c,b as m,c as p}from"./chunk-3MUY7VVQ.js";import{$a as a,Ba as n,Ka as d,ab as i,bb as t,cb as o,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class s{code1=`// Step 1: Compile source to platform-neutral bytecode
// $ javac HelloWorld.java  \u2192  produces HelloWorld.class

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, JVM!");
    }
}

// Step 2: Run the bytecode on any JVM
// $ java HelloWorld
// Output: Hello, JVM!

// Inspect bytecode with javap:
// $ javap -c HelloWorld.class
//   0: getstatic     #7  // Field System.out
//   3: ldc           #13 // String "Hello, JVM!"
//   5: invokevirtual #15 // Method println
//   8: return

// The .class file is identical on Windows, Linux, and macOS.
// Only the JVM (translator) differs per platform.`;code2=`/*
 *  JVM Runtime Data Areas (per-process unless noted)
 * \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
 * \u2502                      METHOD AREA                         \u2502
 * \u2502   (class metadata, static fields, bytecode, constants)   \u2502
 * \u2502                    [shared by all threads]               \u2502
 * \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
 * \u2502                        HEAP                              \u2502
 * \u2502   Young Gen (Eden | S0 | S1)  \u2502  Old Gen (Tenured)       \u2502
 * \u2502   all object instances live here  [shared by all threads]\u2502
 * \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
 * \u2502   Thread-1    \u2502   Thread-2    \u2502      Thread-N            \u2502
 * \u2502   JVM Stack   \u2502   JVM Stack   \u2502      JVM Stack           \u2502
 * \u2502  [frame/frame]\u2502  [frame/frame]\u2502     [frame/frame]        \u2502
 * \u2502   PC Register \u2502   PC Register \u2502      PC Register         \u2502
 * \u2502  Native Stack \u2502  Native Stack \u2502     Native Stack         \u2502
 * \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
 */

// StackOverflowError \u2014 stack grows without bound (deep recursion)
public static int infiniteRecursion(int n) {
    return infiniteRecursion(n + 1); // no base case!
}
// java.lang.StackOverflowError

// OutOfMemoryError \u2014 heap exhausted
List<byte[]> leak = new ArrayList<>();
while (true) {
    leak.add(new byte[1024 * 1024]); // keep allocating 1 MB chunks
}
// java.lang.OutOfMemoryError: Java heap space`;code3=`// --- Class.forName() triggers Loading + Linking + Initialization ---
Class<?> clazz = Class.forName("com.example.MyService");
Object instance = clazz.getDeclaredConstructor().newInstance();

// --- Inspecting the ClassLoader hierarchy ---
ClassLoader appCL  = MyService.class.getClassLoader();
// com.example.MyService uses the Application ClassLoader

ClassLoader extCL  = appCL.getParent();
// Extension / Platform ClassLoader

ClassLoader bootCL = extCL.getParent();
// null \u2014 Bootstrap ClassLoader is native (C++), not a Java object

System.out.println(String.class.getClassLoader()); // null (Bootstrap)
System.out.println(MyService.class.getClassLoader()); // sun.misc.Launcher$AppClassLoader

// --- Custom ClassLoader example ---
public class HotReloadClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] bytes = loadBytesFromDisk(name); // read .class bytes
        return defineClass(name, bytes, 0, bytes.length);
    }
}

// Static initializer \u2014 runs exactly once during Initialization phase
public class Config {
    static final Map<String, String> DEFAULTS;
    static {
        DEFAULTS = new HashMap<>();
        DEFAULTS.put("timeout", "30");
        DEFAULTS.put("retries", "3");
        System.out.println("Config initialized"); // printed once, lazily
    }
}`;code4=`// This tight loop is a classic JIT hotspot target.
// After ~10 000 iterations, the JVM promotes it to native code.

public class JitDemo {
    public static void main(String[] args) {
        long sum = 0;
        for (int i = 0; i < 1_000_000; i++) {
            sum += compute(i);
        }
        System.out.println("Sum: " + sum);
    }

    // JIT will inline this small method at the call site \u2014
    // the method call overhead disappears entirely.
    private static long compute(int n) {
        return (long) n * n;
    }
}

// Run with JIT logging to see what gets compiled:
// $ java -XX:+PrintCompilation JitDemo
//   77    1       3       java.lang.String::hashCode (49 bytes)
//  104   42       4       JitDemo::compute (6 bytes)   \u2190 promoted to C2

// Disable JIT to see the raw interpreted speed (much slower):
// $ java -Xint JitDemo

// Tiered compilation levels:
//   Level 0 \u2014 Interpreter
//   Level 1 \u2014 C1, no profiling
//   Level 2 \u2014 C1, limited profiling
//   Level 3 \u2014 C1, full profiling
//   Level 4 \u2014 C2, fully optimised native code`;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-jvm-basics"]],decls:213,vars:9,consts:[["title","JVM Architecture","subtitle","Understand the Java Virtual Machine \u2014 classloading, bytecode execution, JIT compilation, memory areas, and why Java is platform-independent.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a5f, #2563eb)"],[1,"section"],[1,"section-heading"],["name","cpu","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","database","css","icon-blue",3,"size"],["name","layers","css","icon-blue",3,"size"],["name","zap","css","icon-blue",3,"size"],["name","briefcase","css","icon-blue",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(r,l){r&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," What Is the JVM? "),t(),i(5,"div",4)(6,"p"),e(7," The "),i(8,"strong"),e(9,"Java Virtual Machine (JVM)"),t(),e(10," is an abstract computing machine that provides a runtime environment for executing Java bytecode. Understanding the JDK / JRE / JVM triangle is a classic interview topic. "),t(),i(11,"ul")(12,"li")(13,"strong"),e(14,"JDK (Java Development Kit)"),t(),e(15," \u2014 Full toolkit: compiler ("),i(16,"code"),e(17,"javac"),t(),e(18,"), JRE, debugger, profiler, and more. Used by developers to write and compile code."),t(),i(19,"li")(20,"strong"),e(21,"JRE (Java Runtime Environment)"),t(),e(22," \u2014 JVM + standard class libraries. Enough to "),i(23,"em"),e(24,"run"),t(),e(25," Java programs, not to compile them."),t(),i(26,"li")(27,"strong"),e(28,"JVM (Java Virtual Machine)"),t(),e(29," \u2014 The engine that loads, verifies, and executes bytecode. Platform-specific implementations exist for Windows, macOS, Linux, etc."),t()(),i(30,"p")(31,"strong"),e(32,"Platform independence"),t(),e(33,": "),i(34,"code"),e(35,"javac"),t(),e(36," compiles your "),i(37,"code"),e(38,".java"),t(),e(39," source into "),i(40,"strong"),e(41,"bytecode"),t(),e(42," ("),i(43,"code"),e(44,".class"),t(),e(45," files) \u2014 an intermediate representation that no CPU natively understands. Each platform ships a JVM that translates this bytecode to native machine code at runtime. One codebase, every platform. "),t(),o(46,"app-code-block",5),t()(),i(47,"section",1)(48,"h2",2),o(49,"app-icon",6),e(50," JVM Memory Areas "),t(),i(51,"div",4)(52,"p"),e(53,"The JVM organises memory into five distinct runtime data areas:"),t(),i(54,"ul")(55,"li")(56,"strong"),e(57,"Method Area"),t(),e(58," \u2014 Stores class metadata, static fields, method bytecode, constant pool. Shared across all threads. (Called Metaspace in Java 8+.)"),t(),i(59,"li")(60,"strong"),e(61,"Heap"),t(),e(62," \u2014 Where all object instances live. Shared across threads. Managed by the Garbage Collector. Divided into Young (Eden, Survivor) and Old (Tenured) generations."),t(),i(63,"li")(64,"strong"),e(65,"Stack (JVM Stack)"),t(),e(66," \u2014 Each thread gets its own stack. Each method call pushes a "),i(67,"em"),e(68,"frame"),t(),e(69," containing local variables, operand stack, and frame data. Popped on method return."),t(),i(70,"li")(71,"strong"),e(72,"PC Register (Program Counter)"),t(),e(73," \u2014 One per thread. Holds the address of the currently executing JVM instruction."),t(),i(74,"li")(75,"strong"),e(76,"Native Method Stack"),t(),e(77," \u2014 Supports native (C/C++) method calls via JNI. Each thread has its own."),t()(),o(78,"app-code-block",5),t()(),i(79,"section",1)(80,"h2",2),o(81,"app-icon",7),e(82," Class Loading Process "),t(),i(83,"div",4)(84,"p"),e(85," When the JVM first references a class it runs through three phases: "),t(),i(86,"ul")(87,"li")(88,"strong"),e(89,"Loading"),t(),e(90," \u2014 The ClassLoader reads the "),i(91,"code"),e(92,".class"),t(),e(93," file from disk (or network, JAR, etc.) and creates a "),i(94,"code"),e(95,"Class"),t(),e(96," object in the Method Area."),t(),i(97,"li")(98,"strong"),e(99,"Linking"),t(),e(100," \u2014 Three sub-steps: "),i(101,"ul")(102,"li")(103,"em"),e(104,"Verification"),t(),e(105,": Bytecode is checked for structural validity and security rules."),t(),i(106,"li")(107,"em"),e(108,"Preparation"),t(),e(109,": Static fields are allocated and set to default zero values."),t(),i(110,"li")(111,"em"),e(112,"Resolution"),t(),e(113,": Symbolic references (class/method/field names) are replaced with direct references."),t()()(),i(114,"li")(115,"strong"),e(116,"Initialization"),t(),e(117," \u2014 Static initializers and static field assignments run in top-to-bottom order. This is the first time user code executes for the class."),t()(),i(118,"p"),e(119," The JVM uses a "),i(120,"strong"),e(121,"delegation model"),t(),e(122," with three built-in classloaders: "),i(123,"strong"),e(124,"Bootstrap"),t(),e(125," (loads "),i(126,"code"),e(127,"java.lang"),t(),e(128,", etc. from the JDK), "),i(129,"strong"),e(130,"Extension / Platform"),t(),e(131," (loads "),i(132,"code"),e(133,"javax.*"),t(),e(134," and JDK extensions), "),i(135,"strong"),e(136,"Application"),t(),e(137," (loads classes from your classpath). "),t(),o(138,"app-code-block",5),t()(),i(139,"section",1)(140,"h2",2),o(141,"app-icon",8),e(142," JIT Compilation "),t(),i(143,"div",4)(144,"p"),e(145," The JVM starts by "),i(146,"strong"),e(147,"interpreting"),t(),e(148," bytecode instruction-by-instruction. The "),i(149,"strong"),e(150,"JIT (Just-In-Time) compiler"),t(),e(151," monitors execution and identifies "),i(152,"em"),e(153,"hot spots"),t(),e(154," \u2014 code paths that run frequently. It then compiles those paths to optimised native machine code at runtime. "),t(),i(155,"ul")(156,"li")(157,"strong"),e(158,"Tiered compilation"),t(),e(159," (default since Java 8): starts with fast C1 compilation, promotes heavily-used methods to full C2 optimisation (inlining, loop unrolling, dead-code elimination)."),t(),i(160,"li")(161,"strong"),e(162,"Hotspot threshold"),t(),e(163,": a method is typically compiled after ~10 000 invocations by default."),t(),i(164,"li"),e(165,"The result: Java code can approach or match native C++ performance for long-running applications."),t()(),o(166,"app-code-block",5),t()(),i(167,"section",1)(168,"h2",2),o(169,"app-icon",9),e(170," Interview Tips "),t(),i(171,"div",10)(172,"div",11)(173,"div",12),e(174,"1"),t(),i(175,"div")(176,"h4",13),e(177,"JDK vs JRE vs JVM \u2014 Know the Triangle"),t(),i(178,"p",14),e(179,"JDK \u2283 JRE \u2283 JVM. The JVM only executes bytecode; the JRE adds the standard library; the JDK adds the compiler and tools. You ship a JRE (or JDK) to end users; developers need the full JDK."),t()()(),i(180,"div",11)(181,"div",12),e(182,"2"),t(),i(183,"div")(184,"h4",13),e(185,"Why Is Java Platform-Independent?"),t(),i(186,"p",14)(187,"code"),e(188,"javac"),t(),e(189," produces "),i(190,"strong"),e(191,"bytecode"),t(),e(192,', not native machine code. Bytecode is the same on every platform. Each OS ships its own JVM that translates bytecode to native instructions at runtime \u2014 "write once, run anywhere."'),t()()(),i(193,"div",11)(194,"div",12),e(195,"3"),t(),i(196,"div")(197,"h4",13),e(198,"Stack vs Heap Memory"),t(),i(199,"p",14),e(200,"The "),i(201,"strong"),e(202,"Stack"),t(),e(203," is per-thread, fixed-size, stores primitive locals and references \u2014 fast but limited (causes "),i(204,"code"),e(205,"StackOverflowError"),t(),e(206," on deep recursion). The "),i(207,"strong"),e(208,"Heap"),t(),e(209," is shared, GC-managed, stores objects \u2014 larger but slower to allocate (causes "),i(210,"code"),e(211,"OutOfMemoryError"),t(),e(212," when exhausted)."),t()()()()()()),r&2&&(n(3),a("size",28),n(43),a("code",l.code1),n(3),a("size",28),n(29),a("code",l.code2),n(3),a("size",28),n(57),a("code",l.code3),n(3),a("size",28),n(25),a("code",l.code4),n(3),a("size",28))},dependencies:[c,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1d4ed8}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#2563eb;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1d4ed8}"],changeDetection:0})};export{u as JvmBasicsComponent};
