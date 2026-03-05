import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-strategy.component.ts
var DpStrategyComponent = class _DpStrategyComponent {
  codeIntro = `// Without strategy: if-else or switch
BigDecimal calculate(Order o) {
    if (type.equals("express")) return base.multiply(1.5);
    else if (type.equals("overnight")) return base.multiply(2.0);
    // more and more branches...
}

// With strategy: each algorithm is a separate class
ShippingCalculator calc = new ExpressShipping();
BigDecimal cost = calc.calculate(order);`;
  codeClassic = `interface PaymentStrategy {
    void pay(BigDecimal amount);
}

class CreditCard implements PaymentStrategy {
    public void pay(BigDecimal amount) {
        // charge credit card
    }
}
class PayPal implements PaymentStrategy {
    public void pay(BigDecimal amount) {
        // PayPal API call
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy strategy;
    public void setStrategy(PaymentStrategy s) { strategy = s; }
    public void checkout(BigDecimal total) { strategy.pay(total); }
}

cart.setStrategy(new CreditCard());
cart.checkout(total);`;
  codeFunctional = `// Java functional strategy (no classes needed!)
// Strategy = Function/Consumer/Predicate

Map<String, Function<BigDecimal, BigDecimal>> discounts = Map.of(
    "none",    price -> price,
    "student", price -> price.multiply(new BigDecimal("0.8")),
    "vip",     price -> price.multiply(new BigDecimal("0.7"))
);

BigDecimal finalPrice = discounts.get("student").apply(price);

// Sorting strategies
List<User> users = new ArrayList<>(userList);
users.sort(Comparator.comparing(User::name));
users.sort(Comparator.comparing(User::age).reversed());`;
  codeSpring = `// Spring DI-based strategy (auto-discovered!)
interface NotificationStrategy {
    String getType();
    void send(String message, String to);
}

@Component class EmailStrategy implements NotificationStrategy {
    public String getType() { return "email"; }
    public void send(String msg, String to) { /* email */ }
}
@Component class SmsStrategy implements NotificationStrategy {
    public String getType() { return "sms"; }
    public void send(String msg, String to) { /* sms */ }
}

@Service
class NotificationService {
    private final Map<String, NotificationStrategy> strategies;
    public NotificationService(List<NotificationStrategy> list) {
        strategies = list.stream().collect(
            Collectors.toMap(NotificationStrategy::getType, s -> s));
    }
    public void notify(String type, String msg, String to) {
        strategies.get(type).send(msg, to);
    }
}`;
  codeEnum = `// Enum strategy \u2014 compile-time safe
enum SortStrategy {
    BY_NAME  { Comparator<User> comparator() { return Comparator.comparing(User::name); } },
    BY_AGE   { Comparator<User> comparator() { return Comparator.comparing(User::age); } },
    BY_EMAIL { Comparator<User> comparator() { return Comparator.comparing(User::email); } };

    abstract Comparator<User> comparator();
}

users.sort(SortStrategy.BY_NAME.comparator());`;
  static \u0275fac = function DpStrategyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpStrategyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpStrategyComponent, selectors: [["app-topic-dp-strategy"]], decls: 33, vars: 7, consts: [["title", "Strategy", "subtitle", "Interchangeable algorithms. Strategy interfaces, functional approach, and runtime switching.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #065f46, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpStrategyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern defines a family of algorithms, encapsulates each, and makes them interchangeable at runtime.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Implementations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Spring DI");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Enum Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeClassic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEnum);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-strategy.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpStrategyComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-strategy", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Strategy" subtitle="Interchangeable algorithms. Strategy interfaces, functional approach, and runtime switching." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Strategy</h2>
        <div class="prose"><p>The <strong>Strategy</strong> pattern defines a family of algorithms, encapsulates each, and makes them interchangeable at runtime.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Spring DI</h3><app-code-block [code]="codeSpring" /></div>
          <div class="op-card"><h3 class="op-title">Enum Strategy</h3><app-code-block [code]="codeEnum" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;2af45e24d5723a362d7e482ed60c327f114812634e16647db885d2da64291dab;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/dp-strategy.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-strategy.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpStrategyComponent, { className: "DpStrategyComponent", filePath: "src/app/features/tutorials/topics/dp-strategy.component.ts", lineNumber: 33 });
})();
export {
  DpStrategyComponent
};
//# sourceMappingURL=chunk-3STV6GHM.js.map
