import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript 1', body:'Jsvascript - programming leng'},
    {id:2, title:'Javascript 2', body:'Jsvascript - programming leng'},
    {id:3, title:'Javascript 3', body:'Jsvascript - programming leng'}
  ])
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Список постов</h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />  
      )}
    </div>
  );
}

export default App;
