import { Question } from './question.model';

export const MICROSERVICES_QUESTIONS: Question[] = [
  {
    id: 10,
    category: 'Microservices',
    question: 'What is Service Discovery?',
    answer: 'It is a mechanism for services to locate each other dynamically in a distributed system (e.g., using Eureka or Consul).',
    asked_metadata: '9x Amazon, 7x Netflix, 4x Intuit',
    coreConceptDescription: 'Service Discovery enables dynamic location of services in a distributed system. Client-side (Eureka) or server-side (Consul, Kubernetes DNS) discovery eliminates hardcoded URLs.',
    subConcepts: [
      { title: 'Client-Side (Eureka)', description: 'Services <b>register themselves</b> with a registry. Clients query the registry and <b>load-balance locally</b>.' },
      { title: 'Server-Side (K8s DNS)', description: 'Kubernetes provides <b>built-in DNS</b>. Services are discovered by name (e.g., http://user-service:8080).' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'Dynamic Scaling', description: 'New service instances register automatically. Clients discover them without config changes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Cloud Native', description: 'Kubernetes services provide built-in service discovery — Eureka is often unnecessary in K8s.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
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
}`,
    coreConceptDescription: 'Circuit Breaker prevents cascading failures by stopping calls to a failing service. Three states: CLOSED (normal), OPEN (fast-fail), HALF-OPEN (test recovery). Resilience4j is the modern implementation.',
    subConcepts: [
      { title: 'Three States', description: '<b>CLOSED</b>: normal flow. <b>OPEN</b>: fast-fail, return fallback. <b>HALF-OPEN</b>: allow test requests to check recovery.' },
      { title: 'Resilience4j', description: 'Modern replacement for Hystrix. <b>@CircuitBreaker</b> annotation with configurable thresholds and fallbacks.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Cascading Failure Prevention', description: 'If payment service is down, circuit breaker prevents order service from piling up failed requests.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Fail Fast', description: 'Instead of waiting 30s for timeout, return fallback response in milliseconds when circuit is OPEN.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 17,
    category: 'Microservices',
    question: 'What is API Gateway?',
    answer: 'It acts as a single entry point for all clients, routing requests to appropriate microservices and handling cross-cutting concerns.',
    asked_metadata: '8x Netflix, 6x Amazon, 4x Uber',
    coreConceptDescription: 'API Gateway is the single entry point for all client requests. It handles routing, authentication, rate limiting, SSL termination, and response aggregation. Examples: Spring Cloud Gateway, Kong, AWS API Gateway.',
    subConcepts: [
      { title: 'Cross-Cutting Concerns', description: 'Handles <b>auth, rate limiting, logging, CORS, SSL</b> in one place instead of every microservice.' },
      { title: 'Request Routing', description: 'Routes requests to appropriate <b>backend services</b> based on URL paths, headers, or parameters.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Security', description: 'Centralized JWT validation, API key management, and OAuth2 token exchange.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gauge-high', title: 'Rate Limiting', description: 'Protect backend services from abuse with configurable rate limits per client/API.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 41,
    category: 'Microservices',
    question: 'What is a "Dumb Pipe" in Microservices?',
    answer: 'A communication mechanism (like RabbitMQ) that simply routes messages without applying complex logic or transformations (smart endpoints, dumb pipes).',
    asked_metadata: '4x Netflix, 3x Spotify, 2x Airbnb',
    coreConceptDescription: 'Smart endpoints, dumb pipes: business logic lives in services (smart endpoints), while communication channels (pipes like HTTP, RabbitMQ) simply transport messages without transformation.',
    subConcepts: [
      { title: 'Smart Endpoints', description: 'Business logic is in <b>services</b>, not in the messaging infrastructure. Each service processes messages independently.' },
      { title: 'Dumb Pipes', description: '<b>HTTP, RabbitMQ, Kafka</b> simply route messages. No ESB-style transformations or orchestration in the middleware.' }
    ],
    useCases: [
      { icon: 'fa-puzzle-piece', title: 'Decoupled Design', description: 'Services own their logic. Communication infrastructure is simple and replaceable.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'vs ESB', description: 'Opposite of Enterprise Service Bus (ESB), which puts logic in the middleware.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 42,
    category: 'Microservices',
    question: 'What is a Bounded Context?',
    answer: 'A central pattern in Domain-Driven Design (DDD) that defines the logical boundary of a domain model within a larger system.',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Google',
    coreConceptDescription: 'Bounded Context defines the boundary within which a domain model applies. Each microservice typically represents one bounded context with its own data model, ubiquitous language, and database.',
    subConcepts: [
      { title: 'Domain Boundary', description: 'Each bounded context has its own <b>ubiquitous language</b>. "User" may mean different things in Auth vs Billing contexts.' },
      { title: 'Database per Service', description: 'Each bounded context owns its <b>data store</b>. No shared database across services.' }
    ],
    useCases: [
      { icon: 'fa-sitemap', title: 'Service Decomposition', description: 'Use bounded contexts to identify natural service boundaries in a monolith.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-layer-group', title: 'Context Mapping', description: 'Define how bounded contexts communicate: Shared Kernel, Anti-Corruption Layer, or Open Host Service.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 43,
    category: 'Microservices',
    question: 'How do you manage distributed transactions?',
    answer: 'Using patterns like SAGA (sequence of local transactions) or Two-Phase Commit (2PC), though SAGA is preferred for microservices.',
    asked_metadata: '7x Uber, 5x Airbnb, 4x Expedia',
    coreConceptDescription: 'Distributed transactions across microservices use SAGA (choreography or orchestration) pattern. Each service performs a local transaction and publishes events/commands for the next step. Compensating actions handle failures.',
    subConcepts: [
      { title: 'Choreography SAGA', description: 'Services <b>publish events</b>. Other services react. No central coordinator. Simpler but harder to track.' },
      { title: 'Orchestration SAGA', description: 'A <b>central orchestrator</b> tells each service what to do. Easier to manage but single point of failure.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Compensating Actions', description: 'If payment fails, SAGA triggers order cancellation and inventory rollback.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-code', title: 'Frameworks', description: 'Axon Framework, Eventuate, or manual Kafka/RabbitMQ event-driven sagas.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ],
  },
  {
    id: 44,
    category: 'Microservices',
    question: 'What is a Service Mesh?',
    answer: 'A dedicated infrastructure layer for handling service-to-service communication, providing observability, security, and reliability (e.g., Istio, Linkerd).',
    asked_metadata: '6x Google, 5x Lyft, 4x Uber',
    coreConceptDescription: 'Service Mesh (Istio, Linkerd) deploys sidecar proxies alongside each service to handle mTLS, traffic management, retries, circuit breaking, and observability — without changing app code.',
    subConcepts: [
      { title: 'Data Plane', description: '<b>Sidecar proxies</b> (Envoy) handle all network traffic between services. Transparent to the application.' },
      { title: 'Control Plane', description: '<b>Istio/Linkerd</b> configures and manages all sidecar proxies. Central policy and telemetry management.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Zero-Trust Security', description: 'Mutual TLS (mTLS) between all services — encrypted and authenticated automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Observability', description: 'Automatic metrics, distributed tracing, and access logging without code changes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 46,
    category: 'Microservices',
    question: 'What is CQRS?',
    answer: 'Command Query Responsibility Segregation. It separates the models for reading data (Query) and updating data (Command).',
    asked_metadata: '6x Meta, 5x LinkedIn, 4x Twitter',
    coreConceptDescription: 'CQRS separates read and write models. Commands modify state (write DB). Queries read state (read-optimized DB). Often combined with Event Sourcing for full audit trail.',
    subConcepts: [
      { title: 'Command Side', description: '<b>Writes</b> go to a normalized database optimized for consistency and validation.' },
      { title: 'Query Side', description: '<b>Reads</b> go to a denormalized, read-optimized store (e.g., materialized views, Elasticsearch).' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Read-Heavy Systems', description: 'Separate read replicas optimized for queries while write DB handles complex business rules.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-clock', title: 'Event Sourcing', description: 'CQRS + Event Sourcing: store events as source of truth, rebuild read models from event log.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 71,
    category: 'Microservices',
    question: 'What are Microservices?',
    answer: 'An architectural style that structures an application as a collection of small, independent services that communicate over a network (usually HTTP/REST or gRPC).',
    asked_metadata: '10x Amazon, 9x Netflix, 8x Google',
    coreConceptDescription: 'Microservices architecture decomposes an application into small, independently deployable services. Each service owns its data, runs in its own process, and communicates via lightweight protocols (REST, gRPC, messaging).',
    subConcepts: [
      { title: 'Key Characteristics', description: '<b>Single responsibility</b>, independent deployment, own database, lightweight communication, and team autonomy.' },
      { title: 'vs Monolith', description: 'Monolith: one deployable unit. Microservices: <b>many independently deployable services</b> with separate lifecycles.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Independent Scaling', description: 'Scale payment service to 10 instances while user service needs only 2.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-users', title: 'Team Ownership', description: 'Each team owns one or more services end-to-end: development, deployment, and monitoring.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 72,
    category: 'Microservices',
    question: 'What are the key benefits of Microservices?',
    answer: 'Independent Development & Deployment, Scalability, Technology Diversity, and Resilience (failure of one service doesn’t bring down the entire application).',
    asked_metadata: '8x Amazon, 7x Uber, 6x Airbnb',
    coreConceptDescription: 'Benefits: Independent deployment, technology diversity (polyglot), horizontal scaling per service, fault isolation, team autonomy, and faster time-to-market for individual features.',
    subConcepts: [
      { title: 'Agility', description: '<b>Independent deployment</b> cycles. Teams release features without coordinating with every other team.' },
      { title: 'Resilience', description: '<b>Failure isolation</b>. If payment service fails, user service continues to function.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Technology Diversity', description: 'User service in Java, ML service in Python, real-time service in Go — best tool for each job.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Independent Deployment', description: 'Deploy order-service 10 times/day without touching any other service.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 73,
    category: 'Microservices',
    question: 'Microservices vs Monolithic Architecture?',
    answer: 'Monolithic: Single codebase, tightly coupled, hard to scale. Microservices: Multiple small services, loosely coupled, easier to scale and maintain.',
    asked_metadata: '7x Google, 6x Microsoft, 5x Amazon',
    coreConceptDescription: 'Monolith: single deployable, shared DB, tight coupling. Microservices: multiple independent services, own DBs, loose coupling. Monolith is simpler to start; microservices scale better organizationally.',
    subConcepts: [
      { title: 'Monolithic', description: '<b>Single codebase and deployment</b>. Simple to develop/test initially. Becomes unmanageable as it grows.' },
      { title: 'Microservices', description: '<b>Distributed services</b>. Complex infrastructure but better scaling, team autonomy, and fault isolation.' }
    ],
    useCases: [
      { icon: 'fa-rocket', title: 'Start Monolith', description: 'Start with a monolith for MVPs. Decompose into microservices when team/scale demands it.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Distributed Complexity', description: 'Microservices add network latency, data consistency, and operational overhead.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 74,
    category: 'Microservices',
    question: 'How do Microservices communicate?',
    answer: 'Synchronous: HTTP/REST, gRPC. Asynchronous: Message Queues (Kafka, RabbitMQ).',
    asked_metadata: '8x Netflix, 7x Confluent, 6x Uber',
    coreConceptDescription: 'Synchronous (REST, gRPC): request-response, simpler, tighter coupling. Asynchronous (Kafka, RabbitMQ): event-driven, loose coupling, better resilience. Choose based on use case.',
    subConcepts: [
      { title: 'Synchronous', description: '<b>REST/gRPC</b>: Direct call, waits for response. Simple but creates runtime dependency between services.' },
      { title: 'Asynchronous', description: '<b>Kafka/RabbitMQ</b>: Event-driven, no waiting. Better resilience and decoupling but eventual consistency.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'REST for Queries', description: 'Use synchronous REST for real-time queries where immediate response is required.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-paper-plane', title: 'Kafka for Events', description: 'Use async messaging for commands and events where eventual consistency is acceptable.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 75,
    category: 'Microservices',
    question: 'What is Distributed Tracing?',
    answer: 'Tracking requests as they flow through multiple microservices to identify bottlenecks and errors. Tools: Zipkin, Jaeger.',
    asked_metadata: '6x Uber, 5x Skyryse, 4x ByteDance',
    coreConceptDescription: 'Distributed tracing assigns a unique Trace ID to each request and propagates it across all services. Each service creates a Span with timing data. Tools: Micrometer Tracing, Zipkin, Jaeger.',
    subConcepts: [
      { title: 'Trace & Span', description: '<b>Trace</b>: end-to-end request journey. <b>Span</b>: a single operation within a trace (one service call).' },
      { title: 'Tools', description: '<b>Micrometer Tracing</b> (Spring Boot 3), <b>Zipkin</b> (visualization), <b>Jaeger</b> (Uber\'s tracer).' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'Latency Debugging', description: 'Identify which service in a chain of 10 is causing the 2-second delay.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Service Dependencies', description: 'Visualize service dependency graphs and identify critical paths.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 76,
    category: 'Microservices',
    question: 'What is Containerization (Docker)?',
    answer: 'Packaging an application and its dependencies into a container that can run anywhere. Docker is a popular containerization tool.',
    asked_metadata: '9x Amazon, 8x Google, 7x Microsoft',
    coreConceptDescription: 'Docker packages applications into lightweight, portable containers with all dependencies. Containers share the host OS kernel, making them faster and smaller than VMs.',
    subConcepts: [
      { title: 'Container vs VM', description: 'Containers share <b>host kernel</b> (faster, lighter). VMs have <b>full OS</b> (heavier, more isolated).' },
      { title: 'Dockerfile', description: 'Defines the <b>build steps</b>: base image, copy code, install deps, set entrypoint. Multi-stage builds reduce image size.' }
    ],
    useCases: [
      { icon: 'fa-cube', title: 'Consistent Environments', description: '"Works on my machine" solved — same container runs everywhere: dev, CI, staging, production.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Fast Startup', description: 'Containers start in seconds vs minutes for VMs. Ideal for auto-scaling.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 77,
    category: 'Microservices',
    question: 'What is Orchestration (Kubernetes)?',
    answer: 'Managing and coordinating containers (deployment, scaling, networking). Kubernetes is the leading orchestration platform.',
    asked_metadata: '8x Google, 7x Amazon, 6x RedHat',
    coreConceptDescription: 'Kubernetes (K8s) automates container deployment, scaling, and management. It handles service discovery, load balancing, rolling updates, self-healing, and secrets management.',
    subConcepts: [
      { title: 'Core Resources', description: '<b>Pod</b> (smallest unit), <b>Deployment</b> (manages replicas), <b>Service</b> (networking), <b>Ingress</b> (external access).' },
      { title: 'Self-Healing', description: 'K8s <b>automatically replaces</b> failed pods, reschedules, and scales based on CPU/memory metrics.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Rolling Updates', description: 'Zero-downtime deployments: K8s gradually replaces old pods with new ones.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Auto-Scaling', description: 'HPA (Horizontal Pod Autoscaler) scales pods based on CPU, memory, or custom metrics.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 78,
    category: 'Microservices',
    question: 'What is Spring Boot in Microservices?',
    answer: 'A framework that simplifies the development of Spring-based microservices with auto-configuration and embedded servers.',
    asked_metadata: '7x Accenture, 6x TCS, 5x Amazon',
    coreConceptDescription: 'Spring Boot with embedded servers, auto-configuration, and starters is the de facto Java framework for building microservices. Combined with Spring Cloud, it provides a complete microservices toolkit.',
    subConcepts: [
      { title: 'Microservice-Ready', description: '<b>Embedded Tomcat</b>, fat JARs, and actuator health endpoints make Spring Boot ideal for containerized microservices.' },
      { title: 'Spring Cloud', description: '<b>Config Server, Gateway, Circuit Breaker, Service Discovery</b> — all built on Spring Boot.' }
    ],
    useCases: [
      { icon: 'fa-cubes', title: 'Full Stack', description: 'Spring Boot + Cloud + Docker + Kubernetes = complete microservices platform.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-heart-pulse', title: 'Health Probes', description: 'Actuator endpoints (/health) integrate directly with Kubernetes liveness/readiness probes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 79,
    category: 'Microservices',
    question: 'What is Spring Cloud?',
    answer: 'A set of tools for building common patterns in distributed systems (service discovery, configuration, circuit breakers) with Spring Boot.',
    asked_metadata: '8x Amazon, 7x Netflix, 6x Pivotal',
    coreConceptDescription: 'Spring Cloud provides tools for common distributed system patterns: Config Server (centralized config), Gateway (API routing), Eureka (service discovery), and Resilience4j (circuit breaker).',
    subConcepts: [
      { title: 'Core Components', description: '<b>Config Server</b>, <b>API Gateway</b>, <b>Eureka</b>, <b>OpenFeign</b>, <b>Resilience4j</b>, <b>Stream</b> (messaging).' },
      { title: 'Cloud-Native Patterns', description: 'Implements <b>12-factor app</b> principles: externalized config, stateless processes, disposability.' }
    ],
    useCases: [
      { icon: 'fa-cloud', title: 'Complete Platform', description: 'Spring Cloud + Boot gives you service discovery, config, routing, and resilience out of the box.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-plug', title: 'Kubernetes Native', description: 'Spring Cloud Kubernetes replaces Eureka with native K8s service discovery.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 80,
    category: 'Microservices',
    question: 'What is Idempotency?',
    answer: 'An operation is idempotent if it can be called multiple times with the same input and produce the same result without side effects.',
    asked_metadata: '7x Stripe, 6x PayPal, 5x Square',
    coreConceptDescription: 'An idempotent operation produces the same result regardless of how many times it is executed. HTTP GET, PUT, DELETE are idempotent. POST is not. Critical for retries and at-least-once delivery.',
    subConcepts: [
      { title: 'HTTP Idempotency', description: '<b>GET, PUT, DELETE</b> are idempotent by design. <b>POST</b> is not — multiple calls may create duplicates.' },
      { title: 'Idempotency Key', description: 'Use a unique <b>Idempotency-Key header</b> for POST requests to detect and prevent duplicate processing.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Payment Processing', description: 'Stripe uses Idempotency-Key to prevent duplicate charges when retrying failed requests.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Retry Safety', description: 'Idempotent APIs are safe to retry automatically — essential for distributed systems.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 81,
    category: 'Microservices',
    question: 'What is a Saga Pattern?',
    answer: 'A way to manage distributed transactions across multiple microservices using a sequence of local transactions.',
    asked_metadata: '8x Uber, 7x Amazon, 6x Airbnb',
    coreConceptDescription: 'SAGA manages distributed transactions as a sequence of local transactions. Each step has a compensating action for rollback. Choreography (event-based) or Orchestration (command-based) approaches.',
    subConcepts: [
      { title: 'Choreography', description: 'Services <b>emit events</b>. Others listen and react. Decentralized but harder to debug complex flows.' },
      { title: 'Orchestration', description: 'A <b>central saga coordinator</b> directs the sequence. Easier to understand but adds a coordination point.' }
    ],
    useCases: [
      { icon: 'fa-cart-shopping', title: 'E-Commerce Order', description: 'Order → Payment → Inventory → Shipping. Each step is a local transaction with compensating rollback.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Compensation', description: 'If shipping fails, compensating actions reverse payment and restore inventory.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 82,
    category: 'Microservices',
    question: 'What is Eventual Consistency?',
    answer: 'A consistency model where data eventually becomes consistent across services, but not immediately after an update.',
    asked_metadata: '6x Amazon, 5x Google, 4x Meta',
    coreConceptDescription: 'Eventual consistency means data across services will become consistent over time, not immediately. This is the trade-off for availability and partition tolerance in distributed systems (CAP theorem).',
    subConcepts: [
      { title: 'CAP Theorem', description: 'Choose 2 of 3: <b>Consistency, Availability, Partition Tolerance</b>. Microservices usually choose AP (eventual consistency).' },
      { title: 'BASE vs ACID', description: '<b>BASE</b>: Basically Available, Soft state, Eventually consistent. Opposite of ACID in distributed systems.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Distributed Data', description: 'Order service confirms order immediately. Inventory service updates asynchronously via events.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-clock', title: 'Consistency Window', description: 'Data may be inconsistent for milliseconds to seconds. Acceptable for most business scenarios.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 83,
    category: 'Microservices',
    question: 'What is Blue-Green Deployment?',
    answer: 'Running two identical environments (Blue and Green). New version is deployed to Green, tested, then traffic is switched from Blue to Green.',
    asked_metadata: '5x Netflix, 4x Amazon, 3x Google',
    coreConceptDescription: 'Blue-Green deployment runs two identical environments. Blue (current) serves traffic while Green (new version) is deployed and tested. Traffic is switched instantly via load balancer.',
    subConcepts: [
      { title: 'Zero Downtime', description: 'Switch traffic from Blue to Green <b>instantly</b> via load balancer. Roll back by switching back to Blue.' },
      { title: 'vs Canary', description: 'Blue-Green: <b>all-or-nothing switch</b>. Canary: <b>gradual rollout</b> to a subset of users.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Instant Rollback', description: 'If Green has issues, immediately route traffic back to Blue — zero-downtime rollback.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-cloud', title: 'Cloud Deployment', description: 'AWS Elastic Beanstalk, Kubernetes, and ECS support blue-green deployments natively.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 84,
    category: 'Microservices',
    question: 'What is Canary Releasing?',
    answer: 'Gradually rolling out a new version to a small subset of users before full deployment.',
    asked_metadata: '6x Netflix, 5x Meta, 4x Uber',
    coreConceptDescription: 'Canary release deploys a new version to a small percentage of users (e.g., 5%), monitors metrics, and gradually increases traffic. Allows early detection of issues before full rollout.',
    subConcepts: [
      { title: 'Gradual Rollout', description: 'Start with <b>5% of traffic</b> to the new version. Monitor errors/latency. Gradually increase to 100%.' },
      { title: 'Automated Canary', description: 'Tools like <b>Flagger</b> and <b>Argo Rollouts</b> automate canary analysis and traffic shifting.' }
    ],
    useCases: [
      { icon: 'fa-chart-line', title: 'Risk Reduction', description: 'Detect bugs affecting only 5% of users instead of 100%. Automatic rollback on high error rate.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'A/B Testing', description: 'Route specific users to new version for feature testing and user experience comparison.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 85,
    category: 'Microservices',
    question: 'How do you secure Microservices?',
    answer: 'OAuth 2.0 / OpenID Connect for authentication/authorization. API Gateway for security enforcement. Mutual TLS (mTLS) for service-to-service communication.',
    asked_metadata: '7x Wiz, 6x Okta, 5x Salesforce',
    coreConceptDescription: 'Multi-layered security: API Gateway for edge security (JWT validation, rate limiting), OAuth2/OIDC for auth, mTLS for service-to-service encryption, and network policies for isolation.',
    subConcepts: [
      { title: 'Edge Security', description: '<b>API Gateway</b> handles JWT validation, rate limiting, CORS, and SSL termination.' },
      { title: 'Service-to-Service', description: '<b>Mutual TLS (mTLS)</b> encrypts and authenticates all internal communication automatically.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'Zero Trust', description: 'Every service verifies every request — no implicit trust based on network location.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-key', title: 'Token Propagation', description: 'Forward JWT tokens between services for user context while validating at each hop.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 86,
    category: 'Microservices',
    question: 'What is Configuration Management?',
    answer: 'Managing configuration externally (e.g., Spring Cloud Config, Consul) so services can be updated without redeployment.',
    asked_metadata: '6x Amazon, 5x HashiCorp, 4x Netflix',
    coreConceptDescription: 'Externalize configuration from code. Spring Cloud Config Server serves props from Git. Consul/Vault for dynamic config and secrets. Change config without rebuilding or redeploying.',
    subConcepts: [
      { title: 'Spring Cloud Config', description: '<b>Config Server</b> serves properties from Git repo. Services fetch config at startup and can refresh via /actuator/refresh.' },
      { title: 'Vault', description: '<b>HashiCorp Vault</b> manages secrets, database credentials, and API keys securely with rotation support.' }
    ],
    useCases: [
      { icon: 'fa-gear', title: 'Environment Config', description: 'Same container image with different config per environment — true 12-factor app compliance.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-key', title: 'Secrets Management', description: 'Database passwords, API keys stored in Vault — not in application.yml or environment variables.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 87,
    category: 'Microservices',
    question: 'How do you handle logging in Microservices?',
    answer: 'Centralized logging using ELK stack (Elasticsearch, Logstash, Kibana). Correlation IDs for tracing across services.',
    asked_metadata: '5x Splunk, 4x Elastic, 3x Datadog',
    coreConceptDescription: 'Centralized logging aggregates logs from all services into one place. Use ELK (Elasticsearch, Logstash, Kibana) or Loki/Grafana. Add Correlation IDs to trace requests across services.',
    subConcepts: [
      { title: 'ELK Stack', description: '<b>Elasticsearch</b> (search/store), <b>Logstash</b> (ingest/transform), <b>Kibana</b> (visualize). The standard logging platform.' },
      { title: 'Correlation IDs', description: 'Assign a <b>unique request ID</b> at the gateway, propagate through all services via headers for request tracing.' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'Debugging', description: 'Search logs across all services by Correlation ID to trace a single request\'s journey.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Monitoring', description: 'Kibana dashboards for error rates, latency percentiles, and service health visualization.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 88,
    category: 'Microservices',
    question: 'What is DDD (Domain-Driven Design) in Microservices?',
    answer: 'A design approach that breaks services based on business domains (e.g., Order Service, Payment Service, Inventory Service).',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Atlassian',
    coreConceptDescription: 'DDD aligns software design with business domains. Each microservice maps to a Bounded Context with its own ubiquitous language, data model, and team ownership. Aggregate roots ensure consistency.',
    subConcepts: [
      { title: 'Bounded Context', description: 'Each domain has a <b>clear boundary</b>. "Product" in Catalog vs "Product" in Shipping may differ.' },
      { title: 'Aggregates', description: '<b>Aggregate Root</b> ensures transactional consistency within a bounded context. Order → OrderItems.' }
    ],
    useCases: [
      { icon: 'fa-sitemap', title: 'Service Boundaries', description: 'DDD bounded contexts naturally map to microservice boundaries and team ownership.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-users', title: 'Team Alignment', description: 'Conway\'s Law: team structure mirrors system architecture. DDD + microservices enables this.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 89,
    category: 'Microservices',
    question: 'How do you test Microservices?',
    answer: 'Unit Tests (JUnit/TestNG), Contract Testing (Pact), Integration Tests, and End-to-End Tests.',
    asked_metadata: '5x Amazon, 4x Google, 3x Microsoft',
    coreConceptDescription: 'Test pyramid for microservices: Unit tests (fast, isolated), Integration tests (external dependencies), Contract tests (Pact — API compatibility), and E2E tests (full system, slowest).',
    subConcepts: [
      { title: 'Contract Testing', description: '<b>Pact/Spring Cloud Contract</b> verifies API compatibility between producer and consumer independently.' },
      { title: 'Test Pyramid', description: '<b>Unit (many)</b> → Integration (moderate) → Contract (critical) → E2E (few). Maximize unit tests.' }
    ],
    useCases: [
      { icon: 'fa-vial', title: 'Consumer-Driven', description: 'Consumer writes a contract (expected API). Producer verifies against it. No integration env needed.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: '@DataJpaTest', description: 'Spring Boot slices for focused testing: @WebMvcTest, @DataJpaTest, @SpringBootTest.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 90,
    category: 'Microservices',
    question: 'What is Sidecar Pattern in Microservices?',
    answer: 'Sidecar Pattern runs auxiliary tasks (logging, monitoring, proxying) in a separate container alongside the main service container.',
    asked_metadata: '7x Google, 6x Istio/Envoy, 5x Microsoft',
    coreConceptDescription: 'Sidecar runs a helper container alongside the main app container in the same pod. It handles cross-cutting concerns: logging, monitoring, proxying, and security — without modifying app code.',
    subConcepts: [
      { title: 'Co-located Container', description: 'Runs in the <b>same pod</b> as the app. Shares network namespace. Transparent to the application.' },
      { title: 'Envoy Proxy', description: '<b>Envoy</b> is the most common sidecar. Handles mTLS, load balancing, retries, and observability.' }
    ],
    useCases: [
      { icon: 'fa-cube', title: 'Service Mesh', description: 'Istio deploys Envoy as a sidecar to every pod — automatic mTLS, traffic management, and telemetry.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-file-lines', title: 'Log Collection', description: 'Fluentd sidecar collects app logs and forwards to centralized logging (ELK, Loki).', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 91,
    category: 'Microservices',
    question: 'Real-world examples of Microservices?',
    answer: 'Netflix (Video streaming), Amazon (E-commerce), Uber (Ride-sharing).',
    asked_metadata: '5x Netflix, 4x Amazon, 3x Uber',
    coreConceptDescription: 'Netflix: 700+ microservices, Spring Boot, Zuul, Eureka. Amazon: thousands of services, team ownership. Uber: domain-oriented microservices architecture (DOMA).',
    subConcepts: [
      { title: 'Netflix', description: '<b>700+ microservices</b>. Created Zuul (API Gateway), Eureka (Discovery), Hystrix (Circuit Breaker).' },
      { title: 'Amazon', description: '<b>Two-pizza teams</b> own services end-to-end. AWS grew from Amazon\'s internal microservices needs.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Scale Proof', description: 'Netflix handles 200M+ subscribers. Amazon processes millions of orders. Microservices enable this scale.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-users', title: 'Team Autonomy', description: 'Each team independently develops, deploys, and monitors their services.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 151,
    category: 'Microservices',
    question: 'How do you migrate a monolithic Java application to microservices?',
    answer: 'Identify bounded contexts, extract APIs, incrementally deploy services (Strangler Fig pattern), and manage data consistency (Sagas).',
    asked_metadata: '6x Deloitte, 5x Accenture, 4x IBM',
    coreConceptDescription: 'Use the Strangler Fig pattern: incrementally extract services from the monolith while keeping it running. Identify bounded contexts, create APIs, route traffic gradually, and manage data consistency.',
    subConcepts: [
      { title: 'Strangler Fig', description: '<b>Gradually replace</b> monolith functionality with microservices. Route new traffic to services while old code remains.' },
      { title: 'Anti-Corruption Layer', description: '<b>Adapter between old and new</b>. Translates monolith data models to microservice models during migration.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Incremental Migration', description: 'Extract one bounded context at a time. Auth service first, then Orders, then Payments.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Database Split', description: 'Start with shared database, then gradually split into service-owned databases.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 158,
    category: 'Microservices',
    question: 'How do you design a scalable, high-availability Java service?',
    answer: 'Stateless design (horizontal scaling), load balancing, health checks, circuit breakers (Resilience4j), and auto-scaling groups.',
    asked_metadata: '8x Netflix, 7x Amazon, 6x Uber',
    coreConceptDescription: 'Design for horizontal scaling: stateless services, external session storage (Redis), load balancing, health checks, circuit breakers (Resilience4j), and auto-scaling based on metrics.',
    subConcepts: [
      { title: 'Stateless Design', description: '<b>No server-side session state</b>. Use JWT tokens and external stores (Redis) for state. Enables horizontal scaling.' },
      { title: 'Resilience Patterns', description: '<b>Circuit Breaker</b> (Resilience4j), <b>Retry</b> with backoff, <b>Bulkhead</b> for isolation, <b>Timeout</b> for fast failure.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'Auto-Scaling', description: 'Kubernetes HPA scales pods based on CPU/memory/custom metrics automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-heart-pulse', title: 'Health Checks', description: 'Liveness (restart unhealthy) and readiness (stop routing traffic) probes for self-healing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 172,
    category: 'Microservices',
    question: 'What is Distributed Tracing and why is it needed?',
    answer: 'It tracks requests across service boundaries using a unique Trace ID. Essential for debugging latency and failures in complex microservices architectures. Tools: Micrometer Tracing, Zipkin.',
    asked_metadata: '4x Netflix, 3x Amazon',
    coreConceptDescription: 'Distributed tracing tracks requests across service boundaries. Each request gets a Trace ID propagated via headers. Each service creates Spans. Visualize call chains in Zipkin/Jaeger.',
    subConcepts: [
      { title: 'Micrometer Tracing', description: 'Spring Boot 3\'s tracing library. Replaces Spring Cloud Sleuth. <b>Auto-injects Trace ID into logs and headers</b>.' },
      { title: 'Zipkin/Jaeger', description: '<b>Visualization tools</b>. Show request flow, latency per service, and dependency graphs.' }
    ],
    useCases: [
      { icon: 'fa-magnifying-glass', title: 'Latency Analysis', description: 'Identify which of 15 services in a call chain is causing the 3-second response time.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bug', title: 'Error Tracking', description: 'Follow a failed request through all services to find exactly where the error originated.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 177,
    category: 'Microservices',
    question: 'What is the Sidecar Pattern and how does it relate to Service Mesh?',
    answer: 'A Sidecar is a container that runs alongside your app container (e.g., Envoy). A Service Mesh (like Istio) is the control plane that manages these sidecars to provide security, traffic control, and observability without changing app code.',
    asked_metadata: '5x Google, 4x Uber',
    coreConceptDescription: 'Sidecar: helper container alongside your app (e.g., Envoy proxy). Service Mesh (Istio): control plane that manages all sidecars network-wide. Sidecar is the data plane; mesh is the control plane.',
    subConcepts: [
      { title: 'Sidecar (Data Plane)', description: '<b>Per-service proxy</b>. Handles traffic routing, mTLS, retries, and metrics collection.' },
      { title: 'Service Mesh (Control Plane)', description: '<b>Centralized management</b> of all sidecars. Policies, traffic rules, and certificate management.' }
    ],
    useCases: [
      { icon: 'fa-cube', title: 'Istio', description: 'Control plane (Istiod) + Data plane (Envoy sidecars) = complete service mesh for Kubernetes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'No Code Changes', description: 'Sidecar intercepts all traffic transparently. Your app doesn\'t know it\'s in a mesh.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 185,
    category: 'Microservices',
    question: 'What is the Bulkhead Pattern?',
    answer: 'It isolates elements of an application into pools so that if one fails, the others will continue to function. Named after the sections of a ship’s hull. Prevents a single failure from cascading across the entire system.',
    asked_metadata: '5x Netflix, 3x Airbnb',
    coreConceptDescription: 'Bulkhead isolates components into separate pools (threads, connections) so that failure in one doesn\'t cascade. Named after ship hull compartments. Implemented via Resilience4j\'s Bulkhead decorator.',
    subConcepts: [
      { title: 'Thread Pool Bulkhead', description: 'Each service call gets its <b>own thread pool</b>. If pool is exhausted, calls to that service fail without affecting others.' },
      { title: 'Semaphore Bulkhead', description: '<b>Limits concurrent calls</b> to a service. Lighter than thread pool but no timeout control.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Failure Isolation', description: 'Slow payment service exhausts its pool but user service continues working normally.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Resilience4j', description: '@Bulkhead(name="paymentService", type=Bulkhead.Type.THREADPOOL) on service methods.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 198,
    category: 'Microservices',
    question: 'Difference between API Gateway and Service Mesh?',
    answer: 'API Gateway handles North-South traffic (Client to Services), focusing on routing, auth, and rate limiting. Service Mesh handles East-West traffic (Service to Service), focusing on observability, security (mTLS), and reliability (Sidecar).',
    asked_metadata: '5x AWS, 3x Google',
    coreConceptDescription: 'API Gateway handles North-South traffic (external clients to services) with auth, routing, rate limiting. Service Mesh handles East-West traffic (service-to-service) with mTLS, retries, and observability.',
    subConcepts: [
      { title: 'API Gateway (N-S)', description: '<b>Client-facing</b>. Handles auth, routing, rate limiting, SSL termination. Examples: Kong, AWS API Gateway.' },
      { title: 'Service Mesh (E-W)', description: '<b>Service-to-service</b>. Handles mTLS, retries, circuit breaking, observability. Examples: Istio, Linkerd.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Complementary', description: 'Use both: API Gateway for external clients, Service Mesh for internal service communication.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Zero Trust', description: 'API Gateway validates external tokens. Service Mesh enforces mTLS between all internal services.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  }
];
