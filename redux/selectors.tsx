import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./store";

export const selectUser = (state: RootState) => state.user.user;

export const userSelector = createSelector([selectUser], (user) => {
  return user;
});
