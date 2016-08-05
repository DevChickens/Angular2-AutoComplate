import { Component } from '@angular/core'
import { SearchService } from '../service/search.Service';
import { InputText } from '../ui/index'
import { SearchAutocomplateComponent } from './search.autocomplate.component';

@Component({
    selector:'search-box',
    template: `
        <input-text></input-text>
        <search-autocomplate *ngIf={{isFocus}}></search-autocomplate>
    `,
    directives:[InputText,SearchAutocomplateComponent]
})
export class SearchBoxComponent{
    isFocus:boolean;

}