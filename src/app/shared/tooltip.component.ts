import {
  Component, Input, OnInit, signal, inject, ChangeDetectionStrategy
} from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div class="tt-overlay" (click)="dismiss()">
        <div class="tt-box" [class]="'tt-pos-' + position" (click)="$event.stopPropagation()">
          <div class="tt-arrow tt-arrow-{{ position }}"></div>
          <p class="tt-text">{{ text }}</p>
          <button class="tt-close" (click)="dismiss()">Got it</button>
        </div>
      </div>
    }
  `,
  styles: `
    .tt-overlay {
      position: fixed;
      inset: 0;
      z-index: 9000;
      background: rgba(0,0,0,0.45);
      backdrop-filter: blur(2px);
    }

    .tt-box {
      position: absolute;
      background: #1e293b;
      border: 1px solid rgba(16,185,129,0.3);
      border-radius: 14px;
      padding: 14px 16px;
      max-width: 240px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.5);
    }

    .tt-pos-top    { top: 20%; left: 50%; transform: translateX(-50%); }
    .tt-pos-bottom { bottom: 20%; left: 50%; transform: translateX(-50%); }
    .tt-pos-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }

    .tt-arrow {
      position: absolute;
      width: 12px; height: 12px;
      background: #1e293b;
      border: 1px solid rgba(16,185,129,0.3);
      transform: rotate(45deg);
    }
    .tt-arrow-top    { bottom: -7px; left: 50%; margin-left: -6px; border-top: none; border-left: none; }
    .tt-arrow-bottom { top: -7px;    left: 50%; margin-left: -6px; border-bottom: none; border-right: none; }
    .tt-arrow-center { display: none; }

    .tt-text {
      font-size: 0.82rem; color: #e2e8f0; line-height: 1.6;
      margin: 0 0 12px; font-weight: 500;
    }

    .tt-close {
      background: rgba(16,185,129,0.12);
      border: 1px solid rgba(16,185,129,0.3);
      border-radius: 8px;
      color: #10b981;
      font-size: 0.72rem; font-weight: 700;
      padding: 6px 14px;
      cursor: pointer;
      width: 100%;
      transition: background 0.2s;
    }
    .tt-close:hover { background: rgba(16,185,129,0.2); }
  `
})
export class TooltipComponent implements OnInit {
  @Input() id!: string;
  @Input() text!: string;
  @Input() position: 'top' | 'bottom' | 'center' = 'center';

  private tooltipService = inject(TooltipService);
  visible = signal(false);

  ngOnInit() {
    if (this.tooltipService.shouldShow(this.id)) {
      // Slight delay so the parent view has rendered
      setTimeout(() => this.visible.set(true), 600);
    }
  }

  dismiss() {
    this.tooltipService.markShown(this.id);
    this.visible.set(false);
  }
}
