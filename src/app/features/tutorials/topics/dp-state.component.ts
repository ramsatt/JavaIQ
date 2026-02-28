import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .state-row { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px; }
    .state-chip { padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .state-chip.active { border-color: #16a34a; background: #f0fdf4; transform: scale(1.05); }
    .chip-icon { display: block; font-size: 1.2rem; margin-bottom: 2px; } .chip-name { font-size: 0.5rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpStateComponent {
  activeState = signal(''); stateInfo = signal('Click a state to see allowed transitions.');
  orderStates = signal([
    { name: 'CREATED', icon: '📝' }, { name: 'PAID', icon: '💳' }, { name: 'SHIPPED', icon: '📦' },
    { name: 'DELIVERED', icon: '✅' }, { name: 'CANCELLED', icon: '❌' },
  ]);
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

  selectState(name: string) {
    this.activeState.set(name);
    const info: Record<string, string> = {
      CREATED: 'CREATED → can PAY or CANCEL. Cannot ship yet.',
      PAID: 'PAID → can SHIP or CANCEL (with refund). Cannot pay again.',
      SHIPPED: 'SHIPPED → can DELIVER. Cannot cancel once shipped.',
      DELIVERED: 'DELIVERED → final state. Order complete!',
      CANCELLED: 'CANCELLED → final state. Order terminated.',
    };
    this.stateInfo.set(info[name] ?? '');
  }
}
