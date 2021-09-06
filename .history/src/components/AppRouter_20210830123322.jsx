import React from "react";
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts';
import PostIdPage from '../components/PostIdPage';
import { Redirect, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <PostIdPage />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/posts" />
      </Switch>
    )
}

export default AppRouter;