import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Microservices Introduction" subtitle="Understand when and why to use microservices. Monolith vs microservices, bounded contexts, and decomposition strategies." badge="MICROSERVICES" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> What are Microservices?</h2>
        <div class="prose">
          <p><strong>Microservices</strong> decompose an application into small, independently deployable services. Each owns its data and communicates via APIs.</p>
          <ul>
            <li><strong>Single Responsibility:</strong> Each service does one thing well.</li>
            <li><strong>Independent Deployment:</strong> Deploy without affecting other services.</li>
            <li><strong>Technology Freedom:</strong> Each service can use different tech stacks.</li>
            <li><strong>Failure Isolation:</strong> One service failing doesn't crash everything.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-blue" /> Monolith vs Microservices</h3>
          <div class="compare">
            <div class="compare-col" [class.active]="activeArch() === 'mono'" (click)="select('mono')"><span class="compare-icon">📦</span><span class="compare-label">Monolith</span></div>
            <div class="compare-col" [class.active]="activeArch() === 'micro'" (click)="select('micro')"><span class="compare-icon">🔗</span><span class="compare-label">Microservices</span></div>
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Decomposition</h3><app-code-block [code]="codeDecomp" /></div>
          <div class="op-card"><h3 class="op-title">Bounded Context</h3><app-code-block [code]="codeDdd" /></div>
          <div class="op-card"><h3 class="op-title">Database per Service</h3><app-code-block [code]="codeDb" /></div>
          <div class="op-card"><h3 class="op-title">Project Structure</h3><app-code-block [code]="codeStructure" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; }
    .compare-col { padding: 20px; border-radius: 14px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .compare-col.active { border-color: #2563eb; background: #eff6ff; transform: scale(1.03); }
    .compare-icon { display: block; font-size: 2rem; margin-bottom: 8px; } .compare-label { font-size: 0.8rem; font-weight: 800; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsIntroComponent {
  activeArch = signal(''); status = signal('Click to compare architectures.');
  codeIntro = `// E-commerce as Microservices
// Each service is independently:
//   ✅ Developed
//   ✅ Deployed
//   ✅ Scaled
//   ✅ Monitored

// Services:
// user-service      → User management, auth
// product-service   → Product catalog, inventory
// order-service     → Order processing, checkout
// payment-service   → Payment processing
// notification-svc  → Email, SMS, push`;
  codeDecomp = `// Decomposition strategies:

// 1. By Business Capability
//    user-service, order-service, payment-service

// 2. By Subdomain (DDD)
//    Bounded contexts from domain model

// 3. Strangler Fig Pattern (migration)
//    Gradually replace monolith pieces
//    Route traffic: old → new service

// Anti-patterns to avoid:
// ❌ Distributed monolith (tightly coupled services)
// ❌ Nano-services (too fine-grained)
// ❌ Shared database (defeats the purpose)`;
  codeDdd = `// Domain-Driven Design → Natural service boundaries

// Order Context
@Entity public class Order {
    Long id; String status; BigDecimal total;
    Long customerId;  // reference, NOT object!
}

// Customer Context (separate service!)
@Entity public class Customer {
    Long id; String name; String email;
}

// Each context:
// ✅ Has its own database
// ✅ Owns its entities
// ✅ Exposes its own API
// ✅ Communicates via events/REST`;
  codeDb = `// Database per Service pattern
// Each microservice owns its data

// user-service → PostgreSQL (relational)
// product-service → MongoDB (flexible schema)
// search-service → Elasticsearch (full-text)
// session-service → Redis (fast key-value)
// analytics-service → ClickHouse (OLAP)

// ⚠️ No cross-service JOINs!
// Use: API composition or CQRS for queries
// Use: Events for data synchronization`;
  codeStructure = `// Multi-module Maven project
ecommerce/
├── pom.xml                  (parent POM)
├── api-gateway/             (Spring Cloud Gateway)
├── service-discovery/       (Eureka Server)
├── config-server/           (Centralized config)
├── user-service/
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── Dockerfile
├── order-service/
├── payment-service/
├── notification-service/
└── docker-compose.yml       (local dev)`;

  select(arch: string) {
    this.activeArch.set(arch);
    const info: Record<string, string> = {
      'mono': 'Monolith: Simple to develop/deploy. Scales as one unit. Great for small teams & MVPs. Hard to scale specific parts.',
      'micro': 'Microservices: Independent scaling & deployment. Tech freedom. Complex infrastructure. Best for large teams & scale.',
    };
    this.status.set(info[arch] ?? '');
  }
}
