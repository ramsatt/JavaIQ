import { Question } from './question.model';

export const HIBERNATE_QUESTIONS: Question[] = [
  {
    id: 6,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() hits the database immediately and returns null if not found. load() returns a proxy and throws an exception if not found when accessed.',
    asked_metadata: '8x TCS, 6x Accenture, 5x Cognizant',
    coreConceptDescription: 'get() eagerly fetches from DB and returns null for missing records. load() returns a lazy proxy and throws ObjectNotFoundException when accessed if the record does not exist.',
    code: `// get() - returns null if not found
Employee emp = session.get(Employee.class, 100);

// load() - throws ObjectNotFoundException if not found
Employee emp = session.load(Employee.class, 100);`,
    subConcepts: [
      { title: 'get() — Eager', description: 'Hits the database <b>immediately</b>. Returns null if the entity does not exist. Use when you are <b>not sure</b> if the record exists.' },
      { title: 'load() — Lazy Proxy', description: 'Returns a <b>proxy object</b> without hitting DB. Throws exception on access if not found. Use when you <b>know</b> the record exists.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Null-Safe Lookups', description: 'Use get() when the record may not exist — safely handle null without exceptions.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Performance Optimization', description: 'Use load() when setting foreign key references — no DB hit needed for proxy association.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 7,
    category: 'Hibernate',
    question: 'What is the N+1 Select problem?',
    answer: 'It happens when the application executes 1 query to retrieve N objects, and then N additional queries to retrieve related objects for each of them.',
    asked_metadata: '8x Amazon, 6x Uber, 4x Adobe',
    coreConceptDescription: 'The N+1 problem occurs when fetching a list of N entities triggers N additional queries for their lazy-loaded associations. Fix with JOIN FETCH, @BatchSize, or @EntityGraph.',
    code: `// N+1 Problem: 1 query for users + N queries for orders
List<User> users = session.createQuery("FROM User").list();
users.forEach(u -> u.getOrders().size()); // N extra queries!

// Fix: JOIN FETCH
"SELECT u FROM User u JOIN FETCH u.orders"`,
    subConcepts: [
      { title: 'The Problem', description: '1 query returns N entities. Accessing each entity\'s lazy collection triggers <b>N additional queries</b> — devastating for performance.' },
      { title: 'Solutions', description: '<b>JOIN FETCH</b> (single query), <b>@BatchSize</b> (batched queries), <b>@EntityGraph</b> (declarative fetching), or <b>DTO projections</b>.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance Debugging', description: 'Enable hibernate.show_sql=true and look for repeated queries on the same table.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-code', title: 'Spring Data Fix', description: '@EntityGraph(attributePaths = {"orders"}) on repository methods eliminates N+1 easily.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 15,
    category: 'Hibernate',
    question: 'What is L1 and L2 Cache in Hibernate?',
    answer: 'L1 is session-level cache (enabled by default). L2 is session-factory level cache (optional, shared across sessions).',
    asked_metadata: '5x Oracle, 3x SAP, 2x IBM',
    coreConceptDescription: 'L1 (First-Level) cache is built into every Session and cannot be disabled. L2 (Second-Level) cache is shared across Sessions and requires an external provider like EhCache or Redis.',
    subConcepts: [
      { title: 'L1 Cache (Session)', description: '<b>Always enabled</b>, scoped to a single Session. Cleared when Session closes. Prevents duplicate DB queries within one transaction.' },
      { title: 'L2 Cache (SessionFactory)', description: '<b>Optional</b>, shared across all Sessions. Requires provider (EhCache, Redis). Great for <b>rarely-changing reference data</b>.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Read-Heavy Applications', description: 'L2 cache dramatically reduces DB load for frequently accessed, seldom-updated entities.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Cache Invalidation', description: 'L2 cache must be configured carefully to avoid stale data in write-heavy or clustered environments.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 20,
    category: 'Hibernate',
    question: 'What is Lazy Loading?',
    answer: 'It is a design pattern where data loading is deferred until the point where it is actually needed.',
    asked_metadata: '7x Facebook, 5x Instagram, 4x Airbnb',
    coreConceptDescription: 'Lazy loading defers the loading of associated entities until the data is actually accessed. This improves initial query performance but can cause LazyInitializationException if the Session is closed.',
    code: `@OneToMany(fetch = FetchType.LAZY) // Default for collections
private List<Order> orders;

// Accessing orders triggers a DB query:
user.getOrders().size(); // SQL executed HERE`,
    subConcepts: [
      { title: 'LAZY (Default for Collections)', description: 'Associated data is loaded <b>on first access</b>. Uses proxy objects. Reduces initial query footprint.' },
      { title: 'EAGER (Default for Single)', description: 'Associated data is loaded <b>immediately</b> with the parent. Can cause unnecessary joins and N+1 problems.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance', description: 'Lazy loading prevents loading entire object graphs when only the root entity is needed.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bug', title: 'LazyInitializationException', description: 'Accessing lazy data after Session closes throws this. Fix with Open Session In View or JOIN FETCH.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 92,
    category: 'Hibernate',
    question: 'What is Hibernate?',
    answer: 'Hibernate is a popular ORM (Object-Relational Mapping) tool for Java. It simplifies database interactions by mapping Java objects to database tables. Developers use it to avoid writing complex SQL queries.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM',
    coreConceptDescription: 'Hibernate is the most widely used JPA implementation. It maps Java objects to relational database tables using annotations, handles SQL generation, caching, and transaction management automatically.',
    subConcepts: [
      { title: 'ORM Framework', description: 'Maps Java classes to DB tables, fields to columns, and relationships to joins — <b>eliminating manual SQL writing</b>.' },
      { title: 'JPA Implementation', description: 'Hibernate implements the <b>JPA specification</b> and adds extra features like caching, dirty checking, and custom types.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Enterprise Applications', description: 'Almost every Spring Boot application uses Hibernate as the default JPA provider for data persistence.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-globe', title: 'Database Independence', description: 'Switch between MySQL, PostgreSQL, Oracle without changing Java code — Hibernate generates appropriate SQL.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 93,
    category: 'Hibernate',
    question: 'What are the main advantages of Hibernate?',
    answer: 'Hibernate offers automatic table creation, support for inheritance mapping, and database independence. It reduces boilerplate code and provides caching for better performance.',
    asked_metadata: '7x Infosys, 6x Wipro, 5x Capgemini',
    coreConceptDescription: 'Hibernate advantages include automatic DDL generation, built-in caching (L1/L2), database-agnostic HQL, transparent persistence, dirty checking, and support for complex mappings (inheritance, composites).',
    subConcepts: [
      { title: 'Productivity', description: '<b>Auto DDL</b>, automatic SQL generation, and dirty checking eliminate boilerplate code and reduce errors.' },
      { title: 'Performance Features', description: 'Built-in <b>L1/L2 caching</b>, batch processing, lazy loading, and connection pooling optimize database access.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Rapid Development', description: 'Map entities with annotations and let Hibernate generate all CRUD SQL automatically.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-arrows-rotate', title: 'Schema Evolution', description: 'hibernate.hbm2ddl.auto can create, update, or validate schema automatically during development.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 94,
    category: 'Hibernate',
    question: 'What is ORM?',
    answer: 'ORM stands for Object-Relational Mapping. It allows developers to map object-oriented programming concepts to database tables. This makes working with databases simpler and more efficient.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM',
    coreConceptDescription: 'ORM bridges the "impedance mismatch" between object-oriented Java and relational databases. It maps classes → tables, objects → rows, and fields → columns, enabling developers to work with objects instead of SQL.',
    subConcepts: [
      { title: 'Object-Relational Mapping', description: 'Maps <b>classes to tables</b>, <b>objects to rows</b>, and <b>fields to columns</b>. Relationships become JOINs automatically.' },
      { title: 'Impedance Mismatch', description: 'The fundamental difference between <b>object graphs</b> (Java) and <b>tabular data</b> (SQL) that ORM bridges.' }
    ],
    useCases: [
      { icon: 'fa-layer-group', title: 'Industry Standard', description: 'Almost all modern Java web apps use ORM (Hibernate, EclipseLink) instead of raw JDBC for persistence.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'SQL Injection Prevention', description: 'ORM frameworks use parameterized queries by default, preventing SQL injection attacks.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 95,
    category: 'Hibernate',
    question: 'What is a Session in Hibernate?',
    answer: 'A Session in Hibernate is an interface for communicating with the database. It is used to perform CRUD operations like saving, updating, and deleting data.',
    asked_metadata: '7x JPMorgan, 6x Citi, 5x Wells Fargo',
    coreConceptDescription: 'Session is Hibernate\'s primary interface for persistence operations. It wraps a JDBC connection, maintains L1 cache, tracks dirty entities, and manages the persistence context within a unit of work.',
    subConcepts: [
      { title: 'Persistence Context', description: 'The Session manages a set of <b>managed entities</b>. Changes to these entities are <b>automatically detected</b> and flushed to DB.' },
      { title: 'Unit of Work', description: 'A Session represents a <b>single unit of work</b>. It should be short-lived: open → perform operations → close.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'CRUD Operations', description: 'session.save(), session.get(), session.update(), session.delete() for all persistence needs.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-magnifying-glass', title: 'Dirty Checking', description: 'Session tracks changes to managed entities and generates UPDATE SQL only for modified fields at flush time.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 96,
    category: 'Hibernate',
    question: 'What is a Configuration file in Hibernate?',
    answer: 'The configuration file (hibernate.cfg.xml) contains database connection settings. It also includes details about mapping files and Hibernate properties.',
    asked_metadata: '5x Oracle, 4x IBM, 3x TCS',
    coreConceptDescription: 'hibernate.cfg.xml (or application.properties in Spring Boot) configures the database dialect, connection pool, DDL strategy, show_sql, and entity mappings. Spring Boot auto-configures most of this.',
    subConcepts: [
      { title: 'hibernate.cfg.xml (Standalone)', description: 'Traditional XML config with <b>connection URL, dialect, DDL auto</b>, mapping references, and show_sql settings.' },
      { title: 'application.properties (Spring Boot)', description: 'Modern configuration via <b>spring.jpa.* properties</b>. Spring Boot auto-configures Hibernate with sensible defaults.' }
    ],
    useCases: [
      { icon: 'fa-gear', title: 'Database Configuration', description: 'Define driver, URL, username, password, dialect, and connection pool settings.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-wrench', title: 'DDL Strategy', description: 'spring.jpa.hibernate.ddl-auto=update auto-creates/updates schema — essential for development.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 97,
    category: 'Hibernate',
    question: 'What is a Hibernate Query Language (HQL)?',
    answer: "HQL is an object-oriented query language in Hibernate. It's similar to SQL but works with Java objects instead of database tables.",
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Adobe',
    coreConceptDescription: 'HQL operates on entity classes and their properties instead of database tables and columns. It is database-independent and supports polymorphic queries, associations, and aggregations.',
    code: `// HQL uses class names, not table names
Query<User> query = session.createQuery(
    "FROM User u WHERE u.active = true", User.class);

// JPQL equivalent (JPA standard)
em.createQuery("SELECT u FROM User u WHERE u.age > :age");`,
    subConcepts: [
      { title: 'Object-Oriented SQL', description: 'Uses <b>class and property names</b> instead of table/column names. Supports polymorphic queries across inheritance hierarchies.' },
      { title: 'Database Independence', description: 'HQL is translated to the <b>appropriate SQL dialect</b> at runtime (MySQL, PostgreSQL, Oracle) automatically.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Complex Queries', description: 'HQL handles joins, aggregations, subqueries, and pagination in an object-oriented way.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-shield', title: 'Type Safety', description: 'Named parameters (:name) prevent SQL injection and support type checking.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 98,
    category: 'Hibernate',
    question: 'What are Hibernate Annotations?',
    answer: 'Hibernate Annotations are used to define mappings between Java classes and database tables directly in the code. Examples include @Entity, @Table, and @Id.',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target',
    coreConceptDescription: 'Annotations replace XML mapping files for defining entity-to-table mappings. Key annotations: @Entity, @Table, @Id, @Column, @OneToMany, @ManyToOne, @JoinColumn.',
    code: `@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;
}`,
    subConcepts: [
      { title: 'Entity Annotations', description: '<b>@Entity</b> marks a JPA entity. <b>@Table</b> customizes table name. <b>@Id</b> + <b>@GeneratedValue</b> defines the primary key.' },
      { title: 'Relationship Annotations', description: '<b>@OneToMany</b>, <b>@ManyToOne</b>, <b>@ManyToMany</b>, <b>@JoinColumn</b> define associations between entities.' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'Modern Mapping', description: 'Annotations keep mapping metadata alongside the code, replacing verbose XML files.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-link', title: 'Relationship Mapping', description: 'Define one-to-many, many-to-many relationships declaratively with cascade and fetch options.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 99,
    category: 'Hibernate',
    question: 'What is Lazy Loading in Hibernate?',
    answer: "Lazy loading delays the loading of associated data until it's needed. This helps in improving performance by fetching data only when required.",
    asked_metadata: '8x Amazon, 7x Netflix, 6x Uber',
    coreConceptDescription: 'Lazy loading uses proxy objects that trigger a database query only when the data is actually accessed. It is the default fetch strategy for @OneToMany and @ManyToMany associations.',
    subConcepts: [
      { title: 'Proxy Pattern', description: 'Hibernate creates a <b>proxy subclass</b> that intercepts property access and loads data from DB on first use.' },
      { title: 'LazyInitializationException', description: 'Thrown when accessing lazy data after the <b>Session is closed</b>. Common in web apps without Open Session In View.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'API Performance', description: 'REST endpoints that return a user don\'t need to load their 1000 orders — lazy loading prevents this.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'JOIN FETCH Override', description: 'When you need the data, override lazy with "JOIN FETCH" in JPQL or @EntityGraph annotation.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 100,
    category: 'Hibernate',
    question: 'What is the difference between Hibernate and JDBC?',
    answer: 'Hibernate automates many database operations, while JDBC requires writing SQL queries. Hibernate provides database independence, whereas JDBC code needs changes for each database.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    coreConceptDescription: 'JDBC is the low-level Java API for database access requiring manual SQL, result set mapping, and connection management. Hibernate abstracts all of this with automatic ORM, caching, and dialect handling.',
    subConcepts: [
      { title: 'JDBC (Low-Level)', description: 'Manual SQL, <b>manual ResultSet mapping</b>, manual connection/transaction management. Full control but verbose.' },
      { title: 'Hibernate (High-Level)', description: '<b>Automatic SQL generation</b>, object mapping, caching, and transaction management. Less control but highly productive.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Rapid Development', description: 'Hibernate reduces 80% of data access code. Ideal for CRUD-heavy enterprise applications.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gauge-high', title: 'Critical Performance', description: 'Use native SQL or JDBC for highly optimized queries where Hibernate-generated SQL is insufficient.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 101,
    category: 'Hibernate',
    question: 'What are Persistent, Transient, and Detached objects in Hibernate?',
    answer: 'Persistent objects are managed by Hibernate and linked to a database session. Transient objects are not linked to any session or database. Detached objects were persistent but are now disconnected from the session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft',
    coreConceptDescription: 'These three states define the lifecycle of a Hibernate entity: Transient (new, not saved), Persistent (managed by Session, tracked for changes), and Detached (was saved but Session is closed).',
    subConcepts: [
      { title: 'Transient', description: '<b>New object</b>, not yet associated with any Session or database row. Created with "new" keyword.' },
      { title: 'Persistent', description: '<b>Managed by Session</b>. Changes are automatically detected (dirty checking) and synced to DB on flush.' },
      { title: 'Detached', description: '<b>Was persistent</b> but Session was closed. Can be reattached with merge() or update().' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'State Transitions', description: 'save() → Transient to Persistent. close() → Persistent to Detached. merge() → Detached to Persistent.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-server', title: 'Web Applications', description: 'Entities become Detached between HTTP requests. merge() reattaches them for updates.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 102,
    category: 'Hibernate',
    question: 'How does Hibernate manage database connections?',
    answer: 'Hibernate uses a connection pool to manage database connections. It allows efficient reuse of connections, reducing overhead.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco',
    coreConceptDescription: 'Hibernate delegates connection pooling to providers like HikariCP (Spring Boot default), C3P0, or DBCP. Connection pools maintain pre-created connections for reuse, avoiding the cost of creating new connections.',
    subConcepts: [
      { title: 'Connection Pooling', description: '<b>Pre-created connections</b> are reused. HikariCP is the fastest pool and is Spring Boot\'s default.' },
      { title: 'Pool Configuration', description: 'Key settings: <b>maximumPoolSize</b>, <b>minimumIdle</b>, <b>connectionTimeout</b>, and <b>maxLifetime</b>.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance Tuning', description: 'Properly sized connection pools prevent connection exhaustion and reduce response times.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Monitoring', description: 'Monitor pool metrics (active, idle, waiting) via Spring Actuator to detect bottlenecks.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 103,
    category: 'Hibernate',
    question: 'What is the role of SessionFactory in Hibernate?',
    answer: 'SessionFactory is a factory for creating Session objects. It is created once and is thread-safe, making it efficient for handling database sessions.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM',
    coreConceptDescription: 'SessionFactory is a heavyweight, thread-safe, immutable object created once at application startup. It holds compiled mappings, connection pool references, and L2 cache. In Spring, EntityManagerFactory fulfills this role.',
    subConcepts: [
      { title: 'Singleton Pattern', description: 'SessionFactory is created <b>once per application</b>. It is expensive to create but designed to be shared across all threads.' },
      { title: 'Spring Equivalent', description: 'In Spring/JPA, <b>EntityManagerFactory</b> is the equivalent. Spring Boot auto-configures it from application.properties.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Application Startup', description: 'SessionFactory validates mappings and compiles metadata at startup — any mapping errors fail fast.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'Thread Safety', description: 'Multiple threads safely create Sessions from a shared SessionFactory without synchronization.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 104,
    category: 'Hibernate',
    question: 'What is the purpose of the @Entity annotation in Hibernate?',
    answer: 'The @Entity annotation marks a class as a Hibernate entity. It tells Hibernate to map the class to a database table.',
    asked_metadata: '7x TCS, 6x Accenture, 5x Cognizant',
    coreConceptDescription: '@Entity marks a POJO as a JPA entity that Hibernate should manage. Combined with @Table, @Id, and @Column, it defines the complete mapping between the Java class and the database table.',
    subConcepts: [
      { title: '@Entity', description: 'Marks the class as a <b>persistent entity</b>. Hibernate creates a table for it (or maps to an existing one).' },
      { title: 'Required: @Id', description: 'Every @Entity must have an <b>@Id field</b> as the primary key. Usually combined with @GeneratedValue for auto-increment.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Table Mapping', description: '@Entity + @Table(name="users") maps the class to a specific database table.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-wand-magic-sparkles', title: 'Auto DDL', description: 'With ddl-auto=update, Hibernate auto-creates/alters table schema from @Entity classes.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 105,
    category: 'Hibernate',
    question: 'What are the different states of an object in Hibernate?',
    answer: 'Objects in Hibernate can be in one of three states: Transient, Persistent, or Detached. Each state defines how the object interacts with the database session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft',
    coreConceptDescription: 'Entity lifecycle states: Transient (new, unsaved), Persistent (managed by Session, auto-synced), Detached (previously saved, Session closed), and Removed (marked for deletion).',
    subConcepts: [
      { title: 'Lifecycle Transitions', description: '<b>new → save() → Persistent → close() → Detached → merge() → Persistent → remove() → Removed</b>.' },
      { title: 'Dirty Checking', description: 'Persistent entities are <b>automatically tracked</b>. Any field change generates an UPDATE SQL at flush time.' }
    ],
    useCases: [
      { icon: 'fa-arrows-rotate', title: 'State Management', description: 'Understanding entity states is crucial for avoiding detached entity errors and stale data.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: 'merge() vs update()', description: 'merge() returns a new managed instance. update() reattaches the same instance to the Session.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 106,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() fetches the object immediately from the database. load() returns a proxy and fetches the object only when needed.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM',
    coreConceptDescription: 'get() performs an immediate database SELECT and returns null if not found. load() returns a lazy proxy and defers the query until a non-ID property is accessed.',
    subConcepts: [
      { title: 'get() Behavior', description: 'Hits DB <b>immediately</b>. Returns <b>null</b> if entity not found. Use when existence is uncertain.' },
      { title: 'load() Behavior', description: 'Returns <b>proxy</b>, defers DB access. Throws <b>ObjectNotFoundException</b> on access if not found.' }
    ],
    useCases: [
      { icon: 'fa-database', title: 'Safe Lookups', description: 'get() is safer for user-facing queries where records may not exist.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'FK Association', description: 'load() is ideal for setting foreign keys where you know the parent exists.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 107,
    category: 'Hibernate',
    question: 'What are some common exceptions in Hibernate?',
    answer: 'Some common exceptions include: HibernateException (General error), ConstraintViolationException (Database constraint violation), LazyInitializationException (Accessing lazy data outside session).',
    asked_metadata: '5x Oracle, 4x IBM, 3x SAP',
    coreConceptDescription: 'Hibernate exceptions indicate specific issues: LazyInitializationException (closed Session), StaleObjectStateException (optimistic lock failure), ConstraintViolationException (unique/FK violations).',
    subConcepts: [
      { title: 'LazyInitializationException', description: 'Accessing a <b>lazy association after Session closes</b>. Fix: JOIN FETCH, Open Session In View, or DTO projections.' },
      { title: 'ConstraintViolationException', description: 'Database constraint (unique, FK, not-null) was violated. Check <b>input validation</b> before persisting.' }
    ],
    useCases: [
      { icon: 'fa-bug', title: 'Debugging', description: 'Enable hibernate.show_sql and hibernate.format_sql for detailed SQL logging during development.', color: 'text-red-600', bg: 'bg-red-100' },
      { icon: 'fa-shield', title: 'Exception Handling', description: 'Spring converts Hibernate exceptions to Spring DataAccessExceptions for uniform error handling.', color: 'text-blue-600', bg: 'bg-blue-100' }
    ]
  },
  {
    id: 108,
    category: 'Hibernate',
    question: 'How does Hibernate handle caching?',
    answer: 'Hibernate supports two types of caching. First-level cache is session-specific and enabled by default. Second-level cache is session-factory specific and requires external configuration.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft',
    coreConceptDescription: 'Hibernate provides L1 cache (per Session, automatic) and L2 cache (per SessionFactory, optional). Query cache can also cache query results. L2 cache providers: EhCache, Infinispan, Redis.',
    subConcepts: [
      { title: 'First-Level Cache', description: '<b>Session-scoped</b>, always enabled. Ensures the same entity is loaded only once per Session (identity guarantee).' },
      { title: 'Second-Level + Query Cache', description: '<b>SessionFactory-scoped</b>, optional. L2 caches entities; query cache caches query results. Both need external providers.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'Reference Data', description: 'L2 cache is ideal for countries, currencies, and config data that rarely changes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-chart-line', title: 'Cache Strategies', description: 'READ_ONLY for immutable data. READ_WRITE for mutable data. NONSTRICT_READ_WRITE for eventually consistent.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 109,
    category: 'Hibernate',
    question: 'Explain the difference between save(), persist(), and saveOrUpdate().',
    answer: "save(): Inserts a new record and returns the identifier. persist(): Similar to save() but doesn't return the identifier. saveOrUpdate(): Updates the record if it exists or inserts a new one if it doesn't.",
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    coreConceptDescription: 'save() returns the generated ID immediately (may execute INSERT). persist() is void (INSERT may be deferred). saveOrUpdate() decides based on entity state. In JPA, use persist() for new and merge() for detached.',
    subConcepts: [
      { title: 'save() vs persist()', description: '<b>save()</b> returns Serializable ID and may execute INSERT immediately. <b>persist()</b> is void and can defer INSERT.' },
      { title: 'saveOrUpdate()', description: 'Hibernate-specific. <b>Inserts if transient, updates if detached</b>. JPA equivalent: merge().' }
    ],
    useCases: [
      { icon: 'fa-code', title: 'JPA Best Practice', description: 'In Spring Data JPA, use repository.save() which delegates to persist() or merge() based on entity state.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-triangle-exclamation', title: 'Avoid Pitfalls', description: 'save() outside a transaction can cause issues. Always use within @Transactional boundaries.', color: 'text-amber-600', bg: 'bg-amber-100' }
    ]
  },
  {
    id: 110,
    category: 'Hibernate',
    question: 'Can Hibernate handle composite keys?',
    answer: 'Yes, Hibernate supports composite keys using @Embeddable and @EmbeddedId annotations. These annotations help define and map composite key classes.',
    asked_metadata: '4x Oracle, 3x IBM, 2x SAP',
    coreConceptDescription: 'Composite keys are mapped using @EmbeddedId (preferred) or @IdClass. The key class must implement Serializable and override equals()/hashCode() for correct identity comparison.',
    code: `@Embeddable
public class OrderItemId implements Serializable {
    private Long orderId;
    private Long productId;
}

@Entity
public class OrderItem {
    @EmbeddedId
    private OrderItemId id;
}`,
    subConcepts: [
      { title: '@EmbeddedId', description: 'The composite key is an <b>embedded object</b>. Access fields via id.orderId. Preferred approach.' },
      { title: '@IdClass', description: 'Key fields are declared <b>directly in the entity</b>. A separate ID class mirrors them. Less encapsulated.' }
    ],
    useCases: [
      { icon: 'fa-link', title: 'Junction Tables', description: 'Many-to-many junction tables often use composite keys combining both foreign keys.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-database', title: 'Legacy Databases', description: 'Composite keys are common in legacy schemas where natural keys were used instead of surrogate IDs.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 111,
    category: 'Hibernate',
    question: 'How do you manage transactions in Hibernate?',
    answer: 'Transactions in Hibernate are managed using the Transaction interface. You begin a transaction, perform operations, and then commit or roll back the transaction based on the outcome.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP',
    coreConceptDescription: 'In standalone Hibernate, use Session.beginTransaction() / commit() / rollback(). In Spring, use @Transactional annotation for declarative transaction management with automatic rollback on exceptions.',
    code: `// Spring Declarative Transactions (preferred)
@Transactional
public void transferMoney(Long from, Long to, BigDecimal amount) {
    Account sender = accountRepo.findById(from).orElseThrow();
    Account receiver = accountRepo.findById(to).orElseThrow();
    sender.debit(amount);
    receiver.credit(amount);
    // Auto-commit or rollback on exception
}`,
    subConcepts: [
      { title: 'Programmatic', description: 'Manual <b>beginTransaction(), commit(), rollback()</b>. Full control but verbose and error-prone.' },
      { title: 'Declarative (@Transactional)', description: 'Spring\'s <b>@Transactional</b> auto-manages begin/commit/rollback. Supports propagation and isolation levels.' }
    ],
    useCases: [
      { icon: 'fa-shield', title: 'Data Integrity', description: 'Transactions ensure all-or-nothing database operations — critical for financial systems.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-gear', title: 'Propagation Settings', description: '@Transactional(propagation = REQUIRES_NEW) creates a new transaction regardless of existing ones.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 152,
    category: 'Hibernate',
    question: 'What are the main differences between JPA and Hibernate?',
    answer: 'JPA is a specification (standard). Hibernate is an implementation with extra features like caching, lazy loading, and dirty checking.',
    asked_metadata: '7x Oracle, 6x IBM, 5x SAP',
    coreConceptDescription: 'JPA (Jakarta Persistence API) is a specification defining the standard ORM API. Hibernate is the most popular implementation, adding proprietary features like L2 caching, custom types, and batch processing.',
    subConcepts: [
      { title: 'JPA (Specification)', description: 'Defines interfaces and annotations (<b>@Entity, EntityManager, JPQL</b>). Vendor-neutral. Other implementations: EclipseLink, OpenJPA.' },
      { title: 'Hibernate (Implementation)', description: 'Implements JPA + adds <b>SessionFactory, HQL, Criteria API, L2 cache, custom user types</b>, and more.' }
    ],
    useCases: [
      { icon: 'fa-plug', title: 'Vendor Independence', description: 'Code to JPA interfaces allows switching from Hibernate to EclipseLink without code changes.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bolt', title: 'Hibernate-Specific Features', description: 'Use Hibernate APIs directly when you need features not in JPA: @BatchSize, @Formula, custom types.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 171,
    category: 'Hibernate',
    question: 'Difference between Optimistic and Pessimistic Locking?',
    answer: 'Optimistic locking assumes no conflicts and checks version numbers at commit time. Pessimistic locking locks the records in the database (e.g., SELECT FOR UPDATE) to prevent others from accessing them.',
    asked_metadata: '5x Goldman Sachs, 3x Citi',
    coreConceptDescription: 'Optimistic locking uses @Version for conflict detection at commit time (no DB locks). Pessimistic locking uses SELECT FOR UPDATE to prevent concurrent access. Choose based on contention level.',
    code: `// Optimistic Locking
@Version
private Long version;

// Pessimistic Locking
@Lock(LockModeType.PESSIMISTIC_WRITE)
Optional<User> findById(Long id);`,
    subConcepts: [
      { title: 'Optimistic (@Version)', description: '<b>No DB locks</b>. Uses version column. Throws OptimisticLockException if data was modified between read and write.' },
      { title: 'Pessimistic (SELECT FOR UPDATE)', description: '<b>DB-level lock</b>. Blocks other transactions from reading/writing until lock is released. Higher overhead.' }
    ],
    useCases: [
      { icon: 'fa-users', title: 'Low Contention', description: 'Use optimistic locking when conflicts are rare — most web applications fall in this category.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-lock', title: 'High Contention', description: 'Use pessimistic locking for critical sections like financial transactions with high concurrent access.', color: 'text-red-600', bg: 'bg-red-100' }
    ]
  },
  {
    id: 176,
    category: 'Hibernate',
    question: 'What is the difference between Interceptors and Lifecycle Events in Hibernate?',
    answer: 'Interceptors are session-scoped and allow global modification of SQL/data before it hits the DB. Lifecycle events (@PostPersist, @PreUpdate) are entity-scoped and used for auditing or side-effects on specific objects.',
    asked_metadata: '4x Oracle, 2x SAP',
    coreConceptDescription: 'Interceptors hook into the Session to globally intercept all entity operations. JPA lifecycle callbacks (@PrePersist, @PostUpdate) target specific entities for auditing, validation, or event publishing.',
    subConcepts: [
      { title: 'Interceptors (Global)', description: '<b>Session-level hooks</b> for onSave(), onDelete(), onFlushDirty(). Apply to all entities. Used for audit logging or SQL modification.' },
      { title: 'Lifecycle Callbacks (Per-Entity)', description: '<b>@PrePersist, @PostUpdate, @PreRemove</b> on entity methods. Scoped to specific entity class.' }
    ],
    useCases: [
      { icon: 'fa-clock', title: 'Audit Trail', description: '@PrePersist to auto-set createdAt. @PreUpdate to auto-set updatedAt. No manual coding needed.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-bell', title: 'Event Publishing', description: '@PostPersist to publish domain events (e.g., OrderCreatedEvent) for async processing.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 184,
    category: 'Hibernate',
    question: 'Explain Hibernate Fetch strategies: JOIN, SELECT, and SUBSELECT.',
    answer: 'JOIN: Fetches association in the same query using a JOIN. SELECT: Performs a second query for the association (can lead to N+1). SUBSELECT: Fetches all associations for the entire result set in one additional query using a subquery.',
    asked_metadata: '4x Oracle, 3x Uber',
    coreConceptDescription: 'Fetch strategies control how associated entities are loaded. JOIN uses SQL JOIN (1 query). SELECT fires separate queries (N+1 risk). SUBSELECT uses a single subquery to load all associations at once.',
    code: `@Fetch(FetchMode.SUBSELECT)
private List<Comment> comments;`,
    subConcepts: [
      { title: 'JOIN Fetch', description: '<b>Single query</b> with SQL JOIN. Fastest for required associations. Can cause cartesian product with multiple collections.' },
      { title: 'SUBSELECT Fetch', description: '<b>One additional query</b> using IN subquery to load all associations. Best for batching without JOIN overhead.' }
    ],
    useCases: [
      { icon: 'fa-bolt', title: 'N+1 Prevention', description: 'Switch from SELECT (default) to JOIN or SUBSELECT fetch to eliminate N+1 queries.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-code', title: '@BatchSize Alternative', description: '@BatchSize(size=25) batches SELECT fetches in groups of 25, reducing N+1 to N/25+1 queries.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  },
  {
    id: 189,
    category: 'Hibernate',
    question: 'What are the three Inheritance mapping strategies in Hibernate?',
    answer: '1. Single Table (default, one table for all classes). 2. Table Per Class (separate tables, but duplicated columns). 3. Joined (normalized, separate tables for each class with foreign keys).',
    asked_metadata: '4x Facebook, 2x Amazon',
    coreConceptDescription: 'Hibernate offers three strategies to map class inheritance to database tables: SINGLE_TABLE (one table, discriminator column), TABLE_PER_CLASS (union of separate tables), JOINED (normalized with FK joins).',
    code: `@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Employee { ... }`,
    subConcepts: [
      { title: 'SINGLE_TABLE (Default)', description: 'One table for all classes with a <b>discriminator column</b>. Fast queries but many null columns.' },
      { title: 'JOINED', description: 'Separate tables joined by <b>foreign keys</b>. Normalized, no nulls, but JOINs add query overhead.' },
      { title: 'TABLE_PER_CLASS', description: 'Separate table per class with <b>duplicated base columns</b>. No JOINs needed but polymorphic queries use UNION.' }
    ],
    useCases: [
      { icon: 'fa-gauge-high', title: 'Performance Choice', description: 'SINGLE_TABLE is fastest for reads. JOINED is best for normalized schemas. TABLE_PER_CLASS for independent tables.', color: 'text-blue-600', bg: 'bg-blue-100' },
      { icon: 'fa-sitemap', title: 'Domain Modeling', description: 'Map real-world hierarchies (Employee → Manager, Developer) directly to database schema.', color: 'text-emerald-600', bg: 'bg-emerald-100' }
    ]
  }
];
