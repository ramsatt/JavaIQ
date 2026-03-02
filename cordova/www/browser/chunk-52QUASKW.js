import{a as p,b as m,c as l}from"./chunk-6QA53VVD.js";import{Fb as t,Ka as r,Va as c,kb as i,lb as n,mb as e,nb as o}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`// Traditional CRUD:  One model for reads AND writes
// CQRS:              Separate models optimized for each

// Write Side (Command)    \u2192  PostgreSQL (normalized)
//   CreateOrder, UpdateOrder, CancelOrder

// Read Side (Query)       \u2192  MongoDB/Elasticsearch (denormalized)
//   GetOrderDetails, SearchOrders, GetDashboard

// Sync via events:
// Write DB \u2192 Event \u2192 Read DB projection`;codeCommand=`// Command model (write-optimized)
@Entity @Table(name = "orders")
public class Order {
    @Id @GeneratedValue private Long id;
    @Enumerated(EnumType.STRING) private OrderStatus status;
    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderItem> items;
    private BigDecimal total;
}

@Service
public class OrderCommandService {
    @Transactional
    public Long createOrder(CreateOrderCommand cmd) {
        Order order = new Order(cmd.items());
        orderRepo.save(order);
        eventPublisher.publish(new OrderCreated(order));
        return order.getId();
    }
}`;codeQuery=`// Query model (read-optimized, denormalized)
@Document(collection = "order_views")
public class OrderView {
    @Id private String orderId;
    private String customerName;
    private String customerEmail;
    private List<ItemView> items;
    private BigDecimal total;
    private String status;
    private LocalDateTime createdAt;
    // All data in ONE document \u2014 no JOINs!
}

@Service
public class OrderQueryService {
    public OrderView getOrder(String id) {
        return mongoTemplate.findById(id, OrderView.class);
    }
    public Page<OrderView> search(OrderFilter filter) {
        // Fast reads from denormalized view
    }
}`;codeSync=`// Sync write \u2192 read via events
@Component
public class OrderProjection {
    @EventListener
    public void onOrderCreated(OrderCreated event) {
        OrderView view = new OrderView();
        view.setOrderId(event.getId().toString());
        view.setItems(mapItems(event.getItems()));
        view.setTotal(event.getTotal());
        view.setStatus("CREATED");
        mongoTemplate.save(view);
    }

    @EventListener
    public void onOrderUpdated(OrderUpdated event) {
        mongoTemplate.updateFirst(
            Query.query(Criteria.where("orderId").is(event.getId())),
            Update.update("status", event.getStatus()),
            OrderView.class);
    }
}`;codeWhen=`// When to use CQRS:
// \u2705 Read/write ratios are very different
// \u2705 Complex queries across multiple aggregates
// \u2705 Need different databases for reads vs writes
// \u2705 High-performance dashboard/reporting needs

// When NOT to use:
// \u274C Simple CRUD apps
// \u274C Small team, low complexity
// \u274C Can't handle eventual consistency
// \u274C Don't need independent scaling

// \u26A0\uFE0F CQRS adds complexity!
// Read model is EVENTUALLY consistent
// Must handle out-of-order events`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-ms-cqrs"]],decls:32,vars:7,consts:[["title","CQRS","subtitle","Command Query Responsibility Segregation. Separate read and write models for optimal performance and scalability.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #374151, #9ca3af)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-gray",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," CQRS"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"CQRS"),e(),t(9," separates reads from writes. The command side handles mutations (write-optimized), the query side handles reads (read-optimized)."),e(),o(10,"app-code-block",5),e()(),n(11,"section",1)(12,"h2",2),o(13,"app-icon",6),t(14," Implementation"),e(),n(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Command Side"),e(),o(19,"app-code-block",5),e(),n(20,"div",8)(21,"h3",9),t(22,"Query Side"),e(),o(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"Event Sync"),e(),o(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"When to Use"),e(),o(31,"app-code-block",5),e()()()()),d&2&&(r(3),i("size",28),r(7),i("code",a.codeIntro),r(3),i("size",28),r(6),i("code",a.codeCommand),r(4),i("code",a.codeQuery),r(4),i("code",a.codeSync),r(4),i("code",a.codeWhen))},dependencies:[p,m,l],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-gray[_ngcontent-%COMP%]{color:#475569}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MsCqrsComponent};
