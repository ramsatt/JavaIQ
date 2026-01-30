import { Question } from './question.model';

export const HIBERNATE_QUESTIONS: Question[] = [
  {
    id: 6,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() hits the database immediately and returns null if not found. load() returns a proxy and throws an exception if not found when accessed.',
    asked_metadata: '8x TCS, 6x Accenture, 5x Cognizant',
    code: `// get() - returns null if not found
Employee emp = session.get(Employee.class, 100);

// load() - throws ObjectNotFoundException if not found
Employee emp = session.load(Employee.class, 100);`
  },
  {
    id: 7,
    category: 'Hibernate',
    question: 'What is the N+1 Select problem?',
    answer: 'It happens when the application executes 1 query to retrieve N objects, and then N additional queries to retrieve related objects for each of them.',
    asked_metadata: '8x Amazon, 6x Uber, 4x Adobe',
  },
  {
    id: 15,
    category: 'Hibernate',
    question: 'What is L1 and L2 Cache in Hibernate?',
    answer: 'L1 is session-level cache (enabled by default). L2 is session-factory level cache (optional, shared across sessions).',
    asked_metadata: '5x Oracle, 3x SAP, 2x IBM',
  },
  {
    id: 20,
    category: 'Hibernate',
    question: 'What is Lazy Loading?',
    answer: 'It is a design pattern where data loading is deferred until the point where it is actually needed.',
    asked_metadata: '7x Facebook, 5x Instagram, 4x Airbnb',
  },
  {
    id: 92,
    category: 'Hibernate',
    question: 'What is Hibernate?',
    answer: 'Hibernate is a popular ORM (Object-Relational Mapping) tool for Java. It simplifies database interactions by mapping Java objects to database tables. Developers use it to avoid writing complex SQL queries.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM'
  },
  {
    id: 93,
    category: 'Hibernate',
    question: 'What are the main advantages of Hibernate?',
    answer: 'Hibernate offers automatic table creation, support for inheritance mapping, and database independence. It reduces boilerplate code and provides caching for better performance.',
    asked_metadata: '7x Infosys, 6x Wipro, 5x Capgemini'
  },
  {
    id: 94,
    category: 'Hibernate',
    question: 'What is ORM?',
    answer: 'ORM stands for Object-Relational Mapping. It allows developers to map object-oriented programming concepts to database tables. This makes working with databases simpler and more efficient.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM'
  },
  {
    id: 95,
    category: 'Hibernate',
    question: 'What is a Session in Hibernate?',
    answer: 'A Session in Hibernate is an interface for communicating with the database. It is used to perform CRUD operations like saving, updating, and deleting data.',
    asked_metadata: '7x JPMorgan, 6x Citi, 5x Wells Fargo'
  },
  {
    id: 96,
    category: 'Hibernate',
    question: 'What is a Configuration file in Hibernate?',
    answer: 'The configuration file (hibernate.cfg.xml) contains database connection settings. It also includes details about mapping files and Hibernate properties.',
    asked_metadata: '5x Oracle, 4x IBM, 3x TCS'
  },
  {
    id: 97,
    category: 'Hibernate',
    question: 'What is a Hibernate Query Language (HQL)?',
    answer: 'HQL is an object-oriented query language in Hibernate. It’s similar to SQL but works with Java objects instead of database tables.',
    asked_metadata: '6x Amazon, 5x Microsoft, 4x Adobe'
  },
  {
    id: 98,
    category: 'Hibernate',
    question: 'What are Hibernate Annotations?',
    answer: 'Hibernate Annotations are used to define mappings between Java classes and database tables directly in the code. Examples include @Entity, @Table, and @Id.',
    asked_metadata: '7x Amazon, 6x Walmart, 5x Target'
  },
  {
    id: 99,
    category: 'Hibernate',
    question: 'What is Lazy Loading in Hibernate?',
    answer: 'Lazy loading delays the loading of associated data until it’s needed. This helps in improving performance by fetching data only when required.',
    asked_metadata: '8x Amazon, 7x Netflix, 6x Uber'
  },
  {
    id: 100,
    category: 'Hibernate',
    question: 'What is the difference between Hibernate and JDBC?',
    answer: 'Hibernate automates many database operations, while JDBC requires writing SQL queries. Hibernate provides database independence, whereas JDBC code needs changes for each database.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 101,
    category: 'Hibernate',
    question: 'What are Persistent, Transient, and Detached objects in Hibernate?',
    answer: 'Persistent objects are managed by Hibernate and linked to a database session. Transient objects are not linked to any session or database. Detached objects were persistent but are now disconnected from the session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 102,
    category: 'Hibernate',
    question: 'How does Hibernate manage database connections?',
    answer: 'Hibernate uses a connection pool to manage database connections. It allows efficient reuse of connections, reducing overhead.',
    asked_metadata: '5x Oracle, 4x IBM, 3x Cisco'
  },
  {
    id: 103,
    category: 'Hibernate',
    question: 'What is the role of SessionFactory in Hibernate?',
    answer: 'SessionFactory is a factory for creating Session objects. It is created once and is thread-safe, making it efficient for handling database sessions.',
    asked_metadata: '6x Oracle, 5x SAP, 4x IBM'
  },
  {
    id: 104,
    category: 'Hibernate',
    question: 'What is the purpose of the @Entity annotation in Hibernate?',
    answer: 'The @Entity annotation marks a class as a Hibernate entity. It tells Hibernate to map the class to a database table.',
    asked_metadata: '7x TCS, 6x Accenture, 5x Cognizant'
  },
  {
    id: 105,
    category: 'Hibernate',
    question: 'What are the different states of an object in Hibernate?',
    answer: 'Objects in Hibernate can be in one of three states: Transient, Persistent, or Detached. Each state defines how the object interacts with the database session.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 106,
    category: 'Hibernate',
    question: 'What is the difference between get() and load() in Hibernate?',
    answer: 'get() fetches the object immediately from the database. load() returns a proxy and fetches the object only when needed.',
    asked_metadata: '8x TCS, 7x Accenture, 6x IBM'
  },
  {
    id: 107,
    category: 'Hibernate',
    question: 'What are some common exceptions in Hibernate?',
    answer: 'Some common exceptions include: HibernateException (General error), ConstraintViolationException (Database constraint violation), LazyInitializationException (Accessing lazy data outside session).',
    asked_metadata: '5x Oracle, 4x IBM, 3x SAP'
  },
  {
    id: 108,
    category: 'Hibernate',
    question: 'How does Hibernate handle caching?',
    answer: 'Hibernate supports two types of caching. First-level cache is session-specific and enabled by default. Second-level cache is session-factory specific and requires external configuration.',
    asked_metadata: '7x Amazon, 6x Google, 5x Microsoft'
  },
  {
    id: 109,
    category: 'Hibernate',
    question: 'Explain the difference between save(), persist(), and saveOrUpdate().',
    answer: 'save(): Inserts a new record and returns the identifier. persist(): Similar to save() but doesn’t return the identifier. saveOrUpdate(): Updates the record if it exists or inserts a new one if it doesn’t.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 110,
    category: 'Hibernate',
    question: 'Can Hibernate handle composite keys?',
    answer: 'Yes, Hibernate supports composite keys using @Embeddable and @EmbeddedId annotations. These annotations help define and map composite key classes.',
    asked_metadata: '4x Oracle, 3x IBM, 2x SAP'
  },
  {
    id: 111,
    category: 'Hibernate',
    question: 'How do you manage transactions in Hibernate?',
    answer: 'Transactions in Hibernate are managed using the Transaction interface. You begin a transaction, perform operations, and then commit or roll back the transaction based on the outcome.',
    asked_metadata: '6x Oracle, 5x IBM, 4x SAP'
  },
  {
    id: 152,
    category: 'Hibernate',
    question: 'What are the main differences between JPA and Hibernate?',
    answer: 'JPA is a specification (standard). Hibernate is an implementation with extra features like caching, lazy loading, and dirty checking.',
    asked_metadata: '7x Oracle, 6x IBM, 5x SAP'
  },
  {
    id: 171,
    category: 'Hibernate',
    question: 'Difference between Optimistic and Pessimistic Locking?',
    answer: 'Optimistic locking assumes no conflicts and checks version numbers at commit time. Pessimistic locking locks the records in the database (e.g., SELECT FOR UPDATE) to prevent others from accessing them.',
    asked_metadata: '5x Goldman Sachs, 3x Citi',
    code: `// Optimistic Locking
@Version
private Long version;

// Pessimistic Locking
@Lock(LockModeType.PESSIMISTIC_WRITE)
Optional<User> findById(Long id);`
  },
  {
    id: 176,
    category: 'Hibernate',
    question: 'What is the difference between Interceptors and Lifecycle Events in Hibernate?',
    answer: 'Interceptors are session-scoped and allow global modification of SQL/data before it hits the DB. Lifecycle events (@PostPersist, @PreUpdate) are entity-scoped and used for auditing or side-effects on specific objects.',
    asked_metadata: '4x Oracle, 2x SAP'
  },
  {
    id: 184,
    category: 'Hibernate',
    question: 'Explain Hibernate Fetch strategies: JOIN, SELECT, and SUBSELECT.',
    answer: 'JOIN: Fetches association in the same query using a JOIN. SELECT: Performs a second query for the association (can lead to N+1). SUBSELECT: Fetches all associations for the entire result set in one additional query using a subquery.',
    asked_metadata: '4x Oracle, 3x Uber',
    code: `@Fetch(FetchMode.SUBSELECT)
private List<Comment> comments;`
  },
  {
    id: 189,
    category: 'Hibernate',
    question: 'What are the three Inheritance mapping strategies in Hibernate?',
    answer: '1. Single Table (default, one table for all classes). 2. Table Per Class (separate tables, but duplicated columns). 3. Joined (normalized, separate tables for each class with foreign keys).',
    asked_metadata: '4x Facebook, 2x Amazon',
    code: `@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Employee { ... }`
  }
];
