import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  template: `
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home-tab/home" href="/tabs/home-tab/home">
        <ion-icon aria-hidden="true" name="triangle"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="books-tab/books" href="/tabs/books-tab/books">
        <ion-icon aria-hidden="true" name="ellipse"></ion-icon>
        <ion-label>Books</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="settings-tab/settings" href="/tabs/settings-tab/settings">
        <ion-icon aria-hidden="true" name="square"></ion-icon>
        <ion-label>Settings</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  `,
  styles: [],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
