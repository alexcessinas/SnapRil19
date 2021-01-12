import { Component, Input, OnInit } from '@angular/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-row-friend',
  templateUrl: 'row-friend.page.html'
})
export class RowFriendPage implements OnInit{
  @Input() value: User;
  @Input() shownSelect = false;
  selectedValue = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
