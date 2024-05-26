import { Component, Input } from "@angular/core";

import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

import { UserComponent } from "../user/user.component";

@Component({
    selector: 'app-formsView',
    templateUrl: 'forms.component.html',
    styleUrl: 'forms.component.css',
    standalone: true,
    imports: [UserComponent]
})
export class FormsViewComponent {

}