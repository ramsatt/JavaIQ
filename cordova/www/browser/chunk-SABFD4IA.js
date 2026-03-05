import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-communication.component.ts
var MsCommunicationComponent = class _MsCommunicationComponent {
  codeIntro = `// Sync vs Async
// \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502 Pattern     \u2502 Latency   \u2502 Coupling      \u2502
// \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
// \u2502 REST        \u2502 Low       \u2502 High (request)\u2502
// \u2502 gRPC        \u2502 Very Low  \u2502 High          \u2502
// \u2502 Messaging   \u2502 Variable  \u2502 Low (events)  \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`;
  codeFeign = `// OpenFeign \u2014 declarative REST client
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
  codeWebClient = `// WebClient \u2014 reactive HTTP client
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
  codeGrpc = `// gRPC \u2014 high-performance binary protocol
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
  static \u0275fac = function MsCommunicationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsCommunicationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsCommunicationComponent, selectors: [["app-topic-ms-communication"]], decls: 36, vars: 7, consts: [["title", "Inter-Service Communication", "subtitle", "Connect microservices. REST, gRPC, messaging, OpenFeign, and sync vs async patterns.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsCommunicationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Services communicate via ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "synchronous");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " (REST, gRPC) or ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "asynchronous");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " (messaging) patterns. Choose based on use case.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "section", 1)(16, "h2", 2);
      \u0275\u0275element(17, "app-icon", 6);
      \u0275\u0275text(18, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "OpenFeign Client");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "WebClient");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "gRPC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "h3", 9);
      \u0275\u0275text(34, "Async Messaging");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(11);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeFeign);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWebClient);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGrpc);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeAsync);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-communication.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsCommunicationComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-communication", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;be89a878d7fde9fd1e193ab701e806fec8898d17827fb12905606abf051d9913;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/ms-communication.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-communication.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsCommunicationComponent, { className: "MsCommunicationComponent", filePath: "src/app/features/tutorials/topics/ms-communication.component.ts", lineNumber: 33 });
})();
export {
  MsCommunicationComponent
};
//# sourceMappingURL=chunk-SABFD4IA.js.map
