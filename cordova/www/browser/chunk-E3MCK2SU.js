import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-loadbalance.component.ts
var MsLoadbalanceComponent = class _MsLoadbalanceComponent {
  codeIntro = `// Spring Cloud LoadBalancer (default)
// Replaces deprecated Netflix Ribbon

// How it works:
// 1. Service registers with Eureka (3 instances)
// 2. Client fetches list from Eureka
// 3. LoadBalancer picks one (round-robin by default)
// 4. Request goes to chosen instance

// user-service \u2192 instance-1:8081 \u2190 picked!
//              \u2192 instance-2:8082
//              \u2192 instance-3:8083`;
  codeRest = `@Bean
@LoadBalanced  // enables load balancing
public RestTemplate restTemplate() {
    return new RestTemplate();
}

// Use service name as hostname
User user = restTemplate.getForObject(
    "http://user-service/api/users/{id}",
    User.class, userId);
// LoadBalancer resolves "user-service" to actual host:port`;
  codeWeb = `// WebClient with load balancing
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
}`;
  codeCustom = `// Custom load balancing strategy
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
public class AppConfig {}`;
  codeHealth = `# Instance health checking
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
      zone: us-east-1a`;
  static \u0275fac = function MsLoadbalanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsLoadbalanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsLoadbalanceComponent, selectors: [["app-topic-ms-loadbalance"]], decls: 32, vars: 7, consts: [["title", "Load Balancing", "subtitle", "Distribute traffic across service instances. Client-side load balancing with Spring Cloud LoadBalancer.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #065f46, #34d399)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-emerald", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsLoadbalanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Load Balancing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Client-side load balancing");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " distributes requests across multiple service instances. The client picks which instance to call.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "RestTemplate LB");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "WebClient LB");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Custom Strategy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Health Checks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(7);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeRest);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeWeb);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeHealth);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-loadbalance.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsLoadbalanceComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-loadbalance", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Load Balancing" subtitle="Distribute traffic across service instances. Client-side load balancing with Spring Cloud LoadBalancer." badge="MICROSERVICES" gradient="linear-gradient(135deg, #065f46, #34d399)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-emerald" /> Load Balancing</h2>
        <div class="prose"><p><strong>Client-side load balancing</strong> distributes requests across multiple service instances. The client picks which instance to call.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Config</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">RestTemplate LB</h3><app-code-block [code]="codeRest" /></div>
          <div class="op-card"><h3 class="op-title">WebClient LB</h3><app-code-block [code]="codeWeb" /></div>
          <div class="op-card"><h3 class="op-title">Custom Strategy</h3><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Health Checks</h3><app-code-block [code]="codeHealth" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;2af45e24d5723a362d7e482ed60c327f114812634e16647db885d2da64291dab;D:/A21/JavaIQ/src/app/features/tutorials/topics/ms-loadbalance.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-emerald {\n  color: #059669;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-loadbalance.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsLoadbalanceComponent, { className: "MsLoadbalanceComponent", filePath: "src/app/features/tutorials/topics/ms-loadbalance.component.ts", lineNumber: 33 });
})();
export {
  MsLoadbalanceComponent
};
//# sourceMappingURL=chunk-E3MCK2SU.js.map
