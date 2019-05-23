import { push } from 'connected-react-router';
import request from 'app/utils/request';
import { JWT_TOKEN } from 'app/config';
import { userOperations } from 'store/modules/Platform/modules/User';
import { toLogin, loadPage, toLogout } from './actions';

export const login = userData => async (dispatch) => {
  try {
    const {
      data: { access_token, ...user }
    } = await request.post('auth/login', userData, {
      notAuthorizeHeader: true
    });
    localStorage.setItem('auth_token', access_token);
    dispatch(toLogin());
    dispatch(userOperations.setUser(user));
    dispatch(push('/'));
  } catch (err) {
    if (err.response && err.response.status === 422) {
      throw err.response.data.errors;
    } else {
      throw err;
    }
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('auth_token');
  dispatch(userOperations.removeUser());
  dispatch(toLogout());
};

export const checkJwt = () => async (dispatch) => {
  if (!JWT_TOKEN) {
    dispatch(loadPage());
    return;
  }
  try {
    const {
      data: { access_token, ...user }
    } = await request.get('auth/me');
    localStorage.setItem('auth_token', access_token);
    dispatch(toLogin());
    dispatch(userOperations.setUser(user));
    dispatch(loadPage());
  } catch (err) {
    localStorage.removeItem('auth_token');
    dispatch(loadPage());
  }
};
