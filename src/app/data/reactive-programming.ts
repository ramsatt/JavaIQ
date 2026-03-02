import { Question } from './question.model';

export const REACTIVE_PROGRAMMING_QUESTIONS: Question[] = [
  {
    id: 112,
    category: 'Reactive Programming',
    question: 'What is Reactive Programming, and how does it differ from Procedural Programming?',
    answer: 'Reactive Programming focuses on reactive data composition (data flows, change propagation), while Procedural Programming emphasizes sequential task execution.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom',
    coreConceptDescription: 'Reactive Programming is a declarative paradigm focused on asynchronous data streams and change propagation. Unlike procedural (step-by-step), reactive programs react to data as it arrives.',
    subConcepts: [
      { title: 'Declarative Style', description: '<b>Describe what</b> should happen with data, not <b>how</b> to iterate. Operators compose transformations on streams.' },
      { title: 'Non-Blocking', description: 'Threads are <b>never blocked</b> waiting for data. They are released to handle other work while I/O completes.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'High Throughput', description: 'Handle 10,000+ concurrent connections with a handful of threads using non-blocking I/O.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-stream', title: 'Real-Time Data', description: 'Stock tickers, live feeds, IoT sensor data — reactive streams handle continuous data naturally.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 113,
    category: 'Reactive Programming',
    question: 'Explain the concept of data streams in Reactive Programming.',
    answer: 'Data streams are continuous flows of data/events that facilitate responsive behavior. Key components: Observable (source), Observer (listener), Subscription, Operators.',
    asked_metadata: '6x Netflix, 5x Citi, 4x Spotify',
    coreConceptDescription: 'A data stream is a sequence of events over time: data items, errors, and completion signals. Streams can be created from anything: collections, user inputs, HTTP responses, or sensor data.',
    subConcepts: [
      { title: 'Stream Components', description: '<b>Source</b> (creates data), <b>Operators</b> (transform), <b>Subscriber</b> (consumes). Three signals: onNext, onError, onComplete.' },
      { title: 'Marble Diagrams', description: 'Visual representation of streams over time. <b>Circles = items</b>, <b>X = error</b>, <b>| = completion</b>.' }
    ],
    useCases: [
      { icon: 'fa-stream', title: 'Event Processing', description: 'User clicks, WebSocket messages, and Kafka events are all naturally modeled as streams.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Transformation Pipeline', description: 'stream.filter(x -> x > 0).map(x -> x * 2).subscribe() — declarative data pipeline.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 114,
    category: 'Reactive Programming',
    question: 'What is the Observer pattern, and how is it fundamental to Reactive Programming?',
    answer: 'It enables loose coupling where a Subject (Observable) notifies Observers of state changes. It is the backbone of reactive programming.',
    asked_metadata: '7x Google, 6x Netflix, 5x Microsoft',
    coreConceptDescription: 'The Observer pattern (Subject/Observer) is the foundation of reactive programming. A Subject maintains a list of dependents (Observers) and notifies them of state changes — the push-based model.',
    subConcepts: [
      { title: 'Push vs Pull', description: 'Traditional: consumer <b>pulls</b> data. Reactive: producer <b>pushes</b> data to subscribers as it arrives.' },
      { title: 'Loose Coupling', description: 'Observable doesn\'t know about Observer implementations — <b>any number can subscribe</b> independently.' }
    ],
    useCases: [
      { icon: 'fa-bell', title: 'Event Systems', description: 'GUI events, message brokers, and WebSocket connections all use the Observer pattern.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-plug', title: 'Extensibility', description: 'Add new subscribers without modifying the data source — open/closed principle.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 115,
    category: 'Reactive Programming',
    question: 'Describe the role of Observables and Observers in Reactive Programming.',
    answer: 'Observable is the data source/producer. Observer is the consumer/subscriber that reacts to emitted data.',
    asked_metadata: '6x Netflix, 5x Citi, 4x Zoom',
    coreConceptDescription: 'Observable (source) emits items over time. Observer (subscriber) provides callbacks: onNext (data), onError (error), and onComplete (done). Nothing happens until subscription.',
    subConcepts: [
      { title: 'Observable (Producer)', description: 'Emits data via <b>onNext()</b>. Signals terminal events: <b>onError()</b> or <b>onComplete()</b>.' },
      { title: 'Observer (Consumer)', description: 'Implements <b>three callbacks</b>: onNext (process item), onError (handle error), onComplete (cleanup).' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Reactive Streams', description: 'In Project Reactor: Mono (0-1 items) and Flux (0-N items) are Observable types.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-link', title: 'Lazy Execution', description: 'Nothing executes until subscribe() is called — defining a pipeline doesn\'t trigger it.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 116,
    category: 'Reactive Programming',
    question: 'How do you create an Observable stream?',
    answer: 'Using factory methods (just, from, interval) to create a source, then applying operators. It starts with a source and ends with subscribers.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Disney',
    coreConceptDescription: 'Observable streams are created using factory methods: Flux.just() for known values, Flux.fromIterable() for collections, Flux.interval() for periodic emissions, or Flux.create() for custom sources.',
    subConcepts: [
      { title: 'Factory Methods', description: '<b>just()</b> (single/few values), <b>fromIterable()</b> (collection), <b>interval()</b> (periodic), <b>create()</b> (programmatic).' },
      { title: 'Operator Chaining', description: 'source.<b>filter().map().flatMap()</b>.subscribe() — operators create new streams without mutating the original.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'DB Queries', description: 'Flux<User> users = repository.findAll() — Spring Data R2DBC returns reactive streams.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-clock', title: 'Periodic Tasks', description: 'Flux.interval(Duration.ofSeconds(1)) emits 0, 1, 2, ... every second.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 117,
    category: 'Reactive Programming',
    question: 'What is backpressure in the context of Reactive Programming?',
    answer: 'A flow control mechanism where the consumer signals the producer how much data it can handle to prevent being overwhelmed (e.g., buffering, dropping).',
    asked_metadata: '7x Netflix, 6x Citi, 5x Disney',
    coreConceptDescription: 'Backpressure is the mechanism by which a slow consumer signals to a fast producer to slow down. Reactive Streams specification (request(n)) enables this. Strategies: BUFFER, DROP, LATEST, ERROR.',
    subConcepts: [
      { title: 'Reactive Streams Spec', description: 'Subscriber calls <b>request(n)</b> to tell Publisher how many items it can handle. Publisher must not exceed this.' },
      { title: 'Overflow Strategies', description: '<b>BUFFER</b> (queue), <b>DROP</b> (discard newest), <b>LATEST</b> (keep only latest), <b>ERROR</b> (throw exception).' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Fast Producer', description: 'Kafka consumer processing slower than producer — backpressure prevents OOM errors.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'System Stability', description: 'Without backpressure, fast producers can crash slow consumers with unbounded queues.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 118,
    category: 'Reactive Programming',
    question: 'Explain the difference between cold and hot Observables.',
    answer: 'Cold Observables create a new stream for each subscriber (independent). Hot Observables share a single stream among all subscribers (multicast).',
    asked_metadata: '6x Netflix, 5x Apple, 4x Disney',
    coreConceptDescription: 'Cold: data is produced per subscriber (like a movie on-demand). Hot: data is produced regardless of subscribers (like a live broadcast). Cold is the default in Project Reactor.',
    subConcepts: [
      { title: 'Cold (Default)', description: 'Each subscriber gets <b>its own data stream</b> from the beginning. Like watching a movie on Netflix.' },
      { title: 'Hot', description: 'Subscribers join a <b>shared stream</b> already in progress. Like tuning into a live TV broadcast.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Cold: DB Queries', description: 'Each subscriber triggers a new database query — independent results for each.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-broadcast-tower', title: 'Hot: WebSocket', description: 'Live price updates shared among all connected clients — one stream, many subscribers.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 119,
    category: 'Reactive Programming',
    question: 'What is the role of the Subscription in Reactive Programming?',
    answer: 'It represents the link between Observable and Observer, allowing for cancellation (unsubscribe) and flow control (requesting data).',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom',
    coreConceptDescription: 'Subscription links Publisher and Subscriber. It provides cancel() to stop receiving data and request(n) for backpressure. Always manage subscriptions to prevent memory leaks.',
    subConcepts: [
      { title: 'request(n)', description: 'Subscriber tells Publisher <b>how many items</b> it can handle — the backpressure mechanism.' },
      { title: 'cancel()', description: '<b>Stops the stream</b> and releases resources. Must be called to prevent memory leaks in long-lived streams.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Resource Management', description: 'Cancel subscriptions when components are destroyed to prevent memory leaks.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gauge-high', title: 'Flow Control', description: 'request(10) fetches 10 items at a time — controlled consumption of large datasets.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 120,
    category: 'Reactive Programming',
    question: 'How do you unsubscribe from a stream to prevent memory leaks?',
    answer: 'By calling the unsubscribe() or dispose() method on the Subscription object, usually when the component is destroyed.',
    asked_metadata: '6x Google, 5x Netflix, 4x Microsoft',
    coreConceptDescription: 'Call Disposable.dispose() (RxJava) or Subscription.cancel() (Reactor) to stop receiving data and release resources. In Spring WebFlux, subscriptions are managed by the framework.',
    subConcepts: [
      { title: 'dispose()', description: '<b>RxJava</b>: Disposable.dispose() cancels the subscription. CompositeDisposable manages multiple.' },
      { title: 'cancel()', description: '<b>Project Reactor</b>: Subscription.cancel(). In WebFlux, the framework handles cancellation automatically.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Memory Leaks', description: 'Forgetting to dispose long-lived subscriptions (intervals, WebSocket) causes memory leaks.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-code', title: 'CompositeDisposable', description: 'Group multiple subscriptions and dispose all at once when the component is destroyed.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 121,
    category: 'Reactive Programming',
    question: 'What are operators in Reactive Programming, and what are they used for?',
    answer: 'Functions that transform, filter, combine, or create data streams (e.g., map, filter, merge, zip).',
    asked_metadata: '7x Netflix, 6x Spotify, 5x Citi',
    coreConceptDescription: 'Operators are pure functions that transform streams without mutating them. Categories: Creation (just, from), Transformation (map, flatMap), Filtering (filter, distinct), Combination (merge, zip).',
    subConcepts: [
      { title: 'Transformation', description: '<b>map()</b> transforms each item. <b>flatMap()</b> transforms each item into a stream and flattens results.' },
      { title: 'Combination', description: '<b>merge()</b> interleaves items. <b>zip()</b> pairs items. <b>concat()</b> sequences streams end-to-end.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Data Pipeline', description: 'flux.filter(active).map(toDTO).take(10).subscribe() — declarative data transformation chain.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-link', title: 'Composability', description: 'Chain operators to build complex data flows from simple, reusable building blocks.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 122,
    category: 'Reactive Programming',
    question: 'What is RxJava, and how does it implement Reactive Programming?',
    answer: 'A Java library for composing asynchronous and event-based programs using observable sequences. It implements the Reactive Extensions (Rx) for the JVM.',
    asked_metadata: '5x Netflix, 4x Uber, 3x Airbnb',
    coreConceptDescription: 'RxJava implements the ReactiveX specification for the JVM. It provides Observable, Flowable (with backpressure), Single, Maybe, and Completable types with a rich operator library.',
    subConcepts: [
      { title: 'RxJava Types', description: '<b>Observable</b> (no backpressure), <b>Flowable</b> (with backpressure), <b>Single</b> (1 item), <b>Maybe</b> (0-1), <b>Completable</b> (0).' },
      { title: 'vs Project Reactor', description: 'RxJava: richer API, Android-friendly. <b>Reactor</b>: Spring-native, Mono/Flux, better Spring integration.' }
    ],
    useCases: [
      { icon: 'fa-mobile', title: 'Android', description: 'RxJava is widely used in Android for async operations, network calls, and UI event handling.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'Backend', description: 'For Spring WebFlux, Project Reactor (Mono/Flux) is preferred over RxJava.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 123,
    category: 'Reactive Programming',
    question: 'How does RxJava handle multithreading?',
    answer: 'Using Schedulers (e.g., Schedulers.io(), Schedulers.computation()) and operators like subscribeOn (source thread) and observeOn (observer thread).',
    asked_metadata: '6x Netflix, 5x Google, 4x Dropbox',
    coreConceptDescription: 'subscribeOn() sets the thread for the source (upstream). observeOn() sets the thread for downstream processing. Key schedulers: io() for I/O, computation() for CPU, single() for sequential.',
    subConcepts: [
      { title: 'subscribeOn()', description: 'Sets the thread for <b>subscription and emission</b>. Only the first subscribeOn() in a chain has effect.' },
      { title: 'observeOn()', description: 'Switches the <b>downstream processing</b> thread. Can be used multiple times to switch threads mid-chain.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'I/O Operations', description: 'subscribeOn(Schedulers.io()) for network calls — uses a cached, unbounded thread pool.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-calculator', title: 'CPU Work', description: 'observeOn(Schedulers.computation()) for heavy calculations — pool sized to CPU cores.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 124,
    category: 'Reactive Programming',
    question: 'Explain how the flatMap operator works in RxJava.',
    answer: 'It transforms each item emitted by an Observable into a new Observable, then flattens these Observables into a single Observable.',
    asked_metadata: '8x Netflix, 7x Amazon, 6x Google',
    coreConceptDescription: 'flatMap() maps each item to an inner Observable/Flux, subscribes to all of them concurrently, and merges their emissions into a single stream. Order is NOT guaranteed.',
    subConcepts: [
      { title: 'Async Transformation', description: 'Unlike map(), flatMap() handles <b>asynchronous operations</b> — each item becomes a new async stream.' },
      { title: 'No Order Guarantee', description: 'Items from inner streams are <b>interleaved</b>. Use concatMap() if order matters.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Parallel API Calls', description: 'flux.flatMap(id -> webClient.get(id)) — fetches all items in parallel, no guaranteed order.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'Concurrency Control', description: 'flatMap(fn, maxConcurrency) limits the number of concurrent inner subscriptions.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 125,
    category: 'Reactive Programming',
    question: 'What is the purpose of the zip operator in RxJava?',
    answer: 'It combines the emissions of multiple Observables together via a specified function and emits single items for each combination based on their index.',
    asked_metadata: '5x Netflix, 4x Citi, 3x Zoom',
    coreConceptDescription: 'zip() waits for each source to emit an item, combines them using a function, and emits the result. It completes when ANY source completes. Useful for parallel independent calls.',
    subConcepts: [
      { title: 'Pair-wise Combination', description: 'Waits for <b>item N from ALL sources</b>, combines them, emits result. Slowest source determines pace.' },
      { title: 'vs merge()', description: '<b>zip()</b> pairs items index-wise. <b>merge()</b> interleaves items as they arrive (no pairing).' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Parallel Calls', description: 'Mono.zip(getUser(), getOrders(), getPrefs()) — fire 3 calls in parallel, combine results.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Data Aggregation', description: 'Combine data from different services/databases into a single response DTO.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 126,
    category: 'Reactive Programming',
    question: 'How do you handle errors in an RxJava stream?',
    answer: 'Using operators like onError, onErrorReturn, onErrorResumeNext, and retry to gracefully handle or recover from exceptions.',
    asked_metadata: '7x Netflix, 6x Citi, 5x Zoom',
    coreConceptDescription: 'Error handling operators: onErrorReturn (fallback value), onErrorResume (fallback stream), retry (resubscribe on error), doOnError (side-effect logging). Errors terminate the stream by default.',
    subConcepts: [
      { title: 'Recovery Operators', description: '<b>onErrorReturn()</b>: single fallback value. <b>onErrorResume()</b>: switch to alternative stream.' },
      { title: 'Retry Operators', description: '<b>retry(n)</b>: resubscribe n times. <b>retryWhen()</b>: custom retry logic with backoff.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Graceful Degradation', description: 'onErrorResume(ex -> getFromCache()) — fall back to cached data when the API fails.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Retry with Backoff', description: 'retryWhen(Retry.backoff(3, Duration.ofSeconds(1))) — exponential backoff retry.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 174,
    category: 'Reactive Programming',
    question: 'Difference between flatMap(), concatMap(), and switchMap() in Project Reactor?',
    answer: "flatMap() processes elements asynchronously and doesn't preserve order. concatMap() preserves order but processes one at a time. switchMap() cancels the previous subscription when a new element arrives (great for \"search-as-you-type\").",
    asked_metadata: '4x Netflix, 2x Spotify',
    coreConceptDescription: 'flatMap: parallel, unordered. concatMap: sequential, ordered. switchMap: cancels previous on new emission. Choose based on ordering, concurrency, and cancellation requirements.',
    code: `flux.flatMap(item -> doAsync(item))      // Parallel, no order
    .concatMap(item -> doAsync(item))   // Sequential, preserves order
    .switchMap(item -> doAsync(item))   // Cancels previous if new comes`,
    subConcepts: [
      { title: 'flatMap (Parallel)', description: 'Subscribes to all inner streams <b>concurrently</b>. Results are interleaved. <b>Best throughput</b>.' },
      { title: 'concatMap (Sequential)', description: 'Subscribes to inner streams <b>one at a time</b>. Results are ordered. <b>Lower throughput but predictable</b>.' },
      { title: 'switchMap (Cancel Previous)', description: '<b>Cancels previous</b> inner subscription when new item arrives. Ideal for search-as-you-type.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Parallel Processing', description: 'flatMap for independent API calls where order doesn\'t matter.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-magnifying-glass', title: 'Search-as-You-Type', description: 'switchMap cancels the previous search request when the user types a new character.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 180,
    category: 'Reactive Programming',
    question: 'What is Schedulers.boundedElastic() used for?',
    answer: 'It is a scheduler designed for blocking tasks (e.g., legacy JDBC, File I/O). It creates a pool of threads that can grow as needed but is capped to avoid resource exhaustion, unlike Schedulers.parallel() which is for CPU-bound tasks.',
    asked_metadata: '3x SoundCloud, 2x Netflix',
    coreConceptDescription: 'boundedElastic() wraps blocking calls in a reactive pipeline. It creates threads on demand (bounded) to handle blocking I/O without blocking the event loop. parallel() is for CPU-intensive work only.',
    subConcepts: [
      { title: 'boundedElastic()', description: 'For <b>blocking I/O</b> (JDBC, file reads). Threads grow on demand but are <b>capped</b> (default: 10 * cores).' },
      { title: 'parallel()', description: 'For <b>CPU-bound</b> work. Fixed pool sized to <b>number of CPU cores</b>. Never use for blocking calls!' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Legacy JDBC', description: 'Mono.fromCallable(() -> jdbcQuery()).subscribeOn(Schedulers.boundedElastic()) wraps blocking JDBC.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Never Block parallel()', description: 'Blocking a parallel() thread starves the event loop — use boundedElastic() instead.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 188,
    category: 'Reactive Programming',
    question: 'What is the difference between Cold and Hot Publishers?',
    answer: 'Cold Publishers start a new data stream for each subscriber (e.g., Mono.just). Hot Publishers share the data stream among all subscribers and start emitting even if there are no subscribers (e.g., Sinks/Processors).',
    asked_metadata: '5x Apple, 4x Disney, 3x Netflix',
    coreConceptDescription: 'Cold publishers produce data on subscribe (lazy, per-subscriber). Hot publishers produce data regardless of subscribers (eager, shared). Use share() or replay() to convert cold to hot.',
    subConcepts: [
      { title: 'Cold (Lazy)', description: 'Each subscriber gets <b>its own independent</b> stream. Database queries, HTTP requests are cold by default.' },
      { title: 'Hot (Eager)', description: 'Data is emitted <b>regardless of subscribers</b>. Late subscribers miss earlier emissions. WebSocket, Kafka are hot.' }
    ],
    useCases: [
      { icon: 'fa-snowflake', title: 'Cold: HTTP Calls', description: 'WebClient.get() is cold — each subscriber triggers a new HTTP request independently.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-fire', title: 'Hot: Live Data', description: 'Use Sinks.many().multicast() for shared event streams that multiple subscribers consume.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ],
  }
];
