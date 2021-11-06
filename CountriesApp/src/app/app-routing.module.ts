import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ByCapitalPageComponent } from './country/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './country/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './country/by-region-page/by-region-page.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionPageComponent
  },
  {
    path: 'capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'pais/:id',
    component: CountryDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
