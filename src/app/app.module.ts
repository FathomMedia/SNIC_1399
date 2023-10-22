import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@NgModule({
  declarations: [AppComponent, HeroSectionComponent, LandingComponent, NavBarComponent, ServicesSectionComponent, ServiceCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
