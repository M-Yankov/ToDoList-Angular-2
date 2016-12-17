import { Component } from '@angular/core'

@Component({
    // Selector is the selector of HTML element that is responsible for class APP 
    selector: 'app',
    // inline HTML is faster
    template: `<div>
     <navbar> </navbar>
        <router-outlet></router-outlet>
    </div>` 
})
      

export class App { } 