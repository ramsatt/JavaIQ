import { ErrorHandler, Injectable, NgZone, inject } from '@angular/core';
import { AlertService } from './alert.service';

/**
 * Replaces Angular's default ErrorHandler.
 *
 * - Chunk-load failures (lazy route split fails after a deploy) → silent reload
 * - All other unhandled errors → user-friendly alert, full error logged to console
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private alertService = inject(AlertService);
  private zone         = inject(NgZone);

  handleError(error: unknown): void {
    const message = this.extractMessage(error);
    console.error('[GlobalErrorHandler]', error);

    // Lazy-chunk load failure: a new deploy invalidated cached chunk filenames.
    // Reload once so the user gets fresh assets.
    if (this.isChunkError(message)) {
      const reloadKey = 'chunk_reload_at';
      const last = localStorage.getItem(reloadKey);
      const now  = Date.now();
      if (!last || now - parseInt(last, 10) > 30_000) {
        localStorage.setItem(reloadKey, String(now));
        window.location.reload();
      }
      return;
    }

    // For all other errors show a non-blocking alert — run inside Angular zone
    // so signals / change detection work correctly in the alert component.
    this.zone.run(() => {
      this.alertService.alertInfo(
        'Something went wrong. Please try again or restart the app.',
        'Oops!'
      ).catch(() => { /* alert itself failed — nothing we can do */ });
    });
  }

  private extractMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    return String(error);
  }

  private isChunkError(message: string): boolean {
    return (
      message.includes('ChunkLoadError') ||
      message.includes('Loading chunk') ||
      message.includes('Failed to fetch dynamically imported module')
    );
  }
}
