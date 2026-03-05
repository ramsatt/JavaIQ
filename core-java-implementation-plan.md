# Core Java — Detailed Implementation Plan

## How to Read This Document

Each chapter entry contains:
- **File** — exact filename to create under `src/app/features/tutorials/topics/`
- **Component / Selector** — Angular component class name and selector
- **Gradient** — CSS gradient string for `<app-tutorial-layout gradient="...">`
- **Sections** — ordered list of content sections with sub-topics
- **Interactive Widget** — the demo/visualizer idea for the viz-card section
- **Code Snippets** — key code blocks the chapter must include
- **Wiring** — changes needed in `topic-router.component.ts` and `tutorial-detail.component.ts`

> All components follow the existing pattern:
> `imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent]`
> State managed via `signal()` from `@angular/core`

---

## Phases Overview

| Phase | Focus | Chapters | New Slugs |
|---|---|---|---|
| 1 | Java Foundations | 6 | `data-types`, `variables-casting`, `operators`, `control-flow`, `loops`, `methods` |
| 2 | OOP Depth | 4 | `enums`, `nested-classes`, `final-static`, `object-class` |
| 3 | Functional Java | 3 | `functional-interfaces`, `method-references`, `optional` |
| 4 | Collections Gaps | 3 | `collections-queue`, `collections-utils`, `iterators` |
| 5 | Modern Java | 3 | `switch-expressions`, `pattern-matching`, `text-blocks` |
| 6 | Date & Platform | 5 | `datetime-api`, `annotations`, `memory-model`, `reflection`, `regex` |

**Total new chapters: 24**

---

## Phase 1 — Java Foundations

These chapters must be inserted **before** `arrays` in the curriculum order in `tutorial-detail.component.ts`.

---

### Chapter 1 — Primitive Data Types

| Field | Value |
|---|---|
| **File** | `data-types.component.ts` |
| **Component** | `DataTypesComponent` |
| **Selector** | `app-topic-data-types` |
| **Gradient** | `linear-gradient(135deg, #1e3a5f, #2563eb)` |
| **Duration** | 35 min |
| **Description** | Primitives, wrapper classes, autoboxing, and default values |

**Content Sections:**

1. **What Are Primitive Types?**
   - The 8 primitive types: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`
   - Size in memory (byte chart: byte=1, short=2, int=4, long=8, float=4, double=8, char=2, boolean=1)
   - Default values for each type (when used as class fields)
   - Literals: `100L`, `3.14f`, `'A'`, `true`, `0xFF` (hex), `0b1010` (binary), `1_000_000` (underscores)

2. **Interactive Widget — Type Overflow Visualizer**
   - Show a `byte` counter (range -128 to 127)
   - "Increment" button adds 1 each click; at 127 it wraps to -128
   - Label shows current value + binary representation
   - Status line explains overflow when it happens

3. **Wrapper Classes & Autoboxing**
   - `Integer`, `Double`, `Boolean`, `Character` etc.
   - Autoboxing: `Integer x = 42;` compiles to `Integer.valueOf(42)`
   - Unboxing: `int y = x;` compiles to `x.intValue()`
   - `Integer.parseInt()`, `Double.parseDouble()`, `Integer.toBinaryString()`
   - The Integer cache trap: `Integer a = 127; Integer b = 127; a == b // true` vs `a = 128` is `false`

4. **Type Promotion Rules**
   - `byte + byte` produces `int`
   - `int * long` produces `long`
   - `int / int` = integer division (no remainder)

5. **Interview Tips**
   - `int` vs `Integer` in collections (generics only accept objects)
   - When to use `long` over `int` (IDs, timestamps)
   - `float` precision trap — use `BigDecimal` for money

**Code Snippets Required:**
```java
// 1. Declarations
byte b = 127;
short s = 32_767;
int i = 2_147_483_647;
long l = 9_223_372_036_854_775_807L;
float f = 3.14f;
double d = 3.141592653589793;
char c = 'A';
boolean flag = true;

// 2. Autoboxing
Integer boxed = 42;          // autoboxing
int unboxed = boxed;         // unboxing
Integer a = 127, b2 = 127;
System.out.println(a == b2); // true  (cached)
Integer x = 200, y = 200;
System.out.println(x == y);  // false (not cached)
System.out.println(x.equals(y)); // true

// 3. Useful wrapper methods
int parsed = Integer.parseInt("42");
String binary = Integer.toBinaryString(255); // "11111111"
int max = Integer.MAX_VALUE;                 // 2147483647
```

---

### Chapter 2 — Variables & Type Casting

| Field | Value |
|---|---|
| **File** | `variables-casting.component.ts` |
| **Component** | `VariablesCastingComponent` |
| **Selector** | `app-topic-variables-casting` |
| **Gradient** | `linear-gradient(135deg, #134e4a, #0d9488)` |
| **Duration** | 30 min |
| **Description** | Variable scope, `var` keyword, widening & narrowing conversion |

**Content Sections:**

1. **Variable Kinds**
   - Local variable (method-scoped, no default, must initialize before use)
   - Instance variable (class field, has default value)
   - Static variable (class-level, shared)
   - Naming rules: camelCase convention, `$` and `_` allowed, cannot start with digit

2. **`var` — Local Variable Type Inference (Java 10+)**
   - `var list = new ArrayList<String>();` — compiler infers type
   - Only valid for local variables with initializer
   - Cannot use with `null`, method parameters, or return types
   - Does NOT make Java dynamically typed

3. **Interactive Widget — Widening / Narrowing Visualizer**
   - Show two boxes: "Source Type" and "Target Type"
   - Dropdown to pick source (`byte`, `int`, `long`, `double`)
   - Dropdown to pick target
   - System shows: "Widening (safe, implicit)" or "Narrowing (explicit cast required, data loss possible)"
   - Animate data loss when narrowing `int 300 → byte` → shows `44` (overflow)

4. **Widening Conversion**
   - Automatic: `byte → short → int → long → float → double`
   - `int i = 100; double d = i;` — no cast needed

5. **Narrowing Conversion**
   - Requires explicit cast: `double d = 9.99; int i = (int) d;` → `9` (truncates)
   - Data loss warning with `byte b = (byte) 300;` → `44`

6. **`instanceof` and Casting Objects**
   - `if (animal instanceof Dog dog) { dog.bark(); }` — pattern matching (Java 16+)
   - Classic: `if (animal instanceof Dog) { ((Dog) animal).bark(); }`
   - `ClassCastException` example

**Code Snippets Required:**
```java
// var keyword
var name = "JavaIQ";          // String
var list = new ArrayList<Integer>();
var map = new HashMap<String, List<Integer>>();

// Widening (implicit)
int i = 100;
long l = i;
double d = l;

// Narrowing (explicit)
double pi = 3.14159;
int truncated = (int) pi;   // 3
byte b = (byte) 300;        // 44 — overflow!

// Object casting
Object obj = "Hello";
String s = (String) obj;    // works
Integer n = (Integer) obj;  // ClassCastException at runtime

// Safe cast with instanceof
if (obj instanceof String str) {
    System.out.println(str.toUpperCase());
}
```

---

### Chapter 3 — Operators

| Field | Value |
|---|---|
| **File** | `operators.component.ts` |
| **Component** | `OperatorsComponent` |
| **Selector** | `app-topic-operators` |
| **Gradient** | `linear-gradient(135deg, #3b0764, #7c3aed)` |
| **Duration** | 30 min |
| **Description** | Arithmetic, relational, logical, bitwise, and ternary operators |

**Content Sections:**

1. **Arithmetic Operators**
   - `+`, `-`, `*`, `/`, `%` (modulo)
   - Integer division trap: `7 / 2 = 3`, not `3.5`
   - `++` / `--` prefix vs postfix: `i++` vs `++i`
   - `+` as string concatenation

2. **Relational & Equality**
   - `==`, `!=`, `<`, `>`, `<=`, `>=`
   - `==` on objects checks reference, not value
   - Use `.equals()` for content comparison

3. **Logical Operators**
   - `&&` (short-circuit AND), `||` (short-circuit OR), `!` (NOT)
   - Short-circuit evaluation: `null != obj && obj.method()` — safe pattern

4. **Interactive Widget — Bitwise Operator Playground**
   - Two number inputs (0–15)
   - Buttons: AND, OR, XOR, NOT, Left Shift, Right Shift
   - Show binary representation of both inputs and the result
   - Animate which bits are set/cleared

5. **Bitwise Operators**
   - `&`, `|`, `^` (XOR), `~` (NOT), `<<` (left shift), `>>` (signed right shift), `>>>` (unsigned right shift)
   - Use cases: flags/bitmask patterns, powers of 2, permissions
   - Example: `int flags = READ | WRITE;` and `if ((flags & READ) != 0)`

6. **Ternary & Assignment Operators**
   - `condition ? valueIfTrue : valueIfFalse`
   - Compound assignment: `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`
   - When NOT to use nested ternary (readability)

