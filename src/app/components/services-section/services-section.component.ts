import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})

//Service section - holds the cards
export class ServicesSectionComponent {
  public delay = 300;

  public serviceData: {
    icon: string;
    title: string;
    description: string;
    link: string;
  }[] = [
    {
      icon: 'assets/icons/cash.svg',
      title: 'Savings Protection',
      description:
        'Secure your future against losses and damages with investment coverage.',
      link: '#services',
    },
    {
      icon: 'assets/icons/car.svg',
      title: 'Motor Protection',
      description:
        'Keep A-B insured when you cover your private vehicle against damage.',
      link: '#services',
    },
    {
      icon: 'assets/icons/health.svg',
      title: 'Medical Protection',
      description:
        'Secure peace of mind with proven protection for when you need it most.',
      link: '#services',
    },
    {
      icon: 'assets/icons/plane.svg',
      title: 'Travel Protection',
      description:
        'Safe travels guaranteed with policies for your special round trips.',
      link: '#services',
    },
  ];
}
