import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';
import { DataService } from '../../data.service';
import { AdGateService } from '../../ad-gate.service';
import { AuthService } from '../../auth.service';
import { CertificateComponent } from '../../shared/certificate.component';

interface Topic {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  duration: string;
}

interface CourseData {
  badge: string;
  title: string;
  subtitle: string;
  estimatedTime: string;
  topics: Topic[];
  themeColor: string;
}

@Component({
  selector: 'app-tutorial-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, CertificateComponent],
  host: { 'class': 'ion-page' },
  template: `
    <ion-header translucent="true" class="ion-no-border">
      <ion-toolbar class="tut-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tutorials" text="" color="light" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="tut-content">
      <!-- Premium Centered Hero -->
      <div class="hero">
        <div class="hero-glow" [style.background]="'radial-gradient(circle, ' + courseData().themeColor + '20 0%, transparent 70%)'"></div>
        <div class="hero-content">
          <div class="badge-wrapper">
            <span class="badge" [style.color]="courseData().themeColor" [style.background]="courseData().themeColor + '15'" [style.border-color]="courseData().themeColor + '30'">
              {{ courseData().badge }}
            </span>
          </div>
          <h1 class="title">{{ courseData().title }}</h1>
          <p class="subtitle">{{ courseData().subtitle }}</p>

          <div class="stat-pill-row">
            <div class="stat-pill">
              <i class="fa-solid fa-book-open stat-icon"></i>
              <span>{{ courseData().topics.length }} Chapters</span>
            </div>
            <div class="stat-pill accent" [style.color]="courseData().themeColor" [style.border-color]="courseData().themeColor + '40'">
              <i class="fa-regular fa-clock stat-icon"></i>
              <span>{{ courseData().estimatedTime }}</span>
            </div>
          </div>

          <!-- Progress -->
          @if (completedCount() > 0) {
            <div class="progress-wrap">
              <div class="progress-track">
                <div class="progress-bar" [style.width.%]="progressPct()" [style.background]="courseData().themeColor"></div>
              </div>
              <span class="progress-label" [style.color]="courseData().themeColor">
                {{ completedCount() }} / {{ courseData().topics.length }} completed
              </span>
            </div>
          }

          <!-- Certificate CTA — shown when 100% complete -->
          @if (isCourseComplete()) {
            <div class="cert-cta-wrap">
              <button class="btn-get-cert" (click)="showCert.set(true)">
                <i class="fa-solid fa-certificate"></i>
                Get Certificate
              </button>
              <p class="cert-cta-sub">🎉 Course complete!</p>
            </div>
          }
        </div>
      </div>

      <!-- Certificate modal -->
      @if (showCert()) {
        <app-certificate
          type="course"
          [title]="courseData().title"
          [category]="courseData().badge"
          [visible]="showCert()"
          [recipientName]="userName()"
          (closed)="showCert.set(false)" />
      }

      <div class="page-container">
        <!-- Curriculum List -->
        <div class="section-header">
          <div class="section-head-left">
            <i class="fa-solid fa-layer-group section-icon" [style.color]="courseData().themeColor"></i>
            <span class="section-label">CURRICULUM</span>
          </div>
          <span class="topic-count">{{ courseData().topics.length }} Topics</span>
        </div>

        <div class="list">
          @for (topic of courseData().topics; track topic.slug; let i = $index) {
            <button (click)="openTopic(topic)" class="topic-card"
               [class.topic-done]="isComplete(slug(), topic.slug)"
               [style.--accent]="courseData().themeColor">
              <div class="topic-accent-left"></div>
              
              <div class="topic-card-inner">
                <div class="topic-num-outer" [style.background]="isComplete(slug(), topic.slug) ? courseData().themeColor + '20' : courseData().themeColor + '15'">
                  @if (isComplete(slug(), topic.slug)) {
                    <div class="topic-num topic-num-done" [style.color]="courseData().themeColor">
                      <i class="fa-solid fa-check"></i>
                    </div>
                  } @else {
                    <div class="topic-num" [style.color]="courseData().themeColor">{{ i + 1 }}</div>
                  }
                </div>
                
                <div class="topic-body">
                  <span class="topic-title" [class.topic-title-done]="isComplete(slug(), topic.slug)">{{ topic.title }}</span>
                  <span class="topic-desc">{{ topic.description }}</span>
                </div>
                
                <div class="topic-meta">
                  <span class="topic-dur">
                    <i class="fa-regular fa-clock topic-dur-icon"></i>
                    {{ topic.duration }}
                  </span>
                  @if (isComplete(slug(), topic.slug)) {
                    <span class="done-badge">Done</span>
                  } @else if (isUnlocked(slug(), topic.slug)) {
                    <div class="topic-arrow">
                      <i class="fa-solid fa-chevron-right"></i>
                    </div>
                  } @else {
                    <div class="topic-arrow locked-icon">
                      <i class="fa-solid fa-lock"></i>
                    </div>
                  }
                </div>
              </div>
            </button>
          }
        </div>
      </div>

      <!-- Footer -->
      <div class="tut-footer">
        <p class="footer-text">Built with ❤️ for Java developers</p>
      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    /* ── Page Setup ── */
    .tut-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .brand-title {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: white;
    }

    .tut-content {
      --background: #0b1120;
    }

    .page-container {
      padding: 0 16px 40px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* ── Hero Section ── */
    .hero {
      position: relative;
      background: linear-gradient(145deg, #0b1120 0%, #161b22 100%);
      padding: 32px 20px 48px;
      color: #fff;
      overflow: hidden;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 24px;
    }
    .hero-glow {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 300px;
      filter: blur(50px);
      pointer-events: none;
    }
    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 600px;
    }

    .badge-wrapper { margin-bottom: 20px; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      border: 1px solid;
      border-radius: 20px;
      padding: 4px 12px;
    }

    .title {
      font-family: 'Inter', sans-serif;
      margin: 0 0 12px;
      font-size: 1.85rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: #e2e8f0;
    }
    .subtitle {
      font-family: 'Inter', sans-serif;
      margin: 0 0 28px;
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.5;
    }

    /* Hero Stats */
    .stat-pill-row {
      display: flex;
      gap: 12px;
      justify-content: center;
    }
    .stat-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 8px 16px;
      border-radius: 50px;
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      color: #cbd5e1;
    }
    .stat-icon {
      font-size: 0.75rem;
      opacity: 0.8;
    }

    /* ── Section Header ── */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .section-head-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-icon {
      font-size: 0.75rem;
    }
    .section-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #94a3b8;
    }
    .topic-count {
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      color: #475569;
    }

    /* ── Curriculum List ── */
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .topic-card {
      position: relative;
      display: block;
      width: 100%;
      text-align: left;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      color: inherit;
      overflow: hidden;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .topic-card:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.1);
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      transform: translateY(-2px);
    }
    .topic-card:active {
      transform: scale(0.98);
    }

    .topic-accent-left {
      position: absolute;
      left: 0;
      top: 12px;
      bottom: 12px;
      width: 3px;
      background: var(--accent, #8b5cf6);
      border-radius: 0 3px 3px 0;
      opacity: 0.5;
      transition: opacity 0.2s;
    }
    .topic-card:hover .topic-accent-left {
      opacity: 1;
    }

    .topic-card-inner {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 16px 16px 20px;
    }

    /* Topic Number Badge */
    .topic-num-outer {
      padding: 2px;
      border-radius: 10px;
      flex-shrink: 0;
    }
    .topic-num {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(11, 17, 32, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      font-weight: 800;
    }

    /* Body */
    .topic-body {
      flex: 1;
      min-width: 0;
    }
    .topic-title {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 4px;
      letter-spacing: -0.01em;
    }
    .topic-desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      color: #64748b;
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Meta */
    .topic-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
      flex-shrink: 0;
    }
    .topic-dur {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'Inter', sans-serif;
      font-size: 0.65rem;
      color: #64748b;
      font-weight: 600;
    }
    .topic-dur-icon {
      font-size: 0.6rem;
    }
    .topic-arrow {
      font-size: 11px;
      color: #475569;
      transition: all 0.2s ease;
      margin-top: 4px;
    }
    .topic-card:hover .topic-arrow {
      color: var(--accent, #8b5cf6);
      transform: translateX(2px);
    }

    /* ── Progress Bar ── */
    .progress-wrap {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      width: 100%;
      max-width: 360px;
      margin-left: auto;
      margin-right: auto;
    }
    .progress-track {
      width: 100%;
      height: 6px;
      background: rgba(255,255,255,0.08);
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      border-radius: 4px;
      transition: width 0.5s ease;
    }
    .progress-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      opacity: 0.9;
    }

    /* ── Certificate CTA ── */
    .cert-cta-wrap {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    .btn-get-cert {
      display: flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #d4a853, #b8892a);
      color: #0a1f13;
      font-size: 0.85rem;
      font-weight: 800;
      padding: 12px 28px;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 16px rgba(212, 168, 83, 0.45);
      transition: all 0.2s ease;
    }
    .btn-get-cert:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(212, 168, 83, 0.55);
    }
    .cert-cta-sub {
      font-size: 0.68rem;
      color: rgba(255, 255, 255, 0.65);
      font-weight: 600;
      margin: 0;
    }

    /* ── Footer ── */
    .tut-footer {
      text-align: center;
      margin-top: 32px;
      padding-bottom: 32px;
    }
    .footer-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      color: #334155;
      font-weight: 500;
      margin: 0;
    }
    /* Completed card state */
    .topic-done {
      border-color: rgba(255,255,255,0.1) !important;
    }
    .topic-num-done {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(11,17,32,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
    }
    .topic-title-done {
      text-decoration: line-through;
      opacity: 0.6;
    }
    .done-badge {
      font-size: 0.55rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 2px 8px;
      border-radius: 6px;
      background: rgba(16,185,129,0.15);
      color: #34d399;
      text-transform: uppercase;
    }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .tut-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .tut-content {
      --background: #F5F7F2;
    }
    :host-context(html:not(.dark)) .hero {
      background: #1B4332;
      border-bottom: none;
    }
    :host-context(html:not(.dark)) .title {
      color: #ffffff;
      -webkit-text-fill-color: #ffffff;
    }
    :host-context(html:not(.dark)) .subtitle {
      color: rgba(255, 255, 255, 0.85);
    }
    :host-context(html:not(.dark)) .stat-pill {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      color: #ffffff;
    }
    :host-context(html:not(.dark)) .progress-track {
      background: rgba(255, 255, 255, 0.2);
    }
    :host-context(html:not(.dark)) .topic-card {
      background: #ffffff !important;
      border: 1px solid #D6DDD2 !important;
    }
    :host-context(html:not(.dark)) .topic-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border-color: #B4C4B1 !important;
    }
    :host-context(html:not(.dark)) .topic-title {
      color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .topic-desc {
      color: #52665A;
    }
    :host-context(html:not(.dark)) .topic-dur {
      color: #52665A;
    }
    :host-context(html:not(.dark)) .topic-arrow {
      color: #52665A;
    }
    :host-context(html:not(.dark)) .topic-count {
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .section-label {
      color: #1B4332;
    }
    :host-context(html:not(.dark)) .topic-num,
    :host-context(html:not(.dark)) .topic-num-done {
      background: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    :host-context(html:not(.dark)) .topic-title-done {
      opacity: 0.6;
    }
    :host-context(html:not(.dark)) .footer-text {
      color: #52665A;
    }
  `
})
export class TutorialDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);
  private adGate = inject(AdGateService);
  slug = signal('');

  completedCount = computed(() => {
    this.dataService.completedTopicIds(); // track signal reactively
    return this.dataService.getCourseCompletedCount(this.slug());
  });

  progressPct = computed(() => {
    const total = this.courseData().topics.length;
    return total === 0 ? 0 : Math.round((this.completedCount() / total) * 100);
  });

  private auth = inject(AuthService);
  showCert = signal(false);
  readonly userName = computed(() => this.auth.user()?.displayName ?? 'Java Developer');
  readonly isCourseComplete = computed(() => this.progressPct() >= 100);

  isComplete(courseSlug: string, topicSlug: string): boolean {
    return this.dataService.isTopicComplete(`${courseSlug}::${topicSlug}`);
  }

  isUnlocked(courseSlug: string, topicSlug: string): boolean {
    // Calling the signal registers the dependency for reactivity
    this.adGate.unlockedItems();
    return this.adGate.isItemUnlocked(`${courseSlug}::${topicSlug}`);
  }

  async openTopic(topic: Topic) {
    const topicId = `${this.slug()}::${topic.slug}`;

    // If neither complete nor previously unlocked, gated with reward ad
    if (!this.isComplete(this.slug(), topic.slug) && !this.adGate.isItemUnlocked(topicId)) {
      const allowed = await this.adGate.unlockItemWithAd(topicId, topic.title);
      if (!allowed) return;
    }

    // Success -> Navigate
    await this.router.navigate(['/tutorials', this.slug(), topic.slug]);
  }

  // Course data map
  private courses: Record<string, CourseData> = {
    'core-java': {
      badge: 'CORE JAVA',
      title: 'Core Java Masterclass',
      subtitle: 'From fundamentals to modern Java features. Master OOP, Collections, Streams, and more.',
      estimatedTime: '8 hours',
      themeColor: '#f59e0b',
      topics: [
        { slug: 'arrays', title: 'Java Arrays', description: 'Fixed-size containers, traversal, searching, and sorting', iconName: 'box', duration: '30 min' },
        { slug: 'strings', title: 'Strings & StringBuilder', description: 'Immutability, string pool, and efficient string manipulation', iconName: 'code', duration: '35 min' },
        { slug: 'oop-classes', title: 'Classes & Objects', description: 'Blueprints, constructors, methods, and object creation', iconName: 'box', duration: '40 min' },
        { slug: 'inheritance', title: 'Inheritance', description: 'extends keyword, method overriding, super keyword', iconName: 'git-branch', duration: '35 min' },
        { slug: 'polymorphism', title: 'Polymorphism', description: 'Compile-time and runtime polymorphism, dynamic dispatch', iconName: 'layers', duration: '30 min' },
        { slug: 'abstraction', title: 'Abstraction & Interfaces', description: 'Abstract classes, interfaces, default and static methods', iconName: 'shield', duration: '35 min' },
        { slug: 'encapsulation', title: 'Encapsulation', description: 'Access modifiers, getters/setters, data hiding', iconName: 'shield', duration: '25 min' },
        { slug: 'exceptions', title: 'Exception Handling', description: 'Try-catch-finally, custom exceptions, checked vs unchecked', iconName: 'alert-triangle', duration: '30 min' },
        { slug: 'collections-list', title: 'Collections: List', description: 'ArrayList, LinkedList, performance comparison', iconName: 'list', duration: '35 min' },
        { slug: 'collections-map', title: 'Collections: Map & Set', description: 'HashMap, TreeMap, HashSet, iteration patterns', iconName: 'database', duration: '35 min' },
        { slug: 'generics', title: 'Generics', description: 'Type parameters, bounded types, wildcards', iconName: 'box', duration: '30 min' },
        { slug: 'streams', title: 'Streams API', description: 'filter, map, collect, reduce, parallel streams', iconName: 'zap', duration: '40 min' },
        { slug: 'lambdas', title: 'Lambda Expressions', description: 'Functional interfaces, method references, closures', iconName: 'code', duration: '30 min' },
        { slug: 'records-sealed', title: 'Records & Sealed Classes', description: 'Java 16+ records, sealed hierarchies, pattern matching', iconName: 'shield', duration: '25 min' },
        { slug: 'io-files', title: 'Java I/O & Files', description: 'Streams, readers, writers, NIO, file operations', iconName: 'terminal', duration: '30 min' }
      ]
    },
    'spring-framework': {
      badge: 'SPRING',
      title: 'Spring Framework Deep Dive',
      subtitle: 'Master the foundation of enterprise Java. IoC, DI, AOP, MVC, Security, and more.',
      estimatedTime: '10 hours',
      themeColor: '#10b981',
      topics: [
        { slug: 'spring-ioc', title: 'IoC Container', description: 'Inversion of Control, ApplicationContext, bean lifecycle', iconName: 'box', duration: '35 min' },
        { slug: 'spring-di', title: 'Dependency Injection', description: 'Constructor, setter, field injection, qualifiers', iconName: 'link', duration: '40 min' },
        { slug: 'spring-beans', title: 'Bean Scopes & Lifecycle', description: 'Singleton, prototype, request, session, init/destroy', iconName: 'refresh-cw', duration: '30 min' },
        { slug: 'spring-aop', title: 'AOP (Aspect-Oriented)', description: 'Cross-cutting concerns, aspects, pointcuts, advice', iconName: 'layers', duration: '40 min' },
        { slug: 'spring-mvc', title: 'Spring MVC', description: 'DispatcherServlet, controllers, request mapping, views', iconName: 'globe', duration: '45 min' },
        { slug: 'spring-rest', title: 'RESTful APIs', description: 'RestController, ResponseEntity, content negotiation', iconName: 'zap', duration: '40 min' },
        { slug: 'spring-data', title: 'Spring Data Access', description: 'JdbcTemplate, transactions, DataSource configuration', iconName: 'database', duration: '35 min' },
        { slug: 'spring-security', title: 'Spring Security Basics', description: 'Authentication, authorization, filters, CSRF protection', iconName: 'shield', duration: '45 min' },
        { slug: 'spring-config', title: 'Configuration', description: 'Java config, properties, profiles, conditional beans', iconName: 'settings', duration: '30 min' },
        { slug: 'spring-testing', title: 'Testing Spring Apps', description: 'SpringBootTest, MockMvc, TestContext framework', iconName: 'check-circle', duration: '35 min' },
        { slug: 'spring-events', title: 'Events & Listeners', description: 'ApplicationEvent, EventListener, async events', iconName: 'bell', duration: '25 min' },
        { slug: 'spring-caching', title: 'Caching', description: 'Cacheable, CacheEvict, CachePut, cache managers', iconName: 'zap', duration: '25 min' }
      ]
    },
    'spring-boot': {
      badge: 'SPRING BOOT',
      title: 'Spring Boot Mastery',
      subtitle: 'Build production-ready apps fast. Auto-configuration, starters, REST APIs, security, actuator, and deployment.',
      estimatedTime: '10 hours',
      themeColor: '#3b82f6',
      topics: [
        { slug: 'sb-auto-config', title: 'Auto-Configuration', description: 'How Spring Boot auto-configures beans, @EnableAutoConfiguration', iconName: 'zap', duration: '30 min' },
        { slug: 'sb-starters', title: 'Starters & Dependencies', description: 'Starter POMs, dependency management, BOM', iconName: 'box', duration: '25 min' },
        { slug: 'sb-properties', title: 'Application Properties', description: 'application.yml, @Value, @ConfigurationProperties, relaxed binding', iconName: 'settings', duration: '30 min' },
        { slug: 'sb-devtools', title: 'DevTools & Hot Reload', description: 'Live reload, automatic restart, remote debugging', iconName: 'refresh-cw', duration: '20 min' },
        { slug: 'sb-actuator', title: 'Actuator & Monitoring', description: 'Health checks, metrics, info, custom endpoints', iconName: 'activity', duration: '35 min' },
        { slug: 'sb-logging', title: 'Logging', description: 'SLF4J, Logback config, log levels, structured logging', iconName: 'terminal', duration: '25 min' },
        { slug: 'sb-rest-api', title: 'REST API Development', description: 'RestController, request/response, content negotiation', iconName: 'globe', duration: '40 min' },
        { slug: 'sb-validation', title: 'Validation', description: 'Bean Validation, custom validators, error messages', iconName: 'check-circle', duration: '30 min' },
        { slug: 'sb-exception', title: 'Exception Handling', description: 'ControllerAdvice, ProblemDetail, error responses', iconName: 'alert-triangle', duration: '30 min' },
        { slug: 'sb-data-jpa', title: 'Spring Data JPA', description: 'Repositories, query methods, projections, auditing', iconName: 'database', duration: '45 min' },
        { slug: 'sb-security', title: 'Security', description: 'JWT auth, OAuth2, method security, CORS', iconName: 'shield', duration: '45 min' },
        { slug: 'sb-testing', title: 'Testing', description: 'SpringBootTest, MockMvc, Testcontainers, slices', iconName: 'check-circle', duration: '40 min' },
        { slug: 'sb-profiles', title: 'Profiles & Environments', description: 'Profile activation, multi-env config, conditional beans', iconName: 'layers', duration: '25 min' },
        { slug: 'sb-docker', title: 'Docker & Containers', description: 'Dockerfile, buildpacks, multi-stage builds, compose', iconName: 'box', duration: '35 min' },
        { slug: 'sb-caching', title: 'Caching Strategies', description: 'Redis, Caffeine, cache abstraction, TTL policies', iconName: 'zap', duration: '30 min' },
        { slug: 'sb-scheduling', title: 'Scheduling & Async', description: '@Scheduled, @Async, task executors, cron expressions', iconName: 'clock', duration: '30 min' },
        { slug: 'sb-events', title: 'Application Events', description: 'Custom events, event-driven architecture, listeners', iconName: 'bell', duration: '25 min' },
        { slug: 'sb-deploy', title: 'Deployment', description: 'JAR packaging, cloud deploy, Kubernetes, health probes', iconName: 'upload', duration: '35 min' }
      ]
    },
    'hibernate': {
      badge: 'HIBERNATE & JPA',
      title: 'Hibernate & JPA Deep Dive',
      subtitle: 'Master ORM fundamentals, entity mapping, relationships, caching, and performance tuning.',
      estimatedTime: '5 hours',
      themeColor: '#f97316',
      topics: [
        { slug: 'hib-orm', title: 'ORM Fundamentals', description: 'Object-Relational Mapping, SessionFactory, EntityManager', iconName: 'database', duration: '30 min' },
        { slug: 'hib-entities', title: 'Entity Mapping', description: '@Entity, @Table, @Column, ID generation, embeddables', iconName: 'grid', duration: '35 min' },
        { slug: 'hib-relations', title: 'Relationships', description: 'OneToMany, ManyToOne, ManyToMany, fetch strategies', iconName: 'link', duration: '40 min' },
        { slug: 'hib-jpql', title: 'JPQL & Queries', description: 'JPQL, named queries, native SQL, projections', iconName: 'search', duration: '35 min' },
        { slug: 'hib-criteria', title: 'Criteria API', description: 'Type-safe queries, metamodel, specifications', iconName: 'filter', duration: '30 min' },
        { slug: 'hib-caching', title: 'Caching', description: 'First-level, second-level, query cache', iconName: 'zap', duration: '30 min' },
        { slug: 'hib-transactions', title: 'Transactions', description: 'ACID, isolation levels, optimistic/pessimistic locking', iconName: 'lock', duration: '30 min' },
        { slug: 'hib-performance', title: 'Performance', description: 'N+1 problem, batch fetching, lazy loading pitfalls', iconName: 'activity', duration: '35 min' },
        { slug: 'hib-inheritance', title: 'Inheritance Mapping', description: 'Single table, joined, table per class strategies', iconName: 'layers', duration: '25 min' },
        { slug: 'hib-auditing', title: 'Auditing & Envers', description: 'Entity versioning, audit trails, Hibernate Envers', iconName: 'clock', duration: '25 min' }
      ]
    },
    'microservices': {
      badge: 'MICROSERVICES',
      title: 'Microservices Architecture',
      subtitle: 'Design and build distributed systems. Service discovery, API gateway, event-driven patterns, and Kubernetes.',
      estimatedTime: '8 hours',
      themeColor: '#8b5cf6',
      topics: [
        { slug: 'ms-intro', title: 'Microservices Intro', description: 'Monolith vs microservices, bounded contexts, decomposition', iconName: 'grid', duration: '30 min' },
        { slug: 'ms-discovery', title: 'Service Discovery', description: 'Eureka, Consul, service registry, client-side discovery', iconName: 'search', duration: '35 min' },
        { slug: 'ms-gateway', title: 'API Gateway', description: 'Spring Cloud Gateway, routing, filters, rate limiting', iconName: 'globe', duration: '35 min' },
        { slug: 'ms-config', title: 'Config Server', description: 'Centralized configuration, Git-backed, encryption, refresh', iconName: 'settings', duration: '30 min' },
        { slug: 'ms-circuit', title: 'Circuit Breaker', description: 'Resilience4j, fallbacks, retry, bulkhead patterns', iconName: 'shield', duration: '35 min' },
        { slug: 'ms-loadbalance', title: 'Load Balancing', description: 'Client-side load balancing, Spring Cloud LoadBalancer', iconName: 'activity', duration: '25 min' },
        { slug: 'ms-communication', title: 'Inter-Service Communication', description: 'REST, gRPC, messaging, sync vs async', iconName: 'link', duration: '35 min' },
        { slug: 'ms-events', title: 'Event-Driven Architecture', description: 'Kafka, RabbitMQ, event sourcing, pub/sub', iconName: 'bell', duration: '40 min' },
        { slug: 'ms-saga', title: 'Saga Pattern', description: 'Distributed transactions, choreography vs orchestration', iconName: 'refresh-cw', duration: '35 min' },
        { slug: 'ms-cqrs', title: 'CQRS', description: 'Command Query Responsibility Segregation, read/write models', iconName: 'layers', duration: '30 min' },
        { slug: 'ms-tracing', title: 'Distributed Tracing', description: 'Micrometer, Zipkin, correlation IDs, observability', iconName: 'eye', duration: '30 min' },
        { slug: 'ms-docker', title: 'Containerization', description: 'Docker Compose for microservices, networking, volumes', iconName: 'box', duration: '35 min' },
        { slug: 'ms-k8s', title: 'Kubernetes', description: 'Deployments, services, ingress, config maps, secrets', iconName: 'cloud', duration: '40 min' },
        { slug: 'ms-security', title: 'Security', description: 'OAuth2, JWT propagation, API key management, mTLS', iconName: 'lock', duration: '35 min' }
      ]
    },
    'multithreading': {
      badge: 'MULTITHREADING',
      title: 'Java Multithreading & Concurrency',
      subtitle: 'Master concurrent programming. Threads, synchronization, executors, CompletableFuture, and virtual threads.',
      estimatedTime: '4 hours',
      themeColor: '#eab308',
      topics: [
        { slug: 'mt-threads', title: 'Threads & Runnable', description: 'Creating threads, lifecycle, Runnable vs Callable', iconName: 'play', duration: '30 min' },
        { slug: 'mt-sync', title: 'Synchronization', description: 'synchronized, wait/notify, volatile, thread safety', iconName: 'lock', duration: '35 min' },
        { slug: 'mt-executors', title: 'ExecutorService', description: 'Thread pools, ScheduledExecutor, shutdown strategies', iconName: 'settings', duration: '30 min' },
        { slug: 'mt-future', title: 'CompletableFuture', description: 'Async composition, thenApply, thenCombine, exception handling', iconName: 'zap', duration: '35 min' },
        { slug: 'mt-collections', title: 'Concurrent Collections', description: 'ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList', iconName: 'database', duration: '30 min' },
        { slug: 'mt-locks', title: 'Locks & Conditions', description: 'ReentrantLock, ReadWriteLock, StampedLock, Condition', iconName: 'shield', duration: '30 min' },
        { slug: 'mt-atomic', title: 'Atomic Operations', description: 'AtomicInteger, AtomicReference, CAS, accumulators', iconName: 'activity', duration: '25 min' },
        { slug: 'mt-virtual', title: 'Virtual Threads', description: 'Project Loom, lightweight threads, structured concurrency', iconName: 'cloud', duration: '25 min' }
      ]
    },
    'design-patterns': {
      badge: 'DESIGN PATTERNS',
      title: 'Java Design Patterns',
      subtitle: 'Write maintainable code with proven patterns. Creational, Structural, and Behavioral patterns in Java.',
      estimatedTime: '6 hours',
      themeColor: '#ec4899',
      topics: [
        { slug: 'dp-singleton', title: 'Singleton', description: 'Thread-safe singleton, enum, lazy initialization', iconName: 'box', duration: '25 min' },
        { slug: 'dp-factory', title: 'Factory Method', description: 'Object creation delegation, abstract factory', iconName: 'settings', duration: '30 min' },
        { slug: 'dp-builder', title: 'Builder', description: 'Step-by-step construction, fluent API, immutable objects', iconName: 'layers', duration: '30 min' },
        { slug: 'dp-observer', title: 'Observer', description: 'Event-driven updates, pub/sub, reactive patterns', iconName: 'bell', duration: '30 min' },
        { slug: 'dp-strategy', title: 'Strategy', description: 'Interchangeable algorithms, functional approach', iconName: 'shuffle', duration: '25 min' },
        { slug: 'dp-decorator', title: 'Decorator', description: 'Dynamic behavior extension, I/O streams example', iconName: 'gift', duration: '30 min' },
        { slug: 'dp-adapter', title: 'Adapter', description: 'Interface compatibility, class vs object adapter', iconName: 'link', duration: '25 min' },
        { slug: 'dp-proxy', title: 'Proxy', description: 'Access control, lazy loading, dynamic proxy', iconName: 'shield', duration: '30 min' },
        { slug: 'dp-template', title: 'Template Method', description: 'Algorithm skeleton, hook methods, Spring usage', iconName: 'file-text', duration: '25 min' },
        { slug: 'dp-command', title: 'Command', description: 'Encapsulated requests, undo, macro commands', iconName: 'terminal', duration: '30 min' },
        { slug: 'dp-chain', title: 'Chain of Responsibility', description: 'Request pipeline, middleware, filter chains', iconName: 'filter', duration: '30 min' },
        { slug: 'dp-state', title: 'State', description: 'State machines, context-dependent behavior', iconName: 'refresh-cw', duration: '30 min' }
      ]
    }
  };

  courseData = signal<CourseData>({
    badge: '', title: '', subtitle: '', estimatedTime: '', topics: [], themeColor: '#8b5cf6'
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const s = params.get('slug') ?? '';
      this.slug.set(s);
      this.courseData.set(this.courses[s] ?? {
        badge: s.toUpperCase(),
        title: s.replace(/-/g, ' '),
        subtitle: 'Course content coming soon.',
        estimatedTime: 'TBD',
        themeColor: '#8b5cf6',
        topics: []
      });
    });
  }
}
