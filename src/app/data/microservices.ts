import { Question } from './question.model';

export const MICROSERVICES_QUESTIONS: Question[] = [
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
    id: 17,
    category: 'Microservices',
    question: 'What is API Gateway?',
    answer: 'It acts as a single entry point for all clients, routing requests to appropriate microservices and handling cross-cutting concerns.',
    asked_metadata: '8x Netflix, 6x Amazon, 4x Uber',
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
    id: 46,
    category: 'Microservices',
    question: 'What is CQRS?',
    answer: 'Command Query Responsibility Segregation. It separates the models for reading data (Query) and updating data (Command).',
    asked_metadata: '6x Meta, 5x LinkedIn, 4x Twitter',
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
    id: 151,
    category: 'Microservices',
    question: 'How do you migrate a monolithic Java application to microservices?',
    answer: 'Identify bounded contexts, extract APIs, incrementally deploy services (Strangler Fig pattern), and manage data consistency (Sagas).',
    asked_metadata: '6x Deloitte, 5x Accenture, 4x IBM'
  },
  {
    id: 158,
    category: 'Microservices',
    question: 'How do you design a scalable, high-availability Java service?',
    answer: 'Stateless design (horizontal scaling), load balancing, health checks, circuit breakers (Resilience4j), and auto-scaling groups.',
    asked_metadata: '8x Netflix, 7x Amazon, 6x Uber'
  },
  {
    id: 172,
    category: 'Microservices',
    question: 'What is Distributed Tracing and why is it needed?',
    answer: 'It tracks requests across service boundaries using a unique Trace ID. Essential for debugging latency and failures in complex microservices architectures. Tools: Micrometer Tracing, Zipkin.',
    asked_metadata: '4x Netflix, 3x Amazon'
  },
  {
    id: 177,
    category: 'Microservices',
    question: 'What is the Sidecar Pattern and how does it relate to Service Mesh?',
    answer: 'A Sidecar is a container that runs alongside your app container (e.g., Envoy). A Service Mesh (like Istio) is the control plane that manages these sidecars to provide security, traffic control, and observability without changing app code.',
    asked_metadata: '5x Google, 4x Uber'
  },
  {
    id: 185,
    category: 'Microservices',
    question: 'What is the Bulkhead Pattern?',
    answer: 'It isolates elements of an application into pools so that if one fails, the others will continue to function. Named after the sections of a ship’s hull. Prevents a single failure from cascading across the entire system.',
    asked_metadata: '5x Netflix, 3x Airbnb'
  },
  {
    id: 198,
    category: 'Microservices',
    question: 'Difference between API Gateway and Service Mesh?',
    answer: 'API Gateway handles North-South traffic (Client to Services), focusing on routing, auth, and rate limiting. Service Mesh handles East-West traffic (Service to Service), focusing on observability, security (mTLS), and reliability (Sidecar).',
    asked_metadata: '5x AWS, 3x Google'
  }
];
