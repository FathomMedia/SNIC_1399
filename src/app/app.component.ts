import { Component } from '@angular/core';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public language: LanguagesService) {}

  title = 'SNIC_1399';
}
