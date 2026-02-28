import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';
import { IconComponent } from '../../shared/icon.component';

interface Topic {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  duration: string;
}

@Component({
  selector: 'app-tutorial-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle],
  host: { 'class': 'ion-page' },
  template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tutorials" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Premium Centered Hero -->
      <div class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content">
          <div class="badge-wrapper">
            <span class="badge">{{ courseData().badge }}</span>
          </div>
          <h1 class="title">{{ courseData().title }}</h1>
          <p class="subtitle">{{ courseData().subtitle }}</p>
          
          <div class="stat-pill-row">
            <div class="stat-pill">
              <app-icon name="book-open" [size]="14" />
              <span>{{ courseData().topics.length }} Chapters</span>
            </div>
            <div class="stat-pill accent">
              <app-icon name="clock" [size]="14" />
              <span>{{ courseData().estimatedTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-container">
        <!-- Curriculum List -->
        <div class="section-header">
          <span class="section-label">CURRICULUM</span>
          <span class="topic-count">{{ courseData().topics.length }} Topics</span>
        </div>

        <div class="list">
          @for (topic of courseData().topics; track topic.slug; let i = $index) {
            <a [routerLink]="['/tutorials', slug(), topic.slug]" class="topic-card">
              <div class="topic-num-outer">
                <div class="topic-num">{{ i + 1 }}</div>
              </div>
              <div class="topic-body">
                <span class="topic-title">{{ topic.title }}</span>
                <span class="topic-desc">{{ topic.description }}</span>
              </div>
              <div class="topic-meta">
                <span class="topic-dur">{{ topic.duration }}</span>
                <app-icon name="chevron-right" [size]="14" css="green-arrow" />
              </div>
            </a>
          }
        </div>
      </div>
      
      <div style="height: 100px;"></div>
    </ion-content>
  `,
  styles: `
    .page-container { padding: 0 20px 20px; }

    /* Centered Hero — Forest Green */
    .hero {
      position: relative;
      background: linear-gradient(145deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%);
      padding: 64px 24px 48px;
      margin-bottom: 32px;
      color: #fff;
      overflow: hidden;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-glow {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(218,165,32,0.15) 0%, transparent 70%);
      filter: blur(60px);
    }
    .hero-content { position: relative; z-index: 1; max-width: 600px; }
    
    .badge-wrapper { margin-bottom: 20px; }
    .badge {
      display: inline-block;
      background: #DAA520;
      color: #081C15;
      padding: 4px 14px;
      border-radius: 20px;
      font-size: 0.62rem;
      font-weight: 800;
      letter-spacing: 0.12em;
    }

    .title { 
      margin: 0 0 14px; 
      font-size: 2.2rem; 
      font-weight: 800; 
      letter-spacing: -0.04em; 
      line-height: 1; 
      color: #fff;
    }
    .subtitle { 
      margin: 0 0 28px; 
      font-size: 0.95rem; 
      color: #B7E4C7; 
      line-height: 1.5; 
      opacity: 0.9;
    }

    .stat-pill-row { 
      display: flex; 
      gap: 12px; 
      justify-content: center;
    }
    .stat-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 600;
      color: #fff;
    }
    .stat-pill.accent { border-color: rgba(218,165,32,0.3); color: #DAA520; }

    /* Section Header */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 4px;
    }
    .section-label { 
      font-size: 0.65rem; 
      font-weight: 800; 
      letter-spacing: 0.15em; 
      color: #1B4332; 
    }
    .topic-count {
      font-size: 0.65rem;
      font-weight: 600;
      color: #8A9B8F;
    }

    .list { display: flex; flex-direction: column; gap: 10px; }

    .topic-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px;
      background: #fff;
      border-radius: 20px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }
    .topic-card:hover { 
      transform: translateY(-2px); 
      box-shadow: 0 8px 24px rgba(27,67,50,0.08);
      border-color: #B5C4B1;
    }

    .topic-num-outer {
      padding: 2px;
      border-radius: 12px;
      background: #D8F3DC;
    }
    .topic-num {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #fff;
      color: #1B4332;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 800;
    }

    .topic-body { flex: 1; min-width: 0; }
    .topic-title { display: block; font-size: 0.92rem; font-weight: 700; color: #1B1B1B; margin-bottom: 4px; }
    .topic-desc {
      font-size: 0.75rem;
      color: #52665A;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .topic-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }
    .topic-dur { font-size: 0.65rem; color: #8A9B8F; font-weight: 600; }
    :host ::ng-deep .green-arrow { color: #B5C4B1; }
    .topic-card:hover :host ::ng-deep .green-arrow { color: #DAA520; }
  `
})
export class TutorialDetailComponent {
  private route = inject(ActivatedRoute);
  slug = signal('');

  // Course data map
  private courses: Record<string, CourseData> = {
    'core-java': {
      badge: 'CORE JAVA',
      title: 'Core Java Masterclass',
      subtitle: 'From fundamentals to modern Java features. Master OOP, Collections, Streams, and more.',
      estimatedTime: '8 hours',
      topics: [
        { slug: 'arrays', title: 'Java Arrays', description: 'Fixed-size containers, traversal, searching, and sorting', iconName: 'box', duration: '30 min' },
        { slug: 'strings', title: 'Strings & StringBuilder', description: 'Immutability, string pool, and efficient string manipulation', iconName: 'code', duration: '35 min' },
        { slug: 'oop-classes', title: 'Classes & Objects', description: 'Blueprints, constructors, methods, and object creation', iconName: 'box', duration: '40 min' },
        { slug: 'inheritance', title: 'Inheritance', description: 'extends keyword, method overriding, super keyword', iconName: 'git-branch', duration: '35 min' },
        { slug: 'polymorphism', title: 'Polymorphism', description: 'Compile-time and runtime polymorphism, dynamic dispatch', iconName: 'layers', duration: '30 min' },
        { slug: 'abstraction', title: 'Abstraction & Interfaces', description: 'Abstract classes, interfaces, default and static methods', iconName: 'shield', duration: '35 min' },
        { slug: 'encapsulation', title: 'Encapsulation', description: 'Access modifiers, getters/setters, data hiding', iconName: 'shield', duration: '25 min' },
        { slug: 'exceptions', title: 'Exception Handling', description: 'Try-catch-finally, custom exceptions, checked vs unchecked', iconName: 'alert-triangle', duration: '30 min' },
        { slug: 'collections-list', title: 'Collections: List', description: 'ArrayList, LinkedList, performance comparison', iconName: 'list', duration: '35 min' },
        { slug: 'collections-map', title: 'Collections: Map & Set', description: 'HashMap, TreeMap, HashSet, iteration patterns', iconName: 'database', duration: '35 min' },
        { slug: 'generics', title: 'Generics', description: 'Type parameters, bounded types, wildcards', iconName: 'box', duration: '30 min' },
        { slug: 'streams', title: 'Streams API', description: 'filter, map, collect, reduce, parallel streams', iconName: 'zap', duration: '40 min' },
        { slug: 'lambdas', title: 'Lambda Expressions', description: 'Functional interfaces, method references, closures', iconName: 'code', duration: '30 min' },
        { slug: 'records-sealed', title: 'Records & Sealed Classes', description: 'Java 16+ records, sealed hierarchies, pattern matching', iconName: 'shield', duration: '25 min' },
        { slug: 'io-files', title: 'Java I/O & Files', description: 'Streams, readers, writers, NIO, file operations', iconName: 'terminal', duration: '30 min' }
      ]
    },
    'spring-framework': {
      badge: 'SPRING',
      title: 'Spring Framework Deep Dive',
      subtitle: 'Master the foundation of enterprise Java. IoC, DI, AOP, MVC, Security, and more.',
      estimatedTime: '10 hours',
      topics: [
        { slug: 'spring-ioc', title: 'IoC Container', description: 'Inversion of Control, ApplicationContext, bean lifecycle', iconName: 'box', duration: '35 min' },
        { slug: 'spring-di', title: 'Dependency Injection', description: 'Constructor, setter, field injection, qualifiers', iconName: 'link', duration: '40 min' },
        { slug: 'spring-beans', title: 'Bean Scopes & Lifecycle', description: 'Singleton, prototype, request, session, init/destroy', iconName: 'refresh-cw', duration: '30 min' },
        { slug: 'spring-aop', title: 'AOP (Aspect-Oriented)', description: 'Cross-cutting concerns, aspects, pointcuts, advice', iconName: 'layers', duration: '40 min' },
        { slug: 'spring-mvc', title: 'Spring MVC', description: 'DispatcherServlet, controllers, request mapping, views', iconName: 'globe', duration: '45 min' },
        { slug: 'spring-rest', title: 'RESTful APIs', description: 'RestController, ResponseEntity, content negotiation', iconName: 'zap', duration: '40 min' },
        { slug: 'spring-data', title: 'Spring Data Access', description: 'JdbcTemplate, transactions, DataSource configuration', iconName: 'database', duration: '35 min' },
        { slug: 'spring-security', title: 'Spring Security Basics', description: 'Authentication, authorization, filters, CSRF protection', iconName: 'shield', duration: '45 min' },
        { slug: 'spring-config', title: 'Configuration', description: 'Java config, properties, profiles, conditional beans', iconName: 'settings', duration: '30 min' },
        { slug: 'spring-testing', title: 'Testing Spring Apps', description: 'SpringBootTest, MockMvc, TestContext framework', iconName: 'check-circle', duration: '35 min' },
        { slug: 'spring-events', title: 'Events & Listeners', description: 'ApplicationEvent, EventListener, async events', iconName: 'bell', duration: '25 min' },
        { slug: 'spring-caching', title: 'Caching', description: 'Cacheable, CacheEvict, CachePut, cache managers', iconName: 'zap', duration: '25 min' }
      ]
    },
    'spring-boot': {
      badge: 'SPRING BOOT',
      title: 'Spring Boot Mastery',
      subtitle: 'Build production-ready apps fast. Auto-configuration, starters, REST APIs, security, actuator, and deployment.',
      estimatedTime: '10 hours',
      topics: [
        { slug: 'sb-auto-config', title: 'Auto-Configuration', description: 'How Spring Boot auto-configures beans, @EnableAutoConfiguration', iconName: 'zap', duration: '30 min' },
        { slug: 'sb-starters', title: 'Starters & Dependencies', description: 'Starter POMs, dependency management, BOM', iconName: 'box', duration: '25 min' },
        { slug: 'sb-properties', title: 'Application Properties', description: 'application.yml, @Value, @ConfigurationProperties, relaxed binding', iconName: 'settings', duration: '30 min' },
        { slug: 'sb-devtools', title: 'DevTools & Hot Reload', description: 'Live reload, automatic restart, remote debugging', iconName: 'refresh-cw', duration: '20 min' },
        { slug: 'sb-actuator', title: 'Actuator & Monitoring', description: 'Health checks, metrics, info, custom endpoints', iconName: 'activity', duration: '35 min' },
        { slug: 'sb-logging', title: 'Logging', description: 'SLF4J, Logback config, log levels, structured logging', iconName: 'terminal', duration: '25 min' },
        { slug: 'sb-rest-api', title: 'REST API Development', description: 'RestController, request/response, content negotiation', iconName: 'globe', duration: '40 min' },
        { slug: 'sb-validation', title: 'Validation', description: 'Bean Validation, custom validators, error messages', iconName: 'check-circle', duration: '30 min' },
        { slug: 'sb-exception', title: 'Exception Handling', description: 'ControllerAdvice, ProblemDetail, error responses', iconName: 'alert-triangle', duration: '30 min' },
        { slug: 'sb-data-jpa', title: 'Spring Data JPA', description: 'Repositories, query methods, projections, auditing', iconName: 'database', duration: '45 min' },
        { slug: 'sb-security', title: 'Security', description: 'JWT auth, OAuth2, method security, CORS', iconName: 'shield', duration: '45 min' },
        { slug: 'sb-testing', title: 'Testing', description: 'SpringBootTest, MockMvc, Testcontainers, slices', iconName: 'check-circle', duration: '40 min' },
        { slug: 'sb-profiles', title: 'Profiles & Environments', description: 'Profile activation, multi-env config, conditional beans', iconName: 'layers', duration: '25 min' },
        { slug: 'sb-docker', title: 'Docker & Containers', description: 'Dockerfile, buildpacks, multi-stage builds, compose', iconName: 'box', duration: '35 min' },
        { slug: 'sb-caching', title: 'Caching Strategies', description: 'Redis, Caffeine, cache abstraction, TTL policies', iconName: 'zap', duration: '30 min' },
        { slug: 'sb-scheduling', title: 'Scheduling & Async', description: '@Scheduled, @Async, task executors, cron expressions', iconName: 'clock', duration: '30 min' },
        { slug: 'sb-events', title: 'Application Events', description: 'Custom events, event-driven architecture, listeners', iconName: 'bell', duration: '25 min' },
        { slug: 'sb-deploy', title: 'Deployment', description: 'JAR packaging, cloud deploy, Kubernetes, health probes', iconName: 'upload', duration: '35 min' }
      ]
    },
    'hibernate': {
      badge: 'HIBERNATE & JPA',
      title: 'Hibernate & JPA Deep Dive',
      subtitle: 'Master ORM fundamentals, entity mapping, relationships, caching, and performance tuning.',
      estimatedTime: '5 hours',
      topics: [
        { slug: 'hib-orm', title: 'ORM Fundamentals', description: 'Object-Relational Mapping, SessionFactory, EntityManager', iconName: 'database', duration: '30 min' },
        { slug: 'hib-entities', title: 'Entity Mapping', description: '@Entity, @Table, @Column, ID generation, embeddables', iconName: 'grid', duration: '35 min' },
        { slug: 'hib-relations', title: 'Relationships', description: 'OneToMany, ManyToOne, ManyToMany, fetch strategies', iconName: 'link', duration: '40 min' },
        { slug: 'hib-jpql', title: 'JPQL & Queries', description: 'JPQL, named queries, native SQL, projections', iconName: 'search', duration: '35 min' },
        { slug: 'hib-criteria', title: 'Criteria API', description: 'Type-safe queries, metamodel, specifications', iconName: 'filter', duration: '30 min' },
        { slug: 'hib-caching', title: 'Caching', description: 'First-level, second-level, query cache', iconName: 'zap', duration: '30 min' },
        { slug: 'hib-transactions', title: 'Transactions', description: 'ACID, isolation levels, optimistic/pessimistic locking', iconName: 'lock', duration: '30 min' },
        { slug: 'hib-performance', title: 'Performance', description: 'N+1 problem, batch fetching, lazy loading pitfalls', iconName: 'activity', duration: '35 min' },
        { slug: 'hib-inheritance', title: 'Inheritance Mapping', description: 'Single table, joined, table per class strategies', iconName: 'layers', duration: '25 min' },
        { slug: 'hib-auditing', title: 'Auditing & Envers', description: 'Entity versioning, audit trails, Hibernate Envers', iconName: 'clock', duration: '25 min' }
      ]
    },
    'microservices': {
      badge: 'MICROSERVICES',
      title: 'Microservices Architecture',
      subtitle: 'Design and build distributed systems. Service discovery, API gateway, event-driven patterns, and Kubernetes.',
      estimatedTime: '8 hours',
      topics: [
        { slug: 'ms-intro', title: 'Microservices Intro', description: 'Monolith vs microservices, bounded contexts, decomposition', iconName: 'grid', duration: '30 min' },
        { slug: 'ms-discovery', title: 'Service Discovery', description: 'Eureka, Consul, service registry, client-side discovery', iconName: 'search', duration: '35 min' },
        { slug: 'ms-gateway', title: 'API Gateway', description: 'Spring Cloud Gateway, routing, filters, rate limiting', iconName: 'globe', duration: '35 min' },
        { slug: 'ms-config', title: 'Config Server', description: 'Centralized configuration, Git-backed, encryption, refresh', iconName: 'settings', duration: '30 min' },
        { slug: 'ms-circuit', title: 'Circuit Breaker', description: 'Resilience4j, fallbacks, retry, bulkhead patterns', iconName: 'shield', duration: '35 min' },
        { slug: 'ms-loadbalance', title: 'Load Balancing', description: 'Client-side load balancing, Spring Cloud LoadBalancer', iconName: 'activity', duration: '25 min' },
        { slug: 'ms-communication', title: 'Inter-Service Communication', description: 'REST, gRPC, messaging, sync vs async', iconName: 'link', duration: '35 min' },
        { slug: 'ms-events', title: 'Event-Driven Architecture', description: 'Kafka, RabbitMQ, event sourcing, pub/sub', iconName: 'bell', duration: '40 min' },
        { slug: 'ms-saga', title: 'Saga Pattern', description: 'Distributed transactions, choreography vs orchestration', iconName: 'refresh-cw', duration: '35 min' },
        { slug: 'ms-cqrs', title: 'CQRS', description: 'Command Query Responsibility Segregation, read/write models', iconName: 'layers', duration: '30 min' },
        { slug: 'ms-tracing', title: 'Distributed Tracing', description: 'Micrometer, Zipkin, correlation IDs, observability', iconName: 'eye', duration: '30 min' },
        { slug: 'ms-docker', title: 'Containerization', description: 'Docker Compose for microservices, networking, volumes', iconName: 'box', duration: '35 min' },
        { slug: 'ms-k8s', title: 'Kubernetes', description: 'Deployments, services, ingress, config maps, secrets', iconName: 'cloud', duration: '40 min' },
        { slug: 'ms-security', title: 'Security', description: 'OAuth2, JWT propagation, API key management, mTLS', iconName: 'lock', duration: '35 min' }
      ]
    },
    'multithreading': {
      badge: 'MULTITHREADING',
      title: 'Java Multithreading & Concurrency',
      subtitle: 'Master concurrent programming. Threads, synchronization, executors, CompletableFuture, and virtual threads.',
      estimatedTime: '4 hours',
      topics: [
        { slug: 'mt-threads', title: 'Threads & Runnable', description: 'Creating threads, lifecycle, Runnable vs Callable', iconName: 'play', duration: '30 min' },
        { slug: 'mt-sync', title: 'Synchronization', description: 'synchronized, wait/notify, volatile, thread safety', iconName: 'lock', duration: '35 min' },
        { slug: 'mt-executors', title: 'ExecutorService', description: 'Thread pools, ScheduledExecutor, shutdown strategies', iconName: 'settings', duration: '30 min' },
        { slug: 'mt-future', title: 'CompletableFuture', description: 'Async composition, thenApply, thenCombine, exception handling', iconName: 'zap', duration: '35 min' },
        { slug: 'mt-collections', title: 'Concurrent Collections', description: 'ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList', iconName: 'database', duration: '30 min' },
        { slug: 'mt-locks', title: 'Locks & Conditions', description: 'ReentrantLock, ReadWriteLock, StampedLock, Condition', iconName: 'shield', duration: '30 min' },
        { slug: 'mt-atomic', title: 'Atomic Operations', description: 'AtomicInteger, AtomicReference, CAS, accumulators', iconName: 'activity', duration: '25 min' },
        { slug: 'mt-virtual', title: 'Virtual Threads', description: 'Project Loom, lightweight threads, structured concurrency', iconName: 'cloud', duration: '25 min' }
      ]
    },
    'design-patterns': {
      badge: 'DESIGN PATTERNS',
      title: 'Java Design Patterns',
      subtitle: 'Write maintainable code with proven patterns. Creational, Structural, and Behavioral patterns in Java.',
      estimatedTime: '6 hours',
      topics: [
        { slug: 'dp-singleton', title: 'Singleton', description: 'Thread-safe singleton, enum, lazy initialization', iconName: 'box', duration: '25 min' },
        { slug: 'dp-factory', title: 'Factory Method', description: 'Object creation delegation, abstract factory', iconName: 'settings', duration: '30 min' },
        { slug: 'dp-builder', title: 'Builder', description: 'Step-by-step construction, fluent API, immutable objects', iconName: 'layers', duration: '30 min' },
        { slug: 'dp-observer', title: 'Observer', description: 'Event-driven updates, pub/sub, reactive patterns', iconName: 'bell', duration: '30 min' },
        { slug: 'dp-strategy', title: 'Strategy', description: 'Interchangeable algorithms, functional approach', iconName: 'shuffle', duration: '25 min' },
        { slug: 'dp-decorator', title: 'Decorator', description: 'Dynamic behavior extension, I/O streams example', iconName: 'gift', duration: '30 min' },
        { slug: 'dp-adapter', title: 'Adapter', description: 'Interface compatibility, class vs object adapter', iconName: 'link', duration: '25 min' },
        { slug: 'dp-proxy', title: 'Proxy', description: 'Access control, lazy loading, dynamic proxy', iconName: 'shield', duration: '30 min' },
        { slug: 'dp-template', title: 'Template Method', description: 'Algorithm skeleton, hook methods, Spring usage', iconName: 'file-text', duration: '25 min' },
        { slug: 'dp-command', title: 'Command', description: 'Encapsulated requests, undo, macro commands', iconName: 'terminal', duration: '30 min' },
        { slug: 'dp-chain', title: 'Chain of Responsibility', description: 'Request pipeline, middleware, filter chains', iconName: 'filter', duration: '30 min' },
        { slug: 'dp-state', title: 'State', description: 'State machines, context-dependent behavior', iconName: 'refresh-cw', duration: '30 min' }
      ]
    }
  };

  courseData = signal<CourseData>({
    badge: '', title: '', subtitle: '', estimatedTime: '', topics: []
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const s = params.get('slug') ?? '';
      this.slug.set(s);
      this.courseData.set(this.courses[s] ?? {
        badge: s.toUpperCase(),
        title: s.replace(/-/g, ' '),
        subtitle: 'Course content coming soon.',
        estimatedTime: 'TBD',
        topics: []
      });
    });
  }
}

interface CourseData {
  badge: string;
  title: string;
  subtitle: string;
  estimatedTime: string;
  topics: Topic[];
}
