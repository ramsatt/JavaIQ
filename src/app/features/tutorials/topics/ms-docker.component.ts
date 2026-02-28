import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-docker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Containerization" subtitle="Docker Compose for microservices. Multi-service setup, networking, volumes, and local development." badge="MICROSERVICES" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> Docker for Microservices</h2>
        <div class="prose"><p>Docker Compose defines your entire system in one file. Start all services with <code>docker compose up</code>.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Full Compose</h3><app-code-block [code]="codeCompose" /></div>
          <div class="op-card"><h3 class="op-title">Networking</h3><app-code-block [code]="codeNetwork" /></div>
          <div class="op-card"><h3 class="op-title">Health Checks</h3><app-code-block [code]="codeHealth" /></div>
          <div class="op-card"><h3 class="op-title">Dev vs Prod</h3><app-code-block [code]="codeEnvs" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #2563eb; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class MsDockerComponent {
  codeIntro = `# docker-compose.yml (full microservice stack)
# Start everything: docker compose up -d
# Stop everything:  docker compose down
# View logs:        docker compose logs -f user-service`;
  codeCompose = `services:
  discovery:
    build: ./discovery-server
    ports: ["8761:8761"]

  config-server:
    build: ./config-server
    ports: ["8888:8888"]
    depends_on:
      discovery:
        condition: service_healthy

  api-gateway:
    build: ./api-gateway
    ports: ["8080:8080"]
    depends_on: [discovery, config-server]

  user-service:
    build: ./user-service
    deploy:
      replicas: 2  # 2 instances!
    depends_on: [discovery, postgres]

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: userdb
      POSTGRES_PASSWORD: secret
    volumes:
      - pg_data:/var/lib/postgresql/data

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    environment:
      KAFKA_BROKER_ID: 1
    ports: ["9092:9092"]

volumes:
  pg_data:`;
  codeNetwork = `# Docker Compose creates a default network
# Services reference each other by service name

# user-service can reach postgres at:
# jdbc:postgresql://postgres:5432/userdb

# api-gateway can reach user-service at:
# http://user-service:8080/api/users

# Custom networks for isolation:
services:
  user-service:
    networks: [backend, db-net]
  api-gateway:
    networks: [backend]
  postgres:
    networks: [db-net]

networks:
  backend:
  db-net:`;
  codeHealth = `services:
  postgres:
    image: postgres:15
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  user-service:
    build: ./user-service
    depends_on:
      postgres:
        condition: service_healthy
      discovery:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 15s
      start_period: 30s`;
  codeEnvs = `# docker-compose.override.yml (auto-loaded, dev only)
services:
  user-service:
    environment:
      SPRING_PROFILES_ACTIVE: dev
      JAVA_TOOL_OPTIONS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
    ports:
      - "5005:5005"  # debug port

# docker-compose.prod.yml
services:
  user-service:
    environment:
      SPRING_PROFILES_ACTIVE: prod
    deploy:
      replicas: 3
      resources:
        limits:
          memory: 512M

# Run: docker compose -f docker-compose.yml -f docker-compose.prod.yml up`;
}
