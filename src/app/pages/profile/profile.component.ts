import { Component, Input } from '@angular/core';

import { CustomCard } from "../../common/c-card/cCard.component";

@Component({
  selector: 'app-profile',
  styleUrl: './profile.component.css',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CustomCard]
})
export class ProfileComponent {
  @Input() test: string = 'hola, que tal?'
}