import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { FormsViewComponent } from "./pages/forms/forms.component";

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent
    },
    {
        path: 'profile',
        title: 'Profile page',
        component: ProfileComponent
    },
    {
        path: 'forms',
        title: 'Forms page',
        component: FormsViewComponent
    }
];

