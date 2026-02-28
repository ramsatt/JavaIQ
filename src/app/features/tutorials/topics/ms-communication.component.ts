import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-communication',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Inter-Service Communication" subtitle="Connect microservices. REST, gRPC, messaging, OpenFeign, and sync vs async patterns." badge="MICROSERVICES" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> Communication</h2>
        <div class="prose"><p>Services communicate via <strong>synchronous</strong> (REST, gRPC) or <strong>asynchronous</strong> (messaging) patterns. Choose based on use case.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">OpenFeign Client</h3><app-code-block [code]="codeFeign" /></div>
          <div class="op-card"><h3 class="op-title">WebClient</h3><app-code-block [code]="codeWebClient" /></div>
          <div class="op-card"><h3 class="op-title">gRPC</h3><app-code-block [code]="codeGrpc" /></div>
          <div class="op-card"><h3 class="op-title">Async Messaging</h3><app-code-block [code]="codeAsync" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsCommunicationComponent {
  codeIntro = `// Sync vs Async
// ┌─────────────┬───────────┬───────────────┐
// │ Pattern     │ Latency   │ Coupling      │
// ├─────────────┼───────────┼───────────────┤
// │ REST        │ Low       │ High (request)│
// │ gRPC        │ Very Low  │ High          │
// │ Messaging   │ Variable  │ Low (events)  │
// └─────────────┴───────────┴───────────────┘`;
  codeFeign = `// OpenFeign — declarative REST client
@FeignClient(name = "user-service", fallback = UserClientFallback.class)
public interface UserClient {
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable Long id);

    @PostMapping("/api/users")
    User createUser(@RequestBody CreateUserDTO dto);

    @GetMapping("/api/users")
    List<User> getAllUsers(@RequestParam("page") int page);
}

// Just inject and use!
@Service
public class OrderService {
    private final UserClient userClient;
    public OrderService(UserClient userClient) { this.userClient = userClient; }
    public void process(Long userId) {
        User user = userClient.getUser(userId);
    }
}`;
  codeWebClient = `// WebClient — reactive HTTP client
@Service
public class ProductService {
    private final WebClient client;

    public ProductService(WebClient.Builder builder) {
        this.client = builder.baseUrl("http://product-service").build();
    }

    public Mono<Product> getProduct(Long id) {
        return client.get()
            .uri("/api/products/{id}", id)
            .retrieve()
            .onStatus(HttpStatusCode::is4xxClientError,
                resp -> Mono.error(new NotFoundException()))
            .bodyToMono(Product.class)
            .timeout(Duration.ofSeconds(3))
            .retry(2);
    }
}`;
  codeGrpc = `// gRPC — high-performance binary protocol
// product.proto
syntax = "proto3";
service ProductService {
    rpc GetProduct(ProductRequest) returns (ProductResponse);
    rpc ListProducts(Empty) returns (stream ProductResponse);
}
message ProductRequest { int64 id = 1; }
message ProductResponse {
    int64 id = 1;
    string name = 2;
    double price = 3;
}

// gRPC is 7-10x faster than REST for microservices
// Uses HTTP/2, binary serialization (protobuf)
// Supports streaming and bidirectional communication`;
  codeAsync = `// Async messaging with RabbitMQ
@Service
public class OrderService {
    @Autowired RabbitTemplate rabbit;

    public void placeOrder(Order order) {
        orderRepo.save(order);
        rabbit.convertAndSend("order-exchange",
            "order.placed", new OrderEvent(order.getId()));
    }
}

// Consumer in another service
@RabbitListener(queues = "order-placed-queue")
public void handleOrderPlaced(OrderEvent event) {
    notificationService.sendConfirmation(event.orderId());
}`;
}
