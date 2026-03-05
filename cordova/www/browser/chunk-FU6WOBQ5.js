import {
  AdGateService
} from "./chunk-5ZV5RXHW.js";
import "./chunk-LTABZLCA.js";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonToolbar
} from "./chunk-GJAE6IIS.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-YUIOCFNR.js";
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
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VBTVL2BZ.js";
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

// src/app/data/experiences/curated-experiences.ts
var CURATED_EXPERIENCES = [
  {
    id: "exp-amazon-sde2-2024",
    company: "Amazon",
    role: "SDE-2 (Java Backend)",
    yearsOfExperience: 4,
    difficulty: "hard",
    result: "offer",
    source: "curated",
    date: "2024-09-15",
    tags: ["java", "spring-boot", "microservices", "system-design", "lld"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Two DSA problems on HackerRank, 90 minutes.",
        questions: [
          "Sliding window maximum (Monotonic Deque)",
          "LRU Cache implementation using LinkedHashMap"
        ],
        duration: "90 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Phone Screen",
        description: "Spring Boot microservices discussion + one live coding problem.",
        questions: [
          "Explain how @Transactional works internally in Spring",
          "Design a rate limiter (Token Bucket algorithm)",
          "How does ConcurrentHashMap differ from Hashtable?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "System Design",
        description: "Design a notification service (email + push + SMS) for 10M users.",
        questions: [
          "Design scalable notification system with retry logic",
          "How to handle DLQ (Dead Letter Queues) with Kafka?",
          "Database sharding strategy for notifications table"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "Bar Raiser",
        description: "Leadership principles + deep behavioral questions.",
        questions: [
          "Tell me about a time you disagreed with your manager",
          "Describe the most complex system you designed",
          "How do you deal with technical debt in a fast-moving team?"
        ],
        duration: "60 minutes"
      }
    ],
    summary: "Amazon's process is intense and LP-heavy. Every technical round includes behavioral components tied to Leadership Principles. System design focused on failure modes and scalability. The bar raiser round is intentionally adversarial.",
    tips: [
      "Prepare 6-8 STAR stories mapped to Amazon Leadership Principles",
      "Know Spring Boot auto-configuration and @Transactional internals deeply",
      "Practice system design with explicit focus on failure modes and retries",
      "LeetCode medium is the baseline \u2014 solve at least 50 before applying"
    ]
  },
  {
    id: "exp-google-swe3-2024",
    company: "Google",
    role: "Software Engineer L3",
    yearsOfExperience: 2,
    difficulty: "hard",
    result: "offer",
    source: "curated",
    date: "2024-07-20",
    tags: ["java", "algorithms", "data-structures", "system-design"],
    rounds: [
      {
        roundNumber: 1,
        type: "Phone Screen",
        description: "One coding problem on Google Docs. Focus on clean code and edge cases.",
        questions: ["Find all anagram groups from a list of words"],
        duration: "45 minutes"
      },
      {
        roundNumber: 2,
        type: "Onsite - Coding 1",
        description: "Graph traversal problem.",
        questions: [
          "Number of Islands variant with diagonal connectivity",
          "Follow-up: What if the grid is distributed across machines?"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 3,
        type: "Onsite - Coding 2",
        description: "Dynamic programming with space optimization.",
        questions: ["Longest common subsequence \u2014 optimize to O(n) space"],
        duration: "45 minutes"
      },
      {
        roundNumber: 4,
        type: "System Design",
        description: "Design Google Drive file storage and sharing system.",
        questions: [
          "Storage architecture for files of varying sizes",
          "Permission model for file sharing",
          "How to handle concurrent edits?"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 5,
        type: "Googleyness",
        description: "Behavioral round focused on collaboration and ambiguity.",
        questions: [
          "Tell me about a time you worked with an underperforming team member",
          "How do you approach a problem with unclear requirements?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "Google focuses heavily on coding fundamentals and clean code. Explaining your approach before writing code is expected. System design was architecture-focused rather than implementation-focused.",
    tips: [
      "Solve 100+ LeetCode problems \u2014 focus on graphs, DP, and trees",
      "Practice explaining your thought process out loud while coding",
      "For system design, focus on trade-offs rather than a single correct design",
      "Google Docs coding means no IDE autocomplete \u2014 practice in a plain text editor"
    ]
  },
  {
    id: "exp-flipkart-sde2-2024",
    company: "Flipkart",
    role: "SDE-2 (Java Microservices)",
    yearsOfExperience: 3,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-05-10",
    tags: ["java", "spring-boot", "microservices", "kafka", "redis"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Coding test on HackerEarth \u2014 3 problems in 90 minutes.",
        questions: [
          "Array manipulation with sliding window",
          "Binary tree path sum",
          "String parsing problem"
        ],
        duration: "90 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 1",
        description: "Java and Spring Boot internals.",
        questions: [
          "Explain how Spring handles circular dependencies",
          "What happens when you call a @Transactional method from the same class?",
          "Implement a thread-safe singleton (all three approaches)",
          "What is the N+1 problem and how do you solve it in JPA?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "System Design",
        description: "Design the order management system for an e-commerce platform.",
        questions: [
          "Handle inventory reservation with distributed transactions",
          "How to use Kafka for order event streaming?",
          "How to handle payment failures and rollbacks?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "HR Round",
        description: "Compensation discussion and cultural fit.",
        questions: ["Why Flipkart?", "Where do you see yourself in 3 years?"],
        duration: "30 minutes"
      }
    ],
    summary: "Flipkart focuses on practical Spring Boot knowledge and real-world system design. Strong Java and Spring Boot fundamentals are expected. Questions were grounded in actual engineering challenges.",
    tips: [
      "Deep knowledge of Spring internals (proxies, transaction propagation) is essential",
      "Know Kafka consumer groups, offset management, and exactly-once semantics",
      "Be ready to discuss Redis caching strategies and cache invalidation",
      "Practice LLD problems before the interview"
    ]
  },
  {
    id: "exp-microsoft-sde2-2024",
    company: "Microsoft",
    role: "SDE-2 (Backend Java)",
    yearsOfExperience: 4,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-03-22",
    tags: ["java", "system-design", "oop", "design-patterns", "lld"],
    rounds: [
      {
        roundNumber: 1,
        type: "Phone Screen",
        description: "Coding problem + OOP discussion over Teams.",
        questions: [
          "Reverse a linked list in groups of K",
          "Design a parking lot system (LLD)"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 2,
        type: "Onsite - Coding",
        description: "Two coding problems with emphasis on clean, testable code.",
        questions: ["Implement an LFU cache", "Design a simple event bus with subscribe/publish"],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "Onsite - System Design",
        description: "Design a URL shortener (bit.ly clone).",
        questions: [
          "Database schema and short code generation at scale",
          "Caching layer for high read throughput",
          "Analytics: track URL click counts"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "Behavioral",
        description: "Microsoft growth mindset and collaboration values.",
        questions: [
          "Tell me about difficult feedback you received and what you did with it",
          "Describe how you helped a struggling colleague"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "Microsoft interviews are well-structured and less pressure-heavy than Amazon/Google. They value growth mindset and collaborative problem-solving. LLD was tested more than expected. Interviewers were willing to give hints.",
    tips: [
      "Practice common LLD problems: parking lot, hotel booking, chess game",
      "Brush up on SOLID principles \u2014 they may ask you to refactor bad code",
      "Microsoft values clarity of communication \u2014 explain before coding",
      "Growth mindset stories: show you learned from failure, not just success"
    ]
  },
  {
    id: "exp-walmart-se3-2024",
    company: "Walmart Global Tech",
    role: "Software Engineer 3 (Java)",
    yearsOfExperience: 5,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-01-18",
    tags: ["java", "spring-boot", "microservices", "elasticsearch", "database"],
    rounds: [
      {
        roundNumber: 1,
        type: "Technical Round 1",
        description: "Core Java fundamentals and Spring Boot.",
        questions: [
          "Difference between HashMap and ConcurrentHashMap internals",
          "Java memory model and happens-before guarantee",
          "How does Spring Boot handle transaction propagation?",
          "Write a custom Spring AOP annotation"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 2 - DSA",
        description: "Data structure problems on a coding platform.",
        questions: [
          "Find the kth largest element in a stream",
          "Detect cycle in a directed graph",
          "Data structure with O(1) insert, delete, and getRandom"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "System Design",
        description: "Design a product catalog service for an e-commerce platform.",
        questions: [
          "Handle millions of product search queries per second",
          "Elasticsearch integration for full-text search",
          "How to keep search index in sync with database?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "Walmart focuses on practical engineering skills rather than algorithmic puzzles. Strong Java fundamentals are expected. System design was e-commerce domain specific.",
    tips: [
      "Java fundamentals are tested very deeply \u2014 know memory model, GC, and concurrency",
      "Understand database indexing, query optimization, and connection pooling",
      "Know Elasticsearch basics \u2014 it comes up frequently in product companies",
      "Be prepared to discuss real-world Spring Boot application architecture"
    ]
  },
  {
    id: "exp-jpmorgan-javadev-2024",
    company: "J.P. Morgan",
    role: "Java Developer (Associate)",
    yearsOfExperience: 3,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-08-07",
    tags: ["java", "spring-boot", "multithreading", "concurrency", "design-patterns"],
    rounds: [
      {
        roundNumber: 1,
        type: "Technical Round 1",
        description: "Core Java with heavy focus on concurrency.",
        questions: [
          "Explain volatile keyword and when to use it",
          "Implement producer-consumer using BlockingQueue",
          "Difference between synchronized and ReentrantLock",
          "How does ThreadLocal work? Give a use case."
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 2",
        description: "Design patterns and Spring Security.",
        questions: [
          "Implement thread-safe singleton three ways",
          "Explain Observer pattern with a Java example",
          "How does Spring Security filter chain work?",
          "Implement a custom Spring Security filter"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "Competency Round",
        description: "Behavioral and situational questions for the financial industry.",
        questions: [
          "How do you handle high-pressure deadlines in finance systems?",
          "Tell me about a production incident you resolved",
          "How do you ensure code quality in a team setting?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "JPMorgan focuses heavily on Java concurrency \u2014 more than most tech companies. They care about thread safety, code reliability, and production experience. Good compensation with excellent stability.",
    tips: [
      "Concurrency is non-negotiable \u2014 study ExecutorService, CompletableFuture, Fork/Join",
      "Know concurrency patterns: producer-consumer, barrier, rate limiter",
      "Production incident handling stories are very valuable in finance interviews",
      "Understand basic financial concepts (trades, settlements) as a developer"
    ]
  },
  {
    id: "exp-zomato-sde1-2024",
    company: "Zomato",
    role: "SDE-1 (Java Backend)",
    yearsOfExperience: 1,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-06-14",
    tags: ["java", "spring-boot", "algorithms", "lld"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Two coding problems, 60 minutes.",
        questions: ["Two sum variant with sorted array", "Binary search on rotated array"],
        duration: "60 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 1",
        description: "Java basics and problem solving.",
        questions: [
          "Difference between == and .equals() in Java",
          "String immutability and String pool",
          "Reverse a linked list \u2014 recursive and iterative",
          "Find the first non-repeating character in a string"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "LLD Round",
        description: "Low-level design \u2014 food delivery domain.",
        questions: [
          "Design a food delivery order tracking system",
          "Class diagram for restaurant management",
          "Handle order state transitions (placed \u2192 confirmed \u2192 delivered)"
        ],
        duration: "60 minutes"
      }
    ],
    summary: "Great first job experience. Interviewers were friendly and gave hints when stuck. The LLD round was domain-specific \u2014 knowing their product helped. Offer came within a week.",
    tips: [
      "For junior roles: strong OOP fundamentals and basic data structures is sufficient",
      "Research the company product before LLD \u2014 domain-relevant designs impress",
      "Practice linked list and string problems for SDE-1 level",
      "Show enthusiasm and willingness to learn \u2014 attitude matters at junior levels"
    ]
  },
  {
    id: "exp-infosys-seniordev-2024",
    company: "Infosys",
    role: "Senior Developer (Java Full Stack)",
    yearsOfExperience: 6,
    difficulty: "easy",
    result: "offer",
    source: "curated",
    date: "2024-02-05",
    tags: ["java", "spring-boot", "hibernate", "rest-api"],
    rounds: [
      {
        roundNumber: 1,
        type: "Technical Round 1",
        description: "Java and Spring Boot fundamentals.",
        questions: [
          "Spring Bean lifecycle",
          "@Transactional attributes and propagation types",
          "Hibernate first level cache",
          "Lazy vs eager loading in JPA"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 2",
        description: "REST API design and database concepts.",
        questions: [
          "Design RESTful endpoints for a banking application",
          "Database normalization with examples",
          "When should you use a database index?"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 3,
        type: "HR Round",
        description: "Experience and team fit.",
        questions: [
          "Walk me through your most challenging project",
          "How do you stay updated with Java ecosystem changes?"
        ],
        duration: "30 minutes"
      }
    ],
    summary: "Infosys interview was straightforward and focused on practical knowledge. The process was respectful and supportive. Good entry point for experienced developers looking for work-life balance.",
    tips: [
      "Prepare project experience stories well \u2014 they dig into your past work",
      "Know Hibernate caching levels (L1, L2, query cache) thoroughly",
      "REST API principles: idempotency, proper status codes, versioning",
      "Brush up on database design \u2014 normalization, indexes, joins"
    ]
  },
  {
    id: "exp-swiggy-sde2-2024",
    company: "Swiggy",
    role: "SDE-2 (Java Backend)",
    yearsOfExperience: 3,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-10-03",
    tags: ["java", "spring-boot", "microservices", "kafka", "redis", "lld"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Two algorithmic problems on HackerRank with a 75-minute time limit.",
        questions: [
          "Minimum cost path in a grid (DP)",
          "Find all valid parentheses combinations for N pairs"
        ],
        duration: "75 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 1 \u2014 DSA",
        description: "Live coding with a senior engineer. Focus on problem-solving approach and edge cases.",
        questions: [
          "Serialize and deserialize a binary tree",
          "Find median from a data stream using two heaps",
          "Given an array, find all pairs with sum equal to K (O(n) expected)"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "Technical Round 2 \u2014 Java & System Design",
        description: "Deep-dive into Spring Boot internals, followed by a system design problem.",
        questions: [
          "How does Spring Boot auto-configuration work internally?",
          "Explain @Async and how you configure the underlying thread pool",
          "Design a real-time order tracking system for 5M daily orders",
          "How would you handle Kafka consumer lag at scale?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "LLD Round",
        description: "Low-level design of a core product feature.",
        questions: [
          "Design the Swiggy delivery partner assignment system (OOP + state machine)",
          "Class diagram: Restaurant \u2192 Menu \u2192 MenuItem \u2192 Order \u2192 LineItem",
          "How do you handle concurrent restaurant capacity updates?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 5,
        type: "Hiring Manager Round",
        description: "Culture, past experience, and career motivation.",
        questions: [
          "Tell me about a time your system had a production outage",
          "How do you prioritize competing technical tasks?",
          "Why Swiggy and not another food-tech company?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "Swiggy's process is well-organized with a strong focus on practical engineering problems relevant to their scale. The LLD round was domain-specific (delivery systems), which caught many candidates off-guard. Interviewers were collaborative and gave hints when genuinely stuck. Offer timeline was 5 business days.",
    tips: [
      "Practice LLD for food-delivery domains: order placement, delivery routing, real-time tracking",
      "Understand how to monitor and scale Kafka consumers \u2014 common topic at product companies",
      "Know @Async, @Scheduled, and Spring Boot actuator deeply",
      "Study two-pointer and heap problems \u2014 they come up repeatedly at Swiggy"
    ]
  },
  {
    id: "exp-paypal-javadev-2024",
    company: "PayPal",
    role: "Software Engineer II (Java)",
    yearsOfExperience: 4,
    difficulty: "hard",
    result: "offer",
    source: "curated",
    date: "2024-11-12",
    tags: ["java", "spring-boot", "microservices", "payments", "security", "concurrency"],
    rounds: [
      {
        roundNumber: 1,
        type: "Recruiter Screen",
        description: "Overview of background, salary expectations, and role alignment.",
        questions: [
          "Walk me through your current role and tech stack",
          "What's your expected compensation range?"
        ],
        duration: "30 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Phone Screen",
        description: "One DSA problem + Java fundamentals over HackerRank CodePair.",
        questions: [
          "Implement a thread-safe token bucket rate limiter",
          "What are the differences between volatile and AtomicInteger?",
          "Explain Java memory model and happens-before semantics"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "Onsite \u2014 Core Java & Concurrency",
        description: "Advanced Java concurrency and reliability engineering.",
        questions: [
          "How do you prevent deadlocks in a payment processing pipeline?",
          "Explain CompletableFuture composition \u2014 thenCompose vs thenCombine",
          "Write a custom thread pool with bounded queue and reject policy",
          "How does the Fork/Join framework differ from ExecutorService?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "Onsite \u2014 System Design",
        description: "Design a payment processing system with idempotency guarantees.",
        questions: [
          "Design idempotent payment API \u2014 what happens on retries?",
          "How do you handle distributed transactions across services?",
          "Saga pattern vs 2PC \u2014 trade-offs in payments context",
          "How would you design a fraud detection pipeline?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 5,
        type: "Onsite \u2014 Application Security",
        description: "Security practices and secure coding for financial applications.",
        questions: [
          "How do you prevent SQL injection and XSS in a Spring Boot app?",
          "Explain OAuth 2.0 and how you would implement it",
          "What is CSRF and how does Spring Security handle it?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "PayPal interviews are notably more security and reliability focused than typical product companies. They care deeply about idempotency, distributed consistency, and secure coding. Come prepared with real examples of handling production failures. Excellent compensation and comprehensive benefits.",
    tips: [
      "Master idempotency patterns \u2014 storing request IDs, deduplication keys, and retry logic",
      "Understand distributed transaction alternatives: Saga, TCC, Outbox pattern",
      "Know Spring Security filter chain and OAuth 2.0 resource server configuration thoroughly",
      "Study Java concurrency deeply \u2014 ForkJoinPool, CompletableFuture, StampedLock"
    ]
  },
  {
    id: "exp-uber-sde2-2024",
    company: "Uber",
    role: "Software Engineer II (Backend Java)",
    yearsOfExperience: 3,
    difficulty: "hard",
    result: "offer",
    source: "curated",
    date: "2024-04-29",
    tags: ["java", "microservices", "system-design", "algorithms", "distributed-systems"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Two coding problems + one debugging problem on Karat interview platform.",
        questions: [
          "Given a list of ride events, compute surge multiplier per zone",
          "Find the shortest path between two GPS coordinates (BFS variant)",
          "Debug: fix a concurrency bug in a shared ride-matching cache"
        ],
        duration: "90 minutes"
      },
      {
        roundNumber: 2,
        type: "Coding Interview 1",
        description: "Data structures and algorithm problem-solving with clean code emphasis.",
        questions: [
          "Design a ride-fare estimator with distance and surge factors (OOP)",
          "Find all trips within a given bounding box using spatial indexing concepts",
          "Compress a GPS path by removing redundant intermediate points (Ramer-Douglas algo)"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 3,
        type: "Coding Interview 2",
        description: "Concurrency and distributed primitives.",
        questions: [
          "Implement a distributed rate limiter using Redis primitives",
          "Write a read-through cache with TTL and background refresh",
          "Design a producer-consumer with back-pressure using SemaphoreSlim"
        ],
        duration: "45 minutes"
      },
      {
        roundNumber: 4,
        type: "System Design",
        description: "Design Uber's core ride matching system.",
        questions: [
          "How do you match drivers to riders in real-time at global scale?",
          "Geospatial indexing: H3, Geohash, or QuadTree \u2014 which and why?",
          "How do you handle driver location updates (millions per second)?",
          "What happens during a city-level outage \u2014 graceful degradation?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 5,
        type: "Behavioral",
        description: "Leadership, cross-functional collaboration, and engineering excellence.",
        questions: [
          "Tell me about a time you drove a significant technical improvement",
          "Describe a disagreement with a peer engineer \u2014 how did you resolve it?",
          "How do you handle urgent production issues during a release?"
        ],
        duration: "30 minutes"
      }
    ],
    summary: "Uber focuses heavily on real-world distributed systems problems. The system design round is specifically about their core geo-matching and routing domain \u2014 generic answers won't cut it. Coding problems often relate to maps and location data. The team was impressive and collaborative.",
    tips: [
      "Study H3 geospatial indexing and Geohash \u2014 Uber uses both extensively",
      "Understand consistent hashing and its application for driver location assignment",
      "Graph problems with weighted edges are common \u2014 study Dijkstra and A*",
      "Read Uber Engineering Blog posts before the interview for domain context"
    ]
  },
  {
    id: "exp-phonepe-sde2-2024",
    company: "PhonePe",
    role: "SDE-2 (Java Backend)",
    yearsOfExperience: 3,
    difficulty: "medium",
    result: "offer",
    source: "curated",
    date: "2024-12-10",
    tags: ["java", "spring-boot", "microservices", "kafka", "payments", "lld"],
    rounds: [
      {
        roundNumber: 1,
        type: "Online Assessment",
        description: "Two algorithmic problems on HackerRank \u2014 60 minutes.",
        questions: [
          "Merge intervals \u2014 given UPI transaction windows, find overlapping ones",
          "Sliding window: find max distinct payees in any 7-day window"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 2,
        type: "Technical Round 1 \u2014 Java",
        description: "Core Java and Spring Boot internals with live coding.",
        questions: [
          "How does Spring's @Transactional interact with the proxy mechanism?",
          "Write a custom annotation to log method execution time using AOP",
          "Explain ConcurrentHashMap's internal segmentation in Java 8+",
          "What is G1 GC and when would you choose it over ZGC?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 3,
        type: "Technical Round 2 \u2014 LLD",
        description: "Low-level design simulating a PhonePe core feature.",
        questions: [
          "Design a UPI payment flow with transaction state machine (INITIATED \u2192 PENDING \u2192 SUCCESS/FAILED)",
          "Class design for a split-bill feature (Splitwise-like)",
          "How do you handle concurrent debit/credit to the same wallet?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 4,
        type: "System Design",
        description: "Design a high-throughput payment notification system.",
        questions: [
          "Design a system to send real-time payment notifications to 50M users",
          "How do you guarantee exactly-once delivery with Kafka?",
          "How do you handle bank downtime and retry with exponential backoff?",
          "Circuit breaker pattern \u2014 how would you implement it for bank calls?"
        ],
        duration: "60 minutes"
      },
      {
        roundNumber: 5,
        type: "HR + Director Round",
        description: "Final round with director-level engineer + HR.",
        questions: [
          "What excites you about the fintech and payments space?",
          "Describe your biggest technical contribution at your current company",
          "How do you keep up with evolving Java and Spring ecosystem?"
        ],
        duration: "45 minutes"
      }
    ],
    summary: "PhonePe has a very product-centric engineering culture. All technical problems are grounded in real fintech scenarios. The LLD round specifically tested payment domain knowledge \u2014 generic designs scored lower. They value engineers who understand the business impact of technical decisions. Excellent ESOP structure.",
    tips: [
      "Study the UPI payment flow end-to-end \u2014 NPCI, bank APIs, transaction states",
      "Know Kafka exactly-once semantics: idempotent producers + transactional consumers",
      "Practice circuit breaker, retry, and bulkhead patterns \u2014 essential for payment systems",
      "Spring AOP is asked in almost every PhonePe interview \u2014 know it inside out"
    ]
  }
];

// src/app/features/experiences/exp-detail.component.ts
var _forTrack0 = ($index, $item) => $item.roundNumber;
var _forTrack1 = ($index, $item) => $item.label;
function ExpDetailComponent_Conditional_5_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", tag_r1);
  }
}
function ExpDetailComponent_Conditional_5_For_61_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const round_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", round_r3.duration, " ");
  }
}
function ExpDetailComponent_Conditional_5_For_61_Conditional_9_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r5);
  }
}
function ExpDetailComponent_Conditional_5_For_61_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61)(4, "span", 62);
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275text(6, " Questions Asked ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 64);
    \u0275\u0275repeaterCreate(8, ExpDetailComponent_Conditional_5_For_61_Conditional_9_For_9_Template, 4, 1, "li", 65, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const round_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(round_r3.description);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(round_r3.questions);
  }
}
function ExpDetailComponent_Conditional_5_For_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function ExpDetailComponent_Conditional_5_For_61_Template_div_click_0_listener() {
      const round_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRound(round_r3.roundNumber));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54)(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExpDetailComponent_Conditional_5_For_61_Conditional_7_Template, 3, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExpDetailComponent_Conditional_5_For_61_Conditional_9_Template, 10, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const round_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("round-expanded", ctx_r3.expandedRound() === round_r3.roundNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(round_r3.roundNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(round_r3.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(round_r3.duration ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r3.expandedRound() === round_r3.roundNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.expandedRound() === round_r3.roundNumber ? 9 : -1);
  }
}
function ExpDetailComponent_Conditional_5_For_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tip_r6 = ctx.$implicit;
    const \u0275$index_172_r7 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_172_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tip_r6);
  }
}
function ExpDetailComponent_Conditional_5_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "span", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r8 = ctx.$implicit;
    \u0275\u0275property("href", res_r8.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classMap(res_r8.icon);
    \u0275\u0275styleProp("color", res_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(res_r8.label);
  }
}
function ExpDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18);
    \u0275\u0275element(18, "i", 19);
    \u0275\u0275elementStart(19, "span", 20);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 21);
    \u0275\u0275text(22, "Rounds");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 22);
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275element(25, "i", 23);
    \u0275\u0275elementStart(26, "span", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 21);
    \u0275\u0275text(29, "Experience");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "div", 22);
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275element(32, "i", 24);
    \u0275\u0275elementStart(33, "span", 20);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 21);
    \u0275\u0275text(36, "Total Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 25)(38, "section", 26)(39, "div", 27);
    \u0275\u0275element(40, "i", 28);
    \u0275\u0275elementStart(41, "span", 29);
    \u0275\u0275text(42, "Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 30)(44, "p", 31);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "section", 26)(47, "div", 27);
    \u0275\u0275element(48, "i", 32);
    \u0275\u0275elementStart(49, "span", 29);
    \u0275\u0275text(50, "Topics Covered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 33);
    \u0275\u0275repeaterCreate(52, ExpDetailComponent_Conditional_5_For_53_Template, 2, 1, "span", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "section", 26)(55, "div", 27);
    \u0275\u0275element(56, "i", 35);
    \u0275\u0275elementStart(57, "span", 29);
    \u0275\u0275text(58, "Interview Rounds");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 36);
    \u0275\u0275repeaterCreate(60, ExpDetailComponent_Conditional_5_For_61_Template, 10, 8, "div", 37, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "section", 26)(63, "div", 27);
    \u0275\u0275element(64, "i", 38);
    \u0275\u0275elementStart(65, "span", 29);
    \u0275\u0275text(66, "Pro Tips");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 39);
    \u0275\u0275repeaterCreate(68, ExpDetailComponent_Conditional_5_For_69_Template, 5, 2, "div", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "section", 26)(71, "div", 27);
    \u0275\u0275element(72, "i", 41);
    \u0275\u0275elementStart(73, "span", 29);
    \u0275\u0275text(74, "Preparation Resources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 42);
    \u0275\u0275repeaterCreate(76, ExpDetailComponent_Conditional_5_For_77_Template, 5, 6, "a", 43, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 44)(79, "p", 45);
    \u0275\u0275text(80, "Was this helpful?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 46)(82, "button", 47);
    \u0275\u0275element(83, "i", 48);
    \u0275\u0275text(84, " Helpful ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 49);
    \u0275\u0275element(86, "i", 50);
    \u0275\u0275text(87, " Share ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r9 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--brand", ctx_r3.brandColor(e_r9.company));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r3.logoBg(e_r9.company));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.companyIcon(e_r9.company));
    \u0275\u0275styleProp("color", ctx_r3.brandColor(e_r9.company));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r9.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r9.role);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-r", e_r9.result);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.resultLabel(e_r9.result));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-d", e_r9.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r9.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(e_r9.date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(e_r9.rounds.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", e_r9.yearsOfExperience, "y");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.totalDuration(e_r9));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(e_r9.summary);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(e_r9.tags);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(e_r9.rounds);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(e_r9.tips);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.prepResources(e_r9));
  }
}
function ExpDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementStart(2, "h2", 73);
    \u0275\u0275text(3, "Experience Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 74);
    \u0275\u0275text(5, "This story may have been removed or the link is invalid.");
    \u0275\u0275elementEnd()();
  }
}
var ExpDetailComponent = class _ExpDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  adGate = inject(AdGateService);
  expId = signal("", ...ngDevMode ? [{ debugName: "expId" }] : []);
  expandedRound = signal(1, ...ngDevMode ? [{ debugName: "expandedRound" }] : []);
  exp = computed(() => {
    const id = this.expId();
    return id ? CURATED_EXPERIENCES.find((e) => e.id === id) : void 0;
  }, ...ngDevMode ? [{ debugName: "exp" }] : []);
  constructor() {
    this.route.paramMap.subscribe(async (params) => {
      const id = params.get("id") ?? "";
      const itemId = `exp::${id}`;
      if (!this.adGate.isItemUnlocked(itemId)) {
        const allowed = await this.adGate.unlockItemWithAd(itemId, "this interview experience");
        if (!allowed) {
          this.router.navigate(["/experiences"]);
          return;
        }
      }
      this.expId.set(id);
      this.expandedRound.set(1);
    });
  }
  toggleRound(n) {
    this.expandedRound.update((curr) => curr === n ? null : n);
  }
  resultLabel(r) {
    const map = { offer: "\u2713 Offer Received", rejected: "\u2717 Rejected", pending: "\u23F3 Pending", withdrew: "Withdrew" };
    return map[r] ?? r;
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  }
  brandColor(company) {
    const map = {
      Amazon: "#f59e0b",
      Google: "#6366f1",
      Flipkart: "#f97316",
      Microsoft: "#22d3ee",
      Walmart: "#3b82f6",
      "J.P. Morgan": "#8b5cf6",
      Zomato: "#ef4444",
      Infosys: "#10b981",
      Swiggy: "#f97316",
      PayPal: "#009cde",
      Uber: "#e2e8f0",
      PhonePe: "#6d28d9"
    };
    return map[company] ?? "#10b981";
  }
  logoBg(company) {
    const map = {
      Amazon: "rgba(245,158,11,0.12)",
      Google: "rgba(99,102,241,0.12)",
      Flipkart: "rgba(249,115,22,0.12)",
      Microsoft: "rgba(34,211,238,0.12)",
      Walmart: "rgba(59,130,246,0.12)",
      "J.P. Morgan": "rgba(139,92,246,0.12)",
      Zomato: "rgba(239,68,68,0.12)",
      Infosys: "rgba(16,185,129,0.12)",
      Swiggy: "rgba(249,115,22,0.12)",
      PayPal: "rgba(0,156,222,0.12)",
      Uber: "rgba(226,232,240,0.08)",
      PhonePe: "rgba(109,40,217,0.12)"
    };
    return map[company] ?? "rgba(16,185,129,0.12)";
  }
  companyIcon(company) {
    const map = {
      Amazon: "fa-brands fa-amazon",
      Google: "fa-brands fa-google",
      Flipkart: "fa-solid fa-shopping-cart",
      Microsoft: "fa-brands fa-microsoft",
      Walmart: "fa-solid fa-store",
      "J.P. Morgan": "fa-solid fa-building-columns",
      Zomato: "fa-solid fa-utensils",
      Infosys: "fa-solid fa-laptop-code",
      Swiggy: "fa-solid fa-bowl-food",
      PayPal: "fa-brands fa-paypal",
      Uber: "fa-solid fa-car",
      PhonePe: "fa-solid fa-mobile-screen"
    };
    return map[company] ?? "fa-solid fa-building";
  }
  totalDuration(e) {
    let total = 0;
    e.rounds.forEach((r) => {
      if (r.duration) {
        const match = r.duration.match(/(\d+)/);
        if (match)
          total += parseInt(match[1]);
      }
    });
    if (total === 0)
      return "N/A";
    return total >= 60 ? `${Math.round(total / 60)}h` : `${total}m`;
  }
  prepResources(e) {
    const tag = e.tags[0] ?? "java";
    return [
      { label: "LeetCode Practice", icon: "fa-solid fa-code", color: "#f59e0b", href: "https://leetcode.com" },
      { label: "System Design", icon: "fa-solid fa-diagram-project", color: "#6366f1", href: "https://github.com/donnemartin/system-design-primer" },
      { label: `${e.company} Glassdoor`, icon: "fa-solid fa-star-half-stroke", color: "#10b981", href: `https://www.glassdoor.com/search?keyword=${encodeURIComponent(e.company)}` },
      { label: `DSA Patterns`, icon: "fa-solid fa-sitemap", color: "#ec4899", href: "https://github.com/SeanPrashad/leetcode-patterns" }
    ];
  }
  static \u0275fac = function ExpDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpDetailComponent, selectors: [["app-exp-detail"]], decls: 7, vars: 1, consts: [[1, "ion-no-border"], [1, "det-toolbar"], ["slot", "start"], ["defaultHref", "/experiences", "text", "", "color", "light"], [1, "det-content"], [1, "not-found"], [1, "det-hero"], [1, "det-hero-glow"], [1, "det-hero-inner"], [1, "det-logo-wrap"], [1, "det-logo-icon"], [1, "det-company"], [1, "det-role"], [1, "det-badges"], [1, "det-result"], [1, "det-diff"], [1, "det-date"], [1, "stats-row"], [1, "stat-box"], [1, "fa-solid", "fa-rotate", "stat-icon", 2, "color", "#10b981"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-divider"], [1, "fa-solid", "fa-user-tie", "stat-icon", 2, "color", "#6366f1"], [1, "fa-solid", "fa-clock", "stat-icon", 2, "color", "#f59e0b"], [1, "det-body"], [1, "det-section"], [1, "section-hd"], [1, "fa-solid", "fa-quote-left", "sh-ic", 2, "color", "#10b981"], [1, "sh-txt"], [1, "summary-card"], [1, "summary-text"], [1, "fa-solid", "fa-tags", "sh-ic", 2, "color", "#6366f1"], [1, "tag-wrap"], [1, "det-tag"], [1, "fa-solid", "fa-layer-group", "sh-ic", 2, "color", "#f59e0b"], [1, "rounds-list"], [1, "round-card", 3, "round-expanded"], [1, "fa-solid", "fa-lightbulb", "sh-ic", 2, "color", "#facc15"], [1, "tips-list"], [1, "tip-card"], [1, "fa-solid", "fa-book-open", "sh-ic", 2, "color", "#ec4899"], [1, "resources-grid"], [1, "res-card", 3, "href"], [1, "cta-strip"], [1, "cta-strip-txt"], [1, "cta-strip-actions"], [1, "cta-like"], [1, "fa-solid", "fa-thumbs-up"], [1, "cta-share"], [1, "fa-solid", "fa-share-nodes"], [1, "round-card", 3, "click"], [1, "round-header"], [1, "round-num-badge"], [1, "round-meta"], [1, "round-type"], [1, "round-dur"], [1, "fa-solid", "fa-chevron-down", "round-chevron"], [1, "round-body"], [1, "fa-regular", "fa-clock"], [1, "round-desc"], [1, "qs-section"], [1, "qs-header"], [1, "fa-solid", "fa-circle-question", "qs-icon"], [1, "qs-list"], [1, "qs-item"], [1, "fa-solid", "fa-arrow-right", "qs-bullet"], [1, "tip-num"], [1, "tip-text"], [1, "res-icon"], [1, "res-label"], [1, "fa-solid", "fa-arrow-up-right-from-square", "res-ext"], [1, "fa-solid", "fa-circle-xmark", "nf-icon"], [1, "nf-title"], [1, "nf-sub"]], template: function ExpDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
      \u0275\u0275element(3, "ion-back-button", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "ion-content", 4);
      \u0275\u0275conditionalCreate(5, ExpDetailComponent_Conditional_5_Template, 88, 19)(6, ExpDetailComponent_Conditional_6_Template, 6, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(5);
      \u0275\u0275conditional((tmp_0_0 = ctx.exp()) ? 5 : 6, tmp_0_0);
    }
  }, dependencies: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], styles: ["\n\n.det-toolbar[_ngcontent-%COMP%] {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.det-content[_ngcontent-%COMP%] {\n  --background: #0b1120;\n}\n.det-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 16px 20px 28px;\n  overflow: hidden;\n  text-align: center;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(from var(--brand, #10b981) r g b / 0.08) 0%,\n      transparent 100%);\n}\n.det-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 240px;\n  height: 240px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(from var(--brand, #10b981) r g b / 0.12) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.det-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.det-logo-wrap[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.det-logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.det-company[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.det-role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 14px;\n}\n.det-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.det-result[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.det-result[data-r=offer][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.det-result[data-r=rejected][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.det-result[data-r=pending][_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.det-result[data-r=withdrew][_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.15);\n  color: #94a3b8;\n}\n.det-diff[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.det-diff[data-d=easy][_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.det-diff[data-d=medium][_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.1);\n  color: #facc15;\n  border: 1px solid rgba(234, 179, 8, 0.2);\n}\n.det-diff[data-d=hard][_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.det-date[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #475569;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 16px 24px;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 16px 8px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.det-body[_ngcontent-%COMP%] {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.det-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.section-hd[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sh-ic[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.sh-txt[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-left: 3px solid #10b981;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  line-height: 1.7;\n  margin: 0;\n}\n.tag-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n.det-tag[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 7px;\n  padding: 4px 10px;\n  transition: all 0.2s;\n}\n.det-tag[_ngcontent-%COMP%]:hover {\n  color: #94a3b8;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.rounds-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.round-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.round-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.045);\n}\n.round-expanded[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.25) !important;\n}\n.round-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n}\n.round-num-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  background: rgba(245, 158, 11, 0.12);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  color: #f59e0b;\n  font-size: 0.75rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.round-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.round-type[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.round-dur[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.round-dur[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n}\n.round-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  color: #475569;\n  transition: transform 0.25s ease;\n}\n.round-chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: #f59e0b;\n}\n.round-body[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  margin-top: 0;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.round-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 12px 0 14px;\n}\n.qs-section[_ngcontent-%COMP%] {\n}\n.qs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.qs-icon[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #6366f1;\n}\n.qs-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.qs-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.qs-bullet[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: #6366f1;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.tips-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tip-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: rgba(250, 204, 21, 0.04);\n  border: 1px solid rgba(250, 204, 21, 0.1);\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.tip-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  color: #facc15;\n  font-size: 0.7rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tip-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.resources-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.res-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s;\n}\n.res-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  transform: translateY(-1px);\n}\n.res-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.res-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #94a3b8;\n  flex: 1;\n}\n.res-ext[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: #475569;\n  flex-shrink: 0;\n}\n.cta-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  margin-top: 4px;\n}\n.cta-strip-txt[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n}\n.cta-strip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cta-like[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 10px;\n  color: #10b981;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-like[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.18);\n}\n.cta-share[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-share[_ngcontent-%COMP%]:hover {\n  color: #e2e8f0;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 32px;\n  text-align: center;\n}\n.nf-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #334155;\n  margin-bottom: 16px;\n}\n.nf-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n}\n.nf-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .det-toolbar[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .det-toolbar[_ngcontent-%COMP%] {\n  --background: #1B4332;\n  --color: white;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .det-content[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .det-content[_ngcontent-%COMP%] {\n  --background: #F5F7F2;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .round-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .round-card[_ngcontent-%COMP%], \nhtml:not(.dark)[_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .det-company[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .det-company[_ngcontent-%COMP%] {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .det-role[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .det-role[_ngcontent-%COMP%] {\n  color: #52665A;\n}\nhtml:not(.dark)[_nghost-%COMP%]   .sh-txt[_ngcontent-%COMP%], html:not(.dark)   [_nghost-%COMP%]   .sh-txt[_ngcontent-%COMP%] {\n  color: #52665A;\n}\n/*# sourceMappingURL=exp-detail.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpDetailComponent, [{
    type: Component,
    args: [{ selector: "app-exp-detail", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton], template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="det-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/experiences" text="" color="light" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="det-content">
      @if (exp(); as e) {

        <!-- Hero Banner -->
        <div class="det-hero" [style.--brand]="brandColor(e.company)">
          <div class="det-hero-glow"></div>
          <div class="det-hero-inner">
            <div class="det-logo-wrap" [style.background]="logoBg(e.company)">
              <i [class]="companyIcon(e.company)" class="det-logo-icon" [style.color]="brandColor(e.company)"></i>
            </div>
            <h1 class="det-company">{{ e.company }}</h1>
            <p class="det-role">{{ e.role }}</p>
            <div class="det-badges">
              <span class="det-result" [attr.data-r]="e.result">{{ resultLabel(e.result) }}</span>
              <span class="det-diff" [attr.data-d]="e.difficulty">{{ e.difficulty }}</span>
              <span class="det-date">{{ formatDate(e.date) }}</span>
            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="stats-row">
          <div class="stat-box">
            <i class="fa-solid fa-rotate stat-icon" style="color:#10b981"></i>
            <span class="stat-val">{{ e.rounds.length }}</span>
            <span class="stat-lbl">Rounds</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <i class="fa-solid fa-user-tie stat-icon" style="color:#6366f1"></i>
            <span class="stat-val">{{ e.yearsOfExperience }}y</span>
            <span class="stat-lbl">Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-box">
            <i class="fa-solid fa-clock stat-icon" style="color:#f59e0b"></i>
            <span class="stat-val">{{ totalDuration(e) }}</span>
            <span class="stat-lbl">Total Time</span>
          </div>
        </div>

        <div class="det-body">

          <!-- Summary -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-quote-left sh-ic" style="color:#10b981"></i>
              <span class="sh-txt">Summary</span>
            </div>
            <div class="summary-card">
              <p class="summary-text">{{ e.summary }}</p>
            </div>
          </section>

          <!-- Tags -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-tags sh-ic" style="color:#6366f1"></i>
              <span class="sh-txt">Topics Covered</span>
            </div>
            <div class="tag-wrap">
              @for (tag of e.tags; track tag) {
                <span class="det-tag">#{{ tag }}</span>
              }
            </div>
          </section>

          <!-- Interview Rounds -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-layer-group sh-ic" style="color:#f59e0b"></i>
              <span class="sh-txt">Interview Rounds</span>
            </div>

            <div class="rounds-list">
              @for (round of e.rounds; track round.roundNumber) {
                <div class="round-card" [class.round-expanded]="expandedRound() === round.roundNumber"
                  (click)="toggleRound(round.roundNumber)">

                  <!-- Round Header -->
                  <div class="round-header">
                    <div class="round-num-badge">{{ round.roundNumber }}</div>
                    <div class="round-meta">
                      <span class="round-type">{{ round.type }}</span>
                      @if (round.duration) {
                        <span class="round-dur">
                          <i class="fa-regular fa-clock"></i>
                          {{ round.duration }}
                        </span>
                      }
                    </div>
                    <i class="fa-solid fa-chevron-down round-chevron"
                      [class.rotated]="expandedRound() === round.roundNumber"></i>
                  </div>

                  <!-- Round Body (expanded) -->
                  @if (expandedRound() === round.roundNumber) {
                    <div class="round-body">
                      <p class="round-desc">{{ round.description }}</p>

                      <div class="qs-section">
                        <span class="qs-header">
                          <i class="fa-solid fa-circle-question qs-icon"></i>
                          Questions Asked
                        </span>
                        <ul class="qs-list">
                          @for (q of round.questions; track q) {
                            <li class="qs-item">
                              <i class="fa-solid fa-arrow-right qs-bullet"></i>
                              <span>{{ q }}</span>
                            </li>
                          }
                        </ul>
                      </div>
                    </div>
                  }
                </div>
              }
            </div>
          </section>

          <!-- Pro Tips -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-lightbulb sh-ic" style="color:#facc15"></i>
              <span class="sh-txt">Pro Tips</span>
            </div>
            <div class="tips-list">
              @for (tip of e.tips; track tip; let i = $index) {
                <div class="tip-card">
                  <div class="tip-num">{{ i + 1 }}</div>
                  <p class="tip-text">{{ tip }}</p>
                </div>
              }
            </div>
          </section>

          <!-- Preparation Resources -->
          <section class="det-section">
            <div class="section-hd">
              <i class="fa-solid fa-book-open sh-ic" style="color:#ec4899"></i>
              <span class="sh-txt">Preparation Resources</span>
            </div>
            <div class="resources-grid">
              @for (res of prepResources(e); track res.label) {
                <a [href]="res.href" class="res-card">
                  <i [class]="res.icon" class="res-icon" [style.color]="res.color"></i>
                  <span class="res-label">{{ res.label }}</span>
                  <i class="fa-solid fa-arrow-up-right-from-square res-ext"></i>
                </a>
              }
            </div>
          </section>

          <!-- Share / Helpful CTA -->
          <div class="cta-strip">
            <p class="cta-strip-txt">Was this helpful?</p>
            <div class="cta-strip-actions">
              <button class="cta-like">
                <i class="fa-solid fa-thumbs-up"></i>
                Helpful
              </button>
              <button class="cta-share">
                <i class="fa-solid fa-share-nodes"></i>
                Share
              </button>
            </div>
          </div>

        </div>
      } @else {
        <div class="not-found">
          <i class="fa-solid fa-circle-xmark nf-icon"></i>
          <h2 class="nf-title">Experience Not Found</h2>
          <p class="nf-sub">This story may have been removed or the link is invalid.</p>
        </div>
      }
    </ion-content>
  `, styles: ["/* angular:styles/component:css;84ddcdac765b966379a7d6b9ee47b4d3dbc230b641f7217ff588b1dcda10315c;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/experiences/exp-detail.component.ts */\n.det-toolbar {\n  --background: #0b1120;\n  --color: white;\n  --border-style: none;\n}\n.det-content {\n  --background: #0b1120;\n}\n.det-hero {\n  position: relative;\n  padding: 16px 20px 28px;\n  overflow: hidden;\n  text-align: center;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(from var(--brand, #10b981) r g b / 0.08) 0%,\n      transparent 100%);\n}\n.det-hero-glow {\n  position: absolute;\n  top: -40px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 240px;\n  height: 240px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(from var(--brand, #10b981) r g b / 0.12) 0%,\n      transparent 65%);\n  pointer-events: none;\n}\n.det-hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.det-logo-wrap {\n  width: 72px;\n  height: 72px;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.det-logo-icon {\n  font-size: 1.8rem;\n}\n.det-company {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #e2e8f0;\n  letter-spacing: -0.03em;\n  margin: 0 0 4px;\n}\n.det-role {\n  font-size: 0.8rem;\n  color: #64748b;\n  font-weight: 500;\n  margin: 0 0 14px;\n}\n.det-badges {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.det-result {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.det-result[data-r=offer] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n.det-result[data-r=rejected] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.det-result[data-r=pending] {\n  background: rgba(234, 179, 8, 0.15);\n  color: #facc15;\n}\n.det-result[data-r=withdrew] {\n  background: rgba(148, 163, 184, 0.15);\n  color: #94a3b8;\n}\n.det-diff {\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.det-diff[data-d=easy] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.det-diff[data-d=medium] {\n  background: rgba(234, 179, 8, 0.1);\n  color: #facc15;\n  border: 1px solid rgba(234, 179, 8, 0.2);\n}\n.det-diff[data-d=hard] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.det-date {\n  font-size: 0.65rem;\n  font-weight: 500;\n  color: #475569;\n}\n.stats-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 0 16px 24px;\n  background: rgba(255, 255, 255, 0.035);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 16px;\n  padding: 16px 8px;\n}\n.stat-box {\n  text-align: center;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.stat-icon {\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n.stat-val {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  letter-spacing: -0.02em;\n}\n.stat-lbl {\n  font-size: 0.58rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.stat-divider {\n  width: 1px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.07);\n}\n.det-body {\n  padding: 0 16px 100px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.det-section {\n  margin-bottom: 28px;\n}\n.section-hd {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.sh-ic {\n  font-size: 0.75rem;\n}\n.sh-txt {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n}\n.summary-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-left: 3px solid #10b981;\n  border-radius: 12px;\n  padding: 16px 18px;\n}\n.summary-text {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  line-height: 1.7;\n  margin: 0;\n}\n.tag-wrap {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n}\n.det-tag {\n  font-size: 0.65rem;\n  font-weight: 600;\n  color: #64748b;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 7px;\n  padding: 4px 10px;\n  transition: all 0.2s;\n}\n.det-tag:hover {\n  color: #94a3b8;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.rounds-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.round-card {\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.round-card:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n  background: rgba(255, 255, 255, 0.045);\n}\n.round-expanded {\n  border-color: rgba(245, 158, 11, 0.25) !important;\n}\n.round-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n}\n.round-num-badge {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  background: rgba(245, 158, 11, 0.12);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  color: #f59e0b;\n  font-size: 0.75rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.round-meta {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.round-type {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #e2e8f0;\n}\n.round-dur {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.round-dur i {\n  font-size: 0.55rem;\n}\n.round-chevron {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  color: #475569;\n  transition: transform 0.25s ease;\n}\n.round-chevron.rotated {\n  transform: rotate(180deg);\n  color: #f59e0b;\n}\n.round-body {\n  padding: 0 16px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  margin-top: 0;\n  animation: slideDown 0.2s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.round-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.6;\n  margin: 12px 0 14px;\n}\n.qs-section {\n}\n.qs-header {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n  margin-bottom: 10px;\n}\n.qs-icon {\n  font-size: 0.65rem;\n  color: #6366f1;\n}\n.qs-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.qs-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  line-height: 1.5;\n}\n.qs-bullet {\n  font-size: 0.55rem;\n  color: #6366f1;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.tips-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tip-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: rgba(250, 204, 21, 0.04);\n  border: 1px solid rgba(250, 204, 21, 0.1);\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.tip-num {\n  flex-shrink: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: rgba(250, 204, 21, 0.12);\n  border: 1px solid rgba(250, 204, 21, 0.25);\n  color: #facc15;\n  font-size: 0.7rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tip-text {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n.resources-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.res-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.2s;\n}\n.res-card:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.12);\n  transform: translateY(-1px);\n}\n.res-icon {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.res-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #94a3b8;\n  flex: 1;\n}\n.res-ext {\n  font-size: 0.55rem;\n  color: #475569;\n  flex-shrink: 0;\n}\n.cta-strip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 14px;\n  margin-top: 4px;\n}\n.cta-strip-txt {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin: 0;\n}\n.cta-strip-actions {\n  display: flex;\n  gap: 8px;\n}\n.cta-like {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  border-radius: 10px;\n  color: #10b981;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-like:hover {\n  background: rgba(16, 185, 129, 0.18);\n}\n.cta-share {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 10px;\n  color: #64748b;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-share:hover {\n  color: #e2e8f0;\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 32px;\n  text-align: center;\n}\n.nf-icon {\n  font-size: 3rem;\n  color: #334155;\n  margin-bottom: 16px;\n}\n.nf-title {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #e2e8f0;\n  margin: 0 0 8px;\n}\n.nf-sub {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n}\n:host-context(html:not(.dark)) .det-toolbar {\n  --background: #1B4332;\n  --color: white;\n}\n:host-context(html:not(.dark)) .det-content {\n  --background: #F5F7F2;\n}\n:host-context(html:not(.dark)) .round-card,\n:host-context(html:not(.dark)) .summary-card {\n  background: #ffffff !important;\n  border: 1px solid #D6DDD2 !important;\n}\n:host-context(html:not(.dark)) .det-company {\n  color: #1B1B1B;\n  -webkit-text-fill-color: #1B1B1B;\n}\n:host-context(html:not(.dark)) .det-role {\n  color: #52665A;\n}\n:host-context(html:not(.dark)) .sh-txt {\n  color: #52665A;\n}\n/*# sourceMappingURL=exp-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpDetailComponent, { className: "ExpDetailComponent", filePath: "src/app/features/experiences/exp-detail.component.ts", lineNumber: 563 });
})();
export {
  ExpDetailComponent
};
//# sourceMappingURL=chunk-FU6WOBQ5.js.map
