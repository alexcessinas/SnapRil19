import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Icons } from '../constants/icons.constant';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  icon = Icons;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (user.darkModeEnable) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

}
