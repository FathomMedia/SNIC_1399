import { Component, OnInit } from '@angular/core';
import { LanguagesService } from './services/languages.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public language: LanguagesService) {}
  ngOnInit(): void {
    AOS.init({ once: true });
  }

  title = 'SNIC_1399';
}
