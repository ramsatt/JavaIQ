import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-annotations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Annotations"
      subtitle="Master Java annotations — built-in annotations, creating custom annotations with @Retention and @Target, and how frameworks like Spring use them."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #312e81, #6366f1)">

      <!-- Section 1: What Are Annotations? -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-indigo" /> What Are Annotations?
        </h2>
        <div class="topic-hero-container">
          <img src="/assets/images/topics/annotations.png" alt="Java Annotations Diagram" class="topic-hero-image" />
        </div>
        <div class="prose">
          <p>
            Annotations are <strong>metadata</strong> attached to code elements (classes, methods, fields, parameters,
            constructors). They don't change runtime behaviour directly — instead, tools (the compiler, annotation
            processors, or frameworks) read them and act on them. Annotations start with <code>&#64;</code>.
          </p>
          <ul>
            <li>The compiler reads annotations like <code>&#64;Override</code> and <code>&#64;FunctionalInterface</code> at compile time.</li>
            <li>Annotation processors (APT) generate code or validate at compile time.</li>
            <li>Frameworks (Spring, Hibernate, JUnit) read annotations at runtime via <strong>reflection</strong>.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <!-- Section 2: Built-in Java Annotations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="layers" [size]="28" css="icon-indigo" /> Built-in Java Annotations
        </h2>
        <div class="prose">
          <p>
            Java ships with several standard annotations. The most important ones for everyday development and interviews are:
          </p>
          <ul>
            <li><code>&#64;Override</code> — compiler error if method doesn't actually override anything</li>
            <li><code>&#64;Deprecated</code> — marks API for removal; compiler warns callers</li>
            <li><code>&#64;SuppressWarnings</code> — suppresses specific compiler warnings</li>
            <li><code>&#64;FunctionalInterface</code> — enforces exactly one abstract method (lambda-compatible)</li>
            <li><code>&#64;SafeVarargs</code> — suppresses unchecked warnings on varargs methods</li>
          </ul>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <!-- Section 3: Creating Custom Annotations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Creating Custom Annotations
        </h2>
        <div class="prose">
          <p>
            Use the <code>&#64;interface</code> keyword to declare an annotation. Use <strong>meta-annotations</strong>
            to control how your annotation behaves:
          </p>
          <ul>
            <li><code>&#64;Retention(RetentionPolicy.RUNTIME)</code> — keep in bytecode and available at runtime (needed for frameworks)</li>
            <li><code>&#64;Retention(RetentionPolicy.CLASS)</code> — default; kept in bytecode but NOT available at runtime</li>
            <li><code>&#64;Retention(RetentionPolicy.SOURCE)</code> — discarded by compiler (e.g., <code>&#64;Override</code>)</li>
            <li><code>&#64;Target</code> — restricts where the annotation can be placed</li>
            <li><code>&#64;Documented</code> — include in Javadoc</li>
            <li><code>&#64;Inherited</code> — subclasses inherit the annotation from superclass</li>
          </ul>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <!-- Section 4: Reading Annotations via Reflection -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="search" [size]="28" css="icon-indigo" /> Reading Annotations via Reflection
        </h2>
        <div class="prose">
          <p>
            At runtime, annotations with <code>RUNTIME</code> retention are accessible via the <code>java.lang.reflect</code>
            API. Use <code>isAnnotationPresent()</code>, <code>getAnnotation()</code>, and <code>getAnnotations()</code>
            on <code>Class</code>, <code>Method</code>, <code>Field</code>, etc.
          </p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <!-- Section 5: How Frameworks Use Annotations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="zap" [size]="28" css="icon-indigo" /> How Frameworks Use Annotations
        </h2>
        <div class="prose">
          <p>
            Modern Java frameworks are annotation-driven. At startup, they scan the classpath for annotated classes and
            wire everything together using reflection. This replaces large XML configuration files.
          </p>
          <ul>
            <li><strong>Spring</strong>: <code>&#64;Component</code>, <code>&#64;Service</code>, <code>&#64;Autowired</code>, <code>&#64;RequestMapping</code>, <code>&#64;Transactional</code></li>
            <li><strong>Hibernate/JPA</strong>: <code>&#64;Entity</code>, <code>&#64;Table</code>, <code>&#64;Column</code>, <code>&#64;OneToMany</code></li>
            <li><strong>JUnit 5</strong>: <code>&#64;Test</code>, <code>&#64;BeforeEach</code>, <code>&#64;ParameterizedTest</code></li>
          </ul>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <!-- Section 6: Interview Tips -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-indigo" /> Interview Tips
        </h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">@Retention RUNTIME vs CLASS</h4>
              <p class="tip-desc"><code>&#64;Retention(CLASS)</code> is the default — the annotation is in the bytecode but NOT accessible at runtime via reflection. Always use <code>&#64;Retention(RUNTIME)</code> for framework annotations that are read at runtime (Spring, Hibernate, custom validators).</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">@Target Limits Placement</h4>
              <p class="tip-desc"><code>&#64;Target(ElementType.METHOD)</code> means the annotation can only appear on methods — placing it on a class or field causes a compile error. Use multiple targets with an array: <code>&#64;Target(&#123;TYPE, METHOD&#125;)</code>. This prevents misuse and clarifies intent.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Annotation Processing</h4>
              <p class="tip-desc">APT (Annotation Processing Tool) runs at <strong>compile time</strong> and can generate new source files (e.g., Lombok, MapStruct). Reflection reads annotations at <strong>runtime</strong> (e.g., Spring, JUnit). These are two completely different mechanisms.</p>
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
    .section-heading {
      display: flex; align-items: center; gap: 12px;
      font-size: 1.4rem; font-weight: 800; color: #1B1B1B;
      margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2;
    }
    .icon-indigo { color: #6366f1; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose code {
      background: #eef2ff; padding: 2px 7px; border-radius: 5px;
      font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #312e81;
    }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #6366f1; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #eef2ff; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #312e81; }
  `
})
export class AnnotationsComponent {

  code1 = `// Annotations attach metadata to code — they start with @
