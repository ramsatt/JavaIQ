import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-garbage-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Garbage Collection"
      subtitle="Understand how JVM reclaims memory automatically. Learn generational GC, G1GC, ZGC, finalization, and how to tune GC for your application."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #14532d, #22c55e)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="target" [size]="28" css="icon-green" /> GC Roots &amp; Reachability</h2>
        <div class="prose">
          <p>The GC determines which objects are alive by tracing from <strong>GC roots</strong> — a fixed set of starting points that are always considered reachable. Any object reachable from a GC root (directly or transitively) is kept alive. Everything else is eligible for collection.</p>
          <p>GC roots include: active thread stacks (local variables and method parameters), static fields of loaded classes, JNI global references, and monitor objects. Importantly, <strong>circular references alone do not prevent collection</strong> — two objects pointing to each other but unreachable from any GC root form an "island of isolation" and are collected.</p>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="layers" [size]="28" css="icon-green" /> Generational GC</h2>
        <div class="prose">
          <p>The <strong>weak generational hypothesis</strong> says most objects die young. The JVM exploits this by dividing the heap into generations. New objects enter Eden. When Eden fills, a <strong>Minor GC</strong> runs — live objects move to a Survivor space (S0 or S1). Objects that survive enough Minor GCs are promoted to the <strong>Old Generation</strong> (Tenured). A <strong>Major / Full GC</strong> collects the old generation and is expensive because it typically triggers a Stop-The-World pause.</p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="zap" [size]="28" css="icon-green" /> GC Algorithms</h2>
        <div class="prose">
          <p>The JVM ships several GC implementations optimized for different goals. Choose based on your latency vs throughput requirements:</p>
          <ul>
            <li><strong>Serial GC</strong> — single-threaded; suitable only for small apps or embedded devices.</li>
            <li><strong>Parallel GC</strong> — multi-threaded; maximizes throughput; higher pauses; was the default before Java 9.</li>
            <li><strong>G1GC</strong> — default since Java 9; region-based; targets predictable low pauses; good balance.</li>
            <li><strong>ZGC</strong> — Java 15+; concurrent; sub-millisecond pauses; scales to terabyte heaps.</li>
            <li><strong>Shenandoah</strong> — concurrent like ZGC; low latency; available in OpenJDK builds.</li>
          </ul>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="trash-2" [size]="28" css="icon-green" /> finalize() and Cleaners</h2>
        <div class="prose">
          <p><code>finalize()</code> was deprecated in Java 9 and removed in Java 18. It ran after GC but before memory was reclaimed — the JVM offered no timing guarantees, and objects could even be <em>resurrected</em> by storing <code>this</code> in a static field inside <code>finalize()</code>. This caused GC slowdowns and resource leaks. The modern replacement is the <strong>Cleaner API</strong> (Java 9+) for native resources, and <strong>try-with-resources</strong> for everything else.</p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="sliders" [size]="28" css="icon-green" /> GC Tuning Basics</h2>
        <div class="prose">
          <p>Start with the defaults (G1GC) and tune only when profiling shows GC is a bottleneck. Key flags and reference types for memory-sensitive caches:</p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-green" /> Interview Tips</h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Minor vs Major GC</h4>
              <p class="tip-desc">Minor GC collects only the Young Generation (Eden + Survivors). It is fast because the young gen is small and most objects are dead. Major / Full GC collects the Old Generation (and usually the entire heap). It causes a Stop-The-World pause and is significantly slower — minimizing Full GC frequency is a primary tuning goal.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Why Avoid finalize()</h4>
              <p class="tip-desc"><code>finalize()</code> has non-deterministic execution — the JVM makes no guarantee about when (or even if) it runs. It can <em>resurrect</em> objects by creating new references inside <code>finalize()</code>, leading to confusing bugs. It delays GC because the JVM must run the finalizer before reclaiming memory. Use <code>try-with-resources</code> or <code>Cleaner</code> instead.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">G1GC vs ZGC</h4>
              <p class="tip-desc">G1GC is the default (Java 9+) and provides a good balance between throughput and latency. It divides the heap into equal-sized regions and aims for configurable pause-time goals. ZGC (Java 15+) is fully concurrent — nearly all work happens while the application runs, achieving sub-millisecond pauses even on multi-terabyte heaps, at the cost of some throughput overhead.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-green { color: #22c55e; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose em { font-style: italic; }
    .prose code { background: #f0fdf4; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #14532d; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #22c55e; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #f0fdf4; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #14532d; }
  `
})
export class GarbageCollectionComponent {
  code1 = `// GC Roots — always reachable, never collected
// 1. Active thread stacks
// 2. Static fields of loaded classes
// 3. JNI global references

public class ReachabilityDemo {
    static Object staticRoot; // GC root — never collected while class is loaded

    public static void main(String[] args) {
        Object a = new Object(); // reachable via stack (local var)
        Object b = new Object(); // reachable via stack
        a = null; // 'a' now unreachable → eligible for GC

        // Island of isolation: circular refs, but no external root
        Node n1 = new Node();
        Node n2 = new Node();
        n1.next = n2;
        n2.next = n1; // circular reference
        n1 = null;
        n2 = null;
        // Both nodes are now unreachable despite pointing to each other
        // → GC WILL collect them (Java uses tracing GC, not ref counting)

        System.gc(); // hint only — GC may or may not run immediately
    }
}

class Node { Node next; }`;

  code2 = `// Generational heap layout diagram
// ┌─────────────────────────────────────────────────────┐
// │                   HEAP                              │
// │  ┌──────────────────────────┐  ┌────────────────┐  │
// │  │      Young Generation    │  │  Old Generation │  │
// │  │  ┌────────┬─────┬──────┐ │  │   (Tenured)    │  │
// │  │  │  Eden  │ S0  │  S1  │ │  │                │  │
// │  │  │ (new   │(sur-│(sur- │ │  │ Long-lived     │  │
// │  │  │  objs) │vivor│vivor)│ │  │ objects after  │  │
// │  │  └────────┴─────┴──────┘ │  │ N Minor GCs    │  │
// │  └──────────────────────────┘  └────────────────┘  │
// │   ← Minor GC (fast, frequent) →  ← Major/Full GC → │
// └─────────────────────────────────────────────────────┘

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
        // -XX:NewRatio=2          → Old:Young = 2:1
        // -XX:SurvivorRatio=8     → Eden:Survivor = 8:1
        // -XX:MaxTenuringThreshold=15  → promote after 15 GC cycles
    }
}`;

  code3 = `// GC algorithm selection flags

