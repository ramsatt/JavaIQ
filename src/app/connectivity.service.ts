import { Injectable, signal } from '@angular/core';

type AsyncOp = () => Promise<void>;

@Injectable({ providedIn: 'root' })
export class ConnectivityService {
  isOnline = signal<boolean>(navigator.onLine);

  private queue: AsyncOp[] = [];

  constructor() {
    window.addEventListener('online', () => {
      this.isOnline.set(true);
      this.flushQueue();
    });
    window.addEventListener('offline', () => this.isOnline.set(false));
  }

  /**
   * Run `op` immediately if online; otherwise enqueue it for when connectivity returns.
   */
  async enqueueOp(op: AsyncOp): Promise<void> {
    if (this.isOnline()) {
      await op().catch(err => console.warn('[ConnectivityService] Op failed:', err));
    } else {
      this.queue.push(op);
    }
  }

  private async flushQueue(): Promise<void> {
    const pending = [...this.queue];
    this.queue = [];
    for (const op of pending) {
      await op().catch(err => console.warn('[ConnectivityService] Flush op failed:', err));
    }
  }
}
