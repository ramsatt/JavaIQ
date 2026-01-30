import { Question } from './question.model';

export const SPRING_BOOT_QUESTIONS: Question[] = [
  {
    id: 4,
    category: 'Spring Boot',
    question: 'What is Spring Boot Auto-Configuration?',
    answer: 'It automatically configures your Spring application based on the jar dependencies that you have added.',
    asked_metadata: '7x Amazon, 5x Walmart, 4x Flipkart',
  },
  {
    id: 5,
    category: 'Spring Boot',
    question: 'What is the purpose of @SpringBootApplication?',
    answer: 'It is a convenience annotation that combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.',
    asked_metadata: '9x Accenture, 6x Amazon, 5x JPMorgan',
    code: `@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`
  },
  {
    id: 14,
    category: 'Spring Boot',
    question: 'How do you handle exceptions in Spring Boot?',
    answer: 'Using @ControllerAdvice and @ExceptionHandler to handle exceptions globally or locally within controllers.',
    asked_metadata: '6x PayPal, 4x Stripe, 3x Wells Fargo',
  },
  {
    id: 19,
    category: 'Spring Boot',
    question: 'What are Spring Boot Starters?',
    answer: 'They are dependency descriptors that simplify your build configuration by aggregating common dependencies.',
    asked_metadata: '6x Pivotal, 4x RedHat, 3x Amazon',
  },
  {
    id: 21,
    category: 'Spring Boot',
    question: 'What are the advantages of using Spring Boot?',
    answer: 'It offers easy understanding/development, increases productivity, requires minimum configuration (no XML), and includes an embedded HTTP server.',
    asked_metadata: '10x Accenture, 8x Walmart, 6x Amazon',
  },
  {
    id: 22,
    category: 'Spring Boot',
    question: 'What are the key components of Spring Boot?',
    answer: 'Spring Boot auto-configuration, Spring Boot CLI, Spring Boot starter POMs, and Spring Boot Actuators.',
    asked_metadata: '8x IBM, 6x TCS, 5x Cognizant',
  },
  {
    id: 23,
    category: 'Spring Boot',
    question: 'Why choose Spring Boot over Spring?',
    answer: 'It provides Starter POMs, Version Management, Auto Configuration, Component Scanning, Embedded server, and In-Memory DB out of the box.',
    asked_metadata: '7x Deloitte, 5x Capgemini, 4x Amazon',
  },
  {
    id: 24,
    category: 'Spring Boot',
    question: 'What does the @SpringBootApplication annotation do internally?',
    answer: 'It is equivalent to using @Configuration, @EnableAutoConfiguration, and @ComponentScan with their default attributes.',
    asked_metadata: '9x Amazon, 7x JPMorgan, 5x Wells Fargo',
  },
  {
    id: 25,
    category: 'Spring Boot',
    question: 'What is the purpose of @ComponentScan?',
    answer: 'It scans all the beans and package declarations when the application initializes to find components added to your project.',
    asked_metadata: '6x Adobe, 4x Atlassian, 3x LinkedIn',
  },
  {
    id: 26,
    category: 'Spring Boot',
    question: 'How does a Spring Boot application get started?',
    answer: 'It must have a main method that invokes SpringApplication.run() to bootstrap the application.',
    asked_metadata: '5x Citi, 4x HSBC, 3x Standard Chartered',
  },
  {
    id: 27,
    category: 'Spring Boot',
    question: 'What is Spring Initializer?',
    answer: 'A web application that helps create an initial Spring Boot project structure and provides a maven or gradle file to build your code.',
    asked_metadata: '4x Meta, 3x Netflix, 2x Pinterest',
  },
  {
    id: 28,
    category: 'Spring Boot',
    question: 'What is the difference between @RestController and @Controller?',
    answer: '@Controller maps model objects to views. @RestController simply returns the object/data directly as JSON/XML in the HTTP response.',
    asked_metadata: '7x Uber, 5x Lyft, 4x DoorDash',
    code: `@Controller
public class MyController {
    @ResponseBody @GetMapping("/hello")
    public String hello() { return "Hello"; }
}

@RestController
public class MyRestController {
    @GetMapping("/hello")
    public String hello() { return "Hello"; }
}`
  },
  {
    id: 29,
    category: 'Spring Boot',
    question: 'What is an IOC container?',
    answer: 'A framework for implementing automatic dependency injection. It manages object creation, lifetime, and injects dependencies.',
    asked_metadata: '6x Apple, 5x Microsoft, 4x Google',
  },
  {
    id: 30,
    category: 'Spring Boot',
    question: 'What is the difference between RequestMapping and GetMapping?',
    answer: 'RequestMapping is for any method (GET, POST, etc.). GetMapping is a shortcut specifically for HTTP GET requests.',
    asked_metadata: '8x Amazon, 6x Netflix, 4x Walmart',
  },
  {
    id: 31,
    category: 'Spring Boot',
    question: 'What is the use of Profiles in Spring Boot?',
    answer: 'They allow separate configurations for different environments (dev, QA, Prod), such as different database URLs.',
    asked_metadata: '5x Salesforce, 4x ServiceNow, 3x Workday',
  },
  {
    id: 32,
    category: 'Spring Boot',
    question: 'What is Spring Actuator?',
    answer: 'A feature to monitor and manage the application in production, providing endpoints for health, metrics, auditing, etc.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Splunk',
  },
  {
    id: 33,
    category: 'Spring Boot',
    question: 'How do you enable Actuator?',
    answer: 'Add the "spring-boot-starter-actuator" dependency in pom.xml.',
    asked_metadata: '5x Amazon, 4x Google, 3x Microsoft',
  },
  {
    id: 34,
    category: 'Spring Boot',
    question: 'Where do you define properties in Spring Boot?',
    answer: 'In the application.properties file (or application.yml), which is automatically loaded from the classpath.',
    asked_metadata: '6x PayPal, 5x Stripe, 4x Square',
  },
  {
    id: 35,
    category: 'Spring Boot',
    question: 'How to disable a specific auto-configuration class?',
    answer: 'Use the exclude attribute of @EnableAutoConfiguration, e.g., @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class}).',
    asked_metadata: '4x Oracle, 3x SAP, 2x IBM',
  },
  {
    id: 36,
    category: 'Spring Boot',
    question: 'Can you replace the Embedded Tomcat server?',
    answer: 'Yes, by excluding the Tomcat starter dependency and adding a dependency for Jetty or Undertow.',
    asked_metadata: '5x Spotify, 4x SoundCloud, 3x Netflix',
  },
  {
    id: 37,
    category: 'Spring Boot',
    question: 'How to change the default port (8080)?',
    answer: 'Set server.port=YOUR_PORT in the application.properties file.',
    asked_metadata: '6x Netflix, 5x Amazon, 4x Walmart',
  },
  {
    id: 38,
    category: 'Spring Boot',
    question: 'What is Thymeleaf?',
    answer: 'A modern server-side Java template engine for both web and standalone environments, commonly used in Spring Boot for dynamic web pages.',
    asked_metadata: '4x Capgemini, 3x Infosys, 2x TCS',
  },
  {
    id: 39,
    category: 'Spring Boot',
    question: 'What is Swagger in Spring Boot?',
    answer: 'A tool used to describe and document RESTful APIs in a machine-readable and human-readable format.',
    asked_metadata: '5x Uber, 4x Postman, 3x Twilio',
  },
  {
    id: 40,
    category: 'Spring Boot',
    question: 'What is the difference between @Component and @Bean?',
    answer: '@Component is for auto-detection via classpath scanning. @Bean is for explicitly declaring a bean in a @Configuration class.',
    asked_metadata: '7x Google, 6x Amazon, 5x Microsoft',
  },
  {
    id: 45,
    category: 'Spring Boot',
    question: 'What is Spring Cloud OpenFeign?',
    answer: 'A declarative Web Service client that makes writing web service clients easier by creating a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.',
    asked_metadata: '5x Netflix, 4x Amazon, 3x eBay',
  },
  {
    id: 47,
    category: 'Spring Boot',
    question: 'What is Spring Boot DevTools?',
    answer: 'A set of tools to improve the development experience, providing features like automatic restarts, live reload, and property defaults.',
    asked_metadata: '5x Amazon, 4x Microsoft, 3x Google',
  },
  {
    id: 48,
    category: 'Spring Boot',
    question: 'What are the bean scopes in Spring Boot?',
    answer: 'Singleton (default), Prototype, Request, Session, and Global-session (for portlet-based apps).',
    asked_metadata: '7x Oracle, 6x IBM, 5x TCS',
  },
  {
    id: 49,
    category: 'Spring Boot',
    question: 'What is the purpose of @Conditional annotations?',
    answer: 'They allow components to be registered only if certain conditions are met (e.g., @ConditionalOnProperty, @ConditionalOnClass).',
    asked_metadata: '5x Amazon, 4x Microsoft, 3x Google',
  },
  {
    id: 50,
    category: 'Spring Boot',
    question: 'What are Spring Boot Filters?',
    answer: 'Components that intercept HTTP requests and responses to perform tasks like logging, authentication, or input validation before they reach the controller.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Intuit',
  },
  {
    id: 61,
    category: 'Spring Boot',
    question: 'What are the bean scopes available in Spring?',
    answer: 'Singleton (default), Prototype, Request, Session, and Global-session (for portlet-based apps).',
    asked_metadata: '8x JPMorgan, 7x Amazon, 6x Wells Fargo'
  },
  {
    id: 62,
    category: 'Spring Boot',
    question: 'What is Autowiring and its modes?',
    answer: 'Autowiring allows Spring to resolve dependencies automatically. Modes: no, byName, byType, constructor, and autodetect.',
    asked_metadata: '7x Accenture, 6x TCS, 5x Infosys'
  },
  {
    id: 63,
    category: 'Spring Boot',
    question: 'Difference between Constructor and Setter Injection?',
    answer: 'Constructor injection ensures the object is fully initialized (good for mandatory dependencies). Setter injection allows partial dependencies (good for optional ones).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Walmart'
  },
  {
    id: 64,
    category: 'Spring Boot',
    question: 'What is Spring AOP?',
    answer: 'Aspect-Oriented Programming. It modularizes cross-cutting concerns (logging, security, transactions) separately from business logic.',
    asked_metadata: '7x Google, 6x Amazon, 5x Netflix'
  },
  {
    id: 65,
    category: 'Spring Boot',
    question: 'What are the types of Advice in Spring AOP?',
    answer: 'Before, AfterReturning, AfterThrowing, After (finally), and Around (most powerful, wraps the method execution).',
    asked_metadata: '5x JPMorgan, 4x Citi, 3x Wells Fargo'
  },
  {
    id: 66,
    category: 'Spring Boot',
    question: 'What is a Spring Interceptor?',
    answer: 'A component that intercepts HTTP requests before they reach the controller (preHandle) or after they leave (postHandle), used for logging, auth, etc.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Intuit'
  },
  {
    id: 67,
    category: 'Spring Boot',
    question: 'What is DispatcherServlet?',
    answer: 'The front controller in Spring MVC. It receives all incoming requests and delegates them to the appropriate controllers.',
    asked_metadata: '8x Amazon, 7x VMware, 6x RedHat'
  },
  {
    id: 68,
    category: 'Spring Boot',
    question: 'What is BindingResult?',
    answer: 'An interface that holds the result of validation and binding and contains errors that may have occurred. It must immediately follow the model object.',
    asked_metadata: '4x PayPal, 3x Stripe, 2x Adyen'
  },
  {
    id: 69,
    category: 'Spring Boot',
    question: 'What is @ModelAttribute?',
    answer: 'It binds a method parameter or method return value to a named model attribute, exposed to a web view.',
    asked_metadata: '5x Uber, 4x DoorDash, 3x Instacart'
  },
  {
    id: 70,
    category: 'Spring Boot',
    question: 'What is the difference between @RequestParam and @PathVariable?',
    answer: '@RequestParam extracts data from query parameters (url?id=1). @PathVariable extracts data from the URI path itself (/users/1).',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target'
  },
  {
    id: 154,
    category: 'Spring Boot',
    question: 'What are the advantages of using Spring Boot over traditional Java EE?',
    answer: 'Faster bootstrapping, embedded servers (Tomcat/Jetty), opinionated defaults (AutoConfig), and easier dependency management (Starters).',
    asked_metadata: '6x Oracle, 5x RedHat, 4x IBM'
  },
  {
    id: 155,
    category: 'Spring Boot',
    question: 'How do you implement and optimize REST APIs in Java?',
    answer: 'Design idempotent endpoints, use pagination for lists, compress responses (GZIP), cache data (ETags), and tune connection pools.',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target'
  },
  {
    id: 159,
    category: 'Spring Boot',
    question: 'Key considerations for database interaction and pooling?',
    answer: 'Optimize SQL queries (indexes), use prepared statements, size pools correctly (HikariCP default is often good), and monitor connection wait times.',
    asked_metadata: '6x Amazon, 5x Oracle, 4x Salesforce'
  },
  {
    id: 160,
    category: 'Spring Boot',
    question: 'How do you implement caching strategies in Java/Spring?',
    answer: 'Use in-memory caches (Caffeine) for hot reads, distributed caches (Redis) for shared state, set TTLs, and handle cache invalidation.',
    asked_metadata: '7x Redis Labs, 6x Amazon, 5x Microsoft'
  },
  {
    id: 169,
    category: 'Spring Boot',
    question: 'What are the major changes in Spring Security 6 / Spring Boot 3?',
    answer: 'Removal of WebSecurityConfigurerAdapter (now use SecurityFilterChain bean), mandatory method chaining for DSLs, and deep integration with Micrometer for observability.',
    asked_metadata: '5x JP Morgan, 3x Uber',
    code: `@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
        .authorizeHttpRequests(auth -> auth
            .anyRequest().authenticated()
        )
        .build();
}`
  },
  {
    id: 170,
    category: 'Spring Boot',
    question: 'Difference between OAuth2 and OpenID Connect (OIDC)?',
    answer: 'OAuth2 is a framework for Authorization (accessing resources). OIDC is a layer on top of OAuth2 specifically for Authentication (identity). OIDC provides an ID Token.',
    asked_metadata: '4x PayPal, 3x Stripe'
  },
  {
    id: 178,
    category: 'Spring Boot',
    question: 'How do you use Spring Boot @DataJpaTest for testing?',
    answer: '@DataJpaTest provides a slice of the Spring context specifically for JPA testing, using an in-memory database by default. It configures Hibernate, Spring Data, and the DataSource, disabling full auto-configuration.',
    asked_metadata: '3x Pivotal, 2x Salesforce',
    code: `@DataJpaTest
class MyRepositoryTest {
    @Autowired private MyRepository repo;
    
    @Test void test() { ... }
}`
  },
  {
    id: 181,
    category: 'Spring Boot',
    question: 'What are the different Transaction Propagation levels in Spring?',
    answer: 'Common ones: REQUIRED (joins existing or creates new), REQUIRES_NEW (always starts new), MANDATORY (must have existing), and NEVER (must NOT have existing).',
    asked_metadata: '5x Goldman Sachs, 3x JP Morgan',
    code: `@Transactional(propagation = Propagation.REQUIRES_NEW)
public void performAudit() { ... }`
  },
  {
    id: 183,
    category: 'Spring Boot',
    question: 'What is GraalVM Native Image support in Spring Boot 3?',
    answer: 'It allows compiling Spring apps into standalone executable binaries. Benefits include instant startup and significantly lower memory footprint, which is ideal for serverless and containerized environments.',
    asked_metadata: '3x VMware, 2x RedHat'
  },
  {
    id: 193,
    category: 'Spring Boot',
    question: 'Explain the Spring Bean Lifecycle.',
    answer: '1. Instantiation 2. Populate Properties 3. Name/Factory/Context Aware 4. BeanPostProcessor (Before) 5. @PostConstruct 6. InitializingBean 7. Custom Init Method 8. BeanPostProcessor (After) 9. READY 10. PreDestroy 11. DisposableBean 12. Custom Destroy.',
    asked_metadata: '8x Goldman Sachs, 7x Morgan Stanley, 6x Citi',
  },
  {
    id: 194,
    category: 'Spring Boot',
    question: 'How does Spring handle Circular Dependencies?',
    answer: 'For Singleton beans using Setter injection, Spring uses a three-level cache to resolve them by providing a partially initialized bean. Constructor injection circular dependencies CANNOT be resolved and will throw BeanCurrentlyInCreationException.',
    asked_metadata: '4x Uber, 3x Netflix'
  },
  {
    id: 195,
    category: 'Spring Boot',
    question: 'What are the SOLID principles in software design?',
    answer: 'S: Single Responsibility, O: Open/Closed, L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion. They promote maintainable and scalable code.',
    asked_metadata: '9x Amazon, 8x Microsoft, 7x Google'
  },
  {
    id: 196,
    category: 'Spring Boot',
    question: 'How does @Transactional work internally?',
    answer: 'Spring creates a dynamic Proxy around the bean. When the method is called, the proxy starts a transaction via the TransactionManager, executes the method, and then commits or rolls back based on the outcome.',
    asked_metadata: '5x Goldman Sachs, 3x BlackRock',
    code: `// Ensure you call it from another bean to 
// trigger the proxy, not from self (this).`
  }
];
