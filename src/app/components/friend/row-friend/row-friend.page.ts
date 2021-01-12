import { Component, Input } from '@angular/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-row-friend',
  templateUrl: 'row-friend.page.html'
})
export class RowFriendPage {
  @Input() value: User;

  constructor() {
  }

}
