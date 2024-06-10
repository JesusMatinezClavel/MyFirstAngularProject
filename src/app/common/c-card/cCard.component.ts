import { Component, Input } from "@angular/core";

@Component({
    selector: 'cCard',
    styleUrl: './cCard.component.css',
    templateUrl: './cCard.component.html',
    standalone: true
})
export class CustomCard {
    @Input() title: string = ''
}
