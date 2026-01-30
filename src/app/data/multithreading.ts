import { Question } from './question.model';

export const MULTITHREADING_QUESTIONS: Question[] = [
  {
    id: 59,
    category: 'Multithreading',
    question: 'How to create a Thread in Java?',
    answer: '1. By extending the Thread class. 2. By implementing the Runnable interface (preferred as it allows extending other classes).',
    asked_metadata: '7x Google, 6x Oracle, 5x Amazon',
    code: `// 1. Extending Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}

// 2. Implementing Runnable
Runnable myRunnable = () -> System.out.println("Running");
new Thread(myRunnable).start();`
  },
  {
    id: 137,
    category: 'Multithreading',
    question: 'What is the difference between Runnable and Callable?',
    answer: 'Runnable does not return a result and cannot throw a checked exception. Callable returns a result (Future) and can throw a checked exception.',
    asked_metadata: '7x Google, 6x Amazon, 5x Microsoft'
  },
  {
    id: 138,
    category: 'Multithreading',
    question: 'What is the difference between wait() and sleep()?',
    answer: 'wait() releases the lock and must be called from a synchronized context. sleep() holds the lock and pauses execution for a specified time.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Intel'
  },
  {
    id: 139,
    category: 'Multithreading',
    question: 'What is a Deadlock?',
    answer: 'A situation where two or more threads are blocked forever, each waiting for the other to release a resource/lock.',
    asked_metadata: '7x Google, 6x Facebook, 5x Amazon'
  },
  {
    id: 140,
    category: 'Multithreading',
    question: 'What is the ExecutorService?',
    answer: 'A framework provided by the java.util.concurrent package to simplify asynchronous task execution. It manages a pool of threads and assigns tasks to them.',
    asked_metadata: '8x JPMorgan, 7x Amazon, 6x Goldman Sachs',
    code: `ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> {
    System.out.println("Task executed");
});
executor.shutdown();`
  },
  {
    id: 141,
    category: 'Multithreading',
    question: 'What is ThreadLocal?',
    answer: 'A class that provides thread-local variables. Each thread accessing the variable has its own, independently initialized copy.',
    asked_metadata: '6x Uber, 5x Airbnb, 4x LinkedIn'
  },
  {
    id: 142,
    category: 'Multithreading',
    question: 'What is a CountDownLatch?',
    answer: 'A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.',
    asked_metadata: '6x LinkedIn, 5x Twitter, 4x Amazon'
  },
  {
    id: 143,
    category: 'Multithreading',
    question: 'What is a CyclicBarrier?',
    answer: 'A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.',
    asked_metadata: '5x Apple, 4x Intel, 3x AMD'
  },
  {
    id: 144,
    category: 'Multithreading',
    question: 'What is the difference between submit() and execute()?',
    answer: 'execute() is for Runnable tasks and returns void. submit() is for Runnable or Callable tasks and returns a Future holding the result.',
    asked_metadata: '6x Wells Fargo, 5x Citi, 4x JPMorgan'
  },
  {
    id: 145,
    category: 'Multithreading',
    question: 'What is a Race Condition?',
    answer: 'It occurs when two or more threads access shared data and try to change it at the same time, leading to unpredictable results.',
    asked_metadata: '7x IBM, 6x Cisco, 5x Oracle'
  },
  {
    id: 146,
    category: 'Multithreading',
    question: 'What is the Fork/Join Framework?',
    answer: 'An implementation of the ExecutorService interface that helps you take advantage of multiple processors. It is designed for work that can be broken into smaller pieces recursively.',
    asked_metadata: '7x Oracle, 6x IBM, 5x Intel',
  },
  {
    id: 149,
    category: 'Multithreading',
    question: 'How do you achieve thread safety in a large-scale Java application?',
    answer: 'Use immutability, concurrent collections (ConcurrentHashMap), fine-grained locks, and higher-level abstractions like CompletableFuture.',
    asked_metadata: '6x Uber, 5x Netflix, 4x Amazon'
  },
  {
    id: 150,
    category: 'Multithreading',
    question: 'How do you troubleshoot deadlocks and performance bottlenecks?',
    answer: 'Collect thread dumps, analyze lock graphs, use profilers (JProfiler, VisualVM), and apply lock ordering or lock-free algorithms.',
    asked_metadata: '7x Amazon, 6x Intel, 5x Oracle'
  },
  {
    id: 163,
    category: 'Multithreading',
    question: 'What is multithreading and what are its advantages?',
    answer: 'Multithreading is the concurrent execution of two or more parts of a program. Advantages: Max CPU utilization, responsive UIs, and parallel task processing.',
    asked_metadata: '8x Intel, 7x NVIDIA, 6x AMD'
  },
  {
    id: 175,
    category: 'Multithreading',
    question: 'How do you handle exceptions in CompletableFuture?',
    answer: 'Using exceptionally(), handle(), or whenComplete(). exceptionally() provides a recovery value. handle() gives you both the result and the exception, allowing more control.',
    asked_metadata: '5x Amazon, 3x Intel',
    code: `CompletableFuture.supplyAsync(this::doTask)
    .handle((res, ex) -> {
        if (ex != null) return "Error: " + ex.getMessage();
        return res;
    });`
  },
  {
    id: 186,
    category: 'Multithreading',
    question: 'What is ThreadLocal and when should it be used?',
    answer: 'It provides variables that are local to a specific thread. Each thread has its own independently initialized copy of the variable. Common use cases: Database connections, user sessions, or transaction contexts.',
    asked_metadata: '4x IBM, 3x LinkedIn',
    code: `private static final ThreadLocal<User> userContext = new ThreadLocal<>();

userContext.set(user);
User current = userContext.get();`
  },
  {
    id: 187,
    category: 'Multithreading',
    question: 'Why are Atomic variables (like AtomicInteger) preferred over synchronization?',
    answer: 'They use non-blocking algorithms (CAS - Compare And Swap) which are more efficient than heavy-weight locks. They provide better performance under high contention because they don’t put threads to sleep.',
    asked_metadata: '6x Intel, 5x AMD, 4x Nvidia',
    code: `AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet(); // Thread-safe without synchronized`
  }
];
