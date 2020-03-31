import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="" exact component={SignIn} />
      <Route path="/Register" component={SignUp} />

      <Route path="/Dashboard" component={Dashboard} isPrivate />
      <Route path="/Profile" component={Profile} isPrivate />
    </Switch>
  );
}
