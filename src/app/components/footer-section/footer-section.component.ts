import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent {
  public bgImage: string = 'assets/images/footer-bg.png';
  public navBarLogo: string = 'assets/images/logo-white.png';
  public bestLogo: string = 'assets/images/best.png';
  public appStore: string = 'assets/images/appstore.png';
  public playStore: string = 'assets/images/playstore.png';
  public instagram: string = 'assets/icons/instagram.svg';
  public linkedin: string = 'assets/icons/linkedin.svg';
}
