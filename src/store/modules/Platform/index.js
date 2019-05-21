import { combineReducers } from 'redux';
import Auth from './modules/Auth';
import User from './modules/User';

const PlatformReducer = combineReducers({
  Auth,
  User
});

export default PlatformReducer;
