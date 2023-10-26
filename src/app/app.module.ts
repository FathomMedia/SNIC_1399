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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PromotionSectionComponent } from './components/promotion-section/promotion-section.component';
import { LatestInsightsComponent } from './components/latest-insights/latest-insights.component';
import { InsightCardComponent } from './components/insight-card/insight-card.component';
import { ArrowLinkComponent } from './components/arrow-link/arrow-link.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

//for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function playerFactory(): any {
  return import('lottie-web');
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
    LatestInsightsComponent,
    InsightCardComponent,
    ArrowLinkComponent,
    FooterSectionComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
