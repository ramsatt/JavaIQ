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
        <div class="alert-card" (click)="$event.stopPropagation()" [attr.data-type]="options.type || 'info'">

          <!-- Coloured header band with icon -->
          <div class="alert-header">
            <div class="alert-icon-ring">
              @switch (options.type) {
                @case ('success') { <i class="fa-solid fa-circle-check"></i> }
                @case ('error')   { <i class="fa-solid fa-circle-xmark"></i> }
                @case ('warning') { <i class="fa-solid fa-triangle-exclamation"></i> }
                @default          { <i class="fa-solid fa-play-circle"></i> }
              }
            </div>
          </div>

          <!-- Content -->
          <div class="alert-body">
            @if (options.title) {
              <h3 class="alert-title">{{ options.title }}</h3>
            }
            <p class="alert-message">{{ options.message }}</p>
          </div>

          <!-- Actions -->
          <div class="alert-actions" [class.single]="!options.showCancel">
            @if (options.showCancel) {
              <button class="btn-cancel" (click)="onCancel()">
                {{ options.cancelText || 'Cancel' }}
              </button>
            }
            <button class="btn-confirm" (click)="onConfirm()">
              {{ options.confirmText || 'OK' }}
            </button>
          </div>

        </div>
      </div>
    }
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    /* ── Overlay ── */
    .alert-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      animation: fadeIn 0.2s ease-out;
    }

    /* ── Card ── */
    .alert-card {
      font-family: 'Inter', sans-serif;
      background: #111827;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      width: 100%;
      max-width: 340px;
      overflow: hidden;
      box-shadow: 0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
      animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* ── Header band ── */
    .alert-header {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 24px 20px;
      background: linear-gradient(160deg, #0f2027 0%, #1a2f45 100%);
      position: relative;
    }
    .alert-header::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 1px;
      background: rgba(255,255,255,0.06);
    }

    /* Type-based header accent line at top */
    [data-type='info']    .alert-header { background: linear-gradient(160deg, #0c1e35 0%, #0f2d4a 100%); }
    [data-type='success'] .alert-header { background: linear-gradient(160deg, #052014 0%, #0b3320 100%); }
    [data-type='warning'] .alert-header { background: linear-gradient(160deg, #1f1200 0%, #2e1a00 100%); }
    [data-type='error']   .alert-header { background: linear-gradient(160deg, #1f0606 0%, #2e0c0c 100%); }

    /* ── Icon ring ── */
    .alert-icon-ring {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
    }
    [data-type='info']    .alert-icon-ring {
      background: rgba(59,130,246,0.15);
      border: 2px solid rgba(59,130,246,0.3);
      color: #60a5fa;
      box-shadow: 0 0 32px rgba(59,130,246,0.2);
    }
    [data-type='success'] .alert-icon-ring {
      background: rgba(16,185,129,0.15);
      border: 2px solid rgba(16,185,129,0.3);
      color: #34d399;
      box-shadow: 0 0 32px rgba(16,185,129,0.2);
    }
    [data-type='warning'] .alert-icon-ring {
      background: rgba(245,158,11,0.15);
      border: 2px solid rgba(245,158,11,0.3);
      color: #fbbf24;
      box-shadow: 0 0 32px rgba(245,158,11,0.2);
    }
    [data-type='error'] .alert-icon-ring {
      background: rgba(239,68,68,0.15);
      border: 2px solid rgba(239,68,68,0.3);
      color: #f87171;
      box-shadow: 0 0 32px rgba(239,68,68,0.2);
    }

    /* ── Body ── */
    .alert-body {
      padding: 24px 24px 20px;
      text-align: center;
    }
    .alert-title {
      font-size: 1.2rem;
      font-weight: 800;
      color: #f1f5f9;
      letter-spacing: -0.02em;
      margin: 0 0 10px;
      line-height: 1.3;
    }
    .alert-message {
      font-size: 0.88rem;
      color: #94a3b8;
      line-height: 1.65;
      margin: 0;
    }

    /* ── Actions ── */
    .alert-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 0 20px 20px;
    }
    .alert-actions.single {
      grid-template-columns: 1fr;
    }

    .btn-cancel {
      padding: 13px 16px;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 0.88rem;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.18s ease;
    }
    .btn-cancel:hover {
      background: rgba(255,255,255,0.09);
      color: #e2e8f0;
      border-color: rgba(255,255,255,0.18);
    }

    .btn-confirm {
      padding: 13px 16px;
      border-radius: 12px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 0.88rem;
      border: none;
      cursor: pointer;
      transition: all 0.18s ease;
      color: white;
    }
    [data-type='info']    .btn-confirm {
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      box-shadow: 0 4px 16px rgba(59,130,246,0.35);
    }
    [data-type='info']    .btn-confirm:hover {
      background: linear-gradient(135deg, #1d4ed8, #2563eb);
      box-shadow: 0 6px 20px rgba(59,130,246,0.45);
      transform: translateY(-1px);
    }
    [data-type='success'] .btn-confirm {
      background: linear-gradient(135deg, #059669, #10b981);
      box-shadow: 0 4px 16px rgba(16,185,129,0.35);
    }
    [data-type='success'] .btn-confirm:hover {
      box-shadow: 0 6px 20px rgba(16,185,129,0.45);
      transform: translateY(-1px);
    }
    [data-type='warning'] .btn-confirm {
      background: linear-gradient(135deg, #d97706, #f59e0b);
      box-shadow: 0 4px 16px rgba(245,158,11,0.35);
    }
    [data-type='warning'] .btn-confirm:hover {
      box-shadow: 0 6px 20px rgba(245,158,11,0.45);
      transform: translateY(-1px);
    }
    [data-type='error'] .btn-confirm {
      background: linear-gradient(135deg, #dc2626, #ef4444);
      box-shadow: 0 4px 16px rgba(239,68,68,0.35);
    }
    [data-type='error'] .btn-confirm:hover {
      box-shadow: 0 6px 20px rgba(239,68,68,0.45);
      transform: translateY(-1px);
    }
    .btn-confirm:active { transform: scale(0.97); }

    /* ── Animations ── */
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes popIn {
      from { transform: scale(0.85) translateY(16px); opacity: 0; }
      to   { transform: scale(1) translateY(0); opacity: 1; }
    }
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
