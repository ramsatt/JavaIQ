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

// src/app/features/tutorials/topics/ms-saga.component.ts
var MsSagaComponent = class _MsSagaComponent {
  codeIntro = `// Order Saga (happy path):
// 1. Order Service \u2192 Create Order
// 2. Payment Service \u2192 Charge Payment \u2705
// 3. Inventory Service \u2192 Reserve Stock \u2705
// 4. Shipping Service \u2192 Schedule Delivery \u2705

// Failure at step 3:
// 3. Inventory Service \u2192 Reserve Stock \u274C (out of stock)
// COMPENSATE:
// 2. Payment Service \u2192 Refund Payment \u{1F4B0}
// 1. Order Service \u2192 Cancel Order \u274C`;
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
  static \u0275fac = function MsSagaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsSagaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsSagaComponent, selectors: [["app-topic-ms-saga"]], decls: 36, vars: 7, consts: [["title", "Saga Pattern", "subtitle", "Manage distributed transactions. Choreography vs orchestration, compensating transactions, and failure handling.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #991b1b, #f87171)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-red", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsSagaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Saga Pattern");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "A ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Saga");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " splits a distributed transaction into local transactions. Each step publishes an event or triggers the next. On failure, run ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "compensating transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " to undo.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Approaches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Choreography");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Orchestration");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Compensation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "State Machine");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeChoreography);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeOrchestration);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCompensation);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStateMachine);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-saga.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsSagaComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-saga", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;1ee42a2cc863167e2d72aae7bff69d10566960b45c9f918822b56c174d26e297;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/ms-saga.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-red {\n  color: #dc2626;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-saga.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsSagaComponent, { className: "MsSagaComponent", filePath: "src/app/features/tutorials/topics/ms-saga.component.ts", lineNumber: 33 });
})();
export {
  MsSagaComponent
};
//# sourceMappingURL=chunk-NC4VXICI.js.map
