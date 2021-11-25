import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }

  buscar(){
     const valor = this.txtBuscar.nativeElement.value;

     if(!(valor.trim().length === 0)){
      this.gifsService.buscarGifs(valor.trim().toLowerCase());

      console.log(valor);

      this.txtBuscar.nativeElement.value = '';
     }


  }

}