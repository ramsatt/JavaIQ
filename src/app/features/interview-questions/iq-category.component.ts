import { Component, ChangeDetectionStrategy, inject, signal, computed, effect } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { DataService, Question } from '../../data.service';

@Component({
  selector: 'app-iq-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" />
        </ion-buttons>
        <ion-title class="capitalize">{{ categoryTitle() }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-4 pb-24">
        @if (questions().length === 0) {
          <div class="card p-8 text-center mt-6">
            <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">💬</div>
            <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">No Questions Found</h2>
            <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
              Check back later for more interview questions in this category.
            </p>
          </div>
        } @else {
          <div class="space-y-3">
            @for (q of questions(); track q.id; let i = $index) {
              <a [routerLink]="['/interview-questions', categorySlug(), q.id]" 
                 class="block bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow active:scale-[0.98]">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">
                    #{{ i + 1 }}
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-800 text-sm leading-snug mb-1">{{ q.question }}</h3>
                    @if (q.asked_metadata) {
                      <div class="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        <i class="fa-solid fa-building text-emerald-500"></i> {{ q.asked_metadata }}
                      </div>
                    }
                  </div>
                </div>
              </a>
            }
          </div>
        }
      </div>
    </ion-content>
  `
})
export class IqCategoryComponent {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  categorySlug = signal('');
  categoryTitle = signal('');
  questions = signal<Question[]>([]);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('category') ?? '';
      this.categorySlug.set(slug);

      const titleMap: Record<string, string> = {
        'core-java': 'Core Java',
        'spring-boot': 'Spring Boot',
        'hibernate': 'Hibernate',
        'microservices': 'Microservices',
        'multithreading': 'Multithreading',
        'spring-reactive': 'Spring Reactive',
        'reactive-prog': 'Reactive Programming',
        'coding-patterns': 'Coding Questions'
      };

      const title = titleMap[slug] || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      this.categoryTitle.set(title);

      this.questions.set(this.dataService.getQuestions(title as any));
    });
  }
}
