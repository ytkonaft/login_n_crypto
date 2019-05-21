import { createReducer } from 'store/utils';
import * as types from './types';

const authInitState = {
  isLoaded: false,
  isFetching: false,
  isLogined: false,
  error: false
};

const authReducer = createReducer(authInitState)({
  [types.PAGE_LOADED]: state => ({
    ...state,
    isLoaded: true
  }),
  [types.AUTHENTICATED]: state => ({
    ...state,
    isLogined: true
  }),
  [types.UNAUTHENTICATED]: state => ({
    ...state,
    isLogined: false
  }),
  [types.AUTHENTICATION_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  })
});

export default authReducer;
