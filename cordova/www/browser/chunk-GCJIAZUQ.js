import{a as u,b,c as f}from"./chunk-LDZEFRU3.js";import{$a as v,Bb as p,Mb as a,Ob as t,Pa as i,Pb as g,na as c,qb as r,rb as n,sb as e,tb as s}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var E=class m{step=c(0);status=c("Click Publish Event to see the flow.");anim=c(!1);codeIntro=`public record UserCreatedEvent(Long userId, String email) {}

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
}`;codeCustom=`public record OrderPlacedEvent(Long orderId, BigDecimal amount, String email) {}

@Service
public class OrderService {
    @Autowired ApplicationEventPublisher pub;
    @Transactional
    public Order place(OrderRequest req) {
        Order order = processOrder(req);
        pub.publishEvent(new OrderPlacedEvent(order.getId(), order.getTotal(), req.getEmail()));
        return order;
    }
}`;codeListener=`@Component
public class OrderListeners {
    @EventListener
    public void sendEmail(OrderPlacedEvent e) { emailService.sendConfirmation(e.email()); }

    @EventListener
    public void trackAnalytics(OrderPlacedEvent e) { analytics.trackRevenue(e.amount()); }

    @EventListener(condition = "#event.amount > 1000")
    public void alertHighValue(OrderPlacedEvent event) { slack.alert("High-value order!"); }
}`;codeAsync=`@Configuration @EnableAsync
public class AsyncConfig {}

@Component
public class AsyncListeners {
    @Async @EventListener
    public void sendEmailAsync(UserCreatedEvent e) {
        // Runs in separate thread \u2014 non-blocking!
        emailService.sendWelcome(e.email());
    }
}`;codeTx=`@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
public void afterCommit(OrderPlacedEvent e) {
    // Only runs if transaction committed
    notificationService.send(e);
}

@TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
public void onRollback(OrderPlacedEvent e) {
    log.warn("Order failed: " + e.orderId());
}`;sleep(d){return new Promise(l=>setTimeout(l,d))}async runFlow(){this.anim()||(this.anim.set(!0),this.step.set(1),this.status.set("Publishing event..."),await this.sleep(700),this.step.set(2),this.status.set("UserCreatedEvent dispatched..."),await this.sleep(700),this.step.set(3),this.status.set("\u{1F4E7} Email listener triggered..."),await this.sleep(600),this.step.set(4),this.status.set("\u{1F4CA} Analytics listener triggered..."),await this.sleep(600),this.step.set(5),this.status.set("\u{1F4DD} All listeners done! \u2705"),this.anim.set(!1))}reset(){this.step.set(0),this.status.set("Click Publish Event to see the flow."),this.anim.set(!1)}static \u0275fac=function(l){return new(l||m)};static \u0275cmp=v({type:m,selectors:[["app-topic-spring-events"]],decls:79,vars:27,consts:[["title","Events & Listeners","subtitle","Decouple components with the publish-subscribe pattern.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-amber",3,"size"],[1,"event-flow"],[1,"evt-box"],[1,"evt-arrow"],[1,"evt-listeners"],[1,"evt-box","small"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-amber",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(l,o){l&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," Spring Events"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Spring Events"),e(),t(9," enable loose coupling. Publishers don't know about listeners."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"ApplicationEventPublisher:"),e(),t(14," Publishes events from any bean."),e(),n(15,"li")(16,"strong"),t(17,"@EventListener:"),e(),t(18," Handles events. Synchronous by default."),e(),n(19,"li")(20,"strong"),t(21,"@Async:"),e(),t(22," Non-blocking event processing."),e(),n(23,"li")(24,"strong"),t(25,"@TransactionalEventListener:"),e(),t(26," Process after transaction commits."),e()(),s(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),s(31,"app-icon",8),t(32," Event Flow"),e(),n(33,"div",9)(34,"div",10),t(35,"Publisher"),e(),n(36,"div",11),t(37,"\u{1F4E2}\u2192"),e(),n(38,"div",10),t(39,"Event"),e(),n(40,"div",11),t(41,"\u2192"),e(),n(42,"div",12)(43,"div",13),t(44,"\u{1F4E7} Email"),e(),n(45,"div",13),t(46,"\u{1F4CA} Analytics"),e(),n(47,"div",13),t(48,"\u{1F4DD} Audit"),e()()(),n(49,"div",14),t(50),e(),n(51,"div",15)(52,"button",16),p("click",function(){return o.runFlow()}),s(53,"app-icon",17),t(54," Publish Event"),e(),n(55,"button",18),p("click",function(){return o.reset()}),s(56,"app-icon",19),t(57," Reset"),e()()()(),n(58,"section",1)(59,"h2",2),s(60,"app-icon",20),t(61," Event Patterns"),e(),n(62,"div",21)(63,"div",22)(64,"h3",23),t(65,"Custom Events"),e(),s(66,"app-code-block",5),e(),n(67,"div",22)(68,"h3",23),t(69,"@EventListener"),e(),s(70,"app-code-block",5),e(),n(71,"div",22)(72,"h3",23),t(73,"Async Events"),e(),s(74,"app-code-block",5),e(),n(75,"div",22)(76,"h3",23),t(77,"Transactional Events"),e(),s(78,"app-code-block",5),e()()()()),l&2&&(i(3),r("size",28),i(24),r("code",o.codeIntro),i(4),r("size",22),i(3),a("active",o.step()>=1),i(2),a("visible",o.step()>=2),i(2),a("active",o.step()>=2),i(2),a("visible",o.step()>=3),i(3),a("active",o.step()>=3),i(2),a("active",o.step()>=4),i(2),a("active",o.step()>=5),i(3),g(o.status()),i(2),r("disabled",o.anim()),i(),r("size",16),i(2),r("disabled",o.anim()),i(),r("size",16),i(4),r("size",28),i(6),r("code",o.codeCustom),i(4),r("code",o.codeListener),i(4),r("code",o.codeAsync),i(4),r("code",o.codeTx))},dependencies:[u,b,f],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.event-flow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:20px;flex-wrap:wrap;justify-content:center}.evt-box[_ngcontent-%COMP%]{padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;text-align:center;font-family:JetBrains Mono,monospace;font-size:.68rem;font-weight:700;transition:all .3s}.evt-box.active[_ngcontent-%COMP%]{border-color:#d97706;background:#fffbeb}.evt-box.small[_ngcontent-%COMP%]{padding:6px 10px;font-size:.6rem}.evt-arrow[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s}.evt-arrow.visible[_ngcontent-%COMP%]{opacity:1}.evt-listeners[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer}.btn[_ngcontent-%COMP%]:disabled{opacity:.5}.btn-amber[_ngcontent-%COMP%]{background:#d97706;color:#fff}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{E as SpringEventsComponent};
