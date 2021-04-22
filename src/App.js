import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home } from './pages';

export function App() {
  return (
    <Router>
      <Switch>
        <Home path={ROUTES.HOME}/>
      </Switch>
    </Router>
  );
}
