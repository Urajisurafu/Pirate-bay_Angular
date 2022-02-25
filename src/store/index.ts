import * as Users from '../store/redacers/users.reducer';
import * as Articles from '../store/redacers/articles.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  listUsers: Users.UserState;
  articles: Articles.State;
}

export const reducers: ActionReducerMap<State> = {
  // @ts-ignore
  listUsers: Users.usersReducer,
  // @ts-ignore
  articles: Articles.articlesReducer,
};
