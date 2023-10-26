import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  // This is the option that uses the package's AnimationOption interface
  options: AnimationOptions = {
    path: 'https://lottie.host/ca997c8a-a406-4cad-b1f1-09d7bd5f6a43/QCDm9ShpMZ.json',
  };
}
