import { Question } from './question.model';

export const REACTIVE_PROGRAMMING_QUESTIONS: Question[] = [
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
    id: 180,
    category: 'Reactive Programming',
    question: 'What is Schedulers.boundedElastic() used for?',
    answer: 'It is a scheduler designed for blocking tasks (e.g., legacy JDBC, File I/O). It creates a pool of threads that can grow as needed but is capped to avoid resource exhaustion, unlike Schedulers.parallel() which is for CPU-bound tasks.',
    asked_metadata: '3x SoundCloud, 2x Netflix'
  },
  {
    id: 188,
    category: 'Reactive Programming',
    question: 'What is the difference between Cold and Hot Publishers?',
    answer: 'Cold Publishers start a new data stream for each subscriber (e.g., Mono.just). Hot Publishers share the data stream among all subscribers and start emitting even if there are no subscribers (e.g., Sinks/Processors).',
    asked_metadata: '5x Apple, 4x Disney, 3x Netflix',
  }
];