7. **Operator Precedence Table**
   - Top 5 precedence rules developers must know
   - `*` before `+`, unary before binary, `&&` before `||`

**Code Snippets Required:**
```java
// Integer division trap
int a = 7, b = 2;
int wrong = a / b;        // 3
double correct = (double) a / b; // 3.5

// Prefix vs postfix
int i = 5;
System.out.println(i++); // prints 5, then i becomes 6
System.out.println(++i); // i becomes 7, then prints 7

// Short-circuit
String s = null;
boolean safe = s != null && s.length() > 0; // no NPE

// Bitwise flags
int READ  = 0b0001; // 1
int WRITE = 0b0010; // 2
int EXEC  = 0b0100; // 4

int userPerms = READ | WRITE; // 0b0011 = 3
boolean canRead  = (userPerms & READ)  != 0; // true
boolean canExec  = (userPerms & EXEC)  != 0; // false

// Ternary
String label = (score >= 60) ? "Pass" : "Fail";
```

---

### Chapter 4 — Control Flow

| Field | Value |
|---|---|
| **File** | `control-flow.component.ts` |
| **Component** | `ControlFlowComponent` |
| **Selector** | `app-topic-control-flow` |
| **Gradient** | `linear-gradient(135deg, #7f1d1d, #dc2626)` |
| **Duration** | 30 min |
| **Description** | `if-else`, `switch` statement, switch expressions (Java 14+), pattern switch |

**Content Sections:**

1. **`if` / `else if` / `else`**
   - Basic syntax and nesting
   - Dangling else problem
   - Simplifying with early return (guard clauses)

2. **`switch` Statement (Classic)**
   - Syntax, `case`, `break`, `default`
   - Fall-through behavior (intentional vs bug)
   - Works with: `int`, `char`, `String`, `enum`
   - Does NOT work with: `long`, `float`, `double`, `boolean`

3. **Interactive Widget — Flow Tracer**
   - Input: a number (1–5)
   - Visualize the code path highlighted step-by-step through an `if-else if-else` chain
   - Animate which branch activates

4. **Switch Expression (Java 14+)**
   - Arrow syntax: `case X -> value;` (no fall-through)
   - `yield` keyword for multi-statement case blocks
   - Switch expression must be exhaustive
   - Assign result directly: `String msg = switch (day) { ... };`

5. **Pattern Matching in Switch (Java 21)**
   - `case String s -> ...`
   - `case Integer i when i > 0 -> ...` (guarded pattern)
   - `null` handling in switch
   - Sealed class exhaustiveness

6. **Best Practices**
   - Prefer switch expressions over switch statements for assignment
   - Always include `default` in switch statements
   - Use `if-else` for range conditions, `switch` for discrete values

**Code Snippets Required:**
```java
// Classic switch with fall-through
switch (day) {
    case MONDAY:
    case TUESDAY:
        System.out.println("Weekday");
        break;
    case SATURDAY:
    case SUNDAY:
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Midweek");
}

// Switch expression (Java 14+)
String type = switch (day) {
    case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> "Weekday";
    case SATURDAY, SUNDAY -> "Weekend";
};

// Switch with yield (multi-statement block)
int numLetters = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> 6;
    case TUESDAY -> 7;
    default -> {
        String s = day.toString();
        yield s.length();
    }
};

// Pattern matching switch (Java 21)
Object obj = getSomeValue();
String result = switch (obj) {
    case Integer i   -> "int: " + i;
    case String s    -> "str: " + s.toUpperCase();
    case null        -> "null";
    default          -> "other: " + obj;
};
```

---

### Chapter 5 — Loops & Iteration

| Field | Value |
|---|---|
| **File** | `loops.component.ts` |
| **Component** | `LoopsComponent` |
| **Selector** | `app-topic-loops` |
| **Gradient** | `linear-gradient(135deg, #064e3b, #10b981)` |
| **Duration** | 30 min |
| **Description** | `for`, `while`, `do-while`, enhanced for-each, `break`, `continue`, labeled loops |

**Content Sections:**

1. **`for` Loop**
   - Init; condition; update anatomy
   - Multiple variables: `for (int i = 0, j = 10; i < j; i++, j--)`
   - Empty parts: `for (;;)` = infinite loop

2. **`while` and `do-while`**
   - `while`: check before execute
   - `do-while`: execute at least once, then check
   - Common use: menu prompts, reading input until sentinel

3. **Interactive Widget — Loop Step Visualizer**
   - Show a `for` loop running over an array `[10, 25, 8, 42, 3]`
   - "Step" button advances one iteration at a time
   - Highlight current index, current value, accumulated result (e.g., sum)
   - Show iteration count and running total

4. **Enhanced `for-each`**
   - `for (String s : list)` — works on arrays and any `Iterable`
   - Cannot modify the index or remove elements during iteration
   - Cannot be used in reverse

5. **`break` and `continue`**
   - `break` exits the loop entirely
   - `continue` skips to the next iteration
   - Labeled `break` / `continue` for nested loops
   - When to use vs refactoring to a method

6. **Common Loop Patterns**
   - Accumulator pattern (sum, count)
   - Two-pointer pattern with classic `for`
   - Loop with index access vs `for-each`
   - `while` for unknown iteration count (reading file lines, etc.)

**Code Snippets Required:**
```java
// Classic for
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}

// do-while (executes at least once)
Scanner sc = new Scanner(System.in);
int input;
do {
    System.out.print("Enter a positive number: ");
    input = sc.nextInt();
} while (input <= 0);

// Enhanced for-each
int[] numbers = {1, 2, 3, 4, 5};
for (int n : numbers) {
    System.out.print(n + " ");
}

// Labeled break (exit outer loop)
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer;
        System.out.println(i + "," + j);
    }
}

// continue
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue; // skip evens
    System.out.print(i + " "); // 1 3 5 7 9
}
```

---

### Chapter 6 — Methods & Varargs

| Field | Value |
|---|---|
| **File** | `methods.component.ts` |
| **Component** | `MethodsComponent` |
| **Selector** | `app-topic-methods` |
| **Gradient** | `linear-gradient(135deg, #312e81, #6366f1)` |
| **Duration** | 35 min |
| **Description** | Method anatomy, overloading, varargs, pass-by-value, recursion |

**Content Sections:**

1. **Method Anatomy**
   - Access modifier, return type, name, parameter list, body
   - `void` return type
   - `return` statement — multiple returns, early return pattern
   - Naming convention: verb + noun (`calculateTotal`, `getUserById`)

2. **Method Overloading**
   - Same name, different parameter types or count
   - Return type alone does NOT differentiate overloads
   - Compiler resolves at compile-time (static dispatch)
   - Widening during overload resolution order

3. **Interactive Widget — Call Stack Visualizer**
   - Show a recursive factorial function `factorial(4)`
   - "Step" button pushes each stack frame onto a visual stack
   - Display: frame name, local variable `n`, return value
   - "Unwind" button pops frames as values are returned
   - Shows stack overflow concept if depth is too large

4. **Pass-by-Value**
   - Java is ALWAYS pass-by-value
   - Primitives: a copy of the value is passed
   - Objects: a copy of the **reference** is passed (not the object itself)
   - Demonstration: swapping two ints vs mutating an object field

5. **Varargs**
   - `void log(String... messages)` — zero or more args
   - Internally treated as an array
   - Must be the last parameter
   - Ambiguity with overloaded methods

6. **Recursion**
   - Base case + recursive case
   - Factorial and Fibonacci examples
   - Stack overflow risk (`StackOverflowError`)
   - Tail recursion (Java does NOT optimize it)

**Code Snippets Required:**
```java
// Method overloading
int add(int a, int b)           { return a + b; }
double add(double a, double b)  { return a + b; }
int add(int a, int b, int c)    { return a + b + c; }

// Pass by value — primitive
void increment(int x) { x++; }
int n = 5;
increment(n);
System.out.println(n); // still 5 — value was copied

// Pass by value — object reference
void rename(StringBuilder sb) { sb.append(" World"); }
StringBuilder sb = new StringBuilder("Hello");
rename(sb);
System.out.println(sb); // "Hello World" — same object mutated

// Varargs
void log(String level, String... messages) {
    for (String msg : messages) {
        System.out.println("[" + level + "] " + msg);
    }
}
log("INFO", "Server started", "Listening on port 8080");

// Recursion
int factorial(int n) {
    if (n <= 1) return 1;          // base case
    return n * factorial(n - 1);  // recursive case
}
```

---

## Phase 2 — OOP Depth

---

### Chapter 7 — Enumerations

| Field | Value |
|---|---|
| **File** | `enums.component.ts` |
| **Component** | `EnumsComponent` |
| **Selector** | `app-topic-enums` |
| **Gradient** | `linear-gradient(135deg, #7c2d12, #f97316)` |
| **Duration** | 30 min |
| **Description** | `enum` types, fields, methods, `EnumSet`, `EnumMap`, use in switch |

