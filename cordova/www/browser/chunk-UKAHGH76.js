import{a as c,b as s,c as m}from"./chunk-LDZEFRU3.js";import{$a as l,Ob as a,Pa as t,qb as o,rb as i,sb as e,tb as n}from"./chunk-AMIPRJ7H.js";import"./chunk-NWJ5J3BN.js";var g=class d{codeIntro=`# Simple Dockerfile
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

# Build & run:
# docker build -t myapp .
# docker run -p 8080:8080 myapp`;codeMulti=`# Multi-stage build (smaller image!)
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

# Result: ~200MB instead of ~500MB`;codeBuildpack=`# No Dockerfile needed! Spring Boot has built-in buildpack support
./mvnw spring-boot:build-image \\
  -Dspring-boot.build-image.imageName=myapp:latest

# Or with Gradle
./gradlew bootBuildImage --imageName=myapp:latest

# Uses Cloud Native Buildpacks
# Automatically:
# - Picks the right JRE
# - Optimizes layers
# - Applies security patches
# - Creates a production-ready OCI image`;codeCompose=`# docker-compose.yml
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
  mysql_data:`;codeLayered=`# Layered JARs (better Docker caching)
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

# Dependencies cached separately = faster rebuilds!`;static \u0275fac=function(r){return new(r||d)};static \u0275cmp=l({type:d,selectors:[["app-topic-sb-docker"]],decls:30,vars:7,consts:[["title","Docker & Containers","subtitle","Containerize Spring Boot apps. Dockerfile, buildpacks, multi-stage builds, and Docker Compose.","badge","SPRING BOOT","gradient","linear-gradient(135deg, #1e3a5f, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(r,p){r&1&&(i(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),n(3,"app-icon",3),a(4," Dockerizing Boot"),e(),i(5,"div",4)(6,"p"),a(7,"Spring Boot apps produce a single JAR with everything embedded. Docker wraps it in a portable container."),e(),n(8,"app-code-block",5),e()(),i(9,"section",1)(10,"h2",2),n(11,"app-icon",6),a(12," Patterns"),e(),i(13,"div",7)(14,"div",8)(15,"h3",9),a(16,"Multi-Stage Build"),e(),n(17,"app-code-block",5),e(),i(18,"div",8)(19,"h3",9),a(20,"Buildpacks"),e(),n(21,"app-code-block",5),e(),i(22,"div",8)(23,"h3",9),a(24,"Docker Compose"),e(),n(25,"app-code-block",5),e(),i(26,"div",8)(27,"h3",9),a(28,"Layered JARs"),e(),n(29,"app-code-block",5),e()()()()),r&2&&(t(3),o("size",28),t(5),o("code",p.codeIntro),t(3),o("size",28),t(6),o("code",p.codeMulti),t(4),o("code",p.codeBuildpack),t(4),o("code",p.codeCompose),t(4),o("code",p.codeLayered))},dependencies:[c,s,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as SbDockerComponent};
