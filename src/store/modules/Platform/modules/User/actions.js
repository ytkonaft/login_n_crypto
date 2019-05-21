import * as types from './types';

export const setUser = payload => ({
  type: types.SET_USER,
  payload
});

export const removeUser = () => ({
  type: types.DELETE_USER
});
