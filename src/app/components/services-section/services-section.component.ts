import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})

//Service section - holds the cards
export class ServicesSectionComponent {
  public serviceData: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: '../assets/icons/savings-icon.svg',
      title: 'Savings Protection',
      description:
        'Secure your future against losses and damages with investment coverage.',
    },
    {
      icon: '../assets/icons/motor-icon.svg',
      title: 'Motor Protection',
      description:
        'Keep A-B insured when you cover your private vehicle against damage.',
    },
    {
      icon: '../assets/icons/medical-icon.svg',
      title: 'Medical Protection',
      description:
        'Secure peace of mind with proven protection for when you need it most.',
    },
    {
      icon: '../assets/icons/travel-icon.svg',
      title: 'Travel Protection',
      description:
        'Safe travels guaranteed with policies for your special round trips.',
    },
  ];
}
