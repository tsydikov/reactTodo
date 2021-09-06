import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css'
import Navbar from './UI/Navbar/Navbar';

function App() {
  
  return (
    <BrowserRouter >
      <Navbar />
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
