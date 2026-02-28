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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-properties.component.ts
var _forTrack0 = ($index, $item) => $item.rank;
function SbPropertiesComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function SbPropertiesComponent_For_43_Template_div_click_0_listener() {
      const src_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSrc(src_r2.rank));
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const src_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeSrc() === src_r2.rank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(src_r2.rank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(src_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(src_r2.priority);
  }
}
var SbPropertiesComponent = class _SbPropertiesComponent {
  activeSrc = signal(0, ...ngDevMode ? [{ debugName: "activeSrc" }] : []);
  status = signal("Higher priority sources override lower ones. Click to explore.", ...ngDevMode ? [{ debugName: "status" }] : []);
  sources = signal([
    { rank: 1, name: "Command-line args", priority: "HIGHEST" },
    { rank: 2, name: "OS environment variables", priority: "HIGH" },
    { rank: 3, name: "application-{profile}.yml", priority: "MEDIUM" },
    { rank: 4, name: "application.yml", priority: "LOW" },
    { rank: 5, name: "@PropertySource", priority: "LOWEST" }
  ], ...ngDevMode ? [{ debugName: "sources" }] : []);
  codeIntro = `# application.properties
server.port=8080
app.name=JavaIQ
app.max-connections=100

# Override with env var:
# SERVER_PORT=9090 java -jar app.jar

# Override with CLI arg:
# java -jar app.jar --server.port=9090`;
  codeYaml = `# application.yml (hierarchical, cleaner)
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    hikari:
      maximum-pool-size: 10

app:
  mail:
    host: smtp.gmail.com
    port: 587
    templates:
      welcome: /templates/welcome.html`;
  codeTypeSafe = `// Type-safe config binding (recommended!)
@ConfigurationProperties(prefix = "app.mail")
public record MailConfig(
    String host,
    int port,
    Map<String, String> templates
) {}

// Enable in main class
@SpringBootApplication
@ConfigurationPropertiesScan
public class App { }

// Inject anywhere
@Service
public class MailService {
    private final MailConfig config;
    public MailService(MailConfig config) {
        this.config = config;
    }
}`;
  codeValidation = `@ConfigurationProperties(prefix = "app")
@Validated  // enable validation
public record AppConfig(
    @NotBlank String name,
    @Min(1) @Max(1000) int maxConnections,
    @Email String adminEmail,
    @DurationUnit(ChronoUnit.SECONDS)
    Duration timeout
) {}

// App won't start if validation fails!
// Error: Binding validation errors on app
//   - maxConnections: must be >= 1`;
  codeDynamic = `// Inject with @Value
@Value("\${app.name:DefaultApp}")
private String appName; // with default

// SpEL expressions
@Value("#{'\${app.modes}'.split(',')}")
private List<String> modes;

// Random values (testing)
app.secret=\${random.uuid}
app.port=\${random.int(8000,9000)}`;
  selectSrc(rank) {
    this.activeSrc.set(rank);
    const info = {
      1: "CLI args (--server.port=9090) override everything!",
      2: "Env vars (SERVER_PORT=9090) \u2014 great for Docker/cloud.",
      3: "Profile-specific (application-prod.yml) overrides default.",
      4: "application.yml / .properties \u2014 the base config.",
      5: "@PropertySource \u2014 loaded last, lowest priority."
    };
    this.status.set(info[rank] ?? "");
  }
  static \u0275fac = function SbPropertiesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbPropertiesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbPropertiesComponent, selectors: [["app-topic-sb-properties"]], decls: 67, vars: 9, consts: [["title", "Application Properties", "subtitle", "Externalize configuration. Master application.yml, @Value, @ConfigurationProperties, and relaxed binding.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-violet", 3, "size"], [1, "order-list"], [1, "order-item", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "order-item", 3, "click"], [1, "order-rank"], [1, "order-name"], [1, "order-priority"]], template: function SbPropertiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot externalizes config into ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "application.properties");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " or ");
      \u0275\u0275elementStart(11, "strong");
      \u0275\u0275text(12, "application.yml");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, ". Override via environment variables, command-line args, or profile-specific files.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      \u0275\u0275text(17, "@Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Inject individual property values.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "@ConfigurationProperties:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Type-safe binding to a POJO/record.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "Relaxed Binding:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "code");
      \u0275\u0275text(27, "my.prop");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " = ");
      \u0275\u0275elementStart(29, "code");
      \u0275\u0275text(30, "MY_PROP");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " = ");
      \u0275\u0275elementStart(32, "code");
      \u0275\u0275text(33, "my-prop");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "section", 1)(37, "div", 6)(38, "h3", 7);
      \u0275\u0275element(39, "app-icon", 8);
      \u0275\u0275text(40, " Property Resolution Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 9);
      \u0275\u0275repeaterCreate(42, SbPropertiesComponent_For_43_Template, 7, 5, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 11);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "section", 1)(47, "h2", 2);
      \u0275\u0275element(48, "app-icon", 12);
      \u0275\u0275text(49, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 13)(51, "div", 14)(52, "h3", 15);
      \u0275\u0275text(53, "YAML Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "h3", 15);
      \u0275\u0275text(57, "@ConfigurationProperties");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 14)(60, "h3", 15);
      \u0275\u0275text(61, "Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 14)(64, "h3", 15);
      \u0275\u0275text(65, "Dynamic Config");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(32);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.sources());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeYaml);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeTypeSafe);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeValidation);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeDynamic);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.order-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.order-item.active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.order-rank[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.5rem;\n  font-weight: 800;\n}\n.order-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.order-priority[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #7c3aed;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-properties.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbPropertiesComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-properties", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Application Properties" subtitle="Externalize configuration. Master application.yml, @Value, @ConfigurationProperties, and relaxed binding." badge="SPRING BOOT" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Configuration</h2>
        <div class="prose">
          <p>Spring Boot externalizes config into <strong>application.properties</strong> or <strong>application.yml</strong>. Override via environment variables, command-line args, or profile-specific files.</p>
          <ul>
            <li><strong>&#64;Value:</strong> Inject individual property values.</li>
            <li><strong>&#64;ConfigurationProperties:</strong> Type-safe binding to a POJO/record.</li>
            <li><strong>Relaxed Binding:</strong> <code>my.prop</code> = <code>MY_PROP</code> = <code>my-prop</code>.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Property Resolution Order</h3>
          <div class="order-list">
            @for (src of sources(); track src.rank) {
              <div class="order-item" [class.active]="activeSrc() === src.rank" (click)="selectSrc(src.rank)">
                <span class="order-rank">{{ src.rank }}</span>
                <span class="order-name">{{ src.name }}</span>
                <span class="order-priority">{{ src.priority }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">YAML Config</h3><app-code-block [code]="codeYaml" /></div>
          <div class="op-card"><h3 class="op-title">&#64;ConfigurationProperties</h3><app-code-block [code]="codeTypeSafe" /></div>
          <div class="op-card"><h3 class="op-title">Validation</h3><app-code-block [code]="codeValidation" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Config</h3><app-code-block [code]="codeDynamic" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;c6ef1369f5472994765f3fee769dbbc90b75cc3aea392b4acb2b0ffbbd565372;D:/A21/JavaIQ/src/app/features/tutorials/topics/sb-properties.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.order-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.order-item.active {\n  border-color: #7c3aed;\n  background: #faf5ff;\n}\n.order-rank {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.5rem;\n  font-weight: 800;\n}\n.order-name {\n  flex: 1;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.order-priority {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #7c3aed;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-properties.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbPropertiesComponent, { className: "SbPropertiesComponent", filePath: "src/app/features/tutorials/topics/sb-properties.component.ts", lineNumber: 61 });
})();
export {
  SbPropertiesComponent
};
//# sourceMappingURL=chunk-VSWIGADM.js.map
