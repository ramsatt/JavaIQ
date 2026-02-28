import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-Y2NGQL72.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/tutorial-detail.component.ts
var _c0 = (a0, a1) => ["/tutorials", a0, a1];
var _forTrack0 = ($index, $item) => $item.slug;
function TutorialDetailComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    const \u0275$index_32_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(5, _c0, ctx_r2.slug(), topic_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_32_r2 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(topic_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r1.duration);
  }
}
var TutorialDetailComponent = class _TutorialDetailComponent {
  route = inject(ActivatedRoute);
  slug = signal("", ...ngDevMode ? [{ debugName: "slug" }] : []);
  // Course data map
  courses = {
    "core-java": {
      badge: "CORE JAVA",
      title: "Core Java Masterclass",
      subtitle: "From fundamentals to modern Java features. Master OOP, Collections, Streams, and more.",
      estimatedTime: "8 hours",
      topics: [
        { slug: "arrays", title: "Java Arrays", description: "Fixed-size containers, traversal, searching, and sorting", iconName: "box", duration: "30 min" },
        { slug: "strings", title: "Strings & StringBuilder", description: "Immutability, string pool, and efficient string manipulation", iconName: "code", duration: "35 min" },
        { slug: "oop-classes", title: "Classes & Objects", description: "Blueprints, constructors, methods, and object creation", iconName: "box", duration: "40 min" },
        { slug: "inheritance", title: "Inheritance", description: "extends keyword, method overriding, super keyword", iconName: "git-branch", duration: "35 min" },
        { slug: "polymorphism", title: "Polymorphism", description: "Compile-time and runtime polymorphism, dynamic dispatch", iconName: "layers", duration: "30 min" },
        { slug: "abstraction", title: "Abstraction & Interfaces", description: "Abstract classes, interfaces, default and static methods", iconName: "shield", duration: "35 min" },
        { slug: "encapsulation", title: "Encapsulation", description: "Access modifiers, getters/setters, data hiding", iconName: "shield", duration: "25 min" },
        { slug: "exceptions", title: "Exception Handling", description: "Try-catch-finally, custom exceptions, checked vs unchecked", iconName: "alert-triangle", duration: "30 min" },
        { slug: "collections-list", title: "Collections: List", description: "ArrayList, LinkedList, performance comparison", iconName: "list", duration: "35 min" },
        { slug: "collections-map", title: "Collections: Map & Set", description: "HashMap, TreeMap, HashSet, iteration patterns", iconName: "database", duration: "35 min" },
        { slug: "generics", title: "Generics", description: "Type parameters, bounded types, wildcards", iconName: "box", duration: "30 min" },
        { slug: "streams", title: "Streams API", description: "filter, map, collect, reduce, parallel streams", iconName: "zap", duration: "40 min" },
        { slug: "lambdas", title: "Lambda Expressions", description: "Functional interfaces, method references, closures", iconName: "code", duration: "30 min" },
        { slug: "records-sealed", title: "Records & Sealed Classes", description: "Java 16+ records, sealed hierarchies, pattern matching", iconName: "shield", duration: "25 min" },
        { slug: "io-files", title: "Java I/O & Files", description: "Streams, readers, writers, NIO, file operations", iconName: "terminal", duration: "30 min" }
      ]
    },
    "spring-framework": {
      badge: "SPRING",
      title: "Spring Framework Deep Dive",
      subtitle: "Master the foundation of enterprise Java. IoC, DI, AOP, MVC, Security, and more.",
      estimatedTime: "10 hours",
      topics: [
        { slug: "spring-ioc", title: "IoC Container", description: "Inversion of Control, ApplicationContext, bean lifecycle", iconName: "box", duration: "35 min" },
        { slug: "spring-di", title: "Dependency Injection", description: "Constructor, setter, field injection, qualifiers", iconName: "link", duration: "40 min" },
        { slug: "spring-beans", title: "Bean Scopes & Lifecycle", description: "Singleton, prototype, request, session, init/destroy", iconName: "refresh-cw", duration: "30 min" },
        { slug: "spring-aop", title: "AOP (Aspect-Oriented)", description: "Cross-cutting concerns, aspects, pointcuts, advice", iconName: "layers", duration: "40 min" },
        { slug: "spring-mvc", title: "Spring MVC", description: "DispatcherServlet, controllers, request mapping, views", iconName: "globe", duration: "45 min" },
        { slug: "spring-rest", title: "RESTful APIs", description: "RestController, ResponseEntity, content negotiation", iconName: "zap", duration: "40 min" },
        { slug: "spring-data", title: "Spring Data Access", description: "JdbcTemplate, transactions, DataSource configuration", iconName: "database", duration: "35 min" },
        { slug: "spring-security", title: "Spring Security Basics", description: "Authentication, authorization, filters, CSRF protection", iconName: "shield", duration: "45 min" },
        { slug: "spring-config", title: "Configuration", description: "Java config, properties, profiles, conditional beans", iconName: "settings", duration: "30 min" },
        { slug: "spring-testing", title: "Testing Spring Apps", description: "SpringBootTest, MockMvc, TestContext framework", iconName: "check-circle", duration: "35 min" },
        { slug: "spring-events", title: "Events & Listeners", description: "ApplicationEvent, EventListener, async events", iconName: "bell", duration: "25 min" },
        { slug: "spring-caching", title: "Caching", description: "Cacheable, CacheEvict, CachePut, cache managers", iconName: "zap", duration: "25 min" }
      ]
    },
    "spring-boot": {
      badge: "SPRING BOOT",
      title: "Spring Boot Mastery",
      subtitle: "Build production-ready apps fast. Auto-configuration, starters, REST APIs, security, actuator, and deployment.",
      estimatedTime: "10 hours",
      topics: [
        { slug: "sb-auto-config", title: "Auto-Configuration", description: "How Spring Boot auto-configures beans, @EnableAutoConfiguration", iconName: "zap", duration: "30 min" },
        { slug: "sb-starters", title: "Starters & Dependencies", description: "Starter POMs, dependency management, BOM", iconName: "box", duration: "25 min" },
        { slug: "sb-properties", title: "Application Properties", description: "application.yml, @Value, @ConfigurationProperties, relaxed binding", iconName: "settings", duration: "30 min" },
        { slug: "sb-devtools", title: "DevTools & Hot Reload", description: "Live reload, automatic restart, remote debugging", iconName: "refresh-cw", duration: "20 min" },
        { slug: "sb-actuator", title: "Actuator & Monitoring", description: "Health checks, metrics, info, custom endpoints", iconName: "activity", duration: "35 min" },
        { slug: "sb-logging", title: "Logging", description: "SLF4J, Logback config, log levels, structured logging", iconName: "terminal", duration: "25 min" },
        { slug: "sb-rest-api", title: "REST API Development", description: "RestController, request/response, content negotiation", iconName: "globe", duration: "40 min" },
        { slug: "sb-validation", title: "Validation", description: "Bean Validation, custom validators, error messages", iconName: "check-circle", duration: "30 min" },
        { slug: "sb-exception", title: "Exception Handling", description: "ControllerAdvice, ProblemDetail, error responses", iconName: "alert-triangle", duration: "30 min" },
        { slug: "sb-data-jpa", title: "Spring Data JPA", description: "Repositories, query methods, projections, auditing", iconName: "database", duration: "45 min" },
        { slug: "sb-security", title: "Security", description: "JWT auth, OAuth2, method security, CORS", iconName: "shield", duration: "45 min" },
        { slug: "sb-testing", title: "Testing", description: "SpringBootTest, MockMvc, Testcontainers, slices", iconName: "check-circle", duration: "40 min" },
        { slug: "sb-profiles", title: "Profiles & Environments", description: "Profile activation, multi-env config, conditional beans", iconName: "layers", duration: "25 min" },
        { slug: "sb-docker", title: "Docker & Containers", description: "Dockerfile, buildpacks, multi-stage builds, compose", iconName: "box", duration: "35 min" },
        { slug: "sb-caching", title: "Caching Strategies", description: "Redis, Caffeine, cache abstraction, TTL policies", iconName: "zap", duration: "30 min" },
        { slug: "sb-scheduling", title: "Scheduling & Async", description: "@Scheduled, @Async, task executors, cron expressions", iconName: "clock", duration: "30 min" },
        { slug: "sb-events", title: "Application Events", description: "Custom events, event-driven architecture, listeners", iconName: "bell", duration: "25 min" },
        { slug: "sb-deploy", title: "Deployment", description: "JAR packaging, cloud deploy, Kubernetes, health probes", iconName: "upload", duration: "35 min" }
      ]
    },
    "hibernate": {
      badge: "HIBERNATE & JPA",
      title: "Hibernate & JPA Deep Dive",
      subtitle: "Master ORM fundamentals, entity mapping, relationships, caching, and performance tuning.",
      estimatedTime: "5 hours",
      topics: [
        { slug: "hib-orm", title: "ORM Fundamentals", description: "Object-Relational Mapping, SessionFactory, EntityManager", iconName: "database", duration: "30 min" },
        { slug: "hib-entities", title: "Entity Mapping", description: "@Entity, @Table, @Column, ID generation, embeddables", iconName: "grid", duration: "35 min" },
        { slug: "hib-relations", title: "Relationships", description: "OneToMany, ManyToOne, ManyToMany, fetch strategies", iconName: "link", duration: "40 min" },
        { slug: "hib-jpql", title: "JPQL & Queries", description: "JPQL, named queries, native SQL, projections", iconName: "search", duration: "35 min" },
        { slug: "hib-criteria", title: "Criteria API", description: "Type-safe queries, metamodel, specifications", iconName: "filter", duration: "30 min" },
        { slug: "hib-caching", title: "Caching", description: "First-level, second-level, query cache", iconName: "zap", duration: "30 min" },
        { slug: "hib-transactions", title: "Transactions", description: "ACID, isolation levels, optimistic/pessimistic locking", iconName: "lock", duration: "30 min" },
        { slug: "hib-performance", title: "Performance", description: "N+1 problem, batch fetching, lazy loading pitfalls", iconName: "activity", duration: "35 min" },
        { slug: "hib-inheritance", title: "Inheritance Mapping", description: "Single table, joined, table per class strategies", iconName: "layers", duration: "25 min" },
        { slug: "hib-auditing", title: "Auditing & Envers", description: "Entity versioning, audit trails, Hibernate Envers", iconName: "clock", duration: "25 min" }
      ]
    },
    "microservices": {
      badge: "MICROSERVICES",
      title: "Microservices Architecture",
      subtitle: "Design and build distributed systems. Service discovery, API gateway, event-driven patterns, and Kubernetes.",
      estimatedTime: "8 hours",
      topics: [
        { slug: "ms-intro", title: "Microservices Intro", description: "Monolith vs microservices, bounded contexts, decomposition", iconName: "grid", duration: "30 min" },
        { slug: "ms-discovery", title: "Service Discovery", description: "Eureka, Consul, service registry, client-side discovery", iconName: "search", duration: "35 min" },
        { slug: "ms-gateway", title: "API Gateway", description: "Spring Cloud Gateway, routing, filters, rate limiting", iconName: "globe", duration: "35 min" },
        { slug: "ms-config", title: "Config Server", description: "Centralized configuration, Git-backed, encryption, refresh", iconName: "settings", duration: "30 min" },
        { slug: "ms-circuit", title: "Circuit Breaker", description: "Resilience4j, fallbacks, retry, bulkhead patterns", iconName: "shield", duration: "35 min" },
        { slug: "ms-loadbalance", title: "Load Balancing", description: "Client-side load balancing, Spring Cloud LoadBalancer", iconName: "activity", duration: "25 min" },
        { slug: "ms-communication", title: "Inter-Service Communication", description: "REST, gRPC, messaging, sync vs async", iconName: "link", duration: "35 min" },
        { slug: "ms-events", title: "Event-Driven Architecture", description: "Kafka, RabbitMQ, event sourcing, pub/sub", iconName: "bell", duration: "40 min" },
        { slug: "ms-saga", title: "Saga Pattern", description: "Distributed transactions, choreography vs orchestration", iconName: "refresh-cw", duration: "35 min" },
        { slug: "ms-cqrs", title: "CQRS", description: "Command Query Responsibility Segregation, read/write models", iconName: "layers", duration: "30 min" },
        { slug: "ms-tracing", title: "Distributed Tracing", description: "Micrometer, Zipkin, correlation IDs, observability", iconName: "eye", duration: "30 min" },
        { slug: "ms-docker", title: "Containerization", description: "Docker Compose for microservices, networking, volumes", iconName: "box", duration: "35 min" },
        { slug: "ms-k8s", title: "Kubernetes", description: "Deployments, services, ingress, config maps, secrets", iconName: "cloud", duration: "40 min" },
        { slug: "ms-security", title: "Security", description: "OAuth2, JWT propagation, API key management, mTLS", iconName: "lock", duration: "35 min" }
      ]
    },
    "multithreading": {
      badge: "MULTITHREADING",
      title: "Java Multithreading & Concurrency",
      subtitle: "Master concurrent programming. Threads, synchronization, executors, CompletableFuture, and virtual threads.",
      estimatedTime: "4 hours",
      topics: [
        { slug: "mt-threads", title: "Threads & Runnable", description: "Creating threads, lifecycle, Runnable vs Callable", iconName: "play", duration: "30 min" },
        { slug: "mt-sync", title: "Synchronization", description: "synchronized, wait/notify, volatile, thread safety", iconName: "lock", duration: "35 min" },
        { slug: "mt-executors", title: "ExecutorService", description: "Thread pools, ScheduledExecutor, shutdown strategies", iconName: "settings", duration: "30 min" },
        { slug: "mt-future", title: "CompletableFuture", description: "Async composition, thenApply, thenCombine, exception handling", iconName: "zap", duration: "35 min" },
        { slug: "mt-collections", title: "Concurrent Collections", description: "ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList", iconName: "database", duration: "30 min" },
        { slug: "mt-locks", title: "Locks & Conditions", description: "ReentrantLock, ReadWriteLock, StampedLock, Condition", iconName: "shield", duration: "30 min" },
        { slug: "mt-atomic", title: "Atomic Operations", description: "AtomicInteger, AtomicReference, CAS, accumulators", iconName: "activity", duration: "25 min" },
        { slug: "mt-virtual", title: "Virtual Threads", description: "Project Loom, lightweight threads, structured concurrency", iconName: "cloud", duration: "25 min" }
      ]
    },
    "design-patterns": {
      badge: "DESIGN PATTERNS",
      title: "Java Design Patterns",
      subtitle: "Write maintainable code with proven patterns. Creational, Structural, and Behavioral patterns in Java.",
      estimatedTime: "6 hours",
      topics: [
        { slug: "dp-singleton", title: "Singleton", description: "Thread-safe singleton, enum, lazy initialization", iconName: "box", duration: "25 min" },
        { slug: "dp-factory", title: "Factory Method", description: "Object creation delegation, abstract factory", iconName: "settings", duration: "30 min" },
        { slug: "dp-builder", title: "Builder", description: "Step-by-step construction, fluent API, immutable objects", iconName: "layers", duration: "30 min" },
        { slug: "dp-observer", title: "Observer", description: "Event-driven updates, pub/sub, reactive patterns", iconName: "bell", duration: "30 min" },
        { slug: "dp-strategy", title: "Strategy", description: "Interchangeable algorithms, functional approach", iconName: "shuffle", duration: "25 min" },
        { slug: "dp-decorator", title: "Decorator", description: "Dynamic behavior extension, I/O streams example", iconName: "gift", duration: "30 min" },
        { slug: "dp-adapter", title: "Adapter", description: "Interface compatibility, class vs object adapter", iconName: "link", duration: "25 min" },
        { slug: "dp-proxy", title: "Proxy", description: "Access control, lazy loading, dynamic proxy", iconName: "shield", duration: "30 min" },
        { slug: "dp-template", title: "Template Method", description: "Algorithm skeleton, hook methods, Spring usage", iconName: "file-text", duration: "25 min" },
        { slug: "dp-command", title: "Command", description: "Encapsulated requests, undo, macro commands", iconName: "terminal", duration: "30 min" },
        { slug: "dp-chain", title: "Chain of Responsibility", description: "Request pipeline, middleware, filter chains", iconName: "filter", duration: "30 min" },
        { slug: "dp-state", title: "State", description: "State machines, context-dependent behavior", iconName: "refresh-cw", duration: "30 min" }
      ]
    }
  };
  courseData = signal({
    badge: "",
    title: "",
    subtitle: "",
    estimatedTime: "",
    topics: []
  }, ...ngDevMode ? [{ debugName: "courseData" }] : []);
  constructor() {
    this.route.paramMap.subscribe((params) => {
      const s = params.get("slug") ?? "";
      this.slug.set(s);
      this.courseData.set(this.courses[s] ?? {
        badge: s.toUpperCase(),
        title: s.replace(/-/g, " "),
        subtitle: "Course content coming soon.",
        estimatedTime: "TBD",
        topics: []
      });
    });
  }
  static \u0275fac = function TutorialDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialDetailComponent, selectors: [["app-tutorial-detail"]], decls: 21, vars: 6, consts: [[1, "page"], ["routerLink", "/tutorials", 1, "back"], ["name", "chevron-right", "css", "rotate", 3, "size"], [1, "hero"], [1, "badge"], [1, "title"], [1, "subtitle"], [1, "stat-row"], [1, "stat"], [1, "section-label"], [1, "list"], [1, "topic-card", 3, "routerLink"], [1, "topic-num"], [1, "topic-body"], [1, "topic-title"], [1, "topic-desc"], [1, "topic-dur"]], template: function TutorialDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "app-icon", 2);
      \u0275\u0275text(3, " Back to Tutorials ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "span", 9);
      \u0275\u0275text(17, "CHAPTERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275repeaterCreate(19, TutorialDetailComponent_For_20_Template, 10, 8, "a", 11, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.courseData().badge);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.courseData().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.courseData().subtitle);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("\u{1F4D6} ", ctx.courseData().topics.length, " chapters");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u23F1 ", ctx.courseData().estimatedTime);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.courseData().topics);
    }
  }, dependencies: [RouterLink, IconComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 16px 16px 100px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n  margin-bottom: 16px;\n}\n.back   [_nghost-%COMP%]     .rotate {\n  transform: rotate(180deg);\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 18px;\n  padding: 28px 22px;\n  margin-bottom: 28px;\n  color: #fff;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 3px 12px;\n  border-radius: 16px;\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  margin-bottom: 12px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 0.82rem;\n  opacity: 0.75;\n  line-height: 1.5;\n}\n.stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.stat[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.topic-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.topic-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.topic-num[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  border-radius: 10px;\n  background: #eef2ff;\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.topic-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.topic-title[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.topic-desc[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #64748b;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.topic-dur[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=tutorial-detail.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialDetailComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [RouterLink, IconComponent], template: `
    <div class="page">
      <!-- Back nav -->
      <a routerLink="/tutorials" class="back">
        <app-icon name="chevron-right" [size]="16" css="rotate" /> Back to Tutorials
      </a>

      <!-- Hero -->
      <div class="hero">
        <span class="badge">{{ courseData().badge }}</span>
        <h1 class="title">{{ courseData().title }}</h1>
        <p class="subtitle">{{ courseData().subtitle }}</p>
        <div class="stat-row">
          <span class="stat">\u{1F4D6} {{ courseData().topics.length }} chapters</span>
          <span class="stat">\u23F1 {{ courseData().estimatedTime }}</span>
        </div>
      </div>

      <!-- Topics List -->
      <span class="section-label">CHAPTERS</span>
      <div class="list">
        @for (topic of courseData().topics; track topic.slug; let i = $index) {
          <a [routerLink]="['/tutorials', slug(), topic.slug]" class="topic-card">
            <div class="topic-num">{{ i + 1 }}</div>
            <div class="topic-body">
              <span class="topic-title">{{ topic.title }}</span>
              <span class="topic-desc">{{ topic.description }}</span>
            </div>
            <div class="topic-dur">{{ topic.duration }}</div>
          </a>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;1533d106cfa6874d291788205b1a2b826371395baa4433728e8a4d3f78e7cf7a;D:/A21/JavaIQ/src/app/features/tutorials/tutorial-detail.component.ts */\n.page {\n  padding: 16px 16px 100px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.back {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-decoration: none;\n  margin-bottom: 16px;\n}\n.back :host ::ng-deep .rotate {\n  transform: rotate(180deg);\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 18px;\n  padding: 28px 22px;\n  margin-bottom: 28px;\n  color: #fff;\n}\n.badge {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 3px 12px;\n  border-radius: 16px;\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  margin-bottom: 12px;\n}\n.title {\n  margin: 0 0 6px;\n  font-size: 1.5rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n.subtitle {\n  margin: 0 0 16px;\n  font-size: 0.82rem;\n  opacity: 0.75;\n  line-height: 1.5;\n}\n.stat-row {\n  display: flex;\n  gap: 16px;\n}\n.stat {\n  font-size: 0.68rem;\n  font-weight: 600;\n  opacity: 0.8;\n}\n.section-label {\n  display: block;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.topic-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  text-decoration: none;\n  color: inherit;\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.topic-card:hover {\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);\n  transform: translateY(-1px);\n}\n.topic-num {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  border-radius: 10px;\n  background: #eef2ff;\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.topic-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.topic-title {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.topic-desc {\n  font-size: 0.66rem;\n  color: #64748b;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.topic-dur {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-weight: 500;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=tutorial-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialDetailComponent, { className: "TutorialDetailComponent", filePath: "src/app/features/tutorials/tutorial-detail.component.ts", lineNumber: 137 });
})();
export {
  TutorialDetailComponent
};
//# sourceMappingURL=chunk-FIGCJ5PJ.js.map
