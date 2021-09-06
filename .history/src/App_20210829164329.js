import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './styles/App.css'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascradsdat 1', body: 'Jsvascript - prodadadng leng' },
    { id: 2, title: 'Javasfdfds 2', body: 'Jsvascript - profsfsmming leng' },
    { id: 3, title: 'Javascrdfsdfst 3', body: 'Jsvascript - pgsgsming leng' }
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [seachQuery, setSerchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(seachQuery))
  }, [seachQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter />
      {sortedAndSerchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSerchedPosts} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }

    </div>
  );
}

export default App;
