import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
import { User } from 'snapril-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage implements OnInit {

  public account: User;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.account = user;
    });
  }

  public signOut(): void {
    this.authService.signOut().then(() => this.router.navigate(['/signin']));
  }

}
