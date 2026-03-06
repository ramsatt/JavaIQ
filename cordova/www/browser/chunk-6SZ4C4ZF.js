import{a as S,b as P,c as M}from"./chunk-5NK5W44O.js";import{Cb as C,Gb as b,Ib as m,Pa as n,Qb as y,Tb as t,Ub as d,aa as g,ab as x,ba as f,na as s,qb as u,rb as v,sb as a,tb as i,ub as e,vb as p}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var O=(l,c)=>c.rank;function k(l,c){if(l&1){let o=C();i(0,"div",16),b("click",function(){let E=g(o).$implicit,h=m();return f(h.selectSrc(E.rank))}),i(1,"span",17),t(2),e(),i(3,"span",18),t(4),e(),i(5,"span",19),t(6),e()()}if(l&2){let o=c.$implicit,r=m();y("active",r.activeSrc()===o.rank),n(2),d(o.rank),n(2),d(o.name),n(2),d(o.priority)}}var _=class l{activeSrc=s(0);status=s("Higher priority sources override lower ones. Click to explore.");sources=s([{rank:1,name:"Command-line args",priority:"HIGHEST"},{rank:2,name:"OS environment variables",priority:"HIGH"},{rank:3,name:"application-{profile}.yml",priority:"MEDIUM"},{rank:4,name:"application.yml",priority:"LOW"},{rank:5,name:"@PropertySource",priority:"LOWEST"}]);codeIntro=`# application.properties
server.port=8080
app.name=JavaIQ
app.max-connections=100

# Override with env var:
# SERVER_PORT=9090 java -jar app.jar

# Override with CLI arg:
# java -jar app.jar --server.port=9090`;codeYaml=`# application.yml (hierarchical, cleaner)
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
      welcome: /templates/welcome.html`;codeTypeSafe=`// Type-safe config binding (recommended!)
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
}`;codeValidation=`@ConfigurationProperties(prefix = "app")
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
//   - maxConnections: must be >= 1`;codeDynamic=`// Inject with @Value
@Value("\${app.name:DefaultApp}")
private String appName; // with default

// SpEL expressions
@Value("#{'\${app.modes}'.split(',')}")
private List<String> modes;

// Random values (testing)
app.secret=\${random.uuid}
app.port=\${random.int(8000,9000)}`;selectSrc(c){this.activeSrc.set(c);let o={1:"CLI args (--server.port=9090) override everything!",2:"Env vars (SERVER_PORT=9090) \u2014 great for Docker/cloud.",3:"Profile-specific (application-prod.yml) overrides default.",4:"application.yml / .properties \u2014 the base config.",5:"@PropertySource \u2014 loaded last, lowest priority."};this.status.set(o[c]??"")}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=x({type:l,selectors:[["app-topic-sb-properties"]],decls:67,vars:9,consts:[["title","Application Properties","subtitle","Externalize configuration. Master application.yml, @Value, @ConfigurationProperties, and relaxed binding.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-violet",3,"size"],[1,"order-list"],[1,"order-item",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"order-item",3,"click"],[1,"order-rank"],[1,"order-name"],[1,"order-priority"]],template:function(o,r){o&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),p(3,"app-icon",3),t(4," Configuration"),e(),i(5,"div",4)(6,"p"),t(7,"Spring Boot externalizes config into "),i(8,"strong"),t(9,"application.properties"),e(),t(10," or "),i(11,"strong"),t(12,"application.yml"),e(),t(13,". Override via environment variables, command-line args, or profile-specific files."),e(),i(14,"ul")(15,"li")(16,"strong"),t(17,"@Value:"),e(),t(18," Inject individual property values."),e(),i(19,"li")(20,"strong"),t(21,"@ConfigurationProperties:"),e(),t(22," Type-safe binding to a POJO/record."),e(),i(23,"li")(24,"strong"),t(25,"Relaxed Binding:"),e(),i(26,"code"),t(27,"my.prop"),e(),t(28," = "),i(29,"code"),t(30,"MY_PROP"),e(),t(31," = "),i(32,"code"),t(33,"my-prop"),e(),t(34,"."),e()(),p(35,"app-code-block",5),e()(),i(36,"section",1)(37,"div",6)(38,"h3",7),p(39,"app-icon",8),t(40," Property Resolution Order"),e(),i(41,"div",9),u(42,k,7,5,"div",10,O),e(),i(44,"div",11),t(45),e()()(),i(46,"section",1)(47,"h2",2),p(48,"app-icon",12),t(49," Patterns"),e(),i(50,"div",13)(51,"div",14)(52,"h3",15),t(53,"YAML Config"),e(),p(54,"app-code-block",5),e(),i(55,"div",14)(56,"h3",15),t(57,"@ConfigurationProperties"),e(),p(58,"app-code-block",5),e(),i(59,"div",14)(60,"h3",15),t(61,"Validation"),e(),p(62,"app-code-block",5),e(),i(63,"div",14)(64,"h3",15),t(65,"Dynamic Config"),e(),p(66,"app-code-block",5),e()()()()),o&2&&(n(3),a("size",28),n(32),a("code",r.codeIntro),n(4),a("size",22),n(3),v(r.sources()),n(3),d(r.status()),n(3),a("size",28),n(6),a("code",r.codeYaml),n(4),a("code",r.codeTypeSafe),n(4),a("code",r.codeValidation),n(4),a("code",r.codeDynamic))},dependencies:[S,P,M],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#7c3aed}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.order-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-bottom:20px}.order-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 14px;border-radius:8px;border:2px solid #e2e8f0;cursor:pointer;transition:all .3s}.order-item.active[_ngcontent-%COMP%]{border-color:#7c3aed;background:#faf5ff}.order-rank[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;font-size:.5rem;font-weight:800}.order-name[_ngcontent-%COMP%]{flex:1;font-size:.68rem;font-weight:700;color:#0f172a}.order-priority[_ngcontent-%COMP%]{font-size:.5rem;font-weight:600;color:#7c3aed}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{_ as SbPropertiesComponent};
