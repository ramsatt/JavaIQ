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
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/lambdas.component.ts
var LambdasComponent = class _LambdasComponent {
  activeStage = signal(0, ...ngDevMode ? [{ debugName: "activeStage" }] : []);
  anon = "";
  lambda = "";
  methodRef = "";
  status = signal("See how verbose anonymous classes become concise lambdas and method references.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `// Anonymous inner class (verbose)
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
};

// Lambda expression (concise!)
Runnable r = () -> System.out.println("Hello");

// Method reference (shortest)
Runnable r = System.out::println;`;
  codeCore = `// Predicate<T>: T -> boolean
Predicate<String> isLong = s -> s.length() > 5;

// Function<T,R>: T -> R
Function<String, Integer> len = String::length;

// Consumer<T>: T -> void
Consumer<String> print = System.out::println;

// Supplier<T>: () -> T
Supplier<List<String>> factory = ArrayList::new;

// BiFunction<T,U,R>: (T, U) -> R
BiFunction<Integer,Integer,Integer> add =
    Integer::sum;`;
  codeMethodRef = `// 1. Static method
Function<String,Integer> parse =
    Integer::parseInt;

// 2. Instance method of an object
Consumer<String> print =
    System.out::println;

// 3. Instance method of a type
Function<String,String> upper =
    String::toUpperCase;

// 4. Constructor
Supplier<ArrayList<String>> factory =
    ArrayList::new;`;
  codeComposition = `// Predicate composition
Predicate<Integer> even = n -> n % 2 == 0;
Predicate<Integer> positive = n -> n > 0;

Predicate<Integer> evenAndPos =
    even.and(positive);
Predicate<Integer> evenOrPos =
    even.or(positive);
Predicate<Integer> odd = even.negate();

// Function composition
Function<Integer,Integer> doubleIt = n -> n*2;
Function<Integer,Integer> addThree = n -> n+3;

// doubleIt first, then addThree
Function<Integer,Integer> pipeline =
    doubleIt.andThen(addThree);
pipeline.apply(5); // (5*2)+3 = 13`;
  codeClosure = `// Lambdas capture "effectively final" vars
String prefix = "Hello";
// prefix = "Hi"; \u2190 would break!

Function<String, String> greet =
    name -> prefix + " " + name;

greet.apply("World"); // "Hello World"

// \u26A0 Can't modify captured variables
// The following would NOT compile:
// int count = 0;
// forEach(x -> count++); \u2190 ERROR`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async showComparator() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeStage.set(0);
    this.anon = `Comparator<String> cmp =
  new Comparator<String>() {
    public int compare(String a, String b) {
      return a.compareTo(b);
    }
  };`;
    this.lambda = `Comparator<String> cmp =
  (a, b) -> a.compareTo(b);`;
    this.methodRef = `Comparator<String> cmp =
  String::compareTo;`;
    this.activeStage.set(1);
    this.status.set("Anonymous class: 6 lines of ceremony for one comparison...");
    await this.sleep(1500);
    this.activeStage.set(2);
    this.status.set("Lambda: just (a, b) -> a.compareTo(b) \u2014 one expression!");
    await this.sleep(1500);
    this.activeStage.set(3);
    this.status.set("Method reference: String::compareTo \u2014 maximum conciseness! \u2705");
    this.isAnimating.set(false);
  }
  async showPredicate() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeStage.set(0);
    this.anon = `Predicate<String> pred =
  new Predicate<String>() {
    public boolean test(String s) {
      return s.isEmpty();
    }
  };`;
    this.lambda = `Predicate<String> pred =
  s -> s.isEmpty();`;
    this.methodRef = `Predicate<String> pred =
  String::isEmpty;`;
    this.activeStage.set(1);
    this.status.set("Anonymous Predicate: verbose boilerplate...");
    await this.sleep(1500);
    this.activeStage.set(2);
    this.status.set("Lambda: s -> s.isEmpty() \u2014 clean and readable!");
    await this.sleep(1500);
    this.activeStage.set(3);
    this.status.set("Method reference: String::isEmpty \u2014 crystal clear! \u2705");
    this.isAnimating.set(false);
  }
  async showConsumer() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeStage.set(0);
    this.anon = `Consumer<String> con =
  new Consumer<String>() {
    public void accept(String s) {
      System.out.println(s);
    }
  };`;
    this.lambda = `Consumer<String> con =
  s -> System.out.println(s);`;
    this.methodRef = `Consumer<String> con =
  System.out::println;`;
    this.activeStage.set(1);
    this.status.set("Anonymous Consumer: so much code for a print...");
    await this.sleep(1500);
    this.activeStage.set(2);
    this.status.set("Lambda: s -> System.out.println(s)");
    await this.sleep(1500);
    this.activeStage.set(3);
    this.status.set("Method reference: System.out::println \u2014 elegant! \u2705");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.activeStage.set(0);
    this.anon = "";
    this.lambda = "";
    this.methodRef = "";
    this.status.set("See how verbose anonymous classes become concise lambdas and method references.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function LambdasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LambdasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LambdasComponent, selectors: [["app-topic-lambdas"]], decls: 141, vars: 37, consts: [["title", "Lambda Expressions", "subtitle", "Concise functional code. Master lambda syntax, method references, and functional interfaces for cleaner, more expressive Java.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #c2410c, #fb923c)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-orange", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-orange", 3, "size"], [1, "transform-demo"], [1, "code-stage"], [1, "stage-label"], [1, "stage-code"], [1, "transform-arrow"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-orange", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], [1, "btn", "btn-teal", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-orange", 3, "size"], [1, "use-cases"], [1, "use-case", "orange"], [1, "use-num", "orange-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"]], template: function LambdasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Lambdas?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "lambda expression");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " is a concise way to represent an anonymous function \u2014 a function without a name. Introduced in Java 8, lambdas make code more readable and enable functional programming patterns.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "Syntax:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "code");
      \u0275\u0275text(16, "(parameters) -> expression");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " or ");
      \u0275\u0275elementStart(18, "code");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "li")(21, "strong");
      \u0275\u0275text(22, "Target:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Used wherever a functional interface (single abstract method) is expected.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Method References:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "code");
      \u0275\u0275text(28, "Class::method");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " \u2014 even shorter syntax for lambdas that just call a method.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "section", 1)(32, "div", 6)(33, "h3", 7);
      \u0275\u0275element(34, "app-icon", 8);
      \u0275\u0275text(35, " Lambda Transformation Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9)(37, "div", 10)(38, "span", 11);
      \u0275\u0275text(39, "ANONYMOUS CLASS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "pre", 12);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 13)(43, "span");
      \u0275\u0275text(44, "simplify \u2728");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 10)(46, "span", 11);
      \u0275\u0275text(47, "LAMBDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "pre", 12);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 13)(51, "span");
      \u0275\u0275text(52, "simplify \u2728");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 10)(54, "span", 11);
      \u0275\u0275text(55, "METHOD REFERENCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "pre", 12);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 14);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 15)(61, "button", 16);
      \u0275\u0275listener("click", function LambdasComponent_Template_button_click_61_listener() {
        return ctx.showComparator();
      });
      \u0275\u0275element(62, "app-icon", 17);
      \u0275\u0275text(63, " Comparator Example");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 18);
      \u0275\u0275listener("click", function LambdasComponent_Template_button_click_64_listener() {
        return ctx.showPredicate();
      });
      \u0275\u0275element(65, "app-icon", 17);
      \u0275\u0275text(66, " Predicate Example");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 19);
      \u0275\u0275listener("click", function LambdasComponent_Template_button_click_67_listener() {
        return ctx.showConsumer();
      });
      \u0275\u0275element(68, "app-icon", 17);
      \u0275\u0275text(69, " Consumer Example");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 20);
      \u0275\u0275listener("click", function LambdasComponent_Template_button_click_70_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(71, "app-icon", 21);
      \u0275\u0275text(72, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "section", 1)(74, "h2", 2);
      \u0275\u0275element(75, "app-icon", 22);
      \u0275\u0275text(76, " Functional Interfaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 23)(78, "div", 24)(79, "h3", 25);
      \u0275\u0275element(80, "app-icon", 26);
      \u0275\u0275text(81, " Core Interfaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 27);
      \u0275\u0275text(83, "Predicate, Function, Consumer, Supplier \u2014 the big four.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 24)(86, "h3", 25);
      \u0275\u0275element(87, "app-icon", 26);
      \u0275\u0275text(88, " Method References");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p", 27);
      \u0275\u0275text(90, "Four types of method references for maximum brevity.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 24)(93, "h3", 25);
      \u0275\u0275element(94, "app-icon", 26);
      \u0275\u0275text(95, " Composition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 27);
      \u0275\u0275text(97, "Chain functional interfaces with and, or, compose, andThen.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 24)(100, "h3", 25);
      \u0275\u0275element(101, "app-icon", 26);
      \u0275\u0275text(102, " Closures & Scope");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 27);
      \u0275\u0275text(104, "Lambdas can capture effectively final local variables.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "section", 1)(107, "h2", 2);
      \u0275\u0275element(108, "app-icon", 28);
      \u0275\u0275text(109, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 29)(111, "div", 30)(112, "div", 31);
      \u0275\u0275text(113, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div")(115, "h4", 32);
      \u0275\u0275text(116, "Spring Bean Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p", 33)(118, "code");
      \u0275\u0275text(119, "@Bean Supplier<Executor> executor = () -> Executors.newFixedThreadPool(4);");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " \u2014 lambdas simplify bean factory methods.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(121, "div", 34)(122, "div", 35);
      \u0275\u0275text(123, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div")(125, "h4", 32);
      \u0275\u0275text(126, "Event Handlers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 33)(128, "code");
      \u0275\u0275text(129, "button.setOnAction(e -> handleClick(e));");
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, " \u2014 no more bulky anonymous inner classes for GUI callbacks.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 36)(132, "div", 37);
      \u0275\u0275text(133, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div")(135, "h4", 32);
      \u0275\u0275text(136, "Collection Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "p", 33)(138, "code");
      \u0275\u0275text(139, "list.sort(Comparator.comparing(User::getName))");
      \u0275\u0275elementEnd();
      \u0275\u0275text(140, " \u2014 lambdas and method references make collection operations one-liners.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate2("(parameters) -> ", "{", " statements; ", "}");
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeStage() >= 1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.anon);
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.activeStage() >= 2);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeStage() >= 2);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.lambda);
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.activeStage() >= 3);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeStage() >= 3);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.methodRef);
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCore);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMethodRef);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeComposition);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeClosure);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-orange[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #ea580c;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.transform-demo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.code-stage[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  transition: all 0.4s;\n}\n.code-stage.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-color: #ea580c;\n  background: #fff7ed;\n}\n.stage-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.stage-code[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.transform-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #ea580c;\n  padding: 4px 0;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n.transform-arrow.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-orange[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: #fff;\n}\n.btn-orange[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #c2410c;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-teal[_ngcontent-%COMP%] {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.orange-bg[_ngcontent-%COMP%] {\n  background: #ea580c;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=lambdas.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LambdasComponent, [{
    type: Component,
    args: [{ selector: "app-topic-lambdas", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Lambda Expressions"
      subtitle="Concise functional code. Master lambda syntax, method references, and functional interfaces for cleaner, more expressive Java."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #c2410c, #fb923c)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-orange" /> What are Lambdas?</h2>
        <div class="prose">
          <p>A <strong>lambda expression</strong> is a concise way to represent an anonymous function \u2014 a function without a name. Introduced in Java 8, lambdas make code more readable and enable functional programming patterns.</p>
          <ul>
            <li><strong>Syntax:</strong> <code>(parameters) -&gt; expression</code> or <code>(parameters) -&gt; {{ '{' }} statements; {{ '}' }}</code></li>
            <li><strong>Target:</strong> Used wherever a functional interface (single abstract method) is expected.</li>
            <li><strong>Method References:</strong> <code>Class::method</code> \u2014 even shorter syntax for lambdas that just call a method.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-orange" /> Lambda Transformation Visualizer</h3>
          <div class="transform-demo">
            <div class="code-stage" [class.active]="activeStage() >= 1">
              <span class="stage-label">ANONYMOUS CLASS</span>
              <pre class="stage-code">{{ anon }}</pre>
            </div>
            <div class="transform-arrow" [class.visible]="activeStage() >= 2">
              <span>simplify \u2728</span>
            </div>
            <div class="code-stage" [class.active]="activeStage() >= 2">
              <span class="stage-label">LAMBDA</span>
              <pre class="stage-code">{{ lambda }}</pre>
            </div>
            <div class="transform-arrow" [class.visible]="activeStage() >= 3">
              <span>simplify \u2728</span>
            </div>
            <div class="code-stage" [class.active]="activeStage() >= 3">
              <span class="stage-label">METHOD REFERENCE</span>
              <pre class="stage-code">{{ methodRef }}</pre>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="showComparator()" [disabled]="isAnimating()" class="btn btn-orange"><app-icon name="play" [size]="16" /> Comparator Example</button>
            <button (click)="showPredicate()" [disabled]="isAnimating()" class="btn btn-purple"><app-icon name="play" [size]="16" /> Predicate Example</button>
            <button (click)="showConsumer()" [disabled]="isAnimating()" class="btn btn-teal"><app-icon name="play" [size]="16" /> Consumer Example</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Functional Interfaces</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Core Interfaces</h3>
            <p class="op-desc">Predicate, Function, Consumer, Supplier \u2014 the big four.</p>
            <app-code-block [code]="codeCore" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method References</h3>
            <p class="op-desc">Four types of method references for maximum brevity.</p>
            <app-code-block [code]="codeMethodRef" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Composition</h3>
            <p class="op-desc">Chain functional interfaces with and, or, compose, andThen.</p>
            <app-code-block [code]="codeComposition" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Closures & Scope</h3>
            <p class="op-desc">Lambdas can capture effectively final local variables.</p>
            <app-code-block [code]="codeClosure" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-orange" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case orange"><div class="use-num orange-bg">1</div><div><h4 class="use-title">Spring Bean Configuration</h4><p class="use-desc"><code>&#64;Bean Supplier&lt;Executor&gt; executor = () -> Executors.newFixedThreadPool(4);</code> \u2014 lambdas simplify bean factory methods.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Event Handlers</h4><p class="use-desc"><code>button.setOnAction(e -> handleClick(e));</code> \u2014 no more bulky anonymous inner classes for GUI callbacks.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Collection Processing</h4><p class="use-desc"><code>list.sort(Comparator.comparing(User::getName))</code> \u2014 lambdas and method references make collection operations one-liners.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;1f15719c9d1f93caeb0f864dbae0d29d41cdeaff2beb6ed21be04cab2fad276b;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/lambdas.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-orange {\n  color: #ea580c;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #ea580c;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.transform-demo {\n  margin-bottom: 20px;\n}\n.code-stage {\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  background: #fff;\n  margin-bottom: 8px;\n  opacity: 0.4;\n  transition: all 0.4s;\n}\n.code-stage.active {\n  opacity: 1;\n  border-color: #ea580c;\n  background: #fff7ed;\n}\n.stage-label {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  color: #94a3b8;\n  margin-bottom: 6px;\n}\n.stage-code {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.transform-arrow {\n  text-align: center;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #ea580c;\n  padding: 4px 0;\n  opacity: 0;\n  transition: opacity 0.4s;\n}\n.transform-arrow.visible {\n  opacity: 1;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-orange {\n  background: #ea580c;\n  color: #fff;\n}\n.btn-orange:hover:not(:disabled) {\n  background: #c2410c;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-teal {\n  background: #0d9488;\n  color: #fff;\n}\n.btn-teal:hover:not(:disabled) {\n  background: #0f766e;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.orange {\n  background: #fff7ed;\n  border-color: #fed7aa;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.orange-bg {\n  background: #ea580c;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=lambdas.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LambdasComponent, { className: "LambdasComponent", filePath: "src/app/features/tutorials/topics/lambdas.component.ts", lineNumber: 149 });
})();
export {
  LambdasComponent
};
//# sourceMappingURL=chunk-3TPCGCAA.js.map
