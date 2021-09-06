import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

import './styles/App.css'
import Navbar from './UI/Navbar/Navbar';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [newPostPage, setNewPostPage] =useState({}) 

  useEffect(()=>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      newPostPage,
      setNewPostPage
    }}>
      <BrowserRouter >
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;