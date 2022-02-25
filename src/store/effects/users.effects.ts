import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  DeleteUsers,
  LoadUser,
  LoadUserTest,
  UserActions,
} from '../actions/users.actions';
import { mergeMap, of, tap } from 'rxjs';
import { ArticlesService } from '../users.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActions.LoadUser),
    mergeMap(() =>
      this.articlesService.getArticles().pipe(
        map(
          (x) =>
            new LoadUserTest({
              user: { id: 2, name: 'Name2', email: 'E-mail2' },
            })
        ),
        catchError(() => of(new DeleteUsers()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
