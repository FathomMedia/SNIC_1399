import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesService } from 'src/app/services/languages.service';

type NavLink = {
  name: string;
  href?: string;
  isActive?: boolean;
  logo?: string;
  subLinks?: NavLink[];
};

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements AfterViewInit {
  constructor(
    public languages: LanguagesService,
    public route: Router,
    public activeRoute: ActivatedRoute
  ) {}

  @ViewChildren('subLink') subLinksRef:
    | QueryList<ElementRef<HTMLElement>>
    | undefined;
  @ViewChildren('subLinkWithBG') subLinkWithBGRef:
    | QueryList<ElementRef<HTMLElement>>
    | undefined;
  @ViewChildren('link') linksRef:
    | QueryList<ElementRef<HTMLElement>>
    | undefined;
  @ViewChildren('indicator') subLinksIndicatorRef:
    | QueryList<ElementRef<HTMLElement>>
    | undefined;

  @ViewChild('nav') navRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('lightLogo') lightLogoRef: ElementRef<HTMLElement> | undefined;
  @ViewChild('darkLogo') darkLogoRef: ElementRef<HTMLElement> | undefined;

  public currentLang: string = this.languages.chosenLanguage;
  public navBarLogo: string = 'assets/images/logo-white.png';
  public navBarLogoDark: string = 'assets/images/logo-dark.png';
  public navGlobe: string = 'assets/icons/globe.svg';
  public navSearch: string = 'assets/icons/search.svg';
  public navMenu: string = 'assets/icons/menu.svg';
  public navClose: string = 'assets/icons/close.svg';
  public arrowDown: string = 'assets/icons/arrow-down.svg';
  public isMenuOverlayOpen: boolean = false;

  // public isRootPage = this.activeRoute.pathFromRoot === '/';
  public isRootPage = this.route.url === '/';

  public hoveredIndex: number | null = null;
  public hoveredSubLinkIndex: number | null = null;

  ngAfterViewInit(): void {
    if (this.isRootPage) {
      window.addEventListener('scroll', () => {
        const navElement = this.navRef?.nativeElement;
        const lightLogo = this.lightLogoRef?.nativeElement;
        const darkLogo = this.darkLogoRef?.nativeElement;

        if (navElement && window.scrollY > 200) {
          navElement.classList.add('!bg-[#F5F5F5]');
          navElement.classList.add('!shadow-lg');
          const firstElement = navElement?.querySelector(':first-child');
          if (firstElement) {
            firstElement.classList.add('!text-primary');
          }
          lightLogo?.classList.add('hidden');
          darkLogo?.classList.remove('hidden');
        } else {
          navElement?.classList.remove('!bg-[#F5F5F5]');
          navElement?.classList.remove('!shadow-lg');
          const firstElement = navElement?.querySelector(':first-child');
          if (firstElement) {
            firstElement.classList.remove('!text-primary');
          }
          lightLogo?.classList.remove('hidden');
          darkLogo?.classList.add('hidden');
        }
      });
    }
  }

  public pagesLinks: NavLink[] = [
    {
      name: 'Home',
      href: '/',
      isActive: false,
    },
    {
      name: 'Individual',

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
          logo: 'assets/icons/cash.svg',
        },
      ],
    },
    {
      name: 'Corporate',
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

  public onMouseHover(index: number) {
    this.hoveredIndex = index;

    let tempLink = this.linksRef?.toArray()[index];
    let tempIndicator = this.subLinksIndicatorRef?.toArray()[index];

    // move the triangle indentor under the hovered link
    if (tempLink && tempIndicator) {
      tempIndicator.nativeElement.style.setProperty(
        'left',
        tempLink.nativeElement.offsetLeft + 50 + 'px'
      );
    }
  }

  public onMouseExitHover() {
    this.hoveredIndex = null;
  }
}
