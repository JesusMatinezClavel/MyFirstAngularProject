import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'customForm',
    templateUrl: './customForm.component.html',
    standalone: true,
    imports: [FormsModule]
})
export class CustomFormComponent { }