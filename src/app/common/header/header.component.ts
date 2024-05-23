import { Component, Input } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

import { CustomButton } from "../c-button/cButton.component";

@Component({
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CustomButton]
})
export class HeaderComponent {
  @Input() routerLink: string = ""
}