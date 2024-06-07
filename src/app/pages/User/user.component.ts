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
  userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  handleSubmit() {          
      this.userName = this.userProfileForm.value.name ?? ""
      this.userEmail = this.userProfileForm.value.email ?? ""
      this.userPassword = this.userProfileForm.value.password ?? ""
  }
}