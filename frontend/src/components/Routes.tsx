import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import Home from './pages/Home/Home';
import Delivery from './pages/Delivery/Delivery';
import Chart from './pages/Map/Chart';

const Routes = (props: any) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/chart" component={Chart} />
      <Redirect from='*' to='/' />
    </Switch>
  );
}

export default Routes;