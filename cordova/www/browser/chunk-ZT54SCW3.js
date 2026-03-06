import{a as M,b as P,c as I}from"./chunk-5NK5W44O.js";import{Cb as y,Gb as v,Ib as m,Pa as r,Qb as C,Tb as t,Ub as l,Vb as S,aa as g,ab as f,ba as u,na as p,qb as b,rb as x,sb as a,tb as n,ub as e,vb as s}from"./chunk-WSUICUG6.js";import"./chunk-NWJ5J3BN.js";var k=(c,d)=>d.name;function h(c,d){if(c&1){let i=y();n(0,"div",17),v("click",function(){let _=g(i).$implicit,E=m();return u(E.select(_.name))}),n(1,"span",18),t(2),e(),n(3,"span",19),t(4),e(),n(5,"span",20),t(6),e()()}if(c&2){let i=d.$implicit,o=m();C("active",o.active()===i.name),r(2),l(i.icon),r(2),l(i.name),r(2),S("",i.count," deps")}}var O=class c{active=p("");status=p("Click a starter to see what dependencies it pulls in.");starters=p([{name:"starter-web",icon:"\u{1F310}",count:"25+"},{name:"starter-data-jpa",icon:"\u{1F5C4}\uFE0F",count:"15+"},{name:"starter-security",icon:"\u{1F512}",count:"10+"},{name:"starter-test",icon:"\u{1F9EA}",count:"12+"}]);codeIntro=`<!-- ONE starter = everything you need -->
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
     \u2705 Logging (SLF4J + Logback) -->`;codeParent=`<parent>
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
</dependencies>`;codeBom=`<!-- Without parent POM, use BOM import -->
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
</dependencyManagement>`;codeExclude=`<!-- Swap Tomcat for Jetty -->
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
</dependency>`;codeCustom=`// my-company-starter/pom.xml
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
}`;select(d){this.active.set(d);let i={"starter-web":"Web: Tomcat, Spring MVC, Jackson, Validator \u2014 build REST APIs instantly!","starter-data-jpa":"Data JPA: Hibernate, HikariCP, Spring Data repos \u2014 DB in minutes!","starter-security":"Security: Auth filters, password encoding, CSRF \u2014 secure by default!","starter-test":"Test: JUnit 5, Mockito, AssertJ, MockMvc \u2014 test everything!"};this.status.set(i[d]??"")}static \u0275fac=function(i){return new(i||c)};static \u0275cmp=f({type:c,selectors:[["app-topic-sb-starters"]],decls:67,vars:9,consts:[["title","Starters & Dependencies","subtitle","One dependency, everything you need. Understand starter POMs, dependency management, and the Spring Boot BOM.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #1e3a5f, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-blue",3,"size"],[1,"starter-grid"],[1,"starter",3,"active"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"op-desc"],[1,"starter",3,"click"],[1,"starter-icon"],[1,"starter-name"],[1,"starter-count"]],template:function(i,o){i&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," What are Starters?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Starters"),e(),t(9," are curated dependency sets. Add ONE starter \u2192 get all needed libraries with compatible versions."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"spring-boot-starter-web:"),e(),t(14," Tomcat, Jackson, Spring MVC, validation."),e(),n(15,"li")(16,"strong"),t(17,"spring-boot-starter-data-jpa:"),e(),t(18," Hibernate, Spring Data JPA, HikariCP."),e(),n(19,"li")(20,"strong"),t(21,"spring-boot-starter-security:"),e(),t(22," Spring Security, password encoders."),e(),n(23,"li")(24,"strong"),t(25,"spring-boot-starter-test:"),e(),t(26," JUnit 5, Mockito, AssertJ, MockMvc."),e()(),s(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),s(31,"app-icon",8),t(32," Starter Dependency Explorer"),e(),n(33,"div",9),b(34,h,7,5,"div",10,k),e(),n(36,"div",11),t(37),e()()(),n(38,"section",1)(39,"h2",2),s(40,"app-icon",12),t(41," Patterns"),e(),n(42,"div",13)(43,"div",14)(44,"h3",15),t(45,"Parent POM"),e(),n(46,"p",16),t(47,"Inherit version management from Spring Boot."),e(),s(48,"app-code-block",5),e(),n(49,"div",14)(50,"h3",15),t(51,"BOM Import"),e(),n(52,"p",16),t(53,"Use BOM without parent POM."),e(),s(54,"app-code-block",5),e(),n(55,"div",14)(56,"h3",15),t(57,"Exclude Transitive"),e(),n(58,"p",16),t(59,"Swap or exclude specific dependencies."),e(),s(60,"app-code-block",5),e(),n(61,"div",14)(62,"h3",15),t(63,"Custom Starter"),e(),n(64,"p",16),t(65,"Create your own reusable starter."),e(),s(66,"app-code-block",5),e()()()()),i&2&&(r(3),a("size",28),r(24),a("code",o.codeIntro),r(4),a("size",22),r(3),x(o.starters()),r(3),l(o.status()),r(3),a("size",28),r(8),a("code",o.codeParent),r(6),a("code",o.codeBom),r(6),a("code",o.codeExclude),r(6),a("code",o.codeCustom))},dependencies:[M,P,I],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#2563eb}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.starter-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:20px}.starter[_ngcontent-%COMP%]{padding:14px;border-radius:12px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.starter.active[_ngcontent-%COMP%]{border-color:#2563eb;background:#eff6ff;transform:scale(1.03)}.starter-icon[_ngcontent-%COMP%]{display:block;font-size:1.3rem;margin-bottom:4px}.starter-name[_ngcontent-%COMP%]{display:block;font-size:.65rem;font-weight:800;color:#0f172a}.starter-count[_ngcontent-%COMP%]{display:block;font-size:.5rem;color:#2563eb;font-weight:600}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}.op-desc[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b;margin:0}"],changeDetection:0})};export{O as SbStartersComponent};
