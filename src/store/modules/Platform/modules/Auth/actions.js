import * as types from './types';

export const toLogin = payload => ({
  type: types.AUTHENTICATED,
  payload
});

export const showError = payload => ({
  type: types.AUTHENTICATION_ERROR,
  payload
});

export const toLogout = () => ({
  type: types.UNAUTHENTICATED
});

export const loadPage = () => ({
  type: types.PAGE_LOADED
});
