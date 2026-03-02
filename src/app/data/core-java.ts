import { Question } from './question.model';

export const CORE_JAVA_QUESTIONS: Question[] = [
  {
    id: 1001,
    category: 'Core Java',
    question: 'What is Polymorphism in Java?',
    answer: 'One of the core pillars of OOP, polymorphism allows us to perform a single action in different ways. It provides the ability of an object to take on many forms.',
    asked_metadata: 'Object-Oriented Programming',
    code: `class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    // Runtime Polymorphism (Overriding)
    @Override
    void makeSound() {
        System.out.println("The dog barks: Woof Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        // Parent reference, Child object
        Animal myAnimal = new Dog(); 
        
        // Which method is called is determined at RUNTIME
        myAnimal.makeSound(); 
    }
}`,
    subConcepts: [
      {
        title: 'Compile-time (Static)',
        description: 'Achieved via <b>Method Overloading</b>. Same method name but different signatures within the same class.'
      },
      {
        title: 'Runtime (Dynamic)',
        description: 'Achieved via <b>Method Overriding</b>. A child class provides a specific implementation of a method defined in its parent.'
      }
    ],
    coreConceptDescription: 'In Java, polymorphism occurs when there is a hierarchy of classes which are related by inheritance. It allows us to use a parent class reference to point to a child class object.',
    useCases: [
      {
        icon: 'fa-check',
        title: 'Extensibility',
        description: 'You can add new subclasses (like Cat or Bird) without changing the existing logic that handles Animal types.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-100'
      },
      {
        icon: 'fa-layer-group',
        title: 'Clean Code (Interface Driven)',
        description: 'Allows writing code that works on interfaces rather than specific concrete classes, making systems much easier to maintain.',
        color: 'text-blue-600',
        bg: 'bg-blue-100'
      },
      {
        icon: 'fa-puzzle-piece',
        title: 'Framework Design',
        description: 'Almost all modern Java frameworks (like Spring) rely on polymorphism to inject dependencies and swap implementations at runtime.',
        color: 'text-amber-600',
        bg: 'bg-amber-100'
      }
    ]
  },
  {
    id: 1,
    category: 'Core Java',
    question: 'What is the difference between equals() and == in Java?',
    answer: '== checks for reference equality (address comparison), while equals() checks for content equality (value comparison).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Google',
    coreConceptDescription: 'In Java, == is an operator that compares memory addresses (reference equality). The equals() method, defined in the Object class, is designed to be overridden to compare the logical content of two objects (value equality).',
    code: `String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);       // false (different references)
System.out.println(s1.equals(s2));  // true (same content)

// With String Pool
String s3 = "Hello";
String s4 = "Hello";
System.out.println(s3 == s4);       // true (same pool reference)`,
    subConcepts: [
      { title: 'Reference Equality (==)', description: 'Compares the <b>memory addresses</b> of two objects. Returns true only if both variables point to the exact same object in heap memory.' },
      { title: 'Value Equality (equals)', description: 'Compares the <b>logical content</b> of two objects. Must be overridden in custom classes to define meaningful equality.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'HashMap Key Lookup', description: 'HashMap uses equals() and hashCode() together to locate entries. Incorrect equals() leads to duplicate keys.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Data Integrity Checks', description: 'Comparing user input or database records for logical equality rather than object identity.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-code-compare', title: 'Unit Testing Assertions', description: 'assertEquals() in JUnit relies on the equals() method to verify expected vs actual values.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 2,
    category: 'Core Java',
    question: 'What is the contract between hashCode() and equals()?',
    answer: 'If two objects are equal according to equals(), they must have the same hashCode(). However, if they have the same hashCode(), they are not necessarily equal.',
    asked_metadata: '5x Google, 4x Microsoft, 3x Netflix',
    coreConceptDescription: 'The hashCode-equals contract is a fundamental rule in Java: equal objects must produce the same hash code. Violating this contract causes hash-based collections (HashMap, HashSet) to behave incorrectly.',
    code: `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return id == user.id;
}

@Override
public int hashCode() {
    return Objects.hash(id);
}`,
    subConcepts: [
      { title: 'The Contract Rule', description: 'If <b>a.equals(b)</b> is true, then <b>a.hashCode() == b.hashCode()</b> must also be true. The reverse is not required.' },
      { title: 'Hash Collisions', description: 'Two unequal objects <b>may</b> share the same hashCode (collision). This is valid but reduces HashMap performance from O(1) to O(n).' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'HashMap/HashSet Correctness', description: 'Without a proper contract, objects may be "lost" in hash-based collections even though an equal object exists.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bug', title: 'Avoiding Silent Bugs', description: 'Overriding equals() without hashCode() is a common source of production bugs that are extremely hard to debug.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-gem', title: 'Immutable Value Objects', description: 'Records and value objects (like Money, Coordinate) rely on correct hashCode/equals for deduplication and caching.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 3,
    category: 'Core Java',
    question: 'Explain the difference between final, finally, and finalize.',
    answer: 'final is a keyword for constants/immutability. finally is a block in try-catch for cleanup. finalize is a method called by GC before object reclamation (deprecated).',
    asked_metadata: '8x Amazon, 6x Microsoft, 4x IBM',
    coreConceptDescription: 'Despite similar names, these three serve completely different purposes: final enforces immutability, finally ensures cleanup code runs, and finalize (now deprecated) was used for pre-GC resource release.',
    code: `// final variable — cannot be reassigned
final int MAX = 100;

// final method — cannot be overridden
public final void lock() { }

// finally block — always executes
try {
    return;
} finally {
    System.out.println("Always executed");
}

// finalize — deprecated since Java 9
@Override
protected void finalize() throws Throwable {
    // Cleanup before GC (DO NOT USE)
}`,
    subConcepts: [
      { title: 'final (Keyword)', description: 'Makes variables <b>constant</b>, methods <b>non-overridable</b>, and classes <b>non-extendable</b>. Essential for immutability patterns.' },
      { title: 'finally (Block)', description: 'Executes <b>always</b> after try/catch, whether or not an exception occurs. Used for resource cleanup (closing streams, connections).' },
      { title: 'finalize (Deprecated)', description: 'A method called by the <b>Garbage Collector</b> before reclaiming an object. Deprecated in Java 9 — use <b>try-with-resources</b> or Cleaners instead.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Immutable Design', description: 'Use final fields to create thread-safe immutable objects (e.g., String, record classes).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-broom', title: 'Resource Cleanup', description: 'finally blocks ensure database connections, file handles, and streams are always closed.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-triangle-exclamation', title: 'Migration from finalize()', description: 'Modern Java replaces finalize() with try-with-resources (AutoCloseable) and java.lang.ref.Cleaner.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 12,
    category: 'Core Java',
    question: 'What is a Marker Interface?',
    answer: 'An interface with no methods or fields, used to indicate a property to the JVM or compiler (e.g., Serializable, Cloneable).',
    asked_metadata: '4x Adobe, 3x Salesforce, 2x Intel',
    coreConceptDescription: 'A Marker Interface is an empty interface (no methods or constants) that acts as a metadata tag for the JVM or frameworks. It signals that a class possesses a certain capability or should be treated in a special way.',
    code: `// Serializable — a marker interface
public class User implements Serializable {
    private String name;
    private int age;
}

// Custom marker interface
public interface Auditable {}

public class Order implements Auditable {
    // Framework can check: if (obj instanceof Auditable)
}`,
    subConcepts: [
      { title: 'Built-in Markers', description: '<b>Serializable</b> — enables object serialization. <b>Cloneable</b> — enables Object.clone(). <b>Remote</b> — marks RMI remote objects.' },
      { title: 'Modern Alternative: Annotations', description: 'Since Java 5, <b>annotations</b> (@Entity, @Deprecated) have largely replaced marker interfaces as they can carry metadata values.' }
    ],
    useCases: [
      { icon: 'fa-floppy-disk', title: 'Object Serialization', description: 'Serializable tells the JVM that an object can be converted to a byte stream for storage or network transfer.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-tag', title: 'Type-Based Checks', description: 'Frameworks use instanceof checks on marker interfaces for conditional processing at runtime.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-wand-magic-sparkles', title: 'Framework Integration', description: 'Spring and JPA use annotation-based markers (@Entity, @Component) following the same design principle.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 13,
    category: 'Core Java',
    question: 'Explain the difference between HashMap and ConcurrentHashMap.',
    answer: 'HashMap is not thread-safe. ConcurrentHashMap is thread-safe and allows concurrent access to different segments of the map.',
    asked_metadata: '7x Google, 5x Intel, 4x Microsoft',
    coreConceptDescription: 'HashMap provides O(1) lookups but is unsafe in multi-threaded environments. ConcurrentHashMap uses internal segmented locking (Java 7) or CAS operations with synchronized bins (Java 8+) to allow thread-safe concurrent access.',
    code: `// HashMap — NOT thread-safe
Map<String, Integer> map = new HashMap<>();
map.put("key", 1); // Race condition in multi-thread

// ConcurrentHashMap — thread-safe
Map<String, Integer> cMap = new ConcurrentHashMap<>();
cMap.put("key", 1); // Safe for concurrent access

// ConcurrentHashMap does NOT allow null keys or values
cMap.put(null, 1);    // throws NullPointerException
cMap.put("key", null); // throws NullPointerException`,
    subConcepts: [
      { title: 'HashMap (Non-Thread-Safe)', description: 'Uses <b>array + linked list/tree</b>. Allows one null key and multiple null values. Can cause infinite loops in multi-threaded resizing.' },
      { title: 'ConcurrentHashMap (Thread-Safe)', description: 'Uses <b>CAS + synchronized bins</b> (Java 8+). Does NOT allow null keys or values. Supports atomic operations like putIfAbsent().' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'In-Memory Caching', description: 'ConcurrentHashMap is ideal for thread-safe caches where multiple threads read/write simultaneously.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'Concurrent Web Servers', description: 'Servlet containers use ConcurrentHashMap for session storage shared across request-handling threads.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-gauge-high', title: 'High-Performance Counters', description: 'Use ConcurrentHashMap.merge() or compute() for atomic counter updates without external synchronization.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 18,
    category: 'Core Java',
    question: 'What is the volatile keyword?',
    answer: 'It guarantees visibility of changes to variables across threads (happens-before relationship) but does not guarantee atomicity.',
    asked_metadata: '5x Intel, 4x AMD, 3x Microsoft',
    coreConceptDescription: 'The volatile keyword tells the JVM that a variable may be modified by multiple threads. It ensures that reads always fetch the latest value from main memory (not CPU cache) and establishes a happens-before relationship.',
    code: `public class SharedFlag {
    private volatile boolean running = true;

    public void stop() {
        running = false; // Visible to all threads immediately
    }

    public void run() {
        while (running) {
            // Without volatile, this loop may never see the update
        }
    }
}`,
    subConcepts: [
      { title: 'Visibility Guarantee', description: 'A write to a volatile variable is <b>immediately visible</b> to all threads. Without it, threads may read stale cached values.' },
      { title: 'No Atomicity', description: 'volatile does NOT make compound operations (like <b>i++</b>) atomic. For atomicity, use <b>AtomicInteger</b> or <b>synchronized</b>.' }
    ],
    useCases: [
      { icon: 'fa-flag', title: 'Thread Stop Flags', description: 'A volatile boolean is the standard pattern for signaling a thread to stop gracefully.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Double-Checked Locking', description: 'The Singleton pattern with DCL requires a volatile instance field to prevent instruction reordering.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-circle-info', title: 'Status Publishing', description: 'Publishing configuration or status updates from one thread to many reader threads without synchronization.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 51,
    category: 'Core Java',
    question: 'Why is Java platform independent?',
    answer: 'Java code is compiled into platform-independent byte code, which runs on any machine with a JRE, unlike C++ which compiles to machine-specific code.',
    asked_metadata: '6x Google, 5x Microsoft, 4x Amazon',
    coreConceptDescription: 'Java achieves platform independence through its "Write Once, Run Anywhere" (WORA) philosophy. Source code is compiled into bytecode (.class files) by javac, and the JVM on each platform interprets or JIT-compiles this bytecode into native instructions.',
    code: `// 1. Write Java source code
// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

// 2. Compile to bytecode (platform-independent)
// javac HelloWorld.java → HelloWorld.class

// 3. Run on ANY platform with a JVM
// java HelloWorld`,
    subConcepts: [
      { title: 'Bytecode (.class)', description: 'Java source is compiled to <b>intermediate bytecode</b>, not native machine code. This bytecode is the same regardless of the target OS.' },
      { title: 'JVM Abstraction', description: 'Each OS has its own <b>JVM implementation</b> that translates bytecode to native instructions at runtime via the JIT compiler.' }
    ],
    useCases: [
      { icon: 'fa-globe', title: 'Cross-Platform Apps', description: 'Enterprise applications run on Windows, Linux, and macOS without recompilation.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Cloud Deployments', description: 'Same JAR can be deployed on any cloud provider regardless of underlying OS.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-mobile', title: 'Android Development', description: 'Java/Kotlin bytecode runs on Android via ART (Android Runtime), demonstrating platform portability.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 52,
    category: 'Core Java',
    question: 'Why is Java not pure Object-Oriented?',
    answer: 'Because it supports primitive data types (int, float, boolean, etc.) which are not objects, for performance reasons.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Intel',
    coreConceptDescription: 'A pure OOP language treats everything as an object. Java breaks this by having 8 primitive types (byte, short, int, long, float, double, char, boolean) that are stored directly on the stack for performance rather than as heap objects.',
    code: `// Primitives — NOT objects
int x = 42;           // stored on stack
boolean flag = true;

// Wrapper classes — ARE objects
Integer y = 42;        // stored on heap
Boolean obj = true;

// Autoboxing bridges the gap
Integer z = x;  // Auto-boxing: primitive → object
int w = z;      // Unboxing: object → primitive`,
    subConcepts: [
      { title: 'Primitives (Not OOP)', description: 'Java has <b>8 primitives</b> (int, boolean, etc.) stored on the stack. They have no methods and cannot be null.' },
      { title: 'Wrapper Classes (OOP)', description: 'Each primitive has a wrapper (<b>Integer, Boolean</b>, etc.). Autoboxing/unboxing bridges primitives and objects transparently.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance Optimization', description: 'Primitives avoid heap allocation and GC overhead, critical for high-performance computing loops.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-box', title: 'Collections Require Wrappers', description: 'Generics only work with objects, so List<Integer> is needed instead of List<int>.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 53,
    category: 'Core Java',
    question: 'Difference between Heap and Stack Memory?',
    answer: 'Stack stores method execution frames and local variables (LIFO). Heap stores objects and is used for dynamic memory allocation.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Apple',
    coreConceptDescription: 'Stack memory is thread-specific, fast, and stores method call frames with local variables. Heap memory is shared across threads, larger, and stores all objects. Understanding this distinction is key to avoiding StackOverflowError and OutOfMemoryError.',
    code: `public void example() {
    int x = 10;          // x stored on STACK
    String name = "Java"; // reference on STACK, object on HEAP

    User user = new User(); // reference on STACK, object on HEAP
}
// When method ends: stack frame is popped
// Heap objects remain until GC collects them`,
    subConcepts: [
      { title: 'Stack Memory', description: '<b>Thread-specific</b>, LIFO order. Stores method frames and local variables. Fixed size — causes <b>StackOverflowError</b> on overflow.' },
      { title: 'Heap Memory', description: '<b>Shared across threads</b>. Stores all objects and class instances. Managed by <b>Garbage Collector</b>. Causes <b>OutOfMemoryError</b> on overflow.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Debugging Memory Issues', description: 'StackOverflowError indicates infinite recursion. OutOfMemoryError indicates too many live objects on heap.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-sliders', title: 'JVM Tuning', description: 'Use -Xss for stack size and -Xmx/-Xms for heap size tuning in production deployments.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-memory', title: 'Memory-Efficient Design', description: 'Keep objects short-lived for quick GC and prefer primitives on stack for hot loops.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 54,
    category: 'Core Java',
    question: 'Difference between equals() and ==?',
    answer: "== compares memory references (address equality), while .equals() compares the actual content/value of objects (logical equality).",
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google',
    coreConceptDescription: 'The == operator compares references (memory addresses) while equals() compares values. For primitives, == compares values directly. For objects, always use equals() for content comparison.',
    code: `String s1 = new String("Java");
String s2 = new String("Java");
System.out.println(s1 == s2);       // false — different references
System.out.println(s1.equals(s2));  // true — same content`,
    subConcepts: [
      { title: '== (Reference)', description: 'Returns true only if both variables point to the <b>exact same object</b> in memory.' },
      { title: '.equals() (Content)', description: 'Returns true if the <b>logical content</b> of two objects is the same. Must be overridden for custom classes.' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'String Comparison', description: 'Always use .equals() for String comparison. Using == may give unexpected results due to String Pool.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Collection Lookups', description: 'HashMap.get() and List.contains() rely on equals() to find matching elements.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 55,
    category: 'Core Java',
    question: 'How to declare an infinite loop?',
    answer: 'Common ways: for(;;) { ... }, while(true) { ... }, or do { ... } while(true);',
    asked_metadata: '4x Adobe, 3x Autodesk, 2x Nvidia',
    coreConceptDescription: 'An infinite loop runs indefinitely until explicitly broken with break, return, or System.exit(). They are commonly used in server event loops, game loops, and daemon threads.',
    code: `// Method 1: for loop
for (;;) {
    // runs forever
}

// Method 2: while loop (most common)
while (true) {
    // runs forever
}

// Method 3: do-while
do {
    // runs at least once
} while (true);`,
    subConcepts: [
      { title: 'Intentional Infinite Loops', description: 'Used in <b>server event loops</b>, game loops, and daemon threads that should run continuously until shutdown.' },
      { title: 'Accidental Infinite Loops', description: 'Caused by incorrect loop conditions or missing break statements. A common <b>bug</b> that freezes applications.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Server Main Loops', description: 'Web servers use while(true) to continuously accept incoming connections.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gamepad', title: 'Game Loops', description: 'Games run an infinite render-update loop at a target frame rate until the user exits.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 56,
    category: 'Core Java',
    question: 'What is Constructor Overloading?',
    answer: 'Having multiple constructors in a class with different parameter lists (different number or types of arguments).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco',
    coreConceptDescription: 'Constructor overloading allows a class to have multiple constructors with different parameter lists. This provides flexibility when creating objects with varying levels of initialization data.',
    code: `public class User {
    private String name;
    private int age;

    // Default constructor
    public User() {
        this("Unknown", 0);
    }

    // Parameterized constructor
    public User(String name) {
        this(name, 0);
    }

    // Full constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`,
    subConcepts: [
      { title: 'Constructor Chaining', description: 'Use <b>this()</b> to call another constructor in the same class, reducing code duplication.' },
      { title: 'Telescoping Pattern', description: 'Multiple constructors with increasing parameters. Modern alternative: <b>Builder pattern</b> for many optional fields.' }
    ],
    useCases: [
      { icon: 'fa-wrench', title: 'Flexible Object Creation', description: 'Allows creating objects with different levels of initialization (default vs fully-specified).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cubes', title: 'Builder Pattern Foundation', description: 'Constructor overloading is the precursor to the Builder pattern used in libraries like Lombok.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 57,
    category: 'Core Java',
    question: 'Why are Strings immutable?',
    answer: 'For String Pool optimization (saving memory), Thread Safety (no sync needed), and Security (e.g., HashMap keys, class loading).',
    asked_metadata: '9x Amazon, 8x Google, 7x Microsoft',
    coreConceptDescription: 'String immutability means once a String object is created, its value cannot be changed. Any modification creates a new String object. This design enables String Pool caching, thread safety, and security guarantees.',
    code: `String s1 = "Java";
String s2 = s1;  // Both point to same pool object

s1 = s1.concat(" 21"); // Creates NEW String object
System.out.println(s1); // "Java 21"
System.out.println(s2); // "Java" — unchanged!

// String Pool saves memory
String a = "Hello";
String b = "Hello";
System.out.println(a == b); // true — same pool reference`,
    subConcepts: [
      { title: 'String Pool (Memory)', description: 'JVM caches String literals in a <b>pool</b>. Multiple references to "Hello" share the same object, saving heap memory.' },
      { title: 'Thread Safety', description: 'Since Strings <b>cannot be modified</b>, they can be shared freely across threads without synchronization.' },
      { title: 'Security', description: 'Strings used for <b>class loading, network connections, and database URLs</b> cannot be tampered with after creation.' }
    ],
    useCases: [
      { icon: 'fa-memory', title: 'Memory Efficiency', description: 'String Pool deduplicates identical strings, saving significant heap space in large applications.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'HashMap Key Safety', description: 'Since Strings are immutable, their hashCode is cached and never changes — perfect for HashMap keys.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-lock', title: 'Secure Class Loading', description: 'Class names (Strings) cannot be altered after creation, preventing malicious class substitution.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 58,
    category: 'Core Java',
    question: 'What is a Singleton Class?',
    answer: 'A class that allows only one instance to be created. Implemented using a private constructor and a static factory method.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google',
    coreConceptDescription: 'The Singleton pattern restricts a class to exactly one instance and provides a global access point. It is commonly used for configuration managers, connection pools, and logging services.',
    code: `public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() {
        return INSTANCE;
    }
}

// Thread-safe lazy initialization
public class LazySingleton {
    private static volatile LazySingleton instance;
    private LazySingleton() {}
    public static LazySingleton getInstance() {
        if (instance == null) {
            synchronized (LazySingleton.class) {
                if (instance == null) {
                    instance = new LazySingleton();
                }
            }
        }
        return instance;
    }
}`,
    subConcepts: [
      { title: 'Eager Initialization', description: 'Instance created at <b>class loading time</b>. Simple and thread-safe but wastes memory if never used.' },
      { title: 'Lazy (Double-Checked Locking)', description: 'Instance created on <b>first access</b>. Requires volatile + synchronized for thread safety. More memory efficient.' }
    ],
    useCases: [
      { icon: 'fa-gear', title: 'Configuration Manager', description: 'A single configuration object shared across the entire application (e.g., application.properties reader).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Connection Pools', description: 'Database connection pools are singletons to manage a fixed set of shared connections.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-file-lines', title: 'Logging Framework', description: 'Logger instances (like SLF4J LoggerFactory) follow the singleton pattern for consistent logging.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 60,
    category: 'Core Java',
    question: 'Difference between throw and throws?',
    answer: "'throw' explicitly throws an exception in code. 'throws' declares in a method signature that it may throw specific exceptions.",
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS',
    coreConceptDescription: '"throw" is used inside a method body to explicitly throw an exception object. "throws" is used in the method signature to declare the checked exceptions that a method might throw, forcing the caller to handle them.',
    code: `// throw — explicitly throws an exception
public void validate(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
}

// throws — declares in method signature
public void readFile(String path) throws IOException {
    FileReader reader = new FileReader(path);
}`,
    subConcepts: [
      { title: 'throw (Statement)', description: 'Used inside a method to <b>create and throw</b> an exception object. Execution stops and transfers to the nearest catch block.' },
      { title: 'throws (Declaration)', description: 'Used in the <b>method signature</b> to declare checked exceptions. Tells the caller they must handle or propagate the exception.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Input Validation', description: 'Use throw to reject invalid arguments early (fail-fast principle).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-file-code', title: 'API Contract', description: 'throws in method signatures define the error contract of your API for callers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 127,
    category: 'Core Java',
    question: 'What is the difference between StringBuffer and StringBuilder?',
    answer: 'StringBuffer is synchronized and thread-safe, making it slower. StringBuilder is not synchronized and not thread-safe, making it faster.',
    asked_metadata: '5x Amazon, 3x Google',
    coreConceptDescription: 'Both StringBuffer and StringBuilder are mutable alternatives to String. StringBuffer is thread-safe (synchronized methods) but slower. StringBuilder is not thread-safe but faster — preferred for single-threaded string manipulation.',
    code: `// StringBuilder — faster, NOT thread-safe
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" World");

// StringBuffer — slower, thread-safe
StringBuffer sbf = new StringBuffer();
sbf.append("Hello").append(" World");

// Performance: StringBuilder > StringBuffer > String concatenation`,
    subConcepts: [
      { title: 'StringBuffer (Thread-Safe)', description: 'All methods are <b>synchronized</b>. Safe for multi-threaded access but incurs locking overhead.' },
      { title: 'StringBuilder (Not Thread-Safe)', description: '<b>No synchronization</b>. Faster for single-threaded scenarios. Preferred in most cases since Java 5.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'String Building in Loops', description: 'Use StringBuilder inside loops instead of String concatenation to avoid creating many intermediate objects.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Thread-Safe Logging', description: 'StringBuffer is used when multiple threads append to the same buffer simultaneously.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 128,
    category: 'Core Java',
    question: 'What is the purpose of the transient keyword?',
    answer: 'It prevents a variable from being serialized. When an object is serialized, transient variables are ignored.',
    asked_metadata: '6x IBM, 5x Oracle, 4x TCS',
    coreConceptDescription: 'The transient keyword marks a field to be excluded from Java serialization. When an object is serialized to a byte stream, transient fields are skipped and will receive their default value upon deserialization.',
    code: `public class User implements Serializable {
    private String name;
    private transient String password; // NOT serialized

    // After deserialization:
    // name = "John" (preserved)
    // password = null (lost)
}`,
    subConcepts: [
      { title: 'Serialization Exclusion', description: 'Fields marked <b>transient</b> are skipped during serialization. They receive default values (null, 0, false) on deserialization.' },
      { title: 'Static vs Transient', description: '<b>static</b> fields are also not serialized (they belong to the class, not the object). transient is for instance fields you want to exclude.' }
    ],
    useCases: [
      { icon: 'fa-key', title: 'Security (Sensitive Data)', description: 'Mark passwords, tokens, and encryption keys as transient to prevent them from being persisted.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-arrows-rotate', title: 'Derived/Computed Fields', description: 'Fields that can be recalculated (like cache or computed totals) should be transient to save space.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 129,
    category: 'Core Java',
    question: 'What is the difference between Comparator and Comparable?',
    answer: 'Comparable defines the natural ordering of a class (compareTo method). Comparator defines an external ordering (compare method) and can be used to sort objects in different ways.',
    asked_metadata: '9x Amazon, 8x Microsoft, 7x Google',
    coreConceptDescription: 'Comparable is implemented by the class itself to define its natural ordering (e.g., String alphabetical). Comparator is a separate class/lambda that defines custom orderings, allowing multiple sort strategies for the same type.',
    code: `// Comparable — natural ordering
public class User implements Comparable<User> {
    private String name;
    public int compareTo(User other) {
        return this.name.compareTo(other.name);
    }
}

// Comparator — custom ordering
Comparator<User> byAge = (u1, u2) -> u1.getAge() - u2.getAge();
Collections.sort(users, byAge);
Collections.sort(users, Comparator.comparing(User::getName));`,
    subConcepts: [
      { title: 'Comparable (Natural Order)', description: 'Implemented <b>inside</b> the class via compareTo(). Defines the <b>single default</b> sort order. Used by Collections.sort().' },
      { title: 'Comparator (Custom Order)', description: 'Defined <b>externally</b> via compare(). Allows <b>multiple</b> sort strategies. Supports lambdas and method references.' }
    ],
    useCases: [
      { icon: 'fa-sort', title: 'Sorting Collections', description: 'TreeSet and TreeMap use Comparable/Comparator to maintain sorted order automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-filter', title: 'Stream Sorting', description: 'stream().sorted(Comparator.comparing(...)) enables fluent, declarative sorting.', color: 'text-emerald-600', bg: 'bg-emerald-100' },
      { icon: 'fa-list-ol', title: 'Priority Queues', description: 'PriorityQueue uses Comparator to determine element priority in task scheduling.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 130,
    category: 'Core Java',
    question: 'What is the difference between checked and unchecked exceptions?',
    answer: 'Checked exceptions are checked at compile-time (e.g., IOException) and must be handled. Unchecked exceptions are runtime exceptions (e.g., NullPointerException) and don\'t require explicit handling.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Oracle',
    coreConceptDescription: 'Checked exceptions (subclasses of Exception but not RuntimeException) must be declared or caught — the compiler enforces this. Unchecked exceptions (subclasses of RuntimeException) indicate programming errors and do not require handling.',
    code: `// Checked — must handle or declare
try {
    FileReader file = new FileReader("data.txt");
} catch (FileNotFoundException e) {
    e.printStackTrace();
}

// Unchecked — no handling required
String s = null;
s.length(); // NullPointerException at runtime`,
    subConcepts: [
      { title: 'Checked Exceptions', description: 'Subclasses of <b>Exception</b> (not RuntimeException). Examples: IOException, SQLException. <b>Compiler enforces</b> handling.' },
      { title: 'Unchecked Exceptions', description: 'Subclasses of <b>RuntimeException</b>. Examples: NullPointerException, ArrayIndexOutOfBoundsException. Indicate <b>programming bugs</b>.' }
    ],
    useCases: [
      { icon: 'fa-file-circle-exclamation', title: 'I/O Operations', description: 'File and network operations throw checked exceptions because failures are expected and recoverable.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bug', title: 'Bug Prevention', description: 'Unchecked exceptions like NPE signal logic errors that should be fixed in code, not caught.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-code', title: 'API Design Choice', description: 'Modern APIs prefer unchecked exceptions for cleaner code. Spring wraps checked exceptions as unchecked.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 131,
    category: 'Core Java',
    question: 'What is the Java Memory Model?',
    answer: 'It describes how threads interact through memory. It defines the rules for visibility of changes to variables and the ordering of instructions.',
    asked_metadata: '3x Intel, 2x AMD',
    coreConceptDescription: 'The Java Memory Model (JMM) defines the rules for when a write by one thread becomes visible to another. It establishes "happens-before" relationships and governs how the JVM may reorder instructions for optimization.',
    code: `// Without proper synchronization, Thread B may never see the update
// Thread A
sharedVar = 42;

// Thread B
while (sharedVar == 0) { /* may loop forever */ }

// Fix: use volatile, synchronized, or Atomic*
private volatile int sharedVar = 0;`,
    subConcepts: [
      { title: 'Happens-Before', description: 'A <b>guarantee</b> that memory writes by one statement are visible to another. Established by volatile, synchronized, and thread start/join.' },
      { title: 'Instruction Reordering', description: 'The JVM and CPU may <b>reorder instructions</b> for performance. The JMM defines which reorderings are legal.' }
    ],
    useCases: [
      { icon: 'fa-microchip', title: 'Concurrent Programming', description: 'Understanding JMM is essential for writing correct lock-free and low-level concurrent code.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Thread-Safe Design', description: 'JMM rules guide when to use volatile, synchronized, or Atomic classes for safe data sharing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 132,
    category: 'Core Java',
    question: 'What is the difference between interface and abstract class?',
    answer: 'Interfaces allow multiple inheritance and all methods are public abstract (default/static allowed in Java 8+). Abstract classes allow single inheritance, can have state (fields), and non-abstract methods.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Oracle',
    coreConceptDescription: 'Abstract classes provide partial implementation with state (fields), while interfaces define pure contracts. Since Java 8, interfaces can have default and static methods, blurring the line but key differences remain.',
    code: `// Abstract class — can have state and constructors
abstract class Animal {
    String name;
    Animal(String name) { this.name = name; }
    abstract void sound();
    void breathe() { System.out.println("Breathing"); }
}

// Interface — pure contract (Java 8+ with defaults)
interface Flyable {
    void fly();
    default void land() { System.out.println("Landing"); }
}`,
    subConcepts: [
      { title: 'Abstract Class', description: 'Supports <b>single inheritance</b>, can have fields, constructors, and concrete methods. Use when classes share common state.' },
      { title: 'Interface', description: 'Supports <b>multiple inheritance</b>, no state (except constants). Use to define capabilities/contracts across unrelated classes.' }
    ],
    useCases: [
      { icon: 'fa-sitemap', title: 'IS-A Hierarchies', description: 'Use abstract classes for related types with shared behavior (Animal → Dog, Cat).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-plug', title: 'CAN-DO Capabilities', description: 'Use interfaces for cross-cutting capabilities (Serializable, Comparable, Runnable).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 133,
    category: 'Core Java',
    question: 'What is the super keyword?',
    answer: 'It refers to the immediate parent class object. It is used to call parent class methods or constructors.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco',
    coreConceptDescription: 'The super keyword provides access to the immediate parent class. It can invoke parent constructors (super()), call overridden parent methods (super.method()), and access parent fields hidden by child fields.',
    code: `class Animal {
    String name = "Animal";
    Animal(String name) { this.name = name; }
    void sound() { System.out.println("Generic sound"); }
}

class Dog extends Animal {
    Dog() { super("Dog"); } // Calls parent constructor
    void sound() {
        super.sound(); // Calls parent method
        System.out.println("Bark!");
    }
}`,
    subConcepts: [
      { title: 'super() — Constructor', description: 'Calls the <b>parent class constructor</b>. Must be the first statement in a child constructor.' },
      { title: 'super.method() — Method', description: 'Calls the <b>parent version</b> of an overridden method from within the child class.' }
    ],
    useCases: [
      { icon: 'fa-link', title: 'Constructor Chaining', description: 'Child constructors call super() to initialize inherited fields from the parent class.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code-branch', title: 'Extending Behavior', description: 'Override a method but still invoke the parent logic via super.method() for partial extension.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 134,
    category: 'Core Java',
    question: 'What is the this keyword?',
    answer: 'It refers to the current object instance. It is used to access current class members and to invoke other constructors of the same class.',
    asked_metadata: '6x Amazon, 5x Adobe, 4x Intel',
    coreConceptDescription: 'The this keyword is a reference to the current object instance. It disambiguates field names from parameters, invokes other constructors via this(), and passes the current object as an argument.',
    code: `public class Car {
    private String model;

    public Car(String model) {
        this.model = model; // Disambiguation
    }

    public Car() {
        this("Unknown"); // Call other constructor
    }
}`,
    subConcepts: [
      { title: 'this.field — Disambiguation', description: 'Distinguishes <b>instance variables</b> from method parameters when they share the same name.' },
      { title: 'this() — Constructor Chaining', description: 'Calls <b>another constructor</b> in the same class. Must be the first statement.' }
    ],
    useCases: [
      { icon: 'fa-wrench', title: 'Builder Pattern', description: 'Fluent APIs return "this" to enable method chaining: builder.setName("X").setAge(25).build().', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Event Listeners', description: 'Pass "this" as a callback reference when registering the current object as a listener.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 135,
    category: 'Core Java',
    question: 'What is Method Overloading vs Method Overriding?',
    answer: 'Overloading occurs within the same class (same name, different parameters). Overriding occurs in a subclass (same name, same parameters) to provide a specific implementation.',
    asked_metadata: '7x Amazon, 6x Uber, 5x Airbnb',
    coreConceptDescription: 'Overloading is compile-time polymorphism — the compiler picks the method based on parameter types. Overriding is runtime polymorphism — the JVM picks the method based on the actual object type at runtime.',
    code: `// Overloading — same class, different params
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// Overriding — subclass, same signature
class Animal { void speak() { System.out.println("..."); } }
class Dog extends Animal {
    @Override
    void speak() { System.out.println("Woof!"); }
}`,
    subConcepts: [
      { title: 'Overloading (Compile-time)', description: 'Same method name, <b>different parameters</b>. Resolved by the <b>compiler</b>. Within the same class.' },
      { title: 'Overriding (Runtime)', description: 'Same method name, <b>same parameters</b>. Resolved by the <b>JVM at runtime</b>. In parent-child classes.' }
    ],
    useCases: [
      { icon: 'fa-calculator', title: 'Convenience Methods', description: 'Overloading provides multiple ways to call a method with different parameter combinations.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code-branch', title: 'Behavioral Specialization', description: 'Overriding lets subclasses customize inherited behavior for their specific use case.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 136,
    category: 'Core Java',
    question: 'What is the purpose of the default method in interfaces?',
    answer: 'Introduced in Java 8, it allows adding new methods to interfaces without breaking existing implementations. It provides a default implementation.',
    asked_metadata: '6x Amazon, 5x Oracle, 4x VMware',
    coreConceptDescription: 'Default methods allow interfaces to evolve without breaking backward compatibility. They provide a concrete implementation that implementing classes inherit automatically but can optionally override.',
    code: `interface Collection<E> {
    // Existing abstract method
    boolean add(E element);

    // Default method (added in Java 8)
    default Stream<E> stream() {
        return StreamSupport.stream(spliterator(), false);
    }
}

// Implementing class gets stream() for free!`,
    subConcepts: [
      { title: 'Backward Compatibility', description: 'New methods can be added to interfaces <b>without breaking</b> existing implementations — the default body is inherited.' },
      { title: 'Diamond Problem Resolution', description: 'If two interfaces provide the same default method, the implementing class <b>must override</b> it to resolve ambiguity.' }
    ],
    useCases: [
      { icon: 'fa-puzzle-piece', title: 'API Evolution', description: 'The Collections API added stream(), forEach(), and removeIf() as default methods in Java 8.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-layer-group', title: 'Mixin Behavior', description: 'Default methods enable interface-based mixins, adding shared behavior across unrelated classes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 147,
    category: 'Core Java',
    question: 'What is the difference between JDK, JRE, and JVM?',
    answer: 'JDK is the development kit including JRE and tools. JRE runs Java apps. JVM executes bytecode and provides platform abstraction.',
    asked_metadata: '8x TCS, 7x Infosys, 6x Accenture',
    coreConceptDescription: 'JDK (Java Development Kit) includes the compiler, debugger, and tools for building Java apps. JRE (Java Runtime Environment) provides libraries and JVM for running apps. JVM (Java Virtual Machine) executes bytecode.',
    subConcepts: [
      { title: 'JDK (Development Kit)', description: 'Contains <b>JRE + development tools</b> (javac compiler, jdb debugger, jar tool). Needed to develop Java applications.' },
      { title: 'JRE (Runtime Environment)', description: 'Contains <b>JVM + class libraries</b>. Needed to run compiled Java applications. No compiler included.' },
      { title: 'JVM (Virtual Machine)', description: 'The <b>engine</b> that executes bytecode. Provides platform abstraction, garbage collection, and memory management.' }
    ],
    useCases: [
      { icon: 'fa-laptop-code', title: 'Developer Setup', description: 'Developers install JDK. End users only need JRE (or JDK, which includes JRE).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Production Deployment', description: 'Docker images often use slim JRE images (jre-slim) for smaller production containers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 148,
    category: 'Core Java',
    question: 'How does garbage collection work in Java, and how do you handle memory leaks?',
    answer: 'GC reclaims unreachable objects. Detect leaks with heap dumps, tools like VisualVM, and fixing unintended object references (e.g., static collections).',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft',
    coreConceptDescription: 'The Garbage Collector automatically reclaims heap memory from objects that are no longer reachable. Memory leaks occur when objects remain referenced unintentionally (e.g., static collections, unclosed resources, listener registrations).',
    code: `// Common memory leak: static collection holding references
static List<Object> cache = new ArrayList<>();
cache.add(largeObject); // Never removed → leak!

// Fix: Use WeakReference or bounded caches
Map<Key, SoftReference<Value>> cache = new ConcurrentHashMap<>();`,
    subConcepts: [
      { title: 'GC Generations', description: 'Objects move through <b>Young → Old → (Permanent/Metaspace)</b>. Short-lived objects are collected quickly in Young Gen (minor GC).' },
      { title: 'Memory Leak Causes', description: 'Static collections, unclosed streams, listener/callback registrations, and <b>ThreadLocal</b> variables that are never cleared.' }
    ],
    useCases: [
      { icon: 'fa-chart-line', title: 'GC Tuning', description: 'Choose the right GC algorithm (G1, ZGC, Shenandoah) based on latency vs throughput requirements.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-magnifying-glass', title: 'Leak Detection', description: 'Use heap dumps with Eclipse MAT or VisualVM to identify objects consuming excessive memory.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 153,
    category: 'Core Java',
    question: 'How do you use Java Streams and Lambdas in production?',
    answer: 'Use streams for readable data transformations (map, filter, reduce). Avoid excessive boxing. Use parallel streams only when benchmarked and safe.',
    asked_metadata: '8x Amazon, 7x Google, 6x Microsoft',
    coreConceptDescription: 'Java Streams (Java 8+) provide a functional, declarative way to process collections. Lambdas enable concise anonymous function syntax. In production, prioritize readability and benchmark parallel streams.',
    code: `List<String> names = users.stream()
    .filter(u -> u.isActive())
    .map(User::getName)
    .sorted()
    .collect(Collectors.toList());

// Parallel stream (use with caution)
long count = items.parallelStream()
    .filter(i -> i.getPrice() > 100)
    .count();`,
    subConcepts: [
      { title: 'Stream Pipeline', description: 'Composed of a <b>source</b>, zero or more <b>intermediate ops</b> (lazy), and a <b>terminal op</b> (triggers execution).' },
      { title: 'Lambda Expressions', description: 'Anonymous functions that implement <b>functional interfaces</b>. Syntax: (params) -> expression or { statements }.' }
    ],
    useCases: [
      { icon: 'fa-filter', title: 'Data Transformation', description: 'Replace verbose loops with readable stream chains for filtering, mapping, and aggregating.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Parallel Processing', description: 'Use parallelStream() for CPU-intensive tasks on large datasets — but benchmark to confirm speedup.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 156,
    category: 'Core Java',
    question: 'How do you troubleshoot a slow-performing Java application?',
    answer: 'Gather metrics, analyze thread/heap dumps, check GC logs for pauses, trace DB queries, and use APM tools (New Relic, Datadog).',
    asked_metadata: '6x Amazon, 5x NewRelic, 4x Datadog',
    coreConceptDescription: 'Performance troubleshooting follows a systematic approach: establish baselines, capture thread dumps for CPU issues, heap dumps for memory issues, analyze GC logs for pause times, and trace slow queries or I/O.',
    subConcepts: [
      { title: 'CPU Issues', description: 'Use <b>thread dumps</b> (jstack) to find blocked or spinning threads. Look for infinite loops, lock contention, or excessive GC.' },
      { title: 'Memory Issues', description: 'Use <b>heap dumps</b> (jmap) and tools like Eclipse MAT to find memory leaks or excessive object creation.' }
    ],
    useCases: [
      { icon: 'fa-chart-line', title: 'APM Tools', description: 'New Relic, Datadog, and Dynatrace provide real-time visibility into latency bottlenecks.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Query Optimization', description: 'Slow queries are often the #1 cause. Enable query logging and optimize N+1 patterns.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 157,
    category: 'Core Java',
    question: 'What metrics and tools do you use for JVM performance tuning?',
    answer: 'GC logs, heap dumps, jstat, VisualVM, Java Flight Recorder (JFR). Track latency, throughput, and memory allocation rates.',
    asked_metadata: '5x Oracle, 4x Datadog, 3x Splunk',
    coreConceptDescription: 'JVM performance tuning requires monitoring GC behavior, memory allocation rates, thread states, and CPU usage. Key tools include JFR (Java Flight Recorder), VisualVM, jstat, and production APM solutions.',
    subConcepts: [
      { title: 'GC Monitoring', description: 'Enable <b>GC logs</b> (-Xlog:gc*) to track pause times, collection frequency, and memory reclaimed per cycle.' },
      { title: 'Profiling Tools', description: '<b>JFR</b> (built-in, low overhead), <b>VisualVM</b> (GUI profiler), <b>async-profiler</b> (flame graphs for CPU/allocation hotspots).' }
    ],
    useCases: [
      { icon: 'fa-fire', title: 'Flame Graphs', description: 'async-profiler generates flame graphs showing exactly where CPU time or allocations are spent.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-sliders', title: 'Heap Sizing', description: 'Use -Xmx, -Xms, and GC algorithm flags (G1, ZGC) based on profiling data, not guessing.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 161,
    category: 'Core Java',
    question: 'Why Java does not support multiple inheritance (Diamond Problem)?',
    answer: 'To avoid ambiguity when two parent classes have methods with the same signature (Diamond Problem). Java uses Interfaces to achieve similar functionality safely.',
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS',
    coreConceptDescription: 'The Diamond Problem occurs when a class inherits from two classes that both have the same method. Java avoids this by restricting class inheritance to single parent but allowing multiple interface implementation.',
    code: `// Diamond Problem (NOT allowed in Java)
// class A { void hello() {} }
// class B extends A { void hello() {} }
// class C extends A { void hello() {} }
// class D extends B, C { } // AMBIGUOUS! Which hello()?

// Java solution: use interfaces
interface B { default void hello() { System.out.println("B"); } }
interface C { default void hello() { System.out.println("C"); } }
class D implements B, C {
    public void hello() { B.super.hello(); } // Explicit resolution
}`,
    subConcepts: [
      { title: 'Diamond Problem', description: 'When class D inherits from B and C, both having method hello(), the compiler <b>cannot determine</b> which version to use.' },
      { title: 'Interface Resolution', description: 'With interfaces, if two defaults conflict, the implementing class <b>must explicitly override</b> and choose which to call.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Language Safety', description: 'Preventing the diamond problem makes Java code more predictable and easier to reason about.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-plug', title: 'Multiple Interfaces', description: 'Java supports implementing multiple interfaces, which provides most benefits of multiple inheritance safely.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 162,
    category: 'Core Java',
    question: 'What is the difference between HashSet and ArrayList?',
    answer: 'ArrayList preserves insertion order and allows duplicates. HashSet implies no order and ensures uniqueness (no duplicates).',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Google',
    coreConceptDescription: 'ArrayList is an ordered, indexed collection that allows duplicate elements. HashSet is an unordered collection that enforces uniqueness using hashCode/equals. Choose based on whether you need order/duplicates or uniqueness.',
    code: `List<String> list = new ArrayList<>();
list.add("A"); list.add("A"); // Size = 2

Set<String> set = new HashSet<>();
set.add("A"); set.add("A"); // Size = 1`,
    subConcepts: [
      { title: 'ArrayList (Ordered + Duplicates)', description: 'Maintains <b>insertion order</b>, allows duplicates, and supports <b>index-based access</b> O(1). Backed by a resizable array.' },
      { title: 'HashSet (Unordered + Unique)', description: '<b>No guaranteed order</b>, no duplicates. Uses HashMap internally. O(1) for add/contains/remove.' }
    ],
    useCases: [
      { icon: 'fa-list', title: 'Ordered Data', description: 'Use ArrayList when insertion order matters or you need positional access by index.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-fingerprint', title: 'Deduplication', description: 'Use HashSet to remove duplicates from a collection or check membership efficiently.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 164,
    category: 'Core Java',
    question: 'What is the difference between a Normal Interface and a Functional Interface?',
    answer: 'A Normal Interface can have multiple abstract methods. A Functional Interface (SAM) has exactly one abstract method and can be used with Lambdas.',
    asked_metadata: '6x Amazon, 5x Google, 4x Microsoft',
    coreConceptDescription: 'A Functional Interface (annotated with @FunctionalInterface) has exactly one abstract method (SAM — Single Abstract Method). This makes it the target type for lambda expressions and method references.',
    code: `// Functional Interface (SAM)
@FunctionalInterface
interface Predicate<T> {
    boolean test(T t);  // Single abstract method
}

// Used with Lambda
Predicate<String> nonEmpty = s -> !s.isEmpty();

// Normal Interface (multiple abstract methods)
interface UserService {
    User findById(Long id);
    void save(User user);  // Cannot use with lambda
}`,
    subConcepts: [
      { title: 'Functional Interface (@FunctionalInterface)', description: 'Exactly <b>one abstract method</b>. Can have multiple default/static methods. Target for <b>lambdas</b> and method references.' },
      { title: 'Built-in Examples', description: '<b>Predicate&lt;T&gt;</b>, <b>Function&lt;T,R&gt;</b>, <b>Consumer&lt;T&gt;</b>, <b>Supplier&lt;T&gt;</b>, and Runnable are all functional interfaces.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Lambda Expressions', description: 'Functional interfaces enable concise lambda syntax: list.stream().filter(x -> x > 5).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-puzzle-piece', title: 'Strategy Pattern', description: 'Pass behavior as a parameter using functional interfaces instead of creating separate classes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 165,
    category: 'Core Java',
    question: 'What are the different types of classes in Java?',
    answer: '1. Concrete Class 2. Abstract Class 3. Interface (Type) 4. Inner Class 5. Anonymous Inner Class 6. Lambda (Functional implementation).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco',
    coreConceptDescription: 'Java supports multiple class types to model different design needs: concrete classes for instantiation, abstract classes for partial implementation, interfaces for contracts, inner classes for encapsulation, and anonymous classes for one-off implementations.',
    subConcepts: [
      { title: 'Concrete & Abstract', description: '<b>Concrete</b> classes can be instantiated. <b>Abstract</b> classes cannot — they provide a template for subclasses.' },
      { title: 'Inner & Anonymous', description: '<b>Inner classes</b> are defined within another class. <b>Anonymous classes</b> provide one-off implementations inline, largely replaced by lambdas.' }
    ],
    useCases: [
      { icon: 'fa-cubes', title: 'Design Flexibility', description: 'Choose the right class type based on whether you need instantiation, inheritance, or contracts.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Encapsulation', description: 'Inner classes can access outer class private members, useful for helper implementations.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 166,
    category: 'Core Java',
    question: 'What are Virtual Threads (Project Loom) and how do they differ from Platform Threads?',
    answer: 'Virtual threads are lightweight threads managed by the JVM instead of the OS. They enable high-throughput applications by allowing millions of threads to run on a small number of OS threads with minimal overhead.',
    asked_metadata: '5x Google, 4x Microsoft',
    coreConceptDescription: 'Virtual threads (Java 21) are lightweight, JVM-managed threads that are NOT mapped 1:1 to OS threads. They allow creating millions of threads with minimal memory, ideal for I/O-bound workloads like web servers.',
    code: `// Creating a Virtual Thread
Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread");
});

// Using an Executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> "Task");
}`,
    subConcepts: [
      { title: 'Platform Threads (1:1 OS)', description: 'Each Java thread maps to <b>one OS thread</b>. Limited to thousands. ~1MB stack each. Expensive context switches.' },
      { title: 'Virtual Threads (M:N)', description: '<b>JVM-managed</b>, multiplexed onto carrier threads. Millions possible. ~few KB each. Ideal for blocking I/O.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Web Servers', description: 'Handle millions of concurrent requests with thread-per-request model without thread pool exhaustion.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Database Calls', description: 'Each blocking DB call gets its own virtual thread — no need for reactive/async complexity.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 167,
    category: 'Core Java',
    question: 'What are Java Records (introduced in Java 14/16)?',
    answer: 'Records are a restricted form of class that acts as transparent carriers for immutable data. They automatically generate constructors, accessors, equals(), hashCode(), and toString().',
    asked_metadata: '4x Amazon, 3x Netflix',
    coreConceptDescription: 'Records eliminate boilerplate for data carrier classes. The compiler generates the constructor, accessors (no "get" prefix), equals(), hashCode(), and toString() from the record header declaration.',
    code: `public record User(Long id, String name) {}

// Usage
User user = new User(1L, "John");
System.out.println(user.name()); // Accessor (no "get" prefix)
System.out.println(user);        // User[id=1, name=John]`,
    subConcepts: [
      { title: 'Auto-Generated Methods', description: 'Records generate <b>constructor, accessors, equals(), hashCode(), toString()</b> — all based on the record components.' },
      { title: 'Restrictions', description: 'Records are <b>final</b> (cannot be extended), fields are <b>final</b> (immutable), and they cannot extend other classes.' }
    ],
    useCases: [
      { icon: 'fa-box', title: 'DTOs & Value Objects', description: 'Ideal for Data Transfer Objects, API responses, and immutable value types.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Reducing Boilerplate', description: 'Replaces hundreds of lines of POJO boilerplate with a single line declaration.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 168,
    category: 'Core Java',
    question: 'What are Sealed Classes and Interfaces?',
    answer: 'Sealed classes allow developers to restrict which other classes or interfaces may extend or implement them, providing a more controlled inheritance hierarchy.',
    asked_metadata: '3x Oracle, 2x Adobe',
    coreConceptDescription: 'Sealed classes (Java 17) restrict which classes can extend them using the "permits" clause. Subclasses must be final, sealed, or non-sealed. This enables exhaustive pattern matching in switch statements.',
    code: `public sealed class Shape 
    permits Circle, Square {}

public final class Circle extends Shape {}
public final class Square extends Shape {}`,
    subConcepts: [
      { title: 'Permits Clause', description: 'The <b>permits</b> keyword lists the only classes allowed to extend the sealed class. All others are rejected by the compiler.' },
      { title: 'Subclass Modifiers', description: 'Each permitted subclass must be <b>final</b> (closed), <b>sealed</b> (further restricted), or <b>non-sealed</b> (open).' }
    ],
    useCases: [
      { icon: 'fa-code-branch', title: 'Algebraic Data Types', description: 'Model domain types exhaustively (Shape = Circle | Square) for pattern matching in switch.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Controlled Extension', description: 'Prevent unauthorized subclassing while still allowing known, validated subtypes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 173,
    category: 'Core Java',
    question: 'How does Pattern Matching for switch (Java 21) work?',
    answer: 'It allows switch expressions and statements to match patterns instead of just constants, enabling safer and more expressive code when dealing with complex object hierarchies.',
    asked_metadata: '3x LinkedIn, 2x Microsoft',
    coreConceptDescription: 'Pattern matching for switch (Java 21) extends switch to match against type patterns, guarded patterns, and null. Combined with sealed classes, the compiler can verify exhaustiveness.',
    code: `static String formatter(Object obj) {
    return switch (obj) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case String s  -> String.format("String %s", s);
        default        -> obj.toString();
    };
}`,
    subConcepts: [
      { title: 'Type Patterns', description: 'Match against a <b>type + binding variable</b>: case Integer i combines instanceof check and cast in one step.' },
      { title: 'Guarded Patterns', description: 'Add conditions with <b>when</b> clause: case String s when s.length() > 5 for conditional matching.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Replacing instanceof Chains', description: 'Eliminates verbose if-else-instanceof chains with clean, type-safe switch expressions.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Exhaustive Checks', description: 'With sealed classes, the compiler ensures all subtypes are handled — no missing cases.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 179,
    category: 'Core Java',
    question: 'What is the difference between a Stream and an Optional in Java?',
    answer: 'A Stream is a sequence of 0 to N elements (focused on computation). An Optional is a box for 0 or 1 element (focused on avoiding NullPointerException). Both support declarative operations like filter() and map().',
    asked_metadata: '4x Facebook, 3x Apple',
    coreConceptDescription: 'Stream processes sequences of 0-N elements lazily with operations like map/filter/reduce. Optional wraps a single nullable value to avoid NullPointerException. Both are monadic containers with similar APIs.',
    code: `// Stream: 0 to N elements
List<String> names = users.stream()
    .filter(u -> u.isActive())
    .map(User::getName)
    .collect(Collectors.toList());

// Optional: 0 or 1 element
Optional<User> user = findById(1L);
String name = user.map(User::getName).orElse("Unknown");`,
    subConcepts: [
      { title: 'Stream (0..N elements)', description: 'Lazy pipeline for <b>bulk data processing</b>. Supports parallel execution. Not reusable after terminal operation.' },
      { title: 'Optional (0..1 element)', description: 'Container for a <b>nullable value</b>. Eliminates null checks with map(), flatMap(), orElse(), and ifPresent().' }
    ],
    useCases: [
      { icon: 'fa-filter', title: 'Data Pipelines', description: 'Streams replace loops for filtering, transforming, and aggregating collections declaratively.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Null Safety', description: 'Optional as method return type signals that a value may be absent — forcing callers to handle it.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 182,
    category: 'Core Java',
    question: 'What is PECS (Producer Extends, Consumer Super) in Generics?',
    answer: 'It is a guideline for choosing between "extends" and "super". Use "? extends T" when you only read from a collection (Producer). Use "? super T" when you only write to a collection (Consumer).',
    asked_metadata: '4x Google, 2x Amazon',
    coreConceptDescription: 'PECS is Joshua Bloch\'s mnemonic: Producer Extends, Consumer Super. It guides wildcard usage in generics to maximize API flexibility while maintaining type safety.',
    code: `// Producer - extends (READ from it)
public void copy(List<? extends Number> source) {
    Number n = source.get(0); // OK — reading
}

// Consumer - super (WRITE to it)
public void addNumbers(List<? super Integer> list) {
    list.add(42); // OK — writing
}`,
    subConcepts: [
      { title: '? extends T (Producer)', description: 'Use when you only <b>read</b> from the collection. The collection "produces" T values. You cannot add elements.' },
      { title: '? super T (Consumer)', description: 'Use when you only <b>write</b> to the collection. The collection "consumes" T values. Reading returns Object.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Flexible APIs', description: 'PECS allows methods to accept the widest possible range of generic types while staying type-safe.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Collections.copy()', description: 'Collections.copy(List<? super T> dest, List<? extends T> src) is a classic PECS example.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 190,
    category: 'Core Java',
    question: 'What is Java Reflection and what are its drawbacks?',
    answer: "It allows a program to inspect and modify its own structure at runtime. Drawbacks: Performance overhead (JVM can't optimize), security risk (accesses private members), and breaking of abstraction/encapsulation.",
    asked_metadata: '3x Oracle, 2x Microsoft',
    coreConceptDescription: 'Reflection allows inspecting and modifying classes, methods, and fields at runtime. Frameworks (Spring, Hibernate) use it heavily, but it has performance costs and breaks encapsulation.',
    code: `Method m = obj.getClass().getDeclaredMethod("secret");
m.setAccessible(true);
m.invoke(obj);`,
    subConcepts: [
      { title: 'Runtime Inspection', description: 'Discover class structure (<b>methods, fields, annotations</b>) at runtime without compile-time knowledge.' },
      { title: 'Drawbacks', description: '<b>Performance overhead</b> (no JIT optimization), <b>security risks</b> (accessing privates), and <b>fragile code</b> (no compile-time checks).' }
    ],
    useCases: [
      { icon: 'fa-wand-magic-sparkles', title: 'Framework Magic', description: 'Spring uses reflection for dependency injection, autowiring, and component scanning.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Testing', description: 'Test frameworks use reflection to access private methods and mock internal state.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 191,
    category: 'Core Java',
    question: 'How does HashMap work internally in Java 8+?',
    answer: 'It uses an array of Nodes. When collisions reach a threshold (8) and the array size is >= 64, it converts the linked list to a Red-Black Tree (Treeify) to improve search performance from O(n) to O(log n).',
    asked_metadata: '9x Google, 8x Amazon, 7x Microsoft',
    coreConceptDescription: 'HashMap stores key-value pairs in a Node[] array. Each slot is a bucket. On collision, elements form a linked list. In Java 8+, when a bucket exceeds 8 entries, it converts to a Red-Black Tree for O(log n) lookups.',
    code: `// Internal constants
// Initial capacity: 16
// Load factor: 0.75
// TREEIFY_THRESHOLD: 8
// UNTREEIFY_THRESHOLD: 6

// Bucket structure: array[hash & (n-1)]
// Collision: LinkedList → TreeNode (when >= 8)`,
    subConcepts: [
      { title: 'Hashing & Buckets', description: 'Key.hashCode() is <b>spread</b> (XOR of high/low bits) then masked to find the bucket index: hash & (capacity - 1).' },
      { title: 'Treeification (Java 8+)', description: 'When a bucket has <b>>= 8 nodes</b> and capacity >= 64, the linked list converts to a <b>Red-Black Tree</b> for O(log n) lookups.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'O(1) Lookups', description: 'HashMap provides constant-time get/put in the average case — the most-used collection in Java.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Avoiding Pathological Cases', description: 'Implement proper hashCode() to distribute keys evenly and prevent bucket clustering.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 192,
    category: 'Core Java',
    question: 'Difference between fail-fast and fail-safe iterators?',
    answer: "Fail-fast (e.g., ArrayList) throws ConcurrentModificationException if the collection is modified while iterating. Fail-safe (e.g., CopyOnWriteArrayList) works on a clone or concurrent view and doesn't throw exceptions.",
    asked_metadata: '5x Microsoft, 3x Facebook',
    coreConceptDescription: 'Fail-fast iterators detect concurrent modification and throw immediately. Fail-safe iterators work on a snapshot or concurrent view, allowing safe iteration even when the underlying collection changes.',
    code: `// Fail-fast — throws ConcurrentModificationException
List<String> list = new ArrayList<>(List.of("A", "B"));
for (String s : list) {
    list.remove(s); // THROWS!
}

// Fail-safe — works on a copy
List<String> cowList = new CopyOnWriteArrayList<>(List.of("A", "B"));
for (String s : cowList) {
    cowList.remove(s); // OK — iterates on snapshot
}`,
    subConcepts: [
      { title: 'Fail-Fast', description: 'Uses a <b>modCount</b> field. If the collection is modified during iteration, <b>ConcurrentModificationException</b> is thrown immediately.' },
      { title: 'Fail-Safe', description: 'Iterates on a <b>snapshot/copy</b> of the collection. No exceptions, but may not reflect the latest modifications.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Debugging Collection Issues', description: 'ConcurrentModificationException usually means you are modifying a collection while iterating over it.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-lock', title: 'Thread-Safe Iteration', description: 'Use CopyOnWriteArrayList or ConcurrentHashMap.keySet() for safe concurrent iteration.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 197,
    category: 'Core Java',
    question: 'What is the JIT Compiler?',
    answer: 'The Just-In-Time compiler is a part of the JVM that converts bytecode into native machine code at runtime. It identifies "hot spots" (frequently executed code) and optimizes them for better performance.',
    asked_metadata: '4x Intel, 2x Oracle',
    coreConceptDescription: 'The JIT (Just-In-Time) compiler optimizes Java performance by detecting "hot" methods (frequently called) and compiling them from bytecode to optimized native machine code at runtime.',
    subConcepts: [
      { title: 'Hot Spot Detection', description: 'The JVM <b>profiles</b> running code and identifies methods called frequently. These "hot spots" are compiled to native code by C1/C2 compilers.' },
      { title: 'Tiered Compilation', description: 'Code starts <b>interpreted</b>, then gets compiled by <b>C1</b> (fast, light optimization), then <b>C2</b> (slower, aggressive optimization).' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance at Scale', description: 'Long-running server apps benefit most from JIT — performance improves after warmup.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-clock', title: 'Warmup Considerations', description: 'JIT optimization takes time. For short-lived apps (CLI tools), AOT compilation (GraalVM) may be better.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 199,
    category: 'Core Java',
    question: 'How to create a Custom Exception in Java?',
    answer: 'By extending the Exception class (for Checked) or RuntimeException class (for Unchecked). Usually includes a constructor that accepts a message.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    coreConceptDescription: 'Custom exceptions improve code readability and error handling. Extend Exception for checked exceptions (must be caught/declared) or RuntimeException for unchecked exceptions (programming errors).',
    code: `// Unchecked custom exception
public class DataNotFoundException extends RuntimeException {
    public DataNotFoundException(String message) {
        super(message);
    }
}

// Checked custom exception
public class InsufficientFundsException extends Exception {
    private final double amount;
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: " + amount);
        this.amount = amount;
    }
}`,
    subConcepts: [
      { title: 'Checked (extends Exception)', description: 'Forces callers to <b>handle or declare</b> the exception. Use for recoverable conditions (e.g., file not found).' },
      { title: 'Unchecked (extends RuntimeException)', description: 'Does not force handling. Use for <b>programming errors</b> or validation failures (e.g., invalid input).' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Domain-Specific Errors', description: 'Create exceptions like OrderNotFoundException or PaymentDeclinedException for clear error semantics.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'REST API Error Handling', description: 'Map custom exceptions to HTTP status codes using @ExceptionHandler or @ControllerAdvice in Spring.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 200,
    category: 'Core Java',
    question: 'Difference between Intermediate and Terminal operations in Streams?',
    answer: 'Intermediate operations (filter, map) are lazy and return a new Stream. Terminal operations (collect, forEach) trigger the processing of the pipeline and return a result or void.',
    asked_metadata: '5x Amazon, 4x Microsoft',
    coreConceptDescription: 'Stream operations are either intermediate (lazy, return a Stream) or terminal (trigger execution, produce a result). No processing happens until a terminal operation is called — this is stream laziness.',
    code: `List<Integer> list = numbers.stream()
    .filter(n -> n > 10)            // Intermediate (Lazy)
    .map(n -> n * 2)                // Intermediate (Lazy)
    .collect(Collectors.toList());  // Terminal (Triggers pipeline)`,
    subConcepts: [
      { title: 'Intermediate (Lazy)', description: '<b>filter(), map(), sorted(), distinct()</b> — return a new Stream. Nothing happens until a terminal op is called.' },
      { title: 'Terminal (Eager)', description: '<b>collect(), forEach(), count(), reduce()</b> — trigger the pipeline and produce a result. Stream cannot be reused.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Lazy Evaluation', description: 'Intermediate operations are fused and short-circuited — findFirst() stops after the first match.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-boxes-stacked', title: 'Collectors', description: 'Terminal ops like toList(), groupingBy(), and joining() power flexible result aggregation.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 320,
    category: 'Core Java',
    question: 'How do you create a deadlock scenario programmatically?',
    answer: 'By creating two threads that each hold a lock and are trying to acquire the lock held by the other thread.',
    asked_metadata: '10x Morgan Stanley, 8x Goldman Sachs, 7x JPMorgan',
    coreConceptDescription: 'Deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a lock. It requires: mutual exclusion, hold and wait, no preemption, and circular wait.',
    code: `Object lock1 = new Object();
Object lock2 = new Object();

// Thread 1: holds lock1, waits for lock2
new Thread(() -> {
    synchronized(lock1) {
        Thread.sleep(100);
        synchronized(lock2) { /* deadlock! */ }
    }
}).start();

// Thread 2: holds lock2, waits for lock1
new Thread(() -> {
    synchronized(lock2) {
        Thread.sleep(100);
        synchronized(lock1) { /* deadlock! */ }
    }
}).start();`,
    subConcepts: [
      { title: 'Four Conditions for Deadlock', description: '<b>Mutual Exclusion</b>, <b>Hold & Wait</b>, <b>No Preemption</b>, and <b>Circular Wait</b> — all four must be present.' },
      { title: 'Prevention Strategies', description: 'Always acquire locks in the <b>same order</b>. Use <b>tryLock()</b> with timeouts. Minimize lock scope.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Interview Demonstration', description: 'A classic question at banks and trading firms where concurrent systems are critical.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-magnifying-glass', title: 'Detection', description: 'Use jstack or ThreadMXBean.findDeadlockedThreads() to detect deadlocks in production.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 324,
    category: 'Core Java',
    question: 'What is a Record in Java 16+?',
    answer: 'A record is a special kind of class that is a transparent holder for shallowly immutable data. It automatically generates getters, equals, hashCode, and toString.',
    asked_metadata: '5x Spotify, 4x Square, 3x Stripe',
    coreConceptDescription: 'Records provide a compact syntax for declaring immutable data classes. The compiler auto-generates the canonical constructor, component accessors, equals(), hashCode(), and toString().',
    code: `public record User(int id, String name) { }

// Equivalent to a class with:
// - final fields: id, name
// - Constructor: User(int id, String name)
// - Accessors: id(), name()
// - equals(), hashCode(), toString()`,
    subConcepts: [
      { title: 'Compact Declaration', description: 'A single line <b>record User(int id, String name) {}</b> replaces ~50 lines of traditional POJO boilerplate.' },
      { title: 'Customization', description: 'You can add <b>compact constructors</b> for validation, custom methods, and implement interfaces.' }
    ],
    useCases: [
      { icon: 'fa-box', title: 'API Response Models', description: 'Ideal for REST API response/request DTOs that only carry data.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-key', title: 'Map Keys & Set Elements', description: 'Records auto-generate correct equals/hashCode — perfect for use as HashMap keys.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 325,
    category: 'Core Java',
    question: 'Show an example of the new Switch Expressions (Java 14+).',
    answer: 'Switch expressions allow returning a value directly and using the arrow (->) syntax to avoid fall-through and break statements.',
    asked_metadata: '4x Intuit, 3x PayPal, 2x eBay',
    coreConceptDescription: 'Switch expressions (Java 14) return values directly using arrow (->) syntax. No fall-through, no break needed. Combined with pattern matching (Java 21), they become a powerful control flow tool.',
    code: `int priority = switch (day) {
    case "MON", "FRI" -> 1;
    case "TUE" -> 2;
    default -> 0;
};

// With yield for complex blocks
String label = switch (status) {
    case "ACTIVE" -> "✅ Active";
    case "PENDING" -> {
        log("pending check");
        yield "⏳ Pending";
    }
    default -> "❓ Unknown";
};`,
    subConcepts: [
      { title: 'Arrow Syntax (->)', description: 'Replaces colon (:) syntax. <b>No fall-through</b> between cases. Returns the value directly for single expressions.' },
      { title: 'yield Keyword', description: 'Used inside <b>block expressions</b> { } to return a value from a multi-statement switch arm.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Cleaner Control Flow', description: 'Eliminates common bugs from missing break statements in traditional switch.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-wand-magic-sparkles', title: 'Enum Mapping', description: 'Map enums to values cleanly: String label = switch(status) { case ACTIVE -> "On"; ... };', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 326,
    category: 'Core Java',
    question: 'How do you prove that String is immutable programmatically?',
    answer: 'Assign a string to two variables, then modify one. You will see that the original string remains unchanged for the second variable.',
    asked_metadata: '10x IBM, 8x Oracle, 7x Accenture',
    coreConceptDescription: 'You can prove String immutability by assigning a String to two variables, then modifying one. The other variable remains unchanged because String operations create new objects instead of modifying the original.',
    code: `String s1 = "Java";
String s2 = s1;
s1 = "Python";
System.out.println(s2); // Still prints "Java"

// Also: concat/replace create NEW strings
String s3 = "Hello";
s3.concat(" World"); // Returns new String, s3 unchanged!
System.out.println(s3); // Still "Hello"`,
    subConcepts: [
      { title: 'Reference vs Value Change', description: 's1 = "Python" changes the <b>reference</b>, not the String object. The original "Java" object is <b>unchanged</b> in memory.' },
      { title: 'Operations Create New Objects', description: 'Methods like <b>concat(), replace(), substring()</b> return a NEW String. The original is never modified.' }
    ],
    useCases: [
      { icon: 'fa-microscope', title: 'Interview Proof', description: 'Demonstrate with two references pointing to the same String, then show one change does not affect the other.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-memory', title: 'String Pool Implication', description: 'Immutability makes String Pool safe — if Strings were mutable, shared pool references would corrupt each other.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  }
];
