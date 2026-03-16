import { Injectable, signal, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  user,
  User
} from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  user = signal<User | null>(null);
  user$ = user(this.auth);

  constructor() {
    this.user$.subscribe(u => this.user.set(u));

    // On Android/iOS, capture the result after signInWithRedirect returns
    if (Capacitor.isNativePlatform()) {
      getRedirectResult(this.auth).then(result => {
        if (result?.user) {
          this.checkProfileSetup(result.user.uid);
        }
      }).catch(() => {});
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      if (Capacitor.isNativePlatform()) {
        // signInWithPopup is blocked by Android WebView — use Chrome Custom Tabs redirect
        await signInWithRedirect(this.auth, provider);
        return null; // result handled by getRedirectResult in constructor
      }
      const result = await signInWithPopup(this.auth, provider);
      await this.checkProfileSetup(result.user.uid);
      return result.user;
    } catch {
      return null;
    }
  }

  private async checkProfileSetup(uid: string) {
    const ref = doc(this.firestore, `users/${uid}`);
    const snap = await getDoc(ref);
    if (!snap.exists() || !snap.data()['profileSetup']) {
      this.router.navigate(['/profile-setup'], { replaceUrl: true });
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch {
      // silent
    }
  }

  get currentUser() {
    return this.user();
  }
}
