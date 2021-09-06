import React, { useState } from 'react'

import PostList from './components/PostList'
import './styles/App.css'
import MyButton from './UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Jsvascript - programming leng' },
    { id: 2, title: 'Javascript 2', body: 'Jsvascript - programming leng' },
    { id: 3, title: 'Javascript 3', body: 'Jsvascript - programming leng' }
  ])
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="text" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
