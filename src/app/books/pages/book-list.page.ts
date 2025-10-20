import { IonHeader, IonToolbar, IonContent, IonTitle, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { Component } from "@angular/core";
// Icons
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: "book-list-page",
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

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button color="primary" routerLink="/tabs/books/create-book">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonContent, IonTitle, IonFab, IonFabButton, IonIcon, RouterLink],
})
export class BookListPage {

  constructor() {
    addIcons({
      add,
    });
  }
}
