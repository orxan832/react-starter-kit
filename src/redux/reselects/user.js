import { createSelector } from "@reduxjs/toolkit";

const isAuth = state => state.user.isAuth;
const me = state => state.user.me;

export const userDataSelector = createSelector(isAuth, me, (isAuth, me) => ({ isAuth, me }));