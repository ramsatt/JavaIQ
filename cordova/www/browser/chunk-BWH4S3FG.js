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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-factory.component.ts
var DpFactoryComponent = class _DpFactoryComponent {
  codeIntro = `// Without factory: client knows ALL implementations
Payment p = new CreditCardPayment();  // tightly coupled!

// With factory: client only knows the interface
Payment p = PaymentFactory.create("credit");

// Real-world: JDBC DriverManager, DocumentBuilderFactory`;
  codeSimple = `// Simple Factory (static method)
public class NotificationFactory {
    public static Notification create(String type) {
        return switch (type) {
            case "email" -> new EmailNotification();
            case "sms"   -> new SmsNotification();
            case "push"  -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown: " + type);
        };
    }
}

// Usage
Notification n = NotificationFactory.create("email");
n.send("Hello!");`;
  codeMethod = `// Factory Method \u2014 subclasses decide what to create
public abstract class Document {
    public abstract Page createPage();  // factory method

    public void addPage() {
        Page page = createPage();  // delegates to subclass
        pages.add(page);
    }
}

public class Resume extends Document {
    public Page createPage() {
        return new SkillsPage();
    }
}

public class Report extends Document {
    public Page createPage() {
        return new ChartPage();
    }
}`;
  codeAbstract = `// Abstract Factory \u2014 family of related objects
public interface UIFactory {
    Button createButton();
    TextField createTextField();
    Checkbox createCheckbox();
}

public class DarkThemeFactory implements UIFactory {
    public Button createButton() { return new DarkButton(); }
    public TextField createTextField() { return new DarkTextField(); }
    public Checkbox createCheckbox() { return new DarkCheckbox(); }
}

public class LightThemeFactory implements UIFactory {
    public Button createButton() { return new LightButton(); }
    // ...
}`;
  codeFunctional = `// Modern Java: use Supplier/Function as factories
Map<String, Supplier<Notification>> factories = Map.of(
    "email", EmailNotification::new,
    "sms",   SmsNotification::new,
    "push",  PushNotification::new
);

Notification n = factories.get("email").get();

// With parameters:
Map<String, Function<Config, Notification>> factories = Map.of(
    "email", EmailNotification::new,
    "sms",   SmsNotification::new
);

Notification n = factories.get("email").apply(config);`;
  static \u0275fac = function DpFactoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpFactoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpFactoryComponent, selectors: [["app-topic-dp-factory"]], decls: 33, vars: 7, consts: [["title", "Factory Method", "subtitle", "Delegate object creation. Factory method, abstract factory, and Spring's FactoryBean.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpFactoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Factory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Factory Method");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern delegates object creation to subclasses or factory classes, decoupling clients from concrete implementations.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Simple Factory");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Factory Method");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Abstract Factory");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Functional Factory");
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
      \u0275\u0275property("code", ctx.codeSimple);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMethod);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAbstract);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeFunctional);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-factory.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpFactoryComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-factory", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Factory Method" subtitle="Delegate object creation. Factory method, abstract factory, and Spring's FactoryBean." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Factory</h2>
        <div class="prose"><p>The <strong>Factory Method</strong> pattern delegates object creation to subclasses or factory classes, decoupling clients from concrete implementations.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Simple Factory</h3><app-code-block [code]="codeSimple" /></div>
          <div class="op-card"><h3 class="op-title">Factory Method</h3><app-code-block [code]="codeMethod" /></div>
          <div class="op-card"><h3 class="op-title">Abstract Factory</h3><app-code-block [code]="codeAbstract" /></div>
          <div class="op-card"><h3 class="op-title">Functional Factory</h3><app-code-block [code]="codeFunctional" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;D:/A21/JavaIQ/src/app/features/tutorials/topics/dp-factory.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-factory.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpFactoryComponent, { className: "DpFactoryComponent", filePath: "src/app/features/tutorials/topics/dp-factory.component.ts", lineNumber: 33 });
})();
export {
  DpFactoryComponent
};
//# sourceMappingURL=chunk-BWH4S3FG.js.map
