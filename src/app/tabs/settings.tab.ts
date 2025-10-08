import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'settings-tab',
  template: `
  <ion-header [translucent]="true">
    <ion-toolbar>
      <ion-title>
        Settings
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-router-outlet></ion-router-outlet>
  </ion-content>
`,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet],
})
export class SettingsTab {
  constructor() {}
}
