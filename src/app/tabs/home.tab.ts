import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Component } from '@angular/core';

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


  </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomeTab {
  constructor() {}
}
