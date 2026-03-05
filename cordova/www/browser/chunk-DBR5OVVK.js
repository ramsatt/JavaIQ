import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-observer.component.ts
var DpObserverComponent = class _DpObserverComponent {
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
  static \u0275fac = function DpObserverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpObserverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpObserverComponent, selectors: [["app-topic-dp-observer"]], decls: 33, vars: 7, consts: [["title", "Observer", "subtitle", "Event-driven updates. Publish/subscribe, event listeners, and reactive patterns.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function DpObserverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Observer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Observer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern defines a one-to-many dependency. When state changes, all dependents are notified automatically.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Implementations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Classic Observer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Spring Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Reactive");
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
      \u0275\u0275property("code", ctx.codeReactive);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-observer.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpObserverComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-observer", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/dp-observer.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-observer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpObserverComponent, { className: "DpObserverComponent", filePath: "src/app/features/tutorials/topics/dp-observer.component.ts", lineNumber: 33 });
})();
export {
  DpObserverComponent
};
//# sourceMappingURL=chunk-DBR5OVVK.js.map
