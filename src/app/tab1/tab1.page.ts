import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { FriendService } from '../services/friend/friend.service';
import { NewPrivateMessage } from '../components/modal-content/new-private-message';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      private readonly modalService: ModalService<NewPrivateMessage>,
      private readonly friendService: FriendService,
  ) {}

  public async openModal(): Promise<void> {
    this.friendService.getAllUser().subscribe( users => {
      this.modalService.show(NewPrivateMessage, {
        users
      });
    });
  }

}
