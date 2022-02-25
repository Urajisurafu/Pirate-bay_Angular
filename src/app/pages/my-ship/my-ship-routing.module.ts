import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyShipComponent } from './my-ship.component';

const routes: Routes = [{ path: '', component: MyShipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyShipRoutingModule { }
