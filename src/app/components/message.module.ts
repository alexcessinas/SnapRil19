import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MessagePage } from './message.page';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MessagePage
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
