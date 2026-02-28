import { InterviewExperience } from '../experience.model';

export const CURATED_EXPERIENCES: InterviewExperience[] = [
  {
    id: 'exp-amazon-sde2-2024',
    company: 'Amazon',
    role: 'SDE-2 (Java Backend)',
    yearsOfExperience: 4,
    difficulty: 'hard',
    result: 'offer',
    source: 'curated',
    date: '2024-09-15',
    tags: ['java', 'spring-boot', 'microservices', 'system-design', 'lld'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Online Assessment',
        description: 'Two DSA problems on HackerRank, 90 minutes.',
        questions: [
          'Sliding window maximum (Monotonic Deque)',
          'LRU Cache implementation using LinkedHashMap'
        ],
        duration: '90 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Phone Screen',
        description: 'Spring Boot microservices discussion + one live coding problem.',
        questions: [
          'Explain how @Transactional works internally in Spring',
          'Design a rate limiter (Token Bucket algorithm)',
          'How does ConcurrentHashMap differ from Hashtable?'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'System Design',
        description: 'Design a notification service (email + push + SMS) for 10M users.',
        questions: [
          'Design scalable notification system with retry logic',
          'How to handle DLQ (Dead Letter Queues) with Kafka?',
          'Database sharding strategy for notifications table'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 4,
        type: 'Bar Raiser',
        description: 'Leadership principles + deep behavioral questions.',
        questions: [
          'Tell me about a time you disagreed with your manager',
          'Describe the most complex system you designed',
          'How do you deal with technical debt in a fast-moving team?'
        ],
        duration: '60 minutes'
      }
    ],
    summary: "Amazon's process is intense and LP-heavy. Every technical round includes behavioral components tied to Leadership Principles. System design focused on failure modes and scalability. The bar raiser round is intentionally adversarial.",
    tips: [
      'Prepare 6-8 STAR stories mapped to Amazon Leadership Principles',
      'Know Spring Boot auto-configuration and @Transactional internals deeply',
      'Practice system design with explicit focus on failure modes and retries',
      'LeetCode medium is the baseline — solve at least 50 before applying'
    ]
  },
  {
    id: 'exp-google-swe3-2024',
    company: 'Google',
    role: 'Software Engineer L3',
    yearsOfExperience: 2,
    difficulty: 'hard',
    result: 'offer',
    source: 'curated',
    date: '2024-07-20',
    tags: ['java', 'algorithms', 'data-structures', 'system-design'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Phone Screen',
        description: 'One coding problem on Google Docs. Focus on clean code and edge cases.',
        questions: ['Find all anagram groups from a list of words'],
        duration: '45 minutes'
      },
      {
        roundNumber: 2,
        type: 'Onsite - Coding 1',
        description: 'Graph traversal problem.',
        questions: [
          'Number of Islands variant with diagonal connectivity',
          'Follow-up: What if the grid is distributed across machines?'
        ],
        duration: '45 minutes'
      },
      {
        roundNumber: 3,
        type: 'Onsite - Coding 2',
        description: 'Dynamic programming with space optimization.',
        questions: ['Longest common subsequence — optimize to O(n) space'],
        duration: '45 minutes'
      },
      {
        roundNumber: 4,
        type: 'System Design',
        description: 'Design Google Drive file storage and sharing system.',
        questions: [
          'Storage architecture for files of varying sizes',
          'Permission model for file sharing',
          'How to handle concurrent edits?'
        ],
        duration: '45 minutes'
      },
      {
        roundNumber: 5,
        type: 'Googleyness',
        description: 'Behavioral round focused on collaboration and ambiguity.',
        questions: [
          'Tell me about a time you worked with an underperforming team member',
          'How do you approach a problem with unclear requirements?'
        ],
        duration: '45 minutes'
      }
    ],
    summary: 'Google focuses heavily on coding fundamentals and clean code. Explaining your approach before writing code is expected. System design was architecture-focused rather than implementation-focused.',
    tips: [
      'Solve 100+ LeetCode problems — focus on graphs, DP, and trees',
      'Practice explaining your thought process out loud while coding',
      'For system design, focus on trade-offs rather than a single correct design',
      'Google Docs coding means no IDE autocomplete — practice in a plain text editor'
    ]
  },
  {
    id: 'exp-flipkart-sde2-2024',
    company: 'Flipkart',
    role: 'SDE-2 (Java Microservices)',
    yearsOfExperience: 3,
    difficulty: 'medium',
    result: 'offer',
    source: 'curated',
    date: '2024-05-10',
    tags: ['java', 'spring-boot', 'microservices', 'kafka', 'redis'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Online Assessment',
        description: 'Coding test on HackerEarth — 3 problems in 90 minutes.',
        questions: [
          'Array manipulation with sliding window',
          'Binary tree path sum',
          'String parsing problem'
        ],
        duration: '90 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Round 1',
        description: 'Java and Spring Boot internals.',
        questions: [
          'Explain how Spring handles circular dependencies',
          'What happens when you call a @Transactional method from the same class?',
          'Implement a thread-safe singleton (all three approaches)',
          'What is the N+1 problem and how do you solve it in JPA?'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'System Design',
        description: 'Design the order management system for an e-commerce platform.',
        questions: [
          'Handle inventory reservation with distributed transactions',
          'How to use Kafka for order event streaming?',
          'How to handle payment failures and rollbacks?'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 4,
        type: 'HR Round',
        description: 'Compensation discussion and cultural fit.',
        questions: ['Why Flipkart?', 'Where do you see yourself in 3 years?'],
        duration: '30 minutes'
      }
    ],
    summary: 'Flipkart focuses on practical Spring Boot knowledge and real-world system design. Strong Java and Spring Boot fundamentals are expected. Questions were grounded in actual engineering challenges.',
    tips: [
      'Deep knowledge of Spring internals (proxies, transaction propagation) is essential',
      'Know Kafka consumer groups, offset management, and exactly-once semantics',
      'Be ready to discuss Redis caching strategies and cache invalidation',
      'Practice LLD problems before the interview'
    ]
  },
  {
    id: 'exp-microsoft-sde2-2024',
    company: 'Microsoft',
    role: 'SDE-2 (Backend Java)',
    yearsOfExperience: 4,
    difficulty: 'medium',
    result: 'offer',
    source: 'curated',
    date: '2024-03-22',
    tags: ['java', 'system-design', 'oop', 'design-patterns', 'lld'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Phone Screen',
        description: 'Coding problem + OOP discussion over Teams.',
        questions: [
          'Reverse a linked list in groups of K',
          'Design a parking lot system (LLD)'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 2,
        type: 'Onsite - Coding',
        description: 'Two coding problems with emphasis on clean, testable code.',
        questions: ['Implement an LFU cache', 'Design a simple event bus with subscribe/publish'],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'Onsite - System Design',
        description: 'Design a URL shortener (bit.ly clone).',
        questions: [
          'Database schema and short code generation at scale',
          'Caching layer for high read throughput',
          'Analytics: track URL click counts'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 4,
        type: 'Behavioral',
        description: 'Microsoft growth mindset and collaboration values.',
        questions: [
          'Tell me about difficult feedback you received and what you did with it',
          'Describe how you helped a struggling colleague'
        ],
        duration: '45 minutes'
      }
    ],
    summary: 'Microsoft interviews are well-structured and less pressure-heavy than Amazon/Google. They value growth mindset and collaborative problem-solving. LLD was tested more than expected. Interviewers were willing to give hints.',
    tips: [
      'Practice common LLD problems: parking lot, hotel booking, chess game',
      'Brush up on SOLID principles — they may ask you to refactor bad code',
      'Microsoft values clarity of communication — explain before coding',
      'Growth mindset stories: show you learned from failure, not just success'
    ]
  },
  {
    id: 'exp-walmart-se3-2024',
    company: 'Walmart Global Tech',
    role: 'Software Engineer 3 (Java)',
    yearsOfExperience: 5,
    difficulty: 'medium',
    result: 'offer',
    source: 'curated',
    date: '2024-01-18',
    tags: ['java', 'spring-boot', 'microservices', 'elasticsearch', 'database'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Technical Round 1',
        description: 'Core Java fundamentals and Spring Boot.',
        questions: [
          'Difference between HashMap and ConcurrentHashMap internals',
          'Java memory model and happens-before guarantee',
          'How does Spring Boot handle transaction propagation?',
          'Write a custom Spring AOP annotation'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Round 2 - DSA',
        description: 'Data structure problems on a coding platform.',
        questions: [
          'Find the kth largest element in a stream',
          'Detect cycle in a directed graph',
          'Data structure with O(1) insert, delete, and getRandom'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'System Design',
        description: 'Design a product catalog service for an e-commerce platform.',
        questions: [
          'Handle millions of product search queries per second',
          'Elasticsearch integration for full-text search',
          'How to keep search index in sync with database?'
        ],
        duration: '45 minutes'
      }
    ],
    summary: 'Walmart focuses on practical engineering skills rather than algorithmic puzzles. Strong Java fundamentals are expected. System design was e-commerce domain specific.',
    tips: [
      'Java fundamentals are tested very deeply — know memory model, GC, and concurrency',
      'Understand database indexing, query optimization, and connection pooling',
      'Know Elasticsearch basics — it comes up frequently in product companies',
      'Be prepared to discuss real-world Spring Boot application architecture'
    ]
  },
  {
    id: 'exp-jpmorgan-javadev-2024',
    company: 'J.P. Morgan',
    role: 'Java Developer (Associate)',
    yearsOfExperience: 3,
    difficulty: 'medium',
    result: 'offer',
    source: 'curated',
    date: '2024-08-07',
    tags: ['java', 'spring-boot', 'multithreading', 'concurrency', 'design-patterns'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Technical Round 1',
        description: 'Core Java with heavy focus on concurrency.',
        questions: [
          'Explain volatile keyword and when to use it',
          'Implement producer-consumer using BlockingQueue',
          'Difference between synchronized and ReentrantLock',
          'How does ThreadLocal work? Give a use case.'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Round 2',
        description: 'Design patterns and Spring Security.',
        questions: [
          'Implement thread-safe singleton three ways',
          'Explain Observer pattern with a Java example',
          'How does Spring Security filter chain work?',
          'Implement a custom Spring Security filter'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'Competency Round',
        description: 'Behavioral and situational questions for the financial industry.',
        questions: [
          'How do you handle high-pressure deadlines in finance systems?',
          'Tell me about a production incident you resolved',
          'How do you ensure code quality in a team setting?'
        ],
        duration: '45 minutes'
      }
    ],
    summary: 'JPMorgan focuses heavily on Java concurrency — more than most tech companies. They care about thread safety, code reliability, and production experience. Good compensation with excellent stability.',
    tips: [
      'Concurrency is non-negotiable — study ExecutorService, CompletableFuture, Fork/Join',
      'Know concurrency patterns: producer-consumer, barrier, rate limiter',
      'Production incident handling stories are very valuable in finance interviews',
      'Understand basic financial concepts (trades, settlements) as a developer'
    ]
  },
  {
    id: 'exp-zomato-sde1-2024',
    company: 'Zomato',
    role: 'SDE-1 (Java Backend)',
    yearsOfExperience: 1,
    difficulty: 'medium',
    result: 'offer',
    source: 'curated',
    date: '2024-06-14',
    tags: ['java', 'spring-boot', 'algorithms', 'lld'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Online Assessment',
        description: 'Two coding problems, 60 minutes.',
        questions: ['Two sum variant with sorted array', 'Binary search on rotated array'],
        duration: '60 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Round 1',
        description: 'Java basics and problem solving.',
        questions: [
          'Difference between == and .equals() in Java',
          'String immutability and String pool',
          'Reverse a linked list — recursive and iterative',
          'Find the first non-repeating character in a string'
        ],
        duration: '60 minutes'
      },
      {
        roundNumber: 3,
        type: 'LLD Round',
        description: 'Low-level design — food delivery domain.',
        questions: [
          'Design a food delivery order tracking system',
          'Class diagram for restaurant management',
          'Handle order state transitions (placed → confirmed → delivered)'
        ],
        duration: '60 minutes'
      }
    ],
    summary: 'Great first job experience. Interviewers were friendly and gave hints when stuck. The LLD round was domain-specific — knowing their product helped. Offer came within a week.',
    tips: [
      'For junior roles: strong OOP fundamentals and basic data structures is sufficient',
      'Research the company product before LLD — domain-relevant designs impress',
      'Practice linked list and string problems for SDE-1 level',
      'Show enthusiasm and willingness to learn — attitude matters at junior levels'
    ]
  },
  {
    id: 'exp-infosys-seniordev-2024',
    company: 'Infosys',
    role: 'Senior Developer (Java Full Stack)',
    yearsOfExperience: 6,
    difficulty: 'easy',
    result: 'offer',
    source: 'curated',
    date: '2024-02-05',
    tags: ['java', 'spring-boot', 'hibernate', 'rest-api'],
    rounds: [
      {
        roundNumber: 1,
        type: 'Technical Round 1',
        description: 'Java and Spring Boot fundamentals.',
        questions: [
          'Spring Bean lifecycle',
          '@Transactional attributes and propagation types',
          'Hibernate first level cache',
          'Lazy vs eager loading in JPA'
        ],
        duration: '45 minutes'
      },
      {
        roundNumber: 2,
        type: 'Technical Round 2',
        description: 'REST API design and database concepts.',
        questions: [
          'Design RESTful endpoints for a banking application',
          'Database normalization with examples',
          'When should you use a database index?'
        ],
        duration: '45 minutes'
      },
      {
        roundNumber: 3,
        type: 'HR Round',
        description: 'Experience and team fit.',
        questions: [
          'Walk me through your most challenging project',
          'How do you stay updated with Java ecosystem changes?'
        ],
        duration: '30 minutes'
      }
    ],
    summary: 'Infosys interview was straightforward and focused on practical knowledge. The process was respectful and supportive. Good entry point for experienced developers looking for work-life balance.',
    tips: [
      'Prepare project experience stories well — they dig into your past work',
      'Know Hibernate caching levels (L1, L2, query cache) thoroughly',
      'REST API principles: idempotency, proper status codes, versioning',
      'Brush up on database design — normalization, indexes, joins'
    ]
  }
];
