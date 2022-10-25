import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(private placesService: PlacesService,
              private mapService: MapService) { }

  goToMyLocation(){
     if(!this.placesService.isUserLocationReady) return ;

     this.mapService.flyTo(this.placesService.currentPosition!);
  }

}
