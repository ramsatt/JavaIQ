import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/dp-state.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function DpStateComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function DpStateComponent_For_19_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectState(s_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeState() === s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
  }
}
var DpStateComponent = class _DpStateComponent {
  activeState = signal("", ...ngDevMode ? [{ debugName: "activeState" }] : []);
  stateInfo = signal("Click a state to see allowed transitions.", ...ngDevMode ? [{ debugName: "stateInfo" }] : []);
  orderStates = signal([
    { name: "CREATED", icon: "\u{1F4DD}" },
    { name: "PAID", icon: "\u{1F4B3}" },
    { name: "SHIPPED", icon: "\u{1F4E6}" },
    { name: "DELIVERED", icon: "\u2705" },
    { name: "CANCELLED", icon: "\u274C" }
  ], ...ngDevMode ? [{ debugName: "orderStates" }] : []);
  codeIntro = `// Without State: giant switch/if-else
void handle(Order order) {
    if (order.status == CREATED) { /* ... */ }
    else if (order.status == PAID) { /* ... */ }
    // grows endlessly!
}

// With State: each state is a separate class
// Order delegates behavior to its current State object`;
  codeClassic = `interface OrderState {
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
}`;
  codeEnum = `enum OrderStatus {
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
}`;
  codeSpring = `// Spring State Machine
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
}`;
  codeSealed = `// Java 17+ sealed interface for state
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
}`;
  selectState(name) {
    this.activeState.set(name);
    const info = {
      CREATED: "CREATED \u2192 can PAY or CANCEL. Cannot ship yet.",
      PAID: "PAID \u2192 can SHIP or CANCEL (with refund). Cannot pay again.",
      SHIPPED: "SHIPPED \u2192 can DELIVER. Cannot cancel once shipped.",
      DELIVERED: "DELIVERED \u2192 final state. Order complete!",
      CANCELLED: "CANCELLED \u2192 final state. Order terminated."
    };
    this.stateInfo.set(info[name] ?? "");
  }
  static \u0275fac = function DpStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpStateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpStateComponent, selectors: [["app-topic-dp-state"]], decls: 43, vars: 9, consts: [["title", "State", "subtitle", "Context-dependent behavior. State machines, transitions, and order lifecycle management.", "badge", "DESIGN PATTERNS", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-green", 3, "size"], [1, "state-row"], [1, "state-chip", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "state-chip", 3, "click"], [1, "chip-icon"], [1, "chip-name"]], template: function DpStateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " pattern lets an object alter its behavior when its internal state changes. The object appears to change its class.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "div", 6)(14, "h3", 7);
      \u0275\u0275element(15, "app-icon", 8);
      \u0275\u0275text(16, " Order State Machine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275repeaterCreate(18, DpStateComponent_For_19_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "section", 1)(23, "h2", 2);
      \u0275\u0275element(24, "app-icon", 12);
      \u0275\u0275text(25, " Implementations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "h3", 15);
      \u0275\u0275text(29, "Classic State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "h3", 15);
      \u0275\u0275text(33, "Enum State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 14)(36, "h3", 15);
      \u0275\u0275text(37, "Spring State Machine");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14)(40, "h3", 15);
      \u0275\u0275text(41, "Sealed Interface");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.orderStates());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.stateInfo());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeClassic);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEnum);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSpring);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSealed);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.state-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.state-chip[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state-chip.active[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  transform: scale(1.05);\n}\n.chip-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 2px;\n}\n.chip-name[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-state.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpStateComponent, [{
    type: Component,
    args: [{ selector: "app-topic-dp-state", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="State" subtitle="Context-dependent behavior. State machines, transitions, and order lifecycle management." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> State</h2>
        <div class="prose"><p>The <strong>State</strong> pattern lets an object alter its behavior when its internal state changes. The object appears to change its class.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> Order State Machine</h3>
          <div class="state-row">
            @for (s of orderStates(); track s.name) {
              <div class="state-chip" [class.active]="activeState() === s.name" (click)="selectState(s.name)"><span class="chip-icon">{{ s.icon }}</span><span class="chip-name">{{ s.name }}</span></div>
            }
          </div>
          <div class="viz-status">{{ stateInfo() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Classic State</h3><app-code-block [code]="codeClassic" /></div>
          <div class="op-card"><h3 class="op-title">Enum State</h3><app-code-block [code]="codeEnum" /></div>
          <div class="op-card"><h3 class="op-title">Spring State Machine</h3><app-code-block [code]="codeSpring" /></div>
          <div class="op-card"><h3 class="op-title">Sealed Interface</h3><app-code-block [code]="codeSealed" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;e1a7a0a2fa85516168c3062d581dbecab65043dd323bb2d3608260563243c660;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/dp-state.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.state-row {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.state-chip {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.state-chip.active {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  transform: scale(1.05);\n}\n.chip-icon {\n  display: block;\n  font-size: 1.2rem;\n  margin-bottom: 2px;\n}\n.chip-name {\n  font-size: 0.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=dp-state.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpStateComponent, { className: "DpStateComponent", filePath: "src/app/features/tutorials/topics/dp-state.component.ts", lineNumber: 49 });
})();
export {
  DpStateComponent
};
//# sourceMappingURL=chunk-JKUZERWE.js.map
