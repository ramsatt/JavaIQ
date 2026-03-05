import{a as v,b as h,c as M}from"./chunk-LDZEFRU3.js";import{$a as C,Bb as g,Nb as y,Ob as t,Pa as o,Pb as l,na as p,ob as x,pb as S,qb as a,rb as n,sb as e,tb as s}from"./chunk-AMIPRJ7H.js";import{a as f,b}from"./chunk-NWJ5J3BN.js";var E=(d,c)=>c.id;function A(d,c){if(d&1&&(n(0,"div",22)(1,"span",23),t(2),e(),n(3,"span",24),t(4),e()()),d&2){let r=c.$implicit;y(r.state),o(2),l(r.question),o(2),l(r.answer)}}var O=class d{checks=p([{id:1,question:"Is spring-boot-starter-data-jpa on classpath?",answer:"",state:""},{id:2,question:"Is a DataSource bean already defined?",answer:"",state:""},{id:3,question:"Are JPA properties configured?",answer:"",state:""},{id:4,question:"Result: Auto-configure EntityManagerFactory",answer:"",state:""}]);status=p("Auto-configuration checks conditions before creating beans.");anim=p(!1);codeIntro=`@SpringBootApplication // the magic annotation!
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
        // Spring Boot:
        // 1. Scans classpath for starters
        // 2. Evaluates @Conditional annotations
        // 3. Auto-configures matching beans
        // 4. Your app is ready!
    }
}`;codeCustom=`@AutoConfiguration
@ConditionalOnClass(MetricsService.class)
@ConditionalOnProperty(name = "app.metrics.enabled",
    havingValue = "true", matchIfMissing = true)
public class MetricsAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MetricsService metricsService() {
        return new DefaultMetricsService();
    }
}`;codeExclude=`// Exclude in annotation
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApp { }

// Or in properties
spring.autoconfigure.exclude=\\
  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration`;codeDebug=`# application.properties
debug=true  # prints auto-config report

# Output shows:
# Positive matches:   (beans that WERE created)
#   DataSourceAutoConfiguration matched
#     - @ConditionalOnClass found
# Negative matches:   (beans that were NOT)
#   MongoAutoConfiguration did not match
#     - @ConditionalOnClass did not find`;codeOverride=`// Your bean ALWAYS wins!
@Configuration
public class MyConfig {
    @Bean // overrides auto-configured DataSource
    public DataSource dataSource() {
        return new CustomDataSource();
    }
}
// Spring Boot uses @ConditionalOnMissingBean
// Since YOU defined one, auto-config backs off`;sleep(c){return new Promise(r=>setTimeout(r,c))}async runTree(){if(this.anim())return;this.anim.set(!0);let c=["\u2705 YES \u2014 found in pom.xml!","\u274C NO \u2014 no custom DataSource","\u2705 YES \u2014 spring.datasource.url set","\u2705 CREATED \u2014 EntityManagerFactory bean"],r=["yes","no","yes","yes"];for(let i=0;i<4;i++)this.checks.update(u=>u.map((m,_)=>_===i?b(f({},m),{answer:c[i],state:r[i]}):m)),this.status.set(c[i]),await this.sleep(900);this.status.set("Auto-config created JPA beans \u2014 zero manual configuration! \u2705"),this.anim.set(!1)}reset(){this.checks.set([{id:1,question:"Is spring-boot-starter-data-jpa on classpath?",answer:"",state:""},{id:2,question:"Is a DataSource bean already defined?",answer:"",state:""},{id:3,question:"Are JPA properties configured?",answer:"",state:""},{id:4,question:"Result: Auto-configure EntityManagerFactory",answer:"",state:""}]),this.status.set("Auto-configuration checks conditions before creating beans."),this.anim.set(!1)}static \u0275fac=function(r){return new(r||d)};static \u0275cmp=C({type:d,selectors:[["app-topic-sb-auto-config"]],decls:73,vars:13,consts:[["title","Auto-Configuration","subtitle","Spring Boot's magic \u2014 automatic bean configuration based on classpath, properties, and conditions.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-green",3,"size"],[1,"tree-demo"],[1,"tree-step",3,"class"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-green",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"op-desc"],[1,"tree-step"],[1,"tree-q"],[1,"tree-a"]],template:function(r,i){r&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," How Auto-Config Works"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Auto-configuration"),e(),t(9," automatically creates and configures beans based on what's on your classpath. Add "),n(10,"code"),t(11,"spring-boot-starter-web"),e(),t(12," \u2192 get Tomcat, Jackson, DispatcherServlet \u2014 all pre-configured."),e(),n(13,"ul")(14,"li")(15,"strong"),t(16,"@SpringBootApplication:"),e(),t(17," Combines @Configuration, @EnableAutoConfiguration, @ComponentScan."),e(),n(18,"li")(19,"strong"),t(20,"spring.factories / AutoConfiguration.imports:"),e(),t(21," Lists all auto-config classes."),e(),n(22,"li")(23,"strong"),t(24,"@Conditional:"),e(),t(25," Beans created ONLY when conditions are met."),e()(),s(26,"app-code-block",5),e()(),n(27,"section",1)(28,"div",6)(29,"h3",7),s(30,"app-icon",8),t(31," Auto-Config Decision Tree"),e(),n(32,"div",9),x(33,A,5,4,"div",10,E),e(),n(35,"div",11),t(36),e(),n(37,"div",12)(38,"button",13),g("click",function(){return i.runTree()}),s(39,"app-icon",14),t(40," Show Auto-Config"),e(),n(41,"button",15),g("click",function(){return i.reset()}),s(42,"app-icon",16),t(43," Reset"),e()()()(),n(44,"section",1)(45,"h2",2),s(46,"app-icon",17),t(47," Patterns"),e(),n(48,"div",18)(49,"div",19)(50,"h3",20),t(51,"Custom Auto-Config"),e(),n(52,"p",21),t(53,"Create your own auto-configuration class."),e(),s(54,"app-code-block",5),e(),n(55,"div",19)(56,"h3",20),t(57,"Exclude Auto-Config"),e(),n(58,"p",21),t(59,"Disable specific auto-configurations."),e(),s(60,"app-code-block",5),e(),n(61,"div",19)(62,"h3",20),t(63,"Debug Auto-Config"),e(),n(64,"p",21),t(65,"See what was and wasn't auto-configured."),e(),s(66,"app-code-block",5),e(),n(67,"div",19)(68,"h3",20),t(69,"Override Defaults"),e(),n(70,"p",21),t(71,"Your beans always win over auto-config."),e(),s(72,"app-code-block",5),e()()()()),r&2&&(o(3),a("size",28),o(23),a("code",i.codeIntro),o(4),a("size",22),o(3),S(i.checks()),o(3),l(i.status()),o(2),a("disabled",i.anim()),o(),a("size",16),o(2),a("disabled",i.anim()),o(),a("size",16),o(4),a("size",28),o(8),a("code",i.codeCustom),o(6),a("code",i.codeExclude),o(6),a("code",i.codeDebug),o(6),a("code",i.codeOverride))},dependencies:[v,h,M],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#16a34a}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.tree-demo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}.tree-step[_ngcontent-%COMP%]{padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;transition:all .3s}.tree-step.yes[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.tree-step.no[_ngcontent-%COMP%]{border-color:#dc2626;background:#fef2f2}.tree-q[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a}.tree-a[_ngcontent-%COMP%]{font-size:.6rem;font-weight:700}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer}.btn[_ngcontent-%COMP%]:disabled{opacity:.5}.btn-green[_ngcontent-%COMP%]{background:#16a34a;color:#fff}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;margin:0}"],changeDetection:0})};export{O as SbAutoConfigComponent};
