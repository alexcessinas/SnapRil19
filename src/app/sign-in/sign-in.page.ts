import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Icons } from '../constants/icons.constant';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {

  public icons = Icons.auth;
  public error: string;

  private emailValidator = /^[a-z]+.[a-z]+@viacesi.fr$/;

  public signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailValidator)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private readonly authService: AuthService, private readonly fb: FormBuilder, private readonly router: Router) { }

  async signIn() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email').value;
      const password = this.signInForm.get('password').value;

      this.authService.signIn(email, password).then(() => this.router.navigate(['/'])).catch(err => this.error = err);
    }
  }
}
