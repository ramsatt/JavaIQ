import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-iq-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/interview-questions" text="" />
        </ion-buttons>
        <ion-title class="capitalize">{{ category() }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">💬</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Loading Questions</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
            Interview questions for <strong class="text-[#4f46e5] capitalize">{{ category() }}</strong>
            with expandable answers and code snippets.
          </p>
        </div>
      </div>
    </ion-content>
  `
})
export class IqCategoryComponent {
  private route = inject(ActivatedRoute);
  category = signal('');

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.category.set(params.get('category')?.replace(/-/g, ' ') ?? '');
    });
  }
}
