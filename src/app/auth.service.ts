import { Injectable, signal, inject } from '@angular/core';
import { 
  Auth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  user,
  User
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  
  user = signal<User | null>(null);
  user$ = user(this.auth);

  constructor() {
    this.user$.subscribe(user => {
      this.user.set(user);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      return result.user;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      return null;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  get currentUser() {
    return this.user();
  }
}
