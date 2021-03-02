import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Message, User } from 'snapril-lib';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: 'edit-account.modal.html'
})
export class EditAccountModal implements OnInit, OnDestroy {

  public account: User;
  public renderImg: string;

  public editAccountForm = this.fb.group({
    username: ['', [Validators.required]],
    picture: ['']
  });

  constructor(
      private readonly authService: AuthService,
      private readonly fb: FormBuilder,
      private readonly router: Router,
      private readonly userService: UserService,
      private readonly modalController: ModalController,
      private readonly photoService: PhotoService
  ) { }

  ngOnDestroy(): void {
    document.querySelector('ion-router-outlet').classList.remove('in-backdrop');
  }

  ngOnInit(): void {
    this.editAccountForm.setValue({
      username: this.account.username ?? '',
      picture: this.account.picture ?? '',
    });
    this.renderImg = this.account.picture;
    document.querySelector('ion-router-outlet').classList.add('in-backdrop');
  }

  public dismiss() {
    this.modalController.dismiss();
  }

  public takePicture() {
    this.photoService.addNewToGallery().then(() => {
      this.editAccountForm.get('picture').patchValue(this.photoService.photos[0].webviewPath);
      this.renderImg = this.photoService.photos[0].webviewPath;
    });
  }

  public createFromForm(): User {
    return {
      id: this.account.id,
      username: this.editAccountForm.get('username').value,
      picture: this.editAccountForm.get('picture').value ?? null,
    } as User;
  }

  public save(): void {
    if (this.editAccountForm.valid) {
      this.userService.update(this.createFromForm());
      this.dismiss();
    }
  }
}
