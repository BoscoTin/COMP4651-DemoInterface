import React from 'react';
import ReactDOM from 'react-dom';


import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import configureStore, { history } from './configureStore'

import App from './app.jsx'

const store = configureStore()



ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
