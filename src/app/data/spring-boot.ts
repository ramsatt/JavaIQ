import { Question } from './question.model';

export const SPRING_BOOT_QUESTIONS: Question[] = [
  {
    id: 4,
    category: 'Spring Boot',
    question: 'What is Spring Boot Auto-Configuration?',
    answer: 'It automatically configures your Spring application based on the jar dependencies that you have added.',
    asked_metadata: '7x Amazon, 5x Walmart, 4x Flipkart',
    coreConceptDescription: 'Auto-configuration examines the classpath, existing beans, and properties to automatically configure Spring beans. For example, adding spring-boot-starter-web auto-configures an embedded Tomcat, Jackson, and Spring MVC.',
    subConcepts: [
      { title: 'How It Works', description: 'Spring Boot reads <b>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</b> files to find auto-configuration classes.' },
      { title: 'Conditional Annotations', description: '<b>@ConditionalOnClass</b>, <b>@ConditionalOnMissingBean</b>, <b>@ConditionalOnProperty</b> control when auto-config activates.' }
    ],
    useCases: [
      { icon: 'fa-wand-magic-sparkles', title: 'Zero Config Startup', description: 'Add spring-boot-starter-data-jpa + H2 dependency and get a fully configured DataSource automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Override Defaults', description: 'Define your own bean to override auto-configured ones — your bean takes priority.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
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
}`,
    coreConceptDescription: '@SpringBootApplication combines three annotations: @Configuration (Java-based config), @EnableAutoConfiguration (classpath-based auto-config), and @ComponentScan (find @Component classes in the package).',
    subConcepts: [
      { title: 'Three-in-One', description: '<b>@Configuration</b> + <b>@EnableAutoConfiguration</b> + <b>@ComponentScan</b>. The entry point annotation for Spring Boot apps.' },
      { title: 'Package Scanning', description: '@ComponentScan scans the <b>package of the annotated class and below</b>. Place the main class at the root package.' }
    ],
    useCases: [
      { icon: 'fa-rocket', title: 'Application Entry', description: 'Every Spring Boot app has exactly one @SpringBootApplication class with the main() method.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Exclude Auto-Config', description: '@SpringBootApplication(exclude={DataSourceAutoConfiguration.class}) to disable specific auto-configs.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 14,
    category: 'Spring Boot',
    question: 'How do you handle exceptions in Spring Boot?',
    answer: 'Using @ControllerAdvice and @ExceptionHandler to handle exceptions globally or locally within controllers.',
    asked_metadata: '6x PayPal, 4x Stripe, 3x Wells Fargo',
    coreConceptDescription: '@ControllerAdvice provides global exception handling across all controllers. @ExceptionHandler methods within it catch specific exceptions and return appropriate HTTP responses with error details.',
    code: `@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse(404, ex.getMessage());
    }
}`,
    subConcepts: [
      { title: '@ControllerAdvice', description: '<b>Global exception handler</b> for all controllers. Combined with @ResponseBody becomes @RestControllerAdvice.' },
      { title: '@ExceptionHandler', description: 'Catches <b>specific exception types</b> and returns custom error responses with appropriate HTTP status codes.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Consistent Error Responses', description: 'All API errors return the same JSON structure with status, message, and timestamp.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'ProblemDetail (Spring 6)', description: 'Spring 6 supports RFC 7807 ProblemDetail for standardized error responses.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 19,
    category: 'Spring Boot',
    question: 'What are Spring Boot Starters?',
    answer: 'They are dependency descriptors that simplify your build configuration by aggregating common dependencies.',
    asked_metadata: '6x Pivotal, 4x RedHat, 3x Amazon',
    coreConceptDescription: 'Starters are curated dependency sets (e.g., spring-boot-starter-web includes Tomcat, Jackson, Spring MVC). They eliminate version conflicts and simplify Maven/Gradle configuration.',
    subConcepts: [
      { title: 'Common Starters', description: '<b>starter-web</b> (REST APIs), <b>starter-data-jpa</b> (Hibernate), <b>starter-security</b> (auth), <b>starter-test</b> (JUnit + Mockito).' },
      { title: 'Transitive Dependencies', description: 'Each starter pulls in all <b>compatible, version-managed</b> dependencies — no manual version conflicts.' }
    ],
    useCases: [
      { icon: 'fa-cubes', title: 'Quick Setup', description: 'One starter dependency replaces 10+ individual dependencies with guaranteed compatibility.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Custom Starters', description: 'Create your own starters for shared libraries across microservices in your organization.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 21,
    category: 'Spring Boot',
    question: 'What are the advantages of using Spring Boot?',
    answer: 'It offers easy understanding/development, increases productivity, requires minimum configuration (no XML), and includes an embedded HTTP server.',
    asked_metadata: '10x Accenture, 8x Walmart, 6x Amazon',
    coreConceptDescription: 'Spring Boot eliminates boilerplate: auto-configuration, embedded servers, opinionated defaults, production-ready features (Actuator), and the Spring Initializer for instant project scaffolding.',
    subConcepts: [
      { title: 'Developer Productivity', description: '<b>No XML config</b>, embedded servers, auto-restart (DevTools), and convention-over-configuration reduce setup time.' },
      { title: 'Production Ready', description: '<b>Actuator</b> for health/metrics, <b>externalized config</b> for environments, and <b>fat JARs</b> for easy deployment.' }
    ],
    useCases: [
      { icon: 'fa-rocket', title: 'Rapid Prototyping', description: 'Go from idea to running REST API in minutes with Spring Initializer + Starters.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Cloud Native', description: 'Fat JARs, Docker support, and Kubernetes-ready health probes make deployment seamless.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 22,
    category: 'Spring Boot',
    question: 'What are the key components of Spring Boot?',
    answer: 'Spring Boot auto-configuration, Spring Boot CLI, Spring Boot starter POMs, and Spring Boot Actuators.',
    asked_metadata: '8x IBM, 6x TCS, 5x Cognizant',
    coreConceptDescription: 'The four pillars of Spring Boot: Auto-Configuration (smart defaults), Starters (curated dependencies), Actuator (production monitoring), and CLI (rapid prototyping with Groovy scripts).',
    subConcepts: [
      { title: 'Auto-Config + Starters', description: '<b>Auto-configuration</b> reads classpath. <b>Starters</b> provide curated, version-managed dependency bundles.' },
      { title: 'Actuator + CLI', description: '<b>Actuator</b> exposes health, metrics, env endpoints. <b>CLI</b> allows running Groovy Spring scripts from command line.' }
    ],
    useCases: [
      { icon: 'fa-chart-line', title: 'Monitoring', description: 'Actuator + Micrometer + Prometheus + Grafana = full production observability stack.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-terminal', title: 'Rapid Prototyping', description: 'Spring CLI: spring run app.groovy — instant Spring app without build tools.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 23,
    category: 'Spring Boot',
    question: 'Why choose Spring Boot over Spring?',
    answer: 'It provides Starter POMs, Version Management, Auto Configuration, Component Scanning, Embedded server, and In-Memory DB out of the box.',
    asked_metadata: '7x Deloitte, 5x Capgemini, 4x Amazon',
    coreConceptDescription: 'Spring requires manual XML/Java config, external servlet container, and dependency management. Spring Boot adds opinionated defaults, embedded servers, and auto-configuration on top of Spring.',
    subConcepts: [
      { title: 'Spring (Framework)', description: 'Powerful but requires <b>manual configuration</b>: XML beans, web.xml, external Tomcat, explicit dependency versions.' },
      { title: 'Spring Boot (Opinionated)', description: '<b>Convention over configuration</b>. Embedded server, auto-config, starters, fat JAR packaging.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Faster Development', description: 'Spring Boot eliminates hours of configuration that traditional Spring requires.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'Standalone Deployment', description: 'java -jar app.jar replaces deploying WAR files to external application servers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 24,
    category: 'Spring Boot',
    question: 'What does the @SpringBootApplication annotation do internally?',
    answer: 'It is equivalent to using @Configuration, @EnableAutoConfiguration, and @ComponentScan with their default attributes.',
    asked_metadata: '9x Amazon, 7x JPMorgan, 5x Wells Fargo',
    coreConceptDescription: '@SpringBootApplication combines three annotations: @Configuration (bean definitions), @EnableAutoConfiguration (smart defaults), and @ComponentScan (finds @Component classes in the package).',
    subConcepts: [
      { title: '@Configuration', description: 'Marks the class as a <b>source of bean definitions</b>. Allows @Bean methods for explicit bean creation.' },
      { title: '@EnableAutoConfiguration', description: 'Triggers Spring Boot\'s <b>auto-configuration</b> mechanism based on classpath and existing beans.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Main Class', description: 'Place @SpringBootApplication on the root package class to scan all sub-packages automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Exclude Auto-Config', description: '@SpringBootApplication(exclude = DataSourceAutoConfiguration.class) to skip specific auto-configs.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 25,
    category: 'Spring Boot',
    question: 'What is the purpose of @ComponentScan?',
    answer: 'It scans all the beans and package declarations when the application initializes to find components added to your project.',
    asked_metadata: '6x Adobe, 4x Atlassian, 3x LinkedIn',
    coreConceptDescription: '@ComponentScan tells Spring which packages to scan for @Component, @Service, @Repository, and @Controller annotated classes and register them as beans in the application context.',
    subConcepts: [
      { title: 'Default Behavior', description: 'Scans the <b>package of the annotated class and all sub-packages</b>. This is why the main class should be in the root package.' },
      { title: 'Stereotype Annotations', description: 'Discovers <b>@Component, @Service, @Repository, @Controller</b> — all are specializations of @Component.' }
    ],
    useCases: [
      { icon: 'fa-folder-tree', title: 'Package Structure', description: 'Place main class in com.example to auto-scan all sub-packages like com.example.service, com.example.controller.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-filter', title: 'Custom Scanning', description: '@ComponentScan(basePackages = "com.other") to include beans from external packages.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 26,
    category: 'Spring Boot',
    question: 'How does a Spring Boot application get started?',
    answer: 'It must have a main method that invokes SpringApplication.run() to bootstrap the application.',
    asked_metadata: '5x Citi, 4x HSBC, 3x Standard Chartered',
    coreConceptDescription: 'SpringApplication.run() bootstraps the application: creates ApplicationContext, triggers auto-configuration, starts the embedded server, and registers all beans.',
    subConcepts: [
      { title: 'Bootstrap Process', description: '<b>Create context → Load beans → Auto-configure → Start embedded server → Ready</b>. The entire lifecycle happens inside run().' },
      { title: 'Events', description: 'Publishes lifecycle events: <b>ApplicationStartingEvent → ContextRefreshed → ApplicationReadyEvent</b>.' }
    ],
    useCases: [
      { icon: 'fa-play', title: 'Entry Point', description: 'The main() method with SpringApplication.run() is the single entry point for all Spring Boot apps.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'CommandLineRunner', description: 'Implement CommandLineRunner to execute code after startup (e.g., data seeding, validation).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 27,
    category: 'Spring Boot',
    question: 'What is Spring Initializer?',
    answer: 'A web application that helps create an initial Spring Boot project structure and provides a maven or gradle file to build your code.',
    asked_metadata: '4x Meta, 3x Netflix, 2x Pinterest',
    coreConceptDescription: 'Spring Initializr (start.spring.io) generates project scaffolding with chosen dependencies, build tool, Java version, and packaging. It creates a ready-to-run project structure.',
    subConcepts: [
      { title: 'Web Interface', description: '<b>start.spring.io</b> provides a UI to select dependencies, set metadata, and download a pre-configured project.' },
      { title: 'IDE Integration', description: 'IntelliJ, Eclipse, and VS Code have <b>built-in Initializr support</b> for creating projects without leaving the IDE.' }
    ],
    useCases: [
      { icon: 'fa-rocket', title: 'Instant Setup', description: 'Create a full Spring Boot project with JPA, Web, Security in 30 seconds.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-terminal', title: 'CLI + curl', description: 'curl https://start.spring.io/starter.zip -d dependencies=web -o demo.zip', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
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
}`,
    coreConceptDescription: '@Controller returns views (HTML pages) using ViewResolver. @RestController = @Controller + @ResponseBody — returns data directly as JSON/XML. Use @RestController for REST APIs.',
    subConcepts: [
      { title: '@Controller', description: 'Returns <b>view names</b> resolved to HTML pages. Use with Thymeleaf, JSP, or other template engines.' },
      { title: '@RestController', description: 'Returns <b>objects serialized to JSON/XML</b> directly. Every method has implicit @ResponseBody.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'REST APIs', description: 'Use @RestController for REST APIs that return JSON data to frontend or mobile clients.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-file-lines', title: 'Server-Side Rendering', description: 'Use @Controller with Thymeleaf for server-side rendered HTML pages.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 29,
    category: 'Spring Boot',
    question: 'What is an IOC container?',
    answer: 'A framework for implementing automatic dependency injection. It manages object creation, lifetime, and injects dependencies.',
    asked_metadata: '6x Apple, 5x Microsoft, 4x Google',
    coreConceptDescription: 'IoC (Inversion of Control) container manages object lifecycle and dependency injection. Spring\'s IoC container (ApplicationContext) creates, configures, wires, and manages beans automatically.',
    subConcepts: [
      { title: 'Inversion of Control', description: 'Objects <b>don\'t create their dependencies</b>. The container injects them — control is inverted to the framework.' },
      { title: 'ApplicationContext', description: 'Spring\'s IoC container. Manages all beans, handles DI, publishes events, and provides internationalization.' }
    ],
    useCases: [
      { icon: 'fa-puzzle-piece', title: 'Loose Coupling', description: 'Classes depend on interfaces, not implementations. The container wires the right implementation at runtime.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Testability', description: 'IoC makes unit testing easy — inject mock dependencies instead of real ones.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 30,
    category: 'Spring Boot',
    question: 'What is the difference between RequestMapping and GetMapping?',
    answer: 'RequestMapping is for any method (GET, POST, etc.). GetMapping is a shortcut specifically for HTTP GET requests.',
    asked_metadata: '8x Amazon, 6x Netflix, 4x Walmart',
    coreConceptDescription: '@RequestMapping handles all HTTP methods and allows method-level filtering. @GetMapping/@PostMapping are shortcuts that combine @RequestMapping with specific HTTP methods for cleaner code.',
    subConcepts: [
      { title: '@RequestMapping', description: 'General-purpose: <b>@RequestMapping(value="/api", method=GET)</b>. Works with any HTTP method.' },
      { title: 'Shortcut Annotations', description: '<b>@GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping</b> — cleaner and more readable.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'RESTful APIs', description: 'Use @GetMapping for reads, @PostMapping for creates, @PutMapping for updates, @DeleteMapping for deletes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-layer-group', title: 'Class-Level Mapping', description: '@RequestMapping("/api/users") on class + @GetMapping on methods for clean URL hierarchy.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 31,
    category: 'Spring Boot',
    question: 'What is the use of Profiles in Spring Boot?',
    answer: 'They allow separate configurations for different environments (dev, QA, Prod), such as different database URLs.',
    asked_metadata: '5x Salesforce, 4x ServiceNow, 3x Workday',
    coreConceptDescription: 'Profiles allow environment-specific configuration. Activate via spring.profiles.active to load different property files (application-dev.yml, application-prod.yml) for each environment.',
    subConcepts: [
      { title: 'Profile Activation', description: 'Set <b>spring.profiles.active=prod</b> via env variable, command line, or properties to load environment-specific config.' },
      { title: '@Profile Annotation', description: '<b>@Profile("dev")</b> on beans/configs to register them only in specific environments.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Environment Config', description: 'Dev uses H2, QA uses PostgreSQL, Prod uses Oracle — all configured via profiles.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Security Per Env', description: 'Disable CORS in prod, enable debug logging in dev — via profile-specific property files.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 32,
    category: 'Spring Boot',
    question: 'What is Spring Actuator?',
    answer: 'A feature to monitor and manage the application in production, providing endpoints for health, metrics, auditing, etc.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Splunk',
    coreConceptDescription: 'Actuator exposes production-ready endpoints: /health (liveness/readiness), /metrics (JVM, HTTP), /info, /env. Integrates with Micrometer for Prometheus, Datadog, and Grafana.',
    subConcepts: [
      { title: 'Built-in Endpoints', description: '<b>/actuator/health</b>, <b>/metrics</b>, <b>/info</b>, <b>/env</b>, <b>/beans</b>, <b>/mappings</b> — all auto-configured.' },
      { title: 'Micrometer Integration', description: 'Actuator uses <b>Micrometer</b> as metrics facade — export to Prometheus, Datadog, New Relic, CloudWatch.' }
    ],
    useCases: [
      { icon: 'fa-heart-pulse', title: 'Health Checks', description: '/actuator/health for Kubernetes liveness/readiness probes in containerized deployments.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Production Monitoring', description: 'Expose metrics to Prometheus → Grafana dashboards for real-time JVM and app monitoring.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 33,
    category: 'Spring Boot',
    question: 'How do you enable Actuator?',
    answer: 'Add the "spring-boot-starter-actuator" dependency in pom.xml.',
    asked_metadata: '5x Amazon, 4x Google, 3x Microsoft',
    coreConceptDescription: 'Add spring-boot-starter-actuator to pom.xml. Endpoints are available at /actuator/*. Configure exposure via management.endpoints.web.exposure.include in application.properties.',
    subConcepts: [
      { title: 'Dependency', description: 'Add <b>spring-boot-starter-actuator</b> to pom.xml. That\'s it — health endpoint is auto-configured.' },
      { title: 'Exposure Config', description: '<b>management.endpoints.web.exposure.include=*</b> to expose all endpoints. Default only exposes health.' }
    ],
    useCases: [
      { icon: 'fa-heart-pulse', title: 'Health Probes', description: '/actuator/health for Kubernetes liveness and readiness probes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Metrics', description: '/actuator/metrics for JVM memory, HTTP request counts, and custom application metrics.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 34,
    category: 'Spring Boot',
    question: 'Where do you define properties in Spring Boot?',
    answer: 'In the application.properties file (or application.yml), which is automatically loaded from the classpath.',
    asked_metadata: '6x PayPal, 5x Stripe, 4x Square',
    coreConceptDescription: 'application.properties or application.yml in src/main/resources is auto-loaded. Supports profiles (application-dev.yml), externalized config (env vars, command-line args), and @Value injection.',
    subConcepts: [
      { title: 'File Formats', description: '<b>application.properties</b> (flat key=value) or <b>application.yml</b> (hierarchical YAML). Both are supported.' },
      { title: 'Property Sources Order', description: 'Command-line args > env vars > application-{profile}.yml > application.yml. <b>Higher wins</b>.' }
    ],
    useCases: [
      { icon: 'fa-gear', title: 'Server Config', description: 'server.port=8081, spring.datasource.url, logging.level.root=DEBUG — all in application.properties.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: '@Value Injection', description: '@Value("${app.name}") injects property values directly into bean fields.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 35,
    category: 'Spring Boot',
    question: 'How to disable a specific auto-configuration class?',
    answer: 'Use the exclude attribute of @EnableAutoConfiguration, e.g., @EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class}).',
    asked_metadata: '4x Oracle, 3x SAP, 2x IBM',
    coreConceptDescription: 'Use @SpringBootApplication(exclude={DataSourceAutoConfiguration.class}) or @EnableAutoConfiguration(exclude={...}). Also configurable via spring.autoconfigure.exclude property.',
    subConcepts: [
      { title: 'Annotation Exclude', description: '<b>@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})</b> — disables specific auto-config.' },
      { title: 'Property Exclude', description: '<b>spring.autoconfigure.exclude</b> in application.properties for config-based exclusion.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'No Database', description: 'Exclude DataSourceAutoConfiguration when your service doesn\'t need a database.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Custom Security', description: 'Exclude SecurityAutoConfiguration to provide fully custom security configuration.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 36,
    category: 'Spring Boot',
    question: 'Can you replace the Embedded Tomcat server?',
    answer: 'Yes, by excluding the Tomcat starter dependency and adding a dependency for Jetty or Undertow.',
    asked_metadata: '5x Spotify, 4x SoundCloud, 3x Netflix',
    coreConceptDescription: 'Exclude spring-boot-starter-tomcat, then add spring-boot-starter-jetty or spring-boot-starter-undertow. Undertow is lightweight and fast, Jetty is mature and feature-rich.',
    subConcepts: [
      { title: 'Exclude + Add', description: 'In pom.xml: <b>exclude Tomcat from spring-boot-starter-web</b>, then add Jetty or Undertow starter.' },
      { title: 'Server Choices', description: '<b>Tomcat</b> (default, mature), <b>Jetty</b> (lightweight, async), <b>Undertow</b> (high performance, low memory).' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'High Performance', description: 'Undertow for high-throughput services — non-blocking I/O with lower memory footprint.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'WebSocket Support', description: 'Jetty and Undertow have excellent WebSocket support for real-time applications.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 37,
    category: 'Spring Boot',
    question: 'How to change the default port (8080)?',
    answer: 'Set server.port=YOUR_PORT in the application.properties file.',
    asked_metadata: '6x Netflix, 5x Amazon, 4x Walmart',
    coreConceptDescription: 'Set server.port=YOUR_PORT in application.properties or pass --server.port=9090 as a command-line argument. Use server.port=0 for a random available port (useful in tests).',
    subConcepts: [
      { title: 'Property', description: '<b>server.port=9090</b> in application.properties or application.yml.' },
      { title: 'Command Line', description: '<b>java -jar app.jar --server.port=9090</b> overrides the property file setting.' }
    ],
    useCases: [
      { icon: 'fa-gear', title: 'Multiple Instances', description: 'Run multiple services on different ports locally: 8081 for user-service, 8082 for order-service.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Random Port', description: 'server.port=0 for tests — Spring picks a random available port to avoid conflicts.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 38,
    category: 'Spring Boot',
    question: 'What is Thymeleaf?',
    answer: 'A modern server-side Java template engine for both web and standalone environments, commonly used in Spring Boot for dynamic web pages.',
    asked_metadata: '4x Capgemini, 3x Infosys, 2x TCS',
    coreConceptDescription: 'Thymeleaf is a Java template engine for server-side rendering. It processes HTML templates with th:* attributes. Templates are valid HTML — can be opened in browsers without a server.',
    subConcepts: [
      { title: 'Natural Templates', description: 'Templates are <b>valid HTML</b> that display correctly in browsers. th:text, th:if, th:each for dynamic content.' },
      { title: 'Spring Integration', description: 'Spring Boot auto-configures Thymeleaf. Templates go in <b>src/main/resources/templates/</b>.' }
    ],
    useCases: [
      { icon: 'fa-file-lines', title: 'Server-Side Pages', description: 'Admin dashboards, email templates, and traditional web applications with server-rendered HTML.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'vs React/Angular', description: 'Thymeleaf for server-rendered. React/Angular for SPAs. Choose based on app requirements.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 39,
    category: 'Spring Boot',
    question: 'What is Swagger in Spring Boot?',
    answer: 'A tool used to describe and document RESTful APIs in a machine-readable and human-readable format.',
    asked_metadata: '5x Uber, 4x Postman, 3x Twilio',
    coreConceptDescription: 'Swagger (now OpenAPI) generates interactive API documentation from annotations. SpringDoc (springdoc-openapi) is the modern replacement for SpringFox. Provides a UI to test APIs directly.',
    subConcepts: [
      { title: 'SpringDoc OpenAPI', description: 'Add <b>springdoc-openapi-starter-webmvc-ui</b>. Access UI at <b>/swagger-ui.html</b>. Auto-generates from annotations.' },
      { title: 'Annotations', description: '<b>@Operation</b>, <b>@ApiResponse</b>, <b>@Tag</b> customize the generated documentation.' }
    ],
    useCases: [
      { icon: 'fa-file-lines', title: 'API Documentation', description: 'Auto-generated, always up-to-date API docs that frontend teams can explore and test.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'API Testing', description: 'Swagger UI lets you test API endpoints directly from the browser — no Postman needed.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 40,
    category: 'Spring Boot',
    question: 'What is the difference between @Component and @Bean?',
    answer: '@Component is for auto-detection via classpath scanning. @Bean is for explicitly declaring a bean in a @Configuration class.',
    asked_metadata: '7x Google, 6x Amazon, 5x Microsoft',
    coreConceptDescription: '@Component is detected by classpath scanning. @Bean is declared explicitly in @Configuration classes for manual bean creation — used for third-party library classes you cannot annotate.',
    subConcepts: [
      { title: '@Component (Auto-detection)', description: 'Annotate <b>your own classes</b>. Detected by @ComponentScan. Includes @Service, @Repository, @Controller.' },
      { title: '@Bean (Manual Declaration)', description: 'Declare in <b>@Configuration class</b>. Used for third-party classes (RestTemplate, ObjectMapper) you can\'t annotate.' }
    ],
    useCases: [
      { icon: 'fa-wand-magic-sparkles', title: 'Your Classes', description: 'Use @Service, @Repository, @Controller on your classes for automatic detection.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-puzzle-piece', title: 'Third-Party Beans', description: 'Use @Bean for RestTemplate, ObjectMapper, DataSource — classes you do not own.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 45,
    category: 'Spring Boot',
    question: 'What is Spring Cloud OpenFeign?',
    answer: 'A declarative Web Service client that makes writing web service clients easier by creating a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.',
    asked_metadata: '5x Netflix, 4x Amazon, 3x eBay',
    coreConceptDescription: 'OpenFeign generates REST client implementations from annotated interfaces. Spring Cloud integrates it with service discovery and load balancing for declarative inter-service communication.',
    subConcepts: [
      { title: 'Declarative HTTP Client', description: 'Define an <b>interface with annotations</b>. Feign creates the implementation at runtime — no RestTemplate needed.' },
      { title: 'Integration', description: 'Works with <b>Eureka</b> (service discovery), <b>Resilience4j</b> (circuit breaker), and <b>load balancing</b> automatically.' }
    ],
    useCases: [
      { icon: 'fa-plug', title: 'Microservice Communication', description: 'Call other microservices by defining an interface — Feign handles HTTP, serialization, and errors.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Configurable', description: 'Set timeouts, retries, and error decoders per-client via application.yml.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 47,
    category: 'Spring Boot',
    question: 'What is Spring Boot DevTools?',
    answer: 'A set of tools to improve the development experience, providing features like automatic restarts, live reload, and property defaults.',
    asked_metadata: '5x Amazon, 4x Microsoft, 3x Google',
    coreConceptDescription: 'DevTools provides automatic restart on code changes, LiveReload server for browser refresh, and relaxed property defaults for development. It is automatically disabled in production (JAR packaging).',
    subConcepts: [
      { title: 'Auto Restart', description: 'Watches classpath for changes and <b>restarts the app automatically</b> using two classloaders for fast reloads.' },
      { title: 'LiveReload', description: 'Triggers <b>browser refresh</b> when static resources change. Install LiveReload browser extension.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Faster Development', description: 'Save code → auto-restart → see changes instantly without manual restart.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Auto-Disabled in Prod', description: 'DevTools is automatically disabled when running as a packaged JAR — no risk in production.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 48,
    category: 'Spring Boot',
    question: 'What are the bean scopes in Spring Boot?',
    answer: 'Singleton (default), Prototype, Request, Session, and Global-session (for portlet-based apps).',
    asked_metadata: '7x Oracle, 6x IBM, 5x TCS',
    coreConceptDescription: 'Bean scopes define the lifecycle of beans. Singleton (one instance per context) is the default. Prototype creates a new instance per injection. Request/Session scopes are for web applications.',
    subConcepts: [
      { title: 'Singleton (Default)', description: '<b>One instance</b> per ApplicationContext. Shared across all injection points. Must be thread-safe.' },
      { title: 'Prototype', description: '<b>New instance</b> created for every injection or getBean() call. Spring does not manage its destruction.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Stateless Services', description: 'Use singleton for stateless @Service and @Repository beans — the default and most common scope.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-user', title: 'Per-Request Beans', description: 'Use request scope for beans that hold request-specific data (e.g., audit context).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 49,
    category: 'Spring Boot',
    question: 'What is the purpose of @Conditional annotations?',
    answer: 'They allow components to be registered only if certain conditions are met (e.g., @ConditionalOnProperty, @ConditionalOnClass).',
    asked_metadata: '5x Amazon, 4x Microsoft, 3x Google',
    coreConceptDescription: '@Conditional annotations control bean registration based on conditions. @ConditionalOnClass (classpath), @ConditionalOnMissingBean (no existing bean), @ConditionalOnProperty (config property).',
    subConcepts: [
      { title: 'Classpath Conditions', description: '<b>@ConditionalOnClass</b>: register only if a class is on classpath. Used by auto-configurations.' },
      { title: 'Property Conditions', description: '<b>@ConditionalOnProperty(name="feature.enabled", havingValue="true")</b>: register only if property is set.' }
    ],
    useCases: [
      { icon: 'fa-toggle-on', title: 'Feature Flags', description: '@ConditionalOnProperty to enable/disable features via configuration without code changes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Auto-Configuration', description: 'Spring Boot auto-configs use @Conditional extensively to activate only when appropriate.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 50,
    category: 'Spring Boot',
    question: 'What are Spring Boot Filters?',
    answer: 'Components that intercept HTTP requests and responses to perform tasks like logging, authentication, or input validation before they reach the controller.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Intuit',
    coreConceptDescription: 'Servlet Filters intercept HTTP requests/responses at the Servlet level (before DispatcherServlet). Register via FilterRegistrationBean or @Component. Different from Spring Interceptors which work at the Handler level.',
    subConcepts: [
      { title: 'Servlet-Level', description: 'Filters work <b>before DispatcherServlet</b>. Access raw request/response. Used for CORS, encoding, security.' },
      { title: 'vs Interceptors', description: 'Filters: Servlet API level. <b>Interceptors</b>: Spring MVC level. Interceptors have access to Handler and ModelAndView.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Security', description: 'Spring Security uses a chain of Servlet Filters for authentication and authorization.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-file-lines', title: 'Request Logging', description: 'Log request/response bodies, headers, and timing at the filter level.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 61,
    category: 'Spring Boot',
    question: 'What are the bean scopes available in Spring?',
    answer: 'Singleton (default), Prototype, Request, Session, and Global-session (for portlet-based apps).',
    asked_metadata: '8x JPMorgan, 7x Amazon, 6x Wells Fargo',
    coreConceptDescription: 'Spring bean scopes: Singleton (one per context, default), Prototype (new per injection), Request (per HTTP request), Session (per HTTP session). Choose based on statefulness requirements.',
    subConcepts: [
      { title: 'Singleton vs Prototype', description: '<b>Singleton</b>: shared, must be thread-safe. <b>Prototype</b>: new instance each time, Spring doesn\'t manage destruction.' },
      { title: 'Web Scopes', description: '<b>Request</b>: per HTTP request. <b>Session</b>: per user session. Only available in web-aware ApplicationContext.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Thread Safety', description: 'Singleton beans must be stateless or thread-safe. Don\'t store request-specific data in singletons.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-user', title: 'Session Scope', description: 'Shopping cart bean scoped to session — each user gets their own cart instance.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 62,
    category: 'Spring Boot',
    question: 'What is Autowiring and its modes?',
    answer: 'Autowiring allows Spring to resolve dependencies automatically. Modes: no, byName, byType, constructor, and autodetect.',
    asked_metadata: '7x Accenture, 6x TCS, 5x Infosys',
    coreConceptDescription: 'Autowiring automatically resolves and injects bean dependencies. Spring uses @Autowired (by type), @Qualifier (by name), or constructor injection (preferred, no annotation needed in single-constructor beans).',
    subConcepts: [
      { title: 'By Type (Default)', description: '<b>@Autowired</b> matches by type. If multiple candidates exist, use <b>@Qualifier</b> to specify which one.' },
      { title: 'Constructor Injection', description: '<b>Preferred approach</b>. Spring auto-injects via constructor. No @Autowired needed for single constructors.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Best Practice', description: 'Use constructor injection for mandatory dependencies, setter injection for optional ones.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Immutability', description: 'Constructor injection allows final fields — guaranteeing the bean is fully initialized.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 63,
    category: 'Spring Boot',
    question: 'Difference between Constructor and Setter Injection?',
    answer: 'Constructor injection ensures the object is fully initialized (good for mandatory dependencies). Setter injection allows partial dependencies (good for optional ones).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Walmart',
    coreConceptDescription: 'Constructor injection provides immutability and ensures all mandatory dependencies are set. Setter injection allows optional/changeable dependencies. Spring team recommends constructor injection.',
    subConcepts: [
      { title: 'Constructor Injection', description: 'Dependencies are <b>required and immutable</b> (final fields). Object is fully initialized on creation.' },
      { title: 'Setter Injection', description: 'Dependencies are <b>optional and mutable</b>. Useful for circular dependencies (but avoid them).' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Fail-Fast', description: 'Constructor injection fails at startup if a dependency is missing — not at runtime.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Testability', description: 'Constructor injection makes unit testing trivial — pass mocks directly via constructor.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 64,
    category: 'Spring Boot',
    question: 'What is Spring AOP?',
    answer: 'Aspect-Oriented Programming. It modularizes cross-cutting concerns (logging, security, transactions) separately from business logic.',
    asked_metadata: '7x Google, 6x Amazon, 5x Netflix',
    coreConceptDescription: 'AOP separates cross-cutting concerns (logging, security, transactions) from business logic. Spring AOP uses proxies to intercept method calls and apply aspects without modifying the target code.',
    subConcepts: [
      { title: 'Core Concepts', description: '<b>Aspect</b> (the concern), <b>Pointcut</b> (where to apply), <b>Advice</b> (what to do), <b>JoinPoint</b> (the method being intercepted).' },
      { title: 'Proxy-Based', description: 'Spring AOP creates <b>JDK dynamic proxies</b> (interfaces) or <b>CGLIB proxies</b> (classes) to intercept calls.' }
    ],
    useCases: [
      { icon: 'fa-clock', title: '@Transactional', description: 'Spring\'s @Transactional is implemented using AOP — a proxy wraps the method with begin/commit/rollback.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-file-lines', title: 'Logging', description: '@Around advice to log method entry/exit, execution time, and parameters automatically.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 65,
    category: 'Spring Boot',
    question: 'What are the types of Advice in Spring AOP?',
    answer: 'Before, AfterReturning, AfterThrowing, After (finally), and Around (most powerful, wraps the method execution).',
    asked_metadata: '5x JPMorgan, 4x Citi, 3x Wells Fargo',
    coreConceptDescription: 'AOP Advice types define when aspect logic runs relative to the target method: Before (before execution), After (after), Around (wraps execution), AfterReturning, and AfterThrowing.',
    subConcepts: [
      { title: 'Before & After', description: '<b>@Before</b>: runs before method. <b>@After</b>: runs after (like finally). <b>@AfterReturning/Throwing</b>: conditional.' },
      { title: '@Around', description: 'Most powerful — <b>wraps the entire method</b>. Can modify args, result, or even skip execution.' }
    ],
    useCases: [
      { icon: 'fa-clock', title: 'Execution Timing', description: '@Around advice to measure and log method execution time for performance monitoring.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Security Checks', description: '@Before advice to validate permissions before method execution.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 66,
    category: 'Spring Boot',
    question: 'What is a Spring Interceptor?',
    answer: 'A component that intercepts HTTP requests before they reach the controller (preHandle) or after they leave (postHandle), used for logging, auth, etc.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Intuit',
    coreConceptDescription: 'HandlerInterceptor provides preHandle() (before controller), postHandle() (after controller, before view), and afterCompletion() (after view rendering). Used for logging, auth, and rate limiting.',
    subConcepts: [
      { title: 'preHandle()', description: 'Runs <b>before the controller</b>. Return false to block the request (e.g., auth check).' },
      { title: 'postHandle()', description: 'Runs <b>after controller, before view rendering</b>. Can modify the ModelAndView.' }
    ],
    useCases: [
      { icon: 'fa-file-lines', title: 'Request Logging', description: 'Log request URL, method, execution time, and response status for audit trails.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Authentication', description: 'Check JWT tokens in preHandle() — reject unauthorized requests before reaching controllers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 67,
    category: 'Spring Boot',
    question: 'What is DispatcherServlet?',
    answer: 'The front controller in Spring MVC. It receives all incoming requests and delegates them to the appropriate controllers.',
    asked_metadata: '8x Amazon, 7x VMware, 6x RedHat',
    coreConceptDescription: 'DispatcherServlet is the front controller of Spring MVC. It receives all HTTP requests, consults HandlerMapping to find the right controller, invokes it, and renders the response via ViewResolver.',
    subConcepts: [
      { title: 'Front Controller Pattern', description: '<b>Single entry point</b> for all requests. Routes to controllers based on URL mappings.' },
      { title: 'Request Flow', description: 'Request → DispatcherServlet → <b>HandlerMapping → Controller → ViewResolver → Response</b>.' }
    ],
    useCases: [
      { icon: 'fa-sitemap', title: 'Request Routing', description: 'DispatcherServlet uses HandlerMapping to find which @Controller method handles each URL.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Auto-Configured', description: 'Spring Boot auto-configures DispatcherServlet on / — no web.xml needed.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 68,
    category: 'Spring Boot',
    question: 'What is BindingResult?',
    answer: 'An interface that holds the result of validation and binding and contains errors that may have occurred. It must immediately follow the model object.',
    asked_metadata: '4x PayPal, 3x Stripe, 2x Adyen',
    coreConceptDescription: 'BindingResult captures validation errors from @Valid annotations. It must follow the validated object in the method signature. Check hasErrors() before processing the form data.',
    subConcepts: [
      { title: 'Validation Flow', description: '<b>@Valid @RequestBody User user, BindingResult result</b> — Spring validates then populates result with errors.' },
      { title: 'Error Handling', description: 'Call <b>result.hasErrors()</b> to check, then <b>result.getFieldErrors()</b> for specific validation failures.' }
    ],
    useCases: [
      { icon: 'fa-check', title: 'Form Validation', description: 'Validate user input with @NotNull, @Size, @Email annotations and collect errors in BindingResult.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'API Validation', description: 'For REST APIs, prefer @Valid with @ExceptionHandler over manual BindingResult checking.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 69,
    category: 'Spring Boot',
    question: 'What is @ModelAttribute?',
    answer: 'It binds a method parameter or method return value to a named model attribute, exposed to a web view.',
    asked_metadata: '5x Uber, 4x DoorDash, 3x Instacart',
    coreConceptDescription: '@ModelAttribute binds request parameters to a POJO automatically. On methods: populates model before handler execution. On parameters: binds form data to the object.',
    subConcepts: [
      { title: 'On Parameters', description: '<b>@ModelAttribute User user</b> binds form fields (name, email) to User object properties automatically.' },
      { title: 'On Methods', description: '<b>@ModelAttribute on a method</b> adds attributes to the model before any @RequestMapping method executes.' }
    ],
    useCases: [
      { icon: 'fa-file-lines', title: 'Form Handling', description: 'HTML form submission → @ModelAttribute User binds all form fields to the User POJO.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Pre-Population', description: '@ModelAttribute method loads common data (dropdowns, categories) before every controller method.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 70,
    category: 'Spring Boot',
    question: 'What is the difference between @RequestParam and @PathVariable?',
    answer: '@RequestParam extracts data from query parameters (url?id=1). @PathVariable extracts data from the URI path itself (/users/1).',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target',
    coreConceptDescription: '@RequestParam extracts query string parameters (?key=value). @PathVariable extracts values from the URI template ({id}). Use @PathVariable for resource identification, @RequestParam for filtering/search.',
    subConcepts: [
      { title: '@PathVariable', description: 'Extracts from <b>URI path</b>: /users/<b>{id}</b>. Used for resource identification.' },
      { title: '@RequestParam', description: 'Extracts from <b>query string</b>: /users?<b>name=John</b>. Used for optional filters, pagination.' }
    ],
    useCases: [
      { icon: 'fa-link', title: 'RESTful URLs', description: 'GET /users/{id} — PathVariable for clean REST resource URLs.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-filter', title: 'Search & Filter', description: 'GET /users?status=active&page=1 — RequestParam for query filters.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 154,
    category: 'Spring Boot',
    question: 'What are the advantages of using Spring Boot over traditional Java EE?',
    answer: 'Faster bootstrapping, embedded servers (Tomcat/Jetty), opinionated defaults (AutoConfig), and easier dependency management (Starters).',
    asked_metadata: '6x Oracle, 5x RedHat, 4x IBM',
    coreConceptDescription: 'Spring Boot provides embedded servers (no WAR deployment), auto-configuration (no XML), starters (no dependency conflicts), and Actuator (production monitoring) — all missing in traditional Java EE.',
    subConcepts: [
      { title: 'Embedded Server', description: '<b>java -jar app.jar</b> replaces deploying WAR to external servers. No Tomcat/WildFly installation needed.' },
      { title: 'Convention over Config', description: 'Sensible defaults for everything. Override only what you need via <b>application.properties</b>.' }
    ],
    useCases: [
      { icon: 'fa-cloud', title: 'Cloud Deployment', description: 'Fat JARs deploy to Docker/Kubernetes without needing application server images.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Developer Speed', description: 'Spring Initializr + Starters: from zero to running API in under 5 minutes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 155,
    category: 'Spring Boot',
    question: 'How do you implement and optimize REST APIs in Java?',
    answer: 'Design idempotent endpoints, use pagination for lists, compress responses (GZIP), cache data (ETags), and tune connection pools.',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target',
    coreConceptDescription: 'Design RESTful APIs with proper HTTP methods, status codes, pagination (Page/Pageable), GZIP compression, ETags for caching, and HATEOAS for self-descriptive responses.',
    subConcepts: [
      { title: 'Design Best Practices', description: '<b>Idempotent</b> PUT/DELETE, proper <b>HTTP status codes</b>, pagination with Pageable, versioning (URI or header).' },
      { title: 'Performance', description: '<b>GZIP</b> (server.compression.enabled), <b>ETags</b> for caching, <b>connection pooling</b>, async endpoints.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Pagination', description: 'Use Spring Data Pageable: /api/users?page=0&size=20&sort=name — automatic pagination.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gauge-high', title: 'Response Compression', description: 'Enable GZIP: server.compression.enabled=true reduces response size by 60-80%.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 159,
    category: 'Spring Boot',
    question: 'Key considerations for database interaction and pooling?',
    answer: 'Optimize SQL queries (indexes), use prepared statements, size pools correctly (HikariCP default is often good), and monitor connection wait times.',
    asked_metadata: '6x Amazon, 5x Oracle, 4x Salesforce',
    coreConceptDescription: 'Key considerations: use HikariCP (Spring Boot default), size pool correctly (connections = CPU cores * 2 + disk spindles), monitor with Actuator, use indexes, and batch operations.',
    subConcepts: [
      { title: 'Connection Pooling', description: '<b>HikariCP</b> default pool. Key settings: maximumPoolSize, minimumIdle, connectionTimeout, maxLifetime.' },
      { title: 'Query Optimization', description: 'Add <b>database indexes</b>, use <b>batch inserts</b>, avoid N+1 queries, use <b>projections</b> for read-only data.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Pool Sizing', description: 'Start with maximumPoolSize = CPU cores * 2 + 1. Monitor wait times via Actuator.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Monitoring', description: 'HikariCP metrics via Spring Actuator: active, idle, pending connections.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 160,
    category: 'Spring Boot',
    question: 'How do you implement caching strategies in Java/Spring?',
    answer: 'Use in-memory caches (Caffeine) for hot reads, distributed caches (Redis) for shared state, set TTLs, and handle cache invalidation.',
    asked_metadata: '7x Redis Labs, 6x Amazon, 5x Microsoft',
    coreConceptDescription: 'Spring Cache abstraction with @Cacheable, @CacheEvict, @CachePut. Use Caffeine for in-memory (single node) and Redis for distributed caching. Set appropriate TTLs and handle invalidation.',
    subConcepts: [
      { title: '@Cacheable', description: '<b>@Cacheable("users")</b> caches method results. Subsequent calls with same args return cached value.' },
      { title: 'Cache Providers', description: '<b>Caffeine</b> (in-memory, single JVM), <b>Redis</b> (distributed, multi-node), <b>EhCache</b> (feature-rich local).' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Hot Data', description: 'Cache frequently accessed, rarely changed data: user profiles, config, product catalogs.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Invalidation', description: '@CacheEvict on update/delete methods. TTL-based expiry for eventual consistency.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
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
}`,
    coreConceptDescription: 'Spring Security 6 removed WebSecurityConfigurerAdapter. Now use @Bean SecurityFilterChain. Lambda DSL is mandatory. Micrometer integration for security observability.',
    subConcepts: [
      { title: 'SecurityFilterChain Bean', description: 'Replace <b>extends WebSecurityConfigurerAdapter</b> with <b>@Bean SecurityFilterChain</b>. More composable.' },
      { title: 'Lambda DSL', description: 'All config uses <b>lambda expressions</b>: http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated()).' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Modern Config', description: '@Bean SecurityFilterChain — cleaner, supports multiple filter chains for different endpoints.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Observability', description: 'Spring Security 6 integrates with Micrometer for tracing security filter execution.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 170,
    category: 'Spring Boot',
    question: 'Difference between OAuth2 and OpenID Connect (OIDC)?',
    answer: 'OAuth2 is a framework for Authorization (accessing resources). OIDC is a layer on top of OAuth2 specifically for Authentication (identity). OIDC provides an ID Token.',
    asked_metadata: '4x PayPal, 3x Stripe',
    coreConceptDescription: 'OAuth2 handles authorization (can this app access your data?). OIDC adds authentication on top (who is this user?). OIDC provides an ID Token containing user identity claims.',
    subConcepts: [
      { title: 'OAuth2 (Authorization)', description: 'Grants <b>access tokens</b> to client apps. Defines scopes for what resources can be accessed.' },
      { title: 'OIDC (Authentication)', description: 'Built on OAuth2. Adds <b>ID Token</b> (JWT) containing user identity: name, email, roles.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Social Login', description: '"Login with Google" uses OIDC — Google authenticates the user and returns an ID Token.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-key', title: 'API Authorization', description: 'OAuth2 access tokens authorize API calls between microservices or client apps.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
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
}`,
    coreConceptDescription: '@DataJpaTest configures only JPA-related components: Hibernate, Spring Data, DataSource. Uses H2 by default. Faster than @SpringBootTest because it loads a minimal context slice.',
    subConcepts: [
      { title: 'Slice Test', description: 'Loads <b>only JPA layer</b>: entities, repositories, DataSource. No controllers, services, or security.' },
      { title: 'In-Memory DB', description: 'Auto-configures <b>embedded H2</b> for testing. No external database needed.' }
    ],
    useCases: [
      { icon: 'fa-vial', title: 'Repository Testing', description: 'Fast, isolated tests for repository queries, custom JPQL, and native SQL.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'vs @SpringBootTest', description: '@DataJpaTest loads only JPA slice (fast). @SpringBootTest loads everything (slow but complete).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 181,
    category: 'Spring Boot',
    question: 'What are the different Transaction Propagation levels in Spring?',
    answer: 'Common ones: REQUIRED (joins existing or creates new), REQUIRES_NEW (always starts new), MANDATORY (must have existing), and NEVER (must NOT have existing).',
    asked_metadata: '5x Goldman Sachs, 3x JP Morgan',
    code: `@Transactional(propagation = Propagation.REQUIRES_NEW)
public void performAudit() { ... }`,
    coreConceptDescription: 'Propagation controls how transactions relate to each other. REQUIRED (default, join existing), REQUIRES_NEW (always new), MANDATORY (must have existing), NEVER (must NOT have).',
    subConcepts: [
      { title: 'REQUIRED (Default)', description: 'Joins existing transaction or <b>creates a new one</b>. Most common. Rolls back everything on failure.' },
      { title: 'REQUIRES_NEW', description: '<b>Always creates a new</b> transaction. Suspends the existing one. Inner and outer are independent.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Audit Logging', description: 'Use REQUIRES_NEW for audit logs — audit record persists even if the main transaction rolls back.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Self-Invocation', description: 'Calling @Transactional from within the same class bypasses the proxy — propagation won\'t work!', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 183,
    category: 'Spring Boot',
    question: 'What is GraalVM Native Image support in Spring Boot 3?',
    answer: 'It allows compiling Spring apps into standalone executable binaries. Benefits include instant startup and significantly lower memory footprint, which is ideal for serverless and containerized environments.',
    asked_metadata: '3x VMware, 2x RedHat',
    coreConceptDescription: 'GraalVM Native Image compiles Spring apps to standalone binaries. Instant startup (milliseconds vs seconds), 5x lower memory. Ideal for serverless and short-lived containers. Requires AOT processing.',
    subConcepts: [
      { title: 'Benefits', description: '<b>Instant startup</b> (50ms vs 5s), <b>lower memory</b> (50MB vs 250MB). No JVM warmup needed.' },
      { title: 'Trade-offs', description: '<b>Longer build time</b> (minutes), no runtime reflection without hints, limited dynamic features.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Serverless', description: 'AWS Lambda, Google Cloud Functions — instant cold start eliminates the JVM startup penalty.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Containers', description: 'Smaller container images (50MB vs 200MB+) with instant startup for Kubernetes pods.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 193,
    category: 'Spring Boot',
    question: 'Explain the Spring Bean Lifecycle.',
    answer: '1. Instantiation 2. Populate Properties 3. Name/Factory/Context Aware 4. BeanPostProcessor (Before) 5. @PostConstruct 6. InitializingBean 7. Custom Init Method 8. BeanPostProcessor (After) 9. READY 10. PreDestroy 11. DisposableBean 12. Custom Destroy.',
    asked_metadata: '8x Goldman Sachs, 7x Morgan Stanley, 6x Citi',
    coreConceptDescription: 'Bean lifecycle: Instantiation → Property injection → Aware interfaces → BeanPostProcessor(before) → @PostConstruct → InitializingBean → Custom init → BeanPostProcessor(after) → READY → @PreDestroy → DisposableBean.',
    subConcepts: [
      { title: 'Initialization Phase', description: '<b>@PostConstruct</b> (standard), <b>InitializingBean.afterPropertiesSet()</b>, and <b>custom init-method</b> — in that order.' },
      { title: 'Destruction Phase', description: '<b>@PreDestroy</b> (standard), <b>DisposableBean.destroy()</b>, and <b>custom destroy-method</b> — in that order.' }
    ],
    useCases: [
      { icon: 'fa-play', title: '@PostConstruct', description: 'Initialize resources, start background tasks, or validate configuration after bean creation.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-stop', title: '@PreDestroy', description: 'Release resources, close connections, or flush caches before bean destruction.', color: 'text-red-600', bg: 'bg-red-100' }
    ],
  },
  {
    id: 194,
    category: 'Spring Boot',
    question: 'How does Spring handle Circular Dependencies?',
    answer: 'For Singleton beans using Setter injection, Spring uses a three-level cache to resolve them by providing a partially initialized bean. Constructor injection circular dependencies CANNOT be resolved and will throw BeanCurrentlyInCreationException.',
    asked_metadata: '4x Uber, 3x Netflix',
    coreConceptDescription: 'Spring resolves setter-injection circular dependencies using a three-level cache (singletonObjects, earlySingletonObjects, singletonFactories). Constructor injection circular deps cannot be resolved — use @Lazy.',
    subConcepts: [
      { title: 'Three-Level Cache', description: 'Spring exposes <b>partially initialized beans</b> via early reference cache to break the circular dependency cycle.' },
      { title: 'Constructor Injection', description: 'Cannot be resolved — throws <b>BeanCurrentlyInCreationException</b>. Fix with @Lazy on one constructor parameter.' }
    ],
    useCases: [
      { icon: 'fa-triangle-exclamation', title: 'Avoid If Possible', description: 'Circular dependencies indicate design issues. Refactor using events, interfaces, or composition.', color: 'text-amber-600', bg: 'bg-amber-100' },
      { icon: 'fa-code', title: '@Lazy Workaround', description: '@Lazy on a constructor parameter creates a proxy that defers initialization.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 195,
    category: 'Spring Boot',
    question: 'What are the SOLID principles in software design?',
    answer: 'S: Single Responsibility, O: Open/Closed, L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion. They promote maintainable and scalable code.',
    asked_metadata: '9x Amazon, 8x Microsoft, 7x Google',
    coreConceptDescription: 'SOLID: Single Responsibility (one reason to change), Open/Closed (open for extension, closed for modification), Liskov Substitution, Interface Segregation, Dependency Inversion (depend on abstractions).',
    subConcepts: [
      { title: 'SRP + OCP', description: '<b>S</b>: One class, one responsibility. <b>O</b>: Extend behavior without modifying existing code (use interfaces/abstract classes).' },
      { title: 'LSP + ISP + DIP', description: '<b>L</b>: Subtypes must be substitutable. <b>I</b>: Many specific interfaces > one general. <b>D</b>: Depend on abstractions, not concretions.' }
    ],
    useCases: [
      { icon: 'fa-puzzle-piece', title: 'Spring DIP', description: 'Spring IoC is a perfect example of DIP — classes depend on interfaces, container injects implementations.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Clean Architecture', description: 'SOLID principles are the foundation of Clean Architecture, Hexagonal Architecture, and DDD.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 196,
    category: 'Spring Boot',
    question: 'How does @Transactional work internally?',
    answer: 'Spring creates a dynamic Proxy around the bean. When the method is called, the proxy starts a transaction via the TransactionManager, executes the method, and then commits or rolls back based on the outcome.',
    asked_metadata: '5x Goldman Sachs, 3x BlackRock',
    code: `// Ensure you call it from another bean to 
// trigger the proxy, not from self (this).`,
    coreConceptDescription: '@Transactional uses Spring AOP proxies. When method is called through the proxy, it starts a transaction via PlatformTransactionManager, executes the method, and commits or rolls back.',
    subConcepts: [
      { title: 'Proxy Mechanism', description: 'Spring creates a <b>CGLIB or JDK proxy</b>. The proxy intercepts calls and wraps them with transaction logic.' },
      { title: 'Self-Invocation Trap', description: 'Calling <b>this.method()</b> bypasses the proxy. The @Transactional annotation has no effect on self-calls.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Default Behavior', description: 'Commits on normal return. Rolls back on RuntimeException. Configure rollbackFor for checked exceptions.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Common Pitfall', description: '@Transactional on private methods doesn\'t work — proxies can only intercept public methods.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  }
];
