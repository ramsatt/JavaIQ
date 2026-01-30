import { Question } from './question.model';

export const CORE_JAVA_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Core Java',
    question: 'What is the difference between equals() and == in Java?',
    answer: '== checks for reference equality (address comparison), while equals() checks for content equality (value comparison).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Google',
    code: `String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);       // false (different references)
System.out.println(s1.equals(s2));  // true (same content)`
  },
  {
    id: 2,
    category: 'Core Java',
    question: 'What is the contract between hashCode() and equals()?',
    answer: 'If two objects are equal according to equals(), they must have the same hashCode(). However, if they have the same hashCode(), they are not necessarily equal.',
    asked_metadata: '5x Google, 4x Microsoft, 3x Netflix',
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
}`
  },
  {
    id: 3,
    category: 'Core Java',
    question: 'Explain the difference between final, finally, and finalize.',
    answer: 'final is a keyword for constants/immutability. finally is a block in try-catch for cleanup. finalize is a method called by GC before object reclamation (deprecated).',
    asked_metadata: '8x Amazon, 6x Microsoft, 4x IBM',
    code: `// final variable
final int MAX = 100;

// finally block
try { 
    return; 
} finally { 
    System.out.println("Always executed"); 
}`
  },
  {
    id: 12,
    category: 'Core Java',
    question: 'What is a Marker Interface?',
    answer: 'An interface with no methods or fields, used to indicate a property to the JVM or compiler (e.g., Serializable, Cloneable).',
    asked_metadata: '4x Adobe, 3x Salesforce, 2x Intel',
  },
  {
    id: 13,
    category: 'Core Java',
    question: 'Explain the difference between HashMap and ConcurrentHashMap.',
    answer: 'HashMap is not thread-safe. ConcurrentHashMap is thread-safe and allows concurrent access to different segments of the map.',
    asked_metadata: '7x Google, 5x Intel, 4x Microsoft',
  },
  {
    id: 18,
    category: 'Core Java',
    question: 'What is the volatile keyword?',
    answer: 'It guarantees visibility of changes to variables across threads (happens-before relationship) but does not guarantee atomicity.',
    asked_metadata: '5x Intel, 4x AMD, 3x Microsoft',
  },
  {
    id: 51,
    category: 'Core Java',
    question: 'Why is Java platform independent?',
    answer: 'Java code is compiled into platform-independent byte code, which runs on any machine with a JRE, unlike C++ which compiles to machine-specific code.',
    asked_metadata: '6x Google, 5x Microsoft, 4x Amazon'
  },
  {
    id: 52,
    category: 'Core Java',
    question: 'Why is Java not pure Object-Oriented?',
    answer: 'Because it supports primitive data types (int, float, boolean, etc.) which are not objects, for performance reasons.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Intel'
  },
  {
    id: 53,
    category: 'Core Java',
    question: 'Difference between Heap and Stack Memory?',
    answer: 'Stack stores method execution frames and local variables (LIFO). Heap stores objects and is used for dynamic memory allocation.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Apple'
  },
  {
    id: 54,
    category: 'Core Java',
    question: 'Difference between equals() and ==?',
    answer: "== compares memory references (address equality), while .equals() compares the actual content/value of objects (logical equality).",
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google'
  },
  {
    id: 55,
    category: 'Core Java',
    question: 'How to declare an infinite loop?',
    answer: 'Common ways: for(;;) { ... }, while(true) { ... }, or do { ... } while(true);',
    asked_metadata: '4x Adobe, 3x Autodesk, 2x Nvidia'
  },
  {
    id: 56,
    category: 'Core Java',
    question: 'What is Constructor Overloading?',
    answer: 'Having multiple constructors in a class with different parameter lists (different number or types of arguments).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 57,
    category: 'Core Java',
    question: 'Why are Strings immutable?',
    answer: 'For String Pool optimization (saving memory), Thread Safety (no sync needed), and Security (e.g., HashMap keys, class loading).',
    asked_metadata: '9x Amazon, 8x Google, 7x Microsoft'
  },
  {
    id: 58,
    category: 'Core Java',
    question: 'What is a Singleton Class?',
    answer: 'A class that allows only one instance to be created. Implemented using a private constructor and a static factory method.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google',
    code: `public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() {
        return INSTANCE;
    }
}`
  },
  {
    id: 60,
    category: 'Core Java',
    question: 'Difference between throw and throws?',
    answer: "'throw' explicitly throws an exception in code. 'throws' declares in a method signature that it may throw specific exceptions.",
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS'
  },
  {
    id: 127,
    category: 'Core Java',
    question: 'What is the difference between StringBuffer and StringBuilder?',
    answer: 'StringBuffer is synchronized and thread-safe, making it slower. StringBuilder is not synchronized and not thread-safe, making it faster.',
    asked_metadata: '5x Amazon, 3x Google'
  },
  {
    id: 128,
    category: 'Core Java',
    question: 'What is the purpose of the transient keyword?',
    answer: 'It prevents a variable from being serialized. When an object is serialized, transient variables are ignored.',
    asked_metadata: '6x IBM, 5x Oracle, 4x TCS'
  },
  {
    id: 129,
    category: 'Core Java',
    question: 'What is the difference between Comparator and Comparable?',
    answer: 'Comparable defines the natural ordering of a class (compareTo method). Comparator defines an external ordering (compare method) and can be used to sort objects in different ways.',
    asked_metadata: '9x Amazon, 8x Microsoft, 7x Google'
  },
  {
    id: 130,
    category: 'Core Java',
    question: 'What is the difference between checked and unchecked exceptions?',
    answer: 'Checked exceptions are checked at compile-time (e.g., IOException) and must be handled. Unchecked exceptions are runtime exceptions (e.g., NullPointerException) and don\'t require explicit handling.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Oracle'
  },
  {
    id: 131,
    category: 'Core Java',
    question: 'What is the Java Memory Model?',
    answer: 'It describes how threads interact through memory. It defines the rules for visibility of changes to variables and the ordering of instructions.',
    asked_metadata: '3x Intel, 2x AMD'
  },
  {
    id: 132,
    category: 'Core Java',
    question: 'What is the difference between interface and abstract class?',
    answer: 'Interfaces allow multiple inheritance and all methods are public abstract (default/static allowed in Java 8+). Abstract classes allow single inheritance, can have state (fields), and non-abstract methods.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Oracle'
  },
  {
    id: 133,
    category: 'Core Java',
    question: 'What is the super keyword?',
    answer: 'It refers to the immediate parent class object. It is used to call parent class methods or constructors.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 134,
    category: 'Core Java',
    question: 'What is the this keyword?',
    answer: 'It refers to the current object instance. It is used to access current class members and to invoke other constructors of the same class.',
    asked_metadata: '6x Amazon, 5x Adobe, 4x Intel',
    code: `public class Car {
    private String model;
    
    public Car(String model) {
        this.model = model; // Disambiguation
    }
    
    public Car() {
        this("Unknown"); // Call other constructor
    }
}`
  },
  {
    id: 135,
    category: 'Core Java',
    question: 'What is Method Overloading vs Method Overriding?',
    answer: 'Overloading occurs within the same class (same name, different parameters). Overriding occurs in a subclass (same name, same parameters) to provide a specific implementation.',
    asked_metadata: '7x Amazon, 6x Uber, 5x Airbnb',
  },
  {
    id: 136,
    category: 'Core Java',
    question: 'What is the purpose of the default method in interfaces?',
    answer: 'Introduced in Java 8, it allows adding new methods to interfaces without breaking existing implementations. It provides a default implementation.',
    asked_metadata: '6x Amazon, 5x Oracle, 4x VMware'
  },
  {
    id: 147,
    category: 'Core Java',
    question: 'What is the difference between JDK, JRE, and JVM?',
    answer: 'JDK is the development kit including JRE and tools. JRE runs Java apps. JVM executes bytecode and provides platform abstraction.',
    asked_metadata: '8x TCS, 7x Infosys, 6x Accenture'
  },
  {
    id: 148,
    category: 'Core Java',
    question: 'How does garbage collection work in Java, and how do you handle memory leaks?',
    answer: 'GC reclaims unreachable objects. Detect leaks with heap dumps, tools like VisualVM, and fixing unintended object references (e.g., static collections).',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 153,
    category: 'Core Java',
    question: 'How do you use Java Streams and Lambdas in production?',
    answer: 'Use streams for readable data transformations (map, filter, reduce). Avoid excessive boxing. Use parallel streams only when benchmarked and safe.',
    asked_metadata: '8x Amazon, 7x Google, 6x Microsoft',
    code: `List<String> names = users.stream()
    .filter(u -> u.isActive())
    .map(User::getName)
    .collect(Collectors.toList());`
  },
  {
    id: 156,
    category: 'Core Java',
    question: 'How do you troubleshoot a slow-performing Java application?',
    answer: 'Gather metrics, analyze thread/heap dumps, check GC logs for pauses, trace DB queries, and use APM tools (New Relic, Datadog).',
    asked_metadata: '6x Amazon, 5x NewRelic, 4x Datadog'
  },
  {
    id: 157,
    category: 'Core Java',
    question: 'What metrics and tools do you use for JVM performance tuning?',
    answer: 'GC logs, heap dumps, jstat, VisualVM, Java Flight Recorder (JFR). Track latency, throughput, and memory allocation rates.',
    asked_metadata: '5x Oracle, 4x Datadog, 3x Splunk'
  },
  {
    id: 161,
    category: 'Core Java',
    question: 'Why Java does not support multiple inheritance (Diamond Problem)?',
    answer: 'To avoid ambiguity when two parent classes have methods with the same signature (Diamond Problem). Java uses Interfaces to achieve similar functionality safely.',
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS'
  },
  {
    id: 162,
    category: 'Core Java',
    question: 'What is the difference between HashSet and ArrayList?',
    answer: 'ArrayList preserves insertion order and allows duplicates. HashSet implies no order and ensures uniqueness (no duplicates).',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Google',
    code: `List<String> list = new ArrayList<>();
