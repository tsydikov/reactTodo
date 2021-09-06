import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Posts from './pages/Posts';
import './styles/App.css'
import Navbar from './UI/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
