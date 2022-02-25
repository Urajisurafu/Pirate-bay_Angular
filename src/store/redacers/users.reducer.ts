import { UserUnion, UserActions } from '../actions/users.actions';
import { User } from '../actions/users.actions';

export interface UserState {
  listUsers: User[];
  count: number;
}

const initialState: UserState = {
  listUsers: [],
  count: 0,
};

export function usersReducer(
  state: UserState = initialState,
  action: UserUnion
) {
  switch (action.type) {
    case UserActions.LoadUser:
      return {
        ...state,
        listUsers: [...state.listUsers, action.payload.user],
        count: state.count + 1,
      };

    case UserActions.LoadUserTest:
      return {
        ...state,
        listUsers: [...state.listUsers, action.payload.user],
        count: state.count + 1,
      };

    case UserActions.DeleteUsers:
      return {
        ...state,
        listUsers: [],
        count: 0,
      };
    default:
      return state;
  }
}
