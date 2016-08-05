import { Component } from '@angular/core';
import { SearchBoxComponent } from './search.box.component';


@Component({
  selector: 'search-page',
  template: `
        <search-box></search-box>
    `,
  directives: [ SearchBoxComponent]
})
export class SearchPageComponent {
 
}