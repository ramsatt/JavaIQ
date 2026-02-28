import { Component, ChangeDetectionStrategy, inject, signal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { DataService, Question } from '../../data.service';

@Component({
    selector: 'app-iq-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
    template: `
    <ion-header class="ion-no-border" translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" />
        </ion-buttons>
        <ion-title class="brand-title">JavaIQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      @if (question(); as q) {
        <main class="max-w-4xl mx-auto px-4 py-8 pb-32">
          <!-- Header Section -->
          <header class="mb-10">
            <span class="px-3 py-1 text-[10px] font-bold text-blue-700 bg-blue-100 rounded-full uppercase tracking-widest inline-block mb-4">
              {{ q.asked_metadata || q.category }}
            </span>
            <h1 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-slate-800" [innerHTML]="highlightTitle(q.question)">
            </h1>
            <p class="text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
              {{ q.answer }}
            </p>
          </header>

          <!-- Core Concept Section (only if subConcepts exist) -->
          @if (q.subConcepts && q.subConcepts.length > 0) {
            <section class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="mt-1 flex-shrink-0 w-10 h-10 bg-indigo-50 flex items-center justify-center rounded-xl text-indigo-600">
                  <i class="fa-solid fa-lightbulb text-xl"></i>
                </div>
                <div class="flex-1">
                  <h2 class="text-xl font-bold mb-4 text-slate-800 tracking-tight">Core Concepts</h2>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    @for (concept of q.subConcepts; track concept.title) {
                      <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <h3 class="font-bold text-slate-900 mb-2">{{ concept.title }}</h3>
                        <p class="text-sm text-slate-600 leading-relaxed" [innerHTML]="concept.description"></p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </section>
          }

          <!-- Code Implementation Section -->
          @if (q.code) {
            <section class="mb-10">
              <h2 class="text-xl font-bold mb-5 flex items-center gap-2 text-slate-800 tracking-tight">
                <i class="fa-solid fa-laptop-code text-blue-600"></i> Code Implementation
              </h2>
              <div class="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 max-w-full">
                <div class="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50 backdrop-blur-sm">
                  <span class="text-xs font-mono text-slate-400 font-medium">Example.java</span>
                  <button (click)="copyCode(q.code)"
                          class="text-[11px] font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-wider bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-lg active:scale-95 transition-all">
                    @if (copied()) {
                      <i class="fa-solid fa-check text-emerald-400"></i> <span class="text-emerald-400">Copied!</span>
                    } @else {
                      <i class="fa-regular fa-copy"></i> Copy
                    }
                  </button>
                </div>
                <div class="p-4 md:p-6 overflow-x-auto custom-scrollbar">
                  <pre class="font-mono text-[13px] text-blue-100/90 leading-relaxed whitespace-pre" [innerHTML]="formatCode(q.code)"></pre>
                </div>
              </div>
            </section>
          }

          <!-- Usage Section -->
          @if (q.useCases && q.useCases.length > 0) {
            <section>
              <h2 class="text-xl font-bold mb-5 text-slate-800 tracking-tight">When & Where to Use It?</h2>
              <div class="space-y-4">
                @for (useCase of q.useCases; track useCase.title) {
                  <div class="flex gap-4 p-5 rounded-2xl border" [class]="useCase.bg + ' backdrop-blur-sm border-' + useCase.color.replace('text-', '') + '/20'">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" [class]="useCase.color + ' bg-white/60'">
                      <i class="fa-solid" [class]="useCase.icon"></i>
                    </div>
                    <div>
                      <h4 class="font-bold mb-1" [class]="useCase.color.replace('600', '900')">{{ useCase.title }}</h4>
                      <p class="text-sm font-medium leading-relaxed" [class]="useCase.color.replace('600', '800/80')">{{ useCase.description }}</p>
                    </div>
                  </div>
                }
              </div>
            </section>
          }
        </main>
      } @else {
        <div class="flex items-center justify-center p-12 text-slate-400">
          Question not found.
        </div>
      }
    </ion-content>
  `,
    styles: `
    .brand-title {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.2); 
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.2); 
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(148, 163, 184, 0.4); 
    }
  `
})
export class IqDetailComponent {
    private route = inject(ActivatedRoute);
    private dataService = inject(DataService);

    question = signal<Question | null>(null);
    copied = signal(false);

    constructor() {
        this.route.paramMap.subscribe(params => {
            const idStr = params.get('id');
            if (idStr) {
                const id = parseInt(idStr, 10);
                // Find the question globally
                const allQuestions = this.dataService.getQuestions('All');
                const found = allQuestions.find(q => q.id === id);
                this.question.set(found || null);
            }
        });

        // Mark as revealed immediately when opening
        effect(() => {
            const q = this.question();
            if (q) {
                this.dataService.markAsRevealed(q.id);
            }
        });
    }

    // Helper to colorize the keyword in the title
    highlightTitle(title: string): string {
        // Basic heuristics: if it contains a known word, wrap it with a gradient
        const gradientClass = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600';

        // Replace "Polymorphism" or "equals" or other key terms with gradient text
        const keywords = ['Polymorphism', 'equals()', '==', 'hashCode()', 'final', 'finally', 'finalize', 'HashMap', 'Garbage Collection', 'String'];

        let highlightedTitle = title;
        for (const kw of keywords) {
            if (highlightedTitle.includes(kw)) {
                highlightedTitle = highlightedTitle.replace(kw, `<span class="${gradientClass}">${kw}</span>`);
            }
        }
        return highlightedTitle;
    }

    // Simple syntax highlighter for Java code
    formatCode(code: string): string {
        if (!code) return '';

        let formattedCode = code
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Keywords
        const keywords = ['class', 'public', 'private', 'protected', 'static', 'void', 'int', 'boolean', 'extends', 'implements', 'new', 'return', 'if', 'else', 'for', 'while', 'try', 'catch', 'finally', 'throw', 'throws'];
        const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
        formattedCode = formattedCode.replace(keywordRegex, '<span class="text-purple-400">$1</span>');

        // Types / Classes (Capitalized identifiers)
        formattedCode = formattedCode.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="text-yellow-300">$1</span>');

        // Method calls
        formattedCode = formattedCode.replace(/\b([a-z][a-zA-Z0-9_]*)\s*\(/g, '<span class="text-blue-300">$1</span>(');

        // Strings
        formattedCode = formattedCode.replace(/(&quot;.*?&quot;|".*?")/g, '<span class="text-emerald-400">$1</span>');

        // Annotations
        formattedCode = formattedCode.replace(/(@[a-zA-Z]+)/g, '<span class="text-blue-400">$1</span>');

        // Comments
        formattedCode = formattedCode.replace(/(\/\/.*)/g, '<span class="text-slate-500 italic">$1</span>');

        return formattedCode;
    }

    copyCode(code: string) {
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
            this.copied.set(true);
            setTimeout(() => this.copied.set(false), 2000);
        });
    }
}
