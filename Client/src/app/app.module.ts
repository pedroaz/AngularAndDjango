
// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// App Components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PortalPageComponent } from './pages/portal-page/portal-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';

// PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ReportPoliceComponent } from './components/report-police/report-police.component';
import { ReportDoctorComponent } from './components/report-doctor/report-doctor.component';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import { ReportIdentificationComponent } from './components/report-identification/report-identification.component';
import { ReportPlaceComponent } from './components/report-place/report-place.component';
import { ReportPoliceIdComponent } from './components/report-police-id/report-police-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LandingPageComponent,
    PortalPageComponent,
    LoginPageComponent,
    TopBannerComponent,
    TopMenuComponent,
    ReportPageComponent,
    ReportPoliceComponent,
    ReportDoctorComponent,
    ReportIdentificationComponent,
    ReportPlaceComponent,
    ReportPoliceIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    TabMenuModule,
    CardModule,
    StepsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
