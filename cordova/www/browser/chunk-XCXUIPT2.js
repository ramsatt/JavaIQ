import{a as C,b as _,c as M}from"./chunk-LDZEFRU3.js";import{$a as u,Bb as b,Nb as h,Ob as t,Pa as i,Pb as f,na as g,ob as x,pb as y,qb as r,rb as n,sb as e,tb as s}from"./chunk-AMIPRJ7H.js";import{a as p,b as m}from"./chunk-NWJ5J3BN.js";var O=(d,l)=>l.id;function S(d,l){if(d&1&&(n(0,"div",21)(1,"span",22),t(2),e(),n(3,"span",23),t(4),e()()),d&2){let o=l.$implicit;h(o.state),i(2),f(o.icon),i(2),f(o.text)}}var P=class d{steps=g([{id:1,icon:"\u270F\uFE0F",text:"Developer edits Java file",state:""},{id:2,icon:"\u{1F440}",text:"DevTools detects classpath change",state:""},{id:3,icon:"\u{1F504}",text:"Restart classloader (fast restart ~1s)",state:""},{id:4,icon:"\u{1F310}",text:"LiveReload triggers browser refresh",state:""}]);status=g("DevTools uses two classloaders for near-instant restarts.");anim=g(!1);codeIntro=`<!-- Add to pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>

<!-- That's it! Now:
     \u2705 Auto-restart on code change
     \u2705 LiveReload in browser
     \u2705 Template caching disabled
     \u2705 H2 console auto-enabled -->`;codeSetup=`# application.properties

# Disable restart (keep LiveReload)
spring.devtools.restart.enabled=false

# Trigger file (restart only on trigger)
spring.devtools.restart.trigger-file=.trigger

# Poll interval
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s`;codeExclude=`# Don't restart for static resources
spring.devtools.restart.exclude=\\
  static/**,public/**,templates/**

# Additional paths to watch
spring.devtools.restart.additional-paths=\\
  ../shared-lib/src/main/java

# Additional exclude
spring.devtools.restart.additional-exclude=\\
  test-output/**`;codeRemote=`// Remote DevTools (for remote servers)
// \u26A0\uFE0F Development ONLY \u2014 never in production!

// 1. Set a secret
spring.devtools.remote.secret=mysecret

// 2. Run remote client
// java -cp spring-boot-devtools.jar \\
//   org.springframework.boot.devtools.RemoteSpringApplication \\
//   https://remote-server.com`;codeGlobal=`// ~/.config/spring-boot/spring-boot-devtools.yml
// Global settings applied to ALL projects

spring:
  devtools:
    restart:
      enabled: true
    livereload:
      enabled: true

// Global properties file:
// ~/.config/spring-boot/spring-boot-devtools.properties`;sleep(l){return new Promise(o=>setTimeout(o,l))}async runCycle(){if(this.anim())return;this.anim.set(!0);let l=["File saved...","Change detected on classpath!","Restarting with fresh classloader (~1s)...","Browser refreshed! Ready! \u2705"];for(let o=0;o<4;o++)this.steps.update(a=>a.map((c,v)=>v===o?m(p({},c),{state:"active"}):v<o?m(p({},c),{state:"done"}):c)),this.status.set(l[o]),await this.sleep(800);this.steps.update(o=>o.map(a=>m(p({},a),{state:"done"}))),this.anim.set(!1)}reset(){this.steps.set([{id:1,icon:"\u270F\uFE0F",text:"Developer edits Java file",state:""},{id:2,icon:"\u{1F440}",text:"DevTools detects classpath change",state:""},{id:3,icon:"\u{1F504}",text:"Restart classloader (fast restart ~1s)",state:""},{id:4,icon:"\u{1F310}",text:"LiveReload triggers browser refresh",state:""}]),this.status.set("DevTools uses two classloaders for near-instant restarts."),this.anim.set(!1)}static \u0275fac=function(o){return new(o||d)};static \u0275cmp=u({type:d,selectors:[["app-topic-sb-devtools"]],decls:66,vars:13,consts:[["title","DevTools & Hot Reload","subtitle","Turbocharge development. Automatic restart, live reload, and developer-friendly defaults.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #b45309, #fbbf24)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-amber",3,"size"],[1,"prose"],[3,"code"],[1,"viz-card"],[1,"viz-title"],["name","play","css","icon-amber",3,"size"],[1,"cycle"],[1,"cycle-step",3,"class"],[1,"viz-status"],[1,"viz-controls"],[1,"btn","btn-amber",3,"click","disabled"],["name","play",3,"size"],[1,"btn","btn-gray",3,"click","disabled"],["name","refresh-cw",3,"size"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"],[1,"cycle-step"],[1,"cycle-icon"],[1,"cycle-text"]],template:function(o,a){o&1&&(n(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),s(3,"app-icon",3),t(4," DevTools Features"),e(),n(5,"div",4)(6,"p")(7,"strong"),t(8,"DevTools"),e(),t(9," provides developer-productivity features that are automatically disabled in production."),e(),n(10,"ul")(11,"li")(12,"strong"),t(13,"Automatic Restart:"),e(),t(14," App restarts when classpath files change."),e(),n(15,"li")(16,"strong"),t(17,"LiveReload:"),e(),t(18," Browser refreshes automatically on resource changes."),e(),n(19,"li")(20,"strong"),t(21,"Property Defaults:"),e(),t(22," Disables template caching, enables debug logging."),e(),n(23,"li")(24,"strong"),t(25,"H2 Console:"),e(),t(26," Auto-enabled in development mode."),e()(),s(27,"app-code-block",5),e()(),n(28,"section",1)(29,"div",6)(30,"h3",7),s(31,"app-icon",8),t(32," Restart Cycle"),e(),n(33,"div",9),x(34,S,5,4,"div",10,O),e(),n(36,"div",11),t(37),e(),n(38,"div",12)(39,"button",13),b("click",function(){return a.runCycle()}),s(40,"app-icon",14),t(41," Simulate Restart"),e(),n(42,"button",15),b("click",function(){return a.reset()}),s(43,"app-icon",16),t(44," Reset"),e()()()(),n(45,"section",1)(46,"h2",2),s(47,"app-icon",17),t(48," Config"),e(),n(49,"div",18)(50,"div",19)(51,"h3",20),t(52,"Setup"),e(),s(53,"app-code-block",5),e(),n(54,"div",19)(55,"h3",20),t(56,"Exclude Paths"),e(),s(57,"app-code-block",5),e(),n(58,"div",19)(59,"h3",20),t(60,"Remote DevTools"),e(),s(61,"app-code-block",5),e(),n(62,"div",19)(63,"h3",20),t(64,"Global Settings"),e(),s(65,"app-code-block",5),e()()()()),o&2&&(i(3),r("size",28),i(24),r("code",a.codeIntro),i(4),r("size",22),i(3),y(a.steps()),i(3),f(a.status()),i(2),r("disabled",a.anim()),i(),r("size",16),i(2),r("disabled",a.anim()),i(),r("size",16),i(4),r("size",28),i(6),r("code",a.codeSetup),i(4),r("code",a.codeExclude),i(4),r("code",a.codeRemote),i(4),r("code",a.codeGlobal))},dependencies:[C,_,M],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-amber[_ngcontent-%COMP%]{color:#d97706}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:14px 0;padding-left:22px;list-style:disc}.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:8px}.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.viz-card[_ngcontent-%COMP%]{background:#fff;border-radius:18px;border:1px solid #e2e8f0;padding:28px 24px}.viz-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.15rem;font-weight:700;color:#0f172a;margin:0 0 24px}.cycle[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px}.cycle-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;border:2px solid #e2e8f0;transition:all .3s}.cycle-step.active[_ngcontent-%COMP%]{border-color:#d97706;background:#fffbeb}.cycle-step.done[_ngcontent-%COMP%]{border-color:#16a34a;background:#f0fdf4}.cycle-icon[_ngcontent-%COMP%]{font-size:1rem}.cycle-text[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:.68rem;color:#0f172a}.viz-status[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px 16px;text-align:center;font-family:JetBrains Mono,monospace;font-size:.78rem;color:#334155;margin-bottom:20px}.viz-controls[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:.78rem;font-weight:600;border:none;cursor:pointer}.btn[_ngcontent-%COMP%]:disabled{opacity:.5}.btn-amber[_ngcontent-%COMP%]{background:#d97706;color:#fff}.btn-gray[_ngcontent-%COMP%]{background:#e2e8f0;color:#334155}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{P as SbDevtoolsComponent};
