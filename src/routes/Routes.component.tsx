import * as React from 'react';
import { MainLayout } from '../lib/ui/MainLayout';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PlanetsRoutes from '../app/planets/routes';

type Props = {

};

const renderRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        { PlanetsRoutes.map((route) => <Route {...route} />) }
        <Redirect from='*' to='/' />
      </Switch>
    </MainLayout>
  );
};

export const Routes = (props: Props) => {
  return (
    <Router>
      { renderRoutes() }
    </Router>
  );
};
