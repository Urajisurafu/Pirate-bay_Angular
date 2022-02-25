import { Component, Input } from '@angular/core';
import { ship } from '../../../interfaces/interfaces';

@Component({
  selector: 'ship-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() ship: ship | null = null;

  constructor() {}
}
