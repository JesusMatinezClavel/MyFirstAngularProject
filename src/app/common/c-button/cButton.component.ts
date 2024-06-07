import { Component, Input } from "@angular/core";

@Component({
    selector: 'cButton',
    styleUrl: './cButton.component.css',
    templateUrl: './cButton.component.html',
    standalone: true
})
export class CustomButton {
    @Input() title: string = ""
    @Input() disabled: boolean = false;
    @Input() onClick: Function = () => { }

    handleClick() {
        this.onClick()
    }    
}
