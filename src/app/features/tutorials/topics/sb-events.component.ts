import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Application Events" subtitle="Event-driven architecture in Spring Boot. Custom events, listeners, async processing, and boot startup events." badge="SPRING BOOT" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Boot Events</h2>
        <div class="prose">
          <p>Spring Boot publishes lifecycle events during startup. You can also create custom events for domain-driven design.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Boot Lifecycle Events</h3><app-code-block [code]="codeLifecycle" /></div>
          <div class="op-card"><h3 class="op-title">Domain Events</h3><app-code-block [code]="codeDomain" /></div>
          <div class="op-card"><h3 class="op-title">Async Events</h3><app-code-block [code]="codeAsyncEvt" /></div>
          <div class="op-card"><h3 class="op-title">Event Sourcing</h3><app-code-block [code]="codeEventSource" /></div>
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
export class SbEventsComponent {
  codeIntro = `// Custom business event
public record OrderPlacedEvent(Long orderId, String email, BigDecimal total) {}

@Service
public class OrderService {
    @Autowired ApplicationEventPublisher publisher;

    @Transactional
    public Order placeOrder(OrderRequest req) {
        Order order = orderRepo.save(createOrder(req));
        publisher.publishEvent(new OrderPlacedEvent(
            order.getId(), req.getEmail(), order.getTotal()));
        return order;
    }
}

@Component
public class OrderNotificationListener {
    @EventListener
    public void onOrderPlaced(OrderPlacedEvent event) {
        emailService.sendConfirmation(event.email());
    }
}`;
  codeLifecycle = `// Spring Boot startup events (in order)
@Component
public class StartupListeners {

    @EventListener(ApplicationStartingEvent.class)
    public void onStarting() { } // before anything

    @EventListener(ApplicationEnvironmentPreparedEvent.class)
    public void onEnvPrepared() { } // env ready

    @EventListener(ApplicationContextInitializedEvent.class)
    public void onCtxInit() { } // context created

    @EventListener(ApplicationStartedEvent.class)
    public void onStarted() { } // context refreshed

    @EventListener(ApplicationReadyEvent.class)
    public void onReady() {
        log.info("App is ready to serve requests!");
    }
}

// CommandLineRunner (simpler alternative)
@Bean
CommandLineRunner initData(UserRepo repo) {
    return args -> repo.save(new User("Admin"));
}`;
  codeDomain = `// JPA Entity with domain events
@Entity
public class Order extends AbstractAggregateRoot<Order> {
    @Id @GeneratedValue
    private Long id;
    private String status;

    public void complete() {
        this.status = "COMPLETED";
        registerEvent(new OrderCompletedEvent(this.id));
    }

    public void cancel() {
        this.status = "CANCELLED";
        registerEvent(new OrderCancelledEvent(this.id));
    }
}

// Events published automatically when repo.save() is called!
orderRepo.save(order); // triggers registered events`;
  codeAsyncEvt = `@Configuration @EnableAsync
public class AsyncEventConfig {}

@Component
public class AsyncOrderListeners {

    @Async
    @EventListener
    public void sendEmail(OrderPlacedEvent e) {
        // Runs in separate thread — non-blocking!
        emailService.sendConfirmation(e.email());
    }

    @Async
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void notifyWarehouse(OrderPlacedEvent e) {
        // Only after transaction commits + async
        warehouseService.prepareShipment(e.orderId());
    }
}`;
  codeEventSource = `// Event sourcing pattern
public sealed interface OrderEvent {
    record Created(Long orderId, String customer) implements OrderEvent {}
    record ItemAdded(Long orderId, String item, int qty) implements OrderEvent {}
    record Completed(Long orderId, Instant completedAt) implements OrderEvent {}
}

@Service
public class OrderEventStore {
    public void append(OrderEvent event) {
        eventRepo.save(new EventEntity(event));
        publisher.publishEvent(event); // notify listeners
    }

    public Order replay(Long orderId) {
        List<OrderEvent> events = eventRepo.findByOrderId(orderId);
        return events.stream().reduce(Order.empty(), Order::apply, (a, b) -> b);
    }
}`;
}
