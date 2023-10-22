import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})

//Individual service cards
export class ServiceCardComponent {
  @Input() serviceIcon = '';
  @Input() serviceTitle = '';
  @Input() serviceDescription = '';
  @Input() serviceLink = '';
}
