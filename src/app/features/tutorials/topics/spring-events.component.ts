import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Events & Listeners" subtitle="Decouple components with the publish-subscribe pattern." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Spring Events</h2>
        <div class="prose">
          <p><strong>Spring Events</strong> enable loose coupling. Publishers don't know about listeners.</p>
          <ul>
            <li><strong>ApplicationEventPublisher:</strong> Publishes events from any bean.</li>
            <li><strong>&#64;EventListener:</strong> Handles events. Synchronous by default.</li>
            <li><strong>&#64;Async:</strong> Non-blocking event processing.</li>
            <li><strong>&#64;TransactionalEventListener:</strong> Process after transaction commits.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-amber" /> Event Flow</h3>
          <div class="event-flow">
            <div class="evt-box" [class.active]="step() >= 1">Publisher</div>
            <div class="evt-arrow" [class.visible]="step() >= 2">📢→</div>
            <div class="evt-box" [class.active]="step() >= 2">Event</div>
            <div class="evt-arrow" [class.visible]="step() >= 3">→</div>
            <div class="evt-listeners">
              <div class="evt-box small" [class.active]="step() >= 3">📧 Email</div>
              <div class="evt-box small" [class.active]="step() >= 4">📊 Analytics</div>
              <div class="evt-box small" [class.active]="step() >= 5">📝 Audit</div>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runFlow()" [disabled]="anim()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Publish Event</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Event Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Events</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">&#64;EventListener</h3><app-code-block [code]="codeListener" /></div>
          <div class="op-card"><h3 class="op-title">Async Events</h3><app-code-block [code]="codeAsync" /></div>
          <div class="op-card"><h3 class="op-title">Transactional Events</h3><app-code-block [code]="codeTx" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .event-flow { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; justify-content: center; }
    .evt-box { padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; font-weight: 700; transition: all 0.3s; } .evt-box.active { border-color: #d97706; background: #fffbeb; } .evt-box.small { padding: 6px 10px; font-size: 0.6rem; }
    .evt-arrow { opacity: 0; transition: opacity 0.3s; } .evt-arrow.visible { opacity: 1; } .evt-listeners { display: flex; flex-direction: column; gap: 4px; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; } .btn:disabled { opacity: 0.5; } .btn-amber { background: #d97706; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SpringEventsComponent {
  step = signal(0); status = signal('Click Publish Event to see the flow.'); anim = signal(false);
  codeIntro = `public record UserCreatedEvent(Long userId, String email) {}

@Service
public class UserService {
    @Autowired ApplicationEventPublisher publisher;
    public User create(UserDTO dto) {
        User user = repo.save(map(dto));
        publisher.publishEvent(new UserCreatedEvent(user.getId(), user.getEmail()));
        return user;
    }
}

@Component
public class WelcomeEmailListener {
    @EventListener
    public void on(UserCreatedEvent e) { emailService.sendWelcome(e.email()); }
}`;
  codeCustom = `public record OrderPlacedEvent(Long orderId, BigDecimal amount, String email) {}

@Service
public class OrderService {
    @Autowired ApplicationEventPublisher pub;
    @Transactional
    public Order place(OrderRequest req) {
        Order order = processOrder(req);
        pub.publishEvent(new OrderPlacedEvent(order.getId(), order.getTotal(), req.getEmail()));
        return order;
    }
}`;
  codeListener = `@Component
public class OrderListeners {
    @EventListener
    public void sendEmail(OrderPlacedEvent e) { emailService.sendConfirmation(e.email()); }

    @EventListener
    public void trackAnalytics(OrderPlacedEvent e) { analytics.trackRevenue(e.amount()); }

    @EventListener(condition = "#event.amount > 1000")
    public void alertHighValue(OrderPlacedEvent event) { slack.alert("High-value order!"); }
}`;
  codeAsync = `@Configuration @EnableAsync
public class AsyncConfig {}

@Component
public class AsyncListeners {
    @Async @EventListener
    public void sendEmailAsync(UserCreatedEvent e) {
        // Runs in separate thread — non-blocking!
        emailService.sendWelcome(e.email());
    }
}`;
  codeTx = `@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
public void afterCommit(OrderPlacedEvent e) {
    // Only runs if transaction committed
    notificationService.send(e);
}

@TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
public void onRollback(OrderPlacedEvent e) {
    log.warn("Order failed: " + e.orderId());
}`;
  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runFlow() {
    if (this.anim()) return; this.anim.set(true);
    this.step.set(1); this.status.set('Publishing event...'); await this.sleep(700);
    this.step.set(2); this.status.set('UserCreatedEvent dispatched...'); await this.sleep(700);
    this.step.set(3); this.status.set('📧 Email listener triggered...'); await this.sleep(600);
    this.step.set(4); this.status.set('📊 Analytics listener triggered...'); await this.sleep(600);
    this.step.set(5); this.status.set('📝 All listeners done! ✅'); this.anim.set(false);
  }
  reset() { this.step.set(0); this.status.set('Click Publish Event to see the flow.'); this.anim.set(false); }
}
