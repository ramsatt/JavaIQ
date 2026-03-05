# Core Java — Missing Concepts Analysis

**Current coverage:** 15 chapters
**Sections analyzed:** `topic-router.component.ts` + `tutorial-detail.component.ts`

---

## What Is Currently Covered

| # | Slug | Title |
|---|------|-------|
| 1 | `arrays` | Java Arrays |
| 2 | `strings` | Strings & StringBuilder |
| 3 | `oop-classes` | Classes & Objects |
| 4 | `inheritance` | Inheritance |
| 5 | `polymorphism` | Polymorphism |
| 6 | `abstraction` | Abstraction & Interfaces |
| 7 | `encapsulation` | Encapsulation |
| 8 | `exceptions` | Exception Handling |
| 9 | `collections-list` | Collections: List (ArrayList, LinkedList) |
| 10 | `collections-map` | Collections: Map & Set (HashMap, TreeMap, HashSet) |
| 11 | `generics` | Generics |
| 12 | `streams` | Streams API |
| 13 | `lambdas` | Lambda Expressions |
| 14 | `records-sealed` | Records & Sealed Classes |
| 15 | `io-files` | Java I/O & Files |

---

## Missing Concepts by Category

### 1. Java Fundamentals (Language Basics)

These are prerequisite topics expected before Arrays and OOP. Currently absent entirely.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `data-types` | Primitive Data Types | `int`, `long`, `double`, `float`, `boolean`, `char`, `byte`, `short`; default values; wrapper classes (`Integer`, `Double`, etc.); autoboxing & unboxing |
| `variables-casting` | Variables & Type Casting | Variable declaration, `var` keyword (Java 10+), widening vs narrowing conversion, explicit casting, `instanceof` check |
| `operators` | Operators | Arithmetic, relational, logical (`&&`, `\|\|`, `!`), bitwise (`&`, `\|`, `^`, `~`, `<<`, `>>`), ternary (`? :`), assignment compound operators |
| `control-flow` | Control Flow | `if-else`, nested conditions, `switch` statement, `switch` expressions (Java 14+), fall-through behavior, `yield` |
| `loops` | Loops & Iteration | `for`, `while`, `do-while`, enhanced `for-each`, `break`, `continue`, labeled breaks, loop optimization tips |
| `methods` | Methods & Varargs | Method signature, return types, `void`, method overloading, `varargs` (`String... args`), pass-by-value semantics, recursion basics |

---

### 2. Object-Oriented Programming (OOP Depth Gaps)

Topics that extend the existing OOP chapters but are currently missing.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `enums` | Enumerations | `enum` declaration, fields & methods in enums, `values()`, `ordinal()`, `EnumSet`, `EnumMap`, use in `switch` |
| `nested-classes` | Nested & Inner Classes | Static nested class, non-static inner class, local class, anonymous class, use cases and memory implications |
| `final-static` | `final` & `static` Keyword | `final` variables/methods/classes, `static` fields, `static` methods, `static` initializer blocks, constants pattern |
| `object-class` | The `Object` Class | `toString()`, `equals()`, `hashCode()` contract, `clone()`, `getClass()`, importance in collections & hashing |

---

### 3. Collections — Gaps in Current Coverage

The current `collections-list` and `collections-map` chapters skip important collection types.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `collections-queue` | Collections: Queue & Deque | `Queue` interface, `PriorityQueue`, `ArrayDeque`, `LinkedList` as `Deque`, `offer()`, `poll()`, `peek()`; stack operations via `Deque` |
| `collections-utils` | Collections Utility Methods | `Collections.sort()`, `Collections.shuffle()`, `Collections.unmodifiableList()`, `Collections.frequency()`, `Arrays.sort()`, `Arrays.asList()`, `List.copyOf()`, `Map.of()` |
| `iterators` | Iterator & Iterable | `Iterator<T>` interface, `hasNext()` / `next()` / `remove()`, `ListIterator`, implementing `Iterable`, `for-each` internals, fail-fast vs fail-safe |

---

### 4. Functional Programming (Java 8+)

The `lambdas` chapter touches on functional interfaces superficially. These deserve dedicated chapters.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `functional-interfaces` | Built-in Functional Interfaces | `Predicate<T>`, `Function<T,R>`, `BiFunction`, `Consumer<T>`, `Supplier<T>`, `UnaryOperator`, `BinaryOperator`; composing with `andThen()`, `compose()` |
| `method-references` | Method References | `Class::staticMethod`, `instance::method`, `Class::instanceMethod`, `Class::new` constructor reference; comparison with equivalent lambdas |
| `optional` | Optional | `Optional.of()`, `Optional.empty()`, `Optional.ofNullable()`, `isPresent()`, `ifPresent()`, `orElse()`, `map()`, `flatMap()`, `filter()`; avoiding NPE |

---

### 5. Modern Java Features (Java 9–21)

`records-sealed` covers Java 16+ records and sealed classes, but many other modern features are missing.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `text-blocks` | Text Blocks & String Enhancements | Text blocks (`"""`), `String.formatted()`, `String.strip()`, `String.isBlank()`, `String.repeat()`, `String.lines()`, `String.indent()` |
| `pattern-matching` | Pattern Matching | `instanceof` pattern matching (Java 16+), pattern matching in `switch` (Java 21), guarded patterns, `null` patterns |
| `switch-expressions` | Switch Expressions | Arrow case (`->`), multi-label case, `yield`, exhaustiveness, switch with sealed types |

---

### 6. Date & Time API

Completely absent from the current curriculum despite being a heavily tested topic.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `datetime-api` | Date & Time API | `LocalDate`, `LocalTime`, `LocalDateTime`, `ZonedDateTime`, `Instant`, `Duration`, `Period`, `DateTimeFormatter`, `ZoneId`; migration from legacy `Date`/`Calendar` |

