import { Question } from './question.model';

export const DESIGN_PATTERNS_QUESTIONS: Question[] = [
  {
    id: 1100,
    category: 'Design Patterns',
    question: 'What are design patterns and why are they important?',
    answer: 'Design patterns are reusable solutions to commonly occurring software design problems. They are not code, but templates or blueprints. Benefits: shared vocabulary among developers, proven solutions that avoid common pitfalls, more maintainable and extensible code. The "Gang of Four" (Gamma, Helm, Johnson, Vlissides) catalogued 23 patterns across three categories: Creational, Structural, and Behavioral.',
    asked_metadata: 'Asked at Amazon, Google, Infosys, TCS',
    subConcepts: [
      { title: 'Creational', description: 'Object creation mechanisms: Singleton, Factory Method, Abstract Factory, Builder, Prototype.' },
      { title: 'Structural', description: 'Composing classes/objects: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.' },
      { title: 'Behavioral', description: 'Communication between objects: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.' }
    ]
  },
  {
    id: 1101,
    category: 'Design Patterns',
    question: 'Explain the Singleton pattern and its thread-safe implementations.',
    answer: 'Singleton ensures only one instance exists in the JVM. Common implementations: (1) Eager initialization — instance created at class loading time, thread-safe but wasteful if not used. (2) Lazy initialization with double-checked locking and volatile keyword. (3) Bill Pugh / Initialization-on-demand holder — lazy and thread-safe using the class loader mechanism. (4) Enum-based — simplest, prevents reflection attacks.',
    asked_metadata: 'Asked at Amazon, Google, Flipkart, TCS',
    code: `// Bill Pugh (recommended)
public class Singleton {
    private Singleton() {}
    private static class Holder {
        static final Singleton INSTANCE = new Singleton();
    }
    public static Singleton getInstance() { return Holder.INSTANCE; }
}

// Enum (reflection-safe)
public enum Singleton {
    INSTANCE;
    public void doWork() { ... }
}`
  },
  {
    id: 1102,
    category: 'Design Patterns',
    question: 'What is the Factory Method pattern?',
    answer: 'Factory Method defines an interface for creating an object but lets subclasses decide which class to instantiate. It promotes loose coupling by eliminating the need to bind application-specific classes into the code. The creator class declares the factory method as abstract or with a default implementation. Concrete creators override it to produce a specific product. Used in Spring: FactoryBean, LogFactory, BeanFactory.',
    asked_metadata: 'Asked at Amazon, TCS, Infosys',
    code: `// Product
interface Notification { void send(String message); }

// Concrete products
class EmailNotification implements Notification {
    public void send(String msg) { System.out.println("Email: " + msg); }
}
class SmsNotification implements Notification {
    public void send(String msg) { System.out.println("SMS: " + msg); }
}

// Factory
class NotificationFactory {
    public static Notification create(String type) {
        return switch (type) {
            case "EMAIL" -> new EmailNotification();
            case "SMS"   -> new SmsNotification();
            default      -> throw new IllegalArgumentException(type);
        };
    }
}`
  },
  {
    id: 1103,
    category: 'Design Patterns',
    question: 'What is the Builder pattern and when should you use it?',
    answer: 'Builder separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Use when: a class has many optional parameters (telescoping constructor problem), the object must be immutable once built, or the construction process involves multiple steps. Lombok\'s @Builder generates a builder automatically.',
    asked_metadata: 'Asked at Amazon, Google, Flipkart',
    code: `public class Pizza {
    private final String size;
    private final boolean cheese, pepperoni, mushrooms;

    private Pizza(Builder b) {
        this.size = b.size; this.cheese = b.cheese;
        this.pepperoni = b.pepperoni; this.mushrooms = b.mushrooms;
    }

    public static class Builder {
        private final String size;    // required
        private boolean cheese, pepperoni, mushrooms;  // optional

        public Builder(String size) { this.size = size; }
        public Builder cheese()     { this.cheese = true;     return this; }
        public Builder pepperoni()  { this.pepperoni = true;  return this; }
        public Builder mushrooms()  { this.mushrooms = true;  return this; }
        public Pizza build()        { return new Pizza(this); }
    }
}

// Usage
Pizza pizza = new Pizza.Builder("LARGE").cheese().pepperoni().build();`
  },
  {
    id: 1104,
    category: 'Design Patterns',
    question: 'What is the Observer pattern?',
    answer: 'Observer (also called Publish-Subscribe or Event-Listener) defines a one-to-many dependency: when one object (Subject/Publisher) changes state, all registered dependents (Observers/Listeners) are notified automatically. Promotes loose coupling. Java examples: java.util.Observer (deprecated), PropertyChangeListener, ActionListener in Swing, Spring ApplicationEvent system, RxJava Observable.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS',
    code: `interface Observer { void update(String event, Object data); }

class EventBus {
    private final Map<String, List<Observer>> listeners = new HashMap<>();

    public void subscribe(String event, Observer o) {
        listeners.computeIfAbsent(event, k -> new ArrayList<>()).add(o);
    }
    public void publish(String event, Object data) {
        listeners.getOrDefault(event, List.of())
                 .forEach(o -> o.update(event, data));
    }
}

// Usage
EventBus bus = new EventBus();
bus.subscribe("ORDER_PLACED", (e, d) -> System.out.println("Email sent for " + d));
bus.subscribe("ORDER_PLACED", (e, d) -> inventoryService.reserve(d));
bus.publish("ORDER_PLACED", orderId);`
  },
  {
    id: 1105,
    category: 'Design Patterns',
    question: 'What is the Strategy pattern?',
    answer: 'Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client chooses the algorithm at runtime without knowing the implementation. Promotes Open/Closed Principle — add new strategies without modifying the context. Java: Comparator, Runnable, java.util.concurrent.Executor are all Strategy implementations. Spring: ResourceLoader, HandlerAdapter.',
    asked_metadata: 'Asked at Amazon, Google, Infosys',
    code: `interface SortStrategy {
    void sort(int[] array);
}

class QuickSort implements SortStrategy {
    public void sort(int[] a) { /* quicksort */ }
}
class MergeSort implements SortStrategy {
    public void sort(int[] a) { /* mergesort */ }
}

class Sorter {
    private SortStrategy strategy;
    public Sorter(SortStrategy s) { this.strategy = s; }
    public void setStrategy(SortStrategy s) { this.strategy = s; }
    public void sort(int[] a) { strategy.sort(a); }
}

// Client picks at runtime
Sorter sorter = new Sorter(new QuickSort());
sorter.sort(data);
sorter.setStrategy(new MergeSort()); // switch strategy`
  },
  {
    id: 1106,
    category: 'Design Patterns',
    question: 'What is the Decorator pattern?',
    answer: 'Decorator attaches additional responsibilities to an object dynamically, without modifying its class. It is a structural alternative to subclassing. The decorator wraps the component and adds behavior before/after delegating to it. Java example: java.io streams (BufferedInputStream wraps FileInputStream). Spring: BeanDefinitionDecorator, TransactionInterceptor wrapping beans.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS',
    code: `interface Coffee { String getDescription(); double getCost(); }

class SimpleCoffee implements Coffee {
    public String getDescription() { return "Coffee"; }
    public double getCost() { return 1.0; }
}

class MilkDecorator implements Coffee {
    private final Coffee coffee;
    public MilkDecorator(Coffee c) { this.coffee = c; }
    public String getDescription() { return coffee.getDescription() + ", Milk"; }
    public double getCost() { return coffee.getCost() + 0.25; }
}

// Usage — stack decorators
Coffee c = new MilkDecorator(new MilkDecorator(new SimpleCoffee()));
System.out.println(c.getDescription() + " $" + c.getCost());
// Coffee, Milk, Milk $1.50`
  },
  {
    id: 1107,
    category: 'Design Patterns',
    question: 'What is the Adapter pattern?',
    answer: 'Adapter converts the interface of a class into another interface that clients expect. It lets incompatible interfaces work together. Class Adapter uses inheritance; Object Adapter (preferred in Java) uses composition. Real examples: Arrays.asList() adapts an array to List, InputStreamReader adapts InputStream to Reader, Spring\'s JpaVendorAdapter.',
    asked_metadata: 'Asked at TCS, Infosys, Wipro',
    code: `// Existing incompatible interface
interface LegacyPayment { void pay(double amount); }

// New target interface
interface PaymentProcessor { void processPayment(int cents); }

// Adapter bridges them using composition
class LegacyPaymentAdapter implements PaymentProcessor {
    private final LegacyPayment legacy;
    public LegacyPaymentAdapter(LegacyPayment p) { this.legacy = p; }

    public void processPayment(int cents) {
        legacy.pay(cents / 100.0);  // adapt: cents → dollars
    }
}`
  },
  {
    id: 1108,
    category: 'Design Patterns',
    question: 'What is the Proxy pattern?',
    answer: 'Proxy provides a surrogate or placeholder for another object to control access to it. Types: Virtual Proxy (lazy loading expensive objects), Remote Proxy (local representative for remote object — RMI), Protection Proxy (access control), Cache Proxy (caches results), Logging Proxy. Spring AOP creates JDK dynamic proxies (for interfaces) or CGLIB proxies (for classes) to implement @Transactional, @Cacheable etc.',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `interface Image { void display(); }

class RealImage implements Image {
    private final String filename;
    public RealImage(String filename) {
        this.filename = filename;
        loadFromDisk();  // expensive
    }
    private void loadFromDisk() { System.out.println("Loading " + filename); }
    public void display() { System.out.println("Displaying " + filename); }
}

class VirtualProxyImage implements Image {
    private final String filename;
    private RealImage realImage;  // loaded lazily

    public VirtualProxyImage(String filename) { this.filename = filename; }
    public void display() {
        if (realImage == null) realImage = new RealImage(filename);
        realImage.display();
    }
}`
  },
  {
    id: 1109,
    category: 'Design Patterns',
    question: 'What is the Template Method pattern?',
    answer: 'Template Method defines the skeleton of an algorithm in a base class, deferring some steps to subclasses. The base class calls abstract (or hook) methods that subclasses override. Promotes code reuse and enforces the overall structure. "Hollywood Principle": don\'t call us, we\'ll call you. Spring examples: JdbcTemplate (execute() calls your RowMapper), HibernateTemplate, AbstractController.',
    asked_metadata: 'Asked at Amazon, Wipro, TCS',
    code: `abstract class DataProcessor {
    // Template method — defines the algorithm skeleton
    public final void process() {
        readData();
        processData();
        writeOutput();
    }

    protected abstract void readData();
    protected abstract void processData();

    protected void writeOutput() {   // hook with default
        System.out.println("Writing to stdout");
    }
}

class CsvProcessor extends DataProcessor {
    protected void readData()    { System.out.println("Reading CSV"); }
    protected void processData() { System.out.println("Parsing CSV rows"); }
}`
  },
  {
    id: 1110,
    category: 'Design Patterns',
    question: 'What is the Command pattern?',
    answer: 'Command encapsulates a request as an object, allowing you to parameterise clients with different requests, queue or log requests, and support undo/redo operations. Components: Command (interface with execute/undo), ConcreteCommand (stores action and receiver), Invoker (holds and fires commands), Receiver (does the work). Java: Runnable, Callable, javax.swing.Action are Command implementations.',
    asked_metadata: 'Asked at Amazon, Flipkart, Google',
    code: `interface Command { void execute(); void undo(); }

class TextEditor {
    private StringBuilder text = new StringBuilder();
    public void append(String s) { text.append(s); }
    public void delete(int len) { text.delete(text.length()-len, text.length()); }
    public String getText() { return text.toString(); }
}

class AppendCommand implements Command {
    private final TextEditor editor; private final String text;
    public AppendCommand(TextEditor e, String t) { editor=e; text=t; }
    public void execute() { editor.append(text); }
    public void undo()    { editor.delete(text.length()); }
}

// Invoker
Deque<Command> history = new ArrayDeque<>();
Command cmd = new AppendCommand(editor, "Hello");
cmd.execute(); history.push(cmd);
// Undo
history.pop().undo();`
  },
  {
    id: 1111,
    category: 'Design Patterns',
    question: 'What is the Chain of Responsibility pattern?',
    answer: 'Chain of Responsibility passes a request along a chain of handlers. Each handler decides whether to process the request or pass it to the next handler. Decouples sender from receiver. Real examples: Java Servlet filters, Spring Security FilterChain, exception handler chains, middleware pipelines. Key benefit: you can add/remove handlers dynamically without changing the client.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS',
    code: `abstract class SupportHandler {
    protected SupportHandler next;
    public void setNext(SupportHandler h) { this.next = h; }

    public abstract void handle(int severity);
}

class L1Support extends SupportHandler {
    public void handle(int severity) {
        if (severity == 1) System.out.println("L1 resolved");
        else if (next != null) next.handle(severity);
    }
}

// Build the chain
L1Support l1 = new L1Support();
L2Support l2 = new L2Support();
l1.setNext(l2);
l1.handle(2); // escalates to L2`
  },
  {
    id: 1112,
    category: 'Design Patterns',
    question: 'What is the Facade pattern?',
    answer: 'Facade provides a simplified interface to a complex subsystem. It hides the complexity of the subsystem and provides a high-level interface that makes the subsystem easier to use. Does not prevent direct access to the subsystem. Spring examples: JdbcTemplate (facade over JDBC), SLF4J (facade over logging frameworks), RestTemplate, TransactionTemplate.',
    asked_metadata: 'Asked at TCS, Infosys, Wipro',
    code: `// Complex subsystems
class VideoDecoder { void decode(String file) { ... } }
class AudioDecoder { void decode(String file) { ... } }
class VideoBuffer   { void load(byte[] data)  { ... } }
class AudioBuffer   { void load(byte[] data)  { ... } }

// Facade — simple interface
class VideoPlayer {
    private VideoDecoder videoDecoder = new VideoDecoder();
    private AudioDecoder audioDecoder = new AudioDecoder();
    private VideoBuffer  videoBuffer  = new VideoBuffer();
    private AudioBuffer  audioBuffer  = new AudioBuffer();

    public void play(String file) {
        videoDecoder.decode(file);
        audioDecoder.decode(file);
        // load buffers...
        System.out.println("Playing " + file);
    }
}`
  },
  {
    id: 1113,
    category: 'Design Patterns',
    question: 'What is the Composite pattern?',
    answer: 'Composite composes objects into tree structures to represent part-whole hierarchies. Clients treat individual objects and compositions uniformly via a common interface. Each composite can contain children (other composites or leaves). Real examples: java.awt.Container (contains Components), org.w3c.dom.Node (file systems), UI component trees, expression trees in compilers.',
    asked_metadata: 'Asked at Amazon, Flipkart, Google',
    code: `interface FileSystemItem {
    void print(String indent);
    long size();
}

class File implements FileSystemItem {
    private String name; private long bytes;
    public void print(String indent) { System.out.println(indent + name); }
    public long size() { return bytes; }
}

class Folder implements FileSystemItem {
    private String name;
    private List<FileSystemItem> children = new ArrayList<>();
    public void add(FileSystemItem i) { children.add(i); }
    public void print(String indent) {
        System.out.println(indent + name + "/");
        children.forEach(c -> c.print(indent + "  "));
    }
    public long size() { return children.stream().mapToLong(FileSystemItem::size).sum(); }
}`
  },
  {
    id: 1114,
    category: 'Design Patterns',
    question: 'What is the State pattern?',
    answer: 'State allows an object to alter its behavior when its internal state changes. The object will appear to change its class. Encapsulates state-specific behavior in separate State classes. Eliminates large if-else or switch chains based on state. Real examples: vending machine, ATM, traffic light, order workflow (Pending → Processing → Shipped → Delivered).',
    asked_metadata: 'Asked at Amazon, Infosys, TCS',
    code: `interface OrderState {
    void process(OrderContext ctx);
    void cancel(OrderContext ctx);
}

class PendingState implements OrderState {
    public void process(OrderContext ctx) {
        System.out.println("Processing order");
        ctx.setState(new ProcessingState());
    }
    public void cancel(OrderContext ctx) {
        System.out.println("Order cancelled");
        ctx.setState(new CancelledState());
    }
}

class OrderContext {
    private OrderState state = new PendingState();
    public void setState(OrderState s) { this.state = s; }
    public void process() { state.process(this); }
    public void cancel()  { state.cancel(this); }
}`
  },
  {
    id: 1115,
    category: 'Design Patterns',
    question: 'What is the Prototype pattern?',
    answer: 'Prototype creates new objects by cloning an existing object (the prototype) instead of constructing them from scratch. Useful when object creation is expensive (e.g., database reads, complex initialisation). In Java, implement Cloneable and override clone(), or provide a copy constructor. Beware of shallow vs deep copy: with shallow copy, nested mutable objects are shared between original and clone.',
    asked_metadata: 'Asked at TCS, Wipro, HCL',
    code: `public class UserProfile implements Cloneable {
    private String name;
    private List<String> roles;  // mutable — needs deep copy!

    @Override
    public UserProfile clone() {
        try {
            UserProfile copy = (UserProfile) super.clone(); // shallow
            copy.roles = new ArrayList<>(this.roles);       // deep copy list
            return copy;
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}

// Usage
UserProfile admin = new UserProfile("Alice", List.of("ADMIN", "USER"));
UserProfile clone = admin.clone();
clone.setName("Bob");  // does not affect original`
  },
  {
    id: 1116,
    category: 'Design Patterns',
    question: 'What is the Flyweight pattern?',
    answer: 'Flyweight minimises memory usage by sharing as much data as possible with similar objects. Splits object state into intrinsic (shared, stored in flyweight) and extrinsic (context-specific, passed in). Use when: many objects share identical data, and memory is a concern. Java example: String pool (interning), Integer cache (-128 to 127), Character cache.',
    asked_metadata: 'Asked at Amazon, Google, Flipkart',
    code: `// Flyweight factory with shared instances
class TreeType {   // intrinsic (shared)
    final String name, color, texture;
    TreeType(String n, String c, String t) { name=n; color=c; texture=t; }
    void draw(int x, int y) { System.out.printf("Tree %s at (%d,%d)%n", name, x, y); }
}

class TreeFactory {
    private static final Map<String, TreeType> cache = new HashMap<>();
    static TreeType get(String name, String color, String texture) {
        return cache.computeIfAbsent(name + color, k -> new TreeType(name, color, texture));
    }
}

record Tree(int x, int y, TreeType type) {  // extrinsic (per-tree)
    void draw() { type.draw(x, y); }
}`
  },
  {
    id: 1117,
    category: 'Design Patterns',
    question: 'What is the Bridge pattern?',
    answer: 'Bridge decouples an abstraction from its implementation so that the two can vary independently. Instead of a hierarchy explosion (Shape × Color = N×M classes), you have two hierarchies joined by composition. Use when: both abstraction and implementation should be extensible by subclassing independently, or you want to hide implementation details from clients. Avoids permanent binding between abstraction and implementation.',
    asked_metadata: 'Asked at Amazon, TCS, Infosys',
    code: `// Implementation hierarchy
interface DrawAPI { void drawCircle(int r, int x, int y); }
class SVGDraw implements DrawAPI {
    public void drawCircle(int r, int x, int y) { System.out.println("SVG circle"); }
}
class CanvasDraw implements DrawAPI {
    public void drawCircle(int r, int x, int y) { System.out.println("Canvas circle"); }
}

// Abstraction hierarchy — holds reference to implementation
abstract class Shape {
    protected DrawAPI drawAPI;
    Shape(DrawAPI api) { this.drawAPI = api; }
    abstract void draw();
}

class Circle extends Shape {
    private int r, x, y;
    Circle(int r, int x, int y, DrawAPI api) { super(api); this.r=r; this.x=x; this.y=y; }
    public void draw() { drawAPI.drawCircle(r, x, y); }
}`
  },
  {
    id: 1118,
    category: 'Design Patterns',
    question: 'What is the Mediator pattern?',
    answer: 'Mediator reduces chaotic dependencies between objects by routing all communication through a central mediator. Objects no longer communicate directly — they only know about the mediator. Reduces the number of connections from O(n²) to O(n). Spring\'s ApplicationEventPublisher acts as a mediator. Also used in chat systems, air traffic control, UI dialog components.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS',
    code: `interface ChatMediator {
    void sendMessage(String msg, User from);
    void addUser(User user);
}

class ChatRoom implements ChatMediator {
    private List<User> users = new ArrayList<>();
    public void addUser(User u) { users.add(u); }
    public void sendMessage(String msg, User from) {
        users.stream()
             .filter(u -> u != from)
             .forEach(u -> u.receive(from.name + ": " + msg));
    }
}

class User {
    String name; ChatMediator chat;
    User(String name, ChatMediator chat) { this.name=name; this.chat=chat; chat.addUser(this); }
    void send(String msg)    { chat.sendMessage(msg, this); }
    void receive(String msg) { System.out.println(name + " received: " + msg); }
}`
  },
  {
    id: 1119,
    category: 'Design Patterns',
    question: 'What is the Memento pattern?',
    answer: 'Memento captures and externalises an object\'s internal state without violating encapsulation, so the object can be restored to this state later. Three participants: Originator (creates and restores from mementos), Memento (stores the state snapshot), Caretaker (holds mementos, does not inspect them). Used in: undo/redo in editors, transaction savepoints, game save states.',
    asked_metadata: 'Asked at Amazon, Google, Wipro',
    code: `class TextEditor {
    private String text = "";

    public Memento save() { return new Memento(text); }
    public void restore(Memento m) { text = m.getText(); }
    public void type(String s) { text += s; }
    public String getText() { return text; }

    record Memento(String getText) {}  // immutable snapshot
}

// Caretaker
TextEditor editor = new TextEditor();
editor.type("Hello");
TextEditor.Memento saved = editor.save();     // snapshot
editor.type(" World");
System.out.println(editor.getText());         // Hello World
editor.restore(saved);
System.out.println(editor.getText());         // Hello`
  },
  {
    id: 1120,
    category: 'Design Patterns',
    question: 'What is the Iterator pattern?',
    answer: 'Iterator provides a way to access elements of an aggregate object sequentially without exposing its underlying representation. Java\'s java.util.Iterator and Iterable are the canonical examples. The for-each loop calls iterator() under the hood. Custom iterators are useful for complex data structures (trees, graphs) where traversal order needs encapsulation.',
    asked_metadata: 'Asked at TCS, Infosys, HCL',
    code: `class NumberRange implements Iterable<Integer> {
    private final int start, end;
    public NumberRange(int start, int end) { this.start=start; this.end=end; }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = start;
            public boolean hasNext() { return current <= end; }
            public Integer next() {
                if (!hasNext()) throw new NoSuchElementException();
                return current++;
            }
        };
    }
}

// for-each works automatically
for (int n : new NumberRange(1, 5)) System.out.println(n);`
  },
  {
    id: 1121,
    category: 'Design Patterns',
    question: 'What is the Visitor pattern?',
    answer: 'Visitor lets you add new operations to an object structure without modifying the classes of elements in that structure. The visitor class implements operations for each element type; elements accept() the visitor. Useful when the element hierarchy is stable but operations on them vary. Java 21 sealed classes + pattern matching provide a compiler-checked alternative to classical visitor.',
    asked_metadata: 'Asked at Amazon, Google, Flipkart',
    code: `interface ShapeVisitor {
    double visit(Circle c);
    double visit(Rectangle r);
}

sealed interface Shape permits Circle, Rectangle {
    double accept(ShapeVisitor v);
}
record Circle(double radius)     implements Shape {
    public double accept(ShapeVisitor v) { return v.visit(this); }
}
record Rectangle(double w, double h) implements Shape {
    public double accept(ShapeVisitor v) { return v.visit(this); }
}

class AreaVisitor implements ShapeVisitor {
    public double visit(Circle c)    { return Math.PI * c.radius() * c.radius(); }
    public double visit(Rectangle r) { return r.w() * r.h(); }
}

double area = shapes.stream().mapToDouble(s -> s.accept(new AreaVisitor())).sum();`
  },
  {
    id: 1122,
    category: 'Design Patterns',
    question: 'What design patterns are used internally in the Spring Framework?',
    answer: 'Spring uses many design patterns: Singleton (default bean scope), Factory Method (BeanFactory, FactoryBean), Proxy (Spring AOP via JDK/CGLIB proxies), Observer (ApplicationEventPublisher), Template Method (JdbcTemplate, HibernateTemplate), Strategy (ResourceLoader, HandlerAdapter, HandlerMapping), Facade (JdbcTemplate, SLF4J), Decorator (BeanDefinitionDecorator), Front Controller (DispatcherServlet), MVC.',
    asked_metadata: 'Asked at Amazon, Google, TCS, Infosys'
  },
  {
    id: 1123,
    category: 'Design Patterns',
    question: 'When would you use Singleton pattern vs a static class?',
    answer: 'Use Singleton when: you need an instance that can implement interfaces, be subclassed, or be injected as a dependency; you need lazy initialisation; or you need to control the lifecycle. Use static class when: the class is purely a collection of utility methods with no state and no need for dependency injection (e.g., Math, Collections). Singletons are testable and mockable; static classes are harder to test.',
    asked_metadata: 'Asked at Amazon, Flipkart, Wipro'
  },
  {
    id: 1124,
    category: 'Design Patterns',
    question: 'What is the Null Object pattern?',
    answer: 'Null Object provides a default object with do-nothing behaviour instead of using null. Eliminates null checks in client code and prevents NullPointerExceptions. Java: Optional<T> is related but not identical. Spring: Collections.emptyList(), EmptyResultDataAccessException, NullSecurityContextHolderStrategy. The pattern is most valuable when null would cause repeated conditional checks throughout the codebase.',
    asked_metadata: 'Asked at Amazon, TCS, Infosys',
    code: `interface Logger { void log(String message); }

class ConsoleLogger implements Logger {
    public void log(String msg) { System.out.println(msg); }
}

// Null Object — do nothing, no null checks needed
class NullLogger implements Logger {
    public void log(String msg) { /* intentionally empty */ }
}

class Service {
    private final Logger logger;
    Service(Logger logger) { this.logger = logger; } // never null

    void process() {
        logger.log("Processing...");  // safe — no null check needed
    }
}`
  }
];
