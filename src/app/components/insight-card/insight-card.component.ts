import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insight-card',
  templateUrl: './insight-card.component.html',
  styleUrls: ['./insight-card.component.scss'],
})
export class InsightCardComponent {
  @Input() insight: {
    title: string;
    desc: string;
    img: string;
    link: string;
  } = {
    title: '',
    desc: '',
    img: '',
    link: '',
  };
}
