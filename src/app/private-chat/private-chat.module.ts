import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivateChatPage } from './private-chat.page';

import { PrivateChatPageRoutingModule } from './private-chat-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PrivateChatPageRoutingModule
  ],
  declarations: [PrivateChatPage]
})
export class PrivateChatModule {}
