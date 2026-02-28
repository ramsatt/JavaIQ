import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-saga',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Saga Pattern" subtitle="Manage distributed transactions. Choreography vs orchestration, compensating transactions, and failure handling." badge="MICROSERVICES" gradient="linear-gradient(135deg, #991b1b, #f87171)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-red" /> Saga Pattern</h2>
        <div class="prose"><p>A <strong>Saga</strong> splits a distributed transaction into local transactions. Each step publishes an event or triggers the next. On failure, run <strong>compensating transactions</strong> to undo.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Approaches</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Choreography</h3><app-code-block [code]="codeChoreography" /></div>
          <div class="op-card"><h3 class="op-title">Orchestration</h3><app-code-block [code]="codeOrchestration" /></div>
          <div class="op-card"><h3 class="op-title">Compensation</h3><app-code-block [code]="codeCompensation" /></div>
          <div class="op-card"><h3 class="op-title">State Machine</h3><app-code-block [code]="codeStateMachine" /></div>
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
export class MsSagaComponent {
  codeIntro = `// Order Saga (happy path):
// 1. Order Service → Create Order
// 2. Payment Service → Charge Payment ✅
// 3. Inventory Service → Reserve Stock ✅
// 4. Shipping Service → Schedule Delivery ✅

// Failure at step 3:
// 3. Inventory Service → Reserve Stock ❌ (out of stock)
// COMPENSATE:
// 2. Payment Service → Refund Payment 💰
// 1. Order Service → Cancel Order ❌`;
  codeChoreography = `// Each service listens and reacts (no coordinator)
// Order Service
@Transactional
public Order placeOrder(OrderReq req) {
    Order order = orderRepo.save(new Order(req));
    kafka.send("order-events", new OrderCreated(order.getId()));
    return order;
}

// Payment Service (listens to order-events)
@KafkaListener(topics = "order-events")
public void onOrderCreated(OrderCreated event) {
    Payment p = paymentService.charge(event.orderId());
    kafka.send("payment-events", new PaymentCompleted(p.getId()));
}

// Inventory Service (listens to payment-events)
@KafkaListener(topics = "payment-events")
public void onPaymentDone(PaymentCompleted event) {
    inventoryService.reserve(event.orderId());
}`;
  codeOrchestration = `// Central orchestrator coordinates steps
@Service
public class OrderSagaOrchestrator {
    public void execute(OrderReq req) {
        Long orderId = orderService.create(req);
        try {
            paymentService.charge(orderId, req.total());
            inventoryService.reserve(orderId, req.items());
            shippingService.schedule(orderId);
            orderService.complete(orderId);
        } catch (PaymentException e) {
            orderService.cancel(orderId);
        } catch (InventoryException e) {
            paymentService.refund(orderId);
            orderService.cancel(orderId);
        } catch (ShippingException e) {
            inventoryService.release(orderId);
            paymentService.refund(orderId);
            orderService.cancel(orderId);
        }
    }
}`;
  codeCompensation = `// Compensating transactions
public interface SagaStep<T> {
    void execute(T context);
    void compensate(T context);  // undo!
}

public class PaymentStep implements SagaStep<OrderContext> {
    public void execute(OrderContext ctx) {
        String txId = paymentService.charge(ctx.getTotal());
        ctx.setPaymentTxId(txId);
    }
    public void compensate(OrderContext ctx) {
        paymentService.refund(ctx.getPaymentTxId());
    }
}

// Saga executor
List<SagaStep<OrderContext>> steps = List.of(
    new CreateOrderStep(), new PaymentStep(),
    new InventoryStep(), new ShippingStep());`;
  codeStateMachine = `// Spring State Machine for saga
@Configuration @EnableStateMachine
public class OrderSagaConfig extends StateMachineConfigurerAdapter {
    @Override
    public void configure(StateMachineTransitionConfigurer transitions) {
        transitions
            .withExternal().source(CREATED).target(PAYMENT_PENDING)
                .event(ORDER_CREATED)
            .and()
            .withExternal().source(PAYMENT_PENDING).target(PAID)
                .event(PAYMENT_SUCCESS)
            .and()
            .withExternal().source(PAYMENT_PENDING).target(CANCELLED)
                .event(PAYMENT_FAILED)
                .action(compensateAction());
    }
}`;
}
