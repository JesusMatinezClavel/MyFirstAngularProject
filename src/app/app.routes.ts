import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";

export const routes: Routes = [
    {
        path: '',
        title:'Home Page',
        component: HomeComponent
    },
    {
        path: 'profile',
        title: 'Profile page',
        component: ProfileComponent
    }
];