list.add("A"); list.add("A"); // Size = 2

Set<String> set = new HashSet<>();
set.add("A"); set.add("A"); // Size = 1`
  },
  {
    id: 164,
    category: 'Core Java',
    question: 'What is the difference between a Normal Interface and a Functional Interface?',
    answer: 'A Normal Interface can have multiple abstract methods. A Functional Interface (SAM) has exactly one abstract method and can be used with Lambdas.',
    asked_metadata: '6x Amazon, 5x Google, 4x Microsoft'
  },
  {
    id: 165,
    category: 'Core Java',
    question: 'What are the different types of classes in Java?',
    answer: '1. Concrete Class 2. Abstract Class 3. Interface (Type) 4. Inner Class 5. Anonymous Inner Class 6. Lambda (Functional implementation).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 166,
    category: 'Core Java',
    question: 'What are Virtual Threads (Project Loom) and how do they differ from Platform Threads?',
    answer: 'Virtual threads are lightweight threads managed by the JVM instead of the OS. They enable high-throughput applications by allowing millions of threads to run on a small number of OS threads with minimal overhead.',
    asked_metadata: '5x Google, 4x Microsoft',
    code: `// Creating a Virtual Thread
Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread");
});

// Using an Executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> "Task");
}`
  },
  {
    id: 167,
    category: 'Core Java',
    question: 'What are Java Records (introduced in Java 14/16)?',
    answer: 'Records are a restricted form of class that acts as transparent carriers for immutable data. They automatically generate constructors, accessors, equals(), hashCode(), and toString().',
    asked_metadata: '4x Amazon, 3x Netflix',
    code: `public record User(Long id, String name) {}

// Usage
User user = new User(1L, "John");
System.out.println(user.name()); // Accessor`
  },
  {
    id: 168,
    category: 'Core Java',
    question: 'What are Sealed Classes and Interfaces?',
    answer: 'Sealed classes allow developers to restrict which other classes or interfaces may extend or implement them, providing a more controlled inheritance hierarchy.',
    asked_metadata: '3x Oracle, 2x Adobe',
    code: `public sealed class Shape 
    permits Circle, Square {}

public final class Circle extends Shape {}
public final class Square extends Shape {}`
  },
  {
    id: 173,
    category: 'Core Java',
    question: 'How does Pattern Matching for switch (Java 21) work?',
    answer: 'It allows switch expressions and statements to match patterns instead of just constants, enabling safer and more expressive code when dealing with complex object hierarchies.',
    asked_metadata: '3x LinkedIn, 2x Microsoft',
    code: `static String formatter(Object obj) {
    return switch (obj) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case String s  -> String.format("String %s", s);
        default        -> obj.toString();
    };
}`
  },
  {
    id: 179,
    category: 'Core Java',
    question: 'What is the difference between a Stream and an Optional in Java?',
    answer: 'A Stream is a sequence of 0 to N elements (focused on computation). An Optional is a box for 0 or 1 element (focused on avoiding NullPointerException). Both support declarative operations like filter() and map().',
    asked_metadata: '4x Facebook, 3x Apple'
  },
  {
    id: 182,
    category: 'Core Java',
    question: 'What is PECS (Producer Extends, Consumer Super) in Generics?',
    answer: 'It is a guideline for choosing between "extends" and "super". Use "? extends T" when you only read from a collection (Producer). Use "? super T" when you only write to a collection (Consumer).',
    asked_metadata: '4x Google, 2x Amazon',
    code: `// Producer - extends
public void copy(List<? extends Number> source) { ... }

// Consumer - super
public void addNumbers(List<? super Integer> list) { ... }`
  },
  {
    id: 190,
    category: 'Core Java',
    question: 'What is Java Reflection and what are its drawbacks?',
    answer: 'It allows a program to inspect and modify its own structure at runtime. Drawbacks: Performance overhead (JVM can’t optimize), security risk (accesses private members), and breaking of abstraction/encapsulation.',
    asked_metadata: '3x Oracle, 2x Microsoft',
    code: `Method m = obj.getClass().getDeclaredMethod("secret");
m.setAccessible(true);
m.invoke(obj);`
  },
  {
    id: 191,
    category: 'Core Java',
    question: 'How does HashMap work internally in Java 8+?',
    answer: 'It uses an array of Nodes. When collisions reach a threshold (8) and the array size is >= 64, it converts the linked list to a Red-Black Tree (Treeify) to improve search performance from O(n) to O(log n).',
    asked_metadata: '9x Google, 8x Amazon, 7x Microsoft',
    code: `// Initial capacity: 16
// Load factor: 0.75
// TREEIFY_THRESHOLD: 8
// UNTREEIFY_THRESHOLD: 6`
  },
  {
    id: 192,
    category: 'Core Java',
    question: 'Difference between fail-fast and fail-safe iterators?',
    answer: 'Fail-fast (e.g., ArrayList) throws ConcurrentModificationException if the collection is modified while iterating. Fail-safe (e.g., CopyOnWriteArrayList) works on a clone or concurrent view and doesn’t throw exceptions.',
    asked_metadata: '5x Microsoft, 3x Facebook'
  },
  {
    id: 197,
    category: 'Core Java',
    question: 'What is the JIT Compiler?',
    answer: 'The Just-In-Time compiler is a part of the JVM that converts bytecode into native machine code at runtime. It identifies "hot spots" (frequently executed code) and optimizes them for better performance.',
    asked_metadata: '4x Intel, 2x Oracle'
  },
  {
    id: 199,
    category: 'Core Java',
    question: 'How to create a Custom Exception in Java?',
    answer: 'By extending the Exception class (for Checked) or RuntimeException class (for Unchecked). Usually includes a constructor that accepts a message.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    code: `public class DataNotFoundException extends RuntimeException {
    public DataNotFoundException(String message) {
        super(message);
    }
}`
  },
  {
    id: 200,
    category: 'Core Java',
    question: 'Difference between Intermediate and Terminal operations in Streams?',
    answer: 'Intermediate operations (filter, map) are lazy and return a new Stream. Terminal operations (collect, forEach) trigger the processing of the pipeline and return a result or void.',
    asked_metadata: '5x Amazon, 4x Microsoft',
    code: `List<Integer> list = numbers.stream()
    .filter(n -> n > 10)  // Intermediate (Lazy)
    .collect(Collectors.toList()); // Terminal`
  },
  {
    id: 320,
    category: 'Core Java',
    question: 'How do you create a deadlock scenario programmatically?',
    answer: 'By creating two threads that each hold a lock and are trying to acquire the lock held by the other thread.',
    asked_metadata: '10x Morgan Stanley, 8x Goldman Sachs, 7x JPMorgan',
    code: `synchronized(lock1) {
    Thread.sleep(100);
    synchronized(lock2) { ... }
}`
  },
  {
    id: 324,
    category: 'Core Java',
    question: 'What is a Record in Java 16+?',
    answer: 'A record is a special kind of class that is a transparent holder for shallowly immutable data. It automatically generates getters, equals, hashCode, and toString.',
    asked_metadata: '5x Spotify, 4x Square, 3x Stripe',
    code: `public record User(int id, String name) { }`
  },
  {
    id: 325,
    category: 'Core Java',
    question: 'Show an example of the new Switch Expressions (Java 14+).',
    answer: 'Switch expressions allow returning a value directly and using the arrow (->) syntax to avoid fall-through and break statements.',
    asked_metadata: '4x Intuit, 3x PayPal, 2x eBay',
    code: `int priority = switch (day) {
    case "MON", "FRI" -> 1;
    case "TUE" -> 2;
    default -> 0;
};`
  },
  {
    id: 326,
    category: 'Core Java',
    question: 'How do you prove that String is immutable programmatically?',
    answer: 'Assign a string to two variables, then modify one. You will see that the original string remains unchanged for the second variable.',
    asked_metadata: '10x IBM, 8x Oracle, 7x Accenture',
    code: `String s1 = "Java";
String s2 = s1;
s1 = "Python";
System.out.println(s2); // Still prints "Java"`
  }
];
