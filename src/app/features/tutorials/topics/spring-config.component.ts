import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-spring-config',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Configuration" subtitle="Externalize and manage application config. Master properties, YAML, profiles, and conditional beans." badge="SPRING FRAMEWORK" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Configuration in Spring</h2>
        <div class="prose">
          <p>Spring externalizes configuration so you can change behavior without recompiling. The <strong>Environment</strong> abstraction unifies property sources.</p>
          <ul>
            <li><strong>application.properties / .yml:</strong> Default config files.</li>
            <li><strong>&#64;Value:</strong> Inject single values. <strong>&#64;ConfigurationProperties:</strong> Type-safe binding.</li>
            <li><strong>Profiles:</strong> Environment-specific configs (dev, staging, prod).</li>
            <li><strong>&#64;Conditional:</strong> Register beans only when conditions are met.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Profile Selector</h3>
          <div class="profile-grid">
            @for (p of profiles(); track p.name) {
              <div class="profile-card" [class.active]="activeProfile() === p.name" (click)="selectProfile(p.name)">
                <span class="profile-icon">{{ p.icon }}</span>
                <span class="profile-name">{{ p.name }}</span>
                <span class="profile-db">{{ p.db }}</span>
                <span class="profile-log">{{ p.logLevel }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Config Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> &#64;ConfigurationProperties</h3><p class="op-desc">Type-safe hierarchical config binding.</p><app-code-block [code]="codeProps" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Profiles</h3><p class="op-desc">Activate different configs per environment.</p><app-code-block [code]="codeProfiles" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Conditional Beans</h3><p class="op-desc">Register beans based on conditions.</p><app-code-block [code]="codeConditional" /></div>
          <div class="op-card"><h3 class="op-title"><app-icon name="arrow-right" [size]="18" css="icon-indigo" /> Property Sources</h3><p class="op-desc">Override order: args > env > properties > defaults.</p><app-code-block [code]="codeSources" /></div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="briefcase" [size]="28" css="icon-violet" /> Real-Time Use Cases</h2>
        <div class="use-cases">
          <div class="use-case violet"><div class="use-num violet-bg">1</div><div><h4 class="use-title">12-Factor App Config</h4><p class="use-desc">Environment variables override properties files. <code>SPRING_DATASOURCE_URL</code> in Docker Compose changes the DB without rebuilding.</p></div></div>
          <div class="use-case blue"><div class="use-num blue-bg">2</div><div><h4 class="use-title">Feature Flags</h4><p class="use-desc"><code>&#64;ConditionalOnProperty("feature.new-ui")</code> — enable/disable features per environment without code changes.</p></div></div>
          <div class="use-case purple"><div class="use-num purple-bg">3</div><div><h4 class="use-title">Multi-Tenant Config</h4><p class="use-desc">Each tenant gets a profile: <code>application-tenant1.yml</code>. Spring loads the right config based on the active profile.</p></div></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; font-weight: 700; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c3aed; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.05); padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .profile-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
    .profile-card { padding: 16px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; }
    .profile-card.active { border-color: #7c3aed; background: #faf5ff; transform: scale(1.03); }
    .profile-icon { display: block; font-size: 1.4rem; margin-bottom: 4px; } .profile-name { display: block; font-size: 0.78rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
    .profile-db { display: block; font-size: 0.55rem; color: #7c3aed; font-weight: 600; } .profile-log { display: block; font-size: 0.5rem; color: #64748b; margin-top: 2px; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.06); } .op-title { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; line-height: 1.55; margin: 0; }
    .use-cases { display: flex; flex-direction: column; gap: 12px; } .use-case { display: flex; gap: 16px; padding: 20px; border-radius: 14px; border: 1px solid; } .use-case.violet { background: #faf5ff; border-color: #d8b4fe; } .use-case.blue { background: #eff6ff; border-color: #bfdbfe; } .use-case.purple { background: #f5f3ff; border-color: #c4b5fd; }
    .use-num { width: 34px; height: 34px; min-width: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.78rem; font-weight: 800; } .violet-bg { background: #7c3aed; } .blue-bg { background: #3b82f6; } .purple-bg { background: #8b5cf6; }
    .use-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 4px; } .use-desc { font-size: 0.78rem; line-height: 1.55; margin: 0; color: #334155; } .use-desc code { background: rgba(0,0,0,0.06); padding: 1px 5px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; }
  `
})
export class SpringConfigComponent {
  activeProfile = signal('');
  status = signal('Click a profile to see how configuration changes per environment.');
  profiles = signal([
    { name: 'dev', icon: '🔧', db: 'H2 in-memory', logLevel: 'DEBUG' },
    { name: 'staging', icon: '🧪', db: 'MySQL replica', logLevel: 'INFO' },
    { name: 'prod', icon: '🚀', db: 'MySQL primary (pool=20)', logLevel: 'WARN' },
  ]);
  codeIntro = `# application.properties
app.name=JavaIQ
server.port=8080

# @Value injection
@Value("\${app.name}")
private String appName;

# Type-safe binding (preferred)
@ConfigurationProperties(prefix = "app")
public record AppConfig(
    String name,
    int maxRetries,
    Duration timeout
) {}`;
  codeProps = `// application.yml
app:
  mail:
    host: smtp.gmail.com
    port: 587
    from: noreply@app.com
    templates:
      welcome: /templates/welcome.html
      reset: /templates/reset.html

// Type-safe binding
@ConfigurationProperties(prefix = "app.mail")
public record MailConfig(
    String host, int port, String from,
    Map<String, String> templates
) {}`;
  codeProfiles = `# application-dev.yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    show-sql: true
logging:
  level:
    root: DEBUG

# application-prod.yml
spring:
  datasource:
    url: jdbc:mysql://db-primary:3306/app

# Activate: java -jar app.jar --spring.profiles.active=prod
# Or: SPRING_PROFILES_ACTIVE=prod`;
  codeConditional = `// Bean only exists if property is set
@Bean
@ConditionalOnProperty(
    name = "app.cache.enabled",
    havingValue = "true")
public CacheManager cacheManager() { }

// Bean only if class is on classpath
@Bean
@ConditionalOnClass(RedisClient.class)
public RedisTemplate redisTemplate() { }

// Bean only if another bean is missing
@Bean
@ConditionalOnMissingBean(DataSource.class)
public DataSource fallbackDataSource() { }`;
  codeSources = `// Property source priority (high to low):
// 1. Command-line args (--server.port=9090)
// 2. SPRING_APPLICATION_JSON
// 3. OS environment variables
// 4. application-{profile}.properties
// 5. application.properties
// 6. @PropertySource annotations
// 7. Default properties

// Custom property source
@PropertySource("classpath:custom.properties")
@Configuration
public class CustomConfig { }`;

  selectProfile(name: string) {
    this.activeProfile.set(name);
    const details: Record<string, string> = {
      'dev': 'DEV profile: H2 in-memory DB, verbose DEBUG logging. Fast iteration! 🔧',
      'staging': 'STAGING profile: MySQL replica, INFO logging. Pre-production testing! 🧪',
      'prod': 'PROD profile: MySQL primary with pool=20, WARN only. Optimized for performance! 🚀',
    };
    this.status.set(details[name] ?? '');
  }
}
