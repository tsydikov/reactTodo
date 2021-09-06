import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { privatRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const isAuth = true;
  return (
    isAuth
      ? <Switch>
        {privatRoutes.map(route =>
          <Route component={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Redirect to="/posts" />
      </Switch>
      : <Switch>
        {publicRoutes.map(route =>
          <Route component={route.component}
            path={route.path}
            exact={route.exact}
          />
        )}
        <Redirect to="/login" />
      </Switch>


  )
}

export default AppRouter;