import React, { useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './styles/App.css'
import MySelect from './UI/select/Myselect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'Jsvascript - programming leng' },
    { id: 2, title: 'Javascript 2', body: 'Jsvascript - programming leng' },
    { id: 3, title: 'Javascript 3', body: 'Jsvascript - programming leng' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect 
          defaultValue="Сортировка по"
          options ={[
            {value:'title', name: 'По названию'},
            {value:'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }

    </div>
  );
}

export default App;
