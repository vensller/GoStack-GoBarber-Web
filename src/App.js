import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './Config/ReactotronConfig';

import GlobalStyles from './global/styles';

import { store, persistor } from './store';

import Routes from './routes';
import history from './services/history';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
