import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css'

function App() {
  
  return (
    <BrowserRouter >
      <div className="navbar">
      <div className="navbar__links"></div>
      </div>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </BrowserRouter>
  );
}

export default App;
