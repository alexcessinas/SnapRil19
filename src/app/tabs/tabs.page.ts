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

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('darkMode')){
      document.body.classList.toggle('dark');
    }
  }

}