@Override                          // tells compiler to verify the override
@Deprecated(since = "3.0")        // mark for removal, warn callers
@SuppressWarnings("unchecked")    // suppress specific compiler warning
@FunctionalInterface               // enforce single abstract method

// They can appear on classes, methods, fields, parameters...
@Entity                            // Hibernate: map to DB table
@Service                           // Spring: register as a bean
@Test                              // JUnit: this method is a test

// Annotations themselves can have elements (like method parameters):
@SuppressWarnings(value = "unchecked") // named element
@SuppressWarnings("unchecked")         // shorthand when only "value"
@Column(name = "user_name", nullable = false, length = 50) // multiple elements`;

  code2 = `// @Override — catches typos in method names at compile time
public class Animal {
    public void speak() { System.out.println("..."); }
}
public class Dog extends Animal {
    @Override
    public void speak() { System.out.println("Woof!"); }
    // @Override
    // public void speek() { } // COMPILE ERROR — no such method in superclass
}

// @Deprecated — warns callers to use something else
public class StringUtils {
    @Deprecated(since = "2.0", forRemoval = true)
    public static String trim(String s) { return s.trim(); }

    public static String strip(String s) { return s.strip(); } // replacement
}

// @SuppressWarnings — suppress specific warnings
@SuppressWarnings("unchecked")
List<String> list = (List<String>) getRawList(); // no unchecked warning

@SuppressWarnings({"unchecked", "deprecation"}) // suppress multiple

// @FunctionalInterface — one abstract method, safe to use as lambda
@FunctionalInterface
public interface Transformer<T, R> {
    R transform(T input);
    // default and static methods are allowed
    default Transformer<T, R> andLog() { return input -> { R r = transform(input); System.out.println(r); return r; }; }
}
Transformer<String, Integer> strlen = s -> s.length(); // lambda works!

// @SafeVarargs — suppress heap pollution warning on varargs
@SafeVarargs
public static <T> List<T> listOf(T... elements) {
    return Arrays.asList(elements);
}`;

  code3 = `import java.lang.annotation.*;

// Step 1: Declare the annotation
@Retention(RetentionPolicy.RUNTIME)  // available at runtime via reflection
@Target(ElementType.METHOD)          // can only annotate methods
@Documented                          // include in Javadoc
public @interface Log {
    String level() default "INFO";   // element with default value
    String message() default "";     // optional message
}

// Step 2: Use it
public class OrderService {
    @Log(level = "DEBUG", message = "Creating order")
    public Order createOrder(String item, int qty) { /* ... */ return null; }

    @Log  // uses defaults: level="INFO", message=""
    public void cancelOrder(long id) { /* ... */ }
}

// Another example — field-level annotation for validation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface NotBlank {
    String message() default "Field must not be blank";
}

public class UserDto {
    @NotBlank(message = "Username is required")
    private String username;

    @NotBlank
    private String email;
}

// Annotation with array element
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Roles {
    String[] value();  // array element named "value" → shorthand syntax
}

@Roles({"ADMIN", "MANAGER"})   // shorthand (single element named "value")
public class AdminController { }`;

  code4 = `import java.lang.reflect.*;

// Our annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Log {
    String level() default "INFO";
}

// Annotated class
public class PaymentService {
    @Log(level = "DEBUG")
    public void processPayment(double amount) { /* ... */ }

    @Log
    public void refund(double amount) { /* ... */ }

    public void internalCheck() { /* no annotation */ }
}

// Reading annotations at runtime
public class LogProcessor {
    public static void processLogs(Object obj) throws Exception {
        Class<?> clazz = obj.getClass();

        for (Method method : clazz.getDeclaredMethods()) {
            // Check if annotation is present
            if (method.isAnnotationPresent(Log.class)) {
                Log log = method.getAnnotation(Log.class);
                System.out.printf("[%s] Method: %s%n", log.level(), method.getName());
            }
        }
    }
}

// Output when called with new PaymentService():
// [DEBUG] Method: processPayment
// [INFO]  Method: refund

// All annotations on an element
Annotation[] all = method.getAnnotations();

// Class-level
Class<?> clazz = MyClass.class;
if (clazz.isAnnotationPresent(Roles.class)) {
    Roles roles = clazz.getAnnotation(Roles.class);
    System.out.println(Arrays.toString(roles.value())); // [ADMIN, MANAGER]
}

// Field-level
for (Field field : UserDto.class.getDeclaredFields()) {
    NotBlank nb = field.getAnnotation(NotBlank.class);
    if (nb != null) System.out.println(field.getName() + ": " + nb.message());
}`;

  code5 = `// Spring uses annotations to wire beans and handle web requests
@Service                                    // register as Spring bean
public class UserService {
    @Autowired                              // inject dependency
    private UserRepository repo;

    @Transactional                          // wrap in DB transaction
    public User save(User user) { return repo.save(user); }
}

@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")                    // GET /api/users/{id}
    public ResponseEntity<User> getUser(@PathVariable Long id) { /* ... */ return null; }

    @PostMapping                            // POST /api/users
    public ResponseEntity<User> create(@RequestBody @Valid UserDto dto) { /* ... */ return null; }
}

// Hibernate/JPA uses annotations for ORM mapping
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", nullable = false, unique = true, length = 50)
    private String username;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders;
}

// JUnit 5 uses annotations for test lifecycle
class UserServiceTest {
    @BeforeEach void setUp() { /* runs before each test */ }
    @AfterEach  void tearDown() { /* runs after each test */ }

    @Test
    void shouldSaveUser() { /* test logic */ }

    @ParameterizedTest
    @ValueSource(strings = {"alice", "bob", "carol"})
    void shouldAcceptValidUsername(String name) { /* runs 3 times */ }

    @Disabled("Flaky — fix in next sprint")
    @Test
    void skippedTest() { }
}`;
}
