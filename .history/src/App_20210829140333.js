import React, { useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Jsvascript - programming leng' },
    { id: 2, title: 'Javascript 2', body: 'Jsvascript - programming leng' },
    { id: 3, title: 'Javascript 3', body: 'Jsvascript - programming leng' }
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
