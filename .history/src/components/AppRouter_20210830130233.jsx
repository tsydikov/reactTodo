import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { privatRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(privatRoutes => 
        <Route component={route.component}
          path={route.path}
          exact={route.exact}
        />
      )}
      <Redirect to="/posts" />
    </Switch>
  )
}

export default AppRouter;