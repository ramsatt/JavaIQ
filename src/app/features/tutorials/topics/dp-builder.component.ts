import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-builder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpBuilderComponent {
  codeIntro = `// ❌ Telescoping constructors
new User("John", "Doe", 30, "john@mail.com", "NYC", true, false);
// What does 'true' and 'false' mean?

// ✅ Builder pattern
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
  codeLombok = `// Lombok @Builder — zero boilerplate!
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
  codeStep = `// Step Builder — enforces required fields at compile time
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
}
