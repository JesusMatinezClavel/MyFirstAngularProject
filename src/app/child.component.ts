import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    styles: '.btn{padding:1em;}',
    template: `
        <button class='btn' (click)='addItem()'> ADD ITEM </button>
    `,
    standalone: true
})
export class ChildComponent {
    @Output() addItemEvent = new EventEmitter<string>()
    addItem(){
        this.addItemEvent.emit('Hi! How Are u?')
    }
}