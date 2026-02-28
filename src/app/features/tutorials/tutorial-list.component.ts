import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar } from '@ionic/angular/standalone';

interface TutorialCourse {
  slug: string;
  title: string;
  description: string;
  icon: string;
  bg: string;
  chapterCount: number;
  difficulty: string;
  estimatedTime: string;
}

@Component({
  selector: 'app-tutorial-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Tutorials</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar placeholder="Search tutorials..." animated="true" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="page">
        <!-- Hero -->
        <div class="hero">
          <span class="hero-label">LEARN & MASTER</span>
          <h2 class="hero-title">Java & Frameworks</h2>
          <p class="hero-desc">Structured courses with hands-on examples. From fundamentals to advanced topics.</p>
        </div>

        <!-- Courses -->
        <span class="section-label">ALL COURSES</span>
        <div class="list">
          @for (c of courses; track c.slug) {
            <a [routerLink]="['/tutorials', c.slug]" class="card-link">
              <div class="icon" [style.background]="c.bg">{{ c.icon }}</div>
              <div class="body">
                <span class="title">{{ c.title }}</span>
                <span class="desc">{{ c.description }}</span>
                <div class="meta">
                  <span class="meta-item">📖 {{ c.chapterCount }} chapters</span>
                  <span class="meta-item">⏱ {{ c.estimatedTime }}</span>
                  <span class="tag" [attr.data-level]="c.difficulty">{{ c.difficulty }}</span>
                </div>
              </div>
              <span class="arrow">›</span>
            </a>
          }
        </div>
      </div>
    </ion-content>
  `,
  styles: `
    .page { padding: 4px 16px 100px; }

    /* Hero */
    .hero {
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      border-radius: 18px;
      padding: 24px 22px;
      margin-bottom: 24px;
    }
    .hero-label { display: block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.15em; color: rgba(255,255,255,0.6); margin-bottom: 4px; }
    .hero-title { margin: 0 0 4px; font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .hero-desc { margin: 0; font-size: 0.78rem; color: rgba(255,255,255,0.7); line-height: 1.5; }

    /* Section label */
    .section-label {
      display: block;
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #94a3b8;
      margin-bottom: 14px;
    }

    /* List */
    .list { display: flex; flex-direction: column; gap: 10px; }

    /* Card link */
    .card-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 14px 14px 16px;
      background: #fff;
      border-radius: 14px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card-link:hover {
      box-shadow: 0 6px 18px rgba(0,0,0,0.06);
      transform: translateY(-1px);
    }

    /* Icon */
    .icon {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    /* Body */
    .body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .title { font-size: 0.88rem; font-weight: 700; color: #0f172a; line-height: 1.3; }
    .desc {
      font-size: 0.7rem;
      color: #64748b;
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Meta row */
    .meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 4px;
    }
    .meta-item { font-size: 0.6rem; color: #94a3b8; font-weight: 500; white-space: nowrap; }

    /* Difficulty tag */
    .tag {
      font-size: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 5px;
      line-height: 1.4;
    }
    .tag[data-level="beginner"] { background: #ecfdf5; color: #059669; }
    .tag[data-level="intermediate"] { background: #eef2ff; color: #4f46e5; }
    .tag[data-level="advanced"] { background: #fef2f2; color: #dc2626; }

    /* Arrow */
    .arrow { font-size: 1.3rem; color: #cbd5e1; font-weight: 300; line-height: 1; }
  `
})
export class TutorialListComponent {
  courses: TutorialCourse[] = [
    { slug: 'core-java', title: 'Core Java', description: 'OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.', icon: '☕', bg: '#fff7ed', chapterCount: 15, difficulty: 'beginner', estimatedTime: '8 hours' },
    { slug: 'spring-framework', title: 'Spring Framework', description: 'IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.', icon: '🌱', bg: '#f0fdf4', chapterCount: 12, difficulty: 'intermediate', estimatedTime: '10 hours' },
    { slug: 'spring-boot', title: 'Spring Boot', description: 'Auto-configuration, starters, REST APIs, security, actuator, and production deployment.', icon: '🚀', bg: '#ecfeff', chapterCount: 18, difficulty: 'intermediate', estimatedTime: '10 hours' },
    { slug: 'hibernate', title: 'Hibernate & JPA', description: 'ORM fundamentals, entity mapping, relationships, caching, and performance tuning.', icon: '🗄️', bg: '#faf5ff', chapterCount: 10, difficulty: 'intermediate', estimatedTime: '5 hours' },
    { slug: 'microservices', title: 'Microservices', description: 'Service discovery, API gateway, circuit breakers, event-driven design, and Docker.', icon: '🔗', bg: '#eff6ff', chapterCount: 14, difficulty: 'advanced', estimatedTime: '8 hours' },
    { slug: 'multithreading', title: 'Multithreading', description: 'Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.', icon: '⚡', bg: '#fefce8', chapterCount: 8, difficulty: 'advanced', estimatedTime: '4 hours' },
    { slug: 'design-patterns', title: 'Design Patterns', description: 'Creational, Structural, and Behavioral patterns with real-world Java implementations.', icon: '🏗️', bg: '#fdf2f8', chapterCount: 12, difficulty: 'intermediate', estimatedTime: '6 hours' }
  ];
}
