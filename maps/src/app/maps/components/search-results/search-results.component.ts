import { Component } from '@angular/core';
import { Feature } from '../../interfaces/PlacesResponse';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {

  selectedPlaceId = '';

  get isLoadingPlaces(){
    return this.placesService.isLoadingPlaces;
  }

  get places (){
    return this.placesService.places;
  }

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  flyTo(place: Feature){
    this.selectedPlaceId = place.id;

    const [lng, lat] = place.center;

     this.mapService.flyTo([lng, lat]);
  }


}
