import { Injectable } from '@angular/core';
import { Map, LngLatLike, Marker, Popup, LngLatBounds } from 'mapbox-gl';
import { Feature } from '../interfaces/PlacesResponse';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  markers: Marker[] = [];

  get isMapReady() {
    return !!this.map;
  }

  constructor() {}

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(location: LngLatLike) {
    if (!this.isMapReady) throw Error('Map is not set');

    this.map?.flyTo({ center: location, zoom: 14 });
  }

  loadMarkersFromPlaces(places: Feature[], currentPosition: LngLatLike) {
    if (!this.map) throw new Error('Mapa no inicializado');

    this.markers.forEach((marker) => marker.remove());

    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;

      const popup = new Popup().setHTML(`
      <h6>${place.text}</h6>
      <span>${place.place_name_es}</span>
    `);
      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

      newMarkers.push(newMarker);
    }

    newMarkers.push(this.buildCurrentPosition(currentPosition));

    this.markers = newMarkers;

    if (places.length === 0) return;

    const bounds = new LngLatBounds();

    newMarkers.forEach((marker) => {
      const point = marker.getLngLat();
      bounds.extend(point);

    });

    this.map.fitBounds(bounds, {
      padding: 200,
    });
  }

  buildCurrentPosition(position: LngLatLike){
    if (!this.map) throw new Error('Mapa no inicializado');

    const popup = new Popup().setHTML(`
      <h6>Aqui estoy</h6>
      <span>Estoy en este lugar del mundo</span>
    `);

    const newMarker = new Marker()
      .setLngLat(position)
      .setPopup(popup)
      .addTo(this.map);

    return newMarker;
  }
}
