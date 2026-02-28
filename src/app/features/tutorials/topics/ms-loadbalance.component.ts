import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-loadbalance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-emerald { color: #059669; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsLoadbalanceComponent {
  codeIntro = `// Spring Cloud LoadBalancer (default)
// Replaces deprecated Netflix Ribbon

// How it works:
// 1. Service registers with Eureka (3 instances)
// 2. Client fetches list from Eureka
// 3. LoadBalancer picks one (round-robin by default)
// 4. Request goes to chosen instance

// user-service → instance-1:8081 ← picked!
//              → instance-2:8082
//              → instance-3:8083`;
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
}
