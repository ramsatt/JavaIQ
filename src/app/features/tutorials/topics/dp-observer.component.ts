import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-observer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Observer" subtitle="Event-driven updates. Publish/subscribe, event listeners, and reactive patterns." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Observer</h2>
        <div class="prose"><p>The <strong>Observer</strong> pattern defines a one-to-many dependency. When state changes, all dependents are notified automatically.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic Observer</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Functional</h3><app-code-block [code]="codeFunctional" /></div>
          <div class="op-card"><h3 class="op-title">Spring Events</h3><app-code-block [code]="codeSpring" /></div>
          <div class="op-card"><h3 class="op-title">Reactive</h3><app-code-block [code]="codeReactive" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-red { color: #dc2626; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpObserverComponent {
  codeIntro = `// Subject (publisher) notifies observers (subscribers)
// Examples: GUI event listeners, Spring events, Kafka`;
  codeClassic = `interface EventListener {
    void onEvent(String eventType, Object data);
}

class EventManager {
    private Map<String, List<EventListener>> listeners = new HashMap<>();

    public void subscribe(String type, EventListener listener) {
        listeners.computeIfAbsent(type, k -> new ArrayList<>()).add(listener);
    }
    public void unsubscribe(String type, EventListener listener) {
        listeners.getOrDefault(type, List.of()).remove(listener);
    }
    public void notify(String type, Object data) {
        listeners.getOrDefault(type, List.of())
            .forEach(l -> l.onEvent(type, data));
    }
}

// Usage
EventManager events = new EventManager();
events.subscribe("order.placed", (type, data) -> sendEmail(data));
events.subscribe("order.placed", (type, data) -> updateStock(data));
events.notify("order.placed", order);`;
  codeFunctional = `// Modern Java: use Consumer as observer
class EventBus<T> {
    private final List<Consumer<T>> subscribers = new CopyOnWriteArrayList<>();

    public void subscribe(Consumer<T> subscriber) {
        subscribers.add(subscriber);
    }
    public void publish(T event) {
        subscribers.forEach(s -> s.accept(event));
    }
}

EventBus<OrderEvent> bus = new EventBus<>();
bus.subscribe(e -> log.info("Order: {}", e));
bus.subscribe(e -> emailService.send(e));
bus.publish(new OrderEvent("placed", orderId));`;
  codeSpring = `// Spring Events (built-in observer pattern!)
// 1. Define event
public record OrderPlacedEvent(Long orderId, BigDecimal total) {}

// 2. Publish
@Service
public class OrderService {
    @Autowired ApplicationEventPublisher publisher;
    public void place(Order order) {
        orderRepo.save(order);
        publisher.publishEvent(new OrderPlacedEvent(order.getId(), order.getTotal()));
    }
}

// 3. Subscribe
@Component
public class EmailListener {
    @EventListener
    public void onOrderPlaced(OrderPlacedEvent e) {
        emailService.sendConfirmation(e.orderId());
    }
}`;
  codeReactive = `// Reactive Streams (Project Reactor)
Flux<String> events = Flux.create(sink -> {
    sink.next("event1");
    sink.next("event2");
    sink.complete();
});

events.subscribe(
    event -> log.info("Received: {}", event),   // onNext
    error -> log.error("Error: {}", error),      // onError
    () -> log.info("Completed")                  // onComplete
);

// With backpressure
events.onBackpressureBuffer(100)
      .publishOn(Schedulers.boundedElastic())
      .subscribe(this::process);`;
}
