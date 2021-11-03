import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultadosComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
