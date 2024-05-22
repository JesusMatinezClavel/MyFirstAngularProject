import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    styleUrl: './header.component.css',
    template: `
    <div class="header-view">
    </div>
    `,
    standalone: true,
    imports: [RouterOutlet, RouterLink]
})
export class HeaderComponent { }