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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/inheritance.component.ts
function InheritanceComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r1);
  }
}
function InheritanceComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    \u0275\u0275classProp("override", f_r2.includes("override"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r2);
  }
}
function InheritanceComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275classProp("override", f_r3.includes("override"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3);
  }
}
var InheritanceComponent = class _InheritanceComponent {
  activeNode = signal("", ...ngDevMode ? [{ debugName: "activeNode" }] : []);
  isAnimating = signal(false, ...ngDevMode ? [{ debugName: "isAnimating" }] : []);
  status = signal("Animal is the superclass. Dog and Cat extend it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  animalFields = signal(["+ name: String", "+ sound(): String", "+ eat(): void"], ...ngDevMode ? [{ debugName: "animalFields" }] : []);
  dogFields = signal(["+ breed: String", "+ fetch(): void"], ...ngDevMode ? [{ debugName: "dogFields" }] : []);
  catFields = signal(["+ indoor: boolean", "+ purr(): void"], ...ngDevMode ? [{ debugName: "catFields" }] : []);
  codeBasic = `public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public String sound() {
        return "Some sound";
    }
}

public class Dog extends Animal {
    private String breed;

    public Dog(String name, String breed) {
        super(name); // call Animal constructor
        this.breed = breed;
    }
}`;
  codeOverride = `public class Dog extends Animal {
    @Override
    public String sound() {
        return "Woof!"; // overrides Animal.sound()
    }
}

public class Cat extends Animal {
    @Override
    public String sound() {
        return "Meow!";
    }
}`;
  codeSuper = `public class Dog extends Animal {
    public Dog(String name, String breed) {
        super(name); // MUST be first line
        this.breed = breed;
    }

    @Override
    public String sound() {
        String base = super.sound(); // "Some sound"
        return "Woof!";
    }
}`;
  codeChaining = `// When you create a Dog:
Dog d = new Dog("Rex", "Labrador");

// Execution order:
// 1. Object() constructor (implicit)
// 2. Animal("Rex") constructor
// 3. Dog("Rex", "Labrador") body`;
  codeInstanceof = `Animal a = new Dog("Rex", "Lab");

a instanceof Dog;    // true
a instanceof Animal; // true
a instanceof Cat;    // false

// Pattern matching (Java 16+)
if (a instanceof Dog d) {
    d.fetch(); // safe to call
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async showInheritance() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeNode.set("animal");
    this.status.set("Animal defines: name, sound(), eat() \u2014 the base behavior.");
    await this.sleep(1500);
    this.activeNode.set("dog");
    this.status.set("Dog INHERITS name, sound(), eat() + adds breed, fetch().");
    await this.sleep(1500);
    this.activeNode.set("cat");
    this.status.set("Cat INHERITS name, sound(), eat() + adds indoor, purr().");
    await this.sleep(1500);
    this.activeNode.set("");
    this.status.set("Both Dog and Cat reuse Animal code without rewriting it! \u2705");
    this.isAnimating.set(false);
  }
  async showOverride() {
    if (this.isAnimating())
      return;
    this.isAnimating.set(true);
    this.activeNode.set("animal");
    this.status.set('Animal.sound() \u2192 "Some sound" (default implementation)');
    await this.sleep(1200);
    this.activeNode.set("dog");
    this.dogFields.set(["+ breed: String", "+ fetch(): void", '\u26A1 sound() \u2192 "Woof!" (override)']);
    this.status.set('Dog overrides sound() \u2192 "Woof!" \u{1F415}');
    await this.sleep(1200);
    this.activeNode.set("cat");
    this.catFields.set(["+ indoor: boolean", "+ purr(): void", '\u26A1 sound() \u2192 "Meow!" (override)']);
    this.status.set('Cat overrides sound() \u2192 "Meow!" \u{1F431}');
    await this.sleep(1200);
    this.status.set("Each subclass provides its OWN behavior for sound()! \u2705");
    this.activeNode.set("");
    this.isAnimating.set(false);
  }
  resetDemo() {
    this.activeNode.set("");
    this.dogFields.set(["+ breed: String", "+ fetch(): void"]);
    this.catFields.set(["+ indoor: boolean", "+ purr(): void"]);
    this.status.set("Animal is the superclass. Dog and Cat extend it.");
    this.isAnimating.set(false);
  }
  static \u0275fac = function InheritanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InheritanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InheritanceComponent, selectors: [["app-topic-inheritance"]], decls: 161, vars: 26, consts: [["title", "Inheritance", "subtitle", "Learn how classes can extend other classes to inherit fields and methods, enabling code reuse and hierarchical modeling.", "badge", "CORE JAVA", "gradient", "linear-gradient(135deg, #b45309, #f59e0b)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [1, "sub-heading"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-amber", 3, "size"], [1, "tree"], [1, "tree-node", "root"], [1, "node-name"], [1, "node-fields"], [1, "node-field"], [1, "tree-line"], [1, "tree-branch"], [1, "tree-child"], [1, "tree-line-v"], [1, "tree-node"], [1, "node-field", 3, "override"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-amber", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-purple", 3, "click", "disabled"], ["name", "layers", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-amber", 3, "size"], [1, "use-cases"], [1, "use-case", "amber"], [1, "use-num", "amber-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"]], template: function InheritanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Inheritance? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Inheritance");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is a mechanism where a new class (");
      \u0275\u0275elementStart(10, "strong");
      \u0275\u0275text(11, "subclass");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ") acquires the properties and behavior of an existing class (");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14, "superclass");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, "). Java uses the ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "extends");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, ' keyword to establish this "is-a" relationship. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "strong");
      \u0275\u0275text(22, "Code Reuse:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Subclasses inherit all non-private fields and methods from the superclass.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "li")(25, "strong");
      \u0275\u0275text(26, "Method Overriding:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Subclasses can provide their own implementation of a superclass method using ");
      \u0275\u0275elementStart(28, "code");
      \u0275\u0275text(29, "@Override");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "li")(32, "strong");
      \u0275\u0275text(33, "super keyword:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " Calls the superclass constructor or methods explicitly.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "li")(36, "strong");
      \u0275\u0275text(37, "Single Inheritance:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Java classes can only extend one class (use interfaces for multiple).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "h4", 5);
      \u0275\u0275text(40, "Basic Inheritance");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "app-code-block", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "section", 1)(43, "div", 7)(44, "h3", 8);
      \u0275\u0275element(45, "app-icon", 9);
      \u0275\u0275text(46, " Class Hierarchy Visualizer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 10)(48, "div", 11)(49, "span", 12);
      \u0275\u0275text(50, "Animal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 13);
      \u0275\u0275repeaterCreate(52, InheritanceComponent_For_53_Template, 2, 1, "span", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "div", 15);
      \u0275\u0275elementStart(55, "div", 16)(56, "div", 17);
      \u0275\u0275element(57, "div", 18);
      \u0275\u0275elementStart(58, "div", 19)(59, "span", 12);
      \u0275\u0275text(60, "Dog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 13);
      \u0275\u0275repeaterCreate(62, InheritanceComponent_For_63_Template, 2, 3, "span", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 17);
      \u0275\u0275element(65, "div", 18);
      \u0275\u0275elementStart(66, "div", 19)(67, "span", 12);
      \u0275\u0275text(68, "Cat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 13);
      \u0275\u0275repeaterCreate(70, InheritanceComponent_For_71_Template, 2, 3, "span", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 21);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 22)(75, "button", 23);
      \u0275\u0275listener("click", function InheritanceComponent_Template_button_click_75_listener() {
        return ctx.showInheritance();
      });
      \u0275\u0275element(76, "app-icon", 24);
      \u0275\u0275text(77, " Show Inheritance Chain ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 25);
      \u0275\u0275listener("click", function InheritanceComponent_Template_button_click_78_listener() {
        return ctx.showOverride();
      });
      \u0275\u0275element(79, "app-icon", 26);
      \u0275\u0275text(80, " Show Method Override ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 27);
      \u0275\u0275listener("click", function InheritanceComponent_Template_button_click_81_listener() {
        return ctx.resetDemo();
      });
      \u0275\u0275element(82, "app-icon", 28);
      \u0275\u0275text(83, " Reset ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "section", 1)(85, "h2", 2);
      \u0275\u0275element(86, "app-icon", 29);
      \u0275\u0275text(87, " Key Patterns ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 30)(89, "div", 31)(90, "h3", 32);
      \u0275\u0275element(91, "app-icon", 33);
      \u0275\u0275text(92, " Method Overriding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p", 34);
      \u0275\u0275text(94, "Subclass provides its own version of an inherited method.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 31)(97, "h3", 32);
      \u0275\u0275element(98, "app-icon", 33);
      \u0275\u0275text(99, " super Keyword");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p", 34);
      \u0275\u0275text(101, "Access superclass constructor and methods explicitly.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 31)(104, "h3", 32);
      \u0275\u0275element(105, "app-icon", 33);
      \u0275\u0275text(106, " Constructor Chaining");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 34);
      \u0275\u0275text(108, "Superclass constructors are called before subclass constructors.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "app-code-block", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 31)(111, "h3", 32);
      \u0275\u0275element(112, "app-icon", 33);
      \u0275\u0275text(113, " instanceof Check");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 34);
      \u0275\u0275text(115, "Verify an object's type at runtime along the hierarchy.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "app-code-block", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "section", 1)(118, "h2", 2);
      \u0275\u0275element(119, "app-icon", 35);
      \u0275\u0275text(120, " Real-Time Use Cases ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 36)(122, "div", 37)(123, "div", 38);
      \u0275\u0275text(124, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div")(126, "h4", 39);
      \u0275\u0275text(127, "Exception Hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p", 40);
      \u0275\u0275text(129, "Java's entire exception system is built on inheritance: ");
      \u0275\u0275elementStart(130, "code");
      \u0275\u0275text(131, "Throwable \u2192 Exception \u2192 RuntimeException \u2192 NullPointerException");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, ". Catching a parent catches all children.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "div", 41)(134, "div", 42);
      \u0275\u0275text(135, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div")(137, "h4", 39);
      \u0275\u0275text(138, "Spring Controller Hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p", 40);
      \u0275\u0275text(140, "A ");
      \u0275\u0275elementStart(141, "code");
      \u0275\u0275text(142, "BaseController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, " with common error handling logic can be extended by ");
      \u0275\u0275elementStart(144, "code");
      \u0275\u0275text(145, "UserController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(146, ", ");
      \u0275\u0275elementStart(147, "code");
      \u0275\u0275text(148, "OrderController");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, ", etc. \u2014 eliminating duplicate code.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "div", 43)(151, "div", 44);
      \u0275\u0275text(152, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div")(154, "h4", 39);
      \u0275\u0275text(155, "GUI Component Trees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p", 40);
      \u0275\u0275text(157, "Swing/JavaFX components form deep hierarchies: ");
      \u0275\u0275elementStart(158, "code");
      \u0275\u0275text(159, "Component \u2192 Container \u2192 JPanel \u2192 CustomPanel");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, ". Each level adds behavior while inheriting core rendering.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(38);
      \u0275\u0275property("code", ctx.codeBasic);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeNode() === "animal");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.animalFields());
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.activeNode() === "dog");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.dogFields());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeNode() === "cat");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.catFields());
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
      \u0275\u0275property("code", ctx.codeOverride);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSuper);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeChaining);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeInstanceof);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #d97706;\n}\n.sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tree[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tree-node[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n  transition: all 0.3s;\n}\n.tree-node.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);\n}\n.tree-node.root[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.node-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 6px;\n}\n.node-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.node-field[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: #64748b;\n  font-family: "JetBrains Mono", monospace;\n}\n.node-field.override[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 700;\n}\n.tree-line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: #cbd5e1;\n}\n.tree-branch[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.tree-child[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tree-line-v[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: #cbd5e1;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-purple[_ngcontent-%COMP%] {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.amber[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fde68a;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.amber-bg[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=inheritance.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InheritanceComponent, [{
    type: Component,
    args: [{ selector: "app-topic-inheritance", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout
      title="Inheritance"
      subtitle="Learn how classes can extend other classes to inherit fields and methods, enabling code reuse and hierarchical modeling."
      badge="CORE JAVA"
      gradient="linear-gradient(135deg, #b45309, #f59e0b)">

      <section class="section">
        <h2 class="section-heading">
          <app-icon name="book-open" [size]="28" css="icon-amber" /> What is Inheritance?
        </h2>
        <div class="prose">
          <p>
            <strong>Inheritance</strong> is a mechanism where a new class (<strong>subclass</strong>) acquires the properties and behavior of an existing class (<strong>superclass</strong>). Java uses the <code>extends</code> keyword to establish this "is-a" relationship.
          </p>
          <ul>
            <li><strong>Code Reuse:</strong> Subclasses inherit all non-private fields and methods from the superclass.</li>
            <li><strong>Method Overriding:</strong> Subclasses can provide their own implementation of a superclass method using <code>&#64;Override</code>.</li>
            <li><strong>super keyword:</strong> Calls the superclass constructor or methods explicitly.</li>
            <li><strong>Single Inheritance:</strong> Java classes can only extend one class (use interfaces for multiple).</li>
          </ul>
          <h4 class="sub-heading">Basic Inheritance</h4>
          <app-code-block [code]="codeBasic" />
        </div>
      </section>

      <!-- Interactive Visualizer -->
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title">
            <app-icon name="play" [size]="22" css="icon-amber" /> Class Hierarchy Visualizer
          </h3>

          <div class="tree">
            <div class="tree-node root" [class.active]="activeNode() === 'animal'">
              <span class="node-name">Animal</span>
              <div class="node-fields">
                @for (f of animalFields(); track f) {
                  <span class="node-field">{{ f }}</span>
                }
              </div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-branch">
              <div class="tree-child">
                <div class="tree-line-v"></div>
                <div class="tree-node" [class.active]="activeNode() === 'dog'">
                  <span class="node-name">Dog</span>
                  <div class="node-fields">
                    @for (f of dogFields(); track f) {
                      <span class="node-field" [class.override]="f.includes('override')">{{ f }}</span>
                    }
                  </div>
                </div>
              </div>
              <div class="tree-child">
                <div class="tree-line-v"></div>
                <div class="tree-node" [class.active]="activeNode() === 'cat'">
                  <span class="node-name">Cat</span>
                  <div class="node-fields">
                    @for (f of catFields(); track f) {
                      <span class="node-field" [class.override]="f.includes('override')">{{ f }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="viz-status">{{ status() }}</div>

          <div class="viz-controls">
            <button (click)="showInheritance()" [disabled]="isAnimating()" class="btn btn-amber">
              <app-icon name="play" [size]="16" /> Show Inheritance Chain
            </button>
            <button (click)="showOverride()" [disabled]="isAnimating()" class="btn btn-purple">
              <app-icon name="layers" [size]="16" /> Show Method Override
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
          <app-icon name="code" [size]="28" css="icon-indigo" /> Key Patterns
        </h2>
        <div class="op-grid">
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Method Overriding</h3>
            <p class="op-desc">Subclass provides its own version of an inherited method.</p>
            <app-code-block [code]="codeOverride" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> super Keyword</h3>
            <p class="op-desc">Access superclass constructor and methods explicitly.</p>
            <app-code-block [code]="codeSuper" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructor Chaining</h3>
            <p class="op-desc">Superclass constructors are called before subclass constructors.</p>
            <app-code-block [code]="codeChaining" />
          </div>
          <div class="op-card">
            <h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> instanceof Check</h3>
            <p class="op-desc">Verify an object's type at runtime along the hierarchy.</p>
            <app-code-block [code]="codeInstanceof" />
          </div>
        </div>
      </section>

      <!-- Use Cases -->
      <section class="section">
        <h2 class="section-heading">
          <app-icon name="briefcase" [size]="28" css="icon-amber" /> Real-Time Use Cases
        </h2>
        <div class="use-cases">
          <div class="use-case amber">
            <div class="use-num amber-bg">1</div>
            <div>
              <h4 class="use-title">Exception Hierarchy</h4>
              <p class="use-desc">Java's entire exception system is built on inheritance: <code>Throwable \u2192 Exception \u2192 RuntimeException \u2192 NullPointerException</code>. Catching a parent catches all children.</p>
            </div>
          </div>
          <div class="use-case blue">
            <div class="use-num blue-bg">2</div>
            <div>
              <h4 class="use-title">Spring Controller Hierarchy</h4>
              <p class="use-desc">A <code>BaseController</code> with common error handling logic can be extended by <code>UserController</code>, <code>OrderController</code>, etc. \u2014 eliminating duplicate code.</p>
            </div>
          </div>
          <div class="use-case purple">
            <div class="use-num purple-bg">3</div>
            <div>
              <h4 class="use-title">GUI Component Trees</h4>
              <p class="use-desc">Swing/JavaFX components form deep hierarchies: <code>Component \u2192 Container \u2192 JPanel \u2192 CustomPanel</code>. Each level adds behavior while inheriting core rendering.</p>
            </div>
          </div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;7ddcc180aecdaed1b8f56449893e5529945fee8a5591d4c659625a77a1271891;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/inheritance.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #d97706;\n}\n.sub-heading {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 24px 0 8px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tree {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tree-node {\n  padding: 14px 20px;\n  background: #fff;\n  border: 2px solid #e2e8f0;\n  border-radius: 12px;\n  text-align: center;\n  min-width: 140px;\n  transition: all 0.3s;\n}\n.tree-node.active {\n  border-color: #d97706;\n  background: #fffbeb;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);\n}\n.tree-node.root {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.node-name {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 800;\n  color: #0f172a;\n  font-family: "JetBrains Mono", monospace;\n  margin-bottom: 6px;\n}\n.node-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.node-field {\n  font-size: 0.62rem;\n  color: #64748b;\n  font-family: "JetBrains Mono", monospace;\n}\n.node-field.override {\n  color: #dc2626;\n  font-weight: 700;\n}\n.tree-line {\n  width: 2px;\n  height: 20px;\n  background: #cbd5e1;\n}\n.tree-branch {\n  display: flex;\n  gap: 32px;\n}\n.tree-child {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tree-line-v {\n  width: 2px;\n  height: 20px;\n  background: #cbd5e1;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-amber:hover:not(:disabled) {\n  background: #b45309;\n}\n.btn-purple {\n  background: #7c3aed;\n  color: #fff;\n}\n.btn-purple:hover:not(:disabled) {\n  background: #6d28d9;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-gray:hover:not(:disabled) {\n  background: #cbd5e1;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.amber {\n  background: #fffbeb;\n  border-color: #fde68a;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.amber-bg {\n  background: #f59e0b;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=inheritance.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InheritanceComponent, { className: "InheritanceComponent", filePath: "src/app/features/tutorials/topics/inheritance.component.ts", lineNumber: 215 });
})();
export {
  InheritanceComponent
};
//# sourceMappingURL=chunk-7SHN36JK.js.map
