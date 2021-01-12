import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TableMessagesPage } from './table-messages.page';
import { CommonModule } from '@angular/common';
import { RowMessagePageModule } from '../row-message/row-message.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RowMessagePageModule
  ],
  exports: [
    TableMessagesPage
  ],
  declarations: [TableMessagesPage]
})
export class TableMessagesPageModule {}
