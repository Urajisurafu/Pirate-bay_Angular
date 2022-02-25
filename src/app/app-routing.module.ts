import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainPageComponent } from './main-page/main-page.component';

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
        loadChildren: () =>
          import('./pages/lonely-island-bay/lonely-island-bay.module').then(
            (m) => m.LonelyIslandBayModule
          ),
      },
      {
        path: 'my-ship',
        loadChildren: () =>
          import('./pages/my-ship/my-ship.module').then((m) => m.MyShipModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
