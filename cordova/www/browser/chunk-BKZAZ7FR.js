import{a as d,b as s,c as m}from"./chunk-LDZEFRU3.js";import{$a as c,Ob as i,Pa as o,qb as t,rb as n,sb as e,tb as r}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var g=class l{codeIntro=`# Activate profile
java -jar app.jar --spring.profiles.active=prod

# Or via environment variable
SPRING_PROFILES_ACTIVE=prod java -jar app.jar

# Or in application.properties
spring.profiles.active=dev

# Profile-specific config files
application.yml          # default (always loaded)
application-dev.yml      # loaded when "dev" is active
application-prod.yml     # loaded when "prod" is active`;codeYaml=`# application-dev.yml
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
      ddl-auto: validate`;codeBeans=`// Bean only in specific profile
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
}`;codeMulti=`# Activate multiple profiles
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
class MyTest { }`;codeGroups=`# Profile groups (Spring Boot 2.4+)
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
        - ssl`;static \u0275fac=function(p){return new(p||l)};static \u0275cmp=c({type:l,selectors:[["app-topic-sb-profiles"]],decls:32,vars:7,consts:[["title","Profiles & Environments","subtitle","Manage multi-environment configs. Profile activation, profile-specific beans, and conditional logic.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,a){p&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),i(4," Profiles"),e(),n(5,"div",4)(6,"p")(7,"strong"),i(8,"Profiles"),e(),i(9," let you define different configs for dev, staging, and production \u2014 all in the same codebase."),e(),r(10,"app-code-block",5),e()(),n(11,"section",1)(12,"h2",2),r(13,"app-icon",6),i(14," Patterns"),e(),n(15,"div",7)(16,"div",8)(17,"h3",9),i(18,"Profile-Specific YAML"),e(),r(19,"app-code-block",5),e(),n(20,"div",8)(21,"h3",9),i(22,"@Profile Beans"),e(),r(23,"app-code-block",5),e(),n(24,"div",8)(25,"h3",9),i(26,"Multi-Profile"),e(),r(27,"app-code-block",5),e(),n(28,"div",8)(29,"h3",9),i(30,"Profile Groups"),e(),r(31,"app-code-block",5),e()()()()),p&2&&(o(3),t("size",28),o(7),t("code",a.codeIntro),o(3),t("size",28),o(6),t("code",a.codeYaml),o(4),t("code",a.codeBeans),o(4),t("code",a.codeMulti),o(4),t("code",a.codeGroups))},dependencies:[d,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbProfilesComponent};
