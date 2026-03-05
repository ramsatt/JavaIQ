import{a as u,b as f,c as x}from"./chunk-LDZEFRU3.js";import{$a as g,Bb as d,Mb as p,Ob as t,Pa as i,Pb as v,na as l,qb as r,rb as n,sb as e,tb as a}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var h=class m{activeArch=l("");status=l("Click to compare architectures.");codeIntro=`// E-commerce as Microservices
// Each service is independently:
//   \u2705 Developed
//   \u2705 Deployed
//   \u2705 Scaled
//   \u2705 Monitored

// Services:
// user-service      \u2192 User management, auth
// product-service   \u2192 Product catalog, inventory
// order-service     \u2192 Order processing, checkout
// payment-service   \u2192 Payment processing
// notification-svc  \u2192 Email, SMS, push`;codeDecomp=`// Decomposition strategies:

// 1. By Business Capability
//    user-service, order-service, payment-service

// 2. By Subdomain (DDD)
//    Bounded contexts from domain model

// 3. Strangler Fig Pattern (migration)
//    Gradually replace monolith pieces
//    Route traffic: old \u2192 new service

// Anti-patterns to avoid:
// \u274C Distributed monolith (tightly coupled services)
// \u274C Nano-services (too fine-grained)
// \u274C Shared database (defeats the purpose)`;codeDdd=`// Domain-Driven Design \u2192 Natural service boundaries

// Order Context
@Entity public class Order {
    Long id; String status; BigDecimal total;
    Long customerId;  // reference, NOT object!
}

// Customer Context (separate service!)
@Entity public class Customer {
    Long id; String name; String email;
}

// Each context:
// \u2705 Has its own database
// \u2705 Owns its entities
// \u2705 Exposes its own API
// \u2705 Communicates via events/REST`;codeDb=`// Database per Service pattern
// Each microservice owns its data

// user-service \u2192 PostgreSQL (relational)
// product-service \u2192 MongoDB (flexible schema)
// search-service \u2192 Elasticsearch (full-text)
// session-service \u2192 Redis (fast key-value)
// analytics-service \u2192 ClickHouse (OLAP)

// \u26A0\uFE0F No cross-service JOINs!
// Use: API composition or CQRS for queries
// Use: Events for data synchronization`;codeStructure=`// Multi-module Maven project
ecommerce/
\u251C\u2500\u2500 pom.xml                  (parent POM)
\u251C\u2500\u2500 api-gateway/             (Spring Cloud Gateway)
\u251C\u2500\u2500 service-discovery/       (Eureka Server)
\u251C\u2500\u2500 config-server/           (Centralized config)
\u251C\u2500\u2500 user-service/
\u2502   \u251C\u2500\u2500 src/main/java/
\u2502   \u251C\u2500\u2500 src/main/resources/
\u2502   \u2514\u2500\u2500 Dockerfile
\u251C\u2500\u2500 order-service/
\u251C\u2500\u2500 payment-service/
\u251C\u2500\u2500 notification-service/
\u2514\u2500\u2500 docker-compose.yml       (local dev)`;select(s){this.activeArch.set(s);let c={mono:"Monolith: Simple to develop/deploy. Scales as one unit. Great for small teams & MVPs. Hard to scale specific parts.",micro:"Microservices: Independent scaling & deployment. Tech freedom. Complex infrastructure. Best for large teams & scale."};this.status.set(c[s]??"")}static \u0275fac=function(c){return new(c||m)};static \u0275cmp=g({type:m,selectors:[["app-topic-ms-intro"]],decls:67,vars:13,consts:[["title","Microservices Introduction","subtitle","Understand when and why to use microservices. Monolith vs microservices, bounded contexts, and decomposition strategies.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #1e3a5f, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-blue",3,"size"],[1,"compare"],[1,"compare-col",3,"click"],[1,"compare-icon"],[1,"compare-label"],[1,"viz-status"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,o){c&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),a(3,"app-icon",3),t(4," What are Microservices?"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"Microservices"),e(),t(9," decompose an application into small, independently deployable services. Each owns its data and communicates via APIs."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"Single Responsibility:"),e(),t(14," Each service does one thing well."),e(),n(15,"li")(16,"strong"),t(17,"Independent Deployment:"),e(),t(18," Deploy without affecting other services."),e(),n(19,"li")(20,"strong"),t(21,"Technology Freedom:"),e(),t(22," Each service can use different tech stacks."),e(),n(23,"li")(24,"strong"),t(25,"Failure Isolation:"),e(),t(26," One service failing doesn't crash everything."),e()(),a(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),a(31,"app-icon",8),t(32," Monolith vs Microservices"),e(),n(33,"div",9)(34,"div",10),d("click",function(){return o.select("mono")}),n(35,"span",11),t(36,"\u{1F4E6}"),e(),n(37,"span",12),t(38,"Monolith"),e()(),n(39,"div",10),d("click",function(){return o.select("micro")}),n(40,"span",11),t(41,"\u{1F517}"),e(),n(42,"span",12),t(43,"Microservices"),e()()(),n(44,"div",13),t(45),e()()(),n(46,"section",1)(47,"h2",2),a(48,"app-icon",14),t(49," Patterns"),e(),n(50,"div",15)(51,"div",16)(52,"h3",17),t(53,"Decomposition"),e(),a(54,"app-code-block",5),e(),n(55,"div",16)(56,"h3",17),t(57,"Bounded Context"),e(),a(58,"app-code-block",5),e(),n(59,"div",16)(60,"h3",17),t(61,"Database per Service"),e(),a(62,"app-code-block",5),e(),n(63,"div",16)(64,"h3",17),t(65,"Project Structure"),e(),a(66,"app-code-block",5),e()()()()),c&2&&(i(3),r("size",28),i(24),r("code",o.codeIntro),i(4),r("size",22),i(3),p("active",o.activeArch()==="mono"),i(5),p("active",o.activeArch()==="micro"),i(6),v(o.status()),i(3),r("size",28),i(6),r("code",o.codeDecomp),i(4),r("code",o.codeDdd),i(4),r("code",o.codeDb),i(4),r("code",o.codeStructure))},dependencies:[u,f,x],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.compare[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px}.compare-col[_ngcontent-%COMP%]{padding:20px;border-radius:14px;border:2px solid #e2e8f0;text-align:center;cursor:pointer;transition:all .3s}.compare-col.active[_ngcontent-%COMP%]{border-color:#2563eb;background:#eff6ff;transform:scale(1.03)}.compare-icon[_ngcontent-%COMP%]{display:block;font-size:2rem;margin-bottom:8px}.compare-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:800;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{h as MsIntroComponent};
