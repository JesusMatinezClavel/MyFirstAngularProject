import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
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
  template: `
  @for(user of users; track user.id){
    <p>{{user.name}}</p>
  }
  `,
  standalone: true,
  imports: [UserComponent],
})
export class AppComponent {
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }]
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]
}