import { Component } from "@angular/core";

@Component({
    selector: 'cText',
    styleUrl: 'cText.component.css',
    templateUrl: 'cText.component.html',
    standalone: true
})
export class CustomTextComponent {
    title: string = ""
}