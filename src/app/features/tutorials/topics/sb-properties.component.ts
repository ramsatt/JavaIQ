import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-properties',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Application Properties" subtitle="Externalize configuration. Master application.yml, @Value, @ConfigurationProperties, and relaxed binding." badge="SPRING BOOT" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Configuration</h2>
        <div class="prose">
          <p>Spring Boot externalizes config into <strong>application.properties</strong> or <strong>application.yml</strong>. Override via environment variables, command-line args, or profile-specific files.</p>
          <ul>
            <li><strong>&#64;Value:</strong> Inject individual property values.</li>
            <li><strong>&#64;ConfigurationProperties:</strong> Type-safe binding to a POJO/record.</li>
            <li><strong>Relaxed Binding:</strong> <code>my.prop</code> = <code>MY_PROP</code> = <code>my-prop</code>.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-violet" /> Property Resolution Order</h3>
          <div class="order-list">
            @for (src of sources(); track src.rank) {
              <div class="order-item" [class.active]="activeSrc() === src.rank" (click)="selectSrc(src.rank)">
                <span class="order-rank">{{ src.rank }}</span>
                <span class="order-name">{{ src.name }}</span>
                <span class="order-priority">{{ src.priority }}</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">YAML Config</h3><app-code-block [code]="codeYaml" /></div>
          <div class="op-card"><h3 class="op-title">&#64;ConfigurationProperties</h3><app-code-block [code]="codeTypeSafe" /></div>
          <div class="op-card"><h3 class="op-title">Validation</h3><app-code-block [code]="codeValidation" /></div>
          <div class="op-card"><h3 class="op-title">Dynamic Config</h3><app-code-block [code]="codeDynamic" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #7c3aed; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .order-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
    .order-item { display: flex; align-items: center; gap: 10px; padding: 8px 14px; border-radius: 8px; border: 2px solid #e2e8f0; cursor: pointer; transition: all 0.3s; } .order-item.active { border-color: #7c3aed; background: #faf5ff; }
    .order-rank { width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 0.5rem; font-weight: 800; } .order-name { flex: 1; font-size: 0.68rem; font-weight: 700; color: #0f172a; } .order-priority { font-size: 0.5rem; font-weight: 600; color: #7c3aed; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbPropertiesComponent {
  activeSrc = signal(0);
  status = signal('Higher priority sources override lower ones. Click to explore.');
  sources = signal([
    { rank: 1, name: 'Command-line args', priority: 'HIGHEST' },
    { rank: 2, name: 'OS environment variables', priority: 'HIGH' },
    { rank: 3, name: 'application-{profile}.yml', priority: 'MEDIUM' },
    { rank: 4, name: 'application.yml', priority: 'LOW' },
    { rank: 5, name: '@PropertySource', priority: 'LOWEST' },
  ]);
  codeIntro = `# application.properties
server.port=8080
app.name=JavaIQ
app.max-connections=100

# Override with env var:
# SERVER_PORT=9090 java -jar app.jar

# Override with CLI arg:
# java -jar app.jar --server.port=9090`;
  codeYaml = `# application.yml (hierarchical, cleaner)
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    hikari:
      maximum-pool-size: 10

app:
  mail:
    host: smtp.gmail.com
    port: 587
    templates:
      welcome: /templates/welcome.html`;
  codeTypeSafe = `// Type-safe config binding (recommended!)
@ConfigurationProperties(prefix = "app.mail")
public record MailConfig(
    String host,
    int port,
    Map<String, String> templates
) {}

// Enable in main class
@SpringBootApplication
@ConfigurationPropertiesScan
public class App { }

// Inject anywhere
@Service
public class MailService {
    private final MailConfig config;
    public MailService(MailConfig config) {
        this.config = config;
    }
}`;
  codeValidation = `@ConfigurationProperties(prefix = "app")
@Validated  // enable validation
public record AppConfig(
    @NotBlank String name,
    @Min(1) @Max(1000) int maxConnections,
    @Email String adminEmail,
    @DurationUnit(ChronoUnit.SECONDS)
    Duration timeout
) {}

// App won't start if validation fails!
// Error: Binding validation errors on app
//   - maxConnections: must be >= 1`;
  codeDynamic = `// Inject with @Value
@Value("\${app.name:DefaultApp}")
private String appName; // with default

// SpEL expressions
@Value("#{'\${app.modes}'.split(',')}")
private List<String> modes;

// Random values (testing)
app.secret=\${random.uuid}
app.port=\${random.int(8000,9000)}`;

  selectSrc(rank: number) {
    this.activeSrc.set(rank);
    const info: Record<number, string> = {
      1: 'CLI args (--server.port=9090) override everything!',
      2: 'Env vars (SERVER_PORT=9090) — great for Docker/cloud.',
      3: 'Profile-specific (application-prod.yml) overrides default.',
      4: 'application.yml / .properties — the base config.',
      5: '@PropertySource — loaded last, lowest priority.'
    };
    this.status.set(info[rank] ?? '');
  }
}
