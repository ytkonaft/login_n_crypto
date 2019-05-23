import { createReducer } from 'store/utils';
import * as types from './types';

export const initUserState = {
  userData: null
};

const userReducer = createReducer(initUserState)({
  [types.SET_USER]: (state, { payload }) => ({
    ...state,
    userData: {
      ...payload
    }
  }),
  [types.DELETE_USER]: () => ({
    ...initUserState
  })
});

export default userReducer;
