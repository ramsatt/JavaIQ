import{a as d,b as p,c as m}from"./chunk-VPQEQBVO.js";import{Ba as i,Ka as c,ab as o,bb as n,cb as t,db as a,zb as e}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var g=class r{code1=`import java.lang.reflect.*;

// \u2500\u2500 3 ways to get a Class<?> object \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

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

// \u2500\u2500 Interrogating Class metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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
System.out.println(Modifier.isAbstract(mods)); // false`;code2=`import java.lang.reflect.*;

class Employee {
    public    String  name;
    protected int     age;
              double  salary;   // package-private
    private   String  ssn;      // sensitive \u2014 private

    public Employee(String name, int age, double salary, String ssn) {
        this.name = name; this.age = age;
        this.salary = salary; this.ssn = ssn;
    }
}

public class FieldInspection {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Employee.class;

        // getFields() \u2192 only public fields (+ inherited public fields)
        System.out.println("=== Public fields ===");
        for (Field f : clazz.getFields()) {
            System.out.println(f.getType().getSimpleName() + " " + f.getName());
        }
        // name (the only public one)

        // getDeclaredFields() \u2192 ALL fields declared in this class
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
}`;code3=`import java.lang.annotation.*;
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

    public void helperMethod() { /* not annotated \u2014 skipped by runner */ }
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
}`;code4=`import java.lang.reflect.*;
import java.util.*;

// Plugin interface \u2014 known at compile time
interface Plugin {
    String getName();
    void execute(Map<String, String> config);
}

// Concrete implementations \u2014 loaded dynamically
class LoggingPlugin implements Plugin {
    public String getName() { return "Logging"; }
    public void execute(Map<String, String> config) {
        System.out.println("[LOG] level=" + config.getOrDefault("level", "INFO"));
    }
}

class MetricsPlugin implements Plugin {
    private final String endpoint;

    // Constructor with argument \u2014 invoked reflectively
    public MetricsPlugin(String endpoint) {
        this.endpoint = endpoint;
    }
    public String getName() { return "Metrics"; }
    public void execute(Map<String, String> config) {
        System.out.println("[METRICS] pushing to " + endpoint);
    }
}

// Plugin loader \u2014 loads by class name at runtime
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
        // Load by name \u2014 class can be provided via config file
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
}`;code5=`import java.lang.reflect.*;
import java.lang.invoke.*;

// \u2500\u2500 How frameworks use reflection \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

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

// \u2500\u2500 Performance: cache Method objects \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
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

// \u2500\u2500 MethodHandle: faster than reflection for hot paths \u2500\u2500\u2500\u2500
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
}`;static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["app-topic-reflection"]],decls:173,vars:11,consts:[["title","Reflection API","subtitle","Inspect and manipulate classes, methods, and fields at runtime. Learn Class<?>, getDeclaredMethods(), dynamic invocation, and why frameworks like Spring rely on reflection.","badge","CORE JAVA","gradient","linear-gradient(135deg, #451a03, #f97316)"],[1,"section"],[1,"section-heading"],["name","search","css","icon-orange",3,"size"],[1,"prose"],[3,"code"],["name","list","css","icon-orange",3,"size"],["name","play","css","icon-orange",3,"size"],["name","package","css","icon-orange",3,"size"],["name","globe","css","icon-orange",3,"size"],["name","briefcase","css","icon-orange",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,s){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),e(4," Getting Class Objects"),t(),n(5,"div",4)(6,"p"),e(7,"The entry point to reflection is a "),n(8,"code"),e(9,"Class<?>"),t(),e(10," object, which contains the complete type descriptor for a class \u2014 its fields, methods, constructors, annotations, and supertype hierarchy. There are three ways to obtain one, each suited to a different situation."),t(),n(11,"ul")(12,"li")(13,"strong"),e(14,"MyClass.class"),t(),e(15," \u2014 compile-time literal; type-safe; no exception possible."),t(),n(16,"li")(17,"strong"),e(18,"obj.getClass()"),t(),e(19," \u2014 runtime type of an existing instance; returns the concrete class, not the declared type."),t(),n(20,"li")(21,"strong"),e(22,'Class.forName("...")'),t(),e(23," \u2014 dynamic lookup by fully qualified name; throws "),n(24,"code"),e(25,"ClassNotFoundException"),t(),e(26,"; used by plugin systems and frameworks."),t()(),a(27,"app-code-block",5),t()(),n(28,"section",1)(29,"h2",2),a(30,"app-icon",6),e(31," Inspecting Fields"),t(),n(32,"div",4)(33,"p")(34,"code"),e(35,"getFields()"),t(),e(36," returns only "),n(37,"strong"),e(38,"public"),t(),e(39," fields (including inherited ones). "),n(40,"code"),e(41,"getDeclaredFields()"),t(),e(42," returns "),n(43,"strong"),e(44,"all"),t(),e(45," fields declared in that class (private, protected, package-private, public) but not inherited ones. To access a private field, call "),n(46,"code"),e(47,"field.setAccessible(true)"),t(),e(48," \u2014 this bypasses Java's access control checks."),t(),a(49,"app-code-block",5),t()(),n(50,"section",1)(51,"h2",2),a(52,"app-icon",7),e(53," Inspecting and Invoking Methods"),t(),n(54,"div",4)(55,"p")(56,"code"),e(57,"getMethods()"),t(),e(58," returns all public methods (including inherited). "),n(59,"code"),e(60,"getDeclaredMethods()"),t(),e(61," returns all methods declared in the class. "),n(62,"code"),e(63,"method.invoke(instance, args)"),t(),e(64," calls the method reflectively. This is the core mechanism used by JUnit to discover and run "),n(65,"code"),e(66,"@Test"),t(),e(67," methods without coupling to user code at compile time."),t(),a(68,"app-code-block",5),t()(),n(69,"section",1)(70,"h2",2),a(71,"app-icon",8),e(72," Constructors and Dynamic Instantiation"),t(),n(73,"div",4)(74,"p"),e(75,"Reflection can instantiate classes by name \u2014 a powerful technique for plugin systems and dependency injection containers. "),n(76,"code"),e(77,"getConstructors()"),t(),e(78," returns public constructors; "),n(79,"code"),e(80,"getDeclaredConstructors()"),t(),e(81," returns all. "),n(82,"code"),e(83,"constructor.newInstance(args)"),t(),e(84," creates the object. This is how Spring creates beans, JPA creates entity instances, and plugin frameworks load extensions without compile-time knowledge of the class."),t(),a(85,"app-code-block",5),t()(),n(86,"section",1)(87,"h2",2),a(88,"app-icon",9),e(89," Reflection in Frameworks"),t(),n(90,"div",4)(91,"p"),e(92,"Virtually every major Java framework relies heavily on reflection. Spring scans for "),n(93,"code"),e(94,"@Autowired"),t(),e(95," / "),n(96,"code"),e(97,"@Inject"),t(),e(98," annotations and injects dependencies into private fields. JUnit finds all "),n(99,"code"),e(100,"@Test"),t(),e(101," methods and invokes them. Jackson serializes objects to JSON by reading field names and values reflectively. The performance cost is real but manageable \u2014 cache "),n(102,"code"),e(103,"Method"),t(),e(104," and "),n(105,"code"),e(106,"Field"),t(),e(107," objects; for hot paths consider "),n(108,"code"),e(109,"MethodHandle"),t(),e(110," or compile-time code generation (APT / Lombok)."),t(),a(111,"app-code-block",5),t()(),n(112,"section",1)(113,"h2",2),a(114,"app-icon",10),e(115," Interview Tips"),t(),n(116,"div",11)(117,"div",12)(118,"div",13),e(119,"1"),t(),n(120,"div")(121,"h4",14),e(122,"Performance Cost"),t(),n(123,"p",15),e(124,"Reflective calls bypass JIT optimizations like inlining and are 10\u2013100x slower than direct calls. Mitigate by caching "),n(125,"code"),e(126,"Method"),t(),e(127,", "),n(128,"code"),e(129,"Field"),t(),e(130,", and "),n(131,"code"),e(132,"Constructor"),t(),e(133," objects (lookup is the expensive part). For truly hot paths, replace "),n(134,"code"),e(135,"Method.invoke()"),t(),e(136," with "),n(137,"code"),e(138,"MethodHandle"),t(),e(139," (Java 7+) or "),n(140,"code"),e(141,"LambdaMetafactory"),t(),e(142," (Java 8+) which can be JIT-optimized."),t()()(),n(143,"div",12)(144,"div",13),e(145,"2"),t(),n(146,"div")(147,"h4",14),e(148,"Security and Module System"),t(),n(149,"p",15)(150,"code"),e(151,"setAccessible(true)"),t(),e(152," may be blocked by the Java module system (Java 9+). Modules that do not "),n(153,"code"),e(154,"open"),t(),e(155," their packages deny deep reflection. Frameworks like Spring require module "),n(156,"code"),e(157,"opens"),t(),e(158," directives or "),n(159,"code"),e(160,"--add-opens"),t(),e(161," JVM flags. A "),n(162,"code"),e(163,"SecurityManager"),t(),e(164," (deprecated Java 17, removed Java 18+) could also block it in older environments."),t()()(),n(165,"div",12)(166,"div",13),e(167,"3"),t(),n(168,"div")(169,"h4",14),e(170,"Appropriate Use Cases"),t(),n(171,"p",15),e(172,"Reflection is a power tool for framework and library authors \u2014 DI containers, ORMs, serializers, test runners, and plugin systems. It is generally wrong to use it in normal application code. If you find yourself reflecting on classes you own, reconsider your design: interfaces, generics, or functional patterns usually provide a cleaner and faster solution."),t()()()()()()),l&2&&(i(3),o("size",28),i(24),o("code",s.code1),i(3),o("size",28),i(19),o("code",s.code2),i(3),o("size",28),i(16),o("code",s.code3),i(3),o("size",28),i(14),o("code",s.code4),i(3),o("size",28),i(23),o("code",s.code5),i(3),o("size",28))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-orange[_ngcontent-%COMP%]{color:#f97316}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c2d12}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#f97316;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#fff7ed;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#7c2d12}"],changeDetection:0})};export{g as ReflectionComponent};