---

### 7. Java Platform & Runtime

These topics are critical for understanding how Java works at a deeper level.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `memory-model` | Memory Model & Garbage Collection | JVM memory areas (heap, stack, metaspace), object lifecycle, GC roots, minor/major GC, common GC algorithms (G1, ZGC), `-Xmx`/`-Xms` flags |
| `annotations` | Annotations | Built-in annotations (`@Override`, `@Deprecated`, `@SuppressWarnings`, `@FunctionalInterface`), meta-annotations, creating custom annotations, retention policies, `@Target` |
| `reflection` | Reflection API | `Class<?>`, `getDeclaredFields()`, `getDeclaredMethods()`, `invoke()`, `newInstance()`, use cases (frameworks, testing), performance caveats |

---

### 8. Other Practical Topics

Frequently encountered in real-world Java and interviews.

| Suggested Slug | Title | Key Content |
|---|---|---|
| `regex` | Regular Expressions | `Pattern`, `Matcher`, `find()`, `matches()`, `group()`, common regex patterns, use with `String.matches()`, `String.replaceAll()` |
| `serialization` | Serialization | `Serializable` interface, `ObjectOutputStream`/`ObjectInputStream`, `transient` keyword, `serialVersionUID`, `Externalizable`, security considerations |
| `networking` | Java Networking Basics | `Socket`, `ServerSocket`, `URL`, `HttpURLConnection`, `HttpClient` (Java 11+), async HTTP, JSON parsing with external libs |
| `math-random` | Math & Random | `Math` class methods (`abs`, `pow`, `sqrt`, `floor`, `ceil`, `round`, `min`, `max`), `Random`, `ThreadLocalRandom`, `SecureRandom` |

---

## Priority Recommendations

### High Priority — Add First

These are foundational or very heavily tested in Java interviews:

1. **`data-types`** — Cannot truly teach Java without this
2. **`control-flow`** + **`loops`** — Absolute prerequisites before Arrays
3. **`methods`** — Core building block of all Java code
4. **`enums`** — Ubiquitous in real codebases and interview questions
5. **`optional`** — Java 8 essential; prevents NPE and is in every modern codebase
6. **`functional-interfaces`** — Completes the lambdas + streams story
7. **`datetime-api`** — Extremely common in interviews; legacy API still trips up developers
8. **`object-class`** — `equals`/`hashCode` contract is a classic interview question
9. **`collections-queue`** — Needed for BFS/DFS and task processing patterns
10. **`pattern-matching`** + **`switch-expressions`** — Java 21 LTS features; increasingly tested

### Medium Priority — Add Next

11. **`final-static`** — Clarifies many common confusions
12. **`method-references`** — Natural follow-on to lambdas chapter
13. **`nested-classes`** — Important for understanding anonymous listeners and lambdas
14. **`collections-utils`** — High utility, often misused
15. **`text-blocks`** — Java 15+ LTS feature, widely used
16. **`annotations`** — Framework literacy depends on this

### Lower Priority — Fill Later

17. **`memory-model`** — Deep dive, valuable for senior roles
18. **`iterators`** — Useful for custom data structures
19. **`reflection`** — Framework internals, not day-to-day
20. **`operators`** — Often self-taught; bitwise operators are interview-relevant
21. **`variables-casting`** — Can partially overlap with `data-types`
22. **`regex`** — Practical but not core Java interview focus
23. **`serialization`** — Legacy topic, lower modern relevance
24. **`networking`** — Broad topic; `HttpClient` is the modern slice worth covering
25. **`math-random`** — Lightweight; could be a quick-reference chapter

---

## Revised Course Structure Suggestion

Reorganizing the 15 existing + ~20 missing into a logical learning path:

```
FOUNDATIONS (new)
  1. data-types          [NEW]
  2. variables-casting   [NEW]
  3. operators           [NEW]
  4. control-flow        [NEW]
  5. loops               [NEW]
  6. methods             [NEW]

ARRAYS & STRINGS (existing)
  7. arrays              [exists]
  8. strings             [exists]
  9. text-blocks         [NEW]

OOP CORE (existing + gaps filled)
  10. oop-classes        [exists]
  11. inheritance        [exists]
  12. polymorphism       [exists]
  13. abstraction        [exists]
  14. encapsulation      [exists]
  15. final-static       [NEW]
  16. enums              [NEW]
  17. nested-classes     [NEW]
  18. object-class       [NEW]

EXCEPTION & ANNOTATIONS (existing + new)
  19. exceptions         [exists]
  20. annotations        [NEW]

GENERICS & COLLECTIONS (existing + gaps filled)
  21. generics           [exists]
  22. collections-list   [exists]
  23. collections-map    [exists]
  24. collections-queue  [NEW]
  25. collections-utils  [NEW]
  26. iterators          [NEW]

FUNCTIONAL JAVA (existing + gaps filled)
  27. lambdas            [exists]
  28. functional-interfaces [NEW]
  29. method-references  [NEW]
  30. optional           [NEW]
  31. streams            [exists]

MODERN JAVA (existing + gaps filled)
  32. switch-expressions [NEW]
  33. pattern-matching   [NEW]
  34. records-sealed     [exists]

DATE, I/O & PLATFORM
  35. datetime-api       [NEW]
  36. io-files           [exists]
  37. serialization      [NEW]
  38. regex              [NEW]
  39. memory-model       [NEW]
  40. reflection         [NEW]
```

**Total: 40 chapters** (15 existing + 25 new)
Estimated additional content time: ~18–20 hours
Revised total course time: ~26–28 hours
