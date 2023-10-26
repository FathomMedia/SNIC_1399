import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    let defaultLang = localStorage.getItem('lang') ?? 'en';
    translate.setDefaultLang(defaultLang);
  }

  public chosenLanguage: string =
    localStorage.getItem('lang') ?? this.translate.getDefaultLang();

  public setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.translate.reloadLang(lang);
  }

  switchLanguage(): void {
    if (this.chosenLanguage == 'en') {
      this.chosenLanguage = 'ar';
    } else {
      this.chosenLanguage = 'en';
    }

    this.setLang(this.chosenLanguage);
  }
}
