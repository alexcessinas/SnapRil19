import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Icons } from '../constants/icons.constant';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  icon = Icons;

  constructor(private readonly userService: UserService) {}

}
