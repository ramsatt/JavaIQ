import{a as p,b as l,c as m}from"./chunk-H4UXZOTD.js";import{$a as c,Pa as t,Rb as o,rb as n,sb as i,tb as e,ub as r}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var v=class s{codeIntro=`// Custom business event
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
}`;codeLifecycle=`// Spring Boot startup events (in order)
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
}`;codeDomain=`// JPA Entity with domain events
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
orderRepo.save(order); // triggers registered events`;codeAsyncEvt=`@Configuration @EnableAsync
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
}`;codeEventSource=`// Event sourcing pattern
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
}`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-sb-events"]],decls:30,vars:7,consts:[["title","Application Events","subtitle","Event-driven architecture in Spring Boot. Custom events, listeners, async processing, and boot startup events.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),o(4," Boot Events"),e(),i(5,"div",4)(6,"p"),o(7,"Spring Boot publishes lifecycle events during startup. You can also create custom events for domain-driven design."),e(),r(8,"app-code-block",5),e()(),i(9,"section",1)(10,"h2",2),r(11,"app-icon",6),o(12," Patterns"),e(),i(13,"div",7)(14,"div",8)(15,"h3",9),o(16,"Boot Lifecycle Events"),e(),r(17,"app-code-block",5),e(),i(18,"div",8)(19,"h3",9),o(20,"Domain Events"),e(),r(21,"app-code-block",5),e(),i(22,"div",8)(23,"h3",9),o(24,"Async Events"),e(),r(25,"app-code-block",5),e(),i(26,"div",8)(27,"h3",9),o(28,"Event Sourcing"),e(),r(29,"app-code-block",5),e()()()()),d&2&&(t(3),n("size",28),t(5),n("code",a.codeIntro),t(3),n("size",28),t(6),n("code",a.codeLifecycle),t(4),n("code",a.codeDomain),t(4),n("code",a.codeAsyncEvt),t(4),n("code",a.codeEventSource))},dependencies:[p,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{v as SbEventsComponent};
