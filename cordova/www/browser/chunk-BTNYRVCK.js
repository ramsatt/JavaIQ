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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-starters.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function SbStartersComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function SbStartersComponent_For_35_Template_div_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(s_r2.name));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.active() === s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r2.count, " deps");
  }
}
var SbStartersComponent = class _SbStartersComponent {
  active = signal("", ...ngDevMode ? [{ debugName: "active" }] : []);
  status = signal("Click a starter to see what dependencies it pulls in.", ...ngDevMode ? [{ debugName: "status" }] : []);
  starters = signal([
    { name: "starter-web", icon: "\u{1F310}", count: "25+" },
    { name: "starter-data-jpa", icon: "\u{1F5C4}\uFE0F", count: "15+" },
    { name: "starter-security", icon: "\u{1F512}", count: "10+" },
    { name: "starter-test", icon: "\u{1F9EA}", count: "12+" }
  ], ...ngDevMode ? [{ debugName: "starters" }] : []);
  codeIntro = `<!-- ONE starter = everything you need -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- No version needed! Parent manages it -->
</dependency>

<!-- This single line gives you:
     \u2705 Spring MVC
     \u2705 Embedded Tomcat
     \u2705 Jackson JSON
     \u2705 Bean Validation
     \u2705 Logging (SLF4J + Logback) -->`;
  codeParent = `<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<!-- Now ALL starter versions are managed -->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <!-- version inherited from parent! -->
    </dependency>
</dependencies>`;
  codeBom = `<!-- Without parent POM, use BOM import -->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.2.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>`;
  codeExclude = `<!-- Swap Tomcat for Jetty -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`;
  codeCustom = `// my-company-starter/pom.xml
<dependencies>
    <dependency>
        <groupId>com.company</groupId>
        <artifactId>my-company-autoconfigure</artifactId>
    </dependency>
</dependencies>

// my-company-autoconfigure module:
@AutoConfiguration
@ConditionalOnClass(CompanyService.class)
public class CompanyAutoConfiguration {
    @Bean @ConditionalOnMissingBean
    public CompanyService companyService() {
        return new DefaultCompanyService();
    }
}`;
  select(name) {
    this.active.set(name);
    const info = {
      "starter-web": "Web: Tomcat, Spring MVC, Jackson, Validator \u2014 build REST APIs instantly!",
      "starter-data-jpa": "Data JPA: Hibernate, HikariCP, Spring Data repos \u2014 DB in minutes!",
      "starter-security": "Security: Auth filters, password encoding, CSRF \u2014 secure by default!",
      "starter-test": "Test: JUnit 5, Mockito, AssertJ, MockMvc \u2014 test everything!"
    };
    this.status.set(info[name] ?? "");
  }
  static \u0275fac = function SbStartersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbStartersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbStartersComponent, selectors: [["app-topic-sb-starters"]], decls: 67, vars: 9, consts: [["title", "Starters & Dependencies", "subtitle", "One dependency, everything you need. Understand starter POMs, dependency management, and the Spring Boot BOM.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #1e3a5f, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-blue", 3, "size"], [1, "starter-grid"], [1, "starter", 3, "active"], [1, "viz-status"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "op-desc"], [1, "starter", 3, "click"], [1, "starter-icon"], [1, "starter-name"], [1, "starter-count"]], template: function SbStartersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " What are Starters?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Starters");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " are curated dependency sets. Add ONE starter \u2192 get all needed libraries with compatible versions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "spring-boot-starter-web:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Tomcat, Jackson, Spring MVC, validation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "spring-boot-starter-data-jpa:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Hibernate, Spring Data JPA, HikariCP.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "spring-boot-starter-security:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Spring Security, password encoders.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "spring-boot-starter-test:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " JUnit 5, Mockito, AssertJ, MockMvc.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Starter Dependency Explorer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275repeaterCreate(34, SbStartersComponent_For_35_Template, 7, 5, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "section", 1)(39, "h2", 2);
      \u0275\u0275element(40, "app-icon", 12);
      \u0275\u0275text(41, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 14)(44, "h3", 15);
      \u0275\u0275text(45, "Parent POM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 16);
      \u0275\u0275text(47, "Inherit version management from Spring Boot.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 14)(50, "h3", 15);
      \u0275\u0275text(51, "BOM Import");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 16);
      \u0275\u0275text(53, "Use BOM without parent POM.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "h3", 15);
      \u0275\u0275text(57, "Exclude Transitive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 16);
      \u0275\u0275text(59, "Swap or exclude specific dependencies.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14)(62, "h3", 15);
      \u0275\u0275text(63, "Custom Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 16);
      \u0275\u0275text(65, "Create your own reusable starter.");
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
      \u0275\u0275repeater(ctx.starters());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(8);
      \u0275\u0275property("code", ctx.codeParent);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeBom);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeExclude);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeCustom);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.starter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.starter[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.starter.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  transform: scale(1.03);\n}\n.starter-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.3rem;\n  margin-bottom: 4px;\n}\n.starter-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.starter-count[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.5rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n/*# sourceMappingURL=sb-starters.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbStartersComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-starters", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Starters & Dependencies" subtitle="One dependency, everything you need. Understand starter POMs, dependency management, and the Spring Boot BOM." badge="SPRING BOOT" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> What are Starters?</h2>
        <div class="prose">
          <p><strong>Starters</strong> are curated dependency sets. Add ONE starter \u2192 get all needed libraries with compatible versions.</p>
          <ul>
            <li><strong>spring-boot-starter-web:</strong> Tomcat, Jackson, Spring MVC, validation.</li>
            <li><strong>spring-boot-starter-data-jpa:</strong> Hibernate, Spring Data JPA, HikariCP.</li>
            <li><strong>spring-boot-starter-security:</strong> Spring Security, password encoders.</li>
            <li><strong>spring-boot-starter-test:</strong> JUnit 5, Mockito, AssertJ, MockMvc.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-blue" /> Starter Dependency Explorer</h3>
          <div class="starter-grid">
            @for (s of starters(); track s.name) {
              <div class="starter" [class.active]="active() === s.name" (click)="select(s.name)">
                <span class="starter-icon">{{ s.icon }}</span>
                <span class="starter-name">{{ s.name }}</span>
                <span class="starter-count">{{ s.count }} deps</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Parent POM</h3><p class="op-desc">Inherit version management from Spring Boot.</p><app-code-block [code]="codeParent" /></div>
          <div class="op-card"><h3 class="op-title">BOM Import</h3><p class="op-desc">Use BOM without parent POM.</p><app-code-block [code]="codeBom" /></div>
          <div class="op-card"><h3 class="op-title">Exclude Transitive</h3><p class="op-desc">Swap or exclude specific dependencies.</p><app-code-block [code]="codeExclude" /></div>
          <div class="op-card"><h3 class="op-title">Custom Starter</h3><p class="op-desc">Create your own reusable starter.</p><app-code-block [code]="codeCustom" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;8439702dd50bcb74785c7eba41b2b0a620e8ce7ac1e672183a65a71aad0415c2;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-starters.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.prose code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 5px;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.8rem;\n  color: #2563eb;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.starter-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  margin-bottom: 20px;\n}\n.starter {\n  padding: 14px;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.starter.active {\n  border-color: #2563eb;\n  background: #eff6ff;\n  transform: scale(1.03);\n}\n.starter-icon {\n  display: block;\n  font-size: 1.3rem;\n  margin-bottom: 4px;\n}\n.starter-name {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.starter-count {\n  display: block;\n  font-size: 0.5rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.op-desc {\n  font-size: 0.78rem;\n  color: #64748b;\n  margin: 0;\n}\n/*# sourceMappingURL=sb-starters.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbStartersComponent, { className: "SbStartersComponent", filePath: "src/app/features/tutorials/topics/sb-starters.component.ts", lineNumber: 62 });
})();
export {
  SbStartersComponent
};
//# sourceMappingURL=chunk-BTNYRVCK.js.map
