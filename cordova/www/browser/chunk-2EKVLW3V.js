import{a as d,b as m,c as p}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as a,S as c,ba as o,ca as n,da as t,ea as i,wa as e}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var u=class l{code1=`// Annotations attach metadata to code \u2014 they start with @
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
}`;static \u0275fac=function(s){return new(s||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-annotations"]],decls:235,vars:11,consts:[["title","Annotations","subtitle","Master Java annotations \u2014 built-in annotations, creating custom annotations with @Retention and @Target, and how frameworks like Spring use them.","badge","CORE JAVA","gradient","linear-gradient(135deg, #312e81, #6366f1)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"topic-hero-container"],["src","/assets/images/topics/annotations.png","alt","Java Annotations Diagram",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","layers","css","icon-indigo",3,"size"],["name","code","css","icon-indigo",3,"size"],["name","search","css","icon-indigo",3,"size"],["name","zap","css","icon-indigo",3,"size"],["name","briefcase","css","icon-indigo",3,"size"],[1,"tips-list"],[1,"tip-card"],[1,"tip-num"],[1,"tip-title"],[1,"tip-desc"]],template:function(s,r){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),e(4," What Are Annotations? "),t(),n(5,"div",4),i(6,"img",5),t(),n(7,"div",6)(8,"p"),e(9," Annotations are "),n(10,"strong"),e(11,"metadata"),t(),e(12," attached to code elements (classes, methods, fields, parameters, constructors). They don't change runtime behaviour directly \u2014 instead, tools (the compiler, annotation processors, or frameworks) read them and act on them. Annotations start with "),n(13,"code"),e(14,"@"),t(),e(15,". "),t(),n(16,"ul")(17,"li"),e(18,"The compiler reads annotations like "),n(19,"code"),e(20,"@Override"),t(),e(21," and "),n(22,"code"),e(23,"@FunctionalInterface"),t(),e(24," at compile time."),t(),n(25,"li"),e(26,"Annotation processors (APT) generate code or validate at compile time."),t(),n(27,"li"),e(28,"Frameworks (Spring, Hibernate, JUnit) read annotations at runtime via "),n(29,"strong"),e(30,"reflection"),t(),e(31,"."),t()(),i(32,"app-code-block",7),t()(),n(33,"section",1)(34,"h2",2),i(35,"app-icon",8),e(36," Built-in Java Annotations "),t(),n(37,"div",6)(38,"p"),e(39," Java ships with several standard annotations. The most important ones for everyday development and interviews are: "),t(),n(40,"ul")(41,"li")(42,"code"),e(43,"@Override"),t(),e(44," \u2014 compiler error if method doesn't actually override anything"),t(),n(45,"li")(46,"code"),e(47,"@Deprecated"),t(),e(48," \u2014 marks API for removal; compiler warns callers"),t(),n(49,"li")(50,"code"),e(51,"@SuppressWarnings"),t(),e(52," \u2014 suppresses specific compiler warnings"),t(),n(53,"li")(54,"code"),e(55,"@FunctionalInterface"),t(),e(56," \u2014 enforces exactly one abstract method (lambda-compatible)"),t(),n(57,"li")(58,"code"),e(59,"@SafeVarargs"),t(),e(60," \u2014 suppresses unchecked warnings on varargs methods"),t()(),i(61,"app-code-block",7),t()(),n(62,"section",1)(63,"h2",2),i(64,"app-icon",9),e(65," Creating Custom Annotations "),t(),n(66,"div",6)(67,"p"),e(68," Use the "),n(69,"code"),e(70,"@interface"),t(),e(71," keyword to declare an annotation. Use "),n(72,"strong"),e(73,"meta-annotations"),t(),e(74," to control how your annotation behaves: "),t(),n(75,"ul")(76,"li")(77,"code"),e(78,"@Retention(RetentionPolicy.RUNTIME)"),t(),e(79," \u2014 keep in bytecode and available at runtime (needed for frameworks)"),t(),n(80,"li")(81,"code"),e(82,"@Retention(RetentionPolicy.CLASS)"),t(),e(83," \u2014 default; kept in bytecode but NOT available at runtime"),t(),n(84,"li")(85,"code"),e(86,"@Retention(RetentionPolicy.SOURCE)"),t(),e(87," \u2014 discarded by compiler (e.g., "),n(88,"code"),e(89,"@Override"),t(),e(90,")"),t(),n(91,"li")(92,"code"),e(93,"@Target"),t(),e(94," \u2014 restricts where the annotation can be placed"),t(),n(95,"li")(96,"code"),e(97,"@Documented"),t(),e(98," \u2014 include in Javadoc"),t(),n(99,"li")(100,"code"),e(101,"@Inherited"),t(),e(102," \u2014 subclasses inherit the annotation from superclass"),t()(),i(103,"app-code-block",7),t()(),n(104,"section",1)(105,"h2",2),i(106,"app-icon",10),e(107," Reading Annotations via Reflection "),t(),n(108,"div",6)(109,"p"),e(110," At runtime, annotations with "),n(111,"code"),e(112,"RUNTIME"),t(),e(113," retention are accessible via the "),n(114,"code"),e(115,"java.lang.reflect"),t(),e(116," API. Use "),n(117,"code"),e(118,"isAnnotationPresent()"),t(),e(119,", "),n(120,"code"),e(121,"getAnnotation()"),t(),e(122,", and "),n(123,"code"),e(124,"getAnnotations()"),t(),e(125," on "),n(126,"code"),e(127,"Class"),t(),e(128,", "),n(129,"code"),e(130,"Method"),t(),e(131,", "),n(132,"code"),e(133,"Field"),t(),e(134,", etc. "),t(),i(135,"app-code-block",7),t()(),n(136,"section",1)(137,"h2",2),i(138,"app-icon",11),e(139," How Frameworks Use Annotations "),t(),n(140,"div",6)(141,"p"),e(142," Modern Java frameworks are annotation-driven. At startup, they scan the classpath for annotated classes and wire everything together using reflection. This replaces large XML configuration files. "),t(),n(143,"ul")(144,"li")(145,"strong"),e(146,"Spring"),t(),e(147,": "),n(148,"code"),e(149,"@Component"),t(),e(150,", "),n(151,"code"),e(152,"@Service"),t(),e(153,", "),n(154,"code"),e(155,"@Autowired"),t(),e(156,", "),n(157,"code"),e(158,"@RequestMapping"),t(),e(159,", "),n(160,"code"),e(161,"@Transactional"),t()(),n(162,"li")(163,"strong"),e(164,"Hibernate/JPA"),t(),e(165,": "),n(166,"code"),e(167,"@Entity"),t(),e(168,", "),n(169,"code"),e(170,"@Table"),t(),e(171,", "),n(172,"code"),e(173,"@Column"),t(),e(174,", "),n(175,"code"),e(176,"@OneToMany"),t()(),n(177,"li")(178,"strong"),e(179,"JUnit 5"),t(),e(180,": "),n(181,"code"),e(182,"@Test"),t(),e(183,", "),n(184,"code"),e(185,"@BeforeEach"),t(),e(186,", "),n(187,"code"),e(188,"@ParameterizedTest"),t()()(),i(189,"app-code-block",7),t()(),n(190,"section",1)(191,"h2",2),i(192,"app-icon",12),e(193," Interview Tips "),t(),n(194,"div",13)(195,"div",14)(196,"div",15),e(197,"1"),t(),n(198,"div")(199,"h4",16),e(200,"@Retention RUNTIME vs CLASS"),t(),n(201,"p",17)(202,"code"),e(203,"@Retention(CLASS)"),t(),e(204," is the default \u2014 the annotation is in the bytecode but NOT accessible at runtime via reflection. Always use "),n(205,"code"),e(206,"@Retention(RUNTIME)"),t(),e(207," for framework annotations that are read at runtime (Spring, Hibernate, custom validators)."),t()()(),n(208,"div",14)(209,"div",15),e(210,"2"),t(),n(211,"div")(212,"h4",16),e(213,"@Target Limits Placement"),t(),n(214,"p",17)(215,"code"),e(216,"@Target(ElementType.METHOD)"),t(),e(217," means the annotation can only appear on methods \u2014 placing it on a class or field causes a compile error. Use multiple targets with an array: "),n(218,"code"),e(219,"@Target({TYPE, METHOD})"),t(),e(220,". This prevents misuse and clarifies intent."),t()()(),n(221,"div",14)(222,"div",15),e(223,"3"),t(),n(224,"div")(225,"h4",16),e(226,"Annotation Processing"),t(),n(227,"p",17),e(228,"APT (Annotation Processing Tool) runs at "),n(229,"strong"),e(230,"compile time"),t(),e(231," and can generate new source files (e.g., Lombok, MapStruct). Reflection reads annotations at "),n(232,"strong"),e(233,"runtime"),t(),e(234," (e.g., Spring, JUnit). These are two completely different mechanisms."),t()()()()()()),s&2&&(a(3),o("size",28),a(29),o("code",r.code1),a(3),o("size",28),a(26),o("code",r.code2),a(3),o("size",28),a(39),o("code",r.code3),a(3),o("size",28),a(29),o("code",r.code4),a(3),o("size",28),a(51),o("code",r.code5),a(3),o("size",28))},dependencies:[d,m,p],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.topic-hero-container[_ngcontent-%COMP%]{text-align:center;margin:24px 0}.topic-hero-image[_ngcontent-%COMP%]{width:100%;max-width:650px;height:auto;border-radius:12px;box-shadow:0 8px 24px #0000001f;border:1px solid #D6DDD2}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#1b1b1b;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #D6DDD2}.icon-indigo[_ngcontent-%COMP%]{color:#6366f1}.prose[_ngcontent-%COMP%]{font-size:.9rem;color:#52665a;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1b1b1b;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#312e81}.tips-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.tip-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px 24px;border-radius:16px;border:1px solid #D6DDD2;background:#fff}.tip-num[_ngcontent-%COMP%]{width:36px;height:36px;min-width:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#6366f1;color:#fff;font-size:.85rem;font-weight:800}.tip-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#1b1b1b;margin:0 0 6px}.tip-desc[_ngcontent-%COMP%]{font-size:.82rem;color:#52665a;line-height:1.55;margin:0}.tip-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#eef2ff;padding:2px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.75rem;color:#312e81}"],changeDetection:0})};export{u as AnnotationsComponent};
