import configureMockStore from 'redux-mock-store';
import { URL_API } from 'app/config';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as types from './types';
import * as ops from './operations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('AUTH OPERATIONS', () => {
  it('AUTH LOGIN', () => {
    fetchMock.getOnce('auth/login', {
      body: {
        email: 'azaza@azaz.com',
        password: 123123
      }
    });

    const expectedActions = [
      {
        type: types.AUTHENTICATED
      }
    ];
    const store = mockStore({});

    return store.dispatch(ops.login()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
