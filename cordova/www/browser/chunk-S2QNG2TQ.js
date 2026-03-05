import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-cqrs.component.ts
var MsCqrsComponent = class _MsCqrsComponent {
  codeIntro = `// Traditional CRUD:  One model for reads AND writes
// CQRS:              Separate models optimized for each

// Write Side (Command)    \u2192  PostgreSQL (normalized)
//   CreateOrder, UpdateOrder, CancelOrder

// Read Side (Query)       \u2192  MongoDB/Elasticsearch (denormalized)
//   GetOrderDetails, SearchOrders, GetDashboard

// Sync via events:
// Write DB \u2192 Event \u2192 Read DB projection`;
  codeCommand = `// Command model (write-optimized)
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
}`;
  codeQuery = `// Query model (read-optimized, denormalized)
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
}`;
  codeSync = `// Sync write \u2192 read via events
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
}`;
  codeWhen = `// When to use CQRS:
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
// Must handle out-of-order events`;
  static \u0275fac = function MsCqrsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsCqrsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsCqrsComponent, selectors: [["app-topic-ms-cqrs"]], decls: 32, vars: 7, consts: [["title", "CQRS", "subtitle", "Command Query Responsibility Segregation. Separate read and write models for optimal performance and scalability.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #374151, #9ca3af)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-gray", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsCqrsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " CQRS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "CQRS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " separates reads from writes. The command side handles mutations (write-optimized), the query side handles reads (read-optimized).");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Implementation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Command Side");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Query Side");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Event Sync");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "When to Use");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCommand);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeQuery);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSync);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWhen);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-cqrs.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsCqrsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-cqrs", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="CQRS" subtitle="Command Query Responsibility Segregation. Separate read and write models for optimal performance and scalability." badge="MICROSERVICES" gradient="linear-gradient(135deg, #374151, #9ca3af)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-gray" /> CQRS</h2>
        <div class="prose"><p><strong>CQRS</strong> separates reads from writes. The command side handles mutations (write-optimized), the query side handles reads (read-optimized).</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Implementation</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Command Side</h3><app-code-block [code]="codeCommand" /></div>
          <div class="op-card"><h3 class="op-title">Query Side</h3><app-code-block [code]="codeQuery" /></div>
          <div class="op-card"><h3 class="op-title">Event Sync</h3><app-code-block [code]="codeSync" /></div>
          <div class="op-card"><h3 class="op-title">When to Use</h3><app-code-block [code]="codeWhen" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;7098f8916a2681ec9559acde1c6ab82c1e7aebab1dd5080bd6524a36803ea0f7;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/ms-cqrs.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-gray {\n  color: #475569;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-cqrs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsCqrsComponent, { className: "MsCqrsComponent", filePath: "src/app/features/tutorials/topics/ms-cqrs.component.ts", lineNumber: 33 });
})();
export {
  MsCqrsComponent
};
//# sourceMappingURL=chunk-S2QNG2TQ.js.map
