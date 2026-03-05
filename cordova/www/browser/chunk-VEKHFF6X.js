import{a as p,b as l,c as b}from"./chunk-LDZEFRU3.js";import{$a as d,Ob as t,Pa as i,qb as r,rb as n,sb as e,tb as o}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var v=class c{codeIntro=`// Subject (publisher) notifies observers (subscribers)
// Examples: GUI event listeners, Spring events, Kafka`;codeClassic=`interface EventListener {
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
events.notify("order.placed", order);`;codeFunctional=`// Modern Java: use Consumer as observer
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
bus.publish(new OrderEvent("placed", orderId));`;codeSpring=`// Spring Events (built-in observer pattern!)
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
}`;codeReactive=`// Reactive Streams (Project Reactor)
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
      .subscribe(this::process);`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-dp-observer"]],decls:33,vars:7,consts:[["title","Observer","subtitle","Event-driven updates. Publish/subscribe, event listeners, and reactive patterns.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,s){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Observer"),e(),n(5,"div",4)(6,"p"),t(7,"The "),n(8,"strong"),t(9,"Observer"),e(),t(10," pattern defines a one-to-many dependency. When state changes, all dependents are notified automatically."),e(),o(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Implementations"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Classic Observer"),e(),o(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),t(23,"Functional"),e(),o(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),t(27,"Spring Events"),e(),o(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Reactive"),e(),o(32,"app-code-block",5),e()()()()),a&2&&(i(3),r("size",28),i(8),r("code",s.codeIntro),i(3),r("size",28),i(6),r("code",s.codeClassic),i(4),r("code",s.codeFunctional),i(4),r("code",s.codeSpring),i(4),r("code",s.codeReactive))},dependencies:[p,l,b],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{v as DpObserverComponent};
