import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { QuickMotorRenewalComponent } from './components/quick-motor-renewal/quick-motor-renewal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DownloadAppBannerComponent } from './components/download-app-banner/download-app-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    LandingComponent,
    NavBarComponent,
    ServicesSectionComponent,
    ServiceCardComponent,
    QuickMotorRenewalComponent,
    DownloadAppBannerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
