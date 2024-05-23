import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";

import { HeaderComponent } from "./common/header/header.component";
import { BodyComponent } from "./pages/body/body.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `
    <app-header/>
    <app-body/>
    <app-footer/>
         `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, BodyComponent],
})
export class AppComponent {
}

