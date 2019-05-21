import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'app/App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  // Enable Webpack hot module replacement for components
  module.hot.accept('app/App', () => {
    const NewApp = require('app/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
