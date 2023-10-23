//Translation Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  data: any = {};
  SUPPORTED_LANGUAGES: string[] = ['en', 'ar'];

  constructor(private http: HttpClient) {}

  //loading process over the HTTP
  use(lang: string): Promise<{}> {
    return new Promise((resolve) => {
      const langPath = `assets/locales/${lang || 'en'}.json`;
      this.http.get(langPath).subscribe({
        next: (response) => {
          this.data = response || {};
          resolve(this.data);
        },
        error: () => {
          this.data = {};
          resolve(this.data);
        },
        complete: () => console.info('Translation complete'),
      });
    });
  }

  //get user's preferred/browser language
  getLanguage() {
    const deviceLanguage =
      navigator.language?.substring(0, 2) ||
      window?.navigator.language?.substring(0, 2);

    return this.SUPPORTED_LANGUAGES.includes(deviceLanguage)
      ? deviceLanguage
      : 'en';
  }
}
