import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-config',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Config Server" subtitle="Centralized configuration management. Git-backed config, encryption, dynamic refresh, and environment-specific settings." badge="MICROSERVICES" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Config Server</h2>
        <div class="prose"><p>Externalize all config to a <strong>central server</strong>. Services fetch config at startup. Update Git → refresh all services.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Server Setup</h3><app-code-block [code]="codeServer" /></div>
          <div class="op-card"><h3 class="op-title">Client Setup</h3><app-code-block [code]="codeClient" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Refresh</h3><app-code-block [code]="codeRefresh" /></div>
          <div class="op-card"><h3 class="op-title">Encryption</h3><app-code-block [code]="codeEncrypt" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsConfigComponent {
  codeIntro = `// Git repo structure for config:
// config-repo/
// ├── application.yml        (shared defaults)
// ├── user-service.yml       (user-service specific)
// ├── user-service-prod.yml  (user-service + prod profile)
// └── order-service.yml

// Resolution order:
// application.yml → {service}.yml → {service}-{profile}.yml`;
  codeServer = `@SpringBootApplication
@EnableConfigServer
public class ConfigServer { }

# application.yml
server:
  port: 8888
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/org/config-repo
          default-label: main
          clone-on-start: true

# Fetch config:
# GET /user-service/prod → returns user-service-prod.yml`;
  codeClient = `// Each microservice
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>

# application.yml
spring:
  application:
    name: user-service
  config:
    import: "configserver:http://localhost:8888"
  cloud:
    config:
      fail-fast: true
      retry:
        max-attempts: 5`;
  codeRefresh = `// Dynamic config refresh (no restart!)
@RestController
@RefreshScope  // recreated on refresh
public class AppController {
    @Value("\${app.feature-flag}")
    private boolean featureEnabled;
}

// Refresh single service:
// POST /actuator/refresh

// Refresh ALL services (Spring Cloud Bus + RabbitMQ):
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bus-amqp</artifactId>
</dependency>
// POST /actuator/busrefresh → refreshes ALL services`;
  codeEncrypt = `# Encrypt sensitive properties
# Set encryption key
encrypt:
  key: my-secret-symmetric-key

# Encrypt a value:
# POST /encrypt  body: "myDbPassword"
# Returns: {cipher}AQA...encrypted...

# Use in config:
spring:
  datasource:
    password: '{cipher}AQA...encrypted...'
# Config Server decrypts before serving`;
}
