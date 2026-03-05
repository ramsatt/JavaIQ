import {
  CodeBlockComponent,
  IconComponent,
  TutorialLayoutComponent
} from "./chunk-5ZPIB2CR.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-L6VISU4K.js";
import "./chunk-PAXKX5KU.js";

// src/app/features/tutorials/topics/sb-docker.component.ts
var SbDockerComponent = class _SbDockerComponent {
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

# Stage 2: Run (JRE only \u2014 much smaller)
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
  static \u0275fac = function SbDockerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SbDockerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SbDockerComponent, selectors: [["app-topic-sb-docker"]], decls: 30, vars: 7, consts: [["title", "Docker & Containers", "subtitle", "Containerize Spring Boot apps. Dockerfile, buildpacks, multi-stage builds, and Docker Compose.", "badge", "SPRING BOOT", "gradient", "linear-gradient(135deg, #1e3a5f, #60a5fa)"], [1, "section"], [1, "section-heading"], ["name", "book-open", "css", "icon-blue", 3, "size"], [1, "prose"], [3, "code"], ["name", "code", "css", "icon-indigo", 3, "size"], [1, "op-grid"], [1, "op-card"], [1, "op-title"]], template: function SbDockerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-tutorial-layout", 0)(1, "section", 1)(2, "h2", 2);
      \u0275\u0275element(3, "app-icon", 3);
      \u0275\u0275text(4, " Dockerizing Boot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7, "Spring Boot apps produce a single JAR with everything embedded. Docker wraps it in a portable container.");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-code-block", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "section", 1)(10, "h2", 2);
      \u0275\u0275element(11, "app-icon", 6);
      \u0275\u0275text(12, " Patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "h3", 9);
      \u0275\u0275text(16, "Multi-Stage Build");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "Buildpacks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "h3", 9);
      \u0275\u0275text(24, "Docker Compose");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-code-block", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 8)(27, "h3", 9);
      \u0275\u0275text(28, "Layered JARs");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "app-code-block", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(5);
      \u0275\u0275property("code", ctx.codeIntro);
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 28);
      \u0275\u0275advance(6);
      \u0275\u0275property("code", ctx.codeMulti);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeBuildpack);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeCompose);
      \u0275\u0275advance(4);
      \u0275\u0275property("code", ctx.codeLayered);
    }
  }, dependencies: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], styles: ["\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.icon-indigo[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.prose[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n}\n.op-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-docker.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SbDockerComponent, [{
    type: Component,
    args: [{ selector: "app-topic-sb-docker", changeDetection: ChangeDetectionStrategy.OnPush, imports: [IconComponent, CodeBlockComponent, TutorialLayoutComponent], template: `
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
  `, styles: ["/* angular:styles/component:css;f75ee762da952af8484eea2637ebe0a8174b806549c791fe2592062dfaf3b06e;/Users/sathishkumarramalingam/projects/JavaIQ/src/app/features/tutorials/topics/sb-docker.component.ts */\n.section {\n  margin-bottom: 48px;\n}\n.section-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.icon-blue {\n  color: #2563eb;\n}\n.icon-indigo {\n  color: #4f46e5;\n}\n.prose {\n  font-size: 0.88rem;\n  color: #334155;\n  line-height: 1.75;\n}\n.prose p {\n  margin: 0 0 14px;\n}\n.op-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 16px;\n}\n.op-card {\n  background: #fff;\n  padding: 22px 20px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n}\n.op-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=sb-docker.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SbDockerComponent, { className: "SbDockerComponent", filePath: "src/app/features/tutorials/topics/sb-docker.component.ts", lineNumber: 36 });
})();
export {
  SbDockerComponent
};
//# sourceMappingURL=chunk-WIC22FDJ.js.map
