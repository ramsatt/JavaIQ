import { Injectable, signal, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  user,
  User
} from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { PurchaseService } from './services/purchase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);
  private purchaseService = inject(PurchaseService);

  user = signal<User | null>(null);
  user$ = user(this.auth);

  constructor() {
    if (Capacitor.isNativePlatform()) {
      this.initializeMobileAuth();
    } else {
      this.user$.subscribe(u => this.user.set(u));
    }
  }

  /** Maps a Capacitor user to the shape expected by the app (photoUrl → photoURL). */
  private toAppUser(capUser: any): any {
    return {
      uid: capUser.uid,
      displayName: capUser.displayName ?? null,
      email: capUser.email ?? null,
      photoURL: capUser.photoUrl ?? null,
    };
  }

  private async initializeMobileAuth() {
    // Restore user on app start if already signed in
    try {
      const { user: existing } = await FirebaseAuthentication.getCurrentUser();
      if (existing) {
        this.user.set(this.toAppUser(existing));
        await this.purchaseService.identifyUser(existing.uid);
        await this.purchaseService.loadProStatus(existing.uid);
      }
    } catch {
      // no cached user
    }

    // Listen for subsequent auth state changes
    FirebaseAuthentication.addListener('authStateChange', (change) => {
      if (change.user) {
        this.user.set(this.toAppUser(change.user));
        this.purchaseService.identifyUser(change.user.uid);
        this.purchaseService.loadProStatus(change.user.uid);
        this.checkProfileSetup(change.user);
      } else {
        this.user.set(null);
        this.purchaseService.resetUser();
      }
    });
  }

  async loginWithGoogle() {
    try {
      if (Capacitor.isNativePlatform()) {
        // Use native Firebase auth on mobile
        const result = await FirebaseAuthentication.signInWithGoogle();
        if (result.user) {
          this.user.set(this.toAppUser(result.user));
          await this.purchaseService.identifyUser(result.user.uid);
          await this.purchaseService.loadProStatus(result.user.uid);
          await this.checkProfileSetup(result.user);
          return result.user;
        }
        return null;
      } else {
        // Use web Firebase auth on web
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(this.auth, provider);
        await this.checkProfileSetup(result.user.uid);
        return result.user;
      }
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }

  private async checkProfileSetup(user: any) {
    const uid = typeof user === 'string' ? user : user.uid;
    const ref = doc(this.firestore, `users/${uid}`);
    const snap = await getDoc(ref);
    if (!snap.exists() || !snap.data()['profileSetup']) {
      this.router.navigate(['/profile-setup'], { replaceUrl: true });
    }
  }

  async logout() {
    try {
      if (Capacitor.isNativePlatform()) {
        await FirebaseAuthentication.signOut();
      } else {
        await signOut(this.auth);
      }
      await this.purchaseService.resetUser();
    } catch {
      // silent
    }
  }

  get currentUser() {
    return this.user();
  }
}
