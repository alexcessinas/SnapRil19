import { Component, OnInit } from '@angular/core';
import { User } from 'snapril-lib';
import { MessageService } from '../services/message/message.service';
import { FriendService } from '../services/friend/friend.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  users: User[];

  constructor(private readonly friendService: FriendService) {}

  ngOnInit(): void {
    this.friendService.getAllUser().subscribe(value => {
      this.users = value;
    });
  }

}
