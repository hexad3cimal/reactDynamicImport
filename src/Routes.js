import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Authorized  from './utils/authorized'
import Dashboard from './components/view/Dashboard'
import Login from './components/view/Login'

import NotFound from './components/view/404';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Authorized(Dashboard)} />

      <Route exact path="/not-found">
        <NotFound />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
