import{a as v,b as D,c as O}from"./chunk-6QA53VVD.js";import{Db as u,Fb as n,Gb as p,Ka as a,Va as x,Y as g,Z as S,ia as l,ib as E,jb as C,kb as o,lb as t,mb as e,nb as c,tb as f,ub as h,vb as m}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var w=(s,d)=>d.name;function y(s,d){if(s&1){let i=f();t(0,"div",16),h("click",function(){let I=g(i).$implicit,b=m();return S(b.selectState(I.name))}),t(1,"span",17),n(2),e(),t(3,"span",18),n(4),e()()}if(s&2){let i=d.$implicit,r=m();u("active",r.activeState()===i.name),a(2),p(i.icon),a(2),p(i.name)}}var P=class s{activeState=l("");stateInfo=l("Click a state to see allowed transitions.");orderStates=l([{name:"CREATED",icon:"\u{1F4DD}"},{name:"PAID",icon:"\u{1F4B3}"},{name:"SHIPPED",icon:"\u{1F4E6}"},{name:"DELIVERED",icon:"\u2705"},{name:"CANCELLED",icon:"\u274C"}]);codeIntro=`// Without State: giant switch/if-else
void handle(Order order) {
    if (order.status == CREATED) { /* ... */ }
    else if (order.status == PAID) { /* ... */ }
    // grows endlessly!
}

// With State: each state is a separate class
// Order delegates behavior to its current State object`;codeClassic=`interface OrderState {
    void pay(OrderContext ctx);
    void ship(OrderContext ctx);
    void cancel(OrderContext ctx);
}

class CreatedState implements OrderState {
    public void pay(OrderContext ctx) {
        processPayment(ctx);
        ctx.setState(new PaidState());
    }
    public void ship(OrderContext ctx) {
        throw new IllegalStateException("Can't ship unpaid order!");
    }
    public void cancel(OrderContext ctx) {
        ctx.setState(new CancelledState());
    }
}

class PaidState implements OrderState {
    public void pay(OrderContext ctx) {
        throw new IllegalStateException("Already paid!");
    }
    public void ship(OrderContext ctx) {
        scheduleShipment(ctx);
        ctx.setState(new ShippedState());
    }
    public void cancel(OrderContext ctx) { refund(ctx); ctx.setState(new CancelledState()); }
}`;codeEnum=`enum OrderStatus {
    CREATED {
        OrderStatus pay() { return PAID; }
        OrderStatus cancel() { return CANCELLED; }
        OrderStatus ship() { throw new IllegalStateException(); }
    },
    PAID {
        OrderStatus pay() { throw new IllegalStateException("Already paid"); }
        OrderStatus cancel() { return CANCELLED; }
        OrderStatus ship() { return SHIPPED; }
    },
    SHIPPED {
        OrderStatus pay() { throw new IllegalStateException(); }
        OrderStatus cancel() { throw new IllegalStateException("Already shipped"); }
        OrderStatus ship() { throw new IllegalStateException(); }
    },
    CANCELLED, DELIVERED;

    OrderStatus pay() { throw new IllegalStateException(); }
    OrderStatus cancel() { throw new IllegalStateException(); }
    OrderStatus ship() { throw new IllegalStateException(); }
}`;codeSpring=`// Spring State Machine
@Configuration @EnableStateMachine
public class OrderStateMachineConfig
        extends StateMachineConfigurerAdapter<OrderStatus, OrderEvent> {
    @Override
    public void configure(StateMachineTransitionConfigurer<OrderStatus, OrderEvent> t) {
        t.withExternal()
            .source(CREATED).target(PAID).event(PAY)
         .and().withExternal()
            .source(PAID).target(SHIPPED).event(SHIP)
         .and().withExternal()
            .source(SHIPPED).target(DELIVERED).event(DELIVER)
         .and().withExternal()
            .source(CREATED).target(CANCELLED).event(CANCEL);
    }
}`;codeSealed=`// Java 17+ sealed interface for state
sealed interface OrderState
    permits Created, Paid, Shipped, Delivered, Cancelled {}

record Created(LocalDateTime at) implements OrderState {}
record Paid(LocalDateTime at, String txId) implements OrderState {}
record Shipped(LocalDateTime at, String tracking) implements OrderState {}
record Delivered(LocalDateTime at) implements OrderState {}
record Cancelled(LocalDateTime at, String reason) implements OrderState {}

// Pattern matching (Java 21+)
String describe(OrderState state) {
    return switch (state) {
        case Created c -> "Created at " + c.at();
        case Paid p -> "Paid: " + p.txId();
        case Shipped s -> "Tracking: " + s.tracking();
        case Delivered d -> "Delivered at " + d.at();
        case Cancelled c -> "Cancelled: " + c.reason();
    };
}`;selectState(d){this.activeState.set(d);let i={CREATED:"CREATED \u2192 can PAY or CANCEL. Cannot ship yet.",PAID:"PAID \u2192 can SHIP or CANCEL (with refund). Cannot pay again.",SHIPPED:"SHIPPED \u2192 can DELIVER. Cannot cancel once shipped.",DELIVERED:"DELIVERED \u2192 final state. Order complete!",CANCELLED:"CANCELLED \u2192 final state. Order terminated."};this.stateInfo.set(i[d]??"")}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=x({type:s,selectors:[["app-topic-dp-state"]],decls:43,vars:9,consts:[["title","State","subtitle","Context-dependent behavior. State machines, transitions, and order lifecycle management.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-green",3,"size"],[1,"state-row"],[1,"state-chip",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"state-chip",3,"click"],[1,"chip-icon"],[1,"chip-name"]],template:function(i,r){i&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),c(3,"app-icon",3),n(4," State"),e(),t(5,"div",4)(6,"p"),n(7,"The "),t(8,"strong"),n(9,"State"),e(),n(10," pattern lets an object alter its behavior when its internal state changes. The object appears to change its class."),e(),c(11,"app-code-block",5),e()(),t(12,"section",1)(13,"div",6)(14,"h3",7),c(15,"app-icon",8),n(16," Order State Machine"),e(),t(17,"div",9),E(18,y,5,4,"div",10,w),e(),t(20,"div",11),n(21),e()()(),t(22,"section",1)(23,"h2",2),c(24,"app-icon",12),n(25," Implementations"),e(),t(26,"div",13)(27,"div",14)(28,"h3",15),n(29,"Classic State"),e(),c(30,"app-code-block",5),e(),t(31,"div",14)(32,"h3",15),n(33,"Enum State"),e(),c(34,"app-code-block",5),e(),t(35,"div",14)(36,"h3",15),n(37,"Spring State Machine"),e(),c(38,"app-code-block",5),e(),t(39,"div",14)(40,"h3",15),n(41,"Sealed Interface"),e(),c(42,"app-code-block",5),e()()()()),i&2&&(a(3),o("size",28),a(8),o("code",r.codeIntro),a(4),o("size",22),a(3),C(r.orderStates()),a(3),p(r.stateInfo()),a(3),o("size",28),a(6),o("code",r.codeClassic),a(4),o("code",r.codeEnum),a(4),o("code",r.codeSpring),a(4),o("code",r.codeSealed))},dependencies:[v,D,O],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.state-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:20px}.state-chip[_ngcontent-%COMP%]{padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.state-chip.active[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4;transform:scale(1.05)}.chip-icon[_ngcontent-%COMP%]{display:block;font-size:1.2rem;margin-bottom:2px}.chip-name[_ngcontent-%COMP%]{font-size:.5rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{P as DpStateComponent};
