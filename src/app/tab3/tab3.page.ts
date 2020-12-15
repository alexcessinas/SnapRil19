import { Component, OnInit } from '@angular/core';
import { User } from 'snapril-lib';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  users: User[];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        id: '12',
        username: 'TOTO',
        picture: 'pic'
      },
      {
        id: '12',
        username: 'TOTO',
        picture: 'pic'
      },
      {
        id: '12',
        username: 'TOTO',
        picture: 'pic'
      },
      {
        id: '12',
        username: 'TOTO',
        picture: 'pic'
      }
    ];
  }

}
