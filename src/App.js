import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import GlobalStyles from './global/styles';

import store from './store';

import Routes from './routes';
import history from './services/history';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
