import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-deploy.component.ts
var SbDeployComponent = class _SbDeployComponent {
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
# Push to Git \u2192 auto-deploy via Dockerfile`;
  codeChecklist = `# Production Checklist \u2705

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
  static \u0275fac = function SbDeployComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbDeployComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbDeployComponent, selectors: [["app-topic-sb-deploy"]], decls: 33, vars: 7, consts: [["title", "Deployment", "subtitle", "Deploy Spring Boot to production. JAR packaging, cloud platforms, Kubernetes, graceful shutdown, and health probes.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbDeployComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Production Deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot produces an ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "executable JAR");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " with embedded server \u2014 deploy anywhere Java runs.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Deploy Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Graceful Shutdown");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Cloud Deploy");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Production Checklist");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeK8s);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGraceful);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCloud);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeChecklist);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-deploy.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbDeployComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-deploy", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Deployment" subtitle="Deploy Spring Boot to production. JAR packaging, cloud platforms, Kubernetes, graceful shutdown, and health probes." badge="SPRING BOOT" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Production Deployment</h2>
        <div class="prose">
          <p>Spring Boot produces an <strong>executable JAR</strong> with embedded server \u2014 deploy anywhere Java runs.</p>
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
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-deploy.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-deploy.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbDeployComponent, { className: "SbDeployComponent", filePath: "src/app/features/tutorials/topics/sb-deploy.component.ts", lineNumber: 36 });
})();
export {
  SbDeployComponent
};
//# sourceMappingURL=chunk-EJMIUP7I.js.map
