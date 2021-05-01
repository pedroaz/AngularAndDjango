
// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App Components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import { TopBannerComponent } from './components/top-banner/top-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LandingPageComponent,
    HubPageComponent,
    SideMenuComponent,
    LoginPageComponent,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
