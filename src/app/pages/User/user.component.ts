import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <div>
      Username: {{ name }}
      -
      Job: {{job}}
    </div>
    `,
    standalone: true,
  })
  export class UserComponent {
    @Input() job = ""
    @Input() name = ""
  }