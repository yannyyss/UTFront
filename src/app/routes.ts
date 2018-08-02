import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'map', component: MapComponent },
    { path: 'profiles', component: ProfilesComponent }
];
