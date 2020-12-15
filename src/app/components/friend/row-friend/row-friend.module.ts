import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RowFriendPage } from './row-friend.page';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    RowFriendPage
  ],
  declarations: [RowFriendPage]
})
export class RowFriendPageModule {}
