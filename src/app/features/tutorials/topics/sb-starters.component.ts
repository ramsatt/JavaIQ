import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-starters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Starters & Dependencies" subtitle="One dependency, everything you need. Understand starter POMs, dependency management, and the Spring Boot BOM." badge="SPRING BOOT" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> What are Starters?</h2>
        <div class="prose">
          <p><strong>Starters</strong> are curated dependency sets. Add ONE starter → get all needed libraries with compatible versions.</p>
          <ul>
            <li><strong>spring-boot-starter-web:</strong> Tomcat, Jackson, Spring MVC, validation.</li>
            <li><strong>spring-boot-starter-data-jpa:</strong> Hibernate, Spring Data JPA, HikariCP.</li>
            <li><strong>spring-boot-starter-security:</strong> Spring Security, password encoders.</li>
            <li><strong>spring-boot-starter-test:</strong> JUnit 5, Mockito, AssertJ, MockMvc.</li>
          </ul>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <div class="viz-card">
          <h3 class="viz-title"><app-icon name="play" [size]="22" css="icon-blue" /> Starter Dependency Explorer</h3>
          <div class="starter-grid">
            @for (s of starters(); track s.name) {
              <div class="starter" [class.active]="active() === s.name" (click)="select(s.name)">
                <span class="starter-icon">{{ s.icon }}</span>
                <span class="starter-name">{{ s.name }}</span>
                <span class="starter-count">{{ s.count }} deps</span>
              </div>
            }
          </div>
          <div class="viz-status">{{ status() }}</div>
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Parent POM</h3><p class="op-desc">Inherit version management from Spring Boot.</p><app-code-block [code]="codeParent" /></div>
          <div class="op-card"><h3 class="op-title">BOM Import</h3><p class="op-desc">Use BOM without parent POM.</p><app-code-block [code]="codeBom" /></div>
          <div class="op-card"><h3 class="op-title">Exclude Transitive</h3><p class="op-desc">Swap or exclude specific dependencies.</p><app-code-block [code]="codeExclude" /></div>
          <div class="op-card"><h3 class="op-title">Custom Starter</h3><p class="op-desc">Create your own reusable starter.</p><app-code-block [code]="codeCustom" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; } .prose ul { margin: 14px 0; padding-left: 22px; list-style: disc; } .prose li { margin-bottom: 8px; } .prose strong { color: #0f172a; } .prose code { background: #f1f5f9; padding: 2px 7px; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #2563eb; }
    .viz-card { background: #fff; border-radius: 18px; border: 1px solid #e2e8f0; padding: 28px 24px; } .viz-title { display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0 0 24px; }
    .starter-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 20px; }
    .starter { padding: 14px; border-radius: 12px; border: 2px solid #e2e8f0; text-align: center; cursor: pointer; transition: all 0.3s; } .starter.active { border-color: #2563eb; background: #eff6ff; transform: scale(1.03); }
    .starter-icon { display: block; font-size: 1.3rem; margin-bottom: 4px; } .starter-name { display: block; font-size: 0.65rem; font-weight: 800; color: #0f172a; } .starter-count { display: block; font-size: 0.5rem; color: #2563eb; font-weight: 600; }
    .viz-status { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 16px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: #334155; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; } .op-desc { font-size: 0.78rem; color: #64748b; margin: 0; }
  `
})
export class SbStartersComponent {
  active = signal('');
  status = signal('Click a starter to see what dependencies it pulls in.');
  starters = signal([
    { name: 'starter-web', icon: '🌐', count: '25+' },
    { name: 'starter-data-jpa', icon: '🗄️', count: '15+' },
    { name: 'starter-security', icon: '🔒', count: '10+' },
    { name: 'starter-test', icon: '🧪', count: '12+' },
  ]);
  codeIntro = `<!-- ONE starter = everything you need -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- No version needed! Parent manages it -->
</dependency>

<!-- This single line gives you:
     ✅ Spring MVC
     ✅ Embedded Tomcat
     ✅ Jackson JSON
     ✅ Bean Validation
     ✅ Logging (SLF4J + Logback) -->`;
  codeParent = `<parent>
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
</dependencies>`;
  codeBom = `<!-- Without parent POM, use BOM import -->
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
</dependencyManagement>`;
  codeExclude = `<!-- Swap Tomcat for Jetty -->
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
</dependency>`;
  codeCustom = `// my-company-starter/pom.xml
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
}`;

  select(name: string) {
    this.active.set(name);
    const info: Record<string, string> = {
      'starter-web': 'Web: Tomcat, Spring MVC, Jackson, Validator — build REST APIs instantly!',
      'starter-data-jpa': 'Data JPA: Hibernate, HikariCP, Spring Data repos — DB in minutes!',
      'starter-security': 'Security: Auth filters, password encoding, CSRF — secure by default!',
      'starter-test': 'Test: JUnit 5, Mockito, AssertJ, MockMvc — test everything!',
    };
    this.status.set(info[name] ?? '');
  }
}
