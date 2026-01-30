import { Question } from './question.model';

export const SPRING_REACTIVE_QUESTIONS: Question[] = [
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
    id: 16,
    category: 'Spring Reactive',
    question: 'What is WebFlux?',
    answer: 'It is the reactive-stack web framework in Spring 5, built on Project Reactor, supporting non-blocking applications.',
    asked_metadata: '6x Spotify, 4x SoundCloud, 3x Netflix',
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
