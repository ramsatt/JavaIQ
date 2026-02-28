import{a as d,b as m}from"./chunk-AMVNOPTI.js";import{a as s}from"./chunk-SI5PESLS.js";import{$a as i,Ja as l,ab as o,bb as e,cb as a,ub as t,ya as n}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var u=class c{codeIntro=`# Build executable JAR
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
WantedBy=multi-user.target`;codeK8s=`# deployment.yaml
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
              memory: "512Mi"`;codeGraceful=`# application.yml
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
# to match or exceed timeout-per-shutdown-phase`;codeCloud=`# AWS Elastic Beanstalk
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
# Push to Git \u2192 auto-deploy via Dockerfile`;codeChecklist=`# Production Checklist \u2705

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
- Database connection validation`;static \u0275fac=function(p){return new(p||c)};static \u0275cmp=l({type:c,selectors:[["app-topic-sb-deploy"]],decls:33,vars:7,consts:[["title","Deployment","subtitle","Deploy Spring Boot to production. JAR packaging, cloud platforms, Kubernetes, graceful shutdown, and health probes.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,r){p&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Production Deployment"),e(),o(5,"div",4)(6,"p"),t(7,"Spring Boot produces an "),o(8,"strong"),t(9,"executable JAR"),e(),t(10," with embedded server \u2014 deploy anywhere Java runs."),e(),a(11,"app-code-block",5),e()(),o(12,"section",1)(13,"h2",2),a(14,"app-icon",6),t(15," Deploy Patterns"),e(),o(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Kubernetes"),e(),a(20,"app-code-block",5),e(),o(21,"div",8)(22,"h3",9),t(23,"Graceful Shutdown"),e(),a(24,"app-code-block",5),e(),o(25,"div",8)(26,"h3",9),t(27,"Cloud Deploy"),e(),a(28,"app-code-block",5),e(),o(29,"div",8)(30,"h3",9),t(31,"Production Checklist"),e(),a(32,"app-code-block",5),e()()()()),p&2&&(n(3),i("size",28),n(8),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeK8s),n(4),i("code",r.codeGraceful),n(4),i("code",r.codeCloud),n(4),i("code",r.codeChecklist))},dependencies:[s,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{u as SbDeployComponent};
