import{a as p,b as d,c as m}from"./chunk-6QA53VVD.js";import{Fb as t,Ka as n,Va as l,kb as o,lb as i,mb as e,nb as r}from"./chunk-RGVQRHF6.js";import"./chunk-NWJ5J3BN.js";var v=class s{codeIntro=`// Without discovery: hardcoded URLs \u274C
// http://192.168.1.10:8081/api/users

// With discovery: logical names \u2705
// http://user-service/api/users
// Discovery server resolves to actual instance`;codeServer=`// Eureka Server
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServer { }

# application.yml
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false`;codeClient=`// Eureka Client (each microservice)
@SpringBootApplication
@EnableDiscoveryClient
public class UserService { }

# application.yml
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true`;codeDiscover=`// Call other services by name
@Bean
@LoadBalanced  // enables service discovery
public RestTemplate restTemplate() {
    return new RestTemplate();
}

// Use logical service name
User user = restTemplate.getForObject(
    "http://user-service/api/users/{id}",
    User.class, userId);

// With WebClient
WebClient client = WebClient.builder()
    .baseUrl("http://user-service")
    .build();`;codeConsul=`// HashiCorp Consul (alternative)
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
</dependency>

spring:
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        service-name: user-service
        health-check-interval: 10s`;static \u0275fac=function(a){return new(a||s)};static \u0275cmp=l({type:s,selectors:[["app-topic-ms-discovery"]],decls:33,vars:7,consts:[["title","Service Discovery","subtitle","Dynamic service location. Eureka Server, service registration, client-side discovery, and health checks.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #166534, #4ade80)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-green",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(a,c){a&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),r(3,"app-icon",3),t(4," Service Discovery"),e(),i(5,"div",4)(6,"p"),t(7,"Services register themselves with a "),i(8,"strong"),t(9,"discovery server"),e(),t(10,". Other services query the registry to find available instances \u2014 no hardcoded URLs."),e(),r(11,"app-code-block",5),e()(),i(12,"section",1)(13,"h2",2),r(14,"app-icon",6),t(15," Patterns"),e(),i(16,"div",7)(17,"div",8)(18,"h3",9),t(19,"Eureka Server"),e(),r(20,"app-code-block",5),e(),i(21,"div",8)(22,"h3",9),t(23,"Eureka Client"),e(),r(24,"app-code-block",5),e(),i(25,"div",8)(26,"h3",9),t(27,"Discovery Client"),e(),r(28,"app-code-block",5),e(),i(29,"div",8)(30,"h3",9),t(31,"Consul Alternative"),e(),r(32,"app-code-block",5),e()()()()),a&2&&(n(3),o("size",28),n(8),o("code",c.codeIntro),n(3),o("size",28),n(6),o("code",c.codeServer),n(4),o("code",c.codeClient),n(4),o("code",c.codeDiscover),n(4),o("code",c.codeConsul))},dependencies:[p,d,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-green[_ngcontent-%COMP%]{color:#16a34a}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{v as MsDiscoveryComponent};
