import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/oop-classes.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.address;
function OopClassesComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ref_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ref_r1.name === ctx_r1.activeRef());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ref_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ref_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ref_r1.address);
  }
}
function OopClassesComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No references yet");
    \u0275\u0275elementEnd();
  }
}
function OopClassesComponent_For_64_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", f_r3.name, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.value);
  }
}
function OopClassesComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 50);
    \u0275\u0275repeaterCreate(7, OopClassesComponent_For_64_For_8_Template, 5, 2, "div", 51, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", obj_r4.address === ctx_r1.activeAddr());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(obj_r4.className);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(obj_r4.address);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(obj_r4.fields);
  }
}
function OopClassesComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "No objects created");
    \u0275\u0275elementEnd();
  }
}
var OopClassesComponent = class _OopClassesComponent {
  stackRefs = signal([], ...ngDevMode ? [{ debugName: "stackRefs" }] : []);
  heapObjects = signal([], ...ngDevMode ? [{ debugName: "heapObjects" }] : []);
  activeRef = signal("", ...ngDevMode ? [{ debugName: "activeRef" }] : []);
  activeAddr = signal("", ...ngDevMode ? [{ debugName: "activeAddr" }] : []);
  status = signal("Ready. Click a button to create an object and watch memory allocation.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeClass = `public class Person {
    // Fields (state)
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method (behavior)
    public String greet() {
        return "Hi, I'm " + name;
    }
}`;
  codeConstructor = `// Default constructor
public Person() {
    this.name = "Unknown";
    this.age = 0;
}

// Parameterized constructor
public Person(String name, int age) {
    this.name = name;
    this.age = age;
}`;
  codeMethods = `Person p = new Person("Alice", 28);

// Instance method
p.greet(); // "Hi, I'm Alice"
p.getAge(); // 28

// Modifying state
p.setName("Alicia");`;
  codeStatic = `public class MathUtils {
    // Static field
    public static final double PI = 3.14;

    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
}
// Call without an instance
MathUtils.add(5, 3); // 8`;
  codeToString = `@Override
public String toString() {
    return "Person{name='" + name +
           "', age=" + age + "}";
}

@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Person p)) return false;
    return age == p.age &&
           name.equals(p.name);
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async createObject() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set('Step 1: Person alice = new Person("Alice", 28);');
    await this.sleep(800);
    this.status.set("Allocating memory on the heap...");
    this.heapObjects.set([{
      address: "0x4A0",
      className: "Person",
      fields: [{ name: "name", value: '"Alice"' }, { name: "age", value: "28" }]
    }]);
    this.activeAddr.set("0x4A0");
    await this.sleep(1e3);
    this.status.set('Storing reference "alice" on the stack \u2192 0x4A0');
    this.stackRefs.set([{ name: "alice", type: "Person", address: "0x4A0" }]);
    this.activeRef.set("alice");
    await this.sleep(1e3);
    this.status.set('Object created! "alice" variable \u2192 Person object at 0x4A0 \u2705');
    this.isAnimating.set(false);
  }
  async createSecond() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.status.set('Person bob = new Person("Bob", 32);');
    await this.sleep(800);
    this.status.set("Allocating a NEW object on the heap (separate memory)...");
    this.heapObjects.update((h) => [...h, {
      address: "0x4B8",
      className: "Person",
      fields: [{ name: "name", value: '"Bob"' }, { name: "age", value: "32" }]
    }]);
    this.activeAddr.set("0x4B8");
    await this.sleep(1e3);
    this.stackRefs.update((s) => [...s, { name: "bob", type: "Person", address: "0x4B8" }]);
    this.activeRef.set("bob");
    await this.sleep(800);
    this.status.set("Two separate objects on heap. Each variable holds its own reference! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.stackRefs.set([]);
    this.heapObjects.set([]);
    this.activeRef.set("");
    this.activeAddr.set("");
    this.status.set("Ready. Click a button to create an object and watch memory allocation.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function OopClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OopClassesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OopClassesComponent, selectors: [["app-topic-oop-classes"]], decls: 155, vars: 22, consts: [["title", "Classes & Objects", "subtitle", "Understand the building blocks of Object-Oriented Programming \u2014 blueprints, constructors, methods, and how objects live in memory.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #7c3aed, #a855f7)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-purple", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-purple", 3, "size"], [1, "memory-container"], [1, "mem-section"], [1, "mem-label"], [1, "stack-items"], [1, "stack-item", 3, "active"], [1, "empty-state"], [1, "heap-items"], [1, "heap-item", 3, "active"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-purple", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-blue", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-purple", 3, "size"], [1, "use-cases"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "teal"], [1, "use-num", "teal-bg"], [1, "stack-item"], [1, "ref-type"], [1, "ref-name"], [1, "ref-arrow"], [1, "ref-addr"], [1, "heap-item"], [1, "obj-header"], [1, "obj-class"], [1, "obj-addr"], [1, "obj-fields"], [1, "field-row"], [1, "field-name"], [1, "field-val"]], template: function OopClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Classes & Objects? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, " A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is a blueprint or template that defines the structure and behavior of objects. An ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "Object");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " is a concrete instance of a class \u2014 it lives in heap memory and has its own copy of instance variables. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "Fields:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Variables that hold the object's state (e.g., ");
      \u0275\u0275elementStart(19, "code");
      \u0275\u0275text(20, "name");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, ", ");
      \u0275\u0275elementStart(22, "code");
      \u0275\u0275text(23, "age");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li")(26, "strong");
      \u0275\u0275text(27, "Methods:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Functions that define the object's behavior (e.g., ");
      \u0275\u0275elementStart(29, "code");
      \u0275\u0275text(30, "greet()");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li")(33, "strong");
      \u0275\u0275text(34, "Constructors:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Special methods called when creating a new object with ");
      \u0275\u0275elementStart(36, "code");
      \u0275\u0275text(37, "new");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "li")(40, "strong");
      \u0275\u0275text(41, "this keyword:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Refers to the current instance inside a method or constructor.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "h4", 5);
      \u0275\u0275text(44, "Defining a Class");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "section", 1)(47, "div", 7)(48, "h3", 8);
      \u0275\u0275element(49, "app-icon", 9);
      \u0275\u0275text(50, " Object Instantiation Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 10)(52, "div", 11)(53, "span", 12);
      \u0275\u0275text(54, "STACK (References)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 13);
      \u0275\u0275repeaterCreate(56, OopClassesComponent_For_57_Template, 9, 5, "div", 14, _forTrack0);
      \u0275\u0275conditionalCreate(58, OopClassesComponent_Conditional_58_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 11)(60, "span", 12);
      \u0275\u0275text(61, "HEAP (Objects)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 16);
      \u0275\u0275repeaterCreate(63, OopClassesComponent_For_64_Template, 9, 4, "div", 17, _forTrack1);
      \u0275\u0275conditionalCreate(65, OopClassesComponent_Conditional_65_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 18);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 19)(69, "button", 20);
      \u0275\u0275listener("click", function OopClassesComponent_Template_button_click_69_listener() {
        return ctx.createObject();
      });
      \u0275\u0275element(70, "app-icon", 21);
      \u0275\u0275text(71, ' new Person("Alice", 28) ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 22);
      \u0275\u0275listener("click", function OopClassesComponent_Template_button_click_72_listener() {
        return ctx.createSecond();
      });
      \u0275\u0275element(73, "app-icon", 21);
      \u0275\u0275text(74, ' new Person("Bob", 32) ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 23);
      \u0275\u0275listener("click", function OopClassesComponent_Template_button_click_75_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(76, "app-icon", 24);
      \u0275\u0275text(77, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "section", 1)(79, "h2", 2);
      \u0275\u0275element(80, "app-icon", 25);
      \u0275\u0275text(81, " Key Concepts ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 26)(83, "div", 27)(84, "h3", 28);
      \u0275\u0275element(85, "app-icon", 29);
      \u0275\u0275text(86, " Constructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 30);
      \u0275\u0275text(88, "Initialize object state when created. Overloaded constructors provide flexible creation patterns.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 27)(91, "h3", 28);
      \u0275\u0275element(92, "app-icon", 29);
      \u0275\u0275text(93, " Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 30);
      \u0275\u0275text(95, "Define behavior. Instance methods operate on the object's state.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(96, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 27)(98, "h3", 28);
      \u0275\u0275element(99, "app-icon", 29);
      \u0275\u0275text(100, " Static Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p", 30);
      \u0275\u0275text(102, "Belong to the class, not instances. Shared across all objects.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(103, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 27)(105, "h3", 28);
      \u0275\u0275element(106, "app-icon", 29);
      \u0275\u0275text(107, " toString & equals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 30);
      \u0275\u0275text(109, "Override these Object methods for meaningful output and comparison.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(110, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "section", 1)(112, "h2", 2);
      \u0275\u0275element(113, "app-icon", 31);
      \u0275\u0275text(114, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 32)(116, "div", 33)(117, "div", 34);
      \u0275\u0275text(118, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div")(120, "h4", 35);
      \u0275\u0275text(121, "Domain Models in Enterprise Apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 36);
      \u0275\u0275text(123, "Every Spring Boot entity \u2014 ");
      \u0275\u0275elementStart(124, "code");
      \u0275\u0275text(125, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275text(126, ", ");
      \u0275\u0275elementStart(127, "code");
      \u0275\u0275text(128, "Order");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, ", ");
      \u0275\u0275elementStart(130, "code");
      \u0275\u0275text(131, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, " \u2014 is a class. Objects are persisted to databases via JPA/Hibernate.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "div", 37)(134, "div", 38);
      \u0275\u0275text(135, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div")(137, "h4", 35);
      \u0275\u0275text(138, "DTOs for API Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p", 36);
      \u0275\u0275text(140, "Data Transfer Objects carry data between layers. A ");
      \u0275\u0275elementStart(141, "code");
      \u0275\u0275text(142, "UserDTO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, " class defines exactly what fields the API exposes vs what the database stores.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 39)(145, "div", 40);
      \u0275\u0275text(146, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div")(148, "h4", 35);
      \u0275\u0275text(149, "Builder Pattern for Complex Objects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 36);
      \u0275\u0275text(151, "When a class has many fields, the Builder pattern provides a fluent API: ");
      \u0275\u0275elementStart(152, "code");
      \u0275\u0275text(153, 'new User.Builder().name("Alice").age(28).build()');
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, ".");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(42);
      \u0275\u0275property("code", ctx.codeClass);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.stackRefs());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.stackRefs().length === 0 ? 58 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.heapObjects());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.heapObjects().length === 0 ? 65 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConstructor);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMethods);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStatic);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeToString);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.memory-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.mem-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.mem-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.stack-items[_ngcontent-%COMP%], \n.heap-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.stack-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.72rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.stack-item.active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.ref-type[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #94a3b8;\n}\n.ref-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.ref-arrow[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.ref-addr[_ngcontent-%COMP%] {\n  color: #7c3aed;\n  font-size: 0.65rem;\n}\n.heap-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #fff;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.heap-item.active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.obj-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.obj-class[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #7c3aed;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-addr[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n}\n.field-name[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.field-val[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal[_ngcontent-%COMP%] {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg[_ngcontent-%COMP%] {\n  background: #14b8a6;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=oop-classes.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OopClassesComponent, [{
    type: Component,
    args: [{ selector: "app-topic-oop-classes", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Classes & Objects"
      subtitle="Understand the building blocks of Object-Oriented Programming \u2014 blueprints, constructors, methods, and how objects live in memory."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #7c3aed, #a855f7)">

      <!-- Section 1: Concept -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-purple" /> What are Classes & Objects?
        </h2>
        <div class="prose">
          <p>
            A <strong>Class</strong> is a blueprint or template that defines the structure and behavior of objects. An <strong>Object</strong> is a concrete instance of a class \u2014 it lives in heap memory and has its own copy of instance variables.
          </p>
          <ul>
            <li><strong>Fields:</strong> Variables that hold the object's state (e.g., <code>name</code>, <code>age</code>).</li>
            <li><strong>Methods:</strong> Functions that define the object's behavior (e.g., <code>greet()</code>).</li>
            <li><strong>Constructors:</strong> Special methods called when creating a new object with <code>new</code>.</li>
            <li><strong>this keyword:</strong> Refers to the current instance inside a method or constructor.</li>
          </ul>
          <h4 class="sub-heading">Defining a Class</h4>
          <app-code-block [code]="codeClass" />
        </div>
      </section>

      <!-- Section 2: Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-purple" /> Object Instantiation Visualizer
          </h3>

          <div class="memory-container">
            <div class="mem-section">
              <span class="mem-label">STACK (References)</span>
              <div class="stack-items">
                @for (ref of stackRefs(); track ref.name) {
                  <div class="stack-item" [class.active]="ref.name === activeRef()">
                    <span class="ref-type">{{ ref.type }}</span>
                    <span class="ref-name">{{ ref.name }}</span>
                    <span class="ref-arrow">\u2192</span>
                    <span class="ref-addr">{{ ref.address }}</span>
                  </div>
                }
                @if (stackRefs().length === 0) {
                  <div class="empty-state">No references yet</div>
                }
              </div>
            </div>
            <div class="mem-section">
              <span class="mem-label">HEAP (Objects)</span>
              <div class="heap-items">
                @for (obj of heapObjects(); track obj.address) {
                  <div class="heap-item" [class.active]="obj.address === activeAddr()">
                    <div class="obj-header">
                      <span class="obj-class">{{ obj.className }}</span>
                      <span class="obj-addr">{{ obj.address }}</span>
                    </div>
                    <div class="obj-fields">
                      @for (f of obj.fields; track f.name) {
                        <div class="field-row">
                          <span class="field-name">{{ f.name }}:</span>
                          <span class="field-val">{{ f.value }}</span>
                        </div>
                      }
                    </div>
                  </div>
                }
                @if (heapObjects().length === 0) {
                  <div class="empty-state">No objects created</div>
                }
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="createObject()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="play" [size]="16" /> new Person("Alice", 28)
            </button>
            <button (click)="createSecond()" [disabled]="isAnimating()" class="btn btn-blue">
              <app-icon name="play" [size]="16" /> new Person("Bob", 32)
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Section 3: Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Key Concepts
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructors</h3>
            <p class="op-desc">Initialize object state when created. Overloaded constructors provide flexible creation patterns.</p>
            <app-code-block [code]="codeConstructor" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Methods</h3>
            <p class="op-desc">Define behavior. Instance methods operate on the object's state.</p>
            <app-code-block [code]="codeMethods" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Static Members</h3>
            <p class="op-desc">Belong to the class, not instances. Shared across all objects.</p>
            <app-code-block [code]="codeStatic" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> toString & equals</h3>
            <p class="op-desc">Override these Object methods for meaningful output and comparison.</p>
            <app-code-block [code]="codeToString" />
          </div>
        </div>
      </section>

      <!-- Section 4: Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-purple" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case purple">
            <div class="use-num purple-bg">1</div>
            <div>
              <h4 class="use-title">Domain Models in Enterprise Apps</h4>
              <p class="use-desc">Every Spring Boot entity \u2014 <code>User</code>, <code>Order</code>, <code>Product</code> \u2014 is a class. Objects are persisted to databases via JPA/Hibernate.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">DTOs for API Communication</h4>
              <p class="use-desc">Data Transfer Objects carry data between layers. A <code>UserDTO</code> class defines exactly what fields the API exposes vs what the database stores.</p>
            </div>
          </div>
          <div class="use-case teal">
            <div class="use-num teal-bg">3</div>
            <div>
              <h4 class="use-title">Builder Pattern for Complex Objects</h4>
              <p class="use-desc">When a class has many fields, the Builder pattern provides a fluent API: <code>new User.Builder().name("Alice").age(28).build()</code>.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;aeb2ad8f91c791715fe9ca6cb8988bd2bc1746e7b0ff43fc879b8d590fa0334f;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/oop-classes.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-purple {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.memory-container {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.mem-section {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n}\n.mem-label {\n  display: block;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.stack-items,\n.heap-items {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.stack-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.72rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.stack-item.active {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.ref-type {\n  font-size: 0.58rem;\n  color: #94a3b8;\n}\n.ref-name {\n  font-weight: 700;\n  color: #0f172a;\n}\n.ref-arrow {\n  color: #94a3b8;\n}\n.ref-addr {\n  color: #7c3aed;\n  font-size: 0.65rem;\n}\n.heap-item {\n  padding: 12px;\n  background: #fff;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.heap-item.active {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.obj-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.obj-class {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #7c3aed;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-addr {\n  font-size: 0.6rem;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.obj-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row {\n  display: flex;\n  gap: 8px;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n}\n.field-name {\n  color: #64748b;\n}\n.field-val {\n  color: #0f172a;\n  font-weight: 600;\n}\n.empty-state {\n  text-align: center;\n  padding: 20px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.teal {\n  background: #f0fdfa;\n  border-color: #99f6e4;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.teal-bg {\n  background: #14b8a6;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=oop-classes.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OopClassesComponent, { className: "OopClassesComponent", filePath: "src/app/features/tutorials/topics/oop-classes.component.ts", lineNumber: 232 });
})();
export {
  OopClassesComponent
};
//# sourceMappingURL=chunk-BCZ7CT6R.js.map
