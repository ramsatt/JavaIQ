import { Component, ChangeDetectionStrategy, inject, signal, computed, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { DataService, Question } from '../../data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AdGateService } from '../../ad-gate.service';
import { BookmarksService } from '../../bookmarks.service';

@Component({
  selector: 'app-iq-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border" translucent="false">
      <ion-toolbar class="detail-toolbar">
        <ion-buttons slot="start">
          <ion-back-button [defaultHref]="'/interview-questions/' + categorySlug()" text="" style="color: white"></ion-back-button>
        </ion-buttons>
        <ion-title class="brand-title">
          <span class="nav-position">{{ currentIndex() + 1 }} / {{ totalInCategory() }}</span>
        </ion-title>
        <ion-buttons slot="end">
          <button class="bm-btn" (click)="toggleBookmark()" [class.bm-active]="isBookmarked()">
            <i [class]="isBookmarked() ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'"></i>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="detail-content">
      @if (question(); as q) {
        <main class="detail-main">

          <!-- Metadata Badge -->
          <header class="detail-header">
            <span class="meta-badge">{{ q.asked_metadata || q.category }}</span>
            <h1 class="detail-title" [innerHTML]="highlightTitle(q.question)"></h1>
            <p class="detail-answer">{{ q.answer }}</p>
          </header>

          <!-- Definition Card -->
          @if (q.coreConceptDescription || q.subConcepts) {
            <section class="section-block">
              <div class="section-label">DEFINITION</div>
              <div class="definition-card">
                <div class="def-icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <p class="def-text">{{ q.coreConceptDescription || q.answer }}</p>
              </div>
            </section>
          }

          <!-- SubConcept Comparison Pills -->
          @if (q.subConcepts && q.subConcepts.length > 0) {
            <section class="section-block">
              <div class="section-label">TYPES</div>
              <div class="pills-grid">
                @for (concept of q.subConcepts; track concept.title) {
                  <div class="concept-pill" [class.pill-static]="concept.title.includes('Static') || concept.title.includes('Compile')" [class.pill-dynamic]="concept.title.includes('Dynamic') || concept.title.includes('Runtime')">
                    <div class="pill-header">
                      @if (concept.title.includes('Static') || concept.title.includes('Compile')) {
                        <i class="fa-solid fa-bolt pill-icon pill-icon-static"></i>
                      } @else {
                        <i class="fa-solid fa-arrows-spin pill-icon pill-icon-dynamic"></i>
                      }
                      <span>{{ concept.title }}</span>
                    </div>
                    <p class="pill-desc" [innerHTML]="sanitizeHtml(concept.description)"></p>
                  </div>
                }
              </div>
            </section>
          }

          <!-- UML Diagram for Polymorphism -->
          @if (q.question.includes('Polymorphism')) {
            <section class="section-block">
              <div class="section-label">CLASS HIERARCHY</div>
              <div class="uml-card">
                <div class="uml-wrapper">
                  <div class="uml-box uml-parent">
                    <div class="uml-box-header">Animal</div>
                    <div class="uml-box-body">+ makeSound(): void</div>
                  </div>
                  <div class="uml-arrow">
                    <div class="uml-line"></div>
                    <div class="uml-triangle"></div>
                    <span class="uml-label">extends</span>
                  </div>
                  <div class="uml-box uml-child">
                    <span class="uml-override-badge">&#64;Override</span>
                    <div class="uml-box-header uml-child-header">Dog</div>
                    <div class="uml-box-body">+ makeSound(): void</div>
                  </div>
                </div>
              </div>
            </section>
          }

          <!-- Code Implementation -->
          @if (q.code) {
            <section class="section-block">
              <div class="section-label">IMPLEMENTATION</div>
              <div class="code-editor">
                <div class="code-topbar">
                  <div class="code-dots">
                    <span class="dot dot-red"></span>
                    <span class="dot dot-yellow"></span>
                    <span class="dot dot-green"></span>
                    <span class="code-filename">Example.java</span>
                  </div>
                  <button class="copy-btn" (click)="copyCode(q.code)">
                    @if (copied()) {
                      <i class="fa-solid fa-check copy-check"></i>
                    } @else {
                      <i class="fa-regular fa-copy"></i>
                    }
                  </button>
                </div>
                <div class="code-body">
                  <pre class="code-pre" [innerHTML]="formatCode(q.code)"></pre>
                </div>
              </div>
            </section>
          }

          <!-- Use Cases -->
          @if (q.useCases && q.useCases.length > 0) {
            <section class="section-block">
              <div class="section-label">USE CASES</div>
              <div class="usecases-list">
                @for (useCase of q.useCases; track useCase.title) {
                  <div class="usecase-card">
                    <div class="usecase-icon-wrap" [class]="useCase.bg">
                      <i class="fa-solid" [class]="useCase.icon + ' ' + useCase.color"></i>
                    </div>
                    <div class="usecase-body">
                      <h4 class="usecase-title">{{ useCase.title }}</h4>
                      <p class="usecase-desc">{{ useCase.description }}</p>
                    </div>
                  </div>
                }
              </div>
            </section>
          }

          <!-- Navigation Footer -->
          <div class="nav-footer">
            <button class="nav-btn nav-prev" [class.nav-disabled]="!hasPrev()" (click)="goToPrev()">
              <i class="fa-solid fa-chevron-left nav-btn-icon"></i>
              <span class="nav-btn-label">Previous</span>
            </button>
            <div class="nav-progress-info">
              <span class="nav-progress-text">{{ currentIndex() + 1 }} of {{ totalInCategory() }}</span>
            </div>
            <button class="nav-btn nav-next" [class.nav-disabled]="!hasNext()" (click)="goToNext()">
              <span class="nav-btn-label">Next</span>
              <i class="fa-solid fa-chevron-right nav-btn-icon"></i>
            </button>
          </div>

        </main>
      } @else {
        <div class="loading-state">
          <i class="fa-solid fa-circle-notch fa-spin"></i>
          <p>Loading...</p>
        </div>
      }
    </ion-content>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

    /* ── Toolbar ── */
    .detail-toolbar {
      --background: #0b1120;
      --color: white;
    }
    .bm-btn {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      color: #64748b;
      width: 34px; height: 34px;
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.85rem;
      cursor: pointer;
      margin-right: 8px;
      transition: all 0.2s;
    }
    .bm-btn.bm-active { color: #6366f1; border-color: rgba(99,102,241,0.4); background: rgba(99,102,241,0.12); }
    .brand-title {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: white;
    }
    .nav-position {
      font-size: 0.82rem;
      font-weight: 600;
      color: #94a3b8;
    }

    /* ── Content ── */
    .detail-content { --background: #0f172a; }

    .detail-main {
      font-family: 'Inter', sans-serif;
      max-width: 56rem;
      margin: 0 auto;
      padding: 2rem 1.25rem 4rem;
      line-height: 1.6;
    }

    /* ── Header ── */
    .detail-header { margin-bottom: 2.5rem; }
    .meta-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #94a3b8;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px;
      padding: 3px 10px;
      margin-bottom: 12px;
    }
    .detail-title {
      font-size: 1.75rem;
      font-weight: 800;
      color: #e2e8f0;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }
    .detail-answer {
      font-size: 1rem;
      color: #94a3b8;
      border-left: 3px solid #334155;
      padding-left: 14px;
      line-height: 1.7;
    }

    /* ── Section Blocks ── */
    .section-block { margin-bottom: 2rem; }
    .section-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: #64748b;
      margin-bottom: 10px;
    }

    /* ── Definition Card ── */
    .definition-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 20px;
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .def-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: rgba(59,130,246,0.15);
      border: 1px solid rgba(59,130,246,0.2);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      color: #60a5fa;
      font-size: 14px;
    }
    .def-text { color: #cbd5e1; font-size: 0.95rem; line-height: 1.7; margin: 0; }

    /* ── Comparison Pills ── */
    .pills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    @media (min-width: 640px) {
      .pills-grid { grid-template-columns: 1fr 1fr; }
    }
    .concept-pill {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-top: 3px solid #475569;
      border-radius: 12px;
      padding: 20px;
      transition: border-color 0.2s ease;
    }
    .concept-pill:hover { border-color: rgba(255,255,255,0.12); }
    .pill-static  { border-top-color: #818cf8; }
    .pill-dynamic { border-top-color: #34d399; }
    .pill-header {
      display: flex; align-items: center; gap: 8px;
      font-weight: 700; font-size: 0.95rem; color: #e2e8f0;
      margin-bottom: 8px;
    }
    .pill-icon { font-size: 13px; }
    .pill-icon-static  { color: #818cf8; }
    .pill-icon-dynamic { color: #34d399; }
    .pill-desc { font-size: 0.85rem; color: #94a3b8; line-height: 1.65; margin: 0; }

    /* ── UML Diagram ── */
    .uml-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 32px 24px;
      display: flex; justify-content: center;
    }
    .uml-wrapper {
      display: flex; flex-direction: column; align-items: center;
      width: 100%; max-width: 280px;
    }
    .uml-box {
      width: 100%;
      border: 1px solid #334155;
      border-radius: 8px;
      overflow: hidden;
      text-align: center;
      position: relative;
    }
    .uml-box-header {
      background: rgba(255,255,255,0.06);
      border-bottom: 1px solid #334155;
      padding: 8px 12px;
      font-weight: 700;
      font-size: 0.9rem;
      color: #e2e8f0;
    }
    .uml-box-body {
      padding: 10px 14px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #94a3b8;
      text-align: left;
    }
    .uml-child { border-color: #3b82f6; }
    .uml-child-header { background: rgba(59,130,246,0.15); border-bottom-color: rgba(59,130,246,0.3); color: #60a5fa; }
    .uml-override-badge {
      position: absolute; top: 0; right: 0;
      background: rgba(59,130,246,0.2); color: #60a5fa;
      font-size: 9px; font-weight: 700;
      padding: 2px 8px; border-radius: 0 0 0 6px;
      text-transform: uppercase; letter-spacing: 0.05em;
    }
    .uml-arrow {
      display: flex; flex-direction: column; align-items: center;
      padding: 4px 0; height: 48px; justify-content: center;
    }
    .uml-line { width: 1px; height: 20px; background: #475569; }
    .uml-triangle {
      width: 0; height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid #64748b;
    }
    .uml-label {
      font-size: 9px; font-weight: 700; color: #64748b;
      text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px;
    }

    /* ── Code Editor ── */
    .code-editor {
      background: #0d1117;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #30363d;
      box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    }
    .code-topbar {
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 16px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
    }
    .code-dots { display: flex; align-items: center; gap: 6px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot-red    { background: #ff5f57; }
    .dot-yellow { background: #febc2e; }
    .dot-green  { background: #28c840; }
    .code-filename {
      margin-left: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px; color: #8b949e;
    }
    .copy-btn {
      background: none; border: none; cursor: pointer;
      color: #8b949e; font-size: 14px;
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 6px;
      transition: all 0.15s ease;
    }
    .copy-btn:hover { background: #30363d; color: #c9d1d9; }
    .copy-check { color: #3fb950; }
    .code-body { padding: 20px; overflow-x: auto; }
    .code-pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      line-height: 1.7;
      color: #c9d1d9;
      margin: 0;
      white-space: pre;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Use Cases ── */
    .usecases-list { display: flex; flex-direction: column; gap: 10px; }
    .usecase-card {
      display: flex; gap: 14px; padding: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      transition: border-color 0.2s ease;
    }
    .usecase-card:hover { border-color: rgba(255,255,255,0.12); }
    .usecase-icon-wrap {
      flex-shrink: 0; width: 38px; height: 38px;
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
    }
    .usecase-title { font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin: 0 0 4px; }
    .usecase-desc { font-size: 0.82rem; color: #94a3b8; line-height: 1.6; margin: 0; }

    /* ── Navigation Footer ── */
    .nav-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.5rem;
      padding: 20px 0;
      border-top: 1px solid rgba(255,255,255,0.06);
      gap: 12px;
    }
    .nav-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 12px 18px;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 100px;
      justify-content: center;
    }
    .nav-btn:hover {
      background: rgba(16,185,129,0.15);
      border-color: rgba(16,185,129,0.3);
      color: #34d399;
    }
    .nav-btn:active {
      transform: scale(0.97);
    }
    .nav-btn-icon {
      font-size: 11px;
    }
    .nav-disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    .nav-progress-info {
      text-align: center;
    }
    .nav-progress-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      color: #64748b;
      letter-spacing: 0.05em;
    }

    /* ── Loading ── */
    .loading-state {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 60vh; color: #64748b; gap: 12px;
    }
    .loading-state i { font-size: 24px; color: #3b82f6; }
    .loading-state p { font-size: 14px; }

    /* ── Scrollbar ── */
    .code-body::-webkit-scrollbar { height: 6px; }
    .code-body::-webkit-scrollbar-track { background: transparent; }
    .code-body::-webkit-scrollbar-thumb { background: #30363d; border-radius: 3px; }
    .code-body::-webkit-scrollbar-thumb:hover { background: #484f58; }

    /* ── Light Mode Overrides ── */
    :host-context(html:not(.dark)) .detail-toolbar {
      --background: #1B4332;
      --color: white;
    }
    :host-context(html:not(.dark)) .detail-content {
      --background: #F5F7F2;
    }
    :host-context(html:not(.dark)) .definition-card,
    :host-context(html:not(.dark)) .usecase-card {
      background: #ffffff !important;
      border: 1px solid #D6DDD2 !important;
    }
    :host-context(html:not(.dark)) .detail-title {
      color: #1B1B1B;
      -webkit-text-fill-color: #1B1B1B;
    }
    :host-context(html:not(.dark)) .detail-answer {
      color: #52665A;
    }
  `
})
export class IqDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(DataService);
  private sanitizer = inject(DomSanitizer);
  private adGate = inject(AdGateService);
  private bookmarksService = inject(BookmarksService);

  question = signal<Question | null>(null);
  copied = signal(false);
  categorySlug = signal('');
  categoryQuestions = signal<Question[]>([]);

  currentIndex = computed(() => {
    const q = this.question();
    const list = this.categoryQuestions();
    if (!q || list.length === 0) return 0;
    const idx = list.findIndex(item => item.id === q.id);
    return idx >= 0 ? idx : 0;
  });

  totalInCategory = computed(() => this.categoryQuestions().length);

  constructor() {
    this.route.paramMap.subscribe(async params => {
      const idStr = params.get('id');
      const slug = params.get('category') ?? '';
      this.categorySlug.set(slug);

      // ── Ad Gate: per-question permanent unlock ──
      if (idStr) {
        const id = parseInt(idStr, 10);
        const itemId = `iq::${id}`;

        // Check if previously revealed or already unlocked
        if (!this.dataService.revealedQuestionIds().has(id) && !this.adGate.isItemUnlocked(itemId)) {
          const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview question');
          if (!allowed) {
            this.router.navigate(['/interview-questions', slug]);
            return;
          }
        }
      }

      if (slug) {
        const questions = this.dataService.getCategoryQuestionsBySlug(slug);
        this.categoryQuestions.set(questions);
      }

      if (idStr) {
        const id = parseInt(idStr, 10);
        const allQuestions = this.categoryQuestions().length > 0
          ? this.categoryQuestions()
          : this.dataService.getQuestions('All');
        const found = allQuestions.find(q => q.id === id);
        this.question.set(found || null);
      }
    });

    effect(() => {
      const q = this.question();
      if (q) {
        this.dataService.markAsRevealed(q.id);
      }
    });
  }

  hasPrev(): boolean {
    return this.currentIndex() > 0;
  }

  hasNext(): boolean {
    return this.currentIndex() < this.totalInCategory() - 1;
  }

  async goToPrev() {
    if (!this.hasPrev()) return;
    const prevQ = this.categoryQuestions()[this.currentIndex() - 1];

    // Check lock just in case they haven't visited it (e.g. direct link routing)
    const itemId = `iq::${prevQ.id}`;
    if (!this.dataService.revealedQuestionIds().has(prevQ.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview question');
      if (!allowed) return;
    }

    this.navigateToQuestion(prevQ.id);
  }

  async goToNext() {
    if (!this.hasNext()) return;
    const nextQ = this.categoryQuestions()[this.currentIndex() + 1];

    // Check lock before navigating to avoid flickering the UI back
    const itemId = `iq::${nextQ.id}`;
    if (!this.dataService.revealedQuestionIds().has(nextQ.id) && !this.adGate.isItemUnlocked(itemId)) {
      const allowed = await this.adGate.unlockItemWithAd(itemId, 'this interview question');
      if (!allowed) return;
    }

    this.adGate.onContentCompleted(); // interstitial after completing a question
    this.navigateToQuestion(nextQ.id);
  }

  private navigateToQuestion(id: number) {
    this.router.navigate(['/interview-questions', this.categorySlug(), id]);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  highlightTitle(title: string): SafeHtml {
    const keywords = ['Polymorphism', 'equals()', '==', 'hashCode()', 'final', 'finally', 'finalize', 'HashMap', 'Garbage Collection', 'String'];
    let result = title;
    for (const kw of keywords) {
      if (result.includes(kw)) {
        result = result.replace(kw, '<span style="color: #60a5fa">' + kw + '</span>');
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  formatCode(code: string): SafeHtml {
    if (!code) return '';

    let s = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const tokens: string[] = [];
    const placeholder = (idx: number) => '\u0000' + idx + '\u0000';

    // 1) Extract comments
    s = s.replace(/(\/\/.*)/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#8b949e;font-style:italic">' + _match + '</span>');
      return placeholder(idx);
    });

    // 2) Extract strings
    s = s.replace(/(\"(?:[^\"\\]|\\.)*\")/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#a5d6ff">' + _match + '</span>');
      return placeholder(idx);
    });

    // 3) Extract annotations
    s = s.replace(/(@\w+)/g, (_match) => {
      const idx = tokens.length;
      tokens.push('<span style="color:#d2a8ff">' + _match + '</span>');
      return placeholder(idx);
    });

    // 4) Keywords
    const kwList = ['abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float', 'for', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package', 'private', 'protected', 'public', 'record', 'return', 'sealed', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'var', 'void', 'volatile', 'while', 'permits'];
    const kwRegex = new RegExp('\\b(' + kwList.join('|') + ')\\b', 'g');
    s = s.replace(kwRegex, '<span style="color:#ff7b72">$1</span>');

    // 5) Types
    s = s.replace(/\b([A-Z]\w*)\b/g, '<span style="color:#ffa657">$1</span>');

    // 6) Method calls
    s = s.replace(/\b([a-z]\w*)\s*\(/g, '<span style="color:#d2a8ff">$1</span>(');

    // 7) Restore tokens
    s = s.replace(/\u0000(\d+)\u0000/g, (_m, idx) => tokens[parseInt(idx, 10)]);

    return this.sanitizer.bypassSecurityTrustHtml(s);
  }

  copyCode(code: string) {
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  isBookmarked(): boolean {
    const q = this.question();
    return q ? this.bookmarksService.isBookmarked(`iq-${q.id}`) : false;
  }

  async toggleBookmark() {
    const q = this.question();
    if (!q) return;
    const slug = this.categorySlug();
    await this.bookmarksService.toggle({
      id: `iq-${q.id}`,
      type: 'interview',
      title: q.question,
      subtitle: q.category,
      route: ['/interview-questions', slug, String(q.id)]
    });
  }
}
