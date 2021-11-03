import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private gifsService: GifsService) { }

  get historyEntries(): string[] {
    return this.gifsService.historial;
  }

  search(searchText: string) {
    this.gifsService.buscarGifs(searchText);
  }


}
