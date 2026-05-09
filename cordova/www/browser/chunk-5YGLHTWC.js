import{a as d,b as m,c as p}from"./chunk-3MUY7VVQ.js";import{$a as a,Ba as i,Ka as c,ab as n,bb as t,cb as o,yb as e}from"./chunk-YTAFWVC7.js";import"./chunk-NWJ5J3BN.js";var u=class s{code1=`// Annotations attach metadata to code \u2014 they start with @
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
@Column(name = "user_name", nullable = false, length = 50) // multiple elements`;code2=`// @Override \u2014 catches typos in method names at compile time
public class Animal {
    public void speak() { System.out.println("..."); }
}
public class Dog extends Animal {
    @Override
    public void speak() { System.out.println("Woof!"); }
    // @Override
    // public void speek() { } // COMPILE ERROR \u2014 no such method in superclass
}

// @Deprecated \u2014 warns callers to use something else
public class StringUtils {
    @Deprecated(since = "2.0", forRemoval = true)
    public static String trim(String s) { return s.trim(); }

    public static String strip(String s) { return s.strip(); } // replacement
}

// @SuppressWarnings \u2014 suppress specific warnings
@SuppressWarnings("unchecked")
List<String> list = (List<String>) getRawList(); // no unchecked warning

@SuppressWarnings({"unchecked", "deprecation"}) // suppress multiple

// @FunctionalInterface \u2014 one abstract method, safe to use as lambda
@FunctionalInterface
public interface Transformer<T, R> {
    R transform(T input);
    // default and static methods are allowed
    default Transformer<T, R> andLog() { return input -> { R r = transform(input); System.out.println(r); return r; }; }
}
Transformer<String, Integer> strlen = s -> s.length(); // lambda works!

// @SafeVarargs \u2014 suppress heap pollution warning on varargs
@SafeVarargs
public static <T> List<T> listOf(T... elements) {
    return Arrays.asList(elements);
}`;code3=`import java.lang.annotation.*;

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

// Another example \u2014 field-level annotation for validation
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
    String[] value();  // array element named "value" \u2192 shorthand syntax
}

@Roles({"ADMIN", "MANAGER"})   // shorthand (single element named "value")
public class AdminController { }`;code4=`import java.lang.reflect.*;

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
}`;code5=`// Spring uses annotations to wire beans and handle web requests
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

    @Disabled("Flaky \u2014 fix in next sprint")
    @Test
    void skippedTest() { }
}`;static \u0275fac=function(l){return new(l||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-annotations"]],decls:233,vars:11,consts:[["title","Annotations","subtitle","Master Java annotations \u2014 built-in annotations, creating custom annotations with @Retention and @Target, and how frameworks like Spring use them.","badge","CORE JAVA","gradient","linear-gradient(135deg, #312e81, #6366f1)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","layers","css","icon-indigo",3,"size"],["name","code","css","icon-indigo",3,"size"],["name","search","css","icon-indigo",3,"size"],["name","zap","css","icon-indigo",3,"size"],["name","briefcase","css","icon-indigo",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(l,r){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),e(4," What Are Annotations? "),t(),n(5,"div",4)(6,"p"),e(7," Annotations are "),n(8,"strong"),e(9,"metadata"),t(),e(10," attached to code elements (classes, methods, fields, parameters, constructors). They don't change runtime behaviour directly \u2014 instead, tools (the compiler, annotation processors, or frameworks) read them and act on them. Annotations start with "),n(11,"code"),e(12,"@"),t(),e(13,". "),t(),n(14,"ul")(15,"li"),e(16,"The compiler reads annotations like "),n(17,"code"),e(18,"@Override"),t(),e(19," and "),n(20,"code"),e(21,"@FunctionalInterface"),t(),e(22," at compile time."),t(),n(23,"li"),e(24,"Annotation processors (APT) generate code or validate at compile time."),t(),n(25,"li"),e(26,"Frameworks (Spring, Hibernate, JUnit) read annotations at runtime via "),n(27,"strong"),e(28,"reflection"),t(),e(29,"."),t()(),o(30,"app-code-block",5),t()(),n(31,"section",1)(32,"h2",2),o(33,"app-icon",6),e(34," Built-in Java Annotations "),t(),n(35,"div",4)(36,"p"),e(37," Java ships with several standard annotations. The most important ones for everyday development and interviews are: "),t(),n(38,"ul")(39,"li")(40,"code"),e(41,"@Override"),t(),e(42," \u2014 compiler error if method doesn't actually override anything"),t(),n(43,"li")(44,"code"),e(45,"@Deprecated"),t(),e(46," \u2014 marks API for removal; compiler warns callers"),t(),n(47,"li")(48,"code"),e(49,"@SuppressWarnings"),t(),e(50," \u2014 suppresses specific compiler warnings"),t(),n(51,"li")(52,"code"),e(53,"@FunctionalInterface"),t(),e(54," \u2014 enforces exactly one abstract method (lambda-compatible)"),t(),n(55,"li")(56,"code"),e(57,"@SafeVarargs"),t(),e(58," \u2014 suppresses unchecked warnings on varargs methods"),t()(),o(59,"app-code-block",5),t()(),n(60,"section",1)(61,"h2",2),o(62,"app-icon",7),e(63," Creating Custom Annotations "),t(),n(64,"div",4)(65,"p"),e(66," Use the "),n(67,"code"),e(68,"@interface"),t(),e(69," keyword to declare an annotation. Use "),n(70,"strong"),e(71,"meta-annotations"),t(),e(72," to control how your annotation behaves: "),t(),n(73,"ul")(74,"li")(75,"code"),e(76,"@Retention(RetentionPolicy.RUNTIME)"),t(),e(77," \u2014 keep in bytecode and available at runtime (needed for frameworks)"),t(),n(78,"li")(79,"code"),e(80,"@Retention(RetentionPolicy.CLASS)"),t(),e(81," \u2014 default; kept in bytecode but NOT available at runtime"),t(),n(82,"li")(83,"code"),e(84,"@Retention(RetentionPolicy.SOURCE)"),t(),e(85," \u2014 discarded by compiler (e.g., "),n(86,"code"),e(87,"@Override"),t(),e(88,")"),t(),n(89,"li")(90,"code"),e(91,"@Target"),t(),e(92," \u2014 restricts where the annotation can be placed"),t(),n(93,"li")(94,"code"),e(95,"@Documented"),t(),e(96," \u2014 include in Javadoc"),t(),n(97,"li")(98,"code"),e(99,"@Inherited"),t(),e(100," \u2014 subclasses inherit the annotation from superclass"),t()(),o(101,"app-code-block",5),t()(),n(102,"section",1)(103,"h2",2),o(104,"app-icon",8),e(105," Reading Annotations via Reflection "),t(),n(106,"div",4)(107,"p"),e(108," At runtime, annotations with "),n(109,"code"),e(110,"RUNTIME"),t(),e(111," retention are accessible via the "),n(112,"code"),e(113,"java.lang.reflect"),t(),e(114," API. Use "),n(115,"code"),e(116,"isAnnotationPresent()"),t(),e(117,", "),n(118,"code"),e(119,"getAnnotation()"),t(),e(120,", and "),n(121,"code"),e(122,"getAnnotations()"),t(),e(123," on "),n(124,"code"),e(125,"Class"),t(),e(126,", "),n(127,"code"),e(128,"Method"),t(),e(129,", "),n(130,"code"),e(131,"Field"),t(),e(132,", etc. "),t(),o(133,"app-code-block",5),t()(),n(134,"section",1)(135,"h2",2),o(136,"app-icon",9),e(137," How Frameworks Use Annotations "),t(),n(138,"div",4)(139,"p"),e(140," Modern Java frameworks are annotation-driven. At startup, they scan the classpath for annotated classes and wire everything together using reflection. This replaces large XML configuration files. "),t(),n(141,"ul")(142,"li")(143,"strong"),e(144,"Spring"),t(),e(145,": "),n(146,"code"),e(147,"@Component"),t(),e(148,", "),n(149,"code"),e(150,"@Service"),t(),e(151,", "),n(152,"code"),e(153,"@Autowired"),t(),e(154,", "),n(155,"code"),e(156,"@RequestMapping"),t(),e(157,", "),n(158,"code"),e(159,"@Transactional"),t()(),n(160,"li")(161,"strong"),e(162,"Hibernate/JPA"),t(),e(163,": "),n(164,"code"),e(165,"@Entity"),t(),e(166,", "),n(167,"code"),e(168,"@Table"),t(),e(169,", "),n(170,"code"),e(171,"@Column"),t(),e(172,", "),n(173,"code"),e(174,"@OneToMany"),t()(),n(175,"li")(176,"strong"),e(177,"JUnit 5"),t(),e(178,": "),n(179,"code"),e(180,"@Test"),t(),e(181,", "),n(182,"code"),e(183,"@BeforeEach"),t(),e(184,", "),n(185,"code"),e(186,"@ParameterizedTest"),t()()(),o(187,"app-code-block",5),t()(),n(188,"section",1)(189,"h2",2),o(190,"app-icon",10),e(191," Interview Tips "),t(),n(192,"div",11)(193,"div",12)(194,"div",13),e(195,"1"),t(),n(196,"div")(197,"h4",14),e(198,"@Retention RUNTIME vs CLASS"),t(),n(199,"p",15)(200,"code"),e(201,"@Retention(CLASS)"),t(),e(202," is the default \u2014 the annotation is in the bytecode but NOT accessible at runtime via reflection. Always use "),n(203,"code"),e(204,"@Retention(RUNTIME)"),t(),e(205," for framework annotations that are read at runtime (Spring, Hibernate, custom validators)."),t()()(),n(206,"div",12)(207,"div",13),e(208,"2"),t(),n(209,"div")(210,"h4",14),e(211,"@Target Limits Placement"),t(),n(212,"p",15)(213,"code"),e(214,"@Target(ElementType.METHOD)"),t(),e(215," means the annotation can only appear on methods \u2014 placing it on a class or field causes a compile error. Use multiple targets with an array: "),n(216,"code"),e(217,"@Target({TYPE, METHOD})"),t(),e(218,". This prevents misuse and clarifies intent."),t()()(),n(219,"div",12)(220,"div",13),e(221,"3"),t(),n(222,"div")(223,"h4",14),e(224,"Annotation Processing"),t(),n(225,"p",15),e(226,"APT (Annotation Processing Tool) runs at "),n(227,"strong"),e(228,"compile time"),t(),e(229," and can generate new source files (e.g., Lombok, MapStruct). Reflection reads annotations at "),n(230,"strong"),e(231,"runtime"),t(),e(232," (e.g., Spring, JUnit). These are two completely different mechanisms."),t()()()()()()),l&2&&(i(3),a("size",28),i(27),a("code",r.code1),i(3),a("size",28),i(26),a("code",r.code2),i(3),a("size",28),i(39),a("code",r.code3),i(3),a("size",28),i(29),a("code",r.code4),i(3),a("size",28),i(51),a("code",r.code5),i(3),a("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-indigo[_ngcontent-%COMP%]{color:#6366f1}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#312e81}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#6366f1;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#312e81}"],changeDetection:0})};export{u as AnnotationsComponent};
