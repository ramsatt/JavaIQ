import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-MLPCG66Y.js";
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
} from "./chunk-VBTVL2BZ.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-docker.component.ts
var MsDockerComponent = class _MsDockerComponent {
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
  static \u0275fac = function MsDockerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsDockerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsDockerComponent, selectors: [["app-topic-ms-docker"]], decls: 33, vars: 7, consts: [["title", "Containerization", "subtitle", "Docker Compose for microservices. Multi-service setup, networking, volumes, and local development.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #1e3a5f, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsDockerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Docker for Microservices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Docker Compose defines your entire system in one file. Start all services with ");
      \u0275\u0275elementStart(8, "code");
      \u0275\u0275text(9, "docker compose up");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ".");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Full Compose");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Networking");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Health Checks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Dev vs Prod");
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
      \u0275\u0275property("code", ctx.codeCompose);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeNetwork);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeHealth);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEnvs);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-docker.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsDockerComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-docker", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ['/* angular:styles/component:css;6dd09905c1aa91bba49d947f4268df9bb5f5f7cf2deacfa6842c7bf571c21058;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/ms-docker.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-docker.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsDockerComponent, { className: "MsDockerComponent", filePath: "src/app/features/tutorials/topics/ms-docker.component.ts", lineNumber: 33 });
})();
export {
  MsDockerComponent
};
//# sourceMappingURL=chunk-QXUUPJ7P.js.map
