import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'books-tab',
  template: `
    <ion-router-outlet></ion-router-outlet>
`,
  imports: [IonRouterOutlet]
})
export class BooksTab {

  constructor() {}

}
