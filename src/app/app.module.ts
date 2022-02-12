import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HeaderComponent } from './header/header.component';
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
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    MainPageComponent,
    LonelyIslandBayComponent,
    MyShipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
