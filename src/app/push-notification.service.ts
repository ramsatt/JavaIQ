import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { Capacitor } from '@capacitor/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private router = inject(Router);

  private readonly isNative = Capacitor.isNativePlatform();

  async requestPermissionAndRegister() {
    if (!this.isNative) return;

    let PushNotifications: any;
    try {
      // Use new Function to hide the import from Vite's static analysis
      // The package is only available in native builds
      const dynamicImport = new Function('specifier', 'return import(specifier)');
      const m = await dynamicImport('@capacitor/push-notifications');
      PushNotifications = m.PushNotifications;
    } catch {
      return; // package not available (web build)
    }

    const { receive } = await PushNotifications.requestPermissions();
    if (receive !== 'granted') return;

    await PushNotifications.register();

    // FCM token received — save to Firestore
    PushNotifications.addListener('registration', async (token: { value: string }) => {
      await this.saveToken(token.value);
    });

    // Handle notification tap when app is in foreground
    PushNotifications.addListener('pushNotificationActionPerformed',
      (action: { notification: { data?: Record<string, string> } }) => {
        const route = action.notification.data?.['route'];
        if (route) {
          this.router.navigateByUrl(route);
        }
      }
    );
  }

  private async saveToken(token: string) {
    const user = this.authService.user();
    if (!user) return;
    const ref = doc(this.firestore, `users/${user.uid}`);
    await updateDoc(ref, { fcmToken: token, notificationsEnabled: true }).catch(() => { });
  }
}
