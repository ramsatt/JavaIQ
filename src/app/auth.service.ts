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
import { Observable } from 'rxjs';

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
    this.user$.subscribe(u => {
      this.user.set(u);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
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
