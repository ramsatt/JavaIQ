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
  ɵɵclassProp,
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
  ɵɵtextInterpolate
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-di.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SpringDiComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SpringDiComponent_For_31_Template_div_click_0_listener() {
      const type_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectType(type_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(type_r2.rating);
    \u0275\u0275classProp("active", ctx_r2.activeType() === type_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r2.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r2.desc);
  }
}
var SpringDiComponent = class _SpringDiComponent {
  activeType = signal("", ...ngDevMode ? [{ debugName: "activeType" }] : []);
  status = signal("Click an injection type to learn more about it.", ...ngDevMode ? [{ debugName: "status" }] : []);
  injectionTypes = signal([
    { name: "Constructor", badge: "\u2705 RECOMMENDED", desc: "Immutable, testable, required deps", rating: "best" },
    { name: "Setter", badge: "\u26A0\uFE0F OPTIONAL USE", desc: "Mutable, optional dependencies", rating: "ok" },
    { name: "Field", badge: "\u274C DISCOURAGED", desc: "Hidden deps, hard to test", rating: "avoid" }
  ], ...ngDevMode ? [{ debugName: "injectionTypes" }] : []);
  codeIntro = `// WITHOUT DI (tightly coupled)
public class OrderService {
    private PaymentService pay = new PaymentService();
    // Can't swap implementations, can't unit test!
}

// WITH DI (loosely coupled)
@Service
public class OrderService {
    private final PaymentService pay;

    public OrderService(PaymentService pay) {
        this.pay = pay; // Spring injects!
    }
}`;
  codeConstructor = `@Service
public class OrderService {
    private final PaymentService paymentService;
    private final InventoryService inventoryService;

    // Single constructor \u2014 @Autowired is optional!
    public OrderService(
            PaymentService paymentService,
            InventoryService inventoryService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
    }
}`;
  codeQualifier = `// Two implementations of same interface
@Service("stripe")
public class StripePayment implements Payment { }

@Service("paypal")
public class PayPalPayment implements Payment { }

// Resolve ambiguity
@Service
public class OrderService {
    public OrderService(
        @Qualifier("stripe") Payment payment) {
        // Uses StripePayment
    }
}`;
  codeOptional = `@Service
public class NotificationService {
    private final EmailSender emailSender;
    private final SmsSender smsSender;  // optional

    public NotificationService(
        EmailSender emailSender,
        @Autowired(required = false)
        SmsSender smsSender) {
        this.emailSender = emailSender;
        this.smsSender = smsSender; // may be null
    }
}`;
  codeCollection = `@Service
public class PaymentProcessor {
    // Spring injects ALL Payment implementations!
    private final List<Payment> strategies;

    public PaymentProcessor(List<Payment> strategies) {
        this.strategies = strategies;
    }

    public Payment find(String type) {
        return strategies.stream()
            .filter(s -> s.supports(type))
            .findFirst()
            .orElseThrow();
    }
}`;
  selectType(name) {
    this.activeType.set(name);
    const details = {
      "Constructor": "Constructor injection: immutable fields, required deps, easy to test. USE THIS! \u2705",
      "Setter": "Setter injection: mutable, good for optional deps. Use sparingly. \u26A0\uFE0F",
      "Field": "Field injection: hidden dependencies, impossible to unit test without reflection. AVOID! \u274C"
    };
    this.status.set(details[name] ?? "");
  }
  static \u0275fac = function SpringDiComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringDiComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringDiComponent, selectors: [["app-topic-spring-di"]], decls: 113, vars: 14, consts: [["title", "Dependency Injection", "subtitle", "Let Spring wire your objects. Master constructor, setter, and field injection \u2014 and know when to use each.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #15803d, #86efac)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-green", 3, "size"], [1, "inject-grid"], [1, "inject-card", 3, "active", "class"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-green", 3, "size"], [1, "use-cases"], [1, "use-case", "green"], [1, "use-num", "green-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "inject-card", 3, "click"], [1, "inject-badge"], [1, "inject-name"], [1, "inject-desc"]], template: function SpringDiComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What is Dependency Injection?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Dependency Injection (DI)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " is a design pattern where objects receive their dependencies from an external source rather than creating them. Spring's IoC container provides three DI mechanisms:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Constructor Injection");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " (recommended): Dependencies via constructor parameters. Immutable, testable.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "Setter Injection:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Dependencies via setter methods. Optional dependencies.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Field Injection");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " (discouraged): Direct @Autowired on fields. Hard to test.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "section", 1)(25, "div", 6)(26, "h3", 7);
      \u0275\u0275element(27, "app-icon", 8);
      \u0275\u0275text(28, " Injection Type Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9);
      \u0275\u0275repeaterCreate(30, SpringDiComponent_For_31_Template, 7, 7, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 11);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "section", 1)(35, "h2", 2);
      \u0275\u0275element(36, "app-icon", 12);
      \u0275\u0275text(37, " DI Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 13)(39, "div", 14)(40, "h3", 15);
      \u0275\u0275element(41, "app-icon", 16);
      \u0275\u0275text(42, " Constructor Injection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 17);
      \u0275\u0275text(44, "Best practice \u2014 immutable, required dependencies.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 14)(47, "h3", 15);
      \u0275\u0275element(48, "app-icon", 16);
      \u0275\u0275text(49, " Qualifiers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 17);
      \u0275\u0275text(51, "Resolve ambiguity when multiple beans of same type exist.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 14)(54, "h3", 15);
      \u0275\u0275element(55, "app-icon", 16);
      \u0275\u0275text(56, " Optional Dependencies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 17);
      \u0275\u0275text(58, "Handle optional beans gracefully.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 14)(61, "h3", 15);
      \u0275\u0275element(62, "app-icon", 16);
      \u0275\u0275text(63, " Collection Injection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 17);
      \u0275\u0275text(65, "Inject all implementations of an interface.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "section", 1)(68, "h2", 2);
      \u0275\u0275element(69, "app-icon", 18);
      \u0275\u0275text(70, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 19)(72, "div", 20)(73, "div", 21);
      \u0275\u0275text(74, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div")(76, "h4", 22);
      \u0275\u0275text(77, "Service Layer Wiring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 23)(79, "code");
      \u0275\u0275text(80, "OrderService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(81, " depends on ");
      \u0275\u0275elementStart(82, "code");
      \u0275\u0275text(83, "PaymentService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(84, ", ");
      \u0275\u0275elementStart(85, "code");
      \u0275\u0275text(86, "InventoryService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, ", ");
      \u0275\u0275elementStart(88, "code");
      \u0275\u0275text(89, "NotificationService");
      \u0275\u0275elementEnd();
      \u0275\u0275text(90, " \u2014 all injected via constructor. Zero manual wiring.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 24)(92, "div", 25);
      \u0275\u0275text(93, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div")(95, "h4", 22);
      \u0275\u0275text(96, "Strategy Pattern with DI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 23);
      \u0275\u0275text(98, "Inject ");
      \u0275\u0275elementStart(99, "code");
      \u0275\u0275text(100, "List<PaymentStrategy>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(101, " to get all payment methods automatically. Adding a new strategy requires zero changes to existing code.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 26)(103, "div", 27);
      \u0275\u0275text(104, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div")(106, "h4", 22);
      \u0275\u0275text(107, "Unit Testing with Mocks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 23);
      \u0275\u0275text(109, "Constructor injection makes testing trivial: ");
      \u0275\u0275elementStart(110, "code");
      \u0275\u0275text(111, "new UserService(mockRepo)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, " \u2014 no Spring context needed, pure unit test.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(20);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.injectionTypes());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConstructor);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeQualifier);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOptional);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCollection);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.inject-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.inject-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.inject-card.active[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.inject-card.best.active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.inject-card.ok.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.inject-card.avoid.active[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.inject-badge[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin-bottom: 4px;\n}\n.inject-card.best[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.inject-card.ok[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.inject-card.avoid[_ngcontent-%COMP%]   .inject-badge[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.inject-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.inject-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6rem;\n  color: #64748b;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.green-bg[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-di.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringDiComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-di", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Dependency Injection" subtitle="Let Spring wire your objects. Master constructor, setter, and field injection \u2014 and know when to use each." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #15803d, #86efac)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> What is Dependency Injection?</h2>
        <div class="prose">
          <p><strong>Dependency Injection (DI)</strong> is a design pattern where objects receive their dependencies from an external source rather than creating them. Spring's IoC container provides three DI mechanisms:</p>
          <ul>
            <li><strong>Constructor Injection</strong> (recommended): Dependencies via constructor parameters. Immutable, testable.</li>
            <li><strong>Setter Injection:</strong> Dependencies via setter methods. Optional dependencies.</li>
            <li><strong>Field Injection</strong> (discouraged): Direct &#64;Autowired on fields. Hard to test.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> Injection Type Comparison</h3>
          <div class="inject-grid">
            @for (type of injectionTypes(); track type.name) {
              <div class="inject-card" [class.active]="activeType() === type.name" [class]="type.rating" (click)="selectType(type.name)">
                <span class="inject-badge">{{ type.badge }}</span>
                <span class="inject-name">{{ type.name }}</span>
                <span class="inject-desc">{{ type.desc }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> DI Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructor Injection</h3><p class="op-desc">Best practice \u2014 immutable, required dependencies.</p><app-code-block [code]="codeConstructor" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Qualifiers</h3><p class="op-desc">Resolve ambiguity when multiple beans of same type exist.</p><app-code-block [code]="codeQualifier" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Optional Dependencies</h3><p class="op-desc">Handle optional beans gracefully.</p><app-code-block [code]="codeOptional" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Collection Injection</h3><p class="op-desc">Inject all implementations of an interface.</p><app-code-block [code]="codeCollection" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-green" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case green"><div class="use-num green-bg">1</div><div><h4 class="use-title">Service Layer Wiring</h4><p class="use-desc"><code>OrderService</code> depends on <code>PaymentService</code>, <code>InventoryService</code>, <code>NotificationService</code> \u2014 all injected via constructor. Zero manual wiring.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Strategy Pattern with DI</h4><p class="use-desc">Inject <code>List&lt;PaymentStrategy&gt;</code> to get all payment methods automatically. Adding a new strategy requires zero changes to existing code.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Unit Testing with Mocks</h4><p class="use-desc">Constructor injection makes testing trivial: <code>new UserService(mockRepo)</code> \u2014 no Spring context needed, pure unit test.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;a8a4ae66016a045136615b718f9e86d92629b51bc73743a0e6b53a8babe320f8;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/spring-di.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.inject-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.inject-card {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.inject-card.active {\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.inject-card.best.active {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.inject-card.ok.active {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.inject-card.avoid.active {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.inject-badge {\n  display: block;\n  font-size: 0.5rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin-bottom: 4px;\n}\n.inject-card.best .inject-badge {\n  color: #16a34a;\n}\n.inject-card.ok .inject-badge {\n  color: #d97706;\n}\n.inject-card.avoid .inject-badge {\n  color: #dc2626;\n}\n.inject-name {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.inject-desc {\n  display: block;\n  font-size: 0.6rem;\n  color: #64748b;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.green {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.green-bg {\n  background: #16a34a;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-di.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringDiComponent, { className: "SpringDiComponent", filePath: "src/app/features/tutorials/topics/spring-di.component.ts", lineNumber: 76 });
})();
export {
  SpringDiComponent
};
//# sourceMappingURL=chunk-YMJVP7HT.js.map
