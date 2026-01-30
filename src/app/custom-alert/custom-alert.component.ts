import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (alertService.alert; as options) {
      <div class="alert-overlay" (click)="onCancel()">
        <div class="alert-card" (click)="$event.stopPropagation()" [ngClass]="options.type || 'info'">
          <div class="alert-icon">
            @switch (options.type) {
              @case ('success') { <i class="bi bi-check-circle-fill"></i> }
              @case ('error') { <i class="bi bi-x-circle-fill"></i> }
              @case ('warning') { <i class="bi bi-exclamation-triangle-fill"></i> }
              @default { <i class="bi bi-info-circle-fill"></i> }
            }
          </div>
          <div class="alert-content">
            <h3 *ngIf="options.title">{{ options.title }}</h3>
            <p>{{ options.message }}</p>
          </div>
          <div class="alert-actions">
            <button *ngIf="options.showCancel" class="btn-cancel" (click)="onCancel()">
              {{ options.cancelText || 'Cancel' }}
            </button>
            <button class="btn-confirm" (click)="onConfirm()">
              {{ options.confirmText || 'OK' }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .alert-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease-out;
    }
    .alert-card {
      background: rgba(30, 41, 59, 0.8);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 30px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      text-align: center;
      transform: scale(1);
      animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .alert-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    .info .alert-icon { color: #3b82f6; }
    .success .alert-icon { color: #10b981; }
    .warning .alert-icon { color: #f59e0b; }
    .error .alert-icon { color: #ef4444; }

    .alert-content h3 {
      margin: 0 0 10px 0;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .alert-content p {
      margin: 0 0 25px 0;
      color: #94a3b8;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    .alert-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    button {
      padding: 12px 30px;
      border-radius: 14px;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-confirm {
      background: #3b82f6;
      color: white;
      box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
    }
    .btn-confirm:hover { background: #2563eb; transform: translateY(-2px); }
    .btn-cancel {
      background: rgba(255, 255, 255, 0.05);
      color: #94a3b8;
    }
    .btn-cancel:hover { background: rgba(255, 255, 255, 0.1); color: white; }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `]
})
export class CustomAlertComponent {
  public alertService = inject(AlertService);

  onConfirm() {
    this.alertService.onConfirm();
  }

  onCancel() {
    this.alertService.onCancel();
  }
}
