import { Injectable, signal } from '@angular/core';

export interface AlertOptions {
  title?: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertState = signal<AlertOptions | null>(null);
  private resolveCallback?: (value: boolean) => void;

  get alert() {
    return this.alertState();
  }

  showAlert(options: AlertOptions): Promise<boolean> {
    this.alertState.set(options);
    return new Promise((resolve) => {
      this.resolveCallback = resolve;
    });
  }

  confirm(message: string, title: string = 'Confirm'): Promise<boolean> {
    return this.showAlert({
      title,
      message,
      showCancel: true,
      confirmText: 'Yes',
      cancelText: 'No',
      type: 'info'
    });
  }

  alertInfo(message: string, title: string = 'Information'): Promise<boolean> {
    return this.showAlert({
      title,
      message,
      showCancel: false,
      confirmText: 'OK',
      type: 'info'
    });
  }

  onConfirm() {
    this.alertState.set(null);
    if (this.resolveCallback) this.resolveCallback(true);
  }

  onCancel() {
    this.alertState.set(null);
    if (this.resolveCallback) this.resolveCallback(false);
  }
}
