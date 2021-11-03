import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/get-gifs-response.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  get resultados(): Gif[]{
    return this.gifService.resultados;
  }

  constructor(private gifService: GifsService) { }


}
