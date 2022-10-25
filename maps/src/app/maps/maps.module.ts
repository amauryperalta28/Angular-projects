import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [MapPageComponent, LoadingComponent, MapViewComponent, BtnMyLocationComponent, LogoComponent, SearchResultsComponent, SearchBarComponent],
  imports: [CommonModule],
  exports:[MapPageComponent]
})
export class MapsModule {}
