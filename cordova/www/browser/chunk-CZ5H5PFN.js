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

// src/app/features/tutorials/topics/sb-profiles.component.ts
var SbProfilesComponent = class _SbProfilesComponent {
  codeIntro = `# Activate profile
java -jar app.jar --spring.profiles.active=prod

# Or via environment variable
SPRING_PROFILES_ACTIVE=prod java -jar app.jar

# Or in application.properties
spring.profiles.active=dev

# Profile-specific config files
application.yml          # default (always loaded)
application-dev.yml      # loaded when "dev" is active
application-prod.yml     # loaded when "prod" is active`;
  codeYaml = `# application-dev.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:h2:mem:devdb
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: create-drop
logging:
  level:
    root: DEBUG

# application-prod.yml
server:
  port: 443
spring:
  datasource:
    url: jdbc:mysql://\${DB_HOST}:3306/proddb
    hikari:
      maximum-pool-size: 20
  jpa:
    hibernate:
      ddl-auto: validate`;
  codeBeans = `// Bean only in specific profile
@Configuration
public class StorageConfig {

    @Bean
    @Profile("dev")
    public StorageService localStorage() {
        return new LocalFileStorageService();
    }

    @Bean
    @Profile("prod")
    public StorageService s3Storage() {
        return new S3StorageService();
    }

    @Bean
    @Profile("!prod")  // NOT prod
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2).build();
    }
}`;
  codeMulti = `# Activate multiple profiles
spring.profiles.active=prod,metrics,ssl

# Docker Compose
environment:
  SPRING_PROFILES_ACTIVE: prod,docker

# Programmatic activation
SpringApplication app = new SpringApplication(MyApp.class);
app.setAdditionalProfiles("metrics");
app.run(args);

# Test with specific profile
@SpringBootTest
@ActiveProfiles("test")
class MyTest { }`;
  codeGroups = `# Profile groups (Spring Boot 2.4+)
spring.profiles.group.production=prod,metrics,ssl
spring.profiles.group.local=dev,h2,debug

# Now just activate the group:
java -jar app.jar --spring.profiles.active=production
# Activates: prod + metrics + ssl

# In YAML:
spring:
  profiles:
    group:
      production:
        - prod
        - metrics
        - ssl`;
  static \u0275fac = function SbProfilesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbProfilesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbProfilesComponent, selectors: [["app-topic-sb-profiles"]], decls: 32, vars: 7, consts: [["title", "Profiles & Environments", "subtitle", "Manage multi-environment configs. Profile activation, profile-specific beans, and conditional logic.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #6d28d9, #c084fc)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-violet", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbProfilesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Profiles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "Profiles");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " let you define different configs for dev, staging, and production \u2014 all in the same codebase.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 1)(12, "h2", 2);
      \u0275\u0275element(13, "app-icon", 6);
      \u0275\u0275text(14, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "h3", 9);
      \u0275\u0275text(18, "Profile-Specific YAML");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "h3", 9);
      \u0275\u0275text(22, "@Profile Beans");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "h3", 9);
      \u0275\u0275text(26, "Multi-Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "Profile Groups");
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
      \u0275\u0275property("code", ctx.codeYaml);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBeans);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeMulti);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGroups);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-profiles.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbProfilesComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-profiles", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="Profiles & Environments" subtitle="Manage multi-environment configs. Profile activation, profile-specific beans, and conditional logic." badge="SPRING BOOT" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Profiles</h2>
        <div class="prose">
          <p><strong>Profiles</strong> let you define different configs for dev, staging, and production \u2014 all in the same codebase.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Profile-Specific YAML</h3><app-code-block [code]="codeYaml" /></div>
          <div class="op-card"><h3 class="op-title">&#64;Profile Beans</h3><app-code-block [code]="codeBeans" /></div>
          <div class="op-card"><h3 class="op-title">Multi-Profile</h3><app-code-block [code]="codeMulti" /></div>
          <div class="op-card"><h3 class="op-title">Profile Groups</h3><app-code-block [code]="codeGroups" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ["/* angular:styles/component:css;3fdea3d65f998ea6e02a91e28e2bbadf57463c689a1bfe3f13b44f31a77d8a11;/Users/sathishkumarramalingam/projects/JavaIQ/.claude/worktrees/goofy-haibt/src/app/features/tutorials/topics/sb-profiles.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-violet {\n  color: #7c3aed;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-profiles.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbProfilesComponent, { className: "SbProfilesComponent", filePath: "src/app/features/tutorials/topics/sb-profiles.component.ts", lineNumber: 36 });
})();
export {
  SbProfilesComponent
};
//# sourceMappingURL=chunk-CZ5H5PFN.js.map
