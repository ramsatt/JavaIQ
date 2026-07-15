import{a as v,b as D,c as O}from"./chunk-IN5CYMS5.js";import"./chunk-IS4X7JQG.js";import"./chunk-7SFQX2NP.js";import"./chunk-JTAKQG6P.js";import{$ as E,A as S,H as l,P as a,S as x,aa as C,ba as c,ca as t,da as e,ea as o,ia as f,ka as h,ma as m,ta as u,wa as n,xa as p,z as g}from"./chunk-UO6CZCBJ.js";import"./chunk-JKY3FJOK.js";import"./chunk-36LMHX4H.js";import"./chunk-QSPX3XV4.js";import"./chunk-CFQFX75D.js";import"./chunk-5AR3GM6G.js";import"./chunk-DGLFGWVP.js";import"./chunk-OQOWVL3R.js";import"./chunk-VSDHJBUA.js";import"./chunk-4WFVMWDK.js";import"./chunk-M2X7KQLB.js";import"./chunk-DVVH2KKN.js";import"./chunk-NV3QH4JK.js";import"./chunk-2DGDOVBR.js";import"./chunk-OZYWYLNK.js";import"./chunk-42C7ZIID.js";import"./chunk-NWJ5J3BN.js";var w=(s,d)=>d.name;function y(s,d){if(s&1){let i=f();t(0,"div",17),h("click",function(){let I=g(i).$implicit,b=m();return S(b.selectState(I.name))}),t(1,"span",18),n(2),e(),t(3,"span",19),n(4),e()()}if(s&2){let i=d.$implicit,r=m();u("active",r.activeState()===i.name),a(2),p(i.icon),a(2),p(i.name)}}var P=class s{activeState=l("");stateInfo=l("Click a state to see allowed transitions.");orderStates=l([{name:"CREATED",icon:"\u{1F4DD}"},{name:"PAID",icon:"\u{1F4B3}"},{name:"SHIPPED",icon:"\u{1F4E6}"},{name:"DELIVERED",icon:"\u2705"},{name:"CANCELLED",icon:"\u274C"}]);codeIntro=`// Without State: giant switch/if-else
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
}`;selectState(d){this.activeState.set(d);let i={CREATED:"CREATED \u2192 can PAY or CANCEL. Cannot ship yet.",PAID:"PAID \u2192 can SHIP or CANCEL (with refund). Cannot pay again.",SHIPPED:"SHIPPED \u2192 can DELIVER. Cannot cancel once shipped.",DELIVERED:"DELIVERED \u2192 final state. Order complete!",CANCELLED:"CANCELLED \u2192 final state. Order terminated."};this.stateInfo.set(i[d]??"")}static \u0275fac=function(i){return new(i||s)};static \u0275cmp=x({type:s,selectors:[["app-topic-dp-state"]],decls:44,vars:9,consts:[["title","State","subtitle","Context-dependent behavior. State machines, transitions, and order lifecycle management.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],["src","/assets/images/topics/dp-state.png","alt","State Pattern Visualized",1,"topic-hero-image"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-green",3,"size"],[1,"state-row"],[1,"state-chip",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"state-chip",3,"click"],[1,"chip-icon"],[1,"chip-name"]],template:function(i,r){i&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),n(4," State"),e(),o(5,"img",4),t(6,"div",5)(7,"p"),n(8,"The "),t(9,"strong"),n(10,"State"),e(),n(11," pattern lets an object alter its behavior when its internal state changes. The object appears to change its class."),e(),o(12,"app-code-block",6),e()(),t(13,"section",1)(14,"div",7)(15,"h3",8),o(16,"app-icon",9),n(17," Order State Machine"),e(),t(18,"div",10),E(19,y,5,4,"div",11,w),e(),t(21,"div",12),n(22),e()()(),t(23,"section",1)(24,"h2",2),o(25,"app-icon",13),n(26," Implementations"),e(),t(27,"div",14)(28,"div",15)(29,"h3",16),n(30,"Classic State"),e(),o(31,"app-code-block",6),e(),t(32,"div",15)(33,"h3",16),n(34,"Enum State"),e(),o(35,"app-code-block",6),e(),t(36,"div",15)(37,"h3",16),n(38,"Spring State Machine"),e(),o(39,"app-code-block",6),e(),t(40,"div",15)(41,"h3",16),n(42,"Sealed Interface"),e(),o(43,"app-code-block",6),e()()()()),i&2&&(a(3),c("size",28),a(9),c("code",r.codeIntro),a(4),c("size",22),a(3),C(r.orderStates()),a(3),p(r.stateInfo()),a(3),c("size",28),a(6),c("code",r.codeClassic),a(4),c("code",r.codeEnum),a(4),c("code",r.codeSpring),a(4),c("code",r.codeSealed))},dependencies:[v,D,O],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.state-row[_ngcontent-%COMP%]{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:20px}.state-chip[_ngcontent-%COMP%]{padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.state-chip.active[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4;transform:scale(1.05)}.chip-icon[_ngcontent-%COMP%]{display:block;font-size:1.2rem;margin-bottom:2px}.chip-name[_ngcontent-%COMP%]{font-size:.5rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{P as DpStateComponent};
