import { Component, Input } from '@angular/core';
import { ChildComponent } from './child.component';
import { CommentsComponent } from './common/comments/comments.components';
import { HeaderComponent } from "./common/header/header.component";
import { NgOptimizedImage } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `
    <app-header/>
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/profile">Profile</a>
      </nav>
      <router-outlet/>
  `,
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
})
export class AppComponent {

}

