import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
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
          <Posts />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
