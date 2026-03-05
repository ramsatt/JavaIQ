import{a as h,b as y,c as S}from"./chunk-4EMTR65D.js";import{$ as f,Gb as P,Ib as t,Jb as s,Na as i,Ya as u,_ as g,la as d,lb as x,mb as b,nb as r,ob as n,pb as e,qb as a,wb as v,xb as C,yb as m}from"./chunk-X3QUIMOS.js";import"./chunk-NWJ5J3BN.js";var O=(c,l)=>l.name;function z(c,l){if(c&1){let o=v();n(0,"div",28),C("click",function(){let M=g(o).$implicit,E=m();return f(E.selectProfile(M.name))}),n(1,"span",29),t(2),e(),n(3,"span",30),t(4),e(),n(5,"span",31),t(6),e(),n(7,"span",32),t(8),e()()}if(c&2){let o=l.$implicit,p=m();P("active",p.activeProfile()===o.name),i(2),s(o.icon),i(2),s(o.name),i(2),s(o.db),i(2),s(o.logLevel)}}var _=class c{activeProfile=d("");status=d("Click a profile to see how configuration changes per environment.");profiles=d([{name:"dev",icon:"\u{1F527}",db:"H2 in-memory",logLevel:"DEBUG"},{name:"staging",icon:"\u{1F9EA}",db:"MySQL replica",logLevel:"INFO"},{name:"prod",icon:"\u{1F680}",db:"MySQL primary (pool=20)",logLevel:"WARN"}]);codeIntro=`# application.properties
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
) {}`;codeProps=`// application.yml
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
) {}`;codeProfiles=`# application-dev.yml
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
# Or: SPRING_PROFILES_ACTIVE=prod`;codeConditional=`// Bean only exists if property is set
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
public DataSource fallbackDataSource() { }`;codeSources=`// Property source priority (high to low):
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
public class CustomConfig { }`;selectProfile(l){this.activeProfile.set(l);let o={dev:"DEV profile: H2 in-memory DB, verbose DEBUG logging. Fast iteration! \u{1F527}",staging:"STAGING profile: MySQL replica, INFO logging. Pre-production testing! \u{1F9EA}",prod:"PROD profile: MySQL primary with pool=20, WARN only. Optimized for performance! \u{1F680}"};this.status.set(o[l]??"")}static \u0275fac=function(o){return new(o||c)};static \u0275cmp=u({type:c,selectors:[["app-topic-spring-config"]],decls:112,vars:14,consts:[["title","Configuration","subtitle","Externalize and manage application config. Master properties, YAML, profiles, and conditional beans.","badge","SPRING FRAMEWORK","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-violet",3,"size"],[1,"profile-grid"],[1,"profile-card",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],["name","arrow-right","css","icon-indigo",3,"size"],[1,"op-desc"],["name","briefcase","css","icon-violet",3,"size"],[1,"use-cases"],[1,"use-case","violet"],[1,"use-num","violet-bg"],[1,"use-title"],[1,"use-desc"],[1,"use-case","blue"],[1,"use-num","blue-bg"],[1,"use-case","purple"],[1,"use-num","purple-bg"],[1,"profile-card",3,"click"],[1,"profile-icon"],[1,"profile-name"],[1,"profile-db"],[1,"profile-log"]],template:function(o,p){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," Configuration in Spring"),e(),n(5,"div",4)(6,"p"),t(7,"Spring externalizes configuration so you can change behavior without recompiling. The "),n(8,"strong"),t(9,"Environment"),e(),t(10," abstraction unifies property sources."),e(),n(11,"ul")(12,"li")(13,"strong"),t(14,"application.properties / .yml:"),e(),t(15," Default config files."),e(),n(16,"li")(17,"strong"),t(18,"@Value:"),e(),t(19," Inject single values. "),n(20,"strong"),t(21,"@ConfigurationProperties:"),e(),t(22," Type-safe binding."),e(),n(23,"li")(24,"strong"),t(25,"Profiles:"),e(),t(26," Environment-specific configs (dev, staging, prod)."),e(),n(27,"li")(28,"strong"),t(29,"@Conditional:"),e(),t(30," Register beans only when conditions are met."),e()(),a(31,"app-code-block",5),e()(),n(32,"section",1)(33,"div",6)(34,"h3",7),a(35,"app-icon",8),t(36," Profile Selector"),e(),n(37,"div",9),x(38,z,9,6,"div",10,O),e(),n(40,"div",11),t(41),e()()(),n(42,"section",1)(43,"h2",2),a(44,"app-icon",12),t(45," Config Patterns"),e(),n(46,"div",13)(47,"div",14)(48,"h3",15),a(49,"app-icon",16),t(50," @ConfigurationProperties"),e(),n(51,"p",17),t(52,"Type-safe hierarchical config binding."),e(),a(53,"app-code-block",5),e(),n(54,"div",14)(55,"h3",15),a(56,"app-icon",16),t(57," Profiles"),e(),n(58,"p",17),t(59,"Activate different configs per environment."),e(),a(60,"app-code-block",5),e(),n(61,"div",14)(62,"h3",15),a(63,"app-icon",16),t(64," Conditional Beans"),e(),n(65,"p",17),t(66,"Register beans based on conditions."),e(),a(67,"app-code-block",5),e(),n(68,"div",14)(69,"h3",15),a(70,"app-icon",16),t(71," Property Sources"),e(),n(72,"p",17),t(73,"Override order: args > env > properties > defaults."),e(),a(74,"app-code-block",5),e()()(),n(75,"section",1)(76,"h2",2),a(77,"app-icon",18),t(78," Real-Time Use Cases"),e(),n(79,"div",19)(80,"div",20)(81,"div",21),t(82,"1"),e(),n(83,"div")(84,"h4",22),t(85,"12-Factor App Config"),e(),n(86,"p",23),t(87,"Environment variables override properties files. "),n(88,"code"),t(89,"SPRING_DATASOURCE_URL"),e(),t(90," in Docker Compose changes the DB without rebuilding."),e()()(),n(91,"div",24)(92,"div",25),t(93,"2"),e(),n(94,"div")(95,"h4",22),t(96,"Feature Flags"),e(),n(97,"p",23)(98,"code"),t(99,'@ConditionalOnProperty("feature.new-ui")'),e(),t(100," \u2014 enable/disable features per environment without code changes."),e()()(),n(101,"div",26)(102,"div",27),t(103,"3"),e(),n(104,"div")(105,"h4",22),t(106,"Multi-Tenant Config"),e(),n(107,"p",23),t(108,"Each tenant gets a profile: "),n(109,"code"),t(110,"application-tenant1.yml"),e(),t(111,". Spring loads the right config based on the active profile."),e()()()()()()),o&2&&(i(3),r("size",28),i(28),r("code",p.codeIntro),i(4),r("size",22),i(3),b(p.profiles()),i(3),s(p.status()),i(3),r("size",28),i(5),r("size",18),i(4),r("code",p.codeProps),i(3),r("size",18),i(4),r("code",p.codeProfiles),i(3),r("size",18),i(4),r("code",p.codeConditional),i(3),r("size",18),i(4),r("code",p.codeSources),i(3),r("size",28))},dependencies:[h,y,S],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a;font-weight:700}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c3aed}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;box-shadow:0 4px 16px #0000000d;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.profile-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}.profile-card[_ngcontent-%COMP%]{padding:16px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.profile-card.active[_ngcontent-%COMP%]{border-color:#7c3aed;background:#faf5ff;transform:scale(1.03)}.profile-icon[_ngcontent-%COMP%]{display:block;font-size:1.4rem;margin-bottom:4px}.profile-name[_ngcontent-%COMP%]{display:block;font-size:.78rem;font-weight:800;color:#0f172a;margin-bottom:4px}.profile-db[_ngcontent-%COMP%]{display:block;font-size:.55rem;color:#7c3aed;font-weight:600}.profile-log[_ngcontent-%COMP%]{display:block;font-size:.5rem;color:#64748b;margin-top:2px}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000000f}.op-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;line-height:1.55;margin:0}.use-cases[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.use-case[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;border-radius:14px;border:1px solid}.use-case.violet[_ngcontent-%COMP%]{background:#faf5ff;border-color:#d8b4fe}.use-case.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.use-case.purple[_ngcontent-%COMP%]{background:#f5f3ff;border-color:#c4b5fd}.use-num[_ngcontent-%COMP%]{width:34px;height:34px;min-width:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.78rem;font-weight:800}.violet-bg[_ngcontent-%COMP%]{background:#7c3aed}.blue-bg[_ngcontent-%COMP%]{background:#3b82f6}.purple-bg[_ngcontent-%COMP%]{background:#8b5cf6}.use-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 4px}.use-desc[_ngcontent-%COMP%]{font-size:.78rem;line-height:1.55;margin:0;color:#334155}.use-desc[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#0000000f;padding:1px 5px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:.72rem}"],changeDetection:0})};export{_ as SpringConfigComponent};
