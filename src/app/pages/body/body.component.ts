import { Component, Input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class BodyComponent { }