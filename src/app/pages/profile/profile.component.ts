import { Component, Input } from '@angular/core';
import { NgFor } from "@angular/common";

import { CustomCard } from "../../common/c-card/cCard.component";

@Component({
  selector: 'app-profile',
  styleUrl: './profile.component.css',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CustomCard, NgFor]
})
export class ProfileComponent {
  @Input() test: string = 'Card content'
}