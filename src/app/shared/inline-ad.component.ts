import {
  Component, OnInit, OnDestroy, ElementRef, ViewChild,
  ChangeDetectionStrategy, inject, input
} from '@angular/core';
import { Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { NativeAdService } from '../services/native-ad.service';
import { PurchaseService } from '../services/purchase.service';

let slotCounter = 0;

const AD_HEIGHT_PX = 110; // must match NativeAdService.NATIVE_AD_HEIGHT_CSS

@Component({
  selector: 'app-inline-ad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (shouldShow) {
      <div #placeholder class="native-ad-placeholder" [style.height.px]="adHeight"></div>
    }
  `,
  styles: `
    .native-ad-placeholder {
      width: 100%;
      background: transparent;
      border-radius: 10px;
      margin: 16px 0;
    }
  `
})
export class InlineAdComponent implements OnInit, OnDestroy {
  /** Optional label for debugging; doesn't affect behaviour */
  label = input('');

  @ViewChild('placeholder') placeholderRef?: ElementRef<HTMLElement>;

  protected adHeight = AD_HEIGHT_PX;

  private nativeAdService = inject(NativeAdService);
  private purchaseService = inject(PurchaseService);
  private el = inject(ElementRef);

  private slotId = `native_ad_${++slotCounter}_${Date.now()}`;
  private adLoaded = false;
  private scrollSub?: Subscription;
  private intersectionObserver?: IntersectionObserver;

  protected get shouldShow(): boolean {
    return this.nativeAdService.isNative && !this.purchaseService.isProOrTrial();
  }

  ngOnInit(): void {
    if (!this.shouldShow) return;

    // Listen for this slot's ad to load, then show it
    this.nativeAdService.onAdLoaded((loadedSlotId) => {
      if (loadedSlotId !== this.slotId) return;
      this.adLoaded = true;
      this.showAtCurrentPosition();
    });

    // Subscribe to scroll — throttle to ~60fps
    this.scrollSub = this.nativeAdService.scroll$
      .pipe(throttleTime(16))
      .subscribe(() => {
        if (this.adLoaded) this.updatePosition();
      });

    // Use IntersectionObserver to show/hide when placeholder enters/leaves viewport
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (this.adLoaded) {
            this.nativeAdService.setVisible(this.slotId, entry.isIntersecting);
          }
        }
      },
      { threshold: 0 }
    );

    // Load the ad (result arrives via onAdLoaded listener)
    this.nativeAdService.loadAd(this.slotId);
  }

  ngAfterViewInit(): void {
    if (!this.shouldShow) return;
    const el = this.placeholderRef?.nativeElement;
    if (el) this.intersectionObserver?.observe(el);
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
    this.intersectionObserver?.disconnect();
    this.nativeAdService.destroyAd(this.slotId);
  }

  private getRect(): DOMRect | null {
    return this.placeholderRef?.nativeElement.getBoundingClientRect() ?? null;
  }

  private showAtCurrentPosition(): void {
    const rect = this.getRect();
    if (!rect) return;
    this.nativeAdService.showAd(this.slotId, rect.left, rect.top, rect.width);
    const el = this.placeholderRef?.nativeElement;
    if (el) this.intersectionObserver?.observe(el);
  }

  private updatePosition(): void {
    const rect = this.getRect();
    if (!rect) return;
    this.nativeAdService.updatePosition(this.slotId, rect.left, rect.top);
  }
}
