import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private readonly userService: UserService) {}
  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => console.log(user));
  }

}
