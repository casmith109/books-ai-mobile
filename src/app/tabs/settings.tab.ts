import { Component } from "@angular/core";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonList,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput
} from '@ionic/angular/standalone';

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

    <ion-content [fullscreen]="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Account</ion-card-title>
        <ion-card-subtitle>User account settings</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-list>

          <ion-item>
            <ion-input label="Name" labelPlacement="floating" type="text"></ion-input>
          </ion-item>

          <ion-item>
            <ion-input label="Email" labelPlacement="floating" type="email"></ion-input>
          </ion-item>

        </ion-list>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-card-header>
        <ion-card-title>General</ion-card-title>
        <ion-card-subtitle>Device notifications settings</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-list>

          <ion-item>
            <ion-input label="Language" labelPlacement="floating" type="text"></ion-input>
          </ion-item>

        </ion-list>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Notifications</ion-card-title>
        <ion-card-subtitle>Device notifications settings</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-list>

          <ion-item>
            <ion-input label="Push Notifications" labelPlacement="floating" type="text"></ion-input>
          </ion-item>

        </ion-list>
      </ion-card-content>
    </ion-card>

    </ion-content>
  `,
  imports: [IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput
  ],
})
export class SettingsTab {
  constructor() {}
}
