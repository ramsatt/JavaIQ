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
  ɵɵclassMap,
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

// src/app/features/tutorials/topics/generics.component.ts
var _forTrack0 = ($index, $item) => $item.type;
function GenericsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.boxValue());
  }
}
function GenericsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "empty");
    \u0275\u0275elementEnd();
  }
}
function GenericsComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attempt_r2 = ctx.$implicit;
    \u0275\u0275classMap(attempt_r2.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("box.set(", attempt_r2.value, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attempt_r2.result);
  }
}
var GenericsComponent = class _GenericsComponent {
  currentType = signal("T", ...ngDevMode ? [{ debugName: "currentType" }] : []);
  boxValue = signal("", ...ngDevMode ? [{ debugName: "boxValue" }] : []);
  boxState = signal("", ...ngDevMode ? [{ debugName: "boxState" }] : []);
  attempts = signal([], ...ngDevMode ? [{ debugName: "attempts" }] : []);
  status = signal("Generics enforce type safety at compile time. Try a demo!", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeIntro = `// Without Generics (risky!)
List list = new ArrayList();
list.add("hello");
list.add(42); // no compile error
String s = (String) list.get(1); // \u{1F4A5} ClassCastException!

// With Generics (safe!)
List<String> safe = new ArrayList<>();
safe.add("hello");
// safe.add(42);  \u2190 COMPILE ERROR \u2705`;
  codeClass = `public class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

Box<String> box = new Box<>();
box.set("Hello");
String val = box.get(); // no cast needed!`;
  codeMethod = `// Generic method
public <T> T findFirst(List<T> list) {
    return list.isEmpty() ? null : list.get(0);
}

// Multiple type parameters
public <K, V> V getOrDefault(
    Map<K, V> map, K key, V defaultVal) {
    return map.containsKey(key)
        ? map.get(key) : defaultVal;
}`;
  codeBounded = `// Upper bound \u2014 T must be a Number
public <T extends Number> double sum(List<T> list) {
    double total = 0;
    for (T num : list) {
        total += num.doubleValue();
    }
    return total;
}

// Works with Integer, Double, Long...
sum(List.of(1, 2, 3));       // 6.0
sum(List.of(1.5, 2.5));      // 4.0`;
  codeWildcard = `// PECS: Producer Extends, Consumer Super

// Producer \u2014 reads FROM the collection
void printAll(List<? extends Shape> shapes) {
    for (Shape s : shapes) s.draw();
}

// Consumer \u2014 writes TO the collection
void addCircles(List<? super Circle> list) {
    list.add(new Circle());
}

// Unbounded \u2014 read-only, any type
void logSize(List<?> any) {
    System.out.println(any.size());
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async demoStringSafety() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.attempts.set([]);
    this.currentType.set("String");
    this.boxState.set("active");
    this.status.set("Box<String> \u2014 only String values allowed.");
    await this.sleep(800);
    this.attempts.set([{ type: "String", value: '"Hello"', result: "\u2705 Accepted", state: "success" }]);
    this.boxValue.set('"Hello"');
    this.status.set('box.set("Hello") \u2014 String matches Box<String>. Accepted!');
    await this.sleep(1e3);
    this.attempts.update((a) => [...a, { type: "int", value: "42", result: "\u274C Compile Error", state: "error" }]);
    this.boxState.set("error");
    this.status.set("box.set(42) \u2014 int \u2260 String. BLOCKED at compile time! \u2705");
    await this.sleep(1e3);
    this.boxState.set("active");
    this.status.set("Generics catch type errors BEFORE runtime \u2014 no ClassCastException! \u2705");
    this.isAnimating.set(false);
  }
  async demoIntegerSafety() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.attempts.set([]);
    this.currentType.set("Integer");
    this.boxState.set("active");
    this.status.set("Box<Integer> \u2014 only Integer values allowed.");
    await this.sleep(800);
    this.attempts.set([{ type: "int", value: "42", result: "\u2705 Accepted (autoboxed)", state: "success" }]);
    this.boxValue.set("42");
    this.status.set("box.set(42) \u2014 autoboxed from int to Integer. Accepted!");
    await this.sleep(1e3);
    this.attempts.update((a) => [...a, { type: "String", value: '"hello"', result: "\u274C Compile Error", state: "error" }]);
    this.boxState.set("error");
    this.status.set('box.set("hello") \u2014 String \u2260 Integer. BLOCKED! \u2705');
    await this.sleep(1e3);
    this.boxState.set("active");
    this.status.set("The same Box class works with any type \u2014 just change the parameter!");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.currentType.set("T");
    this.boxValue.set("");
    this.boxState.set("");
    this.attempts.set([]);
    this.status.set("Generics enforce type safety at compile time. Try a demo!");
    this.isAnimating.set(false);
  }
  static \u0275fac = function GenericsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenericsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenericsComponent, selectors: [["app-topic-generics"]], decls: 136, vars: 24, consts: [["title", "Generics", "subtitle", "Type safety without sacrifice. Learn how type parameters, bounded types, and wildcards eliminate ClassCastExceptions at compile time.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #0e7490, #22d3ee)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-cyan", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-cyan", 3, "size"], [1, "type-demo"], [1, "box-container"], [1, "generic-box"], [1, "box-label"], [1, "box-content"], [1, "box-val"], [1, "box-empty"], [1, "attempt-row"], [1, "attempt", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-cyan", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-cyan", 3, "size"], [1, "use-cases"], [1, "use-case", "cyan"], [1, "use-num", "cyan-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "attempt"], [1, "attempt-code"], [1, "attempt-result"]], template: function GenericsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Generics?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Generics");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " enable classes, interfaces, and methods to operate on types specified as parameters. They provide compile-time type safety and eliminate the need for casting.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Type Parameter:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "code");
      \u0275\u0275text(15, "<T>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " \u2014 a placeholder for any type.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li")(18, "strong");
      \u0275\u0275text(19, "Bounded Types:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "code");
      \u0275\u0275text(21, "<T extends Number>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " \u2014 restricts T to Number subclasses.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "Wildcards:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "code");
      \u0275\u0275text(27, "<? extends T>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " (upper) and ");
      \u0275\u0275elementStart(29, "code");
      \u0275\u0275text(30, "<? super T>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " (lower).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li")(33, "strong");
      \u0275\u0275text(34, "Type Erasure:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Generics are removed at runtime \u2014 they're a compile-time feature.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "section", 1)(38, "div", 6)(39, "h3", 7);
      \u0275\u0275element(40, "app-icon", 8);
      \u0275\u0275text(41, " Type Safety Visualizer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "span", 12);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 13);
      \u0275\u0275conditionalCreate(48, GenericsComponent_Conditional_48_Template, 2, 1, "span", 14)(49, GenericsComponent_Conditional_49_Template, 2, 0, "span", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 16);
      \u0275\u0275repeaterCreate(51, GenericsComponent_For_52_Template, 5, 4, "div", 17, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 18);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 19)(56, "button", 20);
      \u0275\u0275listener("click", function GenericsComponent_Template_button_click_56_listener() {
        return ctx.demoStringSafety();
      });
      \u0275\u0275element(57, "app-icon", 21);
      \u0275\u0275text(58, " Box<String> Demo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 22);
      \u0275\u0275listener("click", function GenericsComponent_Template_button_click_59_listener() {
        return ctx.demoIntegerSafety();
      });
      \u0275\u0275element(60, "app-icon", 21);
      \u0275\u0275text(61, " Box<Integer> Demo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 23);
      \u0275\u0275listener("click", function GenericsComponent_Template_button_click_62_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(63, "app-icon", 24);
      \u0275\u0275text(64, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "section", 1)(66, "h2", 2);
      \u0275\u0275element(67, "app-icon", 25);
      \u0275\u0275text(68, " Generics Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 26)(70, "div", 27)(71, "h3", 28);
      \u0275\u0275element(72, "app-icon", 29);
      \u0275\u0275text(73, " Generic Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 30);
      \u0275\u0275text(75, "Define a class that works with any type.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 27)(78, "h3", 28);
      \u0275\u0275element(79, "app-icon", 29);
      \u0275\u0275text(80, " Generic Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p", 30);
      \u0275\u0275text(82, "Methods with their own type parameters.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 27)(85, "h3", 28);
      \u0275\u0275element(86, "app-icon", 29);
      \u0275\u0275text(87, " Bounded Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 30);
      \u0275\u0275text(89, "Restrict type parameters with extends/super.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 27)(92, "h3", 28);
      \u0275\u0275element(93, "app-icon", 29);
      \u0275\u0275text(94, " Wildcards (PECS)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "p", 30);
      \u0275\u0275text(96, "Producer Extends, Consumer Super \u2014 the wildcard golden rule.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "section", 1)(99, "h2", 2);
      \u0275\u0275element(100, "app-icon", 31);
      \u0275\u0275text(101, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 32)(103, "div", 33)(104, "div", 34);
      \u0275\u0275text(105, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div")(107, "h4", 35);
      \u0275\u0275text(108, "Spring ResponseEntity<T>");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 36)(110, "code");
      \u0275\u0275text(111, "ResponseEntity<User>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, " ensures your REST controller returns the exact type expected \u2014 no casting, no runtime surprises.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 37)(114, "div", 38);
      \u0275\u0275text(115, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div")(117, "h4", 35);
      \u0275\u0275text(118, "Repository Pattern");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 36)(120, "code");
      \u0275\u0275text(121, "JpaRepository<User, Long>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " \u2014 Generics define the entity type AND the ID type, making CRUD operations fully type-safe.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 39)(124, "div", 40);
      \u0275\u0275text(125, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div")(127, "h4", 35);
      \u0275\u0275text(128, "Event Systems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p", 36)(130, "code");
      \u0275\u0275text(131, "EventBus<T>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, " ensures listeners only receive events of the correct type: ");
      \u0275\u0275elementStart(133, "code");
      \u0275\u0275text(134, "bus.on(UserCreated.class, handler)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(135, ".");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(33);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.boxState());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Box<", ctx.currentType(), ">");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.boxValue() ? 48 : 49);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.attempts());
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAnimating());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeClass);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMethod);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBounded);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWildcard);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan[_ngcontent-%COMP%] {\n  color: #0891b2;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.type-demo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.box-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.generic-box[_ngcontent-%COMP%] {\n  padding: 20px 32px;\n  border-radius: 16px;\n  border: 3px solid #e2e8f0;\n  text-align: center;\n  min-width: 180px;\n  transition: all 0.3s;\n}\n.generic-box.active[_ngcontent-%COMP%] {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.generic-box.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.box-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0891b2;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 8px;\n}\n.box-content[_ngcontent-%COMP%] {\n  min-height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.box-val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.box-empty[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.attempt-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.attempt[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.attempt.success[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.attempt.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.attempt-code[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.attempt-result[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.attempt.success[_ngcontent-%COMP%]   .attempt-result[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.attempt.error[_ngcontent-%COMP%]   .attempt-result[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cyan[_ngcontent-%COMP%] {\n  background: #0891b2;\n  color: #fff;\n}\n.btn-cyan[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.cyan[_ngcontent-%COMP%] {\n  background: #ecfeff;\n  border-color: #a5f3fc;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.cyan-bg[_ngcontent-%COMP%] {\n  background: #0891b2;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=generics.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenericsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-generics", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Generics"
      subtitle="Type safety without sacrifice. Learn how type parameters, bounded types, and wildcards eliminate ClassCastExceptions at compile time."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #0e7490, #22d3ee)">

      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-cyan" /> What are Generics?</h2>
        <div class="prose">
          <p><strong>Generics</strong> enable classes, interfaces, and methods to operate on types specified as parameters. They provide compile-time type safety and eliminate the need for casting.</p>
          <ul>
            <li><strong>Type Parameter:</strong> <code>&lt;T&gt;</code> \u2014 a placeholder for any type.</li>
            <li><strong>Bounded Types:</strong> <code>&lt;T extends Number&gt;</code> \u2014 restricts T to Number subclasses.</li>
            <li><strong>Wildcards:</strong> <code>&lt;? extends T&gt;</code> (upper) and <code>&lt;? super T&gt;</code> (lower).</li>
            <li><strong>Type Erasure:</strong> Generics are removed at runtime \u2014 they're a compile-time feature.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-cyan" /> Type Safety Visualizer</h3>
          <div class="type-demo">
            <div class="box-container">
              <div class="generic-box" [class]="boxState()">
                <span class="box-label">Box&lt;{{ currentType() }}&gt;</span>
                <div class="box-content">
                  @if (boxValue()) {
                    <span class="box-val">{{ boxValue() }}</span>
                  } @else {
                    <span class="box-empty">empty</span>
                  }
                </div>
              </div>
            </div>
            <div class="attempt-row">
              @for (attempt of attempts(); track attempt.type) {
                <div class="attempt" [class]="attempt.state">
                  <span class="attempt-code">box.set({{ attempt.value }})</span>
                  <span class="attempt-result">{{ attempt.result }}</span>
                </div>
              }
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="demoStringSafety()" [disabled]="isAnimating()" class="btn btn-cyan"><app-icon name="play" [size]="16" /> Box&lt;String&gt; Demo</button>
            <button (click)="demoIntegerSafety()" [disabled]="isAnimating()" class="btn btn-purple"><app-icon name="play" [size]="16" /> Box&lt;Integer&gt; Demo</button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Generics Patterns</h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Generic Class</h3>
            <p class="op-desc">Define a class that works with any type.</p>
            <app-code-block [code]="codeClass" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Generic Method</h3>
            <p class="op-desc">Methods with their own type parameters.</p>
            <app-code-block [code]="codeMethod" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Bounded Types</h3>
            <p class="op-desc">Restrict type parameters with extends/super.</p>
            <app-code-block [code]="codeBounded" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Wildcards (PECS)</h3>
            <p class="op-desc">Producer Extends, Consumer Super \u2014 the wildcard golden rule.</p>
            <app-code-block [code]="codeWildcard" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-cyan" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case cyan"><div class="use-num cyan-bg">1</div><div><h4 class="use-title">Spring ResponseEntity&lt;T&gt;</h4><p class="use-desc"><code>ResponseEntity&lt;User&gt;</code> ensures your REST controller returns the exact type expected \u2014 no casting, no runtime surprises.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Repository Pattern</h4><p class="use-desc"><code>JpaRepository&lt;User, Long&gt;</code> \u2014 Generics define the entity type AND the ID type, making CRUD operations fully type-safe.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Event Systems</h4><p class="use-desc"><code>EventBus&lt;T&gt;</code> ensures listeners only receive events of the correct type: <code>bus.on(UserCreated.class, handler)</code>.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;ad7302a66ea2e361d191819681310d374ba6304ed5eeb0a3aea95377ced3d319;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/generics.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-cyan {\n  color: #0891b2;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #0891b2;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.type-demo {\n  margin-bottom: 20px;\n}\n.box-container {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.generic-box {\n  padding: 20px 32px;\n  border-radius: 16px;\n  border: 3px solid #e2e8f0;\n  text-align: center;\n  min-width: 180px;\n  transition: all 0.3s;\n}\n.generic-box.active {\n  border-color: #0891b2;\n  background: #ecfeff;\n}\n.generic-box.error {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.box-label {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0891b2;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 8px;\n}\n.box-content {\n  min-height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.box-val {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.box-empty {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.attempt-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.attempt {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  font-size: 0.7rem;\n  font-family: "JetBrains Mono", monospace;\n  transition: all 0.3s;\n}\n.attempt.success {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.attempt.error {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\n.attempt-code {\n  color: #334155;\n}\n.attempt-result {\n  font-weight: 700;\n}\n.attempt.success .attempt-result {\n  color: #16a34a;\n}\n.attempt.error .attempt-result {\n  color: #dc2626;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cyan {\n  background: #0891b2;\n  color: #fff;\n}\n.btn-cyan:hover:not(:disabled) {\n  background: #0e7490;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.cyan {\n  background: #ecfeff;\n  border-color: #a5f3fc;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.cyan-bg {\n  background: #0891b2;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=generics.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenericsComponent, { className: "GenericsComponent", filePath: "src/app/features/tutorials/topics/generics.component.ts", lineNumber: 159 });
})();
export {
  GenericsComponent
};
//# sourceMappingURL=chunk-F2WW7Y2B.js.map
