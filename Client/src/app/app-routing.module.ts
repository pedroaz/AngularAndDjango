import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalPageComponent } from './pages/portal-page/portal-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'portal', component: PortalPageComponent },
  { path: 'report', component: ReportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
