import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-dp-mediator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Mediator" subtitle="Reduce chaotic dependencies between objects. Route communication through a central mediator instead of direct peer-to-peer coupling." badge="DESIGN PATTERNS" gradient="linear-gradient(135deg, #4338ca, #818cf8)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-indigo" /> What is Mediator?</h2>
        <div class="prose">
          <p>The <strong>Mediator</strong> pattern defines an object that encapsulates how a set of objects interact. Instead of objects referencing each other directly (N×N dependencies), each object knows only the mediator (N×1).</p>
          <p>Classic use cases: chat room (users ↔ chatroom), air traffic control (planes ↔ tower), UI form validation, Spring's <code>ApplicationEventPublisher</code>.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-purple" /> Implementations</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Mediator Interface</h3><app-code-block [code]="codeMediator" /></div>
          <div class="op-card"><h3 class="op-title">Concrete Mediator</h3><app-code-block [code]="codeConcrete" /></div>
          <div class="op-card"><h3 class="op-title">Colleague (User)</h3><app-code-block [code]="codeColleague" /></div>
          <div class="op-card"><h3 class="op-title">Spring Event Bus</h3><app-code-block [code]="codeSpring" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-indigo { color: #4f46e5; } .icon-purple { color: #7c3aed; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; color: #4338ca; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class DpMediatorComponent {
  codeIntro = `// Without Mediator: User A → User B, User A → User C, B → C ...
// N users = N×(N-1) connections — spaghetti!

// With Mediator: every User → ChatRoom → every other User
// N users = N connections total`;

  codeMediator = `// Mediator interface
interface ChatMediator {
    void sendMessage(String message, User sender);
    void addUser(User user);
}`;

  codeConcrete = `// Concrete Mediator — central coordinator
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
}`;

  codeColleague = `// Colleague — knows the mediator, not other colleagues
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
// [Carol] received: Alice: Hello everyone!`;

  codeSpring = `// Spring ApplicationEventPublisher IS a Mediator
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

// Listener (Colleague B) — completely decoupled
@Component
public class EmailService {
    @EventListener
    public void onOrderPlaced(OrderPlacedEvent event) {
        // send confirmation email
    }
}`;
}
