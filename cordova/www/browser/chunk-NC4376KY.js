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

// src/app/features/tutorials/topics/dp-builder.component.ts
var DpBuilderComponent = class _DpBuilderComponent {
  codeIntro = `// \u274C Telescoping constructors
new User("John", "Doe", 30, "john@mail.com", "NYC", true, false);
// What does 'true' and 'false' mean?

// \u2705 Builder pattern
User user = User.builder()
    .firstName("John").lastName("Doe")
    .age(30).email("john@mail.com")
    .city("NYC").verified(true)
    .build();`;
  codeClassic = `public class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final String body;

    private HttpRequest(Builder b) {
        this.url = b.url; this.method = b.method;
        this.headers = Map.copyOf(b.headers); this.body = b.body;
    }

    public static class Builder {
        private final String url;                     // required
        private String method = "GET";                // default
        private Map<String, String> headers = new HashMap<>();
        private String body;

        public Builder(String url) { this.url = url; }
        public Builder method(String m) { method = m; return this; }
        public Builder header(String k, String v) { headers.put(k, v); return this; }
        public Builder body(String b) { body = b; return this; }
        public HttpRequest build() { return new HttpRequest(this); }
    }
}`;
  codeRecord = `// Java 16+ records with builder
public record UserDTO(String name, String email, int age) {
    public static Builder builder() { return new Builder(); }

    public static class Builder {
        private String name, email;
        private int age;
        public Builder name(String n) { name = n; return this; }
        public Builder email(String e) { email = e; return this; }
        public Builder age(int a) { age = a; return this; }
        public UserDTO build() { return new UserDTO(name, email, age); }
    }
}

UserDTO dto = UserDTO.builder()
    .name("Alice").email("alice@mail.com").age(25)
    .build();`;
  codeLombok = `// Lombok @Builder \u2014 zero boilerplate!
@Builder
@Value  // immutable
public class Order {
    Long id;
    String product;
    int quantity;
    @Builder.Default BigDecimal price = BigDecimal.ZERO;
    @Singular List<String> tags;  // add one at a time
}

Order order = Order.builder()
    .product("Laptop").quantity(1)
    .price(new BigDecimal("999.99"))
    .tag("electronics").tag("sale")
    .build();`;
  codeStep = `// Step Builder \u2014 enforces required fields at compile time
interface BuildStep { Order build(); }
interface QuantityStep { BuildStep quantity(int q); }
interface ProductStep { QuantityStep product(String p); }

public class OrderBuilder implements ProductStep, QuantityStep, BuildStep {
    private String product; private int quantity;
    public static ProductStep create() { return new OrderBuilder(); }
    public QuantityStep product(String p) { product = p; return this; }
    public BuildStep quantity(int q) { quantity = q; return this; }
    public Order build() { return new Order(product, quantity); }
}

// Must call in order:
Order o = OrderBuilder.create().product("Phone").quantity(2).build();`;
  static \u0275fac = function DpBuilderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpBuilderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpBuilderComponent, selectors: [["app-topic-dp-builder"]], decls: 33, vars: 7, consts: [["title", "Builder", "subtitle", "Step-by-step object construction. Fluent API, immutable objects, and Lombok @Builder.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpBuilderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Builder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Builder");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern constructs complex objects step by step with a fluent API. Avoids telescoping constructors.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic Builder");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Record Builder");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Lombok");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Step Builder");
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
      \u0275\u0275property("code", ctx.codeRecord);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLombok);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStep);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-builder.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpBuilderComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-builder", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Builder" subtitle="Step-by-step object construction. Fluent API, immutable objects, and Lombok @Builder." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Builder</h2>
        <div class="prose"><p>The <strong>Builder</strong> pattern constructs complex objects step by step with a fluent API. Avoids telescoping constructors.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic Builder</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Record Builder</h3><app-code-block [code]="codeRecord" /></div>
          <div class="op-card"><h3 class="op-title">Lombok</h3><app-code-block [code]="codeLombok" /></div>
          <div class="op-card"><h3 class="op-title">Step Builder</h3><app-code-block [code]="codeStep" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;be89a878d7fde9fd1e193ab701e806fec8898d17827fb12905606abf051d9913;D:/A21/JavaIQ/src/app/features/tutorials/topics/dp-builder.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-builder.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpBuilderComponent, { className: "DpBuilderComponent", filePath: "src/app/features/tutorials/topics/dp-builder.component.ts", lineNumber: 33 });
})();
export {
  DpBuilderComponent
};
//# sourceMappingURL=chunk-NC4376KY.js.map