**Content Sections:**

1. **What Is an Enum?**
   - Type-safe constant set replacing `public static final int`
   - All enums implicitly extend `java.lang.Enum`
   - `values()`, `valueOf()`, `name()`, `ordinal()`

2. **Enums with Fields & Methods**
   - Constructor (always private)
   - Instance fields and methods per constant
   - Abstract methods (each constant provides its own implementation)
   - `toString()` override

3. **Interactive Widget — Planet Enum Explorer**
   - Display the classic `Planet` enum (mass, radius, surfaceGravity)
   - Click a planet card to see its fields and computed `weight(earthWeight)`
   - Show how each constant holds its own data

4. **Enums in Switch**
   - Both classic `switch` and switch expressions
   - Exhaustiveness checking with sealed-like guarantees

5. **`EnumSet` and `EnumMap`**
   - `EnumSet.of(Day.MON, Day.WED)` — fast bitset-based Set for enums
   - `EnumMap<Day, String>` — array-based Map keyed by enum
   - Why these beat `HashSet`/`HashMap` for enum keys (performance)

6. **Singleton Pattern via Enum**
   - Thread-safe singleton: `enum Singleton { INSTANCE; }`
   - Protection against reflection attacks and serialization

**Code Snippets Required:**
```java
// Basic enum
public enum Direction { NORTH, SOUTH, EAST, WEST }

// Enum with fields and methods
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6);

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
    double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

// Use in switch expression
String desc = switch (direction) {
    case NORTH -> "Going up";
    case SOUTH -> "Going down";
    case EAST  -> "Going right";
    case WEST  -> "Going left";
};

// EnumSet & EnumMap
EnumSet<Direction> cardinals = EnumSet.of(Direction.NORTH, Direction.SOUTH);
EnumMap<Direction, String> labels = new EnumMap<>(Direction.class);
labels.put(Direction.NORTH, "N");
```

---

### Chapter 8 — Nested & Inner Classes

| Field | Value |
|---|---|
| **File** | `nested-classes.component.ts` |
| **Component** | `NestedClassesComponent` |
| **Selector** | `app-topic-nested-classes` |
| **Gradient** | `linear-gradient(135deg, #1e3a5f, #3b82f6)` |
| **Duration** | 30 min |
| **Description** | Static nested, inner, local, and anonymous classes — when and why |

**Content Sections:**

1. **Four Kinds of Nested Class**
   - Static nested class — no implicit reference to outer
   - Non-static inner class — has implicit reference to outer instance
   - Local class — defined inside a method
   - Anonymous class — defined and instantiated inline

2. **Static Nested Class**
   - Use as a logical grouping: `Builder`, `Node` in data structures
   - Cannot access outer class instance members
   - Accessed as `Outer.Nested`

3. **Non-static Inner Class**
   - Has access to all outer class members (including private)
   - Memory leak risk (holds reference to outer)
   - Accessed as `outer.new Inner()`

4. **Interactive Widget — Memory Diagram**
   - Show outer class instance on heap
   - Show inner class instance with arrow pointing to outer
   - Show static nested class with NO arrow (independent)
   - Toggle between static vs non-static to see difference

5. **Anonymous Classes**
   - Inline implementation of an interface or abstract class
   - `Runnable r = new Runnable() { public void run() { ... } };`
   - Replaced by lambdas for single-method interfaces (Java 8+)
   - Still needed for multi-method interfaces/abstract classes

6. **Common Patterns**
   - Builder pattern using static nested class
   - `LinkedList.Node` as private static nested
   - Event listener as anonymous class vs lambda
   - Comparator before Java 8

**Code Snippets Required:**
```java
// Static nested — Builder pattern
public class Person {
    private final String name;
    private final int age;

    private Person(Builder b) { this.name = b.name; this.age = b.age; }

    public static class Builder {
        private String name;
        private int age;
        public Builder name(String n) { this.name = n; return this; }
        public Builder age(int a) { this.age = a; return this; }
        public Person build() { return new Person(this); }
    }
}
Person p = new Person.Builder().name("Alice").age(30).build();

// Non-static inner class
public class Outer {
    private int value = 10;

    class Inner {
        void display() {
            System.out.println("Outer value: " + value); // accesses outer field
        }
    }
}

// Anonymous class
Comparator<String> byLength = new Comparator<>() {
    @Override
    public int compare(String a, String b) {
        return a.length() - b.length();
    }
};
// Modern: Comparator<String> byLength = Comparator.comparingInt(String::length);
```

---

### Chapter 9 — `final` & `static` In Depth

| Field | Value |
|---|---|
| **File** | `final-static.component.ts` |
| **Component** | `FinalStaticComponent` |
| **Selector** | `app-topic-final-static` |
| **Gradient** | `linear-gradient(135deg, #1c1917, #78716c)` |
| **Duration** | 25 min |
| **Description** | `final` variables/methods/classes, `static` members, initializer blocks, constants |

**Content Sections:**

1. **`final` Variables**
   - Must be initialized once — either at declaration or in constructor
   - `final` local variable: must assign before use, cannot reassign
   - `final` reference: the reference cannot change, but the object's state can

2. **`final` Methods & Classes**
   - `final` method: cannot be overridden
   - `final` class: cannot be subclassed (`String`, `Integer` are `final`)
   - Relationship to immutability

3. **`static` Members**
   - Belong to the class, not instances
   - `static` field: shared across all instances (counter pattern)
   - `static` method: callable without object (`Math.sqrt()`)
   - Cannot use `this` or access instance members

4. **Interactive Widget — Static Counter Demo**
   - Button to "Create new instance" — shows N objects created
   - Static counter increments on each new object
   - Instance counter shows `instanceId` per object
   - Visually contrasts class-level vs instance-level data

5. **Static Initializer Blocks**
   - `static { ... }` — runs once when class is loaded
   - Used to initialize complex static data
   - Execution order: static blocks in order of declaration

6. **Constants Pattern**
   - `public static final TYPE NAME = value;`
   - `UPPER_SNAKE_CASE` convention
   - Interface constants vs `enum` — prefer `enum`

**Code Snippets Required:**
```java
// final variable
final int MAX = 100;
// MAX = 200; // compile error

final List<String> list = new ArrayList<>();
list.add("ok");       // allowed — object mutated
// list = new ArrayList<>();  // compile error — reference changed

// static field + instance field contrast
public class Counter {
    private static int totalCount = 0;  // shared
    private final int id;               // per-instance

    public Counter() {
        totalCount++;
        this.id = totalCount;
    }
    public static int getTotal() { return totalCount; }
    public int getId() { return id; }
}

// Static initializer block
public class Config {
    public static final Map<String, String> DEFAULTS;
    static {
        DEFAULTS = new HashMap<>();
        DEFAULTS.put("host", "localhost");
        DEFAULTS.put("port", "8080");
    }
}
```

---

### Chapter 10 — The Object Class

| Field | Value |
|---|---|
| **File** | `object-class.component.ts` |
| **Component** | `ObjectClassComponent` |
| **Selector** | `app-topic-object-class` |
| **Gradient** | `linear-gradient(135deg, #14532d, #22c55e)` |
| **Duration** | 35 min |
| **Description** | `equals`, `hashCode` contract, `toString`, `clone`, `getClass` |

**Content Sections:**

1. **`java.lang.Object` — The Root**
   - Every class implicitly extends `Object`
   - Key methods: `equals()`, `hashCode()`, `toString()`, `getClass()`, `clone()`, `finalize()`

2. **`equals()` and `hashCode()` Contract**
   - Default `==` vs semantic equality
   - The contract: if `a.equals(b)` then `a.hashCode() == b.hashCode()`
   - Breaking the contract breaks `HashMap`, `HashSet`
   - Must override both together

3. **Interactive Widget — HashCode Bucket Demo**
   - Create `Point` objects with x, y
   - Add to a `HashSet` visualization (show buckets 0–7)
   - Without override: duplicate points in different buckets
   - With override: correctly deduplicated
   - Animate bucket assignment based on `hashCode % N`

4. **Implementing `equals()` Correctly**
   - Null check, same reference check, `getClass()` check, field comparison
   - Using `Objects.equals()` for null-safe comparison
   - Using `Objects.hash()` for `hashCode`

5. **`toString()`**
   - Default: `ClassName@hashCodeHex`
   - Override for readable output in logs and debugging
   - Use with `String.format` or string concatenation

6. **Lombok & Record Alternatives**
   - `@Data` / `@EqualsAndHashCode` in Lombok
   - Java `record` auto-generates all three
   - When to write manually vs generate

**Code Snippets Required:**
```java
// Broken — no override (fails in HashSet)
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }
}
Set<Point> set = new HashSet<>();
set.add(new Point(1, 2));
set.add(new Point(1, 2));
System.out.println(set.size()); // 2 — BUG!

// Fixed — with equals + hashCode
class Point {
    int x, y;
    Point(int x, int y) { this.x = x; this.y = y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point other)) return false;
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
}
set.add(new Point(1, 2));
set.add(new Point(1, 2));
System.out.println(set.size()); // 1 — correct
```

