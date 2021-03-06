import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { DEFAULT_ACCOUNT_PICTURE, UserService } from '../services/user/user.service';
import { User } from 'snapril-lib';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditAccountModal } from '../components/edit-account-modal/edit-account.modal';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage implements OnInit {

  public account: User;
  public isDarkMode: boolean;
  public isNeonMode: boolean;
  public defaultPicture = DEFAULT_ACCOUNT_PICTURE;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router,
    public modalController: ModalController) {}

  ngOnInit(): void {
    this.isDarkMode = !!localStorage.getItem('darkMode');
    this.isNeonMode = !!localStorage.getItem('neonMode');
    this.userService.getCurrentUser().subscribe(user => {
      this.account = user;
    });
  }

  public signOut(): void {
    this.authService.signOut().then(() => this.router.navigate(['/signin']));
  }

  async edit(): Promise<void> {
    const modal = await this.modalController.create({
      component: EditAccountModal,
      componentProps: {
        account: this.account
      }
    });
    return await modal.present();
  }

  public toggleDarkMode(): void {
    document.body.classList.toggle('dark');
    localStorage.setItem('themeMode', document.body.classList.value);
  }

  public toggleNeonMode(): void {
    document.body.classList.toggle('neon');
    localStorage.setItem('themeMode', document.body.classList.value);
  }

}
