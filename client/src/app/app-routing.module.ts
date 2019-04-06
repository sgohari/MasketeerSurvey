// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MySurveysComponent } from './pages/mysurveys/mysurveys.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}, canActivate:[AuthGuard]},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  {path: 'mysurveys', component: MySurveysComponent, data: {title: 'My Surveys'}, canActivate: [AuthGuard]},
  {path: 'reports', component: ReportsComponent, data: {title: 'Survey Result Reports'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