---

## Phase 3 — Functional Java

---

### Chapter 11 — Built-in Functional Interfaces

| Field | Value |
|---|---|
| **File** | `functional-interfaces.component.ts` |
| **Component** | `FunctionalInterfacesComponent` |
| **Selector** | `app-topic-functional-interfaces` |
| **Gradient** | `linear-gradient(135deg, #701a75, #d946ef)` |
| **Duration** | 35 min |
| **Description** | `Predicate`, `Function`, `Consumer`, `Supplier`, `UnaryOperator`, composition |

**Content Sections:**

1. **What Is a Functional Interface?**
   - `@FunctionalInterface` — exactly one abstract method
   - `java.util.function` package
   - Can be implemented by a lambda or method reference

2. **The Big 4**
   - `Predicate<T>`: `boolean test(T t)` — filtering
   - `Function<T, R>`: `R apply(T t)` — transformation
   - `Consumer<T>`: `void accept(T t)` — side effects
   - `Supplier<T>`: `T get()` — lazy production

3. **Interactive Widget — Pipeline Builder**
   - Show a `List<String>` of words
   - Checkboxes to toggle: `filter` (length > 3), `map` (toUpperCase), `forEach` (print)
   - Animate items flowing through each active stage
   - Show intermediate results after each step

4. **Composition Methods**
   - `Predicate.and()`, `or()`, `negate()`
   - `Function.andThen()`, `compose()`
   - `Consumer.andThen()`

5. **Bi-Variants and Operators**
   - `BiFunction<T, U, R>`, `BiPredicate<T, U>`, `BiConsumer<T, U>`
   - `UnaryOperator<T>` — Function where T = R
   - `BinaryOperator<T>` — BiFunction where T = U = R

6. **Common Real-World Uses**
   - `Predicate` for validation chains
   - `Function` for transformation pipelines
   - `Supplier` for lazy initialization
   - `Consumer` for logging/auditing

**Code Snippets Required:**
```java
// Predicate
Predicate<String> isLong = s -> s.length() > 5;
Predicate<String> startsWithJ = s -> s.startsWith("J");
Predicate<String> combined = isLong.and(startsWithJ);
System.out.println(combined.test("JavaIQ")); // true

// Function
Function<String, Integer> toLength = String::length;
Function<String, String> trim = String::trim;
Function<String, Integer> trimThenLength = trim.andThen(toLength);

// Consumer
Consumer<String> print = System.out::println;
Consumer<String> printUpper = s -> System.out.println(s.toUpperCase());
Consumer<String> printBoth = print.andThen(printUpper);
printBoth.accept("hello");

// Supplier (lazy)
Supplier<List<String>> listFactory = ArrayList::new;
List<String> list1 = listFactory.get();
List<String> list2 = listFactory.get(); // fresh list each time

// UnaryOperator
UnaryOperator<String> addGreeting = name -> "Hello, " + name + "!";
List<String> names = List.of("Alice", "Bob");
names.stream().map(addGreeting).forEach(System.out::println);
```

---

### Chapter 12 — Method References

| Field | Value |
|---|---|
| **File** | `method-references.component.ts` |
| **Component** | `MethodReferencesComponent` |
| **Selector** | `app-topic-method-references` |
| **Gradient** | `linear-gradient(135deg, #7c2d12, #ea580c)` |
| **Duration** | 25 min |
| **Description** | Four kinds of method references, when to use over lambdas, constructor refs |

**Content Sections:**

1. **Why Method References?**
   - Shorter syntax when lambda just delegates to a method
   - `s -> s.toUpperCase()` becomes `String::toUpperCase`
   - Improves readability in stream pipelines

2. **Four Kinds**
   - `ClassName::staticMethod` — `Integer::parseInt`
   - `instance::instanceMethod` — `System.out::println`
   - `ClassName::instanceMethod` — `String::toUpperCase` (first arg is receiver)
   - `ClassName::new` — constructor reference `ArrayList::new`

3. **Interactive Widget — Lambda to Method Reference Transformer**
   - Four tabs, one per kind
   - Show lambda form on left, method reference on right
   - Button "Show Equivalent" animates the transformation
   - Type-check display shows what functional interface each satisfies

4. **Constructor References**
   - `Supplier<List<String>> = ArrayList::new`
   - `Function<String, StringBuilder> = StringBuilder::new`
   - `BiFunction<Integer, Integer, Point> = Point::new`

5. **When NOT to Use Method References**
   - When extra logic is needed beyond the single method call
   - When it reduces clarity (ambiguous overloads)
   - `x -> x.compareTo(pivot)` — better as lambda (context-dependent)

**Code Snippets Required:**
```java
List<String> names = List.of("Charlie", "Alice", "Bob");

// 1. Static method ref
List<Integer> lengths = names.stream()
    .map(String::length)         // s -> s.length()
    .collect(Collectors.toList());

// 2. Instance method ref (bound)
PrintStream out = System.out;
names.forEach(out::println);    // s -> System.out.println(s)

// 3. Instance method ref (unbound)
names.stream()
    .map(String::toUpperCase)   // s -> s.toUpperCase()
    .forEach(System.out::println);

// 4. Constructor ref
Supplier<ArrayList<String>> listMaker = ArrayList::new;
Function<String, StringBuilder> sbMaker = StringBuilder::new;

// Sorted using Comparator method ref
List<String> sorted = names.stream()
    .sorted(String::compareTo)
    .collect(Collectors.toList());
```

---

### Chapter 13 — Optional

| Field | Value |
|---|---|
| **File** | `optional.component.ts` |
| **Component** | `OptionalComponent` |
| **Selector** | `app-topic-optional` |
| **Gradient** | `linear-gradient(135deg, #0f4c81, #0ea5e9)` |
| **Duration** | 30 min |
| **Description** | `Optional` creation, `orElse`, `map`, `flatMap`, `filter`, anti-patterns |

**Content Sections:**

1. **The Null Problem**
   - `NullPointerException` — the billion-dollar mistake
   - The old way: null checks everywhere
   - `Optional<T>` as a container that may or may not hold a value

2. **Creating Optional**
   - `Optional.of(value)` — throws NPE if null
   - `Optional.ofNullable(value)` — safe
   - `Optional.empty()` — explicitly empty

3. **Interactive Widget — Optional Chain Visualizer**
   - Input: a nullable username string (text field, or click "Set Null")
   - Show chain: `Optional.ofNullable(input).filter(...).map(...).orElse("Guest")`
   - Highlight which step the chain exits (empty check, filter fails, map succeeds)
   - Show final output box

4. **Consuming Values**
   - `isPresent()` / `isEmpty()` (Java 11+)
   - `get()` — risky, throws `NoSuchElementException`
   - `orElse(default)` — always evaluates default expression
   - `orElseGet(Supplier)` — lazily evaluates
   - `orElseThrow(Supplier)` — custom exception
   - `ifPresent(Consumer)`, `ifPresentOrElse()` (Java 9+)

5. **Transforming Optional**
   - `map(Function)` — transforms value inside
   - `flatMap(Function)` — avoids `Optional<Optional<T>>`
   - `filter(Predicate)` — empties if predicate fails
   - `stream()` (Java 9+) — convert to Stream of 0 or 1 elements

6. **Anti-Patterns**
   - Never use `Optional` as method parameter or field
   - `isPresent()` + `get()` = same as null check (defeats the purpose)
   - Prefer `orElseGet` over `orElse` for expensive defaults
   - `Optional` in collections is always wrong

**Code Snippets Required:**
```java
// Creation
Optional<String> name = Optional.of("Alice");
Optional<String> maybe = Optional.ofNullable(getUserInput()); // may be null
Optional<String> empty = Optional.empty();

// Retrieving
String result = maybe.orElse("Guest");
String lazy   = maybe.orElseGet(() -> fetchDefault()); // lazy
String thrown = maybe.orElseThrow(() -> new UserNotFoundException("no user"));

// Transforming
Optional<Integer> nameLength = name
    .filter(s -> !s.isBlank())
    .map(String::length);       // Optional.of(5)

// flatMap — avoid Optional<Optional<>>
Optional<String> city = findUser(id)          // Optional<User>
    .flatMap(User::getAddress)                // Optional<Address>
    .map(Address::getCity);                   // Optional<String>

// Anti-pattern (avoid)
if (maybe.isPresent()) {
    System.out.println(maybe.get()); // just use ifPresent!
}
// Better:
maybe.ifPresent(System.out::println);
maybe.ifPresentOrElse(System.out::println, () -> System.out.println("empty"));
```

---

## Phase 4 — Collections Gaps

---

### Chapter 14 — Collections: Queue & Deque

