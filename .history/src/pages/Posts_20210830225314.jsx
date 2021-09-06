import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList'
import { NewPost } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/Loader/Loader';
import MyModal from '../UI/MyModal/MyModal';
// import Pagination from '../UI/pagination/Pagination';
// import MySelect from '../UI/select/MySelect';
import { getPagesCount } from '../utils/pages';

function Posts() {
    
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()


    const [fetchedPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchedPosts(limit, page)
    }, [page])

    const createPost = (newPost) => {
        setNewPostPage(newPost)
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    // const changePage = (page) => {
    //     setPage(page)
    // }

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
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSerchedPosts} title="Список постов" />
            <div ref={lastElement} />
            {isPostsLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
            }
            {/* <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            /> */}
        </div>
    );
}

export default Posts;