// Serial GC — single-threaded, small apps only
// java -XX:+UseSerialGC -jar app.jar

// Parallel GC — multi-threaded, throughput-focused
// java -XX:+UseParallelGC -XX:ParallelGCThreads=8 -jar app.jar

// G1GC — default Java 9+, region-based, low pause goal
// java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar app.jar

// ZGC — Java 15+, concurrent, sub-ms pauses, huge heaps
// java -XX:+UseZGC -Xmx16g -jar app.jar

// Shenandoah — concurrent, low latency
// java -XX:+UseShenandoahGC -jar app.jar

// G1GC tuning example
public class G1Tuning {
    public static void main(String[] args) {
        // Useful G1GC flags:
        // -XX:G1HeapRegionSize=16m   → region size (1–32 MB, power of 2)
        // -XX:G1NewSizePercent=5     → min % of heap for young gen
        // -XX:G1MaxNewSizePercent=60 → max % of heap for young gen
        // -XX:InitiatingHeapOccupancyPercent=45
        //    → start concurrent GC cycle when heap is 45% full
        System.out.println("Run with: java -XX:+UseG1GC "
            + "-Xms1g -Xmx4g "
            + "-XX:MaxGCPauseMillis=100 "
            + "-Xlog:gc*:file=gc.log "
            + "-jar myapp.jar");
    }
}`;

  code4 = `// finalize() — DEPRECATED (Java 9), REMOVED (Java 18+)
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
        // Register cleanup action — runs when NativeBuffer becomes phantom-reachable
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

// Usage — always prefer try-with-resources
try (NativeBuffer buf = new NativeBuffer(4096)) {
    // use buf
} // close() called here → cleanable.clean() → freeNative()`;

  code5 = `// Key GC tuning flags
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

        // StrongReference — default; GC never collects
        Object strong = data;

        // SoftReference — collected when JVM needs memory (good for caches)
        SoftReference<Object> soft = new SoftReference<>(data);

        // WeakReference — collected at next GC cycle (WeakHashMap keys)
        WeakReference<Object> weak = new WeakReference<>(data);

        // PhantomReference — collected after finalization (resource cleanup)
        ReferenceQueue<Object> queue = new ReferenceQueue<>();
        PhantomReference<Object> phantom = new PhantomReference<>(data, queue);

        data = null; // release strong reference

        System.gc();

        System.out.println("Soft still alive: " + (soft.get() != null));
        System.out.println("Weak still alive: " + (weak.get() != null));
        // Weak: likely null after GC; Soft: likely still alive (memory available)
    }
}`;
}
