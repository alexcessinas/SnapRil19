import { Component, Input, LOCALE_ID } from '@angular/core';
import { Message } from 'snapril-lib';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-row-message',
  templateUrl: 'row-message.page.html',
  providers: [{provide:  LOCALE_ID, useValue: 'fr' }]
})
export class RowMessagePage {
  @Input() value: Message;

  constructor() {
  }

}
