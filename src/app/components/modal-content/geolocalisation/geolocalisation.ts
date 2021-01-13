import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Components } from '@ionic/core';
import { Message } from 'snapril-lib';
import * as L from 'leaflet';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: 'geolocalisation.html',
  styleUrls: ['geolocalisation.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Geolocalisation implements AfterViewInit{
  @Input() public modal: Components.IonModal;
  value: Message;
  private map: L.Map;

  constructor(
  ) {}

  ngAfterViewInit(): void {
    const coordonnes = this.value.geolocation.split(',');
    this.map = L.map('map', {
      center: [ Number(coordonnes[0]), Number(coordonnes[1]) ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 12,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    const marker = L.circleMarker([Number(coordonnes[0]), Number(coordonnes[1])]).addTo(this.map);

    setTimeout(() => this.map.invalidateSize());
  }

  public async close(): Promise<void> {
    await this.modal.dismiss();
  }

}
