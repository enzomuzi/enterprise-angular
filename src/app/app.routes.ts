import { Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { AgreementComponent } from './components/agreement/agreement.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'agreement', component: AgreementComponent },
];
