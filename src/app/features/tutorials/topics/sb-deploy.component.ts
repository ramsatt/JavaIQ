import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-deploy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Deployment" subtitle="Deploy Spring Boot to production. JAR packaging, cloud platforms, Kubernetes, graceful shutdown, and health probes." badge="SPRING BOOT" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Production Deployment</h2>
        <div class="prose">
          <p>Spring Boot produces an <strong>executable JAR</strong> with embedded server — deploy anywhere Java runs.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Deploy Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Kubernetes</h3><app-code-block [code]="codeK8s" /></div>
          <div class="op-card"><h3 class="op-title">Graceful Shutdown</h3><app-code-block [code]="codeGraceful" /></div>
          <div class="op-card"><h3 class="op-title">Cloud Deploy</h3><app-code-block [code]="codeCloud" /></div>
          <div class="op-card"><h3 class="op-title">Production Checklist</h3><app-code-block [code]="codeChecklist" /></div>
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
export class SbDeployComponent {
  codeIntro = `# Build executable JAR
./mvnw clean package -DskipTests

# Run it
java -jar target/myapp-1.0.0.jar \\
  --spring.profiles.active=prod \\
  --server.port=8080

# Or as a systemd service (Linux)
[Unit]
Description=My Spring Boot App
After=network.target

[Service]
User=appuser
ExecStart=/usr/bin/java -jar /opt/myapp/app.jar
Restart=always

[Install]
WantedBy=multi-user.target`;
  codeK8s = `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: myapp
          image: myapp:latest
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: "prod"
          livenessProbe:
            httpGet:
              path: /actuator/health/liveness
              port: 8080
            initialDelaySeconds: 30
          readinessProbe:
            httpGet:
              path: /actuator/health/readiness
              port: 8080
          resources:
            requests:
              memory: "256Mi"
              cpu: "500m"
            limits:
              memory: "512Mi"`;
  codeGraceful = `# application.yml
server:
  shutdown: graceful  # wait for active requests

spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s

# How it works:
# 1. SIGTERM received
# 2. Stop accepting NEW requests
# 3. Wait for active requests to complete (up to 30s)
# 4. Shutdown gracefully
# 5. Destroy beans, close connections

# Kubernetes: set terminationGracePeriodSeconds
# to match or exceed timeout-per-shutdown-phase`;
  codeCloud = `# AWS Elastic Beanstalk
eb init -p java-17 myapp
eb create production
eb deploy

# Google Cloud Run
gcloud run deploy myapp \\
  --image gcr.io/project/myapp \\
  --platform managed \\
  --allow-unauthenticated

# Azure App Service
az webapp create --name myapp --plan myplan \\
  --runtime "JAVA:17-java17"
az webapp deploy --name myapp --src-path target/app.jar

# Railway / Render / Fly.io
# Push to Git → auto-deploy via Dockerfile`;
  codeChecklist = `# Production Checklist ✅

# 1. Security
- HTTPS only (TLS termination)
- Secrets in env vars (not in code!)
- Actuator endpoints secured
- CORS properly configured

# 2. Performance
- Connection pool tuned (HikariCP)
- Caching enabled (Redis/Caffeine)
- JVM heap sized correctly (-Xmx)
- Async for long operations

# 3. Observability
- Structured logging (JSON)
- Health checks (/actuator/health)
- Metrics exported (Prometheus)
- Distributed tracing (Micrometer)

# 4. Resilience
- Graceful shutdown enabled
- Circuit breakers (Resilience4j)
- Retry policies configured
- Database connection validation`;
}
