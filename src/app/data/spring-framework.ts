import { Question } from './question.model';

export const SPRING_FRAMEWORK_QUESTIONS: Question[] = [
  {
    id: 1002,
    category: 'Spring Framework',
    question: 'What is the Spring Framework and what problem does it solve?',
    answer: 'Spring is an open-source Java application framework that simplifies enterprise development by providing a lightweight container for dependency injection, aspect-oriented programming, data access, and web MVC. It solves the boilerplate and tight-coupling problems of traditional Java EE development.',
    asked_metadata: 'Asked at TCS, Infosys, Wipro, Cognizant',
    subConcepts: [
      { title: 'Core Container', description: 'IoC container that manages bean lifecycle via BeanFactory and ApplicationContext.' },
      { title: 'AOP Module', description: 'Cross-cutting concerns (logging, security, transactions) separated from business logic using proxies.' },
      { title: 'Data Access', description: 'Abstractions over JDBC, ORM frameworks, and transaction management.' }
    ]
  },
  {
    id: 1003,
    category: 'Spring Framework',
    question: 'What is Inversion of Control (IoC) in Spring?',
    answer: 'IoC is a design principle where the control of object creation and dependency resolution is transferred from application code to a container (Spring IoC). Instead of objects creating their own dependencies, the Spring container injects them. This decouples components and makes code easier to test.',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `// Without IoC — tight coupling
public class OrderService {
    // OrderService creates its own dependency
    private PaymentService paymentService = new PaymentService();
}

// With IoC — Spring injects the dependency
@Service
public class OrderService {
    private final PaymentService paymentService;

    @Autowired
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService; // Spring injects this
    }
}`
  },
  {
    id: 1004,
    category: 'Spring Framework',
    question: 'What is Dependency Injection and what are its types in Spring?',
    answer: 'Dependency Injection (DI) is a specific form of IoC where dependencies are provided to a class rather than the class creating them. Spring supports three types: Constructor Injection (preferred — immutable, testable), Setter Injection (optional dependencies), and Field Injection (via @Autowired on fields — avoid in production code).',
    asked_metadata: 'Asked at Google, Amazon, TCS',
    code: `// 1. Constructor Injection (recommended)
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

// 3. Field Injection (avoid — hides dependencies, hard to test)
@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;
}`
  },
  {
    id: 1005,
    category: 'Spring Framework',
    question: 'What is the difference between BeanFactory and ApplicationContext?',
    answer: 'BeanFactory is the root Spring IoC container — lightweight, creates beans lazily on first request. ApplicationContext extends BeanFactory and adds enterprise features: event publishing, MessageSource for i18n, AOP integration, and eager singleton initialization. Use ApplicationContext in almost all applications; BeanFactory is only for resource-constrained environments.',
    asked_metadata: 'Asked at Wipro, HCL, Cognizant',
    subConcepts: [
      { title: 'BeanFactory', description: 'Basic IoC container. Lazy bean initialization. No event publishing, no AOP auto-proxy, no MessageSource.' },
      { title: 'ApplicationContext', description: 'Full-featured container. Eager singleton init, ApplicationEvent publishing, BeanPostProcessor auto-detection, MessageSource.' },
      { title: 'Common Implementations', description: 'ClassPathXmlApplicationContext (XML), AnnotationConfigApplicationContext (@Configuration), WebApplicationContext (web apps).' }
    ]
  },
  {
    id: 1006,
    category: 'Spring Framework',
    question: 'What is a Spring Bean and what are its scopes?',
    answer: 'A Spring Bean is any object managed by the Spring IoC container. Scopes control how many instances the container creates. Singleton (default) — one instance per container. Prototype — new instance per request. Request, Session, Application, WebSocket — web-aware scopes tied to HTTP lifecycle.',
    asked_metadata: 'Asked at Infosys, TCS, Amazon',
    code: `@Component
@Scope("singleton")   // default — one shared instance
public class ConfigService { }

@Component
@Scope("prototype")   // new instance every time it is injected
public class ShoppingCart { }

@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestContext { }   // one per HTTP request`
  },
  {
    id: 1007,
    category: 'Spring Framework',
    question: 'What is the Spring Bean lifecycle?',
    answer: 'Spring bean lifecycle: Container instantiates bean → injects dependencies → calls BeanNameAware/BeanFactoryAware callbacks → BeanPostProcessor.postProcessBeforeInitialization() → @PostConstruct / afterPropertiesSet() / init-method → BeanPostProcessor.postProcessAfterInitialization() → bean is ready → on shutdown: @PreDestroy / destroy() / destroy-method.',
    asked_metadata: 'Asked at Flipkart, Amazon, Wipro',
    code: `@Component
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
}`
  },
  {
    id: 1008,
    category: 'Spring Framework',
    question: 'What is @Component, @Service, @Repository, and @Controller?',
    answer: '@Component is the generic stereotype annotation that makes a class a Spring-managed bean. @Service, @Repository, and @Controller are specialisations: @Service marks business logic classes; @Repository marks data-access classes (also enables persistence exception translation); @Controller marks Spring MVC controllers. All four trigger component scanning.',
    asked_metadata: 'Asked at TCS, Infosys, Cognizant, HCL',
    subConcepts: [
      { title: '@Component', description: 'Generic bean. Use when no specific role applies.' },
      { title: '@Service', description: 'Business layer. Semantically meaningful, enables potential AOP pointcuts on the service layer.' },
      { title: '@Repository', description: 'Persistence layer. Spring wraps SQLExceptions in DataAccessException hierarchy.' },
      { title: '@Controller / @RestController', description: '@Controller + @ResponseBody = @RestController. Handles HTTP requests in MVC.' }
    ]
  },
  {
    id: 1009,
    category: 'Spring Framework',
    question: 'What is @Autowired and how does Spring resolve dependencies?',
    answer: '@Autowired tells Spring to inject a matching bean. Spring resolves by type first. If multiple beans of the same type exist, use @Qualifier("beanName") to specify which one, or mark one as @Primary. Circular dependency with constructor injection causes a BeanCurrentlyInCreationException — break it with setter injection or @Lazy.',
    asked_metadata: 'Asked at Amazon, Google, Flipkart',
    code: `@Service
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
}`
  },
  {
    id: 1010,
    category: 'Spring Framework',
    question: 'What is @Configuration and @Bean in Spring?',
    answer: '@Configuration marks a class as a source of bean definitions — it is a full proxy class. Methods annotated with @Bean produce bean instances managed by the container. Unlike @Component, calling a @Bean method from within a @Configuration class returns the same singleton instance (method call is intercepted by CGLIB proxy).',
    asked_metadata: 'Asked at Amazon, Wipro, Infosys',
    code: `@Configuration
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
}`
  },
  {
    id: 1011,
    category: 'Spring Framework',
    question: 'What is Spring AOP and what problems does it solve?',
    answer: 'Spring AOP (Aspect-Oriented Programming) separates cross-cutting concerns — logging, security, transaction management, caching — from business logic using proxies. Key terms: Aspect (the concern module), Advice (the action: @Before, @After, @Around, @AfterReturning, @AfterThrowing), Pointcut (where to apply: method, class, annotation), JoinPoint (runtime info about the intercepted method).',
    asked_metadata: 'Asked at Flipkart, Amazon, TCS',
    code: `@Aspect
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
}`
  },
  {
    id: 1012,
    category: 'Spring Framework',
    question: 'What is the difference between @Component and @Bean?',
    answer: '@Component is a class-level annotation used with component scanning — Spring auto-detects the class and instantiates it. @Bean is a method-level annotation inside @Configuration classes — you manually write the code to create the bean. Use @Bean when: wiring third-party classes (you cannot add @Component to them), needing conditional creation, or wanting explicit control over instantiation.',
    asked_metadata: 'Asked at Infosys, Cognizant, Wipro',
    subConcepts: [
      { title: '@Component', description: 'Class you own. Spring creates it via no-arg or @Autowired constructor. Detected by @ComponentScan.' },
      { title: '@Bean', description: 'Inside @Configuration. You control the creation logic. Works on any class including third-party.' }
    ]
  },
  {
    id: 1013,
    category: 'Spring Framework',
    question: 'What is Spring MVC and how does a request flow through it?',
    answer: 'Spring MVC is a web framework built on the front-controller pattern. Request flow: Client → DispatcherServlet (front controller) → HandlerMapping (finds controller method) → HandlerAdapter (invokes it) → Controller (processes, returns ModelAndView) → ViewResolver (resolves view) → View (renders HTML) → Response to client. With @RestController the view step is skipped and the return value is serialised directly to JSON/XML.',
    asked_metadata: 'Asked at Amazon, TCS, HCL',
    subConcepts: [
      { title: 'DispatcherServlet', description: 'Single entry-point servlet that delegates to all other components.' },
      { title: 'HandlerMapping', description: 'Maps URL patterns to controller methods via @RequestMapping.' },
      { title: 'ViewResolver', description: 'Resolves logical view names to actual template files (Thymeleaf, JSP).' }
    ]
  },
  {
    id: 1014,
    category: 'Spring Framework',
    question: 'What is @Transactional and how does it work internally?',
    answer: '@Transactional wraps a method in a database transaction using a Spring AOP proxy. When the annotated method is called, the proxy begins a transaction before the method runs and commits or rolls back after. Rollback happens automatically on unchecked exceptions (RuntimeException) and Errors. Rollback on checked exceptions requires rollbackFor attribute. Does not work when calling @Transactional methods from within the same class (proxy bypass).',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `@Service
public class TransferService {

    @Transactional(rollbackFor = Exception.class,
                   isolation = Isolation.READ_COMMITTED,
                   propagation = Propagation.REQUIRED)
    public void transfer(String from, String to, BigDecimal amount)
            throws InsufficientFundsException {
        accountRepo.debit(from, amount);
        accountRepo.credit(to, amount);
        // Exception here → both debit and credit are rolled back
    }
}`
  },
  {
    id: 1015,
    category: 'Spring Framework',
    question: 'What are transaction propagation levels in Spring?',
    answer: 'Propagation controls how a transaction behaves when it is called from within another transaction. REQUIRED (default) — join existing or create new. REQUIRES_NEW — always create new, suspend existing. NESTED — nested savepoint within existing. MANDATORY — must run within existing transaction, else exception. SUPPORTS — join if exists, run non-transactionally if not. NOT_SUPPORTED — suspend existing, run non-transactionally. NEVER — must run without transaction.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS'
  },
  {
    id: 1016,
    category: 'Spring Framework',
    question: 'What is the difference between @Controller and @RestController?',
    answer: '@RestController = @Controller + @ResponseBody. With @Controller, method return values are treated as view names resolved by a ViewResolver. With @RestController, return values are serialised directly to the HTTP response body using an HttpMessageConverter (Jackson for JSON by default). @ResponseBody can be added per-method on a @Controller to get the same effect for individual methods.',
    asked_metadata: 'Asked at Infosys, TCS, Wipro',
    code: `@RestController
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
}`
  },
  {
    id: 1017,
    category: 'Spring Framework',
    question: 'What is @RequestMapping and its shortcut annotations?',
    answer: '@RequestMapping is the base annotation for mapping HTTP requests to controller methods. Shortcut annotations: @GetMapping (GET), @PostMapping (POST), @PutMapping (PUT), @DeleteMapping (DELETE), @PatchMapping (PATCH). All accept path, params, headers, consumes (Content-Type), and produces (Accept) attributes.',
    asked_metadata: 'Asked at TCS, Cognizant, HCL',
    code: `@RestController
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
}`
  },
  {
    id: 1018,
    category: 'Spring Framework',
    question: 'What are Spring Profiles and how do you use them?',
    answer: 'Spring Profiles allow different bean configurations for different environments (dev, test, prod). Activate with spring.profiles.active property. Annotate beans with @Profile("dev") to activate them only in that profile. application-{profile}.properties files are loaded automatically when the profile is active. @ActiveProfiles in tests.',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `@Configuration
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
}`
  },
  {
    id: 1019,
    category: 'Spring Framework',
    question: 'What is the ApplicationContext event system?',
    answer: 'Spring provides a built-in event publishing mechanism. Publish events by injecting ApplicationEventPublisher and calling publishEvent(). Listen with @EventListener on any Spring bean method. Built-in events: ContextRefreshedEvent, ContextStartedEvent, ContextClosedEvent. Async events with @Async on the listener. Transactional listeners with @TransactionalEventListener.',
    asked_metadata: 'Asked at Flipkart, Amazon, Wipro',
    code: `// Custom event
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
}`
  },
  {
    id: 1020,
    category: 'Spring Framework',
    question: 'What is @Qualifier and @Primary in Spring?',
    answer: '@Primary marks a bean as the default candidate when multiple beans of the same type exist. @Qualifier("beanName") on the injection point selects a specific bean by name (overrides @Primary). Use @Primary when one implementation is the go-to default; use @Qualifier when you need to explicitly pick a specific instance.',
    asked_metadata: 'Asked at TCS, Infosys, Cognizant',
    code: `@Component("paypalGateway")
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
}`
  },
  {
    id: 1021,
    category: 'Spring Framework',
    question: 'What is Spring Security and how does it handle authentication?',
    answer: 'Spring Security is a framework providing authentication, authorization, and protection against common attacks. Authentication flow: request → SecurityFilterChain → AuthenticationFilter → AuthenticationManager → AuthenticationProvider → UserDetailsService (loads user) → Password comparison → SecurityContextHolder stores Authentication. Authorization is applied on the result using AccessDecisionManager.',
    asked_metadata: 'Asked at Amazon, Flipkart, TCS',
    subConcepts: [
      { title: 'SecurityFilterChain', description: 'Chain of servlet filters applied to every request. Configured via HttpSecurity in @Configuration.' },
      { title: 'UserDetailsService', description: 'Interface with loadUserByUsername() that returns a UserDetails object for authentication.' },
      { title: 'SecurityContextHolder', description: 'Stores the Authentication for the current thread (ThreadLocal by default).' }
    ]
  },
  {
    id: 1022,
    category: 'Spring Framework',
    question: 'What is Spring\'s @Value annotation?',
    answer: '@Value injects values from property files, environment variables, or SpEL expressions directly into fields or constructor parameters. Reads from application.properties by default. Supports default values with @Value("${prop.key:default}"). For type-safe structured properties, prefer @ConfigurationProperties over many @Value annotations.',
    asked_metadata: 'Asked at Wipro, HCL, Cognizant',
    code: `@Component
public class AppConfig {

    @Value("\${server.port:8080}")
    private int port;

    @Value("\${app.name}")
    private String appName;

    @Value("#{T(java.lang.Math).PI}")  // SpEL expression
    private double pi;

    @Value("\${allowed.origins:localhost}")
    private String[] allowedOrigins;
}`
  },
  {
    id: 1023,
    category: 'Spring Framework',
    question: 'What is @Lazy in Spring and when should you use it?',
    answer: '@Lazy on a bean delays its initialization until it is first requested, rather than eagerly on container startup. Useful for: expensive beans not always needed, breaking circular dependencies between singleton beans, and reducing startup time in large applications. Can be applied to @Component, @Bean, or @Autowired injection points.',
    asked_metadata: 'Asked at Infosys, TCS, Wipro'
  },
  {
    id: 1024,
    category: 'Spring Framework',
    question: 'What is the difference between @PathVariable and @RequestParam?',
    answer: '@PathVariable extracts a value from the URI path (e.g., /users/{id} → @PathVariable Long id). @RequestParam extracts a query parameter (e.g., /users?page=2 → @RequestParam int page). @RequestParam has a required attribute (true by default) and defaultValue. @PathVariable is always required by default.',
    asked_metadata: 'Asked at TCS, Cognizant, HCL',
    code: `@GetMapping("/users/{id}/orders")
public List<Order> getUserOrders(
        @PathVariable Long id,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(required = false) String status) {
    return orderService.findByUser(id, page, size, status);
}`
  },
  {
    id: 1025,
    category: 'Spring Framework',
    question: 'How does Spring handle exception handling in REST APIs?',
    answer: '@ExceptionHandler on a controller method handles exceptions for that controller only. @ControllerAdvice (or @RestControllerAdvice) is a global handler applied to all controllers. @ResponseStatus sets the HTTP status code. ResponseEntityExceptionHandler is a base class that handles standard Spring MVC exceptions. ProblemDetail (Spring 6) provides RFC 7807 error format.',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `@RestControllerAdvice
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
}`
  },
  {
    id: 1026,
    category: 'Spring Framework',
    question: 'What is @Conditional in Spring?',
    answer: '@Conditional registers a bean only when a condition is met. Common conditions: @ConditionalOnProperty (property exists/has value), @ConditionalOnClass (class on classpath), @ConditionalOnMissingBean (no bean of that type yet), @ConditionalOnExpression (SpEL). Spring Boot auto-configuration uses these extensively to wire beans only when needed.',
    asked_metadata: 'Asked at Wipro, Amazon, TCS',
    code: `@Configuration
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
}`
  },
  {
    id: 1027,
    category: 'Spring Framework',
    question: 'What is Spring\'s @Scope with prototype beans and common pitfalls?',
    answer: 'Prototype beans get a new instance each time they are requested. Pitfall: injecting a prototype bean into a singleton results in only ONE prototype instance (the one created at singleton init time). Solutions: inject ApplicationContext and call getBean() each time, use @Lookup method injection (Spring overrides the method to return a fresh prototype), or use ObjectFactory/Provider<T>.',
    asked_metadata: 'Asked at Amazon, Flipkart, Infosys',
    code: `@Service
public class ReportService {

    @Autowired
    private Provider<ReportBuilder> builderProvider;  // javax/jakarta inject

    public Report generate(ReportRequest req) {
        ReportBuilder builder = builderProvider.get(); // fresh prototype each call
        return builder.build(req);
    }
}`
  },
  {
    id: 1028,
    category: 'Spring Framework',
    question: 'What is Spring\'s expression language (SpEL)?',
    answer: 'Spring Expression Language (SpEL) is a powerful expression language for querying and manipulating objects at runtime. Used in @Value, @ConditionalOnExpression, @PreAuthorize, @Cacheable key expressions, and XML config. Supports arithmetic, logical, relational operators, method invocation, collection projection/selection, and ternary/safe-navigation operators.',
    asked_metadata: 'Asked at TCS, Wipro, HCL',
    code: `// In @Value
@Value("#{systemProperties['user.home']}")
private String userHome;

@Value("#{T(Math).random() * 100}")
private double randomNum;

// In @PreAuthorize (Spring Security)
@PreAuthorize("hasRole('ADMIN') or #userId == authentication.name")
public UserDto getUser(@PathVariable String userId) { ... }

// In @Cacheable
@Cacheable(value = "products", key = "#category.name + '-' + #page")`
  },
  {
    id: 1029,
    category: 'Spring Framework',
    question: 'How does Spring handle circular dependencies?',
    answer: 'Spring resolves circular dependencies between singleton beans using a three-level cache: singletonObjects (fully initialised), earlySingletonObjects (early exposed, not fully initialised), singletonFactories (object factories). Constructor injection circular dependencies CANNOT be resolved (no early reference available). Solution: use setter injection, @Lazy, or refactor to break the cycle. Spring 6 disallows circular dependencies by default and fails fast.',
    asked_metadata: 'Asked at Amazon, Flipkart, Google'
  },
  {
    id: 1030,
    category: 'Spring Framework',
    question: 'What is Spring Data JPA?',
    answer: 'Spring Data JPA is a Spring module that reduces boilerplate for data-access layers. Extend JpaRepository<Entity, ID> to get CRUD, pagination, and sorting for free. Derive queries from method names (findByEmailAndActiveTrue). @Query for custom JPQL/native SQL. @Modifying for update/delete queries. Projections and DTOs using interfaces or @Value with constructor expressions.',
    asked_metadata: 'Asked at Amazon, Infosys, TCS',
    code: `public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query
    List<User> findByEmailAndActiveTrue(String email);

    // Custom JPQL
    @Query("SELECT u FROM User u WHERE u.createdAt > :since")
    List<User> findRecentUsers(@Param("since") LocalDate since);

    // Native query
    @Query(value = "SELECT * FROM users WHERE score > ?1",
           nativeQuery = true)
    List<User> findHighScorers(int minScore);
}`
  },
  {
    id: 1031,
    category: 'Spring Framework',
    question: 'What is method security in Spring Security?',
    answer: 'Spring Security method-level security annotates service methods with access rules. Enable with @EnableMethodSecurity. @PreAuthorize — SpEL before method execution. @PostAuthorize — SpEL after execution (can inspect return value). @PreFilter / @PostFilter — filter collection arguments/return values. @Secured — simple role list. @RolesAllowed — JSR-250 equivalent of @Secured.',
    asked_metadata: 'Asked at Amazon, Flipkart, Wipro',
    code: `@Service
@EnableMethodSecurity
public class DocumentService {

    @PreAuthorize("hasRole('ADMIN') or #ownerId == authentication.name")
    public Document getDocument(Long docId, String ownerId) { ... }

    @PostAuthorize("returnObject.owner == authentication.name")
    public Document getSensitiveDocument(Long docId) { ... }

    @PreAuthorize("hasRole('MANAGER')")
    @PostFilter("filterObject.department == authentication.details.dept")
    public List<Employee> listEmployees() { ... }
}`
  }
];
