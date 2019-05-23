import reducer, { authInitState } from './reducers';
import * as types from './types';

describe('AUTH REDUCER', () => {
  it('PAGE_LOADED', () => {
    const action = {
      type: types.PAGE_LOADED
    };

    expect(reducer(authInitState, action)).toEqual({
      ...authInitState,
      isLoaded: true
    });
  });

  it('AUTHENTICATED', () => {
    const stateBefore = {
      ...authInitState,
      isLogined: false
    };

    const action = {
      type: types.AUTHENTICATED
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLogined: true
    });
  });

  it('UNAUTHENTICATED', () => {
    const action = {
      type: types.UNAUTHENTICATED
    };

    const stateBefore = {
      ...authInitState,
      isLogined: true
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...authInitState,
      isLogined: false
    });
  });

  it('AUTHENTICATION_ERROR', () => {
    const action = {
      type: types.AUTHENTICATION_ERROR,
      payload: '500 server error'
    };

    expect(reducer(authInitState, action)).toEqual({
      ...authInitState,
      isLogined: false,
      error: {
        message: action.payload
      }
    });
  });
});
