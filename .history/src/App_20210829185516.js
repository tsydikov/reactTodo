import React, { useEffect, useState } from 'react'
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import { usePosts } from './hooks/usePosts';
import './styles/App.css'
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading] = useState(false)

  useEffect(() => {
    fetchedPost()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchedPost() {
    setIsPostLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostLoading(false)
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
      {isPostLoading
      ?<h1>идет загрузка</h1>
      :<PostList remove={removePost} posts={sortedAndSerchedPosts} title="Список постов" />
      }
    </div>
  );
}

export default App;
