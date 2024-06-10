import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";

import { CustomButton } from "../../common/c-button/cButton.component";
import { CustomTextComponent } from "../../common/c-text/cText.component"


@Component({
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [FormsModule, CustomButton, ReactiveFormsModule, CustomTextComponent]
})
export class UserComponent {
  userName = ""
  userEmail = ""
  userPassword = ""
  favoriteFramework = ''
  errorMsg = ''
  userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  logFormErrors() {
    let stopCheck = false
    Object.keys(this.userProfileForm.controls).forEach(key => {
      const controlErrors = this.userProfileForm.get(key)?.errors;
      if (controlErrors && !stopCheck) {
        Object.keys(controlErrors).forEach(errorKey => {
          console.log(errorKey);
          if (errorKey === 'email') {
            this.errorMsg = `Invalid email format`
            stopCheck = true
            return
          } else if (key === 'name' || key === 'password' || key === 'email') {
            this.errorMsg = `${key} required`;
            stopCheck = true;
            return;
          }
        })
      }
    });
  }
  handleSubmit() {
    this.logFormErrors()
    if (this.userProfileForm.valid) {
      this.userName = this.userProfileForm.value.name ?? "";
      this.userPassword = this.userProfileForm.value.password ?? "";
      this.userEmail = this.userProfileForm.value.email ?? ""

      this.errorMsg = `User registered!`
    }
  }
}