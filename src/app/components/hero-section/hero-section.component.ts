import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  constructor() {}
  // the video available in the bellow path
  public localHeroVideoURL: string = 'assets/videos/hero-video.mp4';

  // change this url to the url where you host your video or use the local version
  public heroVideoURL: string = this.localHeroVideoURL;
  // 'https://res.cloudinary.com/dmcww8ukp/video/upload/v1698312536/SNIC_1399/hero-video_uubqzn.mp4';
}
