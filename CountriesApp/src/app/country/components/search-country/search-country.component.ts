import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit {

  termino: string = '';

  @Input() placeholder: string = 'Buscar';

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((result) => {

        this.onDebounce.emit(result);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclasPresionadas(termino: any) {
    this.debouncer.next(termino.target.value);

  }

}
