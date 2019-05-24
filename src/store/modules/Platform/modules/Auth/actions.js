import * as types from './types';

export const toLogin = () => ({
  type: types.AUTHENTICATED
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
