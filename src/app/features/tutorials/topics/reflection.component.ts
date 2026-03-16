import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-reflection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout
      title="Reflection API"
      subtitle="Inspect and manipulate classes, methods, and fields at runtime. Learn Class&lt;?&gt;, getDeclaredMethods(), dynamic invocation, and why frameworks like Spring rely on reflection."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #451a03, #f97316)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="search" [size]="28" css="icon-orange" /> Getting Class Objects</h2>
        <div class="prose">
          <p>The entry point to reflection is a <code>Class&lt;?&gt;</code> object, which contains the complete type descriptor for a class — its fields, methods, constructors, annotations, and supertype hierarchy. There are three ways to obtain one, each suited to a different situation.</p>
          <ul>
            <li><strong>MyClass.class</strong> — compile-time literal; type-safe; no exception possible.</li>
            <li><strong>obj.getClass()</strong> — runtime type of an existing instance; returns the concrete class, not the declared type.</li>
            <li><strong>Class.forName("...")</strong> — dynamic lookup by fully qualified name; throws <code>ClassNotFoundException</code>; used by plugin systems and frameworks.</li>
          </ul>
          <app-code-block [code]="code1" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="list" [size]="28" css="icon-orange" /> Inspecting Fields</h2>
        <div class="prose">
          <p><code>getFields()</code> returns only <strong>public</strong> fields (including inherited ones). <code>getDeclaredFields()</code> returns <strong>all</strong> fields declared in that class (private, protected, package-private, public) but not inherited ones. To access a private field, call <code>field.setAccessible(true)</code> — this bypasses Java's access control checks.</p>
          <app-code-block [code]="code2" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="play" [size]="28" css="icon-orange" /> Inspecting and Invoking Methods</h2>
        <div class="prose">
          <p><code>getMethods()</code> returns all public methods (including inherited). <code>getDeclaredMethods()</code> returns all methods declared in the class. <code>method.invoke(instance, args)</code> calls the method reflectively. This is the core mechanism used by JUnit to discover and run <code>&#64;Test</code> methods without coupling to user code at compile time.</p>
          <app-code-block [code]="code3" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="package" [size]="28" css="icon-orange" /> Constructors and Dynamic Instantiation</h2>
        <div class="prose">
          <p>Reflection can instantiate classes by name — a powerful technique for plugin systems and dependency injection containers. <code>getConstructors()</code> returns public constructors; <code>getDeclaredConstructors()</code> returns all. <code>constructor.newInstance(args)</code> creates the object. This is how Spring creates beans, JPA creates entity instances, and plugin frameworks load extensions without compile-time knowledge of the class.</p>
          <app-code-block [code]="code4" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="globe" [size]="28" css="icon-orange" /> Reflection in Frameworks</h2>
        <div class="prose">
          <p>Virtually every major Java framework relies heavily on reflection. Spring scans for <code>&#64;Autowired</code> / <code>&#64;Inject</code> annotations and injects dependencies into private fields. JUnit finds all <code>&#64;Test</code> methods and invokes them. Jackson serializes objects to JSON by reading field names and values reflectively. The performance cost is real but manageable — cache <code>Method</code> and <code>Field</code> objects; for hot paths consider <code>MethodHandle</code> or compile-time code generation (APT / Lombok).</p>
          <app-code-block [code]="code5" />
        </div>
      </section>

      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-orange" /> Interview Tips</h2>
        <div class="tips-list">
          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h4 class="tip-title">Performance Cost</h4>
              <p class="tip-desc">Reflective calls bypass JIT optimizations like inlining and are 10–100x slower than direct calls. Mitigate by caching <code>Method</code>, <code>Field</code>, and <code>Constructor</code> objects (lookup is the expensive part). For truly hot paths, replace <code>Method.invoke()</code> with <code>MethodHandle</code> (Java 7+) or <code>LambdaMetafactory</code> (Java 8+) which can be JIT-optimized.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h4 class="tip-title">Security and Module System</h4>
              <p class="tip-desc"><code>setAccessible(true)</code> may be blocked by the Java module system (Java 9+). Modules that do not <code>open</code> their packages deny deep reflection. Frameworks like Spring require module <code>opens</code> directives or <code>--add-opens</code> JVM flags. A <code>SecurityManager</code> (deprecated Java 17, removed Java 18+) could also block it in older environments.</p>
            </div>
          </div>
          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h4 class="tip-title">Appropriate Use Cases</h4>
              <p class="tip-desc">Reflection is a power tool for framework and library authors — DI containers, ORMs, serializers, test runners, and plugin systems. It is generally wrong to use it in normal application code. If you find yourself reflecting on classes you own, reconsider your design: interfaces, generics, or functional patterns usually provide a cleaner and faster solution.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; }
    .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #1B1B1B; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #D6DDD2; }
    .icon-orange { color: #f97316; }
    .prose { font-size: 0.9rem; color: #52665A; line-height: 1.75; }
    .prose p { margin: 0 0 14px; }
    .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; }
    .prose li { margin-bottom: 8px; }
    .prose strong { color: #1B1B1B; font-weight: 700; }
    .prose em { font-style: italic; }
    .prose code { background: #fff7ed; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c2d12; }
    .tips-list { display: flex; flex-direction: column; gap: 12px; }
    .tip-card { display: flex; gap: 16px; padding: 20px 24px; border-radius: 16px; border: 1px solid #D6DDD2; background: #fff; }
    .tip-num { width: 36px; height: 36px; min-width: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #f97316; color: #fff; font-size: 0.85rem; font-weight: 800; }
    .tip-title { font-size: 0.95rem; font-weight: 700; color: #1B1B1B; margin: 0 0 6px; }
    .tip-desc { font-size: 0.82rem; color: #52665A; line-height: 1.55; margin: 0; }
    .tip-desc code { background: #fff7ed; padding: 2px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: #7c2d12; }
  `
})
export class ReflectionComponent {
  code1 = `import java.lang.reflect.*;

// ── 3 ways to get a Class<?> object ──────────────────────

// 1. Compile-time class literal (safest, no exception)
Class<String> c1 = String.class;

// 2. Runtime type of an existing instance
Object obj = "Hello";
Class<?> c2 = obj.getClass(); // returns String.class (not Object.class!)

// 3. Dynamic lookup by fully-qualified name
try {
    Class<?> c3 = Class.forName("java.util.ArrayList");
    // Throws ClassNotFoundException if not on classpath
} catch (ClassNotFoundException e) {
    e.printStackTrace();
}

// ── Interrogating Class metadata ─────────────────────────
Class<?> clazz = ArrayList.class;

System.out.println(clazz.getSimpleName());     // ArrayList
System.out.println(clazz.getName());           // java.util.ArrayList
System.out.println(clazz.getPackageName());    // java.util
System.out.println(clazz.getSuperclass());     // class java.util.AbstractList

// Interfaces implemented
for (Class<?> iface : clazz.getInterfaces()) {
    System.out.println("implements: " + iface.getSimpleName());
}
// implements: List, RandomAccess, Cloneable, Serializable

// Modifiers
int mods = clazz.getModifiers();
System.out.println(Modifier.isPublic(mods));   // true
System.out.println(Modifier.isAbstract(mods)); // false`;

  code2 = `import java.lang.reflect.*;

class Employee {
    public    String  name;
    protected int     age;
              double  salary;   // package-private
    private   String  ssn;      // sensitive — private

    public Employee(String name, int age, double salary, String ssn) {
        this.name = name; this.age = age;
        this.salary = salary; this.ssn = ssn;
    }
}

public class FieldInspection {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Employee.class;

        // getFields() → only public fields (+ inherited public fields)
        System.out.println("=== Public fields ===");
        for (Field f : clazz.getFields()) {
            System.out.println(f.getType().getSimpleName() + " " + f.getName());
        }
        // name (the only public one)

        // getDeclaredFields() → ALL fields declared in this class
        System.out.println("=== All declared fields ===");
        for (Field f : clazz.getDeclaredFields()) {
            System.out.printf("%s %s %s%n",
                Modifier.toString(f.getModifiers()),
                f.getType().getSimpleName(),
                f.getName());
        }

        // Reading a private field
        Employee emp = new Employee("Alice", 30, 95_000.0, "123-45-6789");

        Field ssnField = clazz.getDeclaredField("ssn");
        ssnField.setAccessible(true);          // bypass access control
        String ssn = (String) ssnField.get(emp);
        System.out.println("SSN: " + ssn);     // 123-45-6789

        // Writing a private field
        ssnField.set(emp, "999-99-9999");
        System.out.println("Updated SSN: " + ssnField.get(emp));
    }
}`;

  code3 = `import java.lang.annotation.*;
import java.lang.reflect.*;
import java.util.*;

// Custom annotation to mark test methods
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface MyTest {
    String description() default "";
}

// A class with annotated test methods
class MathUtils {
    public int add(int a, int b) { return a + b; }
    public int subtract(int a, int b) { return a - b; }

    @MyTest(description = "add two positives")
    public void testAdd() {
        int result = add(2, 3);
        if (result != 5) throw new AssertionError("Expected 5, got " + result);
        System.out.println("  testAdd PASSED");
    }

    @MyTest(description = "subtract gives negative")
    public void testSubtract() {
        int result = subtract(3, 10);
        if (result != -7) throw new AssertionError("Expected -7, got " + result);
        System.out.println("  testSubtract PASSED");
    }

    public void helperMethod() { /* not annotated — skipped by runner */ }
}

// Mini test runner using reflection (how JUnit works internally)
public class SimpleTestRunner {
    public static void runTests(Class<?> testClass) throws Exception {
        Object instance = testClass.getDeclaredConstructor().newInstance();
        int passed = 0, failed = 0;

        for (Method method : testClass.getDeclaredMethods()) {
            if (method.isAnnotationPresent(MyTest.class)) {
                MyTest annotation = method.getAnnotation(MyTest.class);
                System.out.println("Running: " + annotation.description());
                try {
                    method.invoke(instance); // reflective invocation
                    passed++;
                } catch (InvocationTargetException e) {
                    System.out.println("  FAILED: " + e.getCause().getMessage());
                    failed++;
                }
            }
        }
        System.out.printf("Results: %d passed, %d failed%n", passed, failed);
    }

    public static void main(String[] args) throws Exception {
        runTests(MathUtils.class);
    }
}`;

  code4 = `import java.lang.reflect.*;
import java.util.*;

// Plugin interface — known at compile time
interface Plugin {
    String getName();
    void execute(Map<String, String> config);
}

// Concrete implementations — loaded dynamically
class LoggingPlugin implements Plugin {
    public String getName() { return "Logging"; }
    public void execute(Map<String, String> config) {
        System.out.println("[LOG] level=" + config.getOrDefault("level", "INFO"));
    }
}

class MetricsPlugin implements Plugin {
    private final String endpoint;

    // Constructor with argument — invoked reflectively
    public MetricsPlugin(String endpoint) {
        this.endpoint = endpoint;
    }
    public String getName() { return "Metrics"; }
    public void execute(Map<String, String> config) {
        System.out.println("[METRICS] pushing to " + endpoint);
    }
}

// Plugin loader — loads by class name at runtime
public class PluginLoader {
    public static Plugin load(String className, Object... ctorArgs)
            throws Exception {
        Class<?> clazz = Class.forName(className);

        // Find constructor matching the argument types
        Constructor<?> ctor;
        if (ctorArgs.length == 0) {
            ctor = clazz.getDeclaredConstructor(); // no-arg
        } else {
            Class<?>[] paramTypes = Arrays.stream(ctorArgs)
                .map(Object::getClass)
                .toArray(Class[]::new);
            ctor = clazz.getDeclaredConstructor(paramTypes);
        }

        ctor.setAccessible(true);
        return (Plugin) ctor.newInstance(ctorArgs);
    }

    public static void main(String[] args) throws Exception {
        // Load by name — class can be provided via config file
        Plugin p1 = load("LoggingPlugin");
        Plugin p2 = load("MetricsPlugin", "https://metrics.example.com");

        Map<String, String> cfg = Map.of("level", "DEBUG");
        p1.execute(cfg); // [LOG] level=DEBUG
        p2.execute(cfg); // [METRICS] pushing to https://metrics.example.com

        // Inspect available constructors
        for (Constructor<?> c : MetricsPlugin.class.getDeclaredConstructors()) {
            System.out.println("Constructor: " + c);
            for (Parameter param : c.getParameters()) {
                System.out.println("  param: " + param.getType().getSimpleName()
                    + " " + param.getName());
            }
        }
    }
}`;

  code5 = `import java.lang.reflect.*;
import java.lang.invoke.*;

// ── How frameworks use reflection ─────────────────────────

// Spring-style @Autowired field injection (simplified)
class SimpleInjector {
    public static void inject(Object target, Map<Class<?>, Object> beans)
            throws Exception {
        for (Field field : target.getClass().getDeclaredFields()) {
            if (field.isAnnotationPresent(Autowired.class)) {
                Object bean = beans.get(field.getType());
                if (bean != null) {
                    field.setAccessible(true);
                    field.set(target, bean);
                    System.out.println("Injected " + field.getType().getSimpleName()
                        + " into " + field.getName());
                }
            }
        }
    }
}

// ── Performance: cache Method objects ─────────────────────
class ReflectionCache {
    // BAD: lookup on every call (expensive)
    static void badInvoke(Object obj, String methodName) throws Exception {
        obj.getClass().getMethod(methodName).invoke(obj); // lookup each time!
    }

    // GOOD: cache the Method object
    private static final Map<String, Method> METHOD_CACHE = new HashMap<>();

    static void goodInvoke(Object obj, String methodName) throws Exception {
        Method m = METHOD_CACHE.computeIfAbsent(methodName, name -> {
            try { return obj.getClass().getMethod(name); }
            catch (NoSuchMethodException e) { throw new RuntimeException(e); }
        });
        m.invoke(obj);
    }
}

// ── MethodHandle: faster than reflection for hot paths ────
class MethodHandleDemo {
    public static void main(String[] args) throws Throwable {
        MethodHandles.Lookup lookup = MethodHandles.lookup();

        // Get a MethodHandle for String.length()
        MethodType mt = MethodType.methodType(int.class);
        MethodHandle lengthHandle = lookup.findVirtual(String.class, "length", mt);

        String s = "Hello, MethodHandle!";
        int len = (int) lengthHandle.invoke(s); // JIT can inline this!
        System.out.println("Length: " + len);   // 20

        // MethodHandle to a static method
        MethodHandle parseInt = lookup.findStatic(Integer.class, "parseInt",
            MethodType.methodType(int.class, String.class));
        int val = (int) parseInt.invoke("42");
        System.out.println("Parsed: " + val); // 42
    }
}`;
}
