import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: 'edit-account.modal.html'
})
export class EditAccountModal {
  public account: User;

  constructor(private readonly modalController: ModalController) {}

  public dismiss() {
    this.modalController.dismiss();
  }
}
