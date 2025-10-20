import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { CreateBookCard } from '../components/cards/create-book.card';

@Component({
  selector: 'home-tab',
  template: `
    <ion-header [translucent]="true">
    <ion-toolbar>
      <ion-title>
        Home
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true" class="ion-padding">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <p>Welcome to the Home Page!</p>
    <p>Navigate using the tabs below.</p>

    <create-book-card></create-book-card>

  </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CreateBookCard],
})
export class HomeTab {
  constructor() {}
}
