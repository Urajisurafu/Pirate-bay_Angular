import { Component } from '@angular/core';
import { ships } from '../../constants/constants';

@Component({
  selector: 'app-lonely-island-bay',
  templateUrl: './lonely-island-bay.component.html',
  styleUrls: ['./lonely-island-bay.component.scss'],
})
export class LonelyIslandBayComponent {
  ships = ships;

  shipClick(event: any) {
    const div = event.target.closest('.card');
    const selectedShip = ships.find((ship) => ship.id === Number(div.id));
    console.log(selectedShip);
  }
  constructor() {}
}
