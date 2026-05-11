import{a as D,b as E,c as R,d as M,e as F,f as L,g as O,h as q}from"./chunk-Y2CGLXE7.js";import{$ as I,M as w,P as C,S as A,T as n,U as k,V as P,X as y,Y as d,Z as p,_ as u,aa as o,ba as x,ea as T}from"./chunk-OVRVSE6Z.js";import{T as b,Y as h,oa as l,qa as v}from"./chunk-QMXD7TGL.js";import{a as S,b as f}from"./chunk-NWJ5J3BN.js";var N=[{id:1002,category:"Spring Framework",question:"What is the Spring Framework and what problem does it solve?",answer:"Spring is an open-source Java application framework that simplifies enterprise development by providing a lightweight container for dependency injection, aspect-oriented programming, data access, and web MVC. It solves the boilerplate and tight-coupling problems of traditional Java EE development.",asked_metadata:"Asked at TCS, Infosys, Wipro, Cognizant",subConcepts:[{title:"Core Container",description:"IoC container that manages bean lifecycle via BeanFactory and ApplicationContext."},{title:"AOP Module",description:"Cross-cutting concerns (logging, security, transactions) separated from business logic using proxies."},{title:"Data Access",description:"Abstractions over JDBC, ORM frameworks, and transaction management."}]},{id:1003,category:"Spring Framework",question:"What is Inversion of Control (IoC) in Spring?",answer:"IoC is a design principle where the control of object creation and dependency resolution is transferred from application code to a container (Spring IoC). Instead of objects creating their own dependencies, the Spring container injects them. This decouples components and makes code easier to test.",asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`// Without IoC \u2014 tight coupling
public class OrderService {
    // OrderService creates its own dependency
    private PaymentService paymentService = new PaymentService();
}

// With IoC \u2014 Spring injects the dependency
@Service
public class OrderService {
    private final PaymentService paymentService;

    @Autowired
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService; // Spring injects this
    }
}`},{id:1004,category:"Spring Framework",question:"What is Dependency Injection and what are its types in Spring?",answer:"Dependency Injection (DI) is a specific form of IoC where dependencies are provided to a class rather than the class creating them. Spring supports three types: Constructor Injection (preferred \u2014 immutable, testable), Setter Injection (optional dependencies), and Field Injection (via @Autowired on fields \u2014 avoid in production code).",asked_metadata:"Asked at Google, Amazon, TCS",code:`// 1. Constructor Injection (recommended)
@Service
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo) { this.repo = repo; }
}

// 2. Setter Injection
@Service
public class EmailService {
    private SmtpClient client;
    @Autowired
    public void setClient(SmtpClient client) { this.client = client; }
}

// 3. Field Injection (avoid \u2014 hides dependencies, hard to test)
@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;
}`},{id:1005,category:"Spring Framework",question:"What is the difference between BeanFactory and ApplicationContext?",answer:"BeanFactory is the root Spring IoC container \u2014 lightweight, creates beans lazily on first request. ApplicationContext extends BeanFactory and adds enterprise features: event publishing, MessageSource for i18n, AOP integration, and eager singleton initialization. Use ApplicationContext in almost all applications; BeanFactory is only for resource-constrained environments.",asked_metadata:"Asked at Wipro, HCL, Cognizant",subConcepts:[{title:"BeanFactory",description:"Basic IoC container. Lazy bean initialization. No event publishing, no AOP auto-proxy, no MessageSource."},{title:"ApplicationContext",description:"Full-featured container. Eager singleton init, ApplicationEvent publishing, BeanPostProcessor auto-detection, MessageSource."},{title:"Common Implementations",description:"ClassPathXmlApplicationContext (XML), AnnotationConfigApplicationContext (@Configuration), WebApplicationContext (web apps)."}]},{id:1006,category:"Spring Framework",question:"What is a Spring Bean and what are its scopes?",answer:"A Spring Bean is any object managed by the Spring IoC container. Scopes control how many instances the container creates. Singleton (default) \u2014 one instance per container. Prototype \u2014 new instance per request. Request, Session, Application, WebSocket \u2014 web-aware scopes tied to HTTP lifecycle.",asked_metadata:"Asked at Infosys, TCS, Amazon",code:`@Component
@Scope("singleton")   // default \u2014 one shared instance
public class ConfigService { }

@Component
@Scope("prototype")   // new instance every time it is injected
public class ShoppingCart { }

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestContext { }   // one per HTTP request`},{id:1007,category:"Spring Framework",question:"What is the Spring Bean lifecycle?",answer:"Spring bean lifecycle: Container instantiates bean \u2192 injects dependencies \u2192 calls BeanNameAware/BeanFactoryAware callbacks \u2192 BeanPostProcessor.postProcessBeforeInitialization() \u2192 @PostConstruct / afterPropertiesSet() / init-method \u2192 BeanPostProcessor.postProcessAfterInitialization() \u2192 bean is ready \u2192 on shutdown: @PreDestroy / destroy() / destroy-method.",asked_metadata:"Asked at Flipkart, Amazon, Wipro",code:`@Component
public class DatabasePool {

    @PostConstruct
    public void init() {
        // Runs after Spring injects all dependencies
        System.out.println("Pool created, opening connections");
    }

    @PreDestroy
    public void cleanup() {
        // Runs before Spring removes the bean
        System.out.println("Pool destroyed, closing connections");
    }
}`},{id:1008,category:"Spring Framework",question:"What is @Component, @Service, @Repository, and @Controller?",answer:"@Component is the generic stereotype annotation that makes a class a Spring-managed bean. @Service, @Repository, and @Controller are specialisations: @Service marks business logic classes; @Repository marks data-access classes (also enables persistence exception translation); @Controller marks Spring MVC controllers. All four trigger component scanning.",asked_metadata:"Asked at TCS, Infosys, Cognizant, HCL",subConcepts:[{title:"@Component",description:"Generic bean. Use when no specific role applies."},{title:"@Service",description:"Business layer. Semantically meaningful, enables potential AOP pointcuts on the service layer."},{title:"@Repository",description:"Persistence layer. Spring wraps SQLExceptions in DataAccessException hierarchy."},{title:"@Controller / @RestController",description:"@Controller + @ResponseBody = @RestController. Handles HTTP requests in MVC."}]},{id:1009,category:"Spring Framework",question:"What is @Autowired and how does Spring resolve dependencies?",answer:'@Autowired tells Spring to inject a matching bean. Spring resolves by type first. If multiple beans of the same type exist, use @Qualifier("beanName") to specify which one, or mark one as @Primary. Circular dependency with constructor injection causes a BeanCurrentlyInCreationException \u2014 break it with setter injection or @Lazy.',asked_metadata:"Asked at Amazon, Google, Flipkart",code:`@Service
public class NotificationService {

    private final EmailSender emailSender;
    private final SmsSender smsSender;

    @Autowired
    public NotificationService(
            @Qualifier("gmailSender") EmailSender emailSender,
            SmsSender smsSender) {
        this.emailSender = emailSender;
        this.smsSender = smsSender;
    }
}`},{id:1010,category:"Spring Framework",question:"What is @Configuration and @Bean in Spring?",answer:"@Configuration marks a class as a source of bean definitions \u2014 it is a full proxy class. Methods annotated with @Bean produce bean instances managed by the container. Unlike @Component, calling a @Bean method from within a @Configuration class returns the same singleton instance (method call is intercepted by CGLIB proxy).",asked_metadata:"Asked at Amazon, Wipro, Infosys",code:`@Configuration
public class AppConfig {

    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://localhost/mydb");
        return ds;
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}`},{id:1011,category:"Spring Framework",question:"What is Spring AOP and what problems does it solve?",answer:"Spring AOP (Aspect-Oriented Programming) separates cross-cutting concerns \u2014 logging, security, transaction management, caching \u2014 from business logic using proxies. Key terms: Aspect (the concern module), Advice (the action: @Before, @After, @Around, @AfterReturning, @AfterThrowing), Pointcut (where to apply: method, class, annotation), JoinPoint (runtime info about the intercepted method).",asked_metadata:"Asked at Flipkart, Amazon, TCS",code:`@Aspect
@Component
public class LoggingAspect {

    // Pointcut: all methods in service package
    @Around("execution(* com.example.service.*.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed();
        long elapsed = System.currentTimeMillis() - start;
        System.out.println(pjp.getSignature() + " ran in " + elapsed + "ms");
        return result;
    }
}`},{id:1012,category:"Spring Framework",question:"What is the difference between @Component and @Bean?",answer:"@Component is a class-level annotation used with component scanning \u2014 Spring auto-detects the class and instantiates it. @Bean is a method-level annotation inside @Configuration classes \u2014 you manually write the code to create the bean. Use @Bean when: wiring third-party classes (you cannot add @Component to them), needing conditional creation, or wanting explicit control over instantiation.",asked_metadata:"Asked at Infosys, Cognizant, Wipro",subConcepts:[{title:"@Component",description:"Class you own. Spring creates it via no-arg or @Autowired constructor. Detected by @ComponentScan."},{title:"@Bean",description:"Inside @Configuration. You control the creation logic. Works on any class including third-party."}]},{id:1013,category:"Spring Framework",question:"What is Spring MVC and how does a request flow through it?",answer:"Spring MVC is a web framework built on the front-controller pattern. Request flow: Client \u2192 DispatcherServlet (front controller) \u2192 HandlerMapping (finds controller method) \u2192 HandlerAdapter (invokes it) \u2192 Controller (processes, returns ModelAndView) \u2192 ViewResolver (resolves view) \u2192 View (renders HTML) \u2192 Response to client. With @RestController the view step is skipped and the return value is serialised directly to JSON/XML.",asked_metadata:"Asked at Amazon, TCS, HCL",subConcepts:[{title:"DispatcherServlet",description:"Single entry-point servlet that delegates to all other components."},{title:"HandlerMapping",description:"Maps URL patterns to controller methods via @RequestMapping."},{title:"ViewResolver",description:"Resolves logical view names to actual template files (Thymeleaf, JSP)."}]},{id:1014,category:"Spring Framework",question:"What is @Transactional and how does it work internally?",answer:"@Transactional wraps a method in a database transaction using a Spring AOP proxy. When the annotated method is called, the proxy begins a transaction before the method runs and commits or rolls back after. Rollback happens automatically on unchecked exceptions (RuntimeException) and Errors. Rollback on checked exceptions requires rollbackFor attribute. Does not work when calling @Transactional methods from within the same class (proxy bypass).",asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`@Service
public class TransferService {

    @Transactional(rollbackFor = Exception.class,
                   isolation = Isolation.READ_COMMITTED,
                   propagation = Propagation.REQUIRED)
    public void transfer(String from, String to, BigDecimal amount)
            throws InsufficientFundsException {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);
        // Exception here \u2192 both debit and credit are rolled back
    }
}`},{id:1015,category:"Spring Framework",question:"What are transaction propagation levels in Spring?",answer:"Propagation controls how a transaction behaves when it is called from within another transaction. REQUIRED (default) \u2014 join existing or create new. REQUIRES_NEW \u2014 always create new, suspend existing. NESTED \u2014 nested savepoint within existing. MANDATORY \u2014 must run within existing transaction, else exception. SUPPORTS \u2014 join if exists, run non-transactionally if not. NOT_SUPPORTED \u2014 suspend existing, run non-transactionally. NEVER \u2014 must run without transaction.",asked_metadata:"Asked at Amazon, Flipkart, TCS"},{id:1016,category:"Spring Framework",question:"What is the difference between @Controller and @RestController?",answer:"@RestController = @Controller + @ResponseBody. With @Controller, method return values are treated as view names resolved by a ViewResolver. With @RestController, return values are serialised directly to the HTTP response body using an HttpMessageConverter (Jackson for JSON by default). @ResponseBody can be added per-method on a @Controller to get the same effect for individual methods.",asked_metadata:"Asked at Infosys, TCS, Wipro",code:`@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.findById(id); // serialised to JSON automatically
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto createUser(@RequestBody @Valid CreateUserRequest req) {
        return userService.create(req);
    }
}`},{id:1017,category:"Spring Framework",question:"What is @RequestMapping and its shortcut annotations?",answer:"@RequestMapping is the base annotation for mapping HTTP requests to controller methods. Shortcut annotations: @GetMapping (GET), @PostMapping (POST), @PutMapping (PUT), @DeleteMapping (DELETE), @PatchMapping (PATCH). All accept path, params, headers, consumes (Content-Type), and produces (Accept) attributes.",asked_metadata:"Asked at TCS, Cognizant, HCL",code:`@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping                            // GET /api/products
    public List<Product> list() { ... }

    @GetMapping("/{id}")                   // GET /api/products/42
    public Product get(@PathVariable Long id) { ... }

    @PostMapping(consumes = "application/json")
    public Product create(@RequestBody Product p) { ... }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) { ... }
}`},{id:1018,category:"Spring Framework",question:"What are Spring Profiles and how do you use them?",answer:'Spring Profiles allow different bean configurations for different environments (dev, test, prod). Activate with spring.profiles.active property. Annotate beans with @Profile("dev") to activate them only in that profile. application-{profile}.properties files are loaded automatically when the profile is active. @ActiveProfiles in tests.',asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2).build();
    }
}

