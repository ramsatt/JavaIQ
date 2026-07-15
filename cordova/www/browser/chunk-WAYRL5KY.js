import{a as c,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as a,S as d,ba as o,ca as i,da as t,ea as n,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class s{code1=`// Step 1: Compile source to platform-neutral bytecode
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
//   Level 4 \u2014 C2, fully optimised native code`;static \u0275fac=function(r){return new(r||s)};static \u0275cmp=d({type:s,selectors:[["app-topic-jvm-basics"]],decls:215,vars:9,consts:[["title","JVM Architecture","subtitle","Understand the Java Virtual Machine \u2014 classloading, bytecode execution, JIT compilation, memory areas, and why Java is platform-independent.","badge","CORE JAVA","gradient","linear-gradient(135deg, #1e3a5f, #2563eb)"],[1,"section"],[1,"section-heading"],["name","cpu","css","icon-blue",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/jvm_architecture.png","alt","JVM Architecture Diagram",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","database","css","icon-blue",3,"size"],["name","layers","css","icon-blue",3,"size"],["name","zap","css","icon-blue",3,"size"],["name","briefcase","css","icon-blue",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(r,l){r&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),e(4," What Is the JVM? "),t(),i(5,"div",4),n(6,"img",5),t(),i(7,"div",6)(8,"p"),e(9," The "),i(10,"strong"),e(11,"Java Virtual Machine (JVM)"),t(),e(12," is an abstract computing machine that provides a runtime environment for executing Java bytecode. Understanding the JDK / JRE / JVM triangle is a classic interview topic. "),t(),i(13,"ul")(14,"li")(15,"strong"),e(16,"JDK (Java Development Kit)"),t(),e(17," \u2014 Full toolkit: compiler ("),i(18,"code"),e(19,"javac"),t(),e(20,"), JRE, debugger, profiler, and more. Used by developers to write and compile code."),t(),i(21,"li")(22,"strong"),e(23,"JRE (Java Runtime Environment)"),t(),e(24," \u2014 JVM + standard class libraries. Enough to "),i(25,"em"),e(26,"run"),t(),e(27," Java programs, not to compile them."),t(),i(28,"li")(29,"strong"),e(30,"JVM (Java Virtual Machine)"),t(),e(31," \u2014 The engine that loads, verifies, and executes bytecode. Platform-specific implementations exist for Windows, macOS, Linux, etc."),t()(),i(32,"p")(33,"strong"),e(34,"Platform independence"),t(),e(35,": "),i(36,"code"),e(37,"javac"),t(),e(38," compiles your "),i(39,"code"),e(40,".java"),t(),e(41," source into "),i(42,"strong"),e(43,"bytecode"),t(),e(44," ("),i(45,"code"),e(46,".class"),t(),e(47," files) \u2014 an intermediate representation that no CPU natively understands. Each platform ships a JVM that translates this bytecode to native machine code at runtime. One codebase, every platform. "),t(),n(48,"app-code-block",7),t()(),i(49,"section",1)(50,"h2",2),n(51,"app-icon",8),e(52," JVM Memory Areas "),t(),i(53,"div",6)(54,"p"),e(55,"The JVM organises memory into five distinct runtime data areas:"),t(),i(56,"ul")(57,"li")(58,"strong"),e(59,"Method Area"),t(),e(60," \u2014 Stores class metadata, static fields, method bytecode, constant pool. Shared across all threads. (Called Metaspace in Java 8+.)"),t(),i(61,"li")(62,"strong"),e(63,"Heap"),t(),e(64," \u2014 Where all object instances live. Shared across threads. Managed by the Garbage Collector. Divided into Young (Eden, Survivor) and Old (Tenured) generations."),t(),i(65,"li")(66,"strong"),e(67,"Stack (JVM Stack)"),t(),e(68," \u2014 Each thread gets its own stack. Each method call pushes a "),i(69,"em"),e(70,"frame"),t(),e(71," containing local variables, operand stack, and frame data. Popped on method return."),t(),i(72,"li")(73,"strong"),e(74,"PC Register (Program Counter)"),t(),e(75," \u2014 One per thread. Holds the address of the currently executing JVM instruction."),t(),i(76,"li")(77,"strong"),e(78,"Native Method Stack"),t(),e(79," \u2014 Supports native (C/C++) method calls via JNI. Each thread has its own."),t()(),n(80,"app-code-block",7),t()(),i(81,"section",1)(82,"h2",2),n(83,"app-icon",9),e(84," Class Loading Process "),t(),i(85,"div",6)(86,"p"),e(87," When the JVM first references a class it runs through three phases: "),t(),i(88,"ul")(89,"li")(90,"strong"),e(91,"Loading"),t(),e(92," \u2014 The ClassLoader reads the "),i(93,"code"),e(94,".class"),t(),e(95," file from disk (or network, JAR, etc.) and creates a "),i(96,"code"),e(97,"Class"),t(),e(98," object in the Method Area."),t(),i(99,"li")(100,"strong"),e(101,"Linking"),t(),e(102," \u2014 Three sub-steps: "),i(103,"ul")(104,"li")(105,"em"),e(106,"Verification"),t(),e(107,": Bytecode is checked for structural validity and security rules."),t(),i(108,"li")(109,"em"),e(110,"Preparation"),t(),e(111,": Static fields are allocated and set to default zero values."),t(),i(112,"li")(113,"em"),e(114,"Resolution"),t(),e(115,": Symbolic references (class/method/field names) are replaced with direct references."),t()()(),i(116,"li")(117,"strong"),e(118,"Initialization"),t(),e(119," \u2014 Static initializers and static field assignments run in top-to-bottom order. This is the first time user code executes for the class."),t()(),i(120,"p"),e(121," The JVM uses a "),i(122,"strong"),e(123,"delegation model"),t(),e(124," with three built-in classloaders: "),i(125,"strong"),e(126,"Bootstrap"),t(),e(127," (loads "),i(128,"code"),e(129,"java.lang"),t(),e(130,", etc. from the JDK), "),i(131,"strong"),e(132,"Extension / Platform"),t(),e(133," (loads "),i(134,"code"),e(135,"javax.*"),t(),e(136," and JDK extensions), "),i(137,"strong"),e(138,"Application"),t(),e(139," (loads classes from your classpath). "),t(),n(140,"app-code-block",7),t()(),i(141,"section",1)(142,"h2",2),n(143,"app-icon",10),e(144," JIT Compilation "),t(),i(145,"div",6)(146,"p"),e(147," The JVM starts by "),i(148,"strong"),e(149,"interpreting"),t(),e(150," bytecode instruction-by-instruction. The "),i(151,"strong"),e(152,"JIT (Just-In-Time) compiler"),t(),e(153," monitors execution and identifies "),i(154,"em"),e(155,"hot spots"),t(),e(156," \u2014 code paths that run frequently. It then compiles those paths to optimised native machine code at runtime. "),t(),i(157,"ul")(158,"li")(159,"strong"),e(160,"Tiered compilation"),t(),e(161," (default since Java 8): starts with fast C1 compilation, promotes heavily-used methods to full C2 optimisation (inlining, loop unrolling, dead-code elimination)."),t(),i(162,"li")(163,"strong"),e(164,"Hotspot threshold"),t(),e(165,": a method is typically compiled after ~10 000 invocations by default."),t(),i(166,"li"),e(167,"The result: Java code can approach or match native C++ performance for long-running applications."),t()(),n(168,"app-code-block",7),t()(),i(169,"section",1)(170,"h2",2),n(171,"app-icon",11),e(172," Interview Tips "),t(),i(173,"div",12)(174,"div",13)(175,"div",14),e(176,"1"),t(),i(177,"div")(178,"h4",15),e(179,"JDK vs JRE vs JVM \u2014 Know the Triangle"),t(),i(180,"p",16),e(181,"JDK \u2283 JRE \u2283 JVM. The JVM only executes bytecode; the JRE adds the standard library; the JDK adds the compiler and tools. You ship a JRE (or JDK) to end users; developers need the full JDK."),t()()(),i(182,"div",13)(183,"div",14),e(184,"2"),t(),i(185,"div")(186,"h4",15),e(187,"Why Is Java Platform-Independent?"),t(),i(188,"p",16)(189,"code"),e(190,"javac"),t(),e(191," produces "),i(192,"strong"),e(193,"bytecode"),t(),e(194,', not native machine code. Bytecode is the same on every platform. Each OS ships its own JVM that translates bytecode to native instructions at runtime \u2014 "write once, run anywhere."'),t()()(),i(195,"div",13)(196,"div",14),e(197,"3"),t(),i(198,"div")(199,"h4",15),e(200,"Stack vs Heap Memory"),t(),i(201,"p",16),e(202,"The "),i(203,"strong"),e(204,"Stack"),t(),e(205," is per-thread, fixed-size, stores primitive locals and references \u2014 fast but limited (causes "),i(206,"code"),e(207,"StackOverflowError"),t(),e(208," on deep recursion). The "),i(209,"strong"),e(210,"Heap"),t(),e(211," is shared, GC-managed, stores objects \u2014 larger but slower to allocate (causes "),i(212,"code"),e(213,"OutOfMemoryError"),t(),e(214," when exhausted)."),t()()()()()()),r&2&&(a(3),o("size",28),a(45),o("code",l.code1),a(3),o("size",28),a(29),o("code",l.code2),a(3),o("size",28),a(57),o("code",l.code3),a(3),o("size",28),a(25),o("code",l.code4),a(3),o("size",28))},dependencies:[c,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#1d4ed8}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#2563eb;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eff6ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#1d4ed8}"],changeDetection:0})};export{u as JvmBasicsComponent};
