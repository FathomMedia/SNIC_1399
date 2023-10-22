import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent {
  public serviceData: {
    title: string;
    description: string;
  }[] = [
    { title: 'hi', description: 'hello' },
    { title: 'hi2', description: 'hello' },
    { title: 'hi3', description: 'hello' },
  ];
}
