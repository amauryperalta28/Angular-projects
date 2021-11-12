import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _baseUrl = 'https://restcountries.com/v3.1/';

   get params(){
     return new HttpParams()
     .set('fields', 'name,capital,flags,population,cca2');
   }
  constructor(private http: HttpClient) { }

  searchCountryByName(name: string): Observable<Country[]> {
    const url = `${this._baseUrl}/name/${name}`;

    return this.http.get<Country[]>(url, { params: this.params });

  }

  searchCountryByCapital(name: string): Observable<Country[]> {
    const url = `${this._baseUrl}/capital/${name}`;

    return this.http.get<Country[]>(url, { params: this.params });

  }

  searchCountryById(id: string): Observable<Country[]> {
    const url = `${this._baseUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  searchCountriesByRegion(region: string): Observable<Country[]> {


    const url = `${this._baseUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.params });
  }


}