| Field | Value |
|---|---|
| **File** | `collections-queue.component.ts` |
| **Component** | `CollectionsQueueComponent` |
| **Selector** | `app-topic-collections-queue` |
| **Gradient** | `linear-gradient(135deg, #0c4a6e, #06b6d4)` |
| **Duration** | 35 min |
| **Description** | `Queue`, `Deque`, `PriorityQueue`, `ArrayDeque`, stack-via-deque, FIFO vs LIFO |

**Content Sections:**

1. **Queue Interface — FIFO**
   - `offer()` vs `add()` (exception vs boolean)
   - `poll()` vs `remove()`, `peek()` vs `element()`
   - `LinkedList` implements `Queue` (not recommended for standalone use)
   - `ArrayDeque` as the preferred `Queue` implementation

2. **PriorityQueue**
   - Min-heap by default (smallest element polled first)
   - Custom ordering with `Comparator`
   - `O(log n)` offer/poll, `O(1)` peek
   - Use cases: task scheduling, Dijkstra's algorithm, top-K problems

3. **Interactive Widget — Queue Simulator**
   - Visual FIFO queue showing elements as cards
   - "Enqueue" button adds a random number
   - "Dequeue" button removes from front with animation
   - For `PriorityQueue` mode: show heap-order (smallest exits first)
   - Toggle between FIFO and Priority mode

4. **Deque — Double-Ended Queue**
   - `offerFirst()` / `offerLast()`, `pollFirst()` / `pollLast()`
   - `ArrayDeque` — resizable array, no null, faster than `LinkedList`
   - `Deque` as Stack: `push()` = `addFirst()`, `pop()` = `removeFirst()`
   - Why prefer `ArrayDeque` over `Stack` class

5. **Choosing the Right Queue**
   - `ArrayDeque` — general-purpose FIFO / stack
   - `PriorityQueue` — ordering by priority
   - `LinkedList` — when you need `null` elements or `List` + `Queue` combo
   - `BlockingQueue` (for concurrency — covered in multithreading)

**Code Snippets Required:**
```java
// ArrayDeque as Queue (FIFO)
Deque<String> queue = new ArrayDeque<>();
queue.offer("first");
queue.offer("second");
queue.offer("third");
System.out.println(queue.poll());  // "first"
System.out.println(queue.peek());  // "second" (not removed)

// ArrayDeque as Stack (LIFO)
Deque<String> stack = new ArrayDeque<>();
stack.push("bottom");
stack.push("middle");
stack.push("top");
System.out.println(stack.pop());   // "top"

// PriorityQueue — min-heap
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5); minHeap.offer(1); minHeap.offer(3);
System.out.println(minHeap.poll()); // 1 (smallest)

// PriorityQueue — max-heap via reversed comparator
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
maxHeap.offer(5); maxHeap.offer(1); maxHeap.offer(3);
System.out.println(maxHeap.poll()); // 5 (largest)

// PriorityQueue with custom object
PriorityQueue<Task> tasks = new PriorityQueue<>(Comparator.comparingInt(Task::getPriority));
```

---

### Chapter 15 — Collections Utility Methods

| Field | Value |
|---|---|
| **File** | `collections-utils.component.ts` |
| **Component** | `CollectionsUtilsComponent` |
| **Selector** | `app-topic-collections-utils` |
| **Gradient** | `linear-gradient(135deg, #1e1b4b, #6d28d9)` |
| **Duration** | 25 min |
| **Description** | `Collections` class, `Arrays` class, factory methods, unmodifiable views |

**Content Sections:**

1. **`Collections` Utility Class**
   - `sort()`, `reverse()`, `shuffle()`, `swap()`
   - `min()`, `max()`, `frequency()`, `disjoint()`
   - `fill()`, `copy()`, `nCopies()`
   - `binarySearch()` (list must be sorted)

2. **Unmodifiable & Synchronized Wrappers**
   - `Collections.unmodifiableList()` — throws `UnsupportedOperationException` on mutate
   - `Collections.synchronizedList()` — thread-safe wrapper (prefer `CopyOnWriteArrayList`)
   - `Collections.singletonList()`, `Collections.emptyList()`

3. **Interactive Widget — Sort Comparator Demo**
   - List of `Person` (name, age)
   - Buttons: Sort by Name, Sort by Age, Sort by Name then Age, Reverse
   - Animate sort result after each click

4. **`Arrays` Utility Class**
   - `Arrays.sort()`, `Arrays.binarySearch()`
   - `Arrays.fill()`, `Arrays.copyOf()`, `Arrays.copyOfRange()`
   - `Arrays.equals()`, `Arrays.deepEquals()` for 2D arrays
   - `Arrays.asList()` — fixed-size `List` backed by array
   - `Arrays.stream()` — convert to Stream

5. **Modern Factory Methods (Java 9+)**
   - `List.of(...)` — immutable list
   - `Set.of(...)` — immutable set (no duplicates, no null)
   - `Map.of(k1, v1, k2, v2)` — immutable map (up to 10 pairs)
   - `Map.entry()`, `Map.ofEntries()`
   - `List.copyOf()`, `Map.copyOf()` — defensive copy

**Code Snippets Required:**
```java
// Collections utilities
List<Integer> nums = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6));
Collections.sort(nums);                            // [1, 1, 2, 3, 4, 5, 6, 9]
Collections.reverse(nums);                        // [9, 6, 5, 4, 3, 2, 1, 1]
Collections.shuffle(nums, new Random(42));
System.out.println(Collections.max(nums));
System.out.println(Collections.frequency(nums, 1)); // 2

// Unmodifiable
List<String> mutable = new ArrayList<>(List.of("a", "b", "c"));
List<String> immutable = Collections.unmodifiableList(mutable);
// immutable.add("d"); // throws UnsupportedOperationException

// Factory methods (Java 9+)
List<String> names   = List.of("Alice", "Bob", "Charlie");
Set<Integer> primes  = Set.of(2, 3, 5, 7, 11);
Map<String, Integer> scores = Map.of("Alice", 95, "Bob", 87);

// Arrays utility
int[] arr = {5, 3, 8, 1, 4};
Arrays.sort(arr);
int idx = Arrays.binarySearch(arr, 5); // index after sort
int[] copy = Arrays.copyOfRange(arr, 1, 4); // subarray
System.out.println(Arrays.toString(arr));   // [1, 3, 4, 5, 8]
```

---

### Chapter 16 — Iterator & Iterable

| Field | Value |
|---|---|
| **File** | `iterators.component.ts` |
| **Component** | `IteratorsComponent` |
| **Selector** | `app-topic-iterators` |
| **Gradient** | `linear-gradient(135deg, #134e4a, #2dd4bf)` |
| **Duration** | 25 min |
| **Description** | `Iterator`, `ListIterator`, `Iterable`, custom iterable, fail-fast behavior |

**Content Sections:**

1. **The `Iterator<E>` Interface**
   - `hasNext()`, `next()`, `remove()`
   - How `for-each` desugars to `Iterator`
   - Why you need `Iterator.remove()` instead of `List.remove()` inside a loop

2. **`ConcurrentModificationException`**
   - Modifying a collection while iterating with `for-each` or `Iterator`
   - Fail-fast iterators (most JDK collections)
   - Safe alternatives: `Iterator.remove()`, `removeIf()`, `CopyOnWriteArrayList`

3. **Interactive Widget — Safe vs Unsafe Removal Demo**
   - List `[1, 2, 3, 4, 5, 6]`
   - "Remove Evens (Unsafe)" — triggers animated `ConcurrentModificationException`
   - "Remove Evens (Iterator)" — shows safe step-by-step removal
   - "Remove Evens (removeIf)" — shows the cleanest one-liner

4. **`ListIterator<E>`**
   - Bidirectional: `hasPrevious()`, `previous()`
   - `set()` to replace current element
   - `add()` to insert before cursor

5. **Implementing `Iterable<T>`**
   - Implement `iterator()` method
   - Allows custom class to work in `for-each`
   - Example: `Range` class that iterates from `start` to `end`

**Code Snippets Required:**
```java
// Safe removal via Iterator
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
Iterator<Integer> it = list.iterator();
while (it.hasNext()) {
    if (it.next() % 2 == 0) it.remove(); // safe
}
// list = [1, 3, 5]

// ConcurrentModificationException (bad)
for (Integer n : list) {
    if (n % 2 == 0) list.remove(n); // throws ConcurrentModificationException!
}

// Best modern approach
list.removeIf(n -> n % 2 == 0);

// Custom Iterable
public class Range implements Iterable<Integer> {
    private final int start, end;
    public Range(int start, int end) { this.start = start; this.end = end; }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = start;
            public boolean hasNext() { return current < end; }
            public Integer next() { return current++; }
        };
    }
}
for (int n : new Range(1, 6)) {
    System.out.print(n + " "); // 1 2 3 4 5
}
```

---

## Phase 5 — Modern Java

---

### Chapter 17 — Switch Expressions

