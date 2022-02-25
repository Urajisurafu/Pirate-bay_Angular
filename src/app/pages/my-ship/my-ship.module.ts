import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyShipRoutingModule } from './my-ship-routing.module';
import { MyShipComponent } from './my-ship.component';


@NgModule({
  declarations: [
    MyShipComponent
  ],
  imports: [
    CommonModule,
    MyShipRoutingModule
  ]
})
export class MyShipModule { }
