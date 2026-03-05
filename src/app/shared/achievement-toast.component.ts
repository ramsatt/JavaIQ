import {
  Component, ChangeDetectionStrategy, inject,
  signal, effect, ChangeDetectorRef
} from '@angular/core';
import { AchievementService } from '../services/achievement.service';

@Component({
  selector: 'app-achievement-toast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="ach-toast" [class.toast-enter]="visible()">
        <div class="ach-icon-wrap">
          <i class="bi" [class]="achievement()!.icon"
             [style.color]="achievement()!.iconColor"></i>
        </div>
        <div class="ach-text">
          <span class="ach-label">Achievement Unlocked!</span>
          <span class="ach-title">{{ achievement()!.title }}</span>
        </div>
        <button class="ach-close" (click)="dismiss()">✕</button>
      </div>
    }
  `,
  styles: [`
    .ach-toast {
      position: fixed;
      top: 20px;
      right: 16px;
      z-index: 99999;
      display: flex;
      align-items: center;
      gap: 12px;
      background: #1a2332;
      border: 1.5px solid rgba(212,168,83,0.4);
      border-radius: 16px;
      padding: 12px 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      min-width: 240px;
      max-width: 320px;
      animation: slideIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }

    @keyframes slideIn {
      from { transform: translateX(120%); opacity: 0; }
      to   { transform: translateX(0);   opacity: 1; }
    }

    .ach-icon-wrap {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .ach-icon-wrap .bi { font-size: 1.3rem; }

    .ach-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
    }

    .ach-label {
      font-size: 0.62rem;
      font-weight: 800;
      color: #d4a853;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .ach-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #e2e8f0;
    }

    .ach-close {
      background: none;
      border: none;
      color: #64748b;
      font-size: 0.8rem;
      cursor: pointer;
      padding: 0 0 0 4px;
      flex-shrink: 0;
    }

    .ach-close:hover { color: #94a3b8; }
  `]
})
export class AchievementToastComponent {
  private achSvc = inject(AchievementService);
  private cdr    = inject(ChangeDetectorRef);

  visible     = signal(false);
  achievement = this.achSvc.justUnlocked;

  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const a = this.achSvc.justUnlocked();
      if (a) {
        this.visible.set(true);
        this.cdr.markForCheck();

        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.dismiss(), 4000);
      }
    });
  }

  dismiss(): void {
    this.visible.set(false);
    this.achSvc.clearJustUnlocked();
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
  }
}
