import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-ms-k8s',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Kubernetes" subtitle="Orchestrate containers at scale. Deployments, services, ingress, config maps, secrets, and auto-scaling." badge="MICROSERVICES" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> Kubernetes</h2>
        <div class="prose"><p><strong>Kubernetes</strong> automates deployment, scaling, and management of containerized apps. It replaces Docker Compose in production.</p><app-code-block [code]="codeIntro" /></div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Manifests</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Deployment</h3><app-code-block [code]="codeDeploy" /></div>
          <div class="op-card"><h3 class="op-title">Service & Ingress</h3><app-code-block [code]="codeService" /></div>
          <div class="op-card"><h3 class="op-title">ConfigMap & Secrets</h3><app-code-block [code]="codeConfig" /></div>
          <div class="op-card"><h3 class="op-title">Auto-Scaling</h3><app-code-block [code]="codeScale" /></div>
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
export class MsK8sComponent {
  codeIntro = `# Key K8s concepts:
# Pod       → smallest unit (1+ containers)
# Deployment → manages pod replicas
# Service   → stable network endpoint
# Ingress   → external HTTP routing
# ConfigMap → configuration data
# Secret    → sensitive data (base64)

# Apply all manifests:
kubectl apply -f k8s/`;
  codeDeploy = `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
        - name: user-service
          image: myapp/user-service:1.0
          ports:
            - containerPort: 8080
          envFrom:
            - configMapRef:
                name: user-config
            - secretRef:
                name: db-secret
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
            requests: { memory: "256Mi", cpu: "250m" }
            limits: { memory: "512Mi", cpu: "500m" }`;
  codeService = `# service.yaml (internal load balancer)
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP  # internal only

---
# ingress.yaml (external routing)
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: api.myapp.com
      http:
        paths:
          - path: /users
            pathType: Prefix
            backend:
              service: { name: user-service, port: { number: 80 } }
          - path: /orders
            pathType: Prefix
            backend:
              service: { name: order-service, port: { number: 80 } }`;
  codeConfig = `# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: user-config
data:
  SPRING_PROFILES_ACTIVE: "prod"
  SERVER_PORT: "8080"
  EUREKA_CLIENT_ENABLED: "false"  # K8s has its own discovery

---
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  DB_URL: amRiYzpwb3N0Z3Jlc3FsOi8vZGI6NTQzMi91c2VyZGI=
  DB_USERNAME: dXNlcg==
  DB_PASSWORD: c2VjcmV0

# Create from CLI:
# kubectl create secret generic db-secret \\
#   --from-literal=DB_PASSWORD=secret`;
  codeScale = `# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: user-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: user-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70

# Scale up when CPU > 70%
# Scale down when CPU < 70%
# Min 2, Max 10 pods`;
}
