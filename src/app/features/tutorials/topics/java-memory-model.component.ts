import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-java-memory-model',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Java Memory Model"
      subtitle="Understand the JVM memory layout — Heap, Stack, Metaspace, and Code Cache. Learn object lifecycle, memory leaks, and how to diagnose OOM errors."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #1e1b4b, #4f46e5)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="cpu" [size]="28" css="icon-indigo" /> JVM Memory Areas Overview</h2>
        <div class="topic-hero-container">
          <img src="/assets/images/topics/java-memory-model.png" alt="Java Memory Model Diagram" class="topic-hero-image" />
        </div>
        <div class="prose">
          <p>The JVM divides memory into several distinct regions, each with a specific role. Understanding these areas is essential for diagnosing <code>OutOfMemoryError</code>, tuning GC, and writing memory-efficient applications.</p>
          <ul>
            <li><strong>Heap</strong> — where all objects live; managed by the Garbage Collector; shared across threads.</li>
            <li><strong>Stack</strong> — one per thread; holds method call frames, local variables, and object references (not the objects themselves).</li>
            <li><strong>Metaspace</strong> — stores class metadata (method bytecodes, field descriptors); native memory, not heap.</li>
            <li><strong>Code Cache</strong> — JIT-compiled native code; managed by the JVM compiler.</li>
            <li><strong>PC Register</strong> — one per thread; tracks the current bytecode instruction being executed.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="database" [size]="28" css="icon-indigo" /> Heap Memory</h2>
        <div class="prose">
          <p>The heap is split into <strong>Young Generation</strong> (Eden + two Survivor spaces S0/S1) and <strong>Old Generation</strong> (Tenured). New objects are allocated in Eden. <strong>Minor GC</strong> collects the young generation frequently and quickly. Objects that survive enough Minor GC cycles are promoted to the Old Generation. <strong>Major / Full GC</strong> collects the old generation and is much more expensive.</p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="layers" [size]="28" css="icon-indigo" /> Stack Memory</h2>
        <div class="prose">
          <p>Each thread has its own private stack. It holds <strong>method call frames</strong> (local variables, operand stack, and frame data). Object <em>references</em> live on the stack; the actual objects are on the heap. Stack size is fixed (<code>-Xss</code>). Infinite recursion causes a <code>StackOverflowError</code> because frames accumulate without limit.</p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="box" [size]="28" css="icon-indigo" /> Metaspace (Java 8+)</h2>
        <div class="prose">
          <p>Metaspace replaced the old <strong>PermGen</strong> (permanent generation) in Java 8. It stores class definitions and method bytecodes in <strong>native memory</strong> (outside the heap), so it can grow dynamically. Class-loader leaks (common in app servers deploying/undeploying web apps repeatedly) cause <code>OutOfMemoryError: Metaspace</code>. Use <code>-XX:MaxMetaspaceSize</code> to cap it and catch leaks early.</p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="alert-circle" [size]="28" css="icon-indigo" /> Memory Leaks in Java</h2>
        <div class="prose">
          <p>Java's GC only collects <strong>unreachable</strong> objects. An object is reachable if any live thread, static field, or active reference chain points to it. "Memory leaks" in Java occur when objects are <em>logically</em> unused but still <em>technically</em> reachable. Common sources include static collections that grow without bound, unclosed streams or connections, caches without eviction policies, and event listeners never removed.</p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-indigo" /> Interview Tips</h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Stack vs Heap</h4>
              <p class="tip-desc">Stack is per-thread, holds primitives and object references, has fixed size, and allocation/deallocation is instant (LIFO). Heap is shared across all threads, holds actual objects, is GC-managed, and allocation involves finding free space. Accessing stack memory is faster than heap.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">StackOverflowError vs OutOfMemoryError</h4>
              <p class="tip-desc"><code>StackOverflowError</code> means a thread's stack is full — usually caused by infinite or very deep recursion. <code>OutOfMemoryError</code> means either the heap is exhausted (<code>Java heap space</code>), Metaspace is full (<code>Metaspace</code>), or native memory is gone. They require very different fixes.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Metaspace vs PermGen</h4>
              <p class="tip-desc">PermGen (pre-Java 8) was a fixed-size region <em>inside</em> the heap that stored class metadata — it frequently caused <code>OutOfMemoryError: PermGen space</code> in large apps. Metaspace (Java 8+) uses native memory and grows automatically, eliminating most PermGen issues. <code>-XX:MaxMetaspaceSize</code> adds an explicit ceiling.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .topic-hero-container { text-align: center; margin: 24px 0; }
    .topic-hero-image { width: 100%; max-width: 650px; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); border: 1px solid #D6DDD2; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose em { font-style: italic; }
    .prose code { background: #eef2ff; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #1e1b4b; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #4f46e5; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #eef2ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #1e1b4b; }
  `
})
export class JavaMemoryModelComponent {
  code1 = `// ┌─────────────────────────────────────────────────┐
// │                  JVM MEMORY                     │
// ├───────────────────────┬─────────────────────────┤
// │        HEAP           │    NON-HEAP MEMORY       │
// │  ┌─────────────────┐  │  ┌───────────────────┐  │
// │  │  Young Gen      │  │  │    Metaspace      │  │
// │  │  ┌─────────────┐│  │  │  (class metadata) │  │
// │  │  │    Eden     ││  │  └───────────────────┘  │
// │  │  ├──────┬──────┤│  │  ┌───────────────────┐  │
// │  │  │  S0  │  S1  ││  │  │   Code Cache      │  │
// │  │  └──────┴──────┘│  │  │  (JIT compiled)   │  │
// │  └─────────────────┘  │  └───────────────────┘  │
// │  ┌─────────────────┐  ├─────────────────────────┤
// │  │  Old Gen        │  │  Thread 1 Stack          │
// │  │  (Tenured)      │  │  Thread 2 Stack          │
// │  └─────────────────┘  │  Thread N Stack          │
// └───────────────────────┴─────────────────────────┘

// Key JVM flags:
// -Xms512m        set initial heap size to 512 MB
// -Xmx2g          set max heap size to 2 GB
// -Xss512k        set stack size per thread to 512 KB
// -XX:MaxMetaspaceSize=256m  cap Metaspace at 256 MB`;

  code2 = `// Heap size flags
// java -Xms512m -Xmx2g -jar myapp.jar

// Object allocation lifecycle
public class HeapDemo {
    public static void main(String[] args) {
        // Step 1: Object allocated in Eden (Young Gen)
        Object obj = new Object();

        // Step 2: After Minor GC, survivors move to S0/S1
        // Step 3: After N GC cycles → promoted to Old Gen

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
// -XX:HeapDumpPath=/tmp/heap.hprof`;

  code3 = `// StackOverflowError from infinite recursion
public class StackDemo {

    // BAD: infinite recursion → StackOverflowError
    static int factorial(int n) {
        return n * factorial(n - 1); // never reaches base case if n <= 0
    }

    // GOOD: base case prevents infinite recursion
    static long factorialSafe(long n) {
        if (n <= 1) return 1;
        return n * factorialSafe(n - 1);
    }

    // BEST for large n: iterative — no stack frames accumulate
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

// Tune stack size: java -Xss2m -jar myapp.jar`;

  code4 = `// Metaspace grows as classes are loaded
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
// -verbose:class               print every class load/unload`;

  code5 = `// Classic Java memory leak: static collection that never shrinks
public class SessionCache {
    // PROBLEM: static map is a GC root — nothing inside is ever collected
    private static final Map<String, byte[]> cache = new HashMap<>();

    public static void store(String sessionId, byte[] data) {
        cache.put(sessionId, data);  // grows forever
    }

    // Missing: no remove() call when session expires!
}

// Fix 1: use WeakHashMap — entries collected when key is GC'd
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
// 1. -XX:+HeapDumpOnOutOfMemoryError → get heap.hprof
// 2. Open with Eclipse Memory Analyzer (MAT) or VisualVM
// 3. Look for objects with unexpectedly high retained heap`;
}
