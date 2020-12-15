import { Component, Input } from '@angular/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-table-friends',
  templateUrl: 'table-friends.page.html'
})
export class TableFriendsPage {
  @Input() users: User[];

  constructor() {
  }

}
