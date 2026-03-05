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

// src/app/features/tutorials/topics/ms-k8s.component.ts
var MsK8sComponent = class _MsK8sComponent {
  codeIntro = `# Key K8s concepts:
# Pod       \u2192 smallest unit (1+ containers)
# Deployment \u2192 manages pod replicas
# Service   \u2192 stable network endpoint
# Ingress   \u2192 external HTTP routing
# ConfigMap \u2192 configuration data
# Secret    \u2192 sensitive data (base64)

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
  static \u0275fac = function MsK8sComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsK8sComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsK8sComponent, selectors: [["app-topic-ms-k8s"]], decls: 32, vars: 7, consts: [["title", "Kubernetes", "subtitle", "Orchestrate containers at scale. Deployments, services, ingress, config maps, secrets, and auto-scaling.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsK8sComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " automates deployment, scaling, and management of containerized apps. It replaces Docker Compose in production.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Manifests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "Service & Ingress");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "ConfigMap & Secrets");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Auto-Scaling");
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
      \u0275\u0275property("code", ctx.codeDeploy);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeService);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConfig);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeScale);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-k8s.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsK8sComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-k8s", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;a030b821bab9f37561f03b8eb96b0a16bdbab24720355473efed47a43a37bfb9;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/ms-k8s.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-k8s.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsK8sComponent, { className: "MsK8sComponent", filePath: "src/app/features/tutorials/topics/ms-k8s.component.ts", lineNumber: 33 });
})();
export {
  MsK8sComponent
};
//# sourceMappingURL=chunk-MU7PVG44.js.map
