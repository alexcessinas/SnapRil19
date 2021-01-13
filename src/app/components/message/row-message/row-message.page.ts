import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
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
export class RowMessagePage implements OnInit {
  @Input() value: Message;
  @Input() overloadClass: string;

  public datePattern = 'dd/MM HH:mm';
  isPicture: boolean;

  ngOnInit(): void {
    this.datePattern = new Date(this.value.date).getDate() === new Date().getDate() ? 'HH:mm' : 'dd/MM';
    this.isPicture = !!this.value?.content?.match(/data:image\/([a-zA-Z0-9-.+]+).*,.*/);
  }
}
