import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryPageComponent } from './by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './by-region-page/by-region-page.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';



@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryDetailComponent,
    CountryTableComponent,
    SearchCountryComponent
  ],
  exports: [
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
