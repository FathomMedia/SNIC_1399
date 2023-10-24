import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-link',
  templateUrl: './arrow-link.component.html',
  styleUrls: ['./arrow-link.component.scss'],
})
export class ArrowLinkComponent {
  public arrowSVG: string = 'assets/icons/arrow-right.svg';

  @Input() href!: string;
  @Input() parentGroup: boolean = false;
}
