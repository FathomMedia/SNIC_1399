import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { TranslatePipe } from './services/translation-service/translate.pipe';
import { TranslateService } from './services/translation-service/translate.service';
import { HttpClientModule } from '@angular/common/http';
import { PromotionSectionComponent } from './components/promotion-section/promotion-section.component';
import { LatestInsightsComponent } from './components/latest-insights/latest-insights.component';
import { InsightCardComponent } from './components/insight-card/insight-card.component';
import { ArrowLinkComponent } from './components/arrow-link/arrow-link.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

//register translate service provider
export function setupTranslateServiceFactory(
  service: TranslateService
): Function {
  return () => service.use('en');
}

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
    PromotionSectionComponent,
    TranslatePipe,
    LatestInsightsComponent,
    InsightCardComponent,
    ArrowLinkComponent,
    FooterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory, //triggers to load default locale file before anything else
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
