import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Icons } from '../constants/icons.constant';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  public icons = Icons.auth;

  public signUpForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private readonly authService: AuthService, private readonly fb: FormBuilder, private readonly router: Router) { }

  public signUp() {
    if (this.signUpForm.valid) {
      const username = this.signUpForm.get('username').value;
      const email = this.signUpForm.get('email').value;
      const password = this.signUpForm.get('password').value;

      this.authService.signUp(email, password).then(() => this.router.navigate(['/tabs']));
    }
  }
}
