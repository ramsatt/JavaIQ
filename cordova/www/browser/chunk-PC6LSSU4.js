import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/abstraction.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function AbstractionComponent_For_70_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1);
  }
}
function AbstractionComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "CLASS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45);
    \u0275\u0275repeaterCreate(6, AbstractionComponent_For_70_For_7_Template, 2, 1, "span", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const impl_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeImpl() === impl_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(impl_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(impl_r2.methods);
  }
}
var AbstractionComponent = class _AbstractionComponent {
  activePhase = signal("", ...ngDevMode ? [{ debugName: "activePhase" }] : []);
  activeImpl = signal("", ...ngDevMode ? [{ debugName: "activeImpl" }] : []);
  arrowText = signal("\u2193 implements", ...ngDevMode ? [{ debugName: "arrowText" }] : []);
  status = signal("The Drawable interface defines a contract. Classes must fulfill it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  implementations = signal([
    { name: "Circle", methods: ["draw() { ... circle ... }", 'getColor() { return "red"; }'] },
    { name: "Rectangle", methods: ["draw() { ... rect ... }", 'getColor() { return "blue"; }'] }
  ], ...ngDevMode ? [{ debugName: "implementations" }] : []);
  codeComparison = `// Abstract class \u2014 partial implementation
abstract class Shape {
    String color;                // can have fields
    abstract double area();      // must override
    void display() { ... }       // concrete method
}

// Interface \u2014 pure contract
interface Drawable {
    void draw();                 // abstract (implicit)
    default void resize(int s) { // concrete (Java 8+)
        System.out.println("Resizing by " + s);
    }
}`;
  codeAbstract = `abstract class Vehicle {
    protected int speed;

    abstract void start(); // no body
    abstract void stop();

    void accelerate(int delta) { // concrete
        this.speed += delta;
    }
}

class Car extends Vehicle {
    void start() { System.out.println("Key turn"); }
    void stop()  { System.out.println("Brake"); }
}`;
  codeInterface = `interface Flyable {
    void fly();
    double getAltitude();
}

interface Swimmable {
    void swim();
}

// Multiple interfaces!
class Duck implements Flyable, Swimmable {
    public void fly() { ... }
    public double getAltitude() { return 100; }
    public void swim() { ... }
}`;
  codeDefault = `interface Logger {
    void log(String msg);

    // Default method \u2014 concrete in interface
    default void warn(String msg) {
        log("WARN: " + msg);
    }

    // Static utility
    static Logger create() {
        return msg -> System.out.println(msg);
    }
}`;
  codeFunctional = `@FunctionalInterface
interface Transformer<T> {
    T transform(T input);
    // Only ONE abstract method allowed
}

// Use with lambda
Transformer<String> upper = s -> s.toUpperCase();
upper.transform("hello"); // "HELLO"`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async showContract() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activePhase.set("interface");
    this.activeImpl.set("");
    this.status.set("Drawable defines: draw(), getColor() \u2014 these MUST be implemented.");
    await this.sleep(1500);
    this.arrowText.set("\u2193 Circle implements Drawable");
    this.activeImpl.set("Circle");
    this.status.set("Circle provides concrete implementations of draw() and getColor().");
    await this.sleep(1500);
    this.arrowText.set("\u2193 Rectangle implements Drawable");
    this.activeImpl.set("Rectangle");
    this.status.set("Rectangle provides its OWN implementations \u2014 same contract, different behavior.");
    await this.sleep(1500);
    this.status.set("Both classes fulfill the Drawable contract \u2014 they can be used interchangeably! \u2705");
    this.activePhase.set("");
    this.activeImpl.set("");
    this.arrowText.set("\u2193 implements");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.activePhase.set("");
    this.activeImpl.set("");
    this.arrowText.set("\u2193 implements");
    this.status.set("The Drawable interface defines a contract. Classes must fulfill it.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function AbstractionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbstractionComponent, selectors: [["app-topic-abstraction"]], decls: 173, vars: 21, consts: [["title", "Abstraction & Interfaces", "subtitle", "Hide complexity, expose simplicity. Learn how abstract classes and interfaces define contracts while leaving implementation to subclasses.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #4338ca, #818cf8)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-indigo", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-indigo", 3, "size"], [1, "contract-demo"], [1, "interface-box"], [1, "iface-label"], [1, "iface-name"], [1, "iface-methods"], [1, "method", "abstract"], [1, "method", "default"], [1, "impl-arrow"], [1, "impl-row"], [1, "impl-box", 3, "active"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-indigo", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-violet", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-violet", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-indigo", 3, "size"], [1, "use-cases"], [1, "use-case", "indigo"], [1, "use-num", "indigo-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "impl-box"], [1, "impl-label"], [1, "impl-name"], [1, "impl-methods"], [1, "method", "concrete"]], template: function AbstractionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Abstraction? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Abstraction");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is the concept of hiding internal implementation details and showing only the functionality to the user. Java achieves abstraction through ");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "abstract classes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " and ");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14, "interfaces");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul")(17, "li")(18, "strong");
      \u0275\u0275text(19, "Abstract Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Can have both abstract (no body) and concrete methods. Use ");
      \u0275\u0275elementStart(21, "code");
      \u0275\u0275text(22, "abstract");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " keyword. Cannot be instantiated.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Interface:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " A pure contract \u2014 all methods are implicitly ");
      \u0275\u0275elementStart(28, "code");
      \u0275\u0275text(29, "public abstract");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, ". A class can implement multiple interfaces.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "strong");
      \u0275\u0275text(33, "Default Methods (Java 8+):");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Interfaces can have concrete methods using ");
      \u0275\u0275elementStart(35, "code");
      \u0275\u0275text(36, "default");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " keyword.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "li")(39, "strong");
      \u0275\u0275text(40, "Static Methods:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " Interfaces can also have ");
      \u0275\u0275elementStart(42, "code");
      \u0275\u0275text(43, "static");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " utility methods.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "h4", 5);
      \u0275\u0275text(46, "Abstract Class vs Interface");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "section", 1)(49, "div", 7)(50, "h3", 8);
      \u0275\u0275element(51, "app-icon", 9);
      \u0275\u0275text(52, " Contract Fulfillment Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 10)(54, "div", 11)(55, "span", 12);
      \u0275\u0275text(56, "INTERFACE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 13);
      \u0275\u0275text(58, "Drawable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 14)(60, "span", 15);
      \u0275\u0275text(61, "draw(): void");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 15);
      \u0275\u0275text(63, "getColor(): String");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 16);
      \u0275\u0275text(65, "default resize(int s)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 17);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 18);
      \u0275\u0275repeaterCreate(69, AbstractionComponent_For_70_Template, 8, 3, "div", 19, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 20);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 21)(74, "button", 22);
      \u0275\u0275listener("click", function AbstractionComponent_Template_button_click_74_listener() {
        return ctx.showContract();
      });
      \u0275\u0275element(75, "app-icon", 23);
      \u0275\u0275text(76, " Show Contract Flow ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "button", 24);
      \u0275\u0275listener("click", function AbstractionComponent_Template_button_click_77_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(78, "app-icon", 25);
      \u0275\u0275text(79, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "section", 1)(81, "h2", 2);
      \u0275\u0275element(82, "app-icon", 26);
      \u0275\u0275text(83, " Key Concepts ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 27)(85, "div", 28)(86, "h3", 29);
      \u0275\u0275element(87, "app-icon", 30);
      \u0275\u0275text(88, " Abstract Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 31);
      \u0275\u0275text(90, "Partial implementation with abstract methods that subclasses must implement.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 28)(93, "h3", 29);
      \u0275\u0275element(94, "app-icon", 30);
      \u0275\u0275text(95, " Interface");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 31);
      \u0275\u0275text(97, "Pure contract. A class can implement multiple interfaces.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 28)(100, "h3", 29);
      \u0275\u0275element(101, "app-icon", 30);
      \u0275\u0275text(102, " Default & Static Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 31);
      \u0275\u0275text(104, "Java 8+ allows concrete methods in interfaces.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 28)(107, "h3", 29);
      \u0275\u0275element(108, "app-icon", 30);
      \u0275\u0275text(109, " Functional Interfaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 31);
      \u0275\u0275text(111, "Interfaces with exactly one abstract method \u2014 usable with lambdas.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "section", 1)(114, "h2", 2);
      \u0275\u0275element(115, "app-icon", 32);
      \u0275\u0275text(116, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 33)(118, "div", 34)(119, "div", 35);
      \u0275\u0275text(120, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div")(122, "h4", 36);
      \u0275\u0275text(123, "JDBC API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p", 37)(125, "code");
      \u0275\u0275text(126, "Connection");
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, ", ");
      \u0275\u0275elementStart(128, "code");
      \u0275\u0275text(129, "Statement");
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, ", ");
      \u0275\u0275elementStart(131, "code");
      \u0275\u0275text(132, "ResultSet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " are all interfaces. MySQL, PostgreSQL, and Oracle each provide their own implementations \u2014 you code to the interface.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "div", 38)(135, "div", 39);
      \u0275\u0275text(136, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div")(138, "h4", 36);
      \u0275\u0275text(139, "Spring Service Layer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 37);
      \u0275\u0275text(141, "Define ");
      \u0275\u0275elementStart(142, "code");
      \u0275\u0275text(143, "UserService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(144, " interface, implement ");
      \u0275\u0275elementStart(145, "code");
      \u0275\u0275text(146, "UserServiceImpl");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, ". Swap implementations for testing with mock objects \u2014 zero calling-code changes.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 40)(149, "div", 41);
      \u0275\u0275text(150, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div")(152, "h4", 36);
      \u0275\u0275text(153, "Java Collections Framework");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 37)(155, "code");
      \u0275\u0275text(156, "List");
      \u0275\u0275elementEnd();
      \u0275\u0275text(157, ", ");
      \u0275\u0275elementStart(158, "code");
      \u0275\u0275text(159, "Set");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, ", ");
      \u0275\u0275elementStart(161, "code");
      \u0275\u0275text(162, "Map");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, " are interfaces. ");
      \u0275\u0275elementStart(164, "code");
      \u0275\u0275text(165, "ArrayList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, ", ");
      \u0275\u0275elementStart(167, "code");
      \u0275\u0275text(168, "HashSet");
      \u0275\u0275elementEnd();
      \u0275\u0275text(169, ", ");
      \u0275\u0275elementStart(170, "code");
      \u0275\u0275text(171, "HashMap");
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, " are implementations. You choose the right one for your use case.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(44);
      \u0275\u0275property("code", ctx.codeComparison);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activePhase() === "interface");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.arrowText());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.implementations());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
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
      \u0275\u0275property("code", ctx.codeAbstract);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeInterface);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDefault);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4338ca;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4338ca;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.contract-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.interface-box[_ngcontent-%COMP%], \n.impl-box[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  min-width: 180px;\n  text-align: center;\n  transition: all 0.3s;\n}\n.interface-box[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.interface-box.active[_ngcontent-%COMP%] {\n  border-color: #4338ca;\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(67, 56, 202, 0.2);\n}\n.impl-box[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.impl-box.active[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);\n}\n.iface-label[_ngcontent-%COMP%], \n.impl-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n.iface-name[_ngcontent-%COMP%], \n.impl-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 8px;\n}\n.iface-methods[_ngcontent-%COMP%], \n.impl-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.method[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-family: "JetBrains Mono", monospace;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.method.abstract[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.method.default[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.method.concrete[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.impl-arrow[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.impl-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-indigo[_ngcontent-%COMP%] {\n  background: #4338ca;\n  color: #fff;\n}\n.btn-indigo[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #3730a3;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.indigo[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.indigo-bg[_ngcontent-%COMP%] {\n  background: #4338ca;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=abstraction.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractionComponent, [{
    type: Component,
    args: [{ selector: "app-topic-abstraction", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Abstraction & Interfaces"
      subtitle="Hide complexity, expose simplicity. Learn how abstract classes and interfaces define contracts while leaving implementation to subclasses."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #4338ca, #818cf8)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Abstraction?
        </h2>
        <div class="prose">
          <p>
            <strong>Abstraction</strong> is the concept of hiding internal implementation details and showing only the functionality to the user. Java achieves abstraction through <strong>abstract classes</strong> and <strong>interfaces</strong>.
          </p>
          <ul>
            <li><strong>Abstract Class:</strong> Can have both abstract (no body) and concrete methods. Use <code>abstract</code> keyword. Cannot be instantiated.</li>
            <li><strong>Interface:</strong> A pure contract \u2014 all methods are implicitly <code>public abstract</code>. A class can implement multiple interfaces.</li>
            <li><strong>Default Methods (Java 8+):</strong> Interfaces can have concrete methods using <code>default</code> keyword.</li>
            <li><strong>Static Methods:</strong> Interfaces can also have <code>static</code> utility methods.</li>
          </ul>
          <h4 class="sub-heading">Abstract Class vs Interface</h4>
          <app-code-block [code]="codeComparison" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-indigo" /> Contract Fulfillment Visualizer
          </h3>

          <div class="contract-demo">
            <div class="interface-box" [class.active]="activePhase() === 'interface'">
              <span class="iface-label">INTERFACE</span>
              <span class="iface-name">Drawable</span>
              <div class="iface-methods">
                <span class="method abstract">draw(): void</span>
                <span class="method abstract">getColor(): String</span>
                <span class="method default">default resize(int s)</span>
              </div>
            </div>

            <div class="impl-arrow">{{ arrowText() }}</div>

            <div class="impl-row">
              @for (impl of implementations(); track impl.name) {
                <div class="impl-box" [class.active]="activeImpl() === impl.name">
                  <span class="impl-label">CLASS</span>
                  <span class="impl-name">{{ impl.name }}</span>
                  <div class="impl-methods">
                    @for (m of impl.methods; track m) {
                      <span class="method concrete">{{ m }}</span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="showContract()" [disabled]="isAnimating()" class="btn btn-indigo">
              <app-icon name="play" [size]="16" /> Show Contract Flow
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-violet" /> Key Concepts
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Abstract Class</h3>
            <p class="op-desc">Partial implementation with abstract methods that subclasses must implement.</p>
            <app-code-block [code]="codeAbstract" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Interface</h3>
            <p class="op-desc">Pure contract. A class can implement multiple interfaces.</p>
            <app-code-block [code]="codeInterface" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Default & Static Methods</h3>
            <p class="op-desc">Java 8+ allows concrete methods in interfaces.</p>
            <app-code-block [code]="codeDefault" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-violet" /> Functional Interfaces</h3>
            <p class="op-desc">Interfaces with exactly one abstract method \u2014 usable with lambdas.</p>
            <app-code-block [code]="codeFunctional" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-indigo" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case indigo">
            <div class="use-num indigo-bg">1</div>
            <div>
              <h4 class="use-title">JDBC API</h4>
              <p class="use-desc"><code>Connection</code>, <code>Statement</code>, <code>ResultSet</code> are all interfaces. MySQL, PostgreSQL, and Oracle each provide their own implementations \u2014 you code to the interface.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Service Layer</h4>
              <p class="use-desc">Define <code>UserService</code> interface, implement <code>UserServiceImpl</code>. Swap implementations for testing with mock objects \u2014 zero calling-code changes.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Java Collections Framework</h4>
              <p class="use-desc"><code>List</code>, <code>Set</code>, <code>Map</code> are interfaces. <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code> are implementations. You choose the right one for your use case.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;9021bc60150c25cac89559820ec029412814a9109398455fe4178326f9aff916;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/abstraction.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-indigo {\n  color: #4338ca;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #4338ca;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.contract-demo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.interface-box,\n.impl-box {\n  padding: 16px 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  min-width: 180px;\n  text-align: center;\n  transition: all 0.3s;\n}\n.interface-box {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.interface-box.active {\n  border-color: #4338ca;\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(67, 56, 202, 0.2);\n}\n.impl-box {\n  background: #fff;\n}\n.impl-box.active {\n  border-color: #22c55e;\n  background: #f0fdf4;\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);\n}\n.iface-label,\n.impl-label {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n.iface-name,\n.impl-name {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 8px;\n}\n.iface-methods,\n.impl-methods {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.method {\n  font-size: 0.62rem;\n  font-family: "JetBrains Mono", monospace;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n.method.abstract {\n  background: #fef3c7;\n  color: #92400e;\n}\n.method.default {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.method.concrete {\n  background: #dcfce7;\n  color: #166534;\n}\n.impl-arrow {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #94a3b8;\n  font-family: "JetBrains Mono", monospace;\n}\n.impl-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-indigo {\n  background: #4338ca;\n  color: #fff;\n}\n.btn-indigo:hover:not(:disabled) {\n  background: #3730a3;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.indigo {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.indigo-bg {\n  background: #4338ca;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=abstraction.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbstractionComponent, { className: "AbstractionComponent", filePath: "src/app/features/tutorials/topics/abstraction.component.ts", lineNumber: 205 });
})();
export {
  AbstractionComponent
};
//# sourceMappingURL=chunk-PC6LSSU4.js.map
