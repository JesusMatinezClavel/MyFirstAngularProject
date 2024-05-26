import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

import { CustomButton } from "../../common/c-button/cButton.component";
import { CustomTextComponent } from "../../common/c-text/cText.component"


@Component({
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [FormsModule, CustomButton, ReactiveFormsModule,CustomTextComponent]
})
export class UserComponent {
  username = 'YoungTech'
  favoriteFramework = ''
  handleSubmit() {
    alert(
      this.userProfileForm.value.name + ' | ' + this.userProfileForm.value.email + ' | ' + this.userProfileForm.value.password
    );
  }
  userProfileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
})  
}