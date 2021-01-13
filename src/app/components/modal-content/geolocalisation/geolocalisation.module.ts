import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Geolocalisation } from './geolocalisation';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
    ],
  exports: [
    Geolocalisation
  ],
  declarations: [Geolocalisation]
})
export class GeolocalisationModule {}
