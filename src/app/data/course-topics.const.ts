/** Shared course → topics map.
 *  Single source of truth used by TutorialDetailComponent and ContinueLearningCardComponent.
 *  Topics are listed in the same order as they appear in the course.
 */

export interface CourseTopic {
  slug: string;
  title: string;
  duration: string;
}

export interface CourseEntry {
  slug: string;
  title: string;
  badge: string;
  themeColor: string;
  topics: CourseTopic[];
}

export const COURSE_TOPICS: CourseEntry[] = [
  {
    slug: 'core-java',
    title: 'Core Java Masterclass',
    badge: 'CORE JAVA',
    themeColor: '#f59e0b',
    topics: [
      { slug: 'arrays',          title: 'Java Arrays',                  duration: '30 min' },
      { slug: 'strings',         title: 'Strings & StringBuilder',       duration: '35 min' },
      { slug: 'oop-classes',     title: 'Classes & Objects',             duration: '40 min' },
      { slug: 'inheritance',     title: 'Inheritance',                   duration: '35 min' },
      { slug: 'polymorphism',    title: 'Polymorphism',                  duration: '30 min' },
      { slug: 'abstraction',     title: 'Abstraction & Interfaces',      duration: '35 min' },
      { slug: 'encapsulation',   title: 'Encapsulation',                 duration: '25 min' },
      { slug: 'exceptions',      title: 'Exception Handling',            duration: '30 min' },
      { slug: 'collections-list',title: 'Collections: List',             duration: '35 min' },
      { slug: 'collections-map', title: 'Collections: Map & Set',        duration: '35 min' },
      { slug: 'generics',        title: 'Generics',                      duration: '30 min' },
      { slug: 'streams',         title: 'Streams API',                   duration: '40 min' },
      { slug: 'lambdas',         title: 'Lambda Expressions',            duration: '30 min' },
      { slug: 'records-sealed',  title: 'Records & Sealed Classes',      duration: '25 min' },
      { slug: 'io-files',        title: 'Java I/O & Files',              duration: '30 min' }
    ]
  },
  {
    slug: 'spring-framework',
    title: 'Spring Framework Deep Dive',
    badge: 'SPRING',
    themeColor: '#10b981',
    topics: [
      { slug: 'spring-ioc',      title: 'IoC Container',                 duration: '35 min' },
      { slug: 'spring-di',       title: 'Dependency Injection',          duration: '40 min' },
      { slug: 'spring-beans',    title: 'Bean Scopes & Lifecycle',       duration: '30 min' },
      { slug: 'spring-aop',      title: 'AOP (Aspect-Oriented)',         duration: '40 min' },
      { slug: 'spring-mvc',      title: 'Spring MVC',                    duration: '45 min' },
      { slug: 'spring-rest',     title: 'RESTful APIs',                  duration: '40 min' },
      { slug: 'spring-data',     title: 'Spring Data Access',            duration: '35 min' },
      { slug: 'spring-security', title: 'Spring Security Basics',        duration: '45 min' },
      { slug: 'spring-config',   title: 'Configuration',                 duration: '30 min' },
      { slug: 'spring-testing',  title: 'Testing Spring Apps',           duration: '35 min' },
      { slug: 'spring-events',   title: 'Events & Listeners',            duration: '25 min' },
      { slug: 'spring-caching',  title: 'Caching',                       duration: '25 min' }
    ]
  },
  {
    slug: 'spring-boot',
    title: 'Spring Boot Mastery',
    badge: 'SPRING BOOT',
    themeColor: '#3b82f6',
    topics: [
      { slug: 'sb-auto-config',  title: 'Auto-Configuration',            duration: '30 min' },
      { slug: 'sb-starters',     title: 'Starters & Dependencies',       duration: '25 min' },
      { slug: 'sb-properties',   title: 'Application Properties',        duration: '30 min' },
      { slug: 'sb-devtools',     title: 'DevTools & Hot Reload',         duration: '20 min' },
      { slug: 'sb-actuator',     title: 'Actuator & Monitoring',         duration: '35 min' },
      { slug: 'sb-logging',      title: 'Logging',                       duration: '25 min' },
      { slug: 'sb-rest-api',     title: 'REST API Development',          duration: '40 min' },
      { slug: 'sb-validation',   title: 'Validation',                    duration: '30 min' },
      { slug: 'sb-exception',    title: 'Exception Handling',            duration: '30 min' },
      { slug: 'sb-data-jpa',     title: 'Spring Data JPA',               duration: '45 min' },
      { slug: 'sb-security',     title: 'Security',                      duration: '45 min' },
      { slug: 'sb-testing',      title: 'Testing',                       duration: '40 min' },
      { slug: 'sb-profiles',     title: 'Profiles & Environments',       duration: '25 min' },
      { slug: 'sb-docker',       title: 'Docker & Containers',           duration: '35 min' },
      { slug: 'sb-caching',      title: 'Caching Strategies',            duration: '30 min' },
      { slug: 'sb-scheduling',   title: 'Scheduling & Async',            duration: '30 min' },
      { slug: 'sb-events',       title: 'Application Events',            duration: '25 min' },
      { slug: 'sb-deploy',       title: 'Deployment',                    duration: '35 min' }
    ]
  },
  {
    slug: 'hibernate',
    title: 'Hibernate & JPA Deep Dive',
    badge: 'HIBERNATE & JPA',
    themeColor: '#f97316',
    topics: [
      { slug: 'hib-orm',          title: 'ORM Fundamentals',             duration: '30 min' },
      { slug: 'hib-entities',     title: 'Entity Mapping',               duration: '35 min' },
      { slug: 'hib-relations',    title: 'Relationships',                duration: '40 min' },
      { slug: 'hib-jpql',         title: 'JPQL & Queries',               duration: '35 min' },
      { slug: 'hib-criteria',     title: 'Criteria API',                 duration: '30 min' },
      { slug: 'hib-caching',      title: 'Caching',                      duration: '30 min' },
      { slug: 'hib-transactions', title: 'Transactions',                 duration: '30 min' },
      { slug: 'hib-performance',  title: 'Performance',                  duration: '35 min' },
      { slug: 'hib-inheritance',  title: 'Inheritance Mapping',          duration: '25 min' },
      { slug: 'hib-auditing',     title: 'Auditing & Envers',            duration: '25 min' }
    ]
  },
  {
    slug: 'microservices',
    title: 'Microservices Architecture',
    badge: 'MICROSERVICES',
    themeColor: '#8b5cf6',
    topics: [
      { slug: 'ms-intro',          title: 'Microservices Intro',         duration: '30 min' },
      { slug: 'ms-discovery',      title: 'Service Discovery',           duration: '35 min' },
      { slug: 'ms-gateway',        title: 'API Gateway',                 duration: '35 min' },
      { slug: 'ms-config',         title: 'Config Server',               duration: '30 min' },
      { slug: 'ms-circuit',        title: 'Circuit Breaker',             duration: '35 min' },
      { slug: 'ms-loadbalance',    title: 'Load Balancing',              duration: '25 min' },
      { slug: 'ms-communication',  title: 'Inter-Service Communication', duration: '35 min' },
      { slug: 'ms-events',         title: 'Event-Driven Architecture',   duration: '40 min' },
      { slug: 'ms-saga',           title: 'Saga Pattern',                duration: '35 min' },
      { slug: 'ms-cqrs',           title: 'CQRS',                        duration: '30 min' },
      { slug: 'ms-tracing',        title: 'Distributed Tracing',         duration: '30 min' },
      { slug: 'ms-docker',         title: 'Containerization',            duration: '35 min' },
      { slug: 'ms-k8s',            title: 'Kubernetes',                  duration: '40 min' },
      { slug: 'ms-security',       title: 'Security',                    duration: '35 min' }
    ]
  },
  {
    slug: 'multithreading',
    title: 'Java Multithreading & Concurrency',
    badge: 'MULTITHREADING',
    themeColor: '#eab308',
    topics: [
      { slug: 'mt-threads',     title: 'Threads & Runnable',             duration: '30 min' },
      { slug: 'mt-sync',        title: 'Synchronization',                duration: '35 min' },
      { slug: 'mt-executors',   title: 'ExecutorService',                duration: '30 min' },
      { slug: 'mt-future',      title: 'CompletableFuture',              duration: '35 min' },
      { slug: 'mt-collections', title: 'Concurrent Collections',         duration: '30 min' },
      { slug: 'mt-locks',       title: 'Locks & Conditions',             duration: '30 min' },
      { slug: 'mt-atomic',      title: 'Atomic Operations',              duration: '25 min' },
      { slug: 'mt-virtual',     title: 'Virtual Threads',                duration: '25 min' }
    ]
  },
  {
    slug: 'design-patterns',
    title: 'Java Design Patterns',
    badge: 'DESIGN PATTERNS',
    themeColor: '#ec4899',
    topics: [
      { slug: 'dp-singleton', title: 'Singleton',                        duration: '25 min' },
      { slug: 'dp-factory',   title: 'Factory Method',                   duration: '30 min' },
      { slug: 'dp-builder',   title: 'Builder',                          duration: '30 min' },
      { slug: 'dp-observer',  title: 'Observer',                         duration: '30 min' },
      { slug: 'dp-strategy',  title: 'Strategy',                         duration: '25 min' },
      { slug: 'dp-decorator', title: 'Decorator',                        duration: '30 min' },
      { slug: 'dp-adapter',   title: 'Adapter',                          duration: '25 min' },
      { slug: 'dp-proxy',     title: 'Proxy',                            duration: '30 min' },
      { slug: 'dp-template',  title: 'Template Method',                  duration: '25 min' },
      { slug: 'dp-command',   title: 'Command',                          duration: '30 min' },
      { slug: 'dp-chain',     title: 'Chain of Responsibility',          duration: '30 min' },
      { slug: 'dp-state',     title: 'State',                            duration: '30 min' }
    ]
  }
];
