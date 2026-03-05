import{a as s,b as l,c as m}from"./chunk-H4UXZOTD.js";import{$a as p,Pa as r,Rb as t,rb as o,sb as n,tb as e,ub as i}from"./chunk-QHT4LFPW.js";import"./chunk-NWJ5J3BN.js";var g=class d{codeIntro=`// Order Saga (happy path):
// 1. Order Service \u2192 Create Order
// 2. Payment Service \u2192 Charge Payment \u2705
// 3. Inventory Service \u2192 Reserve Stock \u2705
// 4. Shipping Service \u2192 Schedule Delivery \u2705

// Failure at step 3:
// 3. Inventory Service \u2192 Reserve Stock \u274C (out of stock)
// COMPENSATE:
// 2. Payment Service \u2192 Refund Payment \u{1F4B0}
// 1. Order Service \u2192 Cancel Order \u274C`;codeChoreography=`// Each service listens and reacts (no coordinator)
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
}`;codeOrchestration=`// Central orchestrator coordinates steps
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
}`;codeCompensation=`// Compensating transactions
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
    new InventoryStep(), new ShippingStep());`;codeStateMachine=`// Spring State Machine for saga
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
}`;static \u0275fac=function(c){return new(c||d)};static \u0275cmp=p({type:d,selectors:[["app-topic-ms-saga"]],decls:36,vars:7,consts:[["title","Saga Pattern","subtitle","Manage distributed transactions. Choreography vs orchestration, compensating transactions, and failure handling.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #991b1b, #f87171)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-red",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,a){c&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),t(4," Saga Pattern"),e(),n(5,"div",4)(6,"p"),t(7,"A "),n(8,"strong"),t(9,"Saga"),e(),t(10," splits a distributed transaction into local transactions. Each step publishes an event or triggers the next. On failure, run "),n(11,"strong"),t(12,"compensating transactions"),e(),t(13," to undo."),e(),i(14,"app-code-block",5),e()(),n(15,"section",1)(16,"h2",2),i(17,"app-icon",6),t(18," Approaches"),e(),n(19,"div",7)(20,"div",8)(21,"h3",9),t(22,"Choreography"),e(),i(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"Orchestration"),e(),i(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"Compensation"),e(),i(31,"app-code-block",5),e(),n(32,"div",8)(33,"h3",9),t(34,"State Machine"),e(),i(35,"app-code-block",5),e()()()()),c&2&&(r(3),o("size",28),r(11),o("code",a.codeIntro),r(3),o("size",28),r(6),o("code",a.codeChoreography),r(4),o("code",a.codeOrchestration),r(4),o("code",a.codeCompensation),r(4),o("code",a.codeStateMachine))},dependencies:[s,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-red[_ngcontent-%COMP%]{color:#dc2626}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MsSagaComponent};
