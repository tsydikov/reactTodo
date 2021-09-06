import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript', body:'Jsvascript - programming leng'},
    {id:2, title:'Javascript', body:'Jsvascript - programming leng'},
    {id:3, title:'Javascript', body:'Jsvascript - programming leng'}
  ])
  return (
    <div className="App">
      <PostItem post={{id:1, title:'Javascript', body:'Jsvascript - programming leng'}} />
    </div>
  );
}

export default App;