@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource prodDataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl(System.getenv("DB_URL"));
        return ds;
    }
}`},{id:1019,category:"Spring Framework",question:"What is the ApplicationContext event system?",answer:"Spring provides a built-in event publishing mechanism. Publish events by injecting ApplicationEventPublisher and calling publishEvent(). Listen with @EventListener on any Spring bean method. Built-in events: ContextRefreshedEvent, ContextStartedEvent, ContextClosedEvent. Async events with @Async on the listener. Transactional listeners with @TransactionalEventListener.",asked_metadata:"Asked at Flipkart, Amazon, Wipro",code:`// Custom event
public class OrderShippedEvent {
    public final Long orderId;
    public OrderShippedEvent(Long id) { this.orderId = id; }
}

// Publisher
@Service
public class ShippingService {
    @Autowired ApplicationEventPublisher eventPublisher;

    public void ship(Long orderId) {
        // ... shipping logic
        eventPublisher.publishEvent(new OrderShippedEvent(orderId));
    }
}

// Listener
@Component
public class NotificationListener {
    @EventListener
    @Async
    public void onOrderShipped(OrderShippedEvent event) {
        emailService.sendShippingEmail(event.orderId);
    }
}`},{id:1020,category:"Spring Framework",question:"What is @Qualifier and @Primary in Spring?",answer:'@Primary marks a bean as the default candidate when multiple beans of the same type exist. @Qualifier("beanName") on the injection point selects a specific bean by name (overrides @Primary). Use @Primary when one implementation is the go-to default; use @Qualifier when you need to explicitly pick a specific instance.',asked_metadata:"Asked at TCS, Infosys, Cognizant",code:`@Component("paypalGateway")
public class PayPalGateway implements PaymentGateway { }

