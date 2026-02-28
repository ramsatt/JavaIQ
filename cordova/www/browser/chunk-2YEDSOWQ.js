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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/ms-intro.component.ts
var MsIntroComponent = class _MsIntroComponent {
  activeArch = signal("", ...ngDevMode ? [{ debugName: "activeArch" }] : []);
  status = signal("Click to compare architectures.", ...ngDevMode ? [{ debugName: "status" }] : []);
  codeIntro = `// E-commerce as Microservices
// Each service is independently:
//   \u2705 Developed
//   \u2705 Deployed
//   \u2705 Scaled
//   \u2705 Monitored

// Services:
// user-service      \u2192 User management, auth
// product-service   \u2192 Product catalog, inventory
// order-service     \u2192 Order processing, checkout
// payment-service   \u2192 Payment processing
// notification-svc  \u2192 Email, SMS, push`;
  codeDecomp = `// Decomposition strategies:

// 1. By Business Capability
//    user-service, order-service, payment-service

// 2. By Subdomain (DDD)
//    Bounded contexts from domain model

// 3. Strangler Fig Pattern (migration)
//    Gradually replace monolith pieces
//    Route traffic: old \u2192 new service

// Anti-patterns to avoid:
// \u274C Distributed monolith (tightly coupled services)
// \u274C Nano-services (too fine-grained)
// \u274C Shared database (defeats the purpose)`;
  codeDdd = `// Domain-Driven Design \u2192 Natural service boundaries

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
// \u2705 Has its own database
// \u2705 Owns its entities
// \u2705 Exposes its own API
// \u2705 Communicates via events/REST`;
  codeDb = `// Database per Service pattern
// Each microservice owns its data

// user-service \u2192 PostgreSQL (relational)
// product-service \u2192 MongoDB (flexible schema)
// search-service \u2192 Elasticsearch (full-text)
// session-service \u2192 Redis (fast key-value)
// analytics-service \u2192 ClickHouse (OLAP)

// \u26A0\uFE0F No cross-service JOINs!
// Use: API composition or CQRS for queries
// Use: Events for data synchronization`;
  codeStructure = `// Multi-module Maven project
ecommerce/
\u251C\u2500\u2500 pom.xml                  (parent POM)
\u251C\u2500\u2500 api-gateway/             (Spring Cloud Gateway)
\u251C\u2500\u2500 service-discovery/       (Eureka Server)
\u251C\u2500\u2500 config-server/           (Centralized config)
\u251C\u2500\u2500 user-service/
\u2502   \u251C\u2500\u2500 src/main/java/
\u2502   \u251C\u2500\u2500 src/main/resources/
\u2502   \u2514\u2500\u2500 Dockerfile
\u251C\u2500\u2500 order-service/
\u251C\u2500\u2500 payment-service/
\u251C\u2500\u2500 notification-service/
\u2514\u2500\u2500 docker-compose.yml       (local dev)`;
  select(arch) {
    this.activeArch.set(arch);
    const info = {
      "mono": "Monolith: Simple to develop/deploy. Scales as one unit. Great for small teams & MVPs. Hard to scale specific parts.",
      "micro": "Microservices: Independent scaling & deployment. Tech freedom. Complex infrastructure. Best for large teams & scale."
    };
    this.status.set(info[arch] ?? "");
  }
  static \u0275fac = function MsIntroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MsIntroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MsIntroComponent, selectors: [["app-topic-ms-intro"]], decls: 67, vars: 13, consts: [["title", "Microservices Introduction", "subtitle", "Understand when and why to use microservices. Monolith vs microservices, bounded contexts, and decomposition strategies.", "badge", "MICROSERVICES", "gradient", "linear-gradient(135deg, #1e3a5f, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-blue", 3, "size"], [1, "compare"], [1, "compare-col", 3, "click"], [1, "compare-icon"], [1, "compare-label"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function MsIntroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Microservices?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Microservices");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " decompose an application into small, independently deployable services. Each owns its data and communicates via APIs.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Single Responsibility:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Each service does one thing well.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "Independent Deployment:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Deploy without affecting other services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Technology Freedom:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Each service can use different tech stacks.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "Failure Isolation:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " One service failing doesn't crash everything.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Monolith vs Microservices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "div", 10);
      \u0275\u0275listener("click", function MsIntroComponent_Template_div_click_34_listener() {
        return ctx.select("mono");
      });
      \u0275\u0275elementStart(35, "span", 11);
      \u0275\u0275text(36, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 12);
      \u0275\u0275text(38, "Monolith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 10);
      \u0275\u0275listener("click", function MsIntroComponent_Template_div_click_39_listener() {
        return ctx.select("micro");
      });
      \u0275\u0275elementStart(40, "span", 11);
      \u0275\u0275text(41, "\u{1F517}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 12);
      \u0275\u0275text(43, "Microservices");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 13);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "section", 1)(47, "h2", 2);
      \u0275\u0275element(48, "app-icon", 14);
      \u0275\u0275text(49, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "h3", 17);
      \u0275\u0275text(53, "Decomposition");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 16)(56, "h3", 17);
      \u0275\u0275text(57, "Bounded Context");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 16)(60, "h3", 17);
      \u0275\u0275text(61, "Database per Service");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 16)(64, "h3", 17);
      \u0275\u0275text(65, "Project Structure");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeArch() === "mono");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeArch() === "micro");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeDecomp);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDdd);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDb);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeStructure);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.compare[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.compare-col[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.compare-col.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  transform: scale(1.03);\n}\n.compare-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.compare-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-intro.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MsIntroComponent, [{
    type: Component,
    args: [{ selector: "app-topic-ms-intro", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
            <div class="compare-col" [class.active]="activeArch() === 'mono'" (click)="select('mono')"><span class="compare-icon">\u{1F4E6}</span><span class="compare-label">Monolith</span></div>
            <div class="compare-col" [class.active]="activeArch() === 'micro'" (click)="select('micro')"><span class="compare-icon">\u{1F517}</span><span class="compare-label">Microservices</span></div>
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
  `, styles: ['/* angular:styles/component:css;f6b9ddfcdddc2d92064ca3322ef210eceda69b3f1592468e8828a796c98cccaf;D:/A21/JavaIQ/src/app/features/tutorials/topics/ms-intro.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.compare {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.compare-col {\n  padding: 20px;\n  border-radius: 14px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.compare-col.active {\n  border-color: #2563eb;\n  background: #eff6ff;\n  transform: scale(1.03);\n}\n.compare-icon {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n.compare-label {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=ms-intro.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MsIntroComponent, { className: "MsIntroComponent", filePath: "src/app/features/tutorials/topics/ms-intro.component.ts", lineNumber: 57 });
})();
export {
  MsIntroComponent
};
//# sourceMappingURL=chunk-2YEDSOWQ.js.map
