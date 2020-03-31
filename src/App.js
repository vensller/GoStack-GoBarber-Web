import React from 'react';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import GlobalStyles from './global/styles';

import Routes from './routes';
import history from './services/history';

const App = () => {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
};

export default App;
