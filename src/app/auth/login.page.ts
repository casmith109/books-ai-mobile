import { Component, inject } from "@angular/core";
import { IonButton, IonList, IonItem, IonInput } from '@ionic/angular/standalone';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <h1>Login Page</h1>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <ion-list>
        <ion-item>
          <ion-input label="Email Address" labelPlacement="floating" formControlName="email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Password" labelPlacement="floating" formControlName="password" type="password" required></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="block" type="submit">Login</ion-button>
      <ion-button expand="block" fill="clear" routerLink="/auth/register">Don't have an account? Register</ion-button>
      <ion-button expand="block" fill="clear" routerLink="/auth/password-reset">Forgot Password? Reset</ion-button>
    </form>
  `,
  imports: [RouterLink, IonButton, IonList, IonItem, IonInput, ReactiveFormsModule],
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  public onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/']);
    } else {
      console.log("Form is invalid");
    }
  }
}
