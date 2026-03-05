import {
  CertificateComponent
} from "./chunk-PLLXPF33.js";
import {
  AdGateService
} from "./chunk-JEJRJ2G2.js";
import {
  DataService
} from "./chunk-CTHSCSLP.js";
import "./chunk-QFFHBMTJ.js";
import "./chunk-4DYJ5SOT.js";
import "./chunk-ZI6SYS5B.js";
import {
  AuthService
} from "./chunk-YU6DDDO5.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-PWZS7QID.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-CSRIGHDB.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-3W5KDKG7.js";
import "./chunk-QYTOD3XC.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L6VISU4K.js";
import "./chunk-PUOSPVYE.js";
import "./chunk-YDDVKQH4.js";
import "./chunk-URDQGTEH.js";
import "./chunk-3KNZXPVP.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/tutorial-detail.component.ts
var _forTrack0 = ($index, $item) => $item.slug;
function TutorialDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPct(), "%")("background", ctx_r0.courseData().themeColor);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.courseData().themeColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.completedCount(), " / ", ctx_r0.courseData().topics.length, " completed ");
  }
}
function TutorialDetailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 34);
    \u0275\u0275listener("click", function TutorialDetailComponent_Conditional_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCert.set(true));
    });
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3, " Get Certificate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, "\u{1F389} Course complete!");
    \u0275\u0275elementEnd()();
  }
}
function TutorialDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-certificate", 37);
    \u0275\u0275listener("closed", function TutorialDetailComponent_Conditional_28_Template_app_certificate_closed_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCert.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.courseData().title)("category", ctx_r0.courseData().badge)("visible", ctx_r0.showCert())("recipientName", ctx_r0.userName());
  }
}
function TutorialDetailComponent_For_39_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("color", ctx_r0.courseData().themeColor);
  }
}
function TutorialDetailComponent_For_39_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_87_r6 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.courseData().themeColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275$index_87_r6 + 1);
  }
}
function TutorialDetailComponent_For_39_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Done");
    \u0275\u0275elementEnd();
  }
}
function TutorialDetailComponent_For_39_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementEnd();
  }
}
function TutorialDetailComponent_For_39_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
}
function TutorialDetailComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function TutorialDetailComponent_For_39_Template_button_click_0_listener() {
      const topic_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTopic(topic_r5));
    });
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "div", 40)(3, "div", 41);
    \u0275\u0275conditionalCreate(4, TutorialDetailComponent_For_39_Conditional_4_Template, 2, 2, "div", 42)(5, TutorialDetailComponent_For_39_Conditional_5_Template, 2, 3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 47)(12, "span", 48);
    \u0275\u0275element(13, "i", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TutorialDetailComponent_For_39_Conditional_15_Template, 2, 0, "span", 50)(16, TutorialDetailComponent_For_39_Conditional_16_Template, 2, 0, "div", 51)(17, TutorialDetailComponent_For_39_Conditional_17_Template, 2, 0, "div", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const topic_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--accent", ctx_r0.courseData().themeColor);
    \u0275\u0275classProp("topic-done", ctx_r0.isComplete(ctx_r0.slug(), topic_r5.slug));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.isComplete(ctx_r0.slug(), topic_r5.slug) ? ctx_r0.courseData().themeColor + "20" : ctx_r0.courseData().themeColor + "15");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isComplete(ctx_r0.slug(), topic_r5.slug) ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("topic-title-done", ctx_r0.isComplete(ctx_r0.slug(), topic_r5.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", topic_r5.duration, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isComplete(ctx_r0.slug(), topic_r5.slug) ? 15 : ctx_r0.isUnlocked(ctx_r0.slug(), topic_r5.slug) ? 16 : 17);
  }
}
var TutorialDetailComponent = class _TutorialDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  dataService = inject(DataService);
  adGate = inject(AdGateService);
  slug = signal("", ...ngDevMode ? [{ debugName: "slug" }] : []);
  completedCount = computed(() => {
    this.dataService.completedTopicIds();
    return this.dataService.getCourseCompletedCount(this.slug());
  }, ...ngDevMode ? [{ debugName: "completedCount" }] : []);
  progressPct = computed(() => {
    const total = this.courseData().topics.length;
    return total === 0 ? 0 : Math.round(this.completedCount() / total * 100);
  }, ...ngDevMode ? [{ debugName: "progressPct" }] : []);
  auth = inject(AuthService);
  showCert = signal(false, ...ngDevMode ? [{ debugName: "showCert" }] : []);
  userName = computed(() => this.auth.user()?.displayName ?? "Java Developer", ...ngDevMode ? [{ debugName: "userName" }] : []);
  isCourseComplete = computed(() => this.progressPct() >= 100, ...ngDevMode ? [{ debugName: "isCourseComplete" }] : []);
  isComplete(courseSlug, topicSlug) {
    return this.dataService.isTopicComplete(`${courseSlug}::${topicSlug}`);
  }
  isUnlocked(courseSlug, topicSlug) {
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`${courseSlug}::${topicSlug}`);
  }
  async openTopic(topic) {
    const topicId = `${this.slug()}::${topic.slug}`;
    if (!this.isComplete(this.slug(), topic.slug) && !this.adGate.isItemUnlocked(topicId)) {
      const allowed = await this.adGate.unlockItemWithAd(topicId, topic.title);
      if (!allowed)
        return;
    }
    await this.router.navigate(["/tutorials", this.slug(), topic.slug]);
  }
  // Course data map
  courses = {
    "core-java": {
      badge: "CORE JAVA",
      title: "Core Java Masterclass",
      subtitle: "From fundamentals to modern Java features. Master OOP, Collections, Streams, and more.",
      estimatedTime: "8 hours",
      themeColor: "#f59e0b",
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
      themeColor: "#10b981",
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
      themeColor: "#3b82f6",
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
      themeColor: "#f97316",
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
      themeColor: "#8b5cf6",
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
      themeColor: "#eab308",
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
      themeColor: "#ec4899",
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
    topics: [],
    themeColor: "#8b5cf6"
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
        themeColor: "#8b5cf6",
        topics: []
      });
    });
  }
  static \u0275fac = function TutorialDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TutorialDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TutorialDetailComponent, selectors: [["app-tutorial-detail"]], hostAttrs: [1, "ion-page"], decls: 43, vars: 23, consts: [["translucent", "true", 1, "ion-no-border"], [1, "tut-toolbar"], ["slot", "start"], ["defaultHref", "/tutorials", "text", "", "color", "light"], [1, "brand-title"], [1, "tut-content"], [1, "hero"], [1, "hero-glow"], [1, "hero-content"], [1, "badge-wrapper"], [1, "badge"], [1, "title"], [1, "subtitle"], [1, "stat-pill-row"], [1, "stat-pill"], [1, "fa-solid", "fa-book-open", "stat-icon"], [1, "stat-pill", "accent"], [1, "fa-regular", "fa-clock", "stat-icon"], [1, "progress-wrap"], [1, "cert-cta-wrap"], ["type", "course", 3, "title", "category", "visible", "recipientName"], [1, "page-container"], [1, "section-header"], [1, "section-head-left"], [1, "fa-solid", "fa-layer-group", "section-icon"], [1, "section-label"], [1, "topic-count"], [1, "list"], [1, "topic-card", 3, "topic-done", "--accent"], [1, "tut-footer"], [1, "footer-text"], [1, "progress-track"], [1, "progress-bar"], [1, "progress-label"], [1, "btn-get-cert", 3, "click"], [1, "fa-solid", "fa-certificate"], [1, "cert-cta-sub"], ["type", "course", 3, "closed", "title", "category", "visible", "recipientName"], [1, "topic-card", 3, "click"], [1, "topic-accent-left"], [1, "topic-card-inner"], [1, "topic-num-outer"], [1, "topic-num", "topic-num-done", 3, "color"], [1, "topic-num", 3, "color"], [1, "topic-body"], [1, "topic-title"], [1, "topic-desc"], [1, "topic-meta"], [1, "topic-dur"], [1, "fa-regular", "fa-clock", "topic-dur-icon"], [1, "done-badge"], [1, "topic-arrow"], [1, "topic-arrow", "locked-icon"], [1, "topic-num", "topic-num-done"], [1, "fa-solid", "fa-check"], [1, "topic-num"], [1, "fa-solid", "fa-chevron-right"], [1, "fa-solid", "fa-lock"]], template: function TutorialDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ion-title", 4);
      \u0275\u0275text(5, "JavaIQ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "ion-content", 5)(7, "div", 6);
      \u0275\u0275element(8, "div", 7);
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "h1", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(26, TutorialDetailComponent_Conditional_26_Template, 5, 8, "div", 18);
      \u0275\u0275conditionalCreate(27, TutorialDetailComponent_Conditional_27_Template, 6, 0, "div", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(28, TutorialDetailComponent_Conditional_28_Template, 1, 4, "app-certificate", 20);
      \u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "div", 23);
      \u0275\u0275element(32, "i", 24);
      \u0275\u0275elementStart(33, "span", 25);
      \u0275\u0275text(34, "CURRICULUM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "span", 26);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 27);
      \u0275\u0275repeaterCreate(38, TutorialDetailComponent_For_39_Template, 18, 13, "button", 28, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 29)(41, "p", 30);
      \u0275\u0275text(42, "Built with \u2764\uFE0F for Java developers");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("background", "radial-gradient(circle, " + ctx.courseData().themeColor + "20 0%, transparent 70%)");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("color", ctx.courseData().themeColor)("background", ctx.courseData().themeColor + "15")("border-color", ctx.courseData().themeColor + "30");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.courseData().badge, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.courseData().title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.courseData().subtitle);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.courseData().topics.length, " Chapters");
      \u0275\u0275advance();
      \u0275\u0275styleProp("color", ctx.courseData().themeColor)("border-color", ctx.courseData().themeColor + "40");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.courseData().estimatedTime);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.completedCount() > 0 ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isCourseComplete() ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCert() ? 28 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("color", ctx.courseData().themeColor);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.courseData().topics.length, " Topics");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.courseData().topics);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, CertificateComponent], styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n\n\n.tut-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.page-container[_ngcontent-%COMP%] {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  padding: 32px 20px 48px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 300px;\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n}\n.badge-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  border: 1px solid;\n  border-radius: 20px;\n  padding: 4px 12px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 12px;\n  font-size: 1.85rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 28px;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.stat-pill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n  color: #94a3b8;\n}\n.topic-count[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.topic-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.topic-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.topic-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.topic-accent-left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  background: var(--accent, #8b5cf6);\n  border-radius: 0 3px 3px 0;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.topic-card[_ngcontent-%COMP%]:hover   .topic-accent-left[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.topic-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 16px 16px 20px;\n}\n.topic-num-outer[_ngcontent-%COMP%] {\n  padding: 2px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.topic-num[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(11, 17, 32, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.topic-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.topic-title[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 4px;\n  letter-spacing: -0.01em;\n}\n.topic-desc[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.topic-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.topic-dur[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.topic-dur-icon[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n}\n.topic-arrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n  margin-top: 4px;\n}\n.topic-card[_ngcontent-%COMP%]:hover   .topic-arrow[_ngcontent-%COMP%] {\n  color: var(--accent, #8b5cf6);\n  transform: translateX(2px);\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  max-width: 360px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  opacity: 0.9;\n}\n.cert-cta-wrap[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.btn-get-cert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #d4a853,\n      #b8892a);\n  color: #0a1f13;\n  font-size: 0.85rem;\n  font-weight: 800;\n  padding: 12px 28px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  letter-spacing: 0.02em;\n  box-shadow: 0 4px 16px rgba(212, 168, 83, 0.45);\n  transition: all 0.2s ease;\n}\n.btn-get-cert[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(212, 168, 83, 0.55);\n}\n.cert-cta-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 600;\n  margin: 0;\n}\n.tut-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 32px;\n  padding-bottom: 32px;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\n.topic-done[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\n.topic-num-done[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(11, 17, 32, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n}\n.topic-title-done[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.6;\n}\n.done-badge[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  text-transform: uppercase;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .tut-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .topic-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .title[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=tutorial-detail.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TutorialDetailComponent, [{
    type: Component,
    args: [{ selector: "app-tutorial-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, CertificateComponent], host: { "class": "ion-page" }, template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tutorials" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <!-- Premium Centered Hero -->
      <div class="hero">
        <div class="hero-glow" [style.background]="'radial-gradient(circle, ' + courseData().themeColor + '20 0%, transparent 70%)'"></div>
        <div class="hero-content">
          <div class="badge-wrapper">
            <span class="badge" [style.color]="courseData().themeColor" [style.background]="courseData().themeColor + '15'" [style.border-color]="courseData().themeColor + '30'">
              {{ courseData().badge }}
            </span>
          </div>
          <h1 class="title">{{ courseData().title }}</h1>
          <p class="subtitle">{{ courseData().subtitle }}</p>

          <div class="stat-pill-row">
            <div class="stat-pill">
              <i class="fa-solid fa-book-open stat-icon"></i>
              <span>{{ courseData().topics.length }} Chapters</span>
            </div>
            <div class="stat-pill accent" [style.color]="courseData().themeColor" [style.border-color]="courseData().themeColor + '40'">
              <i class="fa-regular fa-clock stat-icon"></i>
              <span>{{ courseData().estimatedTime }}</span>
            </div>
          </div>

          <!-- Progress -->
          @if (completedCount() > 0) {
            <div class="progress-wrap">
              <div class="progress-track">
                <div class="progress-bar" [style.width.%]="progressPct()" [style.background]="courseData().themeColor"></div>
              </div>
              <span class="progress-label" [style.color]="courseData().themeColor">
                {{ completedCount() }} / {{ courseData().topics.length }} completed
              </span>
            </div>
          }

          <!-- Certificate CTA \u2014 shown when 100% complete -->
          @if (isCourseComplete()) {
            <div class="cert-cta-wrap">
              <button class="btn-get-cert" (click)="showCert.set(true)">
                <i class="fa-solid fa-certificate"></i>
                Get Certificate
              </button>
              <p class="cert-cta-sub">\u{1F389} Course complete!</p>
            </div>
          }
        </div>
      </div>

      <!-- Certificate modal -->
      @if (showCert()) {
        <app-certificate
          type="course"
          [title]="courseData().title"
          [category]="courseData().badge"
          [visible]="showCert()"
          [recipientName]="userName()"
          (closed)="showCert.set(false)" />
      }

      <div class="page-container">
        <!-- Curriculum List -->
        <div class="section-header">
          <div class="section-head-left">
            <i class="fa-solid fa-layer-group section-icon" [style.color]="courseData().themeColor"></i>
            <span class="section-label">CURRICULUM</span>
          </div>
          <span class="topic-count">{{ courseData().topics.length }} Topics</span>
        </div>

        <div class="list">
          @for (topic of courseData().topics; track topic.slug; let i = $index) {
            <button (click)="openTopic(topic)" class="topic-card"
               [class.topic-done]="isComplete(slug(), topic.slug)"
               [style.--accent]="courseData().themeColor">
              <div class="topic-accent-left"></div>
              
              <div class="topic-card-inner">
                <div class="topic-num-outer" [style.background]="isComplete(slug(), topic.slug) ? courseData().themeColor + '20' : courseData().themeColor + '15'">
                  @if (isComplete(slug(), topic.slug)) {
                    <div class="topic-num topic-num-done" [style.color]="courseData().themeColor">
                      <i class="fa-solid fa-check"></i>
                    </div>
                  } @else {
                    <div class="topic-num" [style.color]="courseData().themeColor">{{ i + 1 }}</div>
                  }
                </div>
                
                <div class="topic-body">
                  <span class="topic-title" [class.topic-title-done]="isComplete(slug(), topic.slug)">{{ topic.title }}</span>
                  <span class="topic-desc">{{ topic.description }}</span>
                </div>
                
                <div class="topic-meta">
                  <span class="topic-dur">
                    <i class="fa-regular fa-clock topic-dur-icon"></i>
                    {{ topic.duration }}
                  </span>
                  @if (isComplete(slug(), topic.slug)) {
                    <span class="done-badge">Done</span>
                  } @else if (isUnlocked(slug(), topic.slug)) {
                    <div class="topic-arrow">
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  } @else {
                    <div class="topic-arrow locked-icon">
                      <i class="fa-solid fa-lock"></i>
                    </div>
                  }
                </div>
              </div>
            </button>
          }
        </div>
      </div>

      <!-- Footer -->
      <div class="tut-footer">
        <p class="footer-text">Built with \u2764\uFE0F for Java developers</p>
      </div>
    </ion-content>
  `, styles: ['@import "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";\n\n/* angular:styles/component:css;cdb5e5e5dc681fcf1e8abab43b2a8e8e17b1cadb80d80d6aa073c537144b8896;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/tutorial-detail.component.ts */\n.tut-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.brand-title {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: white;\n}\n.tut-content {\n  --background: #0b1120;\n}\n.page-container {\n  padding: 0 16px 40px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.hero {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      #0b1120 0%,\n      #161b22 100%);\n  padding: 32px 20px 48px;\n  color: #fff;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 24px;\n}\n.hero-glow {\n  position: absolute;\n  top: -100px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 300px;\n  height: 300px;\n  filter: blur(50px);\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n}\n.badge-wrapper {\n  margin-bottom: 20px;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  border: 1px solid;\n  border-radius: 20px;\n  padding: 4px 12px;\n}\n.title {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 12px;\n  font-size: 1.85rem;\n  font-weight: 900;\n  letter-spacing: -0.03em;\n  line-height: 1.15;\n  color: #e2e8f0;\n}\n.subtitle {\n  font-family: "Inter", sans-serif;\n  margin: 0 0 28px;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.stat-pill-row {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.stat-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 8px 16px;\n  border-radius: 50px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.stat-icon {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.section-head-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.section-icon {\n  font-size: 0.75rem;\n}\n.section-label {\n  font-family: "Inter", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n  color: #94a3b8;\n}\n.topic-count {\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #475569;\n}\n.list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.topic-card {\n  position: relative;\n  display: block;\n  width: 100%;\n  text-align: left;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 14px;\n  color: inherit;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.topic-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.topic-card:active {\n  transform: scale(0.98);\n}\n.topic-accent-left {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  bottom: 12px;\n  width: 3px;\n  background: var(--accent, #8b5cf6);\n  border-radius: 0 3px 3px 0;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n.topic-card:hover .topic-accent-left {\n  opacity: 1;\n}\n.topic-card-inner {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 16px 16px 20px;\n}\n.topic-num-outer {\n  padding: 2px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.topic-num {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(11, 17, 32, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Inter", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n}\n.topic-body {\n  flex: 1;\n  min-width: 0;\n}\n.topic-title {\n  display: block;\n  font-family: "Inter", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #e2e8f0;\n  margin-bottom: 4px;\n  letter-spacing: -0.01em;\n}\n.topic-desc {\n  font-family: "Inter", sans-serif;\n  font-size: 0.75rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.topic-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.topic-dur {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Inter", sans-serif;\n  font-size: 0.65rem;\n  color: #64748b;\n  font-weight: 600;\n}\n.topic-dur-icon {\n  font-size: 0.6rem;\n}\n.topic-arrow {\n  font-size: 11px;\n  color: #475569;\n  transition: all 0.2s ease;\n  margin-top: 4px;\n}\n.topic-card:hover .topic-arrow {\n  color: var(--accent, #8b5cf6);\n  transform: translateX(2px);\n}\n.progress-wrap {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  max-width: 360px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.progress-track {\n  width: 100%;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-bar {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.progress-label {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  opacity: 0.9;\n}\n.cert-cta-wrap {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.btn-get-cert {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #d4a853,\n      #b8892a);\n  color: #0a1f13;\n  font-size: 0.85rem;\n  font-weight: 800;\n  padding: 12px 28px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  letter-spacing: 0.02em;\n  box-shadow: 0 4px 16px rgba(212, 168, 83, 0.45);\n  transition: all 0.2s ease;\n}\n.btn-get-cert:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(212, 168, 83, 0.55);\n}\n.cert-cta-sub {\n  font-size: 0.68rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 600;\n  margin: 0;\n}\n.tut-footer {\n  text-align: center;\n  margin-top: 32px;\n  padding-bottom: 32px;\n}\n.footer-text {\n  font-family: "Inter", sans-serif;\n  font-size: 0.72rem;\n  color: #334155;\n  font-weight: 500;\n  margin: 0;\n}\n.topic-done {\n  border-color: rgba(255, 255, 255, 0.1) !important;\n}\n.topic-num-done {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(11, 17, 32, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n}\n.topic-title-done {\n  text-decoration: line-through;\n  opacity: 0.6;\n}\n.done-badge {\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  padding: 2px 8px;\n  border-radius: 6px;\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  text-transform: uppercase;\n}\n:host-context(html:not(.dark)) .tut-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .tut-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .topic-card {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\n:host-context(html:not(.dark)) .title {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .subtitle {\n  color: #52665A;\n}\n/*# sourceMappingURL=tutorial-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TutorialDetailComponent, { className: "TutorialDetailComponent", filePath: "src/app/features/tutorials/tutorial-detail.component.ts", lineNumber: 562 });
})();
export {
  TutorialDetailComponent
};
//# sourceMappingURL=chunk-TBE6F4UJ.js.map
