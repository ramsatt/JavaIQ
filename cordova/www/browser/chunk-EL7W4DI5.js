import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/polymorphism.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function PolymorphismComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function PolymorphismComponent_For_37_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectShape(s_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.currentShape() === s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
  }
}
function PolymorphismComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 43);
    \u0275\u0275text(2, "JVM Lookup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4, "Reference type: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Shape");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8, "Actual type: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.currentShape());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2192 Calls ", ctx_r2.currentShape(), ".draw()");
  }
}
var PolymorphismComponent = class _PolymorphismComponent {
  shapes = [
    { name: "Circle", icon: "\u{1F534}", drawOutput: "\u2192 Drawing Circle" },
    { name: "Square", icon: "\u{1F7E6}", drawOutput: "\u2192 Drawing Square" },
    { name: "Triangle", icon: "\u{1F53A}", drawOutput: "\u2192 Drawing Triangle" }
  ];
  currentShape = signal("Circle", ...ngDevMode ? [{ debugName: "currentShape" }] : []);
  activeLine = signal(0, ...ngDevMode ? [{ debugName: "activeLine" }] : []);
  drawResult = signal("", ...ngDevMode ? [{ debugName: "drawResult" }] : []);
  showArrow = signal(false, ...ngDevMode ? [{ debugName: "showArrow" }] : []);
  status = signal("Click a shape, then run dispatch to see runtime method resolution.", ...ngDevMode ? [{ debugName: "status" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  codeOverview = `// Overloading (compile-time)
int add(int a, int b) { ... }
double add(double a, double b) { ... }

// Overriding (runtime)
Shape s = new Circle();  // Upcasting
s.draw(); // calls Circle.draw(), not Shape.draw()`;
  codeOverloading = `public class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
    int add(int a, int b, int c) {
        return a + b + c;
    }
}`;
  codeOverriding = `public class Shape {
    public void draw() {
        System.out.println("Drawing Shape");
    }
}

public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}`;
  codeCasting = `// Upcasting (implicit, always safe)
Shape s = new Circle();
s.draw(); // Circle's draw()

// Downcasting (explicit, needs check)
if (s instanceof Circle c) {
    c.getRadius(); // Circle-specific
}`;
  codeInterface = `public interface Drawable {
    void draw();
}

// Any class can implement Drawable
List<Drawable> items = List.of(
    new Circle(), new Square(), new Text()
);

// Polymorphic loop
for (Drawable d : items) {
    d.draw(); // Each calls its own version
}`;
  selectShape(name) {
    if (this.isAnimating())
      return;
    this.currentShape.set(name);
    this.activeLine.set(0);
    this.drawResult.set("");
    this.showArrow.set(false);
    this.status.set(`Selected ${name}. Click "Run Dynamic Dispatch" to see resolution.`);
  }
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runDispatch() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.drawResult.set("");
    this.showArrow.set(false);
    const shape = this.currentShape();
    this.activeLine.set(1);
    this.status.set(`Shape s = new ${shape}(); \u2014 reference type is Shape, actual type is ${shape}`);
    await this.sleep(1500);
    this.activeLine.set(2);
    this.status.set("s.draw() \u2014 JVM looks up the ACTUAL type, not the reference type...");
    this.showArrow.set(true);
    await this.sleep(1500);
    const output = this.shapes.find((s) => s.name === shape).drawOutput;
    this.drawResult.set(output);
    this.status.set(`Resolved! ${shape}.draw() is called \u2014 runtime polymorphism in action! \u2705`);
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.currentShape.set("Circle");
    this.activeLine.set(0);
    this.drawResult.set("");
    this.showArrow.set(false);
    this.status.set("Click a shape, then run dispatch to see runtime method resolution.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function PolymorphismComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PolymorphismComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PolymorphismComponent, selectors: [["app-topic-polymorphism"]], decls: 140, vars: 25, consts: [["title", "Polymorphism", "subtitle", "One interface, many forms. Learn how Java resolves method calls at compile-time and runtime for flexible, extensible code.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #dc2626, #f97316)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-red", 3, "size"], [1, "dispatch-demo"], [1, "dispatch-code"], [1, "code-line"], [1, "result"], [1, "shape-grid"], [1, "shape-btn", 3, "active"], [1, "dispatch-arrow"], [1, "arrow-content"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-red", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-red", 3, "size"], [1, "use-cases"], [1, "use-case", "red"], [1, "use-num", "red-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "shape-btn", 3, "click"], [1, "shape-icon"], [1, "shape-name"], [1, "arrow-label"], [1, "arrow-detail"], [1, "arrow-detail", "resolve"]], template: function PolymorphismComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Polymorphism? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Polymorphism");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, ` means "many forms." In Java, the same method name can behave differently depending on the object's actual type. There are two kinds: `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Compile-time (Overloading):");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Same method name, different parameters. Resolved at compile time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "Runtime (Overriding):");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Subclass redefines a method from the superclass. Resolved at runtime via dynamic dispatch.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "h4", 5);
      \u0275\u0275text(20, "Overloading vs Overriding");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "section", 1)(23, "div", 7)(24, "h3", 8);
      \u0275\u0275element(25, "app-icon", 9);
      \u0275\u0275text(26, " Runtime Dispatch Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 10)(28, "div", 11)(29, "span", 12);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 12);
      \u0275\u0275text(32, "s.draw(); ");
      \u0275\u0275elementStart(33, "span", 13);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 14);
      \u0275\u0275repeaterCreate(36, PolymorphismComponent_For_37_Template, 5, 4, "div", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 16);
      \u0275\u0275conditionalCreate(39, PolymorphismComponent_Conditional_39_Template, 13, 2, "div", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 18);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 19)(43, "button", 20);
      \u0275\u0275listener("click", function PolymorphismComponent_Template_button_click_43_listener() {
        return ctx.runDispatch();
      });
      \u0275\u0275element(44, "app-icon", 21);
      \u0275\u0275text(45, " Run Dynamic Dispatch ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 22);
      \u0275\u0275listener("click", function PolymorphismComponent_Template_button_click_46_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(47, "app-icon", 23);
      \u0275\u0275text(48, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "section", 1)(50, "h2", 2);
      \u0275\u0275element(51, "app-icon", 24);
      \u0275\u0275text(52, " Types of Polymorphism ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 25)(54, "div", 26)(55, "h3", 27);
      \u0275\u0275element(56, "app-icon", 28);
      \u0275\u0275text(57, " Method Overloading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 29);
      \u0275\u0275text(59, "Compile-time polymorphism \u2014 same name, different parameter lists.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 26)(62, "h3", 27);
      \u0275\u0275element(63, "app-icon", 28);
      \u0275\u0275text(64, " Method Overriding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 29);
      \u0275\u0275text(66, "Runtime polymorphism \u2014 subclass redefines parent method.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 26)(69, "h3", 27);
      \u0275\u0275element(70, "app-icon", 28);
      \u0275\u0275text(71, " Upcasting & Downcasting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 29);
      \u0275\u0275text(73, "Convert between parent and child references safely.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 26)(76, "h3", 27);
      \u0275\u0275element(77, "app-icon", 28);
      \u0275\u0275text(78, " Interface Polymorphism");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 29);
      \u0275\u0275text(80, "Program to an interface \u2014 the most powerful form of polymorphism.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "section", 1)(83, "h2", 2);
      \u0275\u0275element(84, "app-icon", 30);
      \u0275\u0275text(85, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 31)(87, "div", 32)(88, "div", 33);
      \u0275\u0275text(89, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div")(91, "h4", 34);
      \u0275\u0275text(92, "Strategy Pattern in Payment Systems");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 35);
      \u0275\u0275text(94, "A ");
      \u0275\u0275elementStart(95, "code");
      \u0275\u0275text(96, "PaymentProcessor");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, " interface with ");
      \u0275\u0275elementStart(98, "code");
      \u0275\u0275text(99, "CreditCard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, ", ");
      \u0275\u0275elementStart(101, "code");
      \u0275\u0275text(102, "PayPal");
      \u0275\u0275elementEnd();
      \u0275\u0275text(103, ", ");
      \u0275\u0275elementStart(104, "code");
      \u0275\u0275text(105, "UPI");
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, " implementations. The caller uses the interface \u2014 the actual processor is injected at runtime.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 36)(108, "div", 37);
      \u0275\u0275text(109, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div")(111, "h4", 34);
      \u0275\u0275text(112, "Spring Dependency Injection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p", 35);
      \u0275\u0275text(114, "Spring injects concrete beans by interface type: ");
      \u0275\u0275elementStart(115, "code");
      \u0275\u0275text(116, "@Autowired NotificationService svc;");
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " could be ");
      \u0275\u0275elementStart(118, "code");
      \u0275\u0275text(119, "EmailService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(120, " or ");
      \u0275\u0275elementStart(121, "code");
      \u0275\u0275text(122, "SMSService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(123, " depending on configuration.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 38)(125, "div", 39);
      \u0275\u0275text(126, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div")(128, "h4", 34);
      \u0275\u0275text(129, "Collections API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p", 35)(131, "code");
      \u0275\u0275text(132, "List<String> list = new ArrayList<>();");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " \u2014 you program to the ");
      \u0275\u0275elementStart(134, "code");
      \u0275\u0275text(135, "List");
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, " interface. You can swap to ");
      \u0275\u0275elementStart(137, "code");
      \u0275\u0275text(138, "LinkedList");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, " without changing any calling code.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(18);
      \u0275\u0275property("code", ctx.codeOverview);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeLine() === 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Shape s = new ", ctx.currentShape(), "();");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeLine() === 2);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.drawResult());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.shapes);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showArrow() ? 39 : -1);
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
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOverloading);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOverriding);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCasting);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeInterface);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.dispatch-demo[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.dispatch-code[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n}\n.code-line[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  padding: 4px 0;\n  transition: all 0.3s;\n}\n.code-line.active[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-weight: 600;\n}\n.result[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-weight: 700;\n}\n.shape-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.shape-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px 20px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.shape-btn[_ngcontent-%COMP%]:hover {\n  border-color: #dc2626;\n}\n.shape-btn.active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n  transform: scale(1.05);\n}\n.shape-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.shape-name[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.dispatch-arrow[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n.arrow-content[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.arrow-label[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #d97706;\n}\n.arrow-detail[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #334155;\n  font-family: "JetBrains Mono", monospace;\n}\n.arrow-detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.resolve[_ngcontent-%COMP%] {\n  color: #059669;\n  font-weight: 700;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-red[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.red[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.red-bg[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=polymorphism.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorphismComponent, [{
    type: Component,
    args: [{ selector: "app-topic-polymorphism", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Polymorphism"
      subtitle="One interface, many forms. Learn how Java resolves method calls at compile-time and runtime for flexible, extensible code."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #dc2626, #f97316)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-red" /> What is Polymorphism?
        </h2>
        <div class="prose">
          <p>
            <strong>Polymorphism</strong> means "many forms." In Java, the same method name can behave differently depending on the object's actual type. There are two kinds:
          </p>
          <ul>
            <li><strong>Compile-time (Overloading):</strong> Same method name, different parameters. Resolved at compile time.</li>
            <li><strong>Runtime (Overriding):</strong> Subclass redefines a method from the superclass. Resolved at runtime via dynamic dispatch.</li>
          </ul>
          <h4 class="sub-heading">Overloading vs Overriding</h4>
          <app-code-block [code]="codeOverview" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-red" /> Runtime Dispatch Visualizer
          </h3>

          <div class="dispatch-demo">
            <div class="dispatch-code">
              <span class="code-line" [class.active]="activeLine() === 1">Shape s = new {{ currentShape() }}();</span>
              <span class="code-line" [class.active]="activeLine() === 2">s.draw(); <span class="result">{{ drawResult() }}</span></span>
            </div>

            <div class="shape-grid">
              @for (s of shapes; track s.name) {
                <div class="shape-btn" [class.active]="currentShape() === s.name" (click)="selectShape(s.name)">
                  <span class="shape-icon">{{ s.icon }}</span>
                  <span class="shape-name">{{ s.name }}</span>
                </div>
              }
            </div>

            <div class="dispatch-arrow">
              @if (showArrow()) {
                <div class="arrow-content">
                  <span class="arrow-label">JVM Lookup</span>
                  <span class="arrow-detail">Reference type: <strong>Shape</strong></span>
                  <span class="arrow-detail">Actual type: <strong>{{ currentShape() }}</strong></span>
                  <span class="arrow-detail resolve">\u2192 Calls {{ currentShape() }}.draw()</span>
                </div>
              }
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="runDispatch()" [disabled]="isAnimating()" class="btn btn-red">
              <app-icon name="play" [size]="16" /> Run Dynamic Dispatch
            </button>
            <button (click)="resetDemo()" [disabled]="isAnimating()" class="btn btn-gray">
              <app-icon name="refresh-cw" [size]="16" /> Reset
            </button>
          </div>
        </div>
      </section>

      <!-- Operations -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="code" [size]="28" css="icon-indigo" /> Types of Polymorphism
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overloading</h3>
            <p class="op-desc">Compile-time polymorphism \u2014 same name, different parameter lists.</p>
            <app-code-block [code]="codeOverloading" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overriding</h3>
            <p class="op-desc">Runtime polymorphism \u2014 subclass redefines parent method.</p>
            <app-code-block [code]="codeOverriding" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Upcasting & Downcasting</h3>
            <p class="op-desc">Convert between parent and child references safely.</p>
            <app-code-block [code]="codeCasting" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Interface Polymorphism</h3>
            <p class="op-desc">Program to an interface \u2014 the most powerful form of polymorphism.</p>
            <app-code-block [code]="codeInterface" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-red" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case red">
            <div class="use-num red-bg">1</div>
            <div>
              <h4 class="use-title">Strategy Pattern in Payment Systems</h4>
              <p class="use-desc">A <code>PaymentProcessor</code> interface with <code>CreditCard</code>, <code>PayPal</code>, <code>UPI</code> implementations. The caller uses the interface \u2014 the actual processor is injected at runtime.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Dependency Injection</h4>
              <p class="use-desc">Spring injects concrete beans by interface type: <code>&#64;Autowired NotificationService svc;</code> could be <code>EmailService</code> or <code>SMSService</code> depending on configuration.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">Collections API</h4>
              <p class="use-desc"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();</code> \u2014 you program to the <code>List</code> interface. You can swap to <code>LinkedList</code> without changing any calling code.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;77f1afbc2a5f8da46d33859d61bfd808d402821c4dcf748a449736142a0ba481;D:/A21/JavaIQ/src/app/features/tutorials/topics/polymorphism.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.dispatch-demo {\n  margin-bottom: 20px;\n}\n.dispatch-code {\n  background: #1e293b;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin-bottom: 16px;\n}\n.code-line {\n  display: block;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  padding: 4px 0;\n  transition: all 0.3s;\n}\n.code-line.active {\n  color: #fbbf24;\n  font-weight: 600;\n}\n.result {\n  color: #22c55e;\n  font-weight: 700;\n}\n.shape-grid {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.shape-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px 20px;\n  background: #f8fafc;\n  border: 2px solid #e2e8f0;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.shape-btn:hover {\n  border-color: #dc2626;\n}\n.shape-btn.active {\n  border-color: #dc2626;\n  background: #fef2f2;\n  transform: scale(1.05);\n}\n.shape-icon {\n  font-size: 1.8rem;\n}\n.shape-name {\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n}\n.dispatch-arrow {\n  min-height: 60px;\n}\n.arrow-content {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 10px;\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.arrow-label {\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: #d97706;\n}\n.arrow-detail {\n  font-size: 0.72rem;\n  color: #334155;\n  font-family: "JetBrains Mono", monospace;\n}\n.arrow-detail strong {\n  color: #0f172a;\n}\n.resolve {\n  color: #059669;\n  font-weight: 700;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-red {\n  background: #dc2626;\n  color: #fff;\n}\n.btn-red:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.red {\n  background: #fef2f2;\n  border-color: #fecaca;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.red-bg {\n  background: #dc2626;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=polymorphism.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PolymorphismComponent, { className: "PolymorphismComponent", filePath: "src/app/features/tutorials/topics/polymorphism.component.ts", lineNumber: 206 });
})();
export {
  PolymorphismComponent
};
//# sourceMappingURL=chunk-EL7W4DI5.js.map
