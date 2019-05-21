import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from './reducers';

let configureStore = {};

export const history = createBrowserHistory();

if (process.env.NODE_ENV === 'production') {
  // prod
  configureStore = createStore(
    createRootReducer(history),
    {},
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );
} else {
  // dev
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  configureStore = createStore(
    createRootReducer(history),
    {},
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunkMiddleware))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules').default; // eslint-disable-line global-require
      configureStore.replaceReducer(connectRouter(history)(nextRootReducer));
    });
  }
}

const store = configureStore;
export default store;
