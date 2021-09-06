import React, { useState } from 'react'
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
  const[post, setPost] = useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPost([...posts, newPost])
    setPost({title:'', body:''})
    
  }

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={e => setPost({...post, title:e.target.value})}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          onChange={e => setPost({...post, body:e.target.value})}
          value={post.body}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
