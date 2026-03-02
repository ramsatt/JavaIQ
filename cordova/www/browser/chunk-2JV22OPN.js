import{a as p,b as l,c as m}from"./chunk-FZG5ZG77.js";import{Hb as o,Ma as n,Xa as d,mb as r,nb as t,ob as e,pb as i}from"./chunk-5DVJCJ5O.js";import"./chunk-NWJ5J3BN.js";var g=class a{codeIntro=`# docker-compose.yml (full microservice stack)
# Start everything: docker compose up -d
# Stop everything:  docker compose down
# View logs:        docker compose logs -f user-service`;codeCompose=`services:
  discovery:
    build: ./discovery-server
    ports: ["8761:8761"]

  config-server:
    build: ./config-server
    ports: ["8888:8888"]
    depends_on:
      discovery:
        condition: service_healthy

  api-gateway:
    build: ./api-gateway
    ports: ["8080:8080"]
    depends_on: [discovery, config-server]

  user-service:
    build: ./user-service
    deploy:
      replicas: 2  # 2 instances!
    depends_on: [discovery, postgres]

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: userdb
      POSTGRES_PASSWORD: secret
    volumes:
      - pg_data:/var/lib/postgresql/data

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    environment:
      KAFKA_BROKER_ID: 1
    ports: ["9092:9092"]

volumes:
  pg_data:`;codeNetwork=`# Docker Compose creates a default network
# Services reference each other by service name

# user-service can reach postgres at:
# jdbc:postgresql://postgres:5432/userdb

# api-gateway can reach user-service at:
# http://user-service:8080/api/users

# Custom networks for isolation:
services:
  user-service:
    networks: [backend, db-net]
  api-gateway:
    networks: [backend]
  postgres:
    networks: [db-net]

networks:
  backend:
  db-net:`;codeHealth=`services:
  postgres:
    image: postgres:15
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  user-service:
    build: ./user-service
    depends_on:
      postgres:
        condition: service_healthy
      discovery:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 15s
      start_period: 30s`;codeEnvs=`# docker-compose.override.yml (auto-loaded, dev only)
services:
  user-service:
    environment:
      SPRING_PROFILES_ACTIVE: dev
      JAVA_TOOL_OPTIONS: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
    ports:
      - "5005:5005"  # debug port

# docker-compose.prod.yml
services:
  user-service:
    environment:
      SPRING_PROFILES_ACTIVE: prod
    deploy:
      replicas: 3
      resources:
        limits:
          memory: 512M

# Run: docker compose -f docker-compose.yml -f docker-compose.prod.yml up`;static \u0275fac=function(c){return new(c||a)};static \u0275cmp=d({type:a,selectors:[["app-topic-ms-docker"]],decls:33,vars:7,consts:[["title","Containerization","subtitle","Docker Compose for microservices. Multi-service setup, networking, volumes, and local development.","badge","MICROSERVICES","gradient","linear-gradient(135deg, #1e3a5f, #60a5fa)"],[1,"section"],[1,"section-heading"],["name","book-open","css","icon-blue",3,"size"],[1,"prose"],[3,"code"],["name","code","css","icon-indigo",3,"size"],[1,"op-grid"],[1,"op-card"],[1,"op-title"]],template:function(c,s){c&1&&(t(0,"app-tutorial-layout",0)(1,"section",1)(2,"h2",2),i(3,"app-icon",3),o(4," Docker for Microservices"),e(),t(5,"div",4)(6,"p"),o(7,"Docker Compose defines your entire system in one file. Start all services with "),t(8,"code"),o(9,"docker compose up"),e(),o(10,"."),e(),i(11,"app-code-block",5),e()(),t(12,"section",1)(13,"h2",2),i(14,"app-icon",6),o(15," Patterns"),e(),t(16,"div",7)(17,"div",8)(18,"h3",9),o(19,"Full Compose"),e(),i(20,"app-code-block",5),e(),t(21,"div",8)(22,"h3",9),o(23,"Networking"),e(),i(24,"app-code-block",5),e(),t(25,"div",8)(26,"h3",9),o(27,"Health Checks"),e(),i(28,"app-code-block",5),e(),t(29,"div",8)(30,"h3",9),o(31,"Dev vs Prod"),e(),i(32,"app-code-block",5),e()()()()),c&2&&(n(3),r("size",28),n(8),r("code",s.codeIntro),n(3),r("size",28),n(6),r("code",s.codeCompose),n(4),r("code",s.codeNetwork),n(4),r("code",s.codeHealth),n(4),r("code",s.codeEnvs))},dependencies:[p,l,m],styles:[".section[_ngcontent-%COMP%]{margin-bottom:48px}.section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-size:1.4rem;font-weight:800;color:#0f172a;margin:0 0 20px;padding-bottom:14px;border-bottom:1px solid #e2e8f0}.icon-blue[_ngcontent-%COMP%]{color:#2563eb}.icon-indigo[_ngcontent-%COMP%]{color:#4f46e5}.prose[_ngcontent-%COMP%]{font-size:.88rem;color:#334155;line-height:1.75}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px}.prose[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f1f5f9;padding:2px 7px;border-radius:5px;font-family:JetBrains Mono,monospace;font-size:.8rem;color:#2563eb}.op-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.op-card[_ngcontent-%COMP%]{background:#fff;padding:22px 20px;border-radius:14px;border:1px solid #e2e8f0}.op-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#0f172a;margin:0 0 8px}"],changeDetection:0})};export{g as MsDockerComponent};
