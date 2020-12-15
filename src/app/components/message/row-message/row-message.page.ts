import { Component, Input } from '@angular/core';
import { Message } from 'snapril-lib';

@Component({
  selector: 'app-row-message',
  templateUrl: 'row-message.page.html'
})
export class RowMessagePage {
  @Input() value: Message;

  constructor() {
  }

}
