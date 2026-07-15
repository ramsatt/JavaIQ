import{a as p,b as l,c as b}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{P as r,S as d,ba as o,ca as n,da as e,ea as i,wa as t}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var v=class c{codeIntro=`// Subject (publisher) notifies observers (subscribers)
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
      .subscribe(this::process);`;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=d({type:c,selectors:[["app-topic-dp-observer"]],decls:34,vars:7,consts:[["title","Observer","subtitle","Event-driven updates. Publish/subscribe, event listeners, and reactive patterns.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],["src","/assets/images/topics/dp-observer.png","alt","Observer Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,s){a&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," Observer"),e(),i(5,"img",4),n(6,"div",5)(7,"p"),t(8,"The "),n(9,"strong"),t(10,"Observer"),e(),t(11," pattern defines a one-to-many dependency. When state changes, all dependents are notified automatically."),e(),i(12,"app-code-block",6),e()(),n(13,"section",1)(14,"h2",2),i(15,"app-icon",7),t(16," Implementations"),e(),n(17,"div",8)(18,"div",9)(19,"h3",10),t(20,"Classic Observer"),e(),i(21,"app-code-block",6),e(),n(22,"div",9)(23,"h3",10),t(24,"Functional"),e(),i(25,"app-code-block",6),e(),n(26,"div",9)(27,"h3",10),t(28,"Spring Events"),e(),i(29,"app-code-block",6),e(),n(30,"div",9)(31,"h3",10),t(32,"Reactive"),e(),i(33,"app-code-block",6),e()()()()),a&2&&(r(3),o("size",28),r(9),o("code",s.codeIntro),r(3),o("size",28),r(6),o("code",s.codeClassic),r(4),o("code",s.codeFunctional),r(4),o("code",s.codeSpring),r(4),o("code",s.codeReactive))},dependencies:[p,l,b],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{v as DpObserverComponent};
