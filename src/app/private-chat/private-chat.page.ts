import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { FriendService } from '../services/friend/friend.service';
import { NewPrivateMessage } from '../components/modal-content/new-private-message/new-private-message';

@Component({
  selector: 'app-private-chat',
  templateUrl: 'private-chat.page.html',
  styleUrls: ['private-chat.page.scss']
})
export class PrivateChatPage {

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
