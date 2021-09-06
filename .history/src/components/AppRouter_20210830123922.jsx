import React from "react";
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from '../components/PostIdPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(route => 
        <Route component={route.compnent}
          path={route.path}
          exact={route.exact}
        />
      )}
      <Redirect to="/posts" />
    </Switch>
  )
}

export default AppRouter;