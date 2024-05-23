import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";

import { ChildComponent } from './child.component';
import { CommentsComponent } from './common/comments/comments.components';
import { HeaderComponent } from "./common/header/header.component";
import { BodyComponent } from "./pages/body/body.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `
    <app-header/>
    <app-body/>
    <app-footer/>
        <!-- <div [contentEditable]='isEditable'></div>
  @for(user of users; track user.id){
    <p (mouseover)='onMouseOver()' (mouseout)='onMouseBlur()'>{{message}} {{user.name}}</p>
  }
  <div><img alt="photo" [src]="imageURL"></div>
  <app-user job='angular developer' name='xuso'/>
  <app-child (addItemEvent)='addItem($event)'/>
  <p>{{message}}</p>
  @defer{
    <comments/>
  } @placeholder {
    <p>List about to show up</p>
  } @loading {
    <p>Loading list...</p>
  }
  <div class="imgDiv">
    <img [ngSrc]='logoUrl' [alt]='logoAlt' fill/>
  </div>  -->
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, BodyComponent],
})
export class AppComponent {
  //     operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }]
  //   users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]
  //   isEditable = true
  //   imageURL = 'https://ethic.es/wp-content/uploads/2023/03/imagen.jpg'
  //   message = ""
  //   onMouseOver() {
  //     this.message = 'way to go!'
  //   }
  //   onMouseBlur() {
  //     this.message = ""
  //   }
  //   addItem(item: string) {
  //     this.message = item
  //   }
  //   logoUrl = './favicon.ico'
  //   logoAlt = 'Angular logo'
}

