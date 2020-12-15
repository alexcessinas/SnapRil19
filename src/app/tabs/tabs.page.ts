import { Component } from '@angular/core';
import { Icons } from '../constants/icons.constant';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  icon = Icons;

  constructor() {}

}
