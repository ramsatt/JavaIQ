import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-auto-config',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Auto-Configuration" subtitle="Spring Boot's magic — automatic bean configuration based on classpath, properties, and conditions." badge="SPRING BOOT" gradient="linear-gradient(135deg, #166534, #4ade80)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-green" /> How Auto-Config Works</h2>
        <div class="prose">
          <p><strong>Auto-configuration</strong> automatically creates and configures beans based on what's on your classpath. Add <code>spring-boot-starter-web</code> → get Tomcat, Jackson, DispatcherServlet — all pre-configured.</p>
          <ul>
            <li><strong>&#64;SpringBootApplication:</strong> Combines &#64;Configuration, &#64;EnableAutoConfiguration, &#64;ComponentScan.</li>
            <li><strong>spring.factories / AutoConfiguration.imports:</strong> Lists all auto-config classes.</li>
            <li><strong>&#64;Conditional:</strong> Beans created ONLY when conditions are met.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-green" /> Auto-Config Decision Tree</h3>
          <div class="tree-demo">
            @for (check of checks(); track check.id) {
              <div class="tree-step" [class]="check.state">
                <span class="tree-q">{{ check.question }}</span>
                <span class="tree-a">{{ check.answer }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
          <div class="viz-controls">
            <button (click)="runTree()" [disabled]="anim()" class="btn btn-green"><app-icon name="play" [size]="16" /> Show Auto-Config</button>
            <button (click)="reset()" [disabled]="anim()" class="btn btn-gray"><app-icon name="refresh-cw" [size]="16" /> Reset</button>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Custom Auto-Config</h3><p class="op-desc">Create your own auto-configuration class.</p><app-code-block [code]="codeCustom" /></div>
          <div class="op-card"><h3 class="op-title">Exclude Auto-Config</h3><p class="op-desc">Disable specific auto-configurations.</p><app-code-block [code]="codeExclude" /></div>
          <div class="op-card"><h3 class="op-title">Debug Auto-Config</h3><p class="op-desc">See what was and wasn't auto-configured.</p><app-code-block [code]="codeDebug" /></div>
          <div class="op-card"><h3 class="op-title">Override Defaults</h3><p class="op-desc">Your beans always win over auto-config.</p><app-code-block [code]="codeOverride" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-green { color: #16a34a; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #16a34a; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .tree-demo { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
    .tree-step { padding: 10px 14px; border-radius: 10px; border: 2px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; transition: all 0.3s; }
    .tree-step.yes { border-color: #16a34a; background: #f0fdf4; } .tree-step.no { border-color: #dc2626; background: #fef2f2; }
    .tree-q { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #0f172a; } .tree-a { font-size: 0.6rem; font-weight: 700; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; margin-bottom: 20px; }
    .viz-controls { display: flex; justify-content: center; gap: 10px; }
    .btn { display: inline-flex; align-items: center; gap: 7px; padding: 10px 18px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; border: none; cursor: pointer; } .btn:disabled { opacity: 0.5; } .btn-green { background: #16a34a; color: #fff; } .btn-gray { background: #e2e8f0; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; margin: 0; }
  `
})
export class SbAutoConfigComponent {
  checks = signal([
    { id: 1, question: 'Is spring-boot-starter-data-jpa on classpath?', answer: '', state: '' },
    { id: 2, question: 'Is a DataSource bean already defined?', answer: '', state: '' },
    { id: 3, question: 'Are JPA properties configured?', answer: '', state: '' },
    { id: 4, question: 'Result: Auto-configure EntityManagerFactory', answer: '', state: '' },
  ]);
  status = signal('Auto-configuration checks conditions before creating beans.');
  anim = signal(false);
  codeIntro = `@SpringBootApplication // the magic annotation!
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
        // Spring Boot:
        // 1. Scans classpath for starters
        // 2. Evaluates @Conditional annotations
        // 3. Auto-configures matching beans
        // 4. Your app is ready!
    }
}`;
  codeCustom = `@AutoConfiguration
@ConditionalOnClass(MetricsService.class)
@ConditionalOnProperty(name = "app.metrics.enabled",
    havingValue = "true", matchIfMissing = true)
public class MetricsAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MetricsService metricsService() {
        return new DefaultMetricsService();
    }
}`;
  codeExclude = `// Exclude in annotation
@SpringBootApplication(exclude = {
    DataSourceAutoConfiguration.class,
    SecurityAutoConfiguration.class
})
public class MyApp { }

// Or in properties
spring.autoconfigure.exclude=\\
  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration`;
  codeDebug = `# application.properties
debug=true  # prints auto-config report

# Output shows:
# Positive matches:   (beans that WERE created)
#   DataSourceAutoConfiguration matched
#     - @ConditionalOnClass found
# Negative matches:   (beans that were NOT)
#   MongoAutoConfiguration did not match
#     - @ConditionalOnClass did not find`;
  codeOverride = `// Your bean ALWAYS wins!
@Configuration
public class MyConfig {
    @Bean // overrides auto-configured DataSource
    public DataSource dataSource() {
        return new CustomDataSource();
    }
}
// Spring Boot uses @ConditionalOnMissingBean
// Since YOU defined one, auto-config backs off`;

  private sleep(ms: number): Promise<void> { return new Promise(r => setTimeout(r, ms)); }
  async runTree() {
    if (this.anim()) return; this.anim.set(true);
    const answers = ['✅ YES — found in pom.xml!', '❌ NO — no custom DataSource', '✅ YES — spring.datasource.url set', '✅ CREATED — EntityManagerFactory bean'];
    const states = ['yes', 'no', 'yes', 'yes'];
    for (let i = 0; i < 4; i++) {
      this.checks.update(c => c.map((ch, j) => j === i ? { ...ch, answer: answers[i], state: states[i] } : ch));
      this.status.set(answers[i]); await this.sleep(900);
    }
    this.status.set('Auto-config created JPA beans — zero manual configuration! ✅'); this.anim.set(false);
  }
  reset() {
    this.checks.set([{ id: 1, question: 'Is spring-boot-starter-data-jpa on classpath?', answer: '', state: '' }, { id: 2, question: 'Is a DataSource bean already defined?', answer: '', state: '' }, { id: 3, question: 'Are JPA properties configured?', answer: '', state: '' }, { id: 4, question: 'Result: Auto-configure EntityManagerFactory', answer: '', state: '' }]);
    this.status.set('Auto-configuration checks conditions before creating beans.'); this.anim.set(false);
  }
}
