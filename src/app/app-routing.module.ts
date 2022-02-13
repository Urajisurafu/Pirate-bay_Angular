import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LonelyIslandBayComponent } from './lonely-island-bay/lonely-island-bay.component';
import { MyShipComponent } from './my-ship/my-ship.component';

const routes: Routes = [
  {
    path: 'authorization',
    component: AuthorizationComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'lonely-island-bay',
        component: LonelyIslandBayComponent,
      },
      {
        path: 'my-ship',
        component: MyShipComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
