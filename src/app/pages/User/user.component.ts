import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class UserComponent {
  username = 'YoungTech'
  favoriteFramework = ''
}