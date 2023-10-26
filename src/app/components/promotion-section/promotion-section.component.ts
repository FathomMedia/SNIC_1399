import { Component } from '@angular/core';

@Component({
  selector: 'app-promotion-section',
  templateUrl: './promotion-section.component.html',
  styleUrls: ['./promotion-section.component.scss'],
})
export class PromotionSectionComponent {
  public offer1: string = 'assets/images/offer1.jpg';
  public offer2: string = 'assets/images/offer2.jpg';
  public offer3: string = 'assets/images/offer3.jpg';
}
