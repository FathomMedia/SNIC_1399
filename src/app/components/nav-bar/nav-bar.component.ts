import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translation-service/translate.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public translateService: TranslateService) {}

  public navBarLogo: string = 'assets/images/logo-white.png';
  public navGlobe: string = 'assets/icons/globe.svg';
  public navSearch: string = 'assets/icons/search.svg';
  public navMenu: string = 'assets/icons/menu.svg';
  public navClose: string = 'assets/icons/close.svg';
  public currentLanguage: string = this.translateService.getLanguage();

  public pagesLinks: {
    name: string;
    href: string;
    isActive: boolean;
  }[] = [
    {
      name: 'Home',
      href: '/',
      isActive: false,
    },
    {
      name: 'Individual',
      href: '/individual',
      isActive: false,
    },
    {
      name: 'Corporate',
      href: '/corporate',
      isActive: false,
    },
    {
      name: 'Quick Renewal',
      href: '/quick-renewal',
      isActive: false,
    },
    {
      name: 'Claims',
      href: '/claims',
      isActive: false,
    },
    {
      name: 'About Us',
      href: '/about-us',
      isActive: false,
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
      isActive: false,
    },
  ];

  public isMenuOverlayOpen: boolean = false;

  /**
   * toggleMenu
   */
  public toggleMenu() {
    this.isMenuOverlayOpen = !this.isMenuOverlayOpen;
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }

  public toggleLanguage() {
    this.currentLanguage = this.currentLanguage == 'en' ? 'ar' : 'en';
    this.setLang(this.currentLanguage);
  }
}
