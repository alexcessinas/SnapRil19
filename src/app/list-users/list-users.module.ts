import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListUsersPage } from './list-users.page';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { TableFriendsPageModule } from '../components/friend/table-friends/table-friends.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ListUsersPage}]),
    ListUsersRoutingModule,
    TableFriendsPageModule,
  ],
  declarations: [ListUsersPage]
})
export class ListUsersModule {}
