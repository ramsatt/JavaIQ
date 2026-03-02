import { Question } from './question.model';

export const SPRING_REACTIVE_QUESTIONS: Question[] = [
  {
    id: 8,
    category: 'Spring Reactive',
    question: 'What is the difference between Mono and Flux?',
    answer: 'Mono represents a stream of 0 or 1 element. Flux represents a stream of 0 to N elements.',
    asked_metadata: '7x Netflix, 5x Citi, 4x Zoom',
    coreConceptDescription: 'Mono<T> represents 0 or 1 element (like Optional but reactive). Flux<T> represents 0 to N elements (like a reactive List). Both are Publishers from the Reactive Streams spec.',
    code: `// Mono: 0 or 1 element
Mono<String> mono = Mono.just("Hello");

// Flux: 0 to N elements
Flux<String> flux = Flux.just("A", "B", "C");`,
    subConcepts: [
      { title: 'Mono<T>', description: 'For <b>single-value</b> results: GET by ID, save operation, remote call returning one object.' },
      { title: 'Flux<T>', description: 'For <b>multiple-value</b> results: list queries, event streams, real-time data feeds.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Repository Pattern', description: 'Mono<User> findById(Long id) and Flux<User> findAll() — reactive Spring Data.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-stream', title: 'Streaming Responses', description: 'Flux enables Server-Sent Events (SSE) — stream data to clients as it arrives.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 9,
    category: 'Spring Reactive',
    question: 'What is Backpressure in Reactive Streams?',
    answer: 'It is a mechanism that allows a consumer to signal to the producer how much data it can handle, preventing it from being overwhelmed.',
    asked_metadata: '6x Netflix, 4x Citi, 3x Disney',
    coreConceptDescription: 'Backpressure is defined in the Reactive Streams spec via Subscription.request(n). It prevents fast producers from overwhelming slow consumers. Strategies: BUFFER, DROP, LATEST, ERROR.',
    subConcepts: [
      { title: 'request(n)', description: 'Subscriber tells Publisher: <b>send me n items</b>. Publisher must not exceed this. This is the backpressure signal.' },
      { title: 'Overflow Strategies', description: '<b>onBackpressureBuffer()</b>, <b>onBackpressureDrop()</b>, <b>onBackpressureLatest()</b> handle overflow scenarios.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Stream Processing', description: 'Kafka consumer processing events slower than production rate — backpressure prevents memory exhaustion.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'System Protection', description: 'Without backpressure, a fast database query could overwhelm a slow network connection.', color: 'text-red-600', bg: 'bg-red-100' }
    ],
  },
  {
    id: 16,
    category: 'Spring Reactive',
    question: 'What is WebFlux?',
    answer: 'It is the reactive-stack web framework in Spring 5, built on Project Reactor, supporting non-blocking applications.',
    asked_metadata: '6x Spotify, 4x SoundCloud, 3x Netflix',
    coreConceptDescription: 'Spring WebFlux is the non-blocking, reactive alternative to Spring MVC. Built on Project Reactor and Netty, it handles thousands of concurrent connections with minimal threads.',
    subConcepts: [
      { title: 'Non-Blocking I/O', description: 'Uses <b>Netty event loop</b> instead of thread-per-request. A few threads handle thousands of connections.' },
      { title: 'Programming Models', description: 'Supports <b>@Controller annotations</b> (familiar) and <b>functional endpoints</b> (RouterFunction/HandlerFunction).' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'High Concurrency', description: 'Handle 10K+ concurrent connections with 4-8 threads. Ideal for gateway services and streaming APIs.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-stream', title: 'SSE & WebSocket', description: 'Natively supports Server-Sent Events and WebSocket for real-time data streaming.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  },
  {
    id: 201,
    category: 'Spring Reactive',
    question: 'What is the difference between WebFlux and WebMvc?',
    answer: 'WebMvc is blocking and based on the Servlet API. WebFlux is non-blocking and based on Reactive Streams, supporting high concurrency with fewer threads.',
    asked_metadata: '8x Netflix, 6x Amazon, 5x Disney',
    coreConceptDescription: 'WebMvc: blocking Servlet API, thread-per-request, synchronous. WebFlux: non-blocking Netty, event-loop, asynchronous. WebFlux excels for I/O-heavy workloads; WebMvc is simpler for CRUD apps.',
    subConcepts: [
      { title: 'WebMvc (Blocking)', description: '<b>Thread-per-request</b>. Simple, mature, wide library support. Best for CPU-bound or simple CRUD.' },
      { title: 'WebFlux (Non-Blocking)', description: '<b>Event-loop</b> model. Few threads handle many requests. Best for I/O-heavy, high-concurrency scenarios.' }
    ],
    useCases: [
      { icon: 'fa-server', title: 'Choose WebMvc', description: 'Standard CRUD apps, blocking libraries (JDBC), simple architectures — WebMvc is simpler.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Choose WebFlux', description: 'API gateways, streaming, high-concurrency services, or when using R2DBC/WebSocket.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 202,
    category: 'Spring Reactive',
    question: 'What is WebClient and why is it preferred over RestTemplate?',
    answer: 'WebClient is a non-blocking, reactive client for HTTP requests. RestTemplate is synchronous and blocking. WebClient is the modern replacement for all Spring HTTP client needs.',
    asked_metadata: '7x Uber, 5x Stripe, 4x eBay',
    coreConceptDescription: 'WebClient is the non-blocking, reactive HTTP client in Spring WebFlux. It replaces RestTemplate (deprecated for new code). Works in both reactive and blocking contexts.',
    code: `webClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .bodyToMono(User.class);`,
    subConcepts: [
      { title: 'Non-Blocking', description: '<b>Doesn\'t block threads</b> waiting for responses. Uses Project Reactor internally for async processing.' },
      { title: 'Fluent API', description: 'Builder pattern: <b>get().uri().header().retrieve().bodyToMono()</b> — readable and composable.' }
    ],
    useCases: [
      { icon: 'fa-plug', title: 'Microservice Calls', description: 'Call other services non-blockingly. Chain multiple calls with flatMap for parallel execution.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Also Works Blocking', description: 'webClient.get().retrieve().bodyToMono().block() — use in non-reactive contexts too.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 203,
    category: 'Spring Reactive',
    question: 'What are the different types of Schedulers in Project Reactor?',
    answer: 'Schedulers.parallel() (CPU-bound), Schedulers.boundedElastic() (I/O-bound), Schedulers.single() (single-threaded), and Schedulers.immediate() (current thread).',
    asked_metadata: '6x Google, 5x Netflix, 4x SoundCloud',
    coreConceptDescription: 'Schedulers manage thread pools for reactive operations. parallel() for CPU work, boundedElastic() for blocking I/O, single() for sequential tasks, immediate() for current thread execution.',
    subConcepts: [
      { title: 'parallel()', description: 'Fixed pool = <b>CPU cores count</b>. For CPU-intensive computation. <b>Never block on this!</b>' },
      { title: 'boundedElastic()', description: 'Grows on demand, <b>capped at 10*cores</b>. For blocking I/O calls (JDBC, file I/O).' }
    ],
    useCases: [
      { icon: 'fa-calculator', title: 'CPU Work', description: '.publishOn(Schedulers.parallel()) for heavy computation that doesn\'t involve I/O.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Blocking Calls', description: '.subscribeOn(Schedulers.boundedElastic()) to wrap blocking JDBC calls safely.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 204,
    category: 'Spring Reactive',
    question: 'How do you handle errors in a Reactive Stream?',
    answer: 'Using operators like onErrorResume (fallback flux), onErrorReturn (fallback value), and retry (re-subscribe on failure).',
    asked_metadata: '7x Goldman Sachs, 5x Citi, 4x JPMorgan',
    coreConceptDescription: 'Error handling operators: onErrorReturn (fallback value), onErrorResume (fallback publisher), retry/retryWhen (re-subscribe), doOnError (side-effect logging). Errors are terminal by default.',
    code: `flux.onErrorResume(e -> {
    log.error("Failed", e);
    return Flux.empty();
});`,
    subConcepts: [
      { title: 'Recovery', description: '<b>onErrorReturn("default")</b>: static fallback. <b>onErrorResume(ex -> alternative())</b>: dynamic fallback.' },
      { title: 'Retry', description: '<b>retry(3)</b>: simple retry. <b>retryWhen(Retry.backoff(3, Duration.ofSeconds(1)))</b>: exponential backoff.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Resilient APIs', description: 'webClient.get().retrieve().onErrorResume(e -> cachedResponse()) for graceful degradation.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Transient Failures', description: 'retryWhen with exponential backoff for network timeouts and temporary errors.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 205,
    category: 'Spring Reactive',
    question: 'What is StepVerifier?',
    answer: 'A testing utility provided by Project Reactor to verify the behavior of reactive publishers (Mono/Flux) in tests.',
    asked_metadata: '5x VMware, 4x Pivotal, 3x RedHat',
    coreConceptDescription: 'StepVerifier is Project Reactor\'s test utility for verifying reactive streams. It subscribes to a Publisher and asserts expected elements, errors, and completion signals.',
    code: `StepVerifier.create(myFlux)
    .expectNext("A")
    .expectComplete()
    .verify();`,
    subConcepts: [
      { title: 'Assertion API', description: '<b>expectNext()</b> (specific value), <b>expectNextCount()</b> (count), <b>expectComplete()</b> (completion signal).' },
      { title: 'Virtual Time', description: '<b>StepVerifier.withVirtualTime()</b> tests time-dependent operators (delay, interval) without waiting.' }
    ],
    useCases: [
      { icon: 'fa-vial', title: 'Unit Testing', description: 'Verify reactive service methods produce correct elements in the correct order.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bug', title: 'Error Testing', description: 'StepVerifier.create(mono).expectError(NotFoundException.class).verify()', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 206,
    category: 'Spring Reactive',
    question: 'Explain the difference between map() and flatMap() in WebFlux.',
    answer: 'map() is for synchronous 1-to-1 transformations. flatMap() is for asynchronous 1-to-N transformations where the transformation itself returns a Publisher.',
    asked_metadata: '9x Meta, 8x Google, 7x Amazon',
    coreConceptDescription: 'map() applies a synchronous function to each element. flatMap() applies an async function returning Publisher<T> and flattens results. Use map() for simple transforms, flatMap() for async calls.',
    subConcepts: [
      { title: 'map() — Synchronous', description: 'mono.<b>map(user -> user.getName())</b> — simple, synchronous transformation. Returns same wrapper type.' },
      { title: 'flatMap() — Asynchronous', description: 'mono.<b>flatMap(id -> repository.findById(id))</b> — async call returning Mono/Flux. Flattens nested Publishers.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'DTO Mapping', description: 'mono.map(entity -> toDTO(entity)) — synchronous object conversion.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Chained DB Calls', description: 'mono.flatMap(user -> orderRepo.findByUserId(user.getId())) — async database call.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 207,
    category: 'Spring Reactive',
    question: 'What are Functional Endpoints in Spring WebFlux?',
    answer: 'An alternative to @Controller, using RouterFunction and HandlerFunction to define routes and logic in a functional, programmatic way.',
    asked_metadata: '6x Adobe, 5x Salesforce, 4x Atlassian',
    coreConceptDescription: 'Functional endpoints use RouterFunction (route definitions) and HandlerFunction (request handlers) as an alternative to annotated @Controller. More explicit, composable, and testable.',
    code: `public RouterFunction<ServerResponse> route() {
    return RouterFunctions.route(GET("/hello"), 
        request -> ServerResponse.ok().bodyValue("Hello"));
}`,
    subConcepts: [
      { title: 'RouterFunction', description: 'Defines <b>URL-to-handler mappings</b> programmatically. Composable: route1.and(route2).' },
      { title: 'HandlerFunction', description: 'Takes <b>ServerRequest → Mono<ServerResponse></b>. Pure function, easy to test in isolation.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Composable Routes', description: 'Combine route groups: userRoutes.and(orderRoutes).and(healthRoutes).', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-vial', title: 'Testability', description: 'Handler functions are pure functions — test without Spring context.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 208,
    category: 'Spring Reactive',
    question: 'What is R2DBC?',
    answer: 'Reactive Relational Database Connectivity. It brings reactive programming to relational databases (SQL), allowing for non-blocking database access.',
    asked_metadata: '5x Oracle, 4x SAP, 3x MongoDB',
    coreConceptDescription: 'R2DBC provides non-blocking, reactive access to SQL databases. It replaces JDBC for reactive stacks. Supported by PostgreSQL, MySQL, H2, MSSQL. Spring Data R2DBC provides repository support.',
    subConcepts: [
      { title: 'Non-Blocking SQL', description: 'Unlike JDBC (blocking), R2DBC uses <b>non-blocking I/O</b> for database operations. Returns Mono/Flux.' },
      { title: 'Spring Data R2DBC', description: 'Provides <b>ReactiveCrudRepository</b> with findAll() → Flux, findById() → Mono, and custom queries.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Full Reactive Stack', description: 'WebFlux + R2DBC = fully non-blocking from HTTP to database. No thread blocking anywhere.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Limitations', description: 'No lazy loading, no entity graphs, no complex JPA features. Simpler but more manual than JPA.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 209,
    category: 'Spring Reactive',
    question: 'How do you implement Spring Security in a WebFlux application?',
    answer: 'By using the Reactive variants of security components, such as SecurityWebFilterChain instead of SecurityFilterChain.',
    asked_metadata: '6x Okta, 5x Auth0, 4x Microsoft',
    coreConceptDescription: 'WebFlux security uses SecurityWebFilterChain (not SecurityFilterChain), ReactiveUserDetailsService, and @EnableWebFluxSecurity. All security operations must be non-blocking.',
    code: `@Bean
public SecurityWebFilterChain security(ServerHttpSecurity http) {
    return http.authorizeExchange()
        .anyExchange().authenticated()
        .and().build();
}`,
    subConcepts: [
      { title: 'Reactive Security Chain', description: '<b>SecurityWebFilterChain</b> replaces SecurityFilterChain. Uses ServerHttpSecurity instead of HttpSecurity.' },
      { title: 'Reactive User Service', description: '<b>ReactiveUserDetailsService</b> returns Mono<UserDetails> instead of blocking UserDetails.' }
    ],
    useCases: [
      { icon: 'fa-lock', title: 'JWT Authentication', description: 'Non-blocking JWT validation and user extraction in a WebFlux security filter.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'OAuth2 Resource Server', description: 'http.oauth2ResourceServer().jwt() for reactive JWT-based resource server config.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 210,
    category: 'Spring Reactive',
    question: 'What is ParallelFlux?',
    answer: 'A specialized version of Flux that allows processing elements in parallel on multiple rails, usually achieved by calling flux.parallel().',
    asked_metadata: '4x NVIDIA, 3x Amazon, 2x Netflix',
    coreConceptDescription: 'ParallelFlux splits a Flux into multiple "rails" for parallel processing. Use parallel() to split, runOn(Schedulers.parallel()) to assign threads, and sequential() to merge back.',
    code: `Flux.range(1, 10)
    .parallel()
    .runOn(Schedulers.parallel())
    .subscribe(System.out::println);`,
    subConcepts: [
      { title: 'parallel()', description: 'Splits Flux into <b>N rails</b> (default = CPU cores). Each rail processes elements independently.' },
      { title: 'runOn() + sequential()', description: '<b>runOn()</b> assigns scheduler per rail. <b>sequential()</b> merges rails back into a single Flux.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'CPU-Intensive', description: 'Heavy computation per element (image processing, encryption) benefits from parallel rails.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Not Always Faster', description: 'Overhead of splitting/merging may outweigh benefits for simple operations or I/O-bound work.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  }
];
