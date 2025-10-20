import { IonInput, IonList, IonItem, IonHeader, IonToolbar, IonContent, IonTitle, IonTextarea } from '@ionic/angular/standalone';
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: "create-book-page",
  template: `
  <ion-header [translucent]="true">
    <ion-toolbar>
      <ion-title>
        Create Book
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content [fullscreen]="true" class="ion-padding">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Create Book</ion-title>
      </ion-toolbar>
    </ion-header>

    <h4>To create a new book, please enter the book information in the form below.</h4>

    <form [formGroup]="bookForm">
      <ion-list>
        <ion-item>
          <ion-input type="text" formControlValue="title" label="Book Title" labelPlacement="floating" errorText="Title is required"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input type="text" formControlValue="genre" label="Genre" labelPlacement="floating"></ion-input>
        </ion-item>
        <ion-item>
          <ion-textarea type="text" formControlValue="description" label="Description" labelPlacement="floating" maxlength="500" [counter]="true" placeholder="Please add a description to help us understand your story's needs"></ion-textarea>
        </ion-item>
      </ion-list>
    </form>


  </ion-content>
  `,
  imports: [IonInput, IonList, IonItem, IonHeader, IonToolbar, IonContent, IonTitle, IonTextarea, FormsModule, ReactiveFormsModule],
})
export class CreateBookPage {
  private book = {
    title: '',
    genre: '',
    description: ''
  };

  private fb = inject(FormBuilder);

  public bookForm = this.fb.group({
    title: ['', [Validators.required]],
    genre: [''],
    description: ['', [Validators.required]],
  });
}
