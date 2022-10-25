import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('myMap') element!: ElementRef;
  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}
  ngAfterViewInit(): void {
    if (!this.placesService.currentPosition)
      throw new Error('No current position');

    const map = new Map({
      container: this.element.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10',
      center: this.placesService.currentPosition,
      zoom: 14,
    });

    const popup = new Popup().setHTML(`
      <h6>Aqui estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({ color: 'darkBlue' })
      .setLngLat(this.placesService.currentPosition)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);

  }
}
