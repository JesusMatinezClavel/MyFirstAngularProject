import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'myAngular';
// }

// @Component({
//   selector: 'app-root',
//   template: `Hello {{city}}, {{1+1}}`,
//   styles: `:host {color:red}`,
//   standalone: true
// })
// export class AppComponent {
//   city = 'Valencia'
// }

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

// @Component({
//   selector: 'app-root',
//   template: `
//   @if (isServerUp){<h1>SERVER IS RUNNING</h1>}
//   @else{<h1>SERVER IS DEAD</h1>}`,
//   standalone: true,
//   imports: [UserComponent],
// })
// export class AppComponent {
//   isServerUp = true
// }
@Component({
  selector: 'app-root',
  styles: [
    'img{height: 20em;}'
  ],
  template: `
  <div [contentEditable]='isEditable'></div>
  @for(user of users; track user.id){
    <p (mouseover)='onMouseOver()' (mouseout)='onMouseBlur()'>{{message}} {{user.name}}</p>
  }
  <div><img alt="photo" [src]="imageURL"></div>
  <app-user job='angular developer' name='xuso'/>
  <app-child (addItemEvent)='addItem($event)'/>
  <p>{{message}}</p>
  `,
  standalone: true,
  imports: [UserComponent, ChildComponent],
})
export class AppComponent {
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }]
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]
  isEditable = true
  imageURL = 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg'
  message = ""
  onMouseOver() {
    this.message = 'way to go!'
  }
  onMouseBlur() {
    this.message = ""
  }
  addItem(item: string) {
    this.message = item
  }
}