@Component("stripeGateway")
@Primary  // default when @Qualifier not specified
public class StripeGateway implements PaymentGateway { }

@Service
public class CheckoutService {
    // gets StripeGateway (Primary)
    @Autowired
    private PaymentGateway defaultGateway;

    // gets PayPalGateway explicitly
    @Autowired @Qualifier("paypalGateway")
    private PaymentGateway paypalGateway;
}`},{id:1021,category:"Spring Framework",question:"What is Spring Security and how does it handle authentication?",answer:"Spring Security is a framework providing authentication, authorization, and protection against common attacks. Authentication flow: request \u2192 SecurityFilterChain \u2192 AuthenticationFilter \u2192 AuthenticationManager \u2192 AuthenticationProvider \u2192 UserDetailsService (loads user) \u2192 Password comparison \u2192 SecurityContextHolder stores Authentication. Authorization is applied on the result using AccessDecisionManager.",asked_metadata:"Asked at Amazon, Flipkart, TCS",subConcepts:[{title:"SecurityFilterChain",description:"Chain of servlet filters applied to every request. Configured via HttpSecurity in @Configuration."},{title:"UserDetailsService",description:"Interface with loadUserByUsername() that returns a UserDetails object for authentication."},{title:"SecurityContextHolder",description:"Stores the Authentication for the current thread (ThreadLocal by default)."}]},{id:1022,category:"Spring Framework",question:"What is Spring's @Value annotation?",answer:'@Value injects values from property files, environment variables, or SpEL expressions directly into fields or constructor parameters. Reads from application.properties by default. Supports default values with @Value("${prop.key:default}"). For type-safe structured properties, prefer @ConfigurationProperties over many @Value annotations.',asked_metadata:"Asked at Wipro, HCL, Cognizant",code:`@Component
public class AppConfig {

    @Value("\${server.port:8080}")
    private int port;

    @Value("\${app.name}")
    private String appName;

    @Value("#{T(java.lang.Math).PI}")  // SpEL expression
    private double pi;

