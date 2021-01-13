import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';
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

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router,
    public modalController: ModalController) {}

  ngOnInit(): void {
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
    console.log(document.body.classList.value);
    localStorage.setItem('darkMode', document.body.classList.value);
    // this.account.darkModeEnable = document.body.classList.contains('dark');
    // this.userService.update(this.account);
  }

}
