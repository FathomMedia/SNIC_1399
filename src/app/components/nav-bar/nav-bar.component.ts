import { Component } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public languages: LanguagesService) {}

  public currentLang: string = this.languages.chosenLanguage;
  public navBarLogo: string = 'assets/images/logo-white.png';
  public navGlobe: string = 'assets/icons/globe.svg';
  public navSearch: string = 'assets/icons/search.svg';
  public navMenu: string = 'assets/icons/menu.svg';
  public navClose: string = 'assets/icons/close.svg';

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

  public changeLanguage() {
    this.currentLang == 'en'
      ? (this.currentLang = 'ar')
      : (this.currentLang = 'en');

    this.languages.switchLanguage();
  }
}
