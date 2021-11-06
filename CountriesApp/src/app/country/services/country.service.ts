import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _baseUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  searchCountryByName(name: string): Observable<Country[]>{
    const url = `${this._baseUrl}/name/${name}`;

    return this.http.get<Country[]>(url);

  }

  searchCountryByCapital(name: string): Observable<Country[]>{
    const url = `${this._baseUrl}/capital/${name}`;

    return this.http.get<Country[]>(url);

  }


}
