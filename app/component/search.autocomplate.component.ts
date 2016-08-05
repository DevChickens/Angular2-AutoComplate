import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { City } from '../interface/city.interface';

@Component({
    selector:'search-autocomplate',
    template: `
        <template ngFor let-city [ngForOf]="cities">
           <div>{{city.cityNameLN}}</div>
        </template>
    `,
    providers: [SearchService],

})
export class SearchAutocomplateComponent implements OnInit{
  cities:City[];
  constructor(private searchService:SearchService){}

  ngOnInit(){
      this.searchService.get().subscribe(city => this.cities = city);
  }
}