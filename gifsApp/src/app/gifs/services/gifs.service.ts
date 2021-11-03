import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetGifsResponse, Gif } from '../interfaces/get-gifs-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private _apiKey: string = '6DpMCusWJGaViRh3DpmW9gLjevURRjD0';
  private _baseUrl: string = "https://api.giphy.com/v1/gifs";
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this.loadHistory();

    this.loadLastSearchGifsResults();
  }

  private loadLastSearchGifsResults() {
    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados') || "[]");
    }
  }

  private loadHistory() {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial') || "[]");
    }
  }

  buscarGifs(query: string) {

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<GetGifsResponse>(`${this._baseUrl}/search`, { params })
      .subscribe((result) => {

        this.resultados = result.data;
        localStorage.setItem('resultados', JSON.stringify(result.data));
      });

  }

}
