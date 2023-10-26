import { Component } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  constructor(private language: LanguagesService) {}
  public heroVideo: string = 'assets/videos/hero-video.mp4';
}