| Field | Value |
|---|---|
| **File** | `switch-expressions.component.ts` |
| **Component** | `SwitchExpressionsComponent` |
| **Selector** | `app-topic-switch-expressions` |
| **Gradient** | `linear-gradient(135deg, #1a1a2e, #e94560)` |
| **Duration** | 25 min |
| **Description** | Arrow cases, `yield`, exhaustiveness, switch as expression (Java 14+) |

> Note: This chapter extends the `control-flow` chapter. Cross-link them.

**Content Sections:**

1. **From Statement to Expression**
   - Classic `switch` is a statement; result must be assigned via `break` + variable
   - Switch expression: the whole thing evaluates to a value

2. **Arrow Case Syntax**
   - `case X -> result;` — no fall-through, no `break` needed
   - Multiple labels: `case MON, TUE, WED -> "Weekday";`
   - Arrow with block: `case X -> { yield computedValue; }`

3. **Interactive Widget — Statement vs Expression Side-by-Side**
   - Input: a `Day` enum value selector
   - Left panel shows classic switch statement code path highlighted
   - Right panel shows switch expression equivalent
   - Show final value box for the expression side

4. **`yield` Keyword**
   - Used inside block-style arrow case to produce the value
   - Only valid inside switch expressions

5. **Exhaustiveness**
   - Compiler enforces all cases are covered when used as expression
   - Sealed types + switch expression = compile-time completeness check

6. **Practical Patterns**
   - HTTP status code to message
   - Shape area computation (with sealed classes)
   - Config key to default value

**Code Snippets Required:**
```java
// Old way (statement)
String result;
switch (status) {
    case 200: result = "OK"; break;
    case 404: result = "Not Found"; break;
    default:  result = "Unknown";
}

// New way (expression, Java 14+)
String result = switch (status) {
    case 200 -> "OK";
    case 201 -> "Created";
    case 404 -> "Not Found";
    case 500 -> "Server Error";
    default  -> "Unknown: " + status;
};

// yield in block case
int score = switch (grade) {
    case 'A' -> 100;
    case 'B' -> 85;
    case 'C' -> {
        System.out.println("Average grade");
        yield 70;
    }
    default -> throw new IllegalArgumentException("Invalid grade: " + grade);
};

// With sealed interface (exhaustive — no default needed)
sealed interface Shape permits Circle, Rectangle {}
double area = switch (shape) {
    case Circle c    -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
};
```

---

### Chapter 18 — Pattern Matching

| Field | Value |
|---|---|
| **File** | `pattern-matching.component.ts` |
| **Component** | `PatternMatchingComponent` |
| **Selector** | `app-topic-pattern-matching` |
| **Gradient** | `linear-gradient(135deg, #1c0533, #9333ea)` |
| **Duration** | 30 min |
| **Description** | `instanceof` patterns, switch patterns, guarded patterns, null handling (Java 16–21) |

**Content Sections:**

1. **`instanceof` Pattern Matching (Java 16)**
   - Old: `if (obj instanceof String) { String s = (String) obj; ... }`
   - New: `if (obj instanceof String s) { s.toUpperCase(); }`
   - Binding variable scoped to the `if` block
   - Works with negation: `if (!(obj instanceof String s)) return;`

2. **Pattern Variables in Complex Conditions**
   - `obj instanceof String s && s.length() > 5`
   - Cannot use `||` with pattern variable (scope rules)

3. **Interactive Widget — Type Dispatch Demo**
   - List of mixed objects (String, Integer, Double, null)
   - "Process All" button shows each item being dispatched to the right handler
   - Animate: show old `instanceof` + cast approach, then new pattern approach side by side

4. **Pattern Matching in Switch (Java 21)**
   - `case String s -> ...`
   - Guarded patterns: `case Integer i when i > 0 -> "positive"`
   - `null` case handling in switch
   - Dominance rules (more specific patterns first)

5. **Sealed Classes + Pattern Matching**
   - Exhaustive switch without `default`
   - Compiler verifies all permitted subtypes are handled
   - The power of algebraic data types in Java

**Code Snippets Required:**
```java
// Old instanceof + cast
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.toUpperCase());
}

// Pattern matching instanceof (Java 16+)
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}

// Guarded
if (obj instanceof Integer i && i > 0) {
    System.out.println("Positive int: " + i);
}

// Pattern switch (Java 21)
String describe(Object obj) {
    return switch (obj) {
        case Integer i when i < 0  -> "negative int: " + i;
        case Integer i             -> "non-negative int: " + i;
        case String s when s.isEmpty() -> "empty string";
        case String s              -> "string: " + s;
        case null                  -> "null";
        default                    -> "other: " + obj.getClass().getSimpleName();
    };
}

// Sealed + exhaustive switch
sealed interface Expr permits Num, Add, Mul {}
record Num(int value) implements Expr {}
record Add(Expr l, Expr r) implements Expr {}
record Mul(Expr l, Expr r) implements Expr {}

int eval(Expr expr) {
    return switch (expr) {
        case Num(var v)      -> v;
        case Add(var l, var r) -> eval(l) + eval(r);
        case Mul(var l, var r) -> eval(l) * eval(r);
    };
}
```

---

### Chapter 19 — Text Blocks & String Enhancements

| Field | Value |
|---|---|
| **File** | `text-blocks.component.ts` |
| **Component** | `TextBlocksComponent` |
| **Selector** | `app-topic-text-blocks` |
| **Gradient** | `linear-gradient(135deg, #0f766e, #34d399)` |
| **Duration** | 25 min |
| **Description** | Text blocks (Java 15+), `strip()`, `isBlank()`, `repeat()`, `formatted()`, `lines()` |

**Content Sections:**

1. **Text Blocks (Java 15+)**
   - `"""..."""` triple-quote syntax
   - Automatic incidental whitespace stripping
   - Embedded quotes without escaping
   - Line ending normalization

2. **Indentation & Escape Sequences**
   - `\` line continuation (no newline)
   - `\s` space at end of line (preserved space)
   - `\n`, `\t` still work inside

3. **Interactive Widget — Text Block Builder**
   - Show a JSON / HTML / SQL string as both classic escaped string and text block
   - Toggle button switches between the two representations
   - Count characters saved / readability score comparison

4. **Java 11+ String Methods**
   - `strip()`, `stripLeading()`, `stripTrailing()` — Unicode-aware (vs `trim()`)
   - `isBlank()` — true if empty or only whitespace
   - `repeat(int)` — `"ab".repeat(3)` = `"ababab"`
   - `lines()` — returns `Stream<String>` of lines

5. **Java 15+ String Methods**
   - `formatted(args...)` — instance equivalent of `String.format`
   - `String.format()` vs `formatted()` vs `StringTemplate` (preview in Java 21)

**Code Snippets Required:**
```java
// Text block — JSON
String json = """
        {
            "name": "Alice",
            "age": 30,
            "active": true
        }
        """;

// Text block — HTML
String html = """
        <html>
            <body>
                <h1>Hello, %s!</h1>
            </body>
        </html>
        """.formatted("World");

// Text block — SQL
String sql = """
        SELECT u.id, u.name, o.total
        FROM users u
        JOIN orders o ON u.id = o.user_id
        WHERE u.active = true
        ORDER BY o.total DESC
        """;

// Java 11 string methods
"  hello  ".strip();           // "hello"
"  ".isBlank();                // true
"ab".repeat(3);                // "ababab"
"line1\nline2\nline3".lines()  // Stream of 3 strings

