import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-profiles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Profiles & Environments" subtitle="Manage multi-environment configs. Profile activation, profile-specific beans, and conditional logic." badge="SPRING BOOT" gradient="linear-gradient(135deg, #6d28d9, #c084fc)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-violet" /> Profiles</h2>
        <div class="prose">
          <p><strong>Profiles</strong> let you define different configs for dev, staging, and production — all in the same codebase.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Profile-Specific YAML</h3><app-code-block [code]="codeYaml" /></div>
          <div class="op-card"><h3 class="op-title">&#64;Profile Beans</h3><app-code-block [code]="codeBeans" /></div>
          <div class="op-card"><h3 class="op-title">Multi-Profile</h3><app-code-block [code]="codeMulti" /></div>
          <div class="op-card"><h3 class="op-title">Profile Groups</h3><app-code-block [code]="codeGroups" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-violet { color: #7c3aed; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbProfilesComponent {
  codeIntro = `# Activate profile
java -jar app.jar --spring.profiles.active=prod

# Or via environment variable
SPRING_PROFILES_ACTIVE=prod java -jar app.jar

# Or in application.properties
spring.profiles.active=dev

# Profile-specific config files
application.yml          # default (always loaded)
application-dev.yml      # loaded when "dev" is active
application-prod.yml     # loaded when "prod" is active`;
  codeYaml = `# application-dev.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:h2:mem:devdb
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: create-drop
logging:
  level:
    root: DEBUG

# application-prod.yml
server:
  port: 443
spring:
  datasource:
    url: jdbc:mysql://\${DB_HOST}:3306/proddb
    hikari:
      maximum-pool-size: 20
  jpa:
    hibernate:
      ddl-auto: validate`;
  codeBeans = `// Bean only in specific profile
@Configuration
public class StorageConfig {

    @Bean
    @Profile("dev")
    public StorageService localStorage() {
        return new LocalFileStorageService();
    }

    @Bean
    @Profile("prod")
    public StorageService s3Storage() {
        return new S3StorageService();
    }

    @Bean
    @Profile("!prod")  // NOT prod
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2).build();
    }
}`;
  codeMulti = `# Activate multiple profiles
spring.profiles.active=prod,metrics,ssl

# Docker Compose
environment:
  SPRING_PROFILES_ACTIVE: prod,docker

# Programmatic activation
SpringApplication app = new SpringApplication(MyApp.class);
app.setAdditionalProfiles("metrics");
app.run(args);

# Test with specific profile
@SpringBootTest
@ActiveProfiles("test")
class MyTest { }`;
  codeGroups = `# Profile groups (Spring Boot 2.4+)
spring.profiles.group.production=prod,metrics,ssl
spring.profiles.group.local=dev,h2,debug

# Now just activate the group:
java -jar app.jar --spring.profiles.active=production
# Activates: prod + metrics + ssl

# In YAML:
spring:
  profiles:
    group:
      production:
        - prod
        - metrics
        - ssl`;
}
