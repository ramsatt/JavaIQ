import {
  AssessService
} from "./chunk-7C2X6UDG.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar
} from "./chunk-GJAE6IIS.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-YUIOCFNR.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/assessments/assess-data.ts
var ASSESSMENTS = [
  {
    id: "java-basics",
    title: "Java Fundamentals",
    category: "Core Java",
    timeMinutes: 15,
    questions: [
      {
        q: "Which component is responsible for converting Java bytecode into machine code at runtime?",
        opts: ["JDK", "JRE", "JVM", "Javac"],
        ans: 2,
        exp: "The JVM (Java Virtual Machine) interprets and JIT-compiles bytecode into native machine instructions at runtime. JDK is the development kit, JRE is the runtime environment, and javac is the compiler."
      },
      {
        q: "What is the default value of an int field in a Java class?",
        opts: ["null", "-1", "0", "undefined"],
        ans: 2,
        exp: "Instance fields of primitive type int are automatically initialised to 0 by the JVM. Local variables, however, must be explicitly initialised before use."
      },
      {
        q: "Which keyword makes a variable's value unchangeable after initialisation?",
        opts: ["static", "const", "final", "immutable"],
        ans: 2,
        exp: `The "final" keyword prevents re-assignment of a variable. Note that for object references, final only prevents the reference from changing \u2014 the object's internal state may still be mutable.`
      },
      {
        q: "What happens when you compare two String literals using == in Java?",
        opts: [
          "Always returns false",
          "Compares content character by character",
          "Compares object references, but literals are interned so it often returns true",
          "Throws a NullPointerException"
        ],
        ans: 2,
        exp: 'String literals are placed in the String pool (interned), so two identical literals share the same reference and == returns true. For Strings created with "new", == compares references and returns false even for equal content. Always use .equals() for content comparison.'
      },
      {
        q: "Which of the following is NOT a primitive type in Java?",
        opts: ["boolean", "char", "String", "double"],
        ans: 2,
        exp: "String is a class (reference type), not a primitive. Java has 8 primitive types: byte, short, int, long, float, double, boolean, and char."
      },
      {
        q: "What does autoboxing do in Java?",
        opts: [
          "Converts a String to a number automatically",
          "Automatically converts a primitive to its wrapper class",
          "Allocates memory on the stack for objects",
          "Casts a supertype to a subtype"
        ],
        ans: 1,
        exp: "Autoboxing is the automatic conversion that the Java compiler makes between primitive types and their wrapper classes (e.g., int \u2192 Integer). The reverse is called unboxing."
      },
      {
        q: "What is the output of: System.out.println(10 / 3)?",
        opts: ["3.33", "3.333...", "3", "4"],
        ans: 2,
        exp: "Both operands are int, so integer division is performed, truncating the fractional part. The result is 3. To get 3.33, at least one operand must be a float or double (e.g., 10.0 / 3)."
      },
      {
        q: "Which access modifier makes a member accessible only within the same class?",
        opts: ["default (package-private)", "protected", "public", "private"],
        ans: 3,
        exp: "private restricts access to within the declaring class only. default (no modifier) allows package-level access, protected also allows subclasses, and public is unrestricted."
      },
      {
        q: "Java passes arguments to methods by:",
        opts: [
          "Pass-by-reference for all types",
          "Pass-by-value for all types",
          "Pass-by-reference for objects, pass-by-value for primitives",
          "Pass-by-pointer"
        ],
        ans: 1,
        exp: "Java is strictly pass-by-value. For primitives, the value is copied. For objects, the reference value (memory address) is copied \u2014 the method gets its own copy of the reference, so reassigning the parameter doesn't affect the caller, but mutating the object through it does."
      },
      {
        q: 'What does the "static" keyword mean when applied to a method?',
        opts: [
          "The method cannot be overridden",
          "The method belongs to the class, not to any instance",
          "The method is thread-safe",
          "The method is called automatically at startup"
        ],
        ans: 1,
        exp: "A static method belongs to the class itself rather than to any object instance. It can be called without creating an object (ClassName.methodName()) and cannot access instance fields directly."
      },
      {
        q: "Which of these correctly declares a variable with Java 10+ local-variable type inference?",
        opts: ["let x = 10;", "auto x = 10;", "var x = 10;", "val x = 10;"],
        ans: 2,
        exp: '"var" was introduced in Java 10 for local variable type inference. The compiler infers the type from the initialiser. It cannot be used for method parameters, return types, or fields.'
      },
      {
        q: "What is the size (in bits) of a long in Java?",
        opts: ["16", "32", "64", "128"],
        ans: 2,
        exp: "A long is a 64-bit signed integer ranging from -2^63 to 2^63 - 1. int is 32 bits, short is 16 bits, and byte is 8 bits."
      },
      {
        q: "Which of the following creates a String that is NOT placed in the String pool?",
        opts: [
          '"Hello"',
          'String.intern("Hello")',
          'new String("Hello")',
          'String.valueOf("Hello")'
        ],
        ans: 2,
        exp: '"new String("Hello")" always creates a new object on the heap outside the pool. String literals and strings returned by intern() are placed in the pool.'
      },
      {
        q: "What is the result of casting a double 9.9 to an int?",
        opts: ["10", "9", "Compilation error", "ArithmeticException"],
        ans: 1,
        exp: "Casting a double to an int truncates (does NOT round) the fractional part. (int) 9.9 = 9. Use Math.round() if rounding is needed."
      },
      {
        q: "Which statement about arrays in Java is TRUE?",
        opts: [
          "Arrays can grow dynamically",
          "Arrays are primitive types",
          "Arrays are objects and have a length field",
          "Arrays can hold mixed types"
        ],
        ans: 2,
        exp: 'In Java, arrays are objects allocated on the heap and have a "length" field (not method). They are fixed-size once created. Use collections like ArrayList for dynamic resizing.'
      },
      {
        q: "What does instanceof check?",
        opts: [
          "Whether two object references point to the same object",
          "Whether an object is an instance of a given class or interface",
          "Whether a class implements a certain number of interfaces",
          "Whether a method exists on an object"
        ],
        ans: 1,
        exp: "instanceof tests whether an object is an instance of a specific class, subclass, or interface. Java 16+ also supports pattern matching: if (obj instanceof String s) { ... } which casts automatically."
      },
      {
        q: 'What is the output of: System.out.println("5" + 3 + 2)?',
        opts: ["10", "532", "55", "53"],
        ans: 1,
        exp: 'The "+" operator evaluates left-to-right. "5" + 3 \u2192 "53" (String concatenation), then "53" + 2 \u2192 "532". To get 10, write "5" + (3 + 2).'
      },
      {
        q: "Which method is called by the garbage collector before an object is reclaimed?",
        opts: ["destroy()", "cleanup()", "finalize()", "dispose()"],
        ans: 2,
        exp: "finalize() (deprecated since Java 9) was called by GC before object reclamation. It is unreliable and should not be used. Prefer try-with-resources or explicit close() calls instead."
      },
      {
        q: "A varargs parameter int... nums allows:",
        opts: [
          "Only exactly one int argument",
          "Zero or more int arguments",
          "Only array arguments",
          "Only named arguments"
        ],
        ans: 1,
        exp: "Varargs (variable-length arguments) allow a method to accept zero or more arguments of the specified type. Internally they are treated as an array. Varargs must be the last parameter and there can only be one."
      },
      {
        q: "What happens if you call a method on a null reference?",
        opts: [
          "Returns null",
          "Returns a default value",
          "Throws NullPointerException",
          "Compilation error"
        ],
        ans: 2,
        exp: "Calling any method on a null reference throws a NullPointerException at runtime. Java 14+ provides helpful NullPointerExceptions that indicate which variable was null."
      }
    ]
  },
  {
    id: "oop-concepts",
    title: "OOP Concepts",
    category: "Core Java",
    timeMinutes: 12,
    questions: [
      {
        q: "Which OOP principle hides internal implementation details and exposes only a public interface?",
        opts: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        ans: 2,
        exp: "Encapsulation bundles data and behaviour together and restricts direct access to fields (using private + getters/setters). Abstraction focuses on hiding complexity at the design level by defining what an object does without saying how."
      },
      {
        q: "What is the key difference between an abstract class and an interface in Java?",
        opts: [
          "Interfaces can have method bodies; abstract classes cannot",
          "Abstract classes can have constructors and state; interfaces cannot have constructors",
          "A class can extend multiple abstract classes",
          "Abstract classes support multiple inheritance"
        ],
        ans: 1,
        exp: "Abstract classes can have constructors, instance fields, and concrete methods. Interfaces cannot have constructors or instance state (only constants). A class can implement multiple interfaces but extend only one class (abstract or not)."
      },
      {
        q: "Method overloading is resolved at:",
        opts: ["Runtime by the JVM", "Compile time by the compiler", "Class-loading time", "Link time"],
        ans: 1,
        exp: "Overloading is a compile-time (static) concept \u2014 the compiler picks the correct method based on the argument types. Overriding is resolved at runtime via dynamic dispatch (virtual method table)."
      },
      {
        q: "Which keyword is used to call a superclass constructor from a subclass?",
        opts: ["this()", "parent()", "super()", "base()"],
        ans: 2,
        exp: "super() calls the superclass constructor and must be the first statement in the subclass constructor. this() calls another constructor in the same class. If super() is not explicitly written and the superclass has no no-arg constructor, a compilation error occurs."
      },
      {
        q: "What does runtime polymorphism mean in Java?",
        opts: [
          "Multiple constructors in the same class",
          "A method being called based on the actual object type, determined at runtime",
          "A class implementing multiple interfaces",
          "Static method dispatch"
        ],
        ans: 1,
        exp: "Runtime polymorphism (dynamic dispatch) occurs when a subclass overrides a method and the JVM decides which implementation to call based on the actual object type at runtime, not the declared reference type."
      },
      {
        q: "Which of the following can an interface in Java 8+ contain?",
        opts: [
          "Only abstract methods",
          "Abstract methods and default/static methods",
          "Instance fields and abstract methods",
          "Constructors and abstract methods"
        ],
        ans: 1,
        exp: "Since Java 8, interfaces can have default methods (with implementations) and static methods. Java 9 added private methods. Interfaces still cannot have instance fields or constructors."
      },
      {
        q: "What is a covariant return type?",
        opts: [
          "An overriding method returning the same type as the overridden method",
          "An overriding method returning a subtype of the overridden method's return type",
          "A method returning multiple values",
          "A generic method return type"
        ],
        ans: 1,
        exp: "Covariant return types (Java 5+) allow an overriding method to declare a more specific (subtype) return type than the overridden method. For example, a method returning Animal can be overridden to return Dog."
      },
      {
        q: "A Java Record (introduced in Java 16) is best described as:",
        opts: [
          "A mutable data class with auto-generated getters and setters",
          "An immutable data carrier with auto-generated constructor, accessors, equals, hashCode, and toString",
          "A replacement for enums",
          "A class that cannot be extended"
        ],
        ans: 1,
        exp: "Records are immutable data classes. The compiler auto-generates a canonical constructor, accessor methods (not getters), equals(), hashCode(), and toString(). Records implicitly extend java.lang.Record and are final."
      },
      {
        q: "How does Java achieve multiple inheritance of behaviour?",
        opts: [
          "Through extending multiple abstract classes",
          "Through implementing multiple interfaces with default methods",
          "Through inner classes",
          "Java does not support any form of multiple inheritance"
        ],
        ans: 1,
        exp: "Java avoids multiple inheritance of state (no multiple class extension) but allows multiple inheritance of behaviour through interfaces with default methods. If two implemented interfaces have the same default method, the implementing class must override it."
      },
      {
        q: "Which statement about sealed classes (Java 17) is correct?",
        opts: [
          "Sealed classes cannot be subclassed at all",
          'Sealed classes restrict which classes can extend them using a "permits" clause',
          "Sealed classes are equivalent to final classes",
          "Sealed classes can only be interfaces"
        ],
        ans: 1,
        exp: 'Sealed classes (Java 17) use the "permits" clause to explicitly list which classes may extend them. Permitted subclasses must be declared as final, sealed, or non-sealed. This enables exhaustive pattern matching.'
      },
      {
        q: "What is the Object.hashCode() contract?",
        opts: [
          "Objects with the same hashCode must be equal",
          "Equal objects must have the same hashCode, but same hashCode does not imply equality",
          "hashCode must be unique for every object",
          "hashCode returns the memory address"
        ],
        ans: 1,
        exp: "The contract: if a.equals(b) then a.hashCode() == b.hashCode(). The reverse is not required \u2014 hash collisions are allowed. Always override hashCode when you override equals."
      },
      {
        q: "Which of the following is an example of abstraction?",
        opts: [
          "Making all fields private",
          "Defining a List interface without specifying ArrayList or LinkedList implementation",
          "A subclass overriding a superclass method",
          "Converting an int to an Integer"
        ],
        ans: 1,
        exp: 'Abstraction is about defining "what" without specifying "how". The List interface abstracts the concept of an ordered collection without exposing the underlying data structure. Clients program to the interface, not the implementation.'
      },
      {
        q: "In Java, can a constructor be private?",
        opts: [
          "No, constructors must be public",
          "Yes, and it is used in patterns like Singleton or static factory methods",
          "Yes, but the class cannot be instantiated at all",
          "Only abstract classes can have private constructors"
        ],
        ans: 1,
        exp: "A private constructor prevents external instantiation. It is used in the Singleton pattern (controlled single instance), utility classes (no instantiation needed), and static factory method patterns where creation is controlled."
      },
      {
        q: 'What is the "IS-A" relationship in OOP?',
        opts: [
          "Composition \u2014 an object contains another object",
          "Inheritance \u2014 a subclass is a type of its superclass",
          "Delegation \u2014 an object delegates behaviour to another",
          "Association \u2014 two objects are loosely connected"
        ],
        ans: 1,
        exp: '"IS-A" describes inheritance. A Dog IS-A Animal. "HAS-A" describes composition/aggregation. Favour composition over inheritance when the IS-A relationship is not truly accurate.'
      },
      {
        q: "Which modifier prevents a class from being subclassed?",
        opts: ["abstract", "static", "final", "sealed"],
        ans: 2,
        exp: 'A final class cannot be extended. All methods in a final class are implicitly final. String, Integer, and other wrapper classes are final. "sealed" restricts subclassing to a permitted list but does not prevent it entirely.'
      }
    ]
  },
  {
    id: "collections",
    title: "Collections Framework",
    category: "Core Java",
    timeMinutes: 15,
    questions: [
      {
        q: "Which interface is at the root of the Java Collections hierarchy (excluding Map)?",
        opts: ["List", "Iterable", "Collection", "AbstractCollection"],
        ans: 2,
        exp: "Collection extends Iterable and is the root interface for List, Set, and Queue. Map is a separate hierarchy that does not extend Collection because it stores key-value pairs, not individual elements."
      },
      {
        q: "What is the time complexity of get(index) in an ArrayList?",
        opts: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
        ans: 2,
        exp: "ArrayList is backed by an array, so random access by index is O(1). LinkedList get(index) is O(n) because it must traverse nodes from the head."
      },
      {
        q: "What is the default initial capacity of a HashMap in Java?",
        opts: ["8", "16", "32", "10"],
        ans: 1,
        exp: "HashMap's default initial capacity is 16 with a load factor of 0.75. When 75% full, it rehashes and doubles capacity. Choosing an appropriate initial capacity can avoid expensive rehashing."
      },
      {
        q: "Which collection does NOT allow duplicate elements?",
        opts: ["ArrayList", "LinkedList", "HashSet", "ArrayDeque"],
        ans: 2,
        exp: "Set implementations (HashSet, LinkedHashSet, TreeSet) do not allow duplicates, determined by equals() and hashCode(). List and Queue implementations allow duplicates."
      },
      {
        q: "What ordering does a TreeSet maintain?",
        opts: [
          "Insertion order",
          "Access order",
          "Natural ordering (or Comparator ordering)",
          "Hash-based ordering"
        ],
        ans: 2,
        exp: "TreeSet stores elements in sorted order using a Red-Black tree. Elements must implement Comparable or a Comparator must be provided. HashSet has no guaranteed order; LinkedHashSet maintains insertion order."
      },
      {
        q: "What does LinkedHashMap provide compared to HashMap?",
        opts: [
          "Sorted keys",
          "Predictable insertion-order or access-order iteration",
          "Thread safety",
          "Faster lookups"
        ],
        ans: 1,
        exp: "LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order (default) or access order (when constructed with accessOrder=true). It is ideal for implementing an LRU cache."
      },
      {
        q: "Which collection is best suited for a FIFO queue in a single-threaded context?",
        opts: ["Stack", "PriorityQueue", "ArrayDeque", "TreeSet"],
        ans: 2,
        exp: "ArrayDeque (used as a Queue) is the recommended FIFO queue. It is faster than LinkedList for queue operations. PriorityQueue orders by priority, not insertion order. Stack is legacy and synchronised (slow)."
      },
      {
        q: "What is the difference between fail-fast and fail-safe iterators?",
        opts: [
          "Fail-fast iterators work on a snapshot; fail-safe iterate the live collection",
          "Fail-fast throw ConcurrentModificationException if the collection is modified during iteration; fail-safe iterators work on a snapshot copy",
          "Fail-safe iterators are faster than fail-fast iterators",
          "There is no practical difference"
        ],
        ans: 1,
        exp: "Fail-fast iterators (ArrayList, HashMap) throw ConcurrentModificationException if the collection is structurally modified during iteration. Fail-safe iterators (CopyOnWriteArrayList, ConcurrentHashMap) operate on a copy or snapshot and do not throw."
      },
      {
        q: "Which Map implementation is thread-safe and designed for high-concurrency?",
        opts: ["HashMap", "TreeMap", "LinkedHashMap", "ConcurrentHashMap"],
        ans: 3,
        exp: "ConcurrentHashMap allows concurrent reads and segment-level locking for writes, making it efficient under high concurrency. HashMap is not thread-safe. Hashtable (legacy) is fully synchronised but slower. Collections.synchronizedMap wraps a map with coarse locking."
      },
      {
        q: "What does the Collections.unmodifiableList() method do?",
        opts: [
          "Creates a deep copy of the list",
          "Returns a view that throws UnsupportedOperationException on mutation",
          "Sorts the list permanently",
          "Removes all null elements"
        ],
        ans: 1,
        exp: "unmodifiableList() returns an unmodifiable view of the list. Any write operation (add, remove, set) throws UnsupportedOperationException. The underlying list can still be modified through the original reference \u2014 use List.copyOf() for a truly immutable copy."
      },
      {
        q: "What is the time complexity of contains() in a HashSet?",
        opts: ["O(n)", "O(log n)", "O(1) average", "O(n log n)"],
        ans: 2,
        exp: "HashSet uses hashing, so contains() is O(1) average case. Worst case (all elements hash to same bucket) is O(n), but Java 8+ converts buckets to balanced trees when they exceed 8 entries, giving O(log n) worst case."
      },
      {
        q: "How does Comparable differ from Comparator?",
        opts: [
          "Comparable is for primitive sorting; Comparator is for object sorting",
          "Comparable defines natural ordering within the class; Comparator provides external, custom ordering",
          "Comparator is faster than Comparable",
          "They are interchangeable"
        ],
        ans: 1,
        exp: "Comparable (compareTo) is implemented by the class itself for its natural order (e.g., String, Integer). Comparator is a separate object that defines a custom ordering, allowing multiple sort strategies without modifying the class."
      },
      {
        q: "What happens when you add a duplicate key to a HashMap?",
        opts: [
          "Throws IllegalArgumentException",
          "The old value is replaced with the new value",
          "Both values are stored",
          "The put operation is ignored"
        ],
        ans: 1,
        exp: "put(key, value) replaces the existing value for a duplicate key and returns the old value. Use putIfAbsent() if you only want to insert when the key is not already present."
      },
      {
        q: "Which method returns the element with highest priority in a PriorityQueue?",
        opts: ["pop()", "top()", "peek()", "first()"],
        ans: 2,
        exp: "peek() returns the head element (smallest by natural order, or by Comparator) without removing it. poll() removes and returns the head. PriorityQueue is a min-heap by default; to create a max-heap, provide Comparator.reverseOrder()."
      },
      {
        q: "What does List.of() return (Java 9+)?",
        opts: [
          "An ArrayList that cannot be resized",
          "A truly immutable list that throws UnsupportedOperationException on any structural change",
          "A synchronized list",
          "A list that allows null elements"
        ],
        ans: 1,
        exp: "List.of() (Java 9+) returns a structurally immutable list. It does not allow null elements, and any add/remove/set throws UnsupportedOperationException. It is more memory-efficient than ArrayList. Use List.copyOf() to create an immutable copy of an existing list."
      },
      {
        q: "Which data structure is internally used by HashMap in Java 8+?",
        opts: [
          "Array of linked lists only",
          "Array of linked lists that convert to balanced trees when bucket size exceeds 8",
          "Red-Black tree throughout",
          "Array of arrays"
        ],
        ans: 1,
        exp: "Java 8 improved HashMap: each bucket is a linked list that automatically converts to a Red-Black tree when it exceeds 8 entries (and reverts to linked list below 6). This gives O(log n) worst-case lookup instead of O(n)."
      },
      {
        q: "When should you use LinkedList over ArrayList?",
        opts: [
          "When you need fast random access",
          "When you frequently add/remove elements from the beginning or middle of the list",
          "When memory is not a concern",
          "When you need sorted order"
        ],
        ans: 1,
        exp: "LinkedList is O(1) for insertions/deletions at known positions (once you have the node), but traversal to find the node is O(n). ArrayList is better for random access (O(1)) but O(n) for insertions/deletions in the middle. In practice, ArrayList is usually faster even for insertions due to cache locality."
      },
      {
        q: "What is the output of: new ArrayList<>(List.of(3,1,2)).stream().sorted().findFirst()?",
        opts: ["Optional[3]", "Optional[1]", "Optional[2]", "Optional.empty()"],
        ans: 1,
        exp: "sorted() on integers uses natural ordering (ascending), so 1 comes first. findFirst() returns Optional[1]. The stream is finite and non-empty so Optional.empty() is not possible."
      },
      {
        q: "Which statement about ArrayDeque is TRUE?",
        opts: [
          "ArrayDeque allows null elements",
          "ArrayDeque is thread-safe",
          "ArrayDeque can be used as both a Stack and a Queue, and is faster than Stack and LinkedList",
          "ArrayDeque has a fixed capacity"
        ],
        ans: 2,
        exp: "ArrayDeque is a resizable array-based double-ended queue. It is faster than Stack (no synchronisation) and LinkedList (better cache locality). It does NOT allow null elements and is NOT thread-safe. Capacity grows as needed."
      },
      {
        q: "How do you create a thread-safe list from an existing ArrayList?",
        opts: [
          "List.of(existingList)",
          "Collections.synchronizedList(existingList)",
          "new SafeList<>(existingList)",
          "existingList.toThreadSafe()"
        ],
        ans: 1,
        exp: "Collections.synchronizedList() wraps a list with synchronised access on all operations. For high-concurrency read-heavy use cases, CopyOnWriteArrayList is preferable as reads are lock-free."
      }
    ]
  },
  {
    id: "spring-boot-quiz",
    title: "Spring Boot Essentials",
    category: "Spring Boot",
    timeMinutes: 20,
    questions: [
      {
        q: "What does @SpringBootApplication combine?",
        opts: [
          "@Component, @Service, @Repository",
          "@Configuration, @EnableAutoConfiguration, @ComponentScan",
          "@SpringBootTest, @AutoConfigure, @EnableScan",
          "@RestController, @RequestMapping, @Configuration"
        ],
        ans: 1,
        exp: "@SpringBootApplication is a meta-annotation combining @Configuration (defines beans), @EnableAutoConfiguration (triggers auto-config), and @ComponentScan (scans for components in the package and sub-packages)."
      },
      {
        q: "What is Spring Boot auto-configuration?",
        opts: [
          "Automatic generation of REST endpoints",
          "Automatic configuration of Spring beans based on classes present on the classpath and properties",
          "Automatic database schema generation",
          "Automatic deployment to cloud platforms"
        ],
        ans: 1,
        exp: "Auto-configuration analyses the classpath and existing beans, then automatically configures Spring beans. For example, if spring-boot-starter-data-jpa is present and a DataSource bean exists, a JPA EntityManagerFactory is automatically configured. Use @ConditionalOn* annotations to control when configs apply."
      },
      {
        q: "What is the difference between @RestController and @Controller?",
        opts: [
          "@RestController handles HTTP; @Controller handles WebSocket",
          "@RestController = @Controller + @ResponseBody, automatically serialising return values to JSON/XML",
          "@Controller is for REST APIs; @RestController is for MVC web apps",
          "There is no difference"
        ],
        ans: 1,
        exp: "@RestController is a convenience annotation that combines @Controller and @ResponseBody. Every method in a @RestController automatically serialises its return value to the HTTP response body (typically JSON). @Controller returns view names for server-side rendering."
      },
      {
        q: "Which annotation injects a dependency in Spring?",
        opts: ["@Inject only", "@Resource only", "@Autowired (and optionally @Inject / @Resource)", "@Bean"],
        ans: 2,
        exp: "@Autowired is Spring's primary injection annotation. Spring also supports JSR-330 @Inject and JSR-250 @Resource. Constructor injection with @Autowired is the recommended approach for mandatory dependencies. @Bean is used to declare a bean, not inject one."
      },
      {
        q: "What does the @Value annotation do?",
        opts: [
          "Validates bean fields",
          "Injects a value from properties files or environment variables into a field or method parameter",
          "Marks a field as a database column",
          "Defines a constant value"
        ],
        ans: 1,
        exp: `@Value("\${property.key}") injects the value from application.properties/YAML or environment variables. It supports Spring Expression Language (SpEL): @Value("#{systemProperties['user.name']}"). For structured config, prefer @ConfigurationProperties.`
      },
      {
        q: "Which Spring Boot starter is required to build REST APIs?",
        opts: [
          "spring-boot-starter-web",
          "spring-boot-starter-rest",
          "spring-boot-starter-api",
          "spring-boot-starter-mvc"
        ],
        ans: 0,
        exp: "spring-boot-starter-web includes Spring MVC, Tomcat (embedded), Jackson for JSON, and everything needed to build RESTful web services. spring-boot-starter-webflux is the reactive alternative."
      },
      {
        q: "What is the purpose of Spring Boot Actuator?",
        opts: [
          "To generate API documentation automatically",
          "To provide production-ready features like health checks, metrics, info endpoints",
          "To manage database migrations",
          "To schedule background tasks"
        ],
        ans: 1,
        exp: "Actuator exposes endpoints like /actuator/health, /actuator/metrics, /actuator/info, /actuator/env. These are essential for monitoring, observability, and operational management. Endpoints can be secured and customised."
      },
      {
        q: "What does @Transactional do on a service method?",
        opts: [
          "Marks the method as thread-safe",
          "Wraps the method execution in a database transaction that rolls back on unchecked exceptions",
          "Caches the method result",
          "Makes the method asynchronous"
        ],
        ans: 1,
        exp: "@Transactional wraps the method in a transaction. By default, it rolls back on RuntimeException (unchecked) but commits on checked exceptions. Attributes include propagation, isolation, readOnly, rollbackFor, and timeout."
      },
      {
        q: "What is the difference between @Component, @Service, and @Repository?",
        opts: [
          "They are completely different with different behaviours",
          "They are all @Component specialisations \u2014 @Service and @Repository add semantic clarity; @Repository also enables DataAccessException translation",
          "@Service has transaction management built in",
          "@Repository is for web layer beans"
        ],
        ans: 1,
        exp: "All three are stereotypes of @Component and are picked up by component scanning. @Service signals business logic. @Repository signals data access and enables Spring's persistence exception translation (converting database exceptions to DataAccessException hierarchy)."
      },
      {
        q: "How do you define an application-specific property in Spring Boot?",
        opts: [
          "Define it in a properties.xml file",
          "Add key=value to application.properties or key: value under the proper YAML hierarchy",
          "Annotate a class with @Property",
          "Use System.setProperty()"
        ],
        ans: 1,
        exp: "Spring Boot reads application.properties or application.yml from src/main/resources by default. Properties can be overridden by environment variables, command-line arguments, or profile-specific files (application-{profile}.properties)."
      },
      {
        q: "What does the @Profile annotation do?",
        opts: [
          "Measures application performance",
          "Activates a bean or configuration only when specific profiles are active",
          "Defines security access profiles",
          "Groups related controllers"
        ],
        ans: 1,
        exp: '@Profile("dev") means the bean is only created when the "dev" profile is active. Active profiles are set via spring.profiles.active property. This enables environment-specific beans (different DataSources for dev/prod).'
      },
      {
        q: "What is the role of CommandLineRunner in Spring Boot?",
        opts: [
          "To run CLI commands from the terminal",
          "A functional interface whose run() method executes after the application context is loaded, useful for startup logic",
          "To replace the main method",
          "To schedule periodic tasks"
        ],
        ans: 1,
        exp: "CommandLineRunner's run(String... args) is called after the Spring context is fully initialised. It's commonly used for data seeding, startup validation, or running one-time jobs. ApplicationRunner is similar but receives ApplicationArguments."
      },
      {
        q: "Which annotation maps an HTTP GET request to a specific handler method?",
        opts: ["@RequestMapping(method=GET)", "@GetMapping", "Both A and B", "@HttpGet"],
        ans: 2,
        exp: "Both work. @GetMapping is a composed shortcut for @RequestMapping(method = RequestMethod.GET) introduced in Spring 4.3. Similarly, @PostMapping, @PutMapping, @DeleteMapping, and @PatchMapping exist for other HTTP methods."
      },
      {
        q: "What does @Async do in Spring?",
        opts: [
          "Makes a REST endpoint non-blocking",
          "Executes the annotated method in a separate thread from a thread pool",
          "Caches method results asynchronously",
          "Delays method execution by a fixed time"
        ],
        ans: 1,
        exp: "@Async (with @EnableAsync on a @Configuration class) runs the method in a Spring-managed thread pool. The method should return void or Future/CompletableFuture. It enables fire-and-forget or parallel execution patterns."
      },
      {
        q: "How does Spring Boot resolve circular dependencies?",
        opts: [
          "It automatically resolves all circular dependencies",
          "It throws BeanCurrentlyInCreationException; circular dependencies must be broken by using @Lazy or setter injection",
          "It uses a dependency queue to defer creation",
          "Circular dependencies are only a problem with @Repository beans"
        ],
        ans: 1,
        exp: "Spring Boot (especially 2.6+) detects circular dependencies and fails at startup. Solutions: use @Lazy on one injection point, refactor to break the cycle, or use setter/field injection (not recommended). Constructor injection makes circular deps a compile-time problem."
      },
      {
        q: "Which Spring Boot property sets the embedded server port?",
        opts: ["spring.port", "server.port", "application.port", "tomcat.port"],
        ans: 1,
        exp: "server.port in application.properties sets the embedded server port (default 8080). Set server.port=0 for a random available port, useful in integration tests."
      },
      {
        q: "What is Spring Boot DevTools primarily used for?",
        opts: [
          "Generating developer API keys",
          "Automatic application restart and live-reload during development",
          "Monitoring performance in production",
          "Generating documentation"
        ],
        ans: 1,
        exp: "spring-boot-devtools enables automatic restart when classpath files change and live reload for browser refresh. It also configures development-friendly defaults (disabled template caching, etc.). It is automatically disabled in production."
      },
      {
        q: "What is the purpose of @ControllerAdvice?",
        opts: [
          "Adds logging to all controllers",
          "Provides global exception handling, data binding, and model attribute logic across controllers",
          "Caches controller responses",
          "Defines security rules for controllers"
        ],
        ans: 1,
        exp: "@ControllerAdvice (or @RestControllerAdvice) allows centralised @ExceptionHandler, @InitBinder, and @ModelAttribute methods that apply to all controllers. It's the standard way to implement global exception handling."
      },
      {
        q: "Which Spring Security annotation restricts access to a method based on roles?",
        opts: ["@Secured or @PreAuthorize", "@RoleRequired", "@HttpSecurity", "@AccessControl"],
        ans: 0,
        exp: `@Secured({"ROLE_ADMIN"}) and @PreAuthorize("hasRole('ADMIN')") both restrict method access. @PreAuthorize is more powerful as it supports SpEL expressions. Requires @EnableMethodSecurity (Spring Security 6) or @EnableGlobalMethodSecurity (older).`
      },
      {
        q: "What does spring-boot-starter-test include by default?",
        opts: [
          "Only JUnit 5",
          "JUnit 5, Mockito, AssertJ, Hamcrest, Spring Test, and MockMvc",
          "TestNG and EasyMock",
          "Only Mockito and AssertJ"
        ],
        ans: 1,
        exp: "spring-boot-starter-test bundles JUnit 5, Mockito, AssertJ, Hamcrest, JSONAssert, JsonPath, Spring Test (MockMvc), and @SpringBootTest. It is the standard test dependency for Spring Boot applications."
      }
    ]
  },
  {
    id: "hibernate-quiz",
    title: "Hibernate & JPA",
    category: "Hibernate & JPA",
    timeMinutes: 15,
    questions: [
      {
        q: "What does ORM stand for and what problem does it solve?",
        opts: [
          "Object Resource Manager \u2014 manages server resources",
          "Object-Relational Mapping \u2014 bridges the gap between Java objects and relational database tables",
          "Online Resource Mapper \u2014 maps API endpoints to services",
          "Object Registry Manager \u2014 manages object lifecycles"
        ],
        ans: 1,
        exp: "ORM (Object-Relational Mapping) automates the conversion between Java objects and relational database rows, eliminating boilerplate JDBC code. Hibernate is the most popular JPA implementation."
      },
      {
        q: "What is the difference between FetchType.LAZY and FetchType.EAGER?",
        opts: [
          "LAZY loads related data immediately; EAGER defers loading",
          "EAGER loads related data immediately when the parent is loaded; LAZY loads it only when accessed",
          "They are identical in behaviour",
          "LAZY is for collections; EAGER is only for single associations"
        ],
        ans: 1,
        exp: "EAGER fetch loads associated entities immediately (in the same query or an additional query). LAZY defers loading until the association is accessed. Default: @ManyToOne and @OneToOne are EAGER; @OneToMany and @ManyToMany are LAZY. Prefer LAZY and use JOIN FETCH in JPQL when needed."
      },
      {
        q: "What annotation marks a field as the primary key in JPA?",
        opts: ["@PrimaryKey", "@Key", "@Id", "@Column(primary=true)"],
        ans: 2,
        exp: "@Id marks the primary key field. @GeneratedValue specifies how the key is generated (AUTO, IDENTITY, SEQUENCE, TABLE). @Column can further configure column name and constraints."
      },
      {
        q: "What is the N+1 select problem?",
        opts: [
          "Fetching N records with a single query",
          "Executing 1 query to get N parent entities, then N additional queries (one per entity) to fetch their associations",
          "A query that returns N+1 duplicate rows",
          "An off-by-one error in pagination"
        ],
        ans: 1,
        exp: "N+1 occurs when fetching N parent entities with LAZY associations, then accessing each association triggers N additional queries. Fix with JOIN FETCH in JPQL, EntityGraph, or @BatchSize. Use Hibernate's show_sql to detect it."
      },
      {
        q: "What does the cascade = CascadeType.ALL attribute mean on a relationship?",
        opts: [
          "Automatically creates a foreign key constraint",
          "All JPA operations (persist, merge, remove, refresh, detach) on the parent are cascaded to the child",
          "The child entity is automatically deleted when the parent is updated",
          "All columns from the child are merged into the parent table"
        ],
        ans: 1,
        exp: "CascadeType.ALL propagates all EntityManager operations from parent to child. Use carefully \u2014 CascadeType.REMOVE can delete children unintentionally. For independent entities, avoid cascading. orphanRemoval=true deletes children removed from the collection."
      },
      {
        q: "What is dirty checking in Hibernate?",
        opts: [
          "Checking for SQL injection in queries",
          "Automatically detecting changes to managed entities and generating UPDATE SQL on transaction commit",
          "Validating entity fields against constraints",
          "Checking for corrupted database records"
        ],
        ans: 1,
        exp: "Hibernate tracks entity state snapshots on load. At flush time (before commit or query), it compares current state with the snapshot. Changed fields trigger automatic UPDATE SQL \u2014 no explicit merge() call needed for managed entities."
      },
      {
        q: "What is the difference between the First Level and Second Level Cache in Hibernate?",
        opts: [
          "First Level is optional; Second Level is mandatory",
          "First Level cache is session-scoped (always enabled); Second Level cache is SessionFactory-scoped (optional, shared across sessions)",
          "First Level cache stores query results; Second Level caches entities",
          "They are the same cache at different priority levels"
        ],
        ans: 1,
        exp: "First Level Cache is per-Session and always active \u2014 repeated loads within the same session return the cached entity. Second Level Cache is per-SessionFactory, shared across sessions, and must be explicitly configured (e.g., with EhCache or Infinispan)."
      },
      {
        q: "What does @JoinColumn specify?",
        opts: [
          "The table to join",
          "The foreign key column in the owning entity's table that references the related entity",
          "The join strategy (inner/outer)",
          "The fetch type of the association"
        ],
        ans: 1,
        exp: '@JoinColumn(name="dept_id") specifies the foreign key column name. Without it, JPA generates a default column name. It is placed on the owning side of a relationship (the side with the foreign key).'
      },
      {
        q: "What is JPQL?",
        opts: [
          "A JavaScript library for querying databases",
          "Java Persistence Query Language \u2014 an object-oriented query language that operates on entities, not tables",
          "A stored procedure language for Oracle",
          "JSON-based query language"
        ],
        ans: 1,
        exp: 'JPQL (Java Persistence Query Language) is similar to SQL but works with entity classes and their fields, not tables and columns. Example: "SELECT e FROM Employee e WHERE e.salary > :min". It is portable across JPA implementations.'
      },
      {
        q: "What is the purpose of @GeneratedValue(strategy = GenerationType.IDENTITY)?",
        opts: [
          "Generates a UUID for the primary key",
          "Relies on database auto-increment to generate the primary key value after INSERT",
          "Uses a database sequence to pre-allocate IDs",
          "Generates IDs using an application-level table"
        ],
        ans: 1,
        exp: "IDENTITY relies on the database column's auto-increment (e.g., MySQL AUTO_INCREMENT). The INSERT is sent immediately to retrieve the generated key. SEQUENCE uses a DB sequence and can pre-fetch IDs in batches for better performance."
      },
      {
        q: "What is optimistic locking in JPA?",
        opts: [
          "A locking strategy that assumes conflicts are rare, uses a version column to detect concurrent modifications",
          "A strategy that locks the row on read to prevent concurrent updates",
          "An approach that automatically retries failed transactions",
          "A caching strategy that optimises read performance"
        ],
        ans: 0,
        exp: "Optimistic locking (using @Version) assumes conflicts are rare. A version column is incremented on each update. If two transactions read the same version and both try to update, the second throws OptimisticLockException. Pessimistic locking uses SELECT FOR UPDATE."
      },
      {
        q: "What are the four JPA entity states?",
        opts: [
          "Created, Saved, Updated, Deleted",
          "Transient, Managed (Persistent), Detached, Removed",
          "New, Dirty, Clean, Gone",
          "Pending, Active, Inactive, Expired"
        ],
        ans: 1,
        exp: "Transient: not associated with any session. Managed: associated with open Session \u2014 changes are tracked. Detached: was managed but Session is closed. Removed: scheduled for deletion. Understanding these states is critical for avoiding unexpected behaviour."
      },
      {
        q: "What does session.merge() do for a detached entity?",
        opts: [
          "Attaches the detached entity directly to the session",
          "Copies the detached entity's state onto a managed entity and returns the managed instance",
          "Permanently deletes the entity",
          "Creates a copy of the entity in the database"
        ],
        ans: 1,
        exp: "merge() copies the state of a detached entity to a managed entity (found or newly created). It returns the managed entity. The detached entity passed in remains detached. Use the returned managed instance for subsequent operations."
      },
      {
        q: "Which annotation defines a bidirectional @OneToMany / @ManyToOne relationship?",
        opts: [
          "@OneToMany(cascade=ALL) on both sides",
          '@OneToMany(mappedBy="fieldName") on the "one" side and @ManyToOne @JoinColumn on the "many" side',
          "@BidirectionalJoin on both sides",
          "@OneToMany @ManyToOne paired annotations on the same field"
        ],
        ans: 1,
        exp: "In a bidirectional relationship, the @ManyToOne side is the owner (it has @JoinColumn and the FK). The @OneToMany side is the inverse side and uses mappedBy to point to the owning field. This avoids duplicate FK columns."
      },
      {
        q: "How does HQL (Hibernate Query Language) differ from JPQL?",
        opts: [
          "HQL is a subset of JPQL",
          "HQL is Hibernate-specific and supports more features; JPQL is the JPA standard subset",
          "HQL only works with XML mapping; JPQL requires annotations",
          "They are identical"
        ],
        ans: 1,
        exp: "JPQL is the JPA standard. HQL is Hibernate's extension with extra features (e.g., update/delete queries, subqueries in FROM). Code using HQL is Hibernate-specific; JPQL code is portable across JPA implementations (EclipseLink, etc.)."
      }
    ]
  },
  {
    id: "concurrency",
    title: "Concurrency & Threads",
    category: "Multithreading",
    timeMinutes: 20,
    questions: [
      {
        q: "What is the preferred way to create a thread in modern Java?",
        opts: [
          "Extending Thread class",
          "Implementing Runnable and passing to ExecutorService",
          "Using static Thread.spawn()",
          "Annotating a method with @Thread"
        ],
        ans: 1,
        exp: "Prefer submitting Runnable/Callable to an ExecutorService rather than creating raw threads. ExecutorService manages a thread pool, handles lifecycle, and returns Futures. Extending Thread is rarely appropriate in production code."
      },
      {
        q: 'What does the "volatile" keyword guarantee in Java?',
        opts: [
          "Atomicity of compound operations",
          "Visibility \u2014 writes to a volatile variable are immediately visible to all threads",
          "Thread safety of the entire object",
          "Prevention of out-of-order execution of all instructions"
        ],
        ans: 1,
        exp: "volatile guarantees visibility \u2014 reads always see the latest write from any thread. It does NOT guarantee atomicity for compound operations (e.g., i++ requires AtomicInteger or synchronisation). It also establishes happens-before ordering for reads/writes."
      },
      {
        q: "What is a deadlock?",
        opts: [
          "A thread that runs too slowly",
          "A situation where two or more threads are waiting for each other's locks indefinitely",
          "A thread that throws an uncaught exception",
          "Memory being exhausted by too many threads"
        ],
        ans: 1,
        exp: "Deadlock occurs when Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1. Four conditions (Coffman): mutual exclusion, hold and wait, no preemption, circular wait. Break any one condition to prevent deadlock."
      },
      {
        q: "What does CountDownLatch do?",
        opts: [
          "Counts the number of threads in a pool",
          "Allows one or more threads to wait until a set of operations in other threads completes",
          "Prevents more than N threads from running concurrently",
          "Measures thread execution time"
        ],
        ans: 1,
        exp: "CountDownLatch is initialised with a count. Threads call countDown() when done; awaiting threads call await() and block until the count reaches zero. It is one-shot \u2014 cannot be reset. Use CyclicBarrier if you need to reuse the barrier."
      },
      {
        q: "What is the purpose of ReentrantLock over synchronized?",
        opts: [
          "ReentrantLock is faster in all scenarios",
          "ReentrantLock offers try-lock (non-blocking), timed locking, fairness, and interruptible locking",
          "ReentrantLock automatically detects deadlocks",
          "ReentrantLock can be shared across JVMs"
        ],
        ans: 1,
        exp: "ReentrantLock.tryLock() attempts acquisition without blocking. tryLock(timeout) adds a deadline. lockInterruptibly() allows the waiting thread to be interrupted. A fairness flag ensures FIFO ordering. Always unlock in a finally block to avoid lock leaks."
      },
      {
        q: "What does Executors.newFixedThreadPool(n) create?",
        opts: [
          "A pool with n threads that grows as needed",
          "A thread pool with exactly n threads; tasks beyond n are queued in an unbounded queue",
          "A pool that executes one task at a time",
          "A pool that schedules tasks at fixed intervals"
        ],
        ans: 1,
        exp: "newFixedThreadPool(n) creates n worker threads. Excess tasks queue in an unbounded LinkedBlockingQueue. This can cause OutOfMemoryError under high load. newCachedThreadPool() creates threads on demand; newSingleThreadExecutor() serialises all tasks."
      },
      {
        q: "What is CompletableFuture.supplyAsync() used for?",
        opts: [
          "Blocking the current thread until a result is available",
          "Running a computation asynchronously and returning a CompletableFuture to chain further operations",
          "Scheduling tasks at fixed-rate intervals",
          "Creating a thread with a named thread pool"
        ],
        ans: 1,
        exp: "supplyAsync(Supplier) runs the supplier in the common ForkJoinPool (or a provided executor) and returns a CompletableFuture. Chain thenApply, thenAccept, thenCompose for pipelines. thenCombine merges two futures. exceptionally handles errors."
      },
      {
        q: "What is ThreadLocal used for?",
        opts: [
          "Sharing data between all threads",
          "Providing each thread with its own isolated copy of a variable",
          "Synchronising access to shared variables",
          "Limiting the number of threads that can access a resource"
        ],
        ans: 1,
        exp: "ThreadLocal maintains a separate variable copy per thread. Common uses: per-request context in web applications (e.g., user context, transaction context), SimpleDateFormat (not thread-safe). Always call remove() in finally to prevent memory leaks in thread pool environments."
      },
      {
        q: "What are Java 21 Virtual Threads?",
        opts: [
          "Threads managed by the GPU",
          "Lightweight threads managed by the JVM that are cheap to create and park, enabling high-throughput I/O concurrency",
          "Threads that execute in a virtual machine separate from the JVM",
          "Green threads that map N:1 to OS threads"
        ],
        ans: 1,
        exp: "Virtual Threads (Project Loom, Java 21) are JVM-managed lightweight threads. Creating millions of them is feasible. They mount/unmount on carrier OS threads efficiently during blocking operations, dramatically improving throughput for I/O-bound tasks without reactive code complexity."
      },
      {
        q: "What is the difference between wait() and sleep()?",
        opts: [
          "sleep() releases the monitor lock; wait() does not",
          "wait() releases the object monitor and waits for notify(); sleep() pauses the thread without releasing any locks",
          "They are identical in behaviour",
          "sleep() must be called inside a synchronized block; wait() can be called anywhere"
        ],
        ans: 1,
        exp: "wait() must be called inside a synchronized block, releases the lock on the object, and waits until notified or the timeout expires. sleep() pauses the thread for a specified time but does NOT release any locks it holds."
      },
      {
        q: "Which atomic class provides thread-safe increment without synchronization?",
        opts: ["SynchronizedInteger", "VolatileInt", "AtomicInteger", "LongAdder (for increment)"],
        ans: 2,
        exp: "AtomicInteger.incrementAndGet() uses compare-and-swap (CAS) hardware instructions for lock-free thread-safe operations. LongAdder is better for high-contention counters. AtomicReference provides CAS for object references."
      },
      {
        q: "What is a race condition?",
        opts: [
          "A thread racing another thread to exit",
          "A bug where program outcome depends on the non-deterministic timing of thread execution",
          "A performance issue caused by too many threads",
          "A deadlock between two high-priority threads"
        ],
        ans: 1,
        exp: "A race condition occurs when multiple threads access shared mutable state concurrently without synchronisation, leading to unpredictable results. Example: two threads both reading i=5, both incrementing, both writing 6 instead of 7. Fix with synchronisation or atomic variables."
      },
      {
        q: "What is the happens-before relationship?",
        opts: [
          "A guarantee that thread A finishes before thread B starts",
          "A memory visibility guarantee \u2014 if action A happens-before B, B sees all effects of A",
          "A performance guarantee that certain operations run in order",
          "A scheduling priority between threads"
        ],
        ans: 1,
        exp: "The happens-before relationship (Java Memory Model) guarantees that memory writes in one thread are visible to reads in another. Examples: monitor unlock HB monitor lock; volatile write HB volatile read; thread start HB all actions in the thread."
      },
      {
        q: "What does Semaphore control in Java concurrency?",
        opts: [
          "The number of threads in the JVM",
          "The number of threads that can simultaneously access a resource (permits)",
          "The priority of threads in a pool",
          "The timeout for blocking operations"
        ],
        ans: 1,
        exp: "A Semaphore maintains a set of permits. acquire() blocks until a permit is available; release() returns a permit. It's used to limit concurrent access to resources (e.g., max 10 database connections). Semaphore(1) acts like a mutex."
      },
      {
        q: "What happens when you call future.get() on a CompletableFuture?",
        opts: [
          "It cancels the computation",
          "It blocks the calling thread until the result is available, then returns it",
          "It immediately returns null if not complete",
          "It runs the computation synchronously on the calling thread"
        ],
        ans: 1,
        exp: "get() blocks the current thread until the CompletableFuture completes. It throws ExecutionException (wrapping the cause) if the computation threw an exception, and InterruptedException if interrupted. get(timeout, unit) adds a deadline. Use join() for unchecked exception semantics."
      }
    ]
  },
  {
    id: "microservices-quiz",
    title: "Microservices Patterns",
    category: "Microservices",
    timeMinutes: 20,
    questions: [
      {
        q: "What is the primary advantage of microservices over a monolith?",
        opts: [
          "Microservices are always faster",
          "Independent deployability, scalability, and team autonomy per service",
          "Microservices eliminate all distributed systems problems",
          "Microservices require less infrastructure"
        ],
        ans: 1,
        exp: "Microservices allow each service to be independently deployed, scaled, and developed by autonomous teams. Trade-offs include increased operational complexity, network latency, and distributed systems challenges (eventual consistency, partial failure)."
      },
      {
        q: "What is the role of an API Gateway in microservices?",
        opts: [
          "Directly manages the database for all services",
          "Acts as a single entry point that handles routing, authentication, rate limiting, and cross-cutting concerns",
          "Replaces all service-to-service communication",
          "Stores session state for all services"
        ],
        ans: 1,
        exp: "API Gateway (e.g., Spring Cloud Gateway, Kong) provides a unified entry point for clients. It handles cross-cutting concerns: routing, authentication, SSL termination, rate limiting, request aggregation, and observability \u2014 avoiding duplication in each service."
      },
      {
        q: "What is the Circuit Breaker pattern?",
        opts: [
          "A pattern to shut down a service gracefully",
          "A fault-tolerance pattern that stops calling a failing service and returns a fallback response, allowing the service time to recover",
          "A pattern for splitting a monolith into microservices",
          "A load-balancing algorithm"
        ],
        ans: 1,
        exp: "Circuit Breaker (implemented by Resilience4j) monitors failures. When failure rate exceeds a threshold, it opens and stops calls (preventing cascade failures). After a wait, it half-opens to probe recovery. States: Closed (normal), Open (failing), Half-Open (probing)."
      },
      {
        q: "What is service discovery and why is it needed?",
        opts: [
          "A process to find available microservices documentation",
          "A mechanism allowing services to find each other's network locations dynamically without hardcoded addresses",
          "A load balancer that discovers the best server",
          "A security mechanism to verify service identities"
        ],
        ans: 1,
        exp: "In dynamic cloud environments, service instances start/stop with changing IPs. Service discovery (e.g., Netflix Eureka, Consul) maintains a registry where services register themselves and clients query for locations. Spring Cloud integrates with Eureka for client-side discovery."
      },
      {
        q: "What is the Saga pattern used for?",
        opts: [
          "Optimising database queries across services",
          "Managing distributed transactions across multiple services using a sequence of local transactions with compensating actions",
          "Encrypting inter-service communication",
          "Aggregating data from multiple services"
        ],
        ans: 1,
        exp: "The Saga pattern handles distributed transactions without a 2PC (two-phase commit). Each step performs a local transaction; on failure, compensating transactions undo previous steps. Two styles: Choreography (events) and Orchestration (central coordinator)."
      },
      {
        q: "What is Event Sourcing?",
        opts: [
          "Publishing events to message queues",
          "Storing state as a sequence of immutable events rather than the current state snapshot",
          "Sourcing events from external APIs",
          "A pattern for load balancing event-driven systems"
        ],
        ans: 1,
        exp: "Event Sourcing stores every state change as an immutable event. Current state is derived by replaying events. Benefits: full audit trail, temporal queries, easy debugging. Paired with CQRS. Complexity: event schema evolution, eventual consistency."
      },
      {
        q: "What is CQRS?",
        opts: [
          "Command Query Responsibility Segregation \u2014 separating read and write models for scalability and clarity",
          "Concurrent Query Resource Synchronisation",
          "A caching strategy for microservices",
          "A message broker protocol"
        ],
        ans: 0,
        exp: "CQRS separates the write model (commands that change state) from the read model (queries that return data). Read models can be denormalised and cached for performance. Often combined with Event Sourcing. Adds complexity \u2014 only use when clear benefits exist."
      },
      {
        q: "What does the 12-Factor App methodology define?",
        opts: [
          "12 security best practices for APIs",
          "A set of best practices for building scalable, maintainable, cloud-native applications",
          "12 required microservices in any architecture",
          "A deployment checklist for Docker containers"
        ],
        ans: 1,
        exp: "The 12-Factor App defines: codebase, dependencies, config (in environment), backing services, build/release/run, processes, port binding, concurrency, disposability, dev/prod parity, logs, and admin processes. It enables portable, scalable cloud applications."
      },
      {
        q: "What is distributed tracing and which tool implements it?",
        opts: [
          "Logging errors across services; implemented with ELK Stack",
          "Tracking a request as it flows across multiple services using a correlation trace ID; implemented by Zipkin, Jaeger, or OpenTelemetry",
          "Monitoring CPU usage across containers",
          "Tracing database queries in distributed systems"
        ],
        ans: 1,
        exp: "Distributed tracing tracks a request across service boundaries using a unique Trace ID propagated in headers. Each service creates Spans. Tools like Zipkin, Jaeger, and OpenTelemetry visualise the complete request flow, latencies, and failures."
      },
      {
        q: "Which communication style is best for loosely coupled, asynchronous inter-service communication?",
        opts: [
          "Synchronous REST over HTTP",
          "gRPC streaming",
          "Message-based communication using a broker like Kafka or RabbitMQ",
          "Shared database"
        ],
        ans: 2,
        exp: "Message brokers decouple producers and consumers in time and space. Producers publish events; consumers process them asynchronously. This improves resilience (consumer down doesn't fail the producer) and scalability. Kafka is preferred for high-throughput event streaming; RabbitMQ for task queues."
      },
      {
        q: "What is the Strangler Fig pattern?",
        opts: [
          "A pattern for destroying legacy systems immediately",
          "An incremental migration pattern where new functionality is built as microservices while the monolith is gradually replaced",
          "A security pattern to detect malicious services",
          "A deployment pattern for zero-downtime releases"
        ],
        ans: 1,
        exp: 'Strangler Fig (named after the tree) incrementally migrates a monolith. New features go to microservices; old functionality is progressively moved out of the monolith. An API Gateway routes traffic. This reduces migration risk compared to a "big bang" rewrite.'
      },
      {
        q: "What is idempotency in the context of microservices?",
        opts: [
          "The ability to process requests in parallel",
          "Ensuring that performing the same operation multiple times produces the same result as doing it once",
          "A security property preventing replay attacks",
          "Caching responses to reduce duplicate processing"
        ],
        ans: 1,
        exp: "Idempotency is critical for retry safety in distributed systems. HTTP GET, PUT, DELETE are idempotent by spec; POST is not. Use idempotency keys (client-generated IDs stored server-side) to safely retry payments or orders without duplication."
      },
      {
        q: "What is a sidecar pattern in microservices?",
        opts: [
          "A helper service running in a separate container alongside the main service, providing cross-cutting capabilities",
          "A pattern for splitting a service into two halves",
          "A backup service that takes over when the main service fails",
          "A caching layer attached to each service"
        ],
        ans: 0,
        exp: "The Sidecar pattern deploys a helper container alongside the main application container in the same pod (Kubernetes). The sidecar handles concerns like logging, service mesh communication (Envoy), configuration, and security \u2014 without modifying the main service."
      },
      {
        q: "What is Blue-Green deployment?",
        opts: [
          "Deploying to two different cloud providers simultaneously",
          "Maintaining two identical production environments; traffic is switched from Blue (current) to Green (new) for zero-downtime releases",
          "Using two databases for redundancy",
          "A pattern for A/B testing features"
        ],
        ans: 1,
        exp: "Blue-Green deployment maintains two identical environments. Blue is live; Green receives the new version. After testing, traffic switches instantly (via load balancer/DNS). If issues arise, roll back by switching back to Blue. Zero downtime, instant rollback."
      },
      {
        q: "Which problem does the Database-per-Service pattern in microservices address?",
        opts: [
          "It reduces the number of databases needed",
          "It ensures service autonomy, independent schema evolution, and technology choice per service",
          "It provides a centralised data store for all services to query",
          "It simplifies cross-service joins"
        ],
        ans: 1,
        exp: "Database-per-Service is a core microservices principle. Each service owns its data, preventing tight coupling. Services cannot directly access each other's databases. Cross-service data needs are handled through APIs or events. This enables independent scaling and schema changes."
      },
      {
        q: "What is the purpose of a health check endpoint in microservices?",
        opts: [
          "To provide API documentation",
          "To report the service's operational status to load balancers, orchestrators, and monitoring systems",
          "To check the health of the database only",
          "To verify SSL certificates are valid"
        ],
        ans: 1,
        exp: "Health check endpoints (/health, /actuator/health) report liveness (is the service running?) and readiness (is the service ready to receive traffic?). Kubernetes uses these for pod lifecycle management. Spring Boot Actuator provides these out of the box."
      },
      {
        q: "What is the purpose of a service mesh (e.g., Istio)?",
        opts: [
          "Providing a message broker for services",
          "Managing inter-service communication with traffic control, observability, mTLS, and retries at the infrastructure level",
          "A replacement for the API Gateway",
          "Orchestrating containers across nodes"
        ],
        ans: 1,
        exp: "A service mesh (Istio, Linkerd) uses sidecars (Envoy proxies) to manage all service-to-service traffic. It provides: mutual TLS, traffic routing, circuit breaking, retries, load balancing, and distributed tracing \u2014 all without changing application code."
      },
      {
        q: 'What does "eventual consistency" mean in distributed systems?',
        opts: [
          "The system becomes consistent after a fixed time interval",
          "Given no new updates, all replicas will converge to the same value eventually, though temporarily inconsistent",
          "Consistency is eventually enforced by a central authority",
          "Transactions are eventually committed to all databases"
        ],
        ans: 1,
        exp: "Eventual consistency (BASE model) accepts that distributed replicas may temporarily diverge but will converge given sufficient time and no new updates. Contrasts with strong consistency (ACID). Accept eventual consistency for high availability; use compensating actions for conflicts."
      }
    ]
  },
  {
    id: "design-patterns-quiz",
    title: "Design Patterns",
    category: "Design Patterns",
    timeMinutes: 18,
    questions: [
      {
        q: "Which design pattern ensures only one instance of a class exists throughout the application?",
        opts: ["Factory", "Prototype", "Singleton", "Builder"],
        ans: 2,
        exp: "Singleton restricts instantiation to one object. Implement with a private constructor, private static instance, and a public static getInstance() method. Use enum Singleton for thread-safety by default. @Component beans in Spring are Singletons by default."
      },
      {
        q: "Which pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable?",
        opts: ["Template Method", "Command", "Strategy", "State"],
        ans: 2,
        exp: "The Strategy pattern defines an interface for an algorithm family and lets clients switch implementations at runtime. Example: sorting strategies (BubbleSort, QuickSort) behind a Sorter interface. Replaces if-else chains with polymorphism."
      },
      {
        q: "What problem does the Builder pattern solve?",
        opts: [
          "Creating objects with many optional parameters without telescoping constructors",
          "Creating a family of related objects",
          "Providing an interface to a complex subsystem",
          "Ensuring only one object is created"
        ],
        ans: 0,
        exp: "Builder avoids telescoping constructors (many constructor overloads). It provides a fluent API to set optional parameters and then build() the object. Lombok's @Builder auto-generates this. Java's StringBuilder and Stream.Builder are examples."
      },
      {
        q: "What is the Observer pattern?",
        opts: [
          "An object observing its own state changes",
          "A one-to-many dependency where subjects notify observers automatically when their state changes",
          "A pattern for monitoring performance metrics",
          "A pattern for logging method calls"
        ],
        ans: 1,
        exp: "Observer (Publish-Subscribe) defines a Subject that maintains a list of Observers. When Subject's state changes, it notifies all Observers. Used in event systems, MVC (Model notifies View), Java's PropertyChangeListener, and reactive streams."
      },
      {
        q: "What does the Decorator pattern do?",
        opts: [
          "Adds new responsibilities to an object dynamically without modifying its class",
          "Creates new subclasses for each feature combination",
          "Converts the interface of a class to another interface",
          "Provides a simplified interface to a complex subsystem"
        ],
        ans: 0,
        exp: "Decorator wraps an object to add behaviour. Java I/O streams heavily use this: new BufferedInputStream(new FileInputStream(...)) wraps FileInputStream with buffering. Preferred over subclassing for adding optional features."
      },
      {
        q: "Which pattern converts the interface of a class to another interface the client expects?",
        opts: ["Facade", "Proxy", "Adapter", "Bridge"],
        ans: 2,
        exp: "The Adapter pattern acts as a translator between incompatible interfaces. Example: wrapping a legacy XML API to work with a modern JSON client. Java's Arrays.asList() adapts an array to List. Object Adapter uses composition; Class Adapter uses inheritance."
      },
      {
        q: "What is the Factory Method pattern?",
        opts: [
          "A single factory class creating all objects",
          "Defining an interface for creating an object but letting subclasses decide which class to instantiate",
          "Creating a complex object step by step",
          "An interface for creating families of related objects"
        ],
        ans: 1,
        exp: "Factory Method defines a creator interface with a factory method. Subclasses override it to create specific products. Example: LoggerFactory.getLogger() returns different Logger implementations. Differs from Abstract Factory which creates families of related products."
      },
      {
        q: "What is the Proxy pattern used for?",
        opts: [
          "Converting one interface to another",
          "Providing a surrogate that controls access to another object, adding lazy init, caching, security, or remote access",
          "Simplifying a complex system's interface",
          "Decoupling abstraction from implementation"
        ],
        ans: 1,
        exp: "Proxy controls access to the real object. Types: Virtual Proxy (lazy init \u2014 create expensive object only when needed), Protection Proxy (access control), Remote Proxy (RMI/web service stub), Caching Proxy. Spring AOP uses dynamic proxies extensively."
      },
      {
        q: "What does the Facade pattern provide?",
        opts: [
          "A way to add features dynamically",
          "A unified, simplified interface to a complex subsystem",
          "An alternative interface for incompatible classes",
          "A template for reusable algorithms"
        ],
        ans: 1,
        exp: "Facade hides subsystem complexity behind a simple interface. Example: A HomeTheaterFacade.watchMovie() coordinates Amplifier, DVD, Projector, Lights. It doesn't prevent access to subsystems directly \u2014 it just provides a simpler entry point."
      },
      {
        q: "What is the Template Method pattern?",
        opts: [
          "A method that creates template objects",
          "Defining the skeleton of an algorithm in a base class, deferring specific steps to subclasses",
          "A method that uses lambda expressions as templates",
          "A factory for creating method references"
        ],
        ans: 1,
        exp: `Template Method defines the algorithm structure (template method) in the abstract class. Specific steps are abstract or hook methods implemented by subclasses. The "don't call us, we'll call you" Hollywood principle. Spring's JdbcTemplate is a classic example.`
      },
      {
        q: "Which creational pattern creates objects by cloning an existing object?",
        opts: ["Singleton", "Factory Method", "Builder", "Prototype"],
        ans: 3,
        exp: "Prototype creates new objects by cloning (copying) an existing instance. Java's Cloneable interface and clone() method support this. Useful when object creation is expensive (e.g., complex DB queries) and you want copies with minor variations."
      },
      {
        q: "What is the Command pattern?",
        opts: [
          "Encapsulates a request as an object, enabling undo/redo, queuing, and logging of operations",
          "Defines the interface for executing commands",
          "Routes commands to the correct handler",
          "Chains multiple operations into a pipeline"
        ],
        ans: 0,
        exp: "Command encapsulates a request as an object with execute() and optionally undo(). This decouples the sender from the receiver. Use cases: undo/redo in text editors, transaction queuing, macro recording, job scheduling."
      },
      {
        q: "The Composite pattern is best used when:",
        opts: [
          "You need to create a single object from multiple parts",
          "You need to treat individual objects and compositions of objects uniformly (tree structures)",
          "You need to add behaviour to individual objects",
          "You need to convert between two different hierarchies"
        ],
        ans: 1,
        exp: 'Composite composes objects into tree structures (part-whole hierarchies). Both leaf nodes and composite nodes implement the same Component interface, so clients treat them uniformly. Examples: file system (File and Directory both are "FileSystemItem"), GUI component hierarchies.'
      },
      {
        q: "What is the Iterator pattern?",
        opts: [
          "A way to iterate over a collection without knowing its internal structure",
          "An algorithm for sorting collections",
          "A pattern for lazy evaluation of sequences",
          "A thread-safe way to access shared collections"
        ],
        ans: 0,
        exp: "Iterator provides a standard way to sequentially access elements of a collection without exposing its implementation. Java's java.util.Iterator interface and enhanced for-each loop use this pattern. It decouples traversal logic from the collection."
      },
      {
        q: "What is the difference between Abstract Factory and Factory Method?",
        opts: [
          "Factory Method creates one product; Abstract Factory creates a family of related products",
          "Abstract Factory uses a single method; Factory Method uses multiple factories",
          "Factory Method is for creating complex objects; Abstract Factory is for simple ones",
          "They are the same pattern with different names"
        ],
        ans: 0,
        exp: "Factory Method has one factory method in an abstract creator for one product type. Abstract Factory provides an interface for creating families of related products (e.g., GUIFactory with createButton() and createCheckbox() for Windows vs Mac UI families)."
      },
      {
        q: "Which design pattern is the foundation of Spring's dependency injection?",
        opts: ["Singleton", "Factory", "Inversion of Control (IoC) / Dependency Injection", "Proxy"],
        ans: 2,
        exp: "Spring is built on IoC/DI. Rather than objects creating their own dependencies, they declare what they need and the IoC container (Spring ApplicationContext) injects them. Spring also uses Factory (BeanFactory), Singleton (default scope), Proxy (AOP), and Template Method (JdbcTemplate)."
      },
      {
        q: "What is the Chain of Responsibility pattern?",
        opts: [
          "Each request is handled by exactly one handler",
          "A chain of handlers where each can handle the request or pass it to the next handler in the chain",
          "Handlers execute in parallel to handle a request",
          "A priority queue of handlers"
        ],
        ans: 1,
        exp: "Chain of Responsibility decouples senders from receivers. Each handler has a reference to the next. A handler either handles the request or forwards it. Examples: HTTP servlet filters, Java exception handling (catch blocks), Spring Security filter chain."
      },
      {
        q: "When is the Flyweight pattern useful?",
        opts: [
          "When you need lightweight objects that delegate to heavier objects",
          "When you need to efficiently support a large number of fine-grained objects by sharing common state",
          "When you need to fly over implementation details",
          "For creating lightweight alternatives to heavy classes"
        ],
        ans: 1,
        exp: "Flyweight minimises memory by sharing intrinsic (shared, immutable) state across many objects. Extrinsic (context-specific) state is passed in. Classic example: Java's String pool, Integer cache (-128 to 127), character rendering in text editors with millions of characters."
      },
      {
        q: "What does the State pattern model?",
        opts: [
          "The current state of a database record",
          "An object that changes its behaviour when its internal state changes, appearing to change its class",
          "A snapshot of an object's state for undo functionality",
          "The configuration state of an application"
        ],
        ans: 1,
        exp: "State encapsulates state-specific behaviour in State objects. The Context delegates to the current State. Transitions happen by changing the State object. Example: a traffic light with Red/Green/Yellow states, each with different behavior. Avoids large if-else or switch statements."
      },
      {
        q: "What is the Memento pattern used for?",
        opts: [
          "Observing state changes in an object",
          "Capturing and storing an object's internal state so it can be restored later (undo/rollback)",
          "Sharing state between multiple objects",
          "Converting object state to a serializable format"
        ],
        ans: 1,
        exp: "Memento captures an object's internal state (without violating encapsulation) and stores it in a Memento object. The Caretaker holds mementos for undo. Examples: text editor undo, game save points, transaction rollback. The Originator creates and restores from mementos."
      }
    ]
  }
];
function getAssessment(id) {
  return ASSESSMENTS.find((a) => a.id === id);
}

