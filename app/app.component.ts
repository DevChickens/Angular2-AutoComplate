import { Component } from '@angular/core';
import { SearchPageComponent } from './component/search.page.component';

@Component({
  selector: 'my-app',
  template: `<search-page></search-page>`,
  directives : [SearchPageComponent]
})

export class AppComponent { }
