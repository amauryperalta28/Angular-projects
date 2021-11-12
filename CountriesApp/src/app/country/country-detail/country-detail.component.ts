import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';
import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((result) => this.countryService.searchCountryById(result.id)),
        tap(console.log)
      )
      .subscribe((country: Country[]) => this.country = country[0]
      );
  }

}
