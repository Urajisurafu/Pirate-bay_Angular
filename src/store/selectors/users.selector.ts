import { createSelector } from '@ngrx/store';
import { UserState } from '../redacers/users.reducer';

const selectUsers = (state: any) => state.listUsers;

export const selectUsersCount = createSelector(
  selectUsers,
  (state: UserState) => state.count
);

export const selectAllUsers = createSelector(
  selectUsers,
  (state: UserState) => state.listUsers
);

export const selectUsersAll = createSelector(selectAllUsers, (users) => users);

export const selectCountSum = createSelector(
  selectUsersCount,
  (usersCount) => usersCount
);
