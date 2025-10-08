import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'register-page',
  template: `
    <h1>Get Started</h1>
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <ion-list>
        <ion-item>
          <ion-input label="Full Name" labelPlacement="floating" formControlName="name" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Email Address" labelPlacement="floating" formControlName="email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="password" labelPlacement="floating" formControlName="password" type="password" required></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="block" type="submit">Get Started</ion-button>
      <ion-button expand="block" fill="clear" routerLink="/auth/login">Already have account? Login</ion-button>
    </form>
  `,
  imports: [IonInput, IonItem, IonList, IonButton, ReactiveFormsModule, RouterLink],
})
export class RegisterPage {
  public fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  public onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.router.navigate(['/']);
    } else {
      console.log("Form is invalid");
    }
  }
}
