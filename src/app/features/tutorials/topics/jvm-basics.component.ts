import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-jvm-basics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="JVM Architecture"
      subtitle="Understand the Java Virtual Machine — classloading, bytecode execution, JIT compilation, memory areas, and why Java is platform-independent."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e3a5f, #2563eb)">

      <!-- Section 1: What Is the JVM? -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="cpu" [size]="28" css="icon-blue" /> What Is the JVM?
        </h2>
        <div class="prose">
          <p>
            The <strong>Java Virtual Machine (JVM)</strong> is an abstract computing machine that provides a runtime
            environment for executing Java bytecode. Understanding the JDK / JRE / JVM triangle is a classic interview topic.
          </p>
          <ul>
            <li><strong>JDK (Java Development Kit)</strong> — Full toolkit: compiler (<code>javac</code>), JRE, debugger, profiler, and more. Used by developers to write and compile code.</li>
            <li><strong>JRE (Java Runtime Environment)</strong> — JVM + standard class libraries. Enough to <em>run</em> Java programs, not to compile them.</li>
            <li><strong>JVM (Java Virtual Machine)</strong> — The engine that loads, verifies, and executes bytecode. Platform-specific implementations exist for Windows, macOS, Linux, etc.</li>
          </ul>
          <p>
            <strong>Platform independence</strong>: <code>javac</code> compiles your <code>.java</code> source into
            <strong>bytecode</strong> (<code>.class</code> files) — an intermediate representation that no CPU natively understands.
            Each platform ships a JVM that translates this bytecode to native machine code at runtime.
            One codebase, every platform.
          </p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: JVM Memory Areas -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="database" [size]="28" css="icon-blue" /> JVM Memory Areas
        </h2>
        <div class="prose">
          <p>The JVM organises memory into five distinct runtime data areas:</p>
          <ul>
            <li><strong>Method Area</strong> — Stores class metadata, static fields, method bytecode, constant pool. Shared across all threads. (Called Metaspace in Java 8+.)</li>
            <li><strong>Heap</strong> — Where all object instances live. Shared across threads. Managed by the Garbage Collector. Divided into Young (Eden, Survivor) and Old (Tenured) generations.</li>
            <li><strong>Stack (JVM Stack)</strong> — Each thread gets its own stack. Each method call pushes a <em>frame</em> containing local variables, operand stack, and frame data. Popped on method return.</li>
            <li><strong>PC Register (Program Counter)</strong> — One per thread. Holds the address of the currently executing JVM instruction.</li>
            <li><strong>Native Method Stack</strong> — Supports native (C/C++) method calls via JNI. Each thread has its own.</li>
          </ul>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Class Loading Process -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-blue" /> Class Loading Process
        </h2>
        <div class="prose">
          <p>
            When the JVM first references a class it runs through three phases:
          </p>
          <ul>
            <li><strong>Loading</strong> — The ClassLoader reads the <code>.class</code> file from disk (or network, JAR, etc.) and creates a <code>Class</code> object in the Method Area.</li>
            <li>
              <strong>Linking</strong> — Three sub-steps:
              <ul>
                <li><em>Verification</em>: Bytecode is checked for structural validity and security rules.</li>
                <li><em>Preparation</em>: Static fields are allocated and set to default zero values.</li>
                <li><em>Resolution</em>: Symbolic references (class/method/field names) are replaced with direct references.</li>
              </ul>
            </li>
            <li><strong>Initialization</strong> — Static initializers and static field assignments run in top-to-bottom order. This is the first time user code executes for the class.</li>
          </ul>
          <p>
            The JVM uses a <strong>delegation model</strong> with three built-in classloaders:
            <strong>Bootstrap</strong> (loads <code>java.lang</code>, etc. from the JDK),
            <strong>Extension / Platform</strong> (loads <code>javax.*</code> and JDK extensions),
            <strong>Application</strong> (loads classes from your classpath).
          </p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: JIT Compilation -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-blue" /> JIT Compilation
        </h2>
        <div class="prose">
          <p>
            The JVM starts by <strong>interpreting</strong> bytecode instruction-by-instruction.
            The <strong>JIT (Just-In-Time) compiler</strong> monitors execution and identifies <em>hot spots</em> —
            code paths that run frequently. It then compiles those paths to optimised native machine code at runtime.
          </p>
          <ul>
            <li><strong>Tiered compilation</strong> (default since Java 8): starts with fast C1 compilation, promotes heavily-used methods to full C2 optimisation (inlining, loop unrolling, dead-code elimination).</li>
            <li><strong>Hotspot threshold</strong>: a method is typically compiled after ~10 000 invocations by default.</li>
            <li>The result: Java code can approach or match native C++ performance for long-running applications.</li>
          </ul>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-blue" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">JDK vs JRE vs JVM — Know the Triangle</h4>
              <p class="tip-desc">JDK ⊃ JRE ⊃ JVM. The JVM only executes bytecode; the JRE adds the standard library; the JDK adds the compiler and tools. You ship a JRE (or JDK) to end users; developers need the full JDK.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Why Is Java Platform-Independent?</h4>
              <p class="tip-desc"><code>javac</code> produces <strong>bytecode</strong>, not native machine code. Bytecode is the same on every platform. Each OS ships its own JVM that translates bytecode to native instructions at runtime — "write once, run anywhere."</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Stack vs Heap Memory</h4>
              <p class="tip-desc">The <strong>Stack</strong> is per-thread, fixed-size, stores primitive locals and references — fast but limited (causes <code>StackOverflowError</code> on deep recursion). The <strong>Heap</strong> is shared, GC-managed, stores objects — larger but slower to allocate (causes <code>OutOfMemoryError</code> when exhausted).</p>
            </div>
          </div>
        </div>
      </section>

    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-blue { color: #2563eb; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #eff6ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1d4ed8;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #2563eb; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #eff6ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #1d4ed8; }
  `
})
export class JvmBasicsComponent {

  code1 = `// Step 1: Compile source to platform-neutral bytecode
// $ javac HelloWorld.java  →  produces HelloWorld.class

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
// Only the JVM (translator) differs per platform.`;

  code2 = `/*
 *  JVM Runtime Data Areas (per-process unless noted)
 * ┌──────────────────────────────────────────────────────────┐
 * │                      METHOD AREA                         │
 * │   (class metadata, static fields, bytecode, constants)   │
 * │                    [shared by all threads]               │
 * ├──────────────────────────────────────────────────────────┤
 * │                        HEAP                              │
 * │   Young Gen (Eden | S0 | S1)  │  Old Gen (Tenured)       │
 * │   all object instances live here  [shared by all threads]│
 * ├───────────────┬───────────────┬──────────────────────────┤
 * │   Thread-1    │   Thread-2    │      Thread-N            │
 * │   JVM Stack   │   JVM Stack   │      JVM Stack           │
 * │  [frame/frame]│  [frame/frame]│     [frame/frame]        │
 * │   PC Register │   PC Register │      PC Register         │
 * │  Native Stack │  Native Stack │     Native Stack         │
 * └───────────────┴───────────────┴──────────────────────────┘
 */

// StackOverflowError — stack grows without bound (deep recursion)
public static int infiniteRecursion(int n) {
    return infiniteRecursion(n + 1); // no base case!
}
// java.lang.StackOverflowError

// OutOfMemoryError — heap exhausted
List<byte[]> leak = new ArrayList<>();
while (true) {
    leak.add(new byte[1024 * 1024]); // keep allocating 1 MB chunks
}
// java.lang.OutOfMemoryError: Java heap space`;

  code3 = `// --- Class.forName() triggers Loading + Linking + Initialization ---
Class<?> clazz = Class.forName("com.example.MyService");
Object instance = clazz.getDeclaredConstructor().newInstance();

// --- Inspecting the ClassLoader hierarchy ---
ClassLoader appCL  = MyService.class.getClassLoader();
// com.example.MyService uses the Application ClassLoader

ClassLoader extCL  = appCL.getParent();
// Extension / Platform ClassLoader

ClassLoader bootCL = extCL.getParent();
// null — Bootstrap ClassLoader is native (C++), not a Java object

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

// Static initializer — runs exactly once during Initialization phase
public class Config {
    static final Map<String, String> DEFAULTS;
    static {
        DEFAULTS = new HashMap<>();
        DEFAULTS.put("timeout", "30");
        DEFAULTS.put("retries", "3");
        System.out.println("Config initialized"); // printed once, lazily
    }
}`;

  code4 = `// This tight loop is a classic JIT hotspot target.
// After ~10 000 iterations, the JVM promotes it to native code.

public class JitDemo {
    public static void main(String[] args) {
        long sum = 0;
        for (int i = 0; i < 1_000_000; i++) {
            sum += compute(i);
        }
        System.out.println("Sum: " + sum);
    }

    // JIT will inline this small method at the call site —
    // the method call overhead disappears entirely.
    private static long compute(int n) {
        return (long) n * n;
    }
}

// Run with JIT logging to see what gets compiled:
// $ java -XX:+PrintCompilation JitDemo
//   77    1       3       java.lang.String::hashCode (49 bytes)
//  104   42       4       JitDemo::compute (6 bytes)   ← promoted to C2

// Disable JIT to see the raw interpreted speed (much slower):
// $ java -Xint JitDemo

// Tiered compilation levels:
//   Level 0 — Interpreter
//   Level 1 — C1, no profiling
//   Level 2 — C1, limited profiling
//   Level 3 — C1, full profiling
//   Level 4 — C2, fully optimised native code`;
}
