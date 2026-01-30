import { Injectable } from '@angular/core';

export interface Question {
  id: number;
  category: 'Core Java' | 'Spring Boot' | 'Hibernate' | 'Spring Reactive' | 'Microservices' | 'Multithreading' | 'Reactive Programming';
  question: string;
  answer: string;
  asked_metadata: string;
  code?: string;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Core Java',
    question: 'What is the difference between equals() and == in Java?',
    answer: '== checks for reference equality (address comparison), while equals() checks for content equality (value comparison).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Google',
    code: `String s1 = new String("Hello");
String s2 = new String("Hello");

System.out.println(s1 == s2);       // false (different references)
System.out.println(s1.equals(s2));  // true (same content)`
  },
  {
    id: 2,
    category: 'Core Java',
    question: 'What is the contract between hashCode() and equals()?',
    answer: 'If two objects are equal according to equals(), they must have the same hashCode(). However, if they have the same hashCode(), they are not necessarily equal.',
    asked_metadata: '5x Google, 4x Microsoft, 3x Netflix',
    code: `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return id == user.id;
}

@Override
public int hashCode() {
    return Objects.hash(id);
}`
  },
  {
    id: 3,
    category: 'Core Java',
    question: 'Explain the difference between final, finally, and finalize.',
    answer: 'final is a keyword for constants/immutability. finally is a block in try-catch for cleanup. finalize is a method called by GC before object reclamation (deprecated).',
    asked_metadata: '8x Amazon, 6x Microsoft, 4x IBM',
    code: `// final variable
final int MAX = 100;

// finally block
try { 
    return; 
} finally { 
    System.out.println("Always executed"); 
}`
  },
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
    id: 6,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() hits the database immediately and returns null if not found. load() returns a proxy and throws an exception if not found when accessed.',
    asked_metadata: '8x TCS, 6x Accenture, 5x Cognizant',
    code: `// get() - returns null if not found
Employee emp = session.get(Employee.class, 100);

// load() - throws ObjectNotFoundException if not found
Employee emp = session.load(Employee.class, 100);`
  },
  {
    id: 7,
    category: 'Hibernate',
    question: 'What is the N+1 Select problem?',
    answer: 'It happens when the application executes 1 query to retrieve N objects, and then N additional queries to retrieve related objects for each of them.',
    asked_metadata: '8x Amazon, 6x Uber, 4x Adobe',
  },
  {
    id: 8,
    category: 'Spring Reactive',
    question: 'What is the difference between Mono and Flux?',
    answer: 'Mono represents a stream of 0 or 1 element. Flux represents a stream of 0 to N elements.',
    asked_metadata: '7x Netflix, 5x Citi, 4x Zoom',
    code: `// Mono: 0 or 1 element
Mono<String> mono = Mono.just("Hello");

// Flux: 0 to N elements
Flux<String> flux = Flux.just("A", "B", "C");`
  },
  {
    id: 9,
    category: 'Spring Reactive',
    question: 'What is Backpressure in Reactive Streams?',
    answer: 'It is a mechanism that allows a consumer to signal to the producer how much data it can handle, preventing it from being overwhelmed.',
    asked_metadata: '6x Netflix, 4x Citi, 3x Disney',
  },
  {
    id: 10,
    category: 'Microservices',
    question: 'What is Service Discovery?',
    answer: 'It is a mechanism for services to locate each other dynamically in a distributed system (e.g., using Eureka or Consul).',
    asked_metadata: '9x Amazon, 7x Netflix, 4x Intuit',
  },
  {
    id: 11,
    category: 'Microservices',
    question: 'What is the Circuit Breaker pattern?',
    answer: 'It prevents an application from repeatedly trying to execute an operation that is likely to fail, allowing it to fail fast and recover.',
    asked_metadata: '8x Netflix, 6x Amazon, 5x Uber',
    code: `@CircuitBreaker(name = "backendA", fallbackMethod = "fallback")
public String doSomething() {
    return restTemplate.getForObject("http://backendA/api", String.class);
}

public String fallback(Exception e) {
    return "Fallback response";
}`
  },
  {
    id: 12,
    category: 'Core Java',
    question: 'What is a Marker Interface?',
    answer: 'An interface with no methods or fields, used to indicate a property to the JVM or compiler (e.g., Serializable, Cloneable).',
    asked_metadata: '4x Adobe, 3x Salesforce, 2x Intel',
  },
  {
    id: 13,
    category: 'Core Java',
    question: 'Explain the difference between HashMap and ConcurrentHashMap.',
    answer: 'HashMap is not thread-safe. ConcurrentHashMap is thread-safe and allows concurrent access to different segments of the map.',
    asked_metadata: '7x Google, 5x Intel, 4x Microsoft',
  },
  {
    id: 14,
    category: 'Spring Boot',
    question: 'How do you handle exceptions in Spring Boot?',
    answer: 'Using @ControllerAdvice and @ExceptionHandler to handle exceptions globally or locally within controllers.',
    asked_metadata: '6x PayPal, 4x Stripe, 3x Wells Fargo',
  },
  {
    id: 15,
    category: 'Hibernate',
    question: 'What is L1 and L2 Cache in Hibernate?',
    answer: 'L1 is session-level cache (enabled by default). L2 is session-factory level cache (optional, shared across sessions).',
    asked_metadata: '5x Oracle, 3x SAP, 2x IBM',
  },
  {
    id: 16,
    category: 'Spring Reactive',
    question: 'What is WebFlux?',
    answer: 'It is the reactive-stack web framework in Spring 5, built on Project Reactor, supporting non-blocking applications.',
    asked_metadata: '6x Spotify, 4x SoundCloud, 3x Netflix',
  },
  {
    id: 17,
    category: 'Microservices',
    question: 'What is API Gateway?',
    answer: 'It acts as a single entry point for all clients, routing requests to appropriate microservices and handling cross-cutting concerns.',
    asked_metadata: '8x Netflix, 6x Amazon, 4x Uber',
  },
  {
    id: 18,
    category: 'Core Java',
    question: 'What is the volatile keyword?',
    answer: 'It guarantees visibility of changes to variables across threads (happens-before relationship) but does not guarantee atomicity.',
    asked_metadata: '5x Intel, 4x AMD, 3x Microsoft',
  },
  {
    id: 19,
    category: 'Spring Boot',
    question: 'What are Spring Boot Starters?',
    answer: 'They are dependency descriptors that simplify your build configuration by aggregating common dependencies.',
    asked_metadata: '6x Pivotal, 4x RedHat, 3x Amazon',
  },
  {
    id: 20,
    category: 'Hibernate',
    question: 'What is Lazy Loading?',
    answer: 'It is a design pattern where data loading is deferred until the point where it is actually needed.',
    asked_metadata: '7x Facebook, 5x Instagram, 4x Airbnb',
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
    id: 41,
    category: 'Microservices',
    question: 'What is a "Dumb Pipe" in Microservices?',
    answer: 'A communication mechanism (like RabbitMQ) that simply routes messages without applying complex logic or transformations (smart endpoints, dumb pipes).',
    asked_metadata: '4x Netflix, 3x Spotify, 2x Airbnb',
  },
  {
    id: 42,
    category: 'Microservices',
    question: 'What is a Bounded Context?',
    answer: 'A central pattern in Domain-Driven Design (DDD) that defines the logical boundary of a domain model within a larger system.',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Google',
  },
  {
    id: 43,
    category: 'Microservices',
    question: 'How do you manage distributed transactions?',
    answer: 'Using patterns like SAGA (sequence of local transactions) or Two-Phase Commit (2PC), though SAGA is preferred for microservices.',
    asked_metadata: '7x Uber, 5x Airbnb, 4x Expedia',
  },
  {
    id: 44,
    category: 'Microservices',
    question: 'What is a Service Mesh?',
    answer: 'A dedicated infrastructure layer for handling service-to-service communication, providing observability, security, and reliability (e.g., Istio, Linkerd).',
    asked_metadata: '6x Google, 5x Lyft, 4x Uber',
  },
  {
    id: 45,
    category: 'Spring Boot',
    question: 'What is Spring Cloud OpenFeign?',
    answer: 'A declarative Web Service client that makes writing web service clients easier by creating a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.',
    asked_metadata: '5x Netflix, 4x Amazon, 3x eBay',
  },
  {
    id: 46,
    category: 'Microservices',
    question: 'What is CQRS?',
    answer: 'Command Query Responsibility Segregation. It separates the models for reading data (Query) and updating data (Command).',
    asked_metadata: '6x Meta, 5x LinkedIn, 4x Twitter',
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
    answer: 'Singleton (default), Prototype, Request, Session, Application, and WebSocket.',
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
    id: 51,
    category: 'Core Java',
    question: 'Why is Java platform independent?',
    answer: 'Java code is compiled into platform-independent byte code, which runs on any machine with a JRE, unlike C++ which compiles to machine-specific code.',
    asked_metadata: '6x Google, 5x Microsoft, 4x Amazon'
  },
  {
    id: 52,
    category: 'Core Java',
    question: 'Why is Java not pure Object-Oriented?',
    answer: 'Because it supports primitive data types (int, float, boolean, etc.) which are not objects, for performance reasons.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Intel'
  },
  {
    id: 53,
    category: 'Core Java',
    question: 'Difference between Heap and Stack Memory?',
    answer: 'Stack stores method execution frames and local variables (LIFO). Heap stores objects and is used for dynamic memory allocation.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Apple'
  },
  {
    id: 54,
    category: 'Core Java',
    question: 'Difference between equals() and ==?',
    answer: "== compares memory references (address equality), while .equals() compares the actual content/value of objects (logical equality).",
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google'
  },
  {
    id: 55,
    category: 'Core Java',
    question: 'How to declare an infinite loop?',
    answer: 'Common ways: for(;;) { ... }, while(true) { ... }, or do { ... } while(true);',
    asked_metadata: '4x Adobe, 3x Autodesk, 2x Nvidia'
  },
  {
    id: 56,
    category: 'Core Java',
    question: 'What is Constructor Overloading?',
    answer: 'Having multiple constructors in a class with different parameter lists (different number or types of arguments).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 57,
    category: 'Core Java',
    question: 'Why are Strings immutable?',
    answer: 'For String Pool optimization (saving memory), Thread Safety (no sync needed), and Security (e.g., HashMap keys, class loading).',
    asked_metadata: '9x Amazon, 8x Google, 7x Microsoft'
  },
  {
    id: 58,
    category: 'Core Java',
    question: 'What is a Singleton Class?',
    answer: 'A class that allows only one instance to be created. Implemented using a private constructor and a static factory method.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Google',
    code: `public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() {
        return INSTANCE;
    }
}`
  },
  {
    id: 59,
    category: 'Multithreading',
    question: 'How to create a Thread in Java?',
    answer: '1. By extending the Thread class. 2. By implementing the Runnable interface (preferred as it allows extending other classes).',
    asked_metadata: '7x Google, 6x Oracle, 5x Amazon',
    code: `// 1. Extending Thread
class MyThread extends Thread {
    public void run() { System.out.println("Running"); }
}

// 2. Implementing Runnable
Runnable myRunnable = () -> System.out.println("Running");
new Thread(myRunnable).start();`
  },
  {
    id: 60,
    category: 'Core Java',
    question: 'Difference between throw and throws?',
    answer: "'throw' explicitly throws an exception in code. 'throws' declares in a method signature that it may throw specific exceptions.",
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS'
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
    id: 71,
    category: 'Microservices',
    question: 'What are Microservices?',
    answer: 'An architectural style that structures an application as a collection of small, independent services that communicate over a network (usually HTTP/REST or gRPC).',
    asked_metadata: '10x Amazon, 9x Netflix, 8x Google'
  },
  {
    id: 72,
    category: 'Microservices',
    question: 'What are the key benefits of Microservices?',
    answer: 'Independent Development & Deployment, Scalability, Technology Diversity, and Resilience (failure of one service doesn’t bring down the entire application).',
    asked_metadata: '8x Amazon, 7x Uber, 6x Airbnb'
  },
  {
    id: 73,
    category: 'Microservices',
    question: 'Microservices vs Monolithic Architecture?',
    answer: 'Monolithic: Single codebase, tightly coupled, hard to scale. Microservices: Multiple small services, loosely coupled, easier to scale and maintain.',
    asked_metadata: '7x Google, 6x Microsoft, 5x Amazon'
  },
  {
    id: 74,
    category: 'Microservices',
    question: 'How do Microservices communicate?',
    answer: 'Synchronous: HTTP/REST, gRPC. Asynchronous: Message Queues (Kafka, RabbitMQ).',
    asked_metadata: '8x Netflix, 7x Confluent, 6x Uber'
  },
  {
    id: 75,
    category: 'Microservices',
    question: 'What is Distributed Tracing?',
    answer: 'Tracking requests as they flow through multiple microservices to identify bottlenecks and errors. Tools: Zipkin, Jaeger.',
    asked_metadata: '6x Uber, 5x Skyryse, 4x ByteDance'
  },
  {
    id: 76,
    category: 'Microservices',
    question: 'What is Containerization (Docker)?',
    answer: 'Packaging an application and its dependencies into a container that can run anywhere. Docker is a popular containerization tool.',
    asked_metadata: '9x Amazon, 8x Google, 7x Microsoft'
  },
  {
    id: 77,
    category: 'Microservices',
    question: 'What is Orchestration (Kubernetes)?',
    answer: 'Managing and coordinating containers (deployment, scaling, networking). Kubernetes is the leading orchestration platform.',
    asked_metadata: '8x Google, 7x Amazon, 6x RedHat'
  },
  {
    id: 78,
    category: 'Microservices',
    question: 'What is Spring Boot in Microservices?',
    answer: 'A framework that simplifies the development of Spring-based microservices with auto-configuration and embedded servers.',
    asked_metadata: '7x Accenture, 6x TCS, 5x Amazon'
  },
  {
    id: 79,
    category: 'Microservices',
    question: 'What is Spring Cloud?',
    answer: 'A set of tools for building common patterns in distributed systems (service discovery, configuration, circuit breakers) with Spring Boot.',
    asked_metadata: '8x Amazon, 7x Netflix, 6x Pivotal'
  },
  {
    id: 80,
    category: 'Microservices',
    question: 'What is Idempotency?',
    answer: 'An operation is idempotent if it can be called multiple times with the same input and produce the same result without side effects.',
    asked_metadata: '7x Stripe, 6x PayPal, 5x Square'
  },
  {
    id: 81,
    category: 'Microservices',
    question: 'What is a Saga Pattern?',
    answer: 'A way to manage distributed transactions across multiple microservices using a sequence of local transactions.',
    asked_metadata: '8x Uber, 7x Amazon, 6x Airbnb'
  },
  {
    id: 82,
    category: 'Microservices',
    question: 'What is Eventual Consistency?',
    answer: 'A consistency model where data eventually becomes consistent across services, but not immediately after an update.',
    asked_metadata: '6x Amazon, 5x Google, 4x Meta'
  },
  {
    id: 83,
    category: 'Microservices',
    question: 'What is Blue-Green Deployment?',
    answer: 'Running two identical environments (Blue and Green). New version is deployed to Green, tested, then traffic is switched from Blue to Green.',
    asked_metadata: '5x Netflix, 4x Amazon, 3x Google'
  },
  {
    id: 84,
    category: 'Microservices',
    question: 'What is Canary Releasing?',
    answer: 'Gradually rolling out a new version to a small subset of users before full deployment.',
    asked_metadata: '6x Netflix, 5x Meta, 4x Uber'
  },
  {
    id: 85,
    category: 'Microservices',
    question: 'How do you secure Microservices?',
    answer: 'OAuth 2.0 / OpenID Connect for authentication/authorization. API Gateway for security enforcement. Mutual TLS (mTLS) for service-to-service communication.',
    asked_metadata: '7x Wiz, 6x Okta, 5x Salesforce'
  },
  {
    id: 86,
    category: 'Microservices',
    question: 'What is Configuration Management?',
    answer: 'Managing configuration externally (e.g., Spring Cloud Config, Consul) so services can be updated without redeployment.',
    asked_metadata: '6x Amazon, 5x HashiCorp, 4x Netflix'
  },
  {
    id: 87,
    category: 'Microservices',
    question: 'How do you handle logging in Microservices?',
    answer: 'Centralized logging using ELK stack (Elasticsearch, Logstash, Kibana). Correlation IDs for tracing across services.',
    asked_metadata: '5x Splunk, 4x Elastic, 3x Datadog'
  },
  {
    id: 88,
    category: 'Microservices',
    question: 'What is DDD (Domain-Driven Design) in Microservices?',
    answer: 'A design approach that breaks services based on business domains (e.g., Order Service, Payment Service, Inventory Service).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Atlassian'
  },
  {
    id: 89,
    category: 'Microservices',
    question: 'How do you test Microservices?',
    answer: 'Unit Tests (JUnit/TestNG), Contract Testing (Pact), Integration Tests, and End-to-End Tests.',
    asked_metadata: '5x Amazon, 4x Google, 3x Microsoft'
  },
  {
    id: 90,
    category: 'Microservices',
    question: 'What is Sidecar Pattern in Microservices?',
    answer: 'Sidecar Pattern runs auxiliary tasks (logging, monitoring, proxying) in a separate container alongside the main service container.',
    asked_metadata: '7x Google, 6x Istio/Envoy, 5x Microsoft'
  },
  {
    id: 91,
    category: 'Microservices',
    question: 'Real-world examples of Microservices?',
    answer: 'Netflix (Video streaming), Amazon (E-commerce), Uber (Ride-sharing).',
    asked_metadata: '5x Netflix, 4x Amazon, 3x Uber'
  },
  {
    id: 92,
    category: 'Hibernate',
    question: 'What is Hibernate?',
    answer: 'Hibernate is a popular ORM (Object-Relational Mapping) tool for Java. It simplifies database interactions by mapping Java objects to database tables. Developers use it to avoid writing complex SQL queries.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM'
  },
  {
    id: 93,
    category: 'Hibernate',
    question: 'What are the main advantages of Hibernate?',
    answer: 'Hibernate offers automatic table creation, support for inheritance mapping, and database independence. It reduces boilerplate code and provides caching for better performance.',
    asked_metadata: '7x Infosys, 6x Wipro, 5x Capgemini'
  },
  {
    id: 94,
    category: 'Hibernate',
    question: 'What is ORM?',
    answer: 'ORM stands for Object-Relational Mapping. It allows developers to map object-oriented programming concepts to database tables. This makes working with databases simpler and more efficient.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM'
  },
  {
    id: 95,
    category: 'Hibernate',
    question: 'What is a Session in Hibernate?',
    answer: 'A Session in Hibernate is an interface for communicating with the database. It is used to perform CRUD operations like saving, updating, and deleting data.',
    asked_metadata: '7x JPMorgan, 6x Citi, 5x Wells Fargo'
  },
  {
    id: 96,
    category: 'Hibernate',
    question: 'What is a Configuration file in Hibernate?',
    answer: 'The configuration file (hibernate.cfg.xml) contains database connection settings. It also includes details about mapping files and Hibernate properties.',
    asked_metadata: '5x Oracle, 4x IBM, 3x TCS'
  },
  {
    id: 97,
    category: 'Hibernate',
    question: 'What is a Hibernate Query Language (HQL)?',
    answer: 'HQL is an object-oriented query language in Hibernate. It’s similar to SQL but works with Java objects instead of database tables.',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Adobe'
  },
  {
    id: 98,
    category: 'Hibernate',
    question: 'What are Hibernate Annotations?',
    answer: 'Hibernate Annotations are used to define mappings between Java classes and database tables directly in the code. Examples include @Entity, @Table, and @Id.',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target'
  },
  {
    id: 99,
    category: 'Hibernate',
    question: 'What is Lazy Loading in Hibernate?',
    answer: 'Lazy loading delays the loading of associated data until it’s needed. This helps in improving performance by fetching data only when required.',
    asked_metadata: '8x Amazon, 7x Netflix, 6x Uber'
  },
  {
    id: 100,
    category: 'Hibernate',
    question: 'What is the difference between Hibernate and JDBC?',
    answer: 'Hibernate automates many database operations, while JDBC requires writing SQL queries. Hibernate provides database independence, whereas JDBC code needs changes for each database.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 101,
    category: 'Hibernate',
    question: 'What are Persistent, Transient, and Detached objects in Hibernate?',
    answer: 'Persistent objects are managed by Hibernate and linked to a database session. Transient objects are not linked to any session or database. Detached objects were persistent but are now disconnected from the session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 102,
    category: 'Hibernate',
    question: 'How does Hibernate manage database connections?',
    answer: 'Hibernate uses a connection pool to manage database connections. It allows efficient reuse of connections, reducing overhead.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 103,
    category: 'Hibernate',
    question: 'What is the role of SessionFactory in Hibernate?',
    answer: 'SessionFactory is a factory for creating Session objects. It is created once and is thread-safe, making it efficient for handling database sessions.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM'
  },
  {
    id: 104,
    category: 'Hibernate',
    question: 'What is the purpose of the @Entity annotation in Hibernate?',
    answer: 'The @Entity annotation marks a class as a Hibernate entity. It tells Hibernate to map the class to a database table.',
    asked_metadata: '7x TCS, 6x Accenture, 5x Cognizant'
  },
  {
    id: 105,
    category: 'Hibernate',
    question: 'What are the different states of an object in Hibernate?',
    answer: 'Objects in Hibernate can be in one of three states: Transient, Persistent, or Detached. Each state defines how the object interacts with the database session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 106,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() fetches the object immediately from the database. load() returns a proxy and fetches the object only when needed.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM'
  },
  {
    id: 107,
    category: 'Hibernate',
    question: 'What are some common exceptions in Hibernate?',
    answer: 'Some common exceptions include: HibernateException (General error), ConstraintViolationException (Database constraint violation), LazyInitializationException (Accessing lazy data outside session).',
    asked_metadata: '5x Oracle, 4x IBM, 3x SAP'
  },
  {
    id: 108,
    category: 'Hibernate',
    question: 'How does Hibernate handle caching?',
    answer: 'Hibernate supports two types of caching. First-level cache is session-specific and enabled by default. Second-level cache is session-factory specific and requires external configuration.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 109,
    category: 'Hibernate',
    question: 'Explain the difference between save(), persist(), and saveOrUpdate().',
    answer: 'save(): Inserts a new record and returns the identifier. persist(): Similar to save() but doesn’t return the identifier. saveOrUpdate(): Updates the record if it exists or inserts a new one if it doesn’t.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 110,
    category: 'Hibernate',
    question: 'Can Hibernate handle composite keys?',
    answer: 'Yes, Hibernate supports composite keys using @Embeddable and @EmbeddedId annotations. These annotations help define and map composite key classes.',
    asked_metadata: '4x Oracle, 3x IBM, 2x SAP'
  },
  {
    id: 111,
    category: 'Hibernate',
    question: 'How do you manage transactions in Hibernate?',
    answer: 'Transactions in Hibernate are managed using the Transaction interface. You begin a transaction, perform operations, and then commit or roll back the transaction based on the outcome.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 112,
    category: 'Reactive Programming',
    question: 'What is Reactive Programming, and how does it differ from Procedural Programming?',
    answer: 'Reactive Programming focuses on reactive data composition (data flows, change propagation), while Procedural Programming emphasizes sequential task execution.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom'
  },
  {
    id: 113,
    category: 'Reactive Programming',
    question: 'Explain the concept of data streams in Reactive Programming.',
    answer: 'Data streams are continuous flows of data/events that facilitate responsive behavior. Key components: Observable (source), Observer (listener), Subscription, Operators.',
    asked_metadata: '6x Netflix, 5x Citi, 4x Spotify'
  },
  {
    id: 114,
    category: 'Reactive Programming',
    question: 'What is the Observer pattern, and how is it fundamental to Reactive Programming?',
    answer: 'It enables loose coupling where a Subject (Observable) notifies Observers of state changes. It is the backbone of reactive programming.',
    asked_metadata: '7x Google, 6x Netflix, 5x Microsoft'
  },
  {
    id: 115,
    category: 'Reactive Programming',
    question: 'Describe the role of Observables and Observers in Reactive Programming.',
    answer: 'Observable is the data source/producer. Observer is the consumer/subscriber that reacts to emitted data.',
    asked_metadata: '6x Netflix, 5x Citi, 4x Zoom'
  },
  {
    id: 116,
    category: 'Reactive Programming',
    question: 'How do you create an Observable stream?',
    answer: 'Using factory methods (just, from, interval) to create a source, then applying operators. It starts with a source and ends with subscribers.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Disney'
  },
  {
    id: 117,
    category: 'Reactive Programming',
    question: 'What is backpressure in the context of Reactive Programming?',
    answer: 'A flow control mechanism where the consumer signals the producer how much data it can handle to prevent being overwhelmed (e.g., buffering, dropping).',
    asked_metadata: '7x Netflix, 6x Citi, 5x Disney'
  },
  {
    id: 118,
    category: 'Reactive Programming',
    question: 'Explain the difference between cold and hot Observables.',
    answer: 'Cold Observables create a new stream for each subscriber (independent). Hot Observables share a single stream among all subscribers (multicast).',
    asked_metadata: '6x Netflix, 5x Apple, 4x Disney'
  },
  {
    id: 119,
    category: 'Reactive Programming',
    question: 'What is the role of the Subscription in Reactive Programming?',
    answer: 'It represents the link between Observable and Observer, allowing for cancellation (unsubscribe) and flow control (requesting data).',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom'
  },
  {
    id: 120,
    category: 'Reactive Programming',
    question: 'How do you unsubscribe from a stream to prevent memory leaks?',
    answer: 'By calling the unsubscribe() or dispose() method on the Subscription object, usually when the component is destroyed.',
    asked_metadata: '6x Google, 5x Netflix, 4x Microsoft'
  },
  {
    id: 121,
    category: 'Reactive Programming',
    question: 'What are operators in Reactive Programming, and what are they used for?',
    answer: 'Functions that transform, filter, combine, or create data streams (e.g., map, filter, merge, zip).',
    asked_metadata: '7x Netflix, 6x Spotify, 5x Citi'
  },
  {
    id: 122,
    category: 'Reactive Programming',
    question: 'What is RxJava, and how does it implement Reactive Programming?',
    answer: 'A Java library for composing asynchronous and event-based programs using observable sequences. It implements the Reactive Extensions (Rx) for the JVM.',
    asked_metadata: '5x Netflix, 4x Uber, 3x Airbnb'
  },
  {
    id: 123,
    category: 'Reactive Programming',
    question: 'How does RxJava handle multithreading?',
    answer: 'Using Schedulers (e.g., Schedulers.io(), Schedulers.computation()) and operators like subscribeOn (source thread) and observeOn (observer thread).',
    asked_metadata: '6x Netflix, 5x Google, 4x Dropbox'
  },
  {
    id: 124,
    category: 'Reactive Programming',
    question: 'Explain how the flatMap operator works in RxJava.',
    answer: 'It transforms each item emitted by an Observable into a new Observable, then flattens these Observables into a single Observable.',
    asked_metadata: '8x Netflix, 7x Amazon, 6x Google'
  },
  {
    id: 125,
    category: 'Reactive Programming',
    question: 'What is the purpose of the zip operator in RxJava?',
    answer: 'It combines the emissions of multiple Observables together via a specified function and emits single items for each combination based on their index.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom'
  },
  {
    id: 126,
    category: 'Reactive Programming',
    question: 'How do you handle errors in an RxJava stream?',
    answer: 'Using operators like onError, onErrorReturn, onErrorResumeNext, and retry to gracefully handle or recover from exceptions.',
    asked_metadata: '7x Netflix, 6x Citi, 5x Zoom'
  },
  {
    id: 127,
    category: 'Core Java',
    question: 'What is the difference between StringBuffer and StringBuilder?',
    answer: 'StringBuffer is synchronized and thread-safe, making it slower. StringBuilder is not synchronized and not thread-safe, making it faster.',
    asked_metadata: '5x Amazon, 3x Google'
  },
  {
    id: 128,
    category: 'Core Java',
    question: 'What is the purpose of the transient keyword?',
    answer: 'It prevents a variable from being serialized. When an object is serialized, transient variables are ignored.',
    asked_metadata: '6x IBM, 5x Oracle, 4x TCS'
  },
  {
    id: 129,
    category: 'Core Java',
    question: 'What is the difference between Comparator and Comparable?',
    answer: 'Comparable defines the natural ordering of a class (compareTo method). Comparator defines an external ordering (compare method) and can be used to sort objects in different ways.',
    asked_metadata: '9x Amazon, 8x Microsoft, 7x Google'
  },
  {
    id: 130,
    category: 'Core Java',
    question: 'What is the difference between checked and unchecked exceptions?',
    answer: 'Checked exceptions are checked at compile-time (e.g., IOException) and must be handled. Unchecked exceptions are runtime exceptions (e.g., NullPointerException) and don\'t require explicit handling.',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Oracle'
  },
  {
    id: 131,
    category: 'Core Java',
    question: 'What is the Java Memory Model?',
    answer: 'It describes how threads interact through memory. It defines the rules for visibility of changes to variables and the ordering of instructions.',
    asked_metadata: '3x Intel, 2x AMD'
  },
  {
    id: 132,
    category: 'Core Java',
    question: 'What is the difference between interface and abstract class?',
    answer: 'Interfaces allow multiple inheritance and all methods are public abstract (default/static allowed in Java 8+). Abstract classes allow single inheritance, can have state (fields), and non-abstract methods.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Oracle'
  },
  {
    id: 133,
    category: 'Core Java',
    question: 'What is the super keyword?',
    answer: 'It refers to the immediate parent class object. It is used to call parent class methods or constructors.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 134,
    category: 'Core Java',
    question: 'What is the this keyword?',
    answer: 'It refers to the current object instance. It is used to access current class members and to invoke other constructors of the same class.',
    asked_metadata: '6x Amazon, 5x Adobe, 4x Intel',
    code: `public class Car {
    private String model;
    
    public Car(String model) {
        this.model = model; // Disambiguation
    }
    
    public Car() {
        this("Unknown"); // Call other constructor
    }
}`
  },
  {
    id: 135,
    category: 'Core Java',
    question: 'What is Method Overloading vs Method Overriding?',
    answer: 'Overloading occurs within the same class (same name, different parameters). Overriding occurs in a subclass (same name, same parameters) to provide a specific implementation.',
    asked_metadata: '7x Amazon, 6x Uber, 5x Airbnb',
  },
  {
    id: 136,
    category: 'Core Java',
    question: 'What is the purpose of the default method in interfaces?',
    answer: 'Introduced in Java 8, it allows adding new methods to interfaces without breaking existing implementations. It provides a default implementation.',
    asked_metadata: '6x Amazon, 5x Oracle, 4x VMware'
  },
  {
    id: 137,
    category: 'Multithreading',
    question: 'What is the difference between Runnable and Callable?',
    answer: 'Runnable does not return a result and cannot throw a checked exception. Callable returns a result (Future) and can throw a checked exception.',
    asked_metadata: '7x Google, 6x Amazon, 5x Microsoft'
  },
  {
    id: 138,
    category: 'Multithreading',
    question: 'What is the difference between wait() and sleep()?',
    answer: 'wait() releases the lock and must be called from a synchronized context. sleep() holds the lock and pauses execution for a specified time.',
    asked_metadata: '8x Amazon, 7x Microsoft, 6x Intel'
  },
  {
    id: 139,
    category: 'Multithreading',
    question: 'What is a Deadlock?',
    answer: 'A situation where two or more threads are blocked forever, each waiting for the other to release a resource/lock.',
    asked_metadata: '7x Google, 6x Facebook, 5x Amazon'
  },
  {
    id: 140,
    category: 'Multithreading',
    question: 'What is the ExecutorService?',
    answer: 'A framework provided by the java.util.concurrent package to simplify asynchronous task execution. It manages a pool of threads and assigns tasks to them.',
    asked_metadata: '8x JPMorgan, 7x Amazon, 6x Goldman Sachs',
    code: `ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> {
    System.out.println("Task executed");
});
executor.shutdown();`
  },
  {
    id: 141,
    category: 'Multithreading',
    question: 'What is ThreadLocal?',
    answer: 'A class that provides thread-local variables. Each thread accessing the variable has its own, independently initialized copy.',
    asked_metadata: '6x Uber, 5x Airbnb, 4x LinkedIn'
  },
  {
    id: 142,
    category: 'Multithreading',
    question: 'What is a CountDownLatch?',
    answer: 'A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.',
    asked_metadata: '6x LinkedIn, 5x Twitter, 4x Amazon'
  },
  {
    id: 143,
    category: 'Multithreading',
    question: 'What is a CyclicBarrier?',
    answer: 'A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.',
    asked_metadata: '5x Apple, 4x Intel, 3x AMD'
  },
  {
    id: 144,
    category: 'Multithreading',
    question: 'What is the difference between submit() and execute()?',
    answer: 'execute() is for Runnable tasks and returns void. submit() is for Runnable or Callable tasks and returns a Future holding the result.',
    asked_metadata: '6x Wells Fargo, 5x Citi, 4x JPMorgan'
  },
  {
    id: 145,
    category: 'Multithreading',
    question: 'What is a Race Condition?',
    answer: 'It occurs when two or more threads access shared data and try to change it at the same time, leading to unpredictable results.',
    asked_metadata: '7x IBM, 6x Cisco, 5x Oracle'
  },
  {
    id: 146,
    category: 'Multithreading',
    question: 'What is the Fork/Join Framework?',
    answer: 'An implementation of the ExecutorService interface that helps you take advantage of multiple processors. It is designed for work that can be broken into smaller pieces recursively.',
    asked_metadata: '7x Oracle, 6x IBM, 5x Intel',
  },
  {
    id: 147,
    category: 'Core Java',
    question: 'What is the difference between JDK, JRE, and JVM?',
    answer: 'JDK is the development kit including JRE and tools. JRE runs Java apps. JVM executes bytecode and provides platform abstraction.',
    asked_metadata: '8x TCS, 7x Infosys, 6x Accenture'
  },
  {
    id: 148,
    category: 'Core Java',
    question: 'How does garbage collection work in Java, and how do you handle memory leaks?',
    answer: 'GC reclaims unreachable objects. Detect leaks with heap dumps, tools like VisualVM, and fixing unintended object references (e.g., static collections).',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 149,
    category: 'Multithreading',
    question: 'How do you achieve thread safety in a large-scale Java application?',
    answer: 'Use immutability, concurrent collections (ConcurrentHashMap), fine-grained locks, and higher-level abstractions like CompletableFuture.',
    asked_metadata: '6x Uber, 5x Netflix, 4x Amazon'
  },
  {
    id: 150,
    category: 'Multithreading',
    question: 'How do you troubleshoot deadlocks and performance bottlenecks?',
    answer: 'Collect thread dumps, analyze lock graphs, use profilers (JProfiler, VisualVM), and apply lock ordering or lock-free algorithms.',
    asked_metadata: '7x Amazon, 6x Intel, 5x Oracle'
  },
  {
    id: 151,
    category: 'Microservices',
    question: 'How do you migrate a monolithic Java application to microservices?',
    answer: 'Identify bounded contexts, extract APIs, incrementally deploy services (Strangler Fig pattern), and manage data consistency (Sagas).',
    asked_metadata: '6x Deloitte, 5x Accenture, 4x IBM'
  },
  {
    id: 152,
    category: 'Hibernate',
    question: 'What are the main differences between JPA and Hibernate?',
    answer: 'JPA is a specification (standard). Hibernate is an implementation with extra features like caching, lazy loading, and dirty checking.',
    asked_metadata: '7x Oracle, 6x IBM, 5x SAP'
  },
  {
    id: 153,
    category: 'Core Java',
    question: 'How do you use Java Streams and Lambdas in production?',
    answer: 'Use streams for readable data transformations (map, filter, reduce). Avoid excessive boxing. Use parallel streams only when benchmarked and safe.',
    asked_metadata: '8x Amazon, 7x Google, 6x Microsoft',
    code: `List<String> names = users.stream()
    .filter(u -> u.isActive())
    .map(User::getName)
    .collect(Collectors.toList());`
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
    id: 156,
    category: 'Core Java',
    question: 'How do you troubleshoot a slow-performing Java application?',
    answer: 'Gather metrics, analyze thread/heap dumps, check GC logs for pauses, trace DB queries, and use APM tools (New Relic, Datadog).',
    asked_metadata: '6x Amazon, 5x NewRelic, 4x Datadog'
  },
  {
    id: 157,
    category: 'Core Java',
    question: 'What metrics and tools do you use for JVM performance tuning?',
    answer: 'GC logs, heap dumps, jstat, VisualVM, Java Flight Recorder (JFR). Track latency, throughput, and memory allocation rates.',
    asked_metadata: '5x Oracle, 4x Datadog, 3x Splunk'
  },
  {
    id: 158,
    category: 'Microservices',
    question: 'How do you design a scalable, high-availability Java service?',
    answer: 'Stateless design (horizontal scaling), load balancing, health checks, circuit breakers (Resilience4j), and auto-scaling groups.',
    asked_metadata: '8x Netflix, 7x Amazon, 6x Uber'
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
    id: 161,
    category: 'Core Java',
    question: 'Why Java does not support multiple inheritance (Diamond Problem)?',
    answer: 'To avoid ambiguity when two parent classes have methods with the same signature (Diamond Problem). Java uses Interfaces to achieve similar functionality safely.',
    asked_metadata: '6x Oracle, 5x IBM, 4x TCS'
  },
  {
    id: 162,
    category: 'Core Java',
    question: 'What is the difference between HashSet and ArrayList?',
    answer: 'ArrayList preserves insertion order and allows duplicates. HashSet implies no order and ensures uniqueness (no duplicates).',
    asked_metadata: '7x Amazon, 6x Microsoft, 5x Google',
    code: `List<String> list = new ArrayList<>();
list.add("A"); list.add("A"); // Size = 2

Set<String> set = new HashSet<>();
set.add("A"); set.add("A"); // Size = 1`
  },
  {
    id: 163,
    category: 'Multithreading',
    question: 'What is multithreading and what are its advantages?',
    answer: 'Multithreading is the concurrent execution of two or more parts of a program. Advantages: Max CPU utilization, responsive UIs, and parallel task processing.',
    asked_metadata: '8x Intel, 7x NVIDIA, 6x AMD'
  },
  {
    id: 164,
    category: 'Core Java',
    question: 'What is the difference between a Normal Interface and a Functional Interface?',
    answer: 'A Normal Interface can have multiple abstract methods. A Functional Interface (SAM) has exactly one abstract method and can be used with Lambdas.',
    asked_metadata: '6x Amazon, 5x Google, 4x Microsoft'
  },
  {
    id: 165,
    category: 'Core Java',
    question: 'What are the different types of classes in Java?',
    answer: '1. Concrete Class 2. Abstract Class 3. Interface (Type) 4. Inner Class 5. Anonymous Inner Class 6. Lambda (Functional implementation).',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 166,
    category: 'Core Java',
    question: 'What are Virtual Threads (Project Loom) and how do they differ from Platform Threads?',
    answer: 'Virtual threads are lightweight threads managed by the JVM instead of the OS. They enable high-throughput applications by allowing millions of threads to run on a small number of OS threads with minimal overhead.',
    asked_metadata: '5x Google, 4x Microsoft',
    code: `// Creating a Virtual Thread
Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread");
});

// Using an Executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> "Task");
}`
  },
  {
    id: 167,
    category: 'Core Java',
    question: 'What are Java Records (introduced in Java 14/16)?',
    answer: 'Records are a restricted form of class that acts as transparent carriers for immutable data. They automatically generate constructors, accessors, equals(), hashCode(), and toString().',
    asked_metadata: '4x Amazon, 3x Netflix',
    code: `public record User(Long id, String name) {}

// Usage
User user = new User(1L, "John");
System.out.println(user.name()); // Accessor`
  },
  {
    id: 168,
    category: 'Core Java',
    question: 'What are Sealed Classes and Interfaces?',
    answer: 'Sealed classes allow developers to restrict which other classes or interfaces may extend or implement them, providing a more controlled inheritance hierarchy.',
    asked_metadata: '3x Oracle, 2x Adobe',
    code: `public sealed class Shape 
    permits Circle, Square {}

public final class Circle extends Shape {}
public final class Square extends Shape {}`
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
    id: 171,
    category: 'Hibernate',
    question: 'Difference between Optimistic and Pessimistic Locking?',
    answer: 'Optimistic locking assumes no conflicts and checks version numbers at commit time. Pessimistic locking locks the records in the database (e.g., SELECT FOR UPDATE) to prevent others from accessing them.',
    asked_metadata: '5x Goldman Sachs, 3x Citi',
    code: `// Optimistic Locking
@Version
private Long version;

// Pessimistic Locking
@Lock(LockModeType.PESSIMISTIC_WRITE)
Optional<User> findById(Long id);`
  },
  {
    id: 172,
    category: 'Microservices',
    question: 'What is Distributed Tracing and why is it needed?',
    answer: 'It tracks requests across service boundaries using a unique Trace ID. Essential for debugging latency and failures in complex microservices architectures. Tools: Micrometer Tracing, Zipkin.',
    asked_metadata: '4x Netflix, 3x Amazon'
  },
  {
    id: 173,
    category: 'Core Java',
    question: 'How does Pattern Matching for switch (Java 21) work?',
    answer: 'It allows switch expressions and statements to match patterns instead of just constants, enabling safer and more expressive code when dealing with complex object hierarchies.',
    asked_metadata: '3x LinkedIn, 2x Microsoft',
    code: `static String formatter(Object obj) {
    return switch (obj) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case String s  -> String.format("String %s", s);
        default        -> obj.toString();
    };
}`
  },
  {
    id: 174,
    category: 'Reactive Programming',
    question: 'Difference between flatMap(), concatMap(), and switchMap() in Project Reactor?',
    answer: 'flatMap() processes elements asynchronously and doesn’t preserve order. concatMap() preserves order but processes one at a time. switchMap() cancels the previous subscription when a new element arrives (great for "search-as-you-type").',
    asked_metadata: '4x Netflix, 2x Spotify',
    code: `flux.flatMap(item -> doAsync(item))      // Parallel, no order
    .concatMap(item -> doAsync(item))   // Sequential, preserves order
    .switchMap(item -> doAsync(item))   // Cancels previous if new comes`
  },
  {
    id: 175,
    category: 'Multithreading',
    question: 'How do you handle exceptions in CompletableFuture?',
    answer: 'Using exceptionally(), handle(), or whenComplete(). exceptionally() provides a recovery value. handle() gives you both the result and the exception, allowing more control.',
    asked_metadata: '5x Amazon, 3x Intel',
    code: `CompletableFuture.supplyAsync(this::doTask)
    .handle((res, ex) -> {
        if (ex != null) return "Error: " + ex.getMessage();
        return res;
    });`
  },
  {
    id: 176,
    category: 'Hibernate',
    question: 'What is the difference between Interceptors and Lifecycle Events in Hibernate?',
    answer: 'Interceptors are session-scoped and allow global modification of SQL/data before it hits the DB. Lifecycle events (@PostPersist, @PreUpdate) are entity-scoped and used for auditing or side-effects on specific objects.',
    asked_metadata: '4x Oracle, 2x SAP'
  },
  {
    id: 177,
    category: 'Microservices',
    question: 'What is the Sidecar Pattern and how does it relate to Service Mesh?',
    answer: 'A Sidecar is a container that runs alongside your app container (e.g., Envoy). A Service Mesh (like Istio) is the control plane that manages these sidecars to provide security, traffic control, and observability without changing app code.',
    asked_metadata: '5x Google, 4x Uber'
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
    id: 179,
    category: 'Core Java',
    question: 'What is the difference between a Stream and an Optional in Java?',
    answer: 'A Stream is a sequence of 0 to N elements (focused on computation). An Optional is a box for 0 or 1 element (focused on avoiding NullPointerException). Both support declarative operations like filter() and map().',
    asked_metadata: '4x Facebook, 3x Apple'
  },
  {
    id: 180,
    category: 'Reactive Programming',
    question: 'What is Schedulers.boundedElastic() used for?',
    answer: 'It is a scheduler designed for blocking tasks (e.g., legacy JDBC, File I/O). It creates a pool of threads that can grow as needed but is capped to avoid resource exhaustion, unlike Schedulers.parallel() which is for CPU-bound tasks.',
    asked_metadata: '3x SoundCloud, 2x Netflix'
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
    id: 182,
    category: 'Core Java',
    question: 'What is PECS (Producer Extends, Consumer Super) in Generics?',
    answer: 'It is a guideline for choosing between "extends" and "super". Use "? extends T" when you only read from a collection (Producer). Use "? super T" when you only write to a collection (Consumer).',
    asked_metadata: '4x Google, 2x Amazon',
    code: `// Producer - extends
public void copy(List<? extends Number> source) { ... }

// Consumer - super
public void addNumbers(List<? super Integer> list) { ... }`
  },
  {
    id: 183,
    category: 'Spring Boot',
    question: 'What is GraalVM Native Image support in Spring Boot 3?',
    answer: 'It allows compiling Spring apps into standalone executable binaries. Benefits include instant startup and significantly lower memory footprint, which is ideal for serverless and containerized environments.',
    asked_metadata: '3x VMware, 2x RedHat'
  },
  {
    id: 184,
    category: 'Hibernate',
    question: 'Explain Hibernate Fetch strategies: JOIN, SELECT, and SUBSELECT.',
    answer: 'JOIN: Fetches association in the same query using a JOIN. SELECT: Performs a second query for the association (can lead to N+1). SUBSELECT: Fetches all associations for the entire result set in one additional query using a subquery.',
    asked_metadata: '4x Oracle, 3x Uber',
    code: `@Fetch(FetchMode.SUBSELECT)
private List<Comment> comments;`
  },
  {
    id: 185,
    category: 'Microservices',
    question: 'What is the Bulkhead Pattern?',
    answer: 'It isolates elements of an application into pools so that if one fails, the others will continue to function. Named after the sections of a ship’s hull. Prevents a single failure from cascading across the entire system.',
    asked_metadata: '5x Netflix, 3x Airbnb'
  },
  {
    id: 186,
    category: 'Multithreading',
    question: 'What is ThreadLocal and when should it be used?',
    answer: 'It provides variables that are local to a specific thread. Each thread has its own independently initialized copy of the variable. Common use cases: Database connections, user sessions, or transaction contexts.',
    asked_metadata: '4x IBM, 3x LinkedIn',
    code: `private static final ThreadLocal<User> userContext = new ThreadLocal<>();

userContext.set(user);
User current = userContext.get();`
  },
  {
    id: 187,
    category: 'Multithreading',
    question: 'Why are Atomic variables (like AtomicInteger) preferred over synchronization?',
    answer: 'They use non-blocking algorithms (CAS - Compare And Swap) which are more efficient than heavy-weight locks. They provide better performance under high contention because they don’t put threads to sleep.',
    asked_metadata: '6x Intel, 5x AMD, 4x Nvidia',
    code: `AtomicInteger count = new AtomicInteger(0);
count.incrementAndGet(); // Thread-safe without synchronized`
  },
  {
    id: 188,
    category: 'Reactive Programming',
    question: 'What is the difference between Cold and Hot Publishers?',
    answer: 'Cold Publishers start a new data stream for each subscriber (e.g., Mono.just). Hot Publishers share the data stream among all subscribers and start emitting even if there are no subscribers (e.g., Sinks/Processors).',
    asked_metadata: '5x Apple, 4x Disney, 3x Netflix',
  },
  {
    id: 189,
    category: 'Hibernate',
    question: 'What are the three Inheritance mapping strategies in Hibernate?',
    answer: '1. Single Table (default, one table for all classes). 2. Table Per Class (separate tables, but duplicated columns). 3. Joined (normalized, separate tables for each class with foreign keys).',
    asked_metadata: '4x Facebook, 2x Amazon',
    code: `@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Employee { ... }`
  },
  {
    id: 190,
    category: 'Core Java',
    question: 'What is Java Reflection and what are its drawbacks?',
    answer: 'It allows a program to inspect and modify its own structure at runtime. Drawbacks: Performance overhead (JVM can’t optimize), security risk (accesses private members), and breaking of abstraction/encapsulation.',
    asked_metadata: '3x Oracle, 2x Microsoft',
    code: `Method m = obj.getClass().getDeclaredMethod("secret");
m.setAccessible(true);
m.invoke(obj);`
  },
  {
    id: 191,
    category: 'Core Java',
    question: 'How does HashMap work internally in Java 8+?',
    answer: 'It uses an array of Nodes. When collisions reach a threshold (8) and the array size is >= 64, it converts the linked list to a Red-Black Tree (Treeify) to improve search performance from O(n) to O(log n).',
    asked_metadata: '9x Google, 8x Amazon, 7x Microsoft',
    code: `// Initial capacity: 16
// Load factor: 0.75
// TREEIFY_THRESHOLD: 8
// UNTREEIFY_THRESHOLD: 6`
  },
  {
    id: 192,
    category: 'Core Java',
    question: 'Difference between fail-fast and fail-safe iterators?',
    answer: 'Fail-fast (e.g., ArrayList) throws ConcurrentModificationException if the collection is modified while iterating. Fail-safe (e.g., CopyOnWriteArrayList) works on a clone or concurrent view and doesn’t throw exceptions.',
    asked_metadata: '5x Microsoft, 3x Facebook'
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
  },
  {
    id: 197,
    category: 'Core Java',
    question: 'What is the JIT Compiler?',
    answer: 'The Just-In-Time compiler is a part of the JVM that converts bytecode into native machine code at runtime. It identifies "hot spots" (frequently executed code) and optimizes them for better performance.',
    asked_metadata: '4x Intel, 2x Oracle'
  },
  {
    id: 198,
    category: 'Microservices',
    question: 'Difference between API Gateway and Service Mesh?',
    answer: 'API Gateway handles North-South traffic (Client to Services), focusing on routing, auth, and rate limiting. Service Mesh handles East-West traffic (Service to Service), focusing on observability, security (mTLS), and reliability (Sidecar).',
    asked_metadata: '5x AWS, 3x Google'
  },
  {
    id: 199,
    category: 'Core Java',
    question: 'How to create a Custom Exception in Java?',
    answer: 'By extending the Exception class (for Checked) or RuntimeException class (for Unchecked). Usually includes a constructor that accepts a message.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    code: `public class DataNotFoundException extends RuntimeException {
    public DataNotFoundException(String message) {
        super(message);
    }
}`
  },
  {
    id: 200,
    category: 'Core Java',
    question: 'Difference between Intermediate and Terminal operations in Streams?',
    answer: 'Intermediate operations (filter, map) are lazy and return a new Stream. Terminal operations (collect, forEach) trigger the processing of the pipeline and return a result or void.',
    asked_metadata: '5x Amazon, 4x Microsoft',
    code: `List<Integer> list = numbers.stream()
    .filter(n -> n > 10)  // Intermediate (Lazy)
    .collect(Collectors.toList()); // Terminal`
  },
  {
    id: 201,
    category: 'Spring Reactive',
    question: 'What is the difference between WebFlux and WebMvc?',
    answer: 'WebMvc is blocking and based on the Servlet API. WebFlux is non-blocking and based on Reactive Streams, supporting high concurrency with fewer threads.',
    asked_metadata: '8x Netflix, 6x Amazon, 5x Disney'
  },
  {
    id: 202,
    category: 'Spring Reactive',
    question: 'What is WebClient and why is it preferred over RestTemplate?',
    answer: 'WebClient is a non-blocking, reactive client for HTTP requests. RestTemplate is synchronous and blocking. WebClient is the modern replacement for all Spring HTTP client needs.',
    asked_metadata: '7x Uber, 5x Stripe, 4x eBay',
    code: `webClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .bodyToMono(User.class);`
  },
  {
    id: 203,
    category: 'Spring Reactive',
    question: 'What are the different types of Schedulers in Project Reactor?',
    answer: 'Schedulers.parallel() (CPU-bound), Schedulers.boundedElastic() (I/O-bound), Schedulers.single() (single-threaded), and Schedulers.immediate() (current thread).',
    asked_metadata: '6x Google, 5x Netflix, 4x SoundCloud'
  },
  {
    id: 204,
    category: 'Spring Reactive',
    question: 'How do you handle errors in a Reactive Stream?',
    answer: 'Using operators like onErrorResume (fallback flux), onErrorReturn (fallback value), and retry (re-subscribe on failure).',
    asked_metadata: '7x Goldman Sachs, 5x Citi, 4x JPMorgan',
    code: `flux.onErrorResume(e -> {
    log.error("Failed", e);
    return Flux.empty();
});`
  },
  {
    id: 205,
    category: 'Spring Reactive',
    question: 'What is StepVerifier?',
    answer: 'A testing utility provided by Project Reactor to verify the behavior of reactive publishers (Mono/Flux) in tests.',
    asked_metadata: '5x VMware, 4x Pivotal, 3x RedHat',
    code: `StepVerifier.create(myFlux)
    .expectNext("A")
    .expectComplete()
    .verify();`
  },
  {
    id: 206,
    category: 'Spring Reactive',
    question: 'Explain the difference between map() and flatMap() in WebFlux.',
    answer: 'map() is for synchronous 1-to-1 transformations. flatMap() is for asynchronous 1-to-N transformations where the transformation itself returns a Publisher.',
    asked_metadata: '9x Meta, 8x Google, 7x Amazon'
  },
  {
    id: 207,
    category: 'Spring Reactive',
    question: 'What are Functional Endpoints in Spring WebFlux?',
    answer: 'An alternative to @Controller, using RouterFunction and HandlerFunction to define routes and logic in a functional, programmatic way.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Atlassian',
    code: `public RouterFunction<ServerResponse> route() {
    return RouterFunctions.route(GET("/hello"), 
        request -> ServerResponse.ok().bodyValue("Hello"));
}`
  },
  {
    id: 208,
    category: 'Spring Reactive',
    question: 'What is R2DBC?',
    answer: 'Reactive Relational Database Connectivity. It brings reactive programming to relational databases (SQL), allowing for non-blocking database access.',
    asked_metadata: '5x Oracle, 4x SAP, 3x MongoDB'
  },
  {
    id: 209,
    category: 'Spring Reactive',
    question: 'How do you implement Spring Security in a WebFlux application?',
    answer: 'By using the Reactive variants of security components, such as SecurityWebFilterChain instead of SecurityFilterChain.',
    asked_metadata: '6x Okta, 5x Auth0, 4x Microsoft',
    code: `@Bean
public SecurityWebFilterChain security(ServerHttpSecurity http) {
    return http.authorizeExchange()
        .anyExchange().authenticated()
        .and().build();
}`
  },
  {
    id: 210,
    category: 'Spring Reactive',
    question: 'What is ParallelFlux?',
    answer: 'A specialized version of Flux that allows processing elements in parallel on multiple rails, usually achieved by calling flux.parallel().',
    asked_metadata: '4x NVIDIA, 3x Amazon, 2x Netflix',
    code: `Flux.range(1, 10)
    .parallel()
    .runOn(Schedulers.parallel())
    .subscribe(System.out::println);`
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly STORAGE_KEY = 'unlocked_counts_map';
  private unlockedCounts: { [category: string]: number } = {};
  private readonly DEFAULT_UNLOCK_COUNT = 5;
  private readonly UNLOCK_INCREMENT = 5;

  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        this.unlockedCounts = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse unlocked counts', e);
        this.unlockedCounts = {};
      }
    }
  }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  getUnlockedCount(category: string): number {
    return this.unlockedCounts[category] || this.DEFAULT_UNLOCK_COUNT;
  }

  isQuestionLocked(category: string, indexInCategory: number): boolean {
    const unlockedCount = this.getUnlockedCount(category);
    return indexInCategory >= unlockedCount;
  }

  unlockNextBatch(category: string) {
    const currentCount = this.getUnlockedCount(category);
    this.unlockedCounts[category] = currentCount + this.UNLOCK_INCREMENT;
    this.saveUnlockedCounts();
  }

  private saveUnlockedCounts() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.unlockedCounts));
  }
}
