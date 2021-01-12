import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth: AngularFireAuth) {}

  async signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async signOut() {
    return this.auth.signOut();
  }
}
