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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-events.component.ts
var SpringEventsComponent = class _SpringEventsComponent {
  step = signal(0, ...ngDevMode ? [{ debugName: "step" }] : []);
  status = signal("Click Publish Event to see the flow.", ...ngDevMode ? [{ debugName: "status" }] : []);
  anim = signal(false, ...ngDevMode ? [{ debugName: "anim" }] : []);
  codeIntro = `public record UserCreatedEvent(Long userId, String email) {}

@Service
public class UserService {
    @Autowired ApplicationEventPublisher publisher;
    public User create(UserDTO dto) {
        User user = repo.save(map(dto));
        publisher.publishEvent(new UserCreatedEvent(user.getId(), user.getEmail()));
        return user;
    }
}

@Component
public class WelcomeEmailListener {
    @EventListener
    public void on(UserCreatedEvent e) { emailService.sendWelcome(e.email()); }
}`;
  codeCustom = `public record OrderPlacedEvent(Long orderId, BigDecimal amount, String email) {}

@Service
public class OrderService {
    @Autowired ApplicationEventPublisher pub;
    @Transactional
    public Order place(OrderRequest req) {
        Order order = processOrder(req);
        pub.publishEvent(new OrderPlacedEvent(order.getId(), order.getTotal(), req.getEmail()));
        return order;
    }
}`;
  codeListener = `@Component
public class OrderListeners {
    @EventListener
    public void sendEmail(OrderPlacedEvent e) { emailService.sendConfirmation(e.email()); }

    @EventListener
    public void trackAnalytics(OrderPlacedEvent e) { analytics.trackRevenue(e.amount()); }

    @EventListener(condition = "#event.amount > 1000")
    public void alertHighValue(OrderPlacedEvent event) { slack.alert("High-value order!"); }
}`;
  codeAsync = `@Configuration @EnableAsync
public class AsyncConfig {}

@Component
public class AsyncListeners {
    @Async @EventListener
    public void sendEmailAsync(UserCreatedEvent e) {
        // Runs in separate thread \u2014 non-blocking!
        emailService.sendWelcome(e.email());
    }
}`;
  codeTx = `@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
public void afterCommit(OrderPlacedEvent e) {
    // Only runs if transaction committed
    notificationService.send(e);
}

@TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
public void onRollback(OrderPlacedEvent e) {
    log.warn("Order failed: " + e.orderId());
}`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runFlow() {
    if (this.anim())
      return;
    this.anim.set(true);
    this.step.set(1);
    this.status.set("Publishing event...");
    await this.sleep(700);
    this.step.set(2);
    this.status.set("UserCreatedEvent dispatched...");
    await this.sleep(700);
    this.step.set(3);
    this.status.set("\u{1F4E7} Email listener triggered...");
    await this.sleep(600);
    this.step.set(4);
    this.status.set("\u{1F4CA} Analytics listener triggered...");
    await this.sleep(600);
    this.step.set(5);
    this.status.set("\u{1F4DD} All listeners done! \u2705");
    this.anim.set(false);
  }
  reset() {
    this.step.set(0);
    this.status.set("Click Publish Event to see the flow.");
    this.anim.set(false);
  }
  static \u0275fac = function SpringEventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringEventsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringEventsComponent, selectors: [["app-topic-spring-events"]], decls: 79, vars: 27, consts: [["title", "Events & Listeners", "subtitle", "Decouple components with the publish-subscribe pattern.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-amber", 3, "size"], [1, "event-flow"], [1, "evt-box"], [1, "evt-arrow"], [1, "evt-listeners"], [1, "evt-box", "small"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-amber", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SpringEventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Spring Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Spring Events");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " enable loose coupling. Publishers don't know about listeners.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "ApplicationEventPublisher:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Publishes events from any bean.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "@EventListener:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Handles events. Synchronous by default.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "@Async:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Non-blocking event processing.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "@TransactionalEventListener:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Process after transaction commits.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Event Flow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "div", 10);
      \u0275\u0275text(35, "Publisher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37, "\u{1F4E2}\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 10);
      \u0275\u0275text(39, "Event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 11);
      \u0275\u0275text(41, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 12)(43, "div", 13);
      \u0275\u0275text(44, "\u{1F4E7} Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 13);
      \u0275\u0275text(46, "\u{1F4CA} Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 13);
      \u0275\u0275text(48, "\u{1F4DD} Audit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 14);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 15)(52, "button", 16);
      \u0275\u0275listener("click", function SpringEventsComponent_Template_button_click_52_listener() {
        return ctx.runFlow();
      });
      \u0275\u0275element(53, "app-icon", 17);
      \u0275\u0275text(54, " Publish Event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 18);
      \u0275\u0275listener("click", function SpringEventsComponent_Template_button_click_55_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(56, "app-icon", 19);
      \u0275\u0275text(57, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "section", 1)(59, "h2", 2);
      \u0275\u0275element(60, "app-icon", 20);
      \u0275\u0275text(61, " Event Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 21)(63, "div", 22)(64, "h3", 23);
      \u0275\u0275text(65, "Custom Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 22)(68, "h3", 23);
      \u0275\u0275text(69, "@EventListener");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 22)(72, "h3", 23);
      \u0275\u0275text(73, "Async Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 22)(76, "h3", 23);
      \u0275\u0275text(77, "Transactional Events");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.step() >= 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("visible", ctx.step() >= 2);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.step() >= 2);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("visible", ctx.step() >= 3);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.step() >= 3);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.step() >= 4);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.step() >= 5);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeListener);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAsync);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTx);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.event-flow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.evt-box[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  transition: all 0.3s;\n}\n.evt-box.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.evt-box.small[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  font-size: 0.6rem;\n}\n.evt-arrow[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.evt-arrow.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.evt-listeners[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=spring-events.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringEventsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-events", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Events & Listeners" subtitle="Decouple components with the publish-subscribe pattern." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Spring Events</h2>
        <div class="prose">
          <p><strong>Spring Events</strong> enable loose coupling. Publishers don't know about listeners.</p>
          <ul>
            <li><strong>ApplicationEventPublisher:</strong> Publishes events from any bean.</li>
            <li><strong>&#64;EventListener:</strong> Handles events. Synchronous by default.</li>
            <li><strong>&#64;Async:</strong> Non-blocking event processing.</li>
            <li><strong>&#64;TransactionalEventListener:</strong> Process after transaction commits.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-amber" /> Event Flow</h3>
          <div class="event-flow">
            <div class="evt-box" [class.active]="step() >= 1">Publisher</div>
            <div class="evt-arrow" [class.visible]="step() >= 2">\u{1F4E2}\u2192</div>
            <div class="evt-box" [class.active]="step() >= 2">Event</div>
            <div class="evt-arrow" [class.visible]="step() >= 3">\u2192</div>
            <div class="evt-listeners">
              <div class="evt-box small" [class.active]="step() >= 3">\u{1F4E7} Email</div>
              <div class="evt-box small" [class.active]="step() >= 4">\u{1F4CA} Analytics</div>
              <div class="evt-box small" [class.active]="step() >= 5">\u{1F4DD} Audit</div>
            </div>
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runFlow()" [disabled]="anim()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Publish Event</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Event Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Events</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">&#64;EventListener</h3><app-code-block [code]="codeListener" /></div>
          <div class="op-card"><h3 class="op-title">Async Events</h3><app-code-block [code]="codeAsync" /></div>
          <div class="op-card"><h3 class="op-title">Transactional Events</h3><app-code-block [code]="codeTx" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;fb740f596fca270c611508944dc1f66cad9322e3a31aa40d36b266b169ddccae;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/spring-events.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.event-flow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.evt-box {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  font-weight: 700;\n  transition: all 0.3s;\n}\n.evt-box.active {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.evt-box.small {\n  padding: 6px 10px;\n  font-size: 0.6rem;\n}\n.evt-arrow {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.evt-arrow.visible {\n  opacity: 1;\n}\n.evt-listeners {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=spring-events.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringEventsComponent, { className: "SpringEventsComponent", filePath: "src/app/features/tutorials/topics/spring-events.component.ts", lineNumber: 70 });
})();
export {
  SpringEventsComponent
};
//# sourceMappingURL=chunk-TU75UGSU.js.map
