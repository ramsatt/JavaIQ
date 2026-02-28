import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-factory',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpFactoryComponent {
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
  codeMethod = `// Factory Method — subclasses decide what to create
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
  codeAbstract = `// Abstract Factory — family of related objects
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
}
