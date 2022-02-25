import { Component, OnChanges, OnInit } from '@angular/core';
import { ShipsService } from '../../services/ships.service';
import { ship } from '../../../interfaces/interfaces';
import {
  delayWhen,
  distinctUntilChanged,
  filter,
  find,
  from,
  timer,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-lonely-island-bay',
  templateUrl: './lonely-island-bay.component.html',
  styleUrls: ['./lonely-island-bay.component.scss'],
  providers: [ShipsService],
})
export class LonelyIslandBayComponent implements OnInit {
  ships: ship[] = [];
  public searchInput: string = '';
  public searchResult: ship[] = [];

  constructor(public httpService: ShipsService) {}

  ngOnInit() {
    this.httpService.getShips().subscribe((data: ship[]) => {
      this.ships = data;
      this.searchResult = data;
    });
  }

  getSelectedShip(value: string) {
    console.log(value);
  }

  filterByFrigate(event: any) {
    if (event.target.value === '') {
      this.searchResult = this.ships;
    }

    const delayForFiveSeconds = () => timer(500);

    from(this.ships)
      .pipe(
        filter((data) => {
          return data.frigate
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        }),
        // delayWhen(delayForFiveSeconds),
        toArray(),
        distinctUntilChanged()
      )
      .subscribe((data) => (this.searchResult = data));
  }

  addAquaticCreature() {
    this.searchResult.push({
      id: 8,
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Месть королевы Анны',
      frigateClass: 5,
      guns: 60,
      frame: 450,
      team: 140,
      hold: 3200,
      speed: 8,
      maneuverability: 4,
    });
  }
}

// this.httpService
//   .getInfoWithSubjects()
//   .subscribe((messages) => console.log(messages));

// this.httpService
//   .getShipsAjax()
//   .subscribe((data: ship[]) => (this.ships = data));
