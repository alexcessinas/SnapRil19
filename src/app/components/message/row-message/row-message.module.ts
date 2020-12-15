import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RowMessagePage } from './row-message.page';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    RowMessagePage
  ],
  declarations: [RowMessagePage]
})
export class RowMessagePageModule {}
