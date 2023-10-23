import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-insights',
  templateUrl: './latest-insights.component.html',
  styleUrls: ['./latest-insights.component.scss'],
})
export class LatestInsightsComponent {
  public insights: {
    title: string;
    desc: string;
    img: string;
    link: string;
  }[] = [
    {
      title: 'Congue velit risus',
      desc: 'Nunc gravida semper tellus neque scelerisque eget tincidunt in.',
      img: 'assets/images/insight1.png',
      link: '#insight',
    },
    {
      title: 'Ut mauris',
      desc: 'Phasellus venenatis massa bibendum posuere dictum tristique.',
      img: 'assets/images/insight2.png',
      link: '#insight',
    },
    {
      title: 'Aliquam tortor nunc',
      desc: 'Leo mollis fermentum praesent in condimentum id velit purus in.',
      img: 'assets/images/insight3.png',
      link: '#insight',
    },
    {
      title: 'Fusce non morbi',
      desc: 'In sed bibendum metus pretium cursus tellus pharetra.',
      img: 'assets/images/insight4.png',
      link: '#insight',
    },
  ];
}
