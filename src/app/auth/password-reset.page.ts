import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { IonButton, IonList, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'password-reset-page',
  template: `
    <h1>Password Reset Page</h1>
    <form [formGroup]="passwordResetForm" (ngSubmit)="onSubmit()">
      <ion-list>
        <ion-item>
          <ion-input label="Email Address" labelPlacement="floating" formControlName="email" type="email" required></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="block" type="submit">Reset Password</ion-button>
      <ion-button expand="block" fill="clear" routerLink="/auth/login">Cancel</ion-button>
    </form>
  `,
  imports: [ReactiveFormsModule, RouterLink, IonButton, IonList, IonItem, IonInput],
})
export class PasswordResetPage {
  private fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public passwordResetForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public onSubmit() {
    if (this.passwordResetForm.valid) {
      console.log(this.passwordResetForm.value);
      this.router.navigate(['/auth/login']);
    } else {
      console.log("Form is invalid");
    }
  }
}
