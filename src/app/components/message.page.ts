import { Component, Input } from '@angular/core';
import { Message } from 'snapril-lib';

@Component({
  selector: 'app-message',
  templateUrl: 'message.page.html'
})
export class MessagePage {
  @Input() value: Message;

  constructor() {
  }

}
