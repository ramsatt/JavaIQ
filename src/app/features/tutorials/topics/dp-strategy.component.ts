import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-strategy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpStrategyComponent {
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
  codeEnum = `// Enum strategy — compile-time safe
enum SortStrategy {
    BY_NAME  { Comparator<User> comparator() { return Comparator.comparing(User::name); } },
    BY_AGE   { Comparator<User> comparator() { return Comparator.comparing(User::age); } },
    BY_EMAIL { Comparator<User> comparator() { return Comparator.comparing(User::email); } };

    abstract Comparator<User> comparator();
}

users.sort(SortStrategy.BY_NAME.comparator());`;
}
