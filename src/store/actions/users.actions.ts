import { Action } from '@ngrx/store';

export enum UserActions {
  LoadUser = '[User Page] LoadUser',
  LoadUserTest = '[User Page] LoadUserTest',
  DeleteUsers = '[User Page] DeleteUsers',
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export class LoadUser implements Action {
  readonly type = UserActions.LoadUser;

  constructor(public payload: { user: User }) {}
}

export class LoadUserTest implements Action {
  readonly type = UserActions.LoadUserTest;

  constructor(public payload: { user: User }) {}
}

export class DeleteUsers implements Action {
  readonly type = UserActions.DeleteUsers;
}

export type UserUnion = LoadUser | DeleteUsers | LoadUserTest;
