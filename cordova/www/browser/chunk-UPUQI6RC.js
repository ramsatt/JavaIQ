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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OY2Y3BE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-auto-config.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SbAutoConfigComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const check_r1 = ctx.$implicit;
    \u0275\u0275classMap(check_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(check_r1.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(check_r1.answer);
  }
}
var SbAutoConfigComponent = class _SbAutoConfigComponent {
  checks = signal([
    { id: 1, question: "Is spring-boot-starter-data-jpa on classpath?", answer: "", state: "" },
    { id: 2, question: "Is a DataSource bean already defined?", answer: "", state: "" },
    { id: 3, question: "Are JPA properties configured?", answer: "", state: "" },
    { id: 4, question: "Result: Auto-configure EntityManagerFactory", answer: "", state: "" }
  ], ...ngDevMode ? [{ debugName: "checks" }] : []);
  status = signal("Auto-configuration checks conditions before creating beans.", ...ngDevMode ? [{ debugName: "status" }] : []);
  anim = signal(false, ...ngDevMode ? [{ debugName: "anim" }] : []);
  codeIntro = `@SpringBootApplication // the magic annotation!
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
        // Spring Boot:
        // 1. Scans classpath for starters
        // 2. Evaluates @Conditional annotations
        // 3. Auto-configures matching beans
        // 4. Your app is ready!
    }
}`;
  codeCustom = `@AutoConfiguration
@ConditionalOnClass(MetricsService.class)
@ConditionalOnProperty(name = "app.metrics.enabled",
    havingValue = "true", matchIfMissing = true)
public class MetricsAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MetricsService metricsService() {
        return new DefaultMetricsService();
    }
}`;
  codeExclude = `// Exclude in annotation
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApp { }

// Or in properties
spring.autoconfigure.exclude=\\
  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration`;
  codeDebug = `# application.properties
debug=true  # prints auto-config report

# Output shows:
# Positive matches:   (beans that WERE created)
#   DataSourceAutoConfiguration matched
#     - @ConditionalOnClass found
# Negative matches:   (beans that were NOT)
#   MongoAutoConfiguration did not match
#     - @ConditionalOnClass did not find`;
  codeOverride = `// Your bean ALWAYS wins!
@Configuration
public class MyConfig {
    @Bean // overrides auto-configured DataSource
    public DataSource dataSource() {
        return new CustomDataSource();
    }
}
// Spring Boot uses @ConditionalOnMissingBean
// Since YOU defined one, auto-config backs off`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runTree() {
    if (this.anim())
      return;
    this.anim.set(true);
    const answers = ["\u2705 YES \u2014 found in pom.xml!", "\u274C NO \u2014 no custom DataSource", "\u2705 YES \u2014 spring.datasource.url set", "\u2705 CREATED \u2014 EntityManagerFactory bean"];
    const states = ["yes", "no", "yes", "yes"];
    for (let i = 0; i < 4; i++) {
      this.checks.update((c) => c.map((ch, j) => j === i ? __spreadProps(__spreadValues({}, ch), { answer: answers[i], state: states[i] }) : ch));
      this.status.set(answers[i]);
      await this.sleep(900);
    }
    this.status.set("Auto-config created JPA beans \u2014 zero manual configuration! \u2705");
    this.anim.set(false);
  }
  reset() {
    this.checks.set([{ id: 1, question: "Is spring-boot-starter-data-jpa on classpath?", answer: "", state: "" }, { id: 2, question: "Is a DataSource bean already defined?", answer: "", state: "" }, { id: 3, question: "Are JPA properties configured?", answer: "", state: "" }, { id: 4, question: "Result: Auto-configure EntityManagerFactory", answer: "", state: "" }]);
    this.status.set("Auto-configuration checks conditions before creating beans.");
    this.anim.set(false);
  }
  static \u0275fac = function SbAutoConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbAutoConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbAutoConfigComponent, selectors: [["app-topic-sb-auto-config"]], decls: 73, vars: 13, consts: [["title", "Auto-Configuration", "subtitle", "Spring Boot's magic \u2014 automatic bean configuration based on classpath, properties, and conditions.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #166534, #4ade80)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-green", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-green", 3, "size"], [1, "tree-demo"], [1, "tree-step", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-green", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "op-desc"], [1, "tree-step"], [1, "tree-q"], [1, "tree-a"]], template: function SbAutoConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " How Auto-Config Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Auto-configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " automatically creates and configures beans based on what's on your classpath. Add ");
      \u0275\u0275elementStart(10, "code");
      \u0275\u0275text(11, "spring-boot-starter-web");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " \u2192 get Tomcat, Jackson, DispatcherServlet \u2014 all pre-configured.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul")(14, "li")(15, "strong");
      \u0275\u0275text(16, "@SpringBootApplication:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Combines @Configuration, @EnableAutoConfiguration, @ComponentScan.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "li")(19, "strong");
      \u0275\u0275text(20, "spring.factories / AutoConfiguration.imports:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Lists all auto-config classes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "li")(23, "strong");
      \u0275\u0275text(24, "@Conditional:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Beans created ONLY when conditions are met.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "section", 1)(28, "div", 6)(29, "h3", 7);
      \u0275\u0275element(30, "app-icon", 8);
      \u0275\u0275text(31, " Auto-Config Decision Tree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 9);
      \u0275\u0275repeaterCreate(33, SbAutoConfigComponent_For_34_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 11);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12)(38, "button", 13);
      \u0275\u0275listener("click", function SbAutoConfigComponent_Template_button_click_38_listener() {
        return ctx.runTree();
      });
      \u0275\u0275element(39, "app-icon", 14);
      \u0275\u0275text(40, " Show Auto-Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 15);
      \u0275\u0275listener("click", function SbAutoConfigComponent_Template_button_click_41_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(42, "app-icon", 16);
      \u0275\u0275text(43, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "section", 1)(45, "h2", 2);
      \u0275\u0275element(46, "app-icon", 17);
      \u0275\u0275text(47, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 19)(50, "h3", 20);
      \u0275\u0275text(51, "Custom Auto-Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 21);
      \u0275\u0275text(53, "Create your own auto-configuration class.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 19)(56, "h3", 20);
      \u0275\u0275text(57, "Exclude Auto-Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 21);
      \u0275\u0275text(59, "Disable specific auto-configurations.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 19)(62, "h3", 20);
      \u0275\u0275text(63, "Debug Auto-Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 21);
      \u0275\u0275text(65, "See what was and wasn't auto-configured.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 19)(68, "h3", 20);
      \u0275\u0275text(69, "Override Defaults");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p", 21);
      \u0275\u0275text(71, "Your beans always win over auto-config.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(23);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.checks());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeCustom);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeExclude);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeDebug);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeOverride);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tree-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.tree-step[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.3s;\n}\n.tree-step.yes[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.tree-step.no[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.tree-q[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.tree-a[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-green[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n/*# sourceMappingURL=sb-auto-config.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbAutoConfigComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-auto-config", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Auto-Configuration" subtitle="Spring Boot's magic \u2014 automatic bean configuration based on classpath, properties, and conditions." badge="SPRING BOOT" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> How Auto-Config Works</h2>
        <div class="prose">
          <p><strong>Auto-configuration</strong> automatically creates and configures beans based on what's on your classpath. Add <code>spring-boot-starter-web</code> \u2192 get Tomcat, Jackson, DispatcherServlet \u2014 all pre-configured.</p>
          <ul>
            <li><strong>&#64;SpringBootApplication:</strong> Combines &#64;Configuration, &#64;EnableAutoConfiguration, &#64;ComponentScan.</li>
            <li><strong>spring.factories / AutoConfiguration.imports:</strong> Lists all auto-config classes.</li>
            <li><strong>&#64;Conditional:</strong> Beans created ONLY when conditions are met.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> Auto-Config Decision Tree</h3>
          <div class="tree-demo">
            @for (check of checks(); track check.id) {
              <div class="tree-step" [class]="check.state">
                <span class="tree-q">{{ check.question }}</span>
                <span class="tree-a">{{ check.answer }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runTree()" [disabled]="anim()" class="btn btn-green"><app-icon name="play" [size]="16" /> Show Auto-Config</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Auto-Config</h3><p class="op-desc">Create your own auto-configuration class.</p><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Exclude Auto-Config</h3><p class="op-desc">Disable specific auto-configurations.</p><app-code-block [code]="codeExclude" /></div>
          <div class="op-card"><h3 class="op-title">Debug Auto-Config</h3><p class="op-desc">See what was and wasn't auto-configured.</p><app-code-block [code]="codeDebug" /></div>
          <div class="op-card"><h3 class="op-title">Override Defaults</h3><p class="op-desc">Your beans always win over auto-config.</p><app-code-block [code]="codeOverride" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;7615ef94785ca86f23cd4567252567d406f6f9fa2471f6734b17cd6dd93a984e;D:/A21/JavaIQ/src/app/features/tutorials/topics/sb-auto-config.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-green {\n  color: #16a34a;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #16a34a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.tree-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.tree-step {\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.3s;\n}\n.tree-step.yes {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.tree-step.no {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.tree-q {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.tree-a {\n  font-size: 0.6rem;\n  font-weight: 700;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.btn-green {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n/*# sourceMappingURL=sb-auto-config.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbAutoConfigComponent, { className: "SbAutoConfigComponent", filePath: "src/app/features/tutorials/topics/sb-auto-config.component.ts", lineNumber: 67 });
})();
export {
  SbAutoConfigComponent
};
//# sourceMappingURL=chunk-UPUQI6RC.js.map
