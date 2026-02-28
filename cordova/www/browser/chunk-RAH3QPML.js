import{a as p,b as m}from"./chunk-FDH3XGHK.js";import{a as d}from"./chunk-IWR5KZXO.js";import{Ba as n,Ma as s,cb as i,db as a,eb as e,fb as o,xb as t}from"./chunk-AMBX34QR.js";import"./chunk-NWJ5J3BN.js";var u=class l{codeIntro=`// Spring Cloud LoadBalancer (default)
// Replaces deprecated Netflix Ribbon

// How it works:
// 1. Service registers with Eureka (3 instances)
// 2. Client fetches list from Eureka
// 3. LoadBalancer picks one (round-robin by default)
// 4. Request goes to chosen instance

// user-service \u2192 instance-1:8081 \u2190 picked!
//              \u2192 instance-2:8082
//              \u2192 instance-3:8083`;codeRest=`@Bean
@LoadBalanced  // enables load balancing
public RestTemplate restTemplate() {
    return new RestTemplate();
}

// Use service name as hostname
User user = restTemplate.getForObject(
    "http://user-service/api/users/{id}",
    User.class, userId);
// LoadBalancer resolves "user-service" to actual host:port`;codeWeb=`// WebClient with load balancing
@Bean
@LoadBalanced
public WebClient.Builder webClientBuilder() {
    return WebClient.builder();
}

// Use it
@Service
public class OrderService {
    private final WebClient userClient;
    public OrderService(WebClient.Builder builder) {
        this.userClient = builder.baseUrl("http://user-service").build();
    }
    public Mono<User> getUser(Long id) {
        return userClient.get().uri("/api/users/{id}", id)
            .retrieve().bodyToMono(User.class);
    }
}`;codeCustom=`// Custom load balancing strategy
@Configuration
public class CustomLBConfig {
    @Bean
    public ReactorLoadBalancer<ServiceInstance> customLb(
            Environment env, LoadBalancerClientFactory factory) {
        String name = env.getProperty(
            LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(
            factory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
    }
}

// Apply to specific service
@LoadBalancerClient(name = "user-service", configuration = CustomLBConfig.class)
public class AppConfig {}`;codeHealth=`# Instance health checking
spring:
  cloud:
    loadbalancer:
      health-check:
        initial-delay: 5s
        interval: 10s
        path:
          default: /actuator/health

# Zoned load balancing (prefer same zone)
spring:
  cloud:
    loadbalancer:
      zone: us-east-1a`;static \u0275fac=function(c){return new(c||l)};static \u0275cmp=s({type:l,selectors:[["app-topic-ms-loadbalance"]],decls:32,vars:7,consts:[["title","Load Balancing","subtitle","Distribute traffic across service instances. Client-side load balancing with Spring Cloud LoadBalancer.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #065f46, #34d399)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-emerald",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,r){c&1&&(a(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Load Balancing"),e(),a(5,"div",4)(6,"p")(7,"strong"),t(8,"Client-side load balancing"),e(),t(9," distributes requests across multiple service instances. The client picks which instance to call."),e(),o(10,"app-code-block",5),e()(),a(11,"section",1)(12,"h2",2),o(13,"app-icon",6),t(14," Config"),e(),a(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"RestTemplate LB"),e(),o(19,"app-code-block",5),e(),a(20,"div",8)(21,"h3",9),t(22,"WebClient LB"),e(),o(23,"app-code-block",5),e(),a(24,"div",8)(25,"h3",9),t(26,"Custom Strategy"),e(),o(27,"app-code-block",5),e(),a(28,"div",8)(29,"h3",9),t(30,"Health Checks"),e(),o(31,"app-code-block",5),e()()()()),c&2&&(n(3),i("size",28),n(7),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeRest),n(4),i("code",r.codeWeb),n(4),i("code",r.codeCustom),n(4),i("code",r.codeHealth))},dependencies:[d,p,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-emerald[_ngcontent-%COMP%]{color:#059669}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as MsLoadbalanceComponent};
