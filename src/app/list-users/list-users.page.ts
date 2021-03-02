import { Component, OnInit } from '@angular/core';
import { User } from 'snapril-lib';
import { FriendService } from '../services/friend/friend.service';

@Component({
  selector: 'app-list-users',
  templateUrl: 'list-users.page.html',
  styleUrls: ['list-users.page.scss']
})
export class ListUsersPage implements OnInit{
  users: User[];

  constructor(private readonly friendService: FriendService) {}

  ngOnInit(): void {
    this.friendService.getAllUser().subscribe(value => {
      this.users = value;
    });
  }

}
