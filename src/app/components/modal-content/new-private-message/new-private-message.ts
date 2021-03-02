import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Components } from '@ionic/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-new-private-message',
  templateUrl: 'new-private-message.html'
})
// tslint:disable-next-line:component-class-suffix
export class NewPrivateMessage implements OnInit, OnDestroy {
  @Input() public modal: Components.IonModal;
  users: User[];
  log: boolean;

  constructor(
  ) {}

  ngOnDestroy(): void {
    document.querySelector('ion-router-outlet').classList.remove('in-backdrop');
  }

  ngOnInit(): void {
    document.querySelector('ion-router-outlet').classList.add('in-backdrop');
  }

  public async close(): Promise<void> {
    await this.modal.dismiss();
  }

}
