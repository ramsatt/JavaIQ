import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-devtools.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SbDevtoolsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275classMap(step_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.text);
  }
}
var SbDevtoolsComponent = class _SbDevtoolsComponent {
  steps = signal([
    { id: 1, icon: "\u270F\uFE0F", text: "Developer edits Java file", state: "" },
    { id: 2, icon: "\u{1F440}", text: "DevTools detects classpath change", state: "" },
    { id: 3, icon: "\u{1F504}", text: "Restart classloader (fast restart ~1s)", state: "" },
    { id: 4, icon: "\u{1F310}", text: "LiveReload triggers browser refresh", state: "" }
  ], ...ngDevMode ? [{ debugName: "steps" }] : []);
  status = signal("DevTools uses two classloaders for near-instant restarts.", ...ngDevMode ? [{ debugName: "status" }] : []);
  anim = signal(false, ...ngDevMode ? [{ debugName: "anim" }] : []);
  codeIntro = `<!-- Add to pom.xml -->
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
     \u2705 H2 console auto-enabled -->`;
  codeSetup = `# application.properties

# Disable restart (keep LiveReload)
spring.devtools.restart.enabled=false

# Trigger file (restart only on trigger)
spring.devtools.restart.trigger-file=.trigger

# Poll interval
spring.devtools.restart.poll-interval=2s
spring.devtools.restart.quiet-period=1s`;
  codeExclude = `# Don't restart for static resources
spring.devtools.restart.exclude=\\
  static/**,public/**,templates/**

# Additional paths to watch
spring.devtools.restart.additional-paths=\\
  ../shared-lib/src/main/java

# Additional exclude
spring.devtools.restart.additional-exclude=\\
  test-output/**`;
  codeRemote = `// Remote DevTools (for remote servers)
// \u26A0\uFE0F Development ONLY \u2014 never in production!

// 1. Set a secret
spring.devtools.remote.secret=mysecret

// 2. Run remote client
// java -cp spring-boot-devtools.jar \\
//   org.springframework.boot.devtools.RemoteSpringApplication \\
//   https://remote-server.com`;
  codeGlobal = `// ~/.config/spring-boot/spring-boot-devtools.yml
// Global settings applied to ALL projects

spring:
  devtools:
    restart:
      enabled: true
    livereload:
      enabled: true

// Global properties file:
// ~/.config/spring-boot/spring-boot-devtools.properties`;
  sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async runCycle() {
    if (this.anim())
      return;
    this.anim.set(true);
    const labels = ["File saved...", "Change detected on classpath!", "Restarting with fresh classloader (~1s)...", "Browser refreshed! Ready! \u2705"];
    for (let i = 0; i < 4; i++) {
      this.steps.update((s) => s.map((st, j) => j === i ? __spreadProps(__spreadValues({}, st), { state: "active" }) : j < i ? __spreadProps(__spreadValues({}, st), { state: "done" }) : st));
      this.status.set(labels[i]);
      await this.sleep(800);
    }
    this.steps.update((s) => s.map((st) => __spreadProps(__spreadValues({}, st), { state: "done" })));
    this.anim.set(false);
  }
  reset() {
    this.steps.set([{ id: 1, icon: "\u270F\uFE0F", text: "Developer edits Java file", state: "" }, { id: 2, icon: "\u{1F440}", text: "DevTools detects classpath change", state: "" }, { id: 3, icon: "\u{1F504}", text: "Restart classloader (fast restart ~1s)", state: "" }, { id: 4, icon: "\u{1F310}", text: "LiveReload triggers browser refresh", state: "" }]);
    this.status.set("DevTools uses two classloaders for near-instant restarts.");
    this.anim.set(false);
  }
  static \u0275fac = function SbDevtoolsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbDevtoolsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbDevtoolsComponent, selectors: [["app-topic-sb-devtools"]], decls: 66, vars: 13, consts: [["title", "DevTools & Hot Reload", "subtitle", "Turbocharge development. Automatic restart, live reload, and developer-friendly defaults.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #b45309, #fbbf24)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-amber", 3, "size"], [1, "prose"], [3, "code"], [1, "viz-card"], [1, "viz-title"], ["name", "play", "css", "icon-amber", 3, "size"], [1, "cycle"], [1, "cycle-step", 3, "class"], [1, "viz-status"], [1, "viz-controls"], [1, "btn", "btn-amber", 3, "click", "disabled"], ["name", "play", 3, "size"], [1, "btn", "btn-gray", 3, "click", "disabled"], ["name", "refresh-cw", 3, "size"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"], [1, "cycle-step"], [1, "cycle-icon"], [1, "cycle-text"]], template: function SbDevtoolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " DevTools Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p")(7, "strong");
      \u0275\u0275text(8, "DevTools");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " provides developer-productivity features that are automatically disabled in production.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul")(11, "li")(12, "strong");
      \u0275\u0275text(13, "Automatic Restart:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " App restarts when classpath files change.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "li")(16, "strong");
      \u0275\u0275text(17, "LiveReload:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Browser refreshes automatically on resource changes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li")(20, "strong");
      \u0275\u0275text(21, "Property Defaults:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Disables template caching, enables debug logging.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "strong");
      \u0275\u0275text(25, "H2 Console:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Auto-enabled in development mode.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "section", 1)(29, "div", 6)(30, "h3", 7);
      \u0275\u0275element(31, "app-icon", 8);
      \u0275\u0275text(32, " Restart Cycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275repeaterCreate(34, SbDevtoolsComponent_For_35_Template, 5, 4, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 12)(39, "button", 13);
      \u0275\u0275listener("click", function SbDevtoolsComponent_Template_button_click_39_listener() {
        return ctx.runCycle();
      });
      \u0275\u0275element(40, "app-icon", 14);
      \u0275\u0275text(41, " Simulate Restart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 15);
      \u0275\u0275listener("click", function SbDevtoolsComponent_Template_button_click_42_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(43, "app-icon", 16);
      \u0275\u0275text(44, " Reset");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "section", 1)(46, "h2", 2);
      \u0275\u0275element(47, "app-icon", 17);
      \u0275\u0275text(48, " Config");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 18)(50, "div", 19)(51, "h3", 20);
      \u0275\u0275text(52, "Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 19)(55, "h3", 20);
      \u0275\u0275text(56, "Exclude Paths");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 19)(59, "h3", 20);
      \u0275\u0275text(60, "Remote DevTools");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 19)(63, "h3", 20);
      \u0275\u0275text(64, "Global Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(24);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 22);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.steps());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.status());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.anim());
      \u0275\u0275advance();
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeSetup);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeExclude);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeRemote);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeGlobal);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ['\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.prose[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.prose[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.viz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cycle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.cycle-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.cycle-step.active[_ngcontent-%COMP%] {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.cycle-step.done[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.cycle-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.cycle-text[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.btn-amber[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-devtools.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbDevtoolsComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-devtools", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
    <app-tutorial-layout title="DevTools & Hot Reload" subtitle="Turbocharge development. Automatic restart, live reload, and developer-friendly defaults." badge="SPRING BOOT" gradient="linear-gradient(135deg, #b45309, #fbbf24)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-amber" /> DevTools Features</h2>
        <div class="prose">
          <p><strong>DevTools</strong> provides developer-productivity features that are automatically disabled in production.</p>
          <ul>
            <li><strong>Automatic Restart:</strong> App restarts when classpath files change.</li>
            <li><strong>LiveReload:</strong> Browser refreshes automatically on resource changes.</li>
            <li><strong>Property Defaults:</strong> Disables template caching, enables debug logging.</li>
            <li><strong>H2 Console:</strong> Auto-enabled in development mode.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-amber" /> Restart Cycle</h3>
          <div class="cycle">
            @for (step of steps(); track step.id) {
              <div class="cycle-step" [class]="step.state"><span class="cycle-icon">{{ step.icon }}</span><span class="cycle-text">{{ step.text }}</span></div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runCycle()" [disabled]="anim()" class="btn btn-amber"><app-icon name="play" [size]="16" /> Simulate Restart</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Config</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Setup</h3><app-code-block [code]="codeSetup" /></div>
          <div class="op-card"><h3 class="op-title">Exclude Paths</h3><app-code-block [code]="codeExclude" /></div>
          <div class="op-card"><h3 class="op-title">Remote DevTools</h3><app-code-block [code]="codeRemote" /></div>
          <div class="op-card"><h3 class="op-title">Global Settings</h3><app-code-block [code]="codeGlobal" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `, styles: ['/* angular:styles/component:css;60bf4196f016e848d28fb9d77b76c72ac138add891a888b7731b6a6ee3dc763b;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-devtools.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-amber {\n  color: #d97706;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.prose ul {\n  margin: 14px 0;\n  padding-left: 22px;\n  list-style: disc;\n}\n.prose li {\n  margin-bottom: 8px;\n}\n.prose strong {\n  color: #0f172a;\n}\n.viz-card {\n  background: #fff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 28px 24px;\n}\n.viz-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 24px;\n}\n.cycle {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.cycle-step {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s;\n}\n.cycle-step.active {\n  border-color: #d97706;\n  background: #fffbeb;\n}\n.cycle-step.done {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n.cycle-icon {\n  font-size: 1rem;\n}\n.cycle-text {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.68rem;\n  color: #0f172a;\n}\n.viz-status {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  text-align: center;\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.78rem;\n  color: #334155;\n  margin-bottom: 20px;\n}\n.viz-controls {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n.btn:disabled {\n  opacity: 0.5;\n}\n.btn-amber {\n  background: #d97706;\n  color: #fff;\n}\n.btn-gray {\n  background: #e2e8f0;\n  color: #334155;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-devtools.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbDevtoolsComponent, { className: "SbDevtoolsComponent", filePath: "src/app/features/tutorials/topics/sb-devtools.component.ts", lineNumber: 65 });
})();
export {
  SbDevtoolsComponent
};
//# sourceMappingURL=chunk-3JNIDBMZ.js.map