// formatted (Java 15)
String msg = "Hello, %s! You have %d messages.".formatted("Alice", 5);
```

---

## Phase 6 — Date & Platform

---

### Chapter 20 — Date & Time API

| Field | Value |
|---|---|
| **File** | `datetime-api.component.ts` |
| **Component** | `DatetimeApiComponent` |
| **Selector** | `app-topic-datetime-api` |
| **Gradient** | `linear-gradient(135deg, #172554, #3b82f6)` |
| **Duration** | 40 min |
| **Description** | `LocalDate`, `LocalDateTime`, `ZonedDateTime`, `Instant`, `Duration`, `Period`, formatting |

**Content Sections:**

1. **Why a New Date API?**
   - Problems with `java.util.Date` and `Calendar` (mutable, thread-unsafe, confusing API)
   - `java.time` package introduced in Java 8 (inspired by Joda-Time)
   - Immutable and thread-safe by design

2. **Core Classes**
   - `LocalDate` — date without time or timezone (2024-03-15)
   - `LocalTime` — time without date or timezone (14:30:00)
   - `LocalDateTime` — date + time, no timezone
   - `ZonedDateTime` — date + time + timezone
   - `Instant` — machine timestamp (nanoseconds from epoch)

3. **Interactive Widget — Date Calculator**
   - Input: a start date (date picker or text)
   - Input: number of days to add/subtract
   - Show result date
   - Show `Period` between two dates (years, months, days)
   - Show `Duration` for time-based calculation

4. **Creating & Manipulating**
   - `LocalDate.now()`, `LocalDate.of(year, month, day)`
   - `plusDays()`, `minusMonths()`, `withYear()`, `withDayOfMonth()`
   - `isBefore()`, `isAfter()`, `isEqual()`
   - `Period.between()` for dates, `Duration.between()` for times

5. **Formatting & Parsing**
   - `DateTimeFormatter.ISO_LOCAL_DATE`
   - `DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")`
   - `date.format(formatter)`, `LocalDate.parse(str, formatter)`

6. **Migration from Legacy Date**
   - `Date.toInstant()`, `Instant.atZone(ZoneId.systemDefault()).toLocalDate()`
   - `Date.from(instant)` going back

**Code Snippets Required:**
```java
// LocalDate
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1995, Month.JUNE, 15);
LocalDate nextWeek = today.plusWeeks(1);
boolean isLeap = today.isLeapYear();

// LocalDateTime
LocalDateTime now = LocalDateTime.now();
LocalDateTime meeting = LocalDateTime.of(2025, 6, 15, 14, 30);

// ZonedDateTime
ZonedDateTime londonNow = ZonedDateTime.now(ZoneId.of("Europe/London"));
ZonedDateTime tokyoNow  = londonNow.withZoneSameInstant(ZoneId.of("Asia/Tokyo"));

// Instant
Instant start = Instant.now();
// ... do work ...
Instant end = Instant.now();
Duration elapsed = Duration.between(start, end);
System.out.println("Elapsed: " + elapsed.toMillis() + "ms");

// Period (date-based)
Period age = Period.between(birthday, today);
System.out.println("Age: " + age.getYears() + " years");

// Formatting
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd MMM yyyy");
String formatted = today.format(fmt);     // "15 Mar 2025"
LocalDate parsed = LocalDate.parse("15 Mar 2025", fmt);
```

---

### Chapter 21 — Annotations

| Field | Value |
|---|---|
| **File** | `annotations.component.ts` |
| **Component** | `AnnotationsComponent` |
| **Selector** | `app-topic-annotations` |
| **Gradient** | `linear-gradient(135deg, #3f3f46, #a1a1aa)` |
| **Duration** | 30 min |
| **Description** | Built-in annotations, meta-annotations, custom annotations, retention, target, reflection |

**Content Sections:**

1. **What Are Annotations?**
   - Metadata attached to code elements
   - Do nothing by themselves — read by compiler, tools, or at runtime via reflection
   - Syntax: `@AnnotationName` or `@AnnotationName(key = value)`

2. **Built-in Annotations**
   - `@Override` — compiler checks you actually override
   - `@Deprecated` — marks for removal, produces compiler warning at use sites
   - `@SuppressWarnings("unchecked")` — suppresses specific warnings
   - `@FunctionalInterface` — ensures exactly one abstract method
   - `@SafeVarargs` — suppresses heap pollution warning

3. **Meta-Annotations**
   - `@Retention(RetentionPolicy.RUNTIME/CLASS/SOURCE)`
   - `@Target(ElementType.METHOD/FIELD/TYPE/PARAMETER/...)`
   - `@Documented` — include in Javadoc
   - `@Inherited` — subclasses inherit the annotation
   - `@Repeatable` — allow multiple same annotation

4. **Interactive Widget — Annotation Processor Demo**
   - Show a class with custom `@Validate` annotation on fields
   - "Run Validator" button reads annotations via reflection and validates
   - Highlight which fields pass/fail their constraints
   - Shows how Spring/Hibernate use annotations internally

5. **Creating Custom Annotations**
   - `@interface` keyword
   - Annotation elements (methods that return values)
   - Default values
   - Single-element annotation (`value()` shortcut)

6. **Framework Annotations Context**
   - Brief mention of Spring (`@Component`, `@Autowired`), JPA (`@Entity`, `@Column`), JUnit (`@Test`)
   - How frameworks use reflection to read annotations at runtime

**Code Snippets Required:**
```java
// Custom annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface NotBlank {
    String message() default "Field must not be blank";
}

// Usage
public class User {
    @NotBlank
    private String name;

    @NotBlank(message = "Email is required")
    private String email;
}

// Reading via reflection
for (Field field : User.class.getDeclaredFields()) {
    if (field.isAnnotationPresent(NotBlank.class)) {
        NotBlank ann = field.getAnnotation(NotBlank.class);
        field.setAccessible(true);
        Object value = field.get(userInstance);
        if (value == null || value.toString().isBlank()) {
            System.out.println(field.getName() + ": " + ann.message());
        }
    }
}

// Repeatable annotation
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Repeatable(Roles.class)
public @interface Role { String value(); }

@Role("ADMIN")
@Role("USER")
public void sensitiveMethod() {}
```

---

### Chapter 22 — Memory Model & Garbage Collection

| Field | Value |
|---|---|
| **File** | `memory-model.component.ts` |
| **Component** | `MemoryModelComponent` |
| **Selector** | `app-topic-memory-model` |
| **Gradient** | `linear-gradient(135deg, #0c0c0c, #374151)` |
| **Duration** | 35 min |
| **Description** | JVM memory areas, stack vs heap, GC roots, GC algorithms, tuning flags |

**Content Sections:**

1. **JVM Memory Areas**
   - **Heap**: all object instances, GC-managed, shared across threads
   - **Stack**: per-thread, method call frames, local variables, references
   - **Metaspace** (Java 8+): class metadata (replaced PermGen)
   - **Program Counter Register**, **Native Method Stack**

2. **Stack vs Heap — What Goes Where**
   - Primitives in local variables → stack
   - Object instances → heap
   - References (pointers to objects) → stack
   - String literals → String Pool (inside heap)

3. **Interactive Widget — Stack & Heap Visualizer**
   - Step through a simple method call that creates objects
   - Show stack frames pushing/popping on the left
   - Show heap objects appearing on the right with reference arrows
   - Show object becoming unreachable after method returns

4. **Garbage Collection Basics**
   - GC roots: local variables, static fields, active thread stacks
   - Mark-and-sweep, generational GC concept
   - Young generation (Eden + Survivors) → Old generation
   - Minor GC vs Major GC vs Full GC

5. **Modern GC Algorithms**
   - G1 (default since Java 9) — balanced pause/throughput
   - ZGC (Java 15+) — ultra-low pause (<10ms), handles huge heaps
   - Shenandoah — low-pause, concurrent
   - Serial GC — single-threaded, for small apps

6. **Common Memory Issues & Flags**
   - `OutOfMemoryError: Java heap space`
   - Memory leaks: unclosed resources, static collections growing
   - `-Xms256m -Xmx1g` — initial/max heap size
   - `-XX:+UseG1GC`, `-XX:+UseZGC`

**Code Snippets Required:**
```java
// Memory layout illustration
void method() {
    int x = 42;              // x on stack (primitive)
    String s = "hello";      // reference 's' on stack → object on heap
    Object obj = new Object(); // reference 'obj' on stack → new object on heap
}
// After method returns: stack frame popped, heap objects eligible for GC

// Memory leak example (static collection)
public class LeakyCache {
    private static final Map<String, byte[]> cache = new HashMap<>();

    public static void add(String key) {
        cache.put(key, new byte[1024 * 1024]); // 1MB per entry, never removed!
    }
}

// Proper resource management (no memory leak)
try (InputStream is = new FileInputStream("file.txt")) {
    // stream auto-closed on exit
}

// Requesting GC (hint only — not guaranteed)
System.gc(); // discouraged in production
```

---

### Chapter 23 — Reflection API

| Field | Value |
|---|---|
| **File** | `reflection.component.ts` |
| **Component** | `ReflectionComponent` |
| **Selector** | `app-topic-reflection` |
| **Gradient** | `linear-gradient(135deg, #1e1b4b, #4f46e5)` |
| **Duration** | 30 min |
| **Description** | `Class<?>`, inspect fields/methods, invoke at runtime, use cases, caveats |

**Content Sections:**

1. **What Is Reflection?**
   - Inspect and manipulate class metadata at runtime
   - Used by Spring, Hibernate, JUnit, serialization libraries
   - `java.lang.reflect` package

2. **Getting `Class<?>` Object**
   - `obj.getClass()`
   - `String.class`
   - `Class.forName("com.example.MyClass")`

3. **Inspecting Members**
   - `getDeclaredFields()` / `getFields()` (public only)
   - `getDeclaredMethods()` / `getMethods()`
   - `getDeclaredConstructors()`
   - `getModifiers()` — check if `private`, `static`, etc.

4. **Interactive Widget — Class Inspector**
   - Dropdown with 3 built-in classes: `String`, `ArrayList`, `LocalDate`
   - Show discovered fields (name, type, modifiers) in a table
   - Show declared methods with return type and parameters

5. **Invoking Methods & Setting Fields**
   - `method.invoke(instance, args...)` — call private method
   - `field.setAccessible(true)` — bypass access control
   - Use case: testing private methods, dependency injection

6. **Performance & Security Caveats**
   - Reflection is 10–100x slower than direct calls
   - `setAccessible(true)` bypasses encapsulation — use sparingly
   - Java Module System (`module-info.java`) restricts reflection by default
   - Alternatives: use interfaces, design for testability

**Code Snippets Required:**
```java
// Get class info
Class<?> clazz = String.class;
System.out.println(clazz.getName());           // java.lang.String
System.out.println(clazz.getSuperclass());     // java.lang.Object

// List fields
for (Field f : clazz.getDeclaredFields()) {
    System.out.println(Modifier.toString(f.getModifiers()) + " " + f.getType().getSimpleName() + " " + f.getName());
}

// Instantiate and invoke
Class<?> personClass = Class.forName("com.example.Person");
Constructor<?> ctor = personClass.getDeclaredConstructor(String.class, int.class);
Object person = ctor.newInstance("Alice", 30);

Method greet = personClass.getMethod("greet");
greet.invoke(person);

// Access private field
Field nameField = personClass.getDeclaredField("name");
nameField.setAccessible(true);
String name = (String) nameField.get(person);
System.out.println("Name: " + name);
```

---

### Chapter 24 — Regular Expressions

| Field | Value |
|---|---|
| **File** | `regex.component.ts` |
| **Component** | `RegexComponent` |
| **Selector** | `app-topic-regex` |
| **Gradient** | `linear-gradient(135deg, #14532d, #16a34a)` |
| **Duration** | 30 min |
| **Description** | `Pattern`, `Matcher`, character classes, groups, common patterns, `String` integration |

**Content Sections:**

1. **Regex Basics**
   - Literals, `.` (any char), `^` / `$` (anchors)
   - Character classes: `[abc]`, `[a-z]`, `[^abc]`
   - Shorthand: `\d` (digit), `\w` (word char), `\s` (whitespace)
   - Quantifiers: `*`, `+`, `?`, `{n}`, `{n,m}`

2. **`Pattern` and `Matcher`**
   - `Pattern.compile(regex)` — compile once, reuse (efficient)
   - `matcher.matches()` — entire string matches
   - `matcher.find()` — find anywhere in string
   - `matcher.group()` — full match; `matcher.group(n)` — capturing group

3. **Interactive Widget — Live Regex Tester**
   - Text input for regex pattern
   - Text area for test input
   - Show all matches highlighted in real time (debounced)
   - Toggle: `matches()` vs `find()` mode
   - Show group captures in a table

4. **Capturing Groups**
   - `(pattern)` — numbered group
   - `(?<name>pattern)` — named group
   - `matcher.group("name")` for named access
   - Non-capturing: `(?:pattern)`

5. **`String` Integration**
   - `str.matches(regex)` — `^...$` implicit anchors
   - `str.replaceAll(regex, replacement)` — with backreferences `$1`
   - `str.split(regex)` — split on pattern
   - `str.replaceFirst(regex, replacement)`

6. **Common Patterns**
   - Email: `^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$`
   - Phone: `^\\+?[0-9]{10,15}$`
   - IPv4: `^(\\d{1,3}\\.){3}\\d{1,3}$`
   - URL slug: `^[a-z0-9]+(?:-[a-z0-9]+)*$`

**Code Snippets Required:**
```java
// Pattern + Matcher
Pattern pattern = Pattern.compile("\\d{4}-\\d{2}-\\d{2}");
Matcher matcher = pattern.matcher("Today is 2025-03-15 and tomorrow is 2025-03-16");
while (matcher.find()) {
    System.out.println("Found date: " + matcher.group());
}

// Named capturing groups
Pattern phonePattern = Pattern.compile("(?<area>\\d{3})-(?<exchange>\\d{3})-(?<number>\\d{4})");
Matcher m = phonePattern.matcher("Call 415-555-1234 today");
if (m.find()) {
    System.out.println("Area: " + m.group("area"));     // 415
    System.out.println("Exchange: " + m.group("exchange")); // 555
}

// String integration
String email = "user@example.com";
boolean valid = email.matches("^[\\w.+-]+@[\\w-]+\\.[\\w.]+$");

String csv = "Alice, 30, Engineer";
String[] parts = csv.split(",\\s*"); // ["Alice", "30", "Engineer"]

String redacted = "SSN: 123-45-6789".replaceAll("\\d{3}-\\d{2}-\\d{4}", "XXX-XX-XXXX");
```

---

## Wiring Instructions

### `topic-router.component.ts`

Add the following entries to the `'core-java'` section of `TOPIC_MAP`:

```typescript
'core-java': {
  // --- Phase 1: Foundations ---
  'data-types':       () => import('./topics/data-types.component').then(m => m.DataTypesComponent),
  'variables-casting':() => import('./topics/variables-casting.component').then(m => m.VariablesCastingComponent),
  'operators':        () => import('./topics/operators.component').then(m => m.OperatorsComponent),
  'control-flow':     () => import('./topics/control-flow.component').then(m => m.ControlFlowComponent),
  'loops':            () => import('./topics/loops.component').then(m => m.LoopsComponent),
  'methods':          () => import('./topics/methods.component').then(m => m.MethodsComponent),

  // --- existing chapters (keep in order) ---
  'arrays':           ...,
  'strings':          ...,

  // --- Phase 5: text-blocks goes after strings ---
  'text-blocks':      () => import('./topics/text-blocks.component').then(m => m.TextBlocksComponent),

  'oop-classes':      ...,
  'inheritance':      ...,
  'polymorphism':     ...,
  'abstraction':      ...,
  'encapsulation':    ...,

  // --- Phase 2: OOP Depth ---
  'final-static':     () => import('./topics/final-static.component').then(m => m.FinalStaticComponent),
  'enums':            () => import('./topics/enums.component').then(m => m.EnumsComponent),
  'nested-classes':   () => import('./topics/nested-classes.component').then(m => m.NestedClassesComponent),
  'object-class':     () => import('./topics/object-class.component').then(m => m.ObjectClassComponent),

  'exceptions':       ...,

  // --- Phase 6: Annotations after exceptions ---
  'annotations':      () => import('./topics/annotations.component').then(m => m.AnnotationsComponent),

  'generics':         ...,
  'collections-list': ...,
  'collections-map':  ...,

  // --- Phase 4: Collections Gaps ---
  'collections-queue':() => import('./topics/collections-queue.component').then(m => m.CollectionsQueueComponent),
  'collections-utils':() => import('./topics/collections-utils.component').then(m => m.CollectionsUtilsComponent),
  'iterators':        () => import('./topics/iterators.component').then(m => m.IteratorsComponent),

  // --- Phase 3: Functional Java ---
  'lambdas':          ...,
  'functional-interfaces':() => import('./topics/functional-interfaces.component').then(m => m.FunctionalInterfacesComponent),
  'method-references':() => import('./topics/method-references.component').then(m => m.MethodReferencesComponent),
  'optional':         () => import('./topics/optional.component').then(m => m.OptionalComponent),
  'streams':          ...,

  // --- Phase 5: Modern Java ---
  'switch-expressions':() => import('./topics/switch-expressions.component').then(m => m.SwitchExpressionsComponent),
  'pattern-matching': () => import('./topics/pattern-matching.component').then(m => m.PatternMatchingComponent),
  'records-sealed':   ...,

  // --- Phase 6: Date & Platform ---
  'datetime-api':     () => import('./topics/datetime-api.component').then(m => m.DatetimeApiComponent),
  'io-files':         ...,
  'memory-model':     () => import('./topics/memory-model.component').then(m => m.MemoryModelComponent),
  'reflection':       () => import('./topics/reflection.component').then(m => m.ReflectionComponent),
  'regex':            () => import('./topics/regex.component').then(m => m.RegexComponent),
}
```

### `tutorial-detail.component.ts`

Update the `core-java` `topics` array to include all new entries with `slug`, `title`, `description`, `iconName`, and `duration` matching the chapter specs above. Also update:
- `chapterCount: 39` (in `tutorial-list.component.ts`)
- `estimatedTime: '28 hours'`

---

## Summary Table

| Phase | Chapters | Files to Create | Est. Content Time |
|---|---|---|---|
| 1 — Foundations | 6 | `data-types`, `variables-casting`, `operators`, `control-flow`, `loops`, `methods` | +3.5h |
| 2 — OOP Depth | 4 | `enums`, `nested-classes`, `final-static`, `object-class` | +2h |
| 3 — Functional Java | 3 | `functional-interfaces`, `method-references`, `optional` | +1.5h |
| 4 — Collections | 3 | `collections-queue`, `collections-utils`, `iterators` | +1.5h |
| 5 — Modern Java | 3 | `switch-expressions`, `pattern-matching`, `text-blocks` | +1.5h |
| 6 — Platform | 5 | `datetime-api`, `annotations`, `memory-model`, `reflection`, `regex` | +2.5h |
| **Total** | **24 new** | **24 files** | **+12.5h** |
