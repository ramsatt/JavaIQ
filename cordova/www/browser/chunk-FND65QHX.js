import{a as l,b as m}from"./chunk-FDH3XGHK.js";import{a as p}from"./chunk-IWR5KZXO.js";import{Ba as i,Ma as d,cb as o,db as n,eb as e,fb as r,xb as t}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";var u=class a{codeIntro=`// Sync vs Async
// \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
// \u2502 Pattern     \u2502 Latency   \u2502 Coupling      \u2502
// \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
// \u2502 REST        \u2502 Low       \u2502 High (request)\u2502
// \u2502 gRPC        \u2502 Very Low  \u2502 High          \u2502
// \u2502 Messaging   \u2502 Variable  \u2502 Low (events)  \u2502
// \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`;codeFeign=`// OpenFeign \u2014 declarative REST client
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
}`;codeWebClient=`// WebClient \u2014 reactive HTTP client
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
}`;codeGrpc=`// gRPC \u2014 high-performance binary protocol
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
// Supports streaming and bidirectional communication`;codeAsync=`// Async messaging with RabbitMQ
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
}`;static \u0275fac=function(s){return new(s||a)};static \u0275cmp=d({type:a,selectors:[["app-topic-ms-communication"]],decls:36,vars:7,consts:[["title","Inter-Service Communication","subtitle","Connect microservices. REST, gRPC, messaging, OpenFeign, and sync vs async patterns.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,c){s&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Communication"),e(),n(5,"div",4)(6,"p"),t(7,"Services communicate via "),n(8,"strong"),t(9,"synchronous"),e(),t(10," (REST, gRPC) or "),n(11,"strong"),t(12,"asynchronous"),e(),t(13," (messaging) patterns. Choose based on use case."),e(),r(14,"app-code-block",5),e()(),n(15,"section",1)(16,"h2",2),r(17,"app-icon",6),t(18," Patterns"),e(),n(19,"div",7)(20,"div",8)(21,"h3",9),t(22,"OpenFeign Client"),e(),r(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),t(26,"WebClient"),e(),r(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),t(30,"gRPC"),e(),r(31,"app-code-block",5),e(),n(32,"div",8)(33,"h3",9),t(34,"Async Messaging"),e(),r(35,"app-code-block",5),e()()()()),s&2&&(i(3),o("size",28),i(11),o("code",c.codeIntro),i(3),o("size",28),i(6),o("code",c.codeFeign),i(4),o("code",c.codeWebClient),i(4),o("code",c.codeGrpc),i(4),o("code",c.codeAsync))},dependencies:[p,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as MsCommunicationComponent};
