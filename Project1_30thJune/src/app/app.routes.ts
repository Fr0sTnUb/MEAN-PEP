import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NavBar } from './shared/nav-bar/nav-bar';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path:"",
        component: Home
    },
    {
        path:"nav-bar",
        component: NavBar
    },
    {
        path:"about",
        component: About
    },
    {
        path:"contact",
        component: Contact
    }
];
