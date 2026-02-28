import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

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
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton],
  template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar class="transparent-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Green Hero with Title, Search, Greeting -->
      <div class="hero-section">
        <div class="hero-bg"></div>
        <div class="hero-inner">
          <h1 class="hero-brand">JavaIQ</h1>
          
          <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input class="search-input" placeholder="Search courses, topics..." />
          </div>
          
          <div class="greeting-block">
            <span class="greeting-label">Good Morning ☀️</span>
            <h2 class="greeting-name">Java Learner</h2>
            <p class="greeting-sub">Popular topics: Core Java, Spring, Microservices</p>
          </div>
        </div>
      </div>

      <div class="page">
        <!-- Category Pills -->
        <span class="section-label">CATEGORIES</span>
        <div class="category-grid">
          @for (cat of categoryPills; track cat.label) {
            <div class="category-pill">
              <span class="pill-icon">{{ cat.icon }}</span>
              <span class="pill-label">{{ cat.label }}</span>
            </div>
          }
        </div>

        <!-- Courses -->
        <div class="section-header">
          <span class="section-label" style="margin-bottom:0">POPULAR COURSES</span>
          <span class="see-all">See all</span>
        </div>
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

      <div style="height: 80px;"></div>
    </ion-content>
  `,
  styles: `
    /* Transparent toolbar for safe area only */
    .transparent-toolbar {
      --background: #1B4332;
      --color: #ffffff;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      padding: 0 24px 36px; /* Increased side padding */
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(170deg, #081C15 0%, #1B4332 40%, #2D6A4F 100%);
      border-bottom-left-radius: 36px;
      border-bottom-right-radius: 36px;
    }
    .hero-inner { 
      position: relative; 
      z-index: 1;
      padding-top: 10px;
    }

    /* Hero Brand Title — Big & Centered */
    .hero-brand {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 800;
      letter-spacing: -0.05em;
      color: #DAA520;
      margin: 0 0 28px;
      text-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    /* Premium Search Bar */
    .search-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255,255,255,0.12);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px;
      padding: 14px 22px;
      margin-bottom: 32px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .search-wrapper:focus-within {
      background: rgba(255,255,255,0.22);
      border-color: rgba(255,255,255,0.4);
      box-shadow: 0 12px 32px rgba(0,0,0,0.15);
      transform: translateY(-1px);
    }
    .search-icon {
      font-size: 1rem;
      opacity: 0.7;
    }
    .search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      font-size: 0.95rem;
      font-weight: 500;
      color: #ffffff;
      font-family: inherit;
    }
    .search-input::placeholder {
      color: rgba(255,255,255,0.5);
      font-weight: 400;
    }

    /* Greeting */
    .greeting-block {
      padding-left: 4px; /* Slight nudge for breathing room */
    }
    .greeting-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      color: rgba(255,255,255,0.6);
      margin-bottom: 6px;
    }
    .greeting-name {
      margin: 0 0 6px;
      font-size: 1.6rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.03em;
    }
    .greeting-sub {
      margin: 0;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.4;
    }

    /* Page Content */
    .page { 
      padding: 32px 20px 0; /* Consistent side padding */
    }

    /* Section Headers */
    .section-label {
      display: block;
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #1B4332;
      margin-bottom: 16px;
      opacity: 0.8;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 36px;
    }
    .see-all {
      font-size: 0.72rem;
      font-weight: 700;
      color: #2D6A4F;
      letter-spacing: 0.02em;
    }

    /* Category Pills */
    .category-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 12px;
    }
    .category-pill {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      background: #fff;
      border: 1px solid #E9EDE7;
      border-radius: 18px;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    }
    .category-pill:hover {
      border-color: #1B4332;
      background: #F1F8F1;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(27, 67, 50, 0.06);
    }
    .pill-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #EDF2E7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
    .pill-label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #1B1B1B;
    }

    /* Course Cards Styling Refinement */
    .list { display: flex; flex-direction: column; gap: 14px; }

    .card-link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      background: #fff;
      border-radius: 20px;
      border: 1px solid #E9EDE7;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
      text-decoration: none;
      color: inherit;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-link:hover {
      box-shadow: 0 12px 32px rgba(0,0,0,0.07);
      transform: translateY(-2px);
      border-color: #D6DDD2;
    }

    /* Page */
    .page { padding: 24px 16px 0; }

    /* Section */
    .section-label {
      display: block;
      font-size: 0.62rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #1B4332;
      margin-bottom: 14px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      margin-top: 28px;
    }
    .see-all {
      font-size: 0.72rem;
      font-weight: 700;
      color: #2D6A4F;
    }

    /* Category Pills */
    .category-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 8px;
    }
    .category-pill {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      background: #fff;
      border: 1px solid #D6DDD2;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .category-pill:hover {
      border-color: #1B4332;
      background: #D8F3DC;
    }
    .pill-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #EDF2E7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    .pill-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: #1B1B1B;
    }

    /* Course List */
    .list { display: flex; flex-direction: column; gap: 10px; }

    .card-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 14px 14px 16px;
      background: #fff;
      border-radius: 16px;
      border: 1px solid #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      text-decoration: none;
      color: inherit;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card-link:hover {
      box-shadow: 0 6px 18px rgba(0,0,0,0.06);
      transform: translateY(-1px);
    }

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

    .body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .title { font-size: 0.88rem; font-weight: 700; color: #1B1B1B; line-height: 1.3; }
    .desc {
      font-size: 0.7rem;
      color: #52665A;
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 4px;
    }
    .meta-item { font-size: 0.6rem; color: #8A9B8F; font-weight: 500; white-space: nowrap; }

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
    .tag[data-level="intermediate"] { background: #D8F3DC; color: #1B4332; }
    .tag[data-level="advanced"] { background: #fef2f2; color: #dc2626; }

    .arrow { font-size: 1.3rem; color: #B5C4B1; font-weight: 300; line-height: 1; }
  `
})
export class TutorialListComponent {
  categoryPills = [
    { icon: '☕', label: 'Core Java' },
    { icon: '🚀', label: 'Spring Boot' },
    { icon: '🏗️', label: 'Design Patterns' },
    { icon: '📚', label: 'All Courses' }
  ];

  courses: TutorialCourse[] = [
    { slug: 'core-java', title: 'Core Java', description: 'OOP, Collections, Streams, Generics, and modern Java features like Records and Sealed Classes.', icon: '☕', bg: '#D8F3DC', chapterCount: 15, difficulty: 'beginner', estimatedTime: '8 hours' },
    { slug: 'spring-framework', title: 'Spring Framework', description: 'IoC, DI, AOP, MVC, Security, Data Access, REST APIs, Events, Caching, and Testing.', icon: '🌱', bg: '#D8F3DC', chapterCount: 12, difficulty: 'intermediate', estimatedTime: '10 hours' },
    { slug: 'spring-boot', title: 'Spring Boot', description: 'Auto-configuration, starters, REST APIs, security, actuator, and production deployment.', icon: '🚀', bg: '#E8F5E9', chapterCount: 18, difficulty: 'intermediate', estimatedTime: '10 hours' },
    { slug: 'hibernate', title: 'Hibernate & JPA', description: 'ORM fundamentals, entity mapping, relationships, caching, and performance tuning.', icon: '🗄️', bg: '#EDF2E7', chapterCount: 10, difficulty: 'intermediate', estimatedTime: '5 hours' },
    { slug: 'microservices', title: 'Microservices', description: 'Service discovery, API gateway, circuit breakers, event-driven design, and Docker.', icon: '🔗', bg: '#D8F3DC', chapterCount: 14, difficulty: 'advanced', estimatedTime: '8 hours' },
    { slug: 'multithreading', title: 'Multithreading', description: 'Threads, concurrency, ExecutorService, CompletableFuture, and Virtual Threads.', icon: '⚡', bg: '#FFF8E1', chapterCount: 8, difficulty: 'advanced', estimatedTime: '4 hours' },
    { slug: 'design-patterns', title: 'Design Patterns', description: 'Creational, Structural, and Behavioral patterns with real-world Java implementations.', icon: '🏗️', bg: '#EDF2E7', chapterCount: 12, difficulty: 'intermediate', estimatedTime: '6 hours' }
  ];
}
