import { IonRouterOutlet } from '@ionic/angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'home-tab',
  template: `
  <ion-router-outlet></ion-router-outlet>
`,
  imports: [IonRouterOutlet],
})
export class HomeTab {
  constructor() {}
}
