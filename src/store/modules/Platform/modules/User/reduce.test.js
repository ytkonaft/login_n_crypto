import reducer, { initUserState } from './reducers';
import * as types from './types';

describe('USER REDUCER', () => {
  it('SET_USER', () => {
    const action = {
      type: types.SET_USER,
      payload: {
        useName: 'User'
      }
    };

    expect(reducer(initUserState, action)).toEqual({
      ...initUserState,
      userData: {
        ...action.payload
      }
    });
  });

  it('DELETE_USER', () => {
    const stateBefore = {
      userData: {
        name: 'User'
      }
    };

    const action = {
      type: types.DELETE_USER
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...initUserState
    });
  });
});