    @Value("\${allowed.origins:localhost}")
    private String[] allowedOrigins;
}`},{id:1023,category:"Spring Framework",question:"What is @Lazy in Spring and when should you use it?",answer:"@Lazy on a bean delays its initialization until it is first requested, rather than eagerly on container startup. Useful for: expensive beans not always needed, breaking circular dependencies between singleton beans, and reducing startup time in large applications. Can be applied to @Component, @Bean, or @Autowired injection points.",asked_metadata:"Asked at Infosys, TCS, Wipro"},{id:1024,category:"Spring Framework",question:"What is the difference between @PathVariable and @RequestParam?",answer:"@PathVariable extracts a value from the URI path (e.g., /users/{id} \u2192 @PathVariable Long id). @RequestParam extracts a query parameter (e.g., /users?page=2 \u2192 @RequestParam int page). @RequestParam has a required attribute (true by default) and defaultValue. @PathVariable is always required by default.",asked_metadata:"Asked at TCS, Cognizant, HCL",code:`@GetMapping("/users/{id}/orders")
public List<Order> getUserOrders(
        @PathVariable Long id,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(required = false) String status) {
    return orderService.findByUser(id, page, size, status);
}`},{id:1025,category:"Spring Framework",question:"How does Spring handle exception handling in REST APIs?",answer:"@ExceptionHandler on a controller method handles exceptions for that controller only. @ControllerAdvice (or @RestControllerAdvice) is a global handler applied to all controllers. @ResponseStatus sets the HTTP status code. ResponseEntityExceptionHandler is a base class that handles standard Spring MVC exceptions. ProblemDetail (Spring 6) provides RFC 7807 error format.",asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse("NOT_FOUND", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult().getFieldErrors()
            .stream().map(FieldError::getDefaultMessage).toList();
        return new ErrorResponse("VALIDATION_FAILED", errors.toString());
    }
}`},{id:1026,category:"Spring Framework",question:"What is @Conditional in Spring?",answer:"@Conditional registers a bean only when a condition is met. Common conditions: @ConditionalOnProperty (property exists/has value), @ConditionalOnClass (class on classpath), @ConditionalOnMissingBean (no bean of that type yet), @ConditionalOnExpression (SpEL). Spring Boot auto-configuration uses these extensively to wire beans only when needed.",asked_metadata:"Asked at Wipro, Amazon, TCS",code:`@Configuration
public class CacheConfig {

    @Bean
    @ConditionalOnProperty(name = "cache.type", havingValue = "redis")
    public CacheManager redisCacheManager(RedisConnectionFactory cf) {
        return RedisCacheManager.create(cf);
    }

    @Bean
    @ConditionalOnMissingBean(CacheManager.class)
    public CacheManager simpleCacheManager() {
        return new ConcurrentMapCacheManager("users", "products");
    }
}`},{id:1027,category:"Spring Framework",question:"What is Spring's @Scope with prototype beans and common pitfalls?",answer:"Prototype beans get a new instance each time they are requested. Pitfall: injecting a prototype bean into a singleton results in only ONE prototype instance (the one created at singleton init time). Solutions: inject ApplicationContext and call getBean() each time, use @Lookup method injection (Spring overrides the method to return a fresh prototype), or use ObjectFactory/Provider<T>.",asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`@Service
public class ReportService {

    @Autowired
    private Provider<ReportBuilder> builderProvider;  // javax/jakarta inject

    public Report generate(ReportRequest req) {
        ReportBuilder builder = builderProvider.get(); // fresh prototype each call
        return builder.build(req);
    }
}`},{id:1028,category:"Spring Framework",question:"What is Spring's expression language (SpEL)?",answer:"Spring Expression Language (SpEL) is a powerful expression language for querying and manipulating objects at runtime. Used in @Value, @ConditionalOnExpression, @PreAuthorize, @Cacheable key expressions, and XML config. Supports arithmetic, logical, relational operators, method invocation, collection projection/selection, and ternary/safe-navigation operators.",asked_metadata:"Asked at TCS, Wipro, HCL",code:`// In @Value
@Value("#{systemProperties['user.home']}")
private String userHome;

@Value("#{T(Math).random() * 100}")
private double randomNum;

// In @PreAuthorize (Spring Security)
@PreAuthorize("hasRole('ADMIN') or #userId == authentication.name")
public UserDto getUser(@PathVariable String userId) { ... }

// In @Cacheable
@Cacheable(value = "products", key = "#category.name + '-' + #page")`},{id:1029,category:"Spring Framework",question:"How does Spring handle circular dependencies?",answer:"Spring resolves circular dependencies between singleton beans using a three-level cache: singletonObjects (fully initialised), earlySingletonObjects (early exposed, not fully initialised), singletonFactories (object factories). Constructor injection circular dependencies CANNOT be resolved (no early reference available). Solution: use setter injection, @Lazy, or refactor to break the cycle. Spring 6 disallows circular dependencies by default and fails fast.",asked_metadata:"Asked at Amazon, Flipkart, Google"},{id:1030,category:"Spring Framework",question:"What is Spring Data JPA?",answer:"Spring Data JPA is a Spring module that reduces boilerplate for data-access layers. Extend JpaRepository<Entity, ID> to get CRUD, pagination, and sorting for free. Derive queries from method names (findByEmailAndActiveTrue). @Query for custom JPQL/native SQL. @Modifying for update/delete queries. Projections and DTOs using interfaces or @Value with constructor expressions.",asked_metadata:"Asked at Amazon, Infosys, TCS",code:`public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query
    List<User> findByEmailAndActiveTrue(String email);

    // Custom JPQL
    @Query("SELECT u FROM User u WHERE u.createdAt > :since")
    List<User> findRecentUsers(@Param("since") LocalDate since);

    // Native query
    @Query(value = "SELECT * FROM users WHERE score > ?1",
           nativeQuery = true)
    List<User> findHighScorers(int minScore);
}`},{id:1031,category:"Spring Framework",question:"What is method security in Spring Security?",answer:"Spring Security method-level security annotates service methods with access rules. Enable with @EnableMethodSecurity. @PreAuthorize \u2014 SpEL before method execution. @PostAuthorize \u2014 SpEL after execution (can inspect return value). @PreFilter / @PostFilter \u2014 filter collection arguments/return values. @Secured \u2014 simple role list. @RolesAllowed \u2014 JSR-250 equivalent of @Secured.",asked_metadata:"Asked at Amazon, Flipkart, Wipro",code:`@Service
@EnableMethodSecurity
public class DocumentService {

    @PreAuthorize("hasRole('ADMIN') or #ownerId == authentication.name")
    public Document getDocument(Long docId, String ownerId) { ... }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getSensitiveDocument(Long docId) { ... }

    @PreAuthorize("hasRole('MANAGER')")
    @PostFilter("filterObject.department == authentication.details.dept")
    public List<Employee> listEmployees() { ... }
}`}];var B=[{id:1100,category:"Design Patterns",question:"What are design patterns and why are they important?",answer:'Design patterns are reusable solutions to commonly occurring software design problems. They are not code, but templates or blueprints. Benefits: shared vocabulary among developers, proven solutions that avoid common pitfalls, more maintainable and extensible code. The "Gang of Four" (Gamma, Helm, Johnson, Vlissides) catalogued 23 patterns across three categories: Creational, Structural, and Behavioral.',asked_metadata:"Asked at Amazon, Google, Infosys, TCS",subConcepts:[{title:"Creational",description:"Object creation mechanisms: Singleton, Factory Method, Abstract Factory, Builder, Prototype."},{title:"Structural",description:"Composing classes/objects: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy."},{title:"Behavioral",description:"Communication between objects: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor."}]},{id:1101,category:"Design Patterns",question:"Explain the Singleton pattern and its thread-safe implementations.",answer:"Singleton ensures only one instance exists in the JVM. Common implementations: (1) Eager initialization \u2014 instance created at class loading time, thread-safe but wasteful if not used. (2) Lazy initialization with double-checked locking and volatile keyword. (3) Bill Pugh / Initialization-on-demand holder \u2014 lazy and thread-safe using the class loader mechanism. (4) Enum-based \u2014 simplest, prevents reflection attacks.",asked_metadata:"Asked at Amazon, Google, Flipkart, TCS",code:`// Bill Pugh (recommended)
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
}`},{id:1102,category:"Design Patterns",question:"What is the Factory Method pattern?",answer:"Factory Method defines an interface for creating an object but lets subclasses decide which class to instantiate. It promotes loose coupling by eliminating the need to bind application-specific classes into the code. The creator class declares the factory method as abstract or with a default implementation. Concrete creators override it to produce a specific product. Used in Spring: FactoryBean, LogFactory, BeanFactory.",asked_metadata:"Asked at Amazon, TCS, Infosys",code:`// Product
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
}`},{id:1103,category:"Design Patterns",question:"What is the Builder pattern and when should you use it?",answer:"Builder separates the construction of a complex object from its representation, allowing the same construction process to create different representations. Use when: a class has many optional parameters (telescoping constructor problem), the object must be immutable once built, or the construction process involves multiple steps. Lombok's @Builder generates a builder automatically.",asked_metadata:"Asked at Amazon, Google, Flipkart",code:`public class Pizza {
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
Pizza pizza = new Pizza.Builder("LARGE").cheese().pepperoni().build();`},{id:1104,category:"Design Patterns",question:"What is the Observer pattern?",answer:"Observer (also called Publish-Subscribe or Event-Listener) defines a one-to-many dependency: when one object (Subject/Publisher) changes state, all registered dependents (Observers/Listeners) are notified automatically. Promotes loose coupling. Java examples: java.util.Observer (deprecated), PropertyChangeListener, ActionListener in Swing, Spring ApplicationEvent system, RxJava Observable.",asked_metadata:"Asked at Amazon, Flipkart, TCS",code:`interface Observer { void update(String event, Object data); }

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
bus.publish("ORDER_PLACED", orderId);`},{id:1105,category:"Design Patterns",question:"What is the Strategy pattern?",answer:"Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client chooses the algorithm at runtime without knowing the implementation. Promotes Open/Closed Principle \u2014 add new strategies without modifying the context. Java: Comparator, Runnable, java.util.concurrent.Executor are all Strategy implementations. Spring: ResourceLoader, HandlerAdapter.",asked_metadata:"Asked at Amazon, Google, Infosys",code:`interface SortStrategy {
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
sorter.setStrategy(new MergeSort()); // switch strategy`},{id:1106,category:"Design Patterns",question:"What is the Decorator pattern?",answer:"Decorator attaches additional responsibilities to an object dynamically, without modifying its class. It is a structural alternative to subclassing. The decorator wraps the component and adds behavior before/after delegating to it. Java example: java.io streams (BufferedInputStream wraps FileInputStream). Spring: BeanDefinitionDecorator, TransactionInterceptor wrapping beans.",asked_metadata:"Asked at Amazon, Flipkart, TCS",code:`interface Coffee { String getDescription(); double getCost(); }

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

// Usage \u2014 stack decorators
Coffee c = new MilkDecorator(new MilkDecorator(new SimpleCoffee()));
System.out.println(c.getDescription() + " $" + c.getCost());
// Coffee, Milk, Milk $1.50`},{id:1107,category:"Design Patterns",question:"What is the Adapter pattern?",answer:"Adapter converts the interface of a class into another interface that clients expect. It lets incompatible interfaces work together. Class Adapter uses inheritance; Object Adapter (preferred in Java) uses composition. Real examples: Arrays.asList() adapts an array to List, InputStreamReader adapts InputStream to Reader, Spring's JpaVendorAdapter.",asked_metadata:"Asked at TCS, Infosys, Wipro",code:`// Existing incompatible interface
interface LegacyPayment { void pay(double amount); }

// New target interface
interface PaymentProcessor { void processPayment(int cents); }

// Adapter bridges them using composition
class LegacyPaymentAdapter implements PaymentProcessor {
    private final LegacyPayment legacy;
    public LegacyPaymentAdapter(LegacyPayment p) { this.legacy = p; }

    public void processPayment(int cents) {
        legacy.pay(cents / 100.0);  // adapt: cents \u2192 dollars
    }
}`},{id:1108,category:"Design Patterns",question:"What is the Proxy pattern?",answer:"Proxy provides a surrogate or placeholder for another object to control access to it. Types: Virtual Proxy (lazy loading expensive objects), Remote Proxy (local representative for remote object \u2014 RMI), Protection Proxy (access control), Cache Proxy (caches results), Logging Proxy. Spring AOP creates JDK dynamic proxies (for interfaces) or CGLIB proxies (for classes) to implement @Transactional, @Cacheable etc.",asked_metadata:"Asked at Amazon, Flipkart, Infosys",code:`interface Image { void display(); }

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
}`},{id:1109,category:"Design Patterns",question:"What is the Template Method pattern?",answer:`Template Method defines the skeleton of an algorithm in a base class, deferring some steps to subclasses. The base class calls abstract (or hook) methods that subclasses override. Promotes code reuse and enforces the overall structure. "Hollywood Principle": don't call us, we'll call you. Spring examples: JdbcTemplate (execute() calls your RowMapper), HibernateTemplate, AbstractController.`,asked_metadata:"Asked at Amazon, Wipro, TCS",code:`abstract class DataProcessor {
    // Template method \u2014 defines the algorithm skeleton
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
}`},{id:1110,category:"Design Patterns",question:"What is the Command pattern?",answer:"Command encapsulates a request as an object, allowing you to parameterise clients with different requests, queue or log requests, and support undo/redo operations. Components: Command (interface with execute/undo), ConcreteCommand (stores action and receiver), Invoker (holds and fires commands), Receiver (does the work). Java: Runnable, Callable, javax.swing.Action are Command implementations.",asked_metadata:"Asked at Amazon, Flipkart, Google",code:`interface Command { void execute(); void undo(); }

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
history.pop().undo();`},{id:1111,category:"Design Patterns",question:"What is the Chain of Responsibility pattern?",answer:"Chain of Responsibility passes a request along a chain of handlers. Each handler decides whether to process the request or pass it to the next handler. Decouples sender from receiver. Real examples: Java Servlet filters, Spring Security FilterChain, exception handler chains, middleware pipelines. Key benefit: you can add/remove handlers dynamically without changing the client.",asked_metadata:"Asked at Amazon, Flipkart, TCS",code:`abstract class SupportHandler {
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
l1.handle(2); // escalates to L2`},{id:1112,category:"Design Patterns",question:"What is the Facade pattern?",answer:"Facade provides a simplified interface to a complex subsystem. It hides the complexity of the subsystem and provides a high-level interface that makes the subsystem easier to use. Does not prevent direct access to the subsystem. Spring examples: JdbcTemplate (facade over JDBC), SLF4J (facade over logging frameworks), RestTemplate, TransactionTemplate.",asked_metadata:"Asked at TCS, Infosys, Wipro",code:`// Complex subsystems
class VideoDecoder { void decode(String file) { ... } }
class AudioDecoder { void decode(String file) { ... } }
class VideoBuffer   { void load(byte[] data)  { ... } }
class AudioBuffer   { void load(byte[] data)  { ... } }

// Facade \u2014 simple interface
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
}`},{id:1113,category:"Design Patterns",question:"What is the Composite pattern?",answer:"Composite composes objects into tree structures to represent part-whole hierarchies. Clients treat individual objects and compositions uniformly via a common interface. Each composite can contain children (other composites or leaves). Real examples: java.awt.Container (contains Components), org.w3c.dom.Node (file systems), UI component trees, expression trees in compilers.",asked_metadata:"Asked at Amazon, Flipkart, Google",code:`interface FileSystemItem {
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
}`},{id:1114,category:"Design Patterns",question:"What is the State pattern?",answer:"State allows an object to alter its behavior when its internal state changes. The object will appear to change its class. Encapsulates state-specific behavior in separate State classes. Eliminates large if-else or switch chains based on state. Real examples: vending machine, ATM, traffic light, order workflow (Pending \u2192 Processing \u2192 Shipped \u2192 Delivered).",asked_metadata:"Asked at Amazon, Infosys, TCS",code:`interface OrderState {
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
}`},{id:1115,category:"Design Patterns",question:"What is the Prototype pattern?",answer:"Prototype creates new objects by cloning an existing object (the prototype) instead of constructing them from scratch. Useful when object creation is expensive (e.g., database reads, complex initialisation). In Java, implement Cloneable and override clone(), or provide a copy constructor. Beware of shallow vs deep copy: with shallow copy, nested mutable objects are shared between original and clone.",asked_metadata:"Asked at TCS, Wipro, HCL",code:`public class UserProfile implements Cloneable {
    private String name;
    private List<String> roles;  // mutable \u2014 needs deep copy!

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
clone.setName("Bob");  // does not affect original`},{id:1116,category:"Design Patterns",question:"What is the Flyweight pattern?",answer:"Flyweight minimises memory usage by sharing as much data as possible with similar objects. Splits object state into intrinsic (shared, stored in flyweight) and extrinsic (context-specific, passed in). Use when: many objects share identical data, and memory is a concern. Java example: String pool (interning), Integer cache (-128 to 127), Character cache.",asked_metadata:"Asked at Amazon, Google, Flipkart",code:`// Flyweight factory with shared instances
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
}`},{id:1117,category:"Design Patterns",question:"What is the Bridge pattern?",answer:"Bridge decouples an abstraction from its implementation so that the two can vary independently. Instead of a hierarchy explosion (Shape \xD7 Color = N\xD7M classes), you have two hierarchies joined by composition. Use when: both abstraction and implementation should be extensible by subclassing independently, or you want to hide implementation details from clients. Avoids permanent binding between abstraction and implementation.",asked_metadata:"Asked at Amazon, TCS, Infosys",code:`// Implementation hierarchy
interface DrawAPI { void drawCircle(int r, int x, int y); }
class SVGDraw implements DrawAPI {
    public void drawCircle(int r, int x, int y) { System.out.println("SVG circle"); }
}
class CanvasDraw implements DrawAPI {
    public void drawCircle(int r, int x, int y) { System.out.println("Canvas circle"); }
}

// Abstraction hierarchy \u2014 holds reference to implementation
abstract class Shape {
    protected DrawAPI drawAPI;
    Shape(DrawAPI api) { this.drawAPI = api; }
    abstract void draw();
}

class Circle extends Shape {
    private int r, x, y;
    Circle(int r, int x, int y, DrawAPI api) { super(api); this.r=r; this.x=x; this.y=y; }
    public void draw() { drawAPI.drawCircle(r, x, y); }
}`},{id:1118,category:"Design Patterns",question:"What is the Mediator pattern?",answer:"Mediator reduces chaotic dependencies between objects by routing all communication through a central mediator. Objects no longer communicate directly \u2014 they only know about the mediator. Reduces the number of connections from O(n\xB2) to O(n). Spring's ApplicationEventPublisher acts as a mediator. Also used in chat systems, air traffic control, UI dialog components.",asked_metadata:"Asked at Amazon, Flipkart, TCS",code:`interface ChatMediator {
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
}`},{id:1119,category:"Design Patterns",question:"What is the Memento pattern?",answer:"Memento captures and externalises an object's internal state without violating encapsulation, so the object can be restored to this state later. Three participants: Originator (creates and restores from mementos), Memento (stores the state snapshot), Caretaker (holds mementos, does not inspect them). Used in: undo/redo in editors, transaction savepoints, game save states.",asked_metadata:"Asked at Amazon, Google, Wipro",code:`class TextEditor {
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
System.out.println(editor.getText());         // Hello`},{id:1120,category:"Design Patterns",question:"What is the Iterator pattern?",answer:"Iterator provides a way to access elements of an aggregate object sequentially without exposing its underlying representation. Java's java.util.Iterator and Iterable are the canonical examples. The for-each loop calls iterator() under the hood. Custom iterators are useful for complex data structures (trees, graphs) where traversal order needs encapsulation.",asked_metadata:"Asked at TCS, Infosys, HCL",code:`class NumberRange implements Iterable<Integer> {
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
for (int n : new NumberRange(1, 5)) System.out.println(n);`},{id:1121,category:"Design Patterns",question:"What is the Visitor pattern?",answer:"Visitor lets you add new operations to an object structure without modifying the classes of elements in that structure. The visitor class implements operations for each element type; elements accept() the visitor. Useful when the element hierarchy is stable but operations on them vary. Java 21 sealed classes + pattern matching provide a compiler-checked alternative to classical visitor.",asked_metadata:"Asked at Amazon, Google, Flipkart",code:`interface ShapeVisitor {
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

double area = shapes.stream().mapToDouble(s -> s.accept(new AreaVisitor())).sum();`},{id:1122,category:"Design Patterns",question:"What design patterns are used internally in the Spring Framework?",answer:"Spring uses many design patterns: Singleton (default bean scope), Factory Method (BeanFactory, FactoryBean), Proxy (Spring AOP via JDK/CGLIB proxies), Observer (ApplicationEventPublisher), Template Method (JdbcTemplate, HibernateTemplate), Strategy (ResourceLoader, HandlerAdapter, HandlerMapping), Facade (JdbcTemplate, SLF4J), Decorator (BeanDefinitionDecorator), Front Controller (DispatcherServlet), MVC.",asked_metadata:"Asked at Amazon, Google, TCS, Infosys"},{id:1123,category:"Design Patterns",question:"When would you use Singleton pattern vs a static class?",answer:"Use Singleton when: you need an instance that can implement interfaces, be subclassed, or be injected as a dependency; you need lazy initialisation; or you need to control the lifecycle. Use static class when: the class is purely a collection of utility methods with no state and no need for dependency injection (e.g., Math, Collections). Singletons are testable and mockable; static classes are harder to test.",asked_metadata:"Asked at Amazon, Flipkart, Wipro"},{id:1124,category:"Design Patterns",question:"What is the Null Object pattern?",answer:"Null Object provides a default object with do-nothing behaviour instead of using null. Eliminates null checks in client code and prevents NullPointerExceptions. Java: Optional<T> is related but not identical. Spring: Collections.emptyList(), EmptyResultDataAccessException, NullSecurityContextHolderStrategy. The pattern is most valuable when null would cause repeated conditional checks throughout the codebase.",asked_metadata:"Asked at Amazon, TCS, Infosys",code:`interface Logger { void log(String message); }

class ConsoleLogger implements Logger {
    public void log(String msg) { System.out.println(msg); }
}

// Null Object \u2014 do nothing, no null checks needed
class NullLogger implements Logger {
    public void log(String msg) { /* intentionally empty */ }
}

class Service {
    private final Logger logger;
    Service(Logger logger) { this.logger = logger; } // never null

    void process() {
        logger.log("Processing...");  // safe \u2014 no null check needed
    }
}`}];var s={"Core Java":D,"Spring Boot":E,"Spring Framework":N,Hibernate:R,"Spring Reactive":M,Microservices:F,Multithreading:L,"Reactive Programming":O,"Coding Questions":q,"Design Patterns":B},U=class m{firestore=h(C);authService=h(T);points=l(0);revealedQuestionIds=l(new Set);leetcodeCompletedIds=l(new Set);completedTopicIds=l(new Set);constructor(){v(()=>{let t=this.authService.user();t?this.loadUserData(t.uid):this.loadLocalData()})}async loadUserData(t){let e=n(this.firestore,`users/${t}`),a=await k(e);if(a.exists()){let i=a.data();this.points.set(i.points||0),this.revealedQuestionIds.set(new Set(i.revealedIds||[])),this.leetcodeCompletedIds.set(new Set(i.leetcodeCompletedIds||[])),this.completedTopicIds.set(new Set(i.completedTopicIds||[]))}else await I(e,{points:0,revealedIds:[],leetcodeCompletedIds:[],completedTopicIds:[],displayName:this.authService.user()?.displayName||"Anonymous",lastUpdated:new Date})}loadLocalData(){let t=localStorage.getItem("user_points"),e=localStorage.getItem("revealed_questions"),a=localStorage.getItem("leetcode_completed"),i=localStorage.getItem("completed_topics");t&&this.points.set(parseInt(t)),e&&this.revealedQuestionIds.set(new Set(JSON.parse(e))),a&&this.leetcodeCompletedIds.set(new Set(JSON.parse(a))),i&&this.completedTopicIds.set(new Set(JSON.parse(i)))}saveLocalData(){localStorage.setItem("user_points",this.points().toString()),localStorage.setItem("revealed_questions",JSON.stringify(Array.from(this.revealedQuestionIds()))),localStorage.setItem("leetcode_completed",JSON.stringify(Array.from(this.leetcodeCompletedIds()))),localStorage.setItem("completed_topics",JSON.stringify(Array.from(this.completedTopicIds())))}async addPoints(t){this.points.update(a=>a+t),this.saveLocalData();let e=this.authService.user();if(e){let a=n(this.firestore,`users/${e.uid}`);await o(a,{points:y(t),lastUpdated:new Date})}}async spendPoint(){if(this.points()<=0)return!1;this.points.update(e=>e-1),this.saveLocalData();let t=this.authService.user();if(t){let e=n(this.firestore,`users/${t.uid}`);await o(e,{points:y(-1),lastUpdated:new Date})}return!0}async markAsRevealed(t){if(this.revealedQuestionIds().has(t))return;this.revealedQuestionIds.update(a=>{let i=new Set(a);return i.add(t),i}),this.saveLocalData();let e=this.authService.user();if(e){let a=n(this.firestore,`users/${e.uid}`);await o(a,{revealedIds:Array.from(this.revealedQuestionIds()),lastUpdated:new Date})}}async markLeetcodeCompleted(t){if(this.leetcodeCompletedIds().has(t))return;this.leetcodeCompletedIds.update(a=>{let i=new Set(a);return i.add(t),i}),this.saveLocalData();let e=this.authService.user();if(e){let a=n(this.firestore,`users/${e.uid}`);await o(a,{leetcodeCompletedIds:Array.from(this.leetcodeCompletedIds()),lastUpdated:new Date})}}async markTopicComplete(t){if(this.completedTopicIds().has(t))return;this.completedTopicIds.update(a=>{let i=new Set(a);return i.add(t),i}),this.saveLocalData();let e=this.authService.user();if(e){let a=n(this.firestore,`users/${e.uid}`);await o(a,{completedTopicIds:Array.from(this.completedTopicIds()),lastUpdated:new Date})}}isTopicComplete(t){return this.completedTopicIds().has(t)}getCourseCompletedCount(t){let e=`${t}::`,a=0;for(let i of this.completedTopicIds())i.startsWith(e)&&a++;return a}getCourseProgress(t,e){return e===0?0:Math.round(this.getCourseCompletedCount(t)/e*100)}getAllQuestionsStable(){return Object.values(s).flat()}getQuestions(t="All"){let e=[];return t==="All"?e=Object.values(s).flat():e=s[t]||[],e.sort((a,i)=>{let g=this.revealedQuestionIds().has(a.id),r=this.revealedQuestionIds().has(i.id);return g===r?0:g?1:-1})}getProgress(t){let e=s[t]||[];if(e.length===0)return 0;let a=e.filter(i=>this.revealedQuestionIds().has(i.id)).length;return Math.round(a/e.length*100)}getVisitedCount(t){return(s[t]||[]).filter(a=>this.revealedQuestionIds().has(a.id)).length}getCategoryQuestionsBySlug(t){let e=this.slugToTitle(t);return s[e]||[]}slugToTitle(t){return{"core-java":"Core Java","spring-boot":"Spring Boot","spring-framework":"Spring Framework",hibernate:"Hibernate",microservices:"Microservices",multithreading:"Multithreading","spring-reactive":"Spring Reactive","reactive-prog":"Reactive Programming","coding-patterns":"Coding Questions","design-patterns":"Design Patterns"}[t]||t.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}getCategoryStars(t){let e=this.getProgress(t);return!e||e<=0?0:e>=100?3:e>=60?2:e>=30?1:0}CATEGORY_PATH=["Core Java","Spring Boot","Microservices","Hibernate","Spring Reactive","Multithreading","Reactive Programming","Coding Questions"];isCategoryLocked(t){let e=this.CATEGORY_PATH.indexOf(t);if(e<=0)return!1;let a=this.CATEGORY_PATH[e-1];return this.getCategoryStars(a)<1}async getLeaderboard(t=20,e="alltime"){let a=A(this.firestore,"leaderboard"),i;if(e==="weekly")i=u(a,p("weeklyXp","desc"),d(t));else if(e==="monthly"){let r=new Date,c=new Date(r.getFullYear(),r.getMonth(),1);i=u(a,x("lastUpdated",">=",w.fromDate(c)),p("lastUpdated","desc"),d(t))}else i=u(a,p("points","desc"),d(t));return(await P(i)).docs.map(r=>{let c=r.data();return f(S({id:r.id},c),{points:e==="weekly"?c.weeklyXp??0:c.points})})}isQuestionLocked(t,e){return!1}static \u0275fac=function(e){return new(e||m)};static \u0275prov=b({token:m,factory:m.\u0275fac,providedIn:"root"})};export{U as a};
