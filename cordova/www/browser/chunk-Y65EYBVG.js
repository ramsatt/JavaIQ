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

// src/app/features/tutorials/topics/sb-events.component.ts
var SbEventsComponent = class _SbEventsComponent {
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
        // Runs in separate thread \u2014 non-blocking!
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
  static \u0275fac = function SbEventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbEventsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbEventsComponent, selectors: [["app-topic-sb-events"]], decls: 30, vars: 7, consts: [["title", "Application Events", "subtitle", "Event-driven architecture in Spring Boot. Custom events, listeners, async processing, and boot startup events.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Boot Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot publishes lifecycle events during startup. You can also create custom events for domain-driven design.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "Boot Lifecycle Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "Domain Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3", 9);
      \u0275\u0275text(24, "Async Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Event Sourcing");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeLifecycle);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDomain);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAsyncEvt);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEventSource);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-events.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbEventsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-events", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;be89a878d7fde9fd1e193ab701e806fec8898d17827fb12905606abf051d9913;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-events.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbEventsComponent, { className: "SbEventsComponent", filePath: "src/app/features/tutorials/topics/sb-events.component.ts", lineNumber: 36 });
})();
export {
  SbEventsComponent
};
//# sourceMappingURL=chunk-Y65EYBVG.js.map
