import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LonelyIslandBayComponent } from './lonely-island-bay.component';

const routes: Routes = [{ path: '', component: LonelyIslandBayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LonelyIslandBayRoutingModule { }
