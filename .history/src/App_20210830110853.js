import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css'
import Navbar from './UI/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter >
      <Navbar />
      
    </BrowserRouter>
  );
}

export default App;
