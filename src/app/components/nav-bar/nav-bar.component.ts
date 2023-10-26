import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesService } from 'src/app/services/languages.service';

type NavLink = {
  name: string;
  href: string;
  isActive?: boolean;
  logo?: string;
  subLinks?: NavLink[];
};

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public languages: LanguagesService, public route: Router) {}

  public currentLang: string = this.languages.chosenLanguage;
  public navBarLogo: string = 'assets/images/logo-white.png';
  public navBarLogoDark: string = 'assets/images/logo-dark.png';
  public navGlobe: string = 'assets/icons/globe.svg';
  public navSearch: string = 'assets/icons/search.svg';
  public navMenu: string = 'assets/icons/menu.svg';
  public navClose: string = 'assets/icons/close.svg';

  public isRootPage = this.route.url === '/';

  public pagesLinks: NavLink[] = [
    {
      name: 'Home',
      href: '/',
      isActive: false,
    },
    {
      name: 'Individual',
      href: '/individual',
      isActive: false,
      subLinks: [
        {
          name: 'Motor',
          href: '#',
          logo: 'assets/icons/car.svg',
          subLinks: [
            {
              name: 'Sub Motor',
              href: '#',
            },
            {
              name: 'Sub Motor finance',
              href: '#',
            },
          ],
        },
        {
          name: 'Travel',
          href: '#',
          logo: 'assets/icons/plane.svg',
          subLinks: [
            {
              name: 'Sub Travel',
              href: '#',
            },
            {
              name: 'Sub Travel finance',
              href: '#',
            },
          ],
        },
        {
          name: 'Medical',
          href: '#',
          logo: 'assets/icons/health.svg',
        },
        {
          name: 'Home',
          href: '#',
          logo: 'assets/icons/house.svg',
        },
        {
          name: 'Marine',
          href: '#',
          logo: 'assets/icons/boat.svg',
        },
        {
          name: 'Saving Ghady',
          href: '#',
          logo: 'assets/icons/cash.svg',
        },
      ],
    },
    {
      name: 'Corporate',
      href: '/corporate',
      isActive: false,
      subLinks: [
        {
          name: 'Motor',
          href: '#',
          logo: 'assets/icons/car.svg',
        },
        {
          name: 'Group Medical',
          href: '#',
          logo: 'assets/icons/health.svg',
        },
        {
          name: 'Group Life',
          href: '#',
          logo: 'assets/icons/shield.svg',
        },
        {
          name: 'Travel',
          href: '#',
          logo: 'assets/icons/plane.svg',
        },
        {
          name: 'Marine',
          href: '#',
          logo: 'assets/icons/boat.svg',
          subLinks: [
            {
              name: 'Sub Marine',
              href: '#',
            },
            {
              name: 'Sub Marine finance',
              href: '#',
            },
          ],
        },
        {
          name: 'Property',
          href: '#',
          logo: 'assets/icons/building.svg',
        },
      ],
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
