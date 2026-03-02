import { Question } from './question.model';

export const MULTITHREADING_QUESTIONS: Question[] = [
  {
    id: 59,
    category: 'Multithreading',
    question: 'How to create a Thread in Java?',
    answer: '1. By extending the Thread class. 2. By implementing the Runnable interface (preferred as it allows extending other classes).',
    asked_metadata: '7x Google, 6x Oracle, 5x Amazon',
    coreConceptDescription: 'There are three ways to create threads: extend Thread class, implement Runnable (preferred, allows extending other classes), or implement Callable (returns a result). In modern Java, prefer ExecutorService or virtual threads.',
    code: `// 1. Extending Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}

// 2. Implementing Runnable (preferred)
Runnable myRunnable = () -> System.out.println("Running");
new Thread(myRunnable).start();`,
    subConcepts: [
      { title: 'Extending Thread', description: 'Override run(). <b>Cannot extend another class</b>. Use only when you need to override Thread behavior.' },
      { title: 'Implementing Runnable', description: '<b>Preferred approach</b>. Allows extending other classes. Can be used with lambda expressions and ExecutorService.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Modern Best Practice', description: 'Use ExecutorService.submit(Runnable) instead of new Thread() for production code.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Lambda Threads', description: 'new Thread(() -> doWork()).start() — concise syntax with Runnable interface.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 137,
    category: 'Multithreading',
    question: 'What is the difference between Runnable and Callable?',
    answer: 'Runnable does not return a result and cannot throw a checked exception. Callable returns a result (Future) and can throw a checked exception.',
    asked_metadata: '7x Google, 6x Amazon, 5x Microsoft',
    coreConceptDescription: 'Runnable.run() returns void and cannot throw checked exceptions. Callable.call() returns a value (via Future) and can throw checked exceptions. Callable is designed for tasks that produce results.',
    code: `// Runnable — no return value
Runnable task = () -> System.out.println("Done");

// Callable — returns a result
Callable<Integer> compute = () -> {
    return 42; // Return value via Future
};

Future<Integer> future = executor.submit(compute);
int result = future.get(); // Blocks until result is ready`,
    subConcepts: [
      { title: 'Runnable', description: '<b>void run()</b> — no return value, cannot throw checked exceptions. Used for fire-and-forget tasks.' },
      { title: 'Callable<V>', description: '<b>V call() throws Exception</b> — returns a result wrapped in Future<V>. Used for tasks that produce a value.' }
    ],
    useCases: [
      { icon: 'fa-fire', title: 'Fire-and-Forget', description: 'Use Runnable for logging, notifications, or side effects that don\'t need a result.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-calculator', title: 'Computation Results', description: 'Use Callable for parallel computations where you need the result back (via Future.get()).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 138,
    category: 'Multithreading',
    question: 'What is the difference between wait() and sleep()?',
    answer: 'wait() releases the lock and must be called from a synchronized context. sleep() holds the lock and pauses execution for a specified time.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Intel',
    coreConceptDescription: 'wait() is called on an object\'s monitor, releases the lock, and waits for notify(). sleep() is a static Thread method that pauses execution for a duration without releasing any locks.',
    code: `// wait() — releases lock, waits for notify
synchronized(lock) {
    while (!condition) {
        lock.wait();  // Releases lock
    }
}

// sleep() — holds lock, pauses thread
Thread.sleep(1000); // Pauses for 1 second, holds locks`,
    subConcepts: [
      { title: 'wait() — Object Method', description: 'Must be inside <b>synchronized block</b>. <b>Releases the lock</b>. Wakes up on notify()/notifyAll().' },
      { title: 'sleep() — Thread Method', description: 'Can be called <b>anywhere</b>. <b>Retains all locks</b>. Wakes up after specified time.' }
    ],
    useCases: [
      { icon: 'fa-bell', title: 'Producer-Consumer', description: 'wait()/notify() is the classic signaling mechanism between producer and consumer threads.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-clock', title: 'Polling/Delays', description: 'sleep() is used for polling intervals or introducing intentional delays in execution.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 139,
    category: 'Multithreading',
    question: 'What is a Deadlock?',
    answer: 'A situation where two or more threads are blocked forever, each waiting for the other to release a resource/lock.',
    asked_metadata: '7x Google, 6x Facebook, 5x Amazon',
    coreConceptDescription: 'Deadlock occurs when two or more threads form a circular wait on locks. Four conditions must hold: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Prevention: consistent lock ordering.',
    code: `// Deadlock example
Thread 1: synchronized(lockA) { synchronized(lockB) { ... } }
Thread 2: synchronized(lockB) { synchronized(lockA) { ... } }

// Fix: always acquire locks in the same order
Thread 1: synchronized(lockA) { synchronized(lockB) { ... } }
Thread 2: synchronized(lockA) { synchronized(lockB) { ... } }`,
    subConcepts: [
      { title: '4 Necessary Conditions', description: '<b>Mutual Exclusion</b>, <b>Hold & Wait</b>, <b>No Preemption</b>, <b>Circular Wait</b> — break any one to prevent deadlock.' },
      { title: 'Detection & Prevention', description: 'Use <b>jstack</b> for detection. Prevent with consistent lock ordering, tryLock() with timeout, or lock-free algorithms.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Production Debugging', description: 'jstack <PID> shows thread dump with deadlock detection — essential for production issues.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-lock', title: 'Lock Ordering', description: 'Always acquire multiple locks in the same global order to prevent circular wait.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 140,
    category: 'Multithreading',
    question: 'What is the ExecutorService?',
    answer: 'A framework provided by the java.util.concurrent package to simplify asynchronous task execution. It manages a pool of threads and assigns tasks to them.',
    asked_metadata: '8x JPMorgan, 7x Amazon, 6x Goldman Sachs',
    coreConceptDescription: 'ExecutorService abstracts thread management by providing a pool of reusable threads. It supports submit(Runnable/Callable), shutdown(), Future for results, and various pool configurations.',
    code: `ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> {
    System.out.println("Task executed");
});
executor.shutdown();`,
    subConcepts: [
      { title: 'Thread Pool Types', description: '<b>FixedThreadPool</b> (fixed N), <b>CachedThreadPool</b> (grows on demand), <b>SingleThreadExecutor</b> (1 thread), <b>ScheduledThreadPool</b> (delayed/periodic).' },
      { title: 'Lifecycle', description: '<b>submit()</b> queues tasks. <b>shutdown()</b> stops accepting new tasks. <b>awaitTermination()</b> waits for completion.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Web Servers', description: 'Handle concurrent HTTP requests with a thread pool instead of creating new threads per request.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gears', title: 'Batch Processing', description: 'Submit batch tasks to a pool and collect results via List<Future<T>> for parallel processing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 141,
    category: 'Multithreading',
    question: 'What is ThreadLocal?',
    answer: 'A class that provides thread-local variables. Each thread accessing the variable has its own, independently initialized copy.',
    asked_metadata: '6x Uber, 5x Airbnb, 4x LinkedIn',
    coreConceptDescription: 'ThreadLocal provides per-thread isolated variables. Each thread sees its own independent copy, avoiding synchronization. Common for user context, transaction context, and database connections in thread pools.',
    code: `private static final ThreadLocal<String> userContext = new ThreadLocal<>();

// Thread 1
userContext.set("Alice"); // Only visible to Thread 1

// Thread 2
userContext.set("Bob");   // Only visible to Thread 2

// IMPORTANT: Always clean up!
userContext.remove(); // Prevent memory leaks in thread pools`,
    subConcepts: [
      { title: 'Per-Thread Isolation', description: 'Each thread has its <b>own copy</b> of the variable. No synchronization needed. No visibility between threads.' },
      { title: 'Memory Leak Risk', description: 'In thread pools, threads are reused. <b>Always call remove()</b> to prevent stale data and memory leaks.' }
    ],
    useCases: [
      { icon: 'fa-user', title: 'User Context', description: 'Store authenticated user info per request thread — accessed anywhere without parameter passing.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Connection Per Thread', description: 'JDBC connection-per-thread pattern uses ThreadLocal to bind connections to threads.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 142,
    category: 'Multithreading',
    question: 'What is a CountDownLatch?',
    answer: 'A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.',
    asked_metadata: '6x LinkedIn, 5x Twitter, 4x Amazon',
    coreConceptDescription: 'CountDownLatch is initialized with a count. Threads call countDown() to decrement it. Other threads call await() to block until the count reaches zero. It is one-time use (cannot be reset).',
    code: `CountDownLatch latch = new CountDownLatch(3);

// Worker threads
executor.submit(() -> { doWork(); latch.countDown(); });
executor.submit(() -> { doWork(); latch.countDown(); });
executor.submit(() -> { doWork(); latch.countDown(); });

// Main thread waits for all 3 workers
latch.await(); // Blocks until count = 0
System.out.println("All workers done!");`,
    subConcepts: [
      { title: 'One-Shot Barrier', description: 'Once count reaches <b>zero, it cannot be reset</b>. All threads blocked on await() are released simultaneously.' },
      { title: 'vs CyclicBarrier', description: 'CountDownLatch: <b>one-time, countdown</b>. CyclicBarrier: <b>reusable, mutual wait</b>.' }
    ],
    useCases: [
      { icon: 'fa-flag-checkered', title: 'Startup Coordination', description: 'Wait for all service initializations to complete before accepting requests.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Testing', description: 'Synchronize test threads to start simultaneously for stress testing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 143,
    category: 'Multithreading',
    question: 'What is a CyclicBarrier?',
    answer: 'A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.',
    asked_metadata: '5x Apple, 4x Intel, 3x AMD',
    coreConceptDescription: 'CyclicBarrier makes N threads wait at a barrier point until all N arrive. Then all are released simultaneously. Unlike CountDownLatch, it is reusable (cyclic) for multiple rounds.',
    code: `CyclicBarrier barrier = new CyclicBarrier(3, () -> 
    System.out.println("All arrived! Proceeding..."));

// Each thread
executor.submit(() -> {
    prepareData();
    barrier.await(); // Wait for all 3
    processData();   // All proceed together
});`,
    subConcepts: [
      { title: 'Mutual Wait', description: 'All threads <b>wait for each other</b>. When the last thread arrives, all are released. Optional barrier action runs.' },
      { title: 'Reusable (Cyclic)', description: 'The barrier <b>resets automatically</b> after all threads pass. Can be used for multi-phase algorithms.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Multi-Phase Algorithms', description: 'Parallel simulations where all threads must complete phase N before starting phase N+1.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-users', title: 'Parallel Testing', description: 'Ensure all test threads start work at exactly the same time for race condition testing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 144,
    category: 'Multithreading',
    question: 'What is the difference between submit() and execute()?',
    answer: 'execute() is for Runnable tasks and returns void. submit() is for Runnable or Callable tasks and returns a Future holding the result.',
    asked_metadata: '6x Wells Fargo, 5x Citi, 4x JPMorgan',
    coreConceptDescription: 'execute(Runnable) returns void and silently swallows exceptions. submit(Runnable/Callable) returns Future, allowing result retrieval and exception handling via Future.get().',
    subConcepts: [
      { title: 'execute(Runnable)', description: 'Returns <b>void</b>. Exceptions are <b>swallowed silently</b> (unless UncaughtExceptionHandler is set).' },
      { title: 'submit(Callable/Runnable)', description: 'Returns <b>Future</b>. Exceptions are captured and rethrown when calling <b>Future.get()</b>.' }
    ],
    useCases: [
      { icon: 'fa-fire', title: 'Fire-and-Forget', description: 'Use execute() for logging tasks where you don\'t care about the result or errors.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Error Handling', description: 'Always prefer submit() to avoid silently lost exceptions in production code.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 145,
    category: 'Multithreading',
    question: 'What is a Race Condition?',
    answer: 'It occurs when two or more threads access shared data and try to change it at the same time, leading to unpredictable results.',
    asked_metadata: '7x IBM, 6x Cisco, 5x Oracle',
    coreConceptDescription: 'A race condition occurs when the outcome depends on the timing/interleaving of thread execution. Fix with synchronization (synchronized, Lock), atomic variables, or immutable objects.',
    code: `// Race condition — count may not reach 2000
int count = 0;
// Thread 1: for(int i=0; i<1000; i++) count++;
// Thread 2: for(int i=0; i<1000; i++) count++;

// Fix 1: synchronized
synchronized(lock) { count++; }

// Fix 2: AtomicInteger (better performance)
AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet();`,
    subConcepts: [
      { title: 'Check-Then-Act Race', description: 'if (map.containsKey(key)) map.get(key) — <b>between check and act</b>, another thread may modify the map.' },
      { title: 'Read-Modify-Write Race', description: 'count++ is NOT atomic — it reads, increments, writes. <b>Multiple threads can overwrite</b> each other.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Prevention', description: 'Use AtomicInteger, ConcurrentHashMap, or synchronized blocks to eliminate race conditions.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Detection', description: 'Tools like ThreadSanitizer, FindBugs, or stress testing can detect race conditions.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 146,
    category: 'Multithreading',
    question: 'What is the Fork/Join Framework?',
    answer: 'An implementation of the ExecutorService interface that helps you take advantage of multiple processors. It is designed for work that can be broken into smaller pieces recursively.',
    asked_metadata: '7x Oracle, 6x IBM, 5x Intel',
    coreConceptDescription: 'Fork/Join uses divide-and-conquer: recursively split tasks into subtasks (fork), execute in parallel, then combine results (join). Work-stealing ensures idle threads grab work from busy threads\' queues.',
    code: `class SumTask extends RecursiveTask<Long> {
    protected Long compute() {
        if (array.length <= THRESHOLD) {
            return Arrays.stream(array).sum();
        }
        SumTask left = new SumTask(leftHalf);
        SumTask right = new SumTask(rightHalf);
        left.fork();  // Async execution
        return right.compute() + left.join(); // Combine
    }
}`,
    subConcepts: [
      { title: 'Fork (Split)', description: 'Recursively <b>split large tasks</b> into smaller subtasks until they are small enough to compute directly.' },
      { title: 'Work-Stealing', description: 'Idle threads <b>steal tasks</b> from busy threads\' double-ended queues, ensuring optimal CPU utilization.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Parallel Streams', description: 'Java parallel streams use Fork/Join framework internally for parallel processing.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-calculator', title: 'Divide & Conquer', description: 'Sorting, searching, matrix multiplication — any problem that can be recursively subdivided.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 149,
    category: 'Multithreading',
    question: 'How do you achieve thread safety in a large-scale Java application?',
    answer: 'Use immutability, concurrent collections (ConcurrentHashMap), fine-grained locks, and higher-level abstractions like CompletableFuture.',
    asked_metadata: '6x Uber, 5x Netflix, 4x Amazon',
    coreConceptDescription: 'Thread safety strategies in order of preference: 1) Immutability (safest), 2) Thread confinement (ThreadLocal), 3) Concurrent collections, 4) Atomic variables, 5) Synchronized blocks (last resort).',
    subConcepts: [
      { title: 'Immutability First', description: '<b>Immutable objects</b> (final fields, no setters) are inherently thread-safe. No synchronization needed.' },
      { title: 'Concurrent Collections', description: '<b>ConcurrentHashMap</b>, <b>CopyOnWriteArrayList</b>, <b>BlockingQueue</b> — thread-safe without external synchronization.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Design for Safety', description: 'Make classes immutable by default. Use Records or @Value (Lombok) for thread-safe data holders.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gears', title: 'CompletableFuture', description: 'Chain async operations safely: thenApply(), thenCompose(), allOf() — no manual thread management.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 150,
    category: 'Multithreading',
    question: 'How do you troubleshoot deadlocks and performance bottlenecks?',
    answer: 'Collect thread dumps, analyze lock graphs, use profilers (JProfiler, VisualVM), and apply lock ordering or lock-free algorithms.',
    asked_metadata: '7x Amazon, 6x Intel, 5x Oracle',
    coreConceptDescription: 'Use jstack for thread dumps, ThreadMXBean for programmatic detection, VisualVM/JProfiler for visualization, and flame graphs (async-profiler) for CPU/lock contention analysis.',
    subConcepts: [
      { title: 'Thread Dump Analysis', description: '<b>jstack PID</b> captures all thread states. Look for BLOCKED/WAITING threads and <b>circular lock dependencies</b>.' },
      { title: 'Tools', description: '<b>VisualVM</b> (free GUI), <b>JProfiler</b> (commercial), <b>async-profiler</b> (flame graphs), <b>Micrometer</b> (metrics).' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Deadlock Detection', description: 'jstack output says "Found one Java-level deadlock" with the exact threads and locks involved.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-fire', title: 'Flame Graphs', description: 'async-profiler generates flame graphs showing CPU time by call stack — instant bottleneck visibility.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 163,
    category: 'Multithreading',
    question: 'What is multithreading and what are its advantages?',
    answer: 'Multithreading is the concurrent execution of two or more parts of a program. Advantages: Max CPU utilization, responsive UIs, and parallel task processing.',
    asked_metadata: '8x Intel, 7x NVIDIA, 6x AMD',
    coreConceptDescription: 'Multithreading allows concurrent execution of multiple threads within a single process, sharing the same memory space. Advantages: CPU utilization, responsive UIs, parallel I/O operations.',
    subConcepts: [
      { title: 'Concurrency vs Parallelism', description: '<b>Concurrency</b>: multiple tasks making progress (time-slicing). <b>Parallelism</b>: multiple tasks executing simultaneously (multi-core).' },
      { title: 'Advantages', description: 'Better <b>CPU utilization</b>, responsive <b>UI threads</b>, faster <b>I/O operations</b>, and efficient <b>resource sharing</b> within a process.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Web Servers', description: 'Each HTTP request is handled by a separate thread, enabling concurrent request processing.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gauge-high', title: 'Parallel Computing', description: 'Split large computations across CPU cores for faster execution (parallel streams, Fork/Join).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 175,
    category: 'Multithreading',
    question: 'How do you handle exceptions in CompletableFuture?',
    answer: 'Using exceptionally(), handle(), or whenComplete(). exceptionally() provides a recovery value. handle() gives you both the result and the exception, allowing more control.',
    asked_metadata: '5x Amazon, 3x Intel',
    coreConceptDescription: 'CompletableFuture provides three exception handling strategies: exceptionally() for recovery, handle() for both result and error, and whenComplete() for side-effects without changing the result.',
    code: `CompletableFuture.supplyAsync(this::doTask)
    .handle((res, ex) -> {
        if (ex != null) return "Error: " + ex.getMessage();
        return res;
    });`,
    subConcepts: [
      { title: 'exceptionally()', description: 'Returns a <b>recovery value</b> when the future completes with an exception. Similar to catch block.' },
      { title: 'handle()', description: 'Receives <b>both result and exception</b>. Exactly one is non-null. Most flexible error handling approach.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Resilient Pipelines', description: 'Chain fallback logic: fetchFromDB().exceptionally(ex -> fetchFromCache()), providing graceful degradation.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Error Logging', description: 'whenComplete() for logging errors as side effects without affecting the result chain.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 186,
    category: 'Multithreading',
    question: 'What is ThreadLocal and when should it be used?',
    answer: 'It provides variables that are local to a specific thread. Each thread has its own independently initialized copy of the variable. Common use cases: Database connections, user sessions, or transaction contexts.',
    asked_metadata: '4x IBM, 3x LinkedIn',
    coreConceptDescription: 'ThreadLocal provides thread-confined variables. Each thread has its own copy, eliminating synchronization needs. Critical: always call remove() in thread pools to prevent memory leaks and stale data.',
    code: `private static final ThreadLocal<User> userContext = new ThreadLocal<>();

userContext.set(user);
User current = userContext.get();`,
    subConcepts: [
      { title: 'Thread Confinement', description: 'Variable is <b>confined to a single thread</b>. No synchronization needed. Each thread sees its own value.' },
      { title: 'Memory Leak Prevention', description: 'In thread pools, call <b>ThreadLocal.remove()</b> after use. Stale values persist across reused threads.' }
    ],
    useCases: [
      { icon: 'fa-user', title: 'Security Context', description: 'Spring Security uses ThreadLocal to store the authenticated user for the current request thread.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-calendar', title: 'SimpleDateFormat', description: 'SimpleDateFormat is not thread-safe. ThreadLocal gives each thread its own formatter instance.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 187,
    category: 'Multithreading',
    question: 'Why are Atomic variables (like AtomicInteger) preferred over synchronization?',
    answer: "They use non-blocking algorithms (CAS - Compare And Swap) which are more efficient than heavy-weight locks. They provide better performance under high contention because they don't put threads to sleep.",
    asked_metadata: '6x Intel, 5x AMD, 4x Nvidia',
    coreConceptDescription: 'Atomic classes use CAS (Compare-And-Swap) CPU instructions for lock-free, thread-safe operations. They avoid the overhead of synchronized blocks and prevent thread blocking under contention.',
    code: `AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet(); // Thread-safe without synchronized`,
    subConcepts: [
      { title: 'CAS (Compare-And-Swap)', description: 'CPU-level instruction: <b>if current == expected, set to new value</b>. Retries on failure. No thread blocking.' },
      { title: 'Atomic Classes', description: '<b>AtomicInteger</b>, <b>AtomicLong</b>, <b>AtomicReference</b>, <b>AtomicBoolean</b> — all use CAS internally.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'High-Performance Counters', description: 'AtomicLong for request counters, metrics, and statistics in high-throughput systems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Lock-Free Algorithms', description: 'ConcurrentLinkedQueue, ConcurrentSkipListMap use CAS for lock-free thread-safe operations.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  }
];
