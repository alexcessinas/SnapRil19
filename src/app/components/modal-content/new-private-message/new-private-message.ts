import { Component, Input, OnInit } from '@angular/core';
import { Components } from '@ionic/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-new-private-message',
  templateUrl: 'new-private-message.html'
})
// tslint:disable-next-line:component-class-suffix
export class NewPrivateMessage implements OnInit{
  @Input() public modal: Components.IonModal;
  users: User[];
  log: boolean;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  public async close(): Promise<void> {
    await this.modal.dismiss();
  }

}
