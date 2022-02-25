import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChildComponent } from './child/child.component';
import { StoreModule } from '@ngrx/store';
// import { appReducers } from '../store/reducers/app.reducers';
import { counterReducer } from '../store/redacers/counter.reducer';
import { reducers } from '../store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../store/effects/users.effects';
// import { ArticlesEffects } from '../store/effects/users.effects';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    MainPageComponent,
    ChildComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffects]),
    // StoreModule.forRoot({ count: counterReducer }),
    // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
