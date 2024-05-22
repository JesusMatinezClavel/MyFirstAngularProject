import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  styles:`
  .home{height:20em; width:20em; background-color:red; position: fixed;display:flex;justify-content: center;align-items:center;}
  `,
  template: `
    <div class="home">Home Page</div>
  `,
  standalone: true,
})
export class HomeComponent {}