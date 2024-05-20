import { Component } from "@angular/core";

@Component({
    selector: 'comments',
    template: `
    <ul>
        <li>First step of the list</li>
        <li>List almost filled</li>
        <li>Finished list for good</li>
    </ul>
    `,
    standalone: true
})
export class CommentsComponent { }