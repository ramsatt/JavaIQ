import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-discovery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Service Discovery" subtitle="Dynamic service location. Eureka Server, service registration, client-side discovery, and health checks." badge="MICROSERVICES" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Service Discovery</h2>
        <div class="prose"><p>Services register themselves with a <strong>discovery server</strong>. Other services query the registry to find available instances — no hardcoded URLs.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Eureka Server</h3><app-code-block [code]="codeServer" /></div>
          <div class="op-card"><h3 class="op-title">Eureka Client</h3><app-code-block [code]="codeClient" /></div>
          <div class="op-card"><h3 class="op-title">Discovery Client</h3><app-code-block [code]="codeDiscover" /></div>
          <div class="op-card"><h3 class="op-title">Consul Alternative</h3><app-code-block [code]="codeConsul" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsDiscoveryComponent {
  codeIntro = `// Without discovery: hardcoded URLs ❌
// http://192.168.1.10:8081/api/users

// With discovery: logical names ✅
// http://user-service/api/users
// Discovery server resolves to actual instance`;
  codeServer = `// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServer { }

# application.yml
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false`;
  codeClient = `// Eureka Client (each microservice)
@SpringBootApplication
@EnableDiscoveryClient
public class UserService { }

# application.yml
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true`;
  codeDiscover = `// Call other services by name
@Bean
@LoadBalanced  // enables service discovery
public RestTemplate restTemplate() {
    return new RestTemplate();
}

// Use logical service name
User user = restTemplate.getForObject(
    "http://user-service/api/users/{id}",
    User.class, userId);

// With WebClient
WebClient client = WebClient.builder()
    .baseUrl("http://user-service")
    .build();`;
  codeConsul = `// HashiCorp Consul (alternative)
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
</dependency>

spring:
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        service-name: user-service
        health-check-interval: 10s`;
}
