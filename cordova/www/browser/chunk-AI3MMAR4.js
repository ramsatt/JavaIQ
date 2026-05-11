import{a as l,b as p,c as m}from"./chunk-VPQEQBVO.js";import{Ba as i,Ka as c,ab as n,bb as o,cb as e,db as r,zb as t}from"./chunk-QMXD7TGL.js";import"./chunk-NWJ5J3BN.js";var g=class s{codeIntro=`// Without Mediator: User A \u2192 User B, User A \u2192 User C, B \u2192 C ...
// N users = N\xD7(N-1) connections \u2014 spaghetti!

// With Mediator: every User \u2192 ChatRoom \u2192 every other User
// N users = N connections total`;codeMediator=`// Mediator interface
interface ChatMediator {
    void sendMessage(String message, User sender);
    void addUser(User user);
}`;codeConcrete=`// Concrete Mediator \u2014 central coordinator
class ChatRoom implements ChatMediator {
    private final List<User> users = new ArrayList<>();

    @Override
    public void addUser(User user) {
        users.add(user);
    }

    @Override
    public void sendMessage(String message, User sender) {
        users.stream()
             .filter(u -> u != sender)   // don't echo back to sender
             .forEach(u -> u.receive(sender.getName() + ": " + message));
    }
}`;codeColleague=`// Colleague \u2014 knows the mediator, not other colleagues
class User {
    private final String name;
    private final ChatMediator mediator;

    User(String name, ChatMediator mediator) {
        this.name     = name;
        this.mediator = mediator;
        mediator.addUser(this);
    }

    public String getName() { return name; }

    public void send(String message) {
        System.out.println("[" + name + "] sends: " + message);
        mediator.sendMessage(message, this);
    }

    public void receive(String message) {
        System.out.println("[" + name + "] received: " + message);
    }
}

// Usage
ChatRoom room = new ChatRoom();
User alice = new User("Alice", room);
User bob   = new User("Bob",   room);
User carol = new User("Carol", room);

alice.send("Hello everyone!");
// [Bob]   received: Alice: Hello everyone!
// [Carol] received: Alice: Hello everyone!`;codeSpring=`// Spring ApplicationEventPublisher IS a Mediator
// Publishers and listeners are decoupled

// Event
public class OrderPlacedEvent {
    private final Long orderId;
    public OrderPlacedEvent(Long id) { this.orderId = id; }
    public Long getOrderId() { return orderId; }
}

// Publisher (Colleague A)
@Service
public class OrderService {
    @Autowired ApplicationEventPublisher publisher;

    public void placeOrder(Order order) {
        // ... save order ...
        publisher.publishEvent(new OrderPlacedEvent(order.getId()));
        // OrderService has NO reference to EmailService, InventoryService, etc.
    }
}

// Listener (Colleague B) \u2014 completely decoupled
@Component
public class EmailService {
    @EventListener
    public void onOrderPlaced(OrderPlacedEvent event) {
        // send confirmation email
    }
}`;static \u0275fac=function(d){return new(d||s)};static \u0275cmp=c({type:s,selectors:[["app-topic-dp-mediator"]],decls:38,vars:7,consts:[["title","Mediator","subtitle","Reduce chaotic dependencies between objects. Route communication through a central mediator instead of direct peer-to-peer coupling.","badge","DESIGN PATTERNS","gradient","linear-gradient(135deg, #4338ca, #818cf8)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-indigo",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-purple",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(d,a){d&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," What is Mediator?"),e(),o(5,"div",4)(6,"p"),t(7,"The "),o(8,"strong"),t(9,"Mediator"),e(),t(10," pattern defines an object that encapsulates how a set of objects interact. Instead of objects referencing each other directly (N\xD7N dependencies), each object knows only the mediator (N\xD71)."),e(),o(11,"p"),t(12,"Classic use cases: chat room (users \u2194 chatroom), air traffic control (planes \u2194 tower), UI form validation, Spring's "),o(13,"code"),t(14,"ApplicationEventPublisher"),e(),t(15,"."),e(),r(16,"app-code-block",5),e()(),o(17,"section",1)(18,"h2",2),r(19,"app-icon",6),t(20," Implementations"),e(),o(21,"div",7)(22,"div",8)(23,"h3",9),t(24,"Mediator Interface"),e(),r(25,"app-code-block",5),e(),o(26,"div",8)(27,"h3",9),t(28,"Concrete Mediator"),e(),r(29,"app-code-block",5),e(),o(30,"div",8)(31,"h3",9),t(32,"Colleague (User)"),e(),r(33,"app-code-block",5),e(),o(34,"div",8)(35,"h3",9),t(36,"Spring Event Bus"),e(),r(37,"app-code-block",5),e()()()()),d&2&&(i(3),n("size",28),i(13),n("code",a.codeIntro),i(3),n("size",28),i(6),n("code",a.codeMediator),i(4),n("code",a.codeConcrete),i(4),n("code",a.codeColleague),i(4),n("code",a.codeSpring))},dependencies:[l,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.icon-purple[_ngcontent-%COMP%]{color:#7c3aed}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:.8rem;color:#4338ca}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as DpMediatorComponent};
