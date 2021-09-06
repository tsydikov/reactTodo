import React, { useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Jsvascript - programming leng' },
    { id: 2, title: 'Javascript 2', body: 'Jsvascript - programming leng' },
    { id: 3, title: 'Javascript 3', body: 'Jsvascript - programming leng' }
  ])
  

  

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
