import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SNIC_1399';

  //test translate service
  constructor(translateService: TranslateService) {
    console.log(translateService.data);
  }
}
