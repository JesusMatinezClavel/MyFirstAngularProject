import { Component } from '@angular/core';

import { CommentsComponent } from '../../common/comments/comments.components';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommentsComponent, RouterOutlet, RouterLink],
})
export class HomeComponent { }