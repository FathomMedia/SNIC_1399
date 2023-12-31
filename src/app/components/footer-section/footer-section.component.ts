import { Component } from '@angular/core';

type FooterLinks = {
  name: string;
  href?: string;
  hideMobile?: boolean;
  logo?: string;
  subLinks?: FooterLinks[];
};

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  // the video available in the bellow path
  public localFooterVideoURL: string = 'assets/videos/footer-video.mp4';

  // change this url to the url where you host your video or use the local version
  public footerVideoURL: string = this.localFooterVideoURL;
  //   'https://res.cloudinary.com/dmcww8ukp/video/upload/v1698926117/SNIC_1399/footer-video_f1ps1b.mp4';

  public navBarLogo: string = 'assets/images/logo-white.png';
  public bestLogo: string = 'assets/images/best.png';
  public appStore: string = 'assets/images/appstore.png';
  public playStore: string = 'assets/images/playstore.png';
  public huawei: string = 'assets/images/huawei.png';
  public instagram: string = 'assets/icons/instagram.svg';
  public linkedin: string = 'assets/icons/linkedin.svg';
  public phone: string = 'assets/icons/phone.svg';
  public mail: string = 'assets/icons/mail.svg';

  public fLinks: FooterLinks[] = [
    {
      name: 'Individual',
      href: '#',
      hideMobile: true,
      subLinks: [
        {
          name: 'Motor',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Medical',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Travel',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Saving & Protection',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Home',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Marine',
          href: '#',
          hideMobile: true,
        },
      ],
    },
    {
      name: 'Corporate',
      href: '#',
      hideMobile: true,
      subLinks: [
        {
          name: 'Motor',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Group Medical',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Group Life',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Travel',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Marine',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Property ',
          href: '#',
          hideMobile: true,
        },
      ],
    },
    {
      name: 'About Us',
      href: '#',
      hideMobile: false,
      subLinks: [
        {
          name: 'Profile',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Board of Directors',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Executive Management',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Financial Reports',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Careers',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'News ',
          href: '#',
          hideMobile: true,
        },
      ],
    },
    {
      name: 'Quick Renewal',
      href: '#',
      hideMobile: false,
      subLinks: [
        {
          name: 'Motor Insurance Renewal',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Home Renewal',
          href: '#',
          hideMobile: true,
        },
      ],
    },
    {
      name: 'Claims',
      href: '#',
      hideMobile: false,
      subLinks: [
        {
          name: 'Motor Claim',
          href: '#',
          hideMobile: true,
        },
        {
          name: 'Medical Claim',
          href: '#',
          hideMobile: true,
        },
      ],
    },

    {
      name: 'Contact Us',
      href: '#',
      hideMobile: false,
      subLinks: [
        {
          name: 'Complaints',
          href: '#',
          hideMobile: false,
        },
        {
          name: 'Location',
          href: '#',
          hideMobile: false,
        },
        {
          name: '+973 17563377',
          href: 'tel:+97317563377',
          hideMobile: false,
          logo: this.phone,
        },
        {
          name: 'snicbh@snic.com.bh',
          href: 'mailto:snicbh@snic.com.bh',
          hideMobile: false,
          logo: this.mail,
        },
        {
          name: 'Instagram',
          href: '#',
          hideMobile: false,
          logo: this.instagram,
        },
        {
          name: 'LinkedIn',
          href: '#',
          hideMobile: false,
          logo: this.linkedin,
        },
      ],
    },
  ];
}
