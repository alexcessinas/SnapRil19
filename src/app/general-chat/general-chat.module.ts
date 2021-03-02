import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralChatPage } from './general-chat.page';
import { TableMessagesPageModule } from '../components/message/table-message/table-messages.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GeneralChatRoutingModule } from './general-chat-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        GeneralChatRoutingModule,
        TableMessagesPageModule,
        ReactiveFormsModule
    ],
  declarations: [GeneralChatPage],
    providers: [Geolocation]
})
export class GeneralChatModule {}
