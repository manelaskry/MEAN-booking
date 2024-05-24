import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MybookingComponent } from './pages/mybooking/mybooking.component';
import { AboutComponent } from './pages/about/about.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './services/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
    { path: 'app-home', component: HomeComponent },
    { path: 'app-signin', component: SigninComponent },
    { path: 'app-rooms', canActivate: [AuthGuard], component: RoomsComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-mybooking', canActivate: [AuthGuard], component: MybookingComponent },
    { path: 'app-about', component: AboutComponent },
    { path: 'app-signup', component: SignupComponent },
    { path: 'app-reservation', canActivate: [AuthGuard], component: ReservationComponent },

];
