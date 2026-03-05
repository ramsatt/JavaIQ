import { Component } from '@angular/core';
import { IonContent, IonHeader } from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/app-header.component';

@Component({
  selector: 'app-about',
  imports: [IonContent, AppHeaderComponent, IonHeader],
  template: `
    <ion-header class="ion-no-border">
      <app-header></app-header>
    </ion-header>

    <ion-content class="about-page-content">
      <div class="page-wrapper">

        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-glow"></div>
          <div class="hero-badge">👨‍💻 About the Developer</div>
          <div class="avatar-wrap">
            <div class="avatar-ring">
              <div class="avatar-inner">SR</div>
            </div>
            <div class="avatar-status"></div>
          </div>
          <h1 class="dev-name">Sathish Kumar<br><span class="dev-name-accent">Ramalingam</span></h1>
          <p class="dev-title">Associate Architect</p>
          <div class="dev-meta">
            <span class="meta-chip">
              <i class="fa-solid fa-building meta-icon"></i>
              Cognizant
            </span>
            <span class="meta-chip">
              <i class="fa-solid fa-location-dot meta-icon"></i>
              Chennai, India
            </span>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="stats-bar">
          <div class="stat-item">
            <span class="stat-value">10+</span>
            <span class="stat-label">Years Exp</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">70+</span>
            <span class="stat-label">Repos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">132</span>
            <span class="stat-label">Followers</span>
          </div>
        </div>

        <!-- Bio -->
        <div class="section-card bio-card">
          <div class="section-label">
            <i class="fa-solid fa-user section-label-icon"></i> About
          </div>
          <p class="bio-text">
            A results-driven, customer-focused, articulate and analytical software engineer
            who can think "out of the box". Passionate about building tools that help developers
            grow — JavaIQ is a product of that passion.
          </p>
        </div>

        <!-- Skills -->
        <div class="section-card">
          <div class="section-label">
            <i class="fa-solid fa-code section-label-icon"></i> Tech Stack
          </div>
          <div class="skills-grid">
            @for (skill of skills; track skill.name) {
              <div class="skill-chip" [style.--skill-color]="skill.color" [style.--skill-bg]="skill.bg">
                <i [class]="skill.icon" class="skill-icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Projects -->
        <div class="section-card">
          <div class="section-label">
            <i class="fa-solid fa-rocket section-label-icon"></i> Projects
          </div>
          <div class="projects-list">
            @for (project of projects; track project.name) {
              <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="project-card">
                <div class="project-icon-wrap" [style.background]="project.iconBg">
                  <i [class]="project.icon" class="project-icon" [style.color]="project.color"></i>
                </div>
                <div class="project-info">
                  <span class="project-name">{{ project.name }}</span>
                  <span class="project-desc">{{ project.desc }}</span>
                </div>
                <div class="project-arrow">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </a>
            }
          </div>
        </div>

        <!-- Connect -->
        <div class="section-card connect-card">
          <div class="section-label">
            <i class="fa-solid fa-link section-label-icon"></i> Connect
          </div>
          <div class="connect-links">
            <a href="https://github.com/ramsatt" target="_blank" rel="noopener noreferrer" class="connect-btn github-btn">
              <i class="fa-brands fa-github connect-icon"></i>
              <span>GitHub</span>
              <span class="connect-sub">github.com/ramsatt</span>
            </a>
            <a href="https://www.linkedin.com/in/ramsatt/" target="_blank" rel="noopener noreferrer" class="connect-btn linkedin-btn">
              <i class="fa-brands fa-linkedin connect-icon"></i>
              <span>LinkedIn</span>
              <span class="connect-sub">linkedin.com/in/ramsatt</span>
            </a>
          </div>
        </div>

        <!-- Built with love -->
        <div class="footer-note">
          <div class="footer-app-badge">
            <span class="footer-app-icon">☕</span>
            <div>
              <span class="footer-app-name">JavaIQ</span>
              <span class="footer-app-sub">Built with ❤️ for Java developers</span>
            </div>
          </div>
        </div>

      </div>
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

    /* ── Page Setup ── */
    .about-toolbar {
      --background: #0b1120;
      --color: white;
      --border-style: none;
    }
    .about-brand {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
      color: white;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .brand-icon { font-size: 1.1rem; }

    .about-page-content { --background: #0b1120; }

    .page-wrapper {
      padding: 0 16px 100px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* ── Hero ── */
    .hero-section {
      position: relative;
      text-align: center;
      padding: 40px 24px 56px;
      margin: 0 -16px;
      background: #0b1120;
    }
    .hero-glow {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #10b981;
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.25);
      border-radius: 100px;
      padding: 5px 14px;
      margin-bottom: 20px;
    }

    /* Avatar */
    .avatar-wrap {
      position: relative;
      display: inline-flex;
      margin-bottom: 16px;
    }
    .avatar-ring {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      background: linear-gradient(135deg, #10b981, #34d399, #6ee7b7);
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatar-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(135deg, #1e293b, #0f172a);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      font-weight: 800;
      color: #10b981;
      letter-spacing: -0.02em;
    }
    .avatar-status {
      position: absolute;
      bottom: 4px;
      right: 4px;
      width: 14px;
      height: 14px;
      background: #10b981;
      border-radius: 50%;
      border: 2px solid #0b1120;
    }

    .dev-name {
      font-family: 'Inter', sans-serif;
      font-size: 1.7rem;
      font-weight: 900;
      color: #e2e8f0;
      letter-spacing: -0.03em;
      line-height: 1.2;
      margin: 0 0 6px;
    }
    .dev-name-accent {
      background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .dev-title {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
      margin: 0 0 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .dev-meta {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 500;
      color: #94a3b8;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 100px;
      padding: 4px 12px;
    }
    .meta-icon { font-size: 0.65rem; color: #10b981; }

    /* ── Stats Bar ── */
    .stats-bar {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 18px 8px;
      margin-bottom: 16px;
      margin-top: -32px;
      position: relative;
      z-index: 2;
    }
    .stat-item { text-align: center; flex: 1; }
    .stat-value {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1;
      background: linear-gradient(135deg, #10b981, #34d399);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-label {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.62rem;
      font-weight: 600;
      color: #64748b;
      margin-top: 5px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .stat-divider {
      width: 1px;
      height: 28px;
      background: rgba(255,255,255,0.08);
    }

    /* ── Cards ── */
    .section-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 14px;
    }
    .section-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #64748b;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .section-label-icon { color: #10b981; font-size: 0.65rem; }

    /* Bio */
    .bio-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      color: #94a3b8;
      line-height: 1.65;
      margin: 0;
      font-weight: 400;
    }

    /* Skills */
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--skill-color);
      background: var(--skill-bg);
      border-radius: 8px;
      padding: 6px 12px;
      border: 1px solid color-mix(in srgb, var(--skill-color) 25%, transparent);
    }
    .skill-icon { font-size: 0.8rem; }

    /* Projects */
    .projects-list { display: flex; flex-direction: column; gap: 10px; }
    .project-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }
    .project-card:hover {
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,0.1);
      transform: translateY(-1px);
    }
    .project-icon-wrap {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .project-icon { font-size: 1rem; }
    .project-info { flex: 1; min-width: 0; }
    .project-name {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 2px;
    }
    .project-desc {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      color: #64748b;
      font-weight: 400;
    }
    .project-arrow {
      flex-shrink: 0;
      font-size: 0.7rem;
      color: #334155;
    }
    .project-card:hover .project-arrow { color: #10b981; }

    /* Connect */
    .connect-links { display: flex; flex-direction: column; gap: 10px; }
    .connect-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      border: 1px solid rgba(255,255,255,0.06);
      transition: all 0.2s ease;
    }
    .connect-btn:hover { transform: translateY(-1px); }
    .github-btn { background: rgba(255,255,255,0.04); }
    .github-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
    .linkedin-btn { background: rgba(10,102,194,0.08); border-color: rgba(10,102,194,0.2); }
    .linkedin-btn:hover { background: rgba(10,102,194,0.14); border-color: rgba(10,102,194,0.35); }
    .connect-icon {
      font-size: 1.4rem;
      flex-shrink: 0;
    }
    .github-btn .connect-icon { color: #e2e8f0; }
    .linkedin-btn .connect-icon { color: #0a66c2; }
    .connect-btn > span:nth-child(2) {
      flex: 1;
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      font-weight: 700;
      color: #e2e8f0;
    }
    .connect-sub {
      font-family: 'Inter', sans-serif;
      font-size: 0.68rem;
      color: #475569;
      font-weight: 400;
    }

    /* Footer */
    .footer-note {
      display: flex;
      justify-content: center;
      padding: 24px 0 0;
    }
    .footer-app-badge {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .footer-app-icon { font-size: 1.6rem; }
    .footer-app-name {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      font-weight: 800;
      color: #e2e8f0;
      letter-spacing: -0.02em;
    }
    .footer-app-sub {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      color: #334155;
      font-weight: 500;
      margin-top: 2px;
    }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .about-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .about-page-content {
      --background: #F5F7F2;
    }
    :host-context(html:not(.dark)) .hero-section {
      background: linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #40916C 100%);
    }
    :host-context(html:not(.dark)) .hero-glow {
      background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
    }
    :host-context(html:not(.dark)) .hero-badge {
      color: rgba(255,255,255,0.9);
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.3);
    }
    :host-context(html:not(.dark)) .dev-name {
      color: #ffffff;
      -webkit-text-fill-color: #ffffff;
    }
    :host-context(html:not(.dark)) .dev-name-accent {
      background: linear-gradient(135deg, #86efac 0%, #bbf7d0 60%, #d1fae5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .dev-title { color: rgba(255,255,255,0.7); }
    :host-context(html:not(.dark)) .meta-chip {
      color: rgba(255,255,255,0.85);
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.25);
    }
    :host-context(html:not(.dark)) .meta-icon { color: #d1fae5; }
    :host-context(html:not(.dark)) .avatar-inner {
      background: linear-gradient(135deg, #1B4332, #0f2419);
      color: #86efac;
    }
    :host-context(html:not(.dark)) .avatar-status { border-color: #40916C; }

    /* Stats overlap */
    :host-context(html:not(.dark)) .stats-bar {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 4px 20px rgba(27,67,50,0.15);
    }
    :host-context(html:not(.dark)) .stat-value {
      background: linear-gradient(135deg, #1B4332, #2D6A4F);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    :host-context(html:not(.dark)) .stat-label { color: #52665A; }
    :host-context(html:not(.dark)) .stat-divider { background: #D6DDD2; }

    /* Cards */
    :host-context(html:not(.dark)) .section-card {
      background: #ffffff;
      border-color: #D6DDD2;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    :host-context(html:not(.dark)) .section-label { color: #8A9B8F; }
    :host-context(html:not(.dark)) .section-label-icon { color: #1B4332; }
    :host-context(html:not(.dark)) .bio-text { color: #52665A; }

    /* Skills light */
    :host-context(html:not(.dark)) .skill-chip {
      border-color: color-mix(in srgb, var(--skill-color) 30%, #D6DDD2);
    }

    /* Projects light */
    :host-context(html:not(.dark)) .project-card {
      background: #F5F7F2;
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .project-card:hover {
      background: #EDF2E7;
      border-color: #B7CCBB;
    }
    :host-context(html:not(.dark)) .project-name { color: #1B1B1B; }
    :host-context(html:not(.dark)) .project-desc { color: #8A9B8F; }
    :host-context(html:not(.dark)) .project-arrow { color: #D6DDD2; }
    :host-context(html:not(.dark)) .project-card:hover .project-arrow { color: #1B4332; }

    /* Connect light */
    :host-context(html:not(.dark)) .github-btn {
      background: #F5F7F2;
      border-color: #D6DDD2;
    }
    :host-context(html:not(.dark)) .github-btn:hover {
      background: #EDF2E7;
      border-color: #B7CCBB;
    }
    :host-context(html:not(.dark)) .github-btn .connect-icon { color: #1B1B1B; }
    :host-context(html:not(.dark)) .connect-btn > span:nth-child(2) { color: #1B1B1B; }
    :host-context(html:not(.dark)) .connect-sub { color: #8A9B8F; }

    /* Footer light */
    :host-context(html:not(.dark)) .footer-app-name { color: #1B1B1B; }
    :host-context(html:not(.dark)) .footer-app-sub { color: #8A9B8F; }
  `
})
export class AboutComponent {
  skills = [
    { name: 'Java', icon: 'fa-brands fa-java', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
    { name: 'Angular', icon: 'fa-brands fa-angular', color: '#e53e3e', bg: 'rgba(229,62,62,0.1)' },
    { name: 'Ionic', icon: 'fa-solid fa-mobile-screen', color: '#3880ff', bg: 'rgba(56,128,255,0.1)' },
    { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6', bg: 'rgba(49,120,198,0.1)' },
    { name: 'Microservices', icon: 'fa-solid fa-cubes', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
    { name: 'Docker', icon: 'fa-brands fa-docker', color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)' },
    { name: 'Firebase', icon: 'fa-solid fa-fire', color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
    { name: 'SQL', icon: 'fa-solid fa-database', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  ];

  projects = [
    {
      name: 'JavaIQ',
      desc: 'Master Java interviews with curated questions & tutorials',
      icon: 'fa-solid fa-mug-hot',
      color: '#10b981',
      iconBg: 'rgba(16,185,129,0.12)',
      url: 'https://github.com/ramsatt/JavaIQ'
    },
    {
      name: 'AngularIQ',
      desc: 'Angular learning platform with structured courses',
      icon: 'fa-brands fa-angular',
      color: '#e53e3e',
      iconBg: 'rgba(229,62,62,0.1)',
      url: 'https://github.com/ramsatt/AngularIQ'
    },
    {
      name: 'AiInterviewCoach',
      desc: 'AI-powered interview coaching and feedback tool',
      icon: 'fa-solid fa-robot',
      color: '#8b5cf6',
      iconBg: 'rgba(139,92,246,0.1)',
      url: 'https://github.com/ramsatt/AiInterviewCoach'
    },
    {
      name: 'GeminiMuse',
      desc: 'Creative AI project powered by Google Gemini',
      icon: 'fa-solid fa-wand-magic-sparkles',
      color: '#f59e0b',
      iconBg: 'rgba(245,158,11,0.1)',
      url: 'https://github.com/ramsatt/geminimuse'
    },
  ];
}
