import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { TableMessagesPageModule } from '../components/message/table-message/table-messages.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab2PageRoutingModule,
        TableMessagesPageModule,
        ReactiveFormsModule
    ],
  declarations: [Tab2Page],
    providers: [Geolocation]
})
export class Tab2PageModule {}
