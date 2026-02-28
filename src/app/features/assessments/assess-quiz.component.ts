import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-assess-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" />
        </ion-buttons>
        <ion-title>Assessment</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">📝</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Ready to Begin?</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto mb-6">
            This timed quiz will test your knowledge with multiple-choice questions and instant feedback.
          </p>
          <button class="px-8 py-3 rounded-xl bg-[#4f46e5] text-white font-bold text-sm hover:bg-[#4338ca] transition-colors shadow-lg shadow-indigo-500/20">
            Start Quiz
          </button>
        </div>
      </div>
    </ion-content>
  `
})
export class AssessQuizComponent {
  private route = inject(ActivatedRoute);
  quizId = signal('');
  constructor() {
    this.route.paramMap.subscribe(params => { this.quizId.set(params.get('id') ?? ''); });
  }
}
