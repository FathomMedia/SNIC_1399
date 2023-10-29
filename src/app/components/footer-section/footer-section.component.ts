import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  public footerVideoURL: string =
    'https://res.cloudinary.com/dmcww8ukp/video/upload/v1698323036/SNIC_1399/16_by_10_np7qmi.mp4';
  public navBarLogo: string = 'assets/images/logo-white.png';
  public bestLogo: string = 'assets/images/best.png';
  public appStore: string = 'assets/images/appstore.png';
  public playStore: string = 'assets/images/playstore.png';
  public instagram: string = 'assets/icons/instagram.svg';
  public linkedin: string = 'assets/icons/linkedin.svg';
  public phone: string = 'assets/icons/phone.svg';
  public mail: string = 'assets/icons/mail.svg';
}
