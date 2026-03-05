import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
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
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/spring-config.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SpringConfigComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SpringConfigComponent_For_39_Template_div_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProfile(p_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeProfile() === p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.db);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.logLevel);
  }
}
var SpringConfigComponent = class _SpringConfigComponent {
  activeProfile = signal("", ...ngDevMode ? [{ debugName: "activeProfile" }] : []);
  status = signal("Click a profile to see how configuration changes per environment.", ...ngDevMode ? [{ debugName: "status" }] : []);
  profiles = signal([
    { name: "dev", icon: "\u{1F527}", db: "H2 in-memory", logLevel: "DEBUG" },
    { name: "staging", icon: "\u{1F9EA}", db: "MySQL replica", logLevel: "INFO" },
    { name: "prod", icon: "\u{1F680}", db: "MySQL primary (pool=20)", logLevel: "WARN" }
  ], ...ngDevMode ? [{ debugName: "profiles" }] : []);
  codeIntro = `# application.properties
app.name=JavaIQ
server.port=8080

# @Value injection
@Value("\${app.name}")
private String appName;

# Type-safe binding (preferred)
@ConfigurationProperties(prefix = "app")
public record AppConfig(
    String name,
    int maxRetries,
    Duration timeout
) {}`;
  codeProps = `// application.yml
app:
  mail:
    host: smtp.gmail.com
    port: 587
    from: noreply@app.com
    templates:
      welcome: /templates/welcome.html
      reset: /templates/reset.html

// Type-safe binding
@ConfigurationProperties(prefix = "app.mail")
public record MailConfig(
    String host, int port, String from,
    Map<String, String> templates
) {}`;
  codeProfiles = `# application-dev.yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    show-sql: true
logging:
  level:
    root: DEBUG

# application-prod.yml
spring:
  datasource:
    url: jdbc:mysql://db-primary:3306/app

# Activate: java -jar app.jar --spring.profiles.active=prod
# Or: SPRING_PROFILES_ACTIVE=prod`;
  codeConditional = `// Bean only exists if property is set
@Bean
@ConditionalOnProperty(
    name = "app.cache.enabled",
    havingValue = "true")
public CacheManager cacheManager() { }

// Bean only if class is on classpath
@Bean
@ConditionalOnClass(RedisClient.class)
public RedisTemplate redisTemplate() { }

// Bean only if another bean is missing
@Bean
@ConditionalOnMissingBean(DataSource.class)
public DataSource fallbackDataSource() { }`;
  codeSources = `// Property source priority (high to low):
// 1. Command-line args (--server.port=9090)
// 2. SPRING_APPLICATION_JSON
// 3. OS environment variables
// 4. application-{profile}.properties
// 5. application.properties
// 6. @PropertySource annotations
// 7. Default properties

// Custom property source
@PropertySource("classpath:custom.properties")
@Configuration
public class CustomConfig { }`;
  selectProfile(name) {
    this.activeProfile.set(name);
    const details = {
      "dev": "DEV profile: H2 in-memory DB, verbose DEBUG logging. Fast iteration! \u{1F527}",
      "staging": "STAGING profile: MySQL replica, INFO logging. Pre-production testing! \u{1F9EA}",
      "prod": "PROD profile: MySQL primary with pool=20, WARN only. Optimized for performance! \u{1F680}"
    };
    this.status.set(details[name] ?? "");
  }
  static \u0275fac = function SpringConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpringConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpringConfigComponent, selectors: [["app-topic-spring-config"]], decls: 112, vars: 14, consts: [["title", "Configuration", "subtitle", "Externalize and manage application config. Master properties, YAML, profiles, and conditional beans.", "badge", "SPRING FRAMEWORK", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-violet", 3, "size"], [1, "profile-grid"], [1, "profile-card", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], ["name", "arrow-right", "css", "icon-indigo", 3, "size"], [1, "op-desc"], ["name", "briefcase", "css", "icon-violet", 3, "size"], [1, "use-cases"], [1, "use-case", "violet"], [1, "use-num", "violet-bg"], [1, "use-title"], [1, "use-desc"], [1, "use-case", "blue"], [1, "use-num", "blue-bg"], [1, "use-case", "purple"], [1, "use-num", "purple-bg"], [1, "profile-card", 3, "click"], [1, "profile-icon"], [1, "profile-name"], [1, "profile-db"], [1, "profile-log"]], template: function SpringConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Configuration in Spring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring externalizes configuration so you can change behavior without recompiling. The ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Environment");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " abstraction unifies property sources.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul")(12, "li")(13, "strong");
      \u0275\u0275text(14, "application.properties / .yml:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Default config files.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li")(17, "strong");
      \u0275\u0275text(18, "@Value:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Inject single values. ");
      \u0275\u0275elementStart(20, "strong");
      \u0275\u0275text(21, "@ConfigurationProperties:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Type-safe binding.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "Profiles:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Environment-specific configs (dev, staging, prod).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "li")(28, "strong");
      \u0275\u0275text(29, "@Conditional:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Register beans only when conditions are met.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "section", 1)(33, "div", 6)(34, "h3", 7);
      \u0275\u0275element(35, "app-icon", 8);
      \u0275\u0275text(36, " Profile Selector");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 9);
      \u0275\u0275repeaterCreate(38, SpringConfigComponent_For_39_Template, 9, 6, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 11);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "section", 1)(43, "h2", 2);
      \u0275\u0275element(44, "app-icon", 12);
      \u0275\u0275text(45, " Config Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 13)(47, "div", 14)(48, "h3", 15);
      \u0275\u0275element(49, "app-icon", 16);
      \u0275\u0275text(50, " @ConfigurationProperties");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 17);
      \u0275\u0275text(52, "Type-safe hierarchical config binding.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 14)(55, "h3", 15);
      \u0275\u0275element(56, "app-icon", 16);
      \u0275\u0275text(57, " Profiles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 17);
      \u0275\u0275text(59, "Activate different configs per environment.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14)(62, "h3", 15);
      \u0275\u0275element(63, "app-icon", 16);
      \u0275\u0275text(64, " Conditional Beans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 17);
      \u0275\u0275text(66, "Register beans based on conditions.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 14)(69, "h3", 15);
      \u0275\u0275element(70, "app-icon", 16);
      \u0275\u0275text(71, " Property Sources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 17);
      \u0275\u0275text(73, "Override order: args > env > properties > defaults.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "app-code-block", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "section", 1)(76, "h2", 2);
      \u0275\u0275element(77, "app-icon", 18);
      \u0275\u0275text(78, " Real-Time Use Cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 19)(80, "div", 20)(81, "div", 21);
      \u0275\u0275text(82, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div")(84, "h4", 22);
      \u0275\u0275text(85, "12-Factor App Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 23);
      \u0275\u0275text(87, "Environment variables override properties files. ");
      \u0275\u0275elementStart(88, "code");
      \u0275\u0275text(89, "SPRING_DATASOURCE_URL");
      \u0275\u0275elementEnd();
      \u0275\u0275text(90, " in Docker Compose changes the DB without rebuilding.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 24)(92, "div", 25);
      \u0275\u0275text(93, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div")(95, "h4", 22);
      \u0275\u0275text(96, "Feature Flags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 23)(98, "code");
      \u0275\u0275text(99, '@ConditionalOnProperty("feature.new-ui")');
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, " \u2014 enable/disable features per environment without code changes.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 26)(102, "div", 27);
      \u0275\u0275text(103, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div")(105, "h4", 22);
      \u0275\u0275text(106, "Multi-Tenant Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p", 23);
      \u0275\u0275text(108, "Each tenant gets a profile: ");
      \u0275\u0275elementStart(109, "code");
      \u0275\u0275text(110, "application-tenant1.yml");
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, ". Spring loads the right config based on the active profile.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(28);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.profiles());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeProps);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeProfiles);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeConditional);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 18);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeSources);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.profile-card.active[_ngcontent-%COMP%] {\n  border-color: #7c3aed;\n  background: #faf5ff;\n  transform: scale(1.03);\n}\n.profile-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n}\n.profile-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.profile-db[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.55rem;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.profile-log[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.violet[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  border-color: #c4b5fd;\n}\n.use-num[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.violet-bg[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.blue-bg[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.purple-bg[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.use-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-config.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpringConfigComponent, [{
    type: Component,
    args: [{ selector: "app-topic-spring-config", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Configuration" subtitle="Externalize and manage application config. Master properties, YAML, profiles, and conditional beans." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Configuration in Spring</h2>
        <div class="prose">
          <p>Spring externalizes configuration so you can change behavior without recompiling. The <strong>Environment</strong> abstraction unifies property sources.</p>
          <ul>
            <li><strong>application.properties / .yml:</strong> Default config files.</li>
            <li><strong>&#64;Value:</strong> Inject single values. <strong>&#64;ConfigurationProperties:</strong> Type-safe binding.</li>
            <li><strong>Profiles:</strong> Environment-specific configs (dev, staging, prod).</li>
            <li><strong>&#64;Conditional:</strong> Register beans only when conditions are met.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Profile Selector</h3>
          <div class="profile-grid">
            @for (p of profiles(); track p.name) {
              <div class="profile-card" [class.active]="activeProfile() === p.name" (click)="selectProfile(p.name)">
                <span class="profile-icon">{{ p.icon }}</span>
                <span class="profile-name">{{ p.name }}</span>
                <span class="profile-db">{{ p.db }}</span>
                <span class="profile-log">{{ p.logLevel }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Config Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;ConfigurationProperties</h3><p class="op-desc">Type-safe hierarchical config binding.</p><app-code-block [code]="codeProps" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Profiles</h3><p class="op-desc">Activate different configs per environment.</p><app-code-block [code]="codeProfiles" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Conditional Beans</h3><p class="op-desc">Register beans based on conditions.</p><app-code-block [code]="codeConditional" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Property Sources</h3><p class="op-desc">Override order: args > env > properties > defaults.</p><app-code-block [code]="codeSources" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-violet" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case violet"><div class="use-num violet-bg">1</div><div><h4 class="use-title">12-Factor App Config</h4><p class="use-desc">Environment variables override properties files. <code>SPRING_DATASOURCE_URL</code> in Docker Compose changes the DB without rebuilding.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Feature Flags</h4><p class="use-desc"><code>&#64;ConditionalOnProperty("feature.new-ui")</code> \u2014 enable/disable features per environment without code changes.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Multi-Tenant Config</h4><p class="use-desc">Each tenant gets a profile: <code>application-tenant1.yml</code>. Spring loads the right config based on the active profile.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;0eb3dd80ec92c61dd8d608ebf3ec1dadfb9bd7a25d00574b211cc974437d8479;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/spring-config.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n  font-weight: 700;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #7c3aed;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.profile-card {\n  padding: 16px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.profile-card.active {\n  border-color: #7c3aed;\n  background: #faf5ff;\n  transform: scale(1.03);\n}\n.profile-icon {\n  display: block;\n  font-size: 1.4rem;\n  margin-bottom: 4px;\n}\n.profile-name {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 4px;\n}\n.profile-db {\n  display: block;\n  font-size: 0.55rem;\n  color: #7c3aed;\n  font-weight: 600;\n}\n.profile-log {\n  display: block;\n  font-size: 0.5rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.op-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.use-cases {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.use-case {\n  display: flex;\n  gap: 16px;\n  padding: 20px;\n  border-radius: 14px;\n  border: 1px solid;\n}\n.use-case.violet {\n  background: #faf5ff;\n  border-color: #d8b4fe;\n}\n.use-case.blue {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n}\n.use-case.purple {\n  background: #f5f3ff;\n  border-color: #c4b5fd;\n}\n.use-num {\n  width: 34px;\n  height: 34px;\n  min-width: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n.violet-bg {\n  background: #7c3aed;\n}\n.blue-bg {\n  background: #3b82f6;\n}\n.purple-bg {\n  background: #8b5cf6;\n}\n.use-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 4px;\n}\n.use-desc {\n  font-size: 0.78rem;\n  line-height: 1.55;\n  margin: 0;\n  color: #334155;\n}\n.use-desc code {\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 5px;\n  border-radius: 4px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.72rem;\n}\n/*# sourceMappingURL=spring-config.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpringConfigComponent, { className: "SpringConfigComponent", filePath: "src/app/features/tutorials/topics/spring-config.component.ts", lineNumber: 76 });
})();
export {
  SpringConfigComponent
};
//# sourceMappingURL=chunk-LY6NANKI.js.map
