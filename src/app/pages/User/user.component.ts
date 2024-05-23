import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CustomButton } from "../../common/c-button/cButton.component";

@Component({
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [FormsModule, CustomButton]
})
export class UserComponent {
  username = 'YoungTech'
  favoriteFramework = ''
  showFramework() {
    alert(this.favoriteFramework)
  }
}