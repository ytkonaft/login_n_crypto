import configureMockStore from 'redux-mock-store';
import { URL_API } from 'app/config';
import { SET_USER } from 'store/modules/Platform/modules/User/types';
import thunk from 'redux-thunk';
import request from 'app/utils/request';
import expect from 'expect';
import MockAdapter from 'axios-mock-adapter';
import { push } from 'connected-react-router';
import * as types from './types';
import * as ops from './operations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(request);

describe('AUTH OPERATIONS', () => {
  const userData = {
    email: 'qwe@qwe.qw ',
    password: '123qwe'
  };

  it('AUTH LOGIN', () => {
    mock.onPost('auth/login').reply(200, userData);

    const expectedActions = [
      {
        type: types.AUTHENTICATED
      },
      {
        type: SET_USER,
        payload: userData
      },
      {
        ...push('/')
      }
    ];
    const store = mockStore({});

    return store.dispatch(ops.login()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
