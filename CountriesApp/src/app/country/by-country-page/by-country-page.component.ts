import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {
  termino: string = '';
  anErrorHappened: boolean = false;
  countries: Country[] = [];


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.anErrorHappened = false;
    this.termino = termino;

    this.countryService.searchCountryByName(termino)
                       .subscribe((result) =>{
                         this.countries = result;
                          console.log(result);
                       }, (err)=>{
                         this.countries = [];
                         this.anErrorHappened = true;
                       });
  }

  sugerencias(value: string){
    this.anErrorHappened = false;
    console.log('el bobo');
  }

}
