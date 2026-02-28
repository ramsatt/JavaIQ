import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-exp-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/experiences" text="" />
        </ion-buttons>
        <ion-title>Experience</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="px-4 pt-6 pb-24">
        <div class="card p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center mx-auto mb-4 text-3xl">🎤</div>
          <h2 class="text-xl font-extrabold text-[#0f172a] mb-2">Full Interview Story</h2>
          <p class="text-[#64748b] text-sm leading-relaxed max-w-xs mx-auto">
            Round-by-round breakdown, questions asked, preparation tips, and final outcome.
          </p>
        </div>
      </div>
    </ion-content>
  `
})
export class ExpDetailComponent {
  private route = inject(ActivatedRoute);
  expId = signal('');
  constructor() {
    this.route.paramMap.subscribe(params => { this.expId.set(params.get('id') ?? ''); });
  }
}
