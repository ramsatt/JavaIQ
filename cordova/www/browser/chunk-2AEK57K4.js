import {
  CodeBlockComponent,
  TutorialLayoutComponent
} from "./chunk-ACGKXV3L.js";
import {
  IconComponent
} from "./chunk-GCMLYE3M.js";
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
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-config.component.ts
var MsConfigComponent = class _MsConfigComponent {
  codeIntro = `// Git repo structure for config:
// config-repo/
// \u251C\u2500\u2500 application.yml        (shared defaults)
// \u251C\u2500\u2500 user-service.yml       (user-service specific)
// \u251C\u2500\u2500 user-service-prod.yml  (user-service + prod profile)
// \u2514\u2500\u2500 order-service.yml

// Resolution order:
// application.yml \u2192 {service}.yml \u2192 {service}-{profile}.yml`;
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
# GET /user-service/prod \u2192 returns user-service-prod.yml`;
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
// POST /actuator/busrefresh \u2192 refreshes ALL services`;
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
  static \u0275fac = function MsConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsConfigComponent, selectors: [["app-topic-ms-config"]], decls: 33, vars: 7, consts: [["title", "Config Server", "subtitle", "Centralized configuration management. Git-backed config, encryption, dynamic refresh, and environment-specific settings.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Config Server");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Externalize all config to a ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "central server");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ". Services fetch config at startup. Update Git \u2192 refresh all services.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "section", 1)(13, "h2", 2);
      \u0275\u0275element(14, "app-icon", 6);
      \u0275\u0275text(15, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "h3", 9);
      \u0275\u0275text(19, "Server Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "h3", 9);
      \u0275\u0275text(23, "Client Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "h3", 9);
      \u0275\u0275text(27, "Dynamic Refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "Encryption");
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
      \u0275\u0275property("code", ctx.codeServer);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeClient);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRefresh);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeEncrypt);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-config.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsConfigComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-config", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Config Server" subtitle="Centralized configuration management. Git-backed config, encryption, dynamic refresh, and environment-specific settings." badge="MICROSERVICES" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Config Server</h2>
        <div class="prose"><p>Externalize all config to a <strong>central server</strong>. Services fetch config at startup. Update Git \u2192 refresh all services.</p><app-code-block [code]="codeIntro" /></div>
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
  `, styles: ["/* angular:styles/component:css;3fdea3d65f998ea6e02a91e28e2bbadf57463c689a1bfe3f13b44f31a77d8a11;D:/A21/JavaIQ/src/app/features/tutorials/topics/ms-config.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-config.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsConfigComponent, { className: "MsConfigComponent", filePath: "src/app/features/tutorials/topics/ms-config.component.ts", lineNumber: 33 });
})();
export {
  MsConfigComponent
};
//# sourceMappingURL=chunk-2AEK57K4.js.map
