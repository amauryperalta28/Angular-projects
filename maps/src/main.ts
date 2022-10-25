import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import MapboxGl from 'mapbox-gl';

MapboxGl.accessToken = 'pk.eyJ1IjoiYW1hdXJ5MjgiLCJhIjoiY2t4dXRmNjJxMHJveDJwcG9xbW84YTRmbyJ9.0TpaDq-wgz1yROB2Ksmq_Q';

if (environment.production) {
  enableProdMode();
}


if(!navigator.geolocation){
  const geolocationError = 'No tiene geolocation activo, favor verificar!';
   alert(geolocationError);
   throw new Error(geolocationError);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
