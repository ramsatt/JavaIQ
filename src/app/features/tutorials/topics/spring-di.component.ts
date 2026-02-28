import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-di',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Dependency Injection" subtitle="Let Spring wire your objects. Master constructor, setter, and field injection — and know when to use each." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #15803d, #86efac)">
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
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Constructor Injection</h3><p class="op-desc">Best practice — immutable, required dependencies.</p><app-code-block [code]="codeConstructor" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Qualifiers</h3><p class="op-desc">Resolve ambiguity when multiple beans of same type exist.</p><app-code-block [code]="codeQualifier" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Optional Dependencies</h3><p class="op-desc">Handle optional beans gracefully.</p><app-code-block [code]="codeOptional" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Collection Injection</h3><p class="op-desc">Inject all implementations of an interface.</p><app-code-block [code]="codeCollection" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-green" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case green"><div class="use-num green-bg">1</div><div><h4 class="use-title">Service Layer Wiring</h4><p class="use-desc"><code>OrderService</code> depends on <code>PaymentService</code>, <code>InventoryService</code>, <code>NotificationService</code> — all injected via constructor. Zero manual wiring.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Strategy Pattern with DI</h4><p class="use-desc">Inject <code>List&lt;PaymentStrategy&gt;</code> to get all payment methods automatically. Adding a new strategy requires zero changes to existing code.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Unit Testing with Mocks</h4><p class="use-desc">Constructor injection makes testing trivial: <code>new UserService(mockRepo)</code> — no Spring context needed, pure unit test.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #16a34a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .inject-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
    .inject-card { padding: 16px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; }
    .inject-card.active { transform: scale(1.03); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .inject-card.best.active { border-color: #16a34a; background: #f0fdf4; } .inject-card.ok.active { border-color: #d97706; background: #fffbeb; } .inject-card.avoid.active { border-color: #dc2626; background: #fef2f2; }
    .inject-badge { display: block; font-size: 0.5rem; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 4px; }
    .inject-card.best .inject-badge { color: #16a34a; } .inject-card.ok .inject-badge { color: #d97706; } .inject-card.avoid .inject-badge { color: #dc2626; }
    .inject-name { display: block; font-size: 0.78rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; } .inject-desc { display: block; font-size: 0.6rem; color: #64748b; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.04); } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.green { background: #f0fdf4; border-color: #86efac; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #faf5ff; border-color: #d8b4fe; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .green-bg { background: #16a34a; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringDiComponent {
  activeType = signal('');
  status = signal('Click an injection type to learn more about it.');
  injectionTypes = signal([
    { name: 'Constructor', badge: '✅ RECOMMENDED', desc: 'Immutable, testable, required deps', rating: 'best' },
    { name: 'Setter', badge: '⚠️ OPTIONAL USE', desc: 'Mutable, optional dependencies', rating: 'ok' },
    { name: 'Field', badge: '❌ DISCOURAGED', desc: 'Hidden deps, hard to test', rating: 'avoid' }
  ]);

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

    // Single constructor — @Autowired is optional!
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

  selectType(name: string) {
    this.activeType.set(name);
    const details: Record<string, string> = {
      'Constructor': 'Constructor injection: immutable fields, required deps, easy to test. USE THIS! ✅',
      'Setter': 'Setter injection: mutable, good for optional deps. Use sparingly. ⚠️',
      'Field': 'Field injection: hidden dependencies, impossible to unit test without reflection. AVOID! ❌'
    };
    this.status.set(details[name] ?? '');
  }
}
