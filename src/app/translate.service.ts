//Translation Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  data: any = {};

  constructor(private http: HttpClient) {}

  //loading process over the HTTP
  use(lang: string): Promise<{}> {
    return new Promise((resolve) => {
      const langPath = `assets/locales/${lang || 'en'}.json`;

      // console.log(
      //   '🚀 ~ file: translate.service.ts:16 ~ TranslateService ~ returnnewPromise ~ langPath:',
      //   langPath
      // );
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
}
