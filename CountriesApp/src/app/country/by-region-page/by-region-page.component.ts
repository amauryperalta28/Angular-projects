import { Component } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];
  anErrorHappened: boolean = false;
  selectedRegion: string = '';

  constructor(private countryService: CountryService) {

  }

  selectRegion(region: string) {

    if(region === this.selectedRegion) return;

    this.selectedRegion = region;

    this.buscar(region);
  }

  getSelectionClass(region: string): string {
    return this.selectedRegion == region ? 'btn-primary' : 'btn-outline-primary';
  }

  buscar(region: string) {
    this.anErrorHappened = false;
    this.countries = [];

    this.countryService.searchCountriesByRegion(region)
      .subscribe((result) => {
        this.countries = result;
        console.log(result);
      }, (err) => {
        this.countries = [];
        this.anErrorHappened = true;
      });
  }

}
