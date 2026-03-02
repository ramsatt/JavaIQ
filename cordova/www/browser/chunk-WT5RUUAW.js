import{a as l,b as m,c as d}from"./chunk-FZG5ZG77.js";import{Hb as t,Ma as n,Xa as p,mb as i,nb as o,ob as e,pb as a}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class c{codeIntro=`# Key K8s concepts:
# Pod       \u2192 smallest unit (1+ containers)
# Deployment \u2192 manages pod replicas
# Service   \u2192 stable network endpoint
# Ingress   \u2192 external HTTP routing
# ConfigMap \u2192 configuration data
# Secret    \u2192 sensitive data (base64)

# Apply all manifests:
kubectl apply -f k8s/`;codeDeploy=`# deployment.yaml
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
            limits: { memory: "512Mi", cpu: "500m" }`;codeService=`# service.yaml (internal load balancer)
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
              service: { name: order-service, port: { number: 80 } }`;codeConfig=`# configmap.yaml
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
#   --from-literal=DB_PASSWORD=secret`;codeScale=`# Horizontal Pod Autoscaler
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
# Min 2, Max 10 pods`;static \u0275fac=function(s){return new(s||c)};static \u0275cmp=p({type:c,selectors:[["app-topic-ms-k8s"]],decls:32,vars:7,consts:[["title","Kubernetes","subtitle","Orchestrate containers at scale. Deployments, services, ingress, config maps, secrets, and auto-scaling.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(s,r){s&1&&(o(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Kubernetes"),e(),o(5,"div",4)(6,"p")(7,"strong"),t(8,"Kubernetes"),e(),t(9," automates deployment, scaling, and management of containerized apps. It replaces Docker Compose in production."),e(),a(10,"app-code-block",5),e()(),o(11,"section",1)(12,"h2",2),a(13,"app-icon",6),t(14," Manifests"),e(),o(15,"div",7)(16,"div",8)(17,"h3",9),t(18,"Deployment"),e(),a(19,"app-code-block",5),e(),o(20,"div",8)(21,"h3",9),t(22,"Service & Ingress"),e(),a(23,"app-code-block",5),e(),o(24,"div",8)(25,"h3",9),t(26,"ConfigMap & Secrets"),e(),a(27,"app-code-block",5),e(),o(28,"div",8)(29,"h3",9),t(30,"Auto-Scaling"),e(),a(31,"app-code-block",5),e()()()()),s&2&&(n(3),i("size",28),n(7),i("code",r.codeIntro),n(3),i("size",28),n(6),i("code",r.codeDeploy),n(4),i("code",r.codeService),n(4),i("code",r.codeConfig),n(4),i("code",r.codeScale))},dependencies:[l,m,d],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MsK8sComponent};
