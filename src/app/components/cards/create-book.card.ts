import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: "create-book-card",
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Create Book</ion-card-title>
        <ion-card-subtitle>You do not have any books created. Please click below to get started with your first book.</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <ion-button color="primary" routerLink="/tabs/books/create-book">Create Book</ion-button>
      </ion-card-content>
    </ion-card>
  `,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, RouterLink],
})
export class CreateBookCard {
  constructor() {}
}
