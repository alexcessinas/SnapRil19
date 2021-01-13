
import { Component, Input, OnInit } from '@angular/core';
import { Message, User } from 'snapril-lib';

@Component({
  selector: 'app-table-messages',
  templateUrl: 'table-messages.page.html'
})
export class TableMessagesPage {
  @Input() messages: Message[] = [];
  @Input() currentUser: User;
}
