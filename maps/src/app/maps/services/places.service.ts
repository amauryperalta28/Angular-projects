import { Injectable } from '@angular/core';
import { PlacesApiClient } from '../api/placesApiClient';
import { Feature, PlacesResponse } from '../interfaces/PlacesResponse';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public currentPosition?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  constructor(
    private placesApiClient: PlacesApiClient,
    private mapService: MapService
  ) {
    this.getCurrentLocation();
  }

  get isUserLocationReady() {
    return !!this.currentPosition;
  }

  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.currentPosition = [coords.longitude, coords.latitude];
          resolve(this.currentPosition);
        },
        (error) => {
          alert('No se pudo obtener la position actual');
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query = '') {
    if(query.length === 0){
      this.places = [];
      return ;
    }

    if(!this.currentPosition) throw new Error('No hay user location');

    this.isLoadingPlaces = true;

    this.placesApiClient
      .get<PlacesResponse>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
        {
          params: {
            proximity: this.currentPosition.join(','),
          },
        }
      )
      .subscribe((result) => {
        this.places = result.features;
        this.isLoadingPlaces = false;
        this.mapService.loadMarkersFromPlaces(this.places, this.currentPosition!);
      });
  }
}
