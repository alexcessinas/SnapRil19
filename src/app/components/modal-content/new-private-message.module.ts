import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NewPrivateMessage } from './new-private-message';
import { CommonModule } from '@angular/common';
import { RowFriendPageModule } from '../friend/row-friend/row-friend.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        RowFriendPageModule
    ],
  exports: [
    NewPrivateMessage
  ],
  declarations: [NewPrivateMessage]
})
export class NewPrivateMessageModule {}
