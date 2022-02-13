import { Component } from '@angular/core';
import { ship } from '../interfaces';

@Component({
  selector: 'app-lonely-island-bay',
  templateUrl: './lonely-island-bay.component.html',
  styleUrls: ['./lonely-island-bay.component.scss'],
})
export class LonelyIslandBayComponent {
  ships: ship[] = [
    {
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Приключение',
      class: 3,
      guns: 15,
      frame: 180,
      team: 60,
      hold: 1400,
      speed: 14.5,
      maneuverability: 9,
    },
    {
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Месть королевы Анны',
      class: 5,
      guns: 60,
      frame: 450,
      team: 140,
      hold: 3200,
      speed: 8,
      maneuverability: 4,
    },
    {
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Уида',
      class: 4,
      guns: 40,
      frame: 380,
      team: 80,
      hold: 2500,
      speed: 8,
      maneuverability: 5,
    },
    {
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Уида',
      class: 4,
      guns: 40,
      frame: 380,
      team: 80,
      hold: 2500,
      speed: 8,
      maneuverability: 5,
    },
    {
      img: 'https://cdnb.artstation.com/p/assets/images/images/000/845/593/large/nikolay-razuev-ship3-s3.jpg?1434422939',
      frigate: 'Уида',
      class: 4,
      guns: 40,
      frame: 380,
      team: 80,
      hold: 2500,
      speed: 8,
      maneuverability: 5,
    },
  ];
  constructor() {}
}
