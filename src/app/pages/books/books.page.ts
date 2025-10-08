import { Component } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'books-page',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Books
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Books</ion-title>
        </ion-toolbar>
      </ion-header>

    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class BooksPage {
  constructor() {}
}
