import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascradsdat 1', body: 'Jsvascript - prodadadng leng' },
    { id: 2, title: 'Javasfdfds 2', body: 'Jsvascript - profsfsmming leng' },
    { id: 3, title: 'Javascrdfsdfst 3', body: 'Jsvascript - pgsgsming leng' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSerchedPosts} title="Список постов" />
    </div>
  );
}

export default App;
