import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-devtools',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
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
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-amber { color: #d97706; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .cycle { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .cycle-step { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .cycle-step.active { border-color: #d97706; background: #fffbeb; } .cycle-step.done { border-color: #16a34a; background: #f0fdf4; }
    .cycle-icon { font-size: 1rem; } .cycle-text { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; } .btn:disabled { opacity: 0.5; } .btn-amber { background: #d97706; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbDevtoolsComponent {
  steps = signal([
    { id: 1, icon: '✏️', text: 'Developer edits Java file', state: '' },
    { id: 2, icon: '👀', text: 'DevTools detects classpath change', state: '' },
    { id: 3, icon: '🔄', text: 'Restart classloader (fast restart ~1s)', state: '' },
    { id: 4, icon: '🌐', text: 'LiveReload triggers browser refresh', state: '' },
  ]);
  status = signal('DevTools uses two classloaders for near-instant restarts.');
  anim = signal(false);
  codeIntro = `<!-- Add to pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>

<!-- That's it! Now:
     ✅ Auto-restart on code change
     ✅ LiveReload in browser
     ✅ Template caching disabled
     ✅ H2 console auto-enabled -->`;
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
// ⚠️ Development ONLY — never in production!

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

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runCycle() {
    if (this.anim()) return; this.anim.set(true);
    const labels = ['File saved...', 'Change detected on classpath!', 'Restarting with fresh classloader (~1s)...', 'Browser refreshed! Ready! ✅'];
    for (let i = 0; i < 4; i++) {
      this.steps.update(s => s.map((st, j) => j === i ? { ...st, state: 'active' } : j < i ? { ...st, state: 'done' } : st));
      this.status.set(labels[i]); await this.sleep(800);
    }
    this.steps.update(s => s.map(st => ({ ...st, state: 'done' }))); this.anim.set(false);
  }
  reset() {
    this.steps.set([{ id: 1, icon: '✏️', text: 'Developer edits Java file', state: '' }, { id: 2, icon: '👀', text: 'DevTools detects classpath change', state: '' }, { id: 3, icon: '🔄', text: 'Restart classloader (fast restart ~1s)', state: '' }, { id: 4, icon: '🌐', text: 'LiveReload triggers browser refresh', state: '' }]);
    this.status.set('DevTools uses two classloaders for near-instant restarts.'); this.anim.set(false);
  }
}
