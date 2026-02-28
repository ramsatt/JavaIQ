import{a as l,b as m}from"./chunk-AMVNOPTI.js";import{a as d}from"./chunk-SI5PESLS.js";import{$a as r,Ja as s,ab as n,bb as e,cb as o,ub as t,ya as i}from"./chunk-WGYJYFZL.js";import"./chunk-NWJ5J3BN.js";var f=class a{codeIntro=`// Git repo structure for config:
// config-repo/
// \u251C\u2500\u2500 application.yml        (shared defaults)
// \u251C\u2500\u2500 user-service.yml       (user-service specific)
// \u251C\u2500\u2500 user-service-prod.yml  (user-service + prod profile)
// \u2514\u2500\u2500 order-service.yml

// Resolution order:
// application.yml \u2192 {service}.yml \u2192 {service}-{profile}.yml`;codeServer=`@SpringBootApplication
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
# GET /user-service/prod \u2192 returns user-service-prod.yml`;codeClient=`// Each microservice
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
        max-attempts: 5`;codeRefresh=`// Dynamic config refresh (no restart!)
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
// POST /actuator/busrefresh \u2192 refreshes ALL services`;codeEncrypt=`# Encrypt sensitive properties
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
# Config Server decrypts before serving`;static \u0275fac=function(p){return new(p||a)};static \u0275cmp=s({type:a,selectors:[["app-topic-ms-config"]],decls:33,vars:7,consts:[["title","Config Server","subtitle","Centralized configuration management. Git-backed config, encryption, dynamic refresh, and environment-specific settings.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #6d28d9, #c084fc)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-violet",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(p,c){p&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),o(3,"app-icon",3),t(4," Config Server"),e(),n(5,"div",4)(6,"p"),t(7,"Externalize all config to a "),n(8,"strong"),t(9,"central server"),e(),t(10,". Services fetch config at startup. Update Git \u2192 refresh all services."),e(),o(11,"app-code-block",5),e()(),n(12,"section",1)(13,"h2",2),o(14,"app-icon",6),t(15," Patterns"),e(),n(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Server Setup"),e(),o(20,"app-code-block",5),e(),n(21,"div",8)(22,"h3",9),t(23,"Client Setup"),e(),o(24,"app-code-block",5),e(),n(25,"div",8)(26,"h3",9),t(27,"Dynamic Refresh"),e(),o(28,"app-code-block",5),e(),n(29,"div",8)(30,"h3",9),t(31,"Encryption"),e(),o(32,"app-code-block",5),e()()()()),p&2&&(i(3),r("size",28),i(8),r("code",c.codeIntro),i(3),r("size",28),i(6),r("code",c.codeServer),i(4),r("code",c.codeClient),i(4),r("code",c.codeRefresh),i(4),r("code",c.codeEncrypt))},dependencies:[d,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-violet[_ngcontent-%COMP%]{color:#7c3aed}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{f as MsConfigComponent};
