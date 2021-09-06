import React, { useMemo, useState } from 'react'
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
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

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
      <div>
        <MyInput 
          value={seachQuery}
          onChange={e=>setSerchQuery(e.target.value)}
          placeholder="Поиск"
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={sortedPosts} title="Список постов" />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }

    </div>
  );
}

export default App;
