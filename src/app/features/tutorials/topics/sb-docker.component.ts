import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IconComponent } from '../../../shared/icon.component';
import { CodeBlockComponent } from '../../../shared/code-block.component';
import { TutorialLayoutComponent } from '../../../shared/tutorial-layout.component';

@Component({
  selector: 'app-topic-sb-docker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent],
  template: `
    <app-tutorial-layout title="Docker & Containers" subtitle="Containerize Spring Boot apps. Dockerfile, buildpacks, multi-stage builds, and Docker Compose." badge="SPRING BOOT" gradient="linear-gradient(135deg, #1e3a5f, #60a5fa)">
      <section class="section">
        <h2 class="section-heading"><app-icon name="book-open" [size]="28" css="icon-blue" /> Dockerizing Boot</h2>
        <div class="prose">
          <p>Spring Boot apps produce a single JAR with everything embedded. Docker wraps it in a portable container.</p>
          <app-code-block [code]="codeIntro" />
        </div>
      </section>
      <section class="section">
        <h2 class="section-heading"><app-icon name="code" [size]="28" css="icon-indigo" /> Patterns</h2>
        <div class="op-grid">
          <div class="op-card"><h3 class="op-title">Multi-Stage Build</h3><app-code-block [code]="codeMulti" /></div>
          <div class="op-card"><h3 class="op-title">Buildpacks</h3><app-code-block [code]="codeBuildpack" /></div>
          <div class="op-card"><h3 class="op-title">Docker Compose</h3><app-code-block [code]="codeCompose" /></div>
          <div class="op-card"><h3 class="op-title">Layered JARs</h3><app-code-block [code]="codeLayered" /></div>
        </div>
      </section>
    </app-tutorial-layout>
  `,
  styles: `
    .section { margin-bottom: 48px; } .section-heading { display: flex; align-items: center; gap: 12px; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; } .icon-blue { color: #2563eb; } .icon-indigo { color: #4f46e5; }
    .prose { font-size: 0.88rem; color: #334155; line-height: 1.75; } .prose p { margin: 0 0 14px; }
    .op-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; } .op-card { background: #fff; padding: 22px 20px; border-radius: 14px; border: 1px solid #e2e8f0; } .op-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0 0 8px; }
  `
})
export class SbDockerComponent {
  codeIntro = `# Simple Dockerfile
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# Build & run:
# docker build -t myapp .
# docker run -p 8080:8080 myapp`;
  codeMulti = `# Multi-stage build (smaller image!)
# Stage 1: Build
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN ./mvnw package -DskipTests

# Stage 2: Run (JRE only — much smaller)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# Result: ~200MB instead of ~500MB`;
  codeBuildpack = `# No Dockerfile needed! Spring Boot has built-in buildpack support
./mvnw spring-boot:build-image \\
  -Dspring-boot.build-image.imageName=myapp:latest

# Or with Gradle
./gradlew bootBuildImage --imageName=myapp:latest

# Uses Cloud Native Buildpacks
# Automatically:
# - Picks the right JRE
# - Optimizes layers
# - Applies security patches
# - Creates a production-ready OCI image`;
  codeCompose = `# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_PROFILES_ACTIVE: prod
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/mydb
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: secret
    depends_on:
      db:
        condition: service_healthy

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: mydb
    healthcheck:
      test: ["CMD", "mysqladmin", "ping"]
      interval: 10s
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:`;
  codeLayered = `# Layered JARs (better Docker caching)
# spring-boot-maven-plugin creates layered JAR by default

# Dockerfile for layered JAR
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=0 /app/dependencies/ ./
COPY --from=0 /app/spring-boot-loader/ ./
COPY --from=0 /app/snapshot-dependencies/ ./
COPY --from=0 /app/application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.launch.JarLauncher"]

# Dependencies cached separately = faster rebuilds!`;
}
