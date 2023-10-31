import { Component } from '@angular/core';

@Component({
  selector: 'app-download-app-banner',
  templateUrl: './download-app-banner.component.html',
  styleUrls: ['./download-app-banner.component.scss'],
})
export class DownloadAppBannerComponent {
  public banner: string = 'assets/images/download-snic-banner.jpg';
  public bannerRTL: string = 'assets/images/download-snic-banner-rtl.jpg';
  public bannerAppStore: string = 'assets/images/appstore.png';
  public bannerPlayStore: string = 'assets/images/playstore.png';
  public bannerHuawei: string = 'assets/images/huawei.png';
}
