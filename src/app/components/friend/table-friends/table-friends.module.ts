import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { TableFriendsPage } from './table-friends.page';
import { CommonModule } from '@angular/common';
import { RowFriendPageModule } from '../row-friend/row-friend.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RowFriendPageModule
  ],
  exports: [
    TableFriendsPage
  ],
  declarations: [TableFriendsPage]
})
export class TableFriendsPageModule {}
