import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-assess-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/assessments" text="" />
        </ion-buttons>
        <ion-title>Results</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#ecfdf5] flex items-center justify-center mx-auto mb-4 text-3xl">🎉</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Assessment Complete</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
            Score breakdown, correct/incorrect answers, and explanations for each question.
          </p>
        </div>
      </div>
    </ion-content>
  `
})
export class AssessResultComponent {}