// src/app/features/assessments/assess-quiz.component.ts
function AssessQuizComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275element(4, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.currentIdx() + 1, " / ", (tmp_1_0 = ctx_r0.quiz()) == null ? null : tmp_1_0.questions == null ? null : tmp_1_0.questions.length);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPct(), "%");
    \u0275\u0275advance();
    \u0275\u0275classProp("timer-warn", ctx_r0.timeLeft() <= 60 && ctx_r0.timeLeft() > 30)("timer-danger", ctx_r0.timeLeft() <= 30);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(ctx_r0.timeLeft()), " ");
  }
}
function AssessQuizComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 14);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 17);
    \u0275\u0275text(8, "Test your knowledge with timed multiple-choice questions. Each question has one correct answer.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 19);
    \u0275\u0275element(11, "i", 20);
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15, "Questions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 23);
    \u0275\u0275elementStart(17, "div", 19);
    \u0275\u0275element(18, "i", 24);
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 22);
    \u0275\u0275text(22, "Minutes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 23);
    \u0275\u0275elementStart(24, "div", 19);
    \u0275\u0275element(25, "i", 25);
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27, "\u221E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 22);
    \u0275\u0275text(29, "Retakes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 26)(31, "div", 27);
    \u0275\u0275element(32, "i", 28);
    \u0275\u0275text(33, " Read each question carefully before selecting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 27);
    \u0275\u0275element(35, "i", 28);
    \u0275\u0275text(36, " You can navigate back to review answers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 27);
    \u0275\u0275element(38, "i", 28);
    \u0275\u0275text(39, " Explanations shown after submission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 29);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_7_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startQuiz());
    });
    \u0275\u0275element(41, "i", 30);
    \u0275\u0275text(42, " Start Quiz ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.meta == null ? null : ctx_r0.meta.iconBg);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.meta == null ? null : ctx_r0.meta.faIcon);
    \u0275\u0275styleProp("color", ctx_r0.meta == null ? null : ctx_r0.meta.iconColor);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", ctx_r0.meta == null ? null : ctx_r0.meta.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meta == null ? null : ctx_r0.meta.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.quiz()) == null ? null : tmp_6_0.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.quiz()) == null ? null : tmp_7_0.questions == null ? null : tmp_7_0.questions.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r0.quiz()) == null ? null : tmp_8_0.timeMinutes);
    \u0275\u0275advance(20);
    \u0275\u0275styleProp("--ac", ctx_r0.meta == null ? null : ctx_r0.meta.accentColor);
  }
}
function AssessQuizComponent_Conditional_8_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 48);
  }
}
function AssessQuizComponent_Conditional_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_8_For_8_Template_button_click_0_listener() {
      const $index_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectOption($index_r5));
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssessQuizComponent_Conditional_8_For_8_Conditional_5_Template, 1, 0, "i", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--ac", ctx_r0.meta == null ? null : ctx_r0.meta.accentColor);
    \u0275\u0275classProp("opt-selected", ctx_r0.answers()[ctx_r0.currentIdx()] === $index_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.letters[$index_r5]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.answers()[ctx_r0.currentIdx()] === $index_r5 ? 5 : -1);
  }
}
function AssessQuizComponent_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_8_For_15_Template_div_click_0_listener() {
      const $index_r8 = \u0275\u0275restoreView(_r7).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goTo($index_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r8 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("q-dot-answered", ctx_r0.answers()[$index_r8] !== -1)("q-dot-current", ctx_r0.currentIdx() === $index_r8);
  }
}
function AssessQuizComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_8_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.next());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--ac", ctx_r0.meta == null ? null : ctx_r0.meta.accentColor);
  }
}
function AssessQuizComponent_Conditional_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_8_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(1, " Submit ");
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--ac", ctx_r0.meta == null ? null : ctx_r0.meta.accentColor);
  }
}
function AssessQuizComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 31)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275repeaterCreate(7, AssessQuizComponent_Conditional_8_For_8_Template, 6, 7, "button", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "button", 37);
    \u0275\u0275listener("click", function AssessQuizComponent_Conditional_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prev());
    });
    \u0275\u0275element(11, "i", 38);
    \u0275\u0275text(12, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39);
    \u0275\u0275repeaterCreate(14, AssessQuizComponent_Conditional_8_For_15_Template, 1, 4, "div", 40, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, AssessQuizComponent_Conditional_8_Conditional_16_Template, 3, 2, "button", 41)(17, AssessQuizComponent_Conditional_8_Conditional_17_Template, 3, 2, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 43);
    \u0275\u0275element(19, "i", 44);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Question ", ctx_r0.currentIdx() + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.currentQ()) == null ? null : tmp_2_0.q);
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_3_0 = ctx_r0.currentQ()) == null ? null : tmp_3_0.opts);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.currentIdx() === 0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater((tmp_5_0 = ctx_r0.quiz()) == null ? null : tmp_5_0.questions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.currentIdx() < (((tmp_6_0 = ctx_r0.quiz()) == null ? null : tmp_6_0.questions == null ? null : tmp_6_0.questions.length) ?? 1) - 1 ? 16 : 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.answeredCount(), " of ", (tmp_7_0 = ctx_r0.quiz()) == null ? null : tmp_7_0.questions == null ? null : tmp_7_0.questions.length, " answered ");
  }
}
var META = {
  "java-basics": { faIcon: "fa-solid fa-mug-hot", iconColor: "#f59e0b", iconBg: "rgba(245,158,11,0.14)", accentColor: "#f59e0b", difficulty: "beginner" },
  "oop-concepts": { faIcon: "fa-solid fa-cubes", iconColor: "#10b981", iconBg: "rgba(16,185,129,0.14)", accentColor: "#10b981", difficulty: "beginner" },
  "collections": { faIcon: "fa-solid fa-layer-group", iconColor: "#22d3ee", iconBg: "rgba(34,211,238,0.14)", accentColor: "#22d3ee", difficulty: "intermediate" },
  "spring-boot-quiz": { faIcon: "fa-solid fa-leaf", iconColor: "#34d399", iconBg: "rgba(52,211,153,0.14)", accentColor: "#34d399", difficulty: "intermediate" },
  "hibernate-quiz": { faIcon: "fa-solid fa-database", iconColor: "#f97316", iconBg: "rgba(249,115,22,0.14)", accentColor: "#f97316", difficulty: "intermediate" },
  "concurrency": { faIcon: "fa-solid fa-bolt", iconColor: "#eab308", iconBg: "rgba(234,179,8,0.14)", accentColor: "#eab308", difficulty: "advanced" },
  "microservices-quiz": { faIcon: "fa-solid fa-diagram-project", iconColor: "#8b5cf6", iconBg: "rgba(139,92,246,0.14)", accentColor: "#8b5cf6", difficulty: "advanced" },
  "design-patterns-quiz": { faIcon: "fa-solid fa-puzzle-piece", iconColor: "#ec4899", iconBg: "rgba(236,72,153,0.14)", accentColor: "#ec4899", difficulty: "intermediate" }
};
var AssessQuizComponent = class _AssessQuizComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  svc = inject(AssessService);
  letters = ["A", "B", "C", "D"];
  quiz = signal(void 0, ...ngDevMode ? [{ debugName: "quiz" }] : []);
  phase = signal("start", ...ngDevMode ? [{ debugName: "phase" }] : []);
  currentIdx = signal(0, ...ngDevMode ? [{ debugName: "currentIdx" }] : []);
  timeLeft = signal(0, ...ngDevMode ? [{ debugName: "timeLeft" }] : []);
  meta;
  timerInterval = null;
  answers = this.svc.answers;
  currentQ = computed(() => this.quiz()?.questions[this.currentIdx()], ...ngDevMode ? [{ debugName: "currentQ" }] : []);
  progressPct = computed(() => {
    const total = this.quiz()?.questions.length ?? 1;
    return Math.round((this.currentIdx() + 1) / total * 100);
  }, ...ngDevMode ? [{ debugName: "progressPct" }] : []);
  answeredCount = computed(() => this.answers().filter((a) => a !== -1).length, ...ngDevMode ? [{ debugName: "answeredCount" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get("id") ?? "";
      const data = getAssessment(id);
      this.quiz.set(data);
      this.meta = META[id];
      if (data) {
        this.timeLeft.set(data.timeMinutes * 60);
        this.svc.startQuiz(data.questions.length);
      }
    });
  }
  startQuiz() {
    this.phase.set("quiz");
    this.startTimer();
  }
  startTimer() {
    this.timerInterval = setInterval(() => {
      const left = this.timeLeft() - 1;
      this.timeLeft.set(left);
      if (left <= 0)
        this.submit();
    }, 1e3);
  }
  selectOption(optIdx) {
    this.svc.setAnswer(this.currentIdx(), optIdx);
  }
  prev() {
    if (this.currentIdx() > 0)
      this.currentIdx.update((i) => i - 1);
  }
  next() {
    const max = (this.quiz()?.questions.length ?? 1) - 1;
    if (this.currentIdx() < max)
      this.currentIdx.update((i) => i + 1);
  }
  goTo(idx) {
    this.currentIdx.set(idx);
  }
  submit() {
    this.stopTimer();
    const q = this.quiz();
    const elapsed = q.timeMinutes * 60 - this.timeLeft();
    this.svc.submitQuiz(q.id, q.title, q.category, q.questions, elapsed);
    this.router.navigate(["/assessments", q.id, "result"]);
  }
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  static \u0275fac = function AssessQuizComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssessQuizComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssessQuizComponent, selectors: [["app-assess-quiz"]], decls: 9, vars: 3, consts: [[1, "ion-no-border"], [1, "quiz-toolbar"], ["slot", "start"], ["defaultHref", "/assessments", "text", "", "color", "light"], [1, "quiz-content"], [1, "quiz-wrapper"], [1, "start-screen"], [1, "quiz-screen"], [1, "toolbar-progress"], [1, "toolbar-q-num"], [1, "toolbar-bar"], [1, "toolbar-bar-fill"], ["slot", "end", 1, "timer-chip"], [1, "fa-regular", "fa-clock"], [1, "start-icon-wrap"], [1, "diff-pill"], [1, "start-title"], [1, "start-sub"], [1, "start-stats"], [1, "start-stat"], [1, "fa-solid", "fa-pen", "start-stat-icon"], [1, "start-stat-val"], [1, "start-stat-lbl"], [1, "start-stat-div"], [1, "fa-regular", "fa-clock", "start-stat-icon"], [1, "fa-solid", "fa-rotate", "start-stat-icon"], [1, "start-tips"], [1, "tip"], [1, "fa-solid", "fa-circle-info", "tip-icon"], [1, "btn-start", 3, "click"], [1, "fa-solid", "fa-play"], [1, "q-card"], [1, "q-label"], [1, "q-text"], [1, "options-list"], [1, "opt-btn", 3, "opt-selected", "--ac"], [1, "nav-row"], [1, "btn-nav", "btn-prev", 3, "click", "disabled"], [1, "fa-solid", "fa-chevron-left"], [1, "q-dots"], [1, "q-dot", 3, "q-dot-answered", "q-dot-current"], [1, "btn-nav", "btn-next", 3, "--ac"], [1, "btn-nav", "btn-submit", 3, "--ac"], [1, "answered-info"], [1, "fa-solid", "fa-circle-check", "answered-icon"], [1, "opt-btn", 3, "click"], [1, "opt-letter"], [1, "opt-text"], [1, "fa-solid", "fa-circle-check", "opt-check"], [1, "q-dot", 3, "click"], [1, "btn-nav", "btn-next", 3, "click"], [1, "fa-solid", "fa-chevron-right"], [1, "btn-nav", "btn-submit", 3, "click"], [1, "fa-solid", "fa-check"]], template: function AssessQuizComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, AssessQuizComponent_Conditional_4_Template, 8, 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "ion-content", 4)(6, "div", 5);
      \u0275\u0275conditionalCreate(7, AssessQuizComponent_Conditional_7_Template, 43, 13, "div", 6);
      \u0275\u0275conditionalCreate(8, AssessQuizComponent_Conditional_8_Template, 21, 6, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.phase() === "quiz" ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.phase() === "start" ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phase() === "quiz" ? 8 : -1);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], styles: ["\n\n.quiz-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --border-style: none;\n}\n.quiz-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.quiz-wrapper[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 24px 16px 100px;\n}\n.toolbar-progress[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 0 8px;\n}\n.toolbar-q-num[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.06em;\n}\n.toolbar-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.toolbar-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #a78bfa);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.timer-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 4px 12px;\n  margin-right: 8px;\n  transition: all 0.3s ease;\n}\n.timer-warn[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.3);\n  background: rgba(245, 158, 11, 0.08);\n}\n.timer-danger[_ngcontent-%COMP%] {\n  color: #f87171;\n  border-color: rgba(248, 113, 113, 0.3);\n  background: rgba(248, 113, 113, 0.08);\n}\n.start-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 16px;\n}\n.start-icon-wrap[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  margin-bottom: 16px;\n}\n.diff-pill[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-bottom: 14px;\n}\n.diff-pill[data-d=beginner][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-pill[data-d=intermediate][_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-pill[data-d=advanced][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.start-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 10px;\n}\n.start-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 24px;\n  max-width: 300px;\n}\n.start-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 16px 24px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.start-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.start-stat-icon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #8b5cf6;\n  display: block;\n  margin-bottom: 4px;\n}\n.start-stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.start-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.start-stat-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.start-tips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n  margin-bottom: 28px;\n}\n.tip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.75rem;\n  color: #64748b;\n  text-align: left;\n}\n.tip-icon[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.65rem;\n  flex-shrink: 0;\n}\n.btn-start[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 16px;\n  background: var(--ac, #8b5cf6);\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 800;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: 0.01em;\n}\n.btn-start[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-start[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.quiz-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.q-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 20px;\n}\n.q-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #8b5cf6;\n  margin-bottom: 10px;\n}\n.q-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.55;\n  margin: 0;\n}\n.options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.opt-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.opt-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #e2e8f0;\n}\n.opt-selected[_ngcontent-%COMP%] {\n  background: rgba(from var(--ac, #8b5cf6) r g b / 0.12) !important;\n  border-color: var(--ac, #8b5cf6) !important;\n  color: #e2e8f0 !important;\n}\n.opt-letter[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.opt-selected[_ngcontent-%COMP%]   .opt-letter[_ngcontent-%COMP%] {\n  background: var(--ac, #8b5cf6);\n  border-color: var(--ac, #8b5cf6);\n  color: white;\n}\n.opt-text[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.opt-check[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--ac, #8b5cf6);\n  flex-shrink: 0;\n}\n.nav-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.btn-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  border: none;\n}\n.btn-prev[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #64748b;\n}\n.btn-prev[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n}\n.btn-prev[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.btn-next[_ngcontent-%COMP%] {\n  background: var(--ac, #8b5cf6);\n  color: white;\n}\n.btn-next[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.q-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex: 1;\n  padding: 0 4px;\n}\n.q-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.q-dot-answered[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.5);\n  border-color: rgba(139, 92, 246, 0.6);\n}\n.q-dot-current[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n  border-color: #8b5cf6;\n  transform: scale(1.3);\n}\n.answered-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.answered-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 0.65rem;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .quiz-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .quiz-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .quiz-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .quiz-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .toolbar-bar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .toolbar-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .toolbar-bar-fill[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .toolbar-bar-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #40916C);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .toolbar-q-num[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .toolbar-q-num[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .timer-chip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .timer-chip[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .timer-warn[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .timer-warn[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .timer-danger[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .timer-danger[_ngcontent-%COMP%] {\n  color: #f87171;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-screen[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-screen[_ngcontent-%COMP%] {\n  background: transparent;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-sub[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-sub[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-stats[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-stats[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-stat-val[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-stat-val[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-stat-lbl[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-stat-lbl[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-stat-div[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-stat-div[_ngcontent-%COMP%] {\n  background: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .start-stat-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .start-stat-icon[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tip[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tip[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tip-icon[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tip-icon[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-label[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-label[_ngcontent-%COMP%] {\n  color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .opt-btn[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .opt-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .opt-btn[_ngcontent-%COMP%]:hover, html:not(.dark)   [_nghost-%COMP%]   .opt-btn[_ngcontent-%COMP%]:hover {\n  background: #F5F7F2;\n  border-color: #B7CCBB;\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .opt-letter[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .opt-letter[_ngcontent-%COMP%] {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n  color: #8A9B8F;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .opt-text[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .opt-text[_ngcontent-%COMP%] {\n  color: inherit;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-prev[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .btn-prev[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .btn-prev[_ngcontent-%COMP%]:hover:not(:disabled), html:not(.dark)   [_nghost-%COMP%]   .btn-prev[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #F5F7F2;\n  color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-dot[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-dot[_ngcontent-%COMP%] {\n  background: #D6DDD2;\n  border-color: #D6DDD2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-dot-answered[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-dot-answered[_ngcontent-%COMP%] {\n  background: rgba(27, 67, 50, 0.4);\n  border-color: rgba(27, 67, 50, 0.5);\n}\nhtml:not(.dark)[_nghost-%COMP%]   .q-dot-current[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .q-dot-current[_ngcontent-%COMP%] {\n  background: #1B4332;\n  border-color: #1B4332;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .answered-info[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .answered-info[_ngcontent-%COMP%] {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=assess-quiz.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssessQuizComponent, [{
    type: Component,
    args: [{ selector: "app-assess-quiz", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="quiz-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" color="light"></ion-back-button>
        </ion-buttons>
        @if (phase() === 'quiz') {
          <div class="toolbar-progress">
            <span class="toolbar-q-num">{{ currentIdx() + 1 }} / {{ quiz()?.questions?.length }}</span>
            <div class="toolbar-bar">
              <div class="toolbar-bar-fill" [style.width.%]="progressPct()"></div>
            </div>
          </div>
          <div slot="end" class="timer-chip" [class.timer-warn]="timeLeft() <= 60 && timeLeft() > 30" [class.timer-danger]="timeLeft() <= 30">
            <i class="fa-regular fa-clock"></i>
            {{ formatTime(timeLeft()) }}
          </div>
        }
      </ion-toolbar>
    </ion-header>

    <ion-content class="quiz-content">
      <div class="quiz-wrapper">

        <!-- \u2500\u2500 START SCREEN \u2500\u2500 -->
        @if (phase() === 'start') {
          <div class="start-screen">
            <div class="start-icon-wrap" [style.background]="meta?.iconBg">
              <i [class]="meta?.faIcon" [style.color]="meta?.iconColor"></i>
            </div>
            <span class="diff-pill" [attr.data-d]="meta?.difficulty">{{ meta?.difficulty }}</span>
            <h1 class="start-title">{{ quiz()?.title }}</h1>
            <p class="start-sub">Test your knowledge with timed multiple-choice questions. Each question has one correct answer.</p>

            <div class="start-stats">
              <div class="start-stat">
                <i class="fa-solid fa-pen start-stat-icon"></i>
                <span class="start-stat-val">{{ quiz()?.questions?.length }}</span>
                <span class="start-stat-lbl">Questions</span>
              </div>
              <div class="start-stat-div"></div>
              <div class="start-stat">
                <i class="fa-regular fa-clock start-stat-icon"></i>
                <span class="start-stat-val">{{ quiz()?.timeMinutes }}</span>
                <span class="start-stat-lbl">Minutes</span>
              </div>
              <div class="start-stat-div"></div>
              <div class="start-stat">
                <i class="fa-solid fa-rotate start-stat-icon"></i>
                <span class="start-stat-val">\u221E</span>
                <span class="start-stat-lbl">Retakes</span>
              </div>
            </div>

            <div class="start-tips">
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> Read each question carefully before selecting</div>
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> You can navigate back to review answers</div>
              <div class="tip"><i class="fa-solid fa-circle-info tip-icon"></i> Explanations shown after submission</div>
            </div>

            <button class="btn-start" (click)="startQuiz()" [style.--ac]="meta?.accentColor">
              <i class="fa-solid fa-play"></i>
              Start Quiz
            </button>
          </div>
        }

        <!-- \u2500\u2500 QUIZ SCREEN \u2500\u2500 -->
        @if (phase() === 'quiz') {
          <div class="quiz-screen">
            <!-- Question -->
            <div class="q-card">
              <div class="q-label">Question {{ currentIdx() + 1 }}</div>
              <p class="q-text">{{ currentQ()?.q }}</p>
            </div>

            <!-- Options -->
            <div class="options-list">
              @for (opt of currentQ()?.opts; track $index) {
                <button class="opt-btn"
                  [class.opt-selected]="answers()[currentIdx()] === $index"
                  (click)="selectOption($index)"
                  [style.--ac]="meta?.accentColor">
                  <span class="opt-letter">{{ letters[$index] }}</span>
                  <span class="opt-text">{{ opt }}</span>
                  @if (answers()[currentIdx()] === $index) {
                    <i class="fa-solid fa-circle-check opt-check"></i>
                  }
                </button>
              }
            </div>

            <!-- Navigation -->
            <div class="nav-row">
              <button class="btn-nav btn-prev" (click)="prev()" [disabled]="currentIdx() === 0">
                <i class="fa-solid fa-chevron-left"></i> Prev
              </button>

              <div class="q-dots">
                @for (q of quiz()?.questions; track $index) {
                  <div class="q-dot"
                    [class.q-dot-answered]="answers()[$index] !== -1"
                    [class.q-dot-current]="currentIdx() === $index"
                    (click)="goTo($index)">
                  </div>
                }
              </div>

              @if (currentIdx() < (quiz()?.questions?.length ?? 1) - 1) {
                <button class="btn-nav btn-next" (click)="next()" [style.--ac]="meta?.accentColor">
                  Next <i class="fa-solid fa-chevron-right"></i>
                </button>
              } @else {
                <button class="btn-nav btn-submit" (click)="submit()" [style.--ac]="meta?.accentColor">
                  Submit <i class="fa-solid fa-check"></i>
                </button>
              }
            </div>

            <!-- Answered count -->
            <div class="answered-info">
              <i class="fa-solid fa-circle-check answered-icon"></i>
              {{ answeredCount() }} of {{ quiz()?.questions?.length }} answered
            </div>
          </div>
        }

      </div>
    </ion-content>
  `, styles: ["/* angular:styles/component:css;ceda79655b9a88833dc79ae8740c847114d31f007d6ca713311b7123ea8180fd;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/assessments/assess-quiz.component.ts */\n.quiz-toolbar {\n  --background: #0b1120;\n  --border-style: none;\n}\n.quiz-content {\n  --background: #0b1120;\n}\n.quiz-wrapper {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 24px 16px 100px;\n}\n.toolbar-progress {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 0 8px;\n}\n.toolbar-q-num {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #64748b;\n  letter-spacing: 0.06em;\n}\n.toolbar-bar {\n  width: 100%;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.toolbar-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #a78bfa);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.timer-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #94a3b8;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 4px 12px;\n  margin-right: 8px;\n  transition: all 0.3s ease;\n}\n.timer-warn {\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.3);\n  background: rgba(245, 158, 11, 0.08);\n}\n.timer-danger {\n  color: #f87171;\n  border-color: rgba(248, 113, 113, 0.3);\n  background: rgba(248, 113, 113, 0.08);\n}\n.start-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding-top: 16px;\n}\n.start-icon-wrap {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  margin-bottom: 16px;\n}\n.diff-pill {\n  font-size: 0.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 4px 12px;\n  border-radius: 20px;\n  margin-bottom: 14px;\n}\n.diff-pill[data-d=beginner] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.diff-pill[data-d=intermediate] {\n  background: rgba(139, 92, 246, 0.15);\n  color: #a78bfa;\n}\n.diff-pill[data-d=advanced] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.start-title {\n  font-size: 1.6rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 10px;\n}\n.start-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 0 0 24px;\n  max-width: 300px;\n}\n.start-stats {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  padding: 16px 24px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.start-stat {\n  text-align: center;\n  flex: 1;\n}\n.start-stat-icon {\n  font-size: 0.8rem;\n  color: #8b5cf6;\n  display: block;\n  margin-bottom: 4px;\n}\n.start-stat-val {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.start-stat-lbl {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.start-stat-div {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.start-tips {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n  margin-bottom: 28px;\n}\n.tip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.75rem;\n  color: #64748b;\n  text-align: left;\n}\n.tip-icon {\n  color: #475569;\n  font-size: 0.65rem;\n  flex-shrink: 0;\n}\n.btn-start {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 16px;\n  background: var(--ac, #8b5cf6);\n  color: white;\n  font-size: 0.95rem;\n  font-weight: 800;\n  border: none;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  letter-spacing: 0.01em;\n}\n.btn-start:hover {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-start:active {\n  transform: scale(0.98);\n}\n.quiz-screen {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.q-card {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  padding: 20px;\n}\n.q-label {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #8b5cf6;\n  margin-bottom: 10px;\n}\n.q-text {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #e2e8f0;\n  line-height: 1.55;\n  margin: 0;\n}\n.options-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.opt-btn {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.opt-btn:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #e2e8f0;\n}\n.opt-selected {\n  background: rgba(from var(--ac, #8b5cf6) r g b / 0.12) !important;\n  border-color: var(--ac, #8b5cf6) !important;\n  color: #e2e8f0 !important;\n}\n.opt-letter {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.opt-selected .opt-letter {\n  background: var(--ac, #8b5cf6);\n  border-color: var(--ac, #8b5cf6);\n  color: white;\n}\n.opt-text {\n  flex: 1;\n  line-height: 1.4;\n}\n.opt-check {\n  font-size: 0.85rem;\n  color: var(--ac, #8b5cf6);\n  flex-shrink: 0;\n}\n.nav-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.btn-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  border: none;\n}\n.btn-prev {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #64748b;\n}\n.btn-prev:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.07);\n  color: #94a3b8;\n}\n.btn-prev:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.btn-next {\n  background: var(--ac, #8b5cf6);\n  color: white;\n}\n.btn-next:hover {\n  opacity: 0.9;\n}\n.btn-submit {\n  background: #10b981;\n  color: white;\n}\n.btn-submit:hover {\n  opacity: 0.9;\n}\n.q-dots {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex: 1;\n  padding: 0 4px;\n}\n.q-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.q-dot-answered {\n  background: rgba(139, 92, 246, 0.5);\n  border-color: rgba(139, 92, 246, 0.6);\n}\n.q-dot-current {\n  background: #8b5cf6;\n  border-color: #8b5cf6;\n  transform: scale(1.3);\n}\n.answered-info {\n  text-align: center;\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: #475569;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.answered-icon {\n  color: #10b981;\n  font-size: 0.65rem;\n}\n:host-context(html:not(.dark)) .quiz-toolbar {\n  --background: #1B4332;\n}\n:host-context(html:not(.dark)) .quiz-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .toolbar-bar {\n  background: rgba(255, 255, 255, 0.3);\n}\n:host-context(html:not(.dark)) .toolbar-bar-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #1B4332,\n      #40916C);\n}\n:host-context(html:not(.dark)) .toolbar-q-num {\n  color: rgba(255, 255, 255, 0.75);\n}\n:host-context(html:not(.dark)) .timer-chip {\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.25);\n}\n:host-context(html:not(.dark)) .timer-warn {\n  color: #f59e0b;\n}\n:host-context(html:not(.dark)) .timer-danger {\n  color: #f87171;\n}\n:host-context(html:not(.dark)) .start-screen {\n  background: transparent;\n}\n:host-context(html:not(.dark)) .start-title {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .start-sub {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .start-stats {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .start-stat-val {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .start-stat-lbl {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .start-stat-div {\n  background: #D6DDD2;\n}\n:host-context(html:not(.dark)) .start-stat-icon {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .tip {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .tip-icon {\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .q-card {\n  background: #ffffff;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .q-label {\n  color: #1B4332;\n}\n:host-context(html:not(.dark)) .q-text {\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .opt-btn {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .opt-btn:hover {\n  background: #F5F7F2;\n  border-color: #B7CCBB;\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .opt-letter {\n  background: #F5F7F2;\n  border-color: #D6DDD2;\n  color: #8A9B8F;\n}\n:host-context(html:not(.dark)) .opt-text {\n  color: inherit;\n}\n:host-context(html:not(.dark)) .btn-prev {\n  background: #ffffff;\n  border-color: #D6DDD2;\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .btn-prev:hover:not(:disabled) {\n  background: #F5F7F2;\n  color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .q-dot {\n  background: #D6DDD2;\n  border-color: #D6DDD2;\n}\n:host-context(html:not(.dark)) .q-dot-answered {\n  background: rgba(27, 67, 50, 0.4);\n  border-color: rgba(27, 67, 50, 0.5);\n}\n:host-context(html:not(.dark)) .q-dot-current {\n  background: #1B4332;\n  border-color: #1B4332;\n}\n:host-context(html:not(.dark)) .answered-info {\n  color: #8A9B8F;\n}\n/*# sourceMappingURL=assess-quiz.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssessQuizComponent, { className: "AssessQuizComponent", filePath: "src/app/features/assessments/assess-quiz.component.ts", lineNumber: 502 });
})();
export {
  AssessQuizComponent
};
//# sourceMappingURL=chunk-2ILECOZF.js.map
