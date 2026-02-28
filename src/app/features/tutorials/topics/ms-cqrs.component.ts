import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-cqrs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-gray { color: #475569; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsCqrsComponent {
  codeIntro = `// Traditional CRUD:  One model for reads AND writes
// CQRS:              Separate models optimized for each

// Write Side (Command)    →  PostgreSQL (normalized)
//   CreateOrder, UpdateOrder, CancelOrder

// Read Side (Query)       →  MongoDB/Elasticsearch (denormalized)
//   GetOrderDetails, SearchOrders, GetDashboard

// Sync via events:
// Write DB → Event → Read DB projection`;
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
    // All data in ONE document — no JOINs!
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
  codeSync = `// Sync write → read via events
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
// ✅ Read/write ratios are very different
// ✅ Complex queries across multiple aggregates
// ✅ Need different databases for reads vs writes
// ✅ High-performance dashboard/reporting needs

// When NOT to use:
// ❌ Simple CRUD apps
// ❌ Small team, low complexity
// ❌ Can't handle eventual consistency
// ❌ Don't need independent scaling

// ⚠️ CQRS adds complexity!
// Read model is EVENTUALLY consistent
// Must handle out-of-order events`;
}
