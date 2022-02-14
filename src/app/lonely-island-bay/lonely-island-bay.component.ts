import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../services/ships.service';
import { ship } from '../../interfaces/interfaces';

@Component({
  selector: 'app-lonely-island-bay',
  templateUrl: './lonely-island-bay.component.html',
  styleUrls: ['./lonely-island-bay.component.scss'],
  providers: [ShipsService],
})
export class LonelyIslandBayComponent implements OnInit {
  ships: ship[] = [];

  constructor(public httpService: ShipsService) {}

  ngOnInit() {
    this.httpService
      .getShips()
      .subscribe((data: ship[]) => (this.ships = data));
  }

  shipClick(event: any) {
    const div = event.target.closest('.card');
    const selectedShip = this.ships.find((ship) => ship.id === Number(div.id));
    console.log(selectedShip);
  }
}
